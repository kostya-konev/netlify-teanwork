---
title: "Initiating a Ship to Customer order"
date: 2021-10-20T15:09:43+03:00
draft: false
weight: 15
---
When a customer wants their in-store purchase to be delivered to a specific address, or when merchandise is to be shipped directly from the warehouse to the customer, you can initiate item shipping from a Sales Receipt.

After you sell an item marked as `Ship to Customer`, a Sales Order is created in CHQ. Once the Sales Order is processed, a Ship Memo is assigned to the company location that you've indicated in the **Fill From** field (or, potentially, another location based on item availability).

To initiate item shipping from a sale, in POS PRO:

1. On the **Home Screen**, tap **New Sale**.

2. In the **Sales Receipt** area, add sale items and a customer to the receipt.
{{% notice note %}}
Adding a customer is required for shipping. If a customer is not added, the **Ship** tab of the **[item name] - edit** dialog will be blank.
{{% /notice %}}
3. On the **Cart** tab, tap the sale item that needs to be shipped. On tapping, the **Ship** tab of the **[item name] - edit** dialog opens.

4. The **Ship Type** pop-over dialog will automatically display for the **Ship Type** field. Tap **Ship to Customer**:
{{% gimg src="6.34 QRG/634_qrg_1.jpg" width="700px"%}} 

5. In the **Ship To Address** dialog that opens, select the address the item must be shipped to:
{{% gimg src="V6.41 QRG/6.41QRG_7.jpg" width="700px"%}} 
Alternatively, tap **Add New Address** at the bottom to add a new address record.  

6. Back on the **Ship** tab, define the following fields:

    - **Ship Method**: shipping method
    - **Fill From**: company location that is to fill the order
{{% notice tip %}}
To check item availability across company locations, at the top-left, tap **Availability**.
{{% /notice %}}
    - **Lock Fill From**: if turned on, the **Fill From** location can't be changed by Order Fill Logic. This field may be hidden depending on your custom settings

7. Optionally, to apply the same shipment details to all items in the Cart, tap **Apply To All Ship Items**:
{{% gimg src="V6.41 QRG/641QRG_8.jpg" width="700px"%}} 

8. Tap **Done** in the upper right corner.
{{% notice tip %}}
Back on the **Cart** tab, to quickly apply a previously configured shipping address to an item:

1. Swipe left the required item and then tap **Ship Item**.
2. In the **Ship Item** dialog that appears, tap the required address.
{{% /notice %}}

9. Back in the **Sales Receipt** area, tap **PAY** at the bottom-right.

10. Accept the required payment and then tap **FINALIZE**.

