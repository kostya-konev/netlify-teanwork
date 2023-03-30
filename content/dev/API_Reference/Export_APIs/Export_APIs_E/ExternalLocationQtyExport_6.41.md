---
title: "External Location Quantity Export API [6.41]"
date: 2023-02-73T13:01:00-05:00
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

This topic describes the **External Location Quantity Export** API which is used to export external location quantity information from CHQ.

See [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for a description on how export requests are made and on the standard request and response formats used. The API-Specific sucessful response format for this API will be described below.

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/external-location-qty**  
Asynchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/external-location-qty/async**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

In the Swagger UI the **/chqapi/export/external-location-qty** endpoint is a member of the **Settings** endpoint group.

## Request settings {#RequestSettings}

Below are the settings which can be supplied in the **Settings** group of the export request to define which value (field) is to be used for a particular value class (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Key** column lists the names of the available settings. The **Supported Values** column lists the valid values which can be supplied for the setting. The **Default** column lists the default value for each setting if that setting is not supplied.

**Key** | **Supported Values** | **Default** | **Description** |
---- | ---- | ---- | ---- |
ExternalLocationIdentifierSetting | ExternalIdCode, Code, ExternalId, No, TeamworkId | ExternalIdCode | An indicator of which value is to be used to identify external locations. |
ItemIdentifierSetting | PLU, ExternalId, CLU, UPC, TeamworkId | PLU | An indicator of which value is to be used to identify items. |

## Request filters {#RequestFilters}

Below are the filters which can be defined in the **Filters** group of the export request (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Field** column lists the names of the fields on which filtering can be done. The **Operators** column lists the filter operator values which are valid for the field. The **Value** column describes the value expected for the field.

**Field** | **Operators** | **Value** |
---- | ---- | ---- |
RecModified | "Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. |
ExternalLocationQtyId | "Equal", "Contains" | Any valid guid representing an external location quantity identifier for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |
ExternalLocationQtyQty | "Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid decimal representing a quantity value. |
ExternalLocationQtyApplicableDateTime | "Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. |

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
<span class="api-gn">Response: ExternalLocationQtys</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
ExternalLocationQtyId | string, guid | A unique identifier of the external location quantity. |
ExternalLocationQtyIdentifier | string, guid | An identifier of the external location quantity. |
ItemIdentifier | string | An identifier of the item. |
Qty | double | The item's quantity. |
ApplicableDateTime| string, datetime | A timestamp of when <span class="ir">????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: ExternalLocationQtys</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response</span> |

### Schema {#SuccessfulResponseSchema}
 
Below is the JSON source for the schema of a successful response to the export request as described above.

~~~
{
   "ExternalLocationQtyExportToJson_get.ApiDocumentType":{
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
            "$ref":"#/definitions/ExternalLocationQtyExportToJson_get.ResponseType"
         }
      }
   },
   "ExternalLocationQtyExportToJson_get.ResponseType":{
      "type":"object",
      "properties":{
         "ExternalLocationQtys":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/ExternalLocationQtyExportToJson_get.ExternalLocationQtysType"
            }
         }
      }
   },
   "ExternalLocationQtyExportToJson_get.ExternalLocationQtysType":{
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
         "ExternalLocationQtyId":{
            "format":"uuid",
            "type":"string",
            "example":"00000000-0000-0000-0000-000000000000"
         },
         "ExternalLocationIdentifier":{
            "type":"string"
         },
         "ItemIdentifier":{
            "type":"string"
         },
         "Qty":{
            "format":"double",
            "type":"number"
         },
         "ApplicableDateTime":{
            "format":"date-time",
            "type":"string"
         }
      }
   }
}
~~~

---

## Request Example(s) {#RequestExamples}

**Request Example #1: RecModified > '2018-06-06 10:07:12'**
~~~
{
   "Source":"Integrator",
   "Data":{
      "ApiDocumentId":"4DECF62E-81E5-40AF-A28D-D44632BEF666",
      "Request":{
         "Settings":[         
            {
               "Key":"ExternalLocationIdentifierSetting",
               "Value":"ExternalIdCode"
            },
            {
               "Key":"ItemIdentifierSetting",
               "Value":"PLU"
            }          
         ],
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
{  "Id": "533a90c5-1cfe-42f4-93c0-6acd9dd86696",  "Status": "InProcess",  "ApiType": "external-location-quantity-export",  "Source": "string"}
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

**Response Example #3: Success when requesting RecModified= '2018-11-09 10:19:00.610'**

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"A9E32F9D-2DE0-47F0-ABCC-0EC66DAFDA3C",
      "Status":"Successful",
      "ApiRequestType":"external-location-quantity-export",
      "TotalRecords":2,
      "RecordsCount":2,
      "ElapsedTime":"00:00:00.0133333",
      "StartDateTime":"2019-01-09T09:15:08.690",
      "EndDateTime":"2019-01-09T09:15:08.703",
      "Response":{
         "ExternalLocationQtys":[
            {
               "RecCreated":"2018-11-09T10:19:00.610",
               "RecModified":"2018-11-09T10:19:00.610",
               "ExternalLocationQtyId":"734B379E-8F91-416C-AD65-715030A131DD",
               "ExternalLocationIdentifier":"398ABA6C-BC60-409D-84C3-80DA6703DBA8",
               "ItemIdentifier":"54F2FE74-EE60-465B-9AC1-1D43A0D8AA03",
               "Qty":15.70000000000000000000,
               "ApplicableDateTime":"2015-08-05T00:00:00"
            },
            {
               "RecCreated":"2018-11-09T10:19:00.610",
               "RecModified":"2018-11-09T10:19:00.610",
               "ExternalLocationQtyId":"46BD9BA6-9F6C-4F21-904F-A91798869079",
               "ExternalLocationIdentifier":"398ABA6C-BC60-409D-84C3-80DA6703DBA8",
               "ItemIdentifier":"57F827A5-CB6C-4AD9-B3C3-CD6A3B613B0E",
               "Qty":17.00000000000000000000,
               "ApplicableDateTime":"1985-06-03T00:00:00"
            }
         ]
      }
   }
}
~~~

**Response Example #4: Success when requesting ExternalLocationQtyId = 'C2D08E7A-6680-44B4-AB1C-8CA4790E3DA6'**

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"5BC3FEBD-E0C3-47B0-A14E-3ADCDAF73601",
      "Status":"Successful",
      "ApiRequestType":"external-location-quantity-export",
      "TotalRecords":1,
      "RecordsCount":1,
      "ElapsedTime":"00:00:00",
      "StartDateTime":"2019-01-09T10:00:51.050",
      "EndDateTime":"2019-01-09T10:00:51.050",
      "Response":{
         "ExternalLocationQtys":[
            {
               "RecCreated":"2018-07-06T14:14:44.540",
               "RecModified":"2018-07-06T14:14:44.540",
               "ExternalLocationQtyId":"C2D08E7A-6680-44B4-AB1C-8CA4790E3DA6",
               "ExternalLocationIdentifier":"ext2",
               "ItemIdentifier":"4FE8E310-184C-4B20-96BC-5812D83CADF5",
               "Qty":100.00000000000000000000,
               "ApplicableDateTime":"2018-04-17T00:00:00"
            }
         ]
      }
   }
}
~~~

**Response Example #5: Success when requesting ExternalLocationQty >= '100'**

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"A5A443F5-BA3D-4D4F-A182-3C687C250808",
      "Status":"Successful",
      "ApiRequestType":"external-location-quantity-export",
      "TotalRecords":3,
      "RecordsCount":3,
      "ElapsedTime":"00:00:00",
      "StartDateTime":"2019-01-09T10:04:20.767",
      "EndDateTime":"2019-01-09T10:04:20.767",
      "Response":{
         "ExternalLocationQtys":[
            {
               "RecCreated":"2017-12-07T13:45:07.557",
               "RecModified":"2017-12-07T13:45:07.557",
               "ExternalLocationQtyId":"88AEE733-00D4-4B8C-8DC4-BAFAA44038B6",
               "ExternalLocationIdentifier":"4EA13BEA-F0A5-4147-9FDE-C10EFB63F180",
               "ItemIdentifier":"1C5C9447-36EF-49B8-BC6B-FCA6B3285095",
               "Qty":123.45000000000000000000,
               "ApplicableDateTime":"2012-12-13T00:00:00"
            },
            {
               "RecCreated":"2017-12-07T13:45:07.557",
               "RecModified":"2017-12-07T13:45:07.557",
               "ExternalLocationQtyId":"1BAF5D69-9A0A-4188-A2F8-BF5FAF370E15",
               "ExternalLocationIdentifier":"4EA13BEA-F0A5-4147-9FDE-C10EFB63F180",
               "ItemIdentifier":"1C5C9447-36EF-49B8-BC6B-FCA6B3285095",
               "Qty":123.45000000000000000000,
               "ApplicableDateTime":"2012-12-13T00:00:00"
            },
            {
               "RecCreated":"2018-07-06T14:14:44.540",
               "RecModified":"2018-07-06T14:14:44.540",
               "ExternalLocationQtyId":"C2D08E7A-6680-44B4-AB1C-8CA4790E3DA6",
               "ExternalLocationIdentifier":"4EA13BEA-F0A5-4147-9FDE-C10EFB63F180",
               "ItemIdentifier":"4FE8E310-184C-4B20-96BC-5812D83CADF5",
               "Qty":100.00000000000000000000,
               "ApplicableDateTime":"2018-04-17T00:00:00"
            }
         ]
      }
   }
}
~~~

**Response Example #5: Success when requesting ExternalLocationQtyApplicableDateTime = '2012-12-13 00:00:00.00'**

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"E90926AE-0586-4023-89E9-68078063DFC2",
      "Status":"Successful",
      "ApiRequestType":"external-location-quantity-export",
      "TotalRecords":2,
      "RecordsCount":2,
      "ElapsedTime":"00:00:00",
      "StartDateTime":"2019-01-09T10:07:59.643",
      "EndDateTime":"2019-01-09T10:07:59.643",
      "Response":{
         "ExternalLocationQtys":[
            {
               "RecCreated":"2017-12-07T13:45:07.557",
               "RecModified":"2017-12-07T13:45:07.557",
               "ExternalLocationQtyId":"88AEE733-00D4-4B8C-8DC4-BAFAA44038B6",
               "ExternalLocationIdentifier":"4EA13BEA-F0A5-4147-9FDE-C10EFB63F180",
               "ItemIdentifier":"1C5C9447-36EF-49B8-BC6B-FCA6B3285095",
               "Qty":123.45000000000000000000,
               "ApplicableDateTime":"2012-12-13T00:00:00"
            },
            {
               "RecCreated":"2017-12-07T13:45:07.557",
               "RecModified":"2017-12-07T13:45:07.557",
               "ExternalLocationQtyId":"1BAF5D69-9A0A-4188-A2F8-BF5FAF370E15",
               "ExternalLocationIdentifier":"4EA13BEA-F0A5-4147-9FDE-C10EFB63F180",
               "ItemIdentifier":"1C5C9447-36EF-49B8-BC6B-FCA6B3285095",
               "Qty":123.45000000000000000000,
               "ApplicableDateTime":"2012-12-13T00:00:00"
            }
         ]
      }
   }
}
~~~