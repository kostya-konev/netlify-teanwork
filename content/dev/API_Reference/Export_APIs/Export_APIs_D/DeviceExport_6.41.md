---
title: "Device Export API [6.41]"
date: 2022-09-15T08:25:00-05:00
draft: false
weight: 0522
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

This topic describes the **Device Export** API which is used to export device information from CHQ.

See [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for a description on how export requests are made and on the standard request and response formats used. The API-Specific successful response format for this API will be described below.

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/device**  
Asynchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/device/async**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

In the Swagger UI the **/chqapi/export/device** endpoint is a member of the **Settings** endpoint group.

## Request settings {#RequestSettings}

Below are the settings which can be supplied in the **Settings** group of the export request to define which value (field) is to be used for a particular value class (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Key** column lists the names of the available settings. The **Supported Values** column lists the valid values which can be supplied for the setting. The **Default** column lists the default value for each setting if that setting is not supplied.

**Key** | **Supported Values** | **Default** | **Description** |
---- | ---- | ---- | ---- |
ShopperDisplayGroupIdentifierSetting | Code, Name, TeamworkId | Code | An indicator of which value is to be used to identify shopper display groups. |
LocationIdentifierSetting | ExternalIdCode, Code, ExternalId, No, TeamworkId | ExternalIdCode | An indicator of which value is to be used to identify locations. |
WorkstationIdentifierSetting | Code, Name, TeamworkId | Code | An indicator of which value is to be used to identify workstations. |

## Request filters {#RequestFilters}

Below are the filters which can be defined in the **Filters** group of the export request (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Field** column lists the names of the fields on which filtering can be done. The **Operators** column lists the filter operator values which are valid for the field. The **Value** column describes the value expected for the field.

**Field** | **Operators** | **Value** |
---- | ---- | ---- |
RecModified |"Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. |
DeviceId | "Equal", "Contains" | Any valid GUID value representing a device identifier for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |
DeviceName | "Equal", "Contains" | Any valid GUID value representing a device name for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |
IsDeleted | "Equal" | Any valid boolean indicator. |
DeviceNo | "Greater than or equal", "Less than or equal", "Equal" | Any valid integer value representing a device number. |
LocationId | "Equal", "Contains" | Any valid GUID value representing a location for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |

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
<span class="api-gn">Response: Devices</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
DeviceId | string, guid | A unique identifier of the device. |
DeviceNo | int32 | An identifier number of the device. |
IsDeleted | boolean | An indicator as to whether or not the device record<span class="ir">?????????</span> has been deleted.
DeviceAgentId | string, guid | A unique identifier of  <span class="ir">?????????</span>. |
LocationIdentifier | string | An identifier of the device's location. |
DeviceName | string | The device's name. |
DeviceAlias | string | An alias (alternate name) for the device. |
DeviceType | int32 | An indicator of the device's type. |
PrintServerIP | string | The IP address of the printer to which the device is to be connected. |
ShopperDisplayId | string, guid | A unique identifier of the *shipper display* device to which this device is to be connected. |
IsDeactivated | boolean | An indicator as to whether or not the device has been deactived. |
Notes | string | Misc. notes about the device. |
TechInfo1 - 10 | string | These 10 fields are <span class="ir">?????????</span> |
IPAddress | string | The IP Address of the device. <span class="ir">?????????</span> |
Latitude | double | The latitude of the location of the device. <span class="ir">?????????</span> |
Longitude | double | The longitude of the location of the device. <span class="ir">?????????</span> |
SystemName | string | <span class="ir">?????????</span> |
SystemVersion | string | <span class="ir">?????????</span> |
Model | string | An identifier of the device's model. <span class="ir">?????????</span> |
PrinterPort | string | The port on the device to be used to connect to a printer. <span class="ir">?????????</span> |
ScalesPort | string The port on the device to be used to connect to a weight scale. <span class="ir">?????????</span> |
<span class="api-gn">Response: Devices: MobileApplication</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
MobileApplicationId | string, guid | A unique identifier of <span class="ir">?????????</span>. |
BundleId | string | An identifier of <span class="ir">?????????</span>. |
DisplayName | string | The name of the device to display in the. <span class="ir">?????????</span> |
VersionNo | string | <span class="ir">?????????</span> |
SvsType | int32 | An indicator of the stored value services type. <span class="ir">?????????</span> |
AllowUpdate | boolean | An indicator as to whether or not updates are allowed. <span class="ir">?????????</span> |
LocationSpecificType | int32 | <span class="ir">?????????</span> |
MobileApplicationType | int32 | <span class="ir">?????????</span> |
AltBundleId | boolean | <span class="ir">?????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Devices: MobileApplication</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Devices</span> |
ApplicationVersion | string | <span class="ir">?????????</span> |
FirstLaunchDate | string, datetime | A timestamp of when <span class="ir">?????????</span> |
SvsAuthToken | string | The device's stored value services authorization token. <span class="ir">?????????</span> |
SvsDeviceId | string | <span class="ir">?????????</span> |
LocationDeviceCode | int32 | <span class="ir">?????????</span> |
LastTransactionNo | int64 | An identifier number of the last transaction performed on the device. <span class="ir">?????????</span> |
<span class="api-gn">Response: Devices: ParentDevice</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecModified | string, datetime | A timestamp of when the record was last modified. |
LocationIdentifier | string | An identifier of the parent device's location. <span class="ir">?????????</span> |
DeviceName | string | The name of the parent device. <span class="ir">?????????</span> |
DeviceAlias | string | An alias (alternate name) for the parent device. <span class="ir">?????????</span> |
DeviceNo | int32 | A number identifying the parent device. <span class="ir">?????????</span> |
LocationDeviceCode | int32 | <span class="ir">?????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Devices: ParentDevice</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Devices</span> |
PushLogsToGae | boolean | An indicator as to whther or not <span class="ir">?????????</span> |
GaeLogSeverity | int32 | <span class="ir">?????????</span> |
IsMultiWorkstation | boolean | An indicator as to whether or not <span class="ir">?????????</span> |
CollectNetworkStats | boolean | an indicator as to whether or not network statistics should be collected. <span class="ir">?????????</span> |
WorkstationIdentifier | string | <span class="ir">?????????</span> |
ShoperDisplayGroupIdentifier | string | <span class="ir">?????????</span> |
UpdateScheduledOnDate | string, datetime | A timestamp of when the next update is scheduled to occur. <span class="ir">?????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Devices</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response</span> |


### Schema {#SuccessfulResponseSchema}
 
Below is the JSON source for the schema of a successful response to the export request as described above.

~~~
{
     "DeviceExportToJson_get.ApiDocumentType": {
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
          "$ref": "#/definitions/DeviceExportToJson_get.ResponseType"
        }
      }
    },
    "DeviceExportToJson_get.ResponseType": {
      "type": "object",
      "properties": {
        "Devices": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/DeviceExportToJson_get.DevicesType"
          }
        }
      }
    },
    "DeviceExportToJson_get.DevicesType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "DeviceId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "DeviceNo": {
          "format": "int32",
          "type": "integer"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "DeviceAgentId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "LocationIdentifier": {
          "type": "string"
        },
        "DeviceName": {
          "type": "string"
        },
        "DeviceAlias": {
          "type": "string"
        },
        "DeviceType": {
          "format": "int32",
          "type": "integer"
        },
        "PrintServerIP": {
          "type": "string"
        },
        "PrintServerPort": {
          "type": "string"
        },
        "ShopperDisplayId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeactivated": {
          "type": "boolean"
        },
        "Notes": {
          "type": "string"
        },
        "TechInfo1": {
          "type": "string"
        },
        "TechInfo2": {
          "type": "string"
        },
        "TechInfo3": {
          "type": "string"
        },
        "TechInfo4": {
          "type": "string"
        },
        "TechInfo5": {
          "type": "string"
        },
        "TechInfo6": {
          "type": "string"
        },
        "TechInfo7": {
          "type": "string"
        },
        "TechInfo8": {
          "type": "string"
        },
        "TechInfo9": {
          "type": "string"
        },
        "TechInfo10": {
          "type": "string"
        },
        "IPAddess": {
          "type": "string"
        },
        "Latitude": {
          "format": "double",
          "type": "number"
        },
        "Longitude": {
          "format": "double",
          "type": "number"
        },
        "SystemName": {
          "type": "string"
        },
        "SystemVersion": {
          "type": "string"
        },
        "Model": {
          "type": "string"
        },
        "PrinterPort": {
          "format": "int32",
          "type": "integer"
        },
        "ScalesPort": {
          "format": "int32",
          "type": "integer"
        },
        "MobileApplication": {
          "$ref": "#/definitions/DeviceExportToJson_get.MobileApplicationType"
        },
        "ApplicationVersion": {
          "type": "string"
        },
        "FirstLaunchDate": {
          "format": "date-time",
          "type": "string"
        },
        "SvsAuthToken": {
          "type": "string"
        },
        "SvsDeviceId": {
          "type": "string"
        },
        "LocationDeviceCode": {
          "format": "int32",
          "type": "integer"
        },
        "LastTransactionNo": {
          "format": "int64",
          "type": "integer"
        },
        "ParentDevice": {
          "$ref": "#/definitions/DeviceExportToJson_get.ParentDeviceType"
        },
        "PushLogsToGae": {
          "type": "boolean"
        },
        "GaeLogSeverity": {
          "format": "int32",
          "type": "integer"
        },
        "IsMultiWorkstation": {
          "type": "boolean"
        },
        "CollectNetworkStats": {
          "type": "boolean"
        },
        "WorkstationIdentifier": {
          "type": "string"
        },
        "ShopperDisplayGroupIdentifier": {
          "type": "string"
        },
        "UpdateScheduledOnDate": {
          "format": "date-time",
          "type": "string"
        }
      }
    },
    "DeviceExportToJson_get.MobileApplicationType": {
      "type": "object",
      "properties": {
        "MobileApplicationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "BundleId": {
          "type": "string"
        },
        "DisplayName": {
          "type": "string"
        },
        "VersionNo": {
          "type": "string"
        },
        "SvsType": {
          "format": "int32",
          "type": "integer"
        },
        "AllowUpdate": {
          "type": "boolean"
        },
        "LocationSpecificType": {
          "format": "int32",
          "type": "integer"
        },
        "MobileApplicationType": {
          "format": "int32",
          "type": "integer"
        },
        "AltBundleId": {
          "type": "boolean"
        }
      }
    },
    "DeviceExportToJson_get.ParentDeviceType": {
      "type": "object",
      "properties": {
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "LocationIdentifier": {
          "type": "string"
        },
        "DeviceName": {
          "type": "string"
        },
        "DeviceAlias": {
          "type": "string"
        },
        "DeviceNo": {
          "format": "int32",
          "type": "integer"
        },
        "LocationDeviceCode": {
          "format": "int32",
          "type": "integer"
        }
      }
    }
  }
~~~

---

## Request Example(s) {#RequestExamples}

**Request Example #1: DeviceName = 'Reporting ipad anya qa03'**

~~~
{
   "Source":"Integrator",
   "Data":{
      "Request":{
         "Settings":[
            {
               "Key":"LocationIdentifierSetting",
               "Value":"ExternalIdCode"
            },
            {
               "Key":"ShopperDisplayGroupIdentifierSetting",
               "Value":"Code"
            },
            {
               "Key":"WorkstationIdentifierSetting",
               "Value":"Code"
            }
         ],
         "Filters":[
            {
               "Field":"DeviceName",
               "Operator":"Equal",
               "Value":"Reporting ipad anya qa03"
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
{  "Id": "c1f723e4-4e2b-4ebf-b374-91328abb8b00",  "Status": "InProcess",  "ApiType": "device-export",  "Source": "string"}
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

**Response Example #3: Success**

<span class="ir">?????????? The example of a successful 'response' provided by the developers is actually that of an export 'request'. ???????????</span>
