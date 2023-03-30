---
title: "Custom Field Export API [6.41]"
date: 2022-09-14T09:48:00-05:00
draft: false
weight: 1519
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

This topic describes the **Custom Field Export** API (also refered to as **Custom Label Export**) which is used to export custom field information from CHQ.

See [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for a description on how export requests are made and on the standard request and response formats used. The API-Specific successful response format for this API will be described below.

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/customfield**  
Asynchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/customfield/async**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

In the Swagger UI the **/chqapi/export/customfield** endpoint is a member of the **Settings** endpoint group.

## Request settings {#RequestSettings}

Below are the settings which can be supplied in the **Settings** group of the export request to define which value (field) is to be used for a particular value class (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Key** column lists the names of the available settings. The **Supported Values** column lists the valid values which can be supplied for the setting. The **Default** column lists the default value for each setting if that setting is not supplied.

**Key** | **Supported Values** | **Default** | **Description** |
---- | ---- | ---- | ---- |
LocationIdentifierSetting | ExternalIdCode, Code, ExternalId, No, TeamworkId |
ExternalIdCode | An indicator of which value is to be used to identify locations. |
CustomAreaIdentifierSetting | No, Name, TeamworkId | No | An indicator of which value is to be used to identify custom areas. |

## Request filters {#RequestFilters}

Below are the filters which can be defined in the **Filters** group of the export request (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Field** column lists the names of the fields on which filtering can be done. The **Operators** column lists the filter operator values which are valid for the field. The **Value** column describes the value expected for the field.

**Field** | **Operators** | **Value** |
---- | ---- | ---- |
RecModified | "Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. |
IsDeleted | "Equal" | Any valid boolean value. |
AreaNum | "Greater than or equal", "Less than or equal", "Equal" | Any valid integer value representing an area number. |
CustomFieldType | "Equal", "Contains" | Any of the following field type strings for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. The valid types are: "Text", "Date", "Integer", "Decimal", "Flag", "Lookup", "LongText", or "Multiselect". |
Used | "Greater than or equal", "Less than or equal", "Equal" | Any valid integer value  representing Used.<span class="ir">?????????? What does this mean? ??????????</span> |

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
<span class="api-gn">Response: CustomFields</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
CustomFieldsControlId | string, guid | A unique identifier of <span class="ir">??????????</span> |
IsDeleted | boolean | An indicator as to whether or not the record has been deleted. <span class="ir">??????????</span> |
CustomAreaIdentifier | string | An identifier of a custom area. <span class="ir">??????????</span> |
CustomFieldType | string, enum | An indicator of the custom field’s type. Its value must be one of the following: "Text", "Date", "Integer", "Decimal", "Flag", "Lookup", "LongText", "Multiselect". |
CustomFieldNumber | int32 | <span class="ir">??????????</span> |
Language | int32 | <span class="ir">??????????</span> |
Used | int32 | <span class="ir">??????????</span> |
Label | string | <span class="ir">??????????</span> |
DefaultLabel | string | <span class="ir">??????????</span> |
AllowModify | boolean | An indicator as to whether or not this field can be modified. <span class="ir">??????????</span> |
ListOrder | int32 | An indicator of the order (position) where the field will appear in the UI.<span class="ir">??????????</span> |
Alias | string | <span class="ir">??????????</span> |
LocationIdentifier | string | An identifier of the location to which the field applies.<span class="ir">??????????</span> |
IsRecRetired | boolean | An indicator as to whether or not <span class="ir">??????????</span> |
Required | boolean |An indicator as to whether or not the filed is required. <span class="ir">??????????</span> |
<span class="api-gn">Response: CustomFields: CustomLookups</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
LookupId | string, guid | A unique identifier of <span class="ir">??????????</span> |
IsDeleted | boolean | An indicator as to whether or not the record has been deleted. |
Name | boolean | An indicator as to whether or not <span class="ir">??????????</span> |
Alias | boolean | An indicator as to whether or not <span class="ir">??????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: CustomFields: CustomLookups</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: CustomFields</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response</span> |

### Schema {#SuccessfulResponseSchema}
 
Below is the JSON source for the schema of a successful response to the export request as described above.

~~~
{
   "CustomFieldExportToJson_get.ApiDocumentType":{
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
            "$ref":"#/definitions/CustomFieldExportToJson_get.ResponseType"
         }
      }
   },
   "CustomFieldExportToJson_get.ResponseType":{
      "type":"object",
      "properties":{
         "CustomFields":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/CustomFieldExportToJson_get.CustomFieldsType"
            }
         }
      }
   },
   "CustomFieldExportToJson_get.CustomFieldsType":{
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
         "CustomFieldsControlId":{
            "format":"uuid",
            "type":"string",
            "example":"00000000-0000-0000-0000-000000000000"
         },
         "IsDeleted":{
            "type":"boolean"
         },
         "CustomAreaIdentifier":{
            "type":"string"
         },
         "CustomFieldType":{
            "enum":[
               "Text",
               "Date",
               "Integer",
               "Decimal",
               "Flag",
               "Lookup",
               "LongText",
               "Multiselect"
            ],
            "type":"string"
         },
         "CustomFieldNumber":{
            "format":"int32",
            "type":"integer"
         },
         "Language":{
            "format":"int32",
            "type":"integer"
         },
         "Used":{
            "format":"int32",
            "type":"integer"
         },
         "Label":{
            "type":"string"
         },
         "DefaultLabel":{
            "type":"string"
         },
         "AllowModify":{
            "type":"boolean"
         },
         "ListOrder":{
            "format":"int32",
            "type":"integer"
         },
         "Alias":{
            "type":"string"
         },
         "LocationIdentifier":{
            "type":"string"
         },
         "IsRecRetired":{
            "type":"boolean"
         },
         "Required":{
            "type":"boolean"
         },
         "CustomLookups":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/CustomFieldExportToJson_get.CustomLookupsType"
            }
         }
      }
   },
   "CustomFieldExportToJson_get.CustomLookupsType":{
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
         "LookupId":{
            "format":"uuid",
            "type":"string",
            "example":"00000000-0000-0000-0000-000000000000"
         },
         "IsDeleted":{
            "type":"boolean"
         },
         "Name":{
            "type":"boolean"
         },
         "Alias":{
            "type":"boolean"
         }
      }
   }
}
~~~

---

## Request Example(s) {#RequestExamples}

**Request Example #1: RecModified = '2019-10-02T08:34:36.850'**

~~~
{
  "Source":"Integrator",
  "Data":{
    "ApiDocumentId":"907B65C7-8F2C-45FB-AEB2-68C5577D6162",
    "Request":{
      "Settings":[
        {
          "Key":"LocationIdentifierSetting",
          "Value":"ExternalIdCode"
        },
        {
          "Key":"CustomAreaIdentifierSetting",
          "Value":"No"
        }
      ],
      "Filters":[
        {
          "Field":"RecModified",
          "Operator":"Equal",
          "Value":"2019-10-02T08:34:36.850"
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
{  "Id": "486feb43-f7ca-4e6e-8898-ce1932104a41",  "Status": "InProcess",  "ApiType": "customfield-export",  "Source": "string"}
~~~

**Response Example #2: Error**

~~~
{
  "Message": "An error has occurred.",
  "ExceptionMessage": "Conversion failed when converting the ****** value '******' to data type ******.",
  "ExceptionType": "Teamwork.AdminServer.Api.Services.Controller.ChqApiControllerException",
  "StackTrace": null
}
~~~

**Response Example #3: Success when requesting RecModified = '2019-10-02 08:34:36.850'**

~~~
 {
  "ApiDocument":{
    "ApiDocumentId":"7077B71F-8C41-45BD-B8C4-36DD3250B3C1",
    "Status":"Successful",
    "ApiRequestType":"customfield-export",
    "TotalRecords":1,
    "RecordsCount":1,
    "ElapsedTime":"00:00:00.0300000",
    "StartDateTime":"2020-01-14T11:07:17.940",
    "EndDateTime":"2020-01-14T11:07:17.970",
    "Response":{
      "CustomFields":[
        {
          "RecCreated":"2015-01-22T18:20:47.107",
          "RecModified":"2019-10-02T08:34:36.850",
          "CustomFieldsControlId":"4818F49D-CBEB-4E49-8669-003DB33042F4",
          "IsDeleted":false,
          "CustomAreaIdentifier":"22",
          "CustomFieldType":"Lookup",
          "CustomFieldNumber":6,
          "Language":0,
          "Used":3,
          "Label":"",
          "DefaultLabel":"Custom Lookup 6",
          "AllowModify":false,
          "ListOrder":0,
          "IsRecRetired":false,
          "Required":false,
          "CustomLookups":[
            {
              "RecCreated":"2017-06-07T14:36:47.343",
              "RecModified":"2017-06-07T14:36:47.343",
              "LookupId":"64CA4E86-2729-4355-9604-22A12DD858E4",
              "IsDeleted":false,
              "Name":"2"
            },
            {
              "RecCreated":"2019-09-27T09:06:10.140",
              "RecModified":"2019-09-27T09:06:10.140",
              "LookupId":"7934BBA2-D42D-4EF1-898E-6DC8412BBBC0",
              "IsDeleted":false,
              "Name":"v1"
            },
            {
              "RecCreated":"2017-06-07T14:36:47.343",
              "RecModified":"2017-06-07T14:36:47.343",
              "LookupId":"220D62EC-ED5F-402D-A2F4-9D1EFF595696",
              "IsDeleted":false,
              "Name":"1"
            }
          ]
        }
      ]
    }
  }
}
~~~
