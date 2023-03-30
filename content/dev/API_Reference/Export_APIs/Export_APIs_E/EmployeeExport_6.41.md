---
title: "Employee Export API [6.41]"
date: 2023-01-30T12:15:00-05:00
draft: false
weight: 1316
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

This topic describes the **Employee Export** API which is used to export employee information from CHQ.

See [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for a description on how export requests are made and on the standard request and response formats used. The API-Specific sucessful response format for this API will be described below.

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/employee**  
Asynchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/employee/async**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

In the Swagger UI the **/chqapi/export/employee** endpoint is a member of the **Settings** endpoint group.

## Request settings {#RequestSettings}

Below are the settings which can be supplied in the **Settings** group of the export request to define which value (field) is to be used for a particular value class (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Key** column lists the names of the available settings. The **Supported Values** column lists the valid values which can be supplied for the setting. The **Default** column lists the default value for each setting if that setting is not supplied.

**Key** | **Supported Values** | **Default** | **Description** |
---- | ---- | ---- | ---- |
HomeLocationIdentifierSetting | ExternalIdCode, Code, ExternalId, No, TeamworkId | ExternalIdCode | An indicator of which value is to be used to identify the employee's home location. |
CountryIdentifierSetting | Code, Name, TeamworkId | Code | An indicator of which value is to be used to identify the employee's country. |
CommissionGroupIdentifierSetting | Code,TeamworkId | Code | An indicator of which value is to be used to identify the employee's commission group. |
VendorIdentifierSetting | Code, Name, TeamworkId | Code | An indicator of which value is to be used to identify vendors. |
EmployeeLocationsIdentifierSetting | ExternalIdCode, Code | ExternalIdCode | An indicator of which value is to be used to identify the employee's locations. |
IncludeEmployeeLocations | true, false | false | An indicator as to whether or not the employee's locations are to be included in the exported data. <span class="ir">??????????</span> |

## Request filters {#RequestFilters}

Below are the filters which can be defined in the **Filters** group of the export request (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Field** column lists the names of the fields on which filtering can be done. The **Operators** column lists the filter operator values which are valid for the field. The **Value** column describes the value expected for the field.

**Field** | **Operators** | **Value** |
---- | ---- | ---- |
RecModified | "Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. |
EmployeeId | "Equal", "Contains" | Any valid value representing an employee identifier for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |
EmployeeLoginName | "Equal", "Contains" | Any valid value representing an employee login name for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |

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
ApiRequestType | string | <span class="ir">????????</span> |
TotalRecords | int32 | The total number of records processed. |
RecordsCount | int32 | The number of records exported. |
ElapsedTime | string, datetime | The time it took to execute the API. |
StartDateTime | string, datetime | A timestamp of when the API began executing. |
EndDateTime | string, datetime | A timestamp of when the API completed. |
<span class="api-gn">Response</span> | | <span class="api-gd">A group containing the following fields and groups.</span> |
<span class="api-gn">Response: Employees</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
EmployeeId | string, guid | A unique identifier of the employee. |
LoginName | string | The employee's login name. |
MiddleName | string | The employee's middle name. |
LastName | string | The employee's last name. |
FirstName | string | The employee's first name. |
EMail1 - 2 | string | The email address (up to two) for the employee. |
MaxDiscPercent | double | The maximum discount percentage allowed for the employee. <span class="ir">????????</span> |
Universal | boolean | An indicator as to whether or not the employee has a home location. <span class="ir">????????</span> |
Active | boolean | An indicator as to whether or not the employee is active. |
Type | string, enum | An indicator of the employee’s type. Its value must be one of the following: "Employee", "User". |
ExpirationDate | string, datetime | <span class="ir">????????</span> |
MaxGlobalDiscPercent | double | The maximum global discount percentage allowed for the employee. <span class="ir">????????</span> |
Code | string | <span class="ir">????????</span> |
NickName | string | The employee's nickname. |
ListOrder | int32 | The order the employee will appear in the user interface. |
JobTitle | string | The employee's job title. |
Address1 - 2 | string | The lines (up to two) of the employee's street address. |
City | string | The employee's city. |
State | string | The employee's state. |
CountryIdentifier | string | An identifier of the employee's country. |
PhoneNo | string | The employee's first phone number. |
MobilePhoneNo | string | The employee's mobile phone number. |
Title | string | The title for the employee's name. |
Suffix | string | The suffix for the employee's name. |
Organization | string | The employee's organization. |
PostalCode | string | The employee's postal (zip) code. |
PhoneNo2 | string | The employee's second phone number. |
Fax | string | The employee's fax number. |
HomePage | string | The employee's home web page. |
IsManager | boolean | An indicator as to whether or not the employee is a manager. |
DiscRequireAuthCode | boolean | An indicator as to whether or not the employee requires an authorization code to apply a discount. <span class="ir">????????</span> |
MaxTradeAdjustmentPercent | double | The maximum trade-in adjustment percentage the employee can apply. <span class="ir">????????</span> |
HomeLocationIdentifier | string | An identifier of the employee's home location. |
CommissionGroupIdentifier | string | An identifier of the employee's commission group. |
AvailableInCalendar | boolean | An indicator as to whether or not the employee is available in the scheduling calendar. <span class="ir">????????</span> |
PasswordChangeDate | string, datetime | A timestamp of the last time the employee changed their password. |
SecurityType | int32 | <span class="ir">????????</span> |
OverrideRoleDiscountLimits | boolean | An indicator as to whether or not the employee can override the role discount limits. |
<span class="api-gn">Response: Employees: CustomFields</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
CustomDate1 - 6 | string, datetime | These six fields are customizable date values for the employee. |
CustomFlag1 - 6 | boolean | These six fields are customizable flags for the employee. |
CustomNumber1 - 6 | int32 | These six fields are customizable integer values for the employee. |
CustomDecimal1 - 6 | double | These six fields are customizable floating-point values for the employee. |
CustomText1 - 6 | string | These six fields are customizable text values for the employee. |
CustomLookup1 - 12 | string | These twelve fields are customizable lookup values for the employee. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Employees: CustomFields</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Employees</span> |
IsTradingPartner | boolean | An indicator as to whether or not the employee is a trading partner. |
TradingPartnerVendorIdentifier | string | <span class="ir">????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Employees</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response</span> |

### Schema {#SuccessfulResponseSchema}
 
Below is the JSON source for the schema of a successful response to the export request as described above.

~~~
{
   "EmployeeExportToJson_get.ApiDocumentType":{
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
            "$ref":"#/definitions/EmployeeExportToJson_get.ResponseType"
         }
      }
   },
   "EmployeeExportToJson_get.ResponseType":{
      "type":"object",
      "properties":{
         "Employees":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/EmployeeExportToJson_get.EmployeesType"
            }
         }
      }
   },
   "EmployeeExportToJson_get.EmployeesType":{
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
         "EmployeeId":{
            "format":"uuid",
            "type":"string",
            "example":"00000000-0000-0000-0000-000000000000"
         },
         "LoginName":{
            "type":"string"
         },
         "MiddleName":{
            "type":"string"
         },
         "LastName":{
            "type":"string"
         },
         "FirstName":{
            "type":"string"
         },
         "EMail1":{
            "type":"string"
         },
         "EMail2":{
            "type":"string"
         },
         "MaxDiscPercent":{
            "format":"double",
            "type":"number"
         },
         "Universal":{
            "type":"boolean"
         },
         "Active":{
            "type":"boolean"
         },
         "Type":{
            "enum":[
               "Employee",
               "User"
            ],
            "type":"string"
         },
         "ExpirationDate":{
            "format":"date-time",
            "type":"string"
         },
         "MaxGlobalDiscPercent":{
            "format":"double",
            "type":"number"
         },
         "Code":{
            "type":"string"
         },
         "NickName":{
            "type":"string"
         },
         "ListOrder":{
            "format":"int32",
            "type":"integer"
         },
         "JobTitle":{
            "type":"string"
         },
         "Address1":{
            "type":"string"
         },
         "Address2":{
            "type":"string"
         },
         "City":{
            "type":"string"
         },
         "State":{
            "type":"string"
         },
         "CountryIdentifier":{
            "type":"string"
         },
         "PhoneNo":{
            "type":"string"
         },
         "MobilePhoneNo":{
            "type":"string"
         },
         "Title":{
            "type":"string"
         },
         "Suffix":{
            "type":"string"
         },
         "Organization":{
            "type":"string"
         },
         "PostalCode":{
            "type":"string"
         },
         "PhoneNo2":{
            "type":"string"
         },
         "Fax":{
            "type":"string"
         },
         "HomePage":{
            "type":"string"
         },
         "IsManager":{
            "type":"boolean"
         },
         "DiscRequireAuthCode":{
            "type":"boolean"
         },
         "MaxTradeAdjustmentPercent":{
            "format":"double",
            "type":"number"
         },
         "HomeLocationIdentifier":{
            "type":"string"
         },
         "CommissionGroupIdentifier":{
            "type":"string"
         },
         "AvailableInCalendar":{
            "type":"boolean"
         },
         "PasswordChangeDate":{
            "format":"date-time",
            "type":"string"
         },
         "SecurityType":{
            "format":"int32",
            "type":"integer"
         },
         "OverrideRoleDiscountLimits":{
            "type":"boolean"
         },
         "CustomFields":{
            "$ref":"#/definitions/EmployeeExportToJson_get.CustomFieldsType"
         },
         "IsTradingPartner":{
            "type":"boolean"
         },
         "TradingPartnerVendorIdentifier":{
            "type":"string"
         }
      }
   },
   "EmployeeExportToJson_get.CustomFieldsType":{
      "type":"object",
      "properties":{
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
         "CustomDate5":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate6":{
            "format":"date-time",
            "type":"string"
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
         "CustomFlag5":{
            "type":"boolean"
         },
         "CustomFlag6":{
            "type":"boolean"
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
         "CustomNumber5":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber6":{
            "format":"int32",
            "type":"integer"
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
         "CustomDecimal5":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal6":{
            "format":"double",
            "type":"number"
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
         "CustomText5":{
            "type":"string"
         },
         "CustomText6":{
            "type":"string"
         },
         "CustomLookup1":{
            "type":"string"
         },
         "CustomLookup10":{
            "type":"string"
         },
         "CustomLookup11":{
            "type":"string"
         },
         "CustomLookup12":{
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
         "CustomLookup5":{
            "type":"string"
         },
         "CustomLookup6":{
            "type":"string"
         },
         "CustomLookup7":{
            "type":"string"
         },
         "CustomLookup8":{
            "type":"string"
         },
         "CustomLookup9":{
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
    "ApiDocumentId":"F4095256-CF56-43F8-8721-E4432BE7DA4C",
    "Request":{
      "Settings":[
        {
          "Key":"HomeLocationIdentifierSetting",
          "Value":"ExternalIdCode"
        },
        {
          "Key":"CountryIdentifierSetting",
          "Value":"Code"
        },
        {
          "Key":"CommissionGroupIdentifierSetting",
          "Value":"Code"
        },
        {
          "Key":"VendorIdentifierSetting",
          "Value":"Code"
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
{  "Id": "052641fc-840d-4189-a36b-f00261b1d694",  "Status": "InProcess",  "ApiType": "employee-export",  "Source": "string"}
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

**Response Example #3: Success when requesting RecModified ='2019-01-03 10:19:03.817'**

~~~
 {
   "ApiDocument":{
      "ApiDocumentId":"652B5AFC-A990-46DC-84B8-089528C41A8B",
      "Status":"Successful",
      "ApiRequestType":"employee-export",
      "TotalRecords":1,
      "RecordsCount":1,
      "ElapsedTime":"00:00:00.0066667",
      "StartDateTime":"2019-01-08T11:04:31.017",
      "EndDateTime":"2019-01-08T11:04:31.023",
      "Response":{
         "Employees":[
            {
               "RecCreated":"2019-01-03T10:19:03.817",
               "RecModified":"2019-01-03T10:19:03.817",
               "EmployeeID":"57D6E00D-D9A9-4574-BA14-B3DF0107C089",
               "LoginName":"ROOT",
               "LastName":"ROOT",
               "FirstName":"ROOT",
               "Universal":true,
               "Active":true,
               "Type":"Employee",
               "IsManager":false,
               "DiscRequireAuthCode":true,
               "AvailableInCalendar":false,
               "PasswordChangeDate":"1753-01-01T00:00:00",
               "SecurityType":0,
               "OverrideRoleDiscountLimits":false,
               "CustomFields":
                  {

                  }               
            }
         ]
      }
   }
}
~~~

**Response Example #4: Success when requesting EmployeeId = '95BF6961-CE6F-4C35-BD53-DAC9C01D2D4D'**

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"6F891EE0-DF73-4C46-8BED-7C56EBDF1631",
      "Status":"Successful",
      "ApiRequestType":"employee-export",
      "TotalRecords":1,
      "RecordsCount":1,
      "ElapsedTime":"00:00:00.0066667",
      "StartDateTime":"2019-01-08T11:09:05.770",
      "EndDateTime":"2019-01-08T11:09:05.777",
      "Response":{
         "Employees":[
            {
               "RecCreated":"2019-01-03T10:19:03.607",
               "RecModified":"2019-01-03T10:19:03.607",
               "EmployeeID":"95BF6961-CE6F-4C35-BD53-DAC9C01D2D4D",
               "LoginName":"AUTOMAT",
               "FirstName":"AUTOMAT",
               "Universal":false,
               "Active":false,
               "Type":"Employee",
               "IsManager":false,
               "DiscRequireAuthCode":true,
               "AvailableInCalendar":false,
               "PasswordChangeDate":"1753-01-01T00:00:00",
               "SecurityType":0,
               "OverrideRoleDiscountLimits":false,
               "CustomFields":
                  {

                  }               
            }
         ]
      }
   }
}
~~~