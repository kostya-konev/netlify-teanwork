---
title: "How to accept a credit card payment"
date: 2022-01-25T11:56:00-05:00
draft: false
weight: 3
---

{{% notice warning %}}
This vendor guide is currently under construction and its contents should not be used until further notice.
{{% /notice %}}

With the Adyen integration, the *Credit Card* payment method is available in POS PRO version 6. To accept a credit card payment in POS, do the following.

1. In the **Sales Receipt** area, once sale items and a customer (if required) are added to the Receipt, tap **Payment**.  
2. In the **Payment** area that opens, tap **Credit Card**:

{{% gimg src="VG_Adyen_V01.00/AcceptACreditCardPayment_01.jpg" title="POS: Select Credit Card" width="500px" %}}

3. On tapping **Credit Card**, the **Amount Due** screen opens:

{{% gimg src="VG_Adyen_V01.00/AcceptACreditCardPayment_02.jpg" title="POS: Amount Due" width="500px" %}}

Once the correct payment amount is set, tap the Process Payment button.

4. After tapping **Process Payment**, POS PRO waits for a response from the terminal:

{{% gimg src="VG_Adyen_V01.00/AcceptACreditCardPayment_03.jpg" title="POS: Payment Amount" width="500px" %}}

While POS PRO is waiting, the customer has to swipe, insert, or tap the connected terminal with their card.

{{% notice warning %}}

Right after the user taps **Process Payment**, and then every five seconds, POS PRO will check for a connection with the payment terminal in the background.

If at any moment two such consecutive checks fail (meaning the connection is lost and the terminal is not responding) before a payment response is received, the **Payment Terminal Connection Lost** notification appears on the screen: {{% gimg src="VG_Adyen_V01.00/AcceptACreditCardPayment_04.jpg" title="POS: Payment Amount" width="200px" %}} If after another three checks there is no connection, the **Exit Recheck** button becomes available in the dialog. Tapping **Exit Recheck** aborts the payment request and opens the “Payment Status Unknown” screen advising the user to check the status of the last transaction on the terminal.

Alternately, if **Exit Recheck** is not tapped, POS PRO will attempt to reconnect until a connection is established or the timeout limit (120 seconds by default) is reached.

Such a scenario potentially leads to a *detached payment*. To learn about troubleshooting detached payments, see the **Manual troubleshooting of payments** section below.

{{% /notice %}}

5. Once the terminal responds, the payment approval screen displays:

{{% gimg src="VG_Adyen_V01.00/AcceptACreditCardPayment_05.jpg" title="POS: Payment Amount Approved" width="500px" %}}

To return to the **Payment** area, tap **Close** at the bottom. Otherwise, you’ll be returned automatically in three seconds.

Alternately, if the customer’s signature has been captured on the terminal, it displays in the approval screen:

{{% gimg src="VG_Adyen_V01.00/AcceptACreditCardPayment_06.jpg" title="POS: Payment Amount Approved #2" width="500px" %}}

To return to the **Payment** area, tap **Verify Signature & Close** at the bottom.

{{% notice info %}}

In order for the customer’s signature to be displayed in the POS PRO payment approval screen, the **show signature for verification** setting must be selected (its checkbox turned on). This setting can be found in the **location settings** dialog box which can be opened by clicking the **location settings** button in the **chq** > **settings** > **sales** > **payment methods** pane.

{{% /notice %}}

6. Back in the **Payment** area, the payment record displays on the left:

{{% gimg src="VG_Adyen_V01.00/AcceptACreditCardPayment_07.jpg" title="POS: Finalize" width="500px" %}}

When swiping left on the row with the payment, the **View** and **Void** options become available.

After finalizing your payment, by tapping the **Finalize** button, you will be taken to the **Sale Complete** area:

{{% gimg src="VG_Adyen_V01.00/AcceptACreditCardPayment_08.jpg" title="POS: Change Due" width="500px" %}}