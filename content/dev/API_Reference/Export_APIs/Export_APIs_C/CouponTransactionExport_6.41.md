---
title: "Coupon Transaction Export API [6.41]"
date: 2022-09-08T09:01:00-05:00
draft: false
weight: 1521
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

This topic describes the **Coupon Transaction Export** API which is used to export coupon transaction (usage<span class="ir">??????????</span>) information from CHQ.

See [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for a description on how export requests are made and on the standard request and response formats used. The API-Specific sucessful response format for this API will be described below.

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/coupon-transaction**  
Asynchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/coupon-transaction/async**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

In the Swagger UI the **/chqapi/export/coupon-transaction** endpoint is a member of the **Stored Values** endpoint group.

## Request settings {#RequestSettings}

Below are the settings which can be supplied in the **Settings** group of the export request to define which value (field) is to be used for a particular value class (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Key** column lists the names of the available settings. The **Supported Values** column lists the valid values which can be supplied for the setting. The **Default** column lists the default value for each setting if that setting is not supplied.

**Key** | **Supported Values** | **Default** | **Description** |
---- | ---- | ---- | ---- |
LocationIdentifierSetting | ExternalIdCode, Code, ExternalId, No, TeamworkId | ExternalIdCode | An indicator of which value is to be used to identify locations. |
CouponIdentifierSetting | Number, TeamworkId | Number | An indicator of which value is to be used to identify coupons. |
EmployeeIdentifierSetting | LoginName, FullName, TeamworkId | LoginName | An indicator of which value is to be used to identify employees. |
ReceiptIdentifierSetting | Code, DTN, No, AltDTN, ExternalId, TeamworkId | Code | An indicator of which value is to be used to identify receipts. |

## Request filters {#RequestFilters}

Below are the filters which can be defined in the **Filters** group of the export request (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Field** column lists the names of the fields on which filtering can be done. The **Operators** column lists the filter operator values which are valid for the field. The **Value** column describes the value expected for the field.

**Field** | **Operators** | **Value** |
---- | ---- | ---- |
RecModified | "Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. |
TransactionId | "Equal", "Contains" | Any valid value representing a transaction identifier for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |
CouponId | "Equal", "Contains" | Any valid value representing a coupon identifier for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |
CouponNumber | "Equal", "Contains" | Any valid value representing a coupon number for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |


## Request sorts {#RequestSorts}

The information returned is automatically sorted by the **RecModified** field *ascending*. No other sorts can be requested.

---

## Successful response {#SuccessfulResponse}

### Format {#SuccessfulResponseFormat}

Below is the format of the successful response to the export request. See [*JSON Data Types*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/JsonDataTypes_6.41/) for a description of the values which could appear in the **Data Type** column.

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
ApiDocumentId | string, guid | A unique identifier of the API document being used. |
Status | string,enum | The status of the response. The value will always be "Successful". |
ApiRequestType | string | <span class="ir">***????????***</span> |
TotalRecords | int32 | The total number of records processed. |
RecordsCount | int32 | The number of records exported. |
ElapsedTime | string, datetime | The time it took to execute the API. |
StartDateTime | string, datetime | A timestamp of when the API began executing. |
EndDateTime | string, datetime | A timestamp of when the API completed. |
<span class="api-gn">Response</span> | | <span class="api-gd">A group containing the following fields and groups.</span> |
<span class="api-gn">Response: CouponTransactions</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
CouponTransactionId | string, guid | A unique identifier of the coupon transaction. |
CouponIdentifier | string | An identifier of the cpoun used for the transaction. |
TransactionId | int64 | An identifier of the transaction. |
Amount | double | The ampunt of the transaction. |
ReceiptIdentifier | string | An identifier of the receipt on which the transaction occured. |
ReceiptNum | string | An identifier of the receipt on which the transaction occured. |
DeviceId | string | An identifier of the device on which the transaction occured. |
LocationIdentifier | string | An identifier of the location where the transaction occured. |
EmployeeIdentifier | string | An identifier of the employee who perfomed the transaction. |
TransactionTime | string, datetime | A timestamp of when the transaction occured. |
ModifyTime | string, datetime | A timestamp of when <span class="ir">?????????</span>. |
AuthorizeTime | string, datetime | A timestamp of when the transaction was authorized. |
CaptureTime | string, datetime | A timestamp of when the transaction was captured. |
DiscardTime | string, datetime | A timestamp of when the transaction was discarded. |
CustomText1 - 5 | string | These five fields are customizable text values for the transaction. |
IncomingIP | string | <span class="ir">?????????</span> |
TransactionStatus | string, enum | An indicator of the transaction's status. Its value must be one of the following: "Authorized", "Captured", "Discarded". |
TransactionType | string, enum | An indicator of the transaction's type. Its value must be one of the following: "Ordinary". |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: CouponTransactions</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response</span> |

### Schema {#SuccessfulResponseSchema}
 
Below is the JSON source for the schema of a successful response to the export request as described above.

~~~
{
    "CouponTransactionExportToJson_get.ApiDocumentType": {
      "type": "object",
      "properties": {
        "ApiDocumentId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "Status": {
          "enum": [
            "Successful"
          ],
          "type": "string"
        },
        "ApiRequestType": {
          "type": "string"
        },
        "TotalRecords": {
          "format": "int32",
          "type": "integer"
        },
        "RecordsCount": {
          "format": "int32",
          "type": "integer"
        },
        "ElapsedTime": {
          "format": "date-time",
          "type": "string"
        },
        "StartDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "EndDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "Response": {
          "$ref": "#/definitions/CouponTransactionExportToJson_get.ResponseType"
        }
      }
    },
    "CouponTransactionExportToJson_get.ResponseType": {
      "type": "object",
      "properties": {
        "CouponTransactions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/CouponTransactionExportToJson_get.CouponTransactionsType"
          }
        }
      }
    },
    "CouponTransactionExportToJson_get.CouponTransactionsType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "CouponTransactionId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CouponIdentifier": {
          "type": "string"
        },
        "TransactionId": {
          "format": "int64",
          "type": "integer"
        },
        "Amount": {
          "format": "double",
          "type": "number"
        },
        "ReceiptIdentifier": {
          "type": "string"
        },
        "ReceiptNum": {
          "type": "string"
        },
        "DeviceId": {
          "type": "string"
        },
        "LocationIdentifier": {
          "type": "string"
        },
        "EmployeeIdentifier": {
          "type": "string"
        },
        "TransactionTime": {
          "format": "date-time",
          "type": "string"
        },
        "ModifyTime": {
          "format": "date-time",
          "type": "string"
        },
        "AuthorizeTime": {
          "format": "date-time",
          "type": "string"
        },
        "CaptureTime": {
          "format": "date-time",
          "type": "string"
        },
        "DiscardTime": {
          "format": "date-time",
          "type": "string"
        },
        "CustomText1": {
          "type": "string"
        },
        "CustomText2": {
          "type": "string"
        },
        "CustomText3": {
          "type": "string"
        },
        "CustomText4": {
          "type": "string"
        },
        "CustomText5": {
          "type": "string"
        },
        "IncomingIP": {
          "type": "string"
        },
        "TransactionStatus": {
          "enum": [
            "Authorized",
            "Captured",
            "Discarded"
          ],
          "type": "string"
        },
        "TransactionType": {
          "enum": [
            "Ordinary"
          ],
          "type": "string"
        }
      }
    }
}
~~~

---

## Request Example(s) {#RequestExamples}

**Request Example #1: CouponNumber = '44RYYT677'**

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
               "Key":"CouponIdentifierSetting",
               "Value":"Number"
            },
            {
               "Key":"EmployeeIdentifierSetting",
               "Value":"LoginName"
            },
            {
               "Key":"ReceiptIdentifierSetting",
               "Value":"Code"
            }
         ],
         "Filters":[
            {
               "Field":"CouponNumber",
               "Operator":"Equal",
               "Value":"44RYYT677"
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

~~~
{  "Id": "486feb43-f7ca-4e6e-8898-ce1932104a41",  "Status": "InProcess",  "ApiType": "coupon-transaction-export",  "Source": "string"}
~~~

**Response Example #2: Error**

~~~
{
  "Message": "An error has occurred.",
  "ExceptionMessage": "Conversion failed when converting the ****** value '******' to data type ******.",
  "ExceptionType": "Teamwork.AdminServer.Api.Services.Controller.ChqApiControllerException",
  "StackTrace": null
}
~~~

**Response Example #3: Success when requesting CouponIdentifier = 'WD766IR'**

~~~
{
  "ApiDocumentId": "12345678-1234-1234-1234-123456789012",
  "Status": "Successful",
  "ApiRequestType": "coupon-transaction-export",
  "TotalRecords": 30,
  "RecordsCount": 1,
  "ElapsedTime": "2021-07-13T10:25:03.705Z",
  "StartDateTime": "2021-07-13T10:25:03.705Z",
  "EndDateTime": "2021-07-13T10:25:03.705Z",
  "Response": {
    "CouponTransactions": [
      {
        "RecCreated": "2021-07-13T10:25:03.705Z",
        "RecModified": "2021-07-13T10:25:03.705Z",
        "CouponTransactionId": "12345678-1234-1234-1234-123456789012",
        "CouponIdentifier": "WD766IR",
        "TransactionId": 12345,
        "Amount": 10,
        "ReceiptIdentifier": "TTY344",
        "ReceiptNum": "TTY344",
        "DeviceId": "device one",
        "LocationIdentifier": "store one",
        "EmployeeIdentifier": "john",
        "TransactionTime": "2021-07-13T10:25:03.705Z",
        "ModifyTime": "2021-07-13T10:25:03.705Z",
        "AuthorizeTime": "2021-07-13T10:25:03.705Z",
        "CaptureTime": null,
        "DiscardTime": null,
        "CustomText1": "1",
        "CustomText2": "2",
        "CustomText3": "3",
        "CustomText4": "4",
        "CustomText5": "5",
        "IncomingIP": "127.0.0.1",
        "TransactionStatus": "Authorized",
        "TransactionType": "Ordinary"
      }
    ]
  }
}
~~~
