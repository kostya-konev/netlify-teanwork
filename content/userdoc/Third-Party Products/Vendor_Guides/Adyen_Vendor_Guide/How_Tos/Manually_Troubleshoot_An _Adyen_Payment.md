---
title: "How to manually troubleshoot an Adyen payment"
date: 2022-01-30T16:11:00-05:00
draft: false
weight: 6
---

{{% notice warning %}}
This vendor guide is currently under construction and its contents should not be used until further notice.
{{% /notice %}}

{{% notice note %}}
This topic outlines the steps to resolve detached Adyen payments when automatic voiding of the latter is disabled. To verify if auto-voiding is enabled in the build you are using, please contact your Teamwork support representative.
{{% /notice %}}

While processing Adyen payments, a situation can occur that will require troubleshooting by the store personnel in the course of processing sales. For example, when requesting approval for a payment, the following screen appears in POS PRO:

{{% gimg src="VG_Adyen_V01.00/ManuallyTroubleshoot_01.jpg" title="POS PRO: Payment Amount waiting for terminal" width="600px" %}}

It can happen that a response from the terminal is not received by POS PRO. Possibly, the app has shut down (crashed), connectivity (to Wi-Fi or the Internet) may be lost, or the user may have cancelled the action mid-process. POS PRO, in these instances, is not aware of the response from the payment gateway, and so it may appear that there is no authorized payment, when in fact, the payment has been approved.

The following topics outline the “canceled payments”, “timed out payments”, and “mobile POS crash” scenarios which can occur as well as the process to resolve those issues during the transaction.

---

### **Cancelled payments**

If POS PRO has NOT crashed and you are still within the current sales receipt for the current customer with their items, you can still complete the transaction. This, in particular, covers situations where the associate canceled the process.

For example, the user may tap **Cancel** seconds before POS PRO gets the response from the payment processor. Thus, when POS PRO negotiates with the payment terminal to cancel the request, it can't be done as the payment is already accepted or declined.

It may also happen that the user taps **Cancel** as a result of waiting caused by connection issues. However, in this case the payment could be processed on the payment terminal, but due to the unstable connection POS PRO doesn’t get the payment approval response. Such a scenario potentially leads to a detached payment (a payment without a *Sales Receipt*).

{{% notice warning %}}
**Do not discard the current receipt** in the case where a detached payment is possible. It is easier to handle the issue with the payment from the current receipt rather than starting a new one.
{{% /notice %}}

To resolve such a detached payment you should:

1. Manually check on the payment terminal if the payment was actually received.

{{% notice tip %}}
For details on how to manually check the terminal, see the two images at the end of the <b>Recognizing a POS PRO crash</b> section below.
{{% /notice %}}

2. If the payment was received:  
* It’s recommended that the detached payment be processed on the same receipt as an offline payment. When performing this operation, it’s recommended that the authorization code from the original transaction be entered. This will help refer the Offline Credit Card payment to the detached payment for reporting purposes as well as prevent confusion during the EOD (End Of Day) procedure.

{{% gimg src="VG_Adyen_V01.00/ManuallyTroubleshoot_02.jpg" title="POS PRO: Payment Due - Offline credit card" width="600px" %}}

* Alternately, it’s possible to manually void the detached payment on the terminal and then take a new payment.

---

### **Timed out payments**

Another situation can occur if, resulting from a payment request timeout, the payment request was sent but POS PRO does not receive a response from the Adyen terminal.

If the payment request times out, POS PRO initiates the “Check Last Payment” workflow. POS PRO will query the terminal and ask for the result of the last payment.

If the payment was *approved*, the detached payment is automatically “adopted” and the details are saved on the receipt as if the original payment has been successful.

If the payment was *declined*, POS PRO displays a message instructing you to take a new payment:

{{% gimg src="VG_Adyen_V01.00/ManuallyTroubleshoot_03.jpg" title="POS PRO: Payment not processed" width="600px" %}}

If POS PRO still cannot get a response from the terminal after several attempts, you will see the “Payment Status Unknown” screen:

{{% gimg src="VG_Adyen_V01.00/ManuallyTroubleshoot_04.jpg" title="POS PRO: Payment status not known" width="600px" %}}

To determine the status of the payment, it’s required to check it manually on the terminal.

{{% notice tip %}}
For details on how to manually check the terminal, see the two images at the end of the <b>Recognizing a POS PRO crash</b> section below.
{{% /notice %}}

If a detached payment is present, follow your company procedures and resolve the payment in one of the following ways:  
1. Perform an *Offline Credit Card* payment to record the sale in Teamwork.  
2. Void the detached payment manually on the terminal and then take a new payment.

---

### **Mobile POS PRO “crash”**

Should POS PRO close unexpectedly either during the credit card processing step, or during finalization of the sale, the POS PRO is said to have "crashed" and there are steps to resolve this issue.

#### **Recognizing a POS PRO "crash"**

After you have captured the payment, on the **payments** screen, you can see the credit card, authorization, there is $0.00 payment due, and you would now select the **Finalize** button.

{{% gimg src="VG_Adyen_V01.00/ManuallyTroubleshoot_05.jpg" title="POS PRO: Finalize with credit card" width="600px" %}}

Normally, this returns the Change Due or Receipt Print screen:

{{% gimg src="VG_Adyen_V01.00/ManuallyTroubleshoot_06.jpg" title="POS PRO: Change due" width="600px" %}}

If, instead of seeing the above screen, you see the **Home** screen (shown below) or the iOS home screen, the app has crashed and the sale has ***NOT*** been finalized:

{{% gimg src="VG_Adyen_V01.00/ManuallyTroubleshoot_07.jpg" title="POS PRO: New sale" width="600px" %}}

In this case, the **Incomplete Payments** dialog will appear over the POS PRO **Home** screen:

{{% gimg src="VG_Adyen_V01.00/ManuallyTroubleshoot_08.jpg" title="POS PRO: Sale not completed" width="600px" %}}

You can identify your payment by the credit card type, last four digits as well as the payment amount that appears in the dialog. Then, tap **Close** in the upper left corner to return to the **Home** screen.

Additionally, you can verify that the receipt was ***NOT*** saved by opening the **Sales Receipt** > **Device History** area from the POS PRO **Home** screen, or from the **More** menu, and reviewing the list of transactions and noting whether or not the most recent sales receipt is listed:

{{% gimg src="VG_Adyen_V01.00/ManuallyTroubleshoot_09.jpg" title="POS PRO: Sales receipts" width="600px" %}}

If the sales receipt is NOT listed, then the sale ***DID NOT*** finalize, but the payment most likely was approved. You now have a detached payment (a payment without a Sales Receipt).

If you are still unsure, you can check the Adyen terminal for transactions and see if the transaction amount and sale time are present:

{{% gimg src="VG_Adyen_V01.00/ManuallyTroubleshoot_10.jpg" title="Verifone #1" width="600px" %}}

{{% gimg src="VG_Adyen_V01.00/ManuallyTroubleshoot_11.jpg" title="Verifone #2" width="600px" %}}

In this instance, the payment is captured (detached payment) and there is no sales receipt associated with the payment.

#### **Resolving the POS PRO crash scenario**

If the POS PRO app crashes at any point between successful payment and successful finalization, we will have a detached payment. To resolve this issue:

1. Knowing that you have the payment, add the customer to a new sales receipt (if required) and add their items to the sales receipt again.  
2. Then, select “Offline Credit Card”. Selecting “Offline Credit Card” will not capture any funds, but will allow you to process the sale, thus capturing the sale within Teamwork, and properly managing the inventory quantities.

Alternately, it’s possible to manually void the detached payment on the terminal and then take a new payment.

---

### **Reviewing detached payments during EOD**

POS PRO checks for detached payments recorded against the current *Drawer Memo* during the End of Day (EOD) procedure.

In particular, the **Incomplete Payments** dialog with detached Adyen payments may appear under **Drawer Memo** > **End of Day** > **Payments** > **[Adyen Credit Card]**.

{{% gimg src="VG_Adyen_V01.00/ManuallyTroubleshoot_12.jpg" title="POS PRO: Incomplete payment" width="600px" %}}

In the **Incomplete Payments** dialog, it’s possible to review the listed payments and make sure each one is handled appropriately.

{{% notice warning %}}
If at the time of the sale the associate identified a detached payment and then performed an *Offline Credit Card Payment*, the detached payment will STILL appear in the **Incomplete Payments** dialog during EOD.

In this case, it is the user’s responsibility to recognize that the detached payment was already handled by making an offline payment.
{{% /notice %}}

Additionally, a detailed list of detached payments is available under **End of Day** > **Payments** > **[Adyen Credit Card]** > **Detached**:

{{% gimg src="VG_Adyen_V01.00/ManuallyTroubleshoot_13.jpg" title="POS PRO: Credit Card payment" width="600px" %}}

---

### **Running the *Adyen Payment Suspected Duplicates* report in CHQ**

It’s possible to run the *Adyen Payment Suspected Duplicates* report in CHQ which reveals any inconsistencies between payment records on the company’s POS PRO devices and connected Adyen terminals.

{{% notice note %}}
Please be advised that this is a custom report installed on request. In CHQ, installed reports are available under **analytics** > **reports**.
{{% /notice %}}

For example, such a report will reveal cases when there are two approved payments on the Adyen side linked to a single TWC receipt, which indicates a detached payment. This might happen if the employee charged the customer twice instead of using the Offline Credit Card payment method.

Once the report has been reviewed on the Adyen portal in your Customer Area, it’s possible to find the payment duplicates by the PSP (Payment Service Provider) references provided in the report and manually cancel or refund the payments.

The *Adyen Payment Suspected Duplicates* report can be run daily to ensure that no detached payments remain unresolved.