---
title: "Purchase Order Export API [6.38]"
date: 2022-05-31T08:28:00-05:00
draft: true
weight: 16
---

{{% notice warning %}}
The API Reference is currently under construction and its contents should not be used until further notice.
{{% /notice %}}

- [Overview](#Overview)
- [Request endpoint](#RequestEndpoint)
- [Request settings](#RequestSettings)
- [Request filters](#RequestFilters)
- [Request sorts](#RequestSorts)
- [Successful response format](#SuccessfulResponse)
- [Request Example(s)](#RequestExamples)
- [Response Example(s)](#ResponseExamples)

---

## Overview {#Overview}

This topic describes the **Purchase Order Export** API which is used to export *Purchase Orders* from CHQ.

See the [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) document for a description on how export requests are made and on the standard request and response formats used. The **Purchase Export** successful response format will be described below.

## Request endpoint {#RequestEndpoint}

Method: **POST**  
URL: <font color="Brown">***\<your-chq-url\>*</font>/chqapi/export/purchase-order**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <font color="Brown">***\<your-api-key\>***</font>

<font color="Brown">***\<your-chq-url\>***</font> is the URL of your CHQ as supplied by Teamwork.  
<font color="Brown">***\<your-api-key\>***</font> is your API key value. See the [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) document for further info.

## Request settings {#RequestSettings}

Below are the settings which can be supplied in the **Settings** group of the export request to define which value (field) is to be used for a particular value class (see the [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) document for additional info).

The **Key** column lists the names of the available settings. The **Supported Values** column lists the valid values which can be supplied for the setting. The **Default** column lists the default value for each setting if that setting is not supplied.

**Key** | **Supported Values** | **Default** |
---- | ---- | ---- |
LocationIdentifierSetting | ExternalIdCode, Code, ExternalId, No, TeamworkId | ExternalIdCode |
ExternalIdCode | LoginName, FullName *(added in V6.13)*, TeamworkId  | LoginName |
PurchaseReceiptIdentifierSetting | ExternalId, No, DTN, TeamworkId | No |
SalesOrderIdentifierSetting | No, DTN, TeamworkId | No |
VendorIdentifierSetting | Code, Name,  TeamworkId | Code |
ItemIdentifierSetting | PLU, ExternalId, CLU, UPC, TeamworkId | PLU |
HoldReasonIdentifierSetting | Code, Description,TeamworkId | Code |
ShowDetailedQtyForAllocationDistributionType | Yes, No | Yes |

## Request filters {#RequestFilters}

Below are the filters which can be defined in the **Filters** group of the export request (see the [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) document for additional info).

The **Field** column lists the names of the fields on which filtering can be done. The **Operators** column lists the filter operator values which are valid for the field. The **Value** column describes the value expected for the field.

**Field** | **Operators** | **Value** |
---- | ---- | ---- |
RecModified |"Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. |
DeviceTransactionNumber | "Equal", "Contains" | Any valid long integer value representing a **DeviceTransactionNumber** for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |
PurchaseOrderNo | "Equal", "Contains" | Any string representing a valid purchase order number for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |
PurchaseOrderId | "Equal", "Contains" | Any string representing a guid identifying a purchase order for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |
Held | "Equal" | the values *true* or *false*. | 

## Request sorts {#RequestSorts}

Below are the fields for which sorting can be requested in the **SortDescriptions** group of the export request (see the [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) document for additional info). All of these fields can be sorted either *ascending* or *descending*. If no sort is explicilty requested, the default is to sort by **RecModified** *ascending*.

- PurchaseOrderNo (index)  
- RecModified (index)  
- DeviceTransactionNumber (index)  
- IsHeld (index)  
- ExternalId (index)  
- Type (sorted by number: 0=Corporate, 1=Store, 2=Store Replenishment, 3=Consolidate)  
- DistributionType (sorted by number: 0=Single Location, 1=Multi Location, 2=Allocation, 3=Consumer Drop Ship)  
- CreateDateTime  
- OrderDate  
- ShipDate  
- ArrivalDate  
- CancelDate  
- Archived  
- Notes  
- CustomDate1 - 4  
- CustomDecimal1 - 4  
- CustomFlag1 - 4  
- CustomNumber1 - 4  
- CustomText1 - 4

## Successful response format {#SuccessfulResponse}

Below is the format of the successful response to the export request. See the [*JSON Data Types*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/JsonDataTypes_6.41/) document for a description of the values which could appear in the **Data Type** column.

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
ApiDocumentId | string, guid | A unique identifier of the API document being used. |
Status | string,enum | The status of the response. The value will always be "Success" because if an error occured the standard *Error* response will be returned. <font color="Crimson">***????????***</font>|
ApiRequestType | string | <font color="Crimson">***????????***</font>
TotalRecords | int32 | The total number of records processed. <font color="Crimson">***????????***</font> |
RecordsCount | int32 | The number of records returned. <font color="Crimson">***????????***</font> |
ElapsedTime | string, datetime | The time it took to execute the export request. |
StartDateTime | string, datetime | A timestamp of when the export request started executing. |
EndDateTime | string, datetime | A timestamp of when the export request stopped executing. |
<font color=#008AE8>**Response**</font> | | <font color=#008AE8>A group containing the following fields and groups.</font> |
<font color=#008AE8>**Response: PurchaseOrders**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
IsDeleted | boolean | An indicaotr as to whether or not the purchase order has been deleted. |
PurchaseOrderNo | string | An identifier of the purchase order. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
VendorIdentifier | string | An identifier of the vendor. |
DeviceTransactionNumber | int64 | The order’s transaction number for the device used for the purchase order. |
IsHeld | boolean | An indicator as to whether or not the receipt is being held. |
ExternalId | string | An identifier of the purchase order used when interacting with an external system. |
Type | string, enum | An indicator of the order's type. Its value must be one of the following: "Corporate", "Store", "StoreReplenishment", "Consolidate" |
DistributionType | string, enum | An indicator of the order's distribution type. Its value must be one of the following: "SingleLocation", "MultiLocation", "Allocation", "ConsumerDropShip" |
DefaultLocationIdentifier | string | An identifier of the purchase order’s default location. |
CreateDateTime | string, datetime | A timestamp of when the purchase order was created. |
OrderDate | string, datetime | A timestamp of when <font color="Crimson">***??????????***</font> |
ShipDate | string, datetime | A timestamp of when the orderpurchase  was/is to be shipped.<font color="Crimson">***??????????***</font> |
ArrivalDate | string, datetime | A timestamp of when the purchase order was/is to be arrived.<font color="Crimson">***??????????***</font> |
CancelDate | string, datetime | A timestamp of when the purchase order was cancelled. |
Archived | boolean | An indicator as to whether or not the purchase order has been archived. |
Notes | string | Misc. notes about the purchase order. |
CustomDate1 - 4 | string, datetime | These four fields are customizable date values for the purchase order. |
CustomDecimal1 - 4 | double | These four fields are customizable floating-point values for the purchase order. |
CustomFlag1 - 4 | boolean | These four fields are customizable flags for the purchase order. |
CustomLookup1 - 8 | string | These eight fields are customizable lookup values for the purchase order. |
CustomNumber1 - 4 | int32 | These four fields are customizable integer values for the purchase order. |
CustomText1 - 4 | string | These four fields are customizable text values for the purchase order. |
<font color=#008AE8>**Response: PurchaseOrders: PurchaseReceipts**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
PurchaseReceiptNo | int32 | An identifier of the purchase receipt.<font color="Crimson">***??????????***</font> |
RecModified | string, datetime | A timestamp of when the receipt's record was last modified. |
DeviceTransactionNumber | int64 | The receipt’s transaction number for the device used for the purchase receipt. |
PurchaseReceiptId | string, guid | A unique identifier of the purchase recipt. |
PurchaseReceiptDateTime | string, datetime | A timestamp of when the receipt was created.<font color="Crimson">***??????????***</font> |
LocationIdentifier | string | An identifier of the location the purchase receipt was created at.<font color="Crimson">***??????????***</font> |
Type | string, enum | An indicator of the receipt's  type. Its value must be one of the following: "Regular", "Return" |
PostingDateTime | string, datetime | A timestamp of when the purchase receipt was posted. |
PostedByEmployee | string | An identifier of the employee who posted the purchase receipt. |
CreateDateTime | string, datetime | A timestamp of when the purchase receipt was created. |
CreateEmployee | string | An identifier of the employee who created the purchase receipt. |
EditDateTime | string, datetime | A timestamp of when the purchase receipt was last modified (edited). |
EditEmployee | string | An identifier of the employee who last modified (edited) the purchase receipt. |
Notes | string | Misc. notes about the purchase receipt. |
IsHeld | boolean | An indicator as to whether or not the purchase receipt is being held. |
HoldDateTime | string, datetime | A timestamp of when the purchase receipt was held. |
HoldEmployee | string | An identifier of the employee who held the purchase receipt. |
IsVoid | boolean | An indicator as to whether or not the purchase receipt has been voided. |
VoidDateTime | string, datetime | A timestamp of when the purchase receipt was voided. |
VoidEmployee | string | An identifier of the employee who voided the purchase receipt. |
TotalAmount | double | The purchase receipt's total amount. |
TotalCostAmount | double | The purchase receipt's total cost amount. |
TotalFeeAmount | double | The purchase receipt's total fee amount. |
TotalQty | double | The purchase receipt's total quantity. |
TotalPackQty | double | The purchase receipt's total pack quantity. |
ReversedDocumentIdentifier | string | An identifier of the purchase receipt’s reversed document. |
ReversingDocumentIdentifier | string | An identifier of the purchase receipt’s reversing document. |
VendorIdentifier | string | An identifier of the vendor of the items on the purchase receipt. |
VendorOrderNo | string | The vendor’s order number for the purchase receipt. |
VendorInvoiceNo | string | The vendor’s invoice number for the purchase receipt. |
VendorRefNo | string | The vendor’s reference number for the purchase receipt. |
ForeignCurrencyCode | string | A code indicating the foreign currency to be used for the purchase receipt. |
Matched | boolean | An indicator as to whether or not the purchase receipt has a matching purchase memo. |
CustomDate1 - 4 | string, datetime | These four fields are customizable date values for the purchase receipt. |
CustomDecimal1 - 4 | double | These four fields are customizable floating-point values for the purchase receipt. |
CustomFlag1 - 4 | boolean | These four fields are customizable flags for the purchase receipt. |
CustomLookup1 - 8 | string | These eight fields are customizable lookup values for the purchase receipt. |
CustomNumber1 - 4 | int32 | These four fields are customizable integer values for the purchase receipt. |
CustomText1 - 4 | string | These four fields are customizable text values for the purchase receipt. |
HoldReasonIdentifier | string | An identifier of the reason the purchase receipt was held. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Response: PurchaseOrders: PurchaseReceipts***</font> |
<font color=#008AE8>**Response: PurchaseOrders: Items**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
LineNo | int32 | The item’s line number on the purchase order. |
isDeleted | boolean | An indicator as to whether or not the item is deleted. |
Archived | boolean | An indicator as to whether or not the item hass been archived. |
ItemIdentifier | string | AN identifier of the item. |
ExternalId | string | An identifier of the item used when interacting with an external system. |
Ordered | double | The item’s ordered quantity. |
Received | double | The item’s received quantity. |
OrderCost | double | The item's cost in the purchase order. |
QtyDue | double | The item's quantity due. <font color="Crimson">***??????????***</font> |
ForeignCurrencyOrderCost | double | The item’s order cost in foreign currency. |
ForeignCurrencyExtCost | double | The item’s extended cost in foreign currency. |
ForeignCurrencyExtDiscountAmount | double | The item’s extended discount amount in foreign currency. |
ForeignCurrencyExtFeeAmount | double | The item’s extended fee amount in foreign currency. |
ForeignCurrencyExtCostInclFee | double | The item’s extended cost amount (including fees) in foreign currency. |
ExternalReceivingQty | double | <font color="Crimson">***??????????***</font> |
ShipToLocationIdentifier | string | An identifier of the purchase order's ship to location. |
CustomDate1 - 2 | string, datetime | These two fields are customizable date values for the item. |
CustomDecimal1 - 2 | double | These two fields are customizable floating-point values for the item. |
CustomFlag1 - 2 | boolean | These two fields are customizable flags for the item. |
CustomLookup1 - 4 | string | These four fields are customizable lookup values for the item. |
CustomNumber1 - 2 | int32 | These two fields are customizable integer values for the item. |
CustomText1 - 2 | string | These two fields are customizable text values for the item. |
<font color=#008AE8>**Response: PurchaseOrders: Items: SalesOrderItems**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
LineNo | int32 | The item’s line number on the sales order. |
SalesOrderIdentifier | string | An identifier of the sales order to which the item applies. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Response: PurchaseOrders: Items: SalesOrderItems***</font> |
<font color=#008AE8>**Response: PurchaseOrders: Items: PurchaseReceiptItems**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
LineNo | int32 | The item’s line number on the purchase receipt. |
PurchaseReceiptIdentifier | string | An identifier of the purchase receipt to which the item applies. |
ExternalId | string | An identifier of the item used when interacting with an external system. |
Quantity | double | The item’s purchase quantity. |
IsQtyTracked | boolean | An indicator as to whether or not the item’s quantity is tracked (whether it is an inventory item or not). |
Cost | double | The item’s cost. |
Notes | string | Misc. notes about the item. |
ForeignCurrencyOrderCost | double | The item’s cost in foreign currency. |
ForeignCurrencyExtCost | double | The item’s extended cost in foreign currency. |
ForeignCurrencyExtFeeAmount | double | The item’s extended fee amount in foreign currency. |
ForeignCurrencyExtCostInclFee | double | The item’s extended cost (including fees) in foreign currency. |
CustomDate1 - 2 | string, datetime | These two fields are customizable date values for the item. |
CustomDecimal1 - 2 | double | These two fields are customizable floating-point values for the item. |
CustomFlag1 - 2 | boolean | These two fields are customizable flags for the item. |
CustomLookup1 - 4 | string | These four fields are customizable lookup values for the item. |
CustomNumber1 - 2 | int32 | These two fields are customizable integer values for the item. |
CustomText1 - 2 | string | These two fields are customizable text values for the item. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Response: PurchaseOrders: Items: PurchaseReceiptItems***</font> |
<font color=#008AE8>**Response: PurchaseOrders: Items: Charges**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
ChargeCode | string | A identifier of the charge for the item. |
ChargeDescription | string | A description of the charge. |
ChargeType | string, enum | An indicator of the charge's type. Its value must be one of the following: "Empty", "Shipping", "Insurance", "RestockingFee" |
Qty | double | The quantity of the charge. |
Price | double | The charge's price. |
ExtPrice | double | The charge's extended price. |
ListOrder | int32 | The order the charge  will appear in the user interface. <font color="Crimson">??????????</font> |
DiscountPercent | double | The charge's discount percentage. |
ExtDiscountAmount | double | The charge’s extended discount amount. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Response: PurchaseOrders: Items: Charges***</font> |
<font color=#008AE8>**Response: PurchaseOrders: Items: Quantities**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
AllocationLocationIdentifier | string | An identifier of a location from which the item has been ordered. <font color="Crimson">??????????</font> |
Ordered | double | The quantity ordered from the location. <font color="Crimson">??????????</font> |
Received | double | The quantity recieved from the location. <font color="Crimson">??????????</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Response: PurchaseOrders: Items: Quantities***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Response: PurchaseOrders: Items***</font> |
<font color=#008AE8>**Response: PurchaseOrders: Charges**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
ChargeCode | string | A identifier of the charge for the item. |
ChargeType | string, enum | An indicator of the charge's type. Its value must be one of the following: "Empty", "Shipping", "Insurance", "RestockingFee" |
Qty | double | The quantity of the charge. |
Price | double | The charge's price. |
ExtPrice | double | The charge's extended price. |
Spread | boolean | An indicator as to whether or not the charge is to be applied across all items in the purchase order. <font color="Crimson">??????????</font> |
SpreadType | int32 | An indicator of the type of spread. |
ExtDiscountAmount | double | The charge’s extended discount amount. |
DiscountPercent | double | The charge's discount percentage. |
ListOrder | int32 | The order the charge  will appear in the user interface. <font color="Crimson">??????????</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Response: PurchaseOrders: Charges***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Response: PurchaseOrders***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Response***</font> |

## Request Example(s) {#RequestExamples}

~~~

{
   "Source":"Integrator",
   "Data":{
      "ApiDocumentId":"907B65C7-8F2C-45FB-AEB2-68C5577D6162",
      "Request":{
         "Settings":[
            {
               "Key":"LocationIdentifierSetting",
               "Value":"ExternalIdCode"
            },
            {
               "Key":"EmployeeIdentifierSetting",
               "Value":"LoginName"
            },
            {
               "Key":"PurchaseReceiptIdentifierSetting",
               "Value":"No"
            },
            {
               "Key":"VendorIdentifierSetting",
               "Value":"Code"
            },
            {
               "Key":"ItemIdentifierSetting",
               "Value":"PLU"
            },
            {
               "Key":"SalesOrderIdentifierSetting",
               "Value":"No"
            },
        	{
               "Key":"ShowDetailedQtyForAllocationDistributionType",
               "Value":"Yes"
            },
		    {
               "Key":"HoldReasonIdentifierSetting",
               "Value":"Code"
            }
         ],
         "Filters":[
            {
               "Field":"RecModified",
               "Operator":"Greater than",
               "Value":"2018-06-06T10:07:12"
            }
         ],
         "SortDescriptions":[
            {
               "Direction":"Ascending",
               "Name":"RecModified"
            }
         ],
         "Top":10,
         "Skip":0
      }
   }
}

~~~

## **Response Example(s)** {#ResponseExamples}

<font color=#008AE8>**Export response for purchase orders with PurchaseOrderNo=4478**</font>

~~~

{
  "ApiDocument":{
    "ApiDocumentId":"77C3988A-7A69-4BA6-B4E4-F37716F8673F",
    "Status":"Successful",
    "ApiRequestType":"purchase-order-export",
    "TotalRecords":1,
    "RecordsCount":1,
    "ElapsedTime":"00:00:00.4366667",
    "StartDateTime":"2019-10-01T10:06:43.173",
    "EndDateTime":"2019-10-01T10:06:43.610",
    "Response":{
      "PurchaseOrders":[
        {
          "IsDeleted":"false",
          "PurchaseOrderNo":"4478",
          "RecModified":"2019-09-30T16:36:08.493",
          "VendorIdentifier":"147",
          "DeviceTransactionNumber":1000004489,
          "IsHeld":false,
          "Type":"Corporate",
          "DistributionType":"SingleLocation",
          "DefaultLocationIdentifier":"anya's ext ID 102030",
          "CreateDateTime":"2019-09-30T19:35:02.383",
          "OrderDate":"2019-09-30T19:35:00",
          "ShipDate":"2019-12-16T00:00:00",
          "ArrivalDate":"2019-12-20T00:00:00",
          "CancelDate":"2019-10-29T00:00:00",
          "Archived":"false",
          "CustomFlag1":false,
          "CustomFlag2":false,
          "CustomFlag3":false,
          "CustomFlag4":false,
          "Items":[
            {
              "LineNo":1,
              "isDeleted":false,
              "Archived":true,
              "ItemIdentifier":"470688CD-5D66-4C27-B8CC-721131F26ACC",
              "Ordered":1.00000000000000000000,
              "Received":0.00000000000000000000,
              "OrderCost":0.0000,
              "QtyDue":1.00000000000000000000,
              "ForeignCurrencyOrderCost":0.00000000000000000000,
              "ForeignCurrencyExtCost":0.00000000000000000000,
              "ForeignCurrencyExtDiscountAmount":0.00000000000000000000,
              "ForeignCurrencyExtFeeAmount":0.00000000000000000000,
              "ForeignCurrencyExtCostInclFee":0.00000000000000000000,
              "ExternalReceivingQty":0.00000000000000000000,
              "ShipToLocationIdentifier":"anya's ext ID 102030",
              "CustomFlag1":false,
              "CustomFlag2":false
            },
            {
              "LineNo":2,
              "isDeleted":true,
              "Archived":false,
              "ItemIdentifier":"650A0577-93DB-4F7C-B3FA-6172E299A767",
              "Ordered":1.00000000000000000000,
              "Received":0.00000000000000000000,
              "OrderCost":0.0000,
              "QtyDue":1.00000000000000000000,
              "ForeignCurrencyOrderCost":0.00000000000000000000,
              "ForeignCurrencyExtCost":0.00000000000000000000,
              "ForeignCurrencyExtDiscountAmount":0.00000000000000000000,
              "ForeignCurrencyExtFeeAmount":0.00000000000000000000,
              "ForeignCurrencyExtCostInclFee":0.00000000000000000000,
              "ExternalReceivingQty":0.00000000000000000000,
              "ShipToLocationIdentifier":"anya's ext ID 102030",
              "CustomFlag1":false,
              "CustomFlag2":false
            }
          ]
        }
      ]
    }
  }
}

~~~
