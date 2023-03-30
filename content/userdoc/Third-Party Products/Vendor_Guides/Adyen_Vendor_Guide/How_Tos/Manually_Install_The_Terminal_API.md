---
title: "How to manually install the terminal API"
date: 2022-01-24T10:15:00-05:00
draft: false
weight: 1
---

{{% notice warning %}}
This vendor guide is currently under construction and its contents should not be used until further notice.
{{% /notice %}}

This topic describes how to install the Adyen Terminal API for direct connections to Adyen terminal devices.

- [Install the Adyen Public Root Certificate](#Adyen-HowTo-ManuallyInstallAPI-PublicRoot)  
- [Configure CHQ settings](#Adyen-HowTo-ManuallyInstallAPI-ConfigureChq)  
- [Configure POS PRO settings](#Adyen-HowTo-ManuallyInstallAPI-ConfigurePos)

---

## Install the ***Adyen Public Root Certificate*** {#Adyen-HowTo-ManuallyInstallAPI-PublicRoot}

To install the Adyen public root certificate you will need to do the following:

1. Download a corresponding certificate to the iOS device from the Adyen Docs web page (https://docs.adyen.com/point-of-sale/choose-your-architecture/local/protect). Download the links for each terminal type which could be found in “Step 1: Install certificate” section. iOS will prompt you to allow the download.

{{% gimg src="VG_Adyen_V01.00/ManuallyInstallTerminalAPI_01.jpg" title="Install Profile" width="600px" %}}

2. After you download a profile, you’ll see the message “Profile Downloaded” and the profile will be available in the iOS Settings.

{{% gimg src="VG_Adyen_V01.00/ManuallyInstallTerminalAPI_02.jpg" title="Settings" width="600px" %}}
<br>
<br>
{{% notice warning%}}

If a profile is not installed within eight minutes of it being downloaded it is automatically deleted.

{{% /notice %}}

3. Select the downloaded profile and confirm installation.

{{% gimg src="VG_Adyen_V01.00/ManuallyInstallTerminalAPI_03.jpg" title="Install Profile" width="600px" %}}

4. Once the profile is installed, navigate to **Settings** > **General** > **About** > **Certificate Trust Settings** to enable full trust for a root certificate.

{{% gimg src="VG_Adyen_V01.00/ManuallyInstallTerminalAPI_04.jpg" title="Certified Trust Settings" width="600px" %}}

Tap the toggle switch next to **Adyen Root Certificate** and tap the **Continue** button in the **Root Certificate** dialog box to confirm the enabling of the root certificate.

{{% gimg src="VG_Adyen_V01.00/ManuallyInstallTerminalAPI_05.jpg" title="Root Certificate Warning" width="600px" %}}

---

## **Configure CHQ settings** {#Adyen-HowTo-ManuallyInstallAPI-ConfigureChq}

To interact with the Adyen terminals you will need to set CHQ settings as follows:

1. Obtain the Adyen credentials needed for the CHQ settings from the Adyen portal. This is done by logging in to Adyen and navigating to **Point of Sale** > **Terminals** > **(select the desired terminal)** > **Integrations** and in the **Encryption** key area click the **Decrypted** button to view or edit the key. The key values should be noted down for later use.

{{% gimg src="VG_Adyen_V01.00/ManuallyInstallTerminalAPI_06.jpg" title="Encryption Key" width="600px" %}}

2. Enter the credentials in CHQ by navigating to the **chq** > **settings** > **sales** > **payment processing** pane and updating the fields in the **adyen terminal API** area using the information from Step 1.

{{% gimg src="VG_Adyen_V01.00/ManuallyInstallTerminalAPI_07.jpg" title="CHQ Settings: Adyen Terminal API" width="600px" %}}

3. Navigate to the **chq** > **settings** > **sales** > **payment methods** pane. Select the previously created Adyen entry in the grid and click the **location settings** button to open the **location settings** dialog box. <span class="ir">Select **location** > **Under payment processing** tab > **Select Adyen Terminal API**.</span>

{{% gimg src="VG_Adyen_V01.00/ManuallyInstallTerminalAPI_08.jpg" title="CHQ Settings: Adyen location settings" width="600px" %}}

<span class="ir">***!!!! The above image doesn’t match the 6.34 dialog box. Is this image from 5.39 or 6.17? The instructions in red above are not valid for the 6.34 dialog. !!!!***</span>

--- 

## **Configure POS PRO settings** {#Adyen-HowTo-ManuallyInstallAPI-ConfigurePos}

To interact with the Adyen terminals you will need to set POS PRO settings as follows:

1. In POS V6Pro navigate to the **... (More)** > **Settings** > **Payment Terminals** pane and tap the **Edit Payment Terminals** button. In the **Payment Terminals** dialog box select “Adyen Terminal API”.

{{% gimg src="VG_Adyen_V01.00/ManuallyInstallTerminalAPI_09.jpg" title="Good Morning" width="600px" %}}

{{% gimg src="VG_Adyen_V01.00/ManuallyInstallTerminalAPI_10.jpg" title="Select Settings" width="600px" %}}

{{% gimg src="VG_Adyen_V01.00/ManuallyInstallTerminalAPI_11.jpg" title="Edit Payment Terminals" width="600px" %}}

2. In the **Payment Terminals** dialog box enter the IP address of the Adyen terminal and the terminal’s id which is the terminal’s device model and serial number (for example, “M400-401591948”). This information can be found by going to the Adyen terminal and tapping 5 then tapping the green button.

{{% gimg src="VG_Adyen_V01.00/ManuallyInstallTerminalAPI_12.jpg" title="Payment Terminal Type" width="600px" %}}
