---
title: "Outgoing: Store Pick Up"
date: 2021-08-16
draft: false
weight: 10
---

A Store Pickup Ship Memo instructs a store to prepare an order that a customer will pick up. Ship Memos that have been assigned to your location appear under `Shipments > Outgoing` in the `Prepare Pick Up` status. 

To prepare a customer's order for pickup, in POS PRO:

1. On the Home Screen, tap **Shipments**. Depending on your custom settings, the button can be located in the navigation bar at the bottom or in the **More** menu.

2. On the **Outgoing** tab, find the required Ship Memo and tap to open it.

3. In the **Outgoing – Ship Memo** area that opens, at the top, tap **Items**. 
{{% notice tip %}}
On the **Items** tab, you can see the list of items that need to be prepared. For each item, the following columns are available:

- **Memo Qty**: quantity requested for the pickup order. Not editable
- **Avail Qty**: quantity your location can prepare. Editable
- **Unavail Qty**: quantity your location is unable to prepare (for example, the requested item is damaged). Editable

To finalize the Ship Memo, you need to allocate each item quantity to **Avail Qty**, **Unavail Qty**, or a combination of both. 
{{% /notice %}}

4. Change the status of items you are preparing to `Available`. You can do so in one of the following ways:
{{% gimg src="V6.41 QRG/641QRG_5.jpg" width="700px"%}}
    - To quickly set all items to `Available`, at the top-right, tap **All Available** {{% inum "A" %}}.  
    - To set an item line to `Available`, swipe that item left and then tap **Available** {{% inum "B" %}}.  
    - To increment an item's **Avail Qty** by `1`, scan that item with your RFID reader or search manually via the **Search** field.  
    - To set a specific item quantity to `Available` (for example, 2 out of 3 requested units), swipe that item left and then tap **Edit** {{% inum "C" %}}. In the dialog that opens, define the **Available Quantity** field.  

5. If you cannot prepare some items, change their status to `Unavailable`. You can do so in one of the following ways:

    - To quickly set all items to `Unavailable`, at the top-right, tap **All Unavailable**. In the pop-up menu that appears, select a reject reason. 
    - To set an item line to `Unavailable`, swipe that item left and then tap **Unavailable**. In the pop-up menu that appears, select a reject reason. 
    - To set a specific item quantity to `Unavailable`, swipe that item left and then tap **Edit**. In the dialog that opens, define the **Unavailable Quantity** and **Rejected Reason** fields.

6. Tap **SAVE**. On tapping, the Ship Memo changes status from `Prepare Pick Up` to `Pick Up Ready`. At that point, a notification is sent to the customer's email.
{{% notice info %}}
If some of the items or item units were marked as unavailable, on saving, the Ship Memo is reissued. The new Ship Memo (appears under `Shipments > Outgoing`) will contain only item quantities that were marked as available. In case of reissue, the store associate should continue with the new Ship Memo.
{{% /notice %}}

When the customer arrives to pick up the order, continue processing the Ship Memo:

1. Find your Ship Memo in the `Pick Up Ready` status under `Shipments > Outgoing` and tap to open it.

2. Tap the **Items** tab.

3. Change the status of items that the customer is picking up to `Picked Up`. You can do so in one of the following ways:

    - To quickly set all items to `Picked Up`, at the top-right, tap **Picked Up All**.  
    - To set an item line to `Picked Up`, swipe that item left and then tap **Pick Up**.  
    - To increment an item's **Picked Up Qty** by `1`, scan that item with your RFID reader or search manually via the **Search** field.  
    - To set a specific item quantity to `Picked Up` (for example, 2 out of 3 requested units), swipe that item left and then tap **Edit**. In the dialog that opens, define the **Picked Up Quantity** field. 

4. If the customer rejected some items or the order was never picked up, set the status of those items to `Rejected`. You can do so by doing one of the following:
{{% gimg src="V6.41 QRG/641QRG_6.jpg" width="700px"%}}

   - To quickly set all items to `Rejected`, at the top-right, tap **Reject All** {{% inum "A" %}}. In the pop-up menu that appears, select a reject reason. 
    - To set an item line to `Rejected`, swipe that item left and then tap **Reject** {{% inum "B" %}}. In the pop-up menu that appears, select a reject reason. 
    - To set a specific item quantity to `Rejected`, swipe that item left and then tap **Edit** {{% inum "C" %}}. In the dialog that opens, define the **Rejected Quantity** and **Rejected Reason** fields.

5. At the top, tap the **Pick Up** tab.

6. On the **Pick Up** tab, in the **Pickup Signature** field, select **Tap to Capture Customer Signature**. Once a signature is drawn, tap **Accept Signature**.

7. To configure printing settings for pickup order documents, in the top-right corner, tap **Print**. Additionally, to automatically print configured documents when the Ship Memo is finalized, at the bottom, turn the **Print on Save** switch on.

8. Tap **SAVE** at the bottom-right.
