---
title: "ASN Export [6.41]"
date: 2022-09-13T08:02:00-05:00
draft: false
weight: 1914
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

This topic describes the **ASN Export** API which is used to export advanced ship notices from CHQ.

See [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for a description on how export requests are made and on the standard request and response formats used. The API-Specific successful response format for this API will be described below.

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/asn**  
Asynchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/asn/async**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

In the Swagger UI the **/chqapi/export/asn** endpoint is a member of the **Purchase** endpoint group.

## Request settings {#RequestSettings}

Below are the settings which can be supplied in the **Settings** group of the export request to define which value (field) is to be used for a particular value class (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Key** column lists the names of the available settings. The **Supported Values** column lists the valid values which can be supplied for the setting. The **Default** column lists the default value for each setting if that setting is not supplied.

**Key** | **Supported Values** | **Default** | **Description** |
---- | ---- | ---- | ---- |
LocationIdentifierSetting | ExternalIdCode, Code, ExternalId, No, TeamworkId | ExternalIdCode | An indicator of which value is to be used to identify locations. |
EmployeeIdentifierSetting | LoginName, TeamworkId | LoginName | An indicator of which value is to be used to identify employees. |
VendorIdentifierSetting | Code, Name, TeamworkId | Code | An indicator of which value is to be used to identify vendors. |
ShippingMethodIdentifierSetting | Code, Name, TeamworkId | Code | An indicator of which value is to be used to identify shipping methods. |
CurrencyIdentifierSetting | Code, Name, TeamworkId | Code | An indicator of which value is to be used to identify currencies. |
PurchaseOrderIdentifierSetting | DTN, No, ExternalId, TeamworkId | No | An indicator of which value is to be used to identify purchase orders. |
PurchaseOrderItemIdentifierSetting | DTN, No, ExternalId, TeamworkId | No | An indicator of which value is to be used to identify purchase order items. |
ItemIdentifierSetting | PLU, ExternalId, CLU, UPC, TeamworkId | PLU | An indicator of which value is to be used to identify items. |

## Request filters {#RequestFilters}

Below are the filters which can be defined in the **Filters** group of the export request (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Field** column lists the names of the fields on which filtering can be done. The **Operators** column lists the filter operator values which are valid for the field. The **Value** column describes the value expected for the field.

**Field** | **Operators** | **Value** |
---- | ---- | ---- |
RecModified | "Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. |
AsnId | "Equal", "Contains" | Any valid GUID value representing ASN identifier for the "Equal" operator or a comma-separated list of values for the "Contains" operator. |
AsnNo | "Equal", "Contains" | Any valid value representing an ASN number for the "Equal" operator or a comma-separated list of values for the "Contains" operator. |
AsnDateTime | "Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. |
AsnDeviceTransactionNumber | "Equal", "Contains" | Any valid long integer value representing a device transaction number for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |
AsnDeliveryNo | "Equal", "Contains" | Any valid value representing an ASN delivery number for the "Equal" operator or a comma-separated list of values for the "Contains" operator. |
DeliveryBatchNumber | "Equal", "Contains" | Any valid value representing an delivery batch number for the "Equal" operator or a comma-separated list of values for the "Contains" operator. |
ReceivedStatus | "Equal", "Contains" | One of the following valid values for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. The valid values are: "NotReceived", "PartiallyRecevied", or "Recevied".|

## Request sorts {#RequestSorts}

The information returned is automatically sorted by the **RecModified** field *ascending*. No other sorts can be requested.

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
<span class="api-gn">Response: ApiDocuments</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was last streamed to the server.<span class="ir">??????????</span> |
ApiDocumentId | string, guid | A unique identifier of the API document to export.<span class="ir">??????????</span> |
APIType | string| <span class="ir">??????????</span> |
Area | int32 | <span class="ir">??????????</span> |
Source | string | The source of <span class="ir">??????????</span>the API being exported *OR* is it this API ??????????</span> |
Receiver | string | <span class="ir">??????????</span> |
Progress | double | <span class="ir">??????????</span> |
TotalRecords | int32 | The total records processed by the original API document.<span class="ir">??????????</span> |
AcceptedRecords | int32 | The number of records accepted by the original API document.<span class="ir">??????????</span> |
ElapsedTime | string, datetime | The elapsed time of the original API document.<span class="ir">??????????</span> |
IsSynchronously | boolean | An indicator as to whether or not the original API document was executed synchronously.<span class="ir">??????????</span> |
Status | int32 | The status of the original API document.<span class="ir">??????????</span> |
ParentAPIDocumentId | string, guid | <span class="ir">??????????</span> |
UseApiVersion | int32 | The API version of the original API document.<span class="ir">??????????</span> |
<span class="api-gn">Response: ApiDocuments: ApiDocumentLines</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
EntityNo | string | <span class="ir">??????????</span> |
EntityId | string, guid | A unique identifier of <span class="ir">??????????</span>. |
<span class="api-gs">---</span> |  | <span class="api-gde">end of Response: ApiDocuments: ApiDocumentLines</span> |
<span class="api-gs">---</span> |  | <span class="api-gde">end of Response: ApiDocuments</span> |
<span class="api-gs">---</span> |  | <span class="api-gde">end of Response</span> |

### Schema {#SuccessfulResponseSchema}
 
Below is the JSON source for the schema of a successful response to the export request as described above.

~~~
{
      "AsnExportToJson_get.ApiDocumentType":{
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
          "$ref":"#/definitions/AsnExportToJson_get.ResponseType"
        }
      }
    },
    "AsnExportToJson_get.ResponseType":{
      "type":"object",
      "properties":{
        "Asns":{
          "type":"array",
          "items":{
            "$ref":"#/definitions/AsnExportToJson_get.AsnsType"
          }
        }
      }
    },
    "AsnExportToJson_get.AsnsType":{
      "type":"object",
      "properties":{
        "RecCreated":{
          "format":"date-time",
          "type":"string"
        },
        "RecModified":{
          "format":"date-time",
          "type":"string"
        },
        "AsnId":{
          "format":"uuid",
          "type":"string",
          "example":"00000000-0000-0000-0000-000000000000"
        },
        "DeliveryNo":{
          "type":"string"
        },
        "AsnNo":{
          "type":"string"
        },
        "AsnDate":{
          "type":"string"
        },
        "DeviceTransactionNumber":{
          "format":"int64",
          "type":"integer"
        },
        "CurrencyIdentifier":{
          "type":"string"
        },
        "CurrencyExchangeRate":{
          "format":"double",
          "type":"number"
        },
        "IsHeld":{
          "type":"boolean"
        },
        "IsArchived":{
          "type":"boolean"
        },
        "VendorInvoiceNo":{
          "type":"string"
        },
        "Notes":{
          "type":"string"
        },
        "ShippingMethodIdentifier":{
          "type":"string"
        },
        "VendorOrderNo":{
          "type":"string"
        },
        "TrackingNo":{
          "type":"string"
        },
        "ShipDate":{
          "format":"date-time",
          "type":"string"
        },
        "CreateDateTime":{
          "format":"date-time",
          "type":"string"
        },
        "CreateEmployeeLogin":{
          "type":"string"
        },
        "EditDateTime":{
          "format":"date-time",
          "type":"string"
        },
        "EditEmployeeLogin":{
          "type":"string"
        },
        "ReleasedDateTime":{
          "format":"date-time",
          "type":"string"
        },
        "ReleasedEmployeeLogin":{
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
        "LocationIdentifier":{
          "type":"string"
        },
        "ReceivedStatus":{
          "enum":[
            "NotReceived",
            "PartiallyReceived",
            "Received"
          ],
          "type":"string"
        },
        "TotalCost":{
          "format":"double",
          "type":"number"
        },
        "TotalQty":{
          "format":"double",
          "type":"number"
        },
        "TotalQtyReceived":{
          "format":"double",
          "type":"number"
        },
        "PurchaseOrderNo":{
          "type":"string"
        },
        "VendorIdentifier":{
          "type":"string"
        },
        "PayToVendorIdentifier":{
          "type":"string"
        },
        "PurchaseOrderIdentifier":{
          "type":"string"
        },
        "ExpectedReleaseDate":{
          "format":"date-time",
          "type":"string"
        },
        "DeliveryBatchNumber":{
          "type":"string"
        },
        "DeliveryBatchDate":{
          "format":"date-time",
          "type":"string"
        },
        "Items":{
          "type":"array",
          "items":{
            "$ref":"#/definitions/AsnExportToJson_get.ItemsType"
          }
        }
      }
    },
    "AsnExportToJson_get.ItemsType":{
      "type":"object",
      "properties":{
        "RecCreated":{
          "format":"date-time",
          "type":"string"
        },
        "RecModified":{
          "format":"date-time",
          "type":"string"
        },
        "AsnItemId":{
          "format":"uuid",
          "type":"string",
          "example":"00000000-0000-0000-0000-000000000000"
        },
        "Notes":{
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
        "CartonId":{
          "type":"string"
        },
        "ExtCost":{
          "format":"double",
          "type":"number"
        },
        "ForeignCurrencyUnitCost":{
          "format":"double",
          "type":"number"
        },
        "ForeignCurrencyExtCost":{
          "format":"double",
          "type":"number"
        },
        "LineNo":{
          "format":"int32",
          "type":"integer"
        },
        "Quantity":{
          "format":"double",
          "type":"number"
        },
        "QtyReceived":{
          "format":"double",
          "type":"number"
        },
        "UnitCost":{
          "format":"double",
          "type":"number"
        },
        "VendorInvoiceReference":{
          "$ref":"#/definitions/AsnExportToJson_get.VendorInvoiceReferenceType"
        },
        "PurchaseOrderReference":{
          "$ref":"#/definitions/AsnExportToJson_get.PurchaseOrderReferenceType"
        },
        "ItemIdentifier":{
          "type":"string"
        }
      }
    },
    "AsnExportToJson_get.VendorInvoiceReferenceType":{
      "type":"object",
      "properties":{
        "InvoiceNo":{
          "type":"string"
        },
        "InvoiceLineNo":{
          "type":"string"
        }
      }
    },
    "AsnExportToJson_get.PurchaseOrderReferenceType":{
      "type":"object",
      "properties":{
        "PurchaseOrderLineNo":{
          "format":"int32",
          "type":"integer"
        },
        "PurchaseOrderNo":{
          "type":"string"
        },
        "PurchaseOrderItemIdentifier":{
          "type":"string"
        }
      }
    }
  }
~~~

---

## Request Example(s) {#RequestExamples}

**Request Example #1: RecModified > '2018-06-06T10:07:12'**

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
          "Key":"VendorIdentifierSetting",
          "Value":"Code"
        },
        {
          "Key":"ShippingMethodIdentifierSetting",
          "Value":"Code"
        },
        {
          "Key":"CurrencyIdentifierSetting",
          "Value":"Code"
        },
        {
          "Key":"PurchaseOrderIdentifierSetting",
          "Value":"No"
        },
        {
          "Key":"PurchaseOrderItemIdentifierSetting",
          "Value":"ListOrder"
        },
        {
          "Key":"ItemIdentifierSetting",
          "Value":"PLU"
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

**Request Example #2: RecModified = '2015-07-23 12:52:56.603'**

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
               "Key":"VendorIdentifierSetting",
               "Value":"Code"
            },
            {
               "Key":"ShippingMethodIdentifierSetting",
               "Value":"Code"
            },
            {
               "Key":"CurrencyIdentifierSetting",
               "Value":"Code"
            },
            {
               "Key":"PurchaseOrderIdentifierSetting",
               "Value":"No"
            },
            {
               "Key":"ItemIdentifierSetting",
               "Value":"PLU"
            }
         ],
         "Filters":[
            {
               "Field":"RecModified",
               "Operator":"Equal",
               "Value":"2015-07-23 12:52:56.603"
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

**Request Example #3: AsnDeviceTransactionNumber contains '1100000001' or '1100000002'**

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
               "Key":"VendorIdentifierSetting",
               "Value":"Code"
            },
            {
               "Key":"ShippingMethodIdentifierSetting",
               "Value":"Code"
            },
            {
               "Key":"CurrencyIdentifierSetting",
               "Value":"Code"
            },
            {
               "Key":"PurchaseOrderIdentifierSetting",
               "Value":"DTN"
            },
            {
               "Key":"PurchaseOrderItemIdentifierSetting",
               "Value":"TeamworkId"
            },
            {
               "Key":"ItemIdentifierSetting",
               "Value":"PLU"
            }
         ],
         "Filters":[
            {
               "Field":"AsnDeviceTransactionNumber",
               "Operator":"Contains",
               "Value":"1100000001,1100000002"
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

---

## Response Example(s) {#ResponseExamples}

**Response Example #1: In Process**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'asn-export' rather than 'asn'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

~~~
{  "Id": "7f481707-9388-4c53-8eac-02f6b7249b69",  "Status": "InProcess",  "ApiType": "asn-export",  "Source": "string"}
~~~

**Response Example #2: Error**

~~~
{
   "Message":"The request is invalid.",
   "ModelState":{
      "apiRequest.Data.Request.SortDescriptions[0].Direction":[
         "Error converting value \"desc\" to type 'Teamwork.AdminServer.Api.Services.Controller.SortDescriptionDirectionType'. Path 'Data.Request.SortDescriptions[0].Direction', line 1, position 340."
      ]
   }
}
~~~

**Response Example #3: Success when requesting RecModified = '2015-07-23 12:52:56.603'**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'asn-export' rather than 'asn'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"649DB2C8-828F-4F7F-8E9F-AFB7D48D9AFC",
      "Status":"Successful",
      "ApiRequestType":"asn-export",
      "TotalRecords":1,
      "RecordsCount":1,
      "ElapsedTime":"00:00:00.0333333",
      "StartDateTime":"2019-07-29T16:02:57.477",
      "EndDateTime":"2019-07-29T16:02:57.510",
      "Response":{
         "Asns":[
            {
               "RecCreated":"2015-07-23T12:52:20.867",
               "RecModified":"2015-07-23T12:52:56.603",
               "AsnId":"2B1B7604-F284-4A11-B86A-E20F719307FC",
               "DeliveryNo":"ULIT3",
               "AsnNo":"2",
               "AsnDate":"2015-07-23T17:36:50.190",
               "DeviceTransactionNumber":1100000002,
               "CurrencyExchangeRate":0.00000000000000000000,
               "IsHeld":false,
               "IsArchived":true,
               "Notes":"TES_NOTICE",
               "CreateDateTime":"2015-07-23T15:52:18.923",
               "CreateEmployeeLogin":"AUTOMAT",
               "EditDateTime":"2015-07-23T15:52:18.927",
               "EditEmployeeLogin":"AUTOMAT",
               "ReleasedDateTime":"2015-07-23T15:52:18.930",
               "ReleasedEmployeeLogin":"AUTOMAT",
               "CustomDecimal1":0.00000000000000000000,
               "CustomDecimal2":0.00000000000000000000,
               "CustomDecimal3":0.00000000000000000000,
               "CustomDecimal4":0.00000000000000000000,
               "CustomFlag1":false,
               "CustomFlag2":false,
               "CustomFlag3":false,
               "CustomFlag4":false,
               "CustomNumber1":0,
               "CustomNumber2":0,
               "CustomNumber3":0,
               "CustomNumber4":0,
               "LocationIdentifier":"1001",
               "ReceivedStatus":"Received",
               "TotalCost":15000.00000000000000000000,
               "TotalQty":150.00000000000000000000,
               "TotalQtyReceived":150.00000000000000000000,
               "PurchaseOrderNo":"67",
               "VendorIdentifier":"16",
               "PayToVendorIdentifier":"16",
               "PurchaseOrderIdentifier":"67",
               "Items":[
                  {
                     "RecCreated":"2015-07-23T12:52:21.137",
                     "RecModified":"2015-07-23T12:52:56.603",
                     "AsnItemId":"C2E23B20-FE67-4043-BFA4-31B2F3FEF4B0",
                     "Notes":"str1775234",
                     "CustomDecimal1":0.00000000000000000000,
                     "CustomDecimal2":0.00000000000000000000,
                     "CustomFlag1":false,
                     "CustomFlag2":false,
                     "CustomNumber1":0,
                     "CustomNumber2":0,
                     "CartonId":"str177234",
                     "ExtCost":15000.00000000000000000000,
                     "ForeignCurrencyUnitCost":0.00000000000000000000,
                     "ForeignCurrencyExtCost":0.00000000000000000000,
                     "LineNo":1,
                     "Quantity":150.00000000000000000000,
                     "QtyReceived":150.00000000000000000000,
                     "UnitCost":100.00000000000000000000,
                     "VendorInvoiceReference":{

                     },
                     "PurchaseOrderReference":{
                        "PurchaseOrderLineNo":1,
                        "PurchaseOrderNo":"67",
                        "PurchaseOrderItemIdentifier":"1"           
                     },
                     "ItemIdentifier":"1323"
                  }
               ]
            }
         ]
      }
   }
}
~~~

**Response Example #4: Success when requesting AsnDeviceTransactionNumber contains '1100000001' or '1100000002'**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'asn-export' rather than 'asn'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"EC573C41-B7E8-47F6-9CD5-764B85723EDF",
      "Status":"Successful",
      "ApiRequestType":"asn-export",
      "TotalRecords":2,
      "RecordsCount":2,
      "ElapsedTime":"00:00:00.0300000",
      "StartDateTime":"2019-07-29T16:05:29.853",
      "EndDateTime":"2019-07-29T16:05:29.883",
      "Response":{
         "Asns":[
            {
               "RecCreated":"2015-07-23T12:52:20.867",
               "RecModified":"2015-07-23T12:52:56.603",
               "AsnId":"2B1B7604-F284-4A11-B86A-E20F719307FC",
               "DeliveryNo":"ULIT3",
               "AsnNo":"2",
               "AsnDate":"2015-07-23T17:36:50.190",
               "DeviceTransactionNumber":1100000002,
               "CurrencyExchangeRate":0.00000000000000000000,
               "IsHeld":false,
               "IsArchived":true,
               "Notes":"TES_NOTICE",
               "CreateDateTime":"2015-07-23T15:52:18.923",
               "CreateEmployeeLogin":"AUTOMAT",
               "EditDateTime":"2015-07-23T15:52:18.927",
               "EditEmployeeLogin":"AUTOMAT",
               "ReleasedDateTime":"2015-07-23T15:52:18.930",
               "ReleasedEmployeeLogin":"AUTOMAT",
               "CustomDecimal1":0.00000000000000000000,
               "CustomDecimal2":0.00000000000000000000,
               "CustomDecimal3":0.00000000000000000000,
               "CustomDecimal4":0.00000000000000000000,
               "CustomFlag1":false,
               "CustomFlag2":false,
               "CustomFlag3":false,
               "CustomFlag4":false,
               "CustomNumber1":0,
               "CustomNumber2":0,
               "CustomNumber3":0,
               "CustomNumber4":0,
               "LocationIdentifier":"1001",
               "ReceivedStatus":"Received",
               "TotalCost":15000.00000000000000000000,
               "TotalQty":150.00000000000000000000,
               "TotalQtyReceived":150.00000000000000000000,
               "PurchaseOrderNo":"67",
               "VendorIdentifier":"16",
               "PayToVendorIdentifier":"16",
               "PurchaseOrderIdentifier":"1000000004",
               "Items":[
                  {
                     "RecCreated":"2015-07-23T12:52:21.137",
                     "RecModified":"2015-07-23T12:52:56.603",
                     "AsnItemId":"C2E23B20-FE67-4043-BFA4-31B2F3FEF4B0",
                     "Notes":"str1775234",
                     "CustomDecimal1":0.00000000000000000000,
                     "CustomDecimal2":0.00000000000000000000,
                     "CustomFlag1":false,
                     "CustomFlag2":false,
                     "CustomNumber1":0,
                     "CustomNumber2":0,
                     "CartonId":"str177234",
                     "ExtCost":15000.00000000000000000000,
                     "ForeignCurrencyUnitCost":0.00000000000000000000,
                     "ForeignCurrencyExtCost":0.00000000000000000000,
                     "LineNo":1,
                     "Quantity":150.00000000000000000000,
                     "QtyReceived":150.00000000000000000000,
                     "UnitCost":100.00000000000000000000,
                     "VendorInvoiceReference":{

                     },
                     "PurchaseOrderReference":{
                        "PurchaseOrderLineNo":1,
                        "PurchaseOrderNo":"67",
                        "PurchaseOrderItemIdentifier":"747D7FDA-FA3A-4E4D-993C-20DE517257B0"                     
                     },
                     "ItemIdentifier":"1323"
                  }
               ]
            },
            {
               "RecCreated":"2015-07-16T13:46:51.890",
               "RecModified":"2015-07-23T12:56:26.460",
               "AsnId":"2EF0BAF2-58B1-41A4-A3AA-527AF25B5052",
               "DeliveryNo":"1233233",
               "AsnNo":"1",
               "AsnDate":"2015-07-15T19:36:50.190",
               "DeviceTransactionNumber":1100000001,
               "CurrencyExchangeRate":0.00000000000000000000,
               "IsHeld":false,
               "IsArchived":true,
               "CreateDateTime":"2015-07-16T16:46:49.943",
               "CreateEmployeeLogin":"AUTOMAT",
               "EditDateTime":"2015-07-16T16:46:49.943",
               "EditEmployeeLogin":"AUTOMAT",
               "ReleasedDateTime":"2015-07-16T16:46:49.947",
               "ReleasedEmployeeLogin":"AUTOMAT",
               "CustomDecimal1":0.00000000000000000000,
               "CustomDecimal2":0.00000000000000000000,
               "CustomDecimal3":0.00000000000000000000,
               "CustomDecimal4":0.00000000000000000000,
               "CustomFlag1":false,
               "CustomFlag2":false,
               "CustomFlag3":false,
               "CustomFlag4":false,
               "CustomNumber1":0,
               "CustomNumber2":0,
               "CustomNumber3":0,
               "CustomNumber4":0,
               "LocationIdentifier":"VIKTOR",
               "ReceivedStatus":"Received",
               "TotalCost":129.00000000000000000000,
               "TotalQty":12.00000000000000000000,
               "TotalQtyReceived":12.00000000000000000000,
               "VendorIdentifier":"3",
               "PayToVendorIdentifier":"3",
               "Items":[
                  {
                     "RecCreated":"2015-07-16T13:46:52.030",
                     "RecModified":"2015-07-23T12:56:26.433",
                     "AsnItemId":"58F42FED-B144-44C7-BB14-A6A96A69BE3D",
                     "CustomDecimal1":0.00000000000000000000,
                     "CustomDecimal2":0.00000000000000000000,
                     "CustomFlag1":false,
                     "CustomFlag2":false,
                     "CustomNumber1":0,
                     "CustomNumber2":0,
                     "ExtCost":12.00000000000000000000,
                     "ForeignCurrencyUnitCost":0.00000000000000000000,
                     "ForeignCurrencyExtCost":0.00000000000000000000,
                     "LineNo":1,
                     "Quantity":6.00000000000000000000,
                     "QtyReceived":6.00000000000000000000,
                     "UnitCost":2.00000000000000000000,
                     "VendorInvoiceReference":{

                     },
                     "PurchaseOrderReference":{

                     },
                     "ItemIdentifier":"69110"
                  },
                  {
                     "RecCreated":"2015-07-16T13:46:52.050",
                     "RecModified":"2015-07-23T12:56:26.433",
                     "AsnItemId":"B52192A4-08D2-4EE2-8A1F-A14F0EED486C",
                     "CustomDecimal1":0.00000000000000000000,
                     "CustomDecimal2":0.00000000000000000000,
                     "CustomFlag1":false,
                     "CustomFlag2":false,
                     "CustomNumber1":0,
                     "CustomNumber2":0,
                     "ExtCost":99.00000000000000000000,
                     "ForeignCurrencyUnitCost":0.00000000000000000000,
                     "ForeignCurrencyExtCost":0.00000000000000000000,
                     "LineNo":2,
                     "Quantity":3.00000000000000000000,
                     "QtyReceived":3.00000000000000000000,
                     "UnitCost":33.00000000000000000000,
                     "VendorInvoiceReference":{

                     },
                     "PurchaseOrderReference":{

                     },
                     "ItemIdentifier":"69205"
                  },
                  {
                     "RecCreated":"2015-07-16T13:46:52.050",
                     "RecModified":"2015-07-23T12:56:26.433",
                     "AsnItemId":"A369DC79-C6F7-460E-A652-EEDD1010C909",
                     "CustomDecimal1":0.00000000000000000000,
                     "CustomDecimal2":0.00000000000000000000,
                     "CustomFlag1":false,
                     "CustomFlag2":false,
                     "CustomNumber1":0,
                     "CustomNumber2":0,
                     "ExtCost":18.00000000000000000000,
                     "ForeignCurrencyUnitCost":0.00000000000000000000,
                     "ForeignCurrencyExtCost":0.00000000000000000000,
                     "LineNo":3,
                     "Quantity":3.00000000000000000000,
                     "QtyReceived":3.00000000000000000000,
                     "UnitCost":6.00000000000000000000,
                     "VendorInvoiceReference":{

                     },
                     "PurchaseOrderReference":{

                     },
                     "ItemIdentifier":"69111"
                  }
               ]
            }
         ]
      }
   }
}
~~~
