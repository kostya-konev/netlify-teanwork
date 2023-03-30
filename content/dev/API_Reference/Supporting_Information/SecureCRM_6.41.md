---
title: "Secure CRM [6.41]"
date: 2022-02-21T11:57:00-05:00
draft: false
weight: 19
---

<!-- begin comment block (when active)-------------------- -->
{{% notice warning %}}
The API Reference is currently under construction and its contents should not be used until further notice.
{{% /notice %}}

This document provides background information on Teamwork's Secure CRM (Customer Relations Manager).

- [The Universal Customer](#UniversalCustomer)
- [E-Commerce](#ECommerce)
- [Secure CRM characteristics](#SecureCharacteristics)
- [Characteristics: Micro Services](#MicroServices)
- [Characteristics: Customer Data Security](#CustomerDataSecurity})
- [Characteristics: Tokenization](#Tokenization)
- [Characteristics: Registered Customers (RCTOKEN)](#RCTOKEN)
- [Characteristics: E-Commerce Registered Checkouts](#RegisteredCheckouts)
- [Characteristics: Lite Customers](#LiteCustomer)
- [Characteristics: LCTOKENs](#LCTOKEN)
- [Characteristics: Guest Checkouts](#GuestCheckouts)
- [Characteristics: Lite Customer Encryption Engineering](#EncryptionEngineering)
- [Characteristics: Automatically Linking an LCTOKEN to an RCTOKEN](#AutolinkLCTOKENandRCTOKEN)
- [Characteristics: Lite Customer Linking - Admin Function](#LinkAdminFunction)
- [Characteristics: Merge Links](#MergeLinks)

---
<!-- end comment block (when active)-------------------- -->

## The Universal Customer {#UniversalCustomer}

The **UNIVERSAL CUSTOMER** is a core concept of Teamwork.  Universal Customer is the capability to recognize, engage, and service the customer regardless of the channel they use for the interaction.  

This is accomplished by maintaining a **central cloud repository** to securely keep and provide customer data. It is a single source or master of customer data; serving **ALL channels** including the web, the stores, and individual mobile devices. This is an ***essential*** *function for today’s OMNI channel retailer*.

GDPR (General Data Protection Regulation) compliance is a highly important consideration for customer management.   Historically, Teamwork has provided a very robust CRM service that also includes a rich set of loyalty and reward services. Therefore, in response to the ever-increasing demands for customer security and privacy, Teamwork is ***evolving*** its CRM platform, which we call **Secure CRM**.

Secure CRM brings a number of benefits for security, functionality and minimizing duplication of customer profiles.  These include:  
- Storing customer data only in a highly secure database in the cloud.  
- Encrypting personal data when **(a)** forced to record customer data offline, or **(b)** processing transported customer data (fopr example, an Ecommerce web order with custom name and address).  
- Purging transported customer data at the first opportunity.  
- Using tokenization to reference customer data on sales and order transactions, much like payment cards.

We want our clients to have the **very best** solution for managing customer data **securely** and meeting all demands of governmental regulations without inconvenience for staff.    

<br>

## E-Commerce {#ECommerce}

For the EC (E-Commerce) platform, Secure CRM will be provided through an API that the Site Developer can easily utilize. Once a customer registers online or in-store, the customer will be accessible across ALL channels of commerce.

<br>

## Secure CRM characteristics {#SecureCharacteristics}

### Micro Services {#MicroServices}

Secure CRM is optimized using micro services based on Kubernetes.  It will support very heavy loads and meets high security standards.

### Customer Data Security {#CustomerDataSecurity}

Secure CRM supports GDPR (General Data Protection Regulation) requirements. Through tokenization customer data is located in *one place*. This makes it easy to **safeguard**, **export**, and **use** customer data, as well as ensuring **complete deletion** (when required) of all instances of customer data.

### Tokenization / Tokens {#Tokenization}

A *Token* is a unique identifier (a code or value) that represents data, instead of the data itself. Tokenization is the methodology to temporarily and securely retrieve confidential data (that is actually stored securely elsewhere) and only when it is really required, for display or processing.

Customer data is represented by a *TOKEN* on a transactional level (sales receipt or sales order). The sales receipt or sales order never permanently contains customer data. Instead, a *Token* references the data which is securely stored elsewhere. When viewing a sales receipt or order or customer profile, an application can use the token to retrieve and display the customer data for a specific event (for example, making a sale).

### Registered Customers – Primary IDs - (RCTOKEN) {#RCTOKEN}

Customer profiles can be registered in Secure CRM. It is required that the *Registered Customer* have one or more of the three primary ids and any primary id must be unique across the entire Secure CRM database.  The possible primary ids are:  
- email address (**email1**)  
- cell phone (**phone1**)  
- member code

{{% notice note %}}
Email is by far the most common primary ID and is basically mandatory for e-commerce.
{{% /notice %}}

When a Customer profile is *Registered* in Secure CRM, a *Registered Customer Token* (“**RCTOKEN**”) is assigned.  When a registered customer is added, or searched and found at POS, the **RCTOKEN** is recorded on any a sales receipt or sales order made at POS. This RCTOKEN ***links*** the transaction to the *Registered Customer* profile in Secure CRM. No customer data will ever be stored on a sale receipt, or sales order (web or send sale) in POS or CHQ, only a token.

### E-Commerce Registered Checkouts {#RegisteredCheckouts}

When a customer performs a *Registered Checkout*, the EC platform can generate an order with an RCTOKEN through integration. The EC integration uses “Email Primary ID” (which must be unique on the EC platform) to link with a *Registered Customer Email Primary ID* (which will also be unique in Secure CRM with a unique RCTOKEN). Upon receiving the web order, CHQ OMS can use the RCTOKEN to link the order and all resulting transactions to that Registered Customer profile.

### Lite Customer Records - Offline Creation – Guest Checkout Creation (LCTOKEN) {#LiteCustomer}

Secure CRM uses a *LITE CUSTOMER RECORD* to handle guest checkouts and offline POS sales.  
- When adding a customer record *OFFLINE*, there is no access to Secure CRM. Therefore, one cannot register or search for a registered customer profile and retrieve an RCTOKEN.  
- When making an EC *Guest Checkout*, the customer is not logged in to the EC customer module and cannot obtain an RCTOKEN.

To solve these two problems, we have a LITE CUSTOMER record. 

The Lite Customer record holds very basic customer data. It is created for *THAT SPECIFIC TRANSACTION* (*Guest Checkout* or *Offline*) and is a “Use-Once” record. In other words a Lite Customer record will never be used again for another transaction.

Later, using a primary ID (email, for example) the LCTOKEN record can be linked to an RCTOKEN record, thereby successfully linking that transaction to the correct Registered Customer.  

### LCTOKENs {#LCTOKEN}

The general rule is Customer *Personal Identifiable Information* (PII) is **NEVER** permanently stored in transaction.

The **temporary exception** is an *offline sale/return* or a *guest checkout*. These types of transactions temporarily store Lite Customer data in an encrypted form with the transactional document.

When a *guest checkout* or an *offline sale or return* is performed and processed the Lite Customer data is decrypted and posted in Secure CRM in exchange for an LCTOKEN.  The LCTOKEN is added to the transaction and any Lite Customer data is **REMOVED** from the transaction or any other place once it has been safely stored is Secure CRM.

The encrypted Lite Customer data will remain on the transaction only until it arrives and is processed by CHQ.  On arrival to CHQ, the Lite Customer data will be decrypted and recorded in Secure CRM as a Lite Customer Record (not as a Registered Customer) and Secure CRM will assign a Lite Customer Token (“LCTOKEN”). The encrypted data on the transaction will be removed and replaced with the LCTOKEN. 

The LCTOKEN thereafter links the transaction to a Lite Customer record.

- *POS ONLINE* or *EC REGISTERED* transactions get **RCTOKENs**.  
- *POS OFFLINE* or *EC Guest Checkout* transactions get **LCTOKENs**.

### E-Commerce Customer Data - Guest Checkouts {#GuestCheckouts}

When a customer performs a *Guest Checkout* on the web (not a registered checkout) the web site will generate an order containing this basic customer data. Ideally, this data would be encrypted and when processed by Teamwork OMS, the same *offline* process will be applied. CHQ processing will decrypt the data (if encrypted) and create a *Lite Customer* record in Secure CRM.  The encrypted data on the web order will be removed and replaced with the LCTOKEN.  The LCTOKEN thereafter links the transaction to a *Lite Customer* record.

### Lite Customer Encryption Engineering {#EncryptionEngineering}

*Asymmetric Key Encryption* will be used for encrypting *Offline Lite Customer* data from POS to CHQ. 

Some e-commerce platforms could potentially use *Asymmetric Key Encryption* also. Otherwise EComm will send decrypted *Lite Customer* Data for *Guest Checkouts* which will be stripped out when processed at CHQ and replaced with an LCTOKEN.

### Automatically Linking an LCTOKEN to an RCTOKEN {#AutolinkLCTOKENandRCTOKEN}

It can be desirable to **link** a *Lite Customer* record to a *Registered Customer* record. This action will join the sales history of *Lite Customer* record (for example, a web *Guest Checkout*) to a *Registered Customer*. This can be accomplished by comparing the **Primary ID** email address. Through settings in CHQ we will provide the option to automatically link a *Lite Customer* record to a full *Registered Customer* record based on a **Primary ID**. As a security measure a *Registered Customer Notification* email should be sent to the RCTOKEN customer stating that “An offline or guest checkout transaction was linked to your registered account”.

A *Lite Customer* record is very basic customer data. For example, for *Web Guest* checkouts the data is usually an Email, First Name, Last Name, Billing Address, and Shipping Address.

The main purpose of **linking** an LCTOKEN to an RCTOKEN is to join the guest sale or offline sale to the Registered Customer History.

Though even after being linked, both records and tokens are preserved so the process **CAN BE REVERSED** (the link can be undone) just in case somehow the link was a mistake or not desired.

{{% notice note %}}
Optionally, the *Registered Customer* may wish to copy the shipping address from the *Lite* record to their full *Registered Customer* record, so it appears as an option for the *Registered Customer* for the next time they do a registered checkout or ship from store.
{{% /notice %}}

### Lite Customer Linking - Admin Function {#LinkAdminFunction}

In the future there could be a **Link Customer** function in Secure CRM.  When selected, Secure CRM locates each LCTOKEN that is not linked to an RCTOKEN.

Step 1: A check is made to see if there is a *Lite Record* **Primary ID** that matches a *Registered Customer* **Primary ID**.

Step 2: For each match found, the two records (LC and RC) are added to a list display.

Step 3A: The CRM Administrator reviews the list and can **approve** linking the LC and RC.

Step 3B: The Administrator can also **disapprove** the link and any later *linking* analysis will still show the pair but default to DISAPPROVED with who, date, and time.

### Merge Links {#MergeLinks}

*Registered Customer* records can be ***merged*** if duplicates are discovered by linking one RCTOKEN to an another RCTOKEN or LCTOKEN to another. That joins the history of one customer with another.  In reality, these are linked records and only one RCTOKEN remains ***active***.

{{% notice note %}}
It is also possible to unlink two records in case to records are merged accidentally.
{{% /notice %}}
