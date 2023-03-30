---
title: "External Location Quantity Import [6.41]"
date: 2023-02-14T11:35:00-05:00
draft: false
weight: 2420
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

The **External Location Import** API is used to import external location quantity information into CHQ.

See [*How to make an import API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnImportRequest_6.41/) for a description on how import requests are made and on the standard response formats used. The API-Specific request format for this API will be described below. 

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/import/external-location-qty*  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

In the Swagger UI the **/chqapi/import/external-location-qty** endpoint is a member of the **Settings** endpoint group.

---

## Request format {#RequestFormat}

Any field not explicitly marked as **Required** is optional and can be omitted. See  [*JSON Data Types*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/JsonDataTypes_6.41/) for a description of the values which could appear in the **Data Type** column.

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
Source | string | The source of the data being supplied to the import. **Required** |
CommunicationId | string, guid | A unique identifier of the request (see [*Handling the CommunicationId parameter*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/HandlingTheCommunicationIdParam_6.41/) for additional info). |
<span class="api-gn">Data</span> | | <span class="api-gd">A group containing the following fields and groups. **Required**</span> |
<span class="api-gn">Data: Request</span> | | <span class="api-gd">A group containing the following fields and groups. **Required**</span> |
<span class="api-gn">Data: Request: Settings</span> | | <span class="api-gd">A group containing the following fields and groups.</span> |
ItemSetting | string, enum | An identifier of which value is to be used to identify items. Its value must be one of the following: "Plu", "Clu", "ExternalId", "Id". |
ExternalLocationSetting | string, enum | An identifier of which value is to be used to identify external locations. Its value must be one of the following: "Code", "Id".
<span class="api-gs">---</span> | | <span class="api-gde">end of Data: Request: Settings</span> |
<span class="api-gn">Data: Request: ExternalLocationQuantities</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with one or more entries.</span> |
ApplicableDateTime | string, datetime | A timestamp of when <span class="ir">????????</span> **Required** |
Qty | number | The item's quantity. **Required** |
ItemIdentifier | string | An identifier of the item. **Required** |
ExternalLocationIdentifier | string | An identifier of the external location. **Required** |
<span class="api-gs">---</span> | | <span class="api-gde">end of Data: Request: ExternalLocationQuantities</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Data: Request</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Data</span> |


## Request schema {#RequestSchema}

~~~
{
  "$schema":"http://json-schema.org/draft-04/schema#",
  "description":"A representation API document for extarnal location quantities import",
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
            "ExternalLocationQuantities"
          ],
          "additionalProperties":false,
          "properties":{
            "Settings":{
              "type":"object",
              "additionalProperties":false,
              "properties":{
                "ItemSetting":{
                  "type":"string",
                  "enum":[
                    "Plu",
                    "Clu",
                    "ExternalId",
                    "Id"
                  ]
                },
                "ExternalLocationSetting":{
                  "type":"string",
                  "enum":[
                    "Code",
                    "Id"
                  ]
                }
              }
            },
            "ExternalLocationQuantities":{
              "type":"array",
              "minItems":1,
              "items":{
                "type":"object",
                "required":[
                  "ApplicableDateTime",
                  "Qty",
                  "ItemIdentifier",
                  "ExternalLocationIdentifier"
                ],
                "additionalProperties":false,
                "properties":{
                  "ApplicableDateTime":{
                    "type":"string",
                    "format":"date-time"
                  },
                  "Qty":{
                    "type":"number"
                  },
                  "ItemIdentifier":{
                    "type":"string"
                  },
                  "ExternalLocationIdentifier":{
                    "type":"string"
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
~~~

---

## Request example(s) {#RequestExamples}

**Request Example #1:**

~~~
{
  "Source": "integrator",
  "Data": {
    "Request": {
      "Settings": {
        "ItemSetting": "Plu",
        "ExternalLocationSetting": "Code"
      },
      "ExternalLocationQuantities": [
        {
          "ApplicableDateTime": "2017-12-07T12:11:06.218Z",
          "Qty": 2,
          "ItemIdentifier": "5370",
          "ExternalLocationIdentifier": "e1"
        },
        {
          "ApplicableDateTime": "2017-12-07T12:11:06.218Z",
          "Qty": 2,
          "ItemIdentifier": "5371",
          "ExternalLocationIdentifier": "e1"
        }
      ]
    }
  }
}
~~~

---

## Response example(s) {#ResponseExamples}

**Response Example #1: In Process**

~~~
{
   "Id": "79b38031-c925-4c07-893d-8ab1dc52927b",
   "Status": "InProcess",
   "Progress": null,
   "TotalRecords": null,
   "AcceptedRecords": null,
   "ErrorRecords": null,
   "ElapsedTime": null,
   "ErrorMessage": null,
   "Lines": [
      {
         "EntityNo": "6",
         "EntityId": "43fb8cf0-c5d8-457b-9db6-79035f8304ea",
         "Error": null,
         "Status": "InProcess"
      }
   ],
   "ApiType": "external-location-quantity-import",
   "Source": "my_integration"
}
~~~

**Response Example #2: Error**

~~~
{
  "Id": "c631c9a2-114f-4f9a-bc52-d31abdce1afa",
  "Status": "Error",
  "Progress": null,
  "TotalRecords": null,
  "AcceptedRecords": null,
  "ErrorRecords": null,
  "ElapsedTime": null,
  "ErrorMessage": "Import error.",
  "Lines": [
    {
      "EntityNo": "44",
      "EntityId": "c0595f78-7944-43bd-8770-2719b6d958f3",
      "Error": "Error : Location with id 'string' not found.",
      "Status": "Error"
    }
  ],
  "ApiType": "external-location-quantity-import",
  "Source": "string"
}
~~~

**Response Example #3: Success**

~~~
{
   "Id": "06daa072-57d9-48f6-b523-851adab82fa5",
   "Status": "Successful",
   "Progress": null,
   "TotalRecords": null,
   "AcceptedRecords": null,
   "ErrorRecords": null,
   "ElapsedTime": null,
   "ErrorMessage": null,
   "Lines": [
      {
         "EntityNo": "4649",
         "EntityId": "a3cecec4-a42a-410e-92c9-10b79c7b75f3",
         "Error": null,
         "Status": "Successful"
      }
   ],
   "ApiType": "external-location-quantity-import",
   "Source": "my_integration"
}
~~~

---

## Typical errors and warnings {#ErrorsAndWarnings}

**Error Message** | **Description** |
---- | ---- |
ELIHeader with id \<value\> not found. | External location \<value\> couldn't be found. |
Unsupported content type \<value\> | The content type indicated by \<value\> is not supported. |
There is no data to import. | The JSON document has wrong format. |
Duplicate external location codes | Duplicate external location codes found when creating or updating an external location. |
Duplicate external location identifiers | Duplicate external location identifiers found when creating or updating an external location. |
