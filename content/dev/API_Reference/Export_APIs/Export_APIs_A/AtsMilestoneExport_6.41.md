---
title: "ATS Milestone Export [6.41]"
date: 2022-09-13T10:36:00-05:00
draft: false
weight: 2019
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

This topic describes the **ATS Milestone Export** API which is used to export available to sell milestones <span class="ir">??????????</span> from CHQ.

See [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for a description on how export requests are made and on the standard request and response formats used. The API-Specific successful response format for this API will be described below.

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/EcAtsMilestone**  
Asynchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/EcAtsMilestone/async**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

## Request settings {#RequestSettings}

Below are the settings which can be supplied in the **Settings** group of the export request to define which value (field) is to be used for a particular value class (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Key** column lists the names of the available settings. The **Supported Values** column lists the valid values which can be supplied for the setting. The **Default** column lists the default value for each setting if that setting is not supplied.

**Key** | **Supported Values** | **Default** | **Description** |
---- | ---- | ---- | ---- |
ItemIdentifierSetting | PLU, ExternalId, CLU, UPC, TeamworkId | PLU | An indicator of which value is to be used to identify items. |
LocationIdentifierSetting | ExternalIdCode, Code, ExternalId, No, TeamworkId | ExternalIdCode | An indicator of which value is to be used to identify locations. |

## Request filters {#RequestFilters}

Below are the filters which can be defined in the **Filters** group of the export request (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Field** column lists the names of the fields on which filtering can be done. The **Operators** column lists the filter operator values which are valid for the field. The **Value** column describes the value expected for the field.

**Field** | **Operators** | **Value** |
---- | ---- | ---- |
RecModified | "Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. |
ItemIdentifier | "Equal", "Contains" | The identifier of the item for which the ATS information is being exported. This identifier can be a PLU, an ExternalId, a CLU, a UPC, or a TeamworkId depending on the **ItemIdentifierSetting** value. |
LocationIdentifier | "Equal", "Contains" | The identifier of the location for which the ATS information is being exported. This identifier can be an ExternalIdCode, a Code, an ExternalId, a No (number), or a TeamworkId depending on the **LocationIdentifierSetting** value. |

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
<span class="api-gn">Response: Quantities</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
ItemIdentifier | string | An identifier of the item. |
LocationIdentifier | string | An identifier of the location where the item was purchased. |
ModifiedDate | string, datetime | A timestamp of when the item's ATS was last modified. |
Ats | double | The current available to sell quantity for the item. |
<span class="api-gs">---</span> |  | <span class="api-gde">end of Response: Quantities</span> |
<span class="api-gs">---</span> |  | <span class="api-gde">end of Response</span> |

### Schema {#SuccessfulResponseSchema}
 
Below is the JSON source for the schema of a successful response to the export request as described above.

~~~
{
    "ATSMilestoneExportToJson_get.ApiDocumentType": {
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
          "$ref": "#/definitions/ATSMilestoneExportToJson_get.ResponseType"
        }
      }
    },
    "ATSMilestoneExportToJson_get.ResponseType": {
      "type": "object",
      "properties": {
        "Quantities": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/ATSMilestoneExportToJson_get.QuantitiesType"
          }
        }
      }
    },
    "ATSMilestoneExportToJson_get.QuantitiesType": {
      "type": "object",
      "properties": {
        "ItemIdentifier": {
          "type": "string"
        },
        "LocationIdentifier": {
          "type": "string"
        },
        "ModifiedDate": {
          "format": "date-time",
          "type": "string"
        },
        "Ats": {
          "format": "double",
          "type": "number"
        }
      }
    }
}
~~~

---

## Request Example(s) {#RequestExamples}

**Request Example #1:**

<span class="ir">?????????? The below example provided by the developers seems to be a generic request format example NOT an API-specific request example. ?????????</span>

~~~
{
  "Source": "string",
  "Data": {
    "Request": {
      "Settings": [
        {
          "Value": "string",
          "Key": "string"
        }
      ],
      "Filters": [
        {
          "Field": "string",
          "Operator": "Equal",
          "Value": "string"
        }
      ],
      "SortDescriptions": [
        {
          "Name": "string",
          "Direction": "Ascending"
        }
      ],
      "Top": 0,
      "Skip": 0
    }
  },
  "CommunicationId": "00000000-0000-0000-0000-000000000000"
}
~~~

---

## Response Example(s) {#ResponseExamples}

**Response Example #1: In Process**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'ec-ats-milestone-export' rather than 'EcAtsMilestone'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

~~~
{  "Id": "486feb43-f7ca-4e6e-8898-ce1932104a41",  "Status": "InProcess",  "ApiType": "ec-ats-milestone-export",  "Source": "string"}
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

**Response Example #3: Success**

~~~
{
  "ApiDocumentId": "00000000-0000-0000-0000-000000000000",
  "Status": "Successful",
  "ApiRequestType": "string",
  "TotalRecords": 0,
  "RecordsCount": 0,
  "ElapsedTime": "2022-07-13T12:05:33.114Z",
  "StartDateTime": "2022-07-13T12:05:33.114Z",
  "EndDateTime": "2022-07-13T12:05:33.114Z",
  "Response": {
    "Quantities": [
      {
        "ItemIdentifier": "00000000-0000-0000-0000-000000000000",
        "LocationIdentifier": "00000000-0000-0000-0000-000000000000",
        "ModifiedDate": "2022-07-13T12:05:33.114Z",
        "Ats": 0
      }
    ]
  }
}
~~~
