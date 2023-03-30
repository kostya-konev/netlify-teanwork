---
title: "Inventory Brand Export [6.41]"
date: 2022-09-06T04:44:00-05:00
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

This topic describes the **Inventory Brand Export** API which is used to export brand information from CHQ.

See [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for a description on how export requests are made and on the standard request and response formats used. The API-Specific successful response format for this API will be described below.

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/invenbrand**  
Asynchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/invenbrand/async**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

In the Swagger UI the **/chqapi/export/invenbrand** endpoint is a member of the **Settings** endpoint group.

## Request settings {#RequestSettings}

There are no settings which apply to this API.

## Request filters {#RequestFilters}

Below are the filters which can be defined in the **Filters** group of the export request (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Field** column lists the names of the fields on which filtering can be done. The **Operators** column lists the filter operator values which are valid for the field. The **Value** column describes the value expected for the field.

**Field** | **Operators** | **Value** |
---- | ---- | ---- |
RecModified | "Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. |
InvenBrandId | "Equal", "Contains" | Any valid guid value representing a brand identifier for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |
InvenBrandName | "Equal", "Greater than or equal", "Less than or equal" | Any valid value representing a brand name for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |
InvenDepartmentKey | "Equal", "Contains" | Any valid interger value representing a department key for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |

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
<span class="api-gn">Response: InvenBrands</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
InvenBrandId | string, guid | A unique identifier of the brand. |
Name | string | The name of the brand. |
LocationIdentifier | string | An identifier of the location to which the brand applies. |
Key | int32 | <span class="ir">***????????***</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: InvenBrands</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response</span> |

### Schema {#SuccessfulResponseSchema}
 
Below is the JSON source for the schema of a successful response to the export request as described above.

~~~
{
   "InvenBrandExportToJson_get.ApiDocumentType":{
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
            "$ref":"#/definitions/InvenBrandExportToJson_get.ResponseType"
         }
      }
   },
   "InvenBrandExportToJson_get.ResponseType":{
      "type":"object",
      "properties":{
         "InvenBrands":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/InvenBrandExportToJson_get.InvenBrandsType"
            }
         }
      }
   },
   "InvenBrandExportToJson_get.InvenBrandsType":{
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
         "InvenBrandId":{
            "format":"uuid",
            "type":"string",
            "example":"00000000-0000-0000-0000-000000000000"
         },
         "Name":{
            "type":"string"
         },
         "LocationIdentifier":{
            "type":"string"
         },
         "Key":{
            "format":"int32",
            "type":"integer"
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
{  "Id": "9274f562-899c-48ad-819a-628c2d337cf8",  "Status": "InProcess",  "ApiType": "invenbrand-export",  "Source": "Integrator"}
~~~

**Response Example #2: Error**

~~~
{
   "Message":"The request is invalid.",
   "ModelState":{
      "apiRequest.Data.Request.Filters[0].Operator":[
         "Error converting value \"Contain\" to type 'Teamwork.AdminServer.Api.Services.Controller.OperatorElementType'. Path 'Data.Request.Filters[0].Operator', line 15, position 35."
      ]
   }
}
~~~

**Response Example #3: Success when requesting RecModified = '2017-03-18 10:47:34.727'**

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"4F2408A4-C93D-477C-8D7C-476BEB766420",
      "Status":"Successful",
      "ApiRequestType":"invenbrand-export",
      "TotalRecords":1,
      "RecordsCount":1,
      "ElapsedTime":"00:00:00",
      "StartDateTime":"2018-12-04T12:34:27.067",
      "EndDateTime":"2018-12-04T12:34:27.067",
      "Response":{
         "InvenBrands":[
            {
               "RecCreated":"2017-03-18T10:47:34.727",
               "RecModified":"2017-03-18T10:47:34.727",
               "StreamingDate":"2017-03-18T10:47:34.727",
               "InvenBrandId":"A6C9E35F-1979-4F65-9C69-0C8B7B3370D3",
               "Name":"All for 1$"
            }
         ]
      }
   }
}
~~~

**Response Example #4: Success when requesting InvenBrandId = 'BD5C4CC0-750B-47E3-8568-B641EAB6F51F'**

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"9BFE0533-9BB8-4330-9DE6-17A21E1542F6",
      "Status":"Successful",
      "ApiRequestType":"invenbrand-export",
      "TotalRecords":1,
      "RecordsCount":1,
      "ElapsedTime":"00:00:00",
      "StartDateTime":"2018-12-04T12:43:06.423",
      "EndDateTime":"2018-12-04T12:43:06.423",
      "Response":{
         "InvenBrands":[
            {
               "RecCreated":"2013-12-04T13:00:06.930",
               "RecModified":"2018-08-14T18:02:27.050",
               "StreamingDate":"2018-08-14T18:02:27.050",
               "InvenBrandId":"BD5C4CC0-750B-47E3-8568-B641EAB6F51F",
               "Name":"Apple iPhone",
               "Key":7
            }
         ]
      }
   }
}
~~~

**Response Example #5: Success when requesting InvenBrandKey = '3'**

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"94AF77ED-B455-47ED-8A8E-7E1EF2C27AC3",
      "Status":"Successful",
      "ApiRequestType":"invenbrand-export",
      "TotalRecords":1,
      "RecordsCount":1,
      "ElapsedTime":"00:00:00.0166667",
      "StartDateTime":"2018-12-04T12:47:42.720",
      "EndDateTime":"2018-12-04T12:47:42.737",
      "Response":{
         "InvenBrands":[
            {
               "RecCreated":"2012-12-21T10:07:58.760",
               "RecModified":"2012-12-21T10:08:03.980",
               "StreamingDate":"2017-02-03T14:33:52.903",
               "InvenBrandId":"73568F5A-43E9-4AB3-B9C0-B5F5CB85CB56",
               "Name":"Games",
               "Key":3
            }
         ]
      }
   }
}
~~~

**Response Example #6: Success when requesting Name = '998 Jeans'**

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"24867D91-E9F7-4C8A-8CC0-0139EFE8543E",
      "Status":"Successful",
      "ApiRequestType":"invenbrand-export",
      "TotalRecords":1,
      "RecordsCount":1,
      "ElapsedTime":"00:00:00",
      "StartDateTime":"2018-12-04T12:52:34.067",
      "EndDateTime":"2018-12-04T12:52:34.067",
      "Response":{
         "InvenBrands":[
            {
               "RecCreated":"2012-12-21T10:07:47.870",
               "RecModified":"2012-12-21T10:07:48.527",
               "StreamingDate":"2017-02-03T14:33:52.903",
               "InvenBrandId":"D8036986-D0C9-479A-ABB9-CB43DD4A6260",
               "Name":"998 Jeans",
               "Key":1
            }
         ]
      }
   }
}
~~~
