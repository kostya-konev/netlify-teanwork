---
title: "Manually changing the status of an RFID item tag"
date: 2021-08-16
draft: false
weight: 18
---
If the RFID tag on an item wasn't automatically turned OFF at the time of the sale or ON at the time of the return, it may be required to change its status manually.

To do so, in POS Pro:

1. On the **Home Screen**, tap **RFID Tag Status**. Depending on your custom settings, the **RFID Tag Status** button can be located in the navigation panel at the bottom or in the **More** menu.

{{% notice note %}}

**Configuration in CHQ**\
For the **RFID Tag Status** button to be available on POS Pro **Home Screen**, it must be configured under `chq > settings > company settings > v6 App Designer > Point of Sale v6 > iPad > Home`.

{{% /notice %}}

2. In the **RFID Tag Status** area, place the item tag on or near the connected RFID reader. Once the item is scanned, information about the item displays in the area, including its current status.

3. Tap the value in the **Change RFID Tag Status** field {{% inum "A" %}}. If the user doesn't have the **Sales Receipts -- Manually deactivate RFID tags** security right, on tapping the value in the **Change RFID Tag Status** field:

   a. In the **RFID Tag Status Change** dialog, tap **Manager Override**.

   b. In the log in dialog, have the user with the appropriate security rights enter their credentials and then tap **Log In**.
{{% gimg src="QRG_main/image95.png" width="500px" %}}

The status of the tag will be changed and displayed in the **RFID Tag Status** area.

4. Remove the item from the RFID reader.

5. To return to the **Home** **Screen**, tap the <i class="fas fa-home"></i> icon at the bottom-left or tap **Close** in the upper left corner.