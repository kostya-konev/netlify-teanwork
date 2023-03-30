---
title: "Role Employee Import [6.41]"
date: 2022-08-17T11:27:00-05:00
draft: false
weight: 1512
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

The **Role Employee Import** API is used to import employee role information into CHQ. Each folr employee is *always* associated with a particular location (store).

See [*How to make an import API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnImportRequest_6.41/) for a description on how import requests are made and on the standard response formats used. The API-Specific request format for this API will be described below. 

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/import/role-employee**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

In the Swagger UI the **/chqapi/import/role-employee** endpoint is a member of the **Settings** endpoint group.

---

## Request format {#RequestFormat}

Any field not explicitly marked as **Required** is optional and can be omitted. See  [*JSON Data Types*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/JsonDataTypes_6.41/) for a description of the values which could appear in the **Data Type** column.

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
Source | string | The source of the data being supplied to the import. **Required** |
CommunicationId | string, guid | A unique identifier of the request (see [*Handling the CommunicationId parameter*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/HandlingTheCommunicationIdParam_6.41/) for additional info). |
<span class="api-gn">Data</span> | | <span class="api-gd">A group containing the following fields and groups. **Required**</span> |
<span class="api-gn">Data: Request</span> | | <span class="api-gd">A group containing the following fields and groups. **Required**</span> |
<span class="api-gn">Data: Request: ImportSettings:</span> | | <span class="api-gd">A group containing the following fields and groups. **Required** |
RoleSetting | string, enum | An indicator of which value is to be used to identify roles. Its value must be one of the following: "Id", "Code". If omitted, the default is "Id". |
EmployeeSetting | string, enum | An indicator of which value is to be used to identify employees. Its value must be one of the following: "Id", "LoginName". If omitted, the default is "Id". |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data: Request: ImportSettings</span> |
<span class="api-gn">Data: Request: RoleEmployees</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries. **Required**</span> |
EmployeeIdentifier | string", len:1-30 | An identifier of the employee being assigned a role. **Required** |
RoleIdentifier | string, len:1-128 | An identifier of the employee's role. **Required** |
Delete | boolean | An indicator as to whether or not the record has been deleted. <span class="ir">??????????</span> |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data: Request: RoleEmployees</span> |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data: Request</span> |
<span class="api-gs">---</span> |  | <span class="api-gdc">continuation of Data</span> |
ApiDocumentId | string, guid | A unique identifier of the API document being used. |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data</span> |
ApiDocumentId | string, guid | A unique identifier of the API document being used. |

---

## Request schema {#RequestSchema}

~~~
{
  "$schema":"http://json-schema.org/draft-04/schema#",
  "description":"A representation API document for simplified role employee import",
  "type":"object",
  "definitions":{
    "GUID":{
      "type":"string",
      "pattern":"^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"
    }
  },
  "required":[
    "Source",
    "Data"
  ],
  "additionalProperties":false,
  "properties":{
    "Source":{
      "type":"string"
    },
    "CommunicationId":{
      "$ref":"#/definitions/GUID"
    },
    "Data":{
      "type":"object",
      "required":[
        "Request"
      ],
      "additionalProperties":false,
      "properties":{
        "Request":{
          "type":"object",
          "required":[
            "ImportSettings",
            "RoleEmployees"
          ],
          "additionalProperties":false,
          "properties":{
            "ImportSettings":{
              "type":"object",
              "additionalProperties":false,
              "properties":{
                "RoleSetting":{
                  "type":"string",
                  "enum":[
                    "Id",
                    "Code"
                  ]
                },
                "EmployeeSetting":{
                  "type":"string",
                  "enum":[
                    "Id",
                    "LoginName"
                  ]
                }
              }
            },
            "RoleEmployees":{
              "type":"array",
              "items":{
                "type":"object",
                "required":[
                  "EmployeeIdentifier",
                  "RoleIdentifier"
                ],
                "additionalProperties":false,
                "properties":{
                  "EmployeeIdentifier":{
                    "type":"string",
                    "minLength":1,
                    "maxLength":30
                  },
                  "RoleIdentifier":{
                    "type":"string",
                    "minLength":1,
                    "maxLength":128
                  },
                  "Delete":{
                    "type":"boolean"
                  }
                }
              }
            }
          }
        },
        "ApiDocumentId":{
          "$ref":"#/definitions/GUID"
        }
      }
    },
    "ApiDocumentId":{
      "$ref":"#/definitions/GUID"
    },
    "IsAsync":{
      "type":"boolean"
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
         "ImportSettings":{
            "RoleSetting":"Id",
            "EmployeeSetting":"Id"
         },
         "RoleEmployees":[
            {
               "EmployeeIdentifier":"1EA89DBC-2F47-4245-8931-01DD1E76C2A2",
               "RoleIdentifier":"D3443AE8-B622-45C1-9FC3-028D3F9699F3",
               "Delete":false
            }
         ]
      },
      "ApiDocumentId":"00000000-0000-0000-0000-000000000001"
   }
}
~~~

---

## Response example(s) {#ResponseExamples}

**Response Example #1: In Process**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'simplified-role-employee-import' rather than 'role-employee'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

~~~
{
  "Id": "ed25a811-0c50-4dfe-9cc3-4394a0a59b97",
  "Status": "InProcess",
  "Progress": null,
  "TotalRecords": null,
  "AcceptedRecords": null,
  "ErrorRecords": null,
  "ElapsedTime": null,
  "ErrorMessage": null,
  "Lines": [
    {
      "EntityNo": "0",
      "EntityId": "e39b12fd-16db-4497-a013-75877914addd",
      "Error": null,
      "Status": "InProcess"
    }
  ],
  "ApiType": "simplified-role-employee-import",
  "Source": "string"
}
~~~

**Response Example #2: Error**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'simplified-role-employee-import' rather than 'role-employee'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

~~~
{
   "Id":"f5ac65d2-90d9-4ea9-990a-3be0686cb1de",
   "Status":"Error",
   "Progress":null,
   "TotalRecords":null,
   "AcceptedRecords":null,
   "ErrorRecords":null,
   "ElapsedTime":null,
   "ErrorMessage":"Import error.",
   "Lines":[
      {
         "EntityNo":"0",
         "EntityId":"2e965f33-9aa6-40dc-862a-3b9906c136e2",
         "Error":"Error : role with Id '1' not found.",
         "Status":"Error"
      }
   ],
   "ApiType":"simplified-role-employee-import",
   "Source":"string"
}
~~~

**Response Example #3: Success**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'simplified-role-employee-import' rather than 'role-employee'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

~~~
{
  "Id": "ed25a811-0c50-4dfe-9cc3-4394a0a59b97",
  "Status": "Successful",
  "Progress": null,
  "TotalRecords": null,
  "AcceptedRecords": null,
  "ErrorRecords": null,
  "ElapsedTime": null,
  "ErrorMessage": null,
  "Lines": [
    {
      "EntityNo": "0",
      "EntityId": "e39b12fd-16db-4497-a013-75877914addd",
      "Error": null,
      "Status": "Successful"
    }
  ],
  "ApiType": "simplified-role-employee-import",
  "Source": "string"
}
~~~

---

## Typical errors and warnings {#ErrorsAndWarnings}

**Error Message** | **Description** |
---- | ---- |
Employee with Id '\<value\>' not found | An employee with the supplied employee id (\<value\>) was not found. Verify the supplied employee id. |
Role with Id '\<value\>' not found | An employee role with the supplied id (\<value\>) was not found. Verify the supplied role id. |
There is no data to import. | An incorrect JSON format was supplied. |
