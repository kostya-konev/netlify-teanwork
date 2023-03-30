---
title: "EC ATS Export [6.41]"
date: 2022-10-02T08:56:00-05:00
draft: false
weight: 0301
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

This topic describes the **EC ATS Export** API which is used to export ecommerce available to sell information from CHQ.

See [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for a description on how export requests are made and on the standard request and response formats used. The API-Specific sucessful response format for this API will be described below.

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/ec-ats**  
Asynchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/ec-ats/async**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

In the Swagger UI the **/chqapi/export/ec-ats** endpoint is a member of the **ECommerce** endpoint group.

## Request settings {#RequestSettings}

Below are the settings which can be supplied in the **Settings** group of the export request to define which value (field) is to be used for a particular value class (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Key** column lists the names of the available settings. The **Supported Values** column lists the valid values which can be supplied for the setting. The **Default** column lists the default value for each setting if that setting is not supplied.

**Key** | **Supported Values** | **Default** | **Description** |
---- | ---- | ---- | ---- |
LocationIdentifierSetting | ExternalIdCode, Code, ExternalId, No, TeamworkId | ExternalIdCode | An indicator of which value is to be used to identify locations. |
ItemIdentifierSetting | PLU, ExternalId, CLU, UPC, TeamworkId | PLU | An indicator of which value is to be used to identify items. |
ECommerceChannelIdentifierSetting | Name, Description, TeamworkId | Name | An indicator of which value is to be used to identify ecommerce channels. |
EmployeeIdentifierSetting | LoginName, FullName, TeamworkId | LoginName | An indicator of which value is to be used to identify employees. |
ReturnItemsWithOrdersIdentifierSetting | 0 (false), 1 (true) | 0 | <span class="ir">??????????</span>

## Request filters {#RequestFilters}

Below are the filters which can be defined in the **Filters** group of the export request (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Field** column lists the names of the fields on which filtering can be done. The **Operators** column lists the filter operator values which are valid for the field. The **Value** column describes the value expected for the field.

**Field** | **Operators** | **Value** |
---- | ---- | ---- |
RecModified | "Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. |
EcAtsControlName | "Equal" | Any valid value representing an ecommerce available to sell control name. |

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
<span class="api-gn">Response: EcAtsControlOrders</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
EcAtsControlOrderId | string, guid | A unique identifier of the Control Order. |
StartDateTime | string, datetime | A timestamp of when <span class="ir">?????????</span> |
EchoDateTime | string, datetime | A timestamp of when <span class="ir">?????????</span> |
CreatedByEmployeeIdentifier | string | An identifier of the employee who created the control order. |
<span class="api-gn">Response: EcAtsControlOrders: SellLocations</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
SellLocationIdentifier | string | An identifier of the sell location to which the control order applies. <span class="ir">?????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: EcAtsControlOrders: SellLocations</span> |
<span class="api-gn">Response: EcAtsControlOrders: FillLocations</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
FillLocationIdentifier | string | An identifier of the sell location to which the control order applies. <span class="ir">?????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: EcAtsControlOrders: FillLocations</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: EcAtsControlOrders</span> |
IsProtected | boolean | An indicator as to whether the control order is protected. <span class="ir">?????????</span> |
<span class="api-gn">Response: EcAtsControlOrders: EcAtsControl</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
EcAtsControlId | string, guid | A unique identifier of the control. |
Name | string | The name of the control. <span class="ir">?????????</span> |
ECChannelIdentifier | string | An identifier of the ecommerce echannel to which the control order applies. <span class="ir">?????????</span> |
EchoSourceId | string, guid | A unique identifier of <span class="ir">?????????</span> |
AllowManualChanges | boolean | An indicator as to whether or not manual changes to the control order are allowed. |
Inactive | boolean | An indicator as to whether or not the control order is active. |
TaskId | string, guid | A unique identifier of <span class="ir">?????????</span> |
IsProtected | boolean | An indicator as to whether or not the control order is protected. |
UseEcAtsBufferFromItem | boolean | An idicator as to whether or not the ecommerse available to sell buffer from the related item is to be used. <span class="ir">?????????</span> |
BufferQty | double | The available to sell quantity in the buffer. <span class="ir">?????????</span> |
BufferPercent | double | The available to sell percentage in the buffer. <span class="ir">?????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: EcAtsControlOrders: EcAtsControl</span> |
<span class="api-gn">Response: EcAtsControlOrders: EcAtsCOItems</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
EcAtsCOItemId | string, guid | A unique identifier of the item. <span class="ir">?????????</span> |
ItemIdentifier | string | An identifier of the item. <span class="ir">?????????</span> |
ECStatus | string, enum | An indicator of the item’s ecommerce status. Its value must be one of the following: "NonEc", "EcOffer", "EcSuspended", "EcDiscontinued". |
StartingEcAts | double | The item's starting ecommerce available to sell quantity. <span class="ir">?????????</span> |
Buffer | double | <span class="ir">?????????</span> |
EC_ATS | double | <span class="ir">?????????</span> |
ChangeEcAts | double | <span class="ir">?????????</span> |
EcBackorder | double | The item's ecommerce backorder amount. <span class="ir">?????????</span> |
EcNextDateAvailable | string, datetime | A timestamp of when the item will next be available. <span class="ir">?????????</span> |
EcPreorder | double | The quantity of the item which can be preordered. <span class="ir">?????????</span> |
LastModifiedDate | string, datetime | A timestamp of when <span class="ir">?????????</span> for the item was last modified. |
LastModifiedByEmployeeIdentifier | string | An identifier of the employee who last modified the <span class="ir">?????????</span> for the item. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: EcAtsControlOrders: EcAtsCOItems</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: EcAtsControlOrders</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response</span> |

### Schema {#SuccessfulResponseSchema}
 
Below is the JSON source for the schema of a successful response to the export request as described above.

~~~
{
    "EcAtsExportToJson_get.ApiDocumentType": {
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
          "$ref": "#/definitions/EcAtsExportToJson_get.ResponseType"
        }
      }
    },
    "EcAtsExportToJson_get.ResponseType": {
      "type": "object",
      "properties": {
        "EcAtsControlOrders": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/EcAtsExportToJson_get.EcAtsControlOrdersType"
          }
        }
    },
    "EcAtsExportToJson_get.EcAtsControlOrdersType": {
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
        "EcAtsControlOrderId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "StartDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "EchoDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "CreatedByEmployeeIdentifier": {
          "type": "string"
        },
        "SellLocations": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/EcAtsExportToJson_get.SellLocationsType"
          }
        },
        "FillLocations": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/EcAtsExportToJson_get.FillLocationsType"
          }
        },
        "IsProtected": {
          "type": "boolean"
        },
        "EcAtsControl": {
          "$ref": "#/definitions/EcAtsExportToJson_get.EcAtsControlType"
        },
        "EcAtsCOItems": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/EcAtsExportToJson_get.EcAtsCOItemsType"
          }
        }
      }
    },
    "EcAtsExportToJson_get.EcAtsControlType": {
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
        "EcAtsControlId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "Name": {
          "type": "string"
        },
        "ECChannelIdentifier": {
          "type": "string"
        },
        "EchoSourceId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "AllowManualChanges": {
          "type": "boolean"
        },
        "Inactive": {
          "type": "boolean"
        },
        "TaskId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsProtected": {
          "type": "boolean"
        },
        "UseEcAtsBufferFromItem": {
          "type": "boolean"
        },
        "BufferQty": {
          "format": "double",
          "type": "number"
        },
        "BufferPercent": {
          "format": "double",
          "type": "number"
        }
      }
    },
    "EcAtsExportToJson_get.EcAtsCOItemsType": {
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
        "EcAtsCOItemId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "ItemIdentifier": {
          "type": "string"
        },
        "ECStatus": {
          "enum": [
            "NonEc",
            "EcOffer",
            "EcSuspended",
            "EcDiscontinued"
          ],
          "type": "string"
        },
        "StartingEcAts": {
          "format": "double",
          "type": "number"
        },
        "Buffer": {
          "format": "double",
          "type": "number"
        },
        "EC_ATS": {
          "format": "double",
          "type": "number"
        },
        "ChangeEcAts": {
          "format": "double",
          "type": "number"
        },
        "EcBackorder": {
          "format": "double",
          "type": "number"
        },
        "EcNextDateAvailable": {
          "format": "date-time",
          "type": "string"
        },
        "EcPreorder": {
          "format": "double",
          "type": "number"
        },
        "LastModifiedDate": {
          "format": "date-time",
          "type": "string"
        },
        "LastModifiedByEmployeeIdentifier": {
          "type": "string"
        }
      }
    },
    "EcAtsExportToJson_get.SellLocationsType": {
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
        "SellLocationIdentifier": {
          "type": "string"
        }
      }
    }
	}, 
    "EcAtsExportToJson_get.FillLocationsType": {
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
        "FillLocationIdentifier": {
          "type": "string"
        }
      }
    }
}
~~~

---

## Request Example(s) {#RequestExamples}

**Request Example #1: RecModified >= '2019-07-15T15:44:42.570' and EcAtsControlName = 'ECATS_1'**

~~~
{
  "Source":"Source",
  "Data":{
    "Request":{
      "Settings":[
        {
          "Key":"LocationIdentifierSetting",
          "Value":"ExternalIdCode"
        },
        {
          "Key":"ItemIdentifierSetting",
          "Value":"PLU"
        },
        {
          "Key":"ECommerceChannelIdentifierSetting",
          "Value":"Name"
        },
        {
          "Key":"EmployeeIdentifierSetting",
          "Value":"LoginName"
        },
        {
          "Key":"ReturnItemsWithOrdersIdentifierSetting",
          "Value":"0"
        }
      ],
      "Filters":[
        {
          "Field":"RecModified",
          "Operator":"Greater than or equal",
          "Value":"2019-07-15T15:44:42.570"
        },
        {
          "Field":"EcAtsControlName",
          "Operator":"Equal",
          "Value":"ECATS_1"
        }
      ],
      "SortDescriptions":[
        {
          "Name":"RecModified",
          "Direction":"Ascending"
        }
      ],
      "Top":20,
      "Skip":0
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

**Response Example #3: Success when requesting AtsControlName = 'ECATS_1' and ReturnItemsWithOrdersIdentifierSetting = '1'**

~~~
{
  "ApiDocument":{
    "ApiDocumentId":"BE5A0AEF-4285-4F26-99AC-B2491D22B552",
    "Status":"Successful",
    "ApiRequestType":"ec-ats-export",
    "TotalRecords":1,
    "RecordsCount":1,
    "ElapsedTime":"00:00:00.0700000",
    "StartDateTime":"2020-04-01T13:35:51.130",
    "EndDateTime":"2020-04-01T13:35:51.200",
    "Response":{
      "EcAtsControlOrders":[
        {
          "RecCreated":"2020-03-31T07:50:00.880",
          "RecModified":"2020-03-31T07:50:00.880",
          "EcAtsControlOrderId":"33357BA2-BAC9-49DD-BBF8-B8779050B5F0",
          "OrderNo":2,
          "StartDateTime":"2020-03-31T07:50:00.847",
          "CreatedByEmployeeIdentifier":"AUTOMAT",
          "SellLocationIdentifier":"HQ",
          "IsProtected":false,
          "EcAtsControl":{
            "RecCreated":"2020-03-31T06:33:26.210",
            "RecModified":"2020-03-31T06:33:26.210",
            "EcAtsControlId":"027981F4-2605-4121-86F9-DF42040CE77E",
            "Name":"ECATS_1",
            "ECChannelIdentifier":"Channel One",
            "AllowManualChanges":false,
            "Inactive":false,
            "TaskId":"BF1801FD-8FFF-4CB7-B35B-B90CBDACF19F",
            "SellLocationIdentifier":"HQ",
            "IsProtected":false,
            "FillLocations":[
              {
                "SellLocationIdentifier":"HQ"
              },
              {
                "SellLocationIdentifier":"TEST"
              }
            ],
            "UseEcAtsBufferFromItem":true
          },
          "EcAtsCOItems":[
            {
              "RecCreated":"2020-03-31T07:50:00.867",
              "RecModified":"2020-03-31T07:50:00.917",
              "EcAtsCOItemId":"D9A2EEFC-8FDD-4275-974F-1A2FEDD0B91A",
              "ItemIdentifier":"5",
              "ECStatus":"EcOffer",
              "StartingEcAts":0.00000000000000000000,
			  "Buffer":0.00000000000000000000,
              "EC_ATS":0.00000000000000000000
            },
            {
              "RecCreated":"2020-03-31T07:50:00.867",
              "RecModified":"2020-03-31T07:50:00.913",
              "EcAtsCOItemId":"0CC4CCA7-4A15-4104-BB0E-3E1908AABAA0",
              "ItemIdentifier":"4",
              "ECStatus":"EcOffer",
              "StartingEcAts":0.00000000000000000000,
              "Buffer":0.00000000000000000000,
              "EC_ATS":0.00000000000000000000
            },
            {
              "RecCreated":"2020-03-31T07:50:00.867",
              "RecModified":"2020-03-31T07:50:00.897",
              "EcAtsCOItemId":"D7B82BCB-1528-49DB-8D21-6960392339CB",
              "ItemIdentifier":"6",
              "ECStatus":"EcOffer",
              "StartingEcAts":10.00000000000000000000,
              "Buffer":2.00000000000000000000,
              "EC_ATS":12.00000000000000000000
            },
            {
              "RecCreated":"2020-03-31T07:50:00.867",
              "RecModified":"2020-03-31T07:50:00.917",
              "EcAtsCOItemId":"193B9A0F-6533-4DF7-A88C-7D99F02A0D65",
              "ItemIdentifier":"3",
              "ECStatus":"EcOffer",
              "StartingEcAts":0.00000000000000000000,
              "Buffer":0.00000000000000000000,
              "EC_ATS":0.00000000000000000000
            },
            {
              "RecCreated":"2020-03-31T07:50:00.867",
              "RecModified":"2020-03-31T07:50:00.913",
              "EcAtsCOItemId":"06C4E077-9871-4985-8432-D8731D1BC3AA",
              "ItemIdentifier":"1",
              "ECStatus":"EcOffer",
              "StartingEcAts":0.00000000000000000000,
              "Buffer":0.00000000000000000000,
              "EC_ATS":0.00000000000000000000
            },
            {
              "RecCreated":"2020-03-31T07:50:00.867",
              "RecModified":"2020-03-31T07:50:00.917",
              "EcAtsCOItemId":"8633EB59-794E-4595-BDC1-F2D10B10DA2E",
              "ItemIdentifier":"2",
              "ECStatus":"EcOffer",
              "StartingEcAts":10.00000000000000000000,
              "Buffer":0.00000000000000000000,
              "EC_ATS":10.00000000000000000000
            }
          ]
        }
      ]
    }
  }
}
~~~

**Response Example #4: Success when requesting ReturnItemsWithOrdersIdentifierSetting = '0'**

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"6AB7F00A-F576-4158-A1C2-C29C8E9EC846",
      "Status":"Successful",
      "ApiRequestType":"ec-ats-export",
      "TotalRecords":4,
      "RecordsCount":4,
      "ElapsedTime":"00:00:00.0733333",
      "StartDateTime":"2021-01-25T13:16:22.460",
      "EndDateTime":"2021-01-25T13:16:22.533",
      "Response":{
         "EcAtsControlOrders":[
            {
               "RecCreated":"2021-01-25T12:48:37.033",
               "RecModified":"2021-01-25T12:48:37.033",
               "EcAtsControlOrderId":"2B491C6B-D7C3-4839-8136-31FCA3A90D52",
               "OrderNo":1,
               "StartDateTime":"2021-01-25T12:48:37.033",
               "CreatedByEmployeeIdentifier":"AUTOMAT",
               "SellLocations":[
                  {
                     "RecCreated":"2021-01-25T12:48:37.033",
                     "RecModified":"2021-01-25T12:48:37.033",
                     "SellLocationIdentifier":"HQ"
                  }
               ],
               "FillLocations":[
                  {
                     "RecCreated":"2021-01-25T12:48:37.033",
                     "RecModified":"2021-01-25T12:48:37.033",
                     "FillLocationIdentifier":"TEST"
                  }
               ],
               "IsProtected":false,
               "EcAtsControl":[
                  {
                     "RecCreated":"2021-01-25T12:16:09.743",
                     "RecModified":"2021-01-25T12:16:09.743",
                     "EcAtsControlId":"C6639AD5-5F70-44FA-A742-FED90440BC71",
                     "Name":"Control_1",
                     "ECChannelIdentifier":"Channel1",
                     "AllowManualChanges":true,
                     "Inactive":false,
                     "TaskId":"D983266A-9F32-4807-8084-1FCFF01B4CFB",
                     "IsProtected":false,
                     "UseEcAtsBufferFromItem":true
                  }
               ]
            },
            {
               "RecCreated":"2021-01-25T12:56:00.173",
               "RecModified":"2021-01-25T12:56:00.173",
               "EcAtsControlOrderId":"D78C2E8B-A361-40BF-8DAF-9598318A8EEC",
               "OrderNo":2,
               "StartDateTime":"2021-01-25T12:56:00.173",
               "CreatedByEmployeeIdentifier":"AUTOMAT",
               "SellLocations":[
                  {
                     "RecCreated":"2021-01-25T12:56:00.173",
                     "RecModified":"2021-01-25T12:56:00.173",
                     "SellLocationIdentifier":"HQ"
                  }
               ],
               "FillLocations":[
                  {
                     "RecCreated":"2021-01-25T12:56:00.173",
                     "RecModified":"2021-01-25T12:56:00.173",
                     "FillLocationIdentifier":"TEST"
                  }
               ],
               "IsProtected":false,
               "EcAtsControl":[
                  {
                     "RecCreated":"2021-01-25T12:16:09.743",
                     "RecModified":"2021-01-25T12:16:09.743",
                     "EcAtsControlId":"C6639AD5-5F70-44FA-A742-FED90440BC71",
                     "Name":"Control_1",
                     "ECChannelIdentifier":"Channel1",
                     "AllowManualChanges":true,
                     "Inactive":false,
                     "TaskId":"D983266A-9F32-4807-8084-1FCFF01B4CFB",
                     "IsProtected":false,
                     "UseEcAtsBufferFromItem":true
                  }
               ]
            },
            {
               "RecCreated":"2021-01-25T12:56:26.140",
               "RecModified":"2021-01-25T12:56:26.140",
               "EcAtsControlOrderId":"7AF38E4C-C4D5-4772-AD9C-60423CA55215",
               "OrderNo":3,
               "StartDateTime":"2021-01-25T12:56:26.140",
               "CreatedByEmployeeIdentifier":"AUTOMAT",
               "SellLocations":[
                  {
                     "RecCreated":"2021-01-25T12:56:26.140",
                     "RecModified":"2021-01-25T12:56:26.140",
                     "SellLocationIdentifier":"HQ"
                  }
               ],
               "FillLocations":[
                  {
                     "RecCreated":"2021-01-25T12:56:26.140",
                     "RecModified":"2021-01-25T12:56:26.140",
                     "FillLocationIdentifier":"TEST"
                  }
               ],
               "IsProtected":false,
               "EcAtsControl":[
                  {
                     "RecCreated":"2021-01-25T12:16:09.743",
                     "RecModified":"2021-01-25T12:16:09.743",
                     "EcAtsControlId":"C6639AD5-5F70-44FA-A742-FED90440BC71",
                     "Name":"Control_1",
                     "ECChannelIdentifier":"Channel1",
                     "AllowManualChanges":true,
                     "Inactive":false,
                     "TaskId":"D983266A-9F32-4807-8084-1FCFF01B4CFB",
                     "IsProtected":false,
                     "UseEcAtsBufferFromItem":true
                  }
               ]
            },
            {
               "RecCreated":"2021-01-25T12:57:06.780",
               "RecModified":"2021-01-25T12:57:06.780",
               "EcAtsControlOrderId":"FD5C1567-4A46-4E74-9B34-55BB53931422",
               "OrderNo":4,
               "StartDateTime":"2021-01-25T12:57:06.780",
               "CreatedByEmployeeIdentifier":"AUTOMAT",
               "SellLocations":[
                  {
                     "RecCreated":"2021-01-25T12:57:06.780",
                     "RecModified":"2021-01-25T12:57:06.780",
                     "SellLocationIdentifier":"HQ"
                  }
               ],
               "FillLocations":[
                  {
                     "RecCreated":"2021-01-25T12:57:06.780",
                     "RecModified":"2021-01-25T12:57:06.780",
                     "FillLocationIdentifier":"TEST"
                  }
               ],
               "IsProtected":false,
               "EcAtsControl":[
                  {
                     "RecCreated":"2021-01-25T12:16:09.743",
                     "RecModified":"2021-01-25T12:16:09.743",
                     "EcAtsControlId":"C6639AD5-5F70-44FA-A742-FED90440BC71",
                     "Name":"Control_1",
                     "ECChannelIdentifier":"Channel1",
                     "AllowManualChanges":true,
                     "Inactive":false,
                     "TaskId":"D983266A-9F32-4807-8084-1FCFF01B4CFB",
                     "IsProtected":false,
                     "UseEcAtsBufferFromItem":true
                  }
               ]
            }
         ]
      }
   }
}
~~~


**Response Example #5: Success when requesting ReturnItemsWithOrdersIdentifierSetting = '1'**

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"4F1666D6-C664-40FA-BE5C-451A9AFEAA5A",
      "Status":"Successful",
      "ApiRequestType":"ec-ats-export",
      "TotalRecords":4,
      "RecordsCount":4,
      "ElapsedTime":"00:00:00.0700000",
      "StartDateTime":"2021-01-25T13:18:01.500",
      "EndDateTime":"2021-01-25T13:18:01.570",
      "Response":{
         "EcAtsControlOrders":[
            {
               "RecCreated":"2021-01-25T12:48:37.033",
               "RecModified":"2021-01-25T12:48:37.033",
               "EcAtsControlOrderId":"2B491C6B-D7C3-4839-8136-31FCA3A90D52",
               "OrderNo":1,
               "StartDateTime":"2021-01-25T12:48:37.033",
               "CreatedByEmployeeIdentifier":"AUTOMAT",
               "SellLocations":[
                  {
                     "RecCreated":"2021-01-25T12:48:37.033",
                     "RecModified":"2021-01-25T12:48:37.033",
                     "SellLocationIdentifier":"HQ"
                  }
               ],
               "FillLocations":[
                  {
                     "RecCreated":"2021-01-25T12:48:37.033",
                     "RecModified":"2021-01-25T12:48:37.033",
                     "FillLocationIdentifier":"TEST"
                  }
               ],
               "IsProtected":false,
               "EcAtsControl":[
                  {
                     "RecCreated":"2021-01-25T12:16:09.743",
                     "RecModified":"2021-01-25T12:16:09.743",
                     "EcAtsControlId":"C6639AD5-5F70-44FA-A742-FED90440BC71",
                     "Name":"Control_1",
                     "ECChannelIdentifier":"Channel1",
                     "AllowManualChanges":true,
                     "Inactive":false,
                     "TaskId":"D983266A-9F32-4807-8084-1FCFF01B4CFB",
                     "IsProtected":false,
                     "UseEcAtsBufferFromItem":true
                  }
               ],
               "EcAtsCOItems":[
                  {
                     "RecCreated":"2021-01-25T12:48:37.033",
                     "RecModified":"2021-01-25T12:48:37.033",
                     "EcAtsCOItemId":"39BCBF91-CBE0-4119-8EEA-050599D57ABD",
                     "ItemIdentifier":"10422",
                     "ECStatus":"EcOffer",
                     "StartingEcAts":0.00000000000000000000,
                     "Buffer":0.00000000000000000000,
                     "EC_ATS":0.00000000000000000000,
                     "EcBackorder":0.00000000000000000000,
                     "EcNextDateAvailable":"1900-01-01T00:00:00",
                     "EcPreorder":0.00000000000000000000
                  }
               ]
            },
            {
               "RecCreated":"2021-01-25T12:56:00.173",
               "RecModified":"2021-01-25T12:56:00.173",
               "EcAtsControlOrderId":"D78C2E8B-A361-40BF-8DAF-9598318A8EEC",
               "OrderNo":2,
               "StartDateTime":"2021-01-25T12:56:00.173",
               "CreatedByEmployeeIdentifier":"AUTOMAT",
               "SellLocations":[
                  {
                     "RecCreated":"2021-01-25T12:56:00.173",
                     "RecModified":"2021-01-25T12:56:00.173",
                     "SellLocationIdentifier":"HQ"
                  }
               ],
               "FillLocations":[
                  {
                     "RecCreated":"2021-01-25T12:56:00.173",
                     "RecModified":"2021-01-25T12:56:00.173",
                     "FillLocationIdentifier":"TEST"
                  }
               ],
               "IsProtected":false,
               "EcAtsControl":[
                  {
                     "RecCreated":"2021-01-25T12:16:09.743",
                     "RecModified":"2021-01-25T12:16:09.743",
                     "EcAtsControlId":"C6639AD5-5F70-44FA-A742-FED90440BC71",
                     "Name":"Control_1",
                     "ECChannelIdentifier":"Channel1",
                     "AllowManualChanges":true,
                     "Inactive":false,
                     "TaskId":"D983266A-9F32-4807-8084-1FCFF01B4CFB",
                     "IsProtected":false,
                     "UseEcAtsBufferFromItem":true
                  }
               ],
               "EcAtsCOItems":[
                  {
                     "RecCreated":"2021-01-25T12:56:00.173",
                     "RecModified":"2021-01-25T12:56:00.173",
                     "EcAtsCOItemId":"D2267A46-DDBB-4C72-B441-494F90AAE514",
                     "ItemIdentifier":"10422",
                     "ECStatus":"EcOffer",
                     "StartingEcAts":0.00000000000000000000,
                     "Buffer":0.00000000000000000000,
                     "EC_ATS":0.00000000000000000000,
                     "EcBackorder":0.00000000000000000000,
                     "EcNextDateAvailable":"1900-01-01T00:00:00",
                     "EcPreorder":0.00000000000000000000
                  }
               ]
            },
            {
               "RecCreated":"2021-01-25T12:56:26.140",
               "RecModified":"2021-01-25T12:56:26.140",
               "EcAtsControlOrderId":"7AF38E4C-C4D5-4772-AD9C-60423CA55215",
               "OrderNo":3,
               "StartDateTime":"2021-01-25T12:56:26.140",
               "CreatedByEmployeeIdentifier":"AUTOMAT",
               "SellLocations":[
                  {
                     "RecCreated":"2021-01-25T12:56:26.140",
                     "RecModified":"2021-01-25T12:56:26.140",
                     "SellLocationIdentifier":"HQ"
                  }
               ],
               "FillLocations":[
                  {
                     "RecCreated":"2021-01-25T12:56:26.140",
                     "RecModified":"2021-01-25T12:56:26.140",
                     "FillLocationIdentifier":"TEST"
                  }
               ],
               "IsProtected":false,
               "EcAtsControl":[
                  {
                     "RecCreated":"2021-01-25T12:16:09.743",
                     "RecModified":"2021-01-25T12:16:09.743",
                     "EcAtsControlId":"C6639AD5-5F70-44FA-A742-FED90440BC71",
                     "Name":"Control_1",
                     "ECChannelIdentifier":"Channel1",
                     "AllowManualChanges":true,
                     "Inactive":false,
                     "TaskId":"D983266A-9F32-4807-8084-1FCFF01B4CFB",
                     "IsProtected":false,
                     "UseEcAtsBufferFromItem":true
                  }
               ],
               "EcAtsCOItems":[
                  {
                     "RecCreated":"2021-01-25T12:56:26.140",
                     "RecModified":"2021-01-25T12:56:26.140",
                     "EcAtsCOItemId":"2DB86994-BB54-474D-86B8-10C6FB8B7019",
                     "ItemIdentifier":"10542",
                     "ECStatus":"EcOffer",
                     "StartingEcAts":0.00000000000000000000,
                     "Buffer":0.00000000000000000000,
                     "EC_ATS":0.00000000000000000000,
                     "EcBackorder":0.00000000000000000000,
                     "EcNextDateAvailable":"1900-01-01T00:00:00",
                     "EcPreorder":0.00000000000000000000
                  },
                  {
                     "RecCreated":"2021-01-25T12:56:26.140",
                     "RecModified":"2021-01-25T12:56:26.140",
                     "EcAtsCOItemId":"C6D57FEC-7EC5-45EB-8D5D-1287824394D1",
                     "ItemIdentifier":"10422",
                     "ECStatus":"EcOffer",
                     "StartingEcAts":0.00000000000000000000,
                     "Buffer":0.00000000000000000000,
                     "EC_ATS":0.00000000000000000000,
                     "EcBackorder":0.00000000000000000000,
                     "EcNextDateAvailable":"1900-01-01T00:00:00",
                     "EcPreorder":0.00000000000000000000
                  },
                  {
                     "RecCreated":"2021-01-25T12:56:26.140",
                     "RecModified":"2021-01-25T12:56:26.140",
                     "EcAtsCOItemId":"CDBF8187-7DC3-4703-AE3B-48114E8980C2",
                     "ItemIdentifier":"10541",
                     "ECStatus":"EcOffer",
                     "StartingEcAts":0.00000000000000000000,
                     "Buffer":0.00000000000000000000,
                     "EC_ATS":0.00000000000000000000,
                     "EcBackorder":0.00000000000000000000,
                     "EcNextDateAvailable":"1900-01-01T00:00:00",
                     "EcPreorder":0.00000000000000000000
                  },
                  {
                     "RecCreated":"2021-01-25T12:56:26.140",
                     "RecModified":"2021-01-25T12:56:26.140",
                     "EcAtsCOItemId":"0550C82C-EDE6-4AEC-817E-E9D0FFD4899D",
                     "ItemIdentifier":"10540",
                     "ECStatus":"EcOffer",
                     "StartingEcAts":0.00000000000000000000,
                     "Buffer":0.00000000000000000000,
                     "EC_ATS":0.00000000000000000000,
                     "EcBackorder":0.00000000000000000000,
                     "EcNextDateAvailable":"1900-01-01T00:00:00",
                     "EcPreorder":0.00000000000000000000
                  },
                  {
                     "RecCreated":"2021-01-25T12:56:26.140",
                     "RecModified":"2021-01-25T12:56:26.140",
                     "EcAtsCOItemId":"7A1C282E-8A7D-4B01-8909-F9D7B5B2D66C",
                     "ItemIdentifier":"10543",
                     "ECStatus":"EcOffer",
                     "StartingEcAts":0.00000000000000000000,
                     "Buffer":0.00000000000000000000,
                     "EC_ATS":0.00000000000000000000,
                     "EcBackorder":0.00000000000000000000,
                     "EcNextDateAvailable":"1900-01-01T00:00:00",
                     "EcPreorder":0.00000000000000000000
                  },
                  {
                     "RecCreated":"2021-01-25T12:56:26.140",
                     "RecModified":"2021-01-25T12:56:26.140",
                     "EcAtsCOItemId":"30878EA4-B3BE-42A5-AA17-FA8D0A84216F",
                     "ItemIdentifier":"10544",
                     "ECStatus":"EcOffer",
                     "StartingEcAts":0.00000000000000000000,
                     "Buffer":0.00000000000000000000,
                     "EC_ATS":0.00000000000000000000,
                     "EcBackorder":0.00000000000000000000,
                     "EcNextDateAvailable":"1900-01-01T00:00:00",
                     "EcPreorder":0.00000000000000000000
                  },
                  {
                     "RecCreated":"2021-01-25T12:56:26.140",
                     "RecModified":"2021-01-25T12:56:26.140",
                     "EcAtsCOItemId":"26D02F9B-9E69-416D-A5F6-FB88E82A9515",
                     "ItemIdentifier":"10545",
                     "ECStatus":"EcOffer",
                     "StartingEcAts":0.00000000000000000000,
                     "Buffer":0.00000000000000000000,
                     "EC_ATS":0.00000000000000000000,
                     "EcBackorder":0.00000000000000000000,
                     "EcNextDateAvailable":"1900-01-01T00:00:00",
                     "EcPreorder":0.00000000000000000000
                  }
               ]
            },
            {
               "RecCreated":"2021-01-25T12:57:06.780",
               "RecModified":"2021-01-25T12:57:06.780",
               "EcAtsControlOrderId":"FD5C1567-4A46-4E74-9B34-55BB53931422",
               "OrderNo":4,
               "StartDateTime":"2021-01-25T12:57:06.780",
               "CreatedByEmployeeIdentifier":"AUTOMAT",
               "SellLocations":[
                  {
                     "RecCreated":"2021-01-25T12:57:06.780",
                     "RecModified":"2021-01-25T12:57:06.780",
                     "SellLocationIdentifier":"HQ"
                  }
               ],
               "FillLocations":[
                  {
                     "RecCreated":"2021-01-25T12:57:06.780",
                     "RecModified":"2021-01-25T12:57:06.780",
                     "FillLocationIdentifier":"TEST"
                  }
               ],
               "IsProtected":false,
               "EcAtsControl":[
                  {
                     "RecCreated":"2021-01-25T12:16:09.743",
                     "RecModified":"2021-01-25T12:16:09.743",
                     "EcAtsControlId":"C6639AD5-5F70-44FA-A742-FED90440BC71",
                     "Name":"Control_1",
                     "ECChannelIdentifier":"Channel1",
                     "AllowManualChanges":true,
                     "Inactive":false,
                     "TaskId":"D983266A-9F32-4807-8084-1FCFF01B4CFB",
                     "IsProtected":false,
                     "UseEcAtsBufferFromItem":true
                  }
               ],
               "EcAtsCOItems":[
                  {
                     "RecCreated":"2021-01-25T12:57:06.780",
                     "RecModified":"2021-01-25T12:57:36.167",
                     "EcAtsCOItemId":"81710780-2198-4341-9CF4-06C715437CFD",
                     "ItemIdentifier":"10422",
                     "ECStatus":"EcOffer",
                     "StartingEcAts":0.00000000000000000000,
                     "Buffer":0.00000000000000000000,
                     "EC_ATS":0.00000000000000000000,
                     "ChangeEcAts":10.00000000000000000000,
                     "EcBackorder":0.00000000000000000000,
                     "EcNextDateAvailable":"1900-01-01T00:00:00",
                     "EcPreorder":0.00000000000000000000,
                     "LastModifiedDate":"2021-01-25T12:57:36.130",
                     "LastModifiedByEmployeeIdentifier":"ROOT"
                  },
                  {
                     "RecCreated":"2021-01-25T12:57:06.780",
                     "RecModified":"2021-01-25T12:58:00.400",
                     "EcAtsCOItemId":"F59AB1EF-190A-4A0A-A66B-5256DAD15E79",
                     "ItemIdentifier":"10542",
                     "ECStatus":"EcOffer",
                     "StartingEcAts":0.00000000000000000000,
                     "Buffer":0.00000000000000000000,
                     "EC_ATS":0.00000000000000000000,
                     "ChangeEcAts":4.00000000000000000000,
                     "EcBackorder":0.00000000000000000000,
                     "EcNextDateAvailable":"1900-01-01T00:00:00",
                     "EcPreorder":0.00000000000000000000,
                     "LastModifiedDate":"2021-01-25T12:58:00.400",
                     "LastModifiedByEmployeeIdentifier":"ROOT"
                  },
                  {
                     "RecCreated":"2021-01-25T12:57:06.780",
                     "RecModified":"2021-01-25T12:57:53.620",
                     "EcAtsCOItemId":"E086128E-7EF9-4FB0-8111-816C9C4ECE2E",
                     "ItemIdentifier":"10541",
                     "ECStatus":"EcOffer",
                     "StartingEcAts":0.00000000000000000000,
                     "Buffer":0.00000000000000000000,
                     "EC_ATS":0.00000000000000000000,
                     "ChangeEcAts":3.00000000000000000000,
                     "EcBackorder":0.00000000000000000000,
                     "EcNextDateAvailable":"1900-01-01T00:00:00",
                     "EcPreorder":0.00000000000000000000,
                     "LastModifiedDate":"2021-01-25T12:57:53.620",
                     "LastModifiedByEmployeeIdentifier":"ROOT"
                  },
                  {
                     "RecCreated":"2021-01-25T12:57:06.780",
                     "RecModified":"2021-01-25T12:58:09.643",
                     "EcAtsCOItemId":"D450E58C-9127-400D-8CF0-93F8E1388DCA",
                     "ItemIdentifier":"10543",
                     "ECStatus":"EcOffer",
                     "StartingEcAts":0.00000000000000000000,
                     "Buffer":0.00000000000000000000,
                     "EC_ATS":0.00000000000000000000,
                     "ChangeEcAts":2.00000000000000000000,
                     "EcBackorder":0.00000000000000000000,
                     "EcNextDateAvailable":"1900-01-01T00:00:00",
                     "EcPreorder":0.00000000000000000000,
                     "LastModifiedDate":"2021-01-25T12:58:09.643",
                     "LastModifiedByEmployeeIdentifier":"ROOT"
                  },
                  {
                     "RecCreated":"2021-01-25T12:57:06.780",
                     "RecModified":"2021-01-25T12:57:46.707",
                     "EcAtsCOItemId":"C228B084-5926-43CB-A9A1-96C227890ACA",
                     "ItemIdentifier":"10540",
                     "ECStatus":"EcOffer",
                     "StartingEcAts":0.00000000000000000000,
                     "Buffer":0.00000000000000000000,
                     "EC_ATS":0.00000000000000000000,
                     "ChangeEcAts":5.00000000000000000000,
                     "EcBackorder":0.00000000000000000000,
                     "EcNextDateAvailable":"1900-01-01T00:00:00",
                     "EcPreorder":0.00000000000000000000,
                     "LastModifiedDate":"2021-01-25T12:57:46.707",
                     "LastModifiedByEmployeeIdentifier":"ROOT"
                  },
                  {
                     "RecCreated":"2021-01-25T12:57:06.780",
                     "RecModified":"2021-01-25T12:58:25.053",
                     "EcAtsCOItemId":"E29B5998-CA5E-4074-B41C-A72D431E8602",
                     "ItemIdentifier":"10545",
                     "ECStatus":"EcOffer",
                     "StartingEcAts":0.00000000000000000000,
                     "Buffer":0.00000000000000000000,
                     "EC_ATS":0.00000000000000000000,
                     "ChangeEcAts":8.00000000000000000000,
                     "EcBackorder":0.00000000000000000000,
                     "EcNextDateAvailable":"1900-01-01T00:00:00",
                     "EcPreorder":0.00000000000000000000,
                     "LastModifiedDate":"2021-01-25T12:58:25.033",
                     "LastModifiedByEmployeeIdentifier":"ROOT"
                  },
                  {
                     "RecCreated":"2021-01-25T12:57:06.780",
                     "RecModified":"2021-01-25T12:58:15.413",
                     "EcAtsCOItemId":"57E4DCEC-43FA-487E-8FD0-F0ED961397D9",
                     "ItemIdentifier":"10544",
                     "ECStatus":"EcOffer",
                     "StartingEcAts":0.00000000000000000000,
                     "Buffer":0.00000000000000000000,
                     "EC_ATS":0.00000000000000000000,
                     "ChangeEcAts":1.00000000000000000000,
                     "EcBackorder":0.00000000000000000000,
                     "EcNextDateAvailable":"1900-01-01T00:00:00",
                     "EcPreorder":0.00000000000000000000,
                     "LastModifiedDate":"2021-01-25T12:58:15.413",
                     "LastModifiedByEmployeeIdentifier":"ROOT"
                  }
               ]
            }
         ]
      }
   }
}
~~~
