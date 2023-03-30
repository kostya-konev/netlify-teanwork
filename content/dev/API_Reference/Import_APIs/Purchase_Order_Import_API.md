---
title: "Purchase Order Import API"
date: 2022-05-25T09:16:00-05:00
draft: true
weight: 16
---

{{% notice warning %}}
The API Reference is currently under construction and its contents should not be used until further notice.
{{% /notice %}}

- [Overview](#Overview)
- [Request endpoint](#RequestEndpoint)
- [Request settings](#RequestSettings)
- [Request format](#RequestFormat)
- [Request example(s)](#RequestExamples)
- [Response example(s)](#ResponseExamples)

---

## Overview {#Overview}

The **Purchase Order Import** API is used to import purchase orders from the client to Teamwork.

See the [*How to make an import API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnImportRequest_6.41/) document for a description on how import requests are made and on the standard  response formats used. The **Purchase Order Import** request format will be described below.


## Request endpoint {#RequestEndpoint}

Method: **POST**  
URL: <font color="Brown"><b><i>\<your-chq-url\></i></font>/chqapi/import/purchase-order</b>  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <font color="Brown">***\<your-api-key\>***</font>

<font color="Brown">***\<your-chq-url\>***</font> is the URL of your CHQ as supplied by Teamwork.  
<font color="Brown">***\<your-api-key\>***</font> is your API key value. See the [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) document for further info.

## Request settings {#RequestSettings}

Below are the values which can be supplied in the **Settings** group of the import request.

The **Key** column lists the names of the available settings. The **Supported Values** column lists the valid values which can be supplied for the setting. The **Default** column lists the default value for each setting if that setting is not supplied.

**Key** | **Supported Values** | **Default** |
---- | ---- | ---- |
ItemSetting | ExternalId, Plu, Clu, Upc | ExternalId |
VendorSetting | No, Name | No |
ItemDiscountSetting | Percent, Amount | Percent |
DiscardUserSession | true, false | false |
LocationSetting | Code, TeamworkId, ExternalId | Code |
UnarchivePOItemsSetting | DoNotUnarchive, Unarchive | DoNotUnarchive |

## Request format {#RequestFormat}

Any field not explicitly marked as **Required** is optional and can be omitted. See the [*JSON Data Types*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/JsonDataTypes_6.41/) document for a description of the values which could appear in the **Data Type** column.

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
Source | string | The source of the data being supplied to the import. **Required** |
CommunicationId | string, guid | A unique identifier of the request (see the [*Handling the CommunicationId parameter*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/HandlingTheCommunicationIdParam_6.41/) document for additional info). |
<font color=#008AE8>**Data**</font> | | <font color=#008AE8>A group containing the following fields and groups. **Required**</font> |
<font color=#008AE8>**Data: Request**</font> | | <font color=#008AE8>A group containing the following fields and groups. **Required**</font> |  
<font color=#008AE8>**Data: Request: Settings**</font> | | <font color=#008AE8>A group containing the following fields and groups. **Required**</font> |  
ItemSetting | string, enum | An indicator of which value is to be used to identify items. Its value must be one of the following: "ExternalId", "Plu", "Clu", "Upc". |
VendorSetting | string, enum | An indicator of which value is to be used to identify vendors. Its value must be one of the following: "No", "Name". |
ItemDiscountSetting | string, enum | An indicator of which value is to be used to for item discounts. Its value must be one of the following: "Percent", "Amount". |
DiscardUserSession | boolean, null | An indicator as to whether or not a purchase order can be edited via an API request if the same putchase order is being edited elsewhere at the moment of the request execution. |
LocationSetting | string, enum | An indicator of which value is to be used to identify locations. Its value must be one of the following: "Code", "TeamworkId", "ExternalId". |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Settings***</font> |
<font color=#008AE8>**Data: Request: PurchaseOrders**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with from 1 to 10 entries. **Required**</font> |  
ExternalId | string, len:1-100, null | An identifier of the purchase order used when inteacting with an external system. |
PONum | string, len:1-64, null | An identifier of the purchase order. |
Vendor | string, len:1-30 | An identifier of the vendor for the purchase. |
DefaultLocation | string, len:1-128 | An identifier of the default location from which purchases will be fulfilled. <font color="Crimson">***????????***</font> |
OrderDate | string, datetime, null | A timestamp of when the purchase order was created. **NOTE:** This must be supplied for a new purchase order.<font color="Crimson">***????????***</font> |
VendorRefNo | string, len:1-128, null | The vendor’s reference number for the purchase order. |
ShipDate | string, datetime, null | A timestamp of when the purchase order was shipped / is expected to be shipped.<font color="Crimson">***????????***</font> |
ArrivalDate | string, datetime, null | A timestamp of when the purchase order arrived / is expected to arrive.<font color="Crimson">***????????***</font> |
CancelDate | string, datetime, null | A timestamp of when the purchase order was cancelled.<font color="Crimson">***????????***</font> |
Archived | boolean, null | An indicator as to whether or not the purchase order has been archived. |
Notes | string, null | Misc. notes about the purchase order. |
LeadTime | integer, null | The number of weeks the vendor needs to fill an order. |
PaymentTermName | string, null | An identifier of the purchase order’s payment term. |
PaymentDiscountPercent | number, null | The purchase order’s payment discount percentage. |
PaymentMethodCode | string, null | A code identifying the purchase order’s payment method. |
ContractPONo | string, null | An identifier of the purchase order’s contract. |
DistributionType | string, null | An indicator of the purchase order’s distribution type. When supplied, its value must be one of the following: "SingleLocation", "DropShipments", "Allocation", *null* |
DeviceTransactionNumber | string, null | The order’s transaction number for the device used for the purchase order. |
IsHeld | boolean, null | An indicator as to whether the purchase order is being held or not. |
PayToVendor | string, null | An identifier of the purchase order’s pay to vendor. |
CurrencyCode | string, null | An identifier of the currency used for the purchase order. |
ExchangeRate | number, null | The purchase order’s currency exchange rate. |
ExcludeFromBackorder | boolean, null | An indicator as to whether or not the purchase order is to be excluded from back orders.<font color="Crimson">***????????***</font> |
CustomDate1 - 4 | string, datetime, null | These four fields are customizable date values for the purchase order. |
CustomFlag1 - 4 | boolean, null | These four fields are customizable flags for the purchase order. |
CustomLookup1 - 8 | string, len:1-128, null | These eight fields are customizable lookup values for the purchase order. |
CustomDecimal1 - 4 | number, range:-792281625-792281625, null | These four fields are customizable floating-point values for the purchase order. |
CustomNumber1 - 4 | integer, null | These four fields are customizable integer values for the purchase order. |
CustomText1 - 4 | string, len:0-256, null | These four fields are customizable text values for the purchase order. |
<font color=#008AE8>**Data: Request: PurchaseOrders: Items**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |  
ExternalId | string, len:1-100, null | An identifier of the item used when interacting with an external system. |
LineNo | integer, range:0-*, null | The number of the line where the item appears in the purchase order. |
ItemIdentifier | string, len:1-40, null | An identifier of the item. |
ShipToLocation | string, len:1-128 | An identifier of the location the item should be shipped to. |
Quantity | number, range:0-792281625 | The quantity of the item ordered. |
Archived | boolean, null | An indicator as to whether the item has been archived or not.<font color="Crimson">***????????***</font> |
CustomDate1 - 2 | string, datetime, null | These two fields are customizable date values for the item. |
CustomFlag1 - 2 | boolean, null | These two fields are customizable flags for the item. |
CustomLookup1 - 4 | string, len:1-128, null | These four fields are customizable lookup values for the item. |
CustomDecimal1 - 2 | number, range:-792281625-792281625, null | These two fields are customizable floating-point values for the item. |
CustomNumber1 - 2 | integer, null | These two fields are customizable integer values for the item. |
CustomText1 - 2 | string, len:0-256, null | These two fields are customizable text values for the item. |
Discount | number, range:0-792281625, null | The item’s discount. THis will either be a percentage or an amount based upon the **ItemDiscountSetting** setting. |
OrderCost | number, range:0-792281625, null | The item’s order cost. |
ForeignCurrencyOrderCost | number, range:0-792281625, null | The item’s order cost in foreign currency. |
<font color=#008AE8>**Data: Request: PurchaseOrders: Items: ItemFees**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |  
PurchaseOrderItemFeeId | string, len:1-30, null | An identifier of the item's item fee. |
ServiceFeeName | string, len:1-128 | An identifier of the item's service fee. |
Quantity | number, range:0-792281625, xmin| The fee’s quantity. |
Price | number, range:0-792281625 | The item’s price. |
ExtPrice | number, null | The item’s extended price. |
Discount | number, range:0-792281625, null | The item’s discount. This will either be a percentage or an amount based upon the **ItemDiscountSetting** setting. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: PurchaseOrders: Items: ItemFees***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: PurchaseOrders: Items***</font> |
<font color=#008AE8>**Data: Request: PurchaseOrders: GlobalFees**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |  
PurchaseOrderFeeId | string, len:1-30, null | An identifier of the purchase order fee. |
ServiceFeeName | string, len:1-128 | An identifier of the service fee. |
Quantity | number, range:0-792281625, xmin | The fee’s quantity. |
Price | number, range:0-792281625 | The fee’s price. |
Discount | number, range:0-792281625, null | The fee’s discount. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: PurchaseOrders: GlobalFees***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: PurchaseOrders***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*continuation of* ***Data***</font> |
ApiDocumentId | string, guid | A unique identifier of the API document being used. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data***</font> |

## Request example(s) {#RequestExamples}

<font color="Crimson">***???????? need example ????????***</font>

## Response example(s) {#ResponseExamples}

<font color=#008AE8>**In Progress Import Response**</font>

~~~

{
   "Id": "79b38031-c925-4c07-893d-8ab1dc52927b",
   "Status": "InProcess",
   "Progress": null,
   "TotalRecords": null,
   "AcceptedRecords": null,
   "ErrorRecords": null,
   "ElapsedTime": null,
   "ErrorMessage": null,
   "Lines": [
      {
         "EntityNo": "6",
         "EntityId": "43fb8cf0-c5d8-457b-9db6-79035f8304ea",
         "Error": null,
         "Status": "InProcess"
      }
   ],
   "ApiType": "simplified-purchase-order-import",
   "Source": "my_integration"
}

~~~

<font color=#008AE8>**Successful Import Response**</font>

~~~

{
   "Id": "06daa072-57d9-48f6-b523-851adab82fa5",
   "Status": "Successful",
   "Progress": null,
   "TotalRecords": null,
   "AcceptedRecords": null,
   "ErrorRecords": null,
   "ElapsedTime": null,
   "ErrorMessage": null,
   "Lines": [
      {
         "EntityNo": "4649",
         "EntityId": "a3cecec4-a42a-410e-92c9-10b79c7b75f3",
         "Error": null,
         "Status": "Successful"
      }
   ],
   "ApiType": "simplified-purchase-order-import",
   "Source": "my_integration"
}

~~~

<font color=#008AE8>**Error Import Response**</font>

~~~

{
  "Id": "66ceabcf-b42d-4cdf-a9e7-ec5b27068680",
  "Status": "Error",
  "Progress": null,
  "TotalRecords": null,
  "AcceptedRecords": null,
  "ErrorRecords": null,
  "ElapsedTime": null,
  "ErrorMessage": "Import error.",
  "Lines": [
    {
      "EntityNo": "17",
      "EntityId": "ddb9c8fe-9b1d-4669-9e9f-b87078c03fc6",
      "Error": "Error : purchase order is archived; purchase order eid 'str1234'. Error : DeviceTransactionNumber for purchase order can not be changed; purchase order eid 'str1234'.",
      "Status": "Error"
    }
  ],
  "ApiType": "simplified-purchase-order-import",
  "Source": "integrator"
}

~~~