---
title: "Inventory Price Import [6.41]"
date: 2022-08-26T04:10:11-05:00
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

---
<!-- end comment block (when active)-------------------- -->

## Overview {#Overview}

The **Inventory Price Import** API is used to import price information into CHQ.

See [*How to make an import API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnImportRequest_6.41/) for a description on how import requests are made and on the standard response formats used. The API-Specific request format for this API will be described below. 

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
URL: <span class="fg-brown"><b><i>\<your-chq-url\></i></span>/chqapi/import/inven-price</b>  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

---

## Request format {#RequestFormat}

Any field not explicitly marked as **Required** is optional and can be omitted. See  [*JSON Data Types*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/JsonDataTypes_6.41/) for a description of the values which could appear in the **Data Type** column.

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
Source | string | The source of the data being supplied to the import. **Required** |
CommunicationId | string, guid | A unique identifier of the request (see [*Handling the CommunicationId parameter*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/HandlingTheCommunicationIdParam_6.41/) for additional info). |
<span class="api-gn">Data</span> | | <span class="api-gd">A group containing the following fields and groups. **Required**</span> |
<span class="api-gn">Data: Request: Settings</span> | | <span class="api-gd">A group containing the following fields. **Required**</span> |
ImportBySetting | string, enum | An indicator of which value is to be used to identify items. Its value must be one of the following: "ExternalId", "Plu", "Upc", "Clu". **Required** |
<space class="ir">??????????</span> | | <space class="ir">The below setting is defined in the API description but does not appear in the JSON source supplied by the developers. This discrepancy needs to be resolved.</span> |
MaxAcceptableSeverity | string, enum | An indicator of the processing to be done when an error occurs during processing. Its value must be one of the following: "Information", "Warning". If omitted, the default is "Information".<br><br>When "Information" is requested, all supplied prices will be processed as a group and no changes will be made to the database if at least one error was encountered during validation of the import document.<br><br>When "Warning" is requested, each price supplied will be processed individually and if there are no errors validating a given price, that change will be applied to the database. If there was an error validating a given price, that price change only will not be applied to the database. |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data: Request: Settings</span> |
<span class="api-gn">Data: Request: Prices</span> | | <span class="api-gd">A group containing the following fields. This group is an array with one or more entries. **Required**</span> |
ItemIdentifier | string | An identifier of the item to which the price applies. **Required** |
Price | number | The item's price. **Required** |
EffectiveDate | string, datetime | A timestamp of when the price becomes effective (can be applied).<span class="ir">??????????</span> **Required** |
LocationCode | string | An identifier of the location to which the price applies. |
LocationGroupCode | string | An identifier of the location group to which the location belongs. <span class="ir">***??????????***</span>
PriceLevelCode | string | An identifier of the price level to which the price belongs. <span class="ir">***??????????***</span> **Required**|
UOMCode | string | An identifier of the unit of measure for the price. <span class="ir">***??????????***</span> |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data: Request: Prices</span> |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data: Request</span> |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data</span> |

---

## Request schema {#RequestSchema}

~~~
{
  "$schema":"http://json-schema.org/draft-04/schema#",
  "description":"A representation API document for simplified Prices import",
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
            "Settings",
            "Prices"
          ],
          "additionalProperties":false,
          "properties":{
            "Settings":{
              "type":"object",
              "required":[
                "ImportBySetting"
              ],
              "additionalProperties":false,
              "properties":{
                "ImportBySetting":{
                  "type":"string",
                  "enum":[
                    "ExternalId",
                    "Plu",
                    "Upc",
                    "Clu"
                  ]
                }
              }
            },
            "Prices":{
              "type":"array",
              "minItems":1,
              "items":{
                "type":"object",
                "required":[
                  "ItemIdentifier",
                  "Price",
                  "EffectiveDate",
                  "PriceLevelCode"
                ],
                "additionalProperties":false,
                "properties":{
                  "ItemIdentifier":{
                    "type":"string"
                  },
                  "Price":{
                    "type":"number"
                  },
                  "EffectiveDate":{
                    "type":"string",
                    "format":"date-time"
                  },
                  "LocationCode":{
                    "type":"string"
                  },
                  "LocationGroupCode":{
                    "type":"string"
                  },
                  "PriceLevelCode":{
                    "type":"string"
                  },
                  "UOMCode":{
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
    "Source": "string",
    "Data": {
        "Request": {
            "Settings": {
                "ImportBySetting": "Plu"
            },
            "Prices": [
                {
                    "ItemIdentifier": "5370",
                    "Price": 123.45,
                    "EffectiveDate": "2012-12-13T12:12:12",
                    "LocationCode": "LOC1",
                    "PriceLevelCode": "pr",
                    "UOMCode": "str1234"
                }
            ]
        }
    }
}
~~~

## Response example(s) {#ResponseExamples}

**Response Example #1: In Process**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'inven-prices-import' rather than 'inven-price'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

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
   "ApiType": "inven-prices-import",
   "Source": "my_integration"
}
~~~

**Response Example #2: Error**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'inven-prices-import' rather than 'inven-price'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

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
  "ApiType": "inven-prices-import",
  "Source": "string"
}
~~~

**Response Example #3: Success**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'inven-prices-import' rather than 'inven-price'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

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
   "ApiType": "inven-prices-import",
   "Source": "my_integration"
}
~~~
