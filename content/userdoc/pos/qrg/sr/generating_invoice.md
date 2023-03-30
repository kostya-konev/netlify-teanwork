---
title: "Generating an invoice"
date: 2021-08-16
draft: false
weight: 14
---

An invoice can be issued in case of a large purchase, a business-to-business sale, or on the customer's request. Compared to regular Sales Receipts, invoices contain additional information, such as customer information.

{{% notice note %}}
The invoice functionality is not available for countries that were not registered as fiscal in Teamwork. To register a country as fiscal as well as meet specific fiscal requirements, a request has to be submitted to Teamwork to plan such adjustments at the backend.
{{% /notice %}}

To generate an invoice, in POS Pro:

1. On the **Home Screen**, tap **New Sale**.

2. In the **Sales Receipt** area, add a customer and sale items (see the [Sales Receipt: Adding a customer and items to the sale](/userdoc/pos/qrg/sr/adding_customer_items) guide). If the invoice is to be issued for a return, add a customer and return items (see the [Making an Open Return](/userdoc/pos/qrg/sr/making_open_return/) guide).

3. Tap **Payment** at the bottom-right.

4. In the **Payment** area, turn on the **Issue Invoice** switch {{% inum "A" %}}.
{{% gimg src="QRG_main/image97.png" width="500px" %}}

{{% notice note %}}
If the transaction total meets the **auto issue invoices when total reaches** threshold set in CHQ under `settings > company settings > countries/regions > [selected country] > fiscal`, in POS Pro, the **Issue Invoice** switch is turned on automatically and cannot be disabled.
{{% /notice %}}

5. In the **Invoice** **Information** dialog that opens, enter the customer information and then tap **Done** in the upper right corner.

6. Back in the **Payment** area, to define if the invoice should be printed or emailed to the customer, under **PRINT/EMAIL**, select **Invoice** {{% inum "B" %}} or the **email address** {{% inum "C" %}} respectively
 respectively.

7. Select a payment method and accept the required amount.

8. In the **Payment** area, tap **Finalize** {{% inum "D" %}}.