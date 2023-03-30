---
title: "Initiating a Store Pick Up order"
date: 2021-10-20T16:21:17+03:00
draft: false
weight: 16
---
When a customer wants to pick up items in a store, you can initiate a Store Pick Up order from a Sales Receipt.

After you sell an item marked as `Store Pick Up`, a Sales Order is created in CHQ. Once the Sales Order is processed, a Ship Memo is assigned to the company location that you've indicated in the **Pick Up Location** field (or, potentially, another location based on item availability).
{{% notice note %}}
To be available as a pickup location, a store must have the **available for store pick up** checkbox selected in CHQ under `settings > location settings > locations / location settings > [selected location] > details >` the `general` setting.
{{% /notice %}}
To initiate a Store Pick Up, in POS PRO:

1. On the **Home Screen**, tap **New Sale**.

2. In the **Sales Receipt** area, add sale items and a customer to the receipt.

3. On the **Cart** tab, tap the sale item that is to be picked up. On tapping, the **Ship** tab of the **[item name] - edit** dialog opens.

5. The **Ship Type** pop-over dialog will automatically display for the **Ship Type** field. Tap **Store Pick Up**:
{{% gimg src="V6.41 QRG/641QRG_9.jpg" width="700px"%}} 
{{% notice tip %}}
To check item availability across company locations, at the top-left, tap **Availability**.
{{% /notice %}}
6. In the **Select Location** dialog that appears, select the required pickup location. Use the **Search** field to search by location code or name:
{{% gimg src="V6.41 QRG/641QRG_10.jpg" width="700px"%}} 

7. Back in the **[item name] - edit dialog**, in the **PICK UP CUSTOMER** section, fill out information on the person who will pick up the order. Note that **First Name**, **Last Name**, **Phone**, and **Email** are required.

8. Optionally, to apply the same pickup details to all items in the Cart, at the bottom-right, tap **Apply To All Ship Items**.

9. In the upper right corner, tap **Done**.

10. In the **Sales Receipt** area, tap **PAY** at the bottom-right.

9. Accept the required payment and then tap **FINALIZE**.


