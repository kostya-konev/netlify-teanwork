---
title: "Inventory Brand Import [6.41]"  
date: 2022-09-06T05:24:08-05:00  
draft: false  
weight: 1422
---
<!-- Weight => sstt; ss=>2nd letter's nbr/tt=>3rd letter's nbr (w/leading zeros) -->

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

## Overview {#Overview}

The **Inventory Brand Import** API is used to import brand information into CHQ.

See [*How to make an import API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnImportRequest_6.41/) for a description on how import requests are made and on the standard response formats used. The API-Specific request format for this API will be described below.

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
URL: <span class="fg-brown">***\<your-chq-url>***</span>**/chqapi/import/invenbrand**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key>***</span>

<span class="fg-brown">***\<your-chq-url>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

In the Swagger UI the **/chqapi/import/invenbrand** endpoint is a member of the **Settings** endpoint group.

---

## Request format {#RequestFormat}

Any field not explicitly marked as **Required** is optional and can be omitted. See [*JSON Data Types*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/JsonDataTypes_6.41/) for a description of the values which could appear in the **Data Type** column.

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
Source  | string | The source of the data being supplied to the import. **Required** |
CommunicationId | string, guid | A unique identifier of the request (see [*Handling the CommunicationId parameter*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/HandlingTheCommunicationIdParam_6.41/) for additional info). |
Data | | A group containing the following fields and groups. **Required** |
Data: Request | | A group containing the following fields. **Required** |
Data: Request: IvenBrands | | A group containing the following fields. This group is an array with one or more entries. **Required** |
Name | string, len:0-128 | The name of the brand. **Required** |
Key | integer | <span class="ir">***????????***</span> |
LocationCode | string, len:0-10  | An identifier of the location to which the brand applies. |
CompanyCode | string, len:0-128 | An identifier of the company to which the brand applies. <span class="ir">***????????***</span> |
InvenBrandId | string, guid | A unique identifier of the brand. |
deleted | boolean | An indicator as to whether or not the brand has been deleted. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Data: Request: InvenBrands</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Data: Request</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Data</span> |
ApiDocumentId | string, guid | A unique identifier of the API document being used. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Data</span> |

## Request schema {#RequestSchema}

~~~
{
  "description": "A representation API document for import simplified Inventory Brand",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "definitions": {
    "GUID": {
      "type": "string",
      "pattern": "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"
    }
  },
  "properties": {
    "Source": {
      "type": "string"
    },
    "CommunicationId": {
      "$ref": "#/definitions/GUID"
    },
    "Data": {
      "type": "object",
      "properties": {
        "Request": {
          "type": "object",
          "properties": {
            "InvenBrands": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "minItems": 1,
                  "properties": {
                    "Name": {
                      "type": "string",
                      "maxLength": 128
                    },
                    "Key": {
                      "type": "integer"
                    },
                    "LocationCode": {
                      "type": "string",
                      "maxLength": 10
                    },
                    "CompanyCode": {
                      "type": "string",
                      "maxLength": 128
                    },
                    "InvenBrandId": {
                      "$ref": "#/definitions/GUID"
                    },
                    "deleted": {
                      "type": "boolean"
                    }
                  },
                  "required": [
                    "Name"
                  ]
                }
              ]
            }
          },
          "required": [
            "InvenBrands"
          ]
        },
        "ApiDocumentId": {
          "$ref": "#/definitions/GUID"
        }
      },
      "required": [
        "Request"
      ]
    }
  },
  "required": [
    "Source",
    "Data"
  ]
}
~~~

---

## Request example(s) {#RequestExamples}

**Request Example #1:**

~~~
{
  "Source": "string",
  "Data": {
    "Request": {
      "InvenBrands": [
        {
          "Name": "string",
          "Key": 0,
          "LocationCode": "string",
          "CompanyCode": "string",
          "InvenBrandId": "00000000-0000-0000-0000-000000000000",
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

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'invenbrand-import' rather than 'invenbrand'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

**Response Example #1: In Process**

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
  "ApiType": "invenbrand-import",
  "Source": "string"
}
~~~

**Response Example #2: Error**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'invenbrand-import' rather than 'invenbrand'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

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
  "ApiType": "invenbrand-import",
  "Source": "string"
}
~~~

**Response Example #3: Success**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'invenbrand-import' rather than 'invenbrand'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????<span>

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
  "ApiType": "invenbrand-import",
  "Source": "string"
}
~~~

---

## Typical errors and warnings {#ErrorsAndWarnings}

**Error Message** |  **Description** |
 ------------------------------------------- | -------------------------------------------------------------------- |
IBIHeader with id '\<value>' not found. | A brand with the supplied id (\<value>) cannot be found. |
Unsupported content type '\<value>' | The supplied content type (\<value>) is not supported. |
There is no data to import. | There is no data to import or an incorrect JSON format was supplied. |
Validation error(s) in field(s): '\<value>' | The supplied parameter ('\<value>') is not appropriate. |
