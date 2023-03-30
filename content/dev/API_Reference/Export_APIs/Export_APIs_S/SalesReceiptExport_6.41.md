---
title: "Sales Receipt Export API [6.41]"
date: 2022-11-14T10:14:00-05:00
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
- [Successful response](#SuccessfulResponse)
- &nbsp;&nbsp;&nbsp;&nbsp;[Format](#SuccessfulResponseFormat)
- &nbsp;&nbsp;&nbsp;&nbsp;[Schema](#SuccessfulResponseSchema)
- [Request example(s)](#RequestExamples)
- [Response example(s)](#ResponseExamples)

---
<!-- end comment block (when active)-------------------- -->

## Overview {#Overview}

This topic describes the **Sales Receipt Export** API which is used to export sales receipt information from CHQ.

See the [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) document for a description on how export requests are made and on the standard request and response formats used. The **Sales Receipt Export** successful response format will be described below.

{{% notice note %}}
The **Sales Receipt Export API** can support both the *new* and *legacy* sales receipt formats. The desired configuration can be performed upon request. 
{{% /notice %}}

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/sales-receipt**  
Asynchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/sales-receipt/async**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See the [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) document for further info.

In the Swagger UI the **/chqapi/export/sales-receipt** endpoint is a member of the **Sales** endpoint group.

## Request settings {#RequestSettings}

Below are the settings which can be supplied in the **Settings** group of the export request to define which value (field) is to be used for a particular value class (see the [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) document for additional info).

The **Key** column lists the names of the available settings. The **Supported Values** column lists the valid values which can be supplied for the setting. The **Default** column lists the default value for each setting if that setting is not supplied.

**Key** | **Supported Values** | **Default** |
---- | ---- | ---- | 
LocationIdentifierSetting | Code, ExternalId, ExternalIdCode, No, TeamworkId | ExternalIdCode |
EmployeeIdentifierSetting | TeamworkId, LoginName, FullName | LoginName |
MembershipIdentifierSetting | Level, Label, TeamworkId | Label |
CustomerIdentifierSetting | CustomerNo, MemberCode, Email, ExternalId, TeamworkId | CustomerNo |
ItemIdentifierSetting | PLU, ExternalId, CLU, TeamworkId, UPC | PLU |
ItemDescriptionSetting | Description1, Description2, Description3, StoreDescription<br>*(StoreDescription refers to Description4)* | StoreDescription |
TaxCategoryIdentifierSetting | Code, TeamworkId, ExternalId, ExternalIdCode | ExternalIdCode |
DepSetSetting | DCSSCode, Alias, Details | DCSSCode |
DiscountReasonIdentifierSetting | Code, ExternalId, ExternalIdCode TeamworkId | ExternalIdCode |
PaymentMethodIdentifierSetting | Code, ExternalId, ExternalIdCode TeamworkId | ExternalIdCode |
ReturnReasonIdentifierSetting  | Code, ExternalId, ExternalIdCode TeamworkId | ExternalIdCode |
TaxZoneIdentifierSetting | Code, Name, TeamworkId | Code |
ShippingMethodIdentifierSetting | Code, ECommerceAlias, TeamworkId | Code |
ItemDetailsLevelSetting | None, Basic, Custom | Basic |
CustomerDetailsLevelSetting | None, Basic, Custom | Basic |
DepositHistorySetting | None, First | None |
DeviceIdentifierSetting | DeviceName, LocationDeviceCode, DeviceNo, DeviceAlias, TeamworkId | DeviceName |
SalesReceiptIdentifierSetting | No, Code, AltDTN, DTN, ExternalId, TeamworkId | No |
CostOfGoodsCalculationSetting | No, Yes<br>*(If this setting's value is Yes, the receipt item will include the fields **COGS** (Cost of Goods) and **UnitCOGS** (Cost of Goods per unit) for the item.)* | No |
TransactionAcknowledgementIdentifierSetting | Code,Description,TeamworkId | Code |
DrawerMemoIdentifierSetting | DrawerMemoNum,WorkstationNum,WorkstationName,TeamworkId | WorkstationNum |

## Request filters {#RequestFilters}

Below are the filters which can be defined in the **Filters** group of the export request (see the [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) document for additional info).

The **Field** column lists the names of the fields on which filtering can be done. The **Operators** column lists the filter operator values which are valid the field. The **Value** column describes the  value expected for the field.

**Field** | **Operators** | **Value** |
---- | ---- | ---- |
DeviceTransactionNumber | "Equal", "Contains" | Any valid long integer value representing a device transaction number for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |
AltDeviceTransactionNumber | "Equal", "Contains"  | Any valid string representing an alternative device transaction number for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |
SalesReceiptNo | "Equal", "Greater than", "Greater than or equal", "Less than", "Less than or equal" | Any valid integer representing a sales receipt number. |
RecModified | "Greater than", "Greater than or equal", "Less than", "Less than or equal" | Any valid string representing a date-time value. |
DrawerMemoNo | "Equal" | Any valid integer representing a drawer memo number. |
DrawerMemoId | "Equal" | Any valid GUID string representing a drawer memo id. |
OrderNo | "Equal" | Any valid string representing a sales order number.|


## Request sorts {#RequestSorts}

The information returned is automatically sorted by the **RecModified** field *ascending*. No other sorts can be requested.

---

## Successful response {#SuccessfulResponse}

### Format {#SuccessfulResponseFormat}

Below is the format of the successful response to the export request. See the [*JSON Data Types*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/JsonDataTypes_6.41/) document for a description of the values which could appear in the **Data Type** column.

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
ApiDocumentId | string, guid | A unique identifier of the API document being used. |
Status | string, enum | The status of the response. The value will always be "Success" because if an error occured the standard *Error* response will be returned. <span class="ir">????????</span> |
ApiRequestType | string | <span class="ir">????????</span> |
TotalRecords | int32 | The total number of submitted records processed. |
RecordsCount | int32 | The number of records returned. |
ElapsedTime | string, datetime | The time it took to execute the export request. |
StartDateTime | string, datetime | A timestamp of when the export request started executing. |
EndDateTime | string, datetime | A timestamp of when the export request stopped executing. |
<span class="api-gn">Response</span> | | <span class="api-gd">A group containing the following fields and groups.</span> |
<span class="api-gn">Response: SalesReceipts</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
SalesReceiptNo | int32 | An identifier of the sales receipt. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
DeviceTransactionNumber | int64 | The receipt’s transaction number for the device used for the sales receipt. |
AltDeviceTransactionNumber | string | An alternate identifier of the receipt’s transaction number for the device used for the sales receipt. |
SalesReceiptId | string, guid | A unique identifier of the sales receipt. |
ReceiptCode | string | A code identifying the sales receipt. <span class="ir">????????</span> |
ReceiptIdentifier | string | An identifier of the sales receipt. |
PostedDateTime | string, datetime | A timestamp of when the receipt was posted. |
Location | string | An identifier of the location where the receipt was created. <span class="ir">????????</span> |
TransactionType | string, enum | An identifier of the receipt’s transaction type. Its value must be one of the following: "Default", "Sale", "Return", "Mixed", "Reversed", "Aborted", "NoItems", "Reversal", "Trade", "Deposit", "Adjustment" |
Associated | string | <span class="ir">????????</span> |
Cashier | string | An identifier of the cashier who created the receipt. |
TotalQty | double | The total quantity of items on the receipt. <span class="ir">??????????</span> |
InventoryAmount | double | <span class="ir">??????????</span> |
MembershipDiscount | double | The membership discount applied to the receipt. |
TotalDiscountAmount | double | The total discount amount applied to the receipt. |
TotalItemsShippingAmount | double | <span class="ir">??????????</span> |
TotalItemsFeeAmount | double | The total fee amount for all items on the receipt. |
TotalTaxAmount | double | The total tax amount for the receipt. |
TotalAmount | double | The total amount for the receipt. |
MembershipCode | double | The identifier of the membership used for the receipt. |
MembershipLevel | string | The membership level applied to the receipt. |
MembershipLevelOverride | string | The override code entered when applying a membership discount to the receipt. <span class="ir">??????????</span> |
MembershipLevelOverrideEmployee | string | An identifier of the employee who applied the membership override. |
GlobalDiscReason | string | The reason a global discount was applied to the receipt. |
GlobalDiscEmployee | string | An identifier of the employee who applied the global discount. |
GlobalDiscOverrideEmployee | string | An identifier of the employee who applied the global discount. |
<span class="api-gn">Response: SalesReceipts: DiscountCoupons</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
CouponNumber | string | An identifier of the coupon. |
CouponProgramName | string | The name of the coupon program which contains the coupon. |
CouponAmount | double | The coupon's discount amount. |
CouponPercent | double | The coupon's discount percentage. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesReceipts: DiscountCoupons</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: SalesReceipts</span> |
DestTaxArea | string | An identifier of the destination tax area of the receipt. |
SourceTaxArea | string | An identifier of the source tax area of the receipt. |
ReversingDocumentIdentifier | string | An identifier of this API document if being used to reverse a receipt. <span class="ir">??????????</span> |
ReversedDocumentIdentifier | string | An identifier of the API document being reversed if this API document is being used to reverse a receipt. <span class="ir">??????????</span> |
SaleTime | int32 | The time the sales receipt was created. <span class="ir">??????????</span> |
TaxExempt | boolean | An indicator as to whether or not the receipt is tax exempt. |
<span class="api-gn">Response: SalesReceipts: TaxExemptInfo</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
ADDRESS_1 | string | The first line of the tax exempt address. |
ADDRESS_2 | string | The second line of the tax exempt address. |
CHILD_NAME | string | <span class="ir">??????????</span> |
CITY | string | The city of the tax exempt address. |
COUNTRY | string | The country of the tax exempt address. |
FIRST_NAME | string | The first name of the person at the tax exempt address. |
LAST_NAME | string | The last name of the person at the tax exempt address. |
ORGANIZATION_NAME | string | The name of the organization at the tax exempt address. <span class="ir">??????????</span> |
PHONE | string | The phone number for the tax exempt address. |
POSTAL_CODE | string | The postal (zip) code for the tax exempt address. |
STATE | string | The state of the tax exempt address. |
TAX_EXEMPT_NUM | string | The tax exemption number for the address. |
TAX_EXEMPT_REASON | string | The reason the address is tax exempt. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesReceipts: TaxExemptInfo</span> |
<span class="api-gn">Response: SalesReceipts: SellInfo</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
Customer | string | An identifier of the sell to customer. |
LastName | string | The sell to customer's last name. |
FirstName | string | The sell to customer's first name. |
Address1 - 2 | string | These two fields are the lines (up to two) of the sell to customer's street address. |
PostalCode | string | The sell to customer's postal (zip) code. |
CountryCode | string | A code identifying the sell to customer's country. |
State | string | The sell to customer's state. |
City | string | The sell to customer's city. |
Phone1 - 4 | string | The phone numbers (up to four) for the sell to customer. |
Organization | string | The sell to customer's organization. |
Gender | string, enum | An indicator of the sell to customer's gender. Its value must be one of the following: "Unknown", "Male", "Female". |
Email | string | The sell to customer's email address. |
BirthdateText | string | The sell to customer;s birthdate as text. <span class="ir">??????????</span> |
WholesaleCustomer | boolean | An indicator as to whether or not the sell to customer is a wholesaler. |
TradingPartner | boolean | An indicator as to whether or not the sell to customer is a trading partner. |
<span class="api-gn">Response: SalesReceipts: SellInfo: Custom</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
CustomDate1 - 6 | string, datetime | These six fields are customizable date values for the sell to customer. |
CustomDecimal1 - 6 | double | These six fields are customizable floating-point number values for the sell to customer. |
CustomFlag1 - 6 | string | These six fields are customizable flags for the sell to customer. |
CustomLookup1 - 12 | string | These twelve fields are customizable lookup values for the sell to customer. |
CustomNumber1 - 6 | int32 | These six fields are customizable integer number values for the sell to customer. |
CustomText1 - 6 | string | These six fields are customizable text values for the sell to customer. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesReceipts: SellInfo: Custom</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesReceipts: SellInfo</span> |
<span class="api-gn">Response: SalesReceipts: BillInfo</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
Customer | string | An identifier of the bill to customer. |
LastName | string | The bill to customer's last name. |
FirstName | string | The bill to customer's first name. |
Address1 - 2 | string | These two fields are the lines (up to two) of the bill to customer's street address. |
PostalCode | string | The bill to customer's postal (zip) code. |
CountryCode | string | A code identifying the bill to customer's country. |
State | string | The bill to customer's state. |
City | string | The bill to customer's city. |
Phone1 - 4 | string | The phone numbers (up to four) for the bill to customer. |
Organization | string | The bill to customer's organization. |
Gender | string | The bill to customer's gender. Its value must be one of the following: "Unknown", "Male", "Female". |
Email | string | The bill to customer's email address. |
BirthdateText | string | The bill to customer;s birthdate as text. <span class="ir">??????????</span> |
WholesaleCustomer | boolean | An indicator as to whether or not the bill to customer is a wholesaler. |
TradingPartner | boolean | An indicator as to whether or not the bill to customer is a trading partner. |
<span class="api-gn">Response: SalesReceipts: BillInfo: Custom</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
CustomDate1 - 6 | string, datetime | These six fields are customizable date values for the bill to customer. |
CustomDecimal1 - 6 | double | These six fields are customizable floating-point number values for the bill to customer. |
CustomFlag1 - 6 | string | These six fields are customizable flags for the bill to customer. |
CustomLookup1 - 12 | string | These twelve fields are customizable lookup values for the bill to customer. |
CustomNumber2 - 6 | int32 | These five fields are customizable integer number values for the bill to customer. |
CustomText1 - 6 | string | These six fields are customizable text values for the bill to customer. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesReceipts: BillInfo: Custom</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesReceipts: BillInfo</span> |
<span class="api-gn">Response: SalesReceipts: ShipInfo</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
Customer | string | An identifier of the ship to customer. |
LastName | string | The ship to customer's last name. |
FirstName | string | The ship to customer's first name. |
Address1 - 2 | string | These two fields are the lines (up to two) of the ship to customer's street address. |
PostalCode | string | The ship to customer's postal (zip) code. |
CountryCode | string | A code identifying the ship to customer's country. |
State | string | The ship to customer's state. |
City | string | The ship to customer's city. |
Phone1 - 4 | string | The phone numbers (up to four) for the ship to customer. |
Organization | string | The ship to customer's organization. |
Gender | string | The ship to customer's gender. |
Email | string | The ship to customer's email address. |
BirthdateText | string | The ship to customer's birthdate as text. <span class="ir">??????????</span> |
WholesaleCustomer | boolean | An indicator as to whether or not the ship to customer is a wholesaler. |
TradingPartner | boolean | An indicator as to whether or not the ship to customer is a trading partner. |
<span class="api-gn">Response: SalesReceipts: ShipInfo: Custom</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
CustomDate1 - 6 | string, datetime | These six fields are customizable date values for the ship to customer. |
CustomDecimal1 - 6 | double | These six fields are customizable floating-point number values for the ship to customer. |
CustomFlag1 - 6 | string | These six fields are customizable flags for the ship to customer. |
CustomLookup1 - 12 | string | These twelve fields are customizable lookup values for the ship to customer. |
CustomNumber2 - 6 | int32 | These five fields are customizable integer number values for the ship to customer. |
CustomText1 - 6 | string | These six fields are customizable text values for the ship to customer. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesReceipts: ShipInfo: Custom</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesReceipts: ShipInfo</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: SalesReceipts</span> |
Notes | string | Misc. notes about the sales receipt. |
CustomDate1 - 4 | string, datetime | These four fields are customizable date values for the receipt. |
CustomDecimal1 - 4 | double | These four fields are customizable floating-point number values for the receipt. |
CustomFlag1 - 4 | string | These four fields are customizable flags for the receipt. |
CustomLookup1 - 8 | string | These eight fields are customizable lookup values for the receipt. |
CustomNumber1 - 4 | int32 | These four fields are customizable integer number values for the receipt. |
CustomText1 - 8 | string | These eight fields are customizable text values for the receipt. |
<span class="api-gn">Response: SalesReceipts: ReceiptCharges</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
LineNo | int32 | The line in the receipt where the charge occurs. |
ChargeType | string, enum | An indicator of the charge's type. Its value must be one of the following: "GiftCard", "GiftCert", "Credit", "SOItemDeposit", "SODeposit", "HouseCharge". |
Amount | double | The charge amount. |
AccountNum | string | An identifier of the account to which the charge was made. |
ExtTransactionId | string | <span class="ir">??????????</span> |
CustomDate1 - 2 | string, datetime | These two fields are customizable date values for the charge. |
CustomDecimal1 - 2 | double | These two fields are customizable floating-point number values for the charge. |
CustomFlag1 - 2 | string | These two fields are customizable flags for the charge. |
CustomLookup1 - 4 | string | These four fields are customizable lookup values for the charge. |
CustomNumber1 - 4 | int32 | These two fields are customizable integer number values for the charge. |
CustomText1 | string | A customizable text value for the charge. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesReceipts: ReceiptCharges</span> |
<span class="api-gn">Response: SalesReceipts: ReceiptFees</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
LineNo | int32 | The line in the receipt where the fee occurs. |
ItemChargeCode | string | <span class="ir">??????????</span> |
ItemChargeType | string, enum | An indicator of the fee's type. Its value must be one of the following: "Empty", "Shipping", "Insurance", "RestockingFee". |
Qty | double | The quntity of the item to which the fee is being applied. <span class="ir">??????????</span> |
UnitPrice | double | The unit price of the item to which the fee is being applied. |
ExtPrice | double | The extended price of the item to which the fee is being applied. |
ExtPriceWithTax | double | The extended price including tax of the item to which the fee is being applied. |
TaxCategoryCode | string | An identifier of the tax category which applies to the item. |
LargeMemo | string | Misc. notes about the fee. |
Spread | boolean | An indicator as to whether or not the fee is to be applied across all items in the receipt. |
SpreadType | string, enum | An indicator of how the fee will be spread. Its value must be one of the following: "Price", "Weight". |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesReceipts: ReceiptFees</span> |
<span class="api-gn">Response: SalesReceipts: Items</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
LineNo | int32 | The number of the line in the receipt where the item occurs. |
ItemIdentifier | string | An identifier of the item.|
ItemType | string, enum | An indicator of the item's type. Its value must be one of the following: "Regular", "Membership", "StoreCreditAdjustment", "RentalQtyAdjustment", "GiftCardAdjustment", "RentalFees", "TokensAdjustment", "TokensRedeem", "LoyaltyRewardsAdjustment", "VirtualGiftCard", "PhysicalGiftCard", "Charge", "Unknown". |
RmaNo | string | The item's return merchandise authorization number for the sales receipt. |
SOItemRMANo | string | The item's return merchandise authorization number for the sales order. |
<span class="api-gn">Response: SalesReceipts: Items: ItemDetails</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
PLU | int32 | The item's product lookup number.|
CLU | string | The item's custom lookup number.|
UPC | string | The item's universal product code.|
StyleNo | string | An identifier of the style which contains the item. |
ExternalId | string | An identifier of the item used when interacting with an external system. |
ItemDescription | string | A description of the item. |
Attribute1 - 3 | string | These three fields are the item’s attributes. |
ItemType | string, enum | An indicator of the item's type. Its value must be one of the following: "Style", "SingleItem", "ServiceItem". |
<span class="api-gn">Response: SalesReceipts: Items: ItemDetails: DCSS</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
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
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesReceipts: Items: ItemDetails: DCSS</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: SalesReceipts: Items: ItemDetails</span> |
BasePrice | double | The item's base price. |
<span class="api-gn">Response: SalesReceipts: Items: ItemDetails: Style</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
CustomDate1 - 12 | string, datetime | These twelve fields are customizable date values for the item's style. |
CustomDecimal1 - 12 | double | These twelve fields are customizable floating-point number values for the item's style. |
CustomFlag1 - 18 | string | These eighteen fields are customizable flags for the item's style. |
CustomLookup1 - 12 | string | These twelve fields are customizable lookup values for the item's style. |
CustomNumber1 - 12 | int32 | These twelve fields are customizable integer number values for the item's style. |
CustomText1 - 12| string | These twelve fields are customizable text values for the item's style. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesReceipts: Items: ItemDetails: Style</span> |
<span class="api-gn">Response: SalesReceipts: Items: ItemDetails: Item</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
SalesOrderDTN | int64 | The sales order's transaction number on the device used. |
SalesOrderNo | string | An identifier of the sales order. |
SalesOrderDateTime | string, date-time | The timestamp of the sales order. <span class="ir">??????????</span> |
ListOrder | int32 | The position of the item in the user interface. <span class="ir">??????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesReceipts: Items: ItemDetails: Item</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesReceipts: Items: ItemDetails</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: SalesReceipts: Items</span> |
Qty | double | The quantity purchased of the item. |
PriceLevelCode | string | An identifier of the item's price level. |
PriceChangeReasonCode | string | An identifier of the reason for the item's change of price. <span class="ir">??????????</span> |
InventoryPrice | double | The item's inventory price. <span class="ir">??????????</span> |
InitialOriginalPrice | double | The item's initiali original pirce. |
MembershipDiscount | double | The item's membership discount. |
MembershipLevel | string | The membership level the customer must be to qualify for the item's membership discount. |
SalePrice | double | The item's sale price. |
LineExtDiscountAmount | double | The item's extended line item discount amount. |
LineUnitDiscountAmount | double | The item's unit line item discount amount. |
LineDiscountPercent | double | The item's line item discount percentage. |
LineDiscReason | string | The reason a line item dicount was applied to the item. |
CustomOriginalDiscountReason | string | <span class="ir">??????????</span> |
GlobalExtDiscountAmount | double | The item's extended global discount amount. |
GlobalUnitDiscountAmount | double | The item's unit global discount amount. |
UnitAmount | double | The item's unit amount. |
ExtAmount | double | The item's extended amount. |
TaxExtAmount | double | The item's extended amount which is taxable. <span class="ir">??????????</span> |
ItemFeesAmount | double | The item's fee amount. |
PricesIncludeTaxes | boolean | An indicator as to whether the item's proces include taxes. |
<span class="api-gn">Response: SalesReceipts: Items: DiscountCoupons</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
CouponNumber | string | An identifier of the coupon. |
CouponProgramName | string | The name of the coupon program to which the coupon belongs. |
CouponAmount | double | The coupon's amount. |
CouponPercent | double | The coupon's percentage. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesReceipts: Items: DiscountCoupons</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: SalesReceipts: Items</span> |
Notes | string | Misc. notes about the item. |
ReturnReasonCode | string | An identifier of the reason the item was returned. |
OriginalReceiptNum | int32 | An identifier of the original receipt containing the item. |
OriginalLocation | string | An identifier of the location where the item was originaly purchased. |
ReturnValue | double | The item's return value. <span class="ir">??????????</span> |
IsManuallyReturn | boolean | An indicator as to whether or not <span class="ir">??????????</span> |
IsShipToItem | boolean | An indicator as to whether or not the item is a ship to item. |
OrigReceiptItemId | string, guid | A unique identifier of the item in the original receipt. |
OrigReceiptItemLineNo | int32 | The number of the line in the original receipt where the item occurs. |
CustomDate1 - 4 | string, datetime | These four fields are customizable date values for the item. |
CustomDecimal1 - 2 | double | These two fields are customizable floating-point number values for the item. |
CustomFlag1 - 2 | string | These two fields are customizable flags for the item. |
CustomLookup1 - 4 | string | These four fields are customizable lookup values for the item. |
CustomNumber1 - 2 | int32 | These two fields are customizable integer number values for the item. |
CustomText1 - 2| string | These two fields are customizable text values for the item. |
<span class="api-gn">Response: SalesReceipts: Items: ItemFees</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
LineNo | int32 | The number of the line in the receipt where the fee occurs. |
GlobalChargeLineNo | int32 | The number of the line in the global charge area of the receipt where the fee occurs. <span class="ir">??????????</span> |
ItemChargeCode | string | An identifier of the fee's charge. <span class="ir">??????????</span> |
ItemChargeType | string, enum | An indicator of the fee's charge type. Its value must be one of the following: "Empty", "Shipping", "Insurance", "RestockingFee". |
Qty | double | The quantity of the item to which the fee is being applied. <span class="ir">??????????</span> |
UnitPrice | double | The unit price of the item to which the fee is being applied. <span class="ir">??????????</span> |
ExtPrice | double | The extended price of the item to which the fee is being applied. <span class="ir">??????????</span> |
ExtPriceWIthTax | double | The extended price, including tax, of the item to which the fee is being applied. <span class="ir">??????????</span> |
TaxCategoryCode | string | An identifier of the tax category of the item to which the fee is being applied. <span class="ir">??????????</span> |
Spread | boolean | An indicator as to whether or not <span class="ir">??????????</span> |
LargeMemo | string | Misc. notes about the fee. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesReceipts: Items: ItemFees</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: SalesReceipts: Items</span> |
TaxExempt | boolean | An indicator as to whether or not the item is tax exempt. |
TaxCategoryCode | string | An identifier of the item's tax category. |
<span class="api-gn">Response: SalesReceipts: Items: Taxes</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
TaxAmount | double | The tax amount. <span class="ir">??????????</span> |
TaxPercent | double | The tax percentage. <span class="ir">??????????</span> |
DestTaxZoneCode | string | An identifier of the destination tax zone. |
TaxCategoryCode | string | An identifier of the tax's tax category. |
SourceTaxZoneCode | string | An identifier of the source tax zone. |
TaxJurisdictionCode | string | An identifier of the tax's tax jurisdiction. |
TaxCredit | double | <span class="ir">??????????</span> |
TaxCreditStoreCredit | double | <span class="ir">??????????</span> |
TaxExempt | boolean | An indicator as to whether or not <span class="ir">??????????</span> |
IsCustomTaxPercent | boolean | An indicator as to whether or not this is a custom tax percentage. <span class="ir">??????????</span> |
IsCustomTaxAmount | boolean | An indicator as to whether or not this is a custom tax amount. <span class="ir">??????????</span> |
CustomFlag1 | boolean | A customizable flag for the tax. |
CustomNumber1 | int32 | A customizable integer value for the tax. |
CustomDecimal1 | double | A customizable floating-point value for the tax. |
CustomLookup1 | string | A customizable lookup value for the tax. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesReceipts: Items: Taxes</span> |
<span class="api-gn">Response: SalesReceipts: Items: TaxExemptInfo</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
ADDRESS_1 | string | The first line of the tax exempt address. |
ADDRESS_2 | string | The second line of the tax exempt address. |
CHILD_NAME | string | <span class="ir">??????????</span> |
CITY | string | The city of the tax exempt address. |
COUNTRY | string | The country of the tax exempt address. |
FIRST_NAME | string | The first name of the person at the tax exempt address. |
LAST_NAME | string | The last name of the person at the tax exempt address. |
ORGANIZATION_NAME | string | The name of the organization at the tax exempt address. <span class="ir">??????????</span> |
PHONE | string | The phone number for the tax exempt address. |
POSTAL_CODE | string | The postal (zip) code for the tax exempt address. |
STATE | string | The state of the tax exempt address. |
TAX_EXEMPT_NUM | string | The tax exemption number for the address. |
TAX_EXEMPT_REASON | string | The reason the address is tax exempt. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesReceipts: Items: TaxExemptInfo</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: SalesReceipts: Items</span> |
ShipMethod | string | The shipping method used for the item. |
TrackingNumber | string | The item's shipment tracking number. |
<span class="api-gn">Response: SalesReceipts: Items: SalesOrderItem</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
SalesOrderDTN | int64 | The sales order's transaction number on the device used. |
SalesOrderNo | string | An identifier of the sales order. |
SalesOrderDateTime | string, date-time | The timestamp of the sales order. <span class="ir">??????????</span> |
ListOrder | int32 | The position of the item in the user interface. <span class="ir">??????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesReceipts: Items: SalesOrderItem</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: SalesReceipts: Items</span> |
SerialNumber | string | Ann identifier of the item. <span class="ir">??????????</span> |
SerialNumberCustomText1 - 2| string | These two fields are customizable text values for the serial number. <span class="ir">??????????</span> |
SerialNumberCustomNumber1 | int32 | A customizable integer value for the serial number. <span class="ir">??????????</span> |
SerialNumberCustomDate1 | string, datetime | A customizable date value for the serial number. <span class="ir">??????????</span> |
SerialNumberCustomFlag1 | boolean | A customizable flag for the serial number. <span class="ir">??????????</span> |
QtyStatus | string | The status of the item's quantity. <span class="ir">??????????</span> |
COGS | double | The item's total cost of goods sold. <span class="ir">??????????</span> |
UnitCOGS | double | The item's unit cost of goods sold. <span class="ir">??????????</span> |
<span class="api-gn">Response: SalesReceipts: Items: Promo</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries. </span> |
Name | string | The name of the promotion. |
Description | string | A description of the promotion. |
Rank | int32 | <span class="ir">??????????</span> |
Type | string, enum | An indicator of the promotion type. Its value must be one of the following: "BuyXGetY", "BuyXGetDiscount", "SpendMoreGetMore", "SalePricePromotion", "BuyMoreGetMore". |
ItemType | string, enum | An indicator of <span class="ir">??????????</span>. Its value must be one of the following: "BuyItem", "GetItem". |
Qty | double | <span class="ir">??????????</span> |
Amount | double | <span class="ir">??????????</span> |
Percent | double | <span class="ir">??????????</span> |
ListOrder | int32 | The position of the promotion in the user interface. <span class="ir">??????????</span> |
PromoReturns | boolean | An indicator as to whether or not items maybe returned under this promotion. <span class="ir">??????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesReceipts: Items: Promo</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesReceipts: Items</span> |
<span class="api-gn">Response: SalesReceipts: Payments</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
LineNo | int32 | The number of the line in the receipt where the payment occurs. |
PaymentMethod | string | An identifier of the payment method used. |
PaymentAmount | double | The amount of the payment. |
AccountNumber | string | An identifier of the account used for the payment. |
AccountType | string, enum | An indicator of the type of account used for the payment. Its value must be one of the following: "Cash", "Check", "CreditCard", "DepositUsed", "StoreCredit", "GiftCard", "GiftCertificate", "StoreCharge", "Coupon", "FreeFormGiftCertificate", "Undefined", "Fictions", "DebitCard", "Token", "CreditCardCredit", "HouseCharge", "Universal", "UniversalCredit", "InsufficientFunds", "Terms", "OfflinePayment", "CashMachine", "Unknown". |
ChangeAmount | double | The amount of change returned to the customer. |
CurrencyCode | string | An indicator of the type of currency used for the payment. |
PaymentProcessingRefNum | string | <span class="ir">??????????</span> |
CardholderFirstName | string | The first name of the cardholder for thew card used for the payment. |
CardholderLastName | string | The last name of the cardholder for the card used for the payment. |
CardholderAddress1 -  2 | string | The lines (up to two) of the street address of the cardholder for the card used for the payment. |
CardholderCity | string | The city of the cardholder for the card used for the payment. |
CardholderState | string | The state of the cardholder for the card used for the payment. |
CardholderPostalCode | string | The postal (zip) code of the cardholder for the card used for the payment. |
CardEnterMethod | string, enum | An indicator of the method used to enter the information about the card used for the payment. Its value must be one of the following: "None", "Insert", "Tap", "Keyed", "Scan", "Unknown". |
CardOrderId | string | <span class="ir">??????????</span> |
CardTransactionId | string | <span class="ir">??????????</span> |
CardType | string, enum | An indicator of the type of card used for the payment. Its value must be one of the following: "Undefined", "Visa", "Master", "Discover", "Amex", "JCB", "Solo", "Maestro", "Cirrus", "Switch", "Laser", "Other", "VisaDebit", "Debit". |
CustomDate1 - 4 | string, datetime | These four fields are customizable date values for the payment. |
CustomDecimal1 - 4 | double | These four fields are customizable floating-point number values for the payment. |
CustomFlag1 - 4 | string | These four fields are customizable flags for the payment. |
CustomLookup1 - 2 | string | These two fields are customizable lookup values for the payment. |
CustomNumber1 - 4 | int32 | These four fields are customizable integer number values for the payment. |
CustomText1 - 12 | string | These twelve fields are customizable text values for the payment. |
<span class="api-gn">Response: SalesReceipts: Payments: DepositHistory</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
LineNo | int32 | The number of the line in the receipt where the deposit occurs. |
PaymentMethod | string | An identifier of the payment method used for the deposit. |
PaymentAmount | double | The deposit amount. |
AccountNumber | string | An identifier of the account used for the deposit. |
AccountType | string, enum | An indicator of the type of account used for the deposit. Its value must be one of the following: "Cash", "Check", "CreditCard", "DepositUsed", "StoreCredit", "GiftCard", "GiftCertificate", "StoreCharge", "Coupon", "FreeFormGiftCertificate", "Undefined", "Fictions", "DebitCard", "Token", "CreditCardCredit", "HouseCharge", "Universal", "UniversalCredit", "InsufficientFunds", "Terms", "OfflinePayment", "CashMachine", "Unknown". |
ChangeAmount | double | The amount of change returned to the customer. |
CurrencyCode | string | An indicator of the type of currency used for the deposit. |
PaymentProcessingRefNum | string | <span class="ir">??????????</span> |
CardholderFirstName | string | The first name of the cardholder for thew card used for the deposit. |
CardholderLastName | string | The last name of the cardholder for the card used for the deposit. |
CardholderAddress1 -  2 | string | The lines (up to two) of the street address of the cardholder for the card used for the deposit. |
CardholderCity | string | The city of the cardholder for the card used for the deposit. |
CardholderState | string | The state of the cardholder for the card used for the deposit. |
CardholderPostalCode | string | The postal (zip) code of the cardholder for the card used for the deposit. |
CardEnterMethod | string, enum | An indicator of the method used to enter the information about the card used for the deposit. Its value must be one of the following: "None", "Swipe", "Insert", "Tap", "Keyed", "Scan", "Unknown". |
CardOrderId | string | <span class="ir">??????????</span> |
CardTransactionId | string | <span class="ir">??????????</span> |
CardType | string, enum | An indicator of the type of card used for the deposit. Its value must be one of the following: "Undefined", "Visa", "Master", "Discover", "Amex", "JCB", "Solo", "Maestro", "Cirrus", "Switch", "Laser", "Other", "VisaDebit", "Debit". |
CustomDate1 - 4 | string, datetime | These four fields are customizable date values for the deposit. |
CustomDecimal1 - 4 | double | These four fields are customizable floating-point number values for the deposit. |
CustomFlag1 - 4 | string | These four fields are customizable flags for the deposit. |
CustomLookup1 - 2 | string | These two fields are customizable lookup values for the deposit. |
CustomNumber1 - 4 | int32 | These four fields are customizable integer number values for the deposit. |
CustomText1 - 12 | string | These twelve fields are customizable text values for the deposit. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesReceipts: Payments: DepositHistory</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesReceipts: Payments</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: SalesReceipts</span> |
DeviceIdentifier | string | An identifier of the device on which the sales recept was created. <span class="ir">??????????</span> |
AcknowledgementDate | string, datetime | <span class="ir">??????????</span> |
AcknowledgementByUserIdentifier | string | An identifier of the user who <span class="ir">??????????</span> |
TransactionAcknowledgementIdentifier | string | An identifier of <span class="ir">??????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: SalesReceipts</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response</span> |

### Schema {#SuccessfulResponseSchema}
 
Below is the JSON source for the schema of a successful response to the export request as described above.

~~~
{
   "SalesReceiptExportToJson_get.ApiDocumentType":{
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
            "$ref":"#/definitions/SalesReceiptExportToJson_get.ResponseType"
         }
      }
   },
   "SalesReceiptExportToJson_get.ResponseType":{
      "type":"object",
      "properties":{
         "SalesReceipts":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/SalesReceiptExportToJson_get.SalesReceiptsType"
            }
         }
      }
   },
   "SalesReceiptExportToJson_get.SalesReceiptsType":{
      "type":"object",
      "properties":{
         "SalesReceiptNo":{
            "format":"int32",
            "type":"integer"
         },
         "RecModified":{
            "format":"date-time",
            "type":"string"
         },
         "DeviceTransactionNumber":{
            "format":"int64",
            "type":"integer"
         },
         "AltDeviceTransactionNumber":{
            "type":"string"
         },
         "SalesReceiptId":{
            "format":"uuid",
            "type":"string",
            "example":"00000000-0000-0000-0000-000000000000"
         },
         "ReceiptCode":{
            "type":"string"
         },
         "ReceiptIdentifier":{
            "type":"string"
         },
         "PostedDateTime":{
            "format":"date-time",
            "type":"string"
         },
         "Location":{
            "type":"string"
         },
         "TransactionType":{
            "enum":[
               "Default",
               "Sale",
               "Return",
               "Mixed",
               "Reversed",
               "Aborted",
               "NoItems",
               "Reversal",
               "Trade",
               "Deposit",
               "Adjustment"
            ],
            "type":"string"
         },
         "Associated":{
            "type":"string"
         },
         "Cashier":{
            "type":"string"
         },
         "TotalQty":{
            "format":"double",
            "type":"number"
         },
         "InventoryAmount":{
            "format":"double",
            "type":"number"
         },
         "MembershipDiscount":{
            "format":"double",
            "type":"number"
         },
         "TotalDiscountAmount":{
            "format":"double",
            "type":"number"
         },
         "TotalItemsShippingAmount":{
            "format":"double",
            "type":"number"
         },
         "TotalItemsFeeAmount":{
            "format":"double",
            "type":"number"
         },
         "TotalTaxAmount":{
            "format":"double",
            "type":"number"
         },
         "TotalAmount":{
            "format":"double",
            "type":"number"
         },
         "MembershipCode":{
            "format":"double",
            "type":"number"
         },
         "MembershipLevel":{
            "type":"string"
         },
         "MembershipLevelOverride":{
            "type":"string"
         },
         "MembershipLevelOverrideEmployee":{
            "type":"string"
         },
         "GlobalDiscReason":{
            "type":"string"
         },
         "GlobalDiscEmployee":{
            "type":"string"
         },
         "GlobalDiscOverrideEmployee":{
            "type":"string"
         },
         "DiscountCoupons":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/SalesReceiptExportToJson_get.DiscountCouponsType"
            }
         },
         "DestTaxArea":{
            "type":"string"
         },
         "SourceTaxArea":{
            "type":"string"
         },
         "ReversingDocumentIdentifier":{
            "type":"string"
         },
         "ReversedDocumentIdentifier":{
            "type":"string"
         },
         "SaleTime":{
            "format":"int32",
            "type":"integer"
         },
         "TaxExempt":{
            "type":"boolean"
         },
         "TaxExemptInfo":{
            "$ref":"#/definitions/SalesReceiptExportToJson_get.TaxExemptInfoType"
         },
         "SellInfo":{
            "$ref":"#/definitions/SalesReceiptExportToJson_get.SellInfoType"
         },
         "BillInfo":{
            "$ref":"#/definitions/SalesReceiptExportToJson_get.BillInfoType"
         },
         "ShipInfo":{
            "$ref":"#/definitions/SalesReceiptExportToJson_get.ShipInfoType"
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
         "ReceiptCharges":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/SalesReceiptExportToJson_get.ReceiptChargesType"
            }
         },
         "ReceiptFees":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/SalesReceiptExportToJson_get.ReceiptFeesType"
            }
         },
         "Items":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/SalesReceiptExportToJson_get.ItemsType"
            }
         },
         "Payments":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/SalesReceiptExportToJson_get.PaymentsType"
            }
         },
         "DeviceIdentifier":{
            "type":"string"
         },
         "AcknowledgementDate":{
            "format":"date-time",
            "type":"string"
         },
         "AcknowledgementByUserIdentifier":{
            "type":"string"
         },
         "TransactionAcknowledgementIdentifier":{
            "type":"string"
         }
   },
   "SalesReceiptExportToJson_get.DiscountCouponsType":{
      "type":"object",
      "properties":{
         "CouponNumber":{
            "type":"string"
         },
         "CouponProgramName":{
            "type":"string"
         },
         "CouponAmount":{
            "format":"double",
            "type":"number"
         },
         "CouponPercent":{
            "format":"double",
            "type":"number"
         }
      }
   },
   "SalesReceiptExportToJson_get.TaxExemptInfoType":{
      "type":"object",
      "properties":{
         "ADDRESS_1":{
            "type":"string"
         },
         "ADDRESS_2":{
            "type":"string"
         },
         "CHILD_NAME":{
            "type":"string"
         },
         "CITY":{
            "type":"string"
         },
         "COUNTRY":{
            "type":"string"
         },
         "FIRST_NAME":{
            "type":"string"
         },
         "LAST_NAME":{
            "type":"string"
         },
         "ORGANIZATION_NAME":{
            "type":"string"
         },
         "PHONE":{
            "type":"string"
         },
         "POSTAL_CODE":{
            "type":"string"
         },
         "STATE":{
            "type":"string"
         },
         "TAX_EXEMPT_NUM":{
            "type":"string"
         },
         "TAX_EXEMPT_REASON":{
            "type":"string"
         }
      }
   },
   "SalesReceiptExportToJson_get.SellInfoType":{
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
         "Address1":{
            "type":"string"
         },
         "Address2":{
            "type":"string"
         },
         "PostalCode":{
            "type":"string"
         },
         "CountryCode":{
            "type":"string"
         },
         "State":{
            "type":"string"
         },
         "City":{
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
         "Phone4":{
            "type":"string"
         },
         "Organization":{
            "type":"string"
         },
         "Gender":{
            "enum":[
               "Unknown",
               "Male",
               "Female"
            ],
            "type":"string"
         },
         "Email":{
            "type":"string"
         },
         "BirthdateText":{
            "type":"string"
         },
         "WholesaleCustomer":{
            "type":"boolean"
         },
         "TradingPartner":{
            "type":"boolean"
         },
         "Custom":{
            "$ref":"#/definitions/SalesReceiptExportToJson_get.CustomType"
         }
      }
   },
   "SalesReceiptExportToJson_get.BillInfoType":{
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
         "Address1":{
            "type":"string"
         },
         "Address2":{
            "type":"string"
         },
         "PostalCode":{
            "type":"string"
         },
         "CountryCode":{
            "type":"string"
         },
         "State":{
            "type":"string"
         },
         "City":{
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
         "Phone4":{
            "type":"string"
         },
         "Organization":{
            "type":"string"
         },
         "Gender":{
            "type":"string"
         },
         "Email":{
            "type":"string"
         },
         "BirthdateText":{
            "type":"string"
         },
         "WholesaleCustomer":{
            "type":"boolean"
         },
         "TradingPartner":{
            "type":"boolean"
         },
         "Custom":{
            "$ref":"#/definitions/SalesReceiptExportToJson_get.CustomType1"
         }
      }
   },
   "SalesReceiptExportToJson_get.ShipInfoType":{
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
         "Address1":{
            "type":"string"
         },
         "Address2":{
            "type":"string"
         },
         "PostalCode":{
            "type":"string"
         },
         "CountryCode":{
            "type":"string"
         },
         "State":{
            "type":"string"
         },
         "City":{
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
         "Phone4":{
            "type":"string"
         },
         "Organization":{
            "type":"string"
         },
         "Gender":{
            "type":"string"
         },
         "Email":{
            "type":"string"
         },
         "BirthdateText":{
            "type":"string"
         },
         "WholesaleCustomer":{
            "type":"boolean"
         },
         "TradingPartner":{
            "type":"boolean"
         },
         "Custom":{
            "$ref":"#/definitions/SalesReceiptExportToJson_get.CustomType2"
         }
      }
   },
   "SalesReceiptExportToJson_get.ReceiptChargesType":{
      "type":"object",
      "properties":{
         "LineNo":{
            "format":"int32",
            "type":"integer"
         },
         "ChargeType":{
            "enum":[
               "GiftCard",
               "GiftCert",
               "Credit",
               "SOItemDeposit",
               "SODeposit",
               "HouseCharge"
            ],
            "type":"string"
         },
         "Amount":{
            "format":"double",
            "type":"number"
         },
         "AccountNum":{
            "type":"string"
         },
         "ExtTransactionId":{
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
         "CustomDecimal1":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal2":{
            "format":"double",
            "type":"number"
         },
         "CustomFlag1":{
            "type":"boolean"
         },
         "CustomFlag2":{
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
         "CustomNumber1":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber2":{
            "format":"int32",
            "type":"integer"
         },
         "CustomText1":{
            "type":"string"
         }
      }
   },
   "SalesReceiptExportToJson_get.ReceiptFeesType":{
      "type":"object",
      "properties":{
         "LineNo":{
            "format":"int32",
            "type":"integer"
         },
         "ItemChargeCode":{
            "type":"string"
         },
         "ItemChargeType":{
            "enum":[
               "Empty",
               "Shipping",
               "Insurance",
               "RestockingFee"
            ],
            "type":"string"
         },
         "Qty":{
            "format":"double",
            "type":"number"
         },
         "UnitPrice":{
            "format":"double",
            "type":"number"
         },
         "ExtPrice":{
            "format":"double",
            "type":"number"
         },
         "ExtPriceWithTax":{
            "format":"double",
            "type":"number"
         },
         "TaxCategoryCode":{
            "type":"string"
         },
         "LargeMemo":{
            "type":"string"
         },
         "Spread":{
            "type":"boolean"
         },
         "SpreadType":{
            "enum":[
               "Price",
               "Weight"
            ],
            "type":"string"
         }
      }
   },
   "SalesReceiptExportToJson_get.ItemsType":{
      "type":"object",
      "properties":{
         "LineNo":{
            "format":"int32",
            "type":"integer"
         },
         "ItemIdentifier":{
            "type":"string"
         },
         "ItemType":{
            "enum":[
               "Regular",
               "Membership",
               "StoreCreditAdjustment",
               "RentalQtyAdjustment",
               "GiftCardAdjustment",
               "RentalFees",
               "TokensAdjustment",
               "TokensRedeem",
               "LoyaltyRewardsAdjustment",
               "VirtualGiftCard",
               "PhysicalGiftCard",
               "Charge",
               "Unknown"
            ],
            "type":"string"
         },
         "RmaNo":{
            "type":"string"
         },
         "SOItemRMANo":{
            "type":"string"
         },
         "ItemDetails":{
            "$ref":"#/definitions/SalesReceiptExportToJson_get.ItemDetailsType"
         },
         "Qty":{
            "format":"double",
            "type":"number"
         },
         "PriceLevelCode":{
            "type":"string"
         },
         "PriceChangeReasonCode":{
            "type":"string"
         },
         "InventoryPrice":{
            "format":"double",
            "type":"number"
         },
         "InitialOriginalPrice":{
            "format":"double",
            "type":"number"
         },
         "MembershipDiscount":{
            "format":"double",
            "type":"number"
         },
         "MembershipLevel":{
            "type":"string"
         },
         "SalePrice":{
            "format":"double",
            "type":"number"
         },
         "LineExtDiscountAmount":{
            "format":"double",
            "type":"number"
         },
         "LineUnitDiscountAmount":{
            "format":"double",
            "type":"number"
         },
         "LineDiscountPercent":{
            "format":"double",
            "type":"number"
         },
         "LineDiscReason":{
            "type":"string"
         },
         "CustomOriginalDiscountReason":{
            "type":"string"
         },
         "GlobalExtDiscountAmount":{
            "format":"double",
            "type":"number"
         },
         "GlobalUnitDiscountAmount":{
            "format":"double",
            "type":"number"
         },
        "UnitAmount":{
               "format":"double",
               "type":"number"
            },
          "ExtAmount":{
               "format":"double",
               "type":"number"
            },
         "TaxExtAmount":{
            "format":"double",
            "type":"number"
         },
         "ItemFeesAmount":{
            "format":"double",
            "type":"number"
         },
         "PricesIncludeTaxes":{
            "type":"boolean"
         },
         "DiscountCoupons":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/SalesReceiptExportToJson_get.DiscountCouponsType1"
            }
         },
         "Notes":{
            "type":"string"
         },
         "ReturnReasonCode":{
            "type":"string"
         },
         "OriginalReceiptNum":{
            "format":"int32",
            "type":"integer"
         },
         "OriginalLocation":{
            "type":"string"
         },
         "ReturnValue":{
            "format":"double",
            "type":"number"
         },
         "IsManuallyReturn":{
            "type":"boolean"
         },
         "IsShipToItem":{
            "type":"boolean"
         },
         "OrigReceiptItemId":{
            "format":"uuid",
            "type":"string",
            "example":"00000000-0000-0000-0000-000000000000"
         },
         "OrigReceiptItemLineNo":{
            "format":"int32",
            "type":"integer"
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
         "CustomDecimal1":{
            "format":"double",
            "type":"number"
         },
         "CustomDecimal2":{
            "format":"double",
            "type":"number"
         },
         "CustomFlag1":{
            "type":"boolean"
         },
         "CustomFlag2":{
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
         "CustomNumber1":{
            "format":"int32",
            "type":"integer"
         },
         "CustomNumber2":{
            "format":"int32",
            "type":"integer"
         },
         "CustomText1":{
            "type":"string"
         },
         "CustomText2":{
            "type":"string"
         },
         "ItemFees":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/SalesReceiptExportToJson_get.ItemFeesType"
            }
         },
         "TaxExempt":{
            "type":"boolean"
         },
         "TaxCategoryCode":{
            "type":"string"
         },
         "Taxes":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/SalesReceiptExportToJson_get.TaxesType"
            }
         },
         "TaxExemptInfo":{
            "$ref":"#/definitions/SalesReceiptExportToJson_get.TaxExemptInfoType1"
         },
         "ShipMethod":{
            "type":"string"
         },
         "TrackingNumber":{
            "type":"string"
         },
         "SalesOrderItem":{
            "$ref":"#/definitions/SalesReceiptExportToJson_get.SalesOrderItemType"
         },
         "SerialNumber":{
            "type":"string"
         },
         "SerialNumberCustomText1":{
            "type":"string"
         },
         "SerialNumberCustomText2":{
            "type":"string"
         },
         "SerialNumberCustomNumber1":{
            "format":"int32",
            "type":"integer"
         },
         "SerialNumberCustomDate1":{
            "format":"date-time",
            "type":"string"
         },
         "SerialNumberCustomFlag1":{
            "type":"boolean"
         },
         "QtyStatus":{
            "type":"string"
         },
         "COGS":{
            "format":"double",
            "type":"number"
         },
         "UnitCOGS":{
            "format":"double",
            "type":"number"
         },
         "Promo":{
            "type":"array",
            "items":{
               "$ref":"#/definitions/SalesReceiptExportToJson_get.PromoType"
            }
         }
      }
   },
   "SalesReceiptExportToJson_get.PaymentsType":{
      "type":"object",
      "properties":{
         "LineNo":{
            "format":"int32",
            "type":"integer"
         },
         "PaymentMethod":{
            "type":"string"
         },
         "PaymentAmount":{
            "format":"double",
            "type":"number"
         },
         "AccountNumber":{
            "type":"string"
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
         "ChangeAmount":{
            "format":"double",
            "type":"number"
         },
         "CurrencyCode":{
            "type":"string"
         },
         "PaymentProcessingRefNum":{
            "type":"string"
         },
         "CardholderFirstName":{
            "type":"string"
         },
         "CardholderLastName":{
            "type":"string"
         },
         "CardholderAddress1":{
            "type":"string"
         },
         "CardholderAddress2":{
            "type":"string"
         },
         "CardholderCity":{
            "type":"string"
         },
         "CardholderState":{
            "type":"string"
         },
         "CardholderPostalCode":{
            "type":"string"
         },
         "CardEnterMethod":{
            "enum":[
               "None",
               "Insert",
               "Tap",
               "Keyed",
               "Scan",
               "Unknown"
            ],
            "type":"string"
         },
         "CardOrderId":{
            "type":"string"
         },
         "CardTransactionId":{
            "type":"string"
         },
         "CardType":{
            "enum":[
               "Undefined",
               "Visa",
               "Master",
               "Discover",
               "Amex",
               "JCB",
               "Solo",
               "Maestro",
               "Cirrus",
               "Switch",
               "Laser",
               "Other",
               "VisaDebit",
               "Debit"
            ],
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
         "CustomLookup1":{
            "type":"string"
         },
         "CustomLookup2":{
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
         "DepositHistory":{
            "$ref":"#/definitions/SalesReceiptExportToJson_get.DepositHistoryType"
         }
      }
   },
   "SalesReceiptExportToJson_get.CustomType":{
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
   "SalesReceiptExportToJson_get.CustomType1":{
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
   "SalesReceiptExportToJson_get.CustomType2":{
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
   "SalesReceiptExportToJson_get.ItemDetailsType":{
      "type":"object",
      "properties":{
         "PLU":{
            "format":"int32",
            "type":"integer"
         },
         "CLU":{
            "type":"string"
         },
         "UPC":{
            "type":"string"
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
         "ItemType":{
            "enum":[
               "Style",
               "SingleItem",
               "ServiceItem"
            ],
            "type":"string"
         },
         "DCSS":{
            "$ref":"#/definitions/SalesReceiptExportToJson_get.DCSSType"
         },
         "BasePrice":{
            "format":"double",
            "type":"number"
         },
         "Style":{
            "$ref":"#/definitions/SalesReceiptExportToJson_get.StyleType"
         },
         "Item":{
            "$ref":"#/definitions/SalesReceiptExportToJson_get.ItemType"
         }
      }
   },
   "SalesReceiptExportToJson_get.DiscountCouponsType1":{
      "type":"object",
      "properties":{
         "CouponNumber":{
            "type":"string"
         },
         "CouponProgramName":{
            "type":"string"
         },
         "CouponAmount":{
            "format":"double",
            "type":"number"
         },
         "CouponPercent":{
            "format":"double",
            "type":"number"
         }
      }
   },
   "SalesReceiptExportToJson_get.ItemFeesType":{
      "type":"object",
      "properties":{
         "LineNo":{
            "format":"int32",
            "type":"integer"
         },
         "GlobalChargeLineNo":{
            "format":"int32",
            "type":"integer"
         },
         "ItemChargeCode":{
            "type":"string"
         },
         "ItemChargeType":{
            "enum":[
               "Empty",
               "Shipping",
               "Insurance",
               "RestockingFee"
            ],
            "type":"string"
         },
         "Qty":{
            "format":"double",
            "type":"number"
         },
         "UnitPrice":{
            "format":"double",
            "type":"number"
         },
         "ExtPrice":{
            "format":"double",
            "type":"number"
         },
         "ExtPriceWithTax":{
            "format":"double",
            "type":"number"
         },
         "TaxCategoryCode":{
            "type":"string"
         },
         "Spread":{
            "type":"boolean"
         },
         "LargeMemo":{
            "type":"string"
         }
      }
   },
   "SalesReceiptExportToJson_get.TaxesType":{
      "type":"object",
      "properties":{
         "TaxAmount":{
            "format":"double",
            "type":"number"
         },
         "TaxPercent":{
            "format":"double",
            "type":"number"
         },
         "DestTaxZoneCode":{
            "type":"string"
         },
         "TaxCategoryCode":{
            "type":"string"
         },
         "SourceTaxZoneCode":{
            "type":"string"
         },
         "TaxJurisdictionCode":{
            "type":"string"
         },
         "TaxCredit":{
            "format":"double",
            "type":"number"
         },
         "TaxCreditStoreCredit":{
            "format":"double",
            "type":"number"
         },
         "TaxExempt":{
            "type":"boolean"
         },
         "IsCustomTaxPercent":{
            "type":"boolean"
         },
         "IsCustomTaxAmount":{
            "type":"boolean"
         },
         "CustomFlag1":{
            "type":"boolean"
         },
         "CustomNumber1":{
            "format":"int32",
            "type":"integer"
         },
         "CustomDecimal1":{
            "format":"double",
            "type":"number"
         },
         "CustomLookup1":{
            "type":"string"
         }
      }
   },
   "SalesReceiptExportToJson_get.TaxExemptInfoType1":{
      "type":"object",
      "properties":{
         "ADDRESS_1":{
            "type":"string"
         },
         "ADDRESS_2":{
            "type":"string"
         },
         "CHILD_NAME":{
            "type":"string"
         },
         "CITY":{
            "type":"string"
         },
         "COUNTRY":{
            "type":"string"
         },
         "FIRST_NAME":{
            "type":"string"
         },
         "LAST_NAME":{
            "type":"string"
         },
         "ORGANIZATION_NAME":{
            "type":"string"
         },
         "PHONE":{
            "type":"string"
         },
         "POSTAL_CODE":{
            "type":"string"
         },
         "STATE":{
            "type":"string"
         },
         "TAX_EXEMPT_NUM":{
            "type":"string"
         },
         "TAX_EXEMPT_REASON":{
            "type":"string"
         }
      }
   },
   "SalesReceiptExportToJson_get.SalesOrderItemType":{
      "type":"object",
      "properties":{
         "SalesOrderDTN":{
            "format":"int64",
            "type":"integer"
         },
         "SalesOrderNo":{
            "type":"string"
         },
         "SalesOrderDateTime":{
            "format":"date-time",
            "type":"string"
         },
         "ListOrder":{
            "format":"int32",
            "type":"integer"
         }
      }
   },
   "SalesReceiptExportToJson_get.PromoType":{
      "type":"object",
      "properties":{
         "Name":{
            "type":"string"
         },
         "Description":{
            "type":"string"
         },
         "Rank":{
            "format":"int32",
            "type":"integer"
         },
         "Type":{
            "enum":[
               "BuyXGetY",
               "BuyXGetDiscount",
               "SpendMoreGetMore",
               "SalePricePromotion",
               "BuyMoreGetMore"
            ],
            "type":"string"
         },
         "ItemType":{
            "enum":[
               "BuyItem",
               "GetItem"
            ],
            "type":"string"
         },
         "Qty":{
            "format":"double",
            "type":"number"
         },
         "Amount":{
            "format":"double",
            "type":"number"
         },
         "Percent":{
            "format":"double",
            "type":"number"
         },
         "ListOrder":{
            "format":"int32",
            "type":"integer"
         },
         "PromoReturns":{
            "type":"boolean"
         }
      }
   },
   "SalesReceiptExportToJson_get.DepositHistoryType":{
      "type":"object",
      "properties":{
         "LineNo":{
            "format":"int32",
            "type":"integer"
         },
         "PaymentMethod":{
            "type":"string"
         },
         "PaymentAmount":{
            "format":"double",
            "type":"number"
         },
         "AccountNumber":{
            "type":"string"
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
         "ChangeAmount":{
            "format":"double",
            "type":"number"
         },
         "CurrencyCode":{
            "type":"string"
         },
         "PaymentProcessingRefNum":{
            "type":"string"
         },
         "CardholderFirstName":{
            "type":"string"
         },
         "CardholderLastName":{
            "type":"string"
         },
         "CardholderAddress1":{
            "type":"string"
         },
         "CardholderAddress2":{
            "type":"string"
         },
         "CardholderCity":{
            "type":"string"
         },
         "CardholderState":{
            "type":"string"
         },
         "CardholderPostalCode":{
            "type":"string"
         },
         "CardEnterMethod":{
            "enum":[
               "None",
               "Swipe",
               "Insert",
               "Tap",
               "Keyed",
               "Scan",
               "Unknown"
            ],
            "type":"string"
         },
         "CardOrderId":{
            "type":"string"
         },
         "CardTransactionId":{
            "type":"string"
         },
         "CardType":{
            "enum":[
               "Undefined",
               "Visa",
               "Master",
               "Discover",
               "Amex",
               "JCB",
               "Diners",
               "Solo",
               "Maestro",
               "Cirrus",
               "Switch",
               "Laser",
               "Other",
               "VisaDebit",
               "Debit"
            ],
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
         "CustomLookup1":{
            "type":"string"
         },
         "CustomLookup2":{
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
         }
      }
   },
   "SalesReceiptExportToJson_get.DCSSType":{
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
   "SalesReceiptExportToJson_get.StyleType":{
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
   "SalesReceiptExportToJson_get.ItemType":{
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
   }
  }
  ~~~

---

## Request Example(s) {#RequestExamples}

**Request Example #1: RecModified > '2012-01-01T15:44:42.570' and RecModified < '2018-06-06T15:44:42.570' and DeviceTransactionNumber Contains '10477000022' and
SalesReceiptNo > '123'**
~~~

{
  "Source":"Integrator",
  "Data":{
    "ApiDocumentId":"3f134d8f-1f72-4c77-b017-0006a52e6ba2",
    "Request":{
      "Settings":[
        {
          "Key":"LocationIdentifierSetting",
          "Value":"ExternalIdCode"
        },
        {
          "Key":"EmployeeIdentifierSetting",
          "Value":"LoginName"
        },
        {
          "Key":"MembershipIdentifierSetting",
          "Value":"Label"
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
          "Key":"ItemDescriptionSetting",
          "Value":"StoreDescription"
        },
        {
          "Key":"DepSetSetting",
          "Value":"DCSSCode"
        },
        {
          "Key":"TaxCategoryIdentifierSetting",
          "Value":"ExternalIdCode"
        },
        {
          "Key":"DiscountReasonIdentifierSetting",
          "Value":"ExternalIdCode"
        },
        {
          "Key":"PaymentMethodIdentifierSetting",
          "Value":"ExternalIdCode"
        },
        {
          "Key":"ReturnReasonIdentifierSetting",
          "Value":"ExternalIdCode"
        },
        {
          "Key":"TaxZoneIdentifierSetting",
          "Value":"Code"
        },
        {
          "Key":"ShippingMethodIdentifierSetting",
          "Value":"Code"
        },
        {
          "Key":"ItemDetailsLevelSetting",
          "Value":"Basic"
        },
        {
          "Key":"CustomerDetailsLevelSetting",
          "Value":"Basic"
        },
        {
          "Key":"DepositHistorySetting",
          "Value":"None"
        },
        {
          "Key":"DeviceIdentifierSetting",
          "Value":"DeviceName"
        },
        {
          "Key":"SalesReceiptIdentifierSetting",
          "Value":"No"
        },
        {
          "Key":"CostOfGoodsCalculationSetting",
          "Value":"No"
        },
    	{
          "Key":"TransactionAcknowledgementIdentifierSetting",
          "Value":"Code"
        },
        {
          "Key":"DrawerMemoIdentifierSetting",
          "Value":"WorkstationNum"
        }
      ],
      "Filters":[
        {
          "Field":"RecModified",
          "Operator":"Greater than",
          "Value":"2012-01-01T15:44:42.570"
        },
        {
          "Field":"RecModified",
          "Operator":"Less than",
          "Value":"2018-06-06T15:44:42.570"
        },
        {
          "Field":"DeviceTransactionNumber",
          "Operator":"Contains",
          "Value":"10477000022"
        },
        {
          "Field":"SalesReceiptNo",
          "Operator":"Greater than",
          "Value":123
        }
      ],
      "SortDescriptions":[
        {
          "Direction":"Ascending",
          "Name":"RecModified"
        }
      ],
      "Top":20,
      "Skip":0
    }
  }
}

~~~

## Response Example(s) {#ResponseExamples}

**Response Example #1: In Process**

<span class="ir">?????????? Need an 'In Process' example ??????????</span>

**Response Example #2: Error**

<span class="ir">?????????? Need an 'Error' example ??????????</span>

**Response Example #3: Success**

<span class="ir">?????????? Need a 'Success' example. The 'example' provided is a format not an actual reponse. ??????????</span>
