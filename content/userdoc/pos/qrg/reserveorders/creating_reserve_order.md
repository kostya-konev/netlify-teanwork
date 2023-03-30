---
title: "Creating a Reserve Order"
date: 2022-03-09T12:35:56+02:00
draft: false
weight: 1
---
A Reserve Order allows for reserving items on the customer's request or if some items are out for cleaning or repair. Reserved items are taken out of the available-to-sell quantity.

To create a new Reserve Order, in POS PRO:

1. On the Home Screen, tap **Reserve Orders**. Depending on your custom settings, the button can be located in the navigation bar at the bottom or in the **More** menu.  
2. In the **Reserve Orders** area, tap **New Order** in the upper right corner:
{{% gimg src="V6.38 Mob Rel Guide/6.38_posrelguide_13.jpg" width="700px"%}}
3. In the area that opens, on the **Order** tab, define the **Reserve Reason** field:
{{% gimg src="V6.38 Mob Rel Guide/6.38_posrelguide_20.jpg" width="700px"%}} 
Optionally, in the **Expiration Date** field, set the date when the order expires and the items are automatically returned to available-to-sell.
3. Tap the **Customer** tab at the top. 
4. On the **Customer** tab, add a customer record by doing one of the following:

    - to scan the customer's membership code, tap **Scan**
    - to manually enter customer information, use the **Customer Search** field. By tapping search parameters above the search field (for example, **Name** or **Member Code**), you can shoose by what customer field to search
    - to create and add a new customer record, tap **Create New Customer** at the bottom
{{% notice info %}}
If the customer self-registered at your store on the same day, you can add the required customer record from the **RECENT CUSTOMERS** list. To open the list, tap **Show Recent Customers** below the search field.
{{% /notice %}}
5. Tap the **Items** tab.
6. To add an item to the Order, do one of the following:
{{% gimg src="V6.38 Mob Rel Guide/6.38_posrelguide_21.jpg" width="700px"%}} 
    - tap **Scan** at the top and then scan the required item {{% inum "A" %}}
    - scan the item with your RFID reader
    - use the **Search** field to find the item {{% inum "B" %}}

Note that each item is added with **Order Qty** = `1` and assigned the `Reserved` status.

7. To change the item's quantity:

    - Swipe the required item left and then tap **Edit**.
    - In the dialog, define the **Order Quantity** field. 
    - Tap **Save** in the upper right corner.

10. When finished configuring the Order, to reserve the items, tap **Release** at the bottom-right.

