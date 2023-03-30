---
title: "Sales Order Import API"
date: 2022-04-20T11:13:00-05:00
draft: true
weight: 19
---

{{% notice warning %}}
The API Reference is currently under construction and its contents should not be used until further notice.
{{% /notice %}}

- [Overview](#Overview)
- [Request endpoint](#RequestEndpoint)
- [Request settings](#RequestSettings)
- [Request format](#RequestFormat)
- [Responses](#Responses)
- [Request Examples](#RqstExample)
- [Response Examples](#ResponseExamples)
- [Common import errors and warnings](#CommonErrs)

---

## Overview {#Overview}

The **Sales Order Import** API is used to import *Sales Orders* from the client to Teamwork.

## Request endpoint {#RequestEndpoint}

Method: **POST**  
URL: <font color="Brown"><b><i>\<your-chq-url\></i></font>/chqapi/import/sales-order</b>  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <font color="Brown">***\<your-api-key\>***</font>

<font color="Brown">***\<your-chq-url\>***</font> is the URL of your CHQ as supplied by Teamwork.  
<font color="Brown">***\<your-api-key\>***</font> is your API key value. See the [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) document for further info.

## Request settings {#RequestSettings}

Below are the values which can be supplied in the **ImportSettings** group of the import request.

The **Key** column lists the names of the available settings. The **Supported Values** column lists the valid values which can be supplied for the setting. The **Default** column lists the default value for each setting if that setting is not supplied.

**Key** | **Supported Values** | **Default** | **Description** |
---- | ---- | ---- | ---- |
ItemSetting | Id, ExternalId, Plu, Upc, Clu | Id | An indicator of which value is to be used to identify items for *ItemIdentifier*. |
LocationSetting | Id, Code, ExternalId | Id | An indicator of which value is to be used to identify locations for **LocationId**, **SaleCreditLocationId**, and **SellFromLocationId**. |
SalesOrderSetting | Id, SalesOrderNo | Id | An indicator of which value is to be used to identify sales orders for **SalesOrderId** and **SalesOrderNo**. |
SalesOrderItemSetting | Id, LineNo | Id | An indicator of which value is to be used to identify sales order items for **SalesOrderItemId**. |
EmployeeSetting | Id, Code | Id | An indicator of which value is to be used to identify associates (employees) for **AssociateId**. |
ShippingMethodSetting | Id, Code | Id | An indicator of which value is to be used to identify shipping methods for **ShippingMethodId**. |
PriceLevelSetting | Id, Code | Id | An indicator of which value is to be used to identify price levels for **PriceLevelId**. |
DiscountReasonSetting | Id, Code | Id | An indicator of which value is to be used to identify discount reasons for **GlobalDiscountReasonId** and **LineDiscountReasonId**. |
ChargeSetting | Id, Code | Id | An indicator of which value is to be used to identify charges for **ChargeId**. |
CustomerSetting | Id, No, Email, Phone | Id | An indicator of which value is to be used to identify customers for **CustomerId**. |
TaxZoneSetting | Id, Code | Id | An indicator of which value is to be used to identify tax zones (tax areas) for **DestTaxZoneId** and **SourceTaxZoneId**. |
TaxCategorySetting | Id, Code | Id | An indicator of which value is to be used to identify tax categories for **TaxCategoryId**. |
TaxJurisdictionSetting | Id, Code | Id | An indicator of which value is to be used to identify tax jurisdictions for **TaxJurisdictionId**. |
EcommerceChannelSetting | Id, Code | Id | An indicator of which value is to be used to identify eCommerce channels for **EcommerceChannelId**. |
PaymentMethodSetting | Id, Code | Id | An indicator of which value is to be used to identify payment methods for **PaymentMethodId**. |
ValidateState | true, false | The value of the "validate state" setting for the eCommerce channel. | If this parameter is *false* then validation of country states will be skipped. |
CreatePaymentForSendSale | true, false | false | If this parameter is *true* then send sales can be created with payment. |

## Request format {#RequestFormat}

Any field not explicitly marked as **Required** is optional and can be omitted. See the [*JSON Data Types*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/JsonDataTypes_6.41/) document for a description of the values which could appear in the **Data Type** column.

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
Source | string | The source of the data being supplied to the import. **Required** |
CommunicationId | string, guid | A unique identifier of the request (see the [*Handling the CommunicationId parameter*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/HandlingTheCommunicationIdParam_6.41/) document for additional info). |
<font color=#008AE8>**Data**</font> | | <font color=#008AE8>A group containing the following fields and groups. **Required**</font> |
<font color=#008AE8>**Data: Request**</font> | | <font color=#008AE8>A group containing the following fields and groups. **Required**</font> |
<font color=#008AE8>**Data: Request: ImportSettings**</font> | | <font color=#008AE8>A group containing the following fields and groups.</font> |
ItemSetting | string, enum | An indicator of which value is to be used to identify items. Its value must be one of the following: “Id”, “ExternalId”, “Plu”, “Upc”. |
LocationSetting | string, enum | An indicator of which value is to be used to identify locations. Its value must be one of the following: "Id", "Code", "ExternalId". |
SalesOrderSetting | string, enum | An indicator of which value is to be used to identify sales orders. Its value must be one of the following: "Id", "SalesOrderNo". |
SalesOrderItemSetting | string, enum | An indicator of which value is to be used to identify items within a sales order. Its value must be one of the following: "Id", "LineNo". |
EmployeeSetting | string, enum | An indicator of which value is to be used to identify employees. Its value must be one of the following: "Id", "Code". |
ShippingMethodSetting | string, enum | An indicator of which value is to be used to identify shipping methods. Its value must be one of the following: "Id", "Code". |
PriceLevelSetting | string, enum | An indicator of which value is to be used to identify price levels. Its value must be one of the following: "Id", "Code". |
DiscountReasonSetting | string, enum | An indicator of which value is to be used to identify discount reasons. Its value must be one of the following: "Id", "Code". |
ChargeSetting | string, enum | An indicator of which value is to be used to identify a charge. Its value must be one of the following: "Id", "Code". |
CustomerSetting | string, enum | An indicator of which value is to be used to identify a customer. Its value must be one of the following: "Id", "No", "Email", "Phone". |
TaxZoneSetting | string, enum | An indicator of which value is to be used to identify tax zones. Its value must be one of the following: "Id", "Code". |
TaxCategorySetting | string, enum | An indicator of which value is to be used to identify tax categories. Its value must be one of the following: "Id", "Code". |
TaxJurisdictionSetting | string, enum | An indicator of which value is to be used to identify tax jurisdictions. Its value must be one of the following: "Id", "Code". |
EcommerceChannelSetting | string, enum | An indicator of which value is to be used to identify eCommerce channels. Its value must be one of the following: "Id", "Code". |
PaymentMethodSetting | string, enum | An indicator of which value is to be used to identify payment methods. Its value must be one of the following: "Id", "Code". |
ValidateState | boolean | <font color="Crimson">***????????***</font> |
CreatePaymentForSendSale | boolean | <font color="Crimson">***????????***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: ImportSettings***</font> |
<font color=#008AE8>**Data: Request: SalesOrders**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with one to ten entries. **Required**</font> |
SalesOrderId | string, guid, null | A unique identifier of the sales order. |
SalesOrderNo | string, len:1-128, null | An identifier of the sales order. |
IsArchive | boolean | An indicate as to whether or not the sales order has been archived. |
Status | string, enum | An indicator of sales order's status. Its value must be one of the following: "InReview", "Approved", "Shipping", "Completed", "Cancelled". |
DeliveryMethod | string, enum, null | An indicator of sales order's delivery method. Its value must be one of the following: "Ship", "StorePickUp". |
LocationId | string, null | An identifier of the sales order's location. |
SaleCreditLocationId | string, null | An identifier of the sales order's credit location. <font color="Crimson">***????????***</font> |
SellFromLocationId | string, null | An identifier of the sales order's *sell from* location. |
AssociateId | string, null | An identifier of the associate who created<font color="Crimson">***????????***</font> the sales order. |
LargeMemo | string, null | Misc. notes about the sales order. |
IsDropShipment | boolean, null | A indicator as to whether or not the sales order is a drop shipment. |ShippingMethodId | string, null | An identifier of the shi[ping method used for the sales order. |
SalesOrderDateTime | string, datetime, null | A timestamp of when the sales order was created. <font color="Crimson">***????????***</font> |
PriceLevelId | string, null | An identifier of the price level used for the sales order. |
IsExternalOms | boolean | An indicator as to whether or not the sales order uses an external order management system. <font color="Crimson">***????????***</font> |
CustomDate1 - 4 | string, datetime, null | These four fields are customizable date values for the sales order. |
CustomFlag1 - 3 | boolean, null | These four fields are customizable flags for the sales order. |
CustomLookup1 - 8 | string, null | These eight fields are customizable lookup values for the sales order. |
CustomDecimal1 - 4 | number, null | These four fields are customizable floating-point values for the sales order. |
CustomNumber1 - 4 | integer, null | These four fields are customizable integer values for the sales order. |
CustomText1 - 4 | string, len:0-256, null | These four fields are customizable text values for the sales order. |
<font color=#008AE8>**Data: Request: SalesOrders: SalesOrderInstruction**</font> | | <font color=#008AE8>A group containing the following fields and groups.<br><br>**Note:** At least one of the following instructions must be supplied if this group is supplied.</font> |
<font color=#008AE8>**Data: Request: SalesOrders: SalesOrderInstruction: SendSaleInstruction**</font> | | <font color=#008AE8>A group containing the following fields and groups.</font> |
ShipPartial | boolean, null | An indicator as to wherther or not the sales order can be partially shipped. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: SalesOrders: SalesOrderInstruction: SendSaleInstruction***</font> |
<font color=#008AE8>**Data: Request: SalesOrders: SalesOrderInstruction: WebInstruction**</font> | | <font color=#008AE8>A group containing the following fields and groups.</font> |
EcommerceChannelId | string, null | An identifier of the eCommerce channel used for the sales order. |
WebOrderNo string, len:1-50, null | An identifier of the web order which generated the sales order. <font color="Crimson">***????????***</font> |
ShipPartial | boolean, null | An indicator as to wherther or not the sales order can be partially shipped when generated by a web order. <font color="Crimson">***????????***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: SalesOrders: SalesOrderInstruction: WebInstruction***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: SalesOrders: SalesOrderInstruction***</font> |
<font color=#008AE8>**Data: Request: SalesOrders: GlobalDiscountReason**</font> | | <font color=#008AE8>A group containing the following fields and groups.</font> |
GlobalDiscountReasonId | string, null | An identifier of the reason the global discount was applied. |
GlobalDiscountAmount | number, null | The amount of the discount applied. |
GlobalDiscountCouponNumber | string, null | An identifer of the coupon used to apply the discount. |
GlobalDiscountCouponType | string, enum, null | An indicator of type of coupon used. Its value must be one of the following: "Percent", "Amount". |
GlobalDiscountCouponValue | number, null | The amount of the discount applied via the coupon. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: SalesOrders: GlobalDiscountReason***</font> |
<font color=#008AE8>**Data: Request: SalesOrders: Customer**</font> | | <font color=#008AE8>A group containing the following fields and groups.</font> |
GuestCheckout | boolean | A indicator as to whether the sales order is a guest checkout or not. <font color="Crimson">***????????***</font> |
CustomerId | string | An identifier of the customer. |
MembershipCode | string | The customer’s membership code. |
<font color=#008AE8>**Data: Request: SalesOrders: Customer: BillInfo**</font> | | <font color=#008AE8>A group containing the following fields and groups.</font> |
LastName | string, null | The bill to customer’s last name. |
FirstName | string, null | The bill to customer’s first name. |
MiddleName | string, null | The bill to customer’s middle name. |
Address1 - 5| string, null | These five fields are the lines (up to five) of the bill to customer’s street address. |
City | string, null | The bill to customer’s city. |
State | string, null | The bill to customer’s state. |
PostalCode | string, null | The bill to customer’s postal (zip) code. |
FiscalCode | string, null | The code under which the bill to customer is registered with the government. |
CountryCode | string, null | A code identifying the bill to customer's country. |
Organization | string, null | The bill to customer’s orginazation. |
Gender | string, enum, null | An indicator of the bill to customer’s gender.  Its value must be one of the following: "None", "Male", "Female",*null*. |
Email | string, null | The bill to customer’s email address. |
Birthdate | string, datetime, null | A timestamp of the bill to customer's birth date. |
WholesaleCustomer | boolean, null | An indicator as to whether or not the bill to customer is a wholesale customer.
TradingPartner | boolean, null | An indicator as to whether or not the bill to customer is a trading partner.
AddressId | string, guid | A unique identifier of the bill to customer’s address. |
AddressType | string, null | The bill to customer’s address type. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: SalesOrders: Customer: BillInfo***</font> |
<font color=#008AE8>**Data: Request: SalesOrders: Customer: SellInfo**</font> | | <font color=#008AE8>A group containing the following fields and groups.</font> |
LastName | string, null | The sell to customer’s last name. |
FirstName | string, null | The sell to customer’s first name. |
MiddleName | string, null | The sell to customer’s middle name. |
Address1 - 5| string, null | These five fields are the lines (up to five) of the sell to customer’s street address. |
City | string, null | The sell to customer’s city. |
State | string, null | The sell to customer’s state. |
PostalCode | string, null | The sell to customer’s postal (zip) code. |
FiscalCode | string, null | The code under which the sell to customer is registered with the government. |
CountryCode | string, null | A code identifying the sell to customer's country. |
Organization | string, null | The sell to customer’s orginazation. |
Gender | string, enum, null | An indicator of the sell to customer’s gender.  Its value must be one of the following: "None", "Male", "Female",*null*. |
Email | string, null | The sell to customer’s email address. |
Birthdate | string, datetime, null | A timestamp of the sell to customer's birth date. |
WholesaleCustomer | boolean, null | An indicator as to whether or not the sell to customer is a wholesale customer.
TradingPartner | boolean, null | An indicator as to whether or not the sell to customer is a trading partner.
AddressId | string, guid | A unique identifier of the sell to customer’s address. |
AddressType | string, null | The sell to customer’s address type. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: SalesOrders: Customer: SellInfo***</font> |
<font color=#008AE8>**Data: Request: SalesOrders: Customer: ShipInfo**</font> | | <font color=#008AE8>A group containing the following fields and groups.</font> |
LastName | string, null | The ship to customer’s last name. |
FirstName | string, null | The ship to customer’s first name. |
MiddleName | string, null | The ship to customer’s middle name. |
Address1 - 5| string, null | These five fields are the lines (up to five) of the ship to customer’s street address. |
City | string, null | The ship to customer’s city. |
State | string, null | The ship to customer’s state. |
PostalCode | string, null | The ship to customer’s postal (zip) code. |
FiscalCode | string, null | The code under which the ship to customer is registered with the government. |
CountryCode | string, null | A code identifying the ship to customer's country. |
Organization | string, null | The ship to customer’s orginazation. |
Gender | string, enum, null | An indicator of the ship to customer’s gender. Its value must be one of the following: "None", "Male", "Female",*null*. |
Email | string, null | The ship to customer’s email address. |
Birthdate | string, datetime, null | A timestamp of the ship to customer's birth date. |
WholesaleCustomer | boolean, null | An indicator as to whether or not the ship to customer is a wholesale customer.
TradingPartner | boolean, null | An indicator as to whether or not the ship to customer is a trading partner.
AddressId | string, guid | A unique identifier of the ship to customer’s address. |
AddressType | string, null | The ship to customer’s address type. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: SalesOrders: Customer: ShipInfo***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: SalesOrders: Customer***</font> |
<font color=#008AE8>**Data: Request: SalesOrders: GlobalCharges**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
GlobalChargeId | string, guid | A unique identifier of the global charge. |
ChargeId | string, null | An identifier of the charge. |
Qty | double | The charge's quantity. |
TotalAmount | double | The charge's total amount. |
TaxAmount | double | The charge's tax amount. |
TotalIncludeTax | boolean | An indicator as to whether or not the total amount includes taxes. |
TaxCategoryId | string, null | An identifier of the charge's tax category. |
LargeMemo | string, null | Misc. notes about the charge. |
SpreadType | string, enum | A code indicating the type of spread. Its value must be one of the following: "Item", "Quantity", "Weight". |
<font color=#008AE8>**Data: Request: SalesOrders: GlobalCharges: Taxes**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries</font> |
TaxId | string, guid, null | A unique identifier of the tax. |
TaxAmount | double | The tax’s amount. |
TaxPercent | double | The tax’s percentage. |
DestTaxZoneId | string | An identifier of the tax’s destination tax zone. |
SourceTaxZoneId | string | An identifier of the tax’s source tax zone. |
TaxCategoryId | string| An identifier of the tax's tax category. |
TaxJurisdictionId | string| An identifier of the tax's tax jurisdiction. |
CustomFlag1 | boolean | A customizable flag for the tax. | 
CustomNumber1 | integer | A customizable integer value for the tax. |
CustomDecimal1 | double | A customizable floating-point value for the tax. |
CustomLookup1 | string, len:1-128, null | A customizable lookup value for the tax. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: SalesOrders: GlobalCharges: Taxes***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*continuation of* ***Data: Request: SalesOrders: GlobalCharges***</font> |
Delete | boolean | An indicator as to whether or not the charge has been deleted. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: SalesOrders: GlobalCharges***</font> |
<font color=#008AE8>**Data: Request: SalesOrders: Items**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
SalesOrderItemId | string | An identifier of the item within the sales order. |
ItemIdentifier | string, null | An identifier of the item. |
Status | string, enum, null | An indicator of the item's status. Its value must be one of the following: "InReview", "Approved","Shipping", "Completed", "Cancelled". |
DeliveryMethod| string, enum, null | An indicator of the item's delivery method. Its value must be one of the following: "Ship", "StorePickUp". |
LargeMemo | string, null | Misc. notes about the item. |
SaleCreditLocationId | string, null | An identifier of the item's sales credit location. |
SellFromLocationId | string, null | An identifier of the item's sell from location. |
FulfillLocationId | string, null | An identifier of the item's fulfillment location. |
IsDropShipment | boolean | An indicator as to whether the item is part of a drop shipment or not. |
TrackingNumber | string, null | A tracking number for the item. |
ShippingMethodId | string, null | An identifier of the item’s shipping method. |
Qty | double | The item’s quantity. |
TotalAmount | double | The item's total amount. |
TaxAmount | number, null | The item's tax amount. |
TotalIncludeTax | boolean | An indicator as to whether or not the item's total amount includes taxes. |
PriceLevelId | string, null | An identifier of the item's price level. |
TaxCategoryId | string, null | An identifier of the item's tax category. |
<font color=#008AE8>**Data: Request: SalesOrders: Items: LineDiscountReason**</font> | | <font color=#008AE8>A group containing the following fields and groups.</font> |
LineDiscountReasonId | string, null | An identifier of the reason the discount was applied. |
LineDiscountAmount | double | The amount of the discount. |
LineDiscountCouponNumber | string, null | An identifier of the coupon used when applying the discount. |
LineDiscountCouponType | string, enum, null | An indicator of the coupon's type. Its value must be one of the following: "Percent", "Amount". |
LineDiscountCouponValue | number, null | The coupon's value. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: SalesOrders: Items: LineDiscountReason***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*continuation of* ***Data: Request: SalesOrders: Items***</font> |
GiftCardName | string, null | The name of the gift card used for the item. |
GiftCardNo | string, null | The number of the gift card used for the item. |
<font color=#008AE8>**Data: Request: SalesOrders: Items: LineCharges**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
LineChargeId | string, guid | A unique identifier of the charge. |
ChargeId | string, null | An identifier of the charge. |
Qty | double | The charge's quantity. |
TotalAmount | double | The total amount of the charge. |
TaxAmount | double | The charge's tax amount. |
TotalIncludeTax | boolean | An indicator as to whether or not the total amount includes taxes. |
TaxCategoryId | string, null | An identifier of the charge's tax category. |
LargeMemo | string, null | Misc. notes about the charge. |
SpreadType | string, enum | An indicator of the charge's spread type. Its value must be one of the following: "Item", "Quantity", "Weight". |
<font color=#008AE8>**Data: Request: SalesOrders: LineCharges: Taxes**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries</font> |
TaxId | string, guid, null | A unique identifier of the tax. |
TaxAmount | double | The tax’s amount. |
TaxPercent | double | The tax’s percentage. |
DestTaxZoneId | string | An identifier of the tax’s destination tax zone. |
SourceTaxZoneId | string | An identifier of the tax’s source tax zone. |
TaxCategoryId | string| An identifier of the tax's tax category. |
TaxJurisdictionId | string| An identifier of the tax's tax jurisdiction. |
CustomFlag1 | boolean | A customizable flag for the tax. | 
CustomNumber1 | integer | A customizable integer value for the tax. |
CustomDecimal1 | double | A customizable floating-point value for the tax. |
CustomLookup1 | string, len:1-128, null | A customizable lookup value for the tax. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: SalesOrders: LineCharges: Taxes***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*continuation of* ***Data: Request: SalesOrders: Items: LineCharges***</font> |
Delete | boolean | An indicator as to whether or not the charge has been deleted. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: SalesOrders: Items: LineCharges***</font> |
<font color=#008AE8>**Data: Request: SalesOrders: Items: Taxes**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries</font> |
TaxId | string, guid, null | A unique identifier of the tax. |
TaxAmount | double | The tax’s amount. |
TaxPercent | double | The tax’s percentage. |
DestTaxZoneId | string | An identifier of the tax’s destination tax zone. |
SourceTaxZoneId | string | An identifier of the tax’s source tax zone. |
TaxCategoryId | string| An identifier of the tax's tax category. |
TaxJurisdictionId | string| An identifier of the tax's tax jurisdiction. |
CustomFlag1 | boolean | A customizable flag for the tax. | 
CustomNumber1 | integer | A customizable integer value for the tax. |
CustomDecimal1 | double | A customizable floating-point value for the tax. |
CustomLookup1 | string, len:1-128, null | A customizable lookup value for the tax. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: SalesOrders: Items: Taxes***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*continuation of* ***Data: Request: SalesOrders: Items***</font> |
CustomDate1 - 4 | string, datetime, null | These four fields are customizable date values for the item. |
CustomDecimal1 - 4 | number, null | These four fields are customizable floating-point values for the item. |
CustomFlag1 - 3 | boolean, null | These four fields are customizable flags for the item. |
CustomLookup1 - 4 | string, len:1-128, null | These four fields are customizable lookup values for the item. |
CustomNumber1 - 4 | integer, null | These four fields are customizable integer values for the item. |
CustomText1 - 4 | string, len:0-256, null | These four fields are customizable text values for the item. |
VirtualGiftCardAmount | number, null | The amount of payment for the item done using a virtual gift card. <font color="Crimson">***????????***</font> |
ReadyToFill | boolean | An indicator as to whether or not the item is ready for fullfillment. |
IsGiftItem | boolean | An indicator as to whether or not the item is a gift item. |
GiftMessage | string | The item’s gift message (if the item is a gift). |
OrigReceiptItemId | string, guid, null | A unique identifier of the item in original sales receipt. |
OrigReceiptId | string, guid, null | A unique identifier of the original sales receipt containing the item. |
PromiseDate | string, datetime, null | A timestamp of when delivery of the item has been promised. <font color="Crimson">***????????***</font> |
LockFillLocation | boolean | An indicator as to whether or not the item’s fill location is to be locked. |
<font color=#008AE8>**Data: Request: SalesOrders: Items: ShipInfo**</font> | | <font color=#008AE8>A group containing the following fields and groups.</font> |
LastName | string, null | The ship to customer’s last name. |
FirstName | string, null | The ship to customer’s first name. |
MiddleName | string, null | The ship to customer’s middle name. |
Address1 - 5| string, null | These five fields are the lines (up to five) of the ship to customer’s street address. |
City | string, null | The ship to customer’s city. |
State | string, null | The ship to customer’s state. |
PostalCode | string, null | The ship to customer’s postal (zip) code. |
FiscalCode | string, null | The code under which the ship to customer is registered with the government. |
CountryCode | string, null | A code identifying the ship to customer's country. |
Organization | string, null | The ship to customer’s orginazation. |
Gender | string, enum, null | An indicator of the ship to customer’s gender. Its value must be one of the following: "None", "Male", "Female",*null*. |
Email | string, null | The ship to customer’s email address. |
Birthdate | string, datetime, null | A timestamp of the ship to customer's birth date. |
WholesaleCustomer | boolean, null | An indicator as to whether or not the ship to customer is a wholesale customer.
TradingPartner | boolean, null | An indicator as to whether or not the ship to customer is a trading partner.
AddressId | string, guid | A unique identifier of the ship to customer’s address. |
AddressType | string, null | The ship to customer’s address type. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: SalesOrders: Items: ShipInfo***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*continuation of* ***Data: Request: SalesOrders: Items***</font> |
ShipToCustomerId | string, guid, null | A unique udentifier of the ship to customer. |
GifteeEmail | string, len:0-128, null | The email address of the item’s giftee (if the item is a gift). |
GifteeName | string, len:0-128, null | The name of the item’s giftee (if the item is a gift). |
GifteeEmailSendOn | string, datetime, null | A timestamp of when the gift email is to the sent to the giftee (if the item is a gift). |
FinalSale | boolean | An indicator as to whether or not this is the item’s final sale (that is, whether it can be returned or not). |
ExternalId | string, len:0-128, null | An identifier of the item used when interacting with an external system. |
NoAutoReturn | boolean | <font color="Crimson">***????????***</font> |
<font color=#008AE8>**Data: Request: SalesOrders: Items: MemberDiscount**</font> | | <font color=#008AE8>A group containing the following fields and groups.</font> |
MemberDiscountPercent | number, null | The item’s member discount percentage. |
MemberDiscountSource | string, enum, null | An indicator of the member discount's source. Its value must be one of the following: "Price", "Margin", "PriceLevel". |
MemberDiscountAmount | number, null | The member discount amount. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: SalesOrders: Items: MemberDiscount***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*continuation of* ***Data: Request: SalesOrders: Items***</font> |
TaxExempt | boolean | An indicator as to whether or not the item is tax exempt. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: SalesOrders: Items***</font> |
<font color=#008AE8>**Data: Request: SalesOrders: Payments**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array woth zero or more entries.</font> |
PaymentMethodId | string, null | An identifier of the payment method. |
PaymentAmount | double | The ampunt of the payment. |
ListOrder | integer | The order the payment will appear in the user interface. |
Captured | boolean | An indicator as to whether or not the paymnet has been captured. |
<font color=#008AE8>**Data: Request: SalesOrders: Payments: CardInfo**</font> | | <font color=#008AE8>A group containing the following fields and groups.</font> |
AccountNumber | string | The credit card's account number. |
CardExpMonth | integer, range:0-255 | The credit card's expiration month. |
CardExpYear | integer, range:-32768-32767 | The credit card's expiration year. |
MerchantId | string | An identifier of the payment’s merchant. |
CardOrderId | string | An identifier of <font color="Crimson">***????????***</font> |
ReferenceNum | string | <font color="Crimson">***????????***</font> |
TransactionId | string | An identifier of the transaction for the payment. |
CardType | string, enum | An indicator of the card’s type. Its value must be one of the following: "Undefined", "Visa", "Master", "Discover", "Amex", "JCB", "Diners", "Solo", "Maestro", "Cirrus", "Switch", "Laser", "Other", "VisaDebit", "Debit", "UnionPay". |
CardholderFirstName | string | The card holder’s first name. |
CardholderLastName | string | The card holder’s Last name. |
CardholderAddress1 - 2 | string | The lines (up to two) of the card holder’s street address. |
CardholderCity | string | The card holder’s city. |
CardholderState | string | The card holder’s state. |
CardholderCountryCode | string | A code indicating the card holder’s country. |
CardholderPostalCode | string | The card holder’s postal (zip) code. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: SalesOrders: Payments: CardInfo***</font> |
<font color=#008AE8>**Data: Request: SalesOrders: Payments: GiftCardInfo**</font> | | <font color=#008AE8>A group containing the following fields and groups.</font> |
AccountNumber | string | The gift card's account number. |
TransactionId | string | An identifier of the transaction for the payment. |
CardholderFirstName | string | The card holder’s first name. |
CardholderLastName | string | The card holder’s Last name. |
CardholderAddress1 - 2 | string | The lines (up to two) of the card holder’s street address. |
CardholderCity | string | The card holder’s city. |
CardholderState | string | The card holder’s state. |
CardholderCountryCode | string | A code indicating the card holder’s country. |
CardholderPostalCode | string | The card holder’s postal (zip) code. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: SalesOrders: Payments: GiftCardInfo***</font> |
<font color=#008AE8>**Data: Request: SalesOrders: Payments: TokenInfo**</font> | | <font color=#008AE8>A group containing the following fields and groups.</font> |
TokenQty | double | The token's' quantity. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: SalesOrders: Payments: TokenInfo***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: SalesOrders: Payments***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*continuation of* ***Data: Request: SalesOrders***</font> |
InternationalId | string, null | An identifier of the sales order used for international orders. |
LockFillLocation | boolean | An indicator as to whether or not the sales order’s fill location is to be locked. |
ShipOnce | boolean | An indicator as to whether or not the sales order must be shiped in a single shipment. <font color="Crimson">***????????***</font> |
ExternalId | string, len:0-128, null | An identifier of the sales order used when interacting with an external system. |
AuthRecurringToken | string, null | <font color="Crimson">***????????***</font> |
BlockEmailNotifications | boolean | An indicator as to whether or not email notification for the sales order are blocked. |
ShipDate | string, datetime | A timestamp of when the sales order is to be shipped. <font color="Crimson">***????????***</font> |
ArrivalDate | string, datetime | A timestamp of when the sales order is expected to arrive at its destination. <font color="Crimson">***????????***</font> |
TaxExempt | boolean | An indicator as to whether or not the sales order is tax exempt. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: SalesOrders***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*continuation of* ***Data***</font> |
ApiDocumentId | string, guid | A unique identifier of the API document being used. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data***</font> |

## **Responses** {#Responses}

See the [Standard API formats](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/Standard_API_Formats/) document for a description of the formats of the possible responses.

## **Request Examples** {#RqstExample}

### <font color=#008AE8>**Request example #1**</font>

~~~

"SalesOrders": [
    {
      "SalesOrderNo": "SO1",
      "IsArchive": false,
      "Status": "InReview",
      "DeliveryMethod": "Ship",
      "LocationId": "HQ",
      "SaleCreditLocationId": "HQ",
      "SellFromLocationId": "HQ",
      "AssociateId": null,
      "LargeMemo": null,
      "IsDropShipment": true,
      "ShippingMethodId": "DHL",
      "SalesOrderDateTime": "2019-03-18T13:05:06.457Z",
      "IsExternalOms": false,
      "SalesOrderInstruction
        "WebInstruction
          "EcommerceChannelId": "magento",
          "WebOrderNo": "SO1",
          "ShipPartial": true
        }
      
      "Customer
        "GuestCheckout": false,
        "CustomerId": "test@test.com",
        "MembershipCode": "10902",
        "BillInfo
          "LastName": "Smith",
          "FirstName": "John",
          "MiddleName": "",
          "Address1": "Washington str. 205",
          "Address2": "",
          "Address3": "",
          "Address4": "",
          "Address5": "",
          "City": "Washington",
          "State": "Washington",
          "PostalCode": "20001",
          "FiscalCode": "",
          "CountryCode": "US",
          "Organization": "Org",
          "Phone1": "+10101010101",
          "Phone2": null,
          "Phone3": null,
          "Phone4": null,
          "Gender": "Male",
          "Email": "test@test.com",
          "Birthdate": "2019-03-18T13:05:06.458Z",
          "WholesaleCustomer": true,
          "TradingPartner": true,
          "AddressType": "Home"
        
        "ShipInfo
          "LastName": "Smith",
          "FirstName": "John",
          "MiddleName": "",
          "Address1": "Washington str. 205",
          "Address2": "",
          "Address3": "",
          "Address4": "",
          "Address5": "",
          "City": "Washington",
          "State": "Washington",
          "PostalCode": "20001",
          "FiscalCode": "",
          "CountryCode": "US",
          "Organization": "Org",
          "Phone1": "+10101010101",
          "Phone2": null,
          "Phone3": null,
          "Phone4": null,
          "Gender": "Male",
          "Email": "test@test.com",
          "Birthdate": "2019-03-18T13:05:06.458Z",
          "WholesaleCustomer": true,
          "TradingPartner": true,
          "AddressType": "Home"
        }
      
      "Items": [
        {
          "SalesOrderItemId": "1",
          "ItemIdentifier": "123",
          "Status": "InReview",
          "DeliveryMethod": "Ship",
          "LargeMemo": "",
          "IsDropShipment": true,
          "TrackingNumber": "12345",
          "ShippingMethodId": "DHL",
          "Qty": 1,
          "TotalAmount": 56.50,
          "TaxAmount": 0,
          "TotalIncludeTax": true,
          "TaxCategoryId": "RETAIL",
          "ReadyToFill": true,
          "PromiseDate": "2019-03-18T13:05:06.458Z",
          "LockFillLocation": true,
          "FinalSale": true,
          "NoAutoReturn": true,
          "ExternalId": "ext123"
        }
      ],
      "Payments": [
        {
          "PaymentMethodId": "CREDITCARD",
          "PaymentAmount": 56.50,
          "ListOrder": 0,
          "Captured": true
        }
      ],
      "InternationalId": "",
      "LockFillLocation": true,
      "AuthRecurringToken": "",
      "BlockEmailNotifications": false,
      "ShipOnce": true,
      "ExternalId": "ext123"
    }
  ]
}

~~~

### <font color=#008AE8>**Request example #2 (sales order with **CardholderGroup** in **Payment**)**</font>

~~~

{
  "Source":"string",
  "Data":{
    "Request":{
      "ImportSettings":{
        "ItemSetting":"PLU",
        "LocationSetting":"Code",
        "SalesOrderSetting":"SalesOrderNo",
        "SalesOrderItemSetting":"LineNo",
        "ShippingMethodSetting":"Code",
        "DiscountReasonSetting":"Code",
        "ChargeSetting":"Code",
        "CustomerSetting":"Id",
        "TaxZoneSetting":"Code",
        "TaxCategorySetting":"Code",
        "EcommerceChannelSetting":"Name",
        "PaymentMethodSetting":"Code",
        "ValidateState":false
      
      "SalesOrders":[
        {
          "SalesOrderNo":"1008880026",
          "Status":"Approved",
          "DeliveryMethod":"Ship",
          "LocationId":"VIKA",
          "SaleCreditLocationId":"VIKA",
          "SellFromLocationId":"VIKA",
          "LargeMemo":"true",
          "ShippingMethodId":"DHL",
          "SalesOrderInstruction":{
            "WebInstruction":{
              "EcommerceChannelId":"magento",
              "WebOrderNo":"string",
              "ShipPartial":true
            }
          
          "Customer":{
            "BillInfo":{
              "LastName":"V7",
              "FirstName":"V7",
              "Address1":"4aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa444",
              "Address2":"4bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb444",
              "Address3":"4cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc444",
              "Address4":"4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd444",
              "Address5":"4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444",
              "City":"Washington",
              "CountryCode":"US",
              "State":"Washington",
              "PostalCode":"12345",
              "Phone1":"+380503450895"
            
            "SellInfo":{
              "LastName":"V8",
              "FirstName":"V8",
              "Address1":"5aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa555555",
              "Address2":"5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb55555",
              "Address3":"5cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc555555",
              "Address4":"5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555555555",
              "Address5":"5eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee55",
              "City":"Washington",
              "CountryCode":"US",
              "State":"Washington",
              "PostalCode":"12345",
              "Phone1":"+380503450895"
            
            "ShipInfo":{
              "LastName":"V9",
              "FirstName":"V9",
              "Address1":"6aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              "Address2":"6bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66",
              "Address3":"6cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc66666",
              "Address4":"6dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd666",
              "Address5":"6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666",
              "City":"Washington",
              "CountryCode":"US",
              "State":"Washington",
              "PostalCode":"12345",
              "Phone1":"+380503450895"
            }
          
          "Items":[
            {
              "SalesOrderItemId":"1",
              "ItemIdentifier":"123",
              "Status":"Approved",
              "DeliveryMethod":"Ship",
              "SaleCreditLocationId":"VIKA",
              "SellFromLocationId":"VIKA",
              "FulfillLocationId":"VIKA",
              "ShippingMethodId":"DHL",
              "Qty":10,
              "TotalAmount":48,
              "TaxAmount":3.55
            }
          ],
          "Payments":[
            {
              "PaymentMethodId":"CREDITCARD",
              "PaymentAmount":122.26,
              "ListOrder":1,
              "Captured":true,
              "CardInfo":{
                "AccountNumber":"12345",
                "CardExpMonth":1,
                "CardExpYear":0,
                "MerchantId":"qwerty",
                "CardOrderId":"12345",
                "ReferenceNum":"12345",
                "TransactionId":"12345",
                "CardType":"Visa",
                "CardholderFirstName":"Cardholder FirstName Test Ula",
                "CardholderLastName":"Cardholder LastName Test Ula",
                "CardholderAddress1":"Cardholder Address1 Test Ula",
                "CardholderAddress2":"Cardholder Address2 Test Ula",
                "CardholderCity":"Cardholder City Test Ula",
                "CardholderState":"Cardholder State Test Ula",
                 "CardholderPostalCode":"Cardholder PostalCode Test Ula"
              }
            }
          ]
        }
      ]
    
    "ApiDocumentId":"00000000-0000-0000-0000-000000000000"
  }
}

~~~

## **Response Examples** {#ResponseExamples}

### <font color=#008AE8>**Import In Progress Response**</font>

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
  "ApiType": "simplified-sales-order-import",
  "Source": "string"
}

~~~

### <font color=#008AE8>**Successful Import Response**</font>

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
  "ApiType": "simplified-sales-order-import",
  "Source": "string"
}

~~~


### <font color=#008AE8>**Error Import Response**</font>

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
  "ApiType": "simplified-sales-order-import",
  "Source": "string"
}

~~~

## **Common import errors and warnings** {#CommonErrs}

The table below lists the most common errors that you can encounter while using the *Sales Order Import* API. The text which appear in *italics* in the **Error Message** column will be substituted by real values in the actual responses. For example: "location '*loc*' does not exist" in the below table will appear in actual output as "location 'Test' does not exist".

| **Error Message** | **Description** |
| ---- | ---- |
*propertyName* '*value*' should be greater or equal to '1753-01-01'	| A date was supplied in one of the date fields which is earlier than minimum allowable date (January 01, 1753). |
Value '*calculatedValue*' which is calculated on *propertyName* '*originalValue*' should be greater or equal to '1753-01-01' | A date was supplied in one of date fields which which is earlier than minimum allowable date (January 01, 1753) after taking into account any time zone offsets. |
Undefined payment method is not found. It is requred to cover the difference between order cost and payment | There is a difference between the order cost and payment which is allowed to be automatically covered with additional payment of a special type which is named as 'Undefined' although the 'Undefined' payment method does not exist in the database. |
Unable to set 'giftee name' because item is not virtual gift card | The field **GifteeEmail** has been supplied, but this field does not apply to the item because it is not a virtual gift card. |
Unable to set 'giftee email' because item is not virtual gift card | Specifying a *giftee email* is allowed for virtual gift cards only and the item the *giftee email* is being applied to is not a virtual gift card. |
Unable to set 'giftee email send on' because item is not virtual gift car | Specifying a *giftee email send on* date is allowed for virtual gift cards only and the item the date is being applied to is not a virtual gift card. |
Unable to get tax jurisdiction for taxes | CHQ was unable to get information about a tax jurisdiction for tax processing. |
Unable to get tax category for taxes | CHQ was unable to get information about a tax category for tax processing. |
Unable to change SalesOrderItem '*itemId*' status from 'InReview' to 'Cancelled' | The indicated item's status could not be changed from 'InReview' to 'Cancelled'. |
Unable to change SalesOrderItem '*itemId*' status from '*currStatus*' to status '*newStatus*' | The indicated item's status could not be changed from the indicated current status to a new status. |
This order contains no items | No items have been specified for a new sales order. |
There are no eligible for discount items. | A global discount has been specified, but there are no items in the sales order which are marked as eligible for discount. |
The specified "ship to" customer is not found | A "ship to" customer identified in the sales order was not found in the database. <font color="Crimson">***????????***</font> |
The specified "bill to" customer is not found | A "bill to" customer identified in the sales order was not found in the database. <font color="Crimson">***????????***</font> |
TaxZone Setting value is incorrect. ("*value*") | The "Web tax area" for an eCommerce channel is configured incorrectly in database. Contact your system administrator to resolve this issue. |
TaxZone Setting not found | The "Web tax area" is not set for the eCommerce channel. Specify theapprorpiate "web tax area" for the eCommerce channel in the CHQ settings. |
TaxZone by id '*value*' not found | The "Web tax area" for the eCommerce channel is configured incorrectly in the database. Contact your system administrator to resolve this issue. |
Tax zone with id '*id*' not found | "TaxZoneSetting"="*id*" was specified, but the id was not found in the database. |
Tax zone with code '*code*' not found | "TaxZoneSetting"="*code*" was specified, but the code was not found in the database. |
Tax zone not specified for location '*loc*' | A tax zone is not configured for the specified location in CHQ settings. |
Tax jurisdiction with id '*id*' not found | "TaxJurisdictionSetting"="*id*" was specified, but the id was not found in the database. |
Tax jurisdiction with code '*code*' not found | "TaxJurisdictionSetting"="*code*" was specified, but the code was not found in the database. |
Tax jurisdiction not specified for tax zone '*zone*' | A tax jurisdiction for the specified tax zone has not been configured in CHQ settings.
Tax category with id '*id*' not found | "TaxCategorySetting"="*id*" was specified, but the id was not found in the database. |
Tax category with code '*code*' not found | "TaxCategorySetting"="*code*" was specified, but the code was not found in the database. |
Switching to another "ship to" customer is not allowed | When updating an existent order, a "ship to" customer was supplied which differs from the value in the database. The import will not be performed because changing the "ship to" customer is not allowed for existing orders. |
Switching to another "bill to" customer is not allowed | When updating an existent order, a "bill to" customer was supplied which differs from the value in the database. The import will not be performed because changing the "bill to" customer is not allowed for existing orders. |
State '*state*' not found | The indicated *state* was not found by either code or name for the specified country. |
ShipToAddress record with identifier '*id*' is not found | An **AddressId** was specified, but there is no address record with such an identifier in the database. |
Shipping method with id '*id*' not found | "ShippingMethodSetting"="*id*" was specified, but the id was not found in the database. |
Shipping method with code '*code*' not found | "ShippingMethodSetting"="*code*" was specified, but the code was not found in the database. |
Service fee with id '*id*' not found | "ChargeSetting"="*id*" was specified, but the id was not found in the database. |
Service fee with code '*code*' not found | "ChargeSetting"="*code*" was specified, but the code was not found in the database. |
SalesOrderType can not be changed | When updating an existent sales order, the specified type is different from the type in the database. |
SalesOrderItem '*item*': quantity equals to zero | In most cases the quantity for a sales order item should be positive. This error indicates that an incorrect quantity was specified. |
SalesOrderItem '*item*': InvenItem with id '*id*' not found | An inventory item with the specified ID does not exist in database. (Additional information regarding the ID of sales order item with the specified inventory item will also be provided.)
SalesOrderItem '*item*': InvenItem with id '*id*' is physical gift card | Neither **GiftCardNo** nor **GiftCardName** have been specified, but the inventory item is physical gift card. Provide either **GiftCardNo** or **GiftCardName** to resolve this type of error. (Additional information regarding the ID of sales order item with the specified inventory item will also be provided.) |
SalesOrderItem '*item*': InvenItem with id '*id*' is not charge item | Either **GiftCardNo** or **GiftCardName** have been specified. These fields are used only for inventory items which are marked as *charge items* in the database. The inventory item which has been specified by the **GiftCardNo** and/or **GiftCardName** fields is not marked as *charge item* in the database. Remove the fields **GiftCardNo** and/or **GiftCardName** from the import document. (Additional information regarding the ID of sales order item with the specified inventory item will also be provided.) |
SalesOrderItem '*item*': GiftCardNo must be defined for virtual gift card (itemId: *id*) | You have specified The field **GiftCardName** has been supplied while the field **GiftCardNo** has not. If the inventory item is marked as a *virtual gift card* in the database, this error will occur because specifying **GiftCardNo** is required for virtual gift cards. (Additional information regarding the ID of sales order item with the specified inventory item will also be provided.) |
SalesCreditLocationId is required | The **SaleCreditLocationId** was not supplied for either a new order or for an existing one if sale credit location was not previously set. |
Sales order item with id '*id*' is from another sales order | The sales order item exists in the database, but it belongs to a sales order which is different from the order in the import document. |
PriceLevel with code '*code*' not found | "PriceLevelSetting"="*code*" was specified, but the code was not found in the database. |
Price level with id '*id*' not found | "PriceLevelSetting"="*id*" was specified, but the id was not found in the database. |
Please specify location | A **LocationId** was not specified for a new order or a location with the specified identifier was not found. |
Payment method with id '*id*' not found | "PaymentMethodSetting"="*id*" was specified, but the id was not found in the database. |
Payment method with code '*code*' not found | "PaymentMethodSetting"="*code*" was specified, but the code was not found in the database. |
Payment method identifier is not specified | The field **PaymentMethodId** was not supplied. |
Number changing is not allowed for sales order '*id*' | "SalesOrderSetting"="*id*" was supplied along with both the **SalesOrderId** and **SalesOrderNo** fields. However, the specified sales order has a different **SalesOrderNo** in the database. Changing the number of the sales order is not allowed. |
More than one not captured payment | It is possible to import a sales order with several different payments. However, only one of these payments can be in the *not captured* status. CHQ does not support more than one *authorized* (not *captured*) payment in a sales order. |
MemberDiscountPercent should not be less than zero | The value specified for the **MemberDiscountPercent** field is negative. The **MemberDiscountPercent** value should always be positive. |
MemberDiscountPercent should not be greater than 100 | The value specified for the **MemberDiscountPercent** field is greater than "100". The **MemberDiscountPercent** value should always be positive and not more than 100. |
MemberDiscountAmount should not be less than zero | The value specified for the **MemberDiscountAmount** is negative. The **MemberDiscountAmount** should always be positive. |
Location with id '*id*' not found | "LocationSetting"="*id*" was specified, but the id was not found in the database. |
Location with code '*code*' not found | "LocationSetting"="*code*" was specified, but the code was not found in the database. |
Inventory item with *identifierType* *itemIdentifier* is 'sell coupon' item | This type of error occurs for send sale orders if the inventory item is marked as a *sell coupon*. |
Inventory item with PLU '*plu*' not found | "ItemSetting"="*plu*" was specified, but *plu* was not found in the database. |
Inventory item with identifier '*id*' not found | "ItemSetting"="*id*" was specified, but the id was not found in the database. |
Invalid tax zone identifier '*id*' | "TaxZoneSetting"="*id*" was specified, but the id was not found in the database. |
Invalid tax jurisdiction identifier '*id*' | "TaxJurisdictionSetting"="*id*" was specified, but the id was not found in the database. |
Invalid tax category identifier '*id*' | "TaxCategorySetting"="*id*" was specified, but the id was not found in the database. |
Invalid shipping method identifier '*id*' | "ShippingMethodSetting"="*id*" was specified, but the id was not found in the database. |
Invalid service fee identifier '*id*' "ChargeSetting"="*id*" was specified, but the id is in an incorrect format. |
Invalid sales order item identifier '*id*' | A sales order item identifier is supposed to be a GUID, but is specified in the wrong format. |
Invalid price level identifier '*id*' | "PriceLevelSetting"="*id*" was specified, but *id* is in an incorrect format. |
Invalid PLU '*plu*' | "ItemSetting"="*plu*" was specified, but *plu* is in an incorrect format. |
Invalid payment method identifier '*id*' | "PaymentMethodSetting"="*id*" was specified, but the id is in an incorrect format. |
Invalid payment authorization, error message: '*message*' | If one of the supplied payments is not *captured* it may be checked for a valid authorization status during the import. Such a check did not complete successfully. |
Invalid location identifier '*id*' | "LocationSetting"="*id*" was specified, but the id is in an incorrect format. |
Invalid inventory item identifier '*id*' | "ItemSetting"="*id*" was specified, but the id is in an incorrect format. |
Invalid Ecommerce channel id '*id*' | "EcommerceChannelSetting"="*id*" was specified, but the id is in an incorrect format. |
Invalid discount reason identifier '*id*' | "DiscountReasonSetting"="*id*" was specified, but the id is in an incorrect format. |
Invalid date '*dateValue*' in *propertyName* | *dateValue*, which is specified in one of custom fields (*propertyName*), is in an incorrect format. |
Invalid customer identifier '*id*' | "CustomerSetting"="*id*" was specified, but the id is in an incorrect format. |
Invalid associate identifier '*id*' | "EmployeeSetting"="*id*" was specified, but the id is in an incorrect format. |
If global charge total amount is zero, tax amount should be zero too | The *total amount of global charge* was supplied as zero, but the *tax amount of global charge* has a value that is not zero. If *total amount of charge* is zero then *tax amount* should also be zero. |
If global charge total amount is positive, tax amount should be positive too | The *total amount of global charge* was supplied as a positive value but the *tax amount of global charge* was asupplied as negative value. If *total amount of charge* is positive, *tax amount* should also be positive. |
Fill location is required for sales order item '*itemId*' because lock fill location is true | 	**FulfillLocationId** was not supplied in the import document. **FulfillLocationId** is required because "lock fill location" is set to "true" and the specified delivery method is "ship". |
Fill location is required for sales order item '*itemId*' because lock fill location is true | **FulfillLocationId** was not supplied, but the *fill location* is locked at the sales order item level makes **FulfillLocationId** a required field. |
Fill location is required for sales order item '*itemId*' because delivery method is store pickup | **FulfillLocationId** was not supplied in the import document. **FulfillLocationId** is required because the specified delivery method is *store pickup*. |
Fill location for sales order item '*itemId*' cant not be changed to given location	You specified | **FulfillLocationId** was not supplied in the import document. A location with such identifier has been found but it is inactive, deleted, "in transit", the specified delivery method is "store pickup" and the location is not available for store pickup. |
Failed to search customer. Try to import again later. | There was an error when CHQ tried to search for the customer in SVS (Store Value Services). |
Failed to create customer. Try to import again later. | There was an error when CHQ tried to create the customer in SVS. |
Ecommerce channel with name '*name*' not found | "EcommerceChannelSetting"="*name*" was specified and the *name* was not found in the database. |
Ecommerce channel with id '*id*' not found | "EcommerceChannelSetting"="*id*" was specified, but the id was not found in the database. |
Ecommerce channel is not specified | A new sales order was imported and an identifier of the eCommerce channel was not specified. |
Discount reason with id '*id*' not found | "DiscountReasonSetting"="*id*" was specified, but the id was not found in the database. |
Discount reason with code '*code*' not found | "DiscountReasonSetting"="*code*" was specified, but the code was not found in the database. |
Customer information is missing	"Bill" or "ship" | Information about the customer is absent in import document. |
Country with code or name '*value*' not found | A country with the specified code or name was not found in database. |
ChargeId is not specified | A **ChargeId** was not specified for a global or line charge. |
Charge quantity cannot be equal to zero | The quantity of a global or item charge should be greater than zero. |
Charge quantity cannot be equal to zero | The quantity of a global or item charge snould not be zero. |
Changing taxes is not implemented | An attempt was made to make changes in data which describes taxes. Taxes can not be changed because this functionality is not implemented yet. |
Changing completed sales order item '*item*' is not allowed | An attempt was made to change a sales order item, but that item is in the *completed* status. Such operations are prohibited. |
Changing completed sales order '*order*' is not allowed | An attempt was made to change a sales order, but it is in the *completed* status. Such operations are prohibited. |
Changing charges is not implemented | An attempt was made to change data which describes charges. Charges can not be changed because this functionality is not implemented yet. |
Cannot update sales order *salesOrderId* because changing sales orders in held status is prohibited | An attempt was made to import a sales order which is in the *held* status in the database. Changes are not allowed to be imported for sales orders that status. |
Cannot process difference in statuses on sales order and sales order items in import document | A sales order cannot be imported if there are status differences between the sales order and any sales order items. |
Associate with id '*id*' not found | "EmployeeSetting"="*id*" was specified, but the id was not found in the database. |
Associate with code '*code*' not found | "EmployeeSetting"="*code*" was specified, but the code was not found in the database. |
Another order exists with number '*value1*' but identifier different from '*value2*' | "SalesOrderSetting"="SalesOrderNo" was supplied and both **SalesOrderId** and **SalesOrderNo** were supplied and the specified sales order has a different **SalesOrderId** already in the database. |
Another order exists with number '*nbr*' | "SalesOrderSetting"="Id" was supplied and both **SalesOrderId** and **SalesOrderNo** were supplied and there is another sales order with the specified **SalesOrderNo** in already the database. |
Another order exists with identifier '*id*' | "SalesOrderSetting"="SalesOrderNo" was supplied and both **SalesOrderId** and **SalesOrderNo** were supplied and there is another sales order with the specified **SalesOrderId** already in the database. |
Adding items to completed sales order '*order*' is not allowed | An attempt was made to add new items to existing sales order which is in the *completed* status. |
'Giftee email' is required because item is virtual gift card | The field **GifteeEmail** was omitted when the inventory item is a virtual gift card. This field is required for virtual gift cards. |