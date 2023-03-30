---
title: "Generating a tax refund voucher with WestID at the time of sale"
date: 2021-08-16
draft: false
weight: 25
---

Tax refund vouchers are issued to non-resident customers who are privately exporting purchased goods. For issuing these vouchers, Teamwork integrates with WestID, a third-party service that handles communications between Teamwork and Planet, a tax refunding service.

{{% notice note %}}

**Configuration in CHQ**\
To use integration with WestID, under `CHQ > settings > sales > sales documents`, navigate to the **tax refund service** section and select **WestID tax refund** in the **tax refund service** field.

{{% /notice %}}

To issue a tax refund voucher, in POS Pro V6:

1. Start and complete a new sale. To do so:

   a. On the **Home** **Screen**, tap **New** **Sale**.
 
   b. In the **Sales** **Receipt** area that opens, add a customer and the required sale items. To learn how to do that, see [Sales Receipt: Adding a customer and items to the sale](#sales-receipt-adding-a-customer-and-items-to-the-sale).

   c. Tap **Payment** at the bottom-right to choose a payment method and accept the required amount.

   d. Tap **Finalize** at the bottom-right.

{{% gimg src="QRG_main/image92.png" width="500px" %}}

2. In the **Sale Complete** area, tap **Tax Refund** at the top-right.

3. In the WestID webview that opens, enter the requested customer information or any other additional information required for generating the tax refund voucher. The webview will close automatically once the voucher in the PDF format is passed to POS Pro.

{{% notice note %}}

Please note that WestID is responsible for the user's experience as well as processing the user's actions in the webview. For the best experience, follow your company's instructions on using WestID for generating tax refund vouchers.

{{% /notice %}}

4. In the **Tax Refund Voucher** printing dialog, tap the **Select Printer** field to select the required printer and then tap **Print** in the upper right corner. The voucher will be printed on the selected printer.
{{% gimg src="QRG_main/image93.png" width="300px" %}}

5. Under **Sale Complete**, tap **New Sale** to start a new Sales Receipt or tap **Close** in the upper left corner to return to the **Home Screen**.
