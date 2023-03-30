---
title: "Resolving a detached payment on payment timeout or cancellation"
date: 2022-04-27T17:55:18+03:00
draft: false
weight: 15
---
A detached payment is a terminal payment that is not attached to any Sales Receipt. When response from the payment terminal or CHQ is slow, or connection is lost, it is possible that the first payment request was received and approved, but POS is not aware of it.

If that is the case, the `Payment Status Unknown` screen appears in POS:
{{% gimg src="V6.39 QRG/639_qrg_5.jpg" width="600px" %}}
If a detached payment exists, it must be resolved either by voiding or applying it to a receipt. To check and resolve a detached payment:

1. Tap **CHECK LAST PAYMENT**.  
If at least one detached payment is found, the **Detached Payment(s)** dialog appears.

2. To void the payment, tap **Void Payment(s)** {{% inum "A" %}}:
{{% gimg src="V6.39 QRG/639_qrg_3.jpg" width="400px" %}}

    a. When voiding is in process, the **Detached Payments Found** progress message appears.

    b. Once voiding is complete, the **Detached Payment(s)** dialog comes up with the result for each payment:
    {{% gimg src="V6.39 QRG/639_qrg_2.jpg" width="400px" %}}
    Tap **Close** in the upper left corner to return to the **Payments** area.

    c. In the **Payments** area, take the payment again and then finalize the sale.

3. Alternatively, to apply the detached payment to the current sale, in the **Detached Payment(s)** dialog, tap **Use Payment(s)** {{% inum "B" %}}:
{{% gimg src="V6.39 QRG/639_qrg_4.jpg" width="400px" %}}
    a. In the **Payments** area that opens, the payment record is applied to the sale.

    b. Finalize the transaction as required.

{{% notice note %}}
If the detached payment is a refund (a negative value payment), both the void and use options are not available.   
In case of a negative detached payment, it's the user's responsibility to re-create the receipt and use the Adjustment payment method to record the refund amount.
{{% /notice %}}