---
title: "Deactivating RFID tags on merchandise"
date: 2021-08-16
draft: false
weight: 17
---

During customer checkout, it may be required to deactivate the RFID tags on sold items to allow the latter through the store's EAS theft prevention system.

Please be advised that, to deactivate tags in POS Pro, you need a connected RFID reader that supports tag reprogramming, for example, Denso UR-22.

To complete a sale with item tag deactivation, in POS Pro:

1. On the **Home** **Screen**, tap **New** **Sale**.

2. In the **Sales** **Receipt** area that opens, add a customer and sale items. To learn how to do that, see [Sales Receipt: Adding a customer and items to the sale](/userdoc/pos/qrg/sr/adding_customer_items/).

3. Tap **Payment** at the bottom-right to choose a payment method and accept the required amount.

4. Tap **Finalize** at the bottom-right.

5. When in the **Sale** **Complete** area of POS Pro, place one or several sale items on or near your RFID reader. Make sure the message at the top of the area changes to <i class="fas fa-spinner"></i> **Tags Detected...**.

{{% notice note %}}
In the **Sale Complete** area, all the sale items for which tag reprogramming is possible display in the left-side panel (see the screenshot below).

Please note that if the RFID reader detects an item that doesn't belong to the current Sales Receipt, the **Tag(s) not on receipt detected message** appears at the top.
{{% /notice %}}

{{% gimg src="QRG_main/image89.png" width="500px" %}}

6. Wait until the **OFF** icon displays for each placed item in the left-side panel {{% inum "A" %}}. Once all the placed item tags are turned off, the **X Tag(s) Successfully Reprogrammed** message displays at the top {{% inum "B" %}}.

7. Remove the item(s) with the reprogrammed tags from the RFID reader. Make sure that the message at the top changes to <i class="fas fa-spinner"></i> **Searching for RFID tag(s)\...** .

8. Repeat steps **5-7** until all the required tags are turned off.

9. Tap **New Sale** at the bottom right to start a new sale. Alternatively, tap **Close** in the upper left corner to return to the Home Screen.