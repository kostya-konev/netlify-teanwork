---
title: "Inventory Import API"
date: 2022-03-10T10:39:00-05:00
draft: true
weight: 9
---

{{% notice warning %}}

The API Reference is currently under construction and its contents should not be used until further notice.

{{% /notice %}}

- [Overview](#Overview)
- [Request endpoint](#RequestEndpoint)
- [Request format](#RequestFormat)
- [Request example(s)](#RequestExamples)
- [Response example(s)](#ResponseExamples)

---

## Overview {#Overview}

The **Inventory Import** API is used to import inventory (catalog) information into CHQ.

See the [*How to make an import API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnImportRequest_6.41/) document for a description on how import requests are made and on the standard  response formats used. The **Inventory Import** request format will be described below.

## Request endpoint {#RequestEndpoint}

Method: **POST**  
URL: <font color="Brown"><b><i>\<your-chq-url\></i></font>/chqapi/import/inventory</b>  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <font color="Brown">***\<your-api-key\>***</font>

<font color="Brown">***\<your-chq-url\>***</font> is the URL of your CHQ as supplied by Teamwork.  
<font color="Brown">***\<your-api-key\>***</font> is your API key value. See the [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) document for further info.

## Request format {#RequestFormat}

Any field not explicitly marked as **Required** is optional and can be omitted. See the [*JSON Data Types*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/JsonDataTypes_6.41/) document for a description of the values which could appear in the **Data Type** column.

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
Source | string | The source of the data being supplied to the import. |
CommunicationId | string, guid | A unique identifier of the request. See the [*Handling the CommunicationId parameter*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/HandlingTheCommunicationIdParam_6.41/) document for additional info. |
<font color=#008AE8>**Data**</font> | | <font color=#008AE8>A group containing the following fields and groups. **Required**</font> |
<font color=#008AE8>**Data: Request**</font> | | <font color=#008AE8>A group containing the following fields and groups. **Required**</font> |
<font color=#008AE8>**Data: Request: Settings:**</font> | | <font color=#008AE8>A group containing the following fields and groups. |
ImportBySetting | string, enum | An indicator as to which identifier is to be used. Its value must be one of the following: “ExternalId”, “Plu”, “StyleNo”. |
DepartmentSetting | string, enum | An indicator as to which identifier type is to be used for departments. Its value must be one of the following: “Code”, “Name”, “ClassificationCode”. |
AltDepartmentSetting | string, enum | An indicator as to which identifier type is to be used for alternate departments. Its value must be one of the following: “Code”, “Name”, “ClassificationCode”. |
AttributeSetSetting | string, enum | An indicator as to which identifier type is to be used for attributes. Its value must be one of the following: “Code”, “Name”. |
ManufacturerSetting | string, enum | An indicator as to which identifier type is to be used for manufacturers. Its value must be one of the following: “No”, “Name”. |
PrimaryVendorSetting | string, enum | An indicator as to which identifier type is to be used for primary vendors. Its value must be one of the following: “No”, “Name”. |
CreateAttributeSetValueSetting | string, enum | An indicator as to whether or not the attribute set value should be created<font color="Crimson">***????????***</font>. Its value must be one of the following: “Validate”, “Populate”. |
CreateSeasonSetting | string, enum | An indicator as to whether or not the season value should be created<font color="Crimson">***????????***</font>. Its value must be one of the following: “Validate”, “Populate”. |
CreateTaxCategorySetting | string, enum | An indicator as to whether or not the tax category value should be created<font color="Crimson">***????????***</font>. Its value must be one of the following: “Validate”, “Populate”. |
CreateCustomLookupSetting | string, enum | An indicator as to whether or not the custom lookup value should be created<font color="Crimson">***????????***</font>. Its value must be one of the following: “Validate”, “Populate”. |
CreateDepartmentSetting | string, enum | An indicator as to whether or not the department value should be created<font color="Crimson">***????????***</font>. Its value must be one of the following: “Validate”, “Populate”. |
CreateClassSetting | string, enum | An indicator as to whether or not the class value should be created<font color="Crimson">***????????***</font>. Its value must be one of the following: “Validate”, “Populate”. |
VendorSetting | string, enum | An indicator as to which identifier type is to be used for vendors. Its value must be one of the following: “No”, “Name”. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: ImportSettings***</font> |
<font color=#008AE8>**Data: Request: Styles**</font> |  | <font color=#008AE8>A group containing the following fields and groups. This group is an array with one or more entries.</font> |
StyleNo | string, len:1-20, null | An identifier of the style. |
Description1 - 4 | string, len:0-64 | These four fields are the descriptions (up to four) of the style. |
AttributeSet1 - 3 | string, len:1-30, null | These three fields are identifiers of the attribute sets which apply to the style. |
Manufacturer | string, len:1-30 | An identifier of the style’s manufacturer. |
PrimaryVendor | string, len:1-30 | An identifier of the style’s primary vendor. |
VendorPartNo | string, len:1-30], null | The style’s vendor part number. |
OrderCost | number, null | The style’s order cost. |
Department | string, len:1-30 | The style’s department. |
Class | string, len:1-30 | The style’s class. |
SubClass1 - 2 | string, len:1-30 | The style’s first and second subclasses. |
DepartmentClassCode | string, len:1-10 | A code identifying the style’s department class. |
AltDepartment | string, len:1-30 | The style’s alternate department. |
AltClass | string, len:1-30 | The style’s alternate class. |
AltSubClass1 - 2 | string, len:1-30 | The style’s first and second alternate subclasses. |
AltDepartmentClassCode | string, len:1-10 | A code identifying the style’s alternate department class. |
SeasonName | string, len:1-30, null | The style’s season name. |
TaxGroupCode | string, len:1-128, null | A code identifying the style’s tax group. |
TaxCategory | string, len:1-128, null | The style’s tax category. |
BrandName | string, len:1-30, null | The style’s brand name. |
Replenishment | boolean, null | An indicator as to whether or not the style can participate in replenishment functionality. |
IsWeighted | boolean, null | An indicator as to whether or not all of the items in the style are weighted. |
RequireItemAvailability | boolean, null | An indicator as to whether or not items in the style can be added to a sales order if there is no stock available in the *sell / fulfill from* location. |
CountryOfOrigin | string, len:1-128, null | The style’s country of origin. |
CustomDate1 - 12 | string,datetime, null | These twelve fields are customizable date values for the style. |
CustomDecimal1 - 12 | number, null | These twelve fields are customizable floating-point values for the style. |
CustomFlag1 - 18 | boolean, null | These eighteen fields are customizable flag values for the style. |
CustomLookup1 - 12 | string, null | These twelve fields are customizable lookup values for the style. |
CustomNumber1 - 12 | integer, null | These twelve fields are customizable integer values for the style. |
CustomText1 - 12 | string, null | These twelve fields are customizable text values for the style. |
<font color=#008AE8>**Data: Request: Styles: Items**</font> |  | <font color=#008AE8>A group containing the following fields and groups. This group is an array with one or more entries.</font> |
EID | string, len:1-128 | An identifier of the item used when interacting with an external system. |
PLU | integer, range:1-* | The item’s product lookup number. |
CLU | string, len:1-20, null | The item’s custom lookup number. |
Attribute1 - 3 | string, len:1-30, null | These three fields are the item’s attributes. |
Height | number, null | The item’s height. |
Length | number, null | The item’s length. |
Weight | number, null | The item’s weight. |
Width | number, null | The item’s width. |
OrderCost | number, null | The item’s order cost. |
BasePrice | number, null | The item’s base price. |
OwnerLocationCode | string, len: 1-10, null | A code indicating that the item is specific to one location rather than being *"corporate"*. |
ReleaseDate | string, datetime, null | The item’s release date. |
Trade | boolean, null | An indicator as to whether or not the item can be part of a trade-in. |
Repair | boolean, null | An indicator as to whether or not the item can be part of a repair order. |
Rental | boolean, null | An indicator as to whether or not the item can be part of a rental order. |
ServiceFeeCode | string, len: 1-20, null | A code indicating the item’s service fee.<font color="Crimson">***????????***</font> |
NotTrackOH | boolean, null | An indicator as to whether or not the item is an inventory item. |
TradeDiscount | boolean, null | An indicator as to whether or not the item can be part of a trade discount.<font color="Crimson">***????????***</font> |
MemberDiscount | boolean, null | An indicator as to whether or not the item can be part of a member discount.<font color="Crimson">***????????***</font> |
Inactive | boolean, null | An indicator as to whether or not the item is inactive. |
RequireDiscountAuthorizationCode | boolean, null | An indicator as to whether or not the item requires an authorization code when being included in a discount. |
AcceptToken | boolean, null | An indicator as to whether or not the item can accept payments via token. |
AutoPromptToPayWithTokens | boolean, null | An indicator as to whether or not the associate will be automatically prompted to request payments via tokens for this item. <font color="Crimson">***????????***</font> |
EligibleForLoyaltyRewards | boolean, null | An indicator as to whether or not the item is eligible for Loyalty Rewards Program 1. |
SODepositPercent | number, null | The item’s sales order deposit percentage. |
ChargeItemType | string, enum, null | The type of charge allowed for the item. When supplied its value must be one of the following: “VirtualGiftCard”, “PhysicalGiftCard”, “Charge”, *null*. |
EligibleForDiscount | boolean, null | An indicator as to whether or not the item is eligible for discount. |
NeverChargeShipping | boolean, null | An indicator as to whether or not a shipping fee can be charged for this item. |
EligibleForLoyaltyRewards2 | boolean, null | An indicator as to whether or not the item is eligible for loyalty Rewards Program 2. |
LoyaltyRewards1Ratio | number, null | The item’s dollars to reward points ratio for loyalty rewards program one. |
LoyaltyRewards2Ratio | number, null | The item’s dollars to reward points ratio for loyalty rewards program two. |
PreSaleStartDate | string, datetime, null | The timestamp of when item is available for presale. |
PreSaleEndDate | string, datetime, null | The timestamp of when item is no longer available for presale. |
PreSaleMaxQty | number, null | The maximum quantity of the item which can be purchased during presale. |
IsDigitalAsset | boolean, null | An indicator as to whether or not the item is a digital asset. |
ProductURL | string, len: 1-1024, null | The item’s URL (Universal Resource Locator). <font color="Crimson">***???? The item's location where? ????***</font> |
<font color=#008AE8>**Data: Request: Styles: Items: RichMedia**</font> |  | <font color=#008AE8>A group containing the following fields and groups.</font> |
<font color=#008AE8>**Data: Request: Styles: Items: RichMedia: VideoLinks**</font> |  | <font color=#008AE8>A group containing the following fields and groups. This group is an array with one or more entries.</font> |
ContentName | string | An identifier of the content. **Required** |
Uri | string | The content’s URI (Universal Resource Identifier). **Required** |
Type | string, enum | The type of content. Its value must be one of the following: “Text”, “Image”, “Video”, “Html”. |
Index | integer | <font color="Crimson">***????????***</font> **Required** |
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*end of* ***Data: Request: Styles: Items: RichMedia: VideoLinks***</font> |
<font color=#008AE8>**Data: Request: Styles: Items: RichMedia: ImageLinks**</font> |  | <font color=#008AE8>A group containing the following fields and groups. This group is an array with one or more entries.</font> |
ContentName | string | An identifier of the content. **Required** |
Uri | string | The content’s URI (Universal Resource Identifier). **Required** |
Type | string, enum | The type of content. Its value must be one of the following: “Text”, “Image”, “Video”, “Html”. |
Index | integer | <font color="Crimson">***????????***</font> **Required** |
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*end of* ***Data: Request: Styles: Items: RichMedia: ImageLinks***</font> |
<font color=#008AE8>**Data: Request: Styles: Items: RichMedia: Thumbnails**</font> |  | <font color=#008AE8>A group containing the following fields and groups. This group is an array with one or more entries.</font> |
ContentName | string | An identifier of the content. **Required** |
Uri | string | The content’s URI (Universal Resource Identifier). **Required** |
Type | string, enum | The type of content. Its value must be one of the following: “Text”, “Image”, “Video”, “Html”. |
Index | integer | <font color="Crimson">***????????***</font> **Required** |
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*end of* ***Data: Request: Styles: Items: RichMedia: Thumbnails***</font> |
<font color=#008AE8>**Data: Request: Styles: Items: RichMedia: LargeImages**</font> |  | <font color=#008AE8>A group containing the following fields and groups. This group is an array with one or more entries.</font> |
ContentName | string | An identifier of the content. **Required** |
Uri | string | The content’s URI (Universal Resource Identifier). **Required** |
Type | string, enum | The type of content. Its value must be one of the following: “Text”, “Image”, “Video”, “Html”. |
Index | integer | <font color="Crimson">***????????***</font> **Required** |
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*end of* ***Data: Request: Styles: Items: RichMedia: LargeImages***</font> |
<font color=#008AE8>**Data: Request: Styles: Items: RichMedia: LongDescription**</font> |  | <font color=#008AE8>A group containing the following fields and groups. This group is an array with one or more entries.</font> |
ContentName | string | An identifier of the content. **Required** |
Uri | string | The content’s URI (Universal Resource Identifier). **Required** |
Type | string, enum | The type of content. Its value must be one of the following: “Text”, “Image”, “Video”, “Html”. |
Index | integer | <font color="Crimson">***????????***</font> **Required** |
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*end of* ***Data: Request: Styles: Items: RichMedia: LongDescription***</font> |
<font color=#008AE8>**Data: Request: Styles: Items: RichMedia: Videos**</font> |  | <font color=#008AE8>A group containing the following fields and groups. This group is an array with one or more entries.</font> |
ContentName | string | An identifier of the content. **Required** |
Uri | string | The content’s URI (Universal Resource Identifier). **Required** |
Type | string, enum | The type of content. Its value must be one of the following: “Text”, “Image”, “Video”, “Html”. |
Index | integer | <font color="Crimson">***????????***</font> **Required** |
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*end of* ***Data: Request: Styles: Items: RichMedia: Videos***</font> |
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*end of* ***Data: Request: Styles: Items: RichMedia***</font> |
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*continuation of* ***Data: Request: Styles: Items***</font> |
ShipFromVendor | string, enum, null | An indicator as to when the item can can be shipped from the vendor. When supplied its value must be one of the following: “Never”, “OK”, “Always”, *null*. |
Discontinued | boolean, null | An indicator as to whether or not the item is discontinued. |
Backorder | string, enum, null | An indicator as to whether or not the item is eligible for backorder. When supplied its value must be one of the following: “Ineligible”, “Eligible”, *null*.
WeeksOfSupply | number, null | The number of weeks of supply available for the item. |
LeadTime | number, null | The number of weeks the vendor needs to fill an order. |
Volume | string, enum, null | An indicator of the item’s sales volume. Its value must be one of the following: “None”, “VeryLow”, “Low”, “Medium”, “High”, “VeryHigh”, *null*. |
ItemClassificationType | string, enum, null | An indicator of the item’s classification. Its value must be one of the following: “Normal”, “Charge”, “FixedAsset”, “DoNotChange”, “SellCoupon”, “SellToken”, *null*. |
IsMadeToMeasure | boolean, null | An indicator as to whether or not the item is made to measure. |
FinalSale | boolean, null | An indicator as to whether or not this is the item’s final sale (that is, whether it can be returned or not). |
<font color=#008AE8>**Data: Request: Styles: Items: UPCs**</font> |  | <font color=#008AE8>A group containing the following fields and groups. This group is an array with from one to ten entries.</font> |
Value | string, len:8-18 | The UPC’s value. <font color="Crimson">***???? Is this the actual UPC code? ????***</font> **Required** |
IsDefault | boolean | An indicator as to whether or not this is the item’s default UPC. |
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*end of* ***Data: Request: Styles: Items: UPCs***</font> |
<font color=#008AE8>**Data: Request: Styles: Items: Prices**</font> |  | <font color=#008AE8>A group containing the following fields and groups. This group is an array with from one to ten entries.</font> |
PriceLevel | string | An indentifier of the price level. **Required** |
Price | number, null | The item’s price. **Required** |
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*end of* ***Data: Request: Styles: Items: Prices***</font> |
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*continuation of* ***Data: Request: Styles: Items***</font> |
SOAvailability | string, enum, null | An indicator of the item’s sales order availability. When present, its value must be one of the following: “Available”, “SpecialOrderOnly”, “NotAvailable”, *null*. |
SerialNumberTracking | string, enum, null | An indicator of the item’s serial number tracking status. When present, its value must be one of the following: “None”, “Require”, “RequireAndValidate”, “Optional”, *null*. |
CustomDate1 - 12 | string, datetime, null | These twelve fields are customizable date values for the item. |
CustomDecimal1 - 12 | number, null | These twelve fields are customizable decimal (floating point) values for the item. |
CustomFlag1 - 18 | boolean, null | These eighteen fields are customizable flags for the item. |
CustomLookup1 - 12 | string, null | These twelve fields are customizable lookup values for the item. |
CustomNumber1 - 12 | integer, null | These twelve fields are customizable integer values for the item. |
CustomText1 - 12 | string, null | These twelve fields are customizable text values for the item. |
<font color=#008AE8>**Data: Request: Styles: Items: ECollections**</font> |  | <font color=#008AE8>A group containing the following fields and groups. This group is an array with one or more entries.</font> |
Name | string | The name of an ecollection with which the item is a member.<font color="Crimson">***????????***</font> **Required** |
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*end of* ***Data: Request: Styles: Items: ECollections***</font> |
<font color=#008AE8>**Data: Request: Styles: Items: EChannels**</font> |  | <font color=#008AE8>A group containing the following fields and groups. This group is an array with one or more entries.</font> |
Name | string | The name of an echannel which the item can be purchased through.<font color="Crimson">***????????***</font> **Required** |
Status | string, enum, null | An indicator of the echannel’s status. Its value must be one of the following: “NonEc”, “EcOffer”, “EcSuspended”, “EcDiscontinued”, *null*. **Required** |
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*end of* ***Data: Request: Styles: Items: EChannels***</font> |
<font color=#008AE8>**Data: Request: Styles: Items: ECategories**</font> |  | <font color=#008AE8>A group containing the following fields and groups. This group is an array with one or more entries.</font> |
Name | string | The name of an ecategory to which the echannel is a member of.<font color="Crimson">***????????***</font> **Required** |
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*end of* ***Data: Request: Styles: Items: ECategories***</font> |
<font color=#008AE8>**Data: Request: Styles: Items: Vendors**</font> |  | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
VendorIdentifier | string, len:1-30 | An identifier of the item’s vendor. **Required** |
Delete | boolean | An indicator as to whether or not the vendor has been deleted.<font color="Crimson">***????????***</font> |
OrderCost | double | The item’s order cost for this vendor.<font color="Crimson">***????????***</font> |
MinQty | double | The item’s vendor’s minimum order quantity. |
LeadTime | integer | The number of weeks the vendor needs to fill an order for this item. |
WeeksOfSupply | double | The number of weeks of supply available for the item. |
VendorPartNo | string, len:1-30 | The vendor’s identifier for the item. |
VendorUpc | string, len:8-18 | The vendor’s universal product code for the item. |
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*end of* ***Data: Request: Styles: Items: Vendors***</font> |
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*continuation of* ***Data: Request: Styles: Items***</font> |
ForeignCurrencyOrderCost | number, null | The cost of the item in foreign currency.<font color="Crimson">***????????***</font> |
DefaultFeeAmount | decimal, null | The item’s default fee amount. |
CouponType | string, null | An indicator of the item’s *sell coupon* type. When supplied its value must be one of the following: “Amount”, “Discount”, *null*. |
CouponValue | number, null | The item’s *sell coupon* value. |
ItemType | string, enum | An indicator of the item’s type. When supplied its value must be one of the following: "SingleItem", "Style". |
TokenQty | number, null | The item’s *sell token* quantity. |
DateAvailable | string, datetime, null | A timestamp of when the item will be available for sale.<font color="Crimson">***????????***</font> |
SellType | string, enum | An indicator of the item’s sell type. When supplied its value must be one of the following: "Available", "Backorder", "Preorder", "Perpetual", "DoNotChange" |
WidthGroupCode | string, null | An identifier of the width group to which the item belongs.<font color="Crimson">***????????***</font> |
AllocationStartDate | string, datetime, null | <font color="Crimson">***????????***</font> |
BlockReplenishment | boolean | An indicator as to whether or not replenishment of this item has been blocked.<font color="Crimson">***????????***</font> |
EcAtsBufferQty | number, null | The item's ecommerce available to sell buffer quantity.<font color="Crimson">***????????***</font> |
EcAtsBufferPercent | number, null | The item's ecommerce available to sell buffer percentage.<font color="Crimson">***????????***</font> |
BlockEcAtsChanges | boolean | An indicator as to whether or not ecommerce available to sell changes are blocked.<font color="Crimson">***????????***</font> |
AutoApplyReturnFee | boolean | An indicator as to whether or not a return fee is automatically applied for the item.<font color="Crimson">***????????***</font> |
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*end of* ***Data: Request: Styles: Items***</font> |
<font color=#008AE8>**Data: Request: Styles: RichMedia**</font> |  | <font color=#008AE8>A group containing the following fields and groups.</font> |
<font color=#008AE8>**Data: Request: Styles: RichMedia: VideoLinks**</font> |  | <font color=#008AE8>A group containing the following fields and groups. This group is an array with one or more entries.</font> |
ContentName | string | An identifier of the content. **Required** |
Uri | string | The content’s URI (Universal Resource Identifier). **Required** |
Type | string, enum | The type of content. Its value must be one of the following: “Text”, “Image”, “Video”, “Html”. |
Index | integer | <font color="Crimson">***????????***</font> **Required** |
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*end of* ***Data: Request: Styles: RichMedia: VideoLinks***</font> |
<font color=#008AE8>**Data: Request: Styles: RichMedia: ImageLinks**</font> |  | <font color=#008AE8>A group containing the following fields and groups. This group is an array with one or more entries.</font> |
ContentName | string | An identifier of the content. **Required** |
Uri | string | The content’s URI (Universal Resource Identifier). **Required** |
Type | string, enum | The type of content. Its value must be one of the following: “Text”, “Image”, “Video”, “Html”. |
Index | integer | <font color="Crimson">***????????***</font> **Required** |
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*end of* ***Data: Request: Styles: RichMedia: ImageLinks***</font> |
<font color=#008AE8>**Data: Request: Styles: RichMedia: Thumbnails**</font> |  | <font color=#008AE8>A group containing the following fields and groups. This group is an array with one or more entries.</font> |
ContentName | string | An identifier of the content. **Required** |
Uri | string | The content’s URI (Universal Resource Identifier). **Required** |
Type | string, enum | The type of content. Its value must be one of the following: “Text”, “Image”, “Video”, “Html”. |
Index | integer | <font color="Crimson">***????????***</font> **Required** |
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*end of* ***Data: Request: Styles: RichMedia: Thumbnails***</font> |
<font color=#008AE8>**Data: Request: Styles: RichMedia: LargeImages**</font> |  | <font color=#008AE8>A group containing the following fields and groups. This group is an array with one or more entries.</font> |
ContentName | string | An identifier of the content. **Required** |
Uri | string | The content’s URI (Universal Resource Identifier). **Required** |
Type | string, enum | The type of content. Its value must be one of the following: “Text”, “Image”, “Video”, “Html”. |
Index | integer | <font color="Crimson">***????????***</font> **Required** |
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*end of* ***Data: Request: Styles: RichMedia: LargeImages***</font> |
<font color=#008AE8>**Data: Request: Styles: RichMedia: LongDescription**</font> |  | <font color=#008AE8>A group containing the following fields and groups. This group is an array with one or more entries.</font> |
ContentName | string | An identifier of the content. **Required** |
Uri | string | The content’s URI (Universal Resource Identifier). **Required** |
Type | string, enum | The type of content. Its value must be one of the following: “Text”, “Image”, “Video”, “Html”. |
Index | integer | <font color="Crimson">***????????***</font> **Required** |
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*end of* ***Data: Request: Styles: RichMedia: LongDescription***</font> |
<font color=#008AE8>**Data: Request: Styles: RichMedia: Videos**</font> |  | <font color=#008AE8>A group containing the following fields and groups. This group is an array with one or more entries.</font> |
ContentName | string | An identifier of the content. **Required** |
Uri | string | The content’s URI (Universal Resource Identifier). **Required** |
Type | string, enum | The type of content. Its value must be one of the following: “Text”, “Image”, “Video”, “Html”. |
Index | integer | <font color="Crimson">***????????***</font> **Required** |
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*end of* ***Data: Request: Styles: RichMedia: Videos***</font> |
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*end of* ***Data: Request: Styles: RichMedia***</font> |
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*continuation of* ***Data: Request: Styles***</font> |
CustomLongText1 - 18 | string | These eighteen fields are custom long text values for the style. |
IPITaxGroupCode | string, len:1-10, null | A code identifying the style’s IPI (*Imposto sobre Produtos Industrializados*) tax group for Brazil. |
<font color=#008AE8>***Data: Request: Styles: CustomMultiselects1***</font> | | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
LookupName | string, leng:1-128, null | A lookup name for a custom multiselect value for the style. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Styles: CustomMultiselects1***</font> |
<font color=#008AE8>***Data: Request: Styles: CustomMultiselects2***</font> | | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
LookupName | string, leng:1-128, null | A lookup name for a custom multiselect value for the style. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Styles: CustomMultiselects2***</font> |
<font color=#008AE8>***Data: Request: Styles: CustomMultiselects3***</font> | | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
LookupName | string, leng:1-128, null | A lookup name for a custom multiselect value for the style. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Styles: CustomMultiselects3***</font> |
<font color=#008AE8>***Data: Request: Styles: CustomMultiselects4***</font> | | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
LookupName | string, leng:1-128, null | A lookup name for a custom multiselect value for the style. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Styles: CustomMultiselects4***</font> |
<font color=#008AE8>***Data: Request: Styles: CustomMultiselects5***</font> | | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
LookupName | string, leng:1-128, null | A lookup name for a custom multiselect value for the style. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Styles: CustomMultiselects5***</font> |
<font color=#008AE8>***Data: Request: Styles: CustomMultiselects6***</font> | | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
LookupName | string, leng:1-128, null | A lookup name for a custom multiselect value for the style. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Styles: CustomMultiselects6***</font> |
<font color=#008AE8>***Data: Request: Styles: CustomMultiselects7***</font> | | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
LookupName | string, leng:1-128, null | A lookup name for a custom multiselect value for the style. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Styles: CustomMultiselects7***</font> |
<font color=#008AE8>***Data: Request: Styles: CustomMultiselects8***</font> | | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
LookupName | string, leng:1-128, null | A lookup name for a custom multiselect value for the style. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Styles: CustomMultiselects8***</font> |
<font color=#008AE8>***Data: Request: Styles: CustomMultiselects9***</font> | | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
LookupName | string, leng:1-128, null | A lookup name for a custom multiselect value for the style. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Styles: CustomMultiselects9***</font> |
<font color=#008AE8>***Data: Request: Styles: CustomMultiselects10***</font> | | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
LookupName | string, leng:1-128, null | A lookup name for a custom multiselect value for the style. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Styles: CustomMultiselects10***</font> |
<font color=#008AE8>***Data: Request: Styles: CustomMultiselects11***</font> | | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
LookupName | string, leng:1-128, null | A lookup name for a custom multiselect value for the style. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Styles: CustomMultiselects11***</font> |
<font color=#008AE8>***Data: Request: Styles: CustomMultiselects12***</font> | | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
LookupName | string, leng:1-128, null | A lookup name for a custom multiselect value for the style. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Styles: CustomMultiselects12***</font> |
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*continuation of* ***Data: Request: Styles: Items***</font> |
WeeksOfSupply | number, null | The number of weeks of supply available for items in this style.<font color="Crimson">***????????***</font> |
LeadTime | integer, null | The number of weeks the vendor needs to fill an order for item in the style.<font color="Crimson">***????????***</font> |
LikeStyle | string, null | An identifier of the style which this style is like. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Styles***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request***</font> |
ApiDocumentId | string, guid | A unique identifier of the API document being used. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data***</font> |

## Request example(s) {#RequestExamples}

<font color="Crimson">***???????? need example ????????***</font>

## Response example(s) {#ResponseExamples}

<font color="Crimson">***???????? need example ????????***</font>
