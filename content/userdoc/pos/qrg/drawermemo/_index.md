---
title: "Drawer Memo"
date: 2021-08-13T13:05:27+02:00
draft: false
weight: 2
---
Drawer Memo (DM) records all transactions as well as all incoming and outgoing money in a store during a business day. DMs are opened via the [Start of Day](https://twdocs.netlify.app/userdoc/pos/qrg/drawermemo/dm_sod/) and closed via the [End of Day](https://twdocs.netlify.app/userdoc/pos/qrg/drawermemo/dm_eod/) process.  

On POS **Home Screen**, the status of your DM displays in the **DRAWER MEMO** section in the right-side panel: 
{{% gimg src="V6.42 QRG/6.42_qrg_3.jpg" width="500px" %}}
An *open* DM can have the following statuses:

- **Active**: this status is set once the DM is opened via the Start of Day process. If the DM is active, sales can be performed normally
- **Inactive**: this status is set manually by the user at any time or automatically when the DM expires. Sales cannot be performed against an inactive DM

Additionally, closed DMs are assigned the `Finalized` status. If there's no open DM at the moment, **Start new Drawer Memo** displays in the **DRAWER MEMO** section.
{{% notice tip %}}
For details on how to start a new Drawer Memo, see [Drawer Memo: Start of Day](http://localhost:52677/userdoc/pos/qrg/drawermemo/dm_sod/) and [Starting a Shift Drawer Memo](http://localhost:52677/userdoc/pos/qrg/drawermemo/starting_shift_dm/).
{{% /notice %}}
To manage your open DM, in the **DRAWER MEMO** section, tap **View**. In the **Drawer Memo** area that opens:
{{% gimg src="V6.42 QRG/6.42_qrg_4.jpg" width="700px" %}}

- To change the status of the DM to `Inactive` or `Active`, tap the value in the **Status** field {{% inum "A" %}}.
- To create a cash movement record (Take In/Out, Move to Safe, Deposit, etc.), tap **Manage Cash** {{% inum "B" %}} and then choose a record type.
- To view the history of cash movement records, under **MANAGE CASH HISTORY** {{% inum "C" %}}, tap the required cash movement type.
- To review the Start of Day, at the bottom-right, tap **Review Start of Day**.
- To create a midday count, tap **Midday Count**.
- To print your DM or Start of Day, in the upper-right corner, tap **Print** {{% inum "D" %}}.
- To start the End of Day process and finalize your DM, tap **End of Day** {{% inum "E" %}} (**End of Day/Shift** displays if shift DMs are available in your environment).

Additionally, you can review and manage historical DMs created on your device as well as configure default printing settings in the **Drawer Memo** area. 

To open the area, on the **Home Screen** of POS, tap **Drawer Memo**. Depending on your custom settings, the button can be located in the navigation bar at the bottom {{% inum "A" %}} or in the **More** menu {{% inum "B" %}}:
{{% gimg src="V6.42 QRG/6.42_qrg_5.jpg" width="700px" %}}
In the area that opens, on the **Drawer Memo** tab, you can see your open (active and inactive) DMs. 

On the **History** tab, historical DMs are listed:
{{% gimg src="V6.42 QRG/6.42_qrg_6.jpg" width="700px" %}}

To review a DM and/or print DM related documents, tap the required line.

Additionally, to configure default printing settings or define a cash drawer printer for your device, in the upper-right corner, tap **Options**.