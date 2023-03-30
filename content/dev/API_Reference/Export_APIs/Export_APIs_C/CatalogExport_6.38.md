---
title: "Catalog Export API [6.38]"
date: 2022-02-22T08:23:00-05:00
draft: true
weight: 120
---

{{% notice warning %}}

The API Reference is currently under construction and its contents should not be used until further notice.

{{% /notice %}}


- [Overview](#Overview)
- [Request endpoint](#RequestEndpoint)
- [Request settings](#RequestSettings)
- [Request filters](#RequestFilters)
- [Request sorts](#RequestSorts)
- [Successful response format](#SuccessfulResponse)
- [Request Example(s)](#RequestExamples)
- [Response Example(s)](#ResponseExamples)

---

## Overview {#Overview}

This topic describes the **Catalog Export** API which is used to export catalog (inventory) information from CHQ.

See the [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) document for a description on how export requests are made and on the standard request and response formats used. The **Catalog Export** successful response format will be described below.

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown"><b><i>\<your-chq-url\></i></span>/chqapi/export/catalog</b>  
Asynchronous URL: <span class="fg-brown"><b><i>\<your-chq-url></i></span>/chqapi/export/catalog/async</b>  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown"><b><i>\<your-api-key\></b></i></span>

<span class="fg-brown"><b><i>\<your-chq-url\></b></i></span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown"><b><i>\<your-api-key\></b></i></span> is your API key value. See the [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) document for further info.

---

## Request settings {#RequestSettings}

Below are the settings which can be supplied in the **Settings** group of the export request to define which value (field) is to be used for a particular value class (see the [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) document for additional info).

The **Key** column lists the names of the available settings. The **Supported Values** column lists the valid values which can be supplied for the setting. The **Default** column lists the default value for each setting if that setting is not supplied.

**Key** | **Supported Values** | **Default** | **Description** |
---- | ---- | ---- | ---- |
VendorIdentifierSetting | Name, Code, TeamworkId | Code | An indicator of which value is to be used to identify vendors. |
TaxCategoryIdentifierSetting | Code, ExternalId, ExternalIdCode, TeamworkId | Code | An indicator of which value is to be used to identify tax categories. |
ShowCustomFieldsSetting | 0, 1 | 0 | An indicator as to whether or not custom fields should be exported. |
AttributeSetSetting | Name, Code | Code | An indicator of which value is to be used to identify attribute sets. |
PriceLevelSetting | Code, Description, TeamworkId | Code |  An indicator of which value is to be used to identify price settings. |
WidthGroupSetting | Code, Description, TeamworkId | Code | An indicator of which value is to be used to identify width groups. |

---

## Request filters {#RequestFilters}

Below are the filters which can be defined in the **Filters** group of the export request (see the [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) document for additional info).


The **Field** column lists the names of the fields on which filtering can be done. The **Operators** column lists the filter operator values which are valid for the field. The **Value** column describes the value expected for the field.

**Field** | **Operators** | **Value** |
---- | ---- | ---- |
RecModified |"Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *DateTime* value. Note that the RecModified filter means the greatest **RecModified** value over all of a style's child objects. |
Item.Plu | "Equal", "Contains" | Any valid integer value representing a PLU (Product LookUp number) for the "Equal" operator or a comma-separated list of values for the "Contains" operator. |
Item.UPC | "Equal", "Contains" | Any valid string value representing a UPC (Universal Product Code) for the "Equal" operator or a comma-separated list of values for the "Contains" operator. |
Item.EID | "Equal", "Contains" | Any valid string value representing an EID (External ID) for the "Equal" operator or a comma-separated list of values for the "Contains" operator. |
Item.CLU | "Equal", "Contains" | Any valid string value representing a CLU (Custom LookUp number) for the "Equal" operator or a comma-separated list of values for the "Contains" operator. |
ItemId | "Equal", "Contains" | Any valid guid value representing an **ItemId** for the "Equal" operator or a comma-separated list of guids for the "Contains" operator.|
StyleNo | "Equal", "Contains" | Any valid string value representing a **StyleNo** for the "Equal" operator or a comma-separated list of guids for the "Contains" operator.|
StyleId | "Equal", "Contains" | Any valid guid value representing a **StyleId** for the "Equal" operator or a comma-separated list of guids for the "Contains" operator.|
Item.ECType | "Equal", "Contains" | Valid values are any of the following: **NonEc**, **EcOffer**, **EcSuspended**, **EcDiscontinued** for the "Equal" Operator or any comma-separated combination for the "Contains" operator. |
ECType | "Equal", "Contains" | Valid values are any of the following: **NonEc**, **EcOffer**, **EcSuspended**, **EcDiscontinued** for the "Equal" Operator or any comma-separated combination for the "Contains" operator. |
Description |"Equal" | Any string which is valid for the **Description1** field. |
Active | "Equal" | Any valid *boolean* value. |
StoreDescription | "Equal" | any string valid for the **StoreDescription** field. |

---

## Request sorts {#RequestSorts}

Below are the fields for which sorting can be requested in the **SortDescriptions** group of the export request (see the [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) document for additional info). All of these fields can be sorted either *ascending* or *descending*. If no sort is explicilty requested, the default is to sort by **RecModified** *ascending*.

<span class="ir">***???????? Which of the below fields are indicies? ????????***</span>

- Description1  
- Description2  
- Description3  
- Height  
- Inactive  
- InvenType  
- IsWeighted  
- Length    
- RecModified  
- Replenishment  
- StyleNo  
- Weight  
- Width

---

## Successful response format {#SuccessfulResponse}

Below is the format of the successful response to the export request. See the [*JSON Data Types*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/JsonDataTypes_6.41/) document for a description of the values which could appear in the **Data Type** column.

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
ApiDocumentId | string,guid | A unique identifier of the API document being used. |
Status | string,enum | An indicator of API request's status. Its value must be “Successful". |
ApiRequestType | string | <span class="ir">***????????***</span> |
TotalRecords | int32 | The total number of records processed. |
RecordsCount | int32 | The number of records exported. |
ElapsedTime | string,datetime | The time it took to execute the API. |
StartDateTime | string,datetime | A timestamp of when the API began executing. |
EndDateTime | string,datetime | A timestamp of when the API completed. |
<span class="api-gn">Response</span> | | <span class="api-gd">A group containing the following fields and groups.</span> |
<span class="api-gn">Response: Styles</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecModified | string,datetime | A timestamp of when the record was last modified. |
InvenType | string,enum | An indicator of the style’s inventory type. Its value must be one of the following: “Style”, “SingleItem”, “ServiceItem”. |
StyleNo | string | A number identifying the style. |
<span class="api-gn">Response: Styles: DCSS</span> | | <span class="api-gd">A group containing the following fields and groups.</span> |
DCSSCode | string | The department classification code for the style. |
Alias | string | An alias for the style’s department classification code. |
DeptCode | string | The code for the department of the style. |
DeptName | string | The name of the department of the style. |
DeptAlias | string | An alias for the department of the style. |
ClassCode | string | The code for the class of the style. |
ClassName | string | The name of the class of the style. |
ClassAlias | string | An alias for the class of the style. |
SubClass1Code | string | The code for the first subclass of the style. |
SubClass1Name | string | The name for the first subclass of the style. |
SubClass1Alias | string | An alias for the first subclass of the style. |
SubClass2Code | string | The code for the first second of the style. |
SubClass2Name | string | The name for the first second of the style. |
SubClass2Alias | string | An alias for the first second of the style. |
<span class="api-gs">---</span> | | <span class="egd">end of Response: Styles: DCSS</span> |
<span class="api-gn">Response: Styles: ACSS</span> | | <span class="api-gd">A group containing the following fields and groups.</span> |
DCSSCode | string | The alternate department classification code for the style. |
Alias | string | An alias for the style’s alternate department classification code. |
DeptCode | string | The code for the alternate department of the style. |
DeptName | string | The name of the alternate department of the style. |
DeptAlias | string | An alias for the alternate department of the style. |
ClassCode | string | The code for the alternate class of the style. |
ClassName | string | The name of the alternate class of the style. |
ClassAlias | string | An alias for the alternate class of the style. |
SubClass1Code | string | The code for the first alternate subclass of the style. |
SubClass1Name | string | The name for the first alternate subclass of the style. |
SubClass1Alias | string | An alias for the first alternate subclass of the style. |
SubClass2Code | string | The code for the first alternate second of the style. |
SubClass2Name | string | The name for the first alternate second of the style. |
SubClass2Alias | string | An alias for the first alternate second of the style. |
<span class="api-gn">---</span> | | <span class="api-gs">end of Response: Styles: ACSS</span> |
<span class="api-gs">---</span> | | <span class="api-gs">continuation of Response: Styles</span> |
Season | string | The name of the season to which the style applies (if it is a seasonal style). |
Manufacturer | string | The manufacturer of the items contained in the style. |
Country | string | The manufacturer’s country. |
TaxCategory | string | The tax category which applies to items in the style. |
Description1 - 3 | string | These three fields are the first through third description’s of the style. |
StoreDescription | string | The *Store Description* is the *fourth* description of the style and is sometimes referred to as *Description4*.
OrderCost | double | The default cost of items in the style for sales orders. This cost can be overridden on the item level by the item’s cost value. |
ServiceFee | string | The service fee to be applied on sales orders to items in the style. |
Height | double | The height of items in this style. |
Length | double | The length of items in this style. |
IsWeighted | boolean | An indicator as to whether or not the item is weighted. |
Weight | double | The weight of items in this style. |
Width | double | The width of items in this style. |
AttributeSet1 - 3 | string | These three fields are identifiers of the attribute sets which apply to the style. |
Inactive | boolean | An indicator as to whether or not the style is active. |
Replenishment | boolean | An indicator as to whether or not all items in the style should participate in replenishment functionality. |
DeliveryOrderEligible | boolean | An indicator as to whether or not items in the style are eligible for delivery orders. |
Brand | string | The name of the style’s brand. |
LikeStyle | string | The name of a style which this style is like (based on). |
EligibleForLRP1 - 2 | boolean | These two fields are indicators as to whether or not items in the style are eligible to participate in loyalty rewards programs 1 and/or 2, respectively. |
BasePrice | double | The base price of item’s in the style. |
IPITaxCategory | string | The Brasilian IPI tax category which applies to items in the style. |
CustomLongText1 - 18 | string | These eighteen fields are customizable text for the style. |
ForeignCurrencyOrderCost | double | The default foreign currency order cost of items in the style. |
ForeignCurrencyCode | string | The code of the foreign currency to be used for items in the style. |
<span class="api-gn">Response: Styles: EChannels</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
Name | string | The name of the EChannel. <span class="ir">***????????***</span>|
Status | string,enum | An indicator of the status of the item’s EChannel. Its value must be one of the following: “NonEc”, “EcOffer”, “EcSuspended”, “EcDiscontinued”. |
ECommerceChannelId | string,guid | A unique identifier of the item’s ECommerce channel. |
ECommerceName | string | The name of the item’s ECommerce channel. <span class="ir">***????????***</span> |
IsDeleted | boolean | An indicator as to whether or not the ECommerce channel has been deleted. |
<span class="api-gn">---</span> | | <span class="api-gs">end of Response: Styles: ECommerce</span> |
<span class="api-gn">Response: Styles: ECategories</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
ChannelName | string | The name of the channel to which the category applies. <span class="ir">***????????***</span> |
FullPath | string | The fully qualified node path for the category’s location. <span class="ir">***????????***</span> |
ECommerceCategoryId | string,guid | A unique identifier of the category. |
IsDeleted | boolean | An indicator as to whether or not the category has been deleted. |
IsChannelDeleted | boolean | An indicator as to whether or not the channel the category applies to has been deleted. |
<span class="api-gn">---</span> | | <span class="api-gs">end of Response: Styles: ECategories</span> |
<span class="api-gn">Response: Styles: Items</span> | | <span class="api-gs">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
SoDepositPercent | double | The percentage of the item price to be required for a sales order deposit. |
BlockEcAtsChanges | boolean | An indicator as to whether or not ecommerce available to sell changes are allowed. |
PLU | int32 | The item’s product lookup number. |
UPC | string | The item’s main universal product code. <span class="ir">***????????***</span> |
<span class="api-gn">Response: Styles: Items: UPCs</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
UPC | string | A additional universal product code for the item. <span class="ir">***????????***</span> |
IsDeleted | boolean | An indicator as to whether or not the UPC has been deleted. |
<span class="api-gn">---</span> | | <span class="api-gs">end of Response: Styles: Items: UPCs</span> |
<span class="api-gn">---</span> | | <span class="api-gs">continuation of Response: Styles: Items</span> |
CLU | string | The item’s custom lookup code. |
ExternalId | string | An identifier for the item used when interacting with an external system. |
Trade | boolean | An indicator as to whether or not the item can be part of a trade in. |
SoAvailability | string,enum | An indicator of the item’s availability for Sales Orders. Its value must be one of the following: “Available”, “NotAvailable”, “SpecialOrderOnly”. |
Inactive | boolean | An indicator as to whether or not the item is inactive. |
TradeDiscount | boolean | An indicator as to whether or not the item can be part of a trade discount. |
MemberDiscount | boolean | An indicator as to whether or not a member discount is allowed for the item. |
EligibleForDiscount | boolean | An indicator as to whether or not the item is eligible for item discounts. |
DefaultFeeAmount | double | The item’s default fee amount. |
Discontinued | boolean | An indicator as to whether or not the item is discontinued. |
Backorder | boolean | An indicator as to whether or not the item is backordered. |
DigitalAsset | boolean | An indicator as to whether or not the item is a digital asset. |
WeeksOfSupply | double | The number of weeks of supply of the item currently available. |
LeadTime | int32 | The number of weeks the vendor needs to fill an order. |
ShipFromVendor | string,enum | An indicator of the item’s ship from vendor status. Its value must be one of the following: “Never”, “Ok”, “Always”, "Unknown". |
ProductUrl | string | The web address for the item. |
PreOrderStartDate | string,datetime | The date when pre-ordering of the item can start. |
PreOrderEndDate | string,datetime | The timestamp of when pre-ordering of the item must end. |
PreOrderMaxQty | double | The maximum quantity of the item which can be pre-ordered. |
EligibleForLRP1 - 2 | boolean | These two fields are indicators as to whether or not the item is eligible to participate in loyalty rewards programs 1 and/or 2, respectively. |
RatioLRP1 - 2 | double | These two fields are the *amount spent* to *reward points awarded* ratio for loyalty rewards programs 1 and 2, respectively. |
AttributeValue1 - 3 | string | These three fields are the three attributes available for the item.
ForeignCurrencyOrderCost | double | The item’s foreign currency order cost. |
BasePrice | double | The item’s base price. |
<span class="api-gn">Response: Styles: Items: Prices</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
PriceLevel | string | An identifier of the price level which contains the item. <span class="ir">***????????***</span> |
Price | double | The item's price in the price level. |
<span class="api-gn">---</span> | | <span class="api-gs">end of Response: Styles: Items: Prices</span> |
<span class="api-gn">---</span> | | <span class="api-gs">continuation of Response: Styles: Items</span> |
Height | double | The height of the item. |
Length | double | The length of the item. |
Weight | double | The weight of the item. |
Width | double | The width of the item. |
OrderCost | double | <span class="ir">***????????***</span> |
IsMadeToMeasure | boolean | An indicator as to whether or not the item is made to measure. |
Volume | string,enum | An indicator of the item’s sales volume. Its value must be one of the following: “VeryLow”, “Low”, “Medium”, “High” or “VeryHigh”. |
IsChargeItem | boolean | An indicator as to whether or not the item is a charge item. |
ChargeItemType | string,enum | An indicator of the item’s charge type if it is a charge item. Its value must be one of the following: “VirtualGiftCard”, “PhysicalGiftCard”, “Charge”. |
NeverChargeShipping | boolean | An indicator as to whether or not shipping can ever be charged for the item. |
FinalSale | boolean | An indicator as to whether or not this is the final sale of the item. |
TokenQty | double | <span class="ir">***????????***</span> |
BlockReplenishment | boolean | An indicator as to whether or not <span class="ir">***????????***</span> |
AllocationStartDate | string,datetime | A timestamp of when <span class="ir">***????????***</span> |
EcAtsBufferQty | double | The ecommerce available to sell buffer<span class="ir">***????????***</span> quantity. |
EcAtsBufferPercent | double | The ecommerce available to sell buffer<span class="ir">***????????***</span> percentage. |
<span class="api-gn">Response: Styles: Items: EChannels</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
Name | string | The name of the ecommerce channel. <span class="ir">***????????***</span> |
Status | string,enum | An indicator of the status of the ecommerce channel. Its value must be one of the following: “NonEc”, “EcOffer”, “EcSuspended”, “EcDiscontinued”. |
ECommerceChannelId | string,guid | A unique identifier of the ecommerce channel. |
ECommerceName | string | The name of the ecommerce channel. <span class="ir">***????????***</span> |
UrlKey | string | <span class="ir">***????????***</span> |
IsDeleted | boolean | An indicator as to whether or not the ecommerce channel has been deleted. |
<span class="api-gn">---</span> | | <span class="api-gs">end of Response: Styles: Items: EChannels</span> |
<span class="api-gn">Response: Styles: Items: ECategories</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
ChannelName | string | The name of the ecommerce category. <span class="ir">***????????***</span> |
Name | string | The name of the ecommerce category. <span class="ir">***????????***</span> |
FullPath | string | The fully qualified node path for the category’s location. <span class="ir">***????????***</span> |
ECommerceCategoryId | string,guid | A unique identifier of the category. |
IsDeleted | boolean | An indicator as to whether or not the category has been deleted. |
IsChannelDeleted | boolean | An indicator as to whether or not the channel the category applies to has been deleted. |
<span class="api-gn">---</span> | | <span class="api-gs">end of Response: Styles: Items: ECategories</span> |
<span class="api-gn">Response: Styles: Items: Custom</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
CustomDate1 - 6 | string,datetime | These six fields are customizable date values for the item. |
CustomDecimal1 - 6 | double | These six fields are customizable floating-point values for the item. |
CustomFlag1 - 6 | boolean | These six fields are customizable flags for the item. |
CustomLookup1 - 12 | string | These twelve fields are customizable lookup values for the item. |
CustomNumber1 - 6 | int32 | These six fields are customizable integer values for the item. |CustomText1 - 6 | string | These six fields are customizable text values for the item. |
<span class="api-gn">---</span> | | <span class="api-gs">end of Response: Styles: Items: Custom</span> |
<span class="api-gn">---</span> | | <span class="api-gs">continuation of Response: Styles: Items</span> |
IsDeleted | boolean | An indicator as to whether or not the item has been deleted. |
ReleaseDate | string,datetime | <span class="ir">***????????***</span> |
DateAvailable | string,datetime | <span class="ir">***????????***</span> |
WidthGroup | string | <span class="ir">***????????***</span> |
AutoApplyReturnFee | boolean | An indicator as to whether or not a return fee should be automatically applied for the item. |
<span class="api-gn">---</span> | | <span class="api-gs">end of Response: Styles: Items</span> |
<span class="api-gn">---</span> | | <span class="api-gs">end of Response: Styles</span> |
<span class="api-gn">---</span> | | <span class="api-gs">end of Response</span> |

---

## Request Example(s) {#RequestExamples}

<span class="fg-twb">**Export request for catalog items with StyleNo = 272 and PriceLevelSetting = "TeamworkId"**</span>

~~~

{
   "Source":"1111",
   "Data":{
      "ApiDocumentId":"3f134d8f-1f72-4c77-b017-0006a52e6ba2",
      "Request":{
         "Settings":[
            {
               "Key":"VendorIdentifierSetting",
               "Value":"Code"
            },
            {
               "Key":"TaxCategoryIdentifierSetting",
               "Value":"Code"
            },
            {
               "Key":"ShowCustomFieldsSetting",
               "Value":0
            },
            {
               "Key":"AttributeSetSetting",
               "Value":"Code"
            },
            {
               "Key":"PriceLevelSetting",
               "Value":"TeamworkId"
            },
  	      	{
          		"Key":"WidthGroupSetting",
          		"Value":"Code"
        	}
         ],
         "Filters":[
            {
               "Field":"StyleNo",
               "Operator":"Equal",
               "Value":272
            }
         ],
         "SortDescriptions":[
            {
               "Name":"RecModified",
               "Direction":"Descending"
            }
         ],
         "Top":5,
         "Skip":0
      }
   }
}

~~~

## Response Example(s) {#ResponseExamples}

<span class="fg-twb">**Export response for catalog items with StyleNo = 272 and PriceLevelSetting = "TeamworkId"**</span>

~~~

{
  "ApiDocument":{
    "ApiDocumentId":"2B336970-42E8-40A8-9068-3B01383FB02D",
    "Status":"Successful",
    "ApiRequestType":"catalog-export",
    "TotalRecords":1,
    "RecordsCount":1,
    "ElapsedTime":"00:00:00.5966667",
    "StartDateTime":"2019-12-26T15:09:13.953",
    "EndDateTime":"2019-12-26T15:09:14.550",
    "Response":{
      "Styles":[
        {
          "RecModified":"2019-12-26T10:51:59.890",
          "InvenType":"Style",
          "StyleNo":"272",
          "DCSS":{
            "DCSSCode":"MENKNIMTE",
            "DeptCode":"MENS",
            "DeptName":"Mens",
            "ClassCode":"KNITTOPS",
            "ClassName":"Knit Tops",
            "SubClass1Code":"MTEE",
            "SubClass1Name":"M Tee"
          },
          "Season":"SUMMER 2012",
          "Manufacturer":"1",
          "ManufacturerName":"Rocawear",
          "ManufacturerCode":"1",
          "ManufacturerId":"EB6E099C-E545-48AE-A716-27E8EF5C524A",
          "TaxCategory":"RETAIL",
          "TaxCategoryName":"RETAIL",
          "TaxCategoryExternalIdCode":"RETAIL",
          "TaxCategoryId":"65C2A167-8B07-4756-BDA1-0CEC9743C5B6",
          "Description1":"R0012T701",
          "Description2":"",
          "Description3":"",
          "StoreDescription":"S\/S \"THE NAVY\" TSHIRT",
          "OrderCost":7.680000000,
          "Height":0.00000000000000000000,
          "Length":0.00000000000000000000,
          "IsWeighted":false,
          "Weight":0.00000000000000000000,
          "Width":0.00000000000000000000,
          "AttributeSet1":"Color",
          "AttributeSet1Description":"Color",
          "AttributeSet1Code":"COLOR",
          "AttributeSet2":"Mens Top Size",
          "AttributeSet2Description":"Mens Top Size",
          "AttributeSet2Code":"MTOPSIZE",
          "Inactive":false,
          "Replenishment":false,
          "EligibleForLRP1":false,
          "EligibleForLRP2":false,
          "BasePrice":0.00000000000000000000,
          "ForeignCurrencyOrderCost":0.00000000000000000000,
          "Items":[
            {
              "SODepositPercent":0.00000000000000000000,
			  "BlockEcAtsChanges":false,
              "PLU":3740,
              "UPC":"885398404285",
              "UPCs":[
                {
                  "UPC":"885398404285",
                  "IsDeleted":false
                }
              ],
              "ExternalId":"885398404285",
              "Trade":false,
              "SOAvailability":"Available",
              "Inactive":false,
              "TradeDiscount":false,
              "MemberDiscount":false,
              "EligibleForDiscount":true,
              "Discontinued":false,
              "DigitalAsset":false,
              "WeeksOfSupply":0.00000000000000000000,
              "LeadTime":0,
              "ShipFromVendor":"Never",
              "EligibleForLRP1":false,
              "EligibleForLRP2":false,
              "AttributeValue1":"WHITE",
              "AttributeValue2":"M",
              "ForeignCurrencyOrderCost":0.00000000000000000000,
              "BasePrice":0.00000000000000000000,
              "Height":0.00000000000000000000,
              "Length":0.00000000000000000000,
              "Weight":0.00000000000000000000,
              "Width":0.00000000000000000000,
              "OrderCost":7.68000000000000000000,
              "IsMadeToMeasure":false,
              "Volume":"None",
              "IsChargeItem":false,
              "NeverChargeShipping":false,
              "FinalSale":false,
              "TokenQty":0.0000000000,
              "BlockReplenishment":false,
              "Custom":{

              },
              "IsDeleted":false
            },
            {
              "SODepositPercent":0.00000000000000000000,
		      "BlockEcAtsChanges":false,
              "PLU":3741,
              "UPC":"885398404278",
              "UPCs":[
                {
                  "UPC":"885398404278",
                  "IsDeleted":false
                }
              ],
              "ExternalId":"885398404278",
              "Trade":false,
              "SOAvailability":"Available",
              "Inactive":false,
              "TradeDiscount":false,
              "MemberDiscount":false,
              "EligibleForDiscount":true,
              "Discontinued":false,
              "DigitalAsset":false,
              "WeeksOfSupply":0.00000000000000000000,
              "LeadTime":0,
              "ShipFromVendor":"Never",
              "EligibleForLRP1":false,
              "EligibleForLRP2":false,
              "AttributeValue1":"WHITE",
              "AttributeValue2":"S",
              "ForeignCurrencyOrderCost":0.00000000000000000000,
              "BasePrice":0.00000000000000000000,
              "Height":0.00000000000000000000,
              "Length":0.00000000000000000000,
              "Weight":0.00000000000000000000,
              "Width":0.00000000000000000000,
              "OrderCost":7.68000000000000000000,
              "IsMadeToMeasure":false,
              "Volume":"None",
              "IsChargeItem":false,
              "NeverChargeShipping":false,
              "FinalSale":false,
              "TokenQty":0.0000000000,
              "BlockReplenishment":false,
              "Custom":{

              },
              "IsDeleted":false
            },
            {
              "SODepositPercent":0.00000000000000000000,
		      "BlockEcAtsChanges":false,
              "PLU":3739,
              "UPC":"885398404292",
              "UPCs":[
                {
                  "UPC":"885398404292",
                  "IsDeleted":false
                }
              ],
              "ExternalId":"885398404292",
              "Trade":false,
              "SOAvailability":"Available",
              "Inactive":false,
              "TradeDiscount":false,
              "MemberDiscount":false,
              "EligibleForDiscount":true,
              "Discontinued":false,
              "DigitalAsset":false,
              "WeeksOfSupply":0.00000000000000000000,
              "LeadTime":0,
              "ShipFromVendor":"Never",
              "EligibleForLRP1":false,
              "EligibleForLRP2":false,
              "AttributeValue1":"WHITE",
              "AttributeValue2":"L",
              "ForeignCurrencyOrderCost":0.00000000000000000000,
              "BasePrice":0.00000000000000000000,
              "Height":0.00000000000000000000,
              "Length":0.00000000000000000000,
              "Weight":0.00000000000000000000,
              "Width":0.00000000000000000000,
              "OrderCost":7.68000000000000000000,
              "IsMadeToMeasure":false,
              "Volume":"None",
              "IsChargeItem":false,
              "NeverChargeShipping":false,
              "FinalSale":false,
              "TokenQty":0.0000000000,
              "BlockReplenishment":false,
              "Custom":{

              },
              "IsDeleted":false
            },
            {
              "SODepositPercent":0.00000000000000000000,
		      "BlockEcAtsChanges":false,
              "PLU":3738,
              "UPC":"885398404322",
              "UPCs":[
                {
                  "UPC":"885398404322",
                  "IsDeleted":false
                }
              ],
              "ExternalId":"885398404322",
              "Trade":false,
              "SOAvailability":"Available",
              "Inactive":false,
              "TradeDiscount":false,
              "MemberDiscount":false,
              "EligibleForDiscount":true,
              "Discontinued":false,
              "DigitalAsset":false,
              "WeeksOfSupply":0.00000000000000000000,
              "LeadTime":0,
              "ShipFromVendor":"Never",
              "EligibleForLRP1":false,
              "EligibleForLRP2":false,
              "AttributeValue1":"WHITE",
              "AttributeValue2":"3XL",
              "ForeignCurrencyOrderCost":0.00000000000000000000,
              "BasePrice":0.00000000000000000000,
              "Height":0.00000000000000000000,
              "Length":0.00000000000000000000,
              "Weight":0.00000000000000000000,
              "Width":0.00000000000000000000,
              "OrderCost":7.68000000000000000000,
              "IsMadeToMeasure":false,
              "Volume":"None",
              "IsChargeItem":false,
              "NeverChargeShipping":false,
              "FinalSale":false,
              "TokenQty":0.0000000000,
              "BlockReplenishment":false,
              "Custom":{

              },
              "IsDeleted":false
            },
            {
              "SODepositPercent":0.00000000000000000000,
		      "BlockEcAtsChanges":false,
              "PLU":3742,
              "UPC":"885398404308",
              "UPCs":[
                {
                  "UPC":"885398404308",
                  "IsDeleted":false
                }
              ],
              "ExternalId":"885398404308",
              "Trade":false,
              "SOAvailability":"Available",
              "Inactive":false,
              "TradeDiscount":false,
              "MemberDiscount":false,
              "EligibleForDiscount":true,
              "Discontinued":false,
              "DigitalAsset":false,
              "WeeksOfSupply":0.00000000000000000000,
              "LeadTime":0,
              "ShipFromVendor":"Never",
              "EligibleForLRP1":false,
              "EligibleForLRP2":false,
              "AttributeValue1":"WHITE",
              "AttributeValue2":"XL",
              "ForeignCurrencyOrderCost":0.00000000000000000000,
              "BasePrice":0.00000000000000000000,
              "Height":0.00000000000000000000,
              "Length":0.00000000000000000000,
              "Weight":0.00000000000000000000,
              "Width":0.00000000000000000000,
              "OrderCost":7.68000000000000000000,
              "IsMadeToMeasure":false,
              "Volume":"None",
              "IsChargeItem":false,
              "NeverChargeShipping":false,
              "FinalSale":false,
              "TokenQty":0.0000000000,
              "BlockReplenishment":false,
              "Custom":{

              },
              "IsDeleted":false
            },
            {
              "SODepositPercent":0.00000000000000000000,
		      "BlockEcAtsChanges":false,
              "PLU":3737,
              "UPC":"885398404315",
              "UPCs":[
                {
                  "UPC":"885398404315",
                  "IsDeleted":false
                }
              ],
              "ExternalId":"885398404315",
              "Trade":false,
              "SOAvailability":"Available",
              "Inactive":false,
              "TradeDiscount":false,
              "MemberDiscount":false,
              "EligibleForDiscount":true,
              "Discontinued":false,
              "DigitalAsset":false,
              "WeeksOfSupply":0.00000000000000000000,
              "LeadTime":0,
              "ShipFromVendor":"Never",
              "EligibleForLRP1":false,
              "EligibleForLRP2":false,
              "AttributeValue1":"WHITE",
              "AttributeValue2":"2XL",
              "ForeignCurrencyOrderCost":0.00000000000000000000,
              "BasePrice":0.00000000000000000000,
              "Height":0.00000000000000000000,
              "Length":0.00000000000000000000,
              "Weight":0.00000000000000000000,
              "Width":0.00000000000000000000,
              "OrderCost":7.68000000000000000000,
              "IsMadeToMeasure":false,
              "Volume":"None",
              "IsChargeItem":false,
              "NeverChargeShipping":false,
              "FinalSale":false,
              "TokenQty":0.0000000000,
              "BlockReplenishment":false,
              "Custom":{

              },
              "IsDeleted":false
            }
          ],
          "PrimaryVendorIdentifier":"1",
          "PrimaryVendorName":"Rocawear",
          "PrimaryVendorCode":"1",
          "PrimaryVendorId":"EB6E099C-E545-48AE-A716-27E8EF5C524A",
          "Vendors":[
            {
              "VendorIdentifier":"1",
              "VendorIdentifierName":"Rocawear",
              "VendorIdentifierCode":"1",
              "VendorIdentifierId":"EB6E099C-E545-48AE-A716-27E8EF5C524A",
              "OrderCost":7.68000000000000000000,
              "MinQty":0.00000000000000000000,
              "MinPurchaseAmount":0.0000,
              "LeadTime":0,
              "IsPrimary":true,
              "WeeksOfSupply":0.00000000000000000000,
              "ForeignCurrencyOrderCost":0.00000000000000000000,
              "VendorDetails":[
                {
                  "PLU":3737,
                  "OrderCost":7.68000000000000000000,
                  "MinQty":0.00000000000000000000,
                  "MinPurchaseAmount":0.0000,
                  "LeadTime":0,
                  "VendorUPC":"",
                  "VLU":"",
                  "WeeksOfSupply":0.00000000000000000000,
                  "ForeignCurrencyOrderCost":0.00000000000000000000
                },
                {
                  "PLU":3738,
                  "OrderCost":7.68000000000000000000,
                  "MinQty":0.00000000000000000000,
                  "MinPurchaseAmount":0.0000,
                  "LeadTime":0,
                  "VendorUPC":"",
                  "VLU":"",
                  "WeeksOfSupply":0.00000000000000000000,
                  "ForeignCurrencyOrderCost":0.00000000000000000000
                },
                {
                  "PLU":3739,
                  "OrderCost":7.68000000000000000000,
                  "MinQty":0.00000000000000000000,
                  "MinPurchaseAmount":0.0000,
                  "LeadTime":0,
                  "VendorUPC":"",
                  "VLU":"",
                  "WeeksOfSupply":0.00000000000000000000,
                  "ForeignCurrencyOrderCost":0.00000000000000000000
                },
                {
                  "PLU":3740,
                  "OrderCost":7.68000000000000000000,
                  "MinQty":0.00000000000000000000,
                  "MinPurchaseAmount":0.0000,
                  "LeadTime":0,
                  "VendorUPC":"",
                  "VLU":"",
                  "WeeksOfSupply":0.00000000000000000000,
                  "ForeignCurrencyOrderCost":0.00000000000000000000
                },
                {
                  "PLU":3741,
                  "OrderCost":7.68000000000000000000,
                  "MinQty":0.00000000000000000000,
                  "MinPurchaseAmount":0.0000,
                  "LeadTime":0,
                  "VendorUPC":"",
                  "VLU":"",
                  "WeeksOfSupply":0.00000000000000000000,
                  "ForeignCurrencyOrderCost":0.00000000000000000000
                },
                {
                  "PLU":3742,
                  "OrderCost":7.68000000000000000000,
                  "MinQty":0.00000000000000000000,
                  "MinPurchaseAmount":0.0000,
                  "LeadTime":0,
                  "VendorUPC":"",
                  "VLU":"",
                  "WeeksOfSupply":0.00000000000000000000,
                  "ForeignCurrencyOrderCost":0.00000000000000000000
                }
              ]
            }
          ],
          "Custom":{

          },
          "IsDeleted":false
        }
      ]
    }
  }
}
~~~
