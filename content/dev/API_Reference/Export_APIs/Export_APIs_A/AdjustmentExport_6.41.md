---
title: "Adjustment Export [6.41]"
date: 2022-02-22T08:23:00-05:00
draft: false
weight: 0410
---
<!-- Weight => sstt; ss=>2nd letter's nbr/tt=>3rd letter's nbr (w/leading zeros) -->

<!-- begin comment block (when active)-------------------- -->
{{% notice warning %}}
The API Reference is currently under construction and its contents should not be used until further notice.
{{% /notice %}}

- [Overview](#Overview)
- [Request endpoint](#RequestEndpoint)
- [Request settings](#RequestSettings)
- [Request filters](#RequestFilters)
- [Request sorts](#RequestSorts)
- [Successful response](#SuccessfulResponse)
- &nbsp;&nbsp;&nbsp;&nbsp;[Format](#SuccessfulResponseFormat)
- &nbsp;&nbsp;&nbsp;&nbsp;[Schema](#SuccessfulResponseSchema)
- [Request example(s)](#RequestExamples)
- [Response example(s)](#ResponseExamples)

---
<!-- end comment block (when active)-------------------- -->

## Overview {#Overview}

This topic describes the **Adjustment Export** API which is used to export *Adjustment Memos* from CHQ.

See [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for a description on how export requests are made and on the standard request and response formats used. The API-Specific successful response format for this API will be described below.

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/adjustment**  
Asynchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/adjustment/async**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.


## Request settings {#RequestSettings}

Below are the settings which can be supplied in the **Settings** group of the export request to define which value (field) is to be used for a particular value class (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_V6.41/) for additional info).

The **Key** column lists the names of the available settings. The **Supported Values** column lists the valid values which can be supplied for the setting. The **Default** column lists the default value for each setting if that setting is not supplied.

**Key** | **Supported Values** | **Default** | **Description** |
---- | ---- | ---- | ---- |
LocationIdentifierSetting | ExternalIdCode, Code, ExternalId, No, TeamworkId | ExternalIdCode | An indicator of which value is to be used to identify locations. |
ItemIdentifierSetting | PLU, ExternalId, CLU, UPC, TeamworkId | PLU | An indicator of which value is to be used to identify items. |
ItemDetailsLevelSetting | None, Basic, Custom | Basic | An indicator if which level of item detail is to be exported. |
ItemDescriptionSetting | Description1, Description2, Description3, Description4, StoreDescription | StoreDescription | An indicator of which item description value is to be used. |
DepSetSetting | DCSSCode, Alias, Details | DCSSCode | An indicator of which value is to be used to identify department sets. |
EmployeeIdentifierSetting | LoginName, TeamworkId | LoginName | An indicator of which value is to be used to identify employees. |
DeviceIdentifierSetting | DeviceName, LocationDeviceCode, DeviceNo, DeviceAlias, TeamworkId | DeviceName | An indicator of which value is to be used to identify devices. |
StockCountIdentifierSetting | No, Name, TeamworkId | No | An indicator of which value is to be used to identify stock counts. |
AdjustmentReasonIdentifierSetting | Code, ExternalId, TeamworkId | Code | An indicator of which value is to be used to identify adjustment reasons. |
AdjustmentSetting | No, DTN, TeamworkId | No | An indicator of which value is to be used to identify adjustments. |
HoldReasonSetting | Code, Description, TeamworkId | Code | An indicator of which value is to be used to identify hold reasons. |
TransactionAcknowledgementIdentifierSetting | Code, Description, TeamworkId | Code | An indicator of which value is to be used to identify transaction acknowledgements. |

## Request filters {#RequestFilters}

Below are the filters which can be defined in the **Filters** group of the export request (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Field** column lists the names of the fields on which filtering can be done. The **Operators** column lists the filter operator values which are valid for the field. The **Value** column describes the value expected for the field.

**Field** | **Operators** | **Value** |
---- | ---- | ---- |
RecModified |"Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. Note that a *RecModified* filter refers to the greatest **RecModified** value over all of a style's child objects. |
DeviceTransactionNumber | "Equal", "Contains" | Any valid long integer value representing a **DeviceTransactionNumber** for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |
AdjustmentNo | "Equal", "Contains" | Any valid integer value representing a **DeviceTransactionNumber** for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |
AdjustmentId |"Equal", "Contains" | Any valid guid value representing the **SalesOrder.SalesOrderId** for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |
ExternalId | "Equal", "Contains" | Any valid string value representing an **ExternalId** for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |

## Request sorts {#RequestSorts}

Below are the fields for which sorting can be requested in the **SortDescriptions** group of the export request (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info). All of these fields can be sorted either *ascending* or *descending*.

<span class="ir">***???????? What is the default sort for this API? ????????***</span>

- AdjustmentNo (index)  
- AdjustmentId (index)  
- BasedOn  
- CreateDateTime  
- CustomDate1 - 4  
- CustomDecimal1 - 4  
- CustomFlag1 - 4  
- CustomNumber1 - 4  
- CustomText1 - 4  
- DeviceID  
- DeviceTransactionNumber (index)  
- DocRevisionNum  
- DocType  
- EditDateTime  
- FiscalDate  
- IsHeld  
- IsVoid  
- Notes  
- PostedDateTime  
- PostingDateTime  
- RecCreated  
- RecModified (index)  
- StreamingDate  
- TotalCostAmount  
- TotalQty  
- VoidDateTime

---

## Successful response {#SuccessfulResponse}

### Format {#SuccessfulResponseFormat}

Below is the format of the successful response to the export request. See [*JSON Data Types*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/JsonDataTypes_6.41/) for a description of the values which could appear in the **Data Type** column.

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
ApiDocumentId | string,guid | A unique identifier of the API document being used. |
Status | string, enum | The status of the response. The value will always be "Successful". |
ApiRequestType | string | <span class="ir">***????????***</span>
TotalRecords | int32 | The total number of submitted records processed. <span class="ir">***????????***</span> |
RecordsCount | int32 | The number of records returned. <span class="ir">***????????***</span> |
ElapsedTime | string, datetime | The time it took to execute the export request. |
StartDateTime | string, datetime | A timestamp of when the export request started executing. |
EndDateTime | string, datetime | A timestamp of when the export request stopped executing. |
<span class="api-gn">Response</span> | | <span class="api-gd">A group containing the following fields and groups.</span> |
<span class="api-gn">Response: Adjustments</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
AdjustmentNo | int32 | A numeric identifier of the adjustment. |
AdjustmentId | string,guid | A unique identifier of the adjustment. |
PostingDateTime | string, datetime | A timestamp of when the adjustment was posted. |
RecCreated | string, datetime | A timestamp of when the adjustment record was created. |
RecModified | string, datetime | A timestamp of when the adjustment record was last modified. |
Notes | string | Misc. notes about the adjustment. |
DeviceTransactionNumber | int64 | The adjustment's transaction number on the device used. |
ExternalId | string | An identifier of the adjustment used when interacting with an external system. |
FiscalDate | string, datetime | The fiscal date of the adjustment. |
IsHeld | boolean | An indicator as to whether or not the adjustment is being held. |
IsVoid | boolean | An indicator as to whether or not the adjustment has been voided. |
BasedOn | string, enum | An indicator of which quantity value the adjustment is based on. Its value must be one of the following: “AdjustmentQty”, “ActualQty”, "Unknown". |
CreateEmployee | string | An identifier of the employee who created the adjustment. |
CreateDateTime | string, datetime | The timestamp of when the adjustment was created. |
EditEmployee | string | An identifier of the employee who last updated (edited) the adjustment. |
EditDateTime | string, datetime | A timestamp of when the adjustment was last updated (edited). |
PostedEmployee | string |  An identifier of the employee who posted the adjustment. |
PostedDateTime | string, datetime | A timestamp of when the adjustment was posted. |
VoidEmployee | string | An identifier of the employee who voided the adjustment. |
VoidDateTime | string, datetime | A timestamp of when the adjustment was voided. |
DeviceID | string | A unique<span class="ir">***????????***</span> identifier of the device on which the adjustment was done. |
DeviceIdentifier | string | An identifier of the device on which the adjustment was done. |
DocRevisionNum | int32 | <span class="ir">***????????***</span> |
DocType | string, enum | An indicator of which quantity value the adjustment is based on. Its value must be one of the following: "CommonAdjustment", "UserAdjustment", "Unknown". |
ReversedDocumentIdentifier | string | An identifier of the adjustment’s reversed document. |
ReversingDocumentIdentifier | string | An identifier of the adjustment’s reversing document. |
StockCountIdentifier | string | An identifier of the adjustment's stock count. |
StreamingDate | datetime| A timestamp of when the adjustment was streamed to the server. |
TotalCostAmount | double | The adjustment's total cost amount. |
TotalQty | double | The adjustment's total quantity. |
AdjustmentReason | string | The reason for the adjustment. |
LocationIdentifier | string | An identifier of the adjustment's location. |
CustomDate1 - 4 | string, datetime | These four fields are customizable date values for the adjustment. |
CustomDecimal - 4 | double | These four fields are customizable decimal (floating-point) values for the adjustment. |
CustomFlag1 - 4 | boolean | These four fields are customizable flags for the adjustment. |
CustomLookup1 - 8 | string | These eight fields are customizable lookup values for the adjustment. |
CustomNumber1 - 4 | int32 | These four fields are customizable integer values for the adjustment. |
CustomText1 - 4 | string | These four fields are customizable text values for the adjustment. |
<span class="api-gn">Response: Adjustments: Items</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
LineNo  | int32 | The number of the line in the adjustment where the item occurs. |
Quantity | double | The item's quantity. |
CustomDate1 - 2 | string, datetime | These two fields are customizable date values for the item. |
CustomDecimal - 2 | double | These two fields are customizable decimal (floating-point) values for the item. |
CustomFlag1 - 2 | boolean | These four fields are customizable flags for the item. |
CustomLookup1 - 4 | string | These four fields are customizable lookup values for the item. |
CustomNumber1 - 2 | int32 | These two fields are customizable integer values for the item. |
CustomText1 - 2 | string | These two fields are customizable text values for the item. |
RecCreated | string, datetime | A timestamp of when the item record was created. |
RecModified | string, datetime | A timestamp of when the item record was last modified. |
ItemIdentifier | string | An identifier of the item. |
<span class="api-gn">Response: Adjustments: Items: ItemDetails</span> | | <span class="api-gd">A group containing the following fields and groups.</span> |
PLU | int32 | The item’s product lookup number. |
CLU | string | The item’s custom lookup number. |
UPC | string | The item’s universal product code. |
StyleNo | string | An identifier of the item’s style. |
ExternalId | string | The identifier of the item used when interacting with an external system. |
ItemDescription | string | The item’s description. |
Attribute1 - 3 | string | These three fields are the item’s attributes. |
<span class="api-gn">Adjustments: Items: ItemDetails: DCSS</span> | | <span class="api-gd">A group containing the following fields and groups.</span> |
DCSSCode | string | The item’s department classification code. |
Alias | string | An alias for the item’s department classification code. |
DeptCode | string | A code identifying the item’s department. |
DeptName | string | The name identifying the item’s department. |
DeptAlias | string | An alias for the item’s department. |
ClassCode | string | A code identifying the item’s class. |
ClassName | string | The name identifying the item’s class. |
ClassAlias | string | An alias for the item’s class. |
SubClass1Code | string | A code identifying the item’s first subclass. |
SubClass1Name | string | The name identifying the item’s first subclass. |
SubClass1Alias | string | An alias for the item’s first subclass. |
SubClass2Code | string | A code identifying the item’s second subclass. |
SubClass2Name | string | The name identifying the item’s second subclass. |
SubClass2Alias | string | An alias for the item’s second subclass. |
<span class="api-gs">---</span>  |   | <span class="api-gde">end of Adjustments: Items: ItemDetails: DCSS</span> |
<span class="api-gn">Adjustments: Items: ItemDetails: Style</span> | | <span class="api-gd">A group containing the following fields and groups.</span>|
CustomDate1 - 12 | string, datetime | These twelve fields are customizable date values for the style. |
CustomDecimal - 12 | double | These twelve fields are customizable decimal (floating-point) values for the style. |
CustomFlag1 - 18 | boolean | These eighteen fields are customizable flags for the style. |
CustomLookup1 - 12 | string | These twelve fields are customizable lookup values for the style. |
CustomNumber1 - 12 | int32 | These twelve fields are customizable integer values for the style. |
CustomText1 - 12 | string | These twelve fields are customizable text values for the style. |
<span class="api-gs">---</span> |  | <span class="api-gde">end of Adjustments: Items: ItemDetails: Style</span> |
<span class="api-gn">Adjustments: Items: ItemDetails: Item</span> | | <span class="api-gd">A group containing the following fields and groups.</span> |
CustomDate1 - 6 | string, datetime | These six fields are customizable date values for the item. |
CustomDecimal - 6 | double | These six fields are customizable decimal (floating-point) values for the item. |
CustomFlag1 - 6 | boolean | These six fields are customizable flags for the item. |
CustomLookup1 - 12 | string | These twelve fields are customizable lookup values for the item. |
CustomNumber1 - 6 | int32 | These six fields are customizable integer values for the item. |
CustomText1 - 6 | string | These six fields are customizable text values for the item. |
<span class="api-gs">---</span> |  | <span class="api-gde">end of Adjustments: Items: ItemDetails: Item</span> |
<span class="api-gs">---</span> |  | <span class="api-gde">end of Adjustments: Items: ItemDetails</span> |
<span class="api-gs">---</span> |  | <span class="api-gdc">continuation of Adjustments: Items</span> |
QtyStatus | string | An indicator of the status of the item's quantity. |
<span class="api-gs">---</span> |  | <span class="api-gde">end of Adjustments: Items</span> |
<span class="api-gs">---</span> |  | <span class="api-gdc">continuation of Adjustments</span> |
HoldReasonIdentifier | string | An identifier of the reason the adjustment was held. |
AcknowledgementDate | string, datetime | A timestamp of when the adjustment was acknowledged. |
AcknowledgementByUserIdentifier | string |An identifier of who acknowledged the adjustment. |
TransactionAcknowledgementIdentifier | string | An identifier of the acknowledgement. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Adjustments</span> |

### Schema {#SuccessfulResponseSchema}
 
Below is the JSON source for the schema of a successful response to the export request as described above.

~~~
{
     "AdjustmentExportToJson_get.ApiDocumentType":{
      "type":"object",
      "properties":{
        "ApiDocumentId":{
          "format":"uuid",
          "type":"string",
          "example":"00000000-0000-0000-0000-000000000000"
        },
        "Status":{
          "enum":[
            "Successful"
          ],
          "type":"string"
        },
        "ApiRequestType":{
          "type":"string"
        },
        "TotalRecords":{
          "format":"int32",
          "type":"integer"
        },
        "RecordsCount":{
          "format":"int32",
          "type":"integer"
        },
        "ElapsedTime":{
          "format":"date-time",
          "type":"string"
        },
        "StartDateTime":{
          "format":"date-time",
          "type":"string"
        },
        "EndDateTime":{
          "format":"date-time",
          "type":"string"
        },
        "Response":{
          "$ref":"#/definitions/AdjustmentExportToJson_get.ResponseType"
        }
      }
    },
    "AdjustmentExportToJson_get.ResponseType":{
      "type":"object",
      "properties":{
        "Adjustments":{
          "type":"array",
          "items":{
            "$ref":"#/definitions/AdjustmentExportToJson_get.AdjustmentsType"
          }
        }
      }
    },
    "AdjustmentExportToJson_get.AdjustmentsType":{
      "type":"object",
      "properties":{
        "AdjustmentNo":{
          "format":"int32",
          "type":"integer"
        },
        "AdjustmentId":{
          "format":"uuid",
          "type":"string",
          "example":"00000000-0000-0000-0000-000000000000"
        },
        "PostingDateTime":{
          "format":"date-time",
          "type":"string"
        },
        "RecCreated":{
          "format":"date-time",
          "type":"string"
        },
        "RecModified":{
          "format":"date-time",
          "type":"string"
        },
        "Notes":{
          "type":"string"
        },
        "DeviceTransactionNumber":{
          "format":"int64",
          "type":"integer"
        },
        "ExternalId":{
          "type":"string"
        },
        "FiscalDate":{
          "format":"date-time",
          "type":"string"
        },
        "IsHeld":{
          "type":"boolean"
        },
        "IsVoid":{
          "type":"boolean"
        },
        "BasedOn":{
          "enum":[
            "AdjustmentQty",
            "ActualQty",
            "Unknown"
          ],
          "type":"string"
        },
        "CreateEmployee":{
          "type":"string"
        },
        "CreateDateTime":{
          "format":"date-time",
          "type":"string"
        },
        "EditEmployee":{
          "type":"string"
        },
        "EditDateTime":{
          "format":"date-time",
          "type":"string"
        },
        "PostedEmployee":{
          "type":"string"
        },
        "PostedDateTime":{
          "format":"date-time",
          "type":"string"
        },
        "VoidEmployee":{
          "type":"string"
        },
        "VoidDateTime":{
          "format":"date-time",
          "type":"string"
        },
        "DeviceID":{
          "type":"string"
        },
        "DeviceIdentifier":{
          "type":"string"
        },
        "DocRevisionNum":{
          "format":"int32",
          "type":"integer"
        },
        "DocType":{
          "enum":[
            "CommonAdjustment",
            "UserAdjusment",
            "Unknown"
          ],
          "type":"string"
        },
        "ReversedDocumentIdentifier":{
          "type":"string"
        },
        "ReversingDocumentIdentifier":{
          "type":"string"
        },
        "StockCountIdentifier":{
          "type":"string"
        },
        "StreamingDate":{
          "format":"date-time",
          "type":"string"
        },
        "TotalCostAmount":{
          "format":"double",
          "type":"number"
        },
        "TotalQty":{
          "format":"double",
          "type":"number"
        },
        "AdjustmentReason":{
          "type":"string"
        },
        "LocationIdentifier":{
          "type":"string"
        },
        "CustomDate1":{
          "format":"date-time",
          "type":"string"
        },
        "CustomDate2":{
          "format":"date-time",
          "type":"string"
        },
        "CustomDate3":{
          "format":"date-time",
          "type":"string"
        },
        "CustomDate4":{
          "format":"date-time",
          "type":"string"
        },
        "CustomDecimal1":{
          "format":"double",
          "type":"number"
        },
        "CustomDecimal2":{
          "format":"double",
          "type":"number"
        },
        "CustomDecimal3":{
          "format":"double",
          "type":"number"
        },
        "CustomDecimal4":{
          "format":"double",
          "type":"number"
        },
        "CustomFlag1":{
          "type":"boolean"
        },
        "CustomFlag2":{
          "type":"boolean"
        },
        "CustomFlag3":{
          "type":"boolean"
        },
        "CustomFlag4":{
          "type":"boolean"
        },
        "CustomLookup1":{
          "type":"string"
        },
        "CustomLookup2":{
          "type":"string"
        },
        "CustomLookup3":{
          "type":"string"
        },
        "CustomLookup4":{
          "type":"string"
        },
        "CustomLookup5":{
          "type":"string"
        },
        "CustomLookup6":{
          "type":"string"
        },
        "CustomLookup7":{
          "type":"string"
        },
        "CustomLookup8":{
          "type":"string"
        },
        "CustomNumber1":{
          "format":"int32",
          "type":"integer"
        },
        "CustomNumber2":{
          "format":"int32",
          "type":"integer"
        },
        "CustomNumber3":{
          "format":"int32",
          "type":"integer"
        },
        "CustomNumber4":{
          "format":"int32",
          "type":"integer"
        },
        "CustomText1":{
          "type":"string"
        },
        "CustomText2":{
          "type":"string"
        },
        "CustomText3":{
          "type":"string"
        },
        "CustomText4":{
          "type":"string"
        },
        "Items":{
          "type":"array",
          "items":{
            "$ref":"#/definitions/AdjustmentExportToJson_get.ItemsType"
          }
        },
        "HoldReasonIdentifier":{
          "type":"string"
        },
        "AcknowledgementDate":{
          "format":"date-time",
          "type":"string"
        },
        "AcknowledgementByUserIdentifier":{
          "type":"string"
        },
        "TransactionAcknowledgementIdentifier":{
          "type":"string"
        }
      }
    },
    "AdjustmentExportToJson_get.ItemsType":{
      "type":"object",
      "properties":{
        "LineNo":{
          "format":"int32",
          "type":"integer"
        },
        "Quantity":{
          "format":"double",
          "type":"number"
        },
        "CustomDate1":{
          "format":"date-time",
          "type":"string"
        },
        "CustomDate2":{
          "format":"date-time",
          "type":"string"
        },
        "CustomDecimal1":{
          "format":"double",
          "type":"number"
        },
        "CustomDecimal2":{
          "format":"double",
          "type":"number"
        },
        "CustomFlag1":{
          "type":"boolean"
        },
        "CustomFlag2":{
          "type":"boolean"
        },
        "CustomLookup1":{
          "type":"string"
        },
        "CustomLookup2":{
          "type":"string"
        },
        "CustomLookup3":{
          "type":"string"
        },
        "CustomLookup4":{
          "type":"string"
        },
        "CustomNumber1":{
          "format":"int32",
          "type":"integer"
        },
        "CustomNumber2":{
          "format":"int32",
          "type":"integer"
        },
        "CustomText1":{
          "type":"string"
        },
        "CustomText2":{
          "type":"string"
        },
        "RecCreated":{
          "format":"date-time",
          "type":"string"
        },
        "RecModified":{
          "format":"date-time",
          "type":"string"
        },
        "ItemIdentifier":{
          "type":"string"
        },
        "ItemDetails":{
          "$ref":"#/definitions/AdjustmentExportToJson_get.ItemDetailsType"
        },
        "QtyStatus":{
          "type":"string"
        }
      }
    },
    "AdjustmentExportToJson_get.ItemDetailsType":{
      "type":"object",
      "properties":{
        "PLU":{
          "format":"int32",
          "type":"integer"
        },
        "CLU":{
          "type":"string"
        },
        "UPC":{
          "type":"string"
        },
        "StyleNo":{
          "type":"string"
        },
        "ExternalId":{
          "type":"string"
        },
        "ItemDescription":{
          "type":"string"
        },
        "Attribute1":{
          "type":"string"
        },
        "Attribute2":{
          "type":"string"
        },
        "Attribute3":{
          "type":"string"
        },
        "DCSS":{
          "$ref":"#/definitions/AdjustmentExportToJson_get.DCSSType"
        },
        "Style":{
          "$ref":"#/definitions/AdjustmentExportToJson_get.StyleType"
        },
        "Item":{
          "$ref":"#/definitions/AdjustmentExportToJson_get.ItemType"
        }
      }
    },
    "AdjustmentExportToJson_get.DCSSType":{
      "type":"object",
      "properties":{
        "DCSSCode":{
          "type":"string"
        },
        "Alias":{
          "type":"string"
        },
        "DeptCode":{
          "type":"string"
        },
        "DeptName":{
          "type":"string"
        },
        "DeptAlias":{
          "type":"string"
        },
        "ClassCode":{
          "type":"string"
        },
        "ClassName":{
          "type":"string"
        },
        "ClassAlias":{
          "type":"string"
        },
        "SubClass1Code":{
          "type":"string"
        },
        "SubClass1Name":{
          "type":"string"
        },
        "SubClass1Alias":{
          "type":"string"
        },
        "SubClass2Code":{
          "type":"string"
        },
        "SubClass2Name":{
          "type":"string"
        },
        "SubClass2Alias":{
          "type":"string"
        }
      }
    },
    "AdjustmentExportToJson_get.StyleType":{
      "type":"object",
      "properties":{
        "CustomDate1":{
          "format":"date-time",
          "type":"string"
        },
        "CustomDate10":{
          "format":"date-time",
          "type":"string"
        },
        "CustomDate11":{
          "format":"date-time",
          "type":"string"
        },
        "CustomDate12":{
          "format":"date-time",
          "type":"string"
        },
        "CustomDate2":{
          "format":"date-time",
          "type":"string"
        },
        "CustomDate3":{
          "format":"date-time",
          "type":"string"
        },
        "CustomDate4":{
          "format":"date-time",
          "type":"string"
        },
        "CustomDate5":{
          "format":"date-time",
          "type":"string"
        },
        "CustomDate6":{
          "format":"date-time",
          "type":"string"
        },
        "CustomDate7":{
          "format":"date-time",
          "type":"string"
        },
        "CustomDate8":{
          "format":"date-time",
          "type":"string"
        },
        "CustomDate9":{
          "format":"date-time",
          "type":"string"
        },
        "CustomDecimal1":{
          "format":"double",
          "type":"number"
        },
        "CustomDecimal10":{
          "format":"double",
          "type":"number"
        },
        "CustomDecimal11":{
          "format":"double",
          "type":"number"
        },
        "CustomDecimal12":{
          "format":"double",
          "type":"number"
        },
        "CustomDecimal2":{
          "format":"double",
          "type":"number"
        },
        "CustomDecimal3":{
          "format":"double",
          "type":"number"
        },
        "CustomDecimal4":{
          "format":"double",
          "type":"number"
        },
        "CustomDecimal5":{
          "format":"double",
          "type":"number"
        },
        "CustomDecimal6":{
          "format":"double",
          "type":"number"
        },
        "CustomDecimal7":{
          "format":"double",
          "type":"number"
        },
        "CustomDecimal8":{
          "format":"double",
          "type":"number"
        },
        "CustomDecimal9":{
          "format":"double",
          "type":"number"
        },
        "CustomFlag1":{
          "type":"boolean"
        },
        "CustomFlag10":{
          "type":"boolean"
        },
        "CustomFlag11":{
          "type":"boolean"
        },
        "CustomFlag12":{
          "type":"boolean"
        },
        "CustomFlag13":{
          "type":"boolean"
        },
        "CustomFlag14":{
          "type":"boolean"
        },
        "CustomFlag15":{
          "type":"boolean"
        },
        "CustomFlag16":{
          "type":"boolean"
        },
        "CustomFlag17":{
          "type":"boolean"
        },
        "CustomFlag18":{
          "type":"boolean"
        },
        "CustomFlag2":{
          "type":"boolean"
        },
        "CustomFlag3":{
          "type":"boolean"
        },
        "CustomFlag4":{
          "type":"boolean"
        },
        "CustomFlag5":{
          "type":"boolean"
        },
        "CustomFlag6":{
          "type":"boolean"
        },
        "CustomFlag7":{
          "type":"boolean"
        },
        "CustomFlag8":{
          "type":"boolean"
        },
        "CustomFlag9":{
          "type":"boolean"
        },
        "CustomLookup1":{
          "type":"string"
        },
        "CustomLookup10":{
          "type":"string"
        },
        "CustomLookup11":{
          "type":"string"
        },
        "CustomLookup12":{
          "type":"string"
        },
        "CustomLookup2":{
          "type":"string"
        },
        "CustomLookup3":{
          "type":"string"
        },
        "CustomLookup4":{
          "type":"string"
        },
        "CustomLookup5":{
          "type":"string"
        },
        "CustomLookup6":{
          "type":"string"
        },
        "CustomLookup7":{
          "type":"string"
        },
        "CustomLookup8":{
          "type":"string"
        },
        "CustomLookup9":{
          "type":"string"
        },
        "CustomNumber1":{
          "format":"int32",
          "type":"integer"
        },
        "CustomNumber10":{
          "format":"int32",
          "type":"integer"
        },
        "CustomNumber11":{
          "format":"int32",
          "type":"integer"
        },
        "CustomNumber12":{
          "format":"int32",
          "type":"integer"
        },
        "CustomNumber2":{
          "format":"int32",
          "type":"integer"
        },
        "CustomNumber3":{
          "format":"int32",
          "type":"integer"
        },
        "CustomNumber4":{
          "format":"int32",
          "type":"integer"
        },
        "CustomNumber5":{
          "format":"int32",
          "type":"integer"
        },
        "CustomNumber6":{
          "format":"int32",
          "type":"integer"
        },
        "CustomNumber7":{
          "format":"int32",
          "type":"integer"
        },
        "CustomNumber8":{
          "format":"int32",
          "type":"integer"
        },
        "CustomNumber9":{
          "format":"int32",
          "type":"integer"
        },
        "CustomText1":{
          "type":"string"
        },
        "CustomText10":{
          "type":"string"
        },
        "CustomText11":{
          "type":"string"
        },
        "CustomText12":{
          "type":"string"
        },
        "CustomText2":{
          "type":"string"
        },
        "CustomText3":{
          "type":"string"
        },
        "CustomText4":{
          "type":"string"
        },
        "CustomText5":{
          "type":"string"
        },
        "CustomText6":{
          "type":"string"
        },
        "CustomText7":{
          "type":"string"
        },
        "CustomText8":{
          "type":"string"
        },
        "CustomText9":{
          "type":"string"
        }
      }
    },
    "AdjustmentExportToJson_get.ItemType":{
      "type":"object",
      "properties":{
        "CustomDate1":{
          "format":"date-time",
          "type":"string"
        },
        "CustomDate2":{
          "format":"date-time",
          "type":"string"
        },
        "CustomDate3":{
          "format":"date-time",
          "type":"string"
        },
        "CustomDate4":{
          "format":"date-time",
          "type":"string"
        },
        "CustomDate5":{
          "format":"date-time",
          "type":"string"
        },
        "CustomDate6":{
          "format":"date-time",
          "type":"string"
        },
        "CustomDecimal1":{
          "format":"double",
          "type":"number"
        },
        "CustomDecimal2":{
          "format":"double",
          "type":"number"
        },
        "CustomDecimal3":{
          "format":"double",
          "type":"number"
        },
        "CustomDecimal4":{
          "format":"double",
          "type":"number"
        },
        "CustomDecimal5":{
          "format":"double",
          "type":"number"
        },
        "CustomDecimal6":{
          "format":"double",
          "type":"number"
        },
        "CustomFlag1":{
          "type":"boolean"
        },
        "CustomFlag2":{
          "type":"boolean"
        },
        "CustomFlag3":{
          "type":"boolean"
        },
        "CustomFlag4":{
          "type":"boolean"
        },
        "CustomFlag5":{
          "type":"boolean"
        },
        "CustomFlag6":{
          "type":"boolean"
        },
        "CustomLookup1":{
          "type":"string"
        },
        "CustomLookup10":{
          "type":"string"
        },
        "CustomLookup11":{
          "type":"string"
        },
        "CustomLookup12":{
          "type":"string"
        },
        "CustomLookup2":{
          "type":"string"
        },
        "CustomLookup3":{
          "type":"string"
        },
        "CustomLookup4":{
          "type":"string"
        },
        "CustomLookup5":{
          "type":"string"
        },
        "CustomLookup6":{
          "type":"string"
        },
        "CustomLookup7":{
          "type":"string"
        },
        "CustomLookup8":{
          "type":"string"
        },
        "CustomLookup9":{
          "type":"string"
        },
        "CustomNumber2":{
          "format":"int32",
          "type":"integer"
        },
        "CustomNumber3":{
          "format":"int32",
          "type":"integer"
        },
        "CustomNumber4":{
          "format":"int32",
          "type":"integer"
        },
        "CustomNumber5":{
          "format":"int32",
          "type":"integer"
        },
        "CustomNumber6":{
          "format":"int32",
          "type":"integer"
        },
        "CustomText1":{
          "type":"string"
        },
        "CustomText2":{
          "type":"string"
        },
        "CustomText3":{
          "type":"string"
        },
        "CustomText4":{
          "type":"string"
        },
        "CustomText5":{
          "type":"string"
        },
        "CustomText6":{
          "type":"string"
        }
      }
    }
  }
~~~

---

## Request Example(s) {#RequestExamples}

**Request Example #1: AdjustmentNo contains '1833' or '1834'**

~~~
  "Source": "Source",
  "Data": {
    "Request": {
      "Settings": [
        {
          "Key": "LocationIdentifierSetting",
          "Value": "ExternalIdCode"
        },
        {
          "Key": "ItemIdentifierSetting",
          "Value": "PLU"
        },
        {
          "Key": "ItemDetailsLevelSetting",
          "Value": "Basic"
        },
        {
          "Key": "ItemDescriptionSetting",
          "Value": "StoreDescription"
        },
        {
          "Key": "DepSetSetting",
          "Value": "DCSSCode"
        },
        {
          "Key": "EmployeeIdentifierSetting",
          "Value": "LoginName"
        },
        {
          "Key": "DeviceIdentifierSetting",
          "Value": "DeviceName"
        },
        {
          "Key": "StockCountIdentifierSetting",
          "Value": "No"
        },
        {
          "Key": "AdjustmentReasonIdentifierSetting",
          "Value": "Code"
        },
        {
          "Key": "AdjustmentSetting",
          "Value": "No"
        },
        {
          "Key": "HoldReasonSetting",
          "Value": "Code"
        },
        {
          "Key": "TransactionAcknowledgementIdentifierSetting",
          "Value": "Code"
        }
      ],
      "Filters": [
        {
          "Field": "AdjustmentNo",
          "Operator": "Contains",
          "Value": "1833,1834"
        }
      ],
      "SortDescriptions": [
        {
          "Name": "RecModified",
          "Direction": "Descending"
        }
      ],
      "Top": 20,
      "Skip": 0
    }
  }
}
~~~

---

## Response Example(s) {#ResponseExamples}

**Response Example #1: In Process**

~~~
<span class="ir">?????????? Need an 'In Process' example ??????????</span>
~~~

**Response Example #2: Error**

~~~
<span class="ir">?????????? Need an 'Error' example ??????????</span>
~~~

**Response Example #3: Success**

~~~
{
  "ApiDocument": {
    "ApiDocumentId": "98AC6847-3E63-4615-A870-472C0B3B3A79",
    "Status": "Successful",
    "ApiRequestType": "adjustment-export",
    "TotalRecords": 1,
    "RecordsCount": 1,
    "ElapsedTime": "00:00:00.1400000",
    "Startdatetime": "2019-12-26T08:50:46.810",
    "Enddatetime": "2019-12-26T08:50:46.950",
    "Response": {
      "Adjustments": [
        {
          "AdjustmentNo": 2229,
          "AdjustmentId": "3F7CA6D4-930B-496F-BDF1-00A8F5CD0B34",
          "Postingdatetime": "2019-07-15T18:43:39",
          "RecCreated": "2019-07-15T15:44:42.570",
          "RecModified": "2019-07-15T15:44:43.070",
          "DeviceTransactionNumber": 0,
          "FiscalDate": "2019-07-15T15:44:43.070",
          "IsHeld": false,
          "IsVoid": false,
          "BasedOn": "AdjustmentQty",
          "CreateEmployee": "ROOT",
          "Createdatetime": "2019-07-15T18:43:39",
          "EditEmployee": "ROOT",
          "Editdatetime": "2019-07-15T18:43:39",
          "PostedEmployee": "ROOT",
          "Posteddatetime": "2019-07-15T18:43:39",
          "DocRevisionNum": 0,
          "DocType": "CommonAdjustment",
          "StreamingDate": "2019-07-15T15:44:43.070",
          "TotalCostAmount": -34.5,
          "TotalQty": -0.23,
          "LocationIdentifier": "1414",
          "Items": [
            {
              "LineNo": 1,
              "Quantity": -0.23,
              "RecCreated": "2019-07-15T15:44:42.633",
              "RecModified": "2019-07-15T15:44:42.977",
              "ItemIdentifier": "9749823",
              "ItemDetails": {
                "PLU": 9749823,
                "StyleNo": "2892",
                "ExternalId": "12345678",
                "ItemDescription": "SFV Lera`s style",
                "Attribute1": "ok",
                "DCSS": {
                  "DCSSCode": "PUPKINCODE"
                }
              }
            }
          ],
          "AcknowledgementDate": "2019-12-26T03:44:29.933",
          "AcknowledgementByUserIdentifier": "kostya",
          "TransactionAcknowledgementIdentifier": "1"
        }
      ]
    }
  }
}
~~~
