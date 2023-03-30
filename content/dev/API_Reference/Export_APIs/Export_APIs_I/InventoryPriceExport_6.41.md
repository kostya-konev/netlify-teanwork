---
title: "Inventory Price Export [6.41]"
date: 2022-08-26T09:17:00-05:00
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
- [Request settings](#RequestSettings)
- [Request filters](#RequestFilters)
- [Request sorts](#RequestSorts)
- [Successful response](#SuccessfulResponse)
- &nbsp;&nbsp;&nbsp;&nbsp;[Format](#SuccessfulResponseFormat)
- &nbsp;&nbsp;&nbsp;&nbsp;[Schema](#SuccessfulResponseSchema)
- [Request example(s)](#RequestExamples)
- [Response example(s)](#ResponseExamples)

---
<!-- end comment block (when active)-------------------- -->

## Overview {#Overview}

This topic describes the **Inventory Price Export** API which is used to export pricing information from CHQ.

See [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for a description on how export requests are made and on the standard request and response formats used. The API-Specific successful response format for this API will be described below.

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/invenprice**  
Asynchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/invenprice/async**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

In the Swagger UI the **/chqapi/export/invenprice** endpoint is a member of the **Catalog** endpoint group.

## Request settings {#RequestSettings}

Below are the settings which can be supplied in the **Settings** group of the export request to define which value (field) is to be used for a particular value class (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Key** column lists the names of the available settings. The **Supported Values** column lists the valid values which can be supplied for the setting. The **Default** column lists the default value for each setting if that setting is not supplied.

**Key** | **Supported Values** | **Default** | **Description** |
---- | ---- | ---- | ---- |
CurrencyIdentifierSetting | Code, Name, TeamworkId | Code | An indicator of which value is to be used to identify currencies. |
CustomerIdentifierSetting | CustomerNo, Email, MemberCode, ExternalId, TeamworkId | CustomerNo | An indicator of which value is to be used to identify customers. |
ItemIdentifierSetting | PLU, ExternalId, CLU, UPC, TeamworkId | PLU | An indicator of which value is to be used to identify items. |
LocationPriceGroupIdentifierSetting | Code, Name, TeamworkId | Code | An indicator of which value is to be used to identify location price groups. |
LocationIdentifierSetting | ExternalIdCode, Code, ExternalId, No, TeamworkId | ExternalIdCode | An indicator of which value is to be used to identify locations. |
InvenItemLotNumberIdentifierSetting | No, TeamworkId | TeamworkId | An indicator of which value is to be used to identify item lot numbers. <span class="ir">***??????????***</span> |
PriceLevelIdentifierSetting | Code, Name, TeamworkId | Code | An indicator of which value is to be used to identify price levels. |
UnitOfMeasureIdentifierSetting | Code, Name, TeamworkId | Code | An indicator of which value is to be used to identify units of measure. |

## Request filters {#RequestFilters}

Below are the filters which can be defined in the **Filters** group of the export request (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Field** column lists the names of the fields on which filtering can be done. The **Operators** column lists the filter operator values which are valid for the field. The **Value** column describes the value expected for the field.

**Field** | **Operators** | **Value** |
---- | ---- | ---- |
RecModified | "Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. |
InvenItemPriceId | "Equal", "Contains" | Any valid GUID value representing a price for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |
InvenPriceItemId | "Equal", "Contains" | Any valid GUID value representing an item for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. <span class="ir">***?????????***</span> |
InvenPricePriceLevelId | "Equal", "Contains" | Any valid GUID value representing a price level for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. <span class="ir">***?????????***</span> |
StartDate | "Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. |
EndDate | "Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. |

## Request sorts {#RequestSorts}

The information returned is automatically sorted by the **RecModified** field *ascending*. No other sorts can be requested.

---

## Successful response {#SuccessfulResponse}

### Format {#SuccessfulResponseFormat}

Below is the format of the successful response to the export request. See [*JSON Data Types*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/JsonDataTypes_6.41/) for a description of the values which could appear in the **Data Type** column.

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
ApiDocumentId | string,guid | A unique identifier of the API document being used. |
Status | string,enum | The status of the response. The value will always be "Successful". |
ApiRequestType | string | <span class="ir">***????????***</span> |
TotalRecords | int32 | The total number of records processed. |
RecordsCount | int32 | The number of records exported. |
ElapsedTime | string,datetime | The time it took to execute the API. |
StartDateTime | string,datetime | A timestamp of when the API began executing. |
EndDateTime | string,datetime | A timestamp of when the API completed. |
<span class="api-gn">Response</span> | | <span class="api-gd">A group containing the following fields and groups.</span> |
<span class="api-gn">Response: Prices</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string,datetime | A timestamp of when the record was created. |
RecModified | string,datetime | A timestamp of when the record was last modified. |
InvenItemPriceId | string,guid | A unique identifier of the price. |
LocationIdentifier | string | An identifier of the location to which the price applies. <span class="ir">***??????????***</span> |
ItemIdentifier | string | An identifier of the item to which the price applies. |
PriceLevelIdentifier | string | An identifier of the price level which contains the price. <span class="ir">***??????????***</span> |
Price | double | The price value. |
Inactive | boolean | An indicator as to whether or not the price is inactive. |
StartDateTime | string,datetime | A timestamp of when the price can begin being applied. |
EndDateTime | string,datetime | A timestamp of when the price can no longer be applied. |
LotNumberNo | double | <span class="ir">***??????????***</span> |
CurrencyIdentifier | string | An identifier of the price's currency. |
LocationPriceGroupIdentifier | string | An identifier of the price's location price group. |
UnitOfMeasureIdentifier | string | An identifier of the price's unit of measure. |
IsLocalPrice | boolean | An indicator as to whether or not the price is a local price. |
CustomerIdentifier | string | <span class="ir">***??????????***</span> |
CustomerGroupId | string,guid | A unique identifier of the customer group to which the price applies. <span class="ir">***??????????***</span> |
InvenItemLotNumberIdentifier | string | <span class="ir">***??????????***</span> |
MinQty | double | The minimum purchase quantity required by the price. <span class="ir">***??????????***</span> |
PriceIncludesTax | boolean | An indicator as to whether or not the price includes taxes. |
Priority | int32 | <span class="ir">***??????????***</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Prices</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response</span> |

### Schema {#SuccessfulResponseSchema}
 
Below is the JSON source for the schema of a successful response to the export request as described above.

~~~
{
   "InvenPriceExportToJson_get.ApiDocumentType":{
      "type":"object",
      "properties":{
         "ApiDocumentId":{
            "format":"uuid",
            "type":"string",
            "example":"00000000-0000-0000-0000-000000000000"
         },
         "Status":{
            "enum":[
               "Successful"
            ],
            "type":"string"
         },
         "ApiRequestType":{
            "type":"string"
         },
         "TotalRecords":{
            "format":"int32",
            "type":"integer"
         },
         "RecordsCount":{
            "format":"int32",
            "type":"integer"
         },
         "ElapsedTime":{
            "format":"date-time",
            "type":"string"
         },
         "StartDateTime":{
            "format":"date-time",
            "type":"string"
         },
         "EndDateTime":{
            "format":"date-time",
            "type":"string"
         },
         "Response":{
            "$ref":"#/definitions/InvenPriceExportToJson_get.ResponseType"
         }
      }
   },
   "InvenPriceExportToJson_get.ResponseType":{
      "type":"object",
      "properties":{
         "Prices":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/InvenPriceExportToJson_get.PricesType"
            }
         }
      }
   },
   "InvenPriceExportToJson_get.PricesType":{
      "type":"object",
      "properties":{
         "RecCreated":{
            "format":"date-time",
            "type":"string"
         },
         "RecModified":{
            "format":"date-time",
            "type":"string"
         },
         "InvenItemPriceId":{
            "format":"uuid",
            "type":"string",
            "example":"00000000-0000-0000-0000-000000000000"
         },
         "LocationIdentifier":{
            "type":"string"
         },
         "ItemIdentifier":{
            "type":"string"
         },
         "PriceLevelIdentifier":{
            "type":"string"
         },
         "Price":{
            "format":"double",
            "type":"number"
         },
         "Inactive":{
            "type":"boolean"
         },
         "StartDateTime":{
            "format":"date-time",
            "type":"string"
         },
         "EndDateTime":{
            "format":"date-time",
            "type":"string"
         },
         "LotNumberNo":{
            "format":"double",
            "type":"number"
         },
         "CurrencyIdentifier":{
            "type":"string"
         },
         "LocationPriceGroupIdentifier":{
            "type":"string"
         },
         "UnitOfMeasureIdentifier":{
            "type":"string"
         },
         "IsLocalPrice":{
            "type":"boolean"
         },
         "CustomerIdentifier":{
            "type":"string"
         },
         "CustomerGroupId":{
            "format":"uuid",
            "type":"string",
            "example":"00000000-0000-0000-0000-000000000000"
         },
         "InvenItemLotNumberIdentifier":{
            "type":"string"
         },
         "MinQty":{
            "format":"double",
            "type":"number"
         },
         "PriceIncludesTax":{
            "type":"boolean"
         },
         "Priority":{
            "format":"int32",
            "type":"integer"
         }
      }
   }
}
~~~

---

## Request Example(s) {#RequestExamples}

**Request Example #1: RecModified > '2018-06-06T10:07:12'**

~~~
{
   "Source":"Integrator",
   "Data":{
      "ApiDocumentId":"43d466dc-90df-45b2-81f9-d49a23345d51",
      "Request":{
         "Settings":[
            {
               "Key":"CurrencyIdentifierSetting",
               "Value":"Code"
            },
            {
               "Key":"CustomerIdentifierSetting",
               "Value":"CustomerNo"
            },
            {
               "Key":"ItemIdentifierSetting",
               "Value":"PLU"
            },
            {
               "Key":"LocationPriceGroupIdentifierSetting",
               "Value":"Code"
            },
            {
               "Key":"LocationIdentifierSetting",
               "Value":"ExternalIdCode"
            },
            {
               "Key":"InvenItemLotNumberIdentifierSetting",
               "Value":"TeamworkId"
            },
            {
               "Key":"PriceLevelIdentifierSetting",
               "Value":"Code"
            },
            {
               "Key":"UnitOfMeasureIdentifierSetting",
               "Value":"Code"
            }
         ],
         "Filters":[
            {
               "Field":"RecModified",
               "Operator":"Greater than",
               "Value":"2018-06-06T10:07:12"
            }
         ],
         "SortDescriptions":[
            {
               "Direction":"Ascending",
               "Name":"RecModified"
            }
         ],
         "Top":12,
         "Skip":0
      }
   }
}
~~~

## Response Example(s) {#ResponseExamples}

**Response Example #1: In Process**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'inven-prices-export' rather than 'invenprice'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

~~~
{  "Id": "a0852081-1fff-4f62-a0e5-6201a2e5aeb8"",  "Status": "InProcess",  "ApiType": "inven-prices-export",  "Source": "string"}
~~~

**Response Example #2: Error**

~~~
{
   "Message":"The request is invalid.",
   "ModelState":{
      "apiRequest.Data.Request.SortDescriptions[0].Direction":[
         "Error converting value \"desc\" to type 'Teamwork.AdminServer.Api.Services.Controller.SortDescriptionDirectionType'. Path 'Data.Request.SortDescriptions[0].Direction', line 1, position 340."
      ]
   }
}
~~~

**Response Example #3: Success when requesting RecModified = '2013-10-09 16:00:15.877'**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'inven-prices-export' rather than 'invenprice'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"41495904-CE2B-4C13-A441-FE819F578858",
      "Status":"Successful",
      "ApiRequestType":"inven-prices-export",
      "TotalRecords":4,
      "RecordsCount":4,
      "ElapsedTime":"00:00:00.1100000",
      "StartDateTime":"2018-12-14T13:52:17.930",
      "EndDateTime":"2018-12-14T13:52:18.040",
      "Response":{
         "Prices":[
            {
               "RecCreated":"2013-10-09T16:00:15.877",
               "RecModified":"2013-10-09T16:00:15.877",
               "InvenItemPriceId":"C3F72413-F37D-4D6B-89D1-0BEADA293E21",
               "ItemIdentifier":"21801",
               "PriceLevelIdentifier":"",
               "Price":30.00000000000000000000,
               "Inactive":false,
               "StartDateTime":"2013-10-09T00:00:00",
               "EndDateTime":"2030-12-30T23:59:59",
               "LotNumberNo":0,
               "IsLocalPrice":false,
               "CustomerGroupId":"1535C768-6704-47C1-9F6B-01F7D5A070C1",
               "MinQty":0.00000000000000000000,
               "PriceIncludesTax":false,
               "Priority":0
            },
            {
               "RecCreated":"2013-10-09T16:00:15.877",
               "RecModified":"2013-10-09T16:00:15.877",
               "InvenItemPriceId":"5095C6A1-765E-4586-89CA-165DA4B85876",
               "ItemIdentifier":"21802",
               "PriceLevelIdentifier":"",
               "Price":30.00000000000000000000,
               "Inactive":false,
               "StartDateTime":"2013-10-09T00:00:00",
               "EndDateTime":"2030-12-30T23:59:59",
               "LotNumberNo":0,
               "IsLocalPrice":false,
               "CustomerGroupId":"1535C768-6704-47C1-9F6B-01F7D5A070C1",
               "MinQty":0.00000000000000000000,
               "PriceIncludesTax":false,
               "Priority":0
            },
            {
               "RecCreated":"2013-10-09T16:00:15.877",
               "RecModified":"2013-10-09T16:00:15.877",
               "InvenItemPriceId":"EB27F396-6B50-4521-819B-3038CFF84918",
               "ItemIdentifier":"21803",
               "PriceLevelIdentifier":"",
               "Price":30.00000000000000000000,
               "Inactive":false,
               "StartDateTime":"2013-10-09T00:00:00",
               "EndDateTime":"2030-12-30T23:59:59",
               "LotNumberNo":0,
               "IsLocalPrice":false,
               "CustomerGroupId":"1535C768-6704-47C1-9F6B-01F7D5A070C1",
               "MinQty":0.00000000000000000000,
               "PriceIncludesTax":false,
               "Priority":0
            },
            {
               "RecCreated":"2013-10-09T16:00:15.860",
               "RecModified":"2013-10-09T16:00:15.877",
               "InvenItemPriceId":"D7AA5F6A-36C6-4ADF-B000-8B4D1230DA8B",
               "ItemIdentifier":"21800",
               "PriceLevelIdentifier":"",
               "Price":30.00000000000000000000,
               "Inactive":false,
               "StartDateTime":"2013-10-09T00:00:00",
               "EndDateTime":"2030-12-30T23:59:59",
               "LotNumberNo":0,
               "IsLocalPrice":false,
               "CustomerGroupId":"1535C768-6704-47C1-9F6B-01F7D5A070C1",
               "MinQty":0.00000000000000000000,
               "PriceIncludesTax":false,
               "Priority":0
            }
         ]
      }
   }
}
~~~

**Response Example #4: Success when requesting InvenItemPriceId = '766F3699-A84E-4621-A1D0-D3DDCCB87709'**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'inven-prices-export' rather than 'invenprice'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"57744F1A-DA2D-4B33-830F-C959D70224EB",
      "Status":"Successful",
      "ApiRequestType":"inven-prices-export",
      "TotalRecords":1,
      "RecordsCount":1,
      "ElapsedTime":"00:00:00",
      "StartDateTime":"2018-12-14T14:12:56.630",
      "EndDateTime":"2018-12-14T14:12:56.630",
      "Response":{
         "Prices":[
            {
               "RecCreated":"2012-07-30T20:39:26.517",
               "RecModified":"2012-07-30T20:39:26.530",
               "InvenItemPriceId":"766F3699-A84E-4621-A1D0-D3DDCCB87709",
               "ItemIdentifier":"9671",
               "PriceLevelIdentifier":"BASEPRICE",
               "Price":45.00000000000000000000,
               "Inactive":false,
               "StartDateTime":"1900-01-01T00:00:00",
               "EndDateTime":"2100-01-01T00:00:00",
               "LotNumberNo":0,
               "IsLocalPrice":false,
               "MinQty":0.00000000000000000000,
               "PriceIncludesTax":false,
               "Priority":0
            }
         ]
      }
   }
}
~~~

**Response Example #5: Success when requesting InvenItemPriceId = '766F3699-A84E-4621-A1D0-D3DDCCB87709'**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'inven-prices-export' rather than 'invenprice'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"F64E7EDE-58CB-4F9B-B608-3C19B3D2214D",
      "Status":"Successful",
      "ApiRequestType":"inven-prices-export",
      "TotalRecords":12,
      "RecordsCount":12,
      "ElapsedTime":"00:00:00.0933333",
      "StartDateTime":"2018-12-14T14:17:01.490",
      "EndDateTime":"2018-12-14T14:17:01.583",
      "Response":{
         "Prices":[
            {
               "RecCreated":"2017-05-08T11:09:16.810",
               "RecModified":"2017-07-17T14:27:46.593",
               "InvenItemPriceId":"F6319EE4-1014-4551-92CF-A94D10020A85",
               "ItemIdentifier":"12558",
               "PriceLevelIdentifier":"",
               "Price":10.00000000000000000000,
               "Inactive":false,
               "StartDateTime":"2017-05-08T07:09:14.827",
               "EndDateTime":"2017-07-17T10:27:45.390",
               "LotNumberNo":0,
               "IsLocalPrice":false,
               "Priority":0
            },
            {
               "RecCreated":"2017-09-04T13:09:51.763",
               "RecModified":"2017-09-04T13:09:51.763",
               "InvenItemPriceId":"A8BAFE22-2866-4E0D-ABBC-77A8D1938D03",
               "LocationIdentifier":"TIGNATENKO",
               "ItemIdentifier":"12558",
               "PriceLevelIdentifier":"2FER",
               "Price":12.00000000000000000000,
               "Inactive":false,
               "StartDateTime":"2017-09-04T09:09:51.563",
               "LotNumberNo":0,
               "IsLocalPrice":false,
               "Priority":0
            },
            {
               "RecCreated":"2017-08-18T14:33:35.623",
               "RecModified":"2017-09-04T13:09:51.890",
               "InvenItemPriceId":"082C9621-7CED-4238-B8C0-0FDDA79A8F74",
               "LocationIdentifier":"TIGNATENKO",
               "ItemIdentifier":"12558",
               "PriceLevelIdentifier":"2FER",
               "Price":33.33000000000000000000,
               "Inactive":false,
               "StartDateTime":"2017-08-18T17:32:00",
               "EndDateTime":"2017-09-04T09:09:50.563",
               "LotNumberNo":0,
               "IsLocalPrice":false,
               "Priority":0
            },
            {
               "RecCreated":"2017-07-17T14:27:46.577",
               "RecModified":"2017-09-04T13:12:47.723",
               "InvenItemPriceId":"FCCE84FE-E2BF-4784-8B28-B9713948F9A8",
               "ItemIdentifier":"12558",
               "PriceLevelIdentifier":"",
               "Price":4.99000000000000000000,
               "Inactive":false,
               "StartDateTime":"2017-07-17T10:27:46.390",
               "EndDateTime":"2017-09-04T09:12:46.553",
               "LotNumberNo":0,
               "IsLocalPrice":false,
               "Priority":0
            },
            {
               "RecCreated":"2017-05-08T11:09:16.747",
               "RecModified":"2017-09-04T14:52:35.567",
               "InvenItemPriceId":"6CBB5356-593E-4DF0-ABA9-77035E3AE930",
               "ItemIdentifier":"12558",
               "PriceLevelIdentifier":"BASEPRICE",
               "Price":5.50000000000000000000,
               "Inactive":false,
               "LotNumberNo":0,
               "IsLocalPrice":false,
               "Priority":0
            },
            {
               "RecCreated":"2017-09-04T13:12:47.707",
               "RecModified":"2017-09-04T14:52:35.567",
               "InvenItemPriceId":"092FDB44-6E3E-4726-AA85-E29A7704849A",
               "ItemIdentifier":"12558",
               "PriceLevelIdentifier":"",
               "Price":10.00000000000000000000,
               "Inactive":false,
               "StartDateTime":"2017-09-04T09:12:47.553",
               "EndDateTime":"2017-09-04T10:52:34.287",
               "LotNumberNo":0,
               "IsLocalPrice":false,
               "Priority":0
            },
            {
               "RecCreated":"2017-09-07T08:54:41.990",
               "RecModified":"2017-09-07T09:41:54.393",
               "InvenItemPriceId":"B46CED84-8B1E-4DCE-8DFB-1B5EA30EE7BB",
               "LocationIdentifier":"TIGNATENKO",
               "ItemIdentifier":"12558",
               "PriceLevelIdentifier":"PRICE 3",
               "Price":124.55000000000000000000,
               "Inactive":false,
               "StartDateTime":"2017-09-07T11:54:00",
               "EndDateTime":"2017-09-07T12:40:59",
               "LotNumberNo":0,
               "IsLocalPrice":false,
               "Priority":0
            },
            {
               "RecCreated":"2017-09-07T09:41:54.393",
               "RecModified":"2017-09-07T09:41:54.393",
               "InvenItemPriceId":"B910595F-784F-4BE1-865B-00048D4F8FF6",
               "LocationIdentifier":"TIGNATENKO",
               "ItemIdentifier":"12558",
               "PriceLevelIdentifier":"PRICE 3",
               "Price":124.55000000000000000000,
               "Inactive":false,
               "StartDateTime":"2017-09-07T12:41:00",
               "LotNumberNo":0,
               "IsLocalPrice":false,
               "Priority":0
            },
            {
               "RecCreated":"2018-02-15T09:24:38.743",
               "RecModified":"2018-02-15T09:24:38.743",
               "InvenItemPriceId":"D561BB76-E40F-4398-B088-C8FD507713A3",
               "ItemIdentifier":"12558",
               "PriceLevelIdentifier":"4",
               "Price":22.00000000000000000000,
               "Inactive":false,
               "StartDateTime":"2018-02-15T04:24:38.497",
               "LotNumberNo":0,
               "IsLocalPrice":false,
               "Priority":0
            },
            {
               "RecCreated":"2018-04-10T09:17:38.513",
               "RecModified":"2018-04-10T09:17:38.513",
               "InvenItemPriceId":"0E0AFA7A-DFE2-4C50-8AAC-49B041AA88F9",
               "ItemIdentifier":"12558",
               "PriceLevelIdentifier":"OUTLET",
               "Price":32.50000000000000000000,
               "Inactive":false,
               "StartDateTime":"2018-04-10T05:17:37.967",
               "LotNumberNo":0,
               "IsLocalPrice":false,
               "Priority":0
            },
            {
               "RecCreated":"2018-05-04T11:52:38.743",
               "RecModified":"2018-05-04T11:52:38.743",
               "InvenItemPriceId":"519BC805-ACAB-4307-944A-F8E09AA1BE8F",
               "ItemIdentifier":"12558",
               "PriceLevelIdentifier":"",
               "Price":10.12000000000000000000,
               "Inactive":false,
               "StartDateTime":"2018-05-04T07:52:38.420",
               "LotNumberNo":0,
               "IsLocalPrice":false,
               "Priority":0
            },
            {
               "RecCreated":"2017-09-04T14:52:35.567",
               "RecModified":"2018-05-04T11:52:38.823",
               "InvenItemPriceId":"C1B697B2-B6CB-4663-A1CF-79463AFC1365",
               "ItemIdentifier":"12558",
               "PriceLevelIdentifier":"",
               "Price":10.50000000000000000000,
               "Inactive":false,
               "StartDateTime":"2017-09-04T10:52:35.287",
               "EndDateTime":"2018-05-04T07:52:37.420",
               "LotNumberNo":0,
               "IsLocalPrice":false,
               "Priority":0
            }
         ]
      }
   }
}
~~~

**Response Example #6: Success when requesting InvenPricePriceLevelId = '83B990B0-E4B3-4A6B-913F-01BC685F5056'**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'inven-prices-export' rather than 'invenprice'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"4F5A96CE-A725-4912-B474-430BD8830E3A",
      "Status":"Successful",
      "ApiRequestType":"inven-prices-export",
      "TotalRecords":7,
      "RecordsCount":7,
      "ElapsedTime":"00:00:00.0166667",
      "StartDateTime":"2018-12-14T14:21:30.787",
      "EndDateTime":"2018-12-14T14:21:30.803",
      "Response":{
         "Prices":[
            {
               "RecCreated":"2018-07-30T12:17:05.100",
               "RecModified":"2018-07-30T12:17:05.100",
               "InvenItemPriceId":"3C3EE97B-1EA9-4E6B-BE98-54F48699BDD3",
               "ItemIdentifier":"9782218",
               "PriceLevelIdentifier":"20",
               "Price":0.00000000000000000000,
               "Inactive":false,
               "StartDateTime":"2018-07-30T08:17:04.807",
               "LotNumberNo":0,
               "IsLocalPrice":false,
               "Priority":0
            },
            {
               "RecCreated":"2018-08-06T09:27:50.047",
               "RecModified":"2018-08-06T09:27:50.047",
               "InvenItemPriceId":"2C1CC40C-9BD1-4405-88D6-936C08D67D52",
               "ItemIdentifier":"9782607",
               "PriceLevelIdentifier":"20",
               "Price":587.00000000000000000000,
               "Inactive":false,
               "StartDateTime":"2018-08-06T05:27:49.627",
               "LotNumberNo":0,
               "IsLocalPrice":false,
               "Priority":0
            },
            {
               "RecCreated":"2018-08-06T09:27:50.047",
               "RecModified":"2018-08-06T09:27:50.047",
               "InvenItemPriceId":"F786DAC4-8692-4C91-A684-3A63B4D8C300",
               "ItemIdentifier":"9782606",
               "PriceLevelIdentifier":"20",
               "Price":587.00000000000000000000,
               "Inactive":false,
               "StartDateTime":"2018-08-06T05:27:49.627",
               "LotNumberNo":0,
               "IsLocalPrice":false,
               "Priority":0
            },
            {
               "RecCreated":"2018-08-06T09:27:50.047",
               "RecModified":"2018-08-06T09:27:50.047",
               "InvenItemPriceId":"0829932B-69AD-4219-8635-4283DE9795AE",
               "ItemIdentifier":"9782605",
               "PriceLevelIdentifier":"20",
               "Price":587.00000000000000000000,
               "Inactive":false,
               "StartDateTime":"2018-08-06T05:27:49.627",
               "LotNumberNo":0,
               "IsLocalPrice":false,
               "Priority":0
            },
            {
               "RecCreated":"2018-09-25T14:32:52.137",
               "RecModified":"2018-09-25T14:32:52.137",
               "InvenItemPriceId":"378BF5A7-B2D9-4817-9442-0C5321B9B697",
               "ItemIdentifier":"5609",
               "PriceLevelIdentifier":"20",
               "Price":2.00000000000000000000,
               "Inactive":false,
               "StartDateTime":"2018-09-25T10:32:51.590",
               "LotNumberNo":0,
               "IsLocalPrice":false,
               "Priority":0
            },
            {
               "RecCreated":"2018-10-18T15:21:26.710",
               "RecModified":"2018-10-18T15:21:26.710",
               "InvenItemPriceId":"8586C844-B421-4703-8FA7-3916ECD3084F",
               "ItemIdentifier":"9785935",
               "PriceLevelIdentifier":"20",
               "Price":11.00000000000000000000,
               "Inactive":false,
               "StartDateTime":"2018-10-18T18:21:58.557",
               "LotNumberNo":0,
               "IsLocalPrice":false,
               "Priority":0
            },
            {
               "RecCreated":"2018-10-24T15:25:28.480",
               "RecModified":"2018-10-24T15:25:28.480",
               "InvenItemPriceId":"23FF8070-90B5-47D5-8B25-BF680D410102",
               "ItemIdentifier":"9785958",
               "PriceLevelIdentifier":"20",
               "Price":66.00000000000000000000,
               "Inactive":false,
               "StartDateTime":"2018-10-24T11:25:28.187",
               "LotNumberNo":0,
               "IsLocalPrice":false,
               "Priority":0
            }
         ]
      }
   }
}
~~~
