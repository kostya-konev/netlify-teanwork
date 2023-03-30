---
title: "EC ATS Delta Export [6.41]"
date: 2022-10-03T11:51:00-05:00
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

This topic describes the **EC ATS Export** API which is used to export ecommerce available to sell delta information from CHQ.

See [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for a description on how export requests are made and on the standard request and response formats used. The API-Specific sucessful response format for this API will be described below.

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/EcAtsDelta**  
Asynchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/EcAtsDelta/async**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

In the Swagger UI the **/chqapi/export/EcAtsDelta** endpoint is a member of the **ECommerce** endpoint group.

## Request settings {#RequestSettings}

Below are the settings which can be supplied in the **Settings** group of the export request to define which value (field) is to be used for a particular value class (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Key** column lists the names of the available settings. The **Supported Values** column lists the valid values which can be supplied for the setting. The **Default** column lists the default value for each setting if that setting is not supplied.

**Key** | **Supported Values** | **Default** | **Description** |
---- | ---- | ---- | ---- |
LocationIdentifierSetting | ExternalIdCode, Code, ExternalId, No, TeamworkId | ExternalIdCode | An indicator of which value is to be used to identify locations. |
ItemIdentifierSetting | PLU, ExternalId, CLU, UPC, TeamworkId | PLU | An indicator of which value is to be used to identify items. |
ECommerceChannelIdentifierSetting | Name, Description, TeamworkId | Name | An indicator of which value is to be used to identify ecommerce channels. |
EmployeeIdentifierSetting | LoginName, FullName, TeamworkId | LoginName | An indicator of which value is to be used to identify employees. |

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
<span class="api-gn">Response: EcAtsDeltaOrders</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
EcAtsHistoryId | string, guid | A unique identifier of <span class="ir">?????????</span> |
<span class="api-gn">Response: EcAtsDeltaOrders: Item</span> | | <span class="api-gd">A group containing the following fields and groups.</span> |
RecModified | string, datetime | A timestamp of when the record was last modified. |
ItemIdentifier | string | An identifier of the item. |
LastModifiedDate | string, datetime | A timestamp of when the item was last modified. | 
LastModifiedByEmployeeIdentifier | string | An identifier of the employee who kast modified the item. |
ECStatus | string, enum | An indicator of the item’s ecommerce status. Its value must be one of the following: "NonEc", "EcOffer", "EcSuspended", "EcDiscontinued". |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: EcAtsDeltaOrders: Item</span> |
<span class="api-gn">Response: EcAtsDeltaOrders: EcAtsControl</span> | | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
Name | string | <span class="ir">?????????</span> |
ECChannelIdentifier | string | An identifier of the ecommerce channel where the item was purchased. <span class="ir">?????????</span> |
AllowManualChanges | boolean | An indicator as to whether or not manual changes be made to the item. <span class="ir">?????????</span> |
Inactive | boolean | An indicator as to whether or not the item is inactive. <span class="ir">????????? what does 'inactive' mean in this context? ??????????</span> |
IsProtected | boolean | An indicator as to whether or not the item is protected. <span class="ir">????????? what does 'protected' mean in this context? ??????????</span> |
UseEcAtsBufferFromItem | boolean | An indicator as to whether or not <span class="ir">?????????</span> |
BufferQty | double | The item's quantity in the buffer. <span class="ir">????????? what is the 'buffer'? ??????????</span> |
BufferPercent | double | The item's quantity in the buffer. <span class="ir">????????? what is the 'buffer'? ??????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: EcAtsDeltaOrders: EcAtsControl</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: EcAtsDeltaOrders</span> |
Action | string, enum | An indicator of the action taken. Its value must be one of the following: "CreateEcAts", "ChangeEcAts". |
ActionDate | string, datetime | A timestamp of when the action was taken. |
PerformedByEmployeeIdentifier | string | An identifier of the employee who performed the action. |
EcAtsDelta | double | <span class="ir">?????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: EcAtsDeltaOrders</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response</span> |

### Schema {#SuccessfulResponseSchema}
 
Below is the JSON source for the schema of a successful response to the export request as described above.

~~~
{
    "EcAtsDeltaExportToJson_get.ApiDocumentType":{
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
          "$ref":"#/definitions/EcAtsDeltaExportToJson_get.ResponseType"
        }
      }
    },
    "EcAtsDeltaExportToJson_get.ResponseType":{
      "type":"object",
      "properties":{
        "EcAtsDeltaOrders":{
          "type":"array",
          "items":{
            "$ref":"#/definitions/EcAtsDeltaExportToJson_get.EcAtsDeltaOrdersType"
          }
        }
      }
    },
    "EcAtsDeltaExportToJson_get.EcAtsDeltaOrdersType":{
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
        "EcAtsHistoryId":{
          "format":"uuid",
          "type":"string",
          "example":"00000000-0000-0000-0000-000000000000"
        },
        "Item":{
          "$ref":"#/definitions/EcAtsDeltaExportToJson_get.ItemType"
        },
        "EcAtsControl":{
          "$ref":"#/definitions/EcAtsDeltaExportToJson_get.EcAtsControlType"
        },
        "Action":{
          "enum":[
            "CreateEcAts",
            "ChangeEcAts"
          ],
          "type":"string"
        },
        "ActionDate":{
          "format":"date-time",
          "type":"string"
        },
        "PerformedByEmployeeIdentifier":{
          "type":"string"
        },
        "EcAtsDelta":{
          "format":"double",
          "type":"number"
        }
      }
    },
    "EcAtsDeltaExportToJson_get.ItemType":{
      "type":"object",
      "properties":{
        "RecModified":{
          "format":"date-time",
          "type":"string"
        },
        "ItemIdentifier":{
          "type":"string"
        },
        "LastModifiedDate":{
          "format":"date-time",
          "type":"string"
        },
        "LastModifiedByEmployeeIdentifier":{
          "type":"string"
        },
        "ECStatus":{
          "enum":[
            "NonEc",
            "EcOffer",
            "EcSuspended",
            "EcDiscontinued"
          ],
          "type":"string"
        }
      }
    },
    "EcAtsDeltaExportToJson_get.EcAtsControlType":{
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
        "Name":{
          "type":"string"
        },
        "ECChannelIdentifier":{
          "type":"string"
        },
        "AllowManualChanges":{
          "type":"boolean"
        },
        "Inactive":{
          "type":"boolean"
        },
        "IsProtected":{
          "type":"boolean"
        },
        "UseEcAtsBufferFromItem":{
          "type":"boolean"
        },
        "BufferQty":{
          "format":"double",
          "type":"number"
        },
        "BufferPercent":{
          "format":"double",
          "type":"number"
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

**Response Example #3: Success when requesting EcAtsControlName = 'Ch 2'**

~~~
{
  "ApiDocument":{
    "ApiDocumentId":"4CF34CCB-AFBC-4844-A2A6-1329745C594C",
    "Status":"Successful",
    "ApiRequestType":"EcAtsDelta-export",
    "TotalRecords":4,
    "RecordsCount":4,
    "ElapsedTime":"00:00:00.0833333",
    "StartDateTime":"2020-04-08T13:38:09.790",
    "EndDateTime":"2020-04-08T13:38:09.873",
    "Response":{
      "EcAtsDeltaOrders":[
        {
          "RecCreated":"2020-04-08T05:55:00.997",
          "RecModified":"2020-04-08T05:55:00.997",
          "EcAtsHistoryId":"61B08FD1-24F7-4630-B60D-0796F244BAA2",
          "Item":{
            "RecModified":"2020-04-08T06:12:07.827",
            "ItemIdentifier":"11776",
            "LastModifiedDate":"2020-04-08T06:12:07.827",
            "LastModifiedByEmployeeIdentifier":"ROOT",
            "ECStatus":"EcOffer"
         },
          "EcAtsControl":{
            "RecCreated":"2020-04-08T05:49:35.100",
            "RecModified":"2020-04-08T05:49:35.100",
            "Name":"ES 2",
            "ECChannelIdentifier":"Ch 2",
            "AllowManualChanges":true,
            "Inactive":false,
            "SellLocationIdentifier":"HQ",
            "IsProtected":true,
            "FillLocations":[
              {
                "SellLocationIdentifier":"TEST"
              }
            ],
            "UseEcAtsBufferFromItem":true
          },
          "Action":1,
          "ActionDescription":"change EC ATS",
          "ActionDate":"2020-04-08T05:55:00.993",
          "PerformedByEmployeeIdentifier":"ROOT",
          "EcAtsDelta":3.00000000000000000000
        },
        {
          "RecCreated":"2020-04-08T05:55:12.620",
          "RecModified":"2020-04-08T05:55:12.620",
          "EcAtsHistoryId":"2BFD02F2-EE20-4893-B959-B2CC594A5E12",
          "Item":{
            "RecModified":"2020-04-08T06:12:07.827",
            "ItemIdentifier":"11776",
            "LastModifiedDate":"2020-04-08T06:12:07.827",
            "LastModifiedByEmployeeIdentifier":"ROOT",
             "ECStatus":"EcOffer"
          },
          "EcAtsControl":{
            "RecCreated":"2020-04-08T05:49:35.100",
            "RecModified":"2020-04-08T05:49:35.100",
            "Name":"ES 2",
            "ECChannelIdentifier":"Ch 2",
            "AllowManualChanges":true,
            "Inactive":false,
            "SellLocationIdentifier":"HQ",
            "IsProtected":true,
            "FillLocations":[
              {
                "SellLocationIdentifier":"TEST"
              }
            ],
            "UseEcAtsBufferFromItem":true
          },
          "Action":1,
          "ActionDescription":"change EC ATS",
          "ActionDate":"2020-04-08T05:55:12.620",
          "PerformedByEmployeeIdentifier":"ROOT",
          "EcAtsDelta":4.00000000000000000000
        },
        {
          "RecCreated":"2020-04-08T05:55:20.407",
          "RecModified":"2020-04-08T05:55:20.407",
          "EcAtsHistoryId":"6E942FF0-C413-4705-9699-15271927E833",
          "Item":{
            "RecModified":"2020-04-08T06:12:07.827",
            "ItemIdentifier":"11776",
            "LastModifiedDate":"2020-04-08T06:12:07.827",
            "LastModifiedByEmployeeIdentifier":"ROOT",
            "ECStatus":"EcOffer"
          },
          "EcAtsControl":{
            "RecCreated":"2020-04-08T05:49:35.100",
            "RecModified":"2020-04-08T05:49:35.100",
            "Name":"ES 2",
            "ECChannelIdentifier":"Ch 2",
            "AllowManualChanges":true,
            "Inactive":false,
            "SellLocationIdentifier":"HQ",
            "IsProtected":true,
            "FillLocations":[
              {
                "SellLocationIdentifier":"TEST"
              }
            ],
            "UseEcAtsBufferFromItem":true
          },
          "Action":1,
          "ActionDescription":"change EC ATS",
          "ActionDate":"2020-04-08T05:55:20.407",
          "PerformedByEmployeeIdentifier":"ROOT",
          "EcAtsDelta":5.00000000000000000000
        },
        {
          "RecCreated":"2020-04-08T05:55:28.177",
          "RecModified":"2020-04-08T05:55:28.177",
          "EcAtsHistoryId":"E53751B3-C5F6-4D3D-9902-4181327A736D",
          "Item":{
            "RecModified":"2020-04-08T06:12:07.827",
            "ItemIdentifier":"11776",
            "LastModifiedDate":"2020-04-08T06:12:07.827",
            "LastModifiedByEmployeeIdentifier":"ROOT",
            "ECStatus":"EcOffer"
          },
          "EcAtsControl":{
            "RecCreated":"2020-04-08T05:49:35.100",
            "RecModified":"2020-04-08T05:49:35.100",
            "Name":"ES 2",
            "ECChannelIdentifier":"Ch 2",
            "AllowManualChanges":true,
            "Inactive":false,
            "SellLocationIdentifier":"HQ",
            "IsProtected":true,
            "FillLocations":[
              {
                "SellLocationIdentifier":"TEST"
              }
            ],
            "UseEcAtsBufferFromItem":true
          },
          "Action":1,
          "ActionDescription":"change EC ATS",
          "ActionDate":"2020-04-08T05:55:28.180",
          "PerformedByEmployeeIdentifier":"ROOT",
          "EcAtsDelta":6.00000000000000000000
        }
      ]
    }
  }
}
~~~
