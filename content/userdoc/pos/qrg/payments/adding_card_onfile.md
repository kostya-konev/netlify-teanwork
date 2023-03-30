---
title: "Adding a card on file with Adyen"
date: 2022-02-11T16:20:19+02:00
draft: false
weight: 4
---
In POS PRO, it’s possible to save a customer’s card on file even if the customer is not making a purchase with that card. 

Once saved, on the customer’s request, the store associate can simply tap a saved card at the time of payment instead of entering card details on the payment terminal.
{{% notice note %}}
As of version 6.38.149, the card on file feature is available only for payments with Adyen.  
Please be advised that Teamwork doesn't store sensitive credit and debit card details. When data is transferred between Teamwork and Adyen, tokenization is used to ensure PCI compliance.  
{{% /notice %}}
To save a card:

1. On the **Home Screen**, tap **New Sale**.

2. In the **Sales Receipt** area, on the **Customer** tab, add a customer record. This is required for saving a card.

2. Tap **Add Card on File**. Depending on your custom settings, the button may be located at the top of the right-side panel {{% inum "1" %}} or in the **More** menu {{% inum "2" %}}:
{{% gimg src="V6.38 Mob Rel Guide/6.38_posrelguide_1.jpg" width="700px"%}}
3. When the `Waiting for terminal...` screen appears, have the customer swipe, insert, or touch their card on the connected payment terminal:
{{% gimg src="V6.38 Mob Rel Guide/6.38_posrelguide_2.jpg" width="700px"%}}
After the authorization has been completed, the `Approved` icon appears. Also, at the bottom, you'll see the following message: `The card has been added to the customer's record`.

4. Tap **Close** to return to the **Sales Receipt** area. Please note that it's not required to finalize the Sales Receipt.
{{% notice info %}}
If the customer is making a purchase and it's required to save the customer's card, under **Payments**, simply turn on the **Add card to file** switch before taking the payment.
{{% /notice %}}

