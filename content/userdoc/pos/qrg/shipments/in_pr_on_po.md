---
title: "Incoming: Purchase Receipt on Purchase Order"
date: 2021-08-13T13:05:27+02:00
draft: false
weight: 2
---


A Purchase Receipt is automatically created on finalizing the receipt of merchandise on a Purchase Order (PO). The resulting Purchase Receipt is associated with that Purchase Order.

To receive against a Purchase Order, in POS Pro:

1. Tap **Shipments** in the app's **Home Screen** navigation panel or in the fly-out **More** menu (the location of the button is defined by your custom settings).

2. In **Shipments**, tap **Incoming** at the top of the screen.
{{% gimg src="QRG_main/image31.png" width="500px" %}}

3. In the **Incoming** tab, find the required Purchase Order and tap to open it.

4. Tap **Items** at the top of the screen. Tapping **Items** will open the list of merchandise that has been ordered from the vendor.

5. Then, you need to confirm receiving the items. To do so, perform one of the following:

    - Scan the item's barcode (preferred)

    - In the **Item Search** field {{% inum "A" %}}, enter the item's UPC, PLU, or ALU
{{% gimg src="QRG_main/image32.png" width="700px" %}}

Receiving the item via any of the above methods will increase that item's **Receive Qty** by 1.  

Alternatively, to receive all the items at once, tap the **Receive All** button on the right above the item list {{% inum "B" %}}
. Tapping the button will automatically match the values of **Order Qty** and **Receive Qty**.

6. Also, it is possible to change the item's **Receive Qty** manually.  
To do so, swipe the item row left and tap **Edit** {{% inum "C" %}}. In the **Edit** dialog that opens, change the **Receive Qty** value and tap **Save** in the top right corner.

Additionally, you can transfer all the items right from the Purchase Receipt to another location. To do so, tap **Transfer**:
{{% gimg src="QRG_main/image33.png" width="700px" %}}
Then, in the **Transfer** tab that opens, turn the **Automatically Transfer Out** switch ON and fill out the required fields (**To**, **Ship Method**, **Tracking \#**).

The above allows for the automatic creation of a Transfer Out upon the Purchase Order's finalization.

7. Tap **Finalize**.