---
title: "Fortress Gift Card payment"
date: 2021-10-21T11:48:49+03:00
draft: false
weight: 11
---
The Teamwork Commerce software allows customers to use Fortress gift cards to pay for a purchase. Fortress gift cards can be used along with another payment method on the same Sales Receipt.
{{% notice note %}}
To enable accepting Fortress gift cards in POS, the respective payment method as well as payment processing settings must be configured in CHQ.
{{% /notice %}}
To accept a Fortress gift card payment, in POS Pro:

1. On the **Home Screen**, tap **New Sale**.

2. In the **Sales Receipt** area, tap **Payment**.

3. In the **Payment** area, on the right, select the **Fortress GC** option (the name is defined in CHQ):
{{% gimg src="6.34 QRG/634_qrg_13.png" width="700px"%}} 
4. In the area that opens, enter the required amount {{% inum "1" %}} and then tap **ENTER GIFT CARD** at the bottom {{% inum "2" %}}:
{{% gimg src="6.34 QRG/634_qrg_14.png" width="700px"%}} 
5. In the next dialog, scan in a gift card {{% inum "1" %}} or enter its number manually {{% inum "2" %}}:
{{% gimg src="6.34 QRG/634_qrg_15.png" width="700px"%}} 
If the payment is approved, the following `Approved` dialog displays:
{{% gimg src="6.34 QRG/634_qrg_16.png" width="250px"%}} 
If the gift card balance is zero, the payment is rejected, and the `No Funds Available on Card` message appears.  
If POS Pro receives any error, other than insufficient balance, the `Transaction Not Processed` message displays.

6. Tap **Close**. The Fortress payment (if successful) appears in the **Payment** area.

7. In the **Payment** area, tap **FINALIZE**. 
