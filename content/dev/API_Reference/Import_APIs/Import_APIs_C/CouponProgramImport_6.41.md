---
title: "Coupon Program Import [6.41]"
date: 2022-09-07T09:51:00-05:00
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

The **Coupon Program Import** API is used to import coupon program information into CHQ.

See [*How to make an import API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnImportRequest_6.41/) for a description on how import requests are made and on the standard response formats used. The API-Specific request format for this API will be described below. 

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/import/coupon-program**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

This import request must always be asyncronous. <span class="ir">???? Is this true? ????</span>

In the Swagger UI the **/chqapi/import/coupon-program** endpoint is a member of the **Stored Values** endpoint group.

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
FiscalZoneSetting | string, enum | An indicator of which value is to be used to identify fiscal zones. Its value must be one of the following: Name”, “TeamworkId”. If omitted, the default is <span class="ir">?????????</span> |
PromotionSetting | string, enum | An indicator of which value is to be used to identify promotions. Its value must be one of the following: "PromotionNo", "Name", "TeamworkId". If omitted, the default is <span class="ir">?????????</span> |
DiscountReasonSetting | string, enum | An indicator of which value is to be used to identify discount reasons. Its value must be one of the following: "Code", "ExternalId", "TeamworkId". If omitted, the default is <span class="ir">?????????</span> |
InvenItemSetting | string, enum | An indicator of which value is to be used to identify items. Its value must be one of the following: "ExternalId", "Plu", "Upc", "TeamworkId". If omitted, the default is <span class="ir">?????????</span> |
PromoGroupSetting | string, enum | An indicator of which value is to be used to identify promotion groups. Its value must be one of the following: "Name", "TeamworkId". If omitted, the default is <span class="ir">?????????</span> |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data: Request: ImportSettings</span> |
<span class="api-gn">Data: Request: CouponPrograms</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries. **Required**</span> |
ProgramName | string | An identifier of the coupon program. |
Description | string | A description of the coupon program. |
DiscountType | string, enum | An indicator of which value is to be used to identify the program's discount type. Its value must be one of the following: "Line", "Global", "Promo". |
DiscountReasonIdentifier | string | An identifier of the program's discount reason. |
Inactive | boolean | An indicator as to whether or not the program is active. |
RestrictionType | string, enum | An indicator of which value is to be used to identify the program's restriction type. Its value must be one of the following: "None", "PromoGroups", "Items". |
PromoGroupFilterType | string, enum | An indicator of which value is to be used to identify the program's filter type. Its value must be one of the following: "Any", "Selected". |
CouponCustomerUsage | string, enum | An indicator of <span class="ir">??????????</span>. Its value must be one of the following: "Specific", "Any". |
UsageLimitation | string, enum | An indicator of the usage limitations for coupons in the program.<span class="ir">??????????</span> Its value must be one of the following: "Restricted", "Unlimited". |
NumberOfUses | int32 | The number of times a coupon in the program can be used by a customer. |
UsesApplyType | string, enum | An indicator of type of transaction is considered a *use* of a coupon in the program. Its value must be one of the following: "Transaction", "Line". |
FiscalZoneIdentifier | string | An identifier of the fiscal zone which applies to the program's coupons. |
ReplaceOnReturn | boolean | An indicator as to whether a coupon *use* should be replaced on a coupon if the purchase is returned.<span class="ir">??????????</span> |
ReplacementExpirationPolicy | string, enum | An indicator of policy type regarding replacement expiration for coupons in the program. Its value must be one of the following: "NoExpiration", "Period". |
ReplacementExpirationDays | int32 | The number days in the expiration period. |
CustomText1 - 6 | string | These six fields are customizable text values for the program. |
PromotionIdentifier | string | An identifier of the promotion to which the coupon program applies.<span class="ir">??????????</span>|
RestrictionIdentifiers | string, occurs:0-* | An identifier of a promotion group or item. If the **RestrictionType** value is "PromoGroups" or "Items", there must be at least one occurrance of this field.</span> |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data: Request: CouponPrograms</span> |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data: Request</span> |
<span class="api-gs">---</span>  | | <span class="api-gdc">continuation of Data</span> |
ApiDocumentId | string, guid | A unique identifier of the API document being used. |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data</span> |

## Request schema {#RequestSchema}

~~~
{
   "$schema":"http://json-schema.org/draft-04/schema#",
   "description":"A representation API document for coupon programs import",
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
                  "CouponPrograms"
               ],
               "additionalProperties":false,
               "properties":{
                  "ImportSettings":{
                     "type":"object",
                     "additionalProperties":false,
                     "properties":{
                        "FiscalZoneSetting":{
                           "enum":[
                              "Name",
                              "TeamworkId"
                           ],
                           "type":"string"
                        },
                        "PromotionSetting":{
                           "enum":[
                              "PromotionNo",
                              "Name",
                              "TeamworkId"
                           ],
                           "type":"string"
                        },
                        "DiscountReasonSetting":{
                           "enum":[
                              "Code",
                              "ExternalId",
                              "TeamworkId"
                           ],
                           "type":"string"
                        },
                        "InvenItemSetting":{
                           "enum":[
                              "ExternalId",
                              "Plu",
                              "Upc",
                              "TeamworkId"
                           ],
                           "type":"string"
                        },
                        "PromoGroupSetting":{
                           "enum":[
                              "Name",
                              "TeamworkId"
                           ],
                           "type":"string"
                        }
                     }
                  },
                  "CouponPrograms":{
                     "type":"array",
                     "properties":{
                        "ProgramName":{
                           "type":"string"
                        },
                        "Description":{
                           "type":"string"
                        },
                        "DiscountType":{
                           "enum":[
                              "Line",
                              "Global",
                              "Promo"
                           ],
                           "type":"string"
                        },
                        "DiscountReasonIdentifier":{
                           "type":"string"
                        },
                        "Inactive":{
                           "type":"boolean"
                        },
                        "RestrictionType":{
                           "enum":[
                              "None",
                              "PromoGroups",
                              "Items"
                           ],
                           "type":"string"
                        },
                        "PromoGroupFilterType":{
                           "enum":[
                              "Any",
                              "Selected"
                           ],
                           "type":"string"
                        },
                        "CouponCustomerUsage":{
                           "enum":[
                              "Specific",
                              "Any"
                           ],
                           "type":"string"
                        },
                        "UsageLimitation":{
                           "enum":[
                              "Restricted",
                              "Unlimited"
                           ],
                           "type":"string"
                        },
                        "NumberOfUses":{
                           "format":"int32",
                           "type":"integer"
                        },
                        "UsesApplyType":{
                           "enum":[
                              "Transaction",
                              "Line"
                           ],
                           "type":"string"
                        },
                        "FiscalZoneIdentifier":{
                           "type":"string"
                        },
                        "ReplaceOnReturn":{
                           "type":"boolean"
                        },
                        "ReplacementExpirationPolicy":{
                           "enum":[
                              "NoExpiration",
                              "Period"
                           ],
                           "type":"string"
                        },
                        "ReplacementExpirationDays":{
                           "format":"int32",
                           "type":"integer"
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
                        "PromotionIdentifier":{
                           "type":"string"
                        },
                        "RestrictionIdentifiers":{
                           "type":"array",
                           "items":{
                              "type":"string"
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
  "Source": "test-import",
  "Data": {
    "Request": {
      "ImportSettings": {
        "FiscalZoneSetting": "Name",
        "PromotionSetting": "PromotionNo",
        "DiscountReasonSetting": "Code",
        "InvenItemSetting": "ExternalId",
        "PromoGroupSetting": "Name"
      },
      "CouponPrograms": [
        {
          "ProgramName": "imported-pr",
          "Description": "test text description",
          "DiscountType": "Global",
          "DiscountReasonIdentifier": "IMPORT_TEST_CODE",
          "RestrictionType": "None",
          "PromoGroupFilterType": "Any",
          "CouponCustomerUsage": "Any",
          "UsageLimitation": "Restricted",
          "NumberOfUses": 10,
          "UsesApplyType": "Transaction",
          "FiscalZoneIdentifier": "lrp-euro",
          "ReplacementExpirationPolicy": "NoExpiration",
          "CustomText1": "ct1",
          "CustomText2": "ct2",
          "CustomText3": "ct3",
          "CustomText4": "ct4",
          "CustomText5": "ct5",
          "CustomText6": "ct16"        
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

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'coupon-import' rather than 'coupon-program'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

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

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'coupon-import' rather than 'coupon-program'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

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

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'coupon-import' rather than 'coupon-program'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

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

