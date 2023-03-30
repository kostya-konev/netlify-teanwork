---
title: "Creating a Count Memo"
date: 2021-08-16
draft: false
weight: 1
chapter: false
---

A Count Memo (CM) is a document that records changes in merchandise quantities for the initialized location.

In POS PRO, to create a Count Memo:

1. Tap **Count Memos** in the app's **Home Screen** navigation panel or in the fly-out **More** menu (the location of the button is defined by your custom settings).

2. Once the list of Count Memos is open, tap    **New Count Memo** in the upper right corner.
In the **New Count Memo** dialog that opens, fill out the fields in the **FILTER** section to only include items with specific properties into the memo:
{{% gimg src="QRG_main/image46.png" width="500px" %}}
Alternatively, leave the fields blank to include all catalog items in the memo. Once finished, tap **Save** in the upper right corner.

3. Once the resulting Count Memo opens, tap **Items** at the top. In the **Items** tab, there are two ways to search for an added item:

   - enter that item's ID in the **Item Search** field in the upper left corner {{% inum "A" %}}

   - tap the **barcode scanning** button {{% inum "B" %}} and scan an item
{{% gimg src="QRG_main/image47.png" width="700px" %}}
To filter items by quantity difference or override quantity, tap **Filter** next to the **Item Search** field.

4. In the **Items** tab, you can only edit **Override Qty** and delete item scans.\

To do so, tap the required item row. Once the **Edit** dialog opens, in the **Quantity** tab, enter the required **Override Quantity**. Please be advised that Override Quantity is given priority over the count quantity when quantity difference is determined.

To delete an item scan, in the **Edit** dialog, tap **Scans**. In the **Scans** tab, tap the required item row and then tap **Delete Scan**. Once done, tap **Save** in the upper right corner.

5. It is possible to delete all item scans associated with one zone in the **Zones** tab. To do so, in the **Zones** tab, tap the required row and then select **Delete Zone Scans**.

6. Once finished configuring the memo, tap **SAVE** at the bottom ({{% inum "C" %}} in the screenshot above) to save changes and close the memo. 
To assign the "Finalized" status to the memo (no further edits will be possible), tap **Finalize**.\
To archive the memo (an archived memo can only be viewed), tap **Archive** ({{% inum "D" %}} in the screenshot above).