---
title: "Credit Card Credit payment with Adyen"
date: 2021-08-13T13:05:27+02:00
draft: false
weight: 5
---

This guide describes how to accept a Credit Card Credit payment in POS PRO when integration with Adyen is set up.

The Credit Card Credit payment in POS PRO is typically used to make a refund to the customer's credit card. To make a refund via the Credit Card Credit payment method, in POS PRO:

1. On the **Home creen**, tap **New Sale**.

2. In the **Sales Receipt** area that opens, add a customer and the return item(s) to the sale. To learn how to add return items to the sale, see [Making an Open Return](/userdoc/pos/qrg/sr/making_open_return/). Then, tap **Payment** at the bottom-right.

3. In the **Payment** area that opens, tap **Credit Card Credit** in the right-side panel.

4. Tapping **Credit Card Credit** opens the area with **Change Due**. Tap the amount in the field {{% inum "A" %}} to edit it:
{{% gimg src="QRG_main/image80.png" width="700px" %}}
5. Once the required refund amount is set, tap **Process Payment** at the bottom {{% inum "B" %}}.

6. After tapping **Process** **Payment**, have the customer swipe, insert, or touch their credit card to the connected Adyen terminal. Once the terminal responds, the screen with the `Approved` icon displays.

7. Tap **Close** at the bottom.

8. Back in the **Payment** area, once the full refund amount is reached, tap **Finalize** at the bottom-right.