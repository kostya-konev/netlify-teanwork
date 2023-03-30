---
title: "API Document Export [6.41]"
date: 2022-09-13T06:24:00-05:00
draft: false
weight: 1609
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

This topic describes the **API Document Export** API which is used to export a copy of a previously transmitted API document.<span class="ir">??????????</span>

See [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for a description on how export requests are made and on the standard request and response formats used. The API-Specific successful response format for this API will be described below.

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/apidocument**  
Asynchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/apidocument/async**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

In the Swagger UI the **/chqapi/export/apidocument** endpoint is a member of the **Common** endpoint group.

## Request settings {#RequestSettings}

There are no settings supported by this API.

## Request filters {#RequestFilters}

Below are the filters which can be defined in the **Filters** group of the export request (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Field** column lists the names of the fields on which filtering can be done. The **Operators** column lists the filter operator values which are valid for the field. The **Value** column describes the value expected for the field.

**Field** | **Operators** | **Value** |
---- | ---- | ---- |
Status | "Equal", "Contains" | Any valid long integer value representing a status for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |
Source | "Equal", "Contains" | Any valid long integer value representing a source for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |
ApiType | "Equal", "Contains" | Any valid long integer value representing an API type for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |

## Request sorts {#RequestSorts}

Below are the fields for which sorting can be requested in the **SortDescriptions** group of the export request (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info). All of these fields can be sorted either *ascending* or *descending*.

- RecModified

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
"ApiDocumentExportToJson_get.ApiDocumentType": {
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
          "$ref": "#/definitions/ApiDocumentExportToJson_get.ResponseType"
        }
      }
    },
    "ApiDocumentExportToJson_get.ResponseType": {
      "type": "object",
      "properties": {
        "ApiDocuments": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/ApiDocumentExportToJson_get.ApiDocumentsType"
          }
        }
      }
    },
    "ApiDocumentExportToJson_get.ApiDocumentsType": {
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
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "APIDocumentId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "APIType": {
          "type": "string"
        },
        "Area": {
          "format": "int32",
          "type": "integer"
        },
        "Source": {
          "type": "string"
        },
        "Receiver": {
          "type": "string"
        },
        "Progress": {
          "format": "double",
          "type": "number"
        },
        "TotalRecords": {
          "format": "int32",
          "type": "integer"
        },
        "AcceptedRecords": {
          "format": "int32",
          "type": "integer"
        },
        "ElapsedTime": {
          "format": "date-time",
          "type": "string"
        },
        "IsSynchronously": {
          "type": "boolean"
        },
        "Status": {
          "format": "int32",
          "type": "integer"
        },
        "ParentAPIDocumentId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "UseApiVersion": {
          "format": "int32",
          "type": "integer"
        },
        "ApiDocumentLines": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/ApiDocumentExportToJson_get.ApiDocumentLinesType"
          }
        }
      }
    },
    "ApiDocumentExportToJson_get.ApiDocumentLinesType": {
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
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "APIDocumentLineId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "EntityNo": {
          "type": "string"
        },
        "EntityId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        }
      }
    }
~~~

---

## Request Example(s) {#RequestExamples}

**Request Example #1: ApiType = 'location-export'**

~~~
{
   "Source":"Integrator",
   "Data":{
      "ApiDocumentId":"B39E44EE-FFB2-45AF-87C1-5DC9CEE77FE0",
      "Request":{      
         "Filters":[
            {
               "Field":"ApiType",
               "Operator":"Equal",
               "Value":"location-export"
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

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'apidocument-export' rather than 'apidocument'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

~~~
{  "Id": "17eced18-4835-49d1-a85f-8a2ec179b0a9",  "Status": "InProcess",  "ApiType": "apidocument-export",  "Source": "string"}
~~~

**Response Example #2: Error**

~~~
{
   "Message":"The request is invalid.",
   "ModelState":{
      "apiRequest.Data.Request.SortDescriptions[0].Direction":[
         "Error converting value \"dess\" to type 'Teamwork.AdminServer.Api.Services.Controller.SortDescriptionDirectionType'. Path 'Data.Request.SortDescriptions[0].Direction', line 1, position 340."
      ]
   }
}
~~~

**Response Example #3: Success when requesting Status = '3'**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'apidocument-export' rather than 'apidocument'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"65D0B751-B0E5-48D7-A7BA-DF8151BBB804",
      "Status":"Successful",
      "ApiRequestType":"apidocument-export",
      "TotalRecords":3,
      "RecordsCount":3,
      "ElapsedTime":"00:00:00.0033333",
      "StartDateTime":"2021-02-12T14:04:40.730",
      "EndDateTime":"2021-02-12T14:04:40.733",
      "Response":{
         "ApiDocuments":[
            {
               "RecCreated":"2021-02-12T13:55:44.890",
               "RecModified":"2021-02-12T13:55:44.890",
               "StreamingDate":"2021-02-12T13:55:44.890",
               "APIDocumentId":"436E8327-3B8A-4764-93FD-1038635EA5DE",
               "APIType":"apidocument-export",
               "Area":0,
               "Source":"string",
               "Receiver":"ChqApiController",
               "IsSynchronously":true,
               "Status":3,
               "UseApiVersion":1
            },
            {
               "RecCreated":"2021-02-12T14:00:29.757",
               "RecModified":"2021-02-12T14:00:29.757",
               "StreamingDate":"2021-02-12T14:00:29.757",
               "APIDocumentId":"BB661B4D-AFE7-4E07-BD0B-70C65BACB193",
               "APIType":"location-export",
               "Area":0,
               "Source":"string",
               "Receiver":"ChqApiController",
               "TotalRecords":3,
               "IsSynchronously":true,
               "Status":3,
               "UseApiVersion":1
            },
            {
               "RecCreated":"2021-02-12T14:04:40.713",
               "RecModified":"2021-02-12T14:04:40.713",
               "StreamingDate":"2021-02-12T14:04:40.713",
               "APIDocumentId":"65D0B751-B0E5-48D7-A7BA-DF8151BBB804",
               "APIType":"apidocument-export",
               "Area":0,
               "Source":"string",
               "Receiver":"ChqApiController",
               "TotalRecords":3,
               "IsSynchronously":true,
               "Status":3,
               "UseApiVersion":1
            }
         ]
      }
   }
}
~~~

**Response Example #4: Success when requesting ApiType = 'simplified-location-import'**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'apidocument-export' rather than 'apidocument'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"843921F6-025E-4D7F-8109-1C12B9A37FB4",
      "Status":"Successful",
      "ApiRequestType":"apidocument-export",
      "TotalRecords":1,
      "RecordsCount":1,
      "ElapsedTime":"00:00:00.0100000",
      "StartDateTime":"2021-02-12T14:19:14.373",
      "EndDateTime":"2021-02-12T14:19:14.383",
      "Response":{
         "ApiDocuments":[
            {
               "RecCreated":"2021-02-12T14:16:00.450",
               "RecModified":"2021-02-12T14:16:00.450",
               "StreamingDate":"2021-02-12T14:16:00.450",
               "APIDocumentId":"032AC2CE-B0B5-499D-9EF8-30707BB80639",
               "APIType":"simplified-location-import",
               "Area":0,
               "Source":"string",
               "Receiver":"ChqApiController",
               "IsSynchronously":false,
               "Status":2,
               "UseApiVersion":1,
               "ApiDocumentLines":[
                  {
                     "RecCreated":"2021-02-12T14:16:00.867",
                     "RecModified":"2021-02-12T14:16:00.867",
                     "StreamingDate":"2021-02-12T14:16:00.867",
                     "APIDocumentLineId":"F8046FAF-EFE3-4F93-A893-2785E4FF906E",
                     "EntityNo":"0",
                     "EntityId":"C5F703C8-F663-4A67-BDA8-E527EC25B3BB"
                  }
               ]
            }
         ]
      }
   }
}
~~~
