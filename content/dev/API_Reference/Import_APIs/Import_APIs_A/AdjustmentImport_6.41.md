---
title: "Adjustment Import [6.41]"
date: 2022-02-09T12:58:00-05:00
draft: false
weight: 0410
---
<!-- Weight => sstt; ss=>2nd letter's nbr/tt=>3rd letter's nbr (w/leading zeros) -->

<!-- begin comment block (when active)-------------------- -->
{{% notice warning %}}
The API Reference is currently under construction and its contents should not be used until further notice.
{{% /notice %}}

- [Overview](#Overview)
- &nbsp;&nbsp;&nbsp;&nbsp;[Reversing Adjustments](#ReversingAdjustments)
- [Request endpoint](#RequestEndpoint)
- [Request format](#RequestFormat)
- [Request schema](#RequestSchema)
- [Request example(s)](#RequestExamples)
- [Response example(s)](#ResponseExamples)
- [Typical errors and warnings](#ErrorsAndWarnings)

---
<!-- end comment block (when active)-------------------- -->

## Overview {#Overview}

The **Adjustment Import** API is used to import item quantity adjustment information into CHQ. This allows for adjusting item quantities for a given location.

See [*How to make an import API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnImportRequest_6.41/) for a description on how import requests are made and on the standard response formats used. The API-Specific request format for this API will be described below. 

### Reversing Adjustments {#ReversingAdjustments}

<span class="ir">????????? I am including this description of Reversing Adjustments because it is in the original Confluence documentation. However, the description references fields which are not part of the JSON schema provided by the developers. So, either this description is obsolete or incorrect, or the JSON schema is incorrect. This needs to be resolved. ??????????</span>

It is possible to create a new adjustment which will reverse an existing one.

To perform this action the adjustment should include the **ReversedDocumentIdentifier**, **ExternalId**, and, optionally, **AdjustmentIdentifierSetting** fields.

The **ReversedDocumentIdentifier** contains the unique identifier of an already existing adjustment, which is not in the "Held" status and is not *void*.

The ExternalId field is also required and is used as an identifier of the newly created Adjustment. 

Optionally, to validate which value is expected in the **ReversedDocumentIdentifier** field, the **AdjustmentIdentifierSetting** parameter can be used.

When requesting to reverse an adjustment, the **Items** group should not be supplied.

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/import/adjustment**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

This import request must always be asyncronous.

In the Swagger UI the **/chqapi/import/adjustment** endpoint is a member of the **Adjustment** endpoint group.

---

## Request format {#RequestFormat}

Any field not explicitly marked as **Required** is optional and can be omitted. See  [*JSON Data Types*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/JsonDataTypes_6.41/) for a description of the values which could appear in the **Data Type** column.

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
Source | string | The source of the data being supplied to the import. **Required** |
CommunicationId | string, guid | A unique identifier of the request (see [*Handling the CommunicationId parameter*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/HandlingTheCommunicationIdParam_6.41/) for additional info). |
<span class="api-gn">Data</span> | | <span class="api-gd">A group containing the following fields and groups. **Required**</span> |
<span class="api-gn">Data: Request</span> | | <span class="api-gd">A group containing the following fields and groups. **Required**</span> |
<span class="api-gn">Data: Request: ImportSettings</span> | | <span class="api-gd">A group containing the following fields and groups. |
ItemSetting | string, enum | An indicator of which value is to be used to identify items. Its value must be one of the following: “ExternalId”, “Plu”, “Clu”, “Upc”. If omitted, the default is "Plu". |
DiscardUserSession | boolean | An indicator as to whether or not an adjustment can be edited via an API request if the same adjustment is being edited elsewhere at the moment of the request execution. If omitted, the default is False.|
LocationSetting | string, enum | An indicator of which value is to be used to identify locations. Its value must be one of the following: “Code”, “TeamworkId”, “ExternalId”. If omitted, the default is "Code". |
AdjustmentReasonSetting | string, enum | An indicator as to which value is to be used to identify adjustment reasons. Its value must be one of the following: "TeamworkId", "Code", "ExternalId". If omitted, the default is "Code". |
<space class="ir">??????????</span> | | <space class="ir">The below settings are defined in the API description but do not appear in the JSON source supplied by the developers. This discrepancy needs to be resolved.</span> |
MaxAcceptableSeverity | string, enum | An indicator of the processing to be done when an error occurs during processing. Its value must be one of the following: "Information", "Warning". If omitted, the default is "Information".<br><br>When "Information" is requested, all supplied adjustments will be processed as a group and no adjustments will be made to the database if at least one error was encountered during validation of the import document.<br><br>When "Warning" is requested, each adjustment supplied will be processed individually and if there are no errors validating a given adjustment, that adjustment will be applied to the database. If there was an error validating a given adjustment, that adjustment only will not be applied to the database. |
ImportHoldReasonSetting | string, enum | An indicator of which value is to be used to identify hold reasons. Its value must be one of the following: "Code", "TeamworkId". If omitted, the default is "Code". |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data: Request: ImportSettings</span> |
<span class="api-gn">Data: Request: Adjustments</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries. **Required**</span> |
<space class="ir">***??????????***</span> | | <space class="ir">There is a significant difference between the fields described in the API description and those which appear in the JSON source supplied by the developers. The below fields are based upon the JSON source. This discrepancy needs to be resolved.</span> |
AdjustmentId | string, guid | A unique identifier of the adjustment. |
ExternalId | string, len:1-100, null | An identifier of the adjustment used when interacting with an external system. |
AdjustmentNo | integer | A numeric identifier of the adjustment. |
DeviceTransactionNumber | integer | The adjustment's transaction number on the device used. |
AdjustmentDate | string, datetime | A timestamp of when the adjustment was created. <span class="ir">***????????***</span> |
PostingDateTime | string, datetime, null | A timestamp of when the adjustment was posted. |
Location | string, len:1-50 | An identifier of the location of the adjustment. |
Notes | string, null | Misc. notes about the adjustment. |
CustomDate1 - 4 | string, datetime, null | These four fields are customizable date values for the adjustment. |
CustomDecimal - 4 | number, range:-792281625 - 792281625, null | These four fields are customizable floating-point values for the adjustment. |
CustomFlag1 - 4 | boolean, null | These four fields are customizable flags for the adjustment. |
CustomLookup1 - 8 | string, len:1-128, null | These eight fields are customizable lookup values for the adjustment. |
CustomNumber1 - 4 | integer, null | These four fields are customizable integer values for the adjustment. |
CustomText1 - 4 | string, len:0-256, null | These four fields are customizable text values for the adjustment. |
BasedOn | string, enum, null | An indicator of which quantity value the adjustment is based on. Its value must be one of the following: “AdjustmentQty”, “ActualQty”. |
AdjustmentReason | string, len:0-128 | The reason for the adjustment. |
IsHeld | boolean | An indicator as to whether or not the adjustment is being held. |
<span class="api-gn">Data: Request: Adjustments: Items</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
AdjustmentItemId | string, guid | A unique identifier of the item being adjusted. |
ExternalId | string, len:1-100, null | An identifier of the adjusted item used when interacting with an external system. |
LineNo | integer, range:0-*  | An identifier of the line in the adjustment where the item appears. |
ItemIdentifier | string, len:1-40, null | An identifier of the adjusted item. |
Quantity | number | The adjusted quantity for the item. |
UnitCost | number | The adjusted item’s unit cost. |
Notes | string, null | Misc. notes about the adjustment item. |
CustomDate1 - 2 | string, datetime, null | These two fields are customizable date values for the item. |
CustomDecimal - 2 | number, range:-792281625 - 792281625, null | These two fields are customizable floating-point values for the item. |
CustomFlag1 - 2 | boolean, null | These two fields are customizable flags for the item. |
CustomLookup1 - 4 | string, len:1-128, null | These four fields are customizable lookup values for the item. |
CustomNumber1 - 2 | integer, null | These two fields are customizable integer values for the item. |
CustomText1 - 2 | string, len:0-256, null | These two fields are customizable text values for the item. |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data: Request: Adjustments: Items</span> |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data: Request: Adjustments</span> |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data: Request</span> |
<span class="api-gs">---</span> |  | <span class="api-gdc">continuation of Data</span> |
ApiDocumentId | string, guid | A unique identifier of the API document being used. |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Data</span> |
ApiDocumentId | string, guid | A unique identifier of the API document being used. |

{{% notice warning %}}
If the **BasedOn** value is "ActualQty", you should either ***NOT*** specify **AdjustmentDate** and/or **PostingDateTime** values **or** the values should be later than any other existing adjustment.
{{% /notice %}}

## Request schema {#RequestSchema}

~~~
{
  "$schema":"http://json-schema.org/draft-04/schema#",
  "description":"A representation API document for simplified adjustment import",
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
            "Adjustments"
          ],
          "additionalProperties":false,
          "properties":{
            "ImportSettings":{
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
                "DiscardUserSession":{
                  "type":"boolean"
                },
                "LocationSetting":{
                  "type":"string",
                  "enum":[
                    "TeamworkId",
                    "Code",
                    "ExternalId"
                  ]
                },
                "AdjustmentReasonSetting":{
                  "type":"string",
                  "enum":[
                    "TeamworkId",
                    "Code",
                    "ExternalId"
                  ]
                }
              }
            },
            "Adjustments":{
              "type":"array",
              "items":{
                "type":"object",
                "additionalProperties":false,
                "properties":{
                  "AdjustmentId":{
                    "$ref":"#/definitions/GUID"
                  },
                  "ExternalId":{
                    "type":[
                      "string",
                      "null"
                    ],
                    "minLength":1,
                    "maxLength":100
                  },
                  "AdjustmentNo":{
                    "type":"integer"
                  },
                  "DeviceTransactionNumber":{
                    "type":"integer"
                  },
                  "AdjustmentDate":{
                    "type":"string",
                    "format":"date-time"
                  },
                  "PostingDateTime":{
                    "type":[
                      "string",
                      "null"
                    ],
                    "format":"date-time"
                  },
                  "Location":{
                    "type":"string",
                    "minLength":1,
                    "maxLength":50
                  },
                  "Notes":{
                    "type":[
                      "string",
                      "null"
                    ]
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
                    "type":[
                      "string",
                      "null"
                    ],
                    "minLength":1,
                    "maxLength":128
                  },
                  "CustomLookup2":{
                    "type":[
                      "string",
                      "null"
                    ],
                    "minLength":1,
                    "maxLength":128
                  },
                  "CustomLookup3":{
                    "type":[
                      "string",
                      "null"
                    ],
                    "minLength":1,
                    "maxLength":128
                  },
                  "CustomLookup4":{
                    "type":[
                      "string",
                      "null"
                    ],
                    "minLength":1,
                    "maxLength":128
                  },
                  "CustomLookup5":{
                    "type":[
                      "string",
                      "null"
                    ],
                    "minLength":1,
                    "maxLength":128
                  },
                  "CustomLookup6":{
                    "type":[
                      "string",
                      "null"
                    ],
                    "minLength":1,
                    "maxLength":128
                  },
                  "CustomLookup7":{
                    "type":[
                      "string",
                      "null"
                    ],
                    "minLength":1,
                    "maxLength":128
                  },
                  "CustomLookup8":{
                    "type":[
                      "string",
                      "null"
                    ],
                    "minLength":1,
                    "maxLength":128
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
                    "type":[
                      "string",
                      "null"
                    ],
                    "minLength":0,
                    "maxLength":256
                  },
                  "CustomText2":{
                    "type":[
                      "string",
                      "null"
                    ],
                    "minLength":0,
                    "maxLength":256
                  },
                  "CustomText3":{
                    "type":[
                      "string",
                      "null"
                    ],
                    "minLength":0,
                    "maxLength":256
                  },
                  "CustomText4":{
                    "type":[
                      "string",
                      "null"
                    ],
                    "minLength":0,
                    "maxLength":256
                  },
                  "BasedOn":{
                    "type":[
                      "string",
                      "null"
                    ],
                    "enum":[
                      "AdjustmentQty",
                      "ActualQty"
                    ]
                  },
                  "AdjustmentReason":{
                    "type":"string",
                    "minLength":0,
                    "maxLength":128
                  },
                  "IsHeld":{
                    "type":"boolean"
                  },
                  "Items":{
                    "type":"array",
                    "items":{
                      "type":"object",
                      "additionalProperties":false,
                      "properties":{
                        "AdjustmentItemId":{
                          "$ref":"#/definitions/GUID"
                        },
                        "ExternalId":{
                          "type":[
                            "string",
                            "null"
                          ],
                          "minLength":1,
                          "maxLength":100
                        },
                        "LineNo":{
                          "type":"integer",
                          "minimum":0
                        },
                        "ItemIdentifier":{
                          "type":[
                            "string",
                            "null"
                          ],
                          "minLength":1,
                          "maxLength":40
                        },
                        "Quantity":{
                          "type":"number"
                        },
                        "UnitCost":{
                          "type":"number"
                        },
                        "Notes":{
                          "type":[
                            "string",
                            "null"
                          ]
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
                          "type":[
                            "string",
                            "null"
                          ],
                          "minLength":1,
                          "maxLength":128
                        },
                        "CustomLookup2":{
                          "type":[
                            "string",
                            "null"
                          ],
                          "minLength":1,
                          "maxLength":128
                        },
                        "CustomLookup3":{
                          "type":[
                            "string",
                            "null"
                          ],
                          "minLength":1,
                          "maxLength":128
                        },
                        "CustomLookup4":{
                          "type":[
                            "string",
                            "null"
                          ],
                          "minLength":1,
                          "maxLength":128
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
                          "type":[
                            "string",
                            "null"
                          ],
                          "minLength":0,
                          "maxLength":256
                        },
                        "CustomText2":{
                          "type":[
                            "string",
                            "null"
                          ],
                          "minLength":0,
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
      "ImportSettings":{
         "ItemSetting":"Plu",
         "LocationSetting":"Code",
         "AdjustmentReasonSetting":"Code",
         "DiscardUserSession":false
      },
      "Adjustments":[
         {
            "AdjustmentDate":"2019-02-14T14:52:56.361Z",
            "PostingDateTime":"2019-02-14T14:52:56.361Z",
            "Location":"HQ",
            "Notes":"reject item",
            "CustomDate1":"2019-02-14T14:52:56.361Z",
            "CustomDecimal1":120.6,
            "Items":[
               {
                  "LineNo":1,
                  "ItemIdentifier":"11794",
                  "Quantity":2
               },
               {
                  "LineNo":2,
                  "ItemIdentifier":"11792",
                  "Quantity":2
               }
            ]
         }
      ]
   },
   "ApiDocumentId":"00000000-0000-0000-0000-000000000123"
}
~~~

---

## Response example(s) {#ResponseExamples}

**Response Example #1: In Process**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'simplified-adjustment-import' rather than 'adjustment'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

~~~
{
  "Id": "b3342ab2-44c9-44e3-9353-74ebafaa85c3",
  "Status": "InProcess",
  "Progress": null,
  "TotalRecords": null,
  "AcceptedRecords": null,
  "ErrorRecords": null,
  "ElapsedTime": null,
  "ErrorMessage": null,
  "Lines": [
    {
      "EntityNo": "25",
      "EntityId": "690b4df3-6d48-4068-a5a8-9a754a395b5a",
      "Error": null,
      "Status": "InProcess"
    }
  ],
  "ApiType": "simplified-adjustment-import",
  "Source": "string"
}
~~~

**Response Example #2: Error**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'simplified-adjustment-import' rather than 'adjustment'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

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
  "ApiType": "simplified-adjustment-import",
  "Source": "string"
}
~~~

**Response Example #3: Success**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'simplified-adjustment-import' rather than 'adjustment'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

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
  "ApiType": "simplified-adjustment-import",
  "Source": "string"
}
~~~

---

## Typical errors and warnings {#ErrorsAndWarnings}

**Error Message** | **Description** |
---- | ---- |
Adjustment reason with Code '\<value\>' not found. | An adjustment reason identified by '\<value\>' doesn't exist. |
Item with identifier '\<value\>' not found. | An item identified by '\<value\>' doesn't exist. |
Adjustment memo with external id '\<value1\>' exists but has memo date different from '\<value2\>'. | An adjustment memo identified by '\<value1\>' exists but its date doesn't match '\<value2\>'. |
Adjustment memo with memo # '\<value\>' not found. | An adjustment memo identified by '\<value\>' doesn't exist. |
Adjustment memo with external id '\<value\>' not found. | An adjustment memo identified by '\<value\>' doesn't exist. |
Adjustment memo item with line # '\<value\>' not found. | Line number '\<value\>' doesn't exist. |
Hold reason with code '\<value\>' not found. | An active hold reason identified by '\<value\>' and with an area type of *Adjustment* doesn't exist. |