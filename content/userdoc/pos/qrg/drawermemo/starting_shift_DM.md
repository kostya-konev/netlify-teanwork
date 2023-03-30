---
title: "Starting a Shift Drawer Memo"
date: 2022-12-28T14:16:06+02:00
draft: false
weight: 3
---
In POS PRO, users can open and close several Drawer Memos marked as "shifts" during the business day. 

This feature is useful for companies where employees may be assigned split shifts, meaning that they have a non-working time period in between the working hours when the cash drawer must be closed.

“Shift” Drawer Memos are linked together into a sequence where drawer cash balance is automatically transferred from one Memo to the next. At the end of the business day, transaction data and cash balance from each linked Memo are carried over to the End of Day process.

To start a "shift" Drawer Memo:

1. On the Home Screen, tap **Start new Drawer Memo**.

2. In the dialog that opens, in the **Start Drawer Memo For** field, select `New Shift`.

3. Under the **OPEN SHIFTS** section, select the previous shift from which you wish to continue:
{{% gimg src="V6.41 POS Rel Guide/6.41_mobrelguide_8.jpg" width="400px"%}}
If there are no Drawer Memos that were closed as "End of Shift" at your location, `No previous shifts available` 
displays.
{{% notice note %}}
The first Drawer Memo of the day cannot be a shift Drawer Memo. If there's no previous shifts available, and you select `New Shift`, the **Done** button is disabled.  
For the first Memo of the day, select `Start of Day`.
{{% /notice %}}

4. Tap **Done**. 

On tapping, the **DRAWER CASH – Opening Count** tab opens. The **Opening Amount** field shows cash balance carried over from the previous shift (not editable):
{{% gimg src="V6.41 POS Rel Guide/6.41_mobrelguide_9.jpg" width="700px"%}}

5. Tap **Next** at the bottom-right. If multiple currencies are in use, tap **Next** on the **Closing Count** tab for each currency.

6. On the **SAFE CASH – Opening Count** tab (tab availability depends on your custom settings), the **Opening Amount** field shows safe balance carried over from the previous shift. Tap **Next**.

6. On the **COMPLETE – Summary** tab, configure the **Print Start of Day** and **Notes** fields as required.

7. Tap **Complete**.
