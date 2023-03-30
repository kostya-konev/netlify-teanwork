---
title: "End of Day with multiple shifts"
date: 2022-12-28T15:15:33+02:00
draft: false
weight: 5
---
In POS PRO, users can open and close several Drawer Memos marked as "shifts" during the business day. 

This feature is useful for companies where employees may be assigned split shifts, meaning that they have a non-working time period in between the working hours when the cash drawer must be closed.

“Shift” Drawer Memos are linked together into a sequence where drawer cash balance is automatically transferred from one Memo to the next. At the end of the business day, transaction data and cash balance from each linked Memo are carried over to the End of Day process.

To finalize a chain of shift Drawer Memos via the End of Day process:

1. On the Home Screen, in the right-side panel, tap **View** in the **DRAWER MEMO** section.

2. Tap **End of Shift / Day** at the bottom-right.

3. In the **Deactivate Drawer Memo** dialog, tap **Yes**.

4. In the dialog that opens, in the **End of Day Type** field, select `Finalize Day`:
{{% gimg src="V6.41 POS Rel Guide/6.41_mobrelguide_5.jpg" width="400px"%}}

5. Tap **Done**. On tapping, the **DRAWER CASH – Closing Count** tab of the **End of Day** area opens.

6. To review information on shifts, in the left-side panel, under the **TRANSACTIONS** section, tap the required shift {{% inum "A" %}}:
{{% gimg src="V6.41 POS Rel Guide/6.41_mobrelguide_3.jpg" width="700px"%}}
When finished, tap **Next** at the bottom-right.

7. On the **DRAWER CASH – Closing Count** tab, in the **Count** column of the grid {{% inum "B" %}}, enter the present number of bills or coins for each denomination:
{{% gimg src="V6.41 QRG/641QRG_2.jpg" width="700px"%}}
{{% notice tip %}}
Tap **Open Drawer** at the bottom-left to open your cash drawer.
{{% /notice %}}
Tap **Next** at the bottom-right.

8. On the **DRAWER CASH – Leave in Drawer Amount** tab, in the **Float** column of the grid, enter the number of bills or coins for each denomination according to your denomination plan. Tap **Next**.

9. On the **DRAWER CASH – Cash Handling** tab, tap **Next**.

10. On the **DRAWER CASH – Summary** tab, tap **Next**.

11. If multiple currencies are in use, the **Closing Count** tab for the next currency opens. On the tab:

    - In the **Counted Amount** field, enter total counted amount for that currency. 

    - In the **Leave in Drawer Amount** field, enter total amount that should be left in the drawer.

    - Tap **Next**.

12. On the **SAFE CASH – Closing Count** (tab availability depends on your custom settings), do the following:

    - In the **Counted Amount** field, enter total counted amount for the safe.

    - In the **Leave in Safe Amount** field, enter total amount that should be left in the safe.

    - Tap **Next**.

13. On the **Finalize** tab, to print the Drawer Memo or Deposit Slip, turn on the **Print Drawer Memo** or **Print Deposit Slip** switch, respectively.  

14. Tap **Finalize**.
