---
title: "How to set up Clover"
date: 2022-02-03T11:59:00-05:00
draft: false
weight: 1
---

{{% notice warning %}}
This vendor guide is currently under construction and its contents should not be used until further notice.
{{% /notice %}}

This topic describes how to set up a Clover integration for use.

- [Prerequisites](#Clover-HowTo-SetupClover-Prerequisites)  
- [Preparing CHQ Settings](#Clover-HowTo-SetupClover-PreparingChqSettings)  
- [Configuring the Clover device in CHQ](#Clover-HowTo-SetupClover-ConfiguringCloverDevInChq)  
- [Creating a *Clover* payment method](#Clover-HowTo-SetupClover-PreparingChq-CreateACloverPayMethod)  
- [Preparing a Clover device](#Clover-HowTo-SetupClover-PreparingCloverDev)  
- [Pairing Clover and POS Pro](#Clover-HowTo-SetupClover-ConnectingCloverDev-PairingCloverAndPos)  
- [Configuring the Clover device](#Clover-HowTo-SetupClover-ConnectingCloverDev-ConfiguringCloverDev)  
- [Obtaining the TEST certificate on the iPad](#Clover-HowTo-SetupClover-ObtainingTestCert)  
- [Configuring POS Pro on the iPad](#Clover-HowTo-SetupClover-ConfigingPosOnIPad)  
- [Connecting the Clover device with the iPad](#Clover-HowTo-SetupClover-ConnectingCloverToIPad)  
- [Security](#Clover-HowTo-SetupClover-Security)  
- [Test environment](#Clover-HowTo-SetupClover-TestEnvironment)

---

## **Prerequisites** {#Clover-HowTo-SetupClover-Prerequisites}

The following setup actions must be taken to complete a connection between POS Pro and Clover:  

1. Create a Clover developer account.  
2. Obtain a Clover dev kit (physical device) and activate it via the **Developer Dashboard**.  
3. Use the **Developer Dashboard** to create a *Remote App ID* for the POS Pro app.  
4. Install the **Secure Network Pay Display** app on the Clover dev kit device.  
5. Install **Xcode** V9 or later and **CocoaPods** to the dev environment.

---

## **Preparing CHQ**

### **Preparing CHQ Settings** {#Clover-HowTo-SetupClover-PreparingChqSettings}

There are internal settings which must be set appropriately in order for CHQ to interact with Clover. These settings are:  
* Clover.ApplicationId  
* Clover.ApplicationName

These settings must be properly set by the Development Team. The default values for these settings are:  
* **Clover.ApplicationId**: “NWT7Q73RC1WTE.4PR91M6G1VP12”  
* **Clover.ApplicationName**: “Teamwork POS Pro”

### **Configuring the Clover device in CHQ** {#Clover-HowTo-SetupClover-ConfiguringCloverDevInChq}

To prepare CHQ for interacting with Clover you will need to navigate to the **chq** > **services** > **device controller** pane and click the **list** button to display the list of devices.

{{% gimg src="VG_Clover_V01.00/SetupClover_01.jpg" title="CHQ: Device Controller #1" width="900px" %}}

Click the **new** button to create a new Clover device or the **view/edit** button to update an existent Clover device configuration, as needed. This opens the **new/edit** device dialog box where the Clover device configuration can be set.

{{% gimg src="VG_Clover_V01.00/SetupClover_02.jpg" title="CHQ: Device Controller #2" width="900px" %}}

Select “Clover” in the **payment terminal type** combobox. This will enable the **IP address** and **port** fields where the IP address and port number of the Clover payment terminal can be entered. After entering/updating the values click the **save** button to save the changes.

{{% gimg src="VG_Clover_V01.00/SetupClover_03.jpg" title="CHQ: Edit Device App Settings" width="900px" %}}

{{% notice note %}}
Changes made in the **payment terminal** area of the **app settings** pane of the **new/edit device** dialog in CHQ are automatically synchronized with the POS Pro app and vice versa.
{{% /notice %}}

### **Creating a *Clover* payment method** {#Clover-HowTo-SetupClover-PreparingChq-CreateACloverPayMethod}

You will need to create a Clover payment method by navigating to **chq** > **settings** > **sales** > **payment methods** and then clicking the **new** button to open the **new payment method** dialog box. In the **new payment method** dialog select “credit card” in the **payment type** combobox and click the **ok** button to open the **Clover configuration** dialog box.

{{% gimg src="VG_Clover_V01.00/SetupClover_04.jpg" title="CHQ: new payment method dialog" width="700px" %}}

{{% gimg src="VG_Clover_V01.00/SetupClover_05.jpg" title="CHQ: Clover dialog" width="400px" %}}

The information needed to configure a Clover payment method should be obtained from the appropriate CSM.

After the *Clover payment method* has been created you will select that payment method from the grid in the **payment methods** pane and click the **location settings** button to open the **location settings** dialog box.

{{% gimg src="VG_Clover_V01.00/SetupClover_06.jpg" title="CHQ: Clover location settings" width="600px" %}}

At this point the *Clover payment method* in has been created in CHQ.

---

## **Preparing a Clover device** {#Clover-HowTo-SetupClover-PreparingCloverDev}

The Clover **Network Pay Display** app must be manually installed on the Clover device before it can be used. The app isn’t automatically installed on the device.

---

## **Connecting to the Clover device** {#Clover-HowTo-SetupClover-ConnectingCloverDev}

### **Pairing Clover and POS Pro** {#Clover-HowTo-SetupClover-ConnectingCloverDev-PairingCloverAndPos}

The Clover Mini 2 device will only accept transaction requests from a device (a POS Pro iPad) to which it has been paired. Once successfully paired, Clover will send to POS Pro a *pairingAuthToken* which POS Pro may use for the next connection.

The POS Pro and Clover integration is a Clover *Payment-As-A-Service Semi-Integration* using Clover’s **Network Pay Display** app (see **Payments-as-a-Service Semi-Integration** in the **Overview** section of this guide for further information).

Pairing the Clover device with POS Pro involves the following activities.

### **Configuring the Clover device** {#Clover-HowTo-SetupClover-ConnectingCloverDev-ConfiguringCloverDev}

On the Clover device navigate to **More Tools** > **Network Pay Display**.

{{% gimg src="VG_Clover_V01.00/SetupClover_07.jpg" title="Clover device server" width="600px" %}}

When opening the **Network Pay Display** you will have to do the initial configuration.

Open the **Network Pay Display** app.

Tap the menu icon (the three bars on the top left corner of the screen) and then tap **Settings**.

The **Clover Device Server** settings appear.

Select the **Server is secured**, **Enable ping**, **Enable Pairing Screen**, and **Enable Development Certificate** (for testing purposes) checkboxes and then tap the **Configure and Restart Server** button.

After configuring the server tap the **back** button to return to the main screen.

### **Obtaining the TEST certificate on the iPad** {#Clover-HowTo-SetupClover-ObtainingTestCert}

On the iPad you will go to the below link to download the TEST certificate:  
* https://www.clover.com/v2/env_device_ca_certificate.der

Tap the link and a pop up will display on your iPad. Tap **allow**.

Navigate to **Settings** > **Profile Downloaded** > **Install**.

{{% gimg src="VG_Clover_V01.00/SetupClover_08.jpg" title="iPad Settings" width="700px" %}}

{{% gimg src="VG_Clover_V01.00/SetupClover_09.jpg" title="iPad profile install done" width="700px" %}}

Then you will have to trust the certificate on the iPad by navigating to **Settings** > **General** > **About** > **Certificate Trust Settings** and setting the **Clover Certificate Root** toggle *on*.

{{% gimg src="VG_Clover_V01.00/SetupClover_10.jpg" title="Certificate trust settings" width="250px" %}}

### **Configuring POS Pro on the iPad** {#Clover-HowTo-SetupClover-ConfigingPosOnIPad}

Navigate to the **... More** > **Settings** > **Payment Terminals** pane and tap the **Edit Payment Terminals** button to open the **Payment Terminal** dialog box.

{{% gimg src="VG_Clover_V01.00/SetupClover_11.jpg" title="Good Morning" width="500px" %}}

{{% gimg src="VG_Clover_V01.00/SetupClover_12.jpg" title="Select Settings" width="500px" %}}

{{% gimg src="VG_Clover_V01.00/SetupClover_13.jpg" title="Edit payment terminals" width="500px" %}}

In the **Payment Terminals** dialog tap **Payment Terminal Type** and select “Clover” from the list and then tap **Done**.

{{% gimg src="VG_Clover_V01.00/SetupClover_14.jpg" title="Select payment terminal type" width="500px" %}}

{{% gimg src="VG_Clover_V01.00/SetupClover_15.jpg" title="Payment terminal type done" width="500px" %}}

### **Connecting the Clover device with the iPad** {#Clover-HowTo-SetupClover-ConnectingCloverToIPad}

{{% notice warning %}}
Once you have installed the certificate on the iPad and configured the **Network Pay Display** app you will need both devices side by side with POS Pro open on the iPad and the **Network Pay Display** app open on the Clover device.
{{% /notice %}}

Open the **Network Pay Display** and tap the **initiate pairing button**.

{{% gimg src="VG_Clover_V01.00/SetupClover_16.jpg" title="Network pay display" width="500px" %}}

The Clover device will prompt to enter an Admin code (this is set up in Clover) and then begin the pairing.

{{% gimg src="VG_Clover_V01.00/SetupClover_17.jpg" title="Enter manage passcode" width="500px" %}}

{{% gimg src="VG_Clover_V01.00/SetupClover_18.jpg" title="Pairing code" width="500px" %}}

After the two devices are paired the screen with the client logo will appear and you are ready to run sales.

### **Security** {#Clover-HowTo-SetupClover-Security}

Clover supports both secure and unsecure WebSocket connections to the device.

{{% notice warning %}}
Unsecured connections may be used for ***development and testing only***. A secured connection ***must be*** used for production.
{{% /notice %}}

Instructions for configuring and initializing the connection, along with how to install the certificate and make a sample sales request call, can be found in the “On iOS” portion of the “Using Clover Connector” section in the Clover documentation (On iOS).

### **Test environment** {#Clover-HowTo-SetupClover-TestEnvironment}

Teamwork has procured three separate physical Clover devices (dev kits) for testing. Two are available in the Kharkiv office, and one is located in the Clearwater office. When each Clover dev kit device is activated and linked to a dev account, the device automatically connects only to the Clover sandbox environment.

Each dev kit also comes with a test card that can be used to simulate card present transactions.

{{% notice warning %}}
Prior to launching in production Teamwork will need to submit a video of our integrated payment flows to Clover for review and approval. See the Clover Development Portal.
{{% /notice %}}
