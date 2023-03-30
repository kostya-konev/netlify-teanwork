---
title: "Action Tracking Export [6.41]"
date: 2022-09-13T08:19:00-05:00
draft: false
weight: 0320
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

This topic describes the **Action Tracking Export** API which is used to export <span class="ir">?????????? what ??????????</span> from CHQ.

See [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for a description on how export requests are made and on the standard request and response formats used. The API-Specific successful response format for this API will be described below.

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/action-tracking**  
Asynchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/action-tracking/async**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

## Request settings {#RequestSettings}

Below are the settings which can be supplied in the **Settings** group of the export request to define which value (field) is to be used for a particular value class (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Key** column lists the names of the available settings. The **Supported Values** column lists the valid values which can be supplied for the setting. The **Default** column lists the default value for each setting if that setting is not supplied.

**Key** | **Supported Values** | **Default** | **Description** |
---- | ---- | ---- | ---- |
LocationIdentifierSetting | ExternalIdCode, Code,ExternalId, No, TeamworkId | ExternalIdCode | An indicator of which value is to be used to identify locations. |
EmployeeIdentifierSetting | LoginName, FullName, TeamworkId | TeamworkId | An indicator of which value is to be used to identify employees. |
DeviceIdentifierSetting | DeviceId, DeviceUniqueId, LocationDeviceCode, TeamworkId | LocationDeviceCode | An indicator of which value is to be used to identify devices. |
WorkstationIdentifierSetting | Code, Name, TeamworkId | Code | An indicator of which value is to be used to identify workstations. |

## Request filters {#RequestFilters}

Below are the filters which can be defined in the **Filters** group of the export request (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Field** column lists the names of the fields on which filtering can be done. The **Operators** column lists the filter operator values which are valid for the field. The **Value** column describes the value expected for the field.

**Field** | **Operators** | **Value** |
---- | ---- | ---- |
RecModified |"Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. Note that a *RecModified* filter refers to the greatest **RecModified** value over all of a style's child objects. |
ActionsTrackingId | "Equal", "Contains" | Any valid GUID value representing an actions tracking identifier for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |
Action | "Equal", "Contains" | Any valid string value representing an action for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |

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
<span class="api-gn">Response: ActionsTracking</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was last streamed to the server. |
ActionTrackingId | string, guid | A unique identifier of the action.<span class="ir">??????????</span> |
ObjectId | string, guid | A unique identifier of <span class="ir">??????????</span> |
Action | string | An identifier of the action.<span class="ir">??????????</span> |
DocumentType | string | <span class="ir">??????????</span> |
EmployeeIdentifier | string | An identifier of the employee who performed the action. |
LocationIdentifier | string | An identifier of the location where the action took place. |
WorkstationIdentifier | string | An identifier of the workstation on which the action took place. |
DeviceIdentifier | string | An identifier of the device on which the action took place. |
DetailedInfo | string | <span class="ir">??????????</span> |
ActionDate | string, datetime | A timestamp of when the action took place.|
Application | string | <span class="ir">??????????</span> |
Reason | string | A description of the reason the action was performed.<span class="ir">??????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: ActionsTracking</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response</span> |

### Schema {#SuccessfulResponseSchema}
 
Below is the JSON source for the schema of a successful response to the export request as described above.

~~~
{
   "ActionTrackingExportToJson_get.ApiDocumentType":{
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
            "$ref":"#/definitions/ActionTrackingExportToJson_get.ResponseType"
         }
      }
   },
   "ActionTrackingExportToJson_get.ResponseType":{
      "type":"object",
      "properties":{
         "ActionsTrackings":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/ActionTrackingExportToJson_get.ActionsTrackingsType"
            }
         }
      }
   },
   "ActionTrackingExportToJson_get.ActionsTrackingsType":{
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
         "StreamingDate":{
            "format":"date-time",
            "type":"string"
         },
         "ActionTrackingID":{
            "format":"uuid",
            "type":"string",
            "example":"00000000-0000-0000-0000-000000000000"
         },
         "ObjectId":{
            "format":"uuid",
            "type":"string",
            "example":"00000000-0000-0000-0000-000000000000"
         },
         "Action":{
            "type":"string"
         },
         "DocumentType":{
            "type":"string"
         },
         "EmployeeIdentifier":{
            "type":"string"
         },
         "LocationIdentifier":{
            "type":"string"
         },
         "WorkstationIdentifier":{
            "type":"string"
         },
         "DeviceIdentifier":{
            "type":"string"
         },
         "DetailedInfo":{
            "type":"string"
         },
         "ActionDate":{
            "format":"date-time",
            "type":"string"
         },
         "Application":{
            "type":"string"
         },
         "Reason":{
            "type":"string"
         }
      }
   }
}
~~~

---

## Request Example(s) {#RequestExamples}

**Request Example #1: RecModified = '2019-07-15T15:44:42.570'**

~~~
{
  "Source":"Source",
  "Data":{
    "Request":{
      "Settings":[
        {
          "Key":"LocationIdentifierSetting",
          "Value":"ExternalIdCode"
        },
        {
          "Key":"EmployeeIdentifierSetting",
          "Value":"LoginName"
        },
        {
          "Key":"DeviceIdentifierSetting",
          "Value":"LocationDeviceCode"
        },
        {
          "Key":"WorkstationIdentifierSetting",
          "Value":"Code"
        }
      ],
      "Filters":[
        {
          "Field":"RecModified",
          "Operator":"Equal",
          "Value":"2019-07-15T15:44:42.570"
        }
      ],
      "SortDescriptions":[
        {
          "Name":"RecModified",
          "Direction":"Ascending"
        }
      ],
      "Top":20,
      "Skip":0
    }
  }
}
~~~

---

## Response Example(s) {#ResponseExamples}

**Response Example #1: In Process**


<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'adjustmen-export' rather than 'action-tracking'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

~~~
{  "Id": "37c26b39-842a-4700-88e0-3b481fcfc686",  "Status": "InProcess",  "ApiType": "adjustmen-export",  "Source": "1111"}
~~~

**Response Example #2: Error**

~~~
{  "Message": "The request is invalid.",  "ModelState": {    "apiRequest.Data.Request.Filters[0].Value": [      "After parsing a value an unexpected character was encountered: S. Path 'Data.Request.Filters[0].Value', line 18, position 7.",      "After parsing a value an unexpected character was encountered: S. Path 'Data.Request.Filters[0].Value', line 18, position 7.",      "After parsing a value an unexpected character was encountered: S. Path 'Data.Request.Filters[0].Value', line 18, position 7.",      "After parsing a value an unexpected character was encountered: S. Path 'Data.Request.Filters[0].Value', line 18, position 7.",      "After parsing a value an unexpected character was encountered: S. Path 'Data.Request.Filters[0].Value', line 18, position 7."    ]  }}
~~~

**Response Example #3: Success when requesting RecModified = '2019-11-28T10:21:57.697'**


<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'action-tracking-export' rather than 'action-tracking'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

~~~
 {
  "ApiDocument":{
    "ApiDocumentId":"991B268F-DCA5-4D78-A7E1-D86D84B0DAA6",
    "Status":"Successful",
    "ApiRequestType":"action-tracking-export",
    "TotalRecords":1,
    "RecordsCount":1,
    "ElapsedTime":"00:00:00.1333333",
    "StartDateTime":"2019-11-28T15:36:25.490",
    "EndDateTime":"2019-11-28T15:36:25.623",
    "Response":{
      "ActionTrackings":[
        {
          "RecCreated":"2019-11-28T10:21:57.697",
          "RecModified":"2019-11-28T10:21:57.697",
          "StreamingDate":"2019-11-28T10:21:57.697",
          "ActionTrackingID":"A149A1B3-5F95-416A-9D6B-25F62BDE7653",
          "ObjectId":"62955859-ECBE-4284-B77C-8487FB1FD670",
          "Action":"Login",
          "EmployeeIdentifier":"ROOT",
          "DetailedInfo":"<Employee xmlns:xsd=\"http:\/\/www.w3.org\/2001\/XMLSchema\" xmlns:xsi=\"http:\/\/www.w3.org\/2001\/XMLSchema-instance\"><EmployeeID>62955859-ecbe-4284-b77c-8487fb1fd670<\/EmployeeID><EmployeeNum>2<\/EmployeeNum><LoginName>ROOT<\/LoginName><LastName>ROOT<\/LastName><FirstName>ROOT<\/FirstName><Universal>1<\/Universal><Active>1<\/Active><IsManager>0<\/IsManager><DiscRequireAuthCode>1<\/DiscRequireAuthCode><LastLoginDate>2019-11-28T10:21:57.6719026Z<\/LastLoginDate><\/Employee>",
          "ActionDate":"2019-11-28T12:21:57.677",
          "Application":"CloudHQ"
        }
      ]
    }
  }
}
~~~
