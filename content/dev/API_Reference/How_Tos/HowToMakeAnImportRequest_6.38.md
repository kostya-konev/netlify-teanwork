---
title: "How to make an import API request"
date: 2022-02-21T10:17:00-05:00
draft: true
weight: 13
---

<!-- begin comment block (when active)-------------------- -->
{{% notice warning %}}
The API Reference is currently under construction and its contents should not be used until further notice.
{{% /notice %}}
<!-- end comment block (when active)-------------------- -->

{{% notice info %}}
The **Swagger UI** can be used to make an import request. See the [*How To Use the Swagger UI*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/Use_the_Swagger_UI/) document for further information.
{{% /notice %}}

An import request is made by supplying the following:

- Request URL: ***\<chq-url\>*****/chqapi/import/*****\<api-id\>***  
- Request method: **POST**  
- HTTP Headers: **Content-Type: application/json**  
- HTTP Headers: **ApiKey: *\<api-key\>***

***\<chq-url\>*** is the URL for your copy of CHQ as supplied by Teamwork.

***\<api-id\>*** is an identifier of the API as listed in the table below.

***\<api-key\>*** is the API key which was generated as described in the Creating and managing API keys topic.

In addition, the request body for the desired API must be supplied. See that API’s documentation in the **Import APIs** section for details.

#### <font color=#008AE8>**Import API Name/Id Cross-Reference**</font>

<font color="Crimson">***????????? This list needs to be reviewed to ensure that the values are correct. ??????????***</font>


**Import API Name** | **Import API Id**
--- | --- |
Adjustment | adjustment |
Advance Ship Notice | asn |
Count Memo Scan | CountMemoScan |
Create Count Memo | CreateCountMemo |
Create Count Memo Adjustment | CreateAdjustmentForCountMemo |
Credit Memo | credit-memo |
Credit Memo Transaction | credit-memo-transaction |
Custom Table | custom-table |
Custom Table Definition | custom-table-definition |
Customer | customer |
Echo ECommerce Quantity | echo/EcommQty |
External Location | external-location |
External Location Qty | external-location-qty |
External Order | external-order |
Gift Card | gift-card |
Inventory | inventory |
Inventory Brand | invenbrand |
Inventory Class | invenclass |
Inventory Department | invendepartment |
Inventory Department Settings | invendepset |
Inventory Price | inven-price |
Inventory Season | invenseason |
Location | location |
Merge Customers | merge-customer |
Postal Code | postalcode |
Promo Engine | promoengine |
Promo Group | promogroup |
Purchase Order | purchase-order |
Purchase Order Acknowledgement | purchase-order-acknowledgement |
Purchase Order Sent Acknowledgement | purchase-order-sent-acknowledgement |
Purchase Receipt | purchase-receipt |
Quantity Status Update | QtyStatusUpdate |
Quantity Status Reset | QtyStatusItem |
Reserve Orders | reserve-order |
Return Receipt | return-receipt |
RMA Order | rma-order |
RMA Worksheet | rma-worksheet |
Role Employee | role-employee |
Sales Order | sales-order |
Sales Receipt | receipt |
Sales Receipt Update | receipt-update |
Secure Customers | secure-customers |
Teamwork Analytic Services Report | tasreport/stream |
Traffic Counter | traffic-counter-import |
Transfer Order | transfer-order |
Vendor | vendor |
Vendor Invoice | vendor-invoice |
