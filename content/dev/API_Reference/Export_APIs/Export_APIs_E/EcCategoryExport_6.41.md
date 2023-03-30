---
title: "EC Category Export [6.41]"
date: 2022-10-05T09:31:00-05:00
draft: false
weight: 0303
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

This topic describes the **EC Category Export** API which is used to export ecommerce category information from CHQ.

See [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for a description on how export requests are made and on the standard request and response formats used. The API-Specific sucessful response format for this API will be described below.

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/ecommerce-category**  
Asynchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/ecommerce-category/async**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

In the Swagger UI the **/chqapi/export/ecommerce-category** endpoint is a member of the **ECommerce** endpoint group.

## Request settings {#RequestSettings}

Below are the settings which can be supplied in the **Settings** group of the export request to define which value (field) is to be used for a particular value class (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Key** column lists the names of the available settings. The **Supported Values** column lists the valid values which can be supplied for the setting. The **Default** column lists the default value for each setting if that setting is not supplied.

**Key** | **Supported Values** | **Default** | **Description** |
---- | ---- | ---- | ---- |
LocationIdentifierSetting | ExternalIdCode, Code, ExternalId, No, TeamworkId | ExternalIdCode | An indicator of which value is to be used to identify locations. |
ECommerceChannelIdentifierSetting | Name, TeamworkId | Name | An indicator of which value is to be used to identify ecommerce channels. |

## Request filters {#RequestFilters}

Below are the filters which can be defined in the **Filters** group of the export request (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Field** column lists the names of the fields on which filtering can be done. The **Operators** column lists the filter operator values which are valid for the field. The **Value** column describes the value expected for the field.

**Field** | **Operators** | **Value** |
---- | ---- | ---- |
RecModified | "Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. |
ECommerceCategoryId | "Equal", "Contains" | Any valid value representing an ecommerce category for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |
ECommerceCategoryLocationId | "Equal", "Contains" | Any valid value representing a location for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |
ECommerceCategoryParentId | "Equal", "Contains" | Any valid value representing an ecommerce category parent for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |
IsDeleted | "Equal" | Any valid boolean value. |

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
<span class="api-gn">Response: ECommerceCategorys</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
ECommerceCategoryId | string, guid | A unique identifier of the category. |
Name | string | The category's name. |
Description | string | The category's description. |
Keywords | string | Keywords identifying the category. <span class="ir">?????????</span> |
OrderNo | int32 | <span class="ir">?????????</span> |
LocationIdentifier | string | The location to which the category applies. <span class="ir">?????????</span> |
ECommerceChannelIdentifier  | string | The ecommerce channel to which the category applies. <span class="ir">?????????</span> |
IsActive | boolean | An indicator as to whether or not the category is active. |
IsDeleted | boolean | An indicator as to whether or not the category has been deleted. |
HasRcmContent | boolean | An indicator as to whether or not the category has rich content associated with it. <span class="ir">?????????</span> |
CustomDate1 - 4 | string, datetime | These four fields are customizable date values for the category. |
CustomDecimal1 - 4 | double | These four fields are customizable decimal (floating-point) values for the category. |
CustomFlag1 - 4 | boolean | These four fields are customizable flags for the category. |
CustomLookup1 - 4 | string | These four fields are customizable lookup values for the category. |
CustomNumber1 - 4 | int32 | These four fields are customizable integer values for the category. |
CustomText1 - 4 | string | These four fields are customizable text values for the category. |
ParentECommerceCategoryID | string, guid | A unique identifier of the category's parent category. <span class="ir">?????????</span> |
Level | int32 | <span class="ir">?????????</span> |
ECommerceChannelId | string, guid | A unique identifier of the ecommerce channel to which the category applies. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: ECommerceCategorys</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response</span> |

### Schema {#SuccessfulResponseSchema}
 
Below is the JSON source for the schema of a successful response to the export request as described above.

~~~
{
   "ECommerceCategoryExportToJson_get.ApiDocumentType":{
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
            "$ref":"#/definitions/ECommerceCategoryExportToJson_get.ResponseType"
         }
      }
   },
   "ECommerceCategoryExportToJson_get.ResponseType":{
      "type":"object",
      "properties":{
         "ECommerceCategorys":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/ECommerceCategoryExportToJson_get.ECommerceCategorysType"
            }
         }
      }
   },
   "ECommerceCategoryExportToJson_get.ECommerceCategorysType":{
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
         "ECommerceCategoryId":{
            "format":"uuid",
            "type":"string",
            "example":"00000000-0000-0000-0000-000000000000"
         },
         "Name":{
            "type":"string"
         },
         "Description":{
            "type":"string"
         },
         "Keywords":{
            "type":"string"
         },
         "OrderNo":{
            "format":"int32",
            "type":"integer"
         },
         "LocationIdentifier":{
            "type":"string"
         },
         "ECommerceChannelIdentifier":{
            "type":"string"
         },
         "IsActive":{
            "type":"boolean"
         },
         "IsDeleted":{
            "type":"boolean"
         },
         "HasRcmContent":{
            "type":"boolean"
         },
         "CustomDate1":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate2":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate3":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate4":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDecimal1":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal2":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal3":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal4":{
            "format":"double",
            "type":"number"
         },
         "CustomFlag1":{
            "type":"boolean"
         },
         "CustomFlag2":{
            "type":"boolean"
         },
         "CustomFlag3":{
            "type":"boolean"
         },
         "CustomFlag4":{
            "type":"boolean"
         },
         "CustomLookup1":{
            "type":"string"
         },
         "CustomLookup2":{
            "type":"string"
         },
         "CustomLookup3":{
            "type":"string"
         },
         "CustomLookup4":{
            "type":"string"
         },
         "CustomNumber1":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber2":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber3":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber4":{
            "format":"int32",
            "type":"integer"
         },
         "CustomText1":{
            "type":"string"
         },
         "CustomText2":{
            "type":"string"
         },
         "CustomText3":{
            "type":"string"
         },
         "CustomText4":{
            "type":"string"
         },
         "ParentECommerceCategoryID":{
            "format":"uuid",
            "type":"string",
            "example":"00000000-0000-0000-0000-000000000000"
         },
         "Level":{
            "format":"int32",
            "type":"integer"
         },
         "ECommerceChannelId":{
            "format":"uuid",
            "type":"string",
            "example":"00000000-0000-0000-0000-000000000000"
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
      "ApiDocumentId":"B39E44EE-FFB2-45AF-87C1-5DC9CEE77FE0",
      "Request":{
         "Settings":[
            {
               "Key":"LocationIdentifierSetting",
               "Value":"ExternalIdCode"
            },
            {
               "Key":"ECommerceChannelIdentifierSetting",
               "Value":"Name"
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
{  "Id": "17eced18-4835-49d1-a85f-8a2ec179b0a9",  "Status": "InProcess",  "ApiType": "ecommerce-category-export",  "Source": "string"}
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

**Response Example #3: Success when requesting RecModified >= '2018-08-03 12:32:38.600' and <= '2018-08-08 12:07:22.380'**

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"9CF6ED35-6808-45E7-8BCF-5CA78619BB8D",
      "Status":"Successful",
      "ApiRequestType":"ecommerce-category-export",
      "TotalRecords":6,
      "RecordsCount":6,
      "ElapsedTime":"00:00:00.0466667",
      "StartDateTime":"2018-12-27T11:52:11.137",
      "EndDateTime":"2018-12-27T11:52:11.183",
      "Response":{
         "ECommerceCategorys":[
            {
               "RecCreated":"2018-08-03T09:41:20.750",
               "RecModified":"2018-08-03T12:32:38.600",
               "ECommerceCategoryId":"07415731-D0BC-4FF5-8656-566F5F00CFD6",
               "Name":"Servelat Ivanov",
               "OrderNo":10,
               "ECommerceChannelIdentifier":"magento",
               "IsActive":true,
               "HasRcmContent":false,
               "Level":0,
               "ECommerceChannelId":"FD97BAFC-F1EE-4007-AD51-AF42EEE004FC"
            },
            {
               "RecCreated":"2018-08-03T12:56:04.840",
               "RecModified":"2018-08-03T12:58:09.273",
               "ECommerceCategoryId":"7F189709-2F9B-4DA3-92F0-9485BBE979E8",
               "Name":"Servelat Ivanov",
               "Description":"Servelat Ivanov",
               "Keywords":"Servelat Ivanov",
               "OrderNo":0,
               "ECommerceChannelIdentifier":"magento",
               "IsActive":true,
               "HasRcmContent":false,
               "ParentECommerceCategoryID":"DBA70D5F-5A1B-4139-B206-5E153E559A1B",
               "Level":1,
               "ECommerceChannelId":"FD97BAFC-F1EE-4007-AD51-AF42EEE004FC"
            },
            {
               "RecCreated":"2018-08-02T12:26:32.597",
               "RecModified":"2018-08-03T13:02:17.867",
               "ECommerceCategoryId":"DBA70D5F-5A1B-4139-B206-5E153E559A1B",
               "Name":"Anton Solokhov",
               "Description":"Anton Solokhov",
               "Keywords":"Anton Solokhov",
               "OrderNo":2,
               "ECommerceChannelIdentifier":"magento",
               "IsActive":true,
               "HasRcmContent":true,
               "Level":0,
               "ECommerceChannelId":"FD97BAFC-F1EE-4007-AD51-AF42EEE004FC"
            },
            {
               "RecCreated":"2018-08-03T12:32:38.507",
               "RecModified":"2018-08-03T13:02:17.867",
               "ECommerceCategoryId":"8DDB4846-6B1A-4555-8ABB-BE70D450F7EE",
               "Name":"Anton Solokhov2",
               "Description":"Anton Solokhov",
               "Keywords":"Anton Solokhov",
               "OrderNo":10,
               "ECommerceChannelIdentifier":"magento",
               "IsActive":true,
               "HasRcmContent":true,
               "Level":0,
               "ECommerceChannelId":"FD97BAFC-F1EE-4007-AD51-AF42EEE004FC"
            },
            {
               "RecCreated":"2018-08-03T13:04:26.880",
               "RecModified":"2018-08-03T13:04:26.880",
               "ECommerceCategoryId":"BD9EDDDD-65BF-4056-A3F4-71694A3B46CF",
               "Name":"Anton Solokhov",
               "OrderNo":10,
               "ECommerceChannelIdentifier":"magento",
               "IsActive":true,
               "HasRcmContent":true,
               "Level":0,
               "ECommerceChannelId":"FD97BAFC-F1EE-4007-AD51-AF42EEE004FC"
            },
            {
               "RecCreated":"2017-04-19T13:06:09.157",
               "RecModified":"2018-08-08T12:07:22.380",
               "ECommerceCategoryId":"DFDE805A-4ECF-4CDC-B10C-BC00D70CF221",
               "Name":"Sale",
               "OrderNo":0,
               "ECommerceChannelIdentifier":"vitalii",
               "IsActive":true,
               "HasRcmContent":true,
               "Level":0,
               "ECommerceChannelId":"04D55829-3C1B-406A-ACA2-A4E05273E7DA"
            }
         ]
      }
   }
}
~~~

**Response Example #4: Success when requesting ECommerceCategoryId = 'B4F97435-EF62-431E-8E77-51780653C491'**

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"58909CF1-ADAE-4FBB-911A-E2E138EB5B76",
      "Status":"Successful",
      "ApiRequestType":"ecommerce-category-export",
      "TotalRecords":1,
      "RecordsCount":1,
      "ElapsedTime":"00:00:00.0133333",
      "StartDateTime":"2018-12-27T11:58:19.387",
      "EndDateTime":"2018-12-27T11:58:19.400",
      "Response":{
         "ECommerceCategorys":[
            {
               "RecCreated":"2017-12-29T13:04:01.620",
               "RecModified":"2017-12-29T13:04:01.620",
               "ECommerceCategoryId":"B4F97435-EF62-431E-8E77-51780653C491",
               "Name":"Clearence",
               "OrderNo":1,
               "ECommerceChannelIdentifier":"vitalii",
               "IsActive":true,
               "HasRcmContent":false,
               "Level":0,
               "ECommerceChannelId":"04D55829-3C1B-406A-ACA2-A4E05273E7DA"
            }
         ]
      }
   }
}
~~~
