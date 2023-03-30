---
title: "Inventory Department Export [6.41]"
date: 2022-09-02T11:31:00-05:00
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

This topic describes the **Inventory Department Export** API which is used to export department information from CHQ.

See [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for a description on how export requests are made and on the standard request and response formats used. The API-Specific successful response format for this API will be described below.

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/invendepartment**  
Asynchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/invendepartment/async**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

In the Swagger UI the **/chqapi/export/invendepartment** endpoint is a member of the **Settings** endpoint group.

## Request settings {#RequestSettings}

There are no settings which apply to this API.

## Request filters {#RequestFilters}

Below are the filters which can be defined in the **Filters** group of the export request (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Field** column lists the names of the fields on which filtering can be done. The **Operators** column lists the filter operator values which are valid for the field. The **Value** column describes the value expected for the field.

**Field** | **Operators** | **Value** |
---- | ---- | ---- |
RecModified | "Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. |
InvenDepartmentId | "Equal", "Contains" | Any valid value representing a department identifier for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |
InvenDepartmentCode | "Equal", "Contains" | Any valid value representing a department code for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |
InvenDepartmentName | "Equal", "Greater than or equal", "Less than or equal" | Any valid value representing a department name for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |

## Request sorts {#RequestSorts}

The information returned is automatically sorted by the **RecModified** field *ascending*. No other sorts can be requested.

---

## Successful response {#SuccessfulResponse}

### Format {#SuccessfulResponseFormat}

Below is the format of the successful response to the export request. See [*JSON Data Types*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/JsonDataTypes_6.41/) for a description of the values which could appear in the **Data Type** column.

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
ApiDocumentId | string, guid | A unique identifier of the API document being used. |
Status | string, enum | The status of the response. The value will always be "Successful". |
ApiRequestType | string | <span class="ir">***????????***</span> |
TotalRecords | int32 | The total number of records processed. |
RecordsCount | int32 | The number of records exported. |
ElapsedTime | string, datetime | The time it took to execute the API. |
StartDateTime | string, datetime | A timestamp of when the API began executing. |
EndDateTime | string, datetime | A timestamp of when the API completed. |
<span class="api-gn">Response</span> | | <span class="api-gd">A group containing the following fields and groups.</span> |
<span class="api-gn">Response: InvenDepartments</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
InvenDepartmentId | string, guid | A unique identifier of the department. |
Code | string | An code identifying the department. |
Name | string | The name of the department. |
LocationIdentifier | string | An identifier of the location to which the department applies. |
Alias | string | An alias (alternate identifier) of the department. |
ClassificationType | string, enum | An indicator of department's classification. Its value must be one of the following: “Normal", "Alternative". |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: InvenDepartments</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response</span> |

### Schema {#SuccessfulResponseSchema}
 
Below is the JSON source for the schema of a successful response to the export request as described above.

~~~
{
   "InvenDepartmentExportToJson_get.ApiDocumentType":{
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
            "$ref":"#/definitions/InvenDepartmentExportToJson_get.ResponseType"
         }
      }
   },
   "InvenDepartmentExportToJson_get.ResponseType":{
      "type":"object",
      "properties":{
         "InvenDepartments":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/InvenDepartmentExportToJson_get.InvenDepartmentsType"
            }
         }
      }
   },
   "InvenDepartmentExportToJson_get.InvenDepartmentsType":{
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
         "InvenDepartmentId":{
            "format":"uuid",
            "type":"string",
            "example":"00000000-0000-0000-0000-000000000000"
         },
         "Code":{
            "type":"string"
         },
         "Name":{
            "type":"string"
         },
         "LocationIdentifier":{
            "type":"string"
         },
         "Alias":{
            "type":"string"
         },
         "ClassificationType":{
            "enum":[
               "Normal",
               "Alternative"
            ],
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
{  "Id": "927bb89f-50fd-46df-9c19-261e19e78592",  "Status": "InProcess",  "ApiType": "invendepartment-export",  "Source": "string"}
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

**Response Example #3: Success when requesting RecModified = '2018-12-05 12:28:28.157'**

~~~
   {
   "ApiDocument":{
      "ApiDocumentId":"486D7E2B-98C1-4D1C-A400-7BEF6EFBB363",
      "Status":"Successful",
      "ApiRequestType":"invendepartment-export",
      "TotalRecords":3,
      "RecordsCount":3,
      "ElapsedTime":"00:00:00.0300000",
      "StartDateTime":"2018-12-05T15:25:52.143",
      "EndDateTime":"2018-12-05T15:25:52.173",
      "Response":{
         "InvenDepartments":[
            {
               "RecCreated":"2018-12-05T12:28:28.157",
               "RecModified":"2018-12-05T12:28:28.157",
               "InvenDepartmentId":"6729BA8B-A2AE-43C7-8060-02A9D2A8A0AC",
               "Code":"MENS",
               "Name":"Mens",
               "Alias":"",
               "ClassificationType":"Normal"
            },
            {
               "RecCreated":"2018-12-05T12:28:28.157",
               "RecModified":"2018-12-05T12:28:28.157",
               "InvenDepartmentId":"50D8A41E-269B-447F-91C1-118FFD2968CF",
               "Code":"WOMENS",
               "Name":"Womens",
               "Alias":"",
               "ClassificationType":"Normal"
            },
            {
               "RecCreated":"2018-12-05T12:28:28.157",
               "RecModified":"2018-12-05T12:28:28.157",
               "InvenDepartmentId":"CADDDC6D-13E5-4C99-9B8D-C375F7B50933",
               "Code":"KIDS",
               "Name":"Kids",
               "Alias":"",
               "ClassificationType":"Normal"
            }
         ]
      }
   }
}
~~~
