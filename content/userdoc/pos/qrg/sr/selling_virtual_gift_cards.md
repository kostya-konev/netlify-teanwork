---
title: "Selling Virtual Gift Cards"
date: 2021-11-26T11:35:51+02:00
draft: false
weight: 12
---
POS PRO allows for selling a Virtual Gift Card (VGC) and sending it to the designated email address on a chosen date.

To sell a Virtual Gift Card:

1. On the **Home Screen**, tap **New Sale**.

2. Optionally, on the **Customer** tab, add a customer record.
 {{% notice note %}}
 Depending on your custom settings, adding a customer may be required for VGC purchases. To configure that, under `chq > settings > company settings > countries / regions > [selected country/region] > general >` the `gift card defaults` section, define the **require customer on receipt for emailing options** checkbox.
 {{% /notice %}}
2. In the **Sales Receipt** area, add the VGC by doing one of the following:

    - at the top-right {{% inum "1" %}} or in the **More** menu {{% inum "2" %}} (depending on your custom settings), tap **VGC Purchase**
{{% gimg src="V6.35 Mob Rel Guide/6.35_posrelguide_6.jpg" width="700px"%}}
    - via the **Item Search** field, search for the required VGC

3. In the **Virtual Gift Card** dialog that opens, define the following:
    - **Amount**: the value of the VGC
    - **This is a gift**: turn the switch on if the purchased VGC is a present and giftee related information must be recorded. Enabling the switch makes the **SEND VIRTUAL GIFT CARD TO**, **SEND DATE**, and **GIFT MESSAGE** sections available
    - **SEND VIRTUAL GIFT CARD TO**: enter the email address and name of the person who is to receive the VGC via email
    - **SEND NOTIFICATION TO**: enter the email address and name of the person who is to receive a confirmation of the VGC delivery. This may be required if the customer wishes to receive a notification when the VGC is delivered to the giftee
    - **Send Date / Time**: the date and time when the VGC is to be sent. When `Immediate` is selected, the email is sent on sale finalization
    - **GIFT MESSAGE**: additional text message that the giftee will see in the email 
 {{% notice note %}}
 If your system is configured to always send the VGC to the buyer, in the **Virtual Gift Card** dialog, the email address and name of the addressee are automatically filled out. In that case, simply define the **Amount** field.
{{% /notice %}}
4. Tap **Done** in the upper right corner. 

5. Back in the **Sales Receipt** area, tap **FINALIZE** at the bottom-right.  
