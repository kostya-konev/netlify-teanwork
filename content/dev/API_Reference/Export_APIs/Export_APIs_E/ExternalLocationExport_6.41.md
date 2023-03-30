---
title: "External Location Export API [6.41]"
date: 2023-02-03T15:41:00-05:00
draft: false
weight: 2420
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

This topic describes the **External Location Export** API which is used to export external location information from CHQ.

See [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for a description on how export requests are made and on the standard request and response formats used. The API-Specific sucessful response format for this API will be described below.

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/external-location**  
Asynchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/external-location/async**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

In the Swagger UI the **/chqapi/export/external-location** endpoint is a member of the **Settings** endpoint group.

## Request settings {#RequestSettings}

This API does not support any settings.

## Request filters {#RequestFilters}

Below are the filters which can be defined in the **Filters** group of the export request (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Field** column lists the names of the fields on which filtering can be done. The **Operators** column lists the filter operator values which are valid for the field. The **Value** column describes the value expected for the field.

**Field** | **Operators** | **Value** |
---- | ---- | ---- |
RecModified | "Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. |
ExternalLocationId | "Equal", "Contains" | Any valid guid representing an external location identifier for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |
ExternalLocationCode | "Equal", "Contains" | Any valid string representing a code for an external location  for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |
ExternalLocationName | "Equal", "Contains" | Any valid string representing a name for an external location  for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |

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
ApiRequestType | string | <span class="ir">????????</span> |
TotalRecords | int32 | The total number of records processed. |
RecordsCount | int32 | The number of records exported. |
ElapsedTime | string, datetime | The time it took to execute the API. |
StartDateTime | string, datetime | A timestamp of when the API began executing. |
EndDateTime | string, datetime | A timestamp of when the API completed. |
<span class="api-gn">Response</span> | | <span class="api-gd">A group containing the following fields and groups.</span> |
<span class="api-gn">Response: ExternalLocations</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
ExternalLocationId | string, guid | A unique identifier of the external location. |
Code | string | A code identifying the external location. |
Name | string | The name of the external location. |
Description | string | A description of the external location. |
IsActive | boolean | An indicator as to whether or not the external location is active. |
IsCloudHqModified | boolean | An indicator as to whether or not <span class="ir">????????</span> |
VAVendorId | string, guid | A unique identifier of <span class="ir">????????</span> |
ShowInRTA | boolean | An indicator as to whether or not the external location should appear in real time availability. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: ExternalLocations</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response</span> |

### Schema {#SuccessfulResponseSchema}
 
Below is the JSON source for the schema of a successful response to the export request as described above.

~~~
{
   "ExternalLocationExportToJson_get.ApiDocumentType":{
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
            "$ref":"#/definitions/ExternalLocationExportToJson_get.ResponseType"
         }
      }
   },
   "ExternalLocationExportToJson_get.ResponseType":{
      "type":"object",
      "properties":{
         "ExternalLocations":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/ExternalLocationExportToJson_get.ExternalLocationsType"
            }
         }
      }
   },
   "ExternalLocationExportToJson_get.ExternalLocationsType":{
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
         "ExternalLocationId":{
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
         "Description":{
            "type":"string"
         },
         "IsActive":{
            "type":"boolean"
         },
         "IsCloudHqModified":{
            "type":"boolean"
         },
         "VAVendorId":{
            "format":"uuid",
            "type":"string",
            "example":"00000000-0000-0000-0000-000000000000"
         },
         "ShowInRTA":{
            "type":"boolean"
         }
      }
   }
}
~~~

---

## Request Example(s) {#RequestExamples}

**Request Example #1: RecModified > '2018-06-06 10:07:12' and ExternalLocationCode = 'main'**

~~~
{
   "Source":"Integrator",
   "Data":{
      "ApiDocumentId":"156699B0-BDAF-415A-9716-7A2BBD8DEEDE",
      "Request":{
         "Filters":[
            {
               "Field":"RecModified",
               "Operator":"Greater than",
               "Value":"2018-06-06T10:07:12"
            },
            {
               "Field":"ExternalLocationCode",
               "Operator":"Equal",
               "Value":"main"
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
{  "Id": "977486ab-5e0c-4594-9258-20f70b5acc9b",  "Status": "InProcess",  "ApiType": "external-location-export",  "Source": "string"}
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

**Response Example #3: Success when requesting RecModified= '2017-12-01 19:31:18.583'**

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"7719A453-561A-4ACA-A757-EE34392E256B",
      "Status":"Successful",
      "ApiRequestType":"external-location-export",
      "TotalRecords":1,
      "RecordsCount":1,
      "ElapsedTime":"00:00:00",
      "StartDateTime":"2019-01-09T13:09:17.763",
      "EndDateTime":"2019-01-09T13:09:17.763",
      "Response":{
         "ExternalLocations":[
            {
               "RecCreated":"2017-03-15T09:59:03.300",
               "RecModified":"2017-12-01T19:31:18.583",
               "ExternalLocationId":"398ABA6C-BC60-409D-84C3-80DA6703DBA8",
               "Code":"extViktorexternal",
               "Name":"external loc",
               "Description":"test",
               "IsActive":true,
               "IsCloudHqModified":false,
               "VAVendorId":"D454ED2C-E064-44B6-9C5B-EF98CD75F7D2",
               "ShowInRTA":true
            }
         ]
      }
   }
}
~~~

**Response Example #4: Success when requesting ExternalLocationId = '3D0C5A10-A085-4E2E-8F0F-7D8E694ED130'**

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"66F9DBF6-2A07-455F-85B5-E92720AE482D",
      "Status":"Successful",
      "ApiRequestType":"external-location-export",
      "TotalRecords":1,
      "RecordsCount":1,
      "ElapsedTime":"00:00:00.0166667",
      "StartDateTime":"2019-01-09T13:11:49.810",
      "EndDateTime":"2019-01-09T13:11:49.827",
      "Response":{
         "ExternalLocations":[
            {
               "RecCreated":"2017-11-22T14:05:55.840",
               "RecModified":"2018-11-15T12:31:29.870",
               "ExternalLocationId":"3D0C5A10-A085-4E2E-8F0F-7D8E694ED130",
               "Code":"extFor SFV - vendor Rocawear",
               "Name":"Rocawear`s Ext location",
               "IsActive":true,
               "IsCloudHqModified":false,
               "VAVendorId":"EB6E099C-E545-48AE-A716-27E8EF5C524A",
               "ShowInRTA":false
            }
         ]
      }
   }
}
~~~

**Response Example #5: Success when requesting ExternalLocationCode = 'test tati'**

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"B24785DC-DF01-4B48-AA8A-42F110C7CA53",
      "Status":"Successful",
      "ApiRequestType":"external-location-export",
      "TotalRecords":1,
      "RecordsCount":1,
      "ElapsedTime":"00:00:00.0166667",
      "StartDateTime":"2019-01-09T13:20:25.937",
      "EndDateTime":"2019-01-09T13:20:25.953",
      "Response":{
         "ExternalLocations":[
            {
               "RecCreated":"2017-08-01T10:43:36.590",
               "RecModified":"2017-08-01T11:31:24.963",
               "ExternalLocationId":"4193F81B-3535-4BE9-90AD-DBB2028B7A71",
               "Code":"test tati",
               "Name":"test for delete",
               "IsActive":true,
               "IsCloudHqModified":false,
               "VAVendorId":"0BCEA933-8CC6-4E0E-8A45-A46FBA6A73F5",
               "ShowInRTA":false
            }
         ]
      }
   }
}
~~~

**Response Example #5: Success when requesting ExternalLocationName Contains 'oms logic,main'**

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"68E89273-FD0E-4E91-9B9E-79DDDBEDF9C5",
      "Status":"Successful",
      "ApiRequestType":"external-location-export",
      "TotalRecords":2,
      "RecordsCount":2,
      "ElapsedTime":"00:00:00",
      "StartDateTime":"2019-01-09T13:23:28.923",
      "EndDateTime":"2019-01-09T13:23:28.923",
      "Response":{
         "ExternalLocations":[
            {
               "RecCreated":"2017-07-24T11:49:25.437",
               "RecModified":"2017-07-27T07:58:37.327",
               "ExternalLocationId":"EEB99673-7955-4315-8964-16A2A3BCFB9B",
               "Code":"test logic settings",
               "Name":"oms logic",
               "IsActive":false,
               "IsCloudHqModified":false,
               "VAVendorId":"A10F2B64-DBB1-45E4-9D30-B1D12E5AB651",
               "ShowInRTA":false
            },
            {
               "RecCreated":"2017-08-04T10:41:32.343",
               "RecModified":"2017-08-04T10:43:08.110",
               "ExternalLocationId":"A97D75B3-E47B-4CC4-865A-591D36F22674",
               "Code":"main",
               "Name":"Main",
               "IsActive":true,
               "IsCloudHqModified":false,
               "VAVendorId":"A10F2B64-DBB1-45E4-9D30-B1D12E5AB651",
               "ShowInRTA":false
            }
         ]
      }
   }
}
~~~