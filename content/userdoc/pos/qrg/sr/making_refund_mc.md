---
title: "Making a refund to multiple credit cards"
date: 2021-08-13T13:05:27+02:00
draft: false
weight: 22
---

When the customer is returning merchandise that was originally paid with several credit cards, a refund to each credit card may be required. 

To make a refund to multiple credit cards, in POS Pro:

1. Find the original sale transaction and open it – the **Return** area will appear. In the **Return** area, choose the required item(s) and then tap **Return Item(s)** at the bottom-right. For details, see [Making a verified return of merchandise](/userdoc/pos/qrg/sr/making_vr/). 
2. In the **Sales Receipt** area, tap **Payment** at the bottom-right.
3. In the **Payment** area, tap **Return Value to Card**:
{{% gimg src="6.33 QRG/633_qrg_5.png" width="500px"%}}
4. The **Return Value to Card(s)** dialog will automatically show the cards that were used in the original transaction. In the dialog, define how much will be refunded to each card by:
{{% gimg src="6.33 QRG/633_qrg_8.png" width="500px"%}}
    - tapping **Auto-Allocate** {{% inum "A" %}}, or
    - manually defining the **AMOUNT** column for each card {{% inum "B" %}}
{{% notice note %}}
Please note that the **AMOUNT** value cannot exceed the **AVAILABLE** value shown in the adjacent column.
{{% /notice %}}
5. Tap **Process** for one of the cards. 
6. In the confirmation dialog, tap **Yes**:
{{% gimg src="6.33 QRG/633_qrg_6.png" width="250px"%}}
7. After the transaction is approved, tap **Close** on the **Approved** screen:
{{% gimg src="6.33 QRG/633_qrg_7.png" width="500px"%}}
8. Back in the **Return Value to Card(s)** dialog, repeat steps **5-7** for each remaining card. Note that cards that have been successfully processed display with the `Processed` icon.  
When all the cards have been processed and there’s no **Remaining Available** amount to return, tapping **Close** on the **Approved** screen returns you to the **Payment** area.
9. In the **Payment** area, tap **Finalize**.