---
title: "Inventory Season Export [6.41]"
date: 2022-08-26T08:57:00-05:00
draft: false
weight: 1422
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

This topic describes the **Inventory Season Export** API which is used to export season information from CHQ.

See [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for a description on how export requests are made and on the standard request and response formats used. The API-Specific successful response format for this API will be described below.

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/invenseason**  
Asynchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/invenseason/async**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

In the Swagger UI the **/chqapi/export/invenseason** endpoint is a member of the **Settings** endpoint group.

<span class="ir">?????????? The group indicated above is based on the info in the Confluence documentation. It should probably be 'Catalog' like the InventoryBrand, Inventory Class, etc. Inventory APIs. We need to confirm that it should be 'Catalog'. ??????????</span>

## Request settings {#RequestSettings}

There are no settings which apply to this API.

## Request filters {#RequestFilters}

Below are the filters which can be defined in the **Filters** group of the export request (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Field** column lists the names of the fields on which filtering can be done. The **Operators** column lists the filter operator values which are valid for the field. The **Value** column describes the value expected for the field.

**Field** | **Operators** | **Value** |
---- | ---- | ---- |
RecModified | "Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. |
InvenSeasonId | "Equal", "Contains" | Any valid GUID value representing a season for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |
InvenSeasonNo | "Equal", "Contains" | Any valid integer value representing a season for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |
InvenSeasonName | "Equal", "Contains" | Any valid value representing a season name for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |

## Request sorts {#RequestSorts}

The information returned is automatically sorted by the **RecModified** field *ascending*. No other sorts can be requested.

---

## Successful response {#SuccessfulResponse}

### Format {#SuccessfulResponseFormat}

Below is the format of the successful response to the export request. See [*JSON Data Types*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/JsonDataTypes_6.41/) for a description of the values which could appear in the **Data Type** column.

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
ApiDocumentId | string,guid | A unique identifier of the API document being used. |
Status | string,enum | The status of the response. The value will always be "Successful". |
ApiRequestType | string | <span class="ir">***????????***</span> |
TotalRecords | int32 | The total number of records processed. |
RecordsCount | int32 | The number of records exported. |
ElapsedTime | string,datetime | The time it took to execute the API. |
StartDateTime | string,datetime | A timestamp of when the API began executing. |
EndDateTime | string,datetime | A timestamp of when the API completed. |
<span class="api-gn">Response</span> | | <span class="api-gd">A group containing the following fields and groups.</span> |
<span class="api-gn">Response: InvenSeasons</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string,datetime | A timestamp of when the record was created. |
RecModified | string,datetime | A timestamp of when the record was last modified. |
InvenSeasonId | string,guid | A unique identifier of the season. |
No | int32 | A number identifying the season. |
Name | string | The name of the season. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: InvenSeasons</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response</span> |

### Schema {#SuccessfulResponseSchema}
 
Below is the JSON source for the schema of a successful response to the export request as described above.

~~~
{
   "InvenSeasonExportToJson_get.ApiDocumentType":{
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
            "$ref":"#/definitions/InvenSeasonExportToJson_get.ResponseType"
         }
      }
   },
   "InvenSeasonExportToJson_get.ResponseType":{
      "type":"object",
      "properties":{
         "InvenSeasons":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/InvenSeasonExportToJson_get.InvenSeasonsType"
            }
         }
      }
   },
   "InvenSeasonExportToJson_get.InvenSeasonsType":{
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
         "InvenSeasonId":{
            "format":"uuid",
            "type":"string",
            "example":"00000000-0000-0000-0000-000000000000"
         },
         "No":{
            "format":"int32",
            "type":"integer"
         },
         "Name":{
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
      "ApiDocumentId":"F69D9C98-936A-433B-B5F0-0852B91CB1BA",
      "Request":{      
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
         "Top":12,
         "Skip":0
      }
   }
}
~~~

---

## Response Example(s) {#ResponseExamples}

**Response Example #1: In Process**

~~~
{  "Id": "34faeb8c-6f3e-4440-b9ac-42ab73d0e1fc",  "Status": "InProcess",  "ApiType": "invenseason-export",  "Source": "string"}
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

**Response Example #3: Success when requesting RecModified = '2019-01-08 11:43:56.430**

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"084B677A-D80F-4FC0-8EEC-067B97070920",
      "Status":"Successful",
      "ApiRequestType":"invenseason-export",
      "TotalRecords":2,
      "RecordsCount":2,
      "ElapsedTime":"00:00:00.0100000",
      "StartDateTime":"2019-01-08T12:52:48.223",
      "EndDateTime":"2019-01-08T12:52:48.233",
      "Response":{
         "InvenSeasons":[
            {
               "RecCreated":"2019-01-08T11:43:56.430",
               "RecModified":"2019-01-08T11:43:56.430",
               "InvenSeasonId":"95E10520-0259-4053-81C1-1DB45F6E74BD",
               "No":3,
               "Name":"FALL 2012"
            },
            {
               "RecCreated":"2019-01-08T11:43:56.430",
               "RecModified":"2019-01-08T11:43:56.430",
               "InvenSeasonId":"C580A2CA-EDC1-45D8-B515-F8DF26AA20B9",
               "No":4,
               "Name":"HOLIDAY 2012"
            }
         ]
      }
   }
}
~~~

**Response Example #4: Success when requesting Name contains 'SUMMER 2012' or 'FALL 2012'**

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"791916E4-A01E-41BF-82B3-027D17A5D65A",
      "Status":"Successful",
      "ApiRequestType":"invenseason-export",
      "TotalRecords":2,
      "RecordsCount":2,
      "ElapsedTime":"00:00:00.0133333",
      "StartDateTime":"2019-01-08T12:58:55.210",
      "EndDateTime":"2019-01-08T12:58:55.223",
      "Response":{
         "InvenSeasons":[
            {
               "RecCreated":"2019-01-08T11:43:56.423",
               "RecModified":"2019-01-08T11:43:56.423",
               "InvenSeasonId":"A9ED3D80-A3D2-4478-85E8-1AAE14712B26",
               "No":2,
               "Name":"SUMMER 2012"
            },
            {
               "RecCreated":"2019-01-08T11:43:56.430",
               "RecModified":"2019-01-08T11:43:56.430",
               "InvenSeasonId":"95E10520-0259-4053-81C1-1DB45F6E74BD",
               "No":3,
               "Name":"FALL 2012"
            }
         ]
      }
   }
}
~~~
