---
title: "Configuring tax-related options in a Sales Receipt"
date: 2021-10-21T11:19:59+03:00
draft: false
weight: 5
---
When processing a sale, users can configure tax-related options of the transaction, for example, tax area or tax exemption status.
{{% notice info %}}
To configure tax options, the following security rights are required:

- **Sales – Chnge Tax Area for sales**: allows for changing the tax area of a sale receipt
- **Sales – Chnge Tax Area for returns**: allows for changing the tax area of a return receipt
- **Sales-Chng. Tax Ex. for sales**: allows for changing tax exemption status in a sale receipt
- **Sales-Chng. Tax Ex. for ret.**: allows for changing tax exemption status in a return receipt
{{% /notice %}}
To do so, in POS PRO:

1. On the **Home Screen**, tap **Sales Receipt**.  
Depending on your custom settings, the **Sales Receipt** button can be found in the bottom navigation bar or in the **More** menu.

2. Add sale items and a customer.

2. To configure tax-related options at the transaction level, in the right-side panel, tap the value in the **Sales Tax** or **VAT Included** field. Alternatively, to configure at the item level:

    a. Tap the required item.

    b. In the area that opens, tap the **Taxes** tab on the left.

3. In the area that opens, the following configurations are available:
{{% gimg src="V6.39 QRG/639_qrg_7.jpg" width="700px"%}} 
    a. To define the tax area of the receipt, in the **TYPE** section, configure the **Tax Area** field {{% inum "A" %}}.
{{% notice note %}}
If the location's default tax area (defined under `chq > settings > location settings > locations/location settings > [selected location] > details`) is VAT type, in POS PRO, the **Tax Area** field is not available for configuration.
{{% /notice %}}

    b. To mark the tax area as tax exempt, in the **TYPE** section, turn on the **Tax Exempt** switch. Note that this sets all the tax jurisdictions to **EXEMPT**.

    c. To mark a tax jurisdiction as tax exempt, in the **TAX JURISDICTIONS** section, turn on the **EXEMPT** switch next to the required jurisdiction ({{% inum "B" %}} in the screenshot above). 

    d. To add information on a tax exempt customer, in the **Tax Exempt Customer** field, tap **ADD** ({{% inum "C" %}} in the screenshot above). Note that the **Tax Exempt Customer** field becomes available when at least one tax jurisdiction is marked as tax exempt. 

4. When finished configuring, tap **Done** in the upper right corner.
{{% notice info %}}
When changes are applied at the *transaction level*, when tapping **Done** or switching to another tab, the **Change Tax** dialog appears. In the dialog, choose how the changes should be applied:

- **All Sale Items**: apply to all items on the receipt
- **Only New Items Added**: apply only to the items that will be added after the changes are applied
- **Cancel**: do not apply the changes
{{% /notice %}}

5. Back in the **Sales Receipt** area, tap **PAY** at the bottom-right.

6. Take the payment and then finalize the transaction as required.
