---
title: "How to configure webhooks [6.41]"
date: 2022-02-15T09:28:00-05:00
draft: false
weight: 3
---

<!-- begin comment block (when active)-------------------- -->
{{% notice warning %}}
The API Reference is currently under construction and its contents should not be used until further notice.
{{% /notice %}}

- [What are webhooks](#WhatAreWebhooks)
- [Available webhooks](#AvailableEebhooks)
- [Configuring webhooks](#ConfiguringWebhooks)
- &nbsp;&nbsp;&nbsp;&nbsp;[Create a webhook](#CreatingWebhooks)
- &nbsp;&nbsp;&nbsp;&nbsp;[Edit a webhook](#EditingWebhooks)  
- &nbsp;&nbsp;&nbsp;&nbsp;[Remove a webhook](#RemovingWebhooks)
- [Webhook example](#WebhookExample)

---
<!-- end comment block (when active)-------------------- -->

## What are webhooks {#WhatAreWebhooks}

Webhooks allow third-party applications to make subscriptions to certain events in Teamwork and receive updates once such events happen. For example, it is possible to rely on webhooks for information on the creation of a sales receipt or an API document update, etc.

## Available webhooks {#AvailableWebhooks}

Currently, subscriptions are available for the following events:

**Code** | **Description** |
---- | ---- |
ApiDocumentUpdated | Occurs when an API document is updated. |
DrawerMemoFinalized | Occurs when a *Drawer Memo* is finalized. |
HeldSalesReceiptCreated | Occurs when a *Held Sales Receipt* is created. |
HeldSalesReceiptUpdated | Occurs when a *Held Sales Receipt* is updated. |
PurchasereceiptPosted | Occurs when a *PurchaseReceipt* has been posted. |
RmaWorksheetItemFinalized | Occurs when a *Return Worksheet* item is finalized. |
SalesReceiptCreated | Occurs when a *Sales Receipt* is created. |
SalesReceiptUpdated | Occurs when a *Sales Receipt* is updated. |
GIFTCARD_CREATED | Occurs when a new *Gift Card* has been created. |
GIFTCARD_UPDATED | Occurs when a new *Gift Card* has been updated. |
GIFTCARD_TXN_MADE | Occurs when a *Gift Card* transaction has been made. |
COUPON_CREATED | Occurs when a new *Coupon* has been created. |
COUPON_UPDATED | Occurs when an existing *Coupon* has been updated. |
CUSTOMER_CREATED | Occurs when a new *Customer* has been created. |
CUSTOMER_UPDATED | Occurs when an existing *Customer* has been updated. |
CUSTOMER_EMAIL_CHANGED | Occurs when a customer's email address has been changed. |
AtsLedgerChanged | Occurs when ATS/Commited quantity ledger data has been changed. For information on how to track ATS quantity changes using webhooks, see [*Tracking ATS Quantity Changes*](https://teamworkclients.atlassian.net/wiki/spaces/TC6A/pages/3678339167/Configuring+Webhooks+6.41) in Confluence. |
ShipRequestMemoCreated | Occurs when a *Ship Request Memo* is created. |
ShipRequestMemoDeleted | Occurs when a *Ship Request Memo* is deleted. |
ShipRequestMemoStatusUpdated | Occurs when the status of an external *Ship Memo* is changed. |
ShipRequestMemoUpdated | Occurs when a *Ship Request Memo* is updated. |
DamEchoStyleChanged | Occurs when echo digital assets have been changed for an inventory style. |

<br>

---

## Configuring webhooks {#ConfiguringWebhooks}

To configure (create, edit, or remove) a webhook, navigate to **chq** > **settings** > **integrations** > **webhooks**.

{{% gimg src="API_Reference/HowTos/ConfigureWebhooks/ConfigureWebhooks_06-41_01.png" title="CHQ: Webhooks menuitem" width="700px" %}}

In the **webhooks** pane, it is possible to:

* Create a new webhook.  
* Edit a webhook.  
* Remove a webhook.

#### Creating a webhook {#CreatingWebhooks}

1. In the **chq** > **settings** > **integrations** > **webhooks** pane, clicking **new** will open the **new webhook** dialog.

{{% gimg src="API_Reference/HowTos/ConfigureWebhooks/ConfigureWebhooks_06-41_02.png" title="CHQ: New Webhook" width="700px" %}}
<br><br>
{{% gimg src="API_Reference/HowTos/ConfigureWebhooks/ConfigureWebhooks_06-41_03.png" title="CHQ: New Webhook - General tab" width="700px" %}}

2. In the **general** area of the **general** tab of the dialog specify the following:

* **name**: the name of your webhook

{{% notice note %}}
Make sure your webhook name is meaningful and correlates with the trigger event. Once the name is provided, the dialog title will be changed from **new webhook** to *\<your-webhook-name\>*.
{{% /notice %}}

* **service URI**: the URI where it is desired to receive notifications.  
* **service secret**: a secret token used to secure webhooks.

{{% notice note %}}
The length of the secret token must be between 32 and 64 characters.
{{% /notice %}}

If it is desired to stop receiving notifications, select the **is paused** checkbox in the **general** section.

{{% gimg src="API_Reference/HowTos/ConfigureWebhooks/ConfigureWebhooks_06-41_04.png" title="CHQ: New Webhook - General area" width="500px" %}}

3. In the **description** area of the **general** tab of the dialog, provide additional information on the created webhook. For example, you can describe triggering conditions or specify possible restrictions for usage, and so on.

{{% gimg src="API_Reference/HowTos/ConfigureWebhooks/ConfigureWebhooks_06-41_05.png" title="CHQ: New Webhook - Description area" width="500px" %}}

4. Select the **events** tab (located under the **general** tab) on the left of the *\<your-webhook-name\>* dialog.

{{% gimg src="API_Reference/HowTos/ConfigureWebhooks/ConfigureWebhooks_06-41_06.png" title="CHQ: New Webhook - Events tab" width="300px" %}}

5. In the **events** tab, in the **selected** column, select the checkbox(es) for the events that you want to serve as triggers for your webhook.

{{% gimg src="API_Reference/HowTos/ConfigureWebhooks/ConfigureWebhooks_06-41_07.png" title="CHQ: New Webhook - Events list" width="700px" %}}

6. Once all of the desired events have been selected, click **save** for your new webhook to be created.

{{% gimg src="API_Reference/HowTos/ConfigureWebhooks/ConfigureWebhooks_06-41_08.png" title="CHQ: New Webhook - Event save" width="700px" %}}

#### Edit a webhook {#EditingWebhooks}

In the **chq** > **settings** > **integrations** > **webhooks** pane:

1. Click next to the webhook's name to highlight/select it.

2. Once the webhook is highlighted/selected, click **edit** at the top of the **webhooks** pane.

{{% gimg src="API_Reference/HowTos/ConfigureWebhooks/ConfigureWebhooks_06-41_09.png" title="CHQ: Edit Webhook" width="700px" %}}

3. In the **general** tab of the dialog that opens, it is possible to:  
* Change the webhook name.  
* Change the service URI.  
* Change the service secret.  
* Pause or unpause your webhook.  
* Provide a new description of your webhook.

4. In the **events** tab, it is possible to change the stack of events that serve as triggers for your webhook.

5. Once done, click **save**.

#### Remove a webhook {#RemovingWebhooks}

In the **chq** > **settings** > **integrations** > **webhooks** pane:

1. Click next to the webhook's name to highlight/select it.

2. On highlighting/selecting the webhook, click **remove** at the top of the **webhooks** pane.

{{% gimg src="API_Reference/HowTos/ConfigureWebhooks/ConfigureWebhooks_06-41_10.png" title="CHQ: Remove Webhook" width="700px" %}}

3. In the **remove webhook** dialog that opens, click **yes** to permanently remove your webhook.

{{% gimg src="API_Reference/HowTos/ConfigureWebhooks/ConfigureWebhooks_06-41_11.png" title="CHQ: Remove Webhook Confirmation dialog" width="400px" %}}

---

## Webhook example {#WebhookExample}

~~~
{
   "Id": "399efeadad604375b8d809966f8458af",
   "Attempt": "1",
   "Properties": {},
   "Notifications": [
      {
         "Id": "c6440281-9ffd-4565-99bc-1be3349563d1",
         "Action": "SalesReceiptCreated",
         "EId": null,
         "CreateDate": "2019-09-04T13:08:40.36",
         "ModifiedDate": "2019-09-04T13:08:53.67",
         "TeamworkCode": "10014001948"
      }
   ]
}
~~~
