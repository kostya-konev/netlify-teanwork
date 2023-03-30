---
title: "Incoming: Purchase Receipt without Purchase Order"
date: 2021-08-13T13:05:27+02:00
draft: false
weight: 3
---

A Purchase Receipt (PR) is used to add items received from a vendor to inventory.  
Usually, a Purchase Receipt will be created automatically once a Purchase Order (PO) is finalized. In that case, the resulting PR is associated with that PO.

In POS PRO, however, it is possible to create and finalize a new PR **without** an existing PO.

To do so, in POS PRO:

1. Tap **Shipments** in the app's **Home Screen** navigation panel or in the fly-out **More** menu (the location of the button is defined by your custom settings).

2. In **Shipments**, tap **Incoming** at the top of the screen.

3. In **Incoming**, tap **New Purchase Receipt**. Tapping the button will open the **Vendor** dialog.
{{% gimg src="QRG_main/image22.png" width="700px" %}}
4. In the **Vendor** dialog, find and then tap the required vendor. Once selected, you will be redirected to the **Incoming -- Purchase Receipt** area.

5. Under **Incoming -- Purchase Receipt**, tap **Items**.

6. Add the items to the Purchase Receipt by scanning their bar codes. Alternatively, enter the item's UPC, PLU, or CLU in the **Item Search** field.
{{% gimg src="QRG_main/image23.png" width="700px" %}}
Receiving the item via any of the above methods will increase that item's **Receive Qty** by 1.

Also, you can change the item's **Receive Qty** manually. To do so, swipe the item row left and tap **Edit**.  
In the **Edit** dialog that opens, change the **Receive Qty** value. After that, tap **Save** in the top right corner of the dialog:
{{% gimg src="QRG_main/image24.png" width="400px" %}}

Additionally, you can transfer all the items right from the Purchase Receipt to another location.To do so, tap **Transfer**:
{{% gimg src="QRG_main/image25.png" width="700px" %}}
Then, in the **Transfer** tab that opens, turn the **Automatically Transfer Out** switch ON and fill out the required fields (**To**, **Ship Method**, **Tracking \#**).

The above allows for the automatic creation of a Transfer Out upon the Purchase Receipt's finalization.

7. Tap **Finalize**.