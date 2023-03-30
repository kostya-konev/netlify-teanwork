---
title: "Outgoing: Creating multiple Transfers Out against a Transfer Order"
date: 2021-08-16
draft: false
weight: 8
---

Transfer Out (T-Out) contains items that your store is sending to another location. In POS PRO, it is possible to create multiple Transfers Out on finalizing a Transfer Order (TO).  
The resulting number of Transfers Out will be the same as the number of cartons on the document that you define for packing the merchandise.

To assign a carton number to an item:

1. Tap **Shipments** in the app's **Home Screen** navigation panel or in the fly-out **More** menu (the location of the button is defined by your custom settings).

2. In **Outgoing**, find and tap the required Transfer Order (TO).

3. Tap **Items** at the top-right.

4. Swipe left the row of the item you are assigning a carton number to and tap **Edit**.

On tapping, the item **Edit** dialog opens.  
Firstly, in the **\# of Cartons** field, define the total number of cartons in which that item will be packed (valid values are `1` to `999`).

Then, in each **Carton \#** field, define the sequence number of a carton (valid values are `1` to `999`):
{{% gimg src="QRG_main/image41.png" width="500px" %}}

One sequence number can be assigned for two different items on the document. However, it's not possible to use one sequence number twice for one item.

Also, in each **Quantity** field, define the item quantity that will be packed in the corresponding carton. The sum of all **Quantity** fields displays in the **Out Qty** field below. If **Out Qty** is less than **Order Qty**, you will need to define a reject reason.

5. Once done, tap **Save** in the upper right corner of the dialog. The assigned cartons display in the item's row:
{{% gimg src="QRG_main/image42.png" width="700px" %}}


6. To print multiple Transfer Memos on finalizing, in the **Items** tab, turn the **Print on Finalize** switch on.

7. In the **Items** tab, tap **Finalize** at the bottom-right.