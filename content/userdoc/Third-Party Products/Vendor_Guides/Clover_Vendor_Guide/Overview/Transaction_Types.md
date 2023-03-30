---
title: "Transaction Types"
date: 2022-01-31T12:23:00-05:00
draft: false
weight: 2
---
<!-- weight: ffss; ff=>1st letter's nbr/ss=>2nd letter's nbr (w/leading zeros) -->

{{% notice warning %}}
This vendor guide is currently under construction and its contents should not be used until further notice.
{{% /notice %}}

This topic will cover each transaction type or function supported by Teamwork and the equivalent Clover function.

- [Payment transactions: Basic](#Clover-Overview-PayInt-Transactions-Basic)  
- [Payment transactions: Additional](#Clover-Overview-PayInt-Transactions-Additional)  
- [Payment transactions: Not supported](#Clover-Overview-PayInt-Transactions-NotSupported)  
- [Payment transactions: Closeout](#Clover-Overview-PayInt-Transactions-Closeout)  
- [Handling challenges: Offline payments](#Clover-Overview-PayInt-HandlingChallenges-OfflinePayments)  
- [Handling challenges: Duplicate payments](#Clover-Overview-PayInt-HandlingChallenges-DuplicatePayments)  
- [Printing](#Clover-Overview-PayInt-Printing)  
- [Signatures](#Clover-Overview-PayInt-Signatures)

---

## **Payment transactions** {#Clover-Overview-PayInt-Transactions}

### **Basic payment transactions** {#Clover-Overview-PayInt-Transactions-Basic}

|**Teamwork POS PRO Transaction**|***CloverConnector***|***CloverConnector*** **Response**|**Notes**|
|----|----|----|----|
|Sale|sale|onSaleRequest| |
|Refund|refundPayment|onRefundPaymentResponse| |
|Credit Card Credit|manualRefund|onManualRefundResponse| |
|Void|voidPayment|onVoidPaymentResponse|Voids are only available for 25 minutes after the initial payment.|

The link to the full *CloverConnector* API Library is:  
* [*CloverConnector* Reference](https://clover.github.io/remote-pay-ios/3.0.1/docs/index.html)

### **Additional transactions** {#Clover-Overview-PayInt-Transactions-Additional}

|**Teamwork POS PRO Function**|***CloverConnector*** **Request**|***CloverConnector*** **Response**|**Notes**|
|----|----|----|----|
|Check Last Transaction|retrievePayment|onRetrievePaymentResponse|Retrieve payment by external id (Teamwork's id).|
|Check Device Status|retrieveDeviceStatus|onRetrieveDeviceStatusResponse|To check the connection and status of the Clover device.|

The link to further documentation regarding “Check Last Transaction” and similar functionality is:  
* [Payment Reconciliation and Recovery](https://docs.clover.com/docs/payment-reconciliation-and-recovery)

### **Transactions not supported** {#Clover-Overview-PayInt-Transactions-NotSupported}

Currently, the following transactions are not supported by Clover:  
1. Keyed Authorization (manually entering the credit card information).  
2. Save Card On File (saving credit card information in the customer’s file for reuse).

### **Closeout** {#Clover-Overview-PayInt-Transactions-Closeout}

Clover supports a *Closeout* function to initiate the process of batching and settling payments. Teamwork's approach will be to require that the merchant account to *auto-closeout* at the end of each day. Teamwork does not need to support Clover’s *Closeout* function in POS PRO.

---

## **Handling challenges** {#Clover-Overview-PayInt-HandlingChallenges}

There are two scenarios where the Clover device may initiate a call to POS PRO which will need to be handled. These scenarios are *offline payments* and *duplicate payments*.

The link to the related portion of the Clover documentation is:

* [Working With Challenges](https://docs.clover.com/docs/working-with-challenges)

### **Offline payments** {#Clover-Overview-PayInt-HandlingChallenges-OfflinePayments}

When the Clover device receives a payment request, but cannot connect to the payment gateway, it considers this to be an “Offline” transaction. The Clover device will offer to store the payment information, and submit it when the connection to the gateway is re-established. The request to store and forward the payment information is presented to POS PRO as an “Offline Challenge.”

POS PRO should ***reject*** all offline challenges, as Teamwork doesn’t support *store and forward* functionality at this time.

### **Duplicate payments** {#Clover-Overview-PayInt-HandlingChallenges-DuplicatePayments}

If the Clover device suspects that a payment may be a duplicate payment (based on the card number, payment amount, and time), the information about the payment will be presented to POS PRO as a “Duplicate Challenge.”

In POS PRO, Teamwork will ***accept*** all “Duplicate Challenges”, and we will rely on our own *Check Last Transaction*, *App Recovery*, and *End of Day* processes to detect and void duplicate payments.

Alternately, in lieu of accepting all “Duplicate Challenges”, we can simply disable duplicate checking on each transaction. This option is described in the Clover documentation:  
* [Per-Transaction Settings](https://docs.clover.com/docs/using-per-transaction-settings#duplicate-checking)

---

## **Printing** {#Clover-Overview-PayInt-Printing}

The Clover device attempts to print a receipt after each transaction. In order to use Teamwork's own print engine, this behavior needs to be overriden ***on each transaction***.

The links to the related portions of the Clover document are:  
* [Creating custom receipts with *CloverConnector*](https://docs.clover.com/docs/creating-custom-receipts)
* [Per-Transaction Settings](https://docs.clover.com/docs/using-per-transaction-settings#duplicate-checking)

The Clover printer to be used by a POS PRO iPad cannot be pre-configured in CHQ. It must be manually configured (its IP address set) on *each* iPad.

{{% notice warning %}}
The QR code provided by Clover in their documentation doesn’t work correctly. Teamwork will have to provide the proper URL to the client.
{{% /notice %}}

---

## **Signatures** {#Clover-Overview-PayInt-Signatures}

By default, the Clover device will accept all signatures. POS PRO doesn’t need to perform any acceptance or rejection of signatures and does not need to support the retrieval of a signature for printing at this time.
