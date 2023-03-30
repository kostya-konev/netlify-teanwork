---
title: "Coupon Transaction Import [6.41]"
date: 2022-09-08T09:51:00-05:00
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
- [Request format](#RequestFormat)
- [Request schema](#RequestSchema)
- [Request example(s)](#RequestExamples)
- [Response example(s)](#ResponseExamples)

---
<!-- end comment block (when active)-------------------- -->

## Overview {#Overview}

The **Coupon Transaction Import** API is used to import coupon transaction information into CHQ.

See [*How to make an import API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnImportRequest_6.41/) for a description on how import requests are made and on the standard response formats used. The API-Specific request format for this API will be described below. 

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/import/coupon-transaction**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

This import request must always be asyncronous. <span class="ir">???? Is this true? ????</span>

In the Swagger UI the **/chqapi/import/coupon-transaction** endpoint is a member of the **Stored Values** endpoint group.

---

## Request format {#RequestFormat}

Any field not explicitly marked as **Required** is optional and can be omitted. See  [*JSON Data Types*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/JsonDataTypes_6.41/) for a description of the values which could appear in the **Data Type** column.

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
Source | string | The source of the data being supplied to the import. **Required** |
CommunicationId | string, guid | A unique identifier of the request (see [*Handling the CommunicationId parameter*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/HandlingTheCommunicationIdParam_6.41/) for additional info). |
<span class="api-gn">Data</span> | | <span class="api-gd">A group containing the following fields and groups. **Required**</span> |
<span class="api-gn">Data: Request</span> | | <span class="api-gd">A group containing the following fields and groups. **Required**</span> |
<span class="api-gn">Data: Request: ImportSettings:</span> | | <span class="api-gd">A group containing the following fields and groups. |
ReceiptSetting | string, enum | An indicator of which value is to be used to identify receipts. Its value must be one of the following: "ReceiptNum”, “TeamworkId”, "Dtn". If omitted, the default is "ReceiptNum”.|
LocationSetting | string, enum | An indicator of which value is to be used to identify locations. Its value must be one of the following: "Code", "TeamworkId", "ExternalId". If omitted, the default is "Code". |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data: Request: ImportSettings</span> |
<span class="api-gn">Data: Request: CouponTransactions</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with one or more entries. **Required**</span> |
TransactionId | integer | An identifier of the transaction. |
CouponNumber | string | An identifier of the coupon used for the transaction. |
Amount | number | The amount of the transaction. |
ReceiptIdentifier | string | An identifier of the receipt for which the transaction occured. |
LocationIdentifier | string | An identifier of the location where the transaciton occured. |
LocalTransactionTime | string, datetime | A timestamp, in the local timezone, of when the transaction occured. |
TransactionTime | string, datetime | A timestamp, in the universal timezone<span class="ir">?????????</span>, of when the transaction occured. |
IncomingIp | string | <span class="ir">?????????</span> |
TransactionStatus | string, enum | An indicator of the transaction's status. Its value must be one of the following: "Authorized", "Captured", "Discarded". |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data: Request: CouponTransactions</span> |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data: Request</span> |
<span class="api-gs">---</span>  | | <span class="api-gdc">continuation of Data</span> |
ApiDocumentId | string, guid | A unique identifier of the API document being used. |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data</span> |

## Request schema {#RequestSchema}

~~~
{
   "$schema":"http://json-schema.org/draft-04/schema#",
   "description":"A representation API document for coupon transaction import",
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
                  "CouponTransactions"
               ],
               "additionalProperties":false,
               "properties":{
                  "ImportSettings":{
                     "type":"object",
                     "additionalProperties":false,
                     "properties":{
                        "ReceiptSetting":{
                           "type":"string",
                           "enum":[
                              "ReceiptNum",
                              "TeamworkId",
							  "Dtn"
                           ],
                           "default":"ReceiptNum"
                        },
                        "LocationSetting":{
                           "type":"string",
                           "enum":[
                              "Code",
                              "TeamworkId",
							  "ExternalId"
                           ],
                           "default":"Code"
                        }
                     }
                  },
                  "CouponTransactions":{
                     "type":"array",
                     "minItems":1,
                     "items":{
                        "type":"object",
                        "additionalProperties":false,
                        "properties":{
                           "TransactionId":{
                              "type":"integer"
                           },
                           "CouponNumber":{
                              "type":"string"
                           },
                           "Amount":{
                              "type":"number"
                           },
                           "ReceiptIdentifier":{
                              "type":"string"
                           },
                           "LocationIdentifier":{
                              "type":"string"
                           },
                           "LocalTransactionTime":{
                              "type":"string",
                              "format":"date-time"
                           },
                           "TransactionTime":{
                              "type":"string",
                              "format":"date-time"
                           },
                           "IncomingIp":{
                              "type":"string"
                           },
                           "TransactionStatus":{
                              "type":"string",
                              "enum":[
                                 "Authorized",
                                 "Captured",
								 "Discarded"
                              ]
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

~~~
{
  "Source": "string",
  "Data": {
    "Request": {
      "ImportSettings": {
        "ReceiptSetting": "ReceiptNum",
        "LocationSetting": "Code"
      },
      "CouponTransactions": [
        {
          "TransactionId": 100000247,
          "CouponNumber": "RT55M017",
          "Amount": 10,
          "ReceiptIdentifier": "200343",
          "LocationIdentifier": "STORE-01",
          "LocalTransactionTime": "2021-07-14T07:57:35.762Z",
          "TransactionTime": "2021-07-14T07:57:35.762Z",
          "IncomingIp": "127.0.0.1",
          "TransactionStatus": "Authorized"
        }
      ]
    }
  }
}
~~~

## Response example(s) {#ResponseExamples}

**Response Example #1: Success**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'coupon-transation-import' rather than 'coupon-transaction'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

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
   "ApiType": "coupon-transaction-import",
   "Source": "my_integration"
}
~~~

**Response Example #2: In Process**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'coupon-transation-import' rather than 'coupon-transaction'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

~~~
{
  "Id":"7f89b6d0-8aa7-4a62-bb4b-9947a7e5a0e0",
  "Status":"InProcess",
  "Progress":null,
  "TotalRecords":null,
  "AcceptedRecords":null,
  "ErrorRecords":null,
  "ElapsedTime":null,
  "ErrorMessage":null,
  "Lines":[
    {
      "EntityNo":"1",
      "EntityId":"ef943e3a-eaa7-47e9-9b1b-d052f6aad3ed",
      "Error":null,
      "Status":"InProcess"
    }
  ],
  "ApiType":"coupon-transaction-import",
  "Source":"string",
  "Response":null
}
~~~

**Response Example #3: Error**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'coupon-transation-import' rather than 'coupon-transaction'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

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
  "ApiType": "coupon-transaction-import",
  "Source": "string"
}
~~~
