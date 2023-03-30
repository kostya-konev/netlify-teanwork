---
title: "Closing a Shift Drawer Memo"
date: 2022-12-28T14:34:36+02:00
draft: false
weight: 4
---
In POS PRO, users can open and close several Drawer Memos marked as "shifts" during the business day. 

This feature is useful for companies where employees may be assigned split shifts, meaning that they have a non-working time period in between the working hours when the cash drawer must be closed.

“Shift” Drawer Memos are linked together into a sequence where drawer cash balance is automatically transferred from one Memo to the next. At the end of the business day, transaction data and cash balance from each linked Memo are carried over to the End of Day process.

To close a "shift" Drawer Memo:

1. On the Home Screen, in the right-side panel, tap **View** in the **DRAWER MEMO** section.

2. Tap **End of Shift / Day** at the bottom-right.

3. In the **Deactivate Drawer Memo** dialog, tap **Yes**.

4. In the dialog that opens, in the **End of Day Type** field, select `Finalize Shift`:
{{% gimg src="V6.41 POS Rel Guide/6.41_mobrelguide_1.jpg" width="400px"%}}
{{% notice info %}}
A Drawer Memo closed as "end of shift" can be linked to the next shift Drawer Memo.
{{% /notice %}}
5. Tap **Done**.

On tapping, the **DRAWER CASH – Closing Count** tab opens:
{{% gimg src="V6.41 POS Rel Guide/6.41_mobrelguide_2.jpg" width="700px"%}}
On the **Closing Count** tab, the **End of Shift Amount** field shows the total cash amount in the drawer (not editable).

6. Tap **Next** at the bottom-right. If multiple currencies are in use, tap **Next** on the **Closing Count** tab for each currency.

On the **Finalize** tab, in the **Float (Leave in Drawer)** field, it's possible to review the drawer amount that will be carried over to the next shift (not editable):
{{% gimg src="V6.41 POS Rel Guide/6.41_mobrelguide_4.jpg" width="700px"%}}

7. Tap **Finalize** at the bottom-right.