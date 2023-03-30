---
title: "Outgoing: Ship to Store"
date: 2023-01-03T18:35:52+02:00
draft: false
weight: 11
---
A Ship to Store (STS) Ship Memo is created when a customer wants to pick up an order in store but the preferred store doesn't have the required item(s) in stock. 

To allow for order fulfillment, a transfer is created along with the Ship Memo. The transfer delivers items to the store chosen by the customer, and then the store fulfills the Ship Memo.

To process an STS Ship Memo, in POS PRO:
{{% notice note %}}
Before processing the Ship Memo, the store associate should process the associated Transfer In (for details on how to process a Transfer In, see [Incoming: Transfer In](https://twdocs.netlify.app/userdoc/pos/qrg/shipments/in_transferin/)). The number and status of the linked Transfer Order is available under `Shipments > Outgoing > [your STS Ship Memo] > Info tab` in the **Transfer Order** field.  
Finalizing the associated Transfer In changes the status of the STS Ship Memo to `Pick Up Ready` and notifies the customer to pick up the order.
{{% /notice %}}

1. On the Home Screen, tap **Shipments**. Depending on your custom settings, the button can be located in the navigation bar at the bottom or in the **More** menu.

2. On the **Outgoing** tab, find the required Ship Memo and tap to open it.

3. In the **Outgoing – Ship Memo** area that opens, at the top, tap **Items**. 

4. Change the status of items that the customer is picking up to `Picked Up`. You can do so in one of the following ways:

    - To quickly set all items to `Picked Up`, at the top-right, tap **Picked Up All**.  
    - To set an item line to `Picked Up`, swipe that item left and then tap **Pick Up**.  
    - To increment an item's **Picked Up Qty** by `1`, scan that item with your RFID reader or search manually via the **Search** field.  
    - To set a specific item quantity to `Picked Up` (for example, 2 out of 3 requested units), swipe that item left and then tap **Edit**. In the dialog that opens, define the **Picked Up Quantity** field. 

5. If the customer rejected some items or the order was never picked up, set the status of those items to `Rejected`. You can do so by doing one of the following:
{{% gimg src="V6.41 QRG/641QRG_6.jpg" width="700px"%}}

   - To quickly set all items to `Rejected`, at the top-right, tap **Reject All** {{% inum "A" %}}. In the pop-up menu that appears, select a reject reason. 
    - To set an item line to `Rejected`, swipe that item left and then tap **Reject** {{% inum "B" %}}. In the pop-up menu that appears, select a reject reason. 
    - To set a specific item quantity to `Rejected`, swipe that item left and then tap **Edit** {{% inum "C" %}}. In the dialog that opens, define the **Rejected Quantity** and **Rejected Reason** fields.

6. At the top, tap the **Pick Up** tab.

7. On the **Pick Up** tab, in the **Pickup Signature** field, select **Tap to Capture Customer Signature**. Once a signature is drawn, tap **Accept Signature**.

8. To configure printing settings for pickup order documents, in the top-right corner, tap **Print**. Additionally, to automatically print configured documents when the Ship Memo is finalized, at the bottom, turn the **Print on Save** switch on.

9. Tap **SAVE** at the bottom-right.
