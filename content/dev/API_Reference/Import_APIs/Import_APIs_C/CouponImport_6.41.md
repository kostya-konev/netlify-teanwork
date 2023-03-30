---
title: "Coupon Import [6.41]"
date: 2022-08-16T06:03:00-05:00
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

The **Coupon Import** API is used to import coupon information into CHQ.

See [*How to make an import API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnImportRequest_6.41/) for a description on how import requests are made and on the standard response formats used. The API-Specific request format for this API will be described below. 

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/import/coupon**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

This import request must always be asyncronous. <span class="ir">???? Is this true? ????</span>

In the Swagger UI the **/chqapi/import/coupon** endpoint is a member of the **Stored Values** endpoint group.

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
CouponSetting | string, enum | An indicator of which value is to be used to identify coupons. Its value must be one of the following: “ExternalId”, “CouponNo”. If omitted, the default is “ExternalId”. |
CustomerSetting | string, enum | An indicator of which value is to be used to identify customers. Its value must be one of the following: "CustomerNo", "TeamworkId", "ExternalId", "PrimaryEmail", "PrimaryPhone", "MembershipCode". If omitted, the default is "CustomerNo". |
SVSZoneSetting | string, enum | An indicator of which value is to be used to identify stored value services zones. Its value must be one of the following: "Name", "TeamworkId". If omitted, the default is "Name". |
<space class="ir">??????????</span> | | <space class="ir">The below setting appears in the JSON source but is not defined in the API description supplied by the developers. This discrepancy needs to be resolved.</span> |
CouponProgramSetting | string, enum | An indicator of which value is to be used to identify coupon programs. Its value must be one of the following: "Name", "TeamworkId". If omitted, the default is "Name". |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data: Request: ImportSettings</span> |
<span class="api-gn">Data: Request: Coupons</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with one or more entries. **Required**</span> |
CouponIdentifier | string | An identifier of the coupon. |
Description | string | A description of the coupon. |
SVSZoneIdentifier | string | An identifier of the stored value services zone to which the coupon applies. |
CouponProgramIdentifier | string | An identifier of the coupon program to which the coupon belongs. |
Type | string, enum | An indicator of the coupon's type. Its value must be one of the following: "Amount", "Percentage". |
Value | number | The coupon's value. |
Email2 | string | The second email address for the customer using the coupon. <span class="ir">??????????</span> |
StartTime | string, datetime | A timestamp of when the coupon can begin being used. <span class="ir">??????????</span> |
ExpirationTime | string, datetime | A timestamp of when the coupon can no longer be used. <span class="ir">??????????</span> |
CustomerIdentifier | string | An identifier of the customer using the coupon. |
IsManuallyDeactivated | boolean | An indicator as to whether or not <span class="ir">??????????</span>. |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data: Request: Coupons</span> |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data: Request</span> |
<span class="api-gs">---</span>  | | <span class="api-gdc">continuation of Data</span> |
ApiDocumentId | string, guid | A unique identifier of the API document being used. |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data</span> |

## Request schema {#RequestSchema}

~~~
{
   "$schema":"http://json-schema.org/draft-04/schema#",
   "description":"A representation API document for coupon import",
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
                  "Coupons"
               ],
               "additionalProperties":false,
               "properties":{
                  "ImportSettings":{
                     "type":"object",
                     "additionalProperties":false,
                     "properties":{
                        "CouponSetting":{
                           "type":"string",
                           "enum":[
                              "ExternalId",
                              "CouponNo"
                           ],
                           "default":"ExternalId"
                        },
                        "CustomerSetting":{
                           "type":"string",
                           "enum":[
                              "CustomerNo",
                              "TeamworkId",
							  "ExternalId",
							  "PrimaryEmail",
							  "PrimaryPhone",
							  "MembershipCode"
                           ],
                           "default":"CustomerNo"
                        },
                        "SVSZoneSetting":{
                           "type":"string",
                           "enum":[
                              "Name",
                              "TeamworkId"
                           ],
                           "default":"Name"
                        },
                        "CouponProgramSetting":{
                           "type":"string",
                           "enum":[
                              "Name",
                              "TeamworkId"
                           ],
                           "default":"Name"
                        }
                     }
                  },
                  "Coupons":{
                     "type":"array",
                     "minItems":1,
                     "items":{
                        "type":"object",
                        "additionalProperties":false,
                        "properties":{
                           "CouponIdentifier":{
                              "type":"string"
                           },
                           "Description":{
                              "type":"string"
                           },
                           "SVSZoneIdentifier":{
                              "type":"string"
                           },
                           "CouponProgramIdentifier":{
                              "type":"string"
                           },
                           "Type":{
                              "type":"string",
                              "enum":[
                                 "Amount",
                                 "Percentage"
                              ]
                           },
                           "Value":{
                              "type":"number"
                           },
                           "Email2":{
                              "type":"string"
                           },
                           "StartTime":{
                              "type":"string",
                              "format":"date-time"
                           },
                           "ExpirationTime":{
                              "type":"string",
                              "format":"date-time"
                           },
                           "CustomerIdentifier":{
                              "type":"string"
                           },
                           "IsManuallyDeactivated":{
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

~~~
{
  "Source": "string",
  "Data": {
    "Request": {
      "ImportSettings": {
        "CouponSetting": "ExternalId",
        "CustomerSetting": "CustomerNo",
        "SVSZoneSetting": "Name",
        "CouponProgramSetting": "Name"
      },
      "Coupons": [
        {
          "CouponIdentifier": "C7711R45",
          "Description": "sample coupon",
          "SVSZoneIdentifier": "US",
          "CouponProgramIdentifier": "program one",
          "Type": "Amount",
          "Value": 100,
          "StartTime": "2021-07-13T10:25:03.655Z",
          "ExpirationTime": "2021-08-13T10:25:03.655Z",
          "CustomerIdentifier": "1000005532",
          "IsManuallyDeactivated": false
        }
      ]
    }
  }
}
~~~

---

## Response example(s) {#ResponseExamples}

**Response Example #1: In Process**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'coupon-import' rather than 'coupon'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

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
  "ApiType":"coupon-import",
  "Source":"string",
  "Response":null
}
~~~

**Response Example #2: Error**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'coupon-import' rather than 'coupon'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

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
  "ApiType": "coupon-import",
  "Source": "string"
}
~~~

**Response Example #3: Success**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'coupon-import' rather than 'coupon'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

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
   "ApiType": "coupon-import",
   "Source": "my_integration"
}
~~~

