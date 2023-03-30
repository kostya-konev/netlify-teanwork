---
title: "Employee Import [6.41]"
date: 2023-02-03T12:10:00-05:00
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
- [Request format](#RequestFormat)
- [Request schema](#RequestSchema)
- [Request example(s)](#RequestExamples)
- [Response example(s)](#ResponseExamples)
- [Typical errors and warnings](#ErrorsAndWarnings)

---
<!-- end comment block (when active)-------------------- -->

## Overview {#Overview}

The **Employee Import** API is used to import employee information into CHQ.

See [*How to make an import API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnImportRequest_6.41/) for a description on how import requests are made and on the standard response formats used. The API-Specific request format for this API will be described below. 

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/import/employee**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

This import request must always be asyncronous. 

In the Swagger UI the **/chqapi/import/employee** endpoint is a member of the **Settings** endpoint group.

---

## Request format {#RequestFormat}

Any field not explicitly marked as **Required** is optional and can be omitted. See  [*JSON Data Types*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/JsonDataTypes_6.41/) for a description of the values which could appear in the **Data Type** column.

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
Source | string | The source of the data being supplied to the import. **Required** |
CommunicationId | string, guid | A unique identifier of the request (see [*Handling the CommunicationId parameter*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/HandlingTheCommunicationIdParam_6.41/) for additional info). |
<span class="api-gn">Data</span> | | <span class="api-gd">A group containing the following fields and groups. **Required**</span> |
<span class="api-gn">Data: Request</span> | | <span class="api-gd">A group containing the following fields and groups. **Required**</span> |
<span class="api-gn">Data: Request: Settings:</span> | | <span class="api-gd">A group containing the following fields and groups. |
IsPasswordHashed | boolean | An indicator as to whether or not supplied passwords have been hashed. |
LocationSetting | string, enum | An indicator of which value is to be used to identify locations. Its value must be one of the following: "Id", "Code","ExternalId
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data: Request: Settings</span> |
<span class="api-gn">Data: Request: Employees</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries. **Required**</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
Num | integer  | <span class="ir">??????????</span> |
LoginName | string, len:0-30 | The employee's login name. **Required** |
MiddleName | string, len:0-30 | The employee's middle name. |
LastName | string, len:0-30 | The employee's last name. |
FirstName | string, len:0-30 | The employee's first name. |
Code | string, len:0-20 | <span class="ir">??????????</span> |
NickName | string, len:0-20 | The employee's nickname. |
Password | string, len:0-30 | The employee's password. |
JobTitle | string, len:0-30 | The employee's job title. |
Title | string, len:0-30 | The employee's name title. |
Suffix | string, len:0-30 | The employee's name suffix. |
EMail1 - 2 | string, len:0-80 | The email addresses (up to two) for the employee. |
MaxDiscPercent | number, range:0-100 | The maximum discount percentage allowed for the employee. <span class="ir">????????</span> |
IsUniversal | boolean | An indicator as to whether or not the employee has a home location. <span class="ir">????????</span> |
IsActive | boolean | An indicator as to whether or not the employee is active. |
Type | string, enum | An indicator of the employee’s type. Its value must be one of the following: "Employee", "User". |
ExpirationDate | string, datetime | <span class="ir">????????</span> |
ListOrder | integer | The order the employee will appear in the user interface. |
CompanyCode | string, len:0-40 | <span class="ir">????????</span> |
HomeLocationCode | string, len:0-10 | An identifier of the employee's home location. <span class="ir">????????</span> |
Address1 - 2 | string, len:0-30 | The lines (up to two) of the employee's street address. |
City | string, len:0-30 | The employee's city. |
State | string, len:0-30 | The employee's state. |
CountryCode | string, len:0-10 | An identifier of the employee's country. |
PhoneNo1 - 2 | string, len:0-30 | The non-mobile phone numbers (up to two) for the employee. |
MobilePhoneNo | string, len:0-30 | The employee's mobile phone number. |
Fax | string, len:0-30 | The employee's fax number. |
PostalCode | string, len:0-20 | The employee's postal (zip) code. |
HomePage | string, len:0-80 | The employee's home web page. |
Organization | string, len:0-128 | The employee's organization. |
IsManager | boolean | An indicator as to whether or not the employee is a manager. |
MaxGlobalDiscPercent | number, range:-792281625 - 792281625, null | The maximum global discount percentage allowed for the employee. <span class="ir">????????</span> |
IsDiscRequireAuthCode | boolean | An indicator as to whether or not the employee requires an authorization code to apply a discount. <span class="ir">????????</span> |
MaxTradeAdjustmentPercent | number, range:-792281625 - 792281625, null | The maximum trade-in adjustment percentage the employee can apply. <span class="ir">????????</span> |
CommissionGroupCode | string, len:0-10 | An identifier of the employee's commission group. |
IsAvailableInCalendar | boolean | An indicator as to whether or not the employee is available in the scheduling calendar. <span class="ir">????????</span> |
<span class="api-gn">Data: Request: Employees: CustomFields</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
CustomDate1 - 6 | string, datetime, null | These six fields are customizable date values for the employee. |
CustomFlag1 - 6 | boolean, null | These six fields are customizable flags for the employee. |
CustomLookup1 - 12 | string, len:1-128, null | These twelve fields are customizable lookup values for the employee. |
CustomDecimal1 - 6 | number, range:-792281625 - 792281625, null | These six fields are customizable floating-point values for the employee. |
CustomNumber1 - 6 | integer, null | These six fields are customizable integer values for the employee. |
CustomText1 - 6 | string, len:0-128 | These six fields are customizable text values for the employee. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Data: Request: Employees: CustomFields</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Data: Request: Employees</span> |
Locations | string, occurs:0-* | Zero or more of the employee's locations. |
deleted | boolean | An indicator as to whether or not the employee has been deleted. |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Data</span> |
ApiDocumentId | string, guid | A unique identifier of the document. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Data</span> |
ApiDocumentId | string, guid | A unique identifier of the document. |
IsAsync | boolean | An indicator as to whether or not the import is to execute asynchronously. **If supplied, the value should *always* be *true*.** |

## Request schema {#RequestSchema}

~~~
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "description": "A representation API document for simplified employee import",
    "type": "object",
	"definitions": {
		"GUID": {
			"type": "string",
			"pattern": "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"
		}
	},
    "required": ["Source", "Data"],
    "additionalProperties":false,
    "properties": {
		"Source": {
			"type": "string"
		},
		"CommunicationId": {
 			"$ref": "#/definitions/GUID"
		},
        "Data": {
            "type": "object",
			"required": ["Request"],
            "additionalProperties":false,
            "properties": {
				"Request": {
					"type": "object",
					"required": ["Settings","Employees"],
					"additionalProperties":false,
					"properties": {
						"Settings": {
							"type": "object",
							"additionalProperties":false,
							"properties": {
								"IsPasswordHashed":{
									"type": "boolean"
								},
								"LocationSetting":{
									"type": "string",
									"enum": ["Id", "Code","ExternalId"]
								}
							}
						},
						"Employees": {
							"type": "array",
							"items": {
								"type": "object",
								"required": ["LoginName"],
								"additionalProperties":false,
								"properties": {
									"RecCreated":{
										"type": "string",
										"format": "date-time"
									},
									"RecModified":{
										"type": "string",
										"format": "date-time"
									},
									"Num":{
									"type": "integer"
									},
									"LoginName":{
										"type": "string",
										"minLength": 0,
										"maxLength": 30
									},
									"MiddleName":{
										"type": "string",
										"minLength": 0,
										"maxLength": 30
									},
									"LastName":{
										"type": "string",
										"minLength": 0,
										"maxLength": 30
									},
									"FirstName":{
										"type": "string",
										"minLength": 0,
										"maxLength": 30
									},
									"Code":{
										"type": "string",
										"minLength": 0,
										"maxLength": 20
									},
 									"NickName":{
										"type": "string",
										"minLength": 0,
										"maxLength": 20
									},
									"Password":{
										"type": "string",
										"minLength": 0,
										"maxLength": 30
									},
									"JobTitle":{
										"type": "string",
										"minLength": 0,
										"maxLength": 30
									},
									"Title":{
										"type": "string",
										"minLength": 0,
										"maxLength": 30
									},
									"Suffix":{
										"type": "string",
										"minLength": 0,
										"maxLength": 30
									},
									"EMail1":{
										"type": "string",
										"minLength": 0,
										"maxLength": 80
									},
									"EMail2":{
										"type": "string",
										"minLength": 0,
										"maxLength": 80
									},
									"MaxDiscPercent":{
										"type": "number",
										"minimum": 0,
										"maximum": 100
									},
 									"IsUniversal":{
										"type": "boolean"
									},
									"IsActive":{
										"type": "boolean"
									},
									"Type":{
										"type": "string",
										"enum": ["Employee", "User"]
									},
 									"ExpirationDate":{
										"type": "string",
										"format": "date-time"
									},
									"ListOrder":{
										"type": "integer"
									},
									"CompanyCode":{
										"type": "string",
										"minLength": 0,
										"maxLength": 40
									},
									"HomeLocationCode":{
										"type": "string",
										"minLength": 0,
										"maxLength": 10
									},
									"Address1":{
										"type": "string",
										"minLength": 0,
										"maxLength": 30
									},
									"Address2":{
										"type": "string",
										"minLength": 0,
										"maxLength": 30
									},
									"City":{
										"type": "string",
										"minLength": 0,
										"maxLength": 30
									},
									"State":{
										"type": "string",
										"minLength": 0,
										"maxLength": 30
									},
									"CountryCode":{
										"type": "string",
										"minLength": 0,
										"maxLength": 10
									},
									"PhoneNo1":{
										"type": "string",
										"minLength": 0,
										"maxLength": 30
									},
									"PhoneNo2":{
										"type": "string",
										"minLength": 0,
										"maxLength": 30
									},
									"MobilePhoneNo":{
										"type": "string",
										"minLength": 0,
										"maxLength": 30
									},
									"Fax":{
										"type": "string",
										"minLength": 0,
										"maxLength": 30
									},
									"PostalCode":{
										"type": "string",
										"minLength": 0,
										"maxLength": 20
									},
									"HomePage":{
										"type": "string",
										"minLength": 0,
										"maxLength": 80
									},
									"Organization":{
										"type": "string",
										"minLength": 0,
										"maxLength": 128
									},
									"IsManager":{
										"type": "boolean"
									},
									"MaxGlobalDiscPercent": {
										"type": ["number", "null"],
										"minimum": -792281625,
										"maximum": 792281625
									},
									"IsDiscRequireAuthCode":{
										"type": "boolean"
									},
									"MaxTradeAdjustmentPercent": {
										"type": ["number", "null"],
										"minimum": -792281625,
										"maximum": 792281625
									},
									"CommissionGroupCode":{
										"type": "string",
										"minLength": 0,
										"maxLength": 10
									},
									"IsAvailableInCalendar":{
										"type": "boolean"
									},
									"CustomFields":
									{
										"type": "object",
										"additionalProperties":false,
										"properties": {
										"CustomDate1":{
										"type": ["string","null"],
										"format": "date-time"
									},
									"CustomDate2":{
										"type": ["string","null"],
										"format": "date-time"
									},
									"CustomDate3":{
										"type": ["string","null"],
										"format": "date-time"
									},
									"CustomDate4":{
										"type": ["string","null"],
										"format": "date-time"
									},
									"CustomDate5":{
										"type": ["string","null"],
										"format": "date-time"
									},
									"CustomDate6":{
										"type": ["string","null"],
										"format": "date-time"
									},
									"CustomFlag1":{
										"type": ["boolean", "null"]
									},
									"CustomFlag2":{
										"type": ["boolean", "null"]
									},
									"CustomFlag3":{
										"type": ["boolean", "null"]
									},
									"CustomFlag4":{
										"type": ["boolean", "null"]
									},
									"CustomFlag5":{
										"type": ["boolean", "null"]
									},
									"CustomFlag6":{
										"type": ["boolean", "null"]
									},
									"CustomLookup1": {
										"type": "string",
										"minLength": 1,
										"maxLength": 128
									},
									"CustomLookup2": {
										"type": "string",
										"minLength": 1,
										"maxLength": 128
									},
									"CustomLookup3": {
										"type": "string",
										"minLength": 1,
										"maxLength": 128
									},
									"CustomLookup4": {
										"type": "string",
										"minLength": 1,
										"maxLength": 128
									},
									"CustomLookup5": {
										"type": "string",
										"minLength": 1,
										"maxLength": 128
									},
									"CustomLookup6": {
										"type": "string",
										"minLength": 1,
										"maxLength": 128
									},
									"CustomLookup7": {
										"type": "string",
										"minLength": 1,
										"maxLength": 128
									},
									"CustomLookup8": {
										"type": "string",
										"minLength": 1,
										"maxLength": 128
									},
									"CustomLookup9": {
										"type": "string",
										"minLength": 1,
										"maxLength": 128
									},
									"CustomLookup10": {
										"type": "string",
										"minLength": 1,
										"maxLength": 128
									},
									"CustomLookup11": {
										"type": "string",
										"minLength": 1,
										"maxLength": 128
									},
									"CustomLookup12": {
										"type": "string",
										"minLength": 1,
										"maxLength": 128
									},
									"CustomDecimal1": {
										"type": ["number", "null"],
										"minimum": -792281625,
										"maximum": 792281625
									},
									"CustomDecimal2": {
										"type": ["number", "null"],
										"minimum": -792281625,
										"maximum": 792281625
									},
									"CustomDecimal3": {
										"type": ["number", "null"],
										"minimum": -792281625,
										"maximum": 792281625
									},
									"CustomDecimal4": {
										"type": ["number", "null"],
										"minimum": -792281625,
										"maximum": 792281625
									},
									"CustomDecimal5": {
										"type": ["number", "null"],
										"minimum": -792281625,
										"maximum": 792281625
									},
									"CustomDecimal6": {
										"type": ["number", "null"],
										"minimum": -792281625,
										"maximum": 792281625
									},
									"CustomNumber1":{
										"type": ["integer", "null"]
									},
									"CustomNumber2":{
										"type": ["integer", "null"]
									},
									"CustomNumber3":{
										"type": ["integer", "null"]
									},
									"CustomNumber4":{
										"type": ["integer", "null"]
									},
									"CustomNumber5":{
										"type": ["integer", "null"]
									},
									"CustomNumber6":{
										"type": ["integer", "null"]
									},
									"CustomText1": {
										"type": "string",
										"maxLength": 256
									},
									"CustomText2": {
										"type": "string",
										"maxLength": 256
									},
									"CustomText3": {
										"type": "string",
										"maxLength": 256
									},
									"CustomText4": {
										"type": "string",
										"maxLength": 256
									},
									"CustomText5": {
										"type": "string",
										"maxLength": 256
									},
									"CustomText6": {
										"type": "string",
										"maxLength": 256
									}
									}
									},
									"Locations":
									{
										"type": "array",
										"minItems": 0,
										"items": {
											"type": "string"
										}
									},
									"deleted":{
										"type": "boolean"
									}
								}
							}
						}
					}
				},
				"ApiDocumentId": {
					"$ref": "#/definitions/GUID"
				}
            }
        },
				"ApiDocumentId": {
					"$ref": "#/definitions/GUID"
				},
				"IsAsync": {
					"type": "boolean"
				}
    }
}
~~~

---

## Request example(s) {#RequestExamples}

**Request Example #1:**

~~~
{
   "Source":"string",
   "Data":{
      "Request":{
         "Settings":{
            "IsPasswordHashed":true,
            "LocationSetting":"Id"
         },
         "Employees":[
            {
               "RecCreated":"2022-03-14T08:40:15.529Z",
               "RecModified":"2022-03-14T08:40:15.529Z",
               "Num":0,
               "LoginName":"string",
               "MiddleName":"string",
               "LastName":"string",
               "FirstName":"string",
               "Code":"string",
               "NickName":"string",
               "Password":"string",
               "JobTitle":"string",
               "Title":"string",
               "Suffix":"string",
               "EMail1":"string",
               "EMail2":"string",
               "MaxDiscPercent":0,
               "IsUniversal":true,
               "IsActive":true,
               "Type":"Employee",
               "ExpirationDate":"2022-03-14T08:40:15.529Z",
               "ListOrder":0,
               "CompanyCode":"string",
               "HomeLocationCode":"string",
               "Address1":"string",
               "Address2":"string",
               "City":"string",
               "State":"string",
               "CountryCode":"string",
               "PhoneNo1":"string",
               "PhoneNo2":"string",
               "MobilePhoneNo":"string",
               "Fax":"string",
               "PostalCode":"string",
               "HomePage":"string",
               "Organization":"string",
               "IsManager":true,
               "MaxGlobalDiscPercent":0,
               "IsDiscRequireAuthCode":true,
               "MaxTradeAdjustmentPercent":0,
               "CommissionGroupCode":"string",
               "IsAvailableInCalendar":true,
               "CustomFields":{
                  "CustomDate1":"2022-03-14T08:40:15.529Z",
                  "CustomDate2":"2022-03-14T08:40:15.529Z",
                  "CustomDate3":"2022-03-14T08:40:15.529Z",
                  "CustomDate4":"2022-03-14T08:40:15.529Z",
                  "CustomDate5":"2022-03-14T08:40:15.529Z",
                  "CustomDate6":"2022-03-14T08:40:15.529Z",
                  "CustomFlag1":true,
                  "CustomFlag2":true,
                  "CustomFlag3":true,
                  "CustomFlag4":true,
                  "CustomFlag5":true,
                  "CustomFlag6":true,
                  "CustomNumber1":0,
                  "CustomNumber2":0,
                  "CustomNumber3":0,
                  "CustomNumber4":0,
                  "CustomNumber5":0,
                  "CustomNumber6":0,
                  "CustomDecimal1":0,
                  "CustomDecimal2":0,
                  "CustomDecimal3":0,
                  "CustomDecimal4":0,
                  "CustomDecimal5":0,
                  "CustomDecimal6":0,
                  "CustomText1":"string",
                  "CustomText2":"string",
                  "CustomText3":"string",
                  "CustomText4":"string",
                  "CustomText5":"string",
                  "CustomText6":"string",
                  "CustomLookup1":"string",
                  "CustomLookup2":"string",
                  "CustomLookup3":"string",
                  "CustomLookup4":"string",
                  "CustomLookup5":"string",
                  "CustomLookup6":"string",
                  "CustomLookup7":"string",
                  "CustomLookup8":"string",
                  "CustomLookup9":"string",
                  "CustomLookup10":"string",
                  "CustomLookup11":"string",
                  "CustomLookup12":"string"
               },
               "Locations":[
                  "string"
               ],
               "ChangePasswordOnNextLogin":true,
               "deleted":true
            }
         ]
      },
      "ApiDocumentId":"00000000-0000-0000-0000-000000000000"
   },
   "CommunicationId":"00000000-0000-0000-0000-000000000000"
}
~~~

---

## Response example(s) {#ResponseExamples}

**Response Example #1: In Process**

~~~
{
   "Id":"2e473be2-e74f-4b19-a0a4-206189a5f447",
   "Status":"InProcess",
   "Progress":null,
   "TotalRecords":null,
   "AcceptedRecords":null,
   "ErrorRecords":null,
   "ElapsedTime":null,
   "ErrorMessage":null,
   "Lines":[
      {
         "EntityNo":"20",
         "EntityId":"10db1fff-d5a1-45ef-87e5-b0bc26f3e492",
         "Error":null,
         "Status":"InProcess"
      }
   ],
   "ApiType":"employee-import",
   "Source":"string"
}
~~~

**Response Example #2: Error**

~~~
{
  "Id": "ca631475-60d2-4fc3-85a7-4f596a910e66",
  "Status": "Error",
  "Progress": null,
  "TotalRecords": null,
  "AcceptedRecords": null,
  "ErrorRecords": null,
  "ElapsedTime": null,
  "ErrorMessage": "Import error.",
  "Lines": [
    {
      "EntityNo": "2",
      "EntityId": "0c5a642f-d129-4b29-8488-8ed0074fb06e",
      "Error": "Error : location with Code 'string' not found.",
      "Status": "Error"
    }
  ],
  "ApiType": "employee-import",
  "Source": "string"
}
~~~

**Response Example #3: Success**

~~~
{
   "Id":"2e473be2-e74f-4b19-a0a4-206189a5f447",
   "Status":"Success",
   "Progress":null,
   "TotalRecords":null,
   "AcceptedRecords":null,
   "ErrorRecords":null,
   "ElapsedTime":null,
   "ErrorMessage":null,
   "Lines":[
      {
         "EntityNo":"20",
         "EntityId":"10db1fff-d5a1-45ef-87e5-b0bc26f3e492",
         "Error":null,
         "Status":"InProcess"
      }
   ],
   "ApiType":"employee-import",
   "Source":"string"
}
~~~

---

## Typical errors and warnings {#ErrorsAndWarnings}

**Error Message** | **Description** |
---- | ---- |
Employee '\<value\>' must be assigned to at least one location. | The employee identified by '\<value\>' doesn't have either an **IsUniversal** value of *true* or a **Locations** value of at least one location. |
First name must be specified for new employee | The first name of the employee was not supplied. |
Last name must be specified for new employee | The last name of the employee was not supplied. |
Password must be specified for new employee. | The employee's password was not supplied. |
LocationId '\<value\>' is not a valid identifier. | '\<value\>' was not found in the list of active locations. |
