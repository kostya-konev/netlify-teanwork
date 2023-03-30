---
title: "Sales Receipt Import API"
date: 2022-04-26T06:33:00-05:00
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
- [Request example(s)](#RequestExamples)
- [Response example(s)](#ResponseExamples)

---

## Overview {#Overview}

The **Sales Order Import** API is used to import *Sales Orders* into CHQ.

See the [*How to make an import API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnImportRequest_6.41/) document for a description on how import requests are made and on the standard  response formats used. The **Sales Order Import** request format will be described below.

## Request endpoint {#RequestEndpoint}

Method: **POST**  
URL: <font color="Brown"><b><i\<your-chq-url\></i></font>/chqapi/import/receipt</b>  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <font color="Brown">***\<your-api-key\>***</font>

<font color="Brown">***\<your-chq-url\>***</font> is the URL of your CHQ as supplied by Teamwork.  
<font color="Brown">***\<your-api-key\>***</font> is your API key value. See the [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) document for further info.

## Request settings {#RequestSettings}

Below are the values which can be supplied in the **Settings** group of the import request.

The **Key** column lists the names of the available settings. The **Supported Values** column lists the valid values which can be supplied for the setting. The **Default** column lists the default value for each setting if that setting is not supplied.

**Key** | **Supported Values** | **Default** | **Description** |
---- | ---- | ---- | ---- |
ItemSetting | Id, ExternalId, Plu, Upc | Id | An indicator of which value is to be used to identify items. |
LocationSetting | Id, Code | Id | An indicator of which value is to be used to identify locations. |
ReceiptSetting | Id, ReceiptNo | Id | An indicator of which value is to be used to identify receipts. |
ReceiptItemSetting | Id, LineNo | Id | An indicator of which value is to be used to identify item within a receipt. |
EmployeeSetting | Id, LoginName | Id | An indicator of which value is to be used to identify employees. |
ShippingMethodSetting | Id, Code | Id | An indicator of which value is to be used to identify shipping methods. |
DiscountReasonSetting | Id, Code | Id | An indicator of which value is to be used to identify discount reasons. |
ChargeSetting | Id, Code, Eid | Id | An indicator of which value is to be used to identify charges. |
CustomerSetting | Id, No, Email, Phone | Id | An indicator of which value is to be used to identify customers. |
TaxZoneSetting | Id, Code | Id | An indicator of which value is to be used to identify tax zones. |
TaxCategorySetting | Id, Code | Id | An indicator of which value is to be used to identify tax categories. |
TaxJurisdictionSetting | Id, Code | Id | An indicator of which value is to be used to identify tax jurisdictions. |
PaymentMethodSetting | Id, Code | Id | An indicator of which value is to be used to identify payment methods. |

## Request format {#RequestFormat}

Any field not explicitly marked as **Required** is optional and can be omitted. See the [*JSON Data Types*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/JsonDataTypes_6.41/) document for a description of the values which could appear in the **Data Type** column.

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
Source | string | The source of the data being supplied to the import. **Required** |
CommunicationId | string, guid | A unique identifier of the request. See the [*Handling the CommunicationId parameter*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/HandlingTheCommunicationIdParam_6.41/) document for additional info. |
<font color=#008AE8>**Data**</font> | | <font color=#008AE8>A group containing the following fields and groups. **Required**</font> |
<font color=#008AE8>**Data: Request**</font> | | <font color=#008AE8>A group containing the following fields and groups.</font> |
<font color=#008AE8>**Data: Request: Settings**</font> | | <font color=#008AE8>A group containing the following fields and groups.</font> |
ItemSetting | string, enum | An indicator of which value is to be used to identify items. Its value must be one of the following: “Id”, “ExternalId”, “Plu”, “Upc”. |
LocationSetting | string, enum | An indicator of which value is to be used to identify locations. Its value must be one of the following: "Id", "Code". |
ReceiptSetting | string, enum | An indicator of which value is to be used to identify receipts. Its value must be one of the following: "Id", "ReceiptNo". |
ReceiptItemSetting | string, enum | An indicator of which value is to be used to identify items within a receipt. Its value must be one of the following: "Id", "LineNo". |
EmployeeSetting | string, enum | An indicator of which value is to be used to identify employees. Its value must be one of the following: "Id", "LoginName". |
ShippingMethodSetting | string, enum | An indicator of which value is to be used to identify shipping methods. Its value must be one of the following: "Id", "Code". |
DiscountReasonSetting | string, enum | An indicator of which value is to be used to identify discount reasons. Its value must be one of the following: "Id", "Code". |
ChargeSetting | string, enum | An indicator of which value is to be used to identify a charge. Its value must be one of the following: "Id", "Code", "Eid". |
CustomerSetting | string, enum | An indicator of which value is to be used to identify a customer. Its value must be one of the following: "Id", "No", "Email", "Phone". |
TaxZoneSetting | string, enum | An indicator of which value is to be used to identify tax zones. Its value must be one of the following: "Id", "Code". |
TaxCategorySetting | string, enum | An indicator of which value is to be used to identify tax categories. Its value must be one of the following: "Id", "Code". |
TaxJurisdictionSetting | string, enum | An indicator of which value is to be used to identify tax jurisdictions. Its value must be one of the following: "Id", "Code". |
PaymentMethodSetting | string, enum | An indicator of which value is to be used to identify payment methods. Its value must be one of the following: "Id", "Code". |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Settings***</font> |
<font color=#008AE8>**Data: Request: Receipts**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with one or more entries. **Required**</font> |
ReceiptId | string, guid | A unique identifier of the receipt. |
ReceiptNum | integer, null | An identifier of the receipt. |
IsHeld | boolean | An indicator as to whether or not the receipt is being held. |
LocationId | string, null | An identifier of the location where the receipt was created. |
AssociateId | string, null | An identifier of the associate who created the receipt. |
LargeMemo | string, null | Misc. notes about the receipt. |
IsDropShipment | boolean | An indicator of whether or not the receipt is a drop shipment. |
ShipMethodId | string, null | An identifier of the shipping method for the receipt. |
ReceiptDateTime | string, datetime | A timestamp of when the receipt was created. |
CustomDate1 - 4 | string, datetime, null | These four fields are customizable date values for the receipt. |
CustomFlag1 - 4 | boolean, null | These four fields are customizable flags for the receipt. |
CustomLookup1 - 8 | string, len:1-128, null | These eight fields are customizable lookup values for the receipt. |
CustomDecimal1 - 4 | number, null | These four fields are customizable floating-point values for the receipt. |
CustomNumber1 - 4 | integer, null | These four fields are customizable integer values for the receipt. |
CustomText1 - 4 | string, len:0-256, null | These four fields are customizable text values for the receipt. |
<font color=#008AE8>**Data: Request: Receipts: GlobalDiscountReason**</font> | | <font color=#008AE8>A group containing the following fields and groups.</font> |
GlobalDiscountReasonId | string, null | An identifier of the reason for the global discount. |
GlobalDiscountAmount | number, null | The amount of the global discount. |
GlobalDiscountCouponNumber | string, null | An identifier of the coupon used for the global discount. |
GlobalDiscountCouponType | string, enum, null | An indicator of the type of coupon used for the global discount. Its value must be one of the following: "Percent", "Amount", *null*. |
GlobalDiscountCouponValue | number, null | The amount of the coupon used for the global discount. <font color="Crimson">***????????***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Receipts: GlobalDiscountReason***</font> |
<font color=#008AE8>**Data: Request: Receipts: Customer**</font> | | <font color=#008AE8>A group containing the following fields and groups.</font> |
GuestCheckout | boolean | A indicator as to whether or not the customer is a guest. <font color="Crimson">***????????***</font> |
CustomerId | string | An identifier of the customer. |
<font color=#008AE8>**Data: Request: Receipts: Customer: BillInfo**</font> | | <font color=#008AE8>A group containing the following fields and groups.</font> |
LastName | string, null | The bill to customer’s last name. |
FirstName | string, null | The bill to customer’s first name. |
MiddleName | string, null | The bill to customer’s middle name. |
Address1 - 5 | string, null | These five fields are the lines (up to five) of the bill to customer’s street address. |
City | string, null | The bill to customer’s city. |
State | string, null | The bill to customer’s state. |
PostalCode | string, null | The bill to customer’s postal (zip) code. |
FiscalCode | string, null | The code under which the bill to customer is registered with the government. |
CountryCode | string, null | A code indicating the bill to customer’s country. |
Organization | string, null |The bill to customer’s organization. |
Phone1 - 4 | string, null | These four fields are the bill to customer’s phone numbers (up to four). |
Gender | string, enum, null| An indicator of the customer's gender. Its value must be one of the following: "None", "Male", "Female", *null* |
Email | string, null | The bill to customer’s email address. |
Birthdate | string, datetime, null | A timestamp of the customer's birth date. |
WholesaleCustomer | boolean, null | An indicator as to whether or not the bill to customer is a wholesale customer. |
TradingPartner | boolean, null | An indicator as to whether or not the bill to customer is a trading partner. |
AddressId | string, guid, null | A unique identifier of the bill to customer’s address. |
AddressType | string, null | A indicator of the bill to customer’s address type. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Receipts: Customer: BillInfo***</font> |
<font color=#008AE8>**Data: Request: Receipts: Customer: SellInfo**</font> | | <font color=#008AE8>A group containing the following fields and groups.</font> |
LastName | string, null | The sell to customer’s last name. |
FirstName | string, null | The sell to customer’s first name. |
MiddleName | string, null | The sell to customer’s middle name. |
Address1 - 5 | string, null | These five fields are the lines (up to five) of the sell to customer’s street address. |
City | string, null | The sell to customer’s city. |
State | string, null | The sell to customer’s state. |
PostalCode | string, null | The sell to customer’s postal (zip) code. |
FiscalCode | string, null | The code under which the sell to customer is registered with the government. |
CountryCode | string, null | A code indicating the sell to customer’s country. |
Organization | string, null |The sell to customer’s organization. |
Phone1 - 4 | string, null | These four fields are the sell to customer’s phone numbers (up to four). |
Gender | string, enum, null| An indicator of the customer's gender. Its value must be one of the following: "None", "Male", "Female", *null* |
Email | string, null | The sell to customer’s email address. |
Birthdate | string, datetime, null | A timestamp of the customer's birth date. |
WholesaleCustomer | boolean, null | An indicator as to whether or not the sell to customer is a wholesale customer. |
TradingPartner | boolean, null | An indicator as to whether or not the sell to customer is a trading partner. |
AddressId | string, guid, null | A unique identifier of the sell to customer’s address. |
AddressType | string, null | A indicator of the sell to customer’s address type. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Receipts: Customer: SellInfo***</font> |
<font color=#008AE8>**Data: Request: Receipts: Customer: ShipInfo**</font> | | <font color=#008AE8>A group containing the following fields and groups.</font> |
LastName | string, null | The ship to customer’s last name. |
FirstName | string, null | The ship to customer’s first name. |
MiddleName | string, null | The ship to customer’s middle name. |
Address1 - 5 | string, null | These five fields are the lines (up to five) of the ship to customer’s street address. |
City | string, null | The ship to customer’s city. |
State | string, null | The ship to customer’s state. |
PostalCode | string, null | The ship to customer’s postal (zip) code. |
FiscalCode | string, null | The code under which the ship to customer is registered with the government. |
CountryCode | string, null | A code indicating the ship to customer’s country. |
Organization | string, null |The ship to customer’s organization. |
Phone1 - 4 | string, null | These four fields are the ship to customer’s phone numbers (up to four). |
Gender | string, enum, null| An indicator of the customer's gender. Its value must be one of the following: "None", "Male", "Female", *null* |
Email | string, null | The ship to customer’s email address. |
Birthdate | string, datetime, null | A timestamp of the customer's birth date. |
WholesaleCustomer | boolean, null | An indicator as to whether or not the ship to customer is a wholesale customer. |
TradingPartner | boolean, null | An indicator as to whether or not the ship to customer is a trading partner. |
AddressId | string, guid, null | A unique identifier of the ship to customer’s address. |
AddressType | string, null | A indicator of the ship to customer’s address type. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Receipts: Customer: ShipInfo***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Receipts: Customer***</font> |
<font color=#008AE8>**Data: Request: Receipts: GlobalCharges**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
GlobalChargeId | string, guid | A unique identifier of the global charge. |
ChargeId | string, guid, null | A unique identifier of <font color="Crimson">***????????***</font> |
Qty | number, null | The quantity for the global charge. |
TotalAmount | double | The total amount of the global charge. **Required**|
TaxAmount | double | The amount of the global charge which is taxes. **Required** |
TotalIncludeTax | boolean | An indicator as to whether or not the total amount includes the taxes. **Required** |
TaxCategoryId | string, guid, null | A unique identifier of the global charge's tax category. |
LargeMemo | string, null | Misc. notes about the global charge. |
SpreadType | string, enum | An indicator of how the global charge is spread across the receipt.<font color="Crimson">***????????***</font> Its value must be one of the following: "Item", "Quantity", "Weight". |
<font color=#008AE8>**Data: Request: Receipts: GlobalCharges: Taxes**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
TaxId | string, guid, null | A unique identifier of the tax. |
TaxAmount | double | The tax amount. |
TaxPercent | double | The tax percentage. |
DestTaxZoneId | string | An identifier of the tax’s destination tax zone. |
SourceTaxZoneId | string | An identifier of the tax’s source tax zone. |
TaxCategoryId | string | An identifier of the tax' tax category. |
TaxJurisdictionId | string | An identifier of the tax' tax Jurisdiction. |
CustomFlag1 | boolean | A customizable flag for the tax. |
CustomNumber1 | integer | A customizable integer value for the tax. |
CustomDecimal1 | double | A customizable floating-point value for the tax. |
CustomLookup1 | string, len:1-128, null | A customizable lookup value for tax. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Receipts: GlobalCharges: Taxes***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Receipts: GlobalCharges***</font> |
<font color=#008AE8>**Data: Request: Receipts: Items**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with one or more entries.</font> |
ReceiptItemId | string | An identifier of the item within the receipt. <font color="Crimson">***????????***</font> |
ItemIdentifier |string, null | An identifier of the item. |
LargeMemo | string, null | Misc. notes about the item. |
IsDropShipment | boolean | An indicator of whether or not the item <font color="Crimson">*can be/is* ***????????***</font> part a drop shipment. |
TrackingNumber | string, null | A tracking number for the item. |
ShipMethodId | string, null | An identifier of the shipping method used for the item. |
Qty | double | The item's quantity. **Required**|
TotalAmount | double | The item's total amount. |
TaxAmount | number, null | The item's tax amount. |
TotalIncludeTax | boolean | An indicator as to whether or not the item's total amount includes the taxes. |
TaxCategoryId | string, null | An identifier of the item's tax category. |
<font color=#008AE8>**Data: Request: Receipts: Items: LineDiscountReason**</font> | | <font color=#008AE8>A group containing the following fields and groups.</font> |
LineDiscountReasonId | string, null | An identifier of the reason for the line discount. |
LineDiscountAmount | double | The amount of the line discount. |
LineDiscountCouponNumber | string, null | An identifier of the coupon used for the line discount. |
LineDiscountCouponValue | number, null | The amount of the coupon used for the line discount. <font color="Crimson">***????????***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Receipts: Items: LineDiscountReason***</font> |
<font color=#008AE8>**Data: Request: Receipts: Items: LineCharges**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
LineChargeId | string, guid | A unique identifier of the line charge. |
ChargeId | string, guid, null | A unique identifier of <font color="Crimson">***????????***</font> |
Qty | number, null | The quantity for the line charge. |
TotalAmount | double | The total amount of the line charge. **Required**|
TaxAmount | double | The amount of the line charge which is taxes. **Required** |
TotalIncludeTax | boolean | An indicator as to whether or not the total amount includes the taxes. **Required** |
TaxCategoryId | string, guid, null | A unique identifier of the line charge's tax category. |
LargeMemo | string, null | Misc. notes about the global charge. |
SpreadType | string, enum | An indicator of how the global charge is spread across the receipt.<font color="Crimson">***????????***</font> Its value must be one of the following: "Item", "Quantity", "Weight". |
<font color=#008AE8>**Data: Request: Receipts: Items: LineCharges: Taxes**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
TaxId | string, guid, null | A unique identifier of the tax. |
TaxAmount | double | The tax amount. |
TaxPercent | double | The tax percentage. |
DestTaxZoneId | string | An identifier of the tax’s destination tax zone. |
SourceTaxZoneId | string | An identifier of the tax’s source tax zone. |
TaxCategoryId | string | An identifier of the tax' tax category. |
TaxJurisdictionId | string | An identifier of the tax' tax Jurisdiction. |
CustomFlag1 | boolean | A customizable flag for the tax. |
CustomNumber1 | integer | A customizable integer value for the tax. |
CustomDecimal1 | double | A customizable floating-point value for the tax. |
CustomLookup1 | string, len:1-128, null | A customizable lookup value for tax. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Receipts: Items: LineCharges: Taxes***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Receipts: Items: LineCharges***</font> |
<font color=#008AE8>**Data: Request: Receipts: Items: Taxes**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
TaxId | string, guid, null | A unique identifier of the tax. |
TaxAmount | double | The tax amount. |
TaxPercent | double | The tax percentage. |
DestTaxZoneId | string | An identifier of the tax’s destination tax zone. |
SourceTaxZoneId | string | An identifier of the tax’s source tax zone. |
TaxCategoryId | string | An identifier of the tax' tax category. |
TaxJurisdictionId | string | An identifier of the tax' tax Jurisdiction. |
CustomFlag1 | boolean | A customizable flag for the tax. |
CustomNumber1 | integer | A customizable integer value for the tax. |
CustomDecimal1 | double | A customizable floating-point value for the tax. |
CustomLookup1 | string, len:1-128, null | A customizable lookup value for tax. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Receipts: Items: Taxes***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*continuation of* ***Data: Request: Receipts: Items***</font> |
CustomDate1 - 4 | string, datetime, null | These four fields are customizable date values for the item. |
CustomFlag1 - 2 | boolean null | These two fields are customizable flags for the item. |
CustomLookupValue1 - 4 | string, len:1-128, null | These four fields are customizable lookup values for the item. |
CustomDecimal1 - 2 | number, null | These two fields are customizable floating-point values for the item. |
CustomNumber1 - 2 | integer, null | These two fields are customizable integer values for the item. |
CustomText1 - 2 | string, len:0-256, null | These for fields are customizable text values for the item. |
ExternalId | string, len:0-128, null | An identifier of the item used when interacting with an external system. |
OriginalReceiptItemId | string, guid | A unique identifier of the item in the original receipt. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Receipts: Items***</font> |
<font color=#008AE8>**Data: Request: Receipts: GiftCards**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with one or more entries.</font> |
GiftCardNumber | string | **Required** | An identifier of the gift card used. **Required** |
Amount | double | The amount of the gift card used. **Required** |
CreateNew | boolean | <font color="Crimson">***????????***</font> **Required** |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Receipts: GiftCards***</font> |
<font color=#008AE8>**Data: Request: Receipts: Payments**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
PaymentMethodId | string | An identifier of the payment method used. **Required** | 
PaymentAmount | double | The amount of the payment. |
ListOrder | integer, null | The order in which the paymenst will appear in the user interface. |
Captured | boolean, null | An indicator as to whether or not the payment has been captured. |
<font color=#008AE8>**Data: Request: Receipts: Payments: CardInfo**</font> | | <font color=#008AE8>A group containing the following fields and groups.</font> |
AccountNumber | string | An identifier of the account of the card. **Required** |
CardExpMonth | integer | The month the card expires. **Required** |
CardExpYear | integer | The year the card expires. **Required** |
MerchantId | string | An identifier of the merchant who <font color="Crimson">***????????***</font> **Required** |
CardOrderId | string | <font color="Crimson">***????????***</font> **Required** |
ReferenceNum | string | <font color="Crimson">***????????***</font> **Required** |
TransactionId | string | An identifier of the transaction the card was used for. **Required** |
CardType | string, enum | An indicator of type of card used. Its value must be one of the following: "Undefined", "Visa", "Master", "Discover", "Amex", "JCB", "Diners", "Solo", "Maestro", "Cirrus", "Switch", "Laser", "Other", "VisaDebit", "Debit", "UnionPay". **Required** |
CardholderFirstName | string | The first name of the card holder. |
CardholderLastName | string | The last name of the card holder. |
CardholderAddress1 - 2 | string | The lines (up to two) of the card holder's street address. |
CardholderCity | string | The card holder’s city. |
CardholderState | string | The card holder’s state. |
CardholderCountryCode | string | A code indicating the card holder’s country. |
CardholderPostalCode | string | The card holder’s postal (zip) code. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Receipts: Payments: CardInfo***</font> |
<font color=#008AE8>**Data: Request: Receipts: Payments: GiftCardInfoType**</font> | | <font color=#008AE8>A group containing the following fields and groups.</font> |
AccountNumber | string | An identifier of the account of the card. **Required** |
TransactionId | string | An identifier of the transaction the card was used for. **Required** |
CardholderFirstName | string | The first name of the card holder. |
CardholderLastName | string | The last name of the card holder. |
CardholderAddress1 - 2 | string | The lines (up to two) of the card holder's street address. |
CardholderCity | string | The card holder’s city. |
CardholderState | string | The card holder’s state. |
CardholderCountryCode | string | A code indicating the card holder’s country. |
CardholderPostalCode | string | The card holder’s postal (zip) code. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Receipts: Payments: GiftCardInfoType***</font> |
<font color=#008AE8>**Data: Request: Receipts: Payments: TOkenInfo**</font> | | <font color=#008AE8>A group containing the following fields and groups.</font> |
TokenQty | double | The token's quantity. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Receipts: Payments: TokenInfo***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Receipts: Payments***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*continuation of* ***Data: Request: Receipts***</font> |
ExternalId | string, len:0:128, null | An identifier of the receipt used when interacting with an external system. |
OriginalReceiptId | string, guid | A unique identifier of the original receipt. |
OriginalReceiptDTN | string | The original receipt's device transaction number. |
OriginalReceiptNum | integer | An identifier of the original receipt. |
FillFromLocationId | string, null | An identifier of the receipt's fill from location. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request: Receipts***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data: Request***</font> |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*continuation of* ***Data***</font> |
ApiDocumentId | string, guid | A unique identifier of the API document being used. |
<font color=#008AE8>**---**</font>  | | <font color=#008AE8>*end of* ***Data***</font> |

## Request example(s) {#RequestExamples}

<font color=#008AE8>**Base Import Request**</font>

~~~

{
    "Source": "integrator",
    "Data": {
        "Request": {
            "ImportSettings":{
                "ItemSetting": "Upc",
                "LocationSetting": "Code",
                "PaymentMethodSetting": "Code"
            },
            "Receipts": [
                {
                    "LocationId": "TEST",
                    "Items":[
                        {
                            "ItemIdentifier": "859553005525",
                            "Qty": 1,
                            "TotalAmount": 169.85,
                            "TotalIncludeTax": true
                        }
                    ],
                    "Payments":[
                        {
                            "PaymentMethodId":"CASH",
                            "PaymentAmount": 169.85,
                        }
                    ]
                }
            ]
        }
    }
}

~~~

## **Response example(s)** {#ResponseExamples}

<font color=#008AE8>**Successful Import Response**</font>

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
   "ApiType": "simplified-receipt-import",
   "Source": "my_integration"
}

~~~
