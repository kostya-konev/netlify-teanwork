---
title: "Inventory Class Export [6.41]"
date: 2022-09-06T04:54:00-05:00
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

This topic describes the **Inventory Class Export** API which is used to export class information from CHQ.

See [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for a description on how export requests are made and on the standard request and response formats used. The API-Specific successful response format for this API will be described below.

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/invenclass**  
Asynchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/invenclass/async**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

In the Swagger UI the **/chqapi/export/invenclass** endpoint is a member of the **Catalog** endpoint group.

## Request settings {#RequestSettings}

Below are the settings which can be supplied in the **Settings** group of the export request to define which value (field) is to be used for a particular value class (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Key** column lists the names of the available settings. The **Supported Values** column lists the valid values which can be supplied for the setting. The **Default** column lists the default value for each setting if that setting is not supplied.

**Key** | **Supported Values** | **Default** | **Description** |
---- | ---- | ---- | ---- |
LocationIdentifierSetting | ExternalIdCode, Code, ExternalId, No, TeamworkId | ExternalIdCode | An indicator of which value is to be used to identify locations. |

## Request filters {#RequestFilters}

Below are the filters which can be defined in the **Filters** group of the export request (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Field** column lists the names of the fields on which filtering can be done. The **Operators** column lists the filter operator values which are valid for the field. The **Value** column describes the value expected for the field.

**Field** | **Operators** | **Value** |
---- | ---- | ---- |
RecModified | "Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. |
InvenClassId | "Equal", "Contains" | Any valid value representing a class identifier for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |
InvenClassCode | "Equal", "Contains" | Any valid value representing a class code for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |
InvenClassName | "Equal", "Greater than or equal", "Less than or equal" | Any valid value representing a class name for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |

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
<span class="api-gn">Response: InvenClasses</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
InvenClassId | string, guid | A unique identifier of the class. |
Code | string | An code identifying the class. |
Name | string | The name of the class. |
ClassificationType | string, enum | An indicator of class' classification. Its value must be one of the following: “Normal", "Alternative". |
Level | int32 | <span class="ir">***????????***</span> |
LocationIdentifier | string | An identifier of the location to which the class applies. |
Alias | string | An alias (alternate identifier) of the class. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: InvenClasses</span> |S
<span class="api-gs">---</span> | | <span class="api-gde">end of Response</span> |

### Schema {#SuccessfulResponseSchema}
 
Below is the JSON source for the schema of a successful response to the export request as described above.

~~~
{
   "InvenClassExportToJson_get.ApiDocumentType":{
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
            "$ref":"#/definitions/InvenClassExportToJson_get.ResponseType"
         }
      }
   },
   "InvenClassExportToJson_get.ResponseType":{
      "type":"object",
      "properties":{
         "InvenClasses":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/InvenClassExportToJson_get.InvenClassesType"
            }
         }
      }
   },
   "InvenClassExportToJson_get.InvenClassesType":{
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
         "InvenClassId":{
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
         "ClassificationType":{
            "enum":[
               "Normal",
               "Alternative"
            ],
            "type":"string"
         },
         "Level":{
            "format":"int32",
            "type":"integer"
         },
         "LocationIdentifier":{
            "type":"string"
         },
         "Alias":{
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
         "Settings":[        
            {
               "Key":"LocationIdentifierSetting",
               "Value":"ExternalIdCode"
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
{  "Id": "6cee8f84-afb3-487c-8310-ceda95c02883"",  "Status": "InProcess",  "ApiType": "invenclass-export",  "Source": "string"}
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

**Response Example #3: Success when requesting RecModified = '2018-12-17 08:57:07.740'**

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"F4F5967B-9BBA-4044-ACFE-2D7BE94D3829",
      "Status":"Successful",
      "ApiRequestType":"invenclass-export",
      "TotalRecords":1,
      "RecordsCount":1,
      "ElapsedTime":"00:00:00.0300000",
      "StartDateTime":"2018-12-17T11:39:25.390",
      "EndDateTime":"2018-12-17T11:39:25.420",
      "Response":{
         "InvenClasss":[
            {
               "RecCreated":"2018-12-17T08:57:07.740",
               "RecModified":"2018-12-17T08:57:07.740",
               "InvenClassId":"F109FE67-BBDF-441D-B72C-F9AE6126F069",
               "Code":"BAGS",
               "Name":"Bags",
               "ClassificationType":"Normal",
               "Level":0,
               "Alias":""
            }
         ]
      }
   }
}
~~~

**Response Example #4: Success when requesting InvenClassId =  '3A55F5BA-650A-4D7A-9244-05C11AA2CFF5'**

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"34CAEAD4-5146-424D-B552-B545DBFC5DBD",
      "Status":"Successful",
      "ApiRequestType":"invenclass-export",
      "TotalRecords":1,
      "RecordsCount":1,
      "ElapsedTime":"00:00:00.0333333",
      "StartDateTime":"2018-12-17T11:57:16.683",
      "EndDateTime":"2018-12-17T11:57:16.717",
      "Response":{
         "InvenClasss":[
            {
               "RecCreated":"2018-12-17T08:57:07.770",
               "RecModified":"2018-12-17T08:57:07.770",
               "InvenClassId":"3A55F5BA-650A-4D7A-9244-05C11AA2CFF5",
               "Code":"KVEST",
               "Name":"K Vest",
               "ClassificationType":"Normal",
               "Level":1,
               "Alias":""
            }
         ]
      }
   }
}
~~~

**Response Example #5: Success when requesting Code contains 'BB' or 'BBF'**

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"84A23BE4-1BDD-4E35-8A76-AF9F4B1EA74F",
      "Status":"Successful",
      "ApiRequestType":"invenclass-export",
      "TotalRecords":2,
      "RecordsCount":2,
      "ElapsedTime":"00:00:00.0333333",
      "StartDateTime":"2018-12-17T12:19:30.350",
      "EndDateTime":"2018-12-17T12:19:30.383",
      "Response":{
         "InvenClasss":[
            {
               "RecCreated":"2018-12-17T08:57:07.743",
               "RecModified":"2018-12-17T08:57:07.743",
               "InvenClassId":"9AF8970A-4C29-4CFC-A23E-E8ADB0B7B7E7",
               "Code":"BB",
               "Name":"BB",
               "ClassificationType":"Normal",
               "Level":1,
               "Alias":""
            },
            {
               "RecCreated":"2018-12-17T08:57:07.747",
               "RecModified":"2018-12-17T08:57:07.747",
               "InvenClassId":"033F2B01-2F52-486B-A71C-16F8DFCBCECD",
               "Code":"BBF",
               "Name":"BBF",
               "ClassificationType":"Normal",
               "Level":1,
               "Alias":""
            }
         ]
      }
   }
}
~~~

**Response Example #6: Success when requesting Name = 'M Jean'**

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"CD487E8C-B078-42D6-9AE6-74DA80474AE4",
      "Status":"Successful",
      "ApiRequestType":"invenclass-export",
      "TotalRecords":1,
      "RecordsCount":1,
      "ElapsedTime":"00:00:00.0366667",
      "StartDateTime":"2018-12-17T12:31:59.057",
      "EndDateTime":"2018-12-17T12:31:59.093",
      "Response":{
         "InvenClasss":[
            {
               "RecCreated":"2018-12-17T08:57:07.760",
               "RecModified":"2018-12-17T08:57:07.760",
               "InvenClassId":"F5A20BBF-D288-4A6B-B2A3-E4E95FE765FB",
               "Code":"MJEAN",
               "Name":"M Jean",
               "ClassificationType":"Normal",
               "Level":1,
               "Alias":""
            }
         ]
      }
   }
}
~~~
