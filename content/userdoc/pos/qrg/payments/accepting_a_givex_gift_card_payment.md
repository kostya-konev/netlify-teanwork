---
title: "Givex Gift Card payment"
date: 2021-10-21T11:39:22+03:00
draft: false
weight: 10
---
The Teamwork Commerce software allows customers to use GiveX gift cards to pay for a purchase. GiveX gift cards can be used along with another payment method on the same Sales Receipt.
{{% notice note %}}
To enable accepting GiveX gift cards in POS, the respective payment method as well as payment processing settings must be configured in CHQ.
{{% /notice %}}
To accept a GiveX gift card payment, in POS Pro:

1. On the **Home Screen**, tap **New Sale**.

2. In the **Sales Receipt** area, tap **Payment**.

3. In the **Payment** area, on the right, select the **GiveX GC** option (the name is defined in CHQ):
{{% gimg src="6.34 QRG/634_qrg_11.png" width="500px"%}} 

4. In the area that opens, enter the required amount and then tap **ENTER GIFT CARD** at the bottom.

5. In the next dialog, scan in a gift card or enter its number manually. POS Pro will request approval from CHQ.  
If the payment is approved, the `Approved` dialog displays:
{{% gimg src="6.34 QRG/634_qrg_12.png" width="250px"%}} 
If the gift card balance is zero, the payment is rejected, and the `No Funds Available on Card` message appears.  
If POS Pro receives any error, other than insufficient balance, the `Transaction Not Processed` message displays.

6. Tap **Close**. The GiveX payment (if successful) appears in the **Payment** area.

7. In the **Payment** area, tap **FINALIZE**. 

