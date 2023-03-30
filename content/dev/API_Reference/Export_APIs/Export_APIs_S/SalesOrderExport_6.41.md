---
title: "Sales Order Export API [6.41]"
date: 2022-11-01T07:24:00-05:00
draft: false
weight: 0112
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
- [*Status* Value Cross-Reference](#StatusXref)
- &nbsp;&nbsp;&nbsp;&nbsp;[Sales order level](#StatusXref_OrderLevel)
- &nbsp;&nbsp;&nbsp;&nbsp;[Sales order items level](#StatusXref_ItemLevel)
- [Successful response](#SuccessfulResponse)
- &nbsp;&nbsp;&nbsp;&nbsp;[Format](#SuccessfulResponseFormat)
- &nbsp;&nbsp;&nbsp;&nbsp;[Schema](#SuccessfulResponseSchema)
- [Request example(s)](#RequestExamples)
- [Response example(s)](#ResponseExamples)

---
<!-- end comment block (when active)-------------------- -->

## Overview {#Overview}

This topic describes the **Sales Order Export** API which is used to export sales order information from CHQ.

See [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for a description on how export requests are made and on the standard request and response formats used. The API-Specific sucessful response format for this API will be described below.

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/sales-order**  
Asynchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/sales-order/async**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

In the Swagger UI the **/chqapi/export/sales-order** endpoint is a member of the **Sales** endpoint group.

## Request settings {#RequestSettings}

Below are the settings which can be supplied in the **Settings** group of the export request to define which value (field) is to be used for a particular value class (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Key** column lists the names of the available settings. The **Supported Values** column lists the valid values which can be supplied for the setting. The **Default** column lists the default value for each setting if that setting is not supplied.

**Key** | **Supported Values** | **Default** | **Description** |
---- | ---- | ---- | ---- |
CustomerIdentifierSetting | CustomerNo, MemberCode, Email, ExternalId, TeamworkId | CustomerNo | An indicator of which value is to be used to identify customers. |
LocationIdentifierSetting | Code, ExternalId, ExternalIdCode, No, TeamworkId | ExternalIdCode | An indicator of which value is to be used to identify locations. |
ShippingMethodIdentifierSetting | Name, Code, TeamworkId | Code | An indicator of which value is to be used to identify shipping methods. |
ItemIdentifierSetting | PLU, ExternalId, CLU, UPC, TeamworkId | PLU | An indicator of which value is to be used to identify items. |
EmployeeIdentifierSetting | LoginName, FullName, TeamworkId | LoginName | An indicator of which value is to be used to identify employees. |
RejectReasonIdentifierSetting | Name, Code, TeamworkId | Code | An indicator of which value is to be used to identify rejection reasons. |
ItemDetailsLevelSetting | None, Basic, Custom | Basic | An indicator of the level of detail to export for items. <span class="ir">??????????</span>|
DepSetSetting | DCSSCode, Alias, Details | DCSSCode | An indicator of which value is to be used to identify department sets. |
DepSetSetting | DCSSCode, Alias, Details | DCSSCode | An indicator of which value is to be used to identify department sets. |
ItemDescriptionSetting | Description1, Description2, Description3, StoreDescription | StoreDescription | An indicator of which value is to be used as the item description. <span class="ir">??????????</span> NOTE: StoreDescription is equvalent to Description4.|
SalesReceiptIdentifierSetting | No, Code, AltDTN, DTN, ExternalId, TeamworkId | No | An indicator of which value is to be used to identify department sets. |
ECommerceChannelIdentifierSetting | Code, Name, TeamworkId | Code | An indicator of which value is to be used to identify ecommerce channels. |
PriceLevelSetting | Code, Name, TeamworkId | Code | An indicator of which value is to be used to identify price levels. |
DiscountReasonIdentifierSetting | Code, ExternalId, ExternalIdCode, TeamworkId | ExternalIdCode | An indicator of which value is to be used to identify discount reasons. |

## Request filters {#RequestFilters}

Below are the filters which can be defined in the **Filters** group of the export request (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Field** column lists the names of the fields on which filtering can be done. The **Operators** column lists the filter operator values which are valid for the field. The **Value** column describes the value expected for the field.

**Field** | **Operators** | **Value** |
---- | ---- | ---- |
RecModified | "Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. |
DeviceTransactionNumber | "Equal", "Contains" | Any valid value representing a device transaction number for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |
SalesOrderNo | "Equal", "Contains" | Any valid value representing a sales order number for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |
SalesOrderId | "Equal", "Contains" | Any valid GUID identifying a sales order  for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |
CustomerEmail | "Equal", "Contains" | Any valid value representing a customer email address for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |
CustomerId | "Equal", "Contains" | Any valid value representing a customer id for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |
ExternalId | "Equal", "Contains" | Any valid value representing an exernal id for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |

## Request sorts {#RequestSorts}

Below are the fields for which sorting can be requested in the **SortDescriptions** group of the export request (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info). All of these fields can be sorted either *ascending* or *descending*.

<span class="ir">???????? What is the default sort for this API? ????????</span>

- ArrivalDate  
- BlockEmailNotifications  
- CustomDate1 - 8  
- CustomDecimal1 - 8  
- CustomFlag1 - 8  
- CustomNumber1 - 8  
- CustomText1 - 16  
- DeviceTransactionNumber (index) 
- ExternalId  
- IsArchive  
- FraudStatus (for sorting use: 1=*Accepted*, 2=*Alter*, 3=*Fraud*, other=*Unknown*)  
- LockFillLocation  
- MembershipCode  
- MembershipEndDate  
- Notes  
- RecCreated  
- RecModified (index)  
- SalesOrderDateTime  
- SalesOrderId (index)  
- SalesOrderNo  
- ShipDate  
- ShipOnce  
- StreamingDate  
- TotalAmountWithoutTax  
- TotalAmountWithTax  
- TotalDiscountAmount 
- Type

---

## *Status* Value Cross-Reference {#StatusXref}

The below list shows a cross-reference between various *Status* values as they appear in the database (DB) versus the user interface (UI).

### <span color=#008AE8>Sales order level</span> {#StatusXref_OrderLevel}

**DB** | **UI** |
---- | ---- |
Hold | held |
InReview | in review |
Approved | accepted |
Suspended | suspended |
Shipping | delivery pending |
Completed | completed |
Cancelled | cancelled |
Mixed | *(currently unused)* |

### <span color=#008AE8>Sales order item level</span> {#StatusXref_ItemLevel}

**DB** | **UI** |
---- | ---- |
Hold | suspended |
Cancelled | cancelled |
Approved | accepted |
PickUpInStore | pick up in store |
Shipping | delivery pending |
Completed | completed |
Custom | *(currently unused)* |
InReview | in review |
POIssued | *(currently unused)* |
POReceived | *(currently unused)* |
TOIssued | *(currently unused)* |
TOFilled | *(currently unused)* |
Held | held |

---

## Successful response {#SuccessfulResponse}

### Format {#SuccessfulResponseFormat}

Below is the format of the successful response to the export request. See [*JSON Data Types*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/JsonDataTypes_6.41/) for a description of the values which could appear in the **Data Type** column.

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
ApiDocumentId | string, guid | A unique identifier of the API document being used. |
Status | string, enum | The status of the response. The value will always be "Successful". |
ApiRequestType | string | <span class="ir">????????</span> |
TotalRecords | int32 | The total number of records processed. |
RecordsCount | int32 | The number of records exported. |
ElapsedTime | string, datetime | The time it took to execute the API. |
StartDateTime | string, datetime | A timestamp of when the API began executing. |
EndDateTime | string, datetime | A timestamp of when the API completed. |
<span class="api-gn">Response</span> | | <span class="api-gd">A group containing the following fields and groups.</span> |
<span class="api-gn">Response: SalesOrders</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
SalesOrderNo | string | An identifier of the sales order. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
SalesOrderId | string, guid | A unique identifier of the sales order. |
DeviceTransactionNumber | int64 | The sales order's transaction number on the device used. |
Type | string, enum | An identifier of the sales order’s type. Its value must be one of the following: "Delivery", "Hold", "Layaway", "PreOrder", "Review", "SendSale", "Special", "Quote", "WebOrder". |
SalesOrderDateTime | string, datetime | A timestamp of <span class="ir">????????</span> |
PriceLevelIdentifier | string | An identifier of the price level which applies to the sales order. <span class="ir">????????</span> |
Status | int32 | An indicator of the sales order’s status. <span class="ir">????????</span> |
StatusName | string, enum | The name of the sales order's status. Its value must be one of the following: "Hold", "InReview", "Approved", "Suspended", "Shipping", "Completed", "Cancelled", "Mixed", "Held".
IsArchive | boolean | A indicator as to whether or not the sales order has been archived. |
SellFromLocation | string | An identifier of the sales order's sell from location. |
DefaultFillLocation | string | An identifier of the sales order's default fill location. |
SaleCreditLocation | string | A code indicating the store location for the sales credit. |
LockFillLocation | boolean | An indicator as to whether or not the sales order's fill location has been locked. |
ShipPartial | boolean | An indicator as to whether or not the sales order can be partially shipped. |
InternationalId | string | An identifier of the sales order used for international shipping. |
TotalAmountWithoutTax | double | The sales order’s total amount without taxes. |
TotalAmountWithTax | double | The sales order’s total amount with taxes. |
TotalTaxAmount | double | The sales order’s total tax amount. |
TotalDiscountAmount | double | The sales order’s total discount amount. |
MembershipCode | string | The membership code used for the sales order. |
MembershipEndDate | string | A timestamp<span class="ir">????????</span> of when the customer’s membership will expire. |
MembershipLevelCode | string | A code identifying the membership level use for the sales order. |
MembershipLevelOverrideCode | string | The code entered to override the membership level. <span class="ir">????????</span> |
MembershipLevelOverrideEmployee | string | An identifier of the employee who overrode the membership level. |
FraudStatus | string, enum | An indicator of the sales order’s fraud status. Its value must be one of the following: "Unknown", "Accepted", "Alert", "Fraud". |
ShipDate | string, datetime | A timestamp of when the sales order was shipped. |
ArrivalDate | string, datetime | A timestamp of when the sales order is expected to arrive. <span class="ir">????????</span> |
<span class="api-gn">Response: SalesOrders: SellInfo</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
Customer | string | An identifier of the sell to customer. |
LastName | string | The sell to customer’s last name. |
FirstName | string | The sell to customer’s first name. |
MiddleName | string | The sell to customer’s middle name. |
Address1 - 2 | string | These two fields are the lines (up to 2) of the sell to customer’s street address. |
City | string | The sell to customer’s city. |
State | string | The sell to customer’s state. |
PostalCode | string | The bill to customer’s postal (zip) code. |
Phone1 - 3 | string | These three fields are the sell to customer’s phone numbers (up to 3). |
Organization | string | The sell to customer’s organization. |
Gender | int32 | The sell to customer’s gender. |
BirthDate | string, datetime | The sell to customer’s birth date. |
WholesaleCustomer | boolean | An indicator as to whether or not the sell to customer is a wholesale customer. |
TradingPartner | boolean | An indicator as to whether or not the sell to customer is a trading partner. |
Phone4 | string | The sell to customer’s fourth phone number. |
CountryCode | string | A code indicating the sell to customer’s country. |
Email | string | The sell to customer’s email address. |
Address3 - 5 | string | These three fields are additional lines (up to 3) of the sell to customer’s street address. |
FiscalCode | string | The code under which the sell to customer is registered with the government. |
DepositBalance | double | The sell to customer's deposit balance amount. |
TotalDepositAmount | double | The sell to customer's total deposit amount. |
CreateDateTime | string, datetime | A timestamp of when the sell to customer's record was created.<span class="ir">????????</span> |
EditDateTime | string, datetime | A timestamp of when the sell to customer's record was last modified (edited). <span class="ir">????????</span> |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Response: SalesOrders: SellInfo</span> |
<span class="api-gn">Response: SalesOrders: BillInfo</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
Customer | string | An identifier of the bill to customer. |
FirstName | string | The bill to customer’s first name. |
MiddleName | string | The bill to customer’s middle name. |
Address1 - 2 | string | These two fields are the lines (up to 2) of the bill to customer’s street address. |
City | string | The bill to customer’s city. |
State | string | The bill to customer’s state. |
PostalCode | string | The bill to customer’s postal (zip) code. |
Organization | string | The bill to customer’s organization. |
Phone1 - 3 | string | These three fields are the bill to customer’s phone numbers (up to 3). |
Email | string | The bill to customer’s email address. |
WholesaleCustomer | boolean | An indicator as to whether or not the bill to customer is a wholesale customer. |
TradingPartner | boolean | An indicator as to whether or not the bill to customer is a trading partner. |
Phone4 | string | The bill to customer’s fourth phone number. |
CountryCode | string | A code indicating the bill to customer’s country. |
Gender | int32 | The bill to customer’s gender. |
BirthDate | string, datetime | The bill to customer’s birth date. |
LastName | string | The bill to customer’s last name. |
Address3 - 5 | string | These three fields are additional lines (up to 3) of the bill to customer’s street address. |
FiscalCode | string | The code under which the bill to customer is registered with the government. |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Response: SalesOrders: BillInfo</span> |
<span class="api-gn">Response: SalesOrders: ShipInfo</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
Customer | string | An identifier of the ship to customer. |
LastName | string | The ship to customer’s last name. |
FirstName | string | The ship to customer’s first name. |
MiddleName | string | The ship to customer’s middle name. |
Address1 - 2 | string | These two fields are the lines (up to 2) of the ship to customer’s street address. |
City | string | The ship to customer’s city. |
State | string | The ship to customer’s state. |
PostalCode | string | The ship to customer’s postal (zip) code. |
Organization | string | The ship to customer’s organization. |
Phone1 - 3 | string | These three fields are the ship to customer’s phone numbers (up to 3). |
WholesaleCustomer | boolean | An indicator as to whether or not the ship to customer is a wholesale customer. |
TradingPartner | boolean | An indicator as to whether or not the ship to customer is a trading partner. |
Phone4 | string | The ship to customer’s fourth phone number. |
CountryCode | string | A code indicating the ship to customer’s country. |
Gender | int32 | The ship to customer’s gender. |
BirthDate | string, datetime | The ship to customer’s birth date. |
Email | string | The ship to customer’s email address. |
Type | string | An indicator of the ship to customer’s address type (for example, Primary Address, etc.). |
Address3 - 4 | string | These two fields are additional lines (up to 2) of the ship to customer’s street address. |
IsManualEntry | boolean | An indicator as to whether or not the ship to customer information has been manually entered. |
IsStorePickup | boolean | An indicator as to whether or not the ship to customer will actually pickup the sales order in a store. |
AddressId | string, guid | A unique identifier of the ship to customer’s address. |
AVSPerformed | boolean | An indicator as to whether or not address verification has been performed for the ship to address. |
Address5 | string | The fifth line of the ship to customer’s street address. |
FiscalCode | string | The code under which the ship to customer is registered with the government. |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Response: SalesOrders: ShipInfo</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">*continuation of Response: SalesOrders</span> |
Notes | string | Misc. notes about the sales order. |
CustomDate1 - 8 | string, datetime | These eight fields are customizable date values for the sales order. |
CustomDecimal1 - 8 | double | These eight fields are customizable floating-point values for the sales order. |
CustomFlag1 - 8 | boolean | These eight fields are customizable flags for the sales order. |
CustomLookup1 - 8 | string | These eight fields are customizable lookup values for the sales order. |
CustomNumber1 - 8 | int32 | These eight fields are customizable integer values for the sales order. |
CustomText1 - 16 | string | These sixteen fields are customizable text values for the sales order. |
CustomLongText1 - 4 | string | These four fields are customizable long text values for the sales order. |
<span class="api-gn">Response: SalesOrders: Items</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
LineNo | int32 | The number of the line in the sales order where the item appears. |
ItemIdentifier | string | An identifier of the item. |
<span class="api-gn">Response: SalesOrders: Items: ItemDetails</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
PLU | int32 | The item’s product lookup number. |
StyleItemWeight | double | <span class="ir">????????</span> |
CLU | string | The item’s custom lookup number. |
UPC | string | The item’s universal product code. |
StyleWeight | double | <span class="ir">????????</span> |
StyleNo | string | An identifier of the style which contains the item. |
ExternalId | string | The identifier of the item used when interacting with an external system. |
ItemDescription | string | The item’s description. |
Attribute1 - 3 | string | These three fields are the item’s attributes. |
<span class="api-gn">Response: SalesOrders: Items: ItemDetails: DCSS</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
DCSSCode | string | The item’s department classification code. |
Alias | string | An alias for the item’s department classification code. |
DeptCode | string | A code identifying the item’s department. |
DeptName | string | The name identifying the item’s department. |
DeptAlias | string | An alias for the item’s department. |
ClassCode | string | A code identifying the item’s class. |
ClassName | string | The name for the item’s class. |
ClassAlias | string | An alias for the item’s class. |
SubClass1Code | string | A code identifying the item’s first subclass. |
SubClass1Name | string | The name for the item’s first subclass. |
SubClass1Alias | string | An alias for the item’s first subclass. |
SubClass2Code | string | A code identifying the item’s second subclass. |
SubClass2Name | string | The name for the item’s second subclass. |
SubClass2Alias | string | An alias for the item’s second subclass. |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Response: SalesOrders: Items: ItemDetails: DCSS</span> |
<span class="api-gn">Response: SalesOrders: Items: ItemDetails: Style</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
CustomDate1 - 12 | string, datetime | These twelve fields are customizable date values for the style. |
CustomDecimal1 - 12 | double | These twelve fields are customizable floating-point values for the style. |
CustomFlag1 - 18 | boolean | These eighteen fields are customizable flags for the style. |
CustomLookup1 - 12 | string |These twelve fields are customizable lookup values for the style. |
CustomNumber1 - 12 | int32 | These twelve fields are customizable integer values for the style. |
CustomText1 - 12 | string | These twelve fields are customizable text values for the style. |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Response: SalesOrders: Items: ItemDetails: Style</span> |
<span class="api-gn">Response: SalesOrders: Items: ItemDetails: Item</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
CustomDate1 - 6 | string, datetime | These six fields are customizable date values for the item. |
CustomDecimal1 - 6 | double | These six fields are customizable floating-point values for the item. |
CustomFlag1 - 6 | boolean | These six fields are customizable flags for the item. |
CustomLookup1 - 12 | string | These twelve fields are customizable lookup values for the item. |
CustomNumber2 - 6 | int32 | These five fields are customizable integer values for the item. |
CustomText1 - 6 | string | These six fields are customizable text values for the item. |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Response: SalesOrders: Items: ItemDetails: Item</span> |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Response: SalesOrders: Items: ItemDetails</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">*continuation of Response: SalesOrders: Items</span> |
Status | string, enum | An indicator of the status of the item. Its value must be one of the following: “Hold”, “Cancelled”, “Approved”, “PickUpInStore”, “Shipping”, “Completed”, “Custom”, “InReview”, “POIssued”, “POReceived”, “TOIssued”, “TOFilled”. |
DeliveryMethod | string, enum | An indicator of the item’s delivery method. Its value must be one of the following: “Ship”, “StorePickUp”. |
FillLocation | string | An identifier of the item’s fill location. |
ShippingMethod | string | The item’s shipping method. |
PromiseDate | string, datetime | The timestamp of when delivery of the item was promised. |
GifteeEmail | string | The email address of the giftee if the item is a gift. |
GifteeName | string | The name of the giftee if the item is a gift. |
GiftMessage | string | The message to be sent in the giftee email if the item is a gift. |
GiftCardName | string | The name of the gift card given if the item is a gift. <span class="ir">????????</span> |
GiftCardNo | string | The numnber of the gift card given if the item is a gift. <span class="ir">????????</span> |
GifteeEmailSendOn | string, datetime | The date on which an email should be sent to the giftee if the item is a gift. |
VirtualGiftCardAmount | double | The amount of the card if the item is a virtual gift card. <span class="ir">????????</span> |
GiftItem | boolean | An indicator as to whether or not the item is a gift item. |
OrderQty | double | The item’s order quantity. |
QtyDue | double | The quantity of the item which is due. |
QtyCancelled | double | The quantity of the item which has been cancelled. |
UnitPrice | double | The item’s unit price. |
PriceLevelIdentifier | string | An identifier of the item's price level. |
ExtPrice | double | The item’s extended price. |
ExtDiscountAmount | double | The item’s extended discount amount. |
ExtAmountWithoutTax | double | The item’s extended amount without taxes. |
ExtAmountWithTax | double | The item’s extended amount with taxes. |
ExtTaxAmount | double | The item’s extended tax amount. |
ItemFeeAmountWithoutTax | double | The item’s fee amount without taxes. |
ItemFeeAmountWithTax | double | The item’s fee amount with taxes. |
ItemFeeTaxAmount | double | The item’s fee's tax amount. |
RmaCode | string | The item’s returned merchandise authorization code. |
FinalSale | boolean | An indicator as to whether or not this is the item’s final sale (that is, whether it can be returned or not). |
MemberDiscountPercent | double | The item's member discount percentage. |
MemberDiscountSource | int32 | <span class="ir">????????</span> |
MemberDiscountAmount | double | The item's member discount amount. |
MembershipItem | boolean | An indicator as to whether or not the item can have membership discounts applied to it. <span class="ir">????????</span> |
MemberDiscountAllowed| boolean | An indicator as to whether or not membership discounts can currently be applied to the item. <span class="ir">????????</span> |
MembershipDays | int32 | The number of days the customer has been a member. <span class="ir">????????</span> |
<span class="api-gn">Response: SalesOrders: Items: ItemFees</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
Code | string | A code identifying the fee. |
Description | string | A description of the fee. |
Type | string, enum | An indicator of the fee's type. Its value must be one of the following: "Shipping", "Insurance", "RestockingFee", "Empty". |
AmountWithoutTax | double | The fee’s amount without taxes. |
AmountWithTax | double | The fee’s amount with taxes. |
TaxAmount | double | The fee’s tax amount. |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Response: SalesOrders: Items: ItemFees</span> |
<span class="api-gn">Response: SalesOrders: Items: ShipInfo</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
Customer | string | An identifier of the item’s ship to customer.<span class="ir">????????</span> |
LastName | string | The ship to customer’s last name. |
FirstName | string | The ship to customer’s first name. |
MiddleName | string | The ship to customer’s middle name. |
Address1 - 2 | string | These two fields are the lines (up to 2) of the ship to customer’s street address. |
City | string | The ship to customer’s city. |
State | string | The ship to customer’s state. |
PostalCode | string | The ship to customer’s postal (zip) code. |
Organization | string | The ship to customer’s organization. |
Phone1 - 3 | string | These three fields are the ship to customer’s phone numbers (up to 3). |
WholesaleCustomer | boolean | An indicator as to whether or not the ship to customer is a wholesale customer. |
TradingPartner | boolean | An indicator as to whether or not the ship to customer is a trading partner. |
Phone4 | string | The ship to customer’s fourth phone number. |
CountryCode | string | The code for the ship to customer’s country. |
Gender | int32 | The ship to customer’s gender. |
BirthDate | string, datetime | A timestamp of the ship to customer’s birth date. |
Email | string | The ship to customer’s email address. |
Type | string | <span class="ir">????????</span> |
Address3 - 4 | string | These two fields are additional lines (up to 2) of the ship to customer’s street address. |
IsManualEntry | boolean | An indicator as to whether or not the ship to customer information has been manually entered. |
IsStorePickup | boolean | An indicator as to whether or not the item will actually be picked up by the ship to customer in a store rather than being shipped. |
AddressId | string, guid | A unique identifier of the ship to customer’s address. |
AVSPerformed | boolean | An indicator as to whether or not address verification has been performed for the ship to address. |
Address5 | string | The fifth line of the ship to customer's street address. |
FiscalCode | string | The code under which the ship to customer is registered with the government. |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Response: SalesOrders: Items: ShipInfo</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">*continuation of Response: SalesOrders: Items</span> |
CustomDate1 - 8 | string, datetime | These eight fields are customizable date values for the item. |
CustomDecimal1 - 8 | double | These eight fields are customizable floating-point values for the item. |
CustomFlag1 - 8 | boolean | These eight fields are customizable flags for the item. |
CustomLookup1 - 8 | string | These eight fields are customizable lookup values for the item. |
CustomNumber1 - 8 | int32 | These eight fields are customizable integer values for the item. |
CustomText1 - 16 | string | These sixteen fields are customizable text values for the item. |
ExternalId | string | The identifier of the item used when interacting with an external system. |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Response: SalesOrders: Items</span> |
<span class="api-gn">Response: SalesOrders: GlobalFees</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
Code | string | A code identifying the global fee. |
Type | string | <span class="ir">????????</span> |
Description | string | The global fee’s description. |
AmountWithoutTax | double | The global fee’s amount without taxes. |
AmountWithTax | double | The global fee’s amount with taxes. |
TaxAmount | double | The global fee’s tax amount. |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Response: SalesOrders: GlobalFees</span> |
<span class="api-gn">Response: SalesOrders: CSRNotes</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
CreatedEmployeeIdentifier | string | An identifier of the employee who created the note. |
CreatedDateTime | string, datetime | A timestamp of when the note was created. |
LastEditedEmployeeIdentifier | string | An identifier of the employee who last modified the note. |
LastModifiedDateTime | string, datetime | A timestamp of when the note was last modified. |
Notes | string | The note's text. |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Response: SalesOrders: CSRNotes</span> |
<span class="api-gn">Response: SalesOrders: Payments</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
ReceiptIdentifier | string | An identifier of the payment receipt. |
PaymentLineNo | int32 | The line on the sales order/receipt<span class="ir">????????</span> to which the payment applies. |
AccountType | string, enum | An indicator of the type of account used for the payment. Its value must be one of the following: "Cash", "Check", "CreditCard", "DepositUsed", "StoreCredit", "GiftCard", "GiftCertificate", "StoreCharge", "Coupon", "FreeFormGiftCertificate", "Undefined", "Fictions", "DebitCard", "Token", "CreditCardCredit", "HouseCharge", "Universal", "UniversalCredit", "InsufficientFunds", "Terms", "OfflinePayment", "CashMachine", "Unknown". |
PaymentMethodCode | string | A code identifying the method used for the payment. |
PaymentMethodDescription | string | A description of the method used for the payment. |
PaymentCardType | string, enum | An indicator of the type of card used for the payment. Its value must be one of the following: "CreditCard", "Visa", "MasterCard", "DiscoverCard", "AmericanExpress", "JCB", "Diners", "Solo", "Maestro", "Cirrus", "Switch", "Laser", "OtherCards", "VisaDebit", "Debit", "ChinaUnionPay". |
GiftCardType | string, enum | An indicator of the type of gift card used for the payment. Its value must be one of the following: “Purchased”, “NonPurchased”. |
AccountNumber | string | The number of the account used for the payment. |
PaymentAmount | double | The amount of the payment. |
ChangeAmount | double | The amount of change returned to the customer for the payment. |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Response: SalesOrders: Payments</span> |
<span class="api-gn">Response: SalesOrders: ShipMemos</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
ShipMemoNo | string | An identifier of the shipping memo. |
CreatedDate | string, datetime | A timestamp of when the ship memo was created. |
CreatedByEmployee | string | An identifier of the employee who created the ship memo. |
FillLocation | string | An identifier of the location where the ship memo is to be fulfilled from. |
Status | string, enum | The status of the ship memo. Its value must be one of the following: “PrepareShipment”, “InProcess3PL”, “Shipped”, “Rejected”, “Processing”, “Error”, “PickUpReady”, “PickedUp”, “PreparePickUp”. |
DefaultShippingMethod | string | The default shipping method to be used. |
<span class="api-gn">Response: SalesOrders: ShipMemos: Items</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
LineNo | int32 | The number of the line where the item appears on the ship memo. |
ItemIdentifier | string | An identifier of the item. |
Status | string, enum | An indicator of the item’s status. Its value must be one of the following: “PrepareShipment”, “InProcess”, “Shipped”, “Rejected”, “Processing”, “Error”, “PickUpReady”, “PickedUp”, “PreparePickUp”. |
RejectReason | string | The reason the item was rejected. |
RejectedDate | string, datetime | A timestamp of when the item was rejected. |
RejectedByEmployee | string | An identifier of the employee who rejected the item. |
RejectedQty | double | The item quantity which was rejected. |
<span class="api-gn">Response: SalesOrders: ShipMemos: Items: Cartons</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
TrackingId | string | The identifier used for tracking the carton. |
Qty | double | The number of items in the carton. |
CarrierMethodName | string | The name of the carrier method to be used for the carton. |
TrackingUrl | string | The tracking URL (universal resource locator) of the carton. |
Status | string, enum | An indicator of the status of the carton. Its value must be one of the following: “New”, “Shipping”, “Canceled”, “Error”. |
ShippingMethod | string | The shipping method being used for the carton. |
ShippedDate | string | The date when the carton was shipped. |
ShippedByEmployee | string | An identifier of the employee who shipped the carton. |
CartonNo | string | An identifier of the carton. |
SalesReceiptId | string | An identifier of the sales receipt for the carton. |
ActualShippingCost | double | The actual shipping cost of the carton. |
ReturnLabel | string | A return tracking number.<span class="ir">????????</span> |
DeliveryMethodType | string | The type of delivery method to be used for the carton. |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Response: SalesOrders: ShipMemos: Items: Cartons</span> |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Response: SalesOrders: ShipMemos: Items</span> |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Response: SalesOrders: ShipMemos</span> |
<span class="api-gn">Response: SalesOrders: Instructions</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
<span class="api-gn">Response: SalesOrders: Instructions: HoldInstruction</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
HeldOnDateTime | string, datetime | A timestamp of when the sales order was held. |
HeldByEmployeeId | string, guid | A unique identifier of the employee who held the sales order. |
HeldByEmployeeIdentifier | string | An identifier of the employee who held the sales order. |
HoldExpiresDateTime | string, datetime | A timestamp of when the hold of the sales order will expire. |
RemovedDateTime | string, datetime | A timestamp of when the hold of the sales order was removed. |
RemovedByEmployeeId | string, guid | A unique identifier of the employee who removed the hold of the sales order. |
RemovedByEmployeeIdentifier | string | An identifier of the employee who removed the hold of the sales order. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesOrders: Instructions: HoldInstruction</span> |
<span class="api-gn">Response: SalesOrders: Instructions: LayawayInstruction</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
HeldOnDateTime | string, datetime | A timestamp of when the sales order was held for layaway. |
HeldByEmployeeId | string, guid | A unique identifier of the employee who held the sales order for layaway. |
HeldByEmployeeIdentifier | string | An identifier of the employee who held the sales order for layaway. |
ExpirationDateTime | string, datetime | A timestamp of when the layaway hold of the sales order will expire. |
RemovedDateTime | string, datetime | A timestamp of when the layaway hold of the sales order was removed. |
RemovedByEmployeeId | string, guid | A unique identifier of the employee who removed the layaway hold of the sales order. |
RemovedByEmployeeIdentifier | string | An identifier of the employee who removed the layaway hold of the sales order. |
NexPaymentDueDateTime | string, datetime | A timestamp of when the next layaway payment is due. |
NextPaymentAmount | double | The amount of the next layaway payment. | 
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesOrders: Instructions: LayawayInstruction</span> |
<span class="api-gn">Response: SalesOrders: Instructions: PreOrderInstruction</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
ShippingMethodCode |string | A code indentifying the shipping method to be used. |
ShipPartial | boolean | A indicator as to whether or not the sales order allows for partial shipments. |
VendorDropShip | boolean | A indicator as to whether or not the sales order is a vendor drop shipment. |
PlannedReleaseDate | string, datetime | A timestamp of when the release of the sales order for shipment is planned to occur. <span class="ir">????????</span> |
ExpirationDateTime | string, datetime | A timestamp of when the the sales pre-order expires. <span class="ir">????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesOrders: Instructions: PreOrderInstruction</span> |
<span class="api-gn">Response: SalesOrders: Instructions: ReviewInstruction</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RequestedForDateTime | string, datetime | A timestamp of when the sales order review is to be done by. <span class="ir">????????</span> |
SentOnDateTime | string, datetime | A timestamp of when<span class="ir">????????</span> |
SentByEmployeeId | string, guid | A unique identifier of the employee who<span class="ir">????????</span> |
SentByEmployeeIdentifier | string, guid | An identifier of the employee who<span class="ir">????????</span> |
ReceivedByEmployeeName | string | The name of the employee who<span class="ir">????????</span> |
DueDateTime | string, datetime | A timestamp of when<span class="ir">????????</span> |
ReturnedDateTime | string, datetime | A timestamp of when<span class="ir">????????</span> |
ReturnedByEmployeeName | string | The name of the employee who<span class="ir">????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesOrders: Instructions: ReviewInstruction</span> |
<span class="api-gn">Response: SalesOrders: Instructions: SendSaleInstruction</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
ShippingMethodCode | string | A code indentifying the shipping method to be used. |
ShipPartial | boolean | A indicator as to whether or not the sales order allows for partial shipments. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesOrders: Instructions: SendSaleInstruction</span> |
<span class="api-gn">Response: SalesOrders: Instructions: SpecialInstruction</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
EstimatedDate | string, datetime | A timestamp of when<span class="ir">????????</span> |
ShippingMethodCode | string | A code indicating the shipping method to be used for the sales order. <span class="ir">????????</span> |
ShipPartial | boolean | A indicator as to whether or not partial shipments are allowed. <span class="ir">????????</span> |
VendorDropShip | boolean | A indicator as to whether or not this is a vendor drop shipment. <span class="ir">????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesOrders: Instructions: SpecialInstruction</span> |
<span class="api-gn">Response: SalesOrders: Instructions: QuoteInstruction</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
ExpirationDateTime | string, datetime | A timestamp of when the instruction expires. <span class="ir">????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesOrders: Instructions: QuoteInstruction</span> |
<span class="api-gn">Response: SalesOrders: Instructions: WebInstruction</span> |  | <span class="api-gn">A group containing the following fields and groups.</span> |
EcommerceChannelId | string, guid | A unique identifier of the ecommerce channel to be used for the sales order. <span class="ir">????????</span> |
EcommerceChannelIdentifier | string | An identifier of the ecommerce channel to be used for the sales order. <span class="ir">????????</span> |
OrderNo | string | <span class="ir">????????</span> |
ShipPartial | boolean | A indicator as to whether or not the sales order allows for partial shipments. <span class="ir">????????</span> |
Modified | boolean | <span class="ir">????????</span> |
ShippingMethodCode | string | A code indentifying the shipping method to be used. <span class="ir">????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesOrders: Instructions: WebInstruction</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesOrders: Instructions</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: SalesOrders</span> |
ExternalId | string | The identifier of the sales order used when interacting with an external system. |
ShipOnce | boolean | Indicates whether or not the contents of the sales order can be shipped in multiple shipments. <span class="ir">????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesOrders</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response</span> |

### Schema {#SuccessfulResponseSchema}
 
Below is the JSON source for the schema of a successful response to the export request as described above.

~~~
{
   "SalesOrderExportToJson_get.ApiDocumentType":{
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
            "$ref":"#/definitions/SalesOrderExportToJson_get.ResponseType"
         }
      }
   },
   "SalesOrderExportToJson_get.ResponseType":{
      "type":"object",
      "properties":{
         "SalesOrders":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/SalesOrderExportToJson_get.SalesOrdersType"
            }
         }
      }
   },
   "SalesOrderExportToJson_get.SalesOrdersType":{
      "type":"object",
      "properties":{
         "SalesOrderNo":{
            "type":"string"
         },
         "RecModified":{
            "format":"date-time",
            "type":"string"
         },
         "SalesOrderId":{
            "format":"uuid",
            "type":"string",
            "example":"00000000-0000-0000-0000-000000000000"
         },
         "DeviceTransactionNumber":{
            "format":"int64",
            "type":"integer"
         },
         "Type":{
            "enum":[
               "Delivery",
               "Hold",
               "Layaway",
               "PreOrder",
               "Review",
               "SendSale",
               "Special",
               "Quote",
               "WebOrder"
            ],
            "type":"string"
         },
         "SalesOrderDateTime":{
            "format":"date-time",
            "type":"string"
         },
         "PriceLevelIdentifier":{
            "type":"string"
         },
         "Status":{
            "format":"int32",
            "type":"integer"
         },
         "StatusName":{
            "enum":[
               "Hold",
               "InReview",
               "Approved",
               "Suspended",
               "Shipping",
               "Completed",
               "Cancelled",
               "Mixed",
               "Held"
            ],
            "type":"string"
         },
         "IsArchive":{
            "type":"boolean"
         },
         "SellFromLocation":{
            "type":"string"
         },
         "DefaultFillLocation":{
            "type":"string"
         },
         "SaleCreditLocation":{
            "type":"string"
         },
         "LockFillLocation":{
            "type":"boolean"
         },
         "ShipPartial":{
            "type":"boolean"
         },
         "InternationalId":{
            "type":"string"
         },
         "TotalAmountWithoutTax":{
            "format":"double",
            "type":"number"
         },
         "TotalAmountWithTax":{
            "format":"double",
            "type":"number"
         },
         "TotalTaxAmount":{
            "format":"double",
            "type":"number"
         },
         "TotalDiscountAmount":{
            "format":"double",
            "type":"number"
         },
         "MembershipCode":{
            "type":"string"
         },
         "MembershipEndDate":{
            "type":"string"
         },
         "MembershipLevelCode":{
            "type":"string"
         },
         "MembershipLevelOverrideCode":{
            "type":"string"
         },
         "MembershipLevelOverrideEmployee":{
            "type":"string"
         },
         "FraudStatus":{
            "enum":[
               "Unknown",
               "Accepted",
               "Alert",
               "Fraud"
            ],
            "type":"string"
         },
         "ShipDate":{
            "format":"date-time",
            "type":"string"
         },
         "ArrivalDate":{
            "format":"date-time",
            "type":"string"
         },
         "SellInfo":{
            "$ref":"#/definitions/SalesOrderExportToJson_get.SellInfoType"
         },
         "BillInfo":{
            "$ref":"#/definitions/SalesOrderExportToJson_get.BillInfoType"
         },
         "ShipInfo":{
            "$ref":"#/definitions/SalesOrderExportToJson_get.ShipInfoType"
         },
         "Notes":{
            "type":"string"
         },
         "CustomDate1":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate2":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate3":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate4":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate5":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate6":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate7":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate8":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDecimal1":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal2":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal3":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal4":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal5":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal6":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal7":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal8":{
            "format":"double",
            "type":"number"
         },
         "CustomFlag1":{
            "type":"boolean"
         },
         "CustomFlag2":{
            "type":"boolean"
         },
         "CustomFlag3":{
            "type":"boolean"
         },
         "CustomFlag4":{
            "type":"boolean"
         },
         "CustomFlag5":{
            "type":"boolean"
         },
         "CustomFlag6":{
            "type":"boolean"
         },
         "CustomFlag7":{
            "type":"boolean"
         },
         "CustomFlag8":{
            "type":"boolean"
         },
         "CustomLookup1":{
            "type":"string"
         },
         "CustomLookup2":{
            "type":"string"
         },
         "CustomLookup3":{
            "type":"string"
         },
         "CustomLookup4":{
            "type":"string"
         },
         "CustomLookup5":{
            "type":"string"
         },
         "CustomLookup6":{
            "type":"string"
         },
         "CustomLookup7":{
            "type":"string"
         },
         "CustomLookup8":{
            "type":"string"
         },
         "CustomNumber1":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber2":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber3":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber4":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber5":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber6":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber7":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber8":{
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
         "CustomText7":{
            "type":"string"
         },
         "CustomText8":{
            "type":"string"
         },
         "CustomText9":{
            "type":"string"
         },
         "CustomText10":{
            "type":"string"
         },
         "CustomText11":{
            "type":"string"
         },
         "CustomText12":{
            "type":"string"
         },
         "CustomText13":{
            "type":"string"
         },
         "CustomText14":{
            "type":"string"
         },
         "CustomText15":{
            "type":"string"
         },
         "CustomText16":{
            "type":"string"
         },
         "CustomLongText1":{
            "type":"string"
         },
         "CustomLongText2":{
            "type":"string"
         },
         "CustomLongText3":{
            "type":"string"
         },
         "CustomLongText4":{
            "type":"string"
         },
         "Items":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/SalesOrderExportToJson_get.ItemsType"
            }
         },
         "GlobalFees":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/SalesOrderExportToJson_get.GlobalFeesType"
            }
         },         
         "CSRNotes":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/SalesOrderExportToJson_get.CSRNotesType"
            }
         },
         "Payments":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/SalesOrderExportToJson_get.PaymentsType"
            }
         },
         "ShipMemos":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/SalesOrderExportToJson_get.ShipMemosType"
            }
         },
         "Instructions":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/SalesOrderExportToJson_get.InstructionsType"
            }
         },
         "ExternalId":{
            "type":"string"
         },
         "ShipOnce":{
            "type":"boolean"
         }
      }
   },
   "SalesOrderExportToJson_get.SellInfoType":{
      "type":"object",
      "properties":{
         "Customer":{
            "type":"string"
         },
         "LastName":{
            "type":"string"
         },
         "FirstName":{
            "type":"string"
         },
         "MiddleName":{
            "type":"string"
         },
         "Address1":{
            "type":"string"
         },
         "Address2":{
            "type":"string"
         },
         "City":{
            "type":"string"
         },
         "State":{
            "type":"string"
         },
         "PostalCode":{
            "type":"string"
         },
         "Phone1":{
            "type":"string"
         },
         "Phone2":{
            "type":"string"
         },
         "Phone3":{
            "type":"string"
         },
         "Organization":{
            "type":"string"
         },
         "Gender":{
            "format":"int32",
            "type":"integer"
         },
         "Birthdate":{
            "format":"date-time",
            "type":"string"
         },
         "WholesaleCustomer":{
            "type":"boolean"
         },
         "TradingPartner":{
            "type":"boolean"
         },
         "Phone4":{
            "type":"string"
         },
         "CountryCode":{
            "type":"string"
         },
         "Email":{
            "type":"string"
         },
         "Address3":{
            "type":"string"
         },
         "Address4":{
            "type":"string"
         },
         "Address5":{
            "type":"string"
         },
         "FiscalCode":{
            "type":"string"
         },
         "DepositBalance":{
            "format":"double",
            "type":"number"
         },
         "TotalDepositAmount":{
            "format":"double",
            "type":"number"
         },
         "CreateDateTime":{
            "format":"date-time",
            "type":"string"
         },
         "EditDateTime":{
            "format":"date-time",
            "type":"string"
         }
      }
   },
   "SalesOrderExportToJson_get.BillInfoType":{
      "type":"object",
      "properties":{
         "Customer":{
            "type":"string"
         },
         "FirstName":{
            "type":"string"
         },
         "MiddleName":{
            "type":"string"
         },
         "Address1":{
            "type":"string"
         },
         "Address2":{
            "type":"string"
         },
         "City":{
            "type":"string"
         },
         "State":{
            "type":"string"
         },
         "PostalCode":{
            "type":"string"
         },
         "Organization":{
            "type":"string"
         },
         "Phone1":{
            "type":"string"
         },
         "Phone2":{
            "type":"string"
         },
         "Phone3":{
            "type":"string"
         },
         "Email":{
            "type":"string"
         },
         "WholesaleCustomer":{
            "type":"boolean"
         },
         "TradingPartner":{
            "type":"boolean"
         },
         "Phone4":{
            "type":"string"
         },
         "CountryCode":{
            "type":"string"
         },
         "Gender":{
            "format":"int32",
            "type":"integer"
         },
         "Birthdate":{
            "format":"date-time",
            "type":"string"
         },
         "LastName":{
            "type":"string"
         },
         "Address3":{
            "type":"string"
         },
         "Address4":{
            "type":"string"
         },
         "Address5":{
            "type":"string"
         },
         "FiscalCode":{
            "type":"string"
         }
      }
   },
   "SalesOrderExportToJson_get.ShipInfoType":{
      "type":"object",
      "properties":{
         "Customer":{
            "type":"string"
         },
         "LastName":{
            "type":"string"
         },
         "FirstName":{
            "type":"string"
         },
         "MiddleName":{
            "type":"string"
         },
         "Address1":{
            "type":"string"
         },
         "Address2":{
            "type":"string"
         },
         "City":{
            "type":"string"
         },
         "State":{
            "type":"string"
         },
         "PostalCode":{
            "type":"string"
         },
         "Organization":{
            "type":"string"
         },
         "Phone1":{
            "type":"string"
         },
         "Phone2":{
            "type":"string"
         },
         "Phone3":{
            "type":"string"
         },
         "WholesaleCustomer":{
            "type":"boolean"
         },
         "TradingPartner":{
            "type":"boolean"
         },
         "Phone4":{
            "type":"string"
         },
         "CountryCode":{
            "type":"string"
         },
         "Gender":{
            "format":"int32",
            "type":"integer"
         },
         "Birthdate":{
            "format":"date-time",
            "type":"string"
         },
         "Email":{
            "type":"string"
         },
         "Type":{
            "type":"string"
         },
         "Address3":{
            "type":"string"
         },
         "Address4":{
            "type":"string"
         },
         "IsManualEntry":{
            "type":"boolean"
         },
         "IsStorePickup":{
            "type":"boolean"
         },
         "AddressId":{
            "format":"uuid",
            "type":"string",
            "example":"00000000-0000-0000-0000-000000000000"
         },
         "AVSPerformed":{
            "type":"boolean"
         },
         "Address5":{
            "type":"string"
         },
         "FiscalCode":{
            "type":"string"
         }
      }
   },
   "SalesOrderExportToJson_get.ItemsType":{
      "type":"object",
      "properties":{
         "LineNo":{
            "format":"int32",
            "type":"integer"
         },
         "ItemIdentifier":{
            "type":"string"
         },
         "ItemDetails":{
            "$ref":"#/definitions/SalesOrderExportToJson_get.ItemDetailsType"
         },
         "Status":{
            "enum":[
               "Hold",
               "Cancelled",
               "Approved",
               "PickUpInStore",
               "Shipping",
               "Completed",
               "Custom",
               "InReview",
               "POIssued",
               "POReceived",
               "TOIssued",
               "TOFilled"
            ],
            "type":"string"
         },
         "DeliveryMethod":{
            "enum":[
               "Ship",
               "StorePickUp"
            ],
            "type":"string"
         },
         "FillLocation":{
            "type":"string"
         },
         "ShippingMethod":{
            "type":"string"
         },
         "PromiseDate":{
            "format":"date-time",
            "type":"string"
         },
         "GifteeEmail":{
            "type":"string"
         },
         "GifteeName":{
            "type":"string"
         },
         "GiftMessage":{
            "type":"string"
         },
         "GiftCardName":{
            "type":"string"
         },
         "GiftCardNo":{
            "type":"string"
         },
         "GifteeEmailSendOn":{
            "format":"date-time",
            "type":"string"
         },
         "VirtualGiftCardAmount":{
            "format":"double",
            "type":"number"
         },
         "GiftItem":{
            "type":"boolean"
         },
         "OrderQty":{
            "format":"double",
            "type":"number"
         },
         "QtyDue":{
            "format":"double",
            "type":"number"
         },
         "QtyCancelled":{
            "format":"double",
            "type":"number"
         },
         "UnitPrice":{
            "format":"double",
            "type":"number"
         },
         "PriceLevelIdentifier":{
            "type":"string"
         },
         "ExtPrice":{
            "format":"double",
            "type":"number"
         },
         "ExtDiscountAmount":{
            "format":"double",
            "type":"number"
         },
         "ExtAmountWithoutTax":{
            "format":"double",
            "type":"number"
         },
         "ExtAmountWithTax":{
            "format":"double",
            "type":"number"
         },
         "ExtTaxAmount":{
            "format":"double",
            "type":"number"
         },
         "ItemFeeAmountWithoutTax":{
            "format":"double",
            "type":"number"
         },
         "ItemFeeAmountWithTax":{
            "format":"double",
            "type":"number"
         },
         "ItemFeeTaxAmount":{
            "format":"double",
            "type":"number"
         },
         "RmaCode":{
            "type":"string"
         },
         "FinalSale":{
            "type":"boolean"
         },
         "MemberDiscountPercent":{
            "format":"double",
            "type":"number"
         },
         "MemberDiscountSource":{
            "format":"int32",
            "type":"integer"
         },
         "MemberDiscountAmount":{
            "format":"double",
            "type":"number"
         },
         "MembershipItem":{
            "type":"boolean"
         },
         "MemberDiscountAllowed":{
            "type":"boolean"
         },
         "MembershipDays":{
            "format":"int32",
            "type":"integer"
         },
         "ItemFees":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/SalesOrderExportToJson_get.ItemFeesType"
            }
         },
         "ShipInfo":{
            "$ref":"#/definitions/SalesOrderExportToJson_get.ShipInfoType1"
         },
         "CustomDate1":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate2":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate3":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate4":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate5":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate6":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate7":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate8":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDecimal1":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal2":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal3":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal4":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal5":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal6":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal7":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal8":{
            "format":"double",
            "type":"number"
         },
         "CustomFlag1":{
            "type":"boolean"
         },
         "CustomFlag2":{
            "type":"boolean"
         },
         "CustomFlag3":{
            "type":"boolean"
         },
         "CustomFlag4":{
            "type":"boolean"
         },
         "CustomFlag5":{
            "type":"boolean"
         },
         "CustomFlag6":{
            "type":"boolean"
         },
         "CustomFlag7":{
            "type":"boolean"
         },
         "CustomFlag8":{
            "type":"boolean"
         },
         "CustomLookup1":{
            "type":"string"
         },
         "CustomLookup2":{
            "type":"string"
         },
         "CustomLookup3":{
            "type":"string"
         },
         "CustomLookup4":{
            "type":"string"
         },
         "CustomLookup5":{
            "type":"string"
         },
         "CustomLookup6":{
            "type":"string"
         },
         "CustomLookup7":{
            "type":"string"
         },
         "CustomLookup8":{
            "type":"string"
         },
         "CustomNumber1":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber2":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber3":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber4":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber5":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber6":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber7":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber8":{
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
         "CustomText7":{
            "type":"string"
         },
         "CustomText8":{
            "type":"string"
         },
         "CustomText9":{
            "type":"string"
         },
         "CustomText10":{
            "type":"string"
         },
         "CustomText11":{
            "type":"string"
         },
         "CustomText12":{
            "type":"string"
         },
         "CustomText13":{
            "type":"string"
         },
         "CustomText14":{
            "type":"string"
         },
         "CustomText15":{
            "type":"string"
         },
         "CustomText16":{
            "type":"string"
         },
         "ExternalId":{
            "type":"string"
         }
      }
   },
   "SalesOrderExportToJson_get.GlobalFeesType":{
      "type":"object",
      "properties":{
         "Code":{
            "type":"string"
         },
         "Type":{
            "type":"string"
         },
         "Description":{
            "type":"string"
         },
         "AmountWithoutTax":{
            "format":"double",
            "type":"number"
         },
         "AmountWithTax":{
            "format":"double",
            "type":"number"
         },
         "TaxAmount":{
            "format":"double",
            "type":"number"
         }
      }
   },  
  "SalesOrderExportToJson_get.CSRNotesType":{
         "type":"object",
         "properties":{
            "CreatedEmployeeIdentifier":{
               "type":"string"
            },
            "CreatedDateTime":{
               "format":"date-time",
               "type":"string"
            },
            "LastEditedEmployeeIdentifier":{
               "type":"string"
            },
            "LastModifiedDateTime":{
               "format":"date-time",
               "type":"string"
            },
            "Notes":{
               "type":"string"
            }
         }
      },
   "SalesOrderExportToJson_get.PaymentsType":{
      "type":"object",
      "properties":{
         "ReceiptIdentifier":{
            "type":"string"
         },
         "PaymentLineNo":{
            "format":"int32",
            "type":"integer"
         },
         "AccountType":{
            "enum":[
               "Cash",
               "Check",
               "CreditCard",
               "DepositUsed",
               "StoreCredit",
               "GiftCard",
               "GiftCertificate",
               "StoreCharge",
               "Coupon",
               "FreeFormGiftCertificate",
               "Undefined",
               "Fictions",
               "DebitCard",
               "Token",
               "CreditCardCredit",
               "HouseCharge",
               "Universal",
               "UniversalCredit",
               "InsufficientFunds",
               "Terms",
               "OfflinePayment",
               "CashMachine",
               "Unknown"
            ],
            "type":"string"
         },
         "PaymentMethodCode":{
            "type":"string"
         },
         "PaymentMethodDescription":{
            "type":"string"
         },
         "PaymentCardType":{
            "enum":[
               "CreditCard",
               "Visa",
               "MasterCard",
               "DiscoverCard",
               "AmericanExpress",
               "JCB",
               "Diners",
               "Solo",
               "Maestro",
               "Cirrus",
               "Switch",
               "Laser",
               "OtherCards",
               "VisaDebit",
               "Debit",
               "ChinaUnionPay"
            ],
            "type":"string"
         },
         "GiftCardType":{
            "enum":[
               "Purchased",
               "NonPurchased"
            ],
            "type":"string"
         },
         "AccountNumber":{
            "type":"string"
         },
         "PaymentAmount":{
            "format":"double",
            "type":"number"
         },
         "ChangeAmount":{
            "format":"double",
            "type":"number"
         }
      }
   },
   "SalesOrderExportToJson_get.ShipMemosType":{
      "type":"object",
      "properties":{
         "ShipMemoNo":{
            "type":"string"
         },
         "CreatedDate":{
            "format":"date-time",
            "type":"string"
         },
         "CreatedByEmployee":{
            "type":"string"
         },
         "FillLocation":{
            "type":"string"
         },
         "Status":{
            "enum":[
               "PrepareShipment",
               "InProcess3PL",
               "Shipped",
               "Rejected",
               "Processing",
               "Error",
               "PickUpReady",
               "PickedUp",
               "PreparePickUp"
            ],
            "type":"string"
         },
         "DefaultShippingMethod":{
            "type":"string"
         },
         "Items":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/SalesOrderExportToJson_get.ItemsType1"
            }
         }
      }
   },
   "SalesOrderExportToJson_get.InstructionsType":{
      "type":"object",
      "properties":{
         "HoldInstruction":{
            "$ref":"#/definitions/SalesOrderExportToJson_get.HoldInstructionType"
         },
         "LayawayInstruction":{
            "$ref":"#/definitions/SalesOrderExportToJson_get.LayawayInstructionType"
         },
         "PreOrderInstruction":{
            "$ref":"#/definitions/SalesOrderExportToJson_get.PreOrderInstructionType"
         },
         "ReviewInstruction":{
            "$ref":"#/definitions/SalesOrderExportToJson_get.ReviewInstructionType"
         },
         "SendSaleInstruction":{
            "$ref":"#/definitions/SalesOrderExportToJson_get.SendSaleInstructionType"
         },
         "SpecialInstruction":{
            "$ref":"#/definitions/SalesOrderExportToJson_get.SpecialInstructionType"
         },
         "QuoteInstruction":{
            "$ref":"#/definitions/SalesOrderExportToJson_get.QuoteInstructionType"
         },
         "WebInstruction":{
            "$ref":"#/definitions/SalesOrderExportToJson_get.WebInstructionType"
         }
      }
   },
   "SalesOrderExportToJson_get.ItemDetailsType":{
      "type":"object",
      "properties":{
         "PLU":{
            "format":"int32",
            "type":"integer"
         },
         "StyleItemWeight":{
            "format":"double",
            "type":"number"
         },
         "CLU":{
            "type":"string"
         },
         "UPC":{
            "type":"string"
         },
         "StyleWeight":{
            "format":"double",
            "type":"number"
         },
         "StyleNo":{
            "type":"string"
         },
         "ExternalId":{
            "type":"string"
         },
         "ItemDescription":{
            "type":"string"
         },
         "Attribute1":{
            "type":"string"
         },
         "Attribute2":{
            "type":"string"
         },
         "Attribute3":{
            "type":"string"
         },
         "DCSS":{
            "$ref":"#/definitions/SalesOrderExportToJson_get.DCSSType"
         },
         "Style":{
            "$ref":"#/definitions/SalesOrderExportToJson_get.StyleType"
         },
         "Item":{
            "$ref":"#/definitions/SalesOrderExportToJson_get.ItemType"
         }
      }
   },
   "SalesOrderExportToJson_get.ItemFeesType":{
      "type":"object",
      "properties":{
         "Code":{
            "type":"string"
         },
         "Description":{
            "type":"string"
         },
         "Type":{
            "enum":[
               "Shipping",
               "Insurance",
               "RestockingFee",
               "Empty"
            ],
            "type":"string"
         },
         "AmountWithoutTax":{
            "format":"double",
            "type":"number"
         },
         "AmountWithTax":{
            "format":"double",
            "type":"number"
         },
         "TaxAmount":{
            "format":"double",
            "type":"number"
         }
      }
   },
   "SalesOrderExportToJson_get.ShipInfoType1":{
      "type":"object",
      "properties":{
         "Customer":{
            "type":"string"
         },
         "LastName":{
            "type":"string"
         },
         "FirstName":{
            "type":"string"
         },
         "MiddleName":{
            "type":"string"
         },
         "Address1":{
            "type":"string"
         },
         "Address2":{
            "type":"string"
         },
         "City":{
            "type":"string"
         },
         "State":{
            "type":"string"
         },
         "PostalCode":{
            "type":"string"
         },
         "Organization":{
            "type":"string"
         },
         "Phone1":{
            "type":"string"
         },
         "Phone2":{
            "type":"string"
         },
         "Phone3":{
            "type":"string"
         },
         "WholesaleCustomer":{
            "type":"boolean"
         },
         "TradingPartner":{
            "type":"boolean"
         },
         "Phone4":{
            "type":"string"
         },
         "CountryCode":{
            "type":"string"
         },
         "Gender":{
            "format":"int32",
            "type":"integer"
         },
         "Birthdate":{
            "format":"date-time",
            "type":"string"
         },
         "Email":{
            "type":"string"
         },
         "Type":{
            "type":"string"
         },
         "Address3":{
            "type":"string"
         },
         "Address4":{
            "type":"string"
         },
         "IsManualEntry":{
            "type":"boolean"
         },
         "IsStorePickup":{
            "type":"boolean"
         },
         "AddressId":{
            "format":"uuid",
            "type":"string",
            "example":"00000000-0000-0000-0000-000000000000"
         },
         "AVSPerformed":{
            "type":"boolean"
         },
         "Address5":{
            "type":"string"
         },
         "FiscalCode":{
            "type":"string"
         }
      }
   },
   "SalesOrderExportToJson_get.ItemsType1":{
      "type":"object",
      "properties":{
         "LineNo":{
            "format":"int32",
            "type":"integer"
         },
         "ItemIdentifier":{
            "type":"string"
         },
         "Status":{
            "enum":[
               "PrepareShipment",
               "InProcess",
               "Shipped",
               "Rejected",
               "Processing",
               "Error",
               "PickUpReady",
               "PickedUp",
               "PreparePickUp"
            ],
            "type":"string"
         },
         "RejectReason":{
            "type":"string"
         },
         "RejectedDate":{
            "format":"date-time",
            "type":"string"
         },
         "RejectedByEmployee":{
            "type":"string"
         },
         "RejectedQty":{
            "format":"double",
            "type":"number"
         },
         "Cartons":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/SalesOrderExportToJson_get.CartonsType"
            }
         }
      }
   },
   "SalesOrderExportToJson_get.HoldInstructionType":{
      "type":"object",
      "properties":{
         "HeldOnDateTime":{
            "format":"date-time",
            "type":"string"
         },
         "HeldByEmployeeId":{
            "format":"uuid",
            "type":"string",
            "example":"00000000-0000-0000-0000-000000000000"
         },
         "HeldByEmployeeIdentifier":{
            "type":"string"
         },
         "HoldExpiresDateTime":{
            "format":"date-time",
            "type":"string"
         },
         "RemovedDateTime":{
            "format":"date-time",
            "type":"string"
         },
         "RemovedByEmployeeId":{
            "format":"uuid",
            "type":"string",
            "example":"00000000-0000-0000-0000-000000000000"
         },
         "RemovedByEmployeeIdentifier":{
            "type":"string"
         }
      }
   },
   "SalesOrderExportToJson_get.LayawayInstructionType":{
      "type":"object",
      "properties":{
         "HeldOnDateTime":{
            "format":"date-time",
            "type":"string"
         },
         "HeldByEmployeeId":{
            "format":"uuid",
            "type":"string",
            "example":"00000000-0000-0000-0000-000000000000"
         },
         "HeldByEmployeeIdentifier":{
            "type":"string"
         },
         "ExpirationDateTime":{
            "format":"date-time",
            "type":"string"
         },
         "RemovedDateTime":{
            "format":"date-time",
            "type":"string"
         },
         "RemovedByEmployeeId":{
            "format":"uuid",
            "type":"string",
            "example":"00000000-0000-0000-0000-000000000000"
         },
         "RemovedByEmployeeIdentifier":{
            "type":"string"
         },
         "NexPaymentDueDateTime":{
            "format":"date-time",
            "type":"string"
         },
         "NextPaymentAmount":{
            "format":"double",
            "type":"number"
         }
      }
   },
   "SalesOrderExportToJson_get.PreOrderInstructionType":{
      "type":"object",
      "properties":{
         "ShippingMethodCode":{
            "type":"string"
         },
         "ShipPartial":{
            "type":"boolean"
         },
         "VendorDropShip":{
            "type":"boolean"
         },
         "PlannedReleaseDate":{
            "format":"date-time",
            "type":"string"
         },
         "ExpirationDateTime":{
            "format":"date-time",
            "type":"string"
         }
      }
   },
   "SalesOrderExportToJson_get.ReviewInstructionType":{
      "type":"object",
      "properties":{
         "RequestedForDateTime":{
            "format":"date-time",
            "type":"string"
         },
         "SentOnDateTime":{
            "format":"date-time",
            "type":"string"
         },
         "SentByEmployeeId":{
            "format":"uuid",
            "type":"string",
            "example":"00000000-0000-0000-0000-000000000000"
         },
         "SentByEmployeeIdentifier":{
            "type":"string"
         },
         "ReceivedByEmployeeName":{
            "type":"string"
         },
         "DueDateTime":{
            "format":"date-time",
            "type":"string"
         },
         "ReturnedDateTime":{
            "format":"date-time",
            "type":"string"
         },
         "ReturnedByEmployeeName":{
            "type":"string"
         }
      }
   },
   "SalesOrderExportToJson_get.SendSaleInstructionType":{
      "type":"object",
      "properties":{
         "ShippingMethodCode":{
            "type":"string"
         },
         "ShipPartial":{
            "type":"boolean"
         }
      }
   },
   "SalesOrderExportToJson_get.SpecialInstructionType":{
      "type":"object",
      "properties":{
         "EstimatedDate":{
            "format":"date-time",
            "type":"string"
         },
         "ShippingMethodCode":{
            "type":"string"
         },
         "ShipPartial":{
            "type":"boolean"
         },
         "VendorDropShip":{
            "type":"boolean"
         }
      }
   },
   "SalesOrderExportToJson_get.QuoteInstructionType":{
      "type":"object",
      "properties":{
         "ExpirationDateTime":{
            "format":"date-time",
            "type":"string"
         }
      }
   },
   "SalesOrderExportToJson_get.WebInstructionType":{
      "type":"object",
      "properties":{
         "EcommerceChannelId":{
            "format":"uuid",
            "type":"string",
            "example":"00000000-0000-0000-0000-000000000000"
         },
         "EcommerceChannelIdentifier":{
            "type":"string"
         },
         "OrderNo":{
            "type":"string"
         },
         "ShipPartial":{
            "type":"boolean"
         },
         "Modified":{
            "type":"boolean"
         },
         "ShippingMethodCode":{
            "type":"string"
         }
      }
   },
   "SalesOrderExportToJson_get.DCSSType":{
      "type":"object",
      "properties":{
         "DCSSCode":{
            "type":"string"
         },
         "Alias":{
            "type":"string"
         },
         "DeptCode":{
            "type":"string"
         },
         "DeptName":{
            "type":"string"
         },
         "DeptAlias":{
            "type":"string"
         },
         "ClassCode":{
            "type":"string"
         },
         "ClassName":{
            "type":"string"
         },
         "ClassAlias":{
            "type":"string"
         },
         "SubClass1Code":{
            "type":"string"
         },
         "SubClass1Name":{
            "type":"string"
         },
         "SubClass1Alias":{
            "type":"string"
         },
         "SubClass2Code":{
            "type":"string"
         },
         "SubClass2Name":{
            "type":"string"
         },
         "SubClass2Alias":{
            "type":"string"
         }
      }
   },
   "SalesOrderExportToJson_get.StyleType":{
      "type":"object",
      "properties":{
         "CustomDate1":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate10":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate11":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate12":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate2":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate3":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate4":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate5":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate6":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate7":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate8":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate9":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDecimal1":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal10":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal11":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal12":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal2":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal3":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal4":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal5":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal6":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal7":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal8":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal9":{
            "format":"double",
            "type":"number"
         },
         "CustomFlag1":{
            "type":"boolean"
         },
         "CustomFlag10":{
            "type":"boolean"
         },
         "CustomFlag11":{
            "type":"boolean"
         },
         "CustomFlag12":{
            "type":"boolean"
         },
         "CustomFlag13":{
            "type":"boolean"
         },
         "CustomFlag14":{
            "type":"boolean"
         },
         "CustomFlag15":{
            "type":"boolean"
         },
         "CustomFlag16":{
            "type":"boolean"
         },
         "CustomFlag17":{
            "type":"boolean"
         },
         "CustomFlag18":{
            "type":"boolean"
         },
         "CustomFlag2":{
            "type":"boolean"
         },
         "CustomFlag3":{
            "type":"boolean"
         },
         "CustomFlag4":{
            "type":"boolean"
         },
         "CustomFlag5":{
            "type":"boolean"
         },
         "CustomFlag6":{
            "type":"boolean"
         },
         "CustomFlag7":{
            "type":"boolean"
         },
         "CustomFlag8":{
            "type":"boolean"
         },
         "CustomFlag9":{
            "type":"boolean"
         },
         "CustomLookup1":{
            "type":"string"
         },
         "CustomLookup10":{
            "type":"string"
         },
         "CustomLookup11":{
            "type":"string"
         },
         "CustomLookup12":{
            "type":"string"
         },
         "CustomLookup2":{
            "type":"string"
         },
         "CustomLookup3":{
            "type":"string"
         },
         "CustomLookup4":{
            "type":"string"
         },
         "CustomLookup5":{
            "type":"string"
         },
         "CustomLookup6":{
            "type":"string"
         },
         "CustomLookup7":{
            "type":"string"
         },
         "CustomLookup8":{
            "type":"string"
         },
         "CustomLookup9":{
            "type":"string"
         },
         "CustomNumber1":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber10":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber11":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber12":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber2":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber3":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber4":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber5":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber6":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber7":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber8":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber9":{
            "format":"int32",
            "type":"integer"
         },
         "CustomText1":{
            "type":"string"
         },
         "CustomText10":{
            "type":"string"
         },
         "CustomText11":{
            "type":"string"
         },
         "CustomText12":{
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
         "CustomText7":{
            "type":"string"
         },
         "CustomText8":{
            "type":"string"
         },
         "CustomText9":{
            "type":"string"
         }
      }
   },
   "SalesOrderExportToJson_get.ItemType":{
      "type":"object",
      "properties":{
         "CustomDate1":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate2":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate3":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate4":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate5":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDate6":{
            "format":"date-time",
            "type":"string"
         },
         "CustomDecimal1":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal2":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal3":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal4":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal5":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal6":{
            "format":"double",
            "type":"number"
         },
         "CustomFlag1":{
            "type":"boolean"
         },
         "CustomFlag2":{
            "type":"boolean"
         },
         "CustomFlag3":{
            "type":"boolean"
         },
         "CustomFlag4":{
            "type":"boolean"
         },
         "CustomFlag5":{
            "type":"boolean"
         },
         "CustomFlag6":{
            "type":"boolean"
         },
         "CustomLookup1":{
            "type":"string"
         },
         "CustomLookup10":{
            "type":"string"
         },
         "CustomLookup11":{
            "type":"string"
         },
         "CustomLookup12":{
            "type":"string"
         },
         "CustomLookup2":{
            "type":"string"
         },
         "CustomLookup3":{
            "type":"string"
         },
         "CustomLookup4":{
            "type":"string"
         },
         "CustomLookup5":{
            "type":"string"
         },
         "CustomLookup6":{
            "type":"string"
         },
         "CustomLookup7":{
            "type":"string"
         },
         "CustomLookup8":{
            "type":"string"
         },
         "CustomLookup9":{
            "type":"string"
         },
         "CustomNumber2":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber3":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber4":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber5":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber6":{
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
         }
      }
   },
   "SalesOrderExportToJson_get.CartonsType":{
      "type":"object",
      "properties":{
         "TrackingId":{
            "type":"string"
         },
         "Qty":{
            "format":"double",
            "type":"number"
         },
         "CarrierMethodName":{
            "type":"string"
         },
         "TrackingUrl":{
            "type":"string"
         },
         "Status":{
            "enum":[
               "New",
               "Shipping",
               "Canceled",
               "Error"
            ],
            "type":"string"
         },
         "ShippingMethod":{
            "type":"string"
         },
         "ShippedDate":{
            "type":"string"
         },
         "ShippedByEmployee":{
            "type":"string"
         },
         "CartonNo":{
            "type":"string"
         },
         "SalesReceiptId":{
            "type":"string"
         },
         "ActualShippingCost":{
            "format":"double",
            "type":"number"
         },
         "ReturnLabel":{
            "type":"string"
         },
         "DeliveryMethodType":{
            "type":"string"
         }
      }
   }
}
~~~

---

## Request Example(s) {#RequestExamples}

**Request Example #1: SalesOrderNo = '1000000415'**

~~~
{
  "Source":"Integrator",
  "Data":{
    "Request":{
      "Settings":[
        {
          "Key":"CustomerIdentifierSetting",
          "Value":"CustomerNo"
        },
        {
          "Key":"DepSetSetting",
          "Value":"DCSSCode"
        },
        {
          "Key":"EmployeeIdentifierSetting",
          "Value":"LoginName"
        },
        {
          "Key":"ItemDescriptionSetting",
          "Value":"StoreDescription"
        },
        {
          "Key":"ItemDetailsLevelSetting",
          "Value":"Basic"
        },
        {
          "Key":"ItemIdentifierSetting",
          "Value":"PLU"
        },
        {
          "Key":"LocationIdentifierSetting",
          "Value":"ExternalIdCode"
        },
        {
          "Key":"ShippingMethodIdentifierSetting",
          "Value":"Code"
        },
        {
          "Key":"RejectReasonIdentifierSetting",
          "Value":"Code"
        },
        {
          "Key":"SalesReceiptIdentifierSetting",
          "Value":"No"
        },
        {
          "Key":"ECommerceChannelIdentifierSetting",
          "Value":"Code"
        },
   	    {
          "Key":"PriceLevelSetting",
          "Value":"Code"
        },
   	    {
          "Key":"DiscountReasonIdentifierSetting",
          "Value":"ExternalIdCode"
        }
      ],
      "Filters":[
        {
          "Field":"SalesOrderNo",
          "Operator":"Equal",
          "Value":"1000000415"
        }
      ],
      "SortDescriptions":[
        {
          "Direction":"Ascending",
          "Name":"RecModified"
        }
      ],
      "Skip":0,
      "Top":10
    }
  }
}
~~~

---

## Response Example(s) {#ResponseExamples}

**Response Example #1: In Process**

<span class="ir">?????????? Need an 'In Process' example ??????????</span>

**Response Example #2: Error**

<span class="ir">?????????? Need an 'Error' example ??????????</span>

**Response Example #3: Success**

<span class="ir">?????????? The below example provided by the developers has the wrong 'ApiType'. It is 'sales-order-export' rather than 'sales-order'. This means that other aspects of the example could be wrong. We should probably get new examples to ensure that they are correct. ?????????</span>

~~~
{
  "ApiDocument":{
    "ApiDocumentId":"92132833-D9C3-4E30-A5C9-E59E590D4B39",
    "Status":"Successful",
    "ApiRequestType":"sales-order-export",
    "TotalRecords":1,
    "RecordsCount":1,
    "ElapsedTime":"00:00:01.6900000",
    "Response":{
      "SalesOrders":[
        {
          "SalesOrderNo":"1000000415",
          "RecModified":"2020-02-11T08:43:26.773",
          "SalesOrderId":"8DE0FD42-2C52-4AF4-8DE5-006E1A135E35",
          "DeviceTransactionNumber":1000000415,
          "Type":"SendSale",
          "SalesOrderDateTime":"2020-02-11T10:36:05",
          "PriceLevelIdentifier":"Sell Price",
          "Status":65535,
          "StatusName":"Mixed",
          "IsArchive":false,
          "SellFromLocation":"VIKA",
          "DefaultFillLocation":"ELEVKOVICH",
          "SaleCreditLocation":"VIKA",
          "LockFillLocation":true,
          "TotalAmountWithoutTax":203.0000,
          "TotalAmountWithTax":203.0000,
          "TotalTaxAmount":0.0000,
          "TotalDiscountAmount":0.0000,
          "MembershipCode":"096800037794",
          "FraudStatus":"Unknown",
          "BlockEmailNotifications":false,
          "SellInfo":{
            "Customer":"1200000201",
            "LastName":"Harkusha",
            "FirstName":"Viktoria",
            "MiddleName":"",
            "Address1":"255 GREENWICH ST",
            "Address2":"FL 9",
            "City":"New York",
            "State":"NY",
            "PostalCode":"10007",
            "Phone1":"+380 96 129 5866",
            "Phone2":"",
            "Phone3":"",
            "Organization":"ertsert",
            "Gender":2,
            "Birthdate":"1998-08-11T00:00:00",
            "WholesaleCustomer":false,
            "TradingPartner":false,
            "Phone4":"",
            "CountryCode":"US",
            "Email":"vharkusha@teamworkretail.com",
            "Address3":"",
            "Address4":"",
            "Address5":"",
            "FiscalCode":"",
            "DepositBalance":3.00000000000000000000,
            "TotalDepositAmount":0.00000000000000000000,
            "CreateDateTime":"2020-02-11T10:36:05",
            "EditDateTime":"2020-02-11T10:41:55"
          },
          "BillInfo":{
            "WholesaleCustomer":false,
            "TradingPartner":false
          },
          "ShipInfo":{
            "Customer":"1200000201",
            "LastName":"Harkusha",
            "FirstName":"Viktoria",
            "MiddleName":"",
            "Address1":"255 GREENWICH ST",
            "Address2":"FL 9",
            "City":"New York",
            "State":"NY",
            "PostalCode":"10007",
            "Organization":"ertsert",
            "Phone1":"+380 96 129 5866",
            "WholesaleCustomer":false,
            "TradingPartner":false,
            "CountryCode":"US",
            "Email":"vharkusha@teamworkretail.com",
            "Type":"primary",
            "Address3":"",
            "Address4":"",
            "IsManualEntry":false,
            "IsStorePickup":false,
            "AVSPerformed":false,
            "Address5":"",
            "FiscalCode":""
          },
          "CustomFlag1":false,
          "CustomFlag2":false,
          "CustomFlag3":false,
          "CustomFlag4":false,
          "CustomFlag5":false,
          "CustomFlag6":false,
          "CustomFlag7":false,
          "CustomFlag8":false,
          "Items":[
            {
              "LineNo":1,
              "ItemIdentifier":"251",
              "ItemDetails":{
                "PLU":251,
                "StyleNo":"79",
                "ItemDescription":"vika_VGC",
                "DCSS":{
                  "DCSSCode":"NEW"
                }
              },
              "Status":"Completed",
              "DeliveryMethod":"Ship",
              "FillLocation":"VIKA",
              "LockFillLocation":true,
              "ShippingMethod":"UPS",
              "PromiseDate":"2020-02-11T10:36:05",
              "GifteeEmail":"sahg@hjds.com",
              "GiftCardNo":"7O,SUDYQNXPY3Q,PJ,ZC",
              "VirtualGiftCardAmount":100.0000,
              "GiftItem":false,
              "OrderQty":1.00000000000000000000,
              "QtyDue":0.00000000000000000000,
              "QtyCancelled":0.00000000000000000000,
              "UnitPrice":100.0000,
              "PriceLevelIdentifier":"Sell Price",
              "ExtPrice":100.0000,
              "ExtDiscountAmount":0.0000,
              "ExtAmountWithoutTax":100.0000,
              "ExtAmountWithTax":100.0000,
              "ExtTaxAmount":0.0000,
              "ItemFeeAmountWithoutTax":0.0000,
              "ItemFeeAmountWithTax":0.0000,
              "ItemFeeTaxAmount":0.0000,
              "RmaCode":"19XTF23Z",
              "FinalSale":false,
              "MemberDiscountPercent":0.00000000000000000000,
              "MemberDiscountAmount":0.0000,
              "MembershipItem":false,
              "MemberDiscountAllowed":false,
              "MembershipDays":0,
              "ShipInfo":{
                "WholesaleCustomer":false,
                "TradingPartner":false,
                "IsManualEntry":false,
                "IsStorePickup":false,
                "AVSPerformed":false
              },
              "CustomFlag1":false,
              "CustomFlag2":false,
              "CustomFlag3":false,
              "CustomFlag4":false,
              "CustomFlag5":false,
              "CustomFlag6":false,
              "CustomFlag7":false,
              "CustomFlag8":false
            },
            {
              "LineNo":2,
              "ItemIdentifier":"251",
              "ItemDetails":{
                "PLU":251,
                "StyleNo":"79",
                "ItemDescription":"vika_VGC",
                "DCSS":{
                  "DCSSCode":"NEW"
                }
              },
              "Status":"Completed",
              "DeliveryMethod":"Ship",
              "FillLocation":"VIKA",
              "LockFillLocation":true,
              "ShippingMethod":"UPS",
              "PromiseDate":"2020-02-11T10:36:05",
              "GifteeEmail":"sahg@hjds.com",
              "GiftCardNo":"NVWIF7FRQ5IPJPIDS0AIQGIQWXU18VJ9FH,SJXX14AVZRYVQXDU3DDTG2FTEA3,2X",
              "VirtualGiftCardAmount":100.0000,
              "GiftItem":false,
              "OrderQty":1.00000000000000000000,
              "QtyDue":0.00000000000000000000,
              "QtyCancelled":0.00000000000000000000,
              "UnitPrice":100.0000,
              "PriceLevelIdentifier":"Sell Price",
              "ExtPrice":100.0000,
              "ExtDiscountAmount":0.0000,
              "ExtAmountWithoutTax":100.0000,
              "ExtAmountWithTax":100.0000,
              "ExtTaxAmount":0.0000,
              "ItemFeeAmountWithoutTax":0.0000,
              "ItemFeeAmountWithTax":0.0000,
              "ItemFeeTaxAmount":0.0000,
              "RmaCode":"19XTF23Y",
              "FinalSale":false,
              "MemberDiscountPercent":0.00000000000000000000,
              "MemberDiscountAmount":0.0000,
              "MembershipItem":false,
              "MemberDiscountAllowed":false,
              "MembershipDays":0,
              "ShipInfo":{
                "WholesaleCustomer":false,
                "TradingPartner":false,
                "IsManualEntry":false,
                "IsStorePickup":false,
                "AVSPerformed":false
              },
              "CustomFlag1":false,
              "CustomFlag2":false,
              "CustomFlag3":false,
              "CustomFlag4":false,
              "CustomFlag5":false,
              "CustomFlag6":false,
              "CustomFlag7":false,
              "CustomFlag8":false
            },
            {
              "LineNo":3,
              "ItemIdentifier":"105",
              "ItemDetails":{
                "PLU":105,
                "UPC":"9780201382051",
                "StyleNo":"27",
                "ItemDescription":"vika_sing",
                "Attribute1":"M",
                "Attribute2":"Blue",
                "DCSS":{
                  "DCSSCode":"NEW"
                }
              },
              "Status":"Shipping",
              "DeliveryMethod":"Ship",
              "FillLocation":"VIKA",
              "LockFillLocation":true,
              "ShippingMethod":"UPS",
              "PromiseDate":"2020-02-11T10:36:05",
              "VirtualGiftCardAmount":0.0000,
              "GiftItem":false,
              "OrderQty":1.00000000000000000000,
              "QtyDue":1.00000000000000000000,
              "QtyCancelled":0.00000000000000000000,
              "UnitPrice":3.0000,
              "PriceLevelIdentifier":"Sell Price",
              "ExtPrice":3.0000,
              "ExtDiscountAmount":0.0000,
              "ExtAmountWithoutTax":3.0000,
              "ExtAmountWithTax":3.0000,
              "ExtTaxAmount":0.0000,
              "ItemFeeAmountWithoutTax":0.0000,
              "ItemFeeAmountWithTax":0.0000,
              "ItemFeeTaxAmount":0.0000,
              "RmaCode":"19XTF23X",
              "FinalSale":false,
              "MemberDiscountPercent":0.00000000000000000000,
              "MemberDiscountAmount":0.0000,
              "MembershipItem":false,
              "MemberDiscountAllowed":false,
              "MembershipDays":0,
              "ShipInfo":{
                "WholesaleCustomer":false,
                "TradingPartner":false,
                "IsManualEntry":false,
                "IsStorePickup":false,
                "AVSPerformed":false
              },
              "CustomFlag1":false,
              "CustomFlag2":false,
              "CustomFlag3":false,
              "CustomFlag4":false,
              "CustomFlag5":false,
              "CustomFlag6":false,
              "CustomFlag7":false,
              "CustomFlag8":false
            }
          ],
          "Payments":[
            {
              "ReceiptIdentifier":"460",
              "ListOrder":0,
              "AccountType":"CreditCard",
              "PaymentMethodCode":"ADYEN",
              "PaymentMethodDescription":"Adyen",
              "PaymentCardType":"CreditCard",
              "AccountNumber":"XXXX-XXXX-XXXX-1111",
              "PaymentAmount":200.0000,
              "ChangeAmount":0.0000
            },
            {
              "ReceiptIdentifier":"462",
              "ListOrder":0,
              "AccountType":"CreditCard",
              "PaymentMethodCode":"ADYEN",
              "PaymentMethodDescription":"Adyen",
              "PaymentCardType":"CreditCard",
              "AccountNumber":"XXXX-XXXX-XXXX-1111",
              "PaymentAmount":3.0000,
              "ChangeAmount":0.0000
            }
          ],
          "ShipMemos":[
            {
              "ShipMemoNo":"211",
              "CreatedDate":"2020-02-11T08:38:52.727",
              "CreatedByEmployee":"ROOT",
              "FillLocation":"VIKA",
              "Status":"Shipped",
              "DefaultShippingMethod":"UPS",
              "Items":[
                {
                  "LineNo":1,
                  "ItemIdentifier":"251",
                  "Status":"Shipped",
                  "RejectedQty":0.00000000000000000000,
                  "Cartons":[
                    {
                      "Qty":1.00000000000000000000,
                      "Status":"Shipping",
                      "ShippedDate":"2020-02-11T10:37:21.040",
                      "ShippedByEmployee":"ROOT",
                      "CartonNo":"1",
                      "DeliveryMethodType":0
                    }
                  ]
                },
                {
                  "LineNo":2,
                  "ItemIdentifier":"251",
                  "Status":"Shipped",
                  "RejectedQty":0.00000000000000000000,
                  "Cartons":[
                    {
                      "Qty":1.00000000000000000000,
                      "Status":"Shipping",
                      "ShippedDate":"2020-02-11T10:37:21.040",
                      "ShippedByEmployee":"ROOT",
                      "CartonNo":"1",
                      "DeliveryMethodType":0
                    }
                  ]
                }
              ]
            },
            {
              "ShipMemoNo":"1000000415",
              "CreatedDate":"2020-02-11T08:41:53.643",
              "CreatedByEmployee":"ROOT",
              "FillLocation":"VIKA",
              "Status":"Shipped",
              "DefaultShippingMethod":"UPS",
              "Items":[
                {
                  "LineNo":1,
                  "ItemIdentifier":"105",
                  "Status":"PrepareShipment",
                  "RejectedQty":0.00000000000000000000,
                  "Cartons":[
                    {
                      "TrackingId":"jk",
                      "Qty":0.00000000000000000000,
                      "Status":"New",
                      "ShippingMethod":"UPS",
                      "ShippedDate":"2020-02-12T13:31:41.923",
                      "ShippedByEmployee":"ROOT",
                      "CartonNo":"1",
                      "ActualShippingCost":0.00000000000000000000,
                      "DeliveryMethodType":0
                    }
                  ]
                }
              ]
            }
          ],
          "Instructions":[
            {
              "SendSaleInstruction":{
                "ShippingMethodCode":"UPS",
                "ShipPartial":true
              }
            }
          ],
          "ShipOnce":false
        }
      ]
    }
  }
}
~~~
