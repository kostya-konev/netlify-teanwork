---
title: "Resolving a detached payment on application crash"
date: 2022-04-27T11:54:30+03:00
draft: false
weight: 14
---
A detached payment is a terminal payment that is not attached to any Sales Receipt. A detached payment may occur if, for example, the application crashed when a sale was in process. If that is the case, automated detached payment check is performed on app restart.

If at least one detached payment is found, the **Detached Payment(s)** dialog appears on POS Home Screen (see the screenshot in **step 1** below).

The detached payment must be resolved either by voiding or applying it to a receipt. To do so:

1. To void the payment, in the **Detached Payment(s)** dialog, tap **Void Payment(s)** {{% inum "A" %}}:
{{% gimg src="V6.39 QRG/639_qrg_3.jpg" width="400px" %}}

    a. When voiding is in process, the **Detached Payments Found** progress message appears.

    b. Once voiding is complete, the **Detached Payment(s)** dialog comes up with the result for each payment:
    {{% gimg src="V6.39 QRG/639_qrg_2.jpg" width="400px" %}}
    Tap **Close** in the upper left corner to return to POS Home Screen.

    c. After the detached payment is voided, if required, re-create the unfinished sale and take the payment again.

2. Alternatively, to apply the detached payment to a new sale, in the **Detached Payment(s)** dialog, tap **Use Payment(s)** {{% inum "B" %}}:
{{% gimg src="V6.39 QRG/639_qrg_4.jpg" width="400px" %}}

    a. In the new **Sales Receipt** area that opens, re-create the sale by adding the items, customer, discounts, etc. as required.

    b. Tap **PAY** at the bottom-right.

    c. In the **Detached Payment(s) Applied** dialog that appears, tap **Okay**. On tapping, the detached payment is applied to the receipt as if just taken.
    
    d. Finalize the sale.

{{% notice note %}}
If the detached payment is a refund (a negative value payment), both the void and use options are not available.   
In case of a negative detached payment, it's the user's responsibility to re-create the receipt and use the Adjustment payment method to record the refund amount.
{{% /notice %}}
    
