---
title: "Coupon Export API [6.41]"
date: 2022-08-23T06:27:00-05:00
draft: false
weight: 1521
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

This topic describes the **Coupon Export** API which is used to export coupon information from CHQ.

See [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for a description on how export requests are made and on the standard request and response formats used. The API-Specific sucessful response format for this API will be described below.

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/coupon**  
Asynchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/coupon/async**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

In the Swagger UI the **/chqapi/export/coupon** endpoint is a member of the **Stored Values** endpoint group.

## Request settings {#RequestSettings}

Below are the settings which can be supplied in the **Settings** group of the export request to define which value (field) is to be used for a particular value class (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Key** column lists the names of the available settings. The **Supported Values** column lists the valid values which can be supplied for the setting. The **Default** column lists the default value for each setting if that setting is not supplied.

**Key** | **Supported Values** | **Default** | **Description** |
---- | ---- | ---- | ---- |
SVSZoneIdentifierSetting | Name, TeamworkId | Name | An indicator of which value is to be used to identify stored value services zones. |
CustomerIdentifierSetting | CustomerNo, MemberCode, Email, Phone, ExternalId, TeamworkId | CustomerNo | An indicator of which value is to be used to identify customers. |
EmployeeIdentifierSetting | LoginName, FullName, TeamworkId | LoginName | An indicator of which value is to be used to identify employees. |

## Request filters {#RequestFilters}

Below are the filters which can be defined in the **Filters** group of the export request (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Field** column lists the names of the fields on which filtering can be done. The **Operators** column lists the filter operator values which are valid for the field. The **Value** column describes the value expected for the field.

**Field** | **Operators** | **Value** |
---- | ---- | ---- |
RecModified | "Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. |
CouponNumber | "Equal", "Contains" | Any valid value representing a coupon number for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |
CustomerEmail | "Equal", "Contains" | Any valid value representing a customer email address for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |
CustomerNo | "Equal", "Contains" | Any valid value representing a customer number for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |
CustomerPhone | "Equal", "Contains" | Any valid value representing a customer phone number for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |
SVSZoneName | "Equal", "Contains" | Any valid value representing a stored value services zone name for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |
CreateDate | "Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. |
Status | "Equal", "Contains" | Any valid value representing a coupon status for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |

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
<span class="api-gn">Response: Coupons</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
CouponId | string, guid | A unique identifier of the coupon. |
CouponNumber | string | An identifier of the coupon. |
Description | string | A description of the coupon. |
ExternalId | string | An identifier of the coupon used when interacting with an external system. |
Type | string, enum | An indicator of the coupon’s type. Its value must be one of the following: "amount" "percentage". |
Value | double | The coupon's value. |
Status | string, enum | An indicator of the coupon’s status. Its value must be one of the following: "active", "deactivated", "used", "expired", "not yet active", "invalid". |
CustomerIdentifier | string | An identifier of the customer who used the coupon. |
CouponProgramIdentifier | string | An identifier of the coupon program to which this coupon is a member. |
SVSZoneIdentifier | string | An identifier of the stored value services zone to which the coupon belongs. |
DeviceId | string | An identifier of the device on which the coupon was <span class="ir">??????????created/applied??????????</span>. |
IsManuallyDeactivated | boolean | An indicator as to whether or not the coupon has been manually deactived. <span class="ir">??????????</span> |
StartDate | string,date-time | A timestamp of when the coupon can begin to be applied. <span class="ir">??????????</span> |
ExpirationDate | string,date-time | A timestamp of when the coupon expires. |
CreateDateTime  | string,date-time | A timestamp of when the coupon was created. |
EditDateTime  | string,date-time | A timestamp of when the coupon was last modified. |
DeactiveDateTime  | string,date-time | A timestamp of when the coupon was deactivated. |
CreateEmployeeIdentifier | string | An identifier of the employee who created the coupon. |
EditEmployeeIdentifier | string | An identifier of the employee who last modified the coupon. |
DeactivateEmployeeIdentifier | string | An identifier of the employee who deactivated the coupon. |
NumberOfSpentUses | int32 | The number of times the coupon has been applied. <span class="ir">??????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Coupons</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response</span> |

### Schema {#SuccessfulResponseSchema}
 
Below is the JSON source for the schema of a successful response to the export request as described above.

~~~
{
    "CouponExportToJson_get.ApiDocumentType": {
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
          "$ref": "#/definitions/CouponExportToJson_get.ResponseType"
        }
      }
    },
    "CouponExportToJson_get.ResponseType": {
      "type": "object",
      "properties": {
        "Coupons": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/CouponExportToJson_get.CouponsType"
          }
        }
      }
    },
    "CouponExportToJson_get.CouponsType": {
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
        "CouponId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CouponNumber": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        },
        "ExternalId": {
          "type": "string"
        },
        "Type": {
          "enum": [
            "amount",
            "percentage"
          ],
          "type": "string"
        },
        "Value": {
          "format": "double",
          "type": "number"
        },
        "Status": {
          "enum": [
            "active",
            "deactivated",
            "used",
            "expired",
            "not yet active",
            "invalid"
          ],
          "type": "string"
        },
        "CustomerIdentifier": {
          "type": "string"
        },
        "CouponProgramIdentifier": {
          "type": "string"
        },
        "SVSZoneIdentifier": {
          "type": "string"
        },
        "DeviceId": {
          "type": "string"
        },
        "IsManuallyDeactivated": {
          "type": "boolean"
        },
        "StartDate": {
          "format": "date-time",
          "type": "string"
        },
        "ExpirationDate": {
          "format": "date-time",
          "type": "string"
        },
        "CreateDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "EditDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "DeactivateDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "CreateEmployeeIdentifier": {
          "type": "string"
        },
        "EditEmployeeIdentifier": {
          "type": "string"
        },
        "DeactivateEmployeeIdentifier": {
          "type": "string"
        },
        "NumberOfSpentUses": {
          "format": "int32",
          "type": "integer"
        }
      }
    }
}
~~~

---

## Request Example(s) {#RequestExamples}

**Request Example #1: CustomerEmail = 'test\@gmail.com'**

~~~
{
   "Source":"Integrator",
   "Data":{
      "ApiDocumentId":"907B65C7-8F2C-45FB-AEB2-68C5577D6162",
      "Request":{
         "Settings":[
            {
               "Key":"SVSZoneIdentifierSetting",
               "Value":"Name"
            },
            {
               "Key":"CustomerIdentifierSetting",
               "Value":"CustomerNo"
            },
            {
               "Key":"EmployeeIdentifierSetting",
               "Value":"LoginName"
            }
         ],
         "Filters":[
            {
               "Field":"CustomerEmail",
               "Operator":"Equal",
               "Value":"test@gmail.com"
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
{  "Id": "486feb43-f7ca-4e6e-8898-ce1932104a41",  "Status": "InProcess",  "ApiType": "coupon-export",  "Source": "string"}
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

**Response Example #3: Success when requesting CouponNumber = '72598621'**

~~~
{
	"ApiDocument": {
		"ApiDocumentId": "76A38A14-1CF7-47F8-81C3-E4078AC9600A",
		"Status": "Successful",
		"ApiRequestType": "coupon-export",
		"TotalRecords": 687,
		"RecordsCount": 1,
		"ElapsedTime": "00:00:00.0900000",
		"StartDateTime": "2021-07-13T10:52:30.170",
		"EndDateTime": "2021-07-13T10:52:30.260",
		"Response": {
			"Coupons": [
				{
					"RecCreated": "2021-06-23T14:29:26.287",
					"RecModified": "2021-06-24T07:46:46.347",
					"CouponId": "4D3A3D5E-9E17-413F-96B0-22459D2F2CFF",
					"CouponNumber": "72598621",
					"Type": "amount",
					"Value": 51.0,
					"Status": "used",
					"CustomerIdentifier": "1000000047",
					"CouponProgramIdentifier": "program one",
					"SVSZoneIdentifier": "US",
					"IsManuallyDeactivated": false,
					"StartDate": "2021-02-02T10:45:00",
					"CreateDateTime": "2021-02-02T10:45:00",
					"CreateEmployeeIdentifier": "jackbrown",
					"EditEmployeeIdentifier": "jackbrown",
					"NumberOfSpentUses": 1
				}
			]
		}
	}
}
~~~
