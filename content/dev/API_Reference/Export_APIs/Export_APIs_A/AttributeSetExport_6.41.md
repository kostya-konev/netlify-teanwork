---
title: "Attribute Set Export [6.41]"
date: 2022-09-13T09:01:00-05:00
draft: false
weight: 2020
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

This topic describes the **Attribute Sets Export** API which is used to export attribute set information from CHQ.

See [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for a description on how export requests are made and on the standard request and response formats used. The API-Specific successful response format for this API will be described below.

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/attributeset**  
Asynchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/attributeset/async**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

In the Swagger UI the **/chqapi/export/attributeset** endpoint is a member of the **Settings** endpoint group.

## Request settings {#RequestSettings}

This API doesn't support any settings. 

## Request filters {#RequestFilters}

Below are the filters which can be defined in the **Filters** group of the export request (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Field** column lists the names of the fields on which filtering can be done. The **Operators** column lists the filter operator values which are valid for the field. The **Value** column describes the value expected for the field.

**Field** | **Operators** | **Value** |
---- | ---- | ---- |
RecModified |"Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. |
AttributeSetId | "Equal", "Contains" | Any valid GUID value representing an attribute set identifier for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |
AttributeSetCode | "Equal", "Contains" | Any valid string value representing an attribute set code for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |

## Request sorts {#RequestSorts}

The information returned is automatically sorted by the **RecModified** field *ascending*. No other sorts can be requested.

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
<span class="api-gn">Response: AttributeSets</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
AttributeSetId | string, guid | A unique identifier of the attribute set. |
Code | string | A code identifying the attribute set.<span class="ir">??????????</span>
Description | string | A description of the attribute set. |
Alias | string | An alias (alternate identifier)<span class="ir">??????????</span> for the attribute set. |
Position | int32 | <span class="ir">??????????</span> |
HasValues | boolean | An indicator as to whether or not the attribute set contains values in the **AttributeSetValues** array.<span class="ir">??????????</span> |
Required | boolean | An indicator as to whether or not the arritbute set is required.<span class="ir">??????????</span> |
<span class="api-gn">Response: AttributeSets: AttributeSetValues</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
AttributeSetValueId | string, guid | A unique identifier of the attribute set value. |
SetCode | string | An identifier of the attribute set.<span class="ur">?????????</span> |
Key | int32 | <span class="ur">?????????</span> |
Order | int32 | <span class="ur">?????????</span> |
Value | string | The value. <span class="ur">?????????</span> |
UpperValue | string | <span class="ur">?????????</span> |
QuantityWeight | double | <span class="ur">?????????</span> |
Alias | string | The first alias (additional identifer) of the attribute set value.<span class="ur">?????????</span> |
Alias2 | string | The second alias (additional identifer) of the attribute set value.<span class="ur">?????????</span> |
RValue | int32 | <span class="ur">?????????</span> |
GValue | int32 | <span class="ur">?????????</span> |
BValue | int32 | <span class="ur">?????????</span> |
SortOrder | int32 | The order the attribute set value appears in the UI. <span class="ur">?????????</span> |
Volume | string, enum | An indicator of the attribute set value's volume.<span class="ur">?????????</span> Its value must be one of the following: "None", "VeryLow","Low", "Medium", "High", "VeryHigh". |
Segment | string | <span class="ur">?????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: AttributeSets: AttributeSetValues</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: AttributeSets</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response</span> |

### Schema {#SuccessfulResponseSchema}
 
Below is the JSON source for the schema of a successful response to the export request as described above.

~~~
{
      "AttributeSetExportToJson_get.ApiDocumentType":{
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
               "$ref":"#/definitions/AttributeSetExportToJson_get.ResponseType"
            }
         }
      },
      "AttributeSetExportToJson_get.ResponseType":{
         "type":"object",
         "properties":{
            "AttributeSets":{
               "type":"array",
               "items":{
                  "$ref":"#/definitions/AttributeSetExportToJson_get.AttributeSetsType"
               }
            }
         }
      },
      "AttributeSetExportToJson_get.AttributeSetsType":{
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
            "AttributeSetId":{
               "format":"uuid",
               "type":"string",
               "example":"00000000-0000-0000-0000-000000000000"
            },
            "Code":{
               "type":"string"
            },
            "Description":{
               "type":"string"
            },
            "Alias":{
               "type":"string"
            },
            "Position":{
               "format":"int32",
               "type":"integer"
            },
            "HasValues":{
               "type":"boolean"
            },
            "Required":{
               "type":"boolean"
            },
            "AttributeSetValues":{
               "$ref":"#/definitions/AttributeSetExportToJson_get.AttributeSetValuesType"
            }
         }
      },
      "AttributeSetExportToJson_get.AttributeSetValuesType":{
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
            "AttributeSetValueId":{
               "format":"uuid",
               "type":"string",
               "example":"00000000-0000-0000-0000-000000000000"
            },
            "SetCode":{
               "type":"string"
            },
            "Key":{
               "format":"int32",
               "type":"integer"
            },
            "Order":{
               "format":"int32",
               "type":"integer"
            },
            "Value":{
               "type":"string"
            },
            "UpperValue":{
               "type":"string"
            },
            "QuanityWeight":{
               "format":"double",
               "type":"number"
            },
            "Alias":{
               "type":"string"
            },
            "Alias2":{
               "type":"string"
            },
            "RValuer":{
               "format":"int32",
               "type":"integer"
            },
            "GValue":{
               "format":"int32",
               "type":"integer"
            },
            "BValue":{
               "format":"int32",
               "type":"integer"
            },
            "SortOrder":{
               "format":"int32",
               "type":"integer"
            },
            "Volume":{
               "enum":[
                  "None",
                  "VeryLow",
                  "Low",
                  "Medium",
                  "High",
                  "VeryHigh"
               ],
               "type":"string"
            },
            "Segment":{
               "type":"string"
            }
         }
      }
   }
}
~~~

---

## Request Example(s) {#RequestExamples}

**Request Example #1: RecModified > '2018-06-06T10:07:12' and AttributeSetId = '37c26b39-842a-4700-88e0-3b481fcfc686'**

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
            },
            {
               "Field":"AttributeSetId",
               "Operator":"Equal",
               "Value":"37c26b39-842a-4700-88e0-3b481fcfc686"
            }
         ],
         "SortDescriptions":[
            {
          
               "Name":"RecModified",
               "Direction":"Ascending",
            }
         ],
         "Top":10,
         "Skip":0
      }
   }
}
~~~

**Request Example #2: AttributeSetId = '2166921E-BEDA-4EFB-812F-75C31E69DB7B'**

~~~
{
   "Source":"Integrator",
   "Data":{
      "ApiDocumentId":"43d466dc-90df-45b2-81f9-d49a23345d51",
      "Request":{  
         "Filters":[
            {
               "Field":"AttributeSetId",
               "Operator":"Equal",
               "Value":"2166921E-BEDA-4EFB-812F-75C31E69DB7B"
            }
         ],
         "SortDescriptions":[
            {
               "Direction":"Ascending",
               "Name":"RecModified"
            }
         ],
         "Top":1,
         "Skip":0
      }
   }
}
~~~

---

## Response Example(s) {#ResponseExamples}

**Response Example #1: In Process**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'attributeset-export' rather than 'attributeset'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

~~~
{  "Id": "9853dc5a-e1d7-4959-b584-c5a7a2d3fea9",  "Status": "InProcess",  "ApiType": "attributeset-export",  "Source": "Integrator"}
~~~

**Response Example #2: Error**

~~~
{
  "Message": "The request is invalid.",
  "ModelState": {
    "apiRequest.Data.Request.Filters[0].Operator": [
      "Error converting value \"Greater\" to type 'Teamwork.AdminServer.Api.Services.Controller.OperatorElementType'. Path 'Data.Request.Filters[0].Operator', line 15, position 35."
    ]
  }
}
~~~

**Response Example #3: Success when requesting AttributeSetId = '2166921E-BEDA-4EFB-812F-75C31E69DB7B'**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'attributeset-export' rather than 'attributeset'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"FF70871F-F5AB-4154-9985-FF3E8B07CD29",
      "Status":"Successful",
      "ApiRequestType":"attributeset-export",
      "TotalRecords":1,
      "RecordsCount":1,
      "ElapsedTime":"00:00:00.0133333",
      "StartDateTime":"2019-06-26T13:39:55.220",
      "EndDateTime":"2019-06-26T13:39:55.233",
      "Response":{
         "AttributeSets":[
            {
               "RecCreated":"2012-07-30T19:38:04.017",
               "RecModified":"2019-05-08T19:56:09.613",
               "AttributeSetId":"2166921E-BEDA-4EFB-812F-75C31E69DB7B",
               "Code":"MTOPSIZE",
               "Description":"Mens Top Size",
               "Alias":"Mens Top Size",
               "Position":0,
               "HasValues":true,
               "Required":true,
               "AttributeSetValues":[
                  {
                     "RecCreated":"2012-07-30T19:54:00.797",
                     "RecModified":"2012-07-30T19:54:00.797",
                     "AttributeSetValueId":"6E4DA5BC-68F8-4F76-A328-52BAD023F278",
                     "SetCode":"MTOPSIZE",
                     "Key":302,
                     "Order":500,
                     "Value":"M",
                     "UpperValue":"M",
                     "QuanityWeight":1.00000000000000000000,
                     "Alias":"",
                     "Alias2":"",
                     "RValue":0,
                     "GValue":0,
                     "BValue":0,
                     "SortOrder":0,
                     "Volume":"None"
                  },
                  {
                     "RecCreated":"2012-07-30T19:54:00.797",
                     "RecModified":"2012-07-30T19:54:00.797",
                     "AttributeSetValueId":"5C5E0E1E-4BA6-4185-A36D-588A5CC6A243",
                     "SetCode":"MTOPSIZE",
                     "Key":301,
                     "Order":400,
                     "Value":"L",
                     "UpperValue":"L",
                     "QuanityWeight":1.00000000000000000000,
                     "Alias":"",
                     "Alias2":"",
                     "RValue":0,
                     "GValue":0,
                     "BValue":0,
                     "SortOrder":0,
                     "Volume":"None"
                  },
                  {
                     "RecCreated":"2012-07-30T19:54:00.813",
                     "RecModified":"2012-07-30T19:54:00.813",
                     "AttributeSetValueId":"C9C28AB9-3EAB-4AB1-8E12-6C906F193FAC",
                     "SetCode":"MTOPSIZE",
                     "Key":304,
                     "Order":700,
                     "Value":"XL",
                     "UpperValue":"XL",
                     "QuanityWeight":1.00000000000000000000,
                     "Alias":"",
                     "Alias2":"",
                     "RValue":0,
                     "GValue":0,
                     "BValue":0,
                     "SortOrder":0,
                     "Volume":"None"
                  },
                  {
                     "RecCreated":"2012-07-30T19:54:00.797",
                     "RecModified":"2012-07-30T19:54:00.797",
                     "AttributeSetValueId":"B803BDEF-90EE-4A27-A23C-87BD84D00380",
                     "SetCode":"MTOPSIZE",
                     "Key":298,
                     "Order":100,
                     "Value":"2XL",
                     "UpperValue":"2XL",
                     "QuanityWeight":1.00000000000000000000,
                     "Alias":"",
                     "Alias2":"",
                     "RValue":0,
                     "GValue":0,
                     "BValue":0,
                     "SortOrder":0,
                     "Volume":"None"
                  },
                  {
                     "RecCreated":"2012-07-30T19:54:00.797",
                     "RecModified":"2012-07-30T19:54:00.797",
                     "AttributeSetValueId":"AFCF7EE3-F1C5-49B9-931C-9E4EDD47245B",
                     "SetCode":"MTOPSIZE",
                     "Key":299,
                     "Order":200,
                     "Value":"3XL",
                     "UpperValue":"3XL",
                     "QuanityWeight":1.00000000000000000000,
                     "Alias":"",
                     "Alias2":"",
                     "RValue":0,
                     "GValue":0,
                     "BValue":0,
                     "SortOrder":0,
                     "Volume":"None"
                  },
                  {
                     "RecCreated":"2012-07-30T19:54:00.813",
                     "RecModified":"2012-07-30T19:54:00.813",
                     "AttributeSetValueId":"ACAFFA7D-5FD6-4ECF-A438-9ECCCF56E0FB",
                     "SetCode":"MTOPSIZE",
                     "Key":303,
                     "Order":600,
                     "Value":"S",
                     "UpperValue":"S",
                     "QuanityWeight":1.00000000000000000000,
                     "Alias":"",
                     "Alias2":"",
                     "RValue":0,
                     "GValue":0,
                     "BValue":0,
                     "SortOrder":0,
                     "Volume":"None"
                  },
                  {
                     "RecCreated":"2012-07-30T19:54:00.797",
                     "RecModified":"2012-07-30T19:54:00.797",
                     "AttributeSetValueId":"42EBA308-8018-445B-99D8-D1489C46A9E4",
                     "SetCode":"MTOPSIZE",
                     "Key":300,
                     "Order":300,
                     "Value":"4XL",
                     "UpperValue":"4XL",
                     "QuanityWeight":1.00000000000000000000,
                     "Alias":"",
                     "Alias2":"",
                     "RValue":0,
                     "GValue":0,
                     "BValue":0,
                     "SortOrder":0,
                     "Volume":"None"
                  },
                  {
                     "RecCreated":"2013-11-01T10:04:50.260",
                     "RecModified":"2013-11-01T10:04:50.260",
                     "AttributeSetValueId":"68E264F7-8A0F-4D1E-A4C4-F5610AFE72CA",
                     "SetCode":"MTOPSIZE",
                     "Key":361,
                     "Order":701,
                     "Value":"kjhkjhjkh",
                     "UpperValue":"",
                     "QuanityWeight":1.00000000000000000000,
                     "Alias":"",
                     "Alias2":"",
                     "RValue":0,
                     "GValue":0,
                     "BValue":0,
                     "SortOrder":0,
                     "Volume":"None"
                  }
               ]
            }
         ]
      }
   }
}
~~~
