---
title: "EC ATS Item Export [6.41]"
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

This topic describes the **EC ATS Item Export** API which is used to export ecommerce available to sell item information from CHQ.

See [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for a description on how export requests are made and on the standard request and response formats used. The API-Specific sucessful response format for this API will be described below.

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/ec-ats-item**  
Asynchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/ec-ats-item/async**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

In the Swagger UI the **/chqapi/export/ec-ats-item** endpoint is a member of the **ECommerce** endpoint group.

## Request settings {#RequestSettings}

Below are the settings which can be supplied in the **Settings** group of the export request to define which value (field) is to be used for a particular value class (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Key** column lists the names of the available settings. The **Supported Values** column lists the valid values which can be supplied for the setting. The **Default** column lists the default value for each setting if that setting is not supplied.

**Key** | **Supported Values** | **Default** | **Description** |
---- | ---- | ---- | ---- |
ItemIdentifierSetting | PLU, ExternalId, CLU, UPC, TeamworkId | PLU | An indicator of which value is to be used to identify items. |
EmployeeIdentifierSetting | LoginName, FullName, TeamworkId | LoginName | An indicator of which value is to be used to identify employees. |

## Request filters {#RequestFilters}

Below are the filters which can be defined in the **Filters** group of the export request (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Field** column lists the names of the fields on which filtering can be done. The **Operators** column lists the filter operator values which are valid for the field. The **Value** column describes the value expected for the field.

**Field** | **Operators** | **Value** |
---- | ---- | ---- |
RecModified | "Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. |
ItemSearch | "Equal" | Any valid string value representing an item. |
EcAtsControlName | "Equal" | Any valid string value representing an ecommerce available to sell control name. |
ECommerceChannelName | "Equal" | Any valid string value representing an ecommerce channel name. |

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
<span class="ir">?????????</span> | | <span class="ir">The schema source code is invalid. There are references to group types which don't exist. A correct schema needs to be provided by the developers.</span>
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: EcAtsControlOrders</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response</span> |

### Schema {#SuccessfulResponseSchema}
 
Below is the JSON source for the schema of a successful response to the export request as described above.

~~~
{
    "EcAtsItemsExportToJson_get.ApiDocumentType": {
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
          "$ref": "#/definitions/EcAtsItemsExportToJson_get.ResponseType"
        }
      }
    },
    "EcAtsItemsExportToJson_get.ResponseType": {
      "type": "object",
      "properties": {
        "EcAtsControlOrders": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/EcAtsExportToJson_get.EcAtsControlOrdersType"
          }
        }
    },
  "EcAtsExportToJson_get.EcAtsItemsType": {
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
        "EcAtsControlName": {
          "type": "string"
        },
        "ECChannelName": {
          "type": "string"
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
    }
    
  }
~~~

---

## Request Example(s) {#RequestExamples}

**Request Example #1: RecModified >= '2019-07-15T15:44:42.570'**

~~~
{
  "Source":"Source",
  "Data":{
    "Request":{
      "Settings":[
        {
          "Key":"ItemIdentifierSetting",
          "Value":"PLU"
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

**Response Example #3: Success when requesting EcAtsControlName = 'YuliiControl' and Top = '10'**

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"B2C072C1-CAC5-4910-97FB-4820AF1D2373",
      "Status":"Successful",
      "ApiRequestType":"ec-ats-item-export",
      "TotalRecords":15,
      "RecordsCount":10,
      "ElapsedTime":"00:00:00.0633333",
      "StartDateTime":"2021-02-04T16:17:05.440",
      "EndDateTime":"2021-02-04T16:17:05.503",
      "Response":{
         "EcAtsItems":[
            {
               "RecCreated":"2021-02-04T16:10:26.747",
               "RecModified":"2021-02-04T16:10:26.747",
               "EcAtsCOItemId":"340428A9-BE09-4B6F-B537-DCA33B871C80",
               "EcAtsControlName":"YuliiControl",
               "ECChannelName":"YuliiaChannel",
               "ItemIdentifier":"209664",
               "ECStatus":"EcOffer",
               "StartingEcAts":0.00000000000000000000,
               "Buffer":0.00000000000000000000,
               "EC_ATS":0.00000000000000000000,
               "EcBackorder":0.00000000000000000000,
               "EcPreorder":0.00000000000000000000
            },
            {
               "RecCreated":"2021-02-04T16:10:26.747",
               "RecModified":"2021-02-04T16:10:26.747",
               "EcAtsCOItemId":"4403A5BD-9B38-4FC6-84CD-B809DB8B04D8",
               "EcAtsControlName":"YuliiControl",
               "ECChannelName":"YuliiaChannel",
               "ItemIdentifier":"209658",
               "ECStatus":"EcOffer",
               "StartingEcAts":0.00000000000000000000,
               "Buffer":0.00000000000000000000,
               "EC_ATS":0.00000000000000000000,
               "EcBackorder":0.00000000000000000000,
               "EcPreorder":0.00000000000000000000
            },
            {
               "RecCreated":"2021-02-04T16:10:26.747",
               "RecModified":"2021-02-04T16:10:26.747",
               "EcAtsCOItemId":"3936E1F3-1148-486F-80E6-B35BE5900794",
               "EcAtsControlName":"YuliiControl",
               "ECChannelName":"YuliiaChannel",
               "ItemIdentifier":"209665",
               "ECStatus":"EcOffer",
               "StartingEcAts":0.00000000000000000000,
               "Buffer":0.00000000000000000000,
               "EC_ATS":0.00000000000000000000,
               "EcBackorder":0.00000000000000000000,
               "EcPreorder":0.00000000000000000000
            },
            {
               "RecCreated":"2021-02-04T16:10:26.747",
               "RecModified":"2021-02-04T16:10:26.747",
               "EcAtsCOItemId":"2E85619F-8371-4A4C-89B5-963323D09E91",
               "EcAtsControlName":"YuliiControl",
               "ECChannelName":"YuliiaChannel",
               "ItemIdentifier":"209638",
               "ECStatus":"EcOffer",
               "StartingEcAts":0.00000000000000000000,
               "Buffer":0.00000000000000000000,
               "EC_ATS":0.00000000000000000000,
               "EcBackorder":0.00000000000000000000,
               "EcPreorder":0.00000000000000000000
            },
            {
               "RecCreated":"2021-02-04T16:10:26.747",
               "RecModified":"2021-02-04T16:10:26.747",
               "EcAtsCOItemId":"23028816-993E-42E8-962F-753FA8E197EF",
               "EcAtsControlName":"YuliiControl",
               "ECChannelName":"YuliiaChannel",
               "ItemIdentifier":"209642",
               "ECStatus":"EcOffer",
               "StartingEcAts":0.00000000000000000000,
               "Buffer":0.00000000000000000000,
               "EC_ATS":0.00000000000000000000,
               "EcBackorder":0.00000000000000000000,
               "EcPreorder":0.00000000000000000000
            },
            {
               "RecCreated":"2021-02-04T16:10:26.747",
               "RecModified":"2021-02-04T16:10:26.747",
               "EcAtsCOItemId":"72400F7F-3CA3-40FD-8F9C-575B6AB65A6C",
               "EcAtsControlName":"YuliiControl",
               "ECChannelName":"YuliiaChannel",
               "ItemIdentifier":"209662",
               "ECStatus":"EcOffer",
               "StartingEcAts":0.00000000000000000000,
               "Buffer":0.00000000000000000000,
               "EC_ATS":0.00000000000000000000,
               "EcBackorder":0.00000000000000000000,
               "EcPreorder":0.00000000000000000000
            },
            {
               "RecCreated":"2021-02-04T16:10:26.747",
               "RecModified":"2021-02-04T16:10:26.747",
               "EcAtsCOItemId":"2504316E-3157-465F-88DB-51C459FD0E30",
               "EcAtsControlName":"YuliiControl",
               "ECChannelName":"YuliiaChannel",
               "ItemIdentifier":"427",
               "ECStatus":"EcOffer",
               "StartingEcAts":0.00000000000000000000,
               "Buffer":0.00000000000000000000,
               "EC_ATS":0.00000000000000000000,
               "EcBackorder":0.00000000000000000000,
               "EcPreorder":0.00000000000000000000
            },
            {
               "RecCreated":"2021-02-04T16:10:26.747",
               "RecModified":"2021-02-04T16:10:26.747",
               "EcAtsCOItemId":"A1123B0F-6530-488C-87AA-4E5FBDAEF792",
               "EcAtsControlName":"YuliiControl",
               "ECChannelName":"YuliiaChannel",
               "ItemIdentifier":"209660",
               "ECStatus":"EcOffer",
               "StartingEcAts":0.00000000000000000000,
               "Buffer":0.00000000000000000000,
               "EC_ATS":0.00000000000000000000,
               "EcBackorder":0.00000000000000000000,
               "EcPreorder":0.00000000000000000000
            },
            {
               "RecCreated":"2021-02-04T16:10:26.747",
               "RecModified":"2021-02-04T16:10:26.747",
               "EcAtsCOItemId":"FCB046C3-2170-422F-96AC-41C96E053770",
               "EcAtsControlName":"YuliiControl",
               "ECChannelName":"YuliiaChannel",
               "ItemIdentifier":"209661",
               "ECStatus":"EcOffer",
               "StartingEcAts":0.00000000000000000000,
               "Buffer":0.00000000000000000000,
               "EC_ATS":0.00000000000000000000,
               "EcBackorder":0.00000000000000000000,
               "EcPreorder":0.00000000000000000000
            },
            {
               "RecCreated":"2021-02-04T16:10:26.747",
               "RecModified":"2021-02-04T16:10:26.747",
               "EcAtsCOItemId":"AFF505DE-8F7B-4A5E-BBB5-276D13A80E74",
               "EcAtsControlName":"YuliiControl",
               "ECChannelName":"YuliiaChannel",
               "ItemIdentifier":"209657",
               "ECStatus":"EcOffer",
               "StartingEcAts":0.00000000000000000000,
               "Buffer":0.00000000000000000000,
               "EC_ATS":0.00000000000000000000,
               "EcBackorder":0.00000000000000000000,
               "EcPreorder":0.00000000000000000000
            }
         ]
      }
   }
}
~~~
