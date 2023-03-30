---
title: "ASN Import [6.41]"
date: 2022-09-06T08:31:00-05:00
draft: false
weight: 1914
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

The **ASN Import** API is used to import advance ship notices (ASNs) into CHQ.

See [*How to make an import API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnImportRequest_6.41/) for a description on how import requests are made and on the standard response formats used. The API-Specific request format for this API will be described below. 

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/import/asn**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

This import request must always be asyncronous. <span class="ir">???? Is this true? ????</span>

---

## Request format {#RequestFormat}

Any field not explicitly marked as **Required** is optional and can be omitted. See  [*JSON Data Types*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/JsonDataTypes_6.41/) for a description of the values which could appear in the **Data Type** column.

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
Source | string | The source of the data being supplied to the import. **Required** |
CommunicationId | string, guid | A unique identifier of the request (see [*Handling the CommunicationId parameter*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/HandlingTheCommunicationIdParam_6.41/) for additional info). |
<span class="api-gn">Data</span> | | <span class="api-gd">A group containing the following fields and groups. **Required**</span> |
<span class="api-gn">Data: Request</span> | | <span class="api-gd">A group containing the following fields and groups. **Required**</span> |
<span class="api-gn">Data: Request: Settings:</span> | | <span class="api-gd">A group containing the following fields and groups. **Required**</span> |
ItemSetting | string, enum | An indicator of which value is to be used to identify items. Its value must be one of the following: “ExternalId”, “Plu”, “Clu”, “Upc”. If omitted, the default is "Plu". |
VendorSetting | string, enum | An indicator of which value is to be used to identify vendors. Its value must be one of the following: “No”, “Name”. If omitted, the default is "Name". |
LocationSetting | string, enum | An indicator of which value is to be used to identify locations. Its value must be one of the following: “Code”, “TeamworkId”, “ExternalId”. If omitted, the default is "Code". |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data: Request: Settings</span> |
<span class="api-gn">Data: Request: Asns</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with 1 to 10 entries. **Required**</span> |
AsnNo | string | An identifier of the advance ship notice. |
DeliveryNo | string, len:1-30 | <span class="ir">?????????</span> |
LocationCode | string , len:1-128 | An identifier of the delivery location. <span class="ir">?????????</span> |
Vendor | string , len:1-30 | An identifier of the vendor. |
PayToVendor | string, len:1-30 | An identifier of the pay to vendor. |
CurrencyCode |string len:1-10 | An identifier of the currency to be used for payment. <span class="ir">?????????</span> |
CurrencyExchangeRate | number, null | The currency's exchange rate. |
AsnDate | string, datetime | A timestamp of when the ASN was created. <span class="ir">?????????</span> |
PurchaseOrderNo | string, len:1-64 | An identifier of the purchase order to which the ASN applies. |
VendorOrderNo | string, len:0-30 | An identifier of the vendor order to which the ASN applies. <span class="ir">?????????</span> |
VendorInvoiceNo | string, len:0-30 | An identifier of the vendor order to twhie the ASN applies. <span class="ir">?????????</span> |
ShippingMethodCode | string , len:1-128 | An identifier of the shipping method to be used. |
ShipDate | string, datetime, null | A timestamp of when the shipment is expected to occur/has occurred. <span class="ir">?????????</span> |
TrackingNo | string, len:1-30 | THe tracking number for the ASN. <span class="ir">?????????</span> |
IsHeld | boolean | An indicator as to whether or not the ASN is being held.<span class="ir">?????????</span> |
Notes | string | Misc. notes about the ASN. |
CustomDate1 - 4 | string, datetime, null | These four fields are customizable date values for the ASN. |
CustomFlag1 - 4 | boolean, null | These four fields are customizable flags for the ASN. |
CustomLookup1 - 8 | string, len:1-128 | These eight fields are customizable lookup values for the ASN. |
CustomDecimal1 - 4 | number, range:-792281625 - 792281625, null | These four fields are customizable floating-point values for the ASN. |
CustomNumber1 - 4 | integer, null | These four fields are customizable integer values for the ASN. |
CustomText1 - 4 | string, len:0-256 | These four fields are customizable text values for the ASN. |
<span class="api-gn">Data: Request: Asns: Items</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with 1 or more entries.</span> |
ItemIdentifier | string, len:1-40 | An identifier of the item. |
LineNo | integer, null | The line in the ASN which contains the item. <span class="ir">?????????</span> |
Quantity | number, range:0-792281625, xmin | The item's quantity. |
UnitCost | number, range:0-792281625 | The unit cost of the item. |
CartonId | string | An identifier of the shipping carton which contains the item. <span class="ir">?????????</span> |
Notes | string | Misc. notes about the item. |
PurchaseOrderNo | string, len:1-64 | An identifier of the purchase order which contains the item. |
PurchaseOrderLineNo | integer | The line in the purchase order which contains the item. |
InvoiceNo | string, len:0-30 | An identifier of the invoice which contains the item. |
InvoiceLineNo | string, len:0-30 | The line in the invoice which contains the item.
CustomDate1 - 2 | string, datetime, null | These two fields are customizable date values for the item. |
CustomFlag1 - 2 | boolean, null | These two fields are customizable flags for the item. |
CustomLookup1 - 4 | string, len:1-128 | These four fields are customizable lookup values for the item. |
CustomDecimal1 - 2 | number, range:-792281625 - 792281625, null | These two fields are customizable floating-point values for the item. |
CustomNumber1 - 2 | integer, null | These two fields are customizable integer values for the item. |
CustomText1 - 2 | string", len:0-256 | These two fields are customizable text values for the item. |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data: Request: Asns: Items</span> |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data: Request: Asns</span> |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data: Request</span> |
<span class="api-gs">---</span> |  | <span class="api-gdc">continuation of Data</span> |
ApiDocumentId | string, guid | A unique identifier of the API document being used. |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data</span> |

## Request schema {#RequestSchema}

~~~
{
  "$schema":"http://json-schema.org/draft-04/schema#",
  "description":"A representation API document for simplified ASN import",
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
            "Asns"
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
                    "ExternalId",
                    "Plu",
                    "Clu",
                    "Upc"
                  ]
                },
                "VendorSetting":{
                  "type":"string",
                  "enum":[
                    "No",
                    "Name"
                  ]
                },
                "LocationSetting":{
                  "type":"string",
                  "enum":[
                    "Code",
                    "TeamworkId",
                    "ExternalId"
                  ]
                }
              }
            },
            "Asns":{
              "type":"array",
              "minItems":1,
              "maxItems":10,
              "items":{
                "type":"object",
                "additionalProperties":false,
                "properties":{
                  "AsnNo":{
                    "type":"string"
                  },
                  "DeliveryNo":{
                    "type":"string",
                    "minLength":1,
                    "maxLength":30
                  },
                  "LocationCode":{
                    "type":"string",
                    "minLength":1,
                    "maxLength":128
                  },
                  "Vendor":{
                    "type":"string",
                    "minLength":1,
                    "maxLength":30
                  },
                  "PayToVendor":{
                    "type":"string",
                    "minLength":1,
                    "maxLength":30
                  },
                  "CurrencyCode":{
                    "type":"string",
                    "minLength":1,
                    "maxLength":10
                  },
                  "CurrencyExchangeRate":{
                    "type":[
                      "number",
                      "null"
                    ],
                    "minimum":0,
                    "maximum":792281625
                  },
                  "AsnDate":{
                    "type":"string",
                    "format":"date-time"
                  },
                  "PurchaseOrderNo":{
                    "type":"string",
                    "minLength":1,
                    "maxLength":64
                  },
                  "VendorOrderNo":{
                    "type":"string",
                    "maxLength":30
                  },
                  "VendorInvoiceNo":{
                    "type":"string",
                    "maxLength":30
                  },
                  "ShippingMethodCode":{
                    "type":"string",
                    "minLength":1,
                    "maxLength":128
                  },
                  "ShipDate":{
                    "type":[
                      "string",
                      "null"
                    ],
                    "format":"date-time"
                  },
                  "TrackingNo":{
                    "type":"string",
                    "minLength":1,
                    "maxLength":30
                  },
                  "IsHeld":{
                    "type":"boolean"
                  },
                  "Notes":{
                    "type":"string"
                  },
                  "CustomDate1":{
                    "type":[
                      "string",
                      "null"
                    ],
                    "format":"date-time"
                  },
                  "CustomDate2":{
                    "type":[
                      "string",
                      "null"
                    ],
                    "format":"date-time"
                  },
                  "CustomDate3":{
                    "type":[
                      "string",
                      "null"
                    ],
                    "format":"date-time"
                  },
                  "CustomDate4":{
                    "type":[
                      "string",
                      "null"
                    ],
                    "format":"date-time"
                  },
                  "CustomFlag1":{
                    "type":[
                      "boolean",
                      "null"
                    ]
                  },
                  "CustomFlag2":{
                    "type":[
                      "boolean",
                      "null"
                    ]
                  },
                  "CustomFlag3":{
                    "type":[
                      "boolean",
                      "null"
                    ]
                  },
                  "CustomFlag4":{
                    "type":[
                      "boolean",
                      "null"
                    ]
                  },
                  "CustomLookup1":{
                    "type":"string",
                    "minLength":1,
                    "maxLength":128
                  },
                  "CustomLookup2":{
                    "type":"string",
                    "minLength":1,
                    "maxLength":128
                  },
                  "CustomLookup3":{
                    "type":"string",
                    "minLength":1,
                    "maxLength":128
                  },
                  "CustomLookup4":{
                    "type":"string",
                    "minLength":1,
                    "maxLength":128
                  },
                  "CustomLookup5":{
                    "type":"string",
                    "minLength":1,
                    "maxLength":128
                  },
                  "CustomLookup6":{
                    "type":"string",
                    "minLength":1,
                    "maxLength":128
                  },
                  "CustomLookup7":{
                    "type":"string",
                    "minLength":1,
                    "maxLength":128
                  },
                  "CustomLookup8":{
                    "type":"string",
                    "minLength":1,
                    "maxLength":128
                  },
                  "CustomDecimal1":{
                    "type":[
                      "number",
                      "null"
                    ],
                    "minimum":-792281625,
                    "maximum":792281625
                  },
                  "CustomDecimal2":{
                    "type":[
                      "number",
                      "null"
                    ],
                    "minimum":-792281625,
                    "maximum":792281625
                  },
                  "CustomDecimal3":{
                    "type":[
                      "number",
                      "null"
                    ],
                    "minimum":-792281625,
                    "maximum":792281625
                  },
                  "CustomDecimal4":{
                    "type":[
                      "number",
                      "null"
                    ],
                    "minimum":-792281625,
                    "maximum":792281625
                  },
                  "CustomNumber1":{
                    "type":[
                      "integer",
                      "null"
                    ]
                  },
                  "CustomNumber2":{
                    "type":[
                      "integer",
                      "null"
                    ]
                  },
                  "CustomNumber3":{
                    "type":[
                      "integer",
                      "null"
                    ]
                  },
                  "CustomNumber4":{
                    "type":[
                      "integer",
                      "null"
                    ]
                  },
                  "CustomText1":{
                    "type":"string",
                    "maxLength":256
                  },
                  "CustomText2":{
                    "type":"string",
                    "maxLength":256
                  },
                  "CustomText3":{
                    "type":"string",
                    "maxLength":256
                  },
                  "CustomText4":{
                    "type":"string",
                    "maxLength":256
                  },
                  "Items":{
                    "type":"array",
                    "minItems":1,
                    "items":{
                      "type":"object",
                      "additionalProperties":false,
                      "properties":{
                        "ItemIdentifier":{
                          "type":"string",
                          "minLength":1,
                          "maxLength":40
                        },
                        "LineNo":{
                          "type":[
                            "integer",
                            "null"
                          ]
                        },
                        "Quantity":{
                          "type":"number",
                          "minimum":0,
                          "maximum":792281625,
                          "exclusiveMinimum":true
                        },
                        "UnitCost":{
                          "type":"number",
                          "minimum":0,
                          "maximum":792281625
                        },
                        "CartonId":{
                          "type":"string"
                        },
                        "Notes":{
                          "type":"string"
                        },
                        "PurchaseOrderNo":{
                          "type":"string",
                          "minLength":1,
                          "maxLength":64
                        },
                        "PurchaseOrderLineNo":{
                          "type":"integer"
                        },
                        "InvoiceNo":{
                          "type":"string",
                          "maxLength":30
                        },
                        "InvoiceLineNo":{
                          "type":"string",
                          "maxLength":30
                        },
                        "CustomDate1":{
                          "type":[
                            "string",
                            "null"
                          ],
                          "format":"date-time"
                        },
                        "CustomDate2":{
                          "type":[
                            "string",
                            "null"
                          ],
                          "format":"date-time"
                        },
                        "CustomFlag1":{
                          "type":[
                            "boolean",
                            "null"
                          ]
                        },
                        "CustomFlag2":{
                          "type":[
                            "boolean",
                            "null"
                          ]
                        },
                        "CustomLookup1":{
                          "type":"string",
                          "minLength":1,
                          "maxLength":128
                        },
                        "CustomLookup2":{
                          "type":"string",
                          "minLength":1,
                          "maxLength":128
                        },
                        "CustomLookup3":{
                          "type":"string",
                          "minLength":1,
                          "maxLength":128
                        },
                        "CustomLookup4":{
                          "type":"string",
                          "minLength":1,
                          "maxLength":128
                        },
                        "CustomDecimal1":{
                          "type":[
                            "number",
                            "null"
                          ],
                          "minimum":-792281625,
                          "maximum":792281625
                        },
                        "CustomDecimal2":{
                          "type":[
                            "number",
                            "null"
                          ],
                          "minimum":-792281625,
                          "maximum":792281625
                        },
                        "CustomNumber1":{
                          "type":[
                            "integer",
                            "null"
                          ]
                        },
                        "CustomNumber2":{
                          "type":[
                            "integer",
                            "null"
                          ]
                        },
                        "CustomText1":{
                          "type":"string",
                          "maxLength":256
                        },
                        "CustomText2":{
                          "type":"string",
                          "maxLength":256
                        }
                      }
                    }
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
    "Source": "integrator",
    "Data": {
        "Request": {
            "Settings": {
                "ItemSetting": "Plu",
                "VendorSetting": "No",
                "LocationSetting": "Code"
            },
            "Asns": [
                {
                    "AsnNo": "str1234",
                    "DeliveryNo": "str1234",
                    "LocationCode": "LOC1",
                    "Vendor": "5",
                    "PayToVendor": "5",
                    "CurrencyCode": "asd",
                    "CurrencyExchangeRate": 123.45,
                    "AsnDate": "2012-12-13T12:12:12",
                    "PurchaseOrderNo": "str1234",
                    "VendorOrderNo": "str1234",
                    "VendorInvoiceNo": "str1234",
                    "ShippingMethodCode": "FEDEX",
                    "ShipDate": "2012-12-13T12:12:12",
                    "TrackingNo": "str1234",
                    "IsHeld": true,
                    "Notes": "str1234",
                    "CustomDate1": "2012-12-13T12:12:12",
                    "CustomDate2": "2012-12-13T12:12:12",
                    "CustomDate3": "2012-12-13T12:12:12",
                    "CustomDate4": "2012-12-13T12:12:12",
                    "CustomDecimal1": 123.45,
                    "CustomDecimal2": 123.45,
                    "CustomDecimal3": 123.45,
                    "CustomDecimal4": 123.45,
                    "CustomFlag1": true,
                    "CustomFlag2": true,
                    "CustomFlag3": true,
                    "CustomFlag4": true,
                    "CustomLookup1": "str1234",
                    "CustomLookup2": "str1234",
                    "CustomLookup3": "str1234",
                    "CustomLookup4": "str1234",
                    "CustomLookup5": "str1234",
                    "CustomLookup6": "str1234",
                    "CustomLookup7": "str1234",
                    "CustomLookup8": "str1234",
                    "CustomNumber1": 123,
                    "CustomNumber2": 123,
                    "CustomNumber3": 123,
                    "CustomNumber4": 123,
                    "CustomText1": "str1234",
                    "CustomText2": "str1234",
                    "CustomText3": "str1234",
                    "CustomText4": "str1234",
                    "Items": [
                        {
                            "ItemIdentifier": "5370",
                            "LineNo": 1,
                            "Quantity": 123.45,
                            "UnitCost": 123.45,
                            "CartonId": "str1234",
                            "Notes": "str1234",
                            "PurchaseOrderNo": "str1234",
                            "PurchaseOrderLineNo": 1,
                            "InvoiceNo": "str1234",
                            "InvoiceLineNo": "str1234",
                            "CustomDate1": "2012-12-13T12:12:12",
                            "CustomDate2": "2012-12-13T12:12:12",
                            "CustomDecimal1": 123.45,
                            "CustomDecimal2": 123.45,
                            "CustomFlag1": true,
                            "CustomFlag2": true,
                            "CustomLookup1": "str1234",
                            "CustomLookup2": "str1234",
                            "CustomLookup3": "str1234",
                            "CustomLookup4": "str1234",
                            "CustomNumber1": 123,
                            "CustomNumber2": 123,
                            "CustomText1": "str1234",
                            "CustomText2": "str1234"
                        }
                    ]
                }
            ]
        }
    }
}
~~~

---

## Response example(s) {#ResponseExamples}

**Response Example #1: In Process**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'simplified-asn-import' rather than 'asn'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

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
   "ApiType": "simplified-asn-import",
   "Source": "my_integration"
}
~~~

**Response Example #2: Error**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'simplified-asn-import' rather than 'asn'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

~~~
{
  "Id": "8f5761ad-4b3d-4555-a2e6-10729dbd98ca",
  "Status": "Error",
  "Progress": null,
  "TotalRecords": null,
  "AcceptedRecords": null,
  "ErrorRecords": null,
  "ElapsedTime": null,
  "ErrorMessage": "Import error.",
  "Lines": [
    {
      "EntityNo": "11",
      "EntityId": "f7512bf8-15ea-4528-9e36-6bfebcfeb5f4",
      "Error": "Error : location 'LOC11' does not exist; asn delivery # 'str1234'.",
      "Status": "Error"
    }
  ],
  "ApiType": "simplified-asn-import",
  "Source": "integrator"
}
~~~

**Response Example #3: Success**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'simplified-asn-import' rather than 'asn'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

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
   "ApiType": "simplified-asn-import",
   "Source": "my_integration"
}
~~~
