---
title: "Generating a tax refund voucher with WestID after the sale"
date: 2021-08-16
draft: false
weight: 26
---

Tax refund vouchers are issued to non-resident customers who are privately exporting purchased goods. In POS Pro, such vouchers can be issued not only at the time of but also after the original sale.

{{% notice note %}}

**Configuration in CHQ**\
To use integration with WestID, under `CHQ > settings > sales > sales documents`, navigate to the **tax refund service** section and select **WestID tax refund** in the **tax refund service** field.

{{% /notice %}}

To issue a tax refund voucher after the sale, in POS Pro V6:

1. On the **Home Screen**, tap **Sales Receipts**. 

Depending on your customs settings, the **Sales Receipt** button can be located in the navigation panel at the bottom or in the **More** menu.

2. In the **Sales Receipts** area, tap the **History** tab at the top.

3. Tap **Options** in the upper right corner {{% inum "A" %}} and then select **Tax Refund Voucher**.
{{% gimg src="QRG_main/image94.png" width="500px" %}}

4. In the WestID webview that opens, enter the number of the Sales Receipt, required customer information as well as any other information required for tax refunding. The webview will close automatically once the voucher in the PDF format is passed to POS Pro.

{{% notice note %}}

Please note that WestID is responsible for the user's experience as well as processing the user's actions in the webview. For the best experience, follow your company's instructions on using WestID for generating tax refund vouchers.

{{% /notice %}}

5. In the **Tax Refund Voucher** printing dialog, tap the **Select Printer** field to select the required printer and then tap **Print** in the upper right corner.
{{% gimg src="QRG_main/image93.png" width="500px" %}}

After printing you will be returned to the `Sales Receipt > History` area.