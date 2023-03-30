---
title: "EC Field Export [6.41]"
date: 2022-10-07T10:12:09-05:00
draft: false
weight: 0306
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

This topic describes the **EC Field Export** API which is used to export ecommerce field information from CHQ.

See [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for a description on how export requests are made and on the standard request and response formats used. The API-Specific sucessful response format for this API will be described below.

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/ecommercefield**  
Asynchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/ecommercefield/async**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

In the Swagger UI the **/chqapi/export/ecommercefield** endpoint is a member of the **ECommerce** endpoint group.

## Request settings {#RequestSettings}

There are no settings supported by the API.

## Request filters {#RequestFilters}

Below are the filters which can be defined in the **Filters** group of the export request (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Field** column lists the names of the fields on which filtering can be done. The **Operators** column lists the filter operator values which are valid for the field. The **Value** column describes the value expected for the field.

**Field** | **Operators** | **Value** |
---- | ---- | ---- |
RecModified | "Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. |
ECommerceFieldId | "Equal", "Contains" | Any valid GUID value representing an ecommerce field for the Equal operator or comma-separated list of such values for Contains operator. |
ECommerceFieldName | "Equal", "Contains" | Any valid string value representing a field name for the Equal operator or comma-separated list of such values for Contains operator. |
ECommerceFieldDescription | "Equal", "Contains" | Any valid string value representing a field dscription for the Equal operator or comma-separated list of such values for Contains operator. |

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
<span class="api-gn">Response: ECommerceField</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array of zero or more entries. </span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
ECommerceFieldId | string, guid | A unique identifier of the field. |
FieldName | string | The name of the field. |
EcmName | string | <span class="ir">***????????***</span> |
FieldSource | string, enum | An indicator of the field’s source. Its value must be one of the following: "Style", "Item". |
FieldType | string, enum | An indicator of the field’s type. Its value must be one of the following: "Text", "Decimal", "Image", "Date", "Integer", "Boolean", "Common". |
Description | string | A description of the field. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: ECommerceField</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response</span> |

### Schema {#SuccessfulResponseSchema}
 
Below is the JSON source for the schema of a successful response to the export request as described above.

~~~
{
   "ECommerceFieldExportToJson_get.ApiDocumentType":{
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
            "$ref":"#/definitions/ECommerceFieldExportToJson_get.ResponseType"
         }
      }
   },
   "ECommerceFieldExportToJson_get.ResponseType":{
      "type":"object",
      "properties":{
         "ECommerceField":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/ECommerceFieldExportToJson_get.ECommerceFieldType"
            }
         }
      }
   },
   "ECommerceFieldExportToJson_get.ECommerceFieldType":{
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
         "ECommerceFieldId":{
            "format":"uuid",
            "type":"string",
            "example":"00000000-0000-0000-0000-000000000000"
         },
         "FieldName":{
            "type":"string"
         },
         "EcmName":{
            "type":"string"
         },
         "FieldSource":{
            "enum":[
               "Style",
               "Item"
            ],
            "type":"string"
         },
         "FieldType":{
            "enum":[
               "Text",
               "Decimal",
               "Image",
               "Date",
               "Integer",
               "Boolean",
               "Common"
            ],
            "type":"string"
         },
         "Description":{
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
      "ApiDocumentId":"43d466dc-90df-45b2-81f9-d49a23345d51",
      "Request":{       
         "Filters":[
            {
               "Field":"RecModified",
               "Operator":"Greater than",
               "Value":"2018-06-06 10:07:12"
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
{  "Id": "2ec93ae3-c789-4018-a171-1425fbd7b0dd",  "Status": "InProcess",  "ApiType": "ecommercefield-export",  "Source": "string"}
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

**Response Example #3: Success when requesting ECommerceFieldId = '1EF71ED6-F83A-4E90-8C51-0C181463F7BC'**

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"87FA749A-AD1E-4606-9A61-9372151BC975",
      "Status":"Successful",
      "ApiRequestType":"ecommercefield-export",
      "TotalRecords":1,
      "RecordsCount":1,
      "ElapsedTime":"00:00:00.0166667",
      "StartDateTime":"2018-12-17T16:08:33.837",
      "EndDateTime":"2018-12-17T16:08:33.853",
      "Response":{
         "ECommerceFields":[
            {
               "Recfreated":"2018-12-17T13:27:35.380",
               "RecModified":"2018-12-17T13:27:35.380",
               "ECommerceFieldId":"1EF71ED6-F83A-4E90-8C51-0C181463F7BC",
               "FieldName":"height",
               "EcmName":"Item.Height",
               "FieldSource":"Item",
               "FieldType":"Decimal"
            }
         ]
      }
   }
}
~~~

**Response Example #4: Success when requesting ECommerceFieldName = 'alternate classification'**

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"EDE53BFB-CC32-4FD6-B838-A53179BD2FE9",
      "Status":"Successful",
      "ApiRequestType":"ecommercefield-export",
      "TotalRecords":1,
      "RecordsCount":1,
      "ElapsedTime":"00:00:00.0133333",
      "StartDateTime":"2018-12-17T16:12:40.863",
      "EndDateTime":"2018-12-17T16:12:40.877",
      "Response":{
         "ECommerceFields":[
            {
               "Recfreated":"2018-12-17T13:27:35.363",
               "RecModified":"2018-12-17T13:27:35.363",
               "ECommerceFieldId":"1CCF18B5-03DE-4ECC-98D0-F15BDF2E4EED",
               "FieldName":"alternate classification",
               "EcmName":"Style.ACSS.Code",
               "FieldSource":"Style",
               "FieldType":"Text"
            }
         ]
      }
   }
}
~~~

**Response Example #5: Success when requesting ECommerceFieldName contains 'eid', 'clu' or 'brand'**

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"FFD6C7E3-2248-405A-8833-06A7A981EFFE",
      "Status":"Successful",
      "ApiRequestType":"ecommercefield-export",
      "TotalRecords":3,
      "RecordsCount":3,
      "ElapsedTime":"00:00:00.0133333",
      "StartDateTime":"2018-12-17T16:16:45.403",
      "EndDateTime":"2018-12-17T16:16:45.417",
      "Response":{
         "ECommerceFields":[
            {
               "Recfreated":"2018-12-17T13:27:35.380",
               "RecModified":"2018-12-17T13:27:35.380",
               "ECommerceFieldId":"769C573A-4BA3-4B6A-8EE5-77FAB0F63A1F",
               "FieldName":"brand",
               "EcmName":"Style.Brand",
               "FieldSource":"Style",
               "FieldType":"Text"
            },
            {
               "Recfreated":"2018-12-17T13:27:35.380",
               "RecModified":"2018-12-17T13:27:35.380",
               "ECommerceFieldId":"05EFAA46-8C41-4246-84D4-DD61C17718FC",
               "FieldName":"clu",
               "EcmName":"Item.Identifier1",
               "FieldSource":"Item",
               "FieldType":"Text"
            },
            {
               "Recfreated":"2018-12-17T13:27:35.380",
               "RecModified":"2018-12-17T13:27:35.380",
               "ECommerceFieldId":"F617E950-02DF-4A09-A9A1-2995A9DC5A24",
               "FieldName":"eid",
               "EcmName":"Item.Identifier2",
               "FieldSource":"Item",
               "FieldType":"Text"
            }
         ]
      }
   }
}
~~~