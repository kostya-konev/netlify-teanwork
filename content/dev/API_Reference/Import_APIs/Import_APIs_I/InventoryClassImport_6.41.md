---
title: "Inventory Class Import [6.41]"
date: 2022-09-06T05:53:08-05:00
draft: false
weight: 1422
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

The **Inventory Class Import** API is used to import class (class, subclass1, and subclass2) information into CHQ.

See [*How to make an import API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnImportRequest_6.41/) for a description on how import requests are made and on the standard response formats used. The API-Specific request format for this API will be described below. 

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/import/invenclass**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

In the Swagger UI the **/chqapi/import/invenclass** endpoint is a member of the <span class="ir">?????????? *(the developer supplied API description has incorrect info for this API)*</span> endpoint group.

---

## Request format {#RequestFormat}

Any field not explicitly marked as **Required** is optional and can be omitted. See  [*JSON Data Types*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/JsonDataTypes_6.41/) for a description of the values which could appear in the **Data Type** column.

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
Source | string | The source of the data being supplied to the import. **Required**|
CommunicationId | string, guid | A unique identifier of the request (see [*Handling the CommunicationId parameter*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/HandlingTheCommunicationIdParam_6.41/) for additional info). |
<span class="api-gn">Data</span> | | <span class="api-gd">A group containing the following fields and groups. **Required**</span> |
<span class="api-gn">Data: Request</span> | | <span class="api-gd">A group containing the following fields. **Required**</span> |
<span class="api-gn">Data: Request: IvenClasses</span> | | <span class="api-gd">A group containing the following fields. This group is an array with one or more entries. **Required**</span> |
Name | string, len:1-400 | The name of the brand. **Required**|
ClassificationType | string, enum | An indicator of the class' type. Its value must be one of the following: "Normal", "Alternative". |
Level | string, enum | An indicator of the level of the class. Its value must be one of the following: "Class", "Subclass1", "Subclass2". |
Al  ias | string, len:1-250 | An alternate identifier of the class. |
Code | string, len:1-128 | A code identifying the class. **Required** |
LocationCode | string, len:1-10 | An identifier of the location to which the class applies. |
CompanyCode | string, len:1-128 | An identifier of the company to which the brand applies. <span class="ir">?????????</span> |
InvenClassId | string, guid | A unique identifier of the class. |
deleted | boolean | An indicator as to whether or not the class has been deleted. | 
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data: Request: InvenClasses</span> |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data: Request</span> |
<span class="api-gs">---</span>  | | <span class="api-gdc">continuation of Data</span> |
ApiDocumentId | string, guid | A unique identifier of the API document being used. |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data</span> |

## Request schema {#RequestSchema}

~~~
{
  "description":"A representation API document for import Inventory Classification",
  "$schema":"http://json-schema.org/draft-07/schema#",
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
      "properties":{
        "Request":{
          "type":"object",
          "required":[
            "InvenClasses"
          ],
          "properties":{
            "InvenClasses":{
              "type":"array",
              "minItems":1,
              "items":{
                "type":"object",
                "required":[
                  "Name",
                  "Code"
                ],
                "properties":{
                  "Name":{
                    "type":"string",
                    "maxLength":400
                  },
                  "ClassificationType":{
                    "type":"string",
                    "enum":[
                      "Normal",
                      "Alternative"
                    ]
                  },
                  "Level":{
                    "type":"string",
                    "enum":[
                      "Class",
                      "Subclass1",
                      "Subclass2"
                    ]
                  },
                  "Alias":{
                    "type":"string",
                    "maxLength":250
                  },
                  "Code":{
                    "type":"string",
                    "maxLength":128
                  },
                  "LocationCode":{
                    "type":"string",
                    "maxLength":10
                  },
                  "CompanyCode":{
                    "type":"string",
                    "maxLength":128
                  },
                  "InvenClassId":{
                    "$ref":"#/definitions/GUID"
                  },
                  "deleted":{
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
    }
  }
}
~~~

---

## Request example(s) {#RequestExamples}

**Request Example #1:**

<span class="ir">?????????? The below example provided by the developers is a generic request schema NOT an actual request example. We need a real import request example. ?????????</span>

~~~
{
  "Source": "string",
  "Data": {
    "Request": {
      "InvenClasses": [
        {
          "Name": "string",
          "ShortName": "string",
          "ClassificationType": "Normal",
          "Level": "Class",
          "Alias": "string",
          "Code": "string",
          "LocationCode": "string",
          "CompanyCode": "string",
          "InvenClassId": "00000000-0000-0000-0000-000000000000",
          "deleted": true
        }
      ]
    },
    "ApiDocumentId": "00000000-0000-0000-0000-000000000000"
  }
}
~~~

---

## Response example(s) {#ResponseExamples}

**Response Example #1: In Process**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'invenclass-import' rather than 'invenclass'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

~~~
{
  "Id": "7644497c-d720-46e3-83b2-a4d7af4d354d",
  "Status": "InProcess",
  "Progress": null,
  "TotalRecords": null,
  "AcceptedRecords": null,
  "ErrorRecords": null,
  "ElapsedTime": null,
  "ErrorMessage": null,
  "Lines": [
    {
      "EntityNo": "1",
      "EntityId": "e5ffd948-8070-4d0c-ab96-6c7f8eec9b9e",
      "Error": null,
      "Status": "InProcess"
    }
  ],
  "ApiType": "invenclass-import",
  "Source": "string"
}
~~~

**Response Example #2: Error**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'invenclass-import' rather than 'invenclass'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

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
      "Error": "Error : Location with code 'string' does not exists",
      "Status": "Error"
    }
  ],
  "ApiType": "invenclass-import",
  "Source": "string"
}
~~~

**Response Example #3: Success**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'invenclass-import' rather than 'invenclass'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

~~~
{
  "Id": "136edebf-5f98-41fb-97ce-b3ba9766e4ac",
  "Status": "Successful",
  "Progress": null,
  "TotalRecords": null,
  "AcceptedRecords": null,
  "ErrorRecords": null,
  "ElapsedTime": null,
  "ErrorMessage": null,
  "Lines": [
    {
      "EntityNo": "3",
      "EntityId": "93e751c8-ea7b-45df-85d0-0c94644d42da",
      "Error": null,
      "Status": "Successful"
    }
  ],
  "ApiType": "invenclass-import",
  "Source": "string"
}
~~~

---

## Typical errors and warnings {#ErrorsAndWarnings}

**Error Message** | **Description** |
---- | ---- |
ICLHeader with id '\<value\>' not found. | A class with the supplied id (\<value\>) cannot be found. |
Unsupported content type '\<value\>' | The supplied content type (\<value\>) is not supported. |
There is no data to import. | There is no data to import or an incorrect JSON format was supplied. |
