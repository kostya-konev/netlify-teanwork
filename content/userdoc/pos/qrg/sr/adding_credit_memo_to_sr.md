---
title: "Issuing a Credit Memo"
date: 2022-12-27T18:58:22+02:00
draft: false
weight: 13
---
In POS PRO, it's possible to add a Credit Memo (CM) service item to a Sales Receipt. This feature allows stores to offer compensation to customers in case of customer service issues, delays in order delivery, and so on. 

When issuing a CM, use the Adjustment payment method to balance the transaction total. For example, issuing a 50$ CM sets **Payment Due** on the receipt to `50.00`. To bring **Payment Due** down to `0.00`, select the Adjustment payment method of the `Give Credit` type, and then enter `50.00` (for details, see steps 8–9 below).

To issue a CM in POS PRO:

1. On the Home Screen, tap **NEW SALE**.

2. In the area that opens, on the **Customer** tab, add a customer.

2. Tap **Issue Credit Memo**. Depending on your custom settings, the button can be located at the top of the right-side panel {{% inum "A" %}} or in the **More** menu {{% inum "B" %}}:
{{% gimg src="V6.41 POS Rel Guide/6.41_mobrelguide_13.jpg" width="700px"%}}
{{% notice tip %}}
Alternatively, in a new Sales Receipt, enter the CM's item PLU into the **Item Search** field to add the CM to the sale.
{{% /notice %}}
{{% notice note %}}
Issuing a CM is possible only if all of the following conditions are observed:

- there is an active credit memo item defined in CHQ under `settings > sales > sales documents >` the `sales` section in the **credit memo item PLU (V6)** field
- there is a Credit Memo payment method defined for the location
- the user has the **Sales – Issue Credit Memo in cart** security right
- a customer is added to the Sales Receipt
{{% /notice %}}

3. In the **Credit Memo** dialog that opens, define the CM value:
{{% gimg src="V6.41 POS Rel Guide/6.41_mobrelguide_24.jpg" width="400px"%}}

4. Tap **Done**.

5. In the **Sales Receipt** area that opens, the CM is added to the Cart under the **CHARGES** section:
{{% gimg src="V6.41 POS Rel Guide/6.41_mobrelguide_25.jpg" width="700px"%}}

6. Tap **PAY** at the bottom-right.

7. In the **Payment** area, in the right-side panel, select your **[Adjustment payment method]**.

8. In the dialog that opens:

    - in the **Type** field, select `Give Credit`
    - in the **Reason** field, define a reason for issuing a CM
    - in the **Amount** field, enter an amount equal to the value of your CM

Then, tap **Done** in the upper-right corner.

9. Back in the **Sales Receipt** area, tap **FINALIZE**. When the transaction is finalized, the CM is linked to the customer's record.