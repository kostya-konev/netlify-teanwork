---
title: "How to configure CHQ for Adyen"
date: 2022-01-24T11:43:00-05:00
draft: false
weight: 2
---

{{% notice warning %}}
This vendor guide is currently under construction and its contents should not be used until further notice.
{{% /notice %}}

- [Configuring CHQ globally](#Adyen-HowTo-ConfigureChq-Globally)  
- [Configuring CHQ per location](#Adyen-HowTo-ConfigureChq-Locally)  
- [Configuring payment methods](#Adyen-HowTo-ConfigureChq-PaymentMethods)  
- [Configuring autodownload of the *Payment* report](#Adyen-HowTo-ConfigureChq-Autodownload)

---

## **Configuring CHQ globally** {#Adyen-HowTo-ConfigureChq-Globslly}

Configuring CHQ globally allows for the entry of one set of credentials which aill apply to all locations.

This is done by navigating to the **chq** > **settings** > **sales** > **payment processing** pane and entering the credentials provided by Adyen into the **adyen** area.

{{% gimg src="VG_Adyen_V01.00/ConfigureChq_01.jpg" title="CHQ Settings: payment processing" width="1000px" %}}
<br>
{{% notice warning %}}

The **reporting user name** and **reporting password** fields ***must*** be set as they are needed to make use of the *Adyen Payment Suspected Duplicates* report.

The **service user name** field should include the *@examplecompany.com* suffix.

{{% /notice %}}

---

## **Configuring CHQ per location** {#Adyen-HowTo-ConfigureChq-Locally}

Configuring CHQ per location should be done if there is a need to designate a separate set of Adyen credentials for each location. This is done as follows:

1. Navigate to **chq** > **settings** > **location/location settings**. Then select a location in the grid and click the **edit** button to open the **Edit Location** dialog box.

{{% gimg src="VG_Adyen_V01.00/ConfigureChq_02.jpg" title="CHQ Settings: location / location settings" width="1000px" %}}

2. In the **Edit Location** dialog select the **payments** tab and enter the Adyen credentials in the **payment processing – adyen** area.

{{% gimg src="VG_Adyen_V01.00/ConfigureChq_03.jpg" title="CHQ Settings: payments dialog" width="1000px" %}}
<br>
{{% notice warning %}}

The **reporting user name** and **reporting password** fields must be set as they are needed to make use of the *Adyen Payment Suspected Duplicates* report.

The **service user name** field should include the *@examplecompany.com* suffix.

{{% /notice %}}

---

## **Configuring payment methods** {#Adyen-HowTo-ConfigureChq-PaymentMethods}

The *Credit Card* and *Credit Card Credit* payment methods must be configured in CHQ in order to interact with Adyen. This is done as follows:

1. Navigate to the **chq** > **settings** > **sales** > **payment methods** pane.

{{% gimg src="VG_Adyen_V01.00/ConfigureChq_04.jpg" title="CHQ Settings: payment methods" width="1000px" %}}

2. To add a credit card payment method if it doesn’t exist, click **new**, and enter the appropriate information in the resulting dialog box(es).

3. To modify an existent credit card payment method, select the appropriate entry in the grid and click **edit**, and update the appropriate information in the resulting dialog box(es).

4. The **payment processing** field for the location must have the “Adyen Terminal API” value. This is set by selecting the credit card payment method in the grid and clicking **location settings**. In the **Credit Card – locations settings** dialog, if the desired location’s **payment processing** field is not set to “Adyen Terminal API”, click **edit** and select “Adyen Terminal API” in the **payment processing** combo box, and then click **save**.

{{% gimg src="VG_Adyen_V01.00/ConfigureChq_05.jpg" title="CHQ Settings: payment dialog" width="450px" %}}
<br>
{{% notice warning %}}

If the settings described above are not properly configured in CHQ, the *Credit Card* and *Credit Card Credit* payment methods set for the Adyen Terminal API will be disabled in POS. For more information on these settings refer to the [V6.27 CHQ Release Guide](https://twc-pedia-data.teamworkinsight.com/pdf/relguides/V6.27%20CHQ%20Release%20Guide_05-16-2022.pdf)

{{% /notice %}}

---

## **Configuring autodownload of the *Payment* report** {#Adyen-HowTo-ConfigureChq-Autodownload}

- [Overview](#Adyen-HowTo-ConfigureChq-Autodownload-Overview)  
- [Configuring the webhooks](#Adyen-HowTo-ConfigureChq-Autodownload-CongfiguringWebhooks)  
- [Creating the report service user](#Adyen-HowTo-ConfigureChq-Autodownload-CreatingRptSvcUser)  
- [Configuring the payment accounting report](#Adyen-HowTo-ConfigureChq-Autodownload-ConfiguringPaymentRpt)  

### **Overview** {#Adyen-HowTo-ConfigureChq-Autodownload-Overview}

The *Payment* accounting report is a financial report provided by Adyen to track status changes, events, and modifications for all payments.

TWC uses the data produced by the *Payment* accounting report to generate Teamwork reports containing payment details from Adyen payments.

To allow for automatic downloading of the *Payment* accounting report by CHQ, the following needs to be done:  
1. Configure the webhooks.  
2. Create the Report Service User.  
3. Configure the Payment accounting report.

### **Configuring the webhooks** {#Adyen-HowTo-ConfigureChq-Autodownload-CongfiguringWebhooks}

Webhooks need to be configured in order for CHQ to be notified once the report has been successfully generated on the Adyen side and is available for collection by TWC. This is done as follows.

1. Log in to the Adyen Admin portal.  
2. In the left-side navigation panel, under **Developers**, click **Webhooks**.  
3. Click **+ Webhook** in the upper-right corner.  
4. In the **Create new webhook** dialog that opens, click **Add** next to **Report** details:

{{% gimg src="VG_Adyen_V01.00/ConfigureChq_06.jpg" title="Create new webhook dialog" width="1000px" %}}

5. Under **Configure webhook settings for...**, set the following:

{{% gimg src="VG_Adyen_V01.00/ConfigureChq_07.jpg" title="Configure webhook settings" width="600px" %}}

* **URL:** https://<span class="fg-brown">***\<your-chq-server\>***</span>/api/webhooks/incoming/Adyen, with <span class="fg-brown">***\<your-chq-server\>***</span> being the name of your CHQ as supplied by Teamwork.  
* **SSL version:** TLSv1.2  
* **Active:** TRUE  
* **Method:** JSON

6. Scroll down to the **Merchant Accounts** area and in the **Select Merchant Accounts** drop-down menu select “Include Accounts”.  
7. Turn on the account(s) related to your CHQ:

{{% gimg src="VG_Adyen_V01.00/ConfigureChq_08.jpg" title="Adyen Merchant Accounts settings" width="900px" %}}

8. Click **Save Configuration** at the bottom.  
9. Under Webhooks, click **+ Webhooks** again to create one more webhook.  
10. In the **Create new webhook** dialog, click **Add** next to **Standard notifications**:

{{% gimg src="VG_Adyen_V01.00/ConfigureChq_09.jpg" title="Create new webhook dialog" width="1000px" %}}

11. Repeat steps 5–8 without any additional changes.

### **Creating the report service user** {#Adyen-HowTo-ConfigureChq-Autodownload-CreatingRptSvcUser}

To create the *Report Service User* you should do the following:

1. In the **Adyen Admin** portal, navigate to **Developers** > **API credentials**.  
2. On the upper-right, click the blue **Create new credential** button:

{{% gimg src="VG_Adyen_V01.00/ConfigureChq_10.jpg" title="API credentials" width="1000px" %}}

3. In the **Create New Report Service User** area, under **User Account Details**, in the **User Type** field, click to select “Report User”.  
4. Note down the value of the **User Name** field. You will need this value later.

{{% gimg src="VG_Adyen_V01.00/ConfigureChq_11.jpg" title="Create new report service user" width="900px" %}}

5. Scroll down to find the **Basic Auth** area and note down the value of the **Password** field. You will need this value later.

{{% notice warning %}}

This is your ***one and only*** chance to note down the password. Once the user is saved, there will be no way to review the current password. If lost, the password will require resetting.

{{% /notice %}}

6. Scroll down to find the **Roles and Associated Accounts** area.  
7. Click **Roles** on the top-left and then turn **Merchant Report Download** role on:

{{% gimg src="VG_Adyen_V01.00/ConfigureChq_12.jpg" title="Roles and associated accounts" width="1000px" %}}

8. Click **Accounts** and select the account(s) related to your CHQ:

{{% gimg src="VG_Adyen_V01.00/ConfigureChq_13.jpg" title="Roles and associated accounts #2" width="1000px" %}}

9. Once done, click **Save** at the bottom.  
10. Sign in to your CHQ and navigate to the **chq** > **settings** > **sales** > **payment processing** pane.  
11. In the **adyen** area of that pane, populate the **reporting user name** and **reporting password** fields with the values copied out during steps 4 and 5 above:

{{% gimg src="VG_Adyen_V01.00/ConfigureChq_14.jpg" title="CHQ Settings: payment processing" width="1000px" %}}

12. Click **save**.

### **Configuring the payment accounting report** {#Adyen-HowTo-ConfigureChq-Autodownload-ConfiguringPaymentRpt}

To configure the *Payment* accounting report you would do the following:

1. Log in to the **Adyen Admin** portal.  
2. In the left-side navigation panel, click **Account** and then **Report columns**.  
3. In the **Configure report columns for...** area, under **Payment accounting**, click **Configure**.

{{% gimg src="VG_Adyen_V01.00/ConfigureChq_15.jpg" title="Configure report columns" width="900px" %}}

4. Find and enable the following columns by selecting the checkboxes to the left of the following column names:  
- **Acquirer Reference**  
- **Card Number**  
- **Creation Date**  
- **Original Amount**

For example,

{{% gimg src="VG_Adyen_V01.00/ConfigureChq_16.jpg" title="Columns" width="800px" %}}

Other columns may remain at their default values.

5. In the left-side navigation panel, click **Reports** and, in the pane that opens, find the **Payment accounting** report area:

{{% gimg src="VG_Adyen_V01.00/ConfigureChq_17.jpg" title="Payment accounting" width="900px" %}}

6. In that area, click **Automatic generation**.

After your report is configured, you can review all the successful execution attempts in the **Adyen Admin** portal. Under **Reports**, click the **Payment accounting** report name.

Your available reports (in.CSV format ) will be listed in the grid under **Generated reports**:

{{% gimg src="VG_Adyen_V01.00/ConfigureChq_18.jpg" title="Payment accounting #2" width="900px" %}}
