---
title: "Outgoing: Ship to Customer"
date: 2021-08-16
draft: false
weight: 9
---

A Ship to Customer (STC) Ship Memo requests shipment of items from your store/warehouse to a customer's address. The Ship Memo specifies items and quantity to ship as well as other details. 

Ship Memos that have been assigned to your location appear under `Shipments > Outgoing`. 

To process an STC Ship Memo, in POS PRO:

1. On the Home Screen, tap **Shipments**. Depending on your custom settings, the button can be located in the navigation bar at the bottom or in the **More** menu.

2. On the **Outgoing** tab, find the required Ship Memo and tap to open it.

3. In the **Outgoing – Ship Memo** area that opens, at the top, tap **Items**. 
{{% notice tip %}}
On the **Items** tab, you can see the list of items that need to be shipped. For each item, the following columns are available:

- **Memo Qty**: quantity requested for shipping. Not editable
- **Ship Qty**: quantity your location is shipping. Editable
- **Rej Qty**: quantity your location is unable to ship (for example, the requested item is damaged). Editable

To finalize the Ship Memo, you need to allocate each item quantity to **Ship Qty**, **Rej Qty**, or a combination of both. 
{{% /notice %}}

4. Change the status of items you are shipping to `Ship`. You can do so in one of the following ways:
{{% gimg src="V6.41 QRG/641QRG_3.jpg" width="700px"%}}
    - To quickly set all items to `Ship`, at the top-right, tap **Ship All** {{% inum "A" %}}.  
    - To set an item line to `Ship`, swipe that item left and then tap **Ship** {{% inum "B" %}}.  
    - To increment an item's **Ship Qty** by `1`, scan that item with your RFID reader or search manually via the **Search** field.  
    - To set a specific item quantity to `Ship` (for example, 2 out of 3 requested units), swipe that item left and then tap **Edit** {{% inum "C" %}}. In the dialog that opens, define the **Shipped Quantity** field.  

5. If you cannot ship some items, change their status to `Rejected`. You can do so in one of the following ways:

    - To quickly set all items to `Rejected`, at the top-right, tap **Reject All**. In the pop-up menu that appears, select a reject reason. 
{{% notice warning %}}
Rejecting all items removes the Ship Memo from your device.
{{% /notice %}}
    - To set an item line to `Rejected`, swipe that item left and then tap **Reject**. In the pop-up menu that appears, select a reject reason. 
    - To set a specific item quantity to `Rejected`, swipe that item left and then tap **Edit**. In the dialog that opens, define the **Rejected Quantity** and **Rejected Reason** fields.

6. At the top, tap the **Cartons** tab. On this tab, you can distribute items between multiple cartons or pack all in a single carton. 

7. On the **Cartons** tab: 

    - To add more than one carton, at the top-right, tap **Carton 1**. In the dropdown menu that opens, tap **Add Carton** as many times as many cartons you want to add. 
    - At the top-right, tap **Carton [number]** {{% inum "A" %}} and select the carton you want to fill. Then, in the items grid below, tap **Pack** next to the items you want to pack in the selected carton {{% inum "B" %}}:
    {{% gimg src="V6.38 QRG/638_qrg_1.png" width="700px" %}}
    Repeat for all added cartons.

8. At the top-right, tap the **Shipment** tab. On this tab, you can define shipment details for each carton.

9. On the **Shipment** tab, under **SELECT CARTON**, tap **Carton [number]**. In the dialog that opens:

    - If **Delivery Method** is `ShippyPro`, define carton weight and dimensions and then tap **Get Label**. Tap **Done**.
    - If **Delivery Method** is `Manual Ship`, make sure ship method and tracking number are defined. Tap **Done**.

Back on the **Shipment** tab, repeat step 9 for all cartons.

6. To configure printing settings for shipment documents, in the top-right corner, tap **Print**. Additionally, to automatically print configured documents when the Ship Memo is finalized, at the bottom, turn the **Print on Save** switch on.

7. Tap **SAVE**.