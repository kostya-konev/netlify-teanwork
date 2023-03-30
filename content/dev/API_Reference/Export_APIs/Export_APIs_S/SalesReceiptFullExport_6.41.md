---
title: "Sales Receipt (Full) Export API [6.41]"
date: 2022-11-17T16:14:00-05:00
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

This topic describes the **Sales Receipt (Full) Export** API which is used to export sales receipt information from CHQ.

See the [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) document for a description on how export requests are made and on the standard request and response formats used. The **Sales Receipt Export** successful response format will be described below.

{{% notice note %}}
The **Sales Receipt (Full) Export API** supports only the *new* sales receipt format. {{% /notice %}}

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown"><b><i>\<your-chq-url\></i></span>**/chqapi/export/salesreceipt-full**  
Asynchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/salesreceipt-full/async**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown"><b><i>\<your-api-key\></b></i></span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See the [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) document for further info.

In the Swagger UI the **/chqapi/export/salesreceipt-full** endpoint is a member of the **Sales** endpoint group.

## Request settings {#RequestSettings}

This API doesn't use any settings.

## Request filters {#RequestFilters}

Below are the filters which can be defined in the **Filters** group of the export request (see the [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) document for additional info).

The **Field** column lists the names of the fields on which filtering can be done. The **Operators** column lists the filter operator values which are valid the field. The **Value** column describes the  value expected for the field.

**Field** | **Operators** | **Value** |
---- | ---- | ---- |
RecModified | "Greater than", "Greater than or equal", "Less than", "Less than or equal" | Any valid string representing a date-time value. |
ReceiptDateTime | "Greater than or equal", "Less than or equal", "Equal" | Any valid string representing a date-time value. |
DeviceTransactionNumber | "Equal", "Contains" | Any valid long integer value representing a device transaction number for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |
AltDeviceTransactionNumber | "Equal", "Contains"  | Any valid string representing an alternative device transaction number for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |
ReceiptNum | "Equal", "Greater than", "Greater than or equal", "Less than", "Less than or equal" | Any valid integer value. |
ReceiptId | "Equal" or "Contains" | Any valid GUID for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |
DrawerMemoNo | "Equal" | Any valid integer representing a drawer memo number. |
DrawerMemoId | "Equal" | Any valid GUID string representing a drawer memo id. |
ReceiptCode | "Equal", "Contains"  | Any valid string representing a receipt code for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |
TransactionType | "Equal", "Contains"  | Any valid integer representing a transaction type  for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. The valid integer values are: 0 (Default), 1 (Sale), 2 (Return), 3 (Mixed), 4 (Reversed), 5 (Aborted), 6 (No Items), 7 (Reversal), 8 (Trade), 9 (Deposit), 10 (Adjustment). |
SalesOrderDTN | "Equal" | any valid big integer value representing a sales order device transaction number. |
SalesReceiptNumber | "Equal" | Any valid string representing a sales receipt number. |
LocationId | "Equal", "Contains"  | Any valid string representing a location for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |
ExternalId | "Equal", "Contains"  | Any valid string representing an external id for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |
MembershipCode | "Equal", "Contains"  | Any valid string representing a membership code for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |

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


<span class="api-gn">Response: Receipts</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
ReceiptNum | int32 | An identifier of the sales receipt. |
DeviceTransactionNumber | int64 | The receipt’s transaction number for the device used for the sales receipt. |
AltDeviceTransactionNumber | string | An alternate identifier of the receipt’s transaction number for the device used for the sales receipt. |
ReceiptId | string, guid | A unique identifier of the sales receipt. |
ReceiptCode | string | A code identifying the sales receipt. <span class="ir">????????</span> |
ChannelName | string | An identifier of the channel through which the sale was done. <span class="ir">????????</span> |
WebOrderNo | string | An identifier of the web order which generated the sale. <span class="ir">????????</span> |
ReceiptDateTime | string, datetime | A time of when the receipt was <span class="ir">????????</span> |
CreateDateTime | string, datetime | A time of when the receipt was created. |
EditDateTime | string, datetime | A time of when the receipt was last editied (modified). |


<span class="api-gn">Response: Receipts: Location</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
LocationId | string, guid | A unique identifier of the location where the receipt was created. |
LocationCode | string | An identifier of the location where the receipt was created. |
Name | string | The name of the location where the receipt was created. <span class="ir">????????</span> |
Name2 | string | The second name of the location where the receipt was created. <span class="ir">????????</span> |
LocationNum | int32 | An identifier of the location where the receipt was created. |
TimeAdjust | int32 | The amount adjustment needed between local and UTC time. <span class="ir">????????</span> |
TaxZoneID | string, guid | A unique identifier of the tax zone where the receipt was created. |
LocationPriceGroupID  | string, guid | A unique identifier of the price group used where the receipt was created. <span class="ir">????????</span> |
Address1 -  5 | string | These five fields are the lines (up to five) of the location's street address. |
City | string | The location's city. |
State | string | The location's state. |
PostalCode | string | The location's postal (zip) code. |
Phone1 - 3 | string | The phone numbers (up to three) for the location. |
Telex | string | The telex number for the location. |
Fax | string | The fax number for the location. |
Contact | string | An identifier of the contact person for the location. |
EMail | string | The emaill address for the location. |
HomePage | string | The web home page for the location. |
CountryID | string, guid | A unique identifier of the location's country. |
NodeID  | string, guid | A unique identifier of <span class="ir">????????</span> |
CustomText1 - 4 | string | These four fields are customizable text values for the sell to location. |
CustomFlag1 - 12 | string | These twelve fields are customizable flags for the location. |
CustomDate1 - 6 | string, datetime | These six fields are customizable date values for the location. |
CustomDecimal1 - 6 | double | These six fields are customizable floating-point number values for the location. |
CustomLookup1 - 12 | string | These twelve fields are customizable lookup values for the location. |
CustomNumber1 - 6 | int32 | These six fields are customizable integer number values for the location. |
Type | int32 | <span class="ir">????????</span> |
Latitude | double | The latitude of the location. |
Longitude | double | The Longitude of the location. |
TransferGroup | string | An identifier of the location’s transfer group. |
Area | string | <span class="ir">????????</span> |
LocationAvailabilityGroupID | string, guid | A unique identifier of the location's availability group. |


<span class="api-gn">Response: Receipts: Location: LocationBaseCurrency</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
CurrencyID | string, guid | A unique identifier of the currency used by the location. |
IsDeleted | boolean | An indicator as to whether or not the record has been deleted. |
Code | string | <span class="ir">????????</span> |
Description | string | A description of the location. |
AmountRoundingPrecision | double | <span class="ir">????????</span> |
DisplayDecimalPrecision | int32 |  <span class="ir">????????</span> |
RoundingType | int32 | <span class="ir">????????</span> |
CurrencyCode | string | An identifier of the currency used by the location. |
Base | boolean | An indicator as to whether or not <span class="ir">????????</span> |
Symbol | string | The currency symbol used by the location. <span class="ir">????????</span> |
SymbolPosition | int32 | An indicator of the position of the currency symbol. <span class="ir">????????</span> |
PaymentRoundingPrecision | double | <span class="ir">????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Location: LocationBaseCurrency</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Receipts: Location</span> |
DefaultPriceLevelID | string, guid | A unique identifier of the location's default price level. |
IsArchived | boolean | An indicator as to whether or not the record has been achived. <span class="ir">????????</span> |
ECommerce | int32 | <span class="ir">????????</span> |
LastSent | string, datetime | <span class="ir">????????</span> |
ECommerceFlag | boolean | An indicator as to whether or not <span class="ir">????????</span>. |
ECommerceAlias | string | <span class="ir">????????</span>. |
IsActive | boolean | An indicator as to whether or not the location is active. <span class="ir">????????</span>. |
Warehouse | boolean | An indicator as to whether or not the location is a warehouse. |
LocationGroupId | string, guid | A unique identifier of the location group this location belongs. |
UtcOffset | double | The offset from the UTC time zone of the location's time zone. |
TimeZoneId | string, guid | A unique identifier of the location's time zone. |
EID | string | An identifier for the location used when interacting with an external system. |
Open | boolean | An indicator as to whether or not the location is open. <span class="ir">????????</span> |
AvailableForStorePickup | boolean | An indicator as to whether or not the location can be used for store pickups. <span class="ir">????????</span> |
FranchiseGroupID | string, guid | A unique identifier of the franchise group which applies to the location. <span class="ir">????????</span> |
CustomerPresetId | string, guid | A unique identifier of <span class="ir">????????</span>. |
ModelStockGroupId | string, guid | A unique identifier of the model stock group which applies to the location. <span class="ir">????????</span> |
FiscalCode | string | The code under which the location is registered with the government. |
DenominationPlanGroupId | string, guid | A unique identifier of the denomination plan group which applies to the location. <span class="ir">????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Location</span> |


<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Receipts</span> |
TransactionType | string, enum | An indicator of the transaction type. Its value must be one of the following: "Default", "Sale", "Return", "Mixed", "Reversed", "Aborted", "NoItems", "Reversal", "Trade", "Deposit", "Adjustment". |


<span class="api-gn">Response: Receipts: Associated</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
EmployeeId |string, guid | A unique identifier of the employee who <span class="ir">??????????</span> |
IsDeleted | boolean | An indicator as to whether or not the record has been deleted. 
|
EmployeeNum | int32 | An identifier of the employee who <span class="ir">??????????</span> |
LoginName | string | The login name of the employee who <span class="ir">??????????</span> |
MiddleName | string | The middle name of the employee who <span class="ir">??????????</span> |
LastName | string | The last name of the employee who <span class="ir">??????????</span> |
FirstName | string | The first name of the employee who <span class="ir">??????????</span> |
EMail1 - 2 | string | These two fields are the email addresses (up to two) for the employee who <span class="ir">??????????</span> |
MaxDiscPercent | double | <span class="ir">??????????</span> |
Universal | boolean | An indicator as to whether or not <span class="ir">??????????</span> |
Active | boolean | An indicator as to whether or not the employees is active. <span class="ir">??????????</span> |
Type | int32 | <span class="ir">??????????</span> |
ExpirationDate | string, datetime | <span class="ir">??????????</span> |
MaxGlobalDiscPercent | double | <span class="ir">??????????</span> |
CustomDate1 - 6 | string, datetime | These six fields are customizable date values for the employee. <span class="ir">??????????</span> |
CustomFlag1 - 6 | string | These six fields are customizable flags for the employee. <span class="ir">??????????</span> |
CustomNumber1 - 6 | int32 | These six fields are customizable integer number values for the employee. <span class="ir">??????????</span> |
CustomDecimal1 - 6 | double | These six fields are customizable floating-point number values for the employee. <span class="ir">??????????</span> |
CustomText1 - 12 | string | These twelve fields are customizable text values for the employee. <span class="ir">??????????</span> |
CustomLookup1 - 12 | string | These twelve fields are customizable lookup values for the employee. <span class="ir">??????????</span> |
Code | string | <span class="ir">??????????</span> |
NickName | string | A nickname for the employee. <span class="ir">??????????</span> |
ListOrder | int32 | The order the employee will appear in the UI. <span class="ir">??????????</span> |
JobTitle | string | The employee's job title. |
Address1 - 2 | string | The lines (up to twp) of the employee's street address. |
City | string | The employee's city. |
State | string | The employee's state. |
CountryId | string, guid | A unique identifier of the employee's country. |
PhoneNo | string | The employee's first phone number. |
MobilePhoneNo | string | The employee's mobile phone number. |
Title | string | The employee's name title |
Suffix | string | The employee's name suffix. |
Organization | string | The employee's organization. |
PostalCode | string | The employee's postal (zip) code. |
PhoneNo2 | string | The employee's second phone number. |
Fax | string | The employee's fax number. |
HomePage | string | The employee's home web page. |
IsManager | boolean | An indicator as to whether or not the employee is a manager. |
DiscRequireAuthCode | boolean | An indicator as to whether or not an authorization code is required for the employee to receive employee discounts. <span class="ir">??????????</span> |
MaxTradeAdjustmentPercent | double | The maximum amount the employee is allowed to apply to a trade-in adjustment. <span class="ir">??????????</span> |
HomeLocationId | string, guid | A unique identifier of the employee's home location (store). |
CommissionGroupId | string, guid | A unique identifier of the employee's commision group. |
AvailableInCalendar | boolean | An indicator as to whether or not the employee is available in the scheduling calendar. |
PasswordChangeDate | string, datetime | A timestamp of when the employee last changed their password. |
SecurityType | int32 | <span class="ir">??????????</span> |
OverrideRoleDiscountLimits | boolean | An indicator as to whether or not the employee can override role discount limits. <span class="ir">??????????</span> |
QrScanCode | string | <span class="ir">??????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Associated</span> |


<span class="api-gn">Response: Receipts: Cashier</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
EmployeeId |string, guid | A unique identifier of the employee who <span class="ir">??????????</span> |
IsDeleted | boolean | An indicator as to whether or not the record has been deleted. 
|
EmployeeNum | int32 | An identifier of the employee who <span class="ir">??????????</span> |
LoginName | string | The login name of the employee who <span class="ir">??????????</span> |
MiddleName | string | The middle name of the employee who <span class="ir">??????????</span> |
LastName | string | The last name of the employee who <span class="ir">??????????</span> |
FirstName | string | The first name of the employee who <span class="ir">??????????</span> |
EMail1 - 2 | string | These two fields are the email addresses (up to two) for the employee who <span class="ir">??????????</span> |
MaxDiscPercent | double | <span class="ir">??????????</span> |
Universal | boolean | An indicator as to whether or not <span class="ir">??????????</span> |
Active | boolean | An indicator as to whether or not the employees is active. <span class="ir">??????????</span> |
Type | int32 | <span class="ir">??????????</span> |
ExpirationDate | string, datetime | <span class="ir">??????????</span> |
MaxGlobalDiscPercent | double | <span class="ir">??????????</span> |
CustomDate1 - 6 | string, datetime | These six fields are customizable date values for the employee. <span class="ir">??????????</span> |
CustomFlag1 - 6 | string | These six fields are customizable flags for the employee. <span class="ir">??????????</span> |
CustomNumber1 - 6 | int32 | These six fields are customizable integer number values for the employee. <span class="ir">??????????</span> |
CustomDecimal1 - 6 | double | These six fields are customizable floating-point number values for the employee. <span class="ir">??????????</span> |
CustomText1 - 6 | string | These six fields are customizable text values for the employee. <span class="ir">??????????</span> |
CustomLookup1 - 12 | string | These twelve fields are customizable lookup values for the employee. <span class="ir">??????????</span> |
Code | string | <span class="ir">??????????</span> |
NickName | string | A nickname for the employee. <span class="ir">??????????</span> |
ListOrder | int32 | The order the employee will appear in the UI. <span class="ir">??????????</span> |
JobTitle | string | The employee's job title. |
Address1 - 2 | string | The lines (up to twp) of the employee's street address. |
City | string | The employee's city. |
State | string | The employee's state. |
CountryId | string, guid | A unique identifier of the employee's country. |
PhoneNo | string | The employee's first phone number. |
MobilePhoneNo | string | The employee's mobile phone number. |
Title | string | The employee's name title |
Suffix | string | The employee's name suffix. |
Organization | string | The employee's organization. |
PostalCode | string | The employee's postal (zip) code. |
PhoneNo2 | string | The employee's second phone number. |
Fax | string | The employee's fax number. |
HomePage | string | The employee's home web page. |
IsManager | boolean | An indicator as to whether or not the employee is a manager. |
DiscRequireAuthCode | boolean | An indicator as to whether or not an authorization code is required for the employee to receive employee discounts. <span class="ir">??????????</span> |
MaxTradeAdjustmentPercent | double | The maximum amount the employee is allowed to apply to a trade-in adjustment. <span class="ir">??????????</span> |
HomeLocationId | string, guid | A unique identifier of the employee's home location (store). |
CommissionGroupId | string, guid | A unique identifier of the employee's commision group. |
AvailableInCalendar | boolean | An indicator as to whether or not the employee is available in the scheduling calendar. |
PasswordChangeDate | string, datetime | A timestamp of when the employee last changed their password. |
SecurityType | int32 | <span class="ir">??????????</span> |
OverrideRoleDiscountLimits | boolean | An indicator as to whether or not the employee can override role discount limits. <span class="ir">??????????</span> |
QrScanCode | string | <span class="ir">??????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Cashier</span> |


<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Receipts</span> |
TotalQty | double | The total quanitity of the receipt. |
InventoryAmount | double | The inventory amount for the receipt. <span class="ir">??????????</span> |
TotalDiscountAmount | double | The total discount amount applied to the receipt. |
TotalItemsShippingAmount | double | The total amount of items being shipped for the receipt. |
TotalItemsFeeAmount | double | The total amount of item fees applied to the recipt. |
TotalTaxAmount | double | The total tax amount for the receipt. |
TotalAmount | double | The total amolunt of the receipt. |
MembershipCode | double | The customer's membership code. |


<span class="api-gn">Response: Receipts: MembershipLevel</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
MembershipLevelID |string, guid | A unique identifier of the customer's membership level. |
IsDeleted | boolean | An indicator as to whether or not the record has been deleted. 
|
Name | string | The name of the membership level. |
Description | string | A description of the membership level. |
Level | int32 | The membership level's level number. |
DayLength | int32 | <span class="ir">????????</span> |
NormalPrice | double | <span class="ir">????????</span> |
SaleDiscountPercent | double | The sales discount percentage for the membership level. |
SalesDiscountSource | int32 | <span class="ir">????????</span> |
Inactive | boolean | An indicator as to whether or not the membership level is active. |
LocationID | string, guid | A unique identifier of the location where <span class="ir">????????</span> |
PriceLevelId | string, guid | A unique identifier of the price level which applies to the memebership level. |
LRPEligible | boolean | An indicator as to whether or not the membership level is eligible for loyalty reward points. |
ItemId | string, guid | A unique identifier of <span class="ir">????????</span> |
DayLengthRewarded | int32 | <span class="ir">????????</span> |
NeededAmount | double | <span class="ir">????????</span> |
CustomText1 - 6 | string | These six fields are customizable text values for the membership level. <span class="ir">??????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: MembershipLevel</span> |


<span class="api-gn">Response: Receipts: MembershipLevelOverride</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
MembershipLevelID |string, guid | A unique identifier of the customer's membership level. |
IsDeleted | boolean | An indicator as to whether or not the record has been deleted. 
|
Name | string | The name of the membership level. |
Description | string | A description of the membership level. |
Level | int32 | The membership level's level number. |
DayLength | int32 | <span class="ir">????????</span> |
NormalPrice | double | <span class="ir">????????</span> |
SaleDiscountPercent | double | The sales discount percentage for the membership level. |
SalesDiscountSource | int32 | <span class="ir">????????</span> |
Inactive | boolean | An indicator as to whether or not the membership level is active. |
LocationID | string, guid | A unique identifier of the location where <span class="ir">????????</span> |
PriceLevelId | string, guid | A unique identifier of the price level which applies to the memebership level. |
LRPEligible | boolean | An indicator as to whether or not the membership level is eligible for loyalty reward points. |
ItemId | string, guid | A unique identifier of <span class="ir">????????</span> |
DayLengthRewarded | int32 | <span class="ir">????????</span> |
NeededAmount | double | <span class="ir">????????</span> |
CustomText1 - 6 | string | These six fields are customizable text values for the membership level. <span class="ir">??????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: MembershipLevelOverride</span> |


<span class="api-gn">Response: Receipts: MembershipLevelOverrideEmployee</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
MembershipLevelID |string, guid | A unique identifier of the customer's membership level. |
IsDeleted | boolean | An indicator as to whether or not the record has been deleted. 
|
Name | string | The name of the membership level. |
Description | string | A description of the membership level. |
Level | int32 | The membership level's level number. |
DayLength | int32 | <span class="ir">????????</span> |
NormalPrice | double | <span class="ir">????????</span> |
SaleDiscountPercent | double | The sales discount percentage for the membership level. |
SalesDiscountSource | int32 | <span class="ir">????????</span> |
Inactive | boolean | An indicator as to whether or not the membership level is active. |
LocationID | string, guid | A unique identifier of the location where <span class="ir">????????</span> |
PriceLevelId | string, guid | A unique identifier of the price level which applies to the memebership level. |
LRPEligible | boolean | An indicator as to whether or not the membership level is eligible for loyalty reward points. |
ItemId | string, guid | A unique identifier of <span class="ir">????????</span> |
DayLengthRewarded | int32 | <span class="ir">????????</span> |
NeededAmount | double | <span class="ir">????????</span> |
CustomText1 - 6 | string | These six fields are customizable text values for the membership level. <span class="ir">??????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: MembershipLevelOverrideEmployee</span> |


<span class="api-gn">Response: Receipts: GlobalDiscounts</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
ReceiptDiscountId |string, guid | A unique identifier of the global discount. |
InputSequence | int32 | <span class="ir">??????????</span> |
DiscountAmount | double | The amount of the global discount. |
DiscountPercent | double | The percentage of the global discount. |
InputSource | int32 | <span class="ir">??????????</span> |
CascadeFlag | boolean | An indicator as to whether or not <span class="ir">??????????</span> |
MaxDiscountPercent | double | The maximum dicount percentage allowed. <span class="ir">??????????</span> |
CascadeAmount | double | <span class="ir">??????????</span> |
PromoExcluded | boolean | An indicator as to whether or not promotions are allowed. <span class="ir">??????????</span> |
OverrideCode | string | <span class="ir">??????????</span> |
ReturnedReceiptDiscountId | string, guid | A unique identifier of the discount in the original receipt for a return. <span class="ir">??????????</span> |


<span class="api-gn">Response: Receipts: GlobalDiscounts: DiscountReason</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
DiscountReasonID |string, guid | A unique identifier of the discount reason. |
IsDeleted | boolean | An indicator as to whether or not the record has been deleted. 
|
Code | string | An identifier of the reason. |
Description | string | A description of the reason. |
DefaultPercent | double | The default discount percentage for the reason. |
ListOrder | int32 | The order the reason will appear in the user interface. |
MaxPercent | double | The maximum discount percentage allowed for the reason. |
Type | int32 | <span class="ir">????????</span> |
ECommerceFlag | boolean | An indicator as to whether or not the discount reason can be applied to ecommerce transactions. <span class="ir">????????</span> |
ECommerceAlias | string | An alias used for the discount in ecommerce transactions. <span class="ir">????????</span> |
LocationId | string, guid | A unique identifier of the location where <span class="ir">????????</span> |
RequireAuthorization | boolean | An indicator as to whether or not authorization is required to apply the discount.
StartDateTime | string, datetime | A timestamp of when the discount can begin being applied. <span class="ir">????????</span> |
EndDateTime | string, datetime | A timestamp of when the discount can no longer be being applied. <span class="ir">????????</span> |
Archived | boolean | An indicator as to whether or not the discount reason has been archived. |
CouponDiscount | boolean | An indicator as to whether or not the discount is a coupon. <span class="ir">????????</span> |
DiscountType | int32 | An indicator of the discount's type. |
DefaultDiscountAmount | double | The discount's default amount. |
PreventDiscountChange | boolean | Anmindicator as to whether or not the discount can be changed. |
DoNotDisplayAuthCode | boolean | An indicator as to whether or not the discount's authorization code will be shown in the user interface. <span class="ir">????????</span> |
ExternalId | string | An identifier of the discount used when interacting with an external system. |
AuthorityLevel | int32 | <span class="ir">????????</span> |
PermitCombiningWithCustomerDiscount | boolean | An indicator as to whether or not this discount can be combined with a customer discount. <span class="ir">????????</span> |
Cascade | boolean | <span class="ir">????????</span> |
PromoExclude | boolean | An indicator as to whether or not this discount can be applied to promotions. <span class="ir">????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: GlobalDiscounts: DiscountReason</span> |


<span class="api-gn">Response: Receipts: GlobalDiscounts: DiscountCoupon</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
ReceiptDiscountCouponId |string, guid | A unique identifier of the discount coupon. |
CouponNumber | string | An identifier of the coupon. |
CouponProgramName | string | The name of the coupon program the coupon is a part of. |
CouponStartDate | string, datetime | A timestamp of when the coupon can begin being applied. |
CouponEndDate | string, datetime | A timestamp of when the coupon can no longer be applied. |
CouponProgramId | string | An identifier of the coupon program the coupon is a part of. |
IsReusable | boolean | An indicator as to whether or not the coupon is reusable. | 
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: GlobalDiscounts: DiscountCoupon</span> |


<span class="api-gn">Response: Receipts: GlobalDiscounts: Employee</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
EmployeeId |string, guid | A unique identifier of the employee who applied the discount. |
IsDeleted | boolean | An indicator as to whether or not the record has been deleted. |
EmployeeNum | int32 | An identifier of the employee who applied the discount. |
LoginName | string | The name the employee logged in under. |
MiddleName | string | The middle name of the employee who <span class="ir">??????????</span> |
LastName | string | The last name of the employee who <span class="ir">??????????</span> |
FirstName | string | The first name of the employee who <span class="ir">??????????</span> |
EMail1 - 2 | string | These two fields are the email addresses (up to two) for the employee who <span class="ir">??????????</span> |
MaxDiscPercent | double | <span class="ir">??????????</span> |
Universal | boolean | An indicator as to whether or not <span class="ir">??????????</span> |
Active | boolean | An indicator as to whether or not the employees is active. <span class="ir">??????????</span> |
Type | int32 | <span class="ir">??????????</span> |
ExpirationDate | string, datetime | <span class="ir">??????????</span> |
MaxGlobalDiscPercent | double | <span class="ir">??????????</span> |
CustomDate1 - 6 | string, datetime | These six fields are customizable date values for the employee. <span class="ir">??????????</span> |
CustomFlag1 - 6 | string | These six fields are customizable flags for the employee. <span class="ir">??????????</span> |
CustomNumber1 - 6 | int32 | These six fields are customizable integer number values for the employee. <span class="ir">??????????</span> |
CustomDecimal1 - 6 | double | These six fields are customizable floating-point number values for the employee. <span class="ir">??????????</span> |
CustomText1 - 6 | string | These six fields are customizable text values for the employee. <span class="ir">??????????</span> |
CustomLookup1 - 12 | string | These twelve fields are customizable lookup values for the employee. <span class="ir">??????????</span> |
Code | string | <span class="ir">??????????</span> |
NickName | string | A nickname for the employee. <span class="ir">??????????</span> |
ListOrder | int32 | The order the employee will appear in the UI. <span class="ir">??????????</span> |
JobTitle | string | The employee's job title. |
Address1 - 2 | string | The lines (up to twp) of the employee's street address. |
City | string | The employee's city. |
State | string | The employee's state. |
CountryId | string, guid | A unique identifier of the employee's country. |
PhoneNo | string | The employee's first phone number. |
MobilePhoneNo | string | The employee's mobile phone number. |
Title | string | The employee's name title |
Suffix | string | The employee's name suffix. |
Organization | string | The employee's organization. |
PostalCode | string | The employee's postal (zip) code. |
PhoneNo2 | string | The employee's second phone number. |
Fax | string | The employee's fax number. |
HomePage | string | The employee's home web page. |
IsManager | boolean | An indicator as to whether or not the employee is a manager. |
DiscRequireAuthCode | boolean | An indicator as to whether or not an authorization code is required for the employee to receive employee discounts. <span class="ir">??????????</span> |
MaxTradeAdjustmentPercent | double | The maximum amount the employee is allowed to apply to a trade-in adjustment. <span class="ir">??????????</span> |
HomeLocationId | string, guid | A unique identifier of the employee's home location (store). |
CommissionGroupId | string, guid | A unique identifier of the employee's commision group. |
AvailableInCalendar | boolean | An indicator as to whether or not the employee is available in the scheduling calendar. |
PasswordChangeDate | string, datetime | A timestamp of when the employee last changed their password. |
SecurityType | int32 | <span class="ir">??????????</span> |
OverrideRoleDiscountLimits | boolean | An indicator as to whether or not the employee can override role discount limits. <span class="ir">??????????</span> |
QrScanCode | string | <span class="ir">??????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: GlobalDiscounts: Employee</span> |


<span class="api-gn">Response: Receipts: GlobalDiscounts: OverrideEmployee</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
EmployeeId |string, guid | A unique identifier of the employee who applied the discount override. |
IsDeleted | boolean | An indicator as to whether or not the record has been deleted. |
EmployeeNum | int32 | An identifier of the employee who applied the discount override. |
LoginName | string | The name the employee logged in under. |
MiddleName | string | The middle name of the employee who <span class="ir">??????????</span> |
LastName | string | The last name of the employee who <span class="ir">??????????</span> |
FirstName | string | The first name of the employee who <span class="ir">??????????</span> |
EMail1 - 2 | string | These two fields are the email addresses (up to two) for the employee who <span class="ir">??????????</span> |
MaxDiscPercent | double | <span class="ir">??????????</span> |
Universal | boolean | An indicator as to whether or not <span class="ir">??????????</span> |
Active | boolean | An indicator as to whether or not the employees is active. <span class="ir">??????????</span> |
Type | int32 | <span class="ir">??????????</span> |
ExpirationDate | string, datetime | <span class="ir">??????????</span> |
MaxGlobalDiscPercent | double | <span class="ir">??????????</span> |
CustomDate1 - 6 | string, datetime | These six fields are customizable date values for the employee. <span class="ir">??????????</span> |
CustomFlag1 - 6 | string | These six fields are customizable flags for the employee. <span class="ir">??????????</span> |
CustomNumber1 - 6 | int32 | These six fields are customizable integer number values for the employee. <span class="ir">??????????</span> |
CustomDecimal1 - 6 | double | These six fields are customizable floating-point number values for the employee. <span class="ir">??????????</span> |
CustomText1 - 6 | string | These six fields are customizable text values for the employee. <span class="ir">??????????</span> |
CustomLookup1 - 12 | string | These twelve fields are customizable lookup values for the employee. <span class="ir">??????????</span> |
Code | string | <span class="ir">??????????</span> |
NickName | string | A nickname for the employee. <span class="ir">??????????</span> |
ListOrder | int32 | The order the employee will appear in the UI. <span class="ir">??????????</span> |
JobTitle | string | The employee's job title. |
Address1 - 2 | string | The lines (up to twp) of the employee's street address. |
City | string | The employee's city. |
State | string | The employee's state. |
CountryId | string, guid | A unique identifier of the employee's country. |
PhoneNo | string | The employee's first phone number. |
MobilePhoneNo | string | The employee's mobile phone number. |
Title | string | The employee's name title |
Suffix | string | The employee's name suffix. |
Organization | string | The employee's organization. |
PostalCode | string | The employee's postal (zip) code. |
PhoneNo2 | string | The employee's second phone number. |
Fax | string | The employee's fax number. |
HomePage | string | The employee's home web page. |
IsManager | boolean | An indicator as to whether or not the employee is a manager. |
DiscRequireAuthCode | boolean | An indicator as to whether or not an authorization code is required for the employee to receive employee discounts. <span class="ir">??????????</span> |
MaxTradeAdjustmentPercent | double | The maximum amount the employee is allowed to apply to a trade-in adjustment. <span class="ir">??????????</span> |
HomeLocationId | string, guid | A unique identifier of the employee's home location (store). |
CommissionGroupId | string, guid | A unique identifier of the employee's commision group. |
AvailableInCalendar | boolean | An indicator as to whether or not the employee is available in the scheduling calendar. |
PasswordChangeDate | string, datetime | A timestamp of when the employee last changed their password. |
SecurityType | int32 | <span class="ir">??????????</span> |
OverrideRoleDiscountLimits | boolean | An indicator as to whether or not the employee can override role discount limits. <span class="ir">??????????</span> |
QrScanCode | string | <span class="ir">??????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: GlobalDiscounts: OverrideEmployee</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: GlobalDiscounts</span> |

<span class="api-gn">Response: Receipts: DestTaxArea</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
TaxZoneID |string, guid | A unique identifier of the tax zone. |
IsDeleted | boolean | An indicator as to whether or not the record has been deleted. |
ParentID | string, guid | A unique identifier of <span class="ir">??????????</span> |
Name | string | The name of the tax zone. |
CountryID | string, guid | A unique identifier of the tax zone's country. |
TaxCalculations | int32 | <span class="ir">????????</span> |
CalculationsCustomCode | string | <span class="ir">????????</span> |
Code | string | <span class="ir">????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: DestTaxArea</span> |


<span class="api-gn">Response: Receipts: SourceTaxArea</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
TaxZoneID |string, guid | A unique identifier of the tax zone. |
IsDeleted | boolean | An indicator as to whether or not the record has been deleted. |
ParentID | string, guid | A unique identifier of <span class="ir">??????????</span> |
Name | string | The name of the tax zone. |
CountryID | string, guid | A unique identifier of the tax zone's country. |
TaxCalculations | int32 | <span class="ir">????????</span> |
CalculationsCustomCode | string | <span class="ir">????????</span> |
Code | string | <span class="ir">????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: SourceTaxArea</span> |


<span class="api-gn">Response: Receipts: ReversingDocument</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
ReceiptId |string, guid | A unique identifier of the reversing receipt. |
ReceiptNum | int32 | An identifier of the reversing receipt. |
BillToLastName | string | The last name of the bill to customer. |
BillToFirstName | string | The first name of the bill to customer. |
BillToMiddleName | string | The middle name of the bill to customer. |
BillToAddress1 - 2 | string | The lines (up to two) of the bill to customer's street address. |
BillToCity | string | The bill to customer's city. |
BillToState | string | The bill to customer's state. |
BillToPostalCode | string | The bill to customer's postal (zip) code. |
BillToOrganization | string | The bill to customer's organization. |
DrawerMemoId | string, guid | A unique identifier of the receipt's drawer memo. |
CreateEmployeeId | string | A unique identifier of the employee who created the receipt. |
CreateWorkstationId | string | A unique identifier of the workstation on which the receipt was created. |
EditEmployeeId | string | A unique identifier of the employee who last edited (modified) the receipt. |
EditWorkstationId | string | A unique identifier of the workstation on which the receipt was last edited (modified). |
EditDateTime | string, datetime | A timestamp of when the receipt was last edited (modified). |
CreateDateTime | string, datetime | A timestamp of when the receipt was created. |
ReceiptDateTime | string, datetime | A timestamp of when <span class="ir">????????</span> |
SOID | string, guid | A unique identifier of the related sales order. <span class="ir">????????</span> |
LargeMemo | string | Misc. notes about the receipt. |
DestTaxZoneId | string, guid | A unique identifier of the destination tax zone. |
LocationId | string, guid | A unique identifier of the location where <span class="ir">????????</span> |
ShipToLastName | string | The last name of the ship to customer. |
ShipToFirstName | string | The first name of the ship to customer. |
ShipToMiddleName | string | The middle name of the ship to customer. |
ShipToAddress1 - 2 | string | The lines (up to two) of the ship to customer's street address. |
ShipToCity | string | The ship to customer's city. |
ShipToState | string | The ship to customer's state. |
ShipToPostalCode | string | The ship to customer's postal (zip) code. |
ShipToOrganization | string | The ship to customer's organization. |
ShipToPhone1 - 3 | string | The phone numbers (up to three) for the ship to customer. |
BillToPhone1 - 3 | string | The phone numbers (up to three) for the bill to customer. |
BillToCustomerId | string, guid | A unique identifier of the bill to customer. |
ShipToCustomerId | string, guid | A unique identifier of the ship to customer. |
ShipMethodId | string, guid | A unique identifier of the shipping method used. |
CustomDate1 - 4 | string, datetime | These four fields are customizable date values for the receipt. |
CustomDecimal1 - 4 | double | These fourx fields are customizable floating-point number values for the receipt. |
CustomFlag1 - 4 | string | These four fields are customizable flags for the receipt. |
CustomLookup1 - 8 | string | These eight fields are customizable lookup values for the receipt. |
CustomNumber1 - 4 | int32 | These four fields are customizable integer number values for the receipt. |
CustomText1 - 8 | string | These eight fields are customizable text values for the receipt. |
ReversingDocumentId | string, guid | A unique identifier of the receipt. 
|
DocSalespersonId | string | A unique identifier of the <span class="ir">????????</span> |
SellToCustomerId | string, guid | A unique identifier of the sell to customer. |
SellToLastName | string | The last name of the sell to customer. |
SellToFirstName | string | The first name of the sell to customer. |
SellToMiddleName | string | The middle name of the sell to customer. |
SellToAddress1 - 2 | string | The lines (up to two) of the sell to customer's street address. |
SellToCity | string | The sell to customer's city. |
SellToState | string | The sell to customer's state. |
SellToPostalCode | string | The sell to customer's postal (zip) code. |
SellToPhone1 - 3 | string | The phone numbers (up to three) for the sell to customer. |
SellToOrganization | string | The sell to customer's organization. |
BillToCountryCode | string | An identifier of the bill to customer's country. |
ShipToCountryCode | string | An identifier of the ship to customer's country. |
SellToCountryCode | string | An identifier of the sell to customer's country. |
SourceTaxZoneId | string, guid | A unique identifier of the source tax zone. |
SellToGender | int32 | An indicator of the sell to customer's gender. |
SellToBirthdate | string, datetime | A timestamp of the sell to customer's birth date. |
DiscOverrideCode | string | The discount override code which was applied. |
IsDropShipment | boolean | An indicator as to whether or not the receipt<span class="ir">????????</span> is a drop shipment. |
TaxExempt | boolean | An indicator as to whether or not the receipt<span class="ir">????????</span> is tax exempt. |
SellToEmail1 | string | AN email address for the sell to customer. |
BillToEmail1 | string | AN email address for the bill to customer. |
StateDate | string, datetime | A timestamp of when <span class="ir">????????</span> |
TotalAmountWithoutTax | double | The receipt's total amount without taxes. |
TotalAmountWithTax | double | The receipt's total amount with taxes. |
TotalQty | double | The receipt's total quantity. |
TransactionType | int32 | An indicator of the receipt's transaction type. |
Status | int32 | An indicator of the receipt's status. |
MembershipCode | string | An identifier of the <span class="ir">????????</span> customer's membership. |
MembershipEndDate | string, datetime | A timestamp of when the <span class="ir">????????</span> customer's membership ends. |
SellToWholesaleCustomer | boolean | An indicator as to whether or not the sell to customer is a wholesaler. |
SellToTradingPartner | boolean | An indicator as to whether or not the sell to customer is a trading partner. |
BillToWholesaleCustomer | boolean | An indicator as to whether or not the bill to customer is a wholesaler. |
BillToTradingPartner | boolean | An indicator as to whether or not the bill to customer is a trading partner. |
ShipToWholesaleCustomer | boolean | An indicator as to whether or not the ship to customer is a wholesaler. |
ShipToTradingPartner | boolean | An indicator as to whether or not the ship to customer is a trading partner. |
PersonCustomerId | string, guid | A unique identifier of <span class="ir">????????</span> |
SellToIsUniversal | boolean | An indicator as to whether or not the sell to customer is universal. <span class="ir">????????</span> |
MembershipLevelId | string, guid | A unique identifier of the membership level applied to the receipt. <span class="ir">????????</span> |
PriceLevelCode | string | An identifier of the price level applied to the receipt. <span class="ir">????????</span> |
DeviceTransactionNumber | int64 | The transaction number on the device used for the receipt. |
DeviceId | string | An identifier of the device used for the receipt. |
DeviceUniqueId | string, guid | A unique identifier of the device used for the receipt. |
SellToPhone4 | string | The fourth phone number for the sell to customer. |
BillToPhone4 | string | The fourth phone number for the bill to customer. |
ShipToPhone4 | string | The fourth phone number for the ship to customer. |
EmailAddress | string | The email address for <span class="ir">????????</span> |
ShipToEmail | string | The ship to customer's email address. |
SellToBirthdateText | string | The birthday text for the sell to customer. |
BillToBirthdateText | string | The birthday text for the bill to customer. |
ShipToBirthdateText | string | The birthday text for the ship to customer. |
BillToMembershipLvlName | string | The name of the bill to customer's membership level. |
BillToMembershipEndDate | string, datetime | A timestamp of when the bill to customer's membership ends. |
ShipToMembershipLvlName | string | The name of the ship to customer's membership level. |
ShipToMembershipEndDate | string, datetime | A timestamp of when the ship to customer's membership ends. |
MembershipLevelOverrideId | string, guid | A unique identifier of the membership level override applied to the receipt. <span class="ir">????????</span> |
MembershipLevelOverrideEmployeeId | string, guid | A unique identifier of the employee who applied the membership level override. <span class="ir">????????</span> |
MembershipPriceLevelCode | string | An identifier of the membership price level used. <span class="ir">????????</span> |
ChannelName | string | The name of the sales channel used. <span class="ir">????????</span> |
WebOrderNo | string | An identifier of web order for the receipt. <span class="ir">????????</span> |
ReceiptCode | string | An identifier of the receipt. <span class="ir">????????</span> |
CashRoundingPrecision | double | <span class="ir">????????</span> |
ShipToType | string, enum | An indicator of the ship to type. Its value must be one of the following: "DoNotShip", "ToCustomer", "StorePickup", "ToStore". |
StorePickupLocationId | string | A unique identifier of the location where a store pickup will be done. |
ShipToAddress3 - 4 | string | The third and fourth lines of the ship to street address. |
ShipToIsManualEntry | boolean | An indicator as to whether or not the ship to information was manually entered. <span class="ir">????????</span> |
ShipToIsStorePickup | boolean | An indicator as to whether or not the *shipment* will actually be picked up in a store. |
AltDeviceTransactionNumber | string | The alternate transaction number on the device used for the receipt. |
FillFromLocationId | string, guid | A unique identifier of the location the recipt was filled from. <span class="ir">????????</span> |
GlobalDiscountIsPercentBased | boolean | An indicator as to whether or not the global discount was applied as a percentage. |
GlobalDiscountPercent | double | The global discount percentage applied. |
ShipToAVSPerformed | boolean | An indicator as to whether or not address verification has been performed for the ship to address. |
UtcOffset | double | The offset from UTC time of the receipt's time zone. |
ShipToAddress5 | string | The fifthh line of the ship to street address. |
ShipToFiscalCode | string | The fiscal code for the ship to address. |
BillToAddress3 - 5 | string | The third through fifth lines of the bill to street address. |
BillToFiscalCode | string | The fiscal code for the bill to address. |
SellToAddress3 - 5 | string | The third through fifth lines of the sell to street address. |
SellToFiscalCode | string | The fiscal code for the sell to address. |
ExternalId | string | An identifier of the reversing receipt used when interacting with an external system. |
TaxCalculationService | int32 | An identifier of the tax calculation service used for the receipt. <span class="ir">????????</span> |
SaleTime | int32 | <span class="ir">????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: ReversingDocument</span> |


<span class="api-gn">Response: Receipts: ReversedDocument</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
ReceiptId |string, guid | A unique identifier of the reversed receipt. |
ReceiptNum | int32 | An identifier of the reversed receipt. |
BillToLastName | string | The last name of the bill to customer. |
BillToFirstName | string | The first name of the bill to customer. |
BillToMiddleName | string | The middle name of the bill to customer. |
BillToAddress1 - 2 | string | The lines (up to two) of the bill to customer's street address. |
BillToCity | string | The bill to customer's city. |
BillToState | string | The bill to customer's state. |
BillToPostalCode | string | The bill to customer's postal (zip) code. |
BillToOrganization | string | The bill to customer's organization. |
DrawerMemoId | string, guid | A unique identifier of the receipt's drawer memo. |
CreateEmployeeId | string | A unique identifier of the employee who created the receipt. |
CreateWorkstationId | string | A unique identifier of the workstation on which the receipt was created. |
EditEmployeeId | string | A unique identifier of the employee who last edited (modified) the receipt. |
EditWorkstationId | string | A unique identifier of the workstation on which the receipt was last edited (modified). |
EditDateTime | string, datetime | A timestamp of when the receipt was last edited (modified). |
CreateDateTime | string, datetime | A timestamp of when the receipt was created. |
ReceiptDateTime | string, datetime | A timestamp of when <span class="ir">????????</span> |
SOID | string, guid | A unique identifier of the related sales order. <span class="ir">????????</span> |
LargeMemo | string | Misc. notes about the receipt. |
DestTaxZoneId | string, guid | A unique identifier of the destination tax zone. |
LocationId | string, guid | A unique identifier of the location where <span class="ir">????????</span> |
ShipToLastName | string | The last name of the ship to customer. |
ShipToFirstName | string | The first name of the ship to customer. |
ShipToMiddleName | string | The middle name of the ship to customer. |
ShipToAddress1 - 2 | string | The lines (up to two) of the ship to customer's street address. |
ShipToCity | string | The ship to customer's city. |
ShipToState | string | The ship to customer's state. |
ShipToPostalCode | string | The ship to customer's postal (zip) code. |
ShipToOrganization | string | The ship to customer's organization. |
ShipToPhone1 - 3 | string | The phone numbers (up to three) for the ship to customer. |
BillToPhone1 - 3 | string | The phone numbers (up to three) for the bill to customer. |
BillToCustomerId | string, guid | A unique identifier of the bill to customer. |
ShipToCustomerId | string, guid | A unique identifier of the ship to customer. |
ShipMethodId | string, guid | A unique identifier of the shipping method used. |
CustomDate1 - 4 | string, datetime | These four fields are customizable date values for the receipt. |
CustomDecimal1 - 4 | double | These fourx fields are customizable floating-point number values for the receipt. |
CustomFlag1 - 4 | string | These four fields are customizable flags for the receipt. |
CustomLookup1 - 8 | string | These eight fields are customizable lookup values for the receipt. |
CustomNumber1 - 4 | int32 | These four fields are customizable integer number values for the receipt. |
CustomText1 - 8 | string | These eight fields are customizable text values for the receipt. |
DocSalespersonId | string | A unique identifier of the <span class="ir">????????</span> |
SellToCustomerId | string, guid | A unique identifier of the sell to customer. |
SellToLastName | string | The last name of the sell to customer. |
SellToFirstName | string | The first name of the sell to customer. |
SellToMiddleName | string | The middle name of the sell to customer. |
SellToAddress1 - 2 | string | The lines (up to two) of the sell to customer's street address. |
SellToCity | string | The sell to customer's city. |
SellToState | string | The sell to customer's state. |
SellToPostalCode | string | The sell to customer's postal (zip) code. |
SellToPhone1 - 3 | string | The phone numbers (up to three) for the sell to customer. |
SellToOrganization | string | The sell to customer's organization. |
BillToCountryCode | string | An identifier of the bill to customer's country. |
ShipToCountryCode | string | An identifier of the ship to customer's country. |
SellToCountryCode | string | An identifier of the sell to customer's country. |
SourceTaxZoneId | string, guid | A unique identifier of the source tax zone. |
ReversedDocumentId | string, guid | A unique identifier of the reversed receipt. |
SellToGender | int32 | An indicator of the sell to customer's gender. |
SellToBirthdate | string, datetime | A timestamp of the sell to customer's birth date. |
DiscOverrideCode | string | The discount override code which was applied. |
IsDropShipment | boolean | An indicator as to whether or not the receipt<span class="ir">????????</span> is a drop shipment. |
TaxExempt | boolean | An indicator as to whether or not the receipt<span class="ir">????????</span> is tax exempt. |
SellToEmail1 | string | An email address for the sell to customer. |
BillToEmail1 | string | An email address for the bill to customer. |
StateDate | string, datetime | A timestamp of when <span class="ir">????????</span> |
TotalAmountWithoutTax | double | The receipt's total amount without taxes. |
TotalAmountWithTax | double | The receipt's total amount with taxes. |
TotalQty | double | The receipt's total quantity. |
TransactionType | int32 | An indicator of the receipt's transaction type. |
Status | int32 | An indicator of the receipt's status. |
MembershipCode | string | An identifier of the <span class="ir">????????</span> customer's membership. |
MembershipEndDate | string, datetime | A timestamp of when the <span class="ir">????????</span> customer's membership ends. |
SellToWholesaleCustomer | boolean | An indicator as to whether or not the sell to customer is a wholesaler. |
SellToTradingPartner | boolean | An indicator as to whether or not the sell to customer is a trading partner. |
BillToWholesaleCustomer | boolean | An indicator as to whether or not the bill to customer is a wholesaler. |
BillToTradingPartner | boolean | An indicator as to whether or not the bill to customer is a trading partner. |
ShipToWholesaleCustomer | boolean | An indicator as to whether or not the ship to customer is a wholesaler. |
ShipToTradingPartner | boolean | An indicator as to whether or not the ship to customer is a trading partner. |
PersonCustomerId | string, guid | A unique identifier of <span class="ir">????????</span> |
SellToIsUniversal | boolean | An indicator as to whether or not the sell to customer is universal. <span class="ir">????????</span> |
MembershipLevelId | string, guid | A unique identifier of the membership level applied to the receipt. <span class="ir">????????</span> |
PriceLevelCode | string | An identifier of the price level applied to the receipt. <span class="ir">????????</span> |
DeviceTransactionNumber | int64 | The transaction number on the device used for the receipt. |
DeviceId | string | An identifier of the device used for the receipt. |
DeviceUniqueId | string, guid | A unique identifier of the device used for the receipt. |
SellToPhone4 | string | The fourth phone number for the sell to customer. |
BillToPhone4 | string | The fourth phone number for the bill to customer. |
ShipToPhone4 | string | The fourth phone number for the ship to customer. |
EmailAddress | string | The email address for <span class="ir">????????</span> |
ShipToEmail | string | The ship to customer's email address. |
SellToBirthdateText | string | The birthday text for the sell to customer. |
BillToBirthdateText | string | The birthday text for the bill to customer. |
ShipToBirthdateText | string | The birthday text for the ship to customer. |
BillToMembershipLvlName | string | The name of the bill to customer's membership level. |
BillToMembershipEndDate | string, datetime | A timestamp of when the bill to customer's membership ends. |
ShipToMembershipLvlName | string | The name of the ship to customer's membership level. |
ShipToMembershipEndDate | string, datetime | A timestamp of when the ship to customer's membership ends. |
WebReceiptId | string, guid | A unique identifier of the receipt when generated online. <span class="ir">????????</span> |
MembershipLevelOverrideId | string, guid | A unique identifier of the membership level override applied to the receipt. <span class="ir">????????</span> |
MembershipLevelOverrideEmployeeId | string, guid | A unique identifier of the employee who applied the membership level override. <span class="ir">????????</span> |
MembershipPriceLevelCode | string | An identifier of the membership price level used. <span class="ir">????????</span> |
ChannelName | string | The name of the sales channel used. <span class="ir">????????</span> |
WebOrderNo | string | An identifier of web order for the receipt. <span class="ir">????????</span> |
ReceiptCode | string | An identifier of the receipt. <span class="ir">????????</span> |
CashRoundingPrecision | double | <span class="ir">????????</span> |
ShipToType | string, enum | An indicator of the ship to type. Its value must be one of the following: "DoNotShip", "ToCustomer", "StorePickup", "ToStore". |
StorePickupLocationId | string | A unique identifier of the location where a store pickup will be done. |
ShipToAddress3 - 4 | string | The third and fourth lines of the ship to street address. |
ShipToIsManualEntry | boolean | An indicator as to whether or not the ship to information was manually entered. <span class="ir">????????</span> |
ShipToIsStorePickup | boolean | An indicator as to whether or not the *shipment* will actually be picked up in a store. |
AltDeviceTransactionNumber | string | The alternate transaction number on the device used for the receipt. |
FillFromLocationId | string, guid | A unique identifier of the location the recipt was filled from. <span class="ir">????????</span> |
GlobalDiscountIsPercentBased | boolean | An indicator as to whether or not the global discount was applied as a percentage. |
GlobalDiscountPercent | double | The global discount percentage applied. |
ShipToAVSPerformed | boolean | An indicator as to whether or not address verification has been performed for the ship to address. |
UtcOffset | double | The offset from UTC time of the receipt's time zone. |
ShipToAddress5 | string | The fifthh line of the ship to street address. |
ShipToFiscalCode | string | The fiscal code for the ship to address. |
BillToAddress3 - 5 | string | The third through fifth lines of the bill to street address. |
BillToFiscalCode | string | The fiscal code for the bill to address. |
SellToAddress3 - 5 | string | The third through fifth lines of the sell to street address. |
SellToFiscalCode | string | The fiscal code for the sell to address. |
ExternalId | string | An identifier of the reversed receipt used when interacting with an external system. |
ShipItemLocationId | string, guid | A unique identifier of <span class="ir">????????</span> |
TaxCalculationService | int32 | An identifier of the tax calculation service used for the receipt. <span class="ir">????????</span> |
SaleTime | int32 | <span class="ir">????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: ReversedDocument</span> |


<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Receipts</span> |
CashRoundingPrecision | double | The precision level to use when rounding cash values. <span class="ir">????????</span> |


<span class="api-gn">Response: Receipts: TaxExemptInfo</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
ADDRESS_1 - 2 | string | The lines (up to two) of the street address which is tax exempt. |
CHILD_NAME | string | <span class="ir">????????</span> |
CITY | string | The tax exempt city. |
COUNTRY | string | The tax exempt country. |
FIRST_NAME | string | The first name of the tax exempt customer. |
LAST_NAME | string | The last name of the tax exempt customer. |
ORGANIZATION_NAME | string | The name of the tax exempt customer's organization. |
PHONE | string | The tax exempt customer's phone number. |
POSTAL_CODE | string | The tax exempt postal (zip) code. |
STATE | string | The tax exempt state. |
TAX_EXEMPT_NUM | string | The customer's tax exemption number. |
TAX_EXEMPT_REASON | string | The reason the customer is tax exempt. <span class="ir">????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: TaxExemptInfo</span> |


<span class="api-gn">Response: Receipts: SellInfo</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
<span class="api-gn">Response: Receipts: SellInfo: Customer</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
CustomerId |string, guid | A unique identifier of the customer. |
IsDeleted | boolean | An indicator as to whether or not the record has been deleted. |
FirstName | string | The customer's first name. |
LastName | string | The customer's last name. |
Title | string | The customer's name's title. <span class="ir">????????</span> |
Address1 - 2 | string | THe lines (up to two) of the customer's street address. |
City | string | The customer's city. |
State | string | The customer's state. |
PostalCode | string | The customer's postal (zip) code. |
Phone1 - 3 | string | THe phone numbers (up to three) for the customer. |
Gender | int32 | An indicator of the customer's gender. |
CreateEmployeeId | string, guid | A unique identifier of the employee who created the customer record. |
EditEmployeeId | string, guid | A unique identifier of the employee who last edited (modified) the customer record. |
EMail1 - 2 | string | The email addresses (up to two) for the customer. |
Birthdate  | string, datetime | A timestamp of the customer's birth date. |
Anniversarydate  | string, datetime | A timestamp of the customer's anniversary date. |
TaxExempt | boolean | An indicator as to whether or not the customer is tax exempt. |
Organization | string | An identifier of the customer's organization. |
CountryId | string, guid | A unique identifier of the customer's country. |
DefaultShipMethodId | string, guid | A unique identifier of the default ship methid to use for the customer. |
LargeMemo | string | Misc. notes about the customer. |
MiddleName | string | The customer's middle name. |
Phone4 | string | The fourth phone number for the customer. |
IsCompany | boolean | An indicator as to whether or not the customer is a company. |
CustomText1 - 6 | string | These six fields are customizable text values for the customer. |
CustomDate1 - 6 | string, datetime | These six fields are customizable date values for the customer. |
CustomFlag1 - 6 | string | These six fields are customizable flags for the customer. |
CustomNumber1 - 6 | int32 | These six fields are customizable integer number values for the customer. |
CustomDecimal1 - 6 | double | These six fields are customizable floating-point number values for the customer. |
CustomLookup1 - 12 | string | These twelve fields are customizable lookup values for the customer. |
VATRegistrationNumber | string | The customer’s value added tax registration number. |
TaxExemptionNumber | string | The customer’s tax exemption number. |
PreferredLocationId | string, guid | A unique identifier of the customer's preferred location (store). <span class="ir">????????</span> |
HomePage | string | The customer’s web home page. |
BDDay | int32 | The customer's birth date day. |
BDMonth | int32 | The customer's birth date month. |
BDYear | int32 | The customer's birth date year. |
MembershipEndDate | string, datetime | A timestamp of when the customer's membership ended/will end. <span class="ir">????????</span> |
MembershipCode | string | The customer’s membership code. |
MembershipDays | int32 | The number of days the customer has been a member. <span class="ir">????????</span> |
WholesaleCustomer | boolean | An indicator as to whether or not the customer is a wholesale customer. |
TradingPartner | boolean | An indicator as to whether or not the customer is a trading partner. |
TradingPartnerId | string | The customer’s trading partner id (if the customer is a trading partner). |
MembershipLevelId | string, guid | A unique identifier of the customer's membership level. |
CustomerNo | string | An identifier of the customer. |
Login | string | <span class="ir">????????</span> |
PriceLevelId | string, guid | A unique identifier of the customer's price level. |
CreatedAtLocationId | string, guid | A unique identifier of the location where the customer's record was created. |
Active | boolean | An indicator as to whether or not the customer is active. |
CreateDateTime | string, datetime | A timestamp of when the customer's record was created. |
EditDateTime | string, datetime | A timestamp of when the customer's record was last edited (modified). |
AcceptMarketing | boolean | An indicator as to whether or not the customer will accept marketing emails. |
StatusId | string, guid | A unique identifier of the customer's status. |
Employee | boolean | An indicator as to whether or not the customer is an employee. |
ImageGUId | string, guid | A unique identifier of an image file for the customer. |
Phone1Digits - Phone4Digits | string | These four fields are only the digits of the customer's phone numbers (up to four). | 
PrimaryContactID | string, guid | A unique identifier of the customer's primary contact person. |
AcceptMarketing1 - 2 | boolean | These two fields are indicators as to whether or not the customer will accept marketing emails. <span class="ir">????????</span> |
EID | string | An identifier of the customer used when interacting with an external system. |
AcceptTransactional1 - 2 | boolean | These two fields are indicators as to whether or not the customer will accept transactional emails. |
OverrideMembershipLevelId | string, guid | A unique identifier of <span class="ir">????????</span> |
OverrideMembershipEndDate | string, datetime | A timestamp of when <span class="ir">????????</span> |
AVSPerformed | boolean | An indicator as to whether or not address verification has been performed on the customer's addrees. |
PreferredPhone | int32 | An indicator of the custeomr's preferred phone number to be used. |
Address3 - 5 | string | Up to three additional lines for the customer's street address. |
FiscalCode | string | The code under which the customer is registered with the government. |
MergedToID | string, guid |  A unique identifier of the customer to which this customer has been merged. <span class="ir">????????</span> |
CustomerNoGeneratedDeviceId | string, guid | A unique iodetifier of the device on which the customer number was generated. |
Suffix | string | The suffix of the customer's name. |
MagentoID | string | The customer’s Magento id. |
PayPalID | string | The customer’s PayPal id. |
PreferredAssociateID | string, guid | A unique identifier of the customer's preferred associate (employee). |
MembershipType | int32 | An indicator of the customer's membership type. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: SellInfo: Customer</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Receipts: SellInfo</span> |
WholesaleCustomer | boolean | An indicator as to whether or not the sell to customer is a wholesale customer. |
TradingPartner | boolean | An indicator as to whether or not the sell to customer is a trading partner. |
FiscalCode | string | The code under which the sell to customer is registered with the government. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: SellInfo</span> |


<span class="api-gn">Response: Receipts: BillInfo</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
<span class="api-gn">Response: Receipts: BillInfo: Customer</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
CustomerId |string, guid | A unique identifier of the customer. |
IsDeleted | boolean | An indicator as to whether or not the record has been deleted. |
FirstName | string | The customer's first name. |
LastName | string | The customer's last name. |
Title | string | The customer's name's title. <span class="ir">????????</span> |
Address1 - 2 | string | THe lines (up to two) of the customer's street address. |
City | string | The customer's city. |
State | string | The customer's state. |
PostalCode | string | The customer's postal (zip) code. |
Phone1 - 4 | string | The phone numbers (up to four) for the customer. |
Gender | int32 | An indicator of the customer's gender. |
CreateEmployeeId | string, guid | A unique identifier of the employee who created the customer record. |
EditEmployeeId | string, guid | A unique identifier of the employee who last edited (modified) the customer record. |
EMail1 - 2 | string | The email addresses (up to two) for the customer. |
Birthdate  | string, datetime | A timestamp of the customer's birth date. |
Anniversarydate  | string, datetime | A timestamp of the customer's anniversary date. |
TaxExempt | boolean | An indicator as to whether or not the customer is tax exempt. |
Organization | string | An identifier of the customer's organization. |
CountryId | string, guid | A unique identifier of the customer's country. |
DefaultShipMethodId | string, guid | A unique identifier of the default ship methid to use for the customer. |
LargeMemo | string | Misc. notes about the customer. |
MiddleName | string | The customer's middle name. |
IsCompany | boolean | An indicator as to whether or not the customer is a company. |
CustomText1 - 6 | string | These six fields are customizable text values for the customer. |
CustomDate1 - 6 | string, datetime | These six fields are customizable date values for the customer. |
CustomFlag1 - 6 | string | These six fields are customizable flags for the customer. |
CustomNumber1 - 6 | int32 | These six fields are customizable integer number values for the customer. |
CustomDecimal1 - 6 | double | These six fields are customizable floating-point number values for the customer. |
CustomLookup1 - 12 | string | These twelve fields are customizable lookup values for the customer. |
VATRegistrationNumber | string | The customer’s value added tax registration number. |
TaxExemptionNumber | string | The customer’s tax exemption number. |
PreferredLocationId | string, guid | A unique identifier of the customer's preferred location (store). <span class="ir">????????</span> |
HomePage | string | The customer’s web home page. |
BDDay | int32 | The customer's birth date day. |
BDMonth | int32 | The customer's birth date month. |
BDYear | int32 | The customer's birth date year. |
MembershipEndDate | string, datetime | A timestamp of when the customer's membership ended/will end. <span class="ir">????????</span> |
MembershipCode | string | The customer’s membership code. |
MembershipDays | int32 | The number of days the customer has been a member. <span class="ir">????????</span> |
WholesaleCustomer | boolean | An indicator as to whether or not the customer is a wholesale customer. |
TradingPartner | boolean | An indicator as to whether or not the customer is a trading partner. |
TradingPartnerId | string | The customer’s trading partner id (if the customer is a trading partner). |
MembershipLevelId | string, guid | A unique identifier of the customer's membership level. |
CustomerNo | string | An identifier of the customer. |
Login | string | <span class="ir">????????</span> |
PriceLevelId | string, guid | A unique identifier of the customer's price level. |
CreatedAtLocationId | string, guid | A unique identifier of the location where the customer's record was created. |
Active | boolean | An indicator as to whether or not the customer is active. |
CreateDateTime | string, datetime | A timestamp of when the customer's record was created. |
EditDateTime | string, datetime | A timestamp of when the customer's record was last edited (modified). |
AcceptMarketing | boolean | An indicator as to whether or not the customer will accept marketing emails. |
StatusId | string, guid | A unique identifier of the customer's status. |
Employee | boolean | An indicator as to whether or not the customer is an employee. |
ImageGUId | string, guid | A unique identifier of an image file for the customer. |
Phone1Digits - Phone4Digits | string | These four fields are only the digits of the customer's phone numbers (up to four). | 
PrimaryContactID | string, guid | A unique identifier of the customer's primary contact person. |
AcceptMarketing1 - 2 | boolean | These two fields are indicators as to whether or not the customer will accept marketing emails. <span class="ir">????????</span> |
EID | string | An identifier of the customer used when interacting with an external system. |
AcceptTransactional1 - 2 | boolean | These two fields are indicators as to whether or not the customer will accept transactional emails. |
OverrideMembershipLevelId | string, guid | A unique identifier of <span class="ir">????????</span> |
OverrideMembershipEndDate | string, datetime | A timestamp of when <span class="ir">????????</span> |
AVSPerformed | boolean | An indicator as to whether or not address verification has been performed on the customer's addrees. |
PreferredPhone | int32 | An indicator of the custeomr's preferred phone number to be used. |
Address3 - 5 | string | Up to three additional lines for the customer's street address. |
FiscalCode | string | The code under which the customer is registered with the government. |
MergedToID | string, guid |  A unique identifier of the customer to which this customer has been merged. <span class="ir">????????</span> |
CustomerNoGeneratedDeviceId | string, guid | A unique iodetifier of the device on which the customer number was generated. |
Suffix | string | The suffix of the customer's name. |
MagentoID | string | The customer’s Magento id. |
PayPalID | string | The customer’s PayPal id. |
PreferredAssociateID | string, guid | A unique identifier of the customer's preferred associate (employee). |
MembershipType | int32 | An indicator of the customer's membership type. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: BillInfo: Customer</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Receipts: BillInfo</span> |
WholesaleCustomer | boolean | An indicator as to whether or not the bill to customer is a wholesale customer. |
TradingPartner | boolean | An indicator as to whether or not the bill to customer is a trading partner. |
FiscalCode | string | The code under which the bill to customer is registered with the government. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: BillInfo</span> |


<span class="api-gn">Response: Receipts: ShipInfo</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
<span class="api-gn">Response: Receipts: ShipInfo: Customer</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
CustomerId |string, guid | A unique identifier of the customer. |
IsDeleted | boolean | An indicator as to whether or not the record has been deleted. |
FirstName | string | The customer's first name. |
LastName | string | The customer's last name. |
Title | string | The customer's name's title. <span class="ir">????????</span> |
Address1 - 2 | string | THe lines (up to two) of the customer's street address. |
City | string | The customer's city. |
State | string | The customer's state. |
PostalCode | string | The customer's postal (zip) code. |
Phone1 - 3 | string | The phone numbers (up to three) for the customer. |
Gender | int32 | An indicator of the customer's gender. |
CreateEmployeeId | string, guid | A unique identifier of the employee who created the customer record. |
EditEmployeeId | string, guid | A unique identifier of the employee who last edited (modified) the customer record. |
EMail1 - 2 | string | The email addresses (up to two) for the customer. |
Birthdate  | string, datetime | A timestamp of the customer's birth date. |
Anniversarydate  | string, datetime | A timestamp of the customer's anniversary date. |
TaxExempt | boolean | An indicator as to whether or not the customer is tax exempt. |
Organization | string | An identifier of the customer's organization. |
CountryId | string, guid | A unique identifier of the customer's country. |
DefaultShipMethodId | string, guid | A unique identifier of the default ship methid to use for the customer. |
TaxZoneId | string, guid | A unique identifier of the customer's tax zone. |
LargeMemo | string | Misc. notes about the customer. |
MiddleName | string | The customer's middle name. |
Phone4 | string | The fourth phone number for the customer. |
IsCompany | boolean | An indicator as to whether or not the customer is a company. |
CustomText1 - 6 | string | These six fields are customizable text values for the customer. |
CustomDate1 - 6 | string, datetime | These six fields are customizable date values for the customer. |
CustomFlag1 - 6 | string | These six fields are customizable flags for the customer. |
CustomNumber1 - 6 | int32 | These six fields are customizable integer number values for the customer. |
CustomDecimal1 - 6 | double | These six fields are customizable floating-point number values for the customer. |
CustomLookup1 - 12 | string | These twelve fields are customizable lookup values for the customer. |
VATRegistrationNumber | string | The customer’s value added tax registration number. |
TaxExemptionNumber | string | The customer’s tax exemption number. |
PreferredLocationId | string, guid | A unique identifier of the customer's preferred location (store). <span class="ir">????????</span> |
HomePage | string | The customer’s web home page. |
BDDay | int32 | The customer's birth date day. |
BDMonth | int32 | The customer's birth date month. |
BDYear | int32 | The customer's birth date year. |
MembershipEndDate | string, datetime | A timestamp of when the customer's membership ended/will end. <span class="ir">????????</span> |
MembershipCode | string | The customer’s membership code. |
MembershipDays | int32 | The number of days the customer has been a member. <span class="ir">????????</span> |
WholesaleCustomer | boolean | An indicator as to whether or not the customer is a wholesale customer. |
TradingPartner | boolean | An indicator as to whether or not the customer is a trading partner. |
TradingPartnerId | string | The customer’s trading partner id (if the customer is a trading partner). |
MembershipLevelId | string, guid | A unique identifier of the customer's membership level. |
CustomerNo | string | An identifier of the customer. |
Login | string | <span class="ir">????????</span> |
PriceLevelId | string, guid | A unique identifier of the customer's price level. |
CreatedAtLocationId | string, guid | A unique identifier of the location where the customer's record was created. |
Active | boolean | An indicator as to whether or not the customer is active. |
CreateDateTime | string, datetime | A timestamp of when the customer's record was created. |
EditDateTime | string, datetime | A timestamp of when the customer's record was last edited (modified). |
AcceptMarketing | boolean | An indicator as to whether or not the customer will accept marketing emails. |
StatusId | string, guid | A unique identifier of the customer's status. |
Employee | boolean | An indicator as to whether or not the customer is an employee. |
ImageGUId | string, guid | A unique identifier of an image file for the customer. |
Phone1Digits - Phone4Digits | string | These four fields are only the digits of the customer's phone numbers (up to four). | 
PrimaryContactID | string, guid | A unique identifier of the customer's primary contact person. |
AcceptMarketing1 - 2 | boolean | These two fields are indicators as to whether or not the customer will accept marketing emails. <span class="ir">????????</span> |
EID | string | An identifier of the customer used when interacting with an external system. |
AcceptTransactional1 - 2 | boolean | These two fields are indicators as to whether or not the customer will accept transactional emails. |
OverrideMembershipLevelId | string, guid | A unique identifier of <span class="ir">????????</span> |
OverrideMembershipEndDate | string, datetime | A timestamp of when <span class="ir">????????</span> |
AVSPerformed | boolean | An indicator as to whether or not address verification has been performed on the customer's addrees. |
PreferredPhone | int32 | An indicator of the custeomr's preferred phone number to be used. |
Address3 - 5 | string | Up to three additional lines for the customer's street address. |
FiscalCode | string | The code under which the customer is registered with the government. |
MergedToID | string, guid |  A unique identifier of the customer to which this customer has been merged. <span class="ir">????????</span> |
CustomerNoGeneratedDeviceId | string, guid | A unique iodetifier of the device on which the customer number was generated. |
Suffix | string | The suffix of the customer's name. |
MagentoID | string | The customer’s Magento id. |
PayPalID | string | The customer’s PayPal id. |
PreferredAssociateID | string, guid | A unique identifier of the customer's preferred associate (employee). |
MembershipType | int32 | An indicator of the customer's membership type. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: ShipInfo: Customer</span> |
<span class="api-gn">Response: Receipts: ShipInfo: ShipMethod</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
ShippingMethodID |string, guid | A unique identifier of the shipping method. |
IsDeleted | boolean | An indicator as to whether or not the record has been deleted. |
DeliveryDays | int32 | The number of days it waill take to deliver using this ship method. <span class="ir">????????</span> |
ListOrder | int32 | The order the shipping method will appear in the user interface. |
Description | string | A description of the shipping method. |
ECommerceFlag | boolean | An indicator as to whether or not thes hipping method can be used for ecommerce orders. <span class="ir">????????</span> |
ECommerceAlias | string | An alias for the shipping method to be used for ecommerce orders. <span class="ir">????????</span> |
Code | string | An identifier of the shipping method. <span class="ir">????????</span> |
TrackingUrl | string | The tracking URL (universal resource locator) to be used for the shipping method. <span class="ir">????????</span> |
ShippingServiceAvailable | boolean | An indicator as to whether or not a shipping service is available. |
IsDefaultShippingService | boolean | AN indicator as to whether or not this shipping method is the default method for the customer. |
ShippingServiceId | string | An identifier of the shipping service used for the shipping method. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: ShipInfo: ShipMethod</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Receipts: ShipInfo</span> |
WholesaleCustomer | boolean | An indicator as to whether or not the ship to customer is a wholesale customer. |
TradingPartner | boolean | An indicator as to whether or not the ship to customer is a trading partner. |
FiscalCode | string | The code under which the ship to customer is registered with the government. |
WholesaleCustomer | boolean | An indicator as to whether or not the bill to customer is a wholesale customer. |
TradingPartner | boolean | An indicator as to whether or not the bill to customer is a trading partner. |
FiscalCode | string | The code under which the bill to customer is registered with the government. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: ShipInfo</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Receipts</span> |
LargeMemo | string | Misc. noed abpout the receipt. |
CustomDate1 - 4 | string, datetime | These four fields are customizable date values for the receipt. |
CustomDecimal1 - 4 | double | These four fields are customizable floating-point number values for the receipt. |
CustomFlag1 - 4 | string | These four fields are customizable flags for the receipt. |
CustomLookup1 - 8 | string | These eight fields are customizable lookup values for the receipt. |
CustomNumber1 - 4 | int32 | These four fields are customizable integer number values for the receipt. |
CustomText1 - 8 | string | These eight fields are customizable text values for the receipt. |


<span class="api-gn">Response: Receipts: ReceiptCharges</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
LineNo | int32 | The line in the receipt where the charge appears.<span class="ir">????????</span> |
ChargeType | string, enum | An indicator of the charge type. Its value must be one of the following: "GiftCard", "GiftCert", "Credit", "SOItemDeposit", "SODeposit", "HouseCharge". |
Amount | double | The amount of the charge. |
AccountNum | string | An identifier of the account used for the charge.
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: ReceiptCharges</span> |


<span class="api-gn">Response: Receipts: ReceiptFees</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
LineNo | int32 | The line in the receipt where the fee appears. <span class="ir">????????</span> |
ItemChargeCode | string | An identifier of the fee charged. <span class="ir">????????</span> |
ItemChargeType | string, enum | An indicator of the charge type. Its value must be one of the following: "Empty", "Shipping", "Insurance", "RestockingFee". |
Qty | double | The item quantity to which the fee was applied. <span class="ir">????????</span> |
UnitPrice | double | The item's unit price. |
ExtPrice | double | The item's extended price. |
ExtPriceWithTax | double | The item's extended price including taxes. | 
<span class="api-gn">Response: Receipts: ReceiptFees: TaxCategory</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
TaxCategoryID | string, guid | A unique identifier of the tax category. |
IsDeleted | boolean | An indicator as to whether or not the record has been deleted. |
ParentID | string, guid | A unique identifier of <span class="ir">????????</span> |
Name | string | The name of the tax category. |
Description | string | A description of the tax category. |
LocationID | string, guid | A unique identifier of the location to which the tax category applies. <span class="ir">????????</span> |
ExternalId | string | An iden tifier of the tax category used when interacting with an external system. |
IsIPI | boolean | An indicator as to whether or not this is a Brazilian IPI tax. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: ReceiptFees: TaxCategory</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Receipts: ReceiptFees</span> |
LargeMemo | string | Misc. notes about the fee. |
Spread | boolean | An indicator as to whether or not the fee is applied to a single item or spread amongst multiple items. |
SpreadType | string, enum | An indicator of how the fee is spread (if it spread). Its value must be one of the following: "Price", "Weight". |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: ReceiptFees</span> |


<span class="api-gn">Response: Receipts: Items</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
LineNo | int32 | The line in the receipt where the item appears. <span class="ir">????????</span> |
ItemType | string, enum | An indicator of the item's type. Its value must be one of the following: "Regular", "Membership", "StoreCreditAdjustment", "RentalQtyAdjustment", "GiftCardAdjustment", "RentalFees", "TokensAdjustment", "TokensRedeem", "LoyaltyRewardsAdjustment", "VirtualGiftCard", "PhysicalGiftCard", "Charge", "Unknown". |

<span class="api-gn">Response: Receipts: Items: ItemDetails</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
ItemId | string, guid | A unique identifier of the item. |
PLU | int32 | The item's product lookup code. |
CLU | string | The item's custom lookup code. |
UPC | string | The item's universal product code. |
StyleNo | string | An identifier of the item's style. |
ExternalId | string | An identifier of the item used when interacting with an external system. |
<span class="api-gn">Response: Receipts: Items: ItemDetails: ItemDescription</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
Description | string | The first description of the item. |
Description2 - 4 | string | The second throug fourth descriptions of the item. **Description4** is often referred to as the *Store Description*.|
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: ItemDetails: ItemDescription</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Receipts: Items: ItemDetails</span> |
Attribute1 - 3 | string | These three fields are the item’s attributes. |
ItemType | string, enum | An indicator of the item's type. Its value must be one of the following: "Style", "SingleItem", "ServiceItem". |

<span class="api-gn">Response: Receipts: Items: ItemDetails: DCSS</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
DCSSCode | string | The department classification code for the item. |
Alias | string | An alias for the item’s department classification code. |
DeptCode | string | The code for the department of the item. |
DeptName | string | The name for the department of the item. |
DeptAlias | string | An alias for the department of the item. |
ClassCode | string | The code for the class of the item. |
ClassName | string | The name for the class of the item. |
ClassAlias | string | An alias for the class of the item. |
SubClass1Code | string | The code for the first subclass of the item. |
SubClass1Name | string | The name for the first subclass of the item. |
SubClass1Alias | string | An alias for the first subclass of the item. |
SubClass2Code | string | The code for the second subclass of the item. |
SubClass2Name | string | The name for the second subclass of the item. |
SubClass2Alias | string | An alias for the second subclass of the item. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: ItemDetails: DCSS</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Receipts: Items: ItemDetails</span> |
BasePrice | double | The item's base price. |

<span class="api-gn">Response: Receipts: Items: ItemDetails: Style</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
CustomDate1 - 12 | string, datetime | These twelve fields are customizable date values for the style. |
CustomDecimal1 - 12 | double | These twelve fields are customizable floating-point number values for the style. |
CustomFlag1 - 18 | string | These eighteen fields are customizable flags for the style. |
CustomLookup1 - 12 | string | These twelve fields are customizable lookup values for the style. |
CustomNumber1 - 12 | int32 | These twelve fields are customizable integer number values for the style. |
CustomText1 - 12 | string | These twelve fields are customizable text values for the style. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: ItemDetails: Style</span> |

<span class="api-gn">Response: Receipts: Items: ItemDetails: Item</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
CustomDate1 - 6 | string, datetime | These six fields are customizable date values for the style. |
CustomDecimal1 - 6 | double | These six fields are customizable floating-point number values for the style. |
CustomFlag1 - 6 | string | These six fields are customizable flags for the style. |
CustomLookup1 - 12 | string | These twelve fields are customizable lookup values for the style. |
CustomNumber1 - 6 | int32 | These six fields are customizable integer number values for the style. |
CustomText1 - 6 | string | These six fields are customizable text values for the style. |
RMAcode | string | The item's return merchandise authorization code. |
RmaDeviceTransactionNumber | int64 | The item's return merchandise authorization transaction number on the device used to create the authorization. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: ItemDetails: Item</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: ItemDetails</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Receipts: Items</span> |
Qty | double | The quantity of the item. |
PriceLevelCode | string | An identifier of the item's price level. |
PriceChangeReasonCode | string | An identifier of the reason for a price change for the item. |

<span class="api-gn">Response: Receipts: Items: MembershipLevel</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
MembershipLevelID | string, guid | A unique identifier of the membership level. |
IsDeleted | boolean | An indicator as to whether or not the record has been deleted. |
Name | string | The name of the membership level. |
Description | string | A description of the membership level. |
Level | int32 | An indicator of the membership level's level. |
DayLength | int32 | <span class="ir">????????</span> |
NormalPrice | double | The item's normal price for the membership level. |
SaleDiscountPercent | double | The item's sales discount percentage for the membership level. |
SalesDiscountSource | int32 | <span class="ir">????????</span> |
Inactive | boolean | An indicator as to whether or not the membership level is active. |
LocationID | string, guid | A unique identifier of the location where <span class="ir">????????</span> |
PriceLevelId | string, guid | A unique identifier of the price level which applies to the membership level. |
LRPEligible | boolean | An indicator as to whether or not the membership level is eligible for loyalty rewards points. |
ItemId | string, guid | A unique identifier of the item within the membership level. <span class="ir">????????</span> |
DayLengthRewarded | int32 | <span class="ir">????????</span> |
NeededAmount | double | <span class="ir">????????</span> |
CustomText1 - 6 | string | These six fields are customizable text values for the membership level. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: MembershipLevel</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Receipts: Items</span> |
SalePrice | double | The item's sale price. |

<span class="api-gn">Response: Receipts: Items: LineDiscounts</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
ReceiptDiscountId | string, guid | A unique identifier of the discount in the receipt. |
InputSequence | int32 | <span class="ir">????????</span> |
DiscountAmount | double | The discount amount. |
DiscountPercent | double | The discount percentage. |
InputSource | int32 | <span class="ir">????????</span> |
CascadeFlag | boolean | An indicator as to whether or not the discount <span class="ir">????????</span> |
MaxDiscountPercent | double | The maximum allowed discount percentage. |
CascadeAmount | double | <span class="ir">????????</span> |
PromoExcluded | boolean | An indicator as to whether or not the discount can be included with promotions. <span class="ir">????????</span> |
OverrideCode | string | The code entered to override the discount. <span class="ir">????????</span> |
ReturnedReceiptDiscountId | string, guid | A unique identifier of the discount on the original receipt when the item is being returned. |

<span class="api-gn">Response: Receipts: Items: LineDiscounts: DiscountReason</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
DiscountReasonID | string, guid | A unique identifier of the discount reason. |
IsDeleted | boolean | An indicator as to whether or not the record has been deleted. |
Code | string | An identifier of the reason. |
Description | string | A description of the reason. |
DefaultPercent | double | The discount's default percentage. |
ListOrder | int32 | The position the discount reason will appear in the user interface. |
MaxPercent | double | The maximum percentage allowed for the discount. |
Type | int32 | An indicator of the discount's type. <span class="ir">????????</span> |
ECommerceFlag | boolean | An indicator as to whether or not the discount can be applied for an ecommerce transaction. |
ECommerceAlias | string | An alias for the discount reason to be used for ecommerce transactions. |
LocationId | string, guid | A unique identifier of the location where <span class="ir">????????</span> |
RequireAuthorization | boolean | An indicator as to whether or not an authorization is required to apply the discount. |
StartDateTime | string, datetime | A timestamp of when the discount can begin to be applied. |
EndDateTime | string, datetime | A timestamp of when the discount can no longer be applied. |
Archived | boolean | An indicator as to whether or not the discount has been archived. |
CouponDiscount | boolean | An indicator as to whether or not the discount is a coupon. <span class="ir">????????</span> |
DiscountType | int32 | An indicator of the discount's type. <span class="ir">????????</span> |
DefaultDiscountAmount | double | The discount's default amount. |
PreventDiscountChange | boolean | An indicator as to whether or not the discount can be changed. |
DoNotDisplayAuthCode | boolean | An indicator as to whether or not the authorization code will be shown in the user interface. |
ExternalId | string | An identifier of the discount used when interacting with an external system. |
AuthorityLevel | int32 | <span class="ir">????????</span> |
PermitCombiningWithCustomerDiscount | boolean | An indicator as to whether or not the discount can be combined with customer discounts. |
Cascade | boolean | An indicator as to whether or not <span class="ir">????????</span> |
PromoExclude | boolean | An indicator as to whether or not the discount can be applied to promotions. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: LineDiscounts: DiscountReason</span> |

<span class="api-gn">Response: Receipts: Items: LineDiscounts: DiscountCoupon</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
ReceiptDiscountCouponId | string, guid | A unique identifier of the coupon in the receipt. <span class="ir">????????</span> |
CouponNumber | string | An identifier of the coupon. |
CouponProgramName | string | THe name of the coupon's program. |
CouponStartDate | string, datetime | A timestamp of when the coupon can begin to be applied. | 
CouponEndDate | string, datetime | A timestamp of when the coupon can no longer be applied. | 
CouponProgramId | string | An identifier of the coupon's program. |
IsReusable | boolean | An indicator as to whether or not the coupon is reusable. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: LineDiscounts: DiscountCoupon</span> |


<span class="api-gn">Response: Receipts: Items: LineDiscounts: Employee</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
EmployeeId | string, guid | A unique identifier of the employee. |
IsDeleted | boolean | An indicator as to whether or not the record has been deleted. |
EmployeeNum | int32 | An identifier of the employee. |
LoginName | string | The name the employee logged in as. |
MiddleName | string | The middle name of the employee who <span class="ir">??????????</span> |
LastName | string | The last name of the employee who <span class="ir">??????????</span> |
FirstName | string | The first name of the employee who <span class="ir">??????????</span> |
EMail1 - 2 | string | These two fields are the email addresses (up to two) for the employee who <span class="ir">??????????</span> |
MaxDiscPercent | double | <span class="ir">??????????</span> |
Universal | boolean | An indicator as to whether or not <span class="ir">??????????</span> |
Active | boolean | An indicator as to whether or not the employees is active. <span class="ir">??????????</span> |
Type | int32 | <span class="ir">??????????</span> |
ExpirationDate | string, datetime | <span class="ir">??????????</span> |
MaxGlobalDiscPercent | double | <span class="ir">??????????</span> |
CustomDate1 - 6 | string, datetime | These six fields are customizable date values for the employee. <span class="ir">??????????</span> |
CustomFlag1 - 6 | string | These six fields are customizable flags for the employee. <span class="ir">??????????</span> |
CustomNumber1 - 6 | int32 | These six fields are customizable integer number values for the employee. <span class="ir">??????????</span> |
CustomDecimal1 - 6 | double | These six fields are customizable floating-point number values for the employee. <span class="ir">??????????</span> |
CustomText1 - 6 | string | These six fields are customizable text values for the employee. <span class="ir">??????????</span> |
CustomLookup1 - 12 | string | These twelve fields are customizable lookup values for the employee. <span class="ir">??????????</span> |
Code | string | <span class="ir">??????????</span> |
NickName | string | A nickname for the employee. <span class="ir">??????????</span> |
ListOrder | int32 | The order the employee will appear in the user interface. <span class="ir">??????????</span> |
JobTitle | string | The employee's job title. |
Address1 - 2 | string | The lines (up to twp) of the employee's street address. |
City | string | The employee's city. |
State | string | The employee's state. |
CountryId | string, guid | A unique identifier of the employee's country. |
PhoneNo | string | The employee's first phone number. |
MobilePhoneNo | string | The employee's mobile phone number. |
Title | string | The employee's name title |
Suffix | string | The employee's name suffix. |
Organization | string | The employee's organization. |
PostalCode | string | The employee's postal (zip) code. |
PhoneNo2 | string | The employee's second phone number. |
Fax | string | The employee's fax number. |
HomePage | string | The employee's home web page. |
IsManager | boolean | An indicator as to whether or not the employee is a manager. |
DiscRequireAuthCode | boolean | An indicator as to whether or not an authorization code is required for the employee to receive employee discounts. <span class="ir">??????????</span> |
MaxTradeAdjustmentPercent | double | The maximum amount the employee is allowed to apply to a trade-in adjustment. <span class="ir">??????????</span> |
HomeLocationId | string, guid | A unique identifier of the employee's home location (store). |
CommissionGroupId | string, guid | A unique identifier of the employee's commision group. |
AvailableInCalendar | boolean | An indicator as to whether or not the employee is available in the scheduling calendar. |
PasswordChangeDate | string, datetime | A timestamp of when the employee last changed their password. |
SecurityType | int32 | <span class="ir">??????????</span> |
OverrideRoleDiscountLimits | boolean | An indicator as to whether or not the employee can override role discount limits. <span class="ir">??????????</span> |
QrScanCode | string | <span class="ir">??????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: LineDiscounts: Employee</span> |


<span class="api-gn">Response: Receipts: Items: LineDiscounts: OverrideEmployee</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
EmployeeId | string, guid | A unique identifier of the employee. |
IsDeleted | boolean | An indicator as to whether or not the record has been deleted. |
EmployeeNum | int32 | An identifier of the employee. |
LoginName | string | The name the employee logged in as. |
MiddleName | string | The middle name of the employee who <span class="ir">??????????</span> |
LastName | string | The last name of the employee who <span class="ir">??????????</span> |
FirstName | string | The first name of the employee who <span class="ir">??????????</span> |
EMail1 - 2 | string | These two fields are the email addresses (up to two) for the employee who <span class="ir">??????????</span> |
MaxDiscPercent | double | <span class="ir">??????????</span> |
Universal | boolean | An indicator as to whether or not <span class="ir">??????????</span> |
Active | boolean | An indicator as to whether or not the employees is active. <span class="ir">??????????</span> |
Type | int32 | <span class="ir">??????????</span> |
ExpirationDate | string, datetime | <span class="ir">??????????</span> |
MaxGlobalDiscPercent | double | <span class="ir">??????????</span> |
CustomDate1 - 6 | string, datetime | These six fields are customizable date values for the employee. <span class="ir">??????????</span> |
CustomFlag1 - 6 | string | These six fields are customizable flags for the employee. <span class="ir">??????????</span> |
CustomNumber1 - 6 | int32 | These six fields are customizable integer number values for the employee. <span class="ir">??????????</span> |
CustomDecimal1 - 6 | double | These six fields are customizable floating-point number values for the employee. <span class="ir">??????????</span> |
CustomText1 - 6 | string | These six fields are customizable text values for the employee. <span class="ir">??????????</span> |
CustomLookup1 - 12 | string | These twelve fields are customizable lookup values for the employee. <span class="ir">??????????</span> |
Code | string | <span class="ir">??????????</span> |
NickName | string | A nickname for the employee. <span class="ir">??????????</span> |
ListOrder | int32 | The order the employee will appear in the user interface. <span class="ir">??????????</span> |
JobTitle | string | The employee's job title. |
Address1 - 2 | string | The lines (up to twp) of the employee's street address. |
City | string | The employee's city. |
State | string | The employee's state. |
CountryId | string, guid | A unique identifier of the employee's country. |
PhoneNo | string | The employee's first phone number. |
MobilePhoneNo | string | The employee's mobile phone number. |
Title | string | The employee's name title |
Suffix | string | The employee's name suffix. |
Organization | string | The employee's organization. |
PostalCode | string | The employee's postal (zip) code. |
PhoneNo2 | string | The employee's second phone number. |
Fax | string | The employee's fax number. |
HomePage | string | The employee's home web page. |
IsManager | boolean | An indicator as to whether or not the employee is a manager. |
DiscRequireAuthCode | boolean | An indicator as to whether or not an authorization code is required for the employee to receive employee discounts. <span class="ir">??????????</span> |
MaxTradeAdjustmentPercent | double | The maximum amount the employee is allowed to apply to a trade-in adjustment. <span class="ir">??????????</span> |
HomeLocationId | string, guid | A unique identifier of the employee's home location (store). |
CommissionGroupId | string, guid | A unique identifier of the employee's commision group. |
AvailableInCalendar | boolean | An indicator as to whether or not the employee is available in the scheduling calendar. |
PasswordChangeDate | string, datetime | A timestamp of when the employee last changed their password. |
SecurityType | int32 | <span class="ir">??????????</span> |
OverrideRoleDiscountLimits | boolean | An indicator as to whether or not the employee can override role discount limits. <span class="ir">??????????</span> |
QrScanCode | string | <span class="ir">??????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: LineDiscounts: OverrideEmployee</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: LineDiscounts</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Receipts: Items</span> |
ExtAmount | double | The item's extended amount. |
ItemChargesAmount | double | The item's item charges amount. |
LargeMemo | string | Misc. notes about the item. |


<span class="api-gn">Response: Receipts: Items: ReturnReason</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
ReturnReasonId | string, guid | A unique identifier of the return reason. |
Description | string | A desription of the reason. |
ListOrder | int32 | The position of the reason in the user interface. |
LocationId | string, guid |  A unique identifier of the location where <span class="ir">??????????</span> |
IsDeleted | boolean | An indicator as to whether or not the record has been deleted. |
Code | string | An identifier of the reason. <span class="ir">??????????</span> |
ExternalId | string | An identifier of the reason used when interacting with an external system. |
AutoTransferToLocationId | string, guid | A unique identifier of the location where <span class="ir">??????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: ReturnReason</span> |

<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Receipts: Items</span> |
IsShipToItem | boolean | An indicator as to whether or not the item is a ship to item. |
CustomDate1 - 4 | string, datetime | These four fields are customizable date values for the item. <span class="ir">??????????</span> |
CustomDecimal1 - 2 | double | These two fields are customizable floating-point number values for the item. <span class="ir">??????????</span> |
CustomFlag1 - 2 | string | These two fields are customizable flags for the item. <span class="ir">??????????</span> |
CustomLookup1 - 4 | string | These four fields are customizable lookup values for the item. <span class="ir">??????????</span> |
CustomNumber1 - 2 | int32 | These two fields are customizable integer number values for the item. <span class="ir">??????????</span> |
CustomText1 - 2 | string | These two fields are customizable text values for the item. <span class="ir">??????????</span> |

<span class="api-gn">Response: Receipts: Items: ItemFees</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
LineNo | int32 | The line in the receipt where the item fee appears. |
GlobalChargeLineNo | int32 | <span class="ir">??????????</span> |
ItemChargeCode | string | An identifier of the charge. |
ItemChargeType | string, enum | An indicator of the charge's type. Its value must be one of the following: "Empty", "Shipping", "Insurance", "RestockingFee". |
Qty | double | The charge's quanity. |
UnitPrice | double | The charge's unit price. |
ExtPrice | double | The charge's extended price. |
ExtPriceWithTax | double | The charge's extended price including any taxes. |

<span class="api-gn">Response: Receipts: Items: ItemFees: TaxCategory</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
TaxCategoryID | string, guid | A unique identifier of the tax category. |
IsDeleted | boolean | An indicator as to whether or not the record has been deleted. |
ParentID | string, guid | A unique identifier of <span class="ir">????????</span> |
Name | string | The name of the category. |
Description | string | A description of the category. |
LocationID | string, guid | A unqiue identifier of the location where <span class="ir">????????</span> |
ExternalId | string | An identifier of the category used when unteracting with an external system. |
IsIPI | boolean | An indicator as to whether or not this is a Brazilian IPI tax. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: ItemFees: TaxCategory</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Receipts: Items: ItemFees</span> |
Spread | boolean | An indicator as to whether or not the fee is applied to a single item or spread amongst multiple items. |
LargeMemo | string | Misc. notes about the fee.
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: ItemFees</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Receipts: Items</span> |
TaxExempt | boolean | An indicator as to whether or not the item is tax exempt. |


<span class="api-gn">Response: Receipts: Items: ItemFees: TaxCategory</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
TaxCategoryID | string, guid | A unique identifier of the tax category. |
IsDeleted | boolean | An indicator as to whether or not the record has been deleted. |
ParentID | string, guid | A unique identifier of <span class="ir">????????</span> |
Name | string | The name of the category. |
Description | string | A description of the category. |
LocationID | string, guid | A unqiue identifier of the location where <span class="ir">????????</span> |
ExternalId | string | An identifier of the category used when interacting with an external system. |
IsIPI | boolean | An indicator as to whether or not this is a Brazilian IPI tax. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: TaxCategory</span> |

<span class="api-gn">Response: Receipts: Items: Taxes</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
TaxAmount | double | The tax amount. |
TaxPercent | double | The tax percentage. |
DestTaxZoneCode | string | An identifier of the destination tax zone. |

<span class="api-gn">Response: Receipts: Items: Taxes: TaxCategory</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
TaxCategoryID | string, guid | A unique identifier of the tax category. |
IsDeleted | boolean | An indicator as to whether or not the record has been deleted. |
ParentID | string, guid | A unique identifier of <span class="ir">????????</span> |
Name | string | The name of the category. |
Description | string | A description of the category. |
LocationID | string, guid | A unqiue identifier of the location where <span class="ir">????????</span> |
ExternalId | string | An identifier of the category used when interacting with an external system. |
IsIPI | boolean | An indicator as to whether or not this is a Brazilian IPI tax. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: Taxes: TaxCategory</span> |

<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Receipts: Items: Taxes</span> |
SourceTaxZoneCode | string | An identifier of the source tax zone. |
TaxJurisdictionCode | string | An identifier of the tax jurisdiction. |
TaxCredit | double | <span class="ir">????????</span> |
TaxCreditStoreCredit | double | <span class="ir">????????</span> |
TaxExempt | boolean | An indicator as to whether or not <span class="ir">????????</span> |
IsCustomTaxPercent | boolean | An indicator as to whether or not <span class="ir">????????</span> |
IsCustomTaxAmount | boolean | An indicator as to whether or not <span class="ir">????????</span> |
CustomFlag1 | string | A customizable flag for the tax. |
CustomNumber1 | int32 | A customizable integer number value for the tax. <span class="ir">??????????</span> |
CustomDecimal1 | double | A customizable floating-point number value for the tax. <span class="ir">??????????</span> |
CustomLookup1 | string | A customizable lookup value for the tax. <span class="ir">??????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: Taxes</span> |


<span class="api-gn">Response: Receipts: Items: Taxes: TaxExemptInfo</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
ADDRESS_1 - 2 | string | The lines (up to two) of the street address which is tax exempt. |
CHILD_NAME | string | <span class="ir">????????</span> |
CITY | string | The tax exempt city. |
COUNTRY | string | The tax exempt country. |
FIRST_NAME | string | The first name of the tax exempt customer. |
LAST_NAME | string | The last name of the tax exempt customer. |
ORGANIZATION_NAME | string | The name of the tax exempt customer's organization. |
PHONE | string | The tax exempt customer's phone number. |
POSTAL_CODE | string | The tax exempt postal (zip) code. |
STATE | string | The tax exempt state. |
TAX_EXEMPT_NUM | string | The customer's tax exemption number. |
TAX_EXEMPT_REASON | string | The reason the customer is tax exempt. <span class="ir">????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: TaxExemptInfo</span> |


<span class="api-gn">Response: Receipts: Items: Taxes: ShipMethod</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
ShippingMethodID | string, guid | A unique identifier of the shipping method. |
IsDeleted | boolean | An indicator as to whether or not the record has been deleted. |
DeliveryDays | int32 | The shipping method's number of days until delivery. |
ListOrder | int32 | The position of the shipping method in the user interface. |
Description | string | A description of the shipping method. |
ECommerceFlag | boolean | An indicator as to whether or not the shipping method can be used for ecommerce transactions. <span class="ir">????????</span> |
ECommerceAlias | string | An alis to be used for the shipping method for ecommerce transactions. <span class="ir">????????</span> |
Code | string | An idetifier of the shipping method. |
TrackingUrl | string | The tracking URL (universal resource locator) for the shipping method. |
ShippingServiceAvailable | boolean | An indicator as to whether or not a shipping service is available. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: ShipMethod</span> |

<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Receipts: Items</span> |
TrackingNumber | string | The item's shipping tracking number. |


<span class="api-gn">Response: Receipts: Items: Taxes: SalesOrderItem</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
SalesOrderDTN | int64 | The sales order's transaction number on the device used. |
SalesOrderNo | string | An identifier of the sales order. |
SalesOrderDateTime | string, date-time | The timestamp of the sales order. <span class="ir">??????????</span> |
ListOrder | int32 | The position of the item in the user interface. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: SalesOrderItem</span> |

<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Receipts: Items</span> |
SerialNumber | string | An identifier of the item. <span class="ir">??????????</span> |
SerialNumberCustomText1 - 2 | string | These two fields are customizable text values for the serial number. <span class="ir">??????????</span> |
SerialNumberCustomNumber1 | int32 | A customizable integer number value for the serial number. <span class="ir">??????????</span> |
SerialNumberCustomDate1 | string, datetime | A customizable date value for the serial number. |
SerialNumberCustomFlag1 | string | A customizable flag for the serial number. |
SerialNumberCustomGUID1 | boolean | an indicator as to whether or not <span class="ir">??????????</span> |
COGS | double | The item's cost of goods sold value. |
UnitCOGS | double | The item's cost of goods sold value per unit. |

<span class="api-gn">Response: Receipts: Items: Taxes: Promo</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
<span class="ir">??????????</span> The body for this group is missing from the JSON schema! <span class="ir">??????????</span>
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: Promo</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items</span> |


<span class="api-gn">Response: Receipts: Payments</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
LineNo | int32 | The line in the receipt where the payment appears. |


<span class="api-gn">Response: Receipts: Payments: PaymentMethod</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
StreamingDate | string, datetime | A timestamp of when the record was streamed to the server. <span class="ir">????????</span> |
PaymentMethodID | string, guid | A unique identifier of the payment method. |
IsDeleted | boolean | An indicator as to whether or not the record has been deleted. |
Code | string | An identifier of the payment method. |
Description | string | A description of the payment method. |
AccountType | int32 | <span class="ir">????????</span> |
AllowOvercharge | boolean | An indicator as to whether or not an overcharge is allowed on the payment method. |
OverchargeAmount | double | The payment method's overcharge amount. |
OverchargePercent | double | The payment method's overcharge percentage. |
NumberRangeLow | string | <span class="ir">????????</span> |
NumberRangeHigh | string | <span class="ir">????????</span> |
ListOrder | int32 | The position of the payment method in the user interface. |
Inactive | boolean | An indicator as to whether or not the payment method is active. |
DrawerListOrder | int32 | The position of the payment method in the related drawer memo. <span class="ir">????????</span> |
CurrencyID | string, guid | A unique identifier of the currency used by the payment method. |
RequireCustomer | boolean | An indicator as to whether or not <span class="ir">????????</span> |
CheckNoRequired | int32 | <span class="ir">????????</span> |
OpenCDOnFinalize | boolean | An indicator as to whether or not <span class="ir">????????</span> |
AllowOverchargeNegative | boolean | An indicator as to whether or not a negative overcharge is allowed for the payment method. <span class="ir">????????</span> |
OverchargeAmountNegative | double | The payment methods negative overcharge amount. |
OverchargeAmountPercent | double | The payment methods negative overcharge percentage. |
ExternalId | string | An identifier of the payment method used when interacting with an external system. |
RefundOnCancel | boolean | An indicator as to whether or not the payment method allows for a refund on cancellation. <span class="ir">????????</span> |
MaxAmount | double | The maximum amount allowed for the payment method. |
OnePaymentPerTransaction | boolean | An indicator as to whether or not multiple payment methods are allowed per transaction. <span class="ir">????????</span> |
BinaryStorageId | string, guid | A unique identifier of <span class="ir">????????</span> |
AutoReprintReceiptCopy | boolean | An indicator as to whether or not the payment method allows for an automatic reprint of a copy of the receipt. |
ScoAddItemTimeout | int32 | <span class="ir">????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Payments: PaymentMethod</span> |

<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Receipts: Payments</span> |
PaymentAmount | double | The payment's amount. |
AccountNumber | string | An identifier of the account used for the payment. |
AccountType | string, enum | An indicator of the account's type. Its value must be one of the following: "Cash", "Check", "CreditCard", "DepositUsed", "StoreCredit", "GiftCard", "GiftCertificate", "StoreCharge", "Coupon", "FreeFormGiftCertificate", "Undefined", "Fictions", "DebitCard", "Token", "CreditCardCredit", "HouseCharge", "Universal", "UniversalCredit", "InsufficientFunds", "Terms", "OfflinePayment", "CashMachine", "Unknown". |
ChangeAmount | double | The amount of change returned to the customer. |
CurrencyCode | string | An identifier of the currency used for the payment. <span class="ir">????????</span> |
PaymentProcessingRefNum | string | An identifier of the prcessing transaction for the card used for the payment. <span class="ir">????????</span> |
CardholderFirstName | string | The payment cardholder's first name. |
CardholderLastName | string | The payment cardholder's last name. |
CardholderAddress1 - 2 | string | These two fields are the lines (up to two) of the payment cardholder's street address. |
CardholderCity | string | The payment cardholder's city. |
CardholderState | string | The payment cardholder's state. |
CardholderPostalCode | string | The payment cardholder's postal (zip) code. |
CardEnterMethod | string, enum | An indicator of the method used to enter the card information. Its value must be one of the following: "None", "Swipe", "Insert", "Tap", "Keyed", "Scan", "Unknown". |
CardOrderId | string | An indentifier of <span class="ir">????????</span> |
CardTransactionId | string | An indentifier of <span class="ir">????????</span> |
CardType | string, enum | An indicator of the payment card's type. Its value must be one of the following: "Undefined", "Visa", "Master", "Discover", "Amex", "JCB", "Diners", "Solo", "Maestro", "Cirrus", "Switch", "Laser", "Other", "VisaDebit", "Debit". |
CustomDate1 - 4 | string, datetime | These four fields are customizable date values for the payment card.|
CustomDecimal1 - 4 | double | These four fields are customizable floating-point number values for the payment card. |
CustomFlag1 - 4 | string | These four fields are customizable flags for the payment card. |
CustomLookup1 - 2 | string | These two fields are customizable lookup values for the payment card. |
CustomNumber1 - 2 | int32 | These two fields are customizable integer number values for the payment card. |
CustomText1 - 12 | string | These twelve fields are customizable text values for the payment card. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Payments</span> |

<!-- done to here ------------------------------------------------------ --> | |
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
<span class="api-gn">Response: Receipts: DiscountCoupons</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
CouponNumber | string | An identifier of the coupon. |
CouponProgramName | string | The name of the coupon program which contains the coupon. |
CouponAmount | double | The coupon's discount amount. |
CouponPercent | double | The coupon's discount percentage. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: DiscountCoupons</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Receipts</span> |
DestTaxArea | string | An identifier of the destination tax area of the receipt. |
SourceTaxArea | string | An identifier of the source tax area of the receipt. |
ReversingDocumentIdentifier | string | An identifier of this API document if being used to reverse a receipt. <span class="ir">??????????</span> |
ReversedDocumentIdentifier | string | An identifier of the API document being reversed if this API document is being used to reverse a receipt. <span class="ir">??????????</span> |
SaleTime | int32 | The time the sales receipt was created. <span class="ir">??????????</span> |
TaxExempt | boolean | An indicator as to whether or not the receipt is tax exempt. |
<span class="api-gn">Response: Receipts: TaxExemptInfo</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
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
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: TaxExemptInfo</span> |
<span class="api-gn">Response: Receipts: SellInfo</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
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
<span class="api-gn">Response: Receipts: SellInfo: Custom</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
CustomDate1 - 6 | string, datetime | These six fields are customizable date values for the sell to customer. |
CustomDecimal1 - 6 | double | These six fields are customizable floating-point number values for the sell to customer. |
CustomFlag1 - 6 | string | These six fields are customizable flags for the sell to customer. |
CustomLookup1 - 12 | string | These twelve fields are customizable lookup values for the sell to customer. |
CustomNumber1 - 6 | int32 | These six fields are customizable integer number values for the sell to customer. |
CustomText1 - 6 | string | These six fields are customizable text values for the sell to customer. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: SellInfo: Custom</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: SellInfo</span> |
<span class="api-gn">Response: Receipts: BillInfo</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
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
<span class="api-gn">Response: Receipts: BillInfo: Custom</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
CustomDate1 - 6 | string, datetime | These six fields are customizable date values for the bill to customer. |
CustomDecimal1 - 6 | double | These six fields are customizable floating-point number values for the bill to customer. |
CustomFlag1 - 6 | string | These six fields are customizable flags for the bill to customer. |
CustomLookup1 - 12 | string | These twelve fields are customizable lookup values for the bill to customer. |
CustomNumber2 - 6 | int32 | These five fields are customizable integer number values for the bill to customer. |
CustomText1 - 6 | string | These six fields are customizable text values for the bill to customer. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: BillInfo: Custom</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: BillInfo</span> |
<span class="api-gn">Response: Receipts: ShipInfo</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
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
<span class="api-gn">Response: Receipts: ShipInfo: Custom</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
CustomDate1 - 6 | string, datetime | These six fields are customizable date values for the ship to customer. |
CustomDecimal1 - 6 | double | These six fields are customizable floating-point number values for the ship to customer. |
CustomFlag1 - 6 | string | These six fields are customizable flags for the ship to customer. |
CustomLookup1 - 12 | string | These twelve fields are customizable lookup values for the ship to customer. |
CustomNumber2 - 6 | int32 | These five fields are customizable integer number values for the ship to customer. |
CustomText1 - 6 | string | These six fields are customizable text values for the ship to customer. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: ShipInfo: Custom</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: ShipInfo</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Receipts</span> |
Notes | string | Misc. notes about the sales receipt. |
CustomDate1 - 4 | string, datetime | These four fields are customizable date values for the receipt. |
CustomDecimal1 - 4 | double | These four fields are customizable floating-point number values for the receipt. |
CustomFlag1 - 4 | string | These four fields are customizable flags for the receipt. |
CustomLookup1 - 8 | string | These eight fields are customizable lookup values for the receipt. |
CustomNumber1 - 4 | int32 | These four fields are customizable integer number values for the receipt. |
CustomText1 - 8 | string | These eight fields are customizable text values for the receipt. |
<span class="api-gn">Response: Receipts: ReceiptCharges</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
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
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: ReceiptCharges</span> |
<span class="api-gn">Response: Receipts: ReceiptFees</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
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
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: ReceiptFees</span> |
<span class="api-gn">Response: Receipts: Items</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
LineNo | int32 | The number of the line in the receipt where the item occurs. |
ItemIdentifier | string | An identifier of the item.|
ItemType | string, enum | An indicator of the item's type. Its value must be one of the following: "Regular", "Membership", "StoreCreditAdjustment", "RentalQtyAdjustment", "GiftCardAdjustment", "RentalFees", "TokensAdjustment", "TokensRedeem", "LoyaltyRewardsAdjustment", "VirtualGiftCard", "PhysicalGiftCard", "Charge", "Unknown". |
RmaNo | string | The item's return merchandise authorization number for the sales receipt. |
SOItemRMANo | string | The item's return merchandise authorization number for the sales order. |
<span class="api-gn">Response: Receipts: Items: ItemDetails</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
PLU | int32 | The item's product lookup number.|
CLU | string | The item's custom lookup number.|
UPC | string | The item's universal product code.|
StyleNo | string | An identifier of the style which contains the item. |
ExternalId | string | An identifier of the item used when interacting with an external system. |
ItemDescription | string | A description of the item. |
Attribute1 - 3 | string | These three fields are the item’s attributes. |
ItemType | string, enum | An indicator of the item's type. Its value must be one of the following: "Style", "SingleItem", "ServiceItem". |
<span class="api-gn">Response: Receipts: Items: ItemDetails: DCSS</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
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
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: ItemDetails: DCSS</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Receipts: Items: ItemDetails</span> |
BasePrice | double | The item's base price. |
<span class="api-gn">Response: Receipts: Items: ItemDetails: Style</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
CustomDate1 - 12 | string, datetime | These twelve fields are customizable date values for the item's style. |
CustomDecimal1 - 12 | double | These twelve fields are customizable floating-point number values for the item's style. |
CustomFlag1 - 18 | string | These eighteen fields are customizable flags for the item's style. |
CustomLookup1 - 12 | string | These twelve fields are customizable lookup values for the item's style. |
CustomNumber1 - 12 | int32 | These twelve fields are customizable integer number values for the item's style. |
CustomText1 - 12| string | These twelve fields are customizable text values for the item's style. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: ItemDetails: Style</span> |
<span class="api-gn">Response: Receipts: Items: ItemDetails: Item</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
SalesOrderDTN | int64 | The sales order's transaction number on the device used. |
SalesOrderNo | string | An identifier of the sales order. |
SalesOrderDateTime | string, date-time | The timestamp of the sales order. <span class="ir">??????????</span> |
ListOrder | int32 | The position of the item in the user interface. <span class="ir">??????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: ItemDetails: Item</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: ItemDetails</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Receipts: Items</span> |
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
<span class="api-gn">Response: Receipts: Items: DiscountCoupons</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
CouponNumber | string | An identifier of the coupon. |
CouponProgramName | string | The name of the coupon program to which the coupon belongs. |
CouponAmount | double | The coupon's amount. |
CouponPercent | double | The coupon's percentage. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: DiscountCoupons</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Receipts: Items</span> |
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
<span class="api-gn">Response: Receipts: Items: ItemFees</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
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
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: ItemFees</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Receipts: Items</span> |
TaxExempt | boolean | An indicator as to whether or not the item is tax exempt. |
TaxCategoryCode | string | An identifier of the item's tax category. |
<span class="api-gn">Response: Receipts: Items: Taxes</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
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
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: Taxes</span> |
<span class="api-gn">Response: Receipts: Items: TaxExemptInfo</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
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
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: TaxExemptInfo</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Receipts: Items</span> |
ShipMethod | string | The shipping method used for the item. |
TrackingNumber | string | The item's shipment tracking number. |
<span class="api-gn">Response: Receipts: Items: SalesOrderItem</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
SalesOrderDTN | int64 | The sales order's transaction number on the device used. |
SalesOrderNo | string | An identifier of the sales order. |
SalesOrderDateTime | string, date-time | The timestamp of the sales order. <span class="ir">??????????</span> |
ListOrder | int32 | The position of the item in the user interface. <span class="ir">??????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: SalesOrderItem</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Receipts: Items</span> |
SerialNumber | string | Ann identifier of the item. <span class="ir">??????????</span> |
SerialNumberCustomText1 - 2| string | These two fields are customizable text values for the serial number. <span class="ir">??????????</span> |
SerialNumberCustomNumber1 | int32 | A customizable integer value for the serial number. <span class="ir">??????????</span> |
SerialNumberCustomDate1 | string, datetime | A customizable date value for the serial number. <span class="ir">??????????</span> |
SerialNumberCustomFlag1 | boolean | A customizable flag for the serial number. <span class="ir">??????????</span> |
QtyStatus | string | The status of the item's quantity. <span class="ir">??????????</span> |
COGS | double | The item's total cost of goods sold. <span class="ir">??????????</span> |
UnitCOGS | double | The item's unit cost of goods sold. <span class="ir">??????????</span> |
<span class="api-gn">Response: Receipts: Items: Promo</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries. </span> |
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
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items: Promo</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Items</span> |
<span class="api-gn">Response: Receipts: Payments</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
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
<span class="api-gn">Response: Receipts: Payments: DepositHistory</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
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
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Payments: DepositHistory</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts: Payments</span> |
<span class="api-gs">---</span> | | <span class="api-gdc">continuation of Response: Receipts</span> |
DeviceIdentifier | string | An identifier of the device on which the sales recept was created. <span class="ir">??????????</span> |
AcknowledgementDate | string, datetime | <span class="ir">??????????</span> |
AcknowledgementByUserIdentifier | string | An identifier of the user who <span class="ir">??????????</span> |
TransactionAcknowledgementIdentifier | string | An identifier of <span class="ir">??????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Receipts</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response</span> |

### Schema {#SuccessfulResponseSchema}
 
Below is the JSON source for the schema of a successful response to the export request as described above.

~~~
{
    "SalesReceiptFullExportToJson_get.ApiDocumentType": {
      "type": "object",
      "properties": {
        "ApiDocumentId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "Status": {
          "enum": [
            "Successful"
          ],
          "type": "string"
        },
        "ApiRequestType": {
          "type": "string"
        },
        "TotalRecords": {
          "format": "int32",
          "type": "integer"
        },
        "RecordsCount": {
          "format": "int32",
          "type": "integer"
        },
        "ElapsedTime": {
          "format": "date-time",
          "type": "string"
        },
        "StartDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "EndDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "Response": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.ResponseType"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.ResponseType": {
      "type": "object",
      "properties": {
        "Receipts": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/SalesReceiptFullExportToJson_get.ReceiptsType"
          }
        }
      }
    },
    "SalesReceiptFullExportToJson_get.ReceiptsType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "ReceiptNum": {
          "format": "int32",
          "type": "integer"
        },
        "DeviceTransactionNumber": {
          "format": "int64",
          "type": "integer"
        },
        "AltDeviceTransactionNumber": {
          "type": "string"
        },
        "ReceiptId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "ReceiptCode": {
          "type": "string"
        },
        "ChannelName": {
          "type": "string"
        },
        "WebOrderNo": {
          "type": "string"
        },
        "ReceiptDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "CreateDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "EditDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "Location": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.LocationType"
        },
        "TransactionType": {
          "enum": [
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
          "type": "string"
        },
        "Associated": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.AssociatedType"
        },
        "Cashier": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.CashierType"
        },
        "TotalQty": {
          "format": "double",
          "type": "number"
        },
        "InventoryAmount": {
          "format": "double",
          "type": "number"
        },
        "TotalDiscountAmount": {
          "format": "double",
          "type": "number"
        },
        "TotalItemsShippingAmount": {
          "format": "double",
          "type": "number"
        },
        "TotalItemsFeeAmount": {
          "format": "double",
          "type": "number"
        },
        "TotalTaxAmount": {
          "format": "double",
          "type": "number"
        },
        "TotalAmount": {
          "format": "double",
          "type": "number"
        },
        "MembershipCode": {
          "format": "double",
          "type": "number"
        },
        "MembershipLevel": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.MembershipLevelType"
        },
        "MembershipLevelOverride": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.MembershipLevelOverrideType"
        },
        "MembershipLevelOverrideEmployee": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.MembershipLevelOverrideEmployeeType"
        },
        "GlobalDiscounts": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/SalesReceiptFullExportToJson_get.GlobalDiscountsType"
          }
        },
        "DestTaxArea": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.DestTaxAreaType"
        },
        "SourceTaxArea": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.SourceTaxAreaType"
        },
        "ReversingDocument": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.ReversingDocumentType"
        },
        "ReversedDocument": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.ReversedDocumentType"
        },
        "CashRoundingPrecision": {
          "format": "double",
          "type": "number"
        },
        "TaxExemptInfo": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.TaxExemptInfoType"
        },
        "SellInfo": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.SellInfoType"
        },
        "BillInfo": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.BillInfoType"
        },
        "ShipInfo": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.ShipInfoType"
        },
        "LargeMemo": {
          "type": "string"
        },
        "CustomDate1": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate2": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate3": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate4": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDecimal1": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal2": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal3": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal4": {
          "format": "double",
          "type": "number"
        },
        "CustomFlag1": {
          "type": "boolean"
        },
        "CustomFlag2": {
          "type": "boolean"
        },
        "CustomFlag3": {
          "type": "boolean"
        },
        "CustomFlag4": {
          "type": "boolean"
        },
        "CustomLookup1": {
          "type": "string"
        },
        "CustomLookup2": {
          "type": "string"
        },
        "CustomLookup3": {
          "type": "string"
        },
        "CustomLookup4": {
          "type": "string"
        },
        "CustomLookup5": {
          "type": "string"
        },
        "CustomLookup6": {
          "type": "string"
        },
        "CustomLookup7": {
          "type": "string"
        },
        "CustomLookup8": {
          "type": "string"
        },
        "CustomNumber1": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber2": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber3": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber4": {
          "format": "int32",
          "type": "integer"
        },
        "CustomText1": {
          "type": "string"
        },
        "CustomText2": {
          "type": "string"
        },
        "CustomText3": {
          "type": "string"
        },
        "CustomText4": {
          "type": "string"
        },
        "CustomText5": {
          "type": "string"
        },
        "CustomText6": {
          "type": "string"
        },
        "CustomText7": {
          "type": "string"
        },
        "CustomText8": {
          "type": "string"
        },
        "ReceiptCharges": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/SalesReceiptFullExportToJson_get.ReceiptChargesType"
          }
        },
        "ReceiptFees": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/SalesReceiptFullExportToJson_get.ReceiptFeesType"
          }
        },
        "Items": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/SalesReceiptFullExportToJson_get.ItemsType"
          }
        },
        "Payments": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/SalesReceiptFullExportToJson_get.PaymentsType"
          }
        },
        "Device": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.DeviceType"
        },
        "DeviceId": {
          "type": "string"
        },
        "StorePickupLocation": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.StorePickupLocationType"
        },
        "FillFromLocation": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.FillFromLocationType"
        },
        "SellToBirthdate": {
          "format": "date-time",
          "type": "string"
        },
        "ShipToIsManualEntry": {
          "type": "boolean"
        },
        "ShipToIsStorePickup": {
          "type": "boolean"
        },
        "SellToIsUniversal": {
          "type": "boolean"
        },
        "PriceLevelCode": {
          "type": "string"
        },
        "MembershipEndDate": {
          "format": "date-time",
          "type": "string"
        },
        "ShipToAVSPerformed": {
          "type": "boolean"
        },
        "ExternalId": {
          "type": "string"
        },
        "TaxCalculationService": {
          "format": "int32",
          "type": "integer"
        },
        "ShipToType": {
          "enum": [
            "DoNotShip",
            "ToCustomer",
            "StorePickup",
            "ToStore"
          ],
          "type": "string"
        },
        "CreateWorkstation": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.CreateWorkstationType"
        },
        "EditWorkstation": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.EditWorkstationType"
        },
        "ShipItemLocation": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.ShipItemLocationType"
        },
        "PersonCustomerContact": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.PersonCustomerContactType"
        },
        "SalesOrder": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.SalesOrderType"
        },
        "AppVersion": {
          "type": "string"
        },
        "Status": {
          "format": "int32",
          "type": "integer"
        },
        "DrawerMemoId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.LocationType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "LocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "LocationCode": {
          "type": "string"
        },
        "Name": {
          "type": "string"
        },
        "Name2": {
          "type": "string"
        },
        "LocationNum": {
          "format": "int32",
          "type": "integer"
        },
        "TimeAdjust": {
          "format": "int32",
          "type": "integer"
        },
        "TaxZoneID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "LocationPriceGroupID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "Address1": {
          "type": "string"
        },
        "Address2": {
          "type": "string"
        },
        "Address3": {
          "type": "string"
        },
        "Address4": {
          "type": "string"
        },
        "Address5": {
          "type": "string"
        },
        "City": {
          "type": "string"
        },
        "State": {
          "type": "string"
        },
        "PostalCode": {
          "type": "string"
        },
        "Phone1": {
          "type": "string"
        },
        "Phone2": {
          "type": "string"
        },
        "Phone3": {
          "type": "string"
        },
        "Telex": {
          "type": "string"
        },
        "Fax": {
          "type": "string"
        },
        "Contact": {
          "type": "string"
        },
        "EMail": {
          "type": "string"
        },
        "HomePage": {
          "type": "string"
        },
        "CountryID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "NodeID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CustomText1": {
          "type": "string"
        },
        "CustomText2": {
          "type": "string"
        },
        "CustomText3": {
          "type": "string"
        },
        "CustomText4": {
          "type": "string"
        },
        "CustomText5": {
          "type": "string"
        },
        "CustomText6": {
          "type": "string"
        },
        "CustomFlag1": {
          "type": "boolean"
        },
        "CustomFlag2": {
          "type": "boolean"
        },
        "CustomFlag3": {
          "type": "boolean"
        },
        "CustomFlag4": {
          "type": "boolean"
        },
        "CustomFlag5": {
          "type": "boolean"
        },
        "CustomFlag6": {
          "type": "boolean"
        },
        "CustomFlag7": {
          "type": "boolean"
        },
        "CustomFlag8": {
          "type": "boolean"
        },
        "CustomFlag9": {
          "type": "boolean"
        },
        "CustomFlag10": {
          "type": "boolean"
        },
        "CustomFlag11": {
          "type": "boolean"
        },
        "CustomFlag12": {
          "type": "boolean"
        },
        "CustomDate1": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate2": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate3": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate4": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate5": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate6": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDecimal1": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal2": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal3": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal4": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal5": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal6": {
          "format": "double",
          "type": "number"
        },
        "CustomLookup1": {
          "type": "string"
        },
        "CustomLookup2": {
          "type": "string"
        },
        "CustomLookup3": {
          "type": "string"
        },
        "CustomLookup4": {
          "type": "string"
        },
        "CustomLookup5": {
          "type": "string"
        },
        "CustomLookup6": {
          "type": "string"
        },
        "CustomLookup7": {
          "type": "string"
        },
        "CustomLookup8": {
          "type": "string"
        },
        "CustomLookup9": {
          "type": "string"
        },
        "CustomLookup10": {
          "type": "string"
        },
        "CustomLookup11": {
          "type": "string"
        },
        "CustomLookup12": {
          "type": "string"
        },
        "CustomNumber1": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber2": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber3": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber4": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber5": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber6": {
          "format": "int32",
          "type": "integer"
        },
        "Type": {
          "format": "int32",
          "type": "integer"
        },
        "Latitude": {
          "format": "double",
          "type": "number"
        },
        "Longitude": {
          "format": "double",
          "type": "number"
        },
        "TransferGroup": {
          "type": "string"
        },
        "Area": {
          "type": "string"
        },
        "LocationAvailabilityGroupID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "LocationBaseCurrency": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.LocationBaseCurrencyType"
        },
        "DefaultPriceLevelID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsArchived": {
          "type": "boolean"
        },
        "ECommerce": {
          "format": "int32",
          "type": "integer"
        },
        "LastSent": {
          "format": "date-time",
          "type": "string"
        },
        "ECommerceFlag": {
          "type": "boolean"
        },
        "ECommerceAlias": {
          "type": "string"
        },
        "IsActive": {
          "type": "boolean"
        },
        "Warehouse": {
          "type": "boolean"
        },
        "LocationGroupId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "UtcOffset": {
          "format": "double",
          "type": "number"
        },
        "TimeZoneId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "EID": {
          "type": "string"
        },
        "Open": {
          "type": "boolean"
        },
        "AvailableForStorePickup": {
          "type": "boolean"
        },
        "FranchiseGroupID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CustomerPresetId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "ModelStockGroupId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "FiscalCode": {
          "type": "string"
        },
        "DenominationPlanGroupId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.AssociatedType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "EmployeeId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "EmployeeNum": {
          "format": "int32",
          "type": "integer"
        },
        "LoginName": {
          "type": "string"
        },
        "MiddleName": {
          "type": "string"
        },
        "LastName": {
          "type": "string"
        },
        "FirstName": {
          "type": "string"
        },
        "EMail1": {
          "type": "string"
        },
        "EMail2": {
          "type": "string"
        },
        "MaxDiscPercent": {
          "format": "double",
          "type": "number"
        },
        "Universal": {
          "type": "boolean"
        },
        "Active": {
          "type": "boolean"
        },
        "Type": {
          "format": "int32",
          "type": "integer"
        },
        "ExpirationDate": {
          "format": "date-time",
          "type": "string"
        },
        "MaxGlobalDiscPercent": {
          "format": "double",
          "type": "number"
        },
        "CustomDate1": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate2": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate3": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate4": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate5": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate6": {
          "format": "date-time",
          "type": "string"
        },
        "CustomFlag1": {
          "type": "boolean"
        },
        "CustomFlag2": {
          "type": "boolean"
        },
        "CustomFlag3": {
          "type": "boolean"
        },
        "CustomFlag4": {
          "type": "boolean"
        },
        "CustomFlag5": {
          "type": "boolean"
        },
        "CustomFlag6": {
          "type": "boolean"
        },
        "CustomNumber1": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber2": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber3": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber4": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber5": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber6": {
          "format": "int32",
          "type": "integer"
        },
        "CustomDecimal1": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal2": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal3": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal4": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal5": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal6": {
          "format": "double",
          "type": "number"
        },
        "CustomText1": {
          "type": "string"
        },
        "CustomText2": {
          "type": "string"
        },
        "CustomText3": {
          "type": "string"
        },
        "CustomText4": {
          "type": "string"
        },
        "CustomText5": {
          "type": "string"
        },
        "CustomText6": {
          "type": "string"
        },
        "CustomLookup1": {
          "type": "string"
        },
        "CustomLookup2": {
          "type": "string"
        },
        "CustomLookup3": {
          "type": "string"
        },
        "CustomLookup4": {
          "type": "string"
        },
        "CustomLookup5": {
          "type": "string"
        },
        "CustomLookup6": {
          "type": "string"
        },
        "CustomLookup7": {
          "type": "string"
        },
        "CustomLookup8": {
          "type": "string"
        },
        "CustomLookup9": {
          "type": "string"
        },
        "CustomLookup10": {
          "type": "string"
        },
        "CustomLookup11": {
          "type": "string"
        },
        "CustomLookup12": {
          "type": "string"
        },
        "Code": {
          "type": "string"
        },
        "NickName": {
          "type": "string"
        },
        "ListOrder": {
          "format": "int32",
          "type": "integer"
        },
        "JobTitle": {
          "type": "string"
        },
        "Address1": {
          "type": "string"
        },
        "Address2": {
          "type": "string"
        },
        "City": {
          "type": "string"
        },
        "State": {
          "type": "string"
        },
        "CountryId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "PhoneNo": {
          "type": "string"
        },
        "MobilePhoneNo": {
          "type": "string"
        },
        "Title": {
          "type": "string"
        },
        "Suffix": {
          "type": "string"
        },
        "Organization": {
          "type": "string"
        },
        "PostalCode": {
          "type": "string"
        },
        "PhoneNo2": {
          "type": "string"
        },
        "Fax": {
          "type": "string"
        },
        "HomePage": {
          "type": "string"
        },
        "IsManager": {
          "type": "boolean"
        },
        "DiscRequireAuthCode": {
          "type": "boolean"
        },
        "MaxTradeAdjustmentPercent": {
          "format": "double",
          "type": "number"
        },
        "HomeLocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CommissionGroupId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "AvailableInCalendar": {
          "type": "boolean"
        },
        "PasswordChangeDate": {
          "format": "date-time",
          "type": "string"
        },
        "SecurityType": {
          "format": "int32",
          "type": "integer"
        },
        "OverrideRoleDiscountLimits": {
          "type": "boolean"
        },
        "QrScanCode": {
          "type": "string"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.CashierType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "EmployeeId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "EmployeeNum": {
          "format": "int32",
          "type": "integer"
        },
        "LoginName": {
          "type": "string"
        },
        "MiddleName": {
          "type": "string"
        },
        "LastName": {
          "type": "string"
        },
        "FirstName": {
          "type": "string"
        },
        "EMail1": {
          "type": "string"
        },
        "EMail2": {
          "type": "string"
        },
        "MaxDiscPercent": {
          "format": "double",
          "type": "number"
        },
        "Universal": {
          "type": "boolean"
        },
        "Active": {
          "type": "boolean"
        },
        "Type": {
          "format": "int32",
          "type": "integer"
        },
        "ExpirationDate": {
          "format": "date-time",
          "type": "string"
        },
        "MaxGlobalDiscPercent": {
          "format": "double",
          "type": "number"
        },
        "CustomDate1": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate2": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate3": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate4": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate5": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate6": {
          "format": "date-time",
          "type": "string"
        },
        "CustomFlag1": {
          "type": "boolean"
        },
        "CustomFlag2": {
          "type": "boolean"
        },
        "CustomFlag3": {
          "type": "boolean"
        },
        "CustomFlag4": {
          "type": "boolean"
        },
        "CustomFlag5": {
          "type": "boolean"
        },
        "CustomFlag6": {
          "type": "boolean"
        },
        "CustomNumber1": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber2": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber3": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber4": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber5": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber6": {
          "format": "int32",
          "type": "integer"
        },
        "CustomDecimal1": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal2": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal3": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal4": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal5": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal6": {
          "format": "double",
          "type": "number"
        },
        "CustomText1": {
          "type": "string"
        },
        "CustomText2": {
          "type": "string"
        },
        "CustomText3": {
          "type": "string"
        },
        "CustomText4": {
          "type": "string"
        },
        "CustomText5": {
          "type": "string"
        },
        "CustomText6": {
          "type": "string"
        },
        "CustomLookup1": {
          "type": "string"
        },
        "CustomLookup2": {
          "type": "string"
        },
        "CustomLookup3": {
          "type": "string"
        },
        "CustomLookup4": {
          "type": "string"
        },
        "CustomLookup5": {
          "type": "string"
        },
        "CustomLookup6": {
          "type": "string"
        },
        "CustomLookup7": {
          "type": "string"
        },
        "CustomLookup8": {
          "type": "string"
        },
        "CustomLookup9": {
          "type": "string"
        },
        "CustomLookup10": {
          "type": "string"
        },
        "CustomLookup11": {
          "type": "string"
        },
        "CustomLookup12": {
          "type": "string"
        },
        "Code": {
          "type": "string"
        },
        "NickName": {
          "type": "string"
        },
        "ListOrder": {
          "format": "int32",
          "type": "integer"
        },
        "JobTitle": {
          "type": "string"
        },
        "Address1": {
          "type": "string"
        },
        "Address2": {
          "type": "string"
        },
        "City": {
          "type": "string"
        },
        "State": {
          "type": "string"
        },
        "CountryId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "PhoneNo": {
          "type": "string"
        },
        "MobilePhoneNo": {
          "type": "string"
        },
        "Title": {
          "type": "string"
        },
        "Suffix": {
          "type": "string"
        },
        "Organization": {
          "type": "string"
        },
        "PostalCode": {
          "type": "string"
        },
        "PhoneNo2": {
          "type": "string"
        },
        "Fax": {
          "type": "string"
        },
        "HomePage": {
          "type": "string"
        },
        "IsManager": {
          "type": "boolean"
        },
        "DiscRequireAuthCode": {
          "type": "boolean"
        },
        "MaxTradeAdjustmentPercent": {
          "format": "double",
          "type": "number"
        },
        "HomeLocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CommissionGroupId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "AvailableInCalendar": {
          "type": "boolean"
        },
        "PasswordChangeDate": {
          "format": "date-time",
          "type": "string"
        },
        "SecurityType": {
          "format": "int32",
          "type": "integer"
        },
        "OverrideRoleDiscountLimits": {
          "type": "boolean"
        },
        "QrScanCode": {
          "type": "string"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.MembershipLevelType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "MembershipLevelID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "Name": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        },
        "Level": {
          "format": "int32",
          "type": "integer"
        },
        "DayLength": {
          "format": "int32",
          "type": "integer"
        },
        "NormalPrice": {
          "format": "double",
          "type": "number"
        },
        "SaleDiscountPercent": {
          "format": "double",
          "type": "number"
        },
        "SalesDiscountSource": {
          "format": "int32",
          "type": "integer"
        },
        "Inactive": {
          "type": "boolean"
        },
        "LocationID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "PriceLevelId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "LRPEligible": {
          "type": "boolean"
        },
        "ItemId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "DayLengthRewarded": {
          "format": "int32",
          "type": "integer"
        },
        "NeededAmount": {
          "format": "double",
          "type": "number"
        },
        "CustomText1": {
          "type": "string"
        },
        "CustomText2": {
          "type": "string"
        },
        "CustomText3": {
          "type": "string"
        },
        "CustomText4": {
          "type": "string"
        },
        "CustomText5": {
          "type": "string"
        },
        "CustomText6": {
          "type": "string"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.MembershipLevelOverrideType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "MembershipLevelID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "Name": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        },
        "Level": {
          "format": "int32",
          "type": "integer"
        },
        "DayLength": {
          "format": "int32",
          "type": "integer"
        },
        "NormalPrice": {
          "format": "double",
          "type": "number"
        },
        "SaleDiscountPercent": {
          "format": "double",
          "type": "number"
        },
        "SalesDiscountSource": {
          "format": "int32",
          "type": "integer"
        },
        "Inactive": {
          "type": "boolean"
        },
        "LocationID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "PriceLevelId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "LRPEligible": {
          "type": "boolean"
        },
        "ItemId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "DayLengthRewarded": {
          "format": "int32",
          "type": "integer"
        },
        "NeededAmount": {
          "format": "double",
          "type": "number"
        },
        "CustomText1": {
          "type": "string"
        },
        "CustomText2": {
          "type": "string"
        },
        "CustomText3": {
          "type": "string"
        },
        "CustomText4": {
          "type": "string"
        },
        "CustomText5": {
          "type": "string"
        },
        "CustomText6": {
          "type": "string"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.MembershipLevelOverrideEmployeeType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "MembershipLevelID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "Name": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        },
        "Level": {
          "format": "int32",
          "type": "integer"
        },
        "DayLength": {
          "format": "int32",
          "type": "integer"
        },
        "NormalPrice": {
          "format": "double",
          "type": "number"
        },
        "SaleDiscountPercent": {
          "format": "double",
          "type": "number"
        },
        "SalesDiscountSource": {
          "format": "int32",
          "type": "integer"
        },
        "Inactive": {
          "type": "boolean"
        },
        "LocationID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "PriceLevelId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "LRPEligible": {
          "type": "boolean"
        },
        "ItemId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "DayLengthRewarded": {
          "format": "int32",
          "type": "integer"
        },
        "NeededAmount": {
          "format": "double",
          "type": "number"
        },
        "CustomText1": {
          "type": "string"
        },
        "CustomText2": {
          "type": "string"
        },
        "CustomText3": {
          "type": "string"
        },
        "CustomText4": {
          "type": "string"
        },
        "CustomText5": {
          "type": "string"
        },
        "CustomText6": {
          "type": "string"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.GlobalDiscountsType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "ReceiptDiscountId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "InputSequence": {
          "format": "int32",
          "type": "integer"
        },
        "DiscountAmount": {
          "format": "double",
          "type": "number"
        },
        "DiscountPercent": {
          "format": "double",
          "type": "number"
        },
        "InputSource": {
          "format": "int32",
          "type": "integer"
        },
        "CascadeFlag": {
          "type": "boolean"
        },
        "MaxDiscountPercent": {
          "format": "double",
          "type": "number"
        },
        "CascadeAmount": {
          "format": "double",
          "type": "number"
        },
        "PromoExcluded": {
          "type": "boolean"
        },
        "OverrideCode": {
          "type": "string"
        },
        "ReturnedReceiptDiscountId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "DiscountReason": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.DiscountReasonType"
        },
        "DiscountCoupon": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.DiscountCouponType"
        },
        "Employee": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.EmployeeType"
        },
        "OverrideEmployee": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.OverrideEmployeeType"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.DestTaxAreaType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "TaxZoneID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "ParentID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "Name": {
          "type": "string"
        },
        "CountryID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "TaxCalculations": {
          "format": "int32",
          "type": "integer"
        },
        "CalculationsCustomCode": {
          "type": "string"
        },
        "Code": {
          "type": "string"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.SourceTaxAreaType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "TaxZoneID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "ParentID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "Name": {
          "type": "string"
        },
        "CountryID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "TaxCalculations": {
          "format": "int32",
          "type": "integer"
        },
        "CalculationsCustomCode": {
          "type": "string"
        },
        "Code": {
          "type": "string"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.ReversingDocumentType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "ReceiptId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "ReceiptNum": {
          "format": "int32",
          "type": "integer"
        },
        "BillToLastName": {
          "type": "string"
        },
        "BillToFirstName": {
          "type": "string"
        },
        "BillToMiddleName": {
          "type": "string"
        },
        "BillToAddress1": {
          "type": "string"
        },
        "BillToAddress2": {
          "type": "string"
        },
        "BillToCity": {
          "type": "string"
        },
        "BillToState": {
          "type": "string"
        },
        "BillToPostalCode": {
          "type": "string"
        },
        "BillToOrganization": {
          "type": "string"
        },
        "DrawerMemoId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CreateEmployeeId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CreateWorkstationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "EditEmployeeId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "EditWorkstationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "EditDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "CreateDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "ReceiptDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "SOID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "LargeMemo": {
          "type": "string"
        },
        "DestTaxZoneId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "LocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "ShipToLastName": {
          "type": "string"
        },
        "ShipToFirstName": {
          "type": "string"
        },
        "ShipToMiddleName": {
          "type": "string"
        },
        "ShipToAddress1": {
          "type": "string"
        },
        "ShipToAddress2": {
          "type": "string"
        },
        "ShipToCity": {
          "type": "string"
        },
        "ShipToState": {
          "type": "string"
        },
        "ShipToPostalCode": {
          "type": "string"
        },
        "ShipToOrganization": {
          "type": "string"
        },
        "ShipToPhone1": {
          "type": "string"
        },
        "ShipToPhone2": {
          "type": "string"
        },
        "ShipToPhone3": {
          "type": "string"
        },
        "BillToPhone1": {
          "type": "string"
        },
        "BillToPhone2": {
          "type": "string"
        },
        "BillToPhone3": {
          "type": "string"
        },
        "BillToCustomerId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "ShipToCustomerId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "ShipMethodId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CustomDate1": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate2": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate3": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate4": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDecimal1": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal2": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal3": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal4": {
          "format": "double",
          "type": "number"
        },
        "CustomFlag1": {
          "type": "boolean"
        },
        "CustomFlag2": {
          "type": "boolean"
        },
        "CustomFlag3": {
          "type": "boolean"
        },
        "CustomFlag4": {
          "type": "boolean"
        },
        "CustomLookup1": {
          "type": "string"
        },
        "CustomLookup2": {
          "type": "string"
        },
        "CustomLookup3": {
          "type": "string"
        },
        "CustomLookup4": {
          "type": "string"
        },
        "CustomLookup5": {
          "type": "string"
        },
        "CustomLookup6": {
          "type": "string"
        },
        "CustomLookup7": {
          "type": "string"
        },
        "CustomLookup8": {
          "type": "string"
        },
        "CustomNumber1": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber2": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber3": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber4": {
          "format": "int32",
          "type": "integer"
        },
        "CustomText1": {
          "type": "string"
        },
        "CustomText2": {
          "type": "string"
        },
        "CustomText3": {
          "type": "string"
        },
        "CustomText4": {
          "type": "string"
        },
        "CustomText5": {
          "type": "string"
        },
        "CustomText6": {
          "type": "string"
        },
        "CustomText7": {
          "type": "string"
        },
        "CustomText8": {
          "type": "string"
        },
        "ReversingDocumentId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "DocSalespersonId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "SellToCustomerId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "SellToLastName": {
          "type": "string"
        },
        "SellToFirstName": {
          "type": "string"
        },
        "SellToMiddleName": {
          "type": "string"
        },
        "SellToAddress1": {
          "type": "string"
        },
        "SellToAddress2": {
          "type": "string"
        },
        "SellToCity": {
          "type": "string"
        },
        "SellToState": {
          "type": "string"
        },
        "SellToPostalCode": {
          "type": "string"
        },
        "SellToPhone1": {
          "type": "string"
        },
        "SellToPhone2": {
          "type": "string"
        },
        "SellToPhone3": {
          "type": "string"
        },
        "SellToOrganization": {
          "type": "string"
        },
        "BillToCountryCode": {
          "type": "string"
        },
        "ShipToCountryCode": {
          "type": "string"
        },
        "SellToCountryCode": {
          "type": "string"
        },
        "SourceTaxZoneId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "SellToGender": {
          "format": "int32",
          "type": "integer"
        },
        "SellToBirthdate": {
          "format": "date-time",
          "type": "string"
        },
        "DiscOverrideCode": {
          "type": "string"
        },
        "IsDropShipment": {
          "type": "boolean"
        },
        "TaxExempt": {
          "type": "boolean"
        },
        "SellToEmail1": {
          "type": "string"
        },
        "BillToEmail": {
          "type": "string"
        },
        "StateDate": {
          "format": "date-time",
          "type": "string"
        },
        "TotalAmountWithoutTax": {
          "format": "double",
          "type": "number"
        },
        "TotalAmountWithTax": {
          "format": "double",
          "type": "number"
        },
        "TotalQty": {
          "format": "double",
          "type": "number"
        },
        "TransactionType": {
          "format": "int32",
          "type": "integer"
        },
        "Status": {
          "format": "int32",
          "type": "integer"
        },
        "MembershipCode": {
          "type": "string"
        },
        "MembershipEndDate": {
          "format": "date-time",
          "type": "string"
        },
        "SellToWholesaleCustomer": {
          "type": "boolean"
        },
        "SellToTradingPartner": {
          "type": "boolean"
        },
        "BillToWholesaleCustomer": {
          "type": "boolean"
        },
        "BillToTradingPartner": {
          "type": "boolean"
        },
        "ShipToWholesaleCustomer": {
          "type": "boolean"
        },
        "ShipToTradingPartner": {
          "type": "boolean"
        },
        "PersonCustomerId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "SellToIsUniversal": {
          "type": "boolean"
        },
        "MembershipLevelId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "PriceLevelCode": {
          "type": "string"
        },
        "DeviceTransactionNumber": {
          "format": "int64",
          "type": "integer"
        },
        "DeviceId": {
          "type": "string"
        },
        "DeviceUniqueId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "SellToPhone4": {
          "type": "string"
        },
        "BillToPhone4": {
          "type": "string"
        },
        "ShipToPhone4": {
          "type": "string"
        },
        "EmailAddress": {
          "type": "string"
        },
        "ShipToEmail": {
          "type": "string"
        },
        "SellToBirthdateText": {
          "type": "string"
        },
        "BillToBirthdateText": {
          "type": "string"
        },
        "ShipToBirthdateText": {
          "type": "string"
        },
        "BillToMembershipLvlName": {
          "type": "string"
        },
        "BillToMembershipEndDate": {
          "format": "date-time",
          "type": "string"
        },
        "ShipToMembershipLvlName": {
          "type": "string"
        },
        "ShipToMembershipEndDate": {
          "format": "date-time",
          "type": "string"
        },
        "MembershipLevelOverrideId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "MembershipLevelOverrideEmployeeId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "MembershipPriceLevelCode": {
          "type": "string"
        },
        "ChannelName": {
          "type": "string"
        },
        "WebOrderNo": {
          "type": "string"
        },
        "ReceiptCode": {
          "type": "string"
        },
        "CashRoundingPrecision": {
          "format": "double",
          "type": "number"
        },
        "ShipToType": {
          "enum": [
            "DoNotShip",
            "ToCustomer",
            "StorePickup",
            "ToStore"
          ],
          "type": "string"
        },
        "StorePickupLocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "ShipToAddress3": {
          "type": "string"
        },
        "ShipToAddress4": {
          "type": "string"
        },
        "ShipToIsManualEntry": {
          "type": "boolean"
        },
        "ShipToIsStorePickup": {
          "type": "boolean"
        },
        "AltDeviceTransactionNumber": {
          "type": "string"
        },
        "FillFromLocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "GlobalDiscountIsPercentBased": {
          "type": "boolean"
        },
        "GlobalDiscountPercent": {
          "format": "double",
          "type": "number"
        },
        "ShipToAVSPerformed": {
          "type": "boolean"
        },
        "UtcOffset": {
          "format": "double",
          "type": "number"
        },
        "ShipToAddress5": {
          "type": "string"
        },
        "ShipToFiscalCode": {
          "type": "string"
        },
        "BillToAddress3": {
          "type": "string"
        },
        "BillToAddress4": {
          "type": "string"
        },
        "BillToAddress5": {
          "type": "string"
        },
        "BillToFiscalCode": {
          "type": "string"
        },
        "SellToAddress3": {
          "type": "string"
        },
        "SellToAddress4": {
          "type": "string"
        },
        "SellToAddress5": {
          "type": "string"
        },
        "SellToFiscalCode": {
          "type": "string"
        },
        "ExternalId": {
          "type": "string"
        },
        "TaxCalculationService": {
          "format": "int32",
          "type": "integer"
        },
        "SaleTime": {
          "format": "int32",
          "type": "integer"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.ReversedDocumentType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "ReceiptId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "ReceiptNum": {
          "format": "int32",
          "type": "integer"
        },
        "BillToLastName": {
          "type": "string"
        },
        "BillToFirstName": {
          "type": "string"
        },
        "BillToMiddleName": {
          "type": "string"
        },
        "BillToAddress1": {
          "type": "string"
        },
        "BillToAddress2": {
          "type": "string"
        },
        "BillToCity": {
          "type": "string"
        },
        "BillToState": {
          "type": "string"
        },
        "BillToPostalCode": {
          "type": "string"
        },
        "BillToOrganization": {
          "type": "string"
        },
        "DrawerMemoId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CreateEmployeeId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CreateWorkstationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "EditEmployeeId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "EditWorkstationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "EditDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "CreateDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "ReceiptDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "SOID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "LargeMemo": {
          "type": "string"
        },
        "DestTaxZoneId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "LocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "ShipToLastName": {
          "type": "string"
        },
        "ShipToFirstName": {
          "type": "string"
        },
        "ShipToMiddleName": {
          "type": "string"
        },
        "ShipToAddress1": {
          "type": "string"
        },
        "ShipToAddress2": {
          "type": "string"
        },
        "ShipToCity": {
          "type": "string"
        },
        "ShipToState": {
          "type": "string"
        },
        "ShipToPostalCode": {
          "type": "string"
        },
        "ShipToOrganization": {
          "type": "string"
        },
        "ShipToPhone1": {
          "type": "string"
        },
        "ShipToPhone2": {
          "type": "string"
        },
        "ShipToPhone3": {
          "type": "string"
        },
        "BillToPhone1": {
          "type": "string"
        },
        "BillToPhone2": {
          "type": "string"
        },
        "BillToPhone3": {
          "type": "string"
        },
        "BillToCustomerId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "ShipToCustomerId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "ShipMethodId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CustomDate1": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate2": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate3": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate4": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDecimal1": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal2": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal3": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal4": {
          "format": "double",
          "type": "number"
        },
        "CustomFlag1": {
          "type": "boolean"
        },
        "CustomFlag2": {
          "type": "boolean"
        },
        "CustomFlag3": {
          "type": "boolean"
        },
        "CustomFlag4": {
          "type": "boolean"
        },
        "CustomLookup1": {
          "type": "string"
        },
        "CustomLookup2": {
          "type": "string"
        },
        "CustomLookup3": {
          "type": "string"
        },
        "CustomLookup4": {
          "type": "string"
        },
        "CustomLookup5": {
          "type": "string"
        },
        "CustomLookup6": {
          "type": "string"
        },
        "CustomLookup7": {
          "type": "string"
        },
        "CustomLookup8": {
          "type": "string"
        },
        "CustomNumber1": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber2": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber3": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber4": {
          "format": "int32",
          "type": "integer"
        },
        "CustomText1": {
          "type": "string"
        },
        "CustomText2": {
          "type": "string"
        },
        "CustomText3": {
          "type": "string"
        },
        "CustomText4": {
          "type": "string"
        },
        "CustomText5": {
          "type": "string"
        },
        "CustomText6": {
          "type": "string"
        },
        "CustomText7": {
          "type": "string"
        },
        "CustomText8": {
          "type": "string"
        },
        "DocSalespersonId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "SellToCustomerId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "SellToLastName": {
          "type": "string"
        },
        "SellToFirstName": {
          "type": "string"
        },
        "SellToMiddleName": {
          "type": "string"
        },
        "SellToAddress1": {
          "type": "string"
        },
        "SellToAddress2": {
          "type": "string"
        },
        "SellToCity": {
          "type": "string"
        },
        "SellToState": {
          "type": "string"
        },
        "SellToPostalCode": {
          "type": "string"
        },
        "SellToPhone1": {
          "type": "string"
        },
        "SellToPhone2": {
          "type": "string"
        },
        "SellToPhone3": {
          "type": "string"
        },
        "SellToOrganization": {
          "type": "string"
        },
        "BillToCountryCode": {
          "type": "string"
        },
        "ShipToCountryCode": {
          "type": "string"
        },
        "SellToCountryCode": {
          "type": "string"
        },
        "SourceTaxZoneId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "ReversedDocumentId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "SellToGender": {
          "format": "int32",
          "type": "integer"
        },
        "SellToBirthdate": {
          "format": "date-time",
          "type": "string"
        },
        "DiscOverrideCode": {
          "type": "string"
        },
        "IsDropShipment": {
          "type": "boolean"
        },
        "TaxExempt": {
          "type": "boolean"
        },
        "SellToEmail1": {
          "type": "string"
        },
        "BillToEmail": {
          "type": "string"
        },
        "StateDate": {
          "format": "date-time",
          "type": "string"
        },
        "TotalAmountWithoutTax": {
          "format": "double",
          "type": "number"
        },
        "TotalAmountWithTax": {
          "format": "double",
          "type": "number"
        },
        "TotalQty": {
          "format": "double",
          "type": "number"
        },
        "TransactionType": {
          "format": "int32",
          "type": "integer"
        },
        "Status": {
          "format": "int32",
          "type": "integer"
        },
        "MembershipCode": {
          "type": "string"
        },
        "MembershipEndDate": {
          "format": "date-time",
          "type": "string"
        },
        "SellToWholesaleCustomer": {
          "type": "boolean"
        },
        "SellToTradingPartner": {
          "type": "boolean"
        },
        "BillToWholesaleCustomer": {
          "type": "boolean"
        },
        "BillToTradingPartner": {
          "type": "boolean"
        },
        "ShipToWholesaleCustomer": {
          "type": "boolean"
        },
        "ShipToTradingPartner": {
          "type": "boolean"
        },
        "PersonCustomerId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "SellToIsUniversal": {
          "type": "boolean"
        },
        "MembershipLevelId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "PriceLevelCode": {
          "type": "string"
        },
        "DeviceTransactionNumber": {
          "format": "int64",
          "type": "integer"
        },
        "DeviceId": {
          "type": "string"
        },
        "DeviceUniqueId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "SellToPhone4": {
          "type": "string"
        },
        "BillToPhone4": {
          "type": "string"
        },
        "ShipToPhone4": {
          "type": "string"
        },
        "EmailAddress": {
          "type": "string"
        },
        "ShipToEmail": {
          "type": "string"
        },
        "SellToBirthdateText": {
          "type": "string"
        },
        "BillToBirthdateText": {
          "type": "string"
        },
        "ShipToBirthdateText": {
          "type": "string"
        },
        "BillToMembershipLvlName": {
          "type": "string"
        },
        "BillToMembershipEndDate": {
          "format": "date-time",
          "type": "string"
        },
        "ShipToMembershipLvlName": {
          "type": "string"
        },
        "ShipToMembershipEndDate": {
          "format": "date-time",
          "type": "string"
        },
        "WebReceiptId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "MembershipLevelOverrideId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "MembershipLevelOverrideEmployeeId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "MembershipPriceLevelCode": {
          "type": "string"
        },
        "ChannelName": {
          "type": "string"
        },
        "WebOrderNo": {
          "type": "string"
        },
        "ReceiptCode": {
          "type": "string"
        },
        "CashRoundingPrecision": {
          "format": "double",
          "type": "number"
        },
        "ShipToType": {
          "enum": [
            "DoNotShip",
            "ToCustomer",
            "StorePickup",
            "ToStore"
          ],
          "type": "string"
        },
        "StorePickupLocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "ShipToAddress3": {
          "type": "string"
        },
        "ShipToAddress4": {
          "type": "string"
        },
        "ShipToIsManualEntry": {
          "type": "boolean"
        },
        "ShipToIsStorePickup": {
          "type": "boolean"
        },
        "AltDeviceTransactionNumber": {
          "type": "string"
        },
        "FillFromLocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "GlobalDiscountIsPercentBased": {
          "type": "boolean"
        },
        "GlobalDiscountPercent": {
          "format": "double",
          "type": "number"
        },
        "ShipToAVSPerformed": {
          "type": "boolean"
        },
        "UtcOffset": {
          "format": "double",
          "type": "number"
        },
        "ShipToAddress5": {
          "type": "string"
        },
        "ShipToFiscalCode": {
          "type": "string"
        },
        "BillToAddress3": {
          "type": "string"
        },
        "BillToAddress4": {
          "type": "string"
        },
        "BillToAddress5": {
          "type": "string"
        },
        "BillToFiscalCode": {
          "type": "string"
        },
        "SellToAddress3": {
          "type": "string"
        },
        "SellToAddress4": {
          "type": "string"
        },
        "SellToAddress5": {
          "type": "string"
        },
        "SellToFiscalCode": {
          "type": "string"
        },
        "ExternalId": {
          "type": "string"
        },
        "ShipItemLocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "TaxCalculationService": {
          "format": "int32",
          "type": "integer"
        },
        "SaleTime": {
          "format": "int32",
          "type": "integer"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.TaxExemptInfoType": {
      "type": "object",
      "properties": {
        "ADDRESS_1": {
          "type": "string"
        },
        "ADDRESS_2": {
          "type": "string"
        },
        "CHILD_NAME": {
          "type": "string"
        },
        "CITY": {
          "type": "string"
        },
        "COUNTRY": {
          "type": "string"
        },
        "FIRST_NAME": {
          "type": "string"
        },
        "LAST_NAME": {
          "type": "string"
        },
        "ORGANIZATION_NAME": {
          "type": "string"
        },
        "PHONE": {
          "type": "string"
        },
        "POSTAL_CODE": {
          "type": "string"
        },
        "STATE": {
          "type": "string"
        },
        "TAX_EXEMPT_NUM": {
          "type": "string"
        },
        "TAX_EXEMPT_REASON": {
          "type": "string"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.SellInfoType": {
      "type": "object",
      "properties": {
        "Customer": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.CustomerType"
        },
        "WholesaleCustomer": {
          "type": "boolean"
        },
        "TradingPartner": {
          "type": "boolean"
        },
        "FiscalCode": {
          "type": "string"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.BillInfoType": {
      "type": "object",
      "properties": {
        "Customer": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.CustomerType1"
        },
        "WholesaleCustomer": {
          "type": "boolean"
        },
        "TradingPartner": {
          "type": "boolean"
        },
        "FiscalCode": {
          "type": "string"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.ShipInfoType": {
      "type": "object",
      "properties": {
        "Customer": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.CustomerType2"
        },
        "ShipMethod": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.ShipMethodType"
        },
        "WholesaleCustomer": {
          "type": "boolean"
        },
        "TradingPartner": {
          "type": "boolean"
        },
        "FiscalCode": {
          "type": "string"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.ReceiptChargesType": {
      "type": "object",
      "properties": {
        "LineNo": {
          "format": "int32",
          "type": "integer"
        },
        "ChargeType": {
          "enum": [
            "GiftCard",
            "GiftCert",
            "Credit",
            "SOItemDeposit",
            "SODeposit",
            "HouseCharge"
          ],
          "type": "string"
        },
        "Amount": {
          "format": "double",
          "type": "number"
        },
        "AccountNum": {
          "type": "string"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.ReceiptFeesType": {
      "type": "object",
      "properties": {
        "LineNo": {
          "format": "int32",
          "type": "integer"
        },
        "ItemChargeCode": {
          "type": "string"
        },
        "ItemChargeType": {
          "enum": [
            "Empty",
            "Shipping",
            "Insurance",
            "RestockingFee"
          ],
          "type": "string"
        },
        "Qty": {
          "format": "double",
          "type": "number"
        },
        "UnitPrice": {
          "format": "double",
          "type": "number"
        },
        "ExtPrice": {
          "format": "double",
          "type": "number"
        },
        "ExtPriceWithTax": {
          "format": "double",
          "type": "number"
        },
        "TaxCategory": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.TaxCategoryType"
        },
        "LargeMemo": {
          "type": "string"
        },
        "Spread": {
          "type": "boolean"
        },
        "SpreadType": {
          "enum": [
            "Price",
            "Weight"
          ],
          "type": "string"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.ItemsType": {
      "type": "object",
      "properties": {
        "LineNo": {
          "format": "int32",
          "type": "integer"
        },
        "ItemType": {
          "enum": [
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
          "type": "string"
        },
        "ItemDetails": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.ItemDetailsType"
        },
        "Qty": {
          "format": "double",
          "type": "number"
        },
        "PriceLevelCode": {
          "type": "string"
        },
        "PriceChangeReasonCode": {
          "type": "string"
        },
        "MembershipLevel": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.MembershipLevelType1"
        },
        "SalePrice": {
          "format": "double",
          "type": "number"
        },
        "LineDiscounts": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/SalesReceiptFullExportToJson_get.LineDiscountsType"
          }
        },
        "ExtAmount": {
          "format": "double",
          "type": "number"
        },
        "ItemChargesAmount": {
          "format": "double",
          "type": "number"
        },
        "LargeMemo": {
          "type": "string"
        },
        "ReturnReason": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.ReturnReasonType"
        },
        "IsShipToItem": {
          "type": "boolean"
        },
        "CustomDate1": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate2": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate3": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate4": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDecimal1": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal2": {
          "format": "double",
          "type": "number"
        },
        "CustomFlag1": {
          "type": "boolean"
        },
        "CustomFlag2": {
          "type": "boolean"
        },
        "CustomLookup1": {
          "type": "string"
        },
        "CustomLookup2": {
          "type": "string"
        },
        "CustomLookup3": {
          "type": "string"
        },
        "CustomLookup4": {
          "type": "string"
        },
        "CustomNumber1": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber2": {
          "format": "int32",
          "type": "integer"
        },
        "CustomText1": {
          "type": "string"
        },
        "CustomText2": {
          "type": "string"
        },
        "ItemFees": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/SalesReceiptFullExportToJson_get.ItemFeesType"
          }
        },
        "TaxExempt": {
          "type": "boolean"
        },
        "TaxCategory": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.TaxCategoryType2"
        },
        "Taxes": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/SalesReceiptFullExportToJson_get.TaxesType"
          }
        },
        "TaxExemptInfo": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.TaxExemptInfoType1"
        },
        "ShipMethod": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.ShipMethodType1"
        },
        "TrackingNumber": {
          "type": "string"
        },
        "SalesOrderItem": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.SalesOrderItemType"
        },
        "SerialNumber": {
          "type": "string"
        },
        "SerialNumberCustomText1": {
          "type": "string"
        },
        "SerialNumberCustomText2": {
          "type": "string"
        },
        "SerialNumberCustomNumber1": {
          "format": "int32",
          "type": "integer"
        },
        "SerialNumberCustomDate1": {
          "format": "date-time",
          "type": "string"
        },
        "SerialNumberCustomFlag1": {
          "type": "boolean"
        },
        "SerialNumberCustomGUID1": {
          "type": "boolean"
        },
        "COGS": {
          "format": "double",
          "type": "number"
        },
        "UnitCOGS": {
          "format": "double",
          "type": "number"
        },
        "Promo": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/SalesReceiptFullExportToJson_get.PromoType"
          }
        }
      }
    },
    "SalesReceiptFullExportToJson_get.PaymentsType": {
      "type": "object",
      "properties": {
        "LineNo": {
          "format": "int32",
          "type": "integer"
        },
        "PaymentMethod": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.PaymentMethodType"
        },
        "PaymentAmount": {
          "format": "double",
          "type": "number"
        },
        "AccountNumber": {
          "type": "string"
        },
        "AccountType": {
          "enum": [
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
          "type": "string"
        },
        "ChangeAmount": {
          "format": "double",
          "type": "number"
        },
        "CurrencyCode": {
          "type": "string"
        },
        "PaymentProcessingRefNum": {
          "type": "string"
        },
        "CardholderFirstName": {
          "type": "string"
        },
        "CardholderLastName": {
          "type": "string"
        },
        "CardholderAddress1": {
          "type": "string"
        },
        "CardholderAddress2": {
          "type": "string"
        },
        "CardholderCity": {
          "type": "string"
        },
        "CardholderState": {
          "type": "string"
        },
        "CardholderPostalCode": {
          "type": "string"
        },
        "CardOrderId": {
          "type": "string"
        },
        "CardTransactionId": {
          "type": "string"
        },
        "CardType": {
          "enum": [
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
          "type": "string"
        },
        "CustomDate1": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate2": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate3": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate4": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDecimal1": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal2": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal3": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal4": {
          "format": "double",
          "type": "number"
        },
        "CustomFlag1": {
          "type": "boolean"
        },
        "CustomFlag2": {
          "type": "boolean"
        },
        "CustomFlag3": {
          "type": "boolean"
        },
        "CustomFlag4": {
          "type": "boolean"
        },
        "CustomLookup1": {
          "type": "string"
        },
        "CustomLookup2": {
          "type": "string"
        },
        "CustomNumber1": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber2": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber3": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber4": {
          "format": "int32",
          "type": "integer"
        },
        "CustomText1": {
          "type": "string"
        },
        "CustomText2": {
          "type": "string"
        },
        "CustomText3": {
          "type": "string"
        },
        "CustomText4": {
          "type": "string"
        },
        "CustomText5": {
          "type": "string"
        },
        "CustomText6": {
          "type": "string"
        },
        "CustomText7": {
          "type": "string"
        },
        "CustomText8": {
          "type": "string"
        },
        "CustomText9": {
          "type": "string"
        },
        "CustomText10": {
          "type": "string"
        },
        "CustomText11": {
          "type": "string"
        },
        "CustomText12": {
          "type": "string"
        },
        "DepositHistories": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/SalesReceiptFullExportToJson_get.DepositHistoriesType"
          }
        }
      }
    },
    "SalesReceiptFullExportToJson_get.DeviceType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "DeviceId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "DeviceAgentId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "LocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "DeviceName": {
          "type": "string"
        },
        "DeviceAlias": {
          "type": "string"
        },
        "DeviceType": {
          "format": "int32",
          "type": "integer"
        },
        "PrintServerIP": {
          "type": "string"
        },
        "PrintServerPort": {
          "format": "int32",
          "type": "integer"
        },
        "ShopperDisplayId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeactivated": {
          "type": "boolean"
        },
        "Notes": {
          "type": "string"
        },
        "TechInfo1": {
          "type": "string"
        },
        "TechInfo2": {
          "type": "string"
        },
        "TechInfo3": {
          "type": "string"
        },
        "TechInfo4": {
          "type": "string"
        },
        "TechInfo5": {
          "type": "string"
        },
        "TechInfo6": {
          "type": "string"
        },
        "TechInfo7": {
          "type": "string"
        },
        "TechInfo8": {
          "type": "string"
        },
        "TechInfo9": {
          "type": "string"
        },
        "TechInfo10": {
          "type": "string"
        },
        "IPAddess": {
          "type": "string"
        },
        "Latitude": {
          "format": "double",
          "type": "number"
        },
        "Longitude": {
          "format": "double",
          "type": "number"
        },
        "SystemName": {
          "type": "string"
        },
        "SystemVersion": {
          "type": "string"
        },
        "Model": {
          "type": "string"
        },
        "PrinterPort": {
          "format": "int32",
          "type": "integer"
        },
        "ScalesPort": {
          "format": "int32",
          "type": "integer"
        },
        "DeviceNo": {
          "format": "int32",
          "type": "integer"
        },
        "MobileApplicationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "ApplicationVersion": {
          "type": "string"
        },
        "FirstLaunchDate": {
          "format": "date-time",
          "type": "string"
        },
        "SvsAuthToken": {
          "type": "string"
        },
        "SvsDeviceId": {
          "type": "string"
        },
        "LocationDeviceCode": {
          "format": "int32",
          "type": "integer"
        },
        "LastTransactionNo": {
          "format": "int64",
          "type": "integer"
        },
        "ParentDeviceId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "PushLogsToGae": {
          "type": "boolean"
        },
        "GaeLogSeverity": {
          "format": "int32",
          "type": "integer"
        },
        "IsMultiWorkstation": {
          "type": "boolean"
        },
        "CollectNetworkStats": {
          "type": "boolean"
        },
        "WorkstationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "ShopperDisplayGroupId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "UpdateScheduledOnDate": {
          "format": "date-time",
          "type": "string"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.StorePickupLocationType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "LocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "LocationCode": {
          "type": "string"
        },
        "Name": {
          "type": "string"
        },
        "Name2": {
          "type": "string"
        },
        "LocationNum": {
          "format": "int32",
          "type": "integer"
        },
        "TimeAdjust": {
          "format": "int32",
          "type": "integer"
        },
        "TaxZoneID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "LocationPriceGroupID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "Address1": {
          "type": "string"
        },
        "Address2": {
          "type": "string"
        },
        "Address3": {
          "type": "string"
        },
        "Address4": {
          "type": "string"
        },
        "Address5": {
          "type": "string"
        },
        "City": {
          "type": "string"
        },
        "State": {
          "type": "string"
        },
        "PostalCode": {
          "type": "string"
        },
        "Phone1": {
          "type": "string"
        },
        "Phone2": {
          "type": "string"
        },
        "Phone3": {
          "type": "string"
        },
        "Telex": {
          "type": "string"
        },
        "Fax": {
          "type": "string"
        },
        "Contact": {
          "type": "string"
        },
        "EMail": {
          "type": "string"
        },
        "HomePage": {
          "type": "string"
        },
        "CountryID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "NodeID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CustomText1": {
          "type": "string"
        },
        "CustomText2": {
          "type": "string"
        },
        "CustomText3": {
          "type": "string"
        },
        "CustomText4": {
          "type": "string"
        },
        "CustomText5": {
          "type": "string"
        },
        "CustomText6": {
          "type": "string"
        },
        "CustomFlag1": {
          "type": "boolean"
        },
        "CustomFlag2": {
          "type": "boolean"
        },
        "CustomFlag3": {
          "type": "boolean"
        },
        "CustomFlag4": {
          "type": "boolean"
        },
        "CustomFlag5": {
          "type": "boolean"
        },
        "CustomFlag6": {
          "type": "boolean"
        },
        "CustomFlag7": {
          "type": "boolean"
        },
        "CustomFlag8": {
          "type": "boolean"
        },
        "CustomFlag9": {
          "type": "boolean"
        },
        "CustomFlag10": {
          "type": "boolean"
        },
        "CustomFlag11": {
          "type": "boolean"
        },
        "CustomFlag12": {
          "type": "boolean"
        },
        "CustomDate1": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate2": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate3": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate4": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate5": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate6": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDecimal1": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal2": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal3": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal4": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal5": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal6": {
          "format": "double",
          "type": "number"
        },
        "CustomLookup1": {
          "type": "string"
        },
        "CustomLookup2": {
          "type": "string"
        },
        "CustomLookup3": {
          "type": "string"
        },
        "CustomLookup4": {
          "type": "string"
        },
        "CustomLookup5": {
          "type": "string"
        },
        "CustomLookup6": {
          "type": "string"
        },
        "CustomLookup7": {
          "type": "string"
        },
        "CustomLookup8": {
          "type": "string"
        },
        "CustomLookup9": {
          "type": "string"
        },
        "CustomLookup10": {
          "type": "string"
        },
        "CustomLookup11": {
          "type": "string"
        },
        "CustomLookup12": {
          "type": "string"
        },
        "CustomNumber1": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber2": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber3": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber4": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber5": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber6": {
          "format": "int32",
          "type": "integer"
        },
        "Type": {
          "format": "int32",
          "type": "integer"
        },
        "Latitude": {
          "format": "double",
          "type": "number"
        },
        "Longitude": {
          "format": "double",
          "type": "number"
        },
        "TransferGroup": {
          "type": "string"
        },
        "Area": {
          "type": "string"
        },
        "LocationAvailabilityGroupID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "LocationBaseCurrencyID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "DefaultPriceLevelID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsArchived": {
          "type": "boolean"
        },
        "ECommerce": {
          "format": "int32",
          "type": "integer"
        },
        "LastSent": {
          "format": "date-time",
          "type": "string"
        },
        "ECommerceFlag": {
          "type": "boolean"
        },
        "ECommerceAlias": {
          "type": "string"
        },
        "IsActive": {
          "type": "boolean"
        },
        "Warehouse": {
          "type": "boolean"
        },
        "LocationGroupId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "UtcOffset": {
          "format": "double",
          "type": "number"
        },
        "TimeZoneId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "EID": {
          "type": "string"
        },
        "Open": {
          "type": "boolean"
        },
        "AvailableForStorePickup": {
          "type": "boolean"
        },
        "FranchiseGroupID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CustomerPresetId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "ModelStockGroupId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "FiscalCode": {
          "type": "string"
        },
        "DenominationPlanGroupId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.FillFromLocationType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "LocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "LocationCode": {
          "type": "string"
        },
        "Name": {
          "type": "string"
        },
        "Name2": {
          "type": "string"
        },
        "LocationNum": {
          "format": "int32",
          "type": "integer"
        },
        "TimeAdjust": {
          "format": "int32",
          "type": "integer"
        },
        "TaxZoneID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "LocationPriceGroupID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "Address1": {
          "type": "string"
        },
        "Address2": {
          "type": "string"
        },
        "Address3": {
          "type": "string"
        },
        "Address4": {
          "type": "string"
        },
        "Address5": {
          "type": "string"
        },
        "City": {
          "type": "string"
        },
        "State": {
          "type": "string"
        },
        "PostalCode": {
          "type": "string"
        },
        "Phone1": {
          "type": "string"
        },
        "Phone2": {
          "type": "string"
        },
        "Phone3": {
          "type": "string"
        },
        "Telex": {
          "type": "string"
        },
        "Fax": {
          "type": "string"
        },
        "Contact": {
          "type": "string"
        },
        "EMail": {
          "type": "string"
        },
        "HomePage": {
          "type": "string"
        },
        "CountryID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "NodeID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CustomText1": {
          "type": "string"
        },
        "CustomText2": {
          "type": "string"
        },
        "CustomText3": {
          "type": "string"
        },
        "CustomText4": {
          "type": "string"
        },
        "CustomText5": {
          "type": "string"
        },
        "CustomText6": {
          "type": "string"
        },
        "CustomFlag1": {
          "type": "boolean"
        },
        "CustomFlag2": {
          "type": "boolean"
        },
        "CustomFlag3": {
          "type": "boolean"
        },
        "CustomFlag4": {
          "type": "boolean"
        },
        "CustomFlag5": {
          "type": "boolean"
        },
        "CustomFlag6": {
          "type": "boolean"
        },
        "CustomFlag7": {
          "type": "boolean"
        },
        "CustomFlag8": {
          "type": "boolean"
        },
        "CustomFlag9": {
          "type": "boolean"
        },
        "CustomFlag10": {
          "type": "boolean"
        },
        "CustomFlag11": {
          "type": "boolean"
        },
        "CustomFlag12": {
          "type": "boolean"
        },
        "CustomDate1": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate2": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate3": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate4": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate5": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate6": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDecimal1": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal2": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal3": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal4": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal5": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal6": {
          "format": "double",
          "type": "number"
        },
        "CustomLookup1": {
          "type": "string"
        },
        "CustomLookup2": {
          "type": "string"
        },
        "CustomLookup3": {
          "type": "string"
        },
        "CustomLookup4": {
          "type": "string"
        },
        "CustomLookup5": {
          "type": "string"
        },
        "CustomLookup6": {
          "type": "string"
        },
        "CustomLookup7": {
          "type": "string"
        },
        "CustomLookup8": {
          "type": "string"
        },
        "CustomLookup9": {
          "type": "string"
        },
        "CustomLookup10": {
          "type": "string"
        },
        "CustomLookup11": {
          "type": "string"
        },
        "CustomLookup12": {
          "type": "string"
        },
        "CustomNumber1": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber2": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber3": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber4": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber5": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber6": {
          "format": "int32",
          "type": "integer"
        },
        "Type": {
          "format": "int32",
          "type": "integer"
        },
        "Latitude": {
          "format": "double",
          "type": "number"
        },
        "Longitude": {
          "format": "double",
          "type": "number"
        },
        "TransferGroup": {
          "type": "string"
        },
        "Area": {
          "type": "string"
        },
        "LocationAvailabilityGroupID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "LocationBaseCurrencyID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "DefaultPriceLevelID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsArchived": {
          "type": "boolean"
        },
        "ECommerce": {
          "format": "int32",
          "type": "integer"
        },
        "LastSent": {
          "format": "date-time",
          "type": "string"
        },
        "ECommerceFlag": {
          "type": "boolean"
        },
        "ECommerceAlias": {
          "type": "string"
        },
        "IsActive": {
          "type": "boolean"
        },
        "Warehouse": {
          "type": "boolean"
        },
        "LocationGroupId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "UtcOffset": {
          "format": "double",
          "type": "number"
        },
        "TimeZoneId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "EID": {
          "type": "string"
        },
        "Open": {
          "type": "boolean"
        },
        "AvailableForStorePickup": {
          "type": "boolean"
        },
        "FranchiseGroupID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CustomerPresetId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "ModelStockGroupId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "FiscalCode": {
          "type": "string"
        },
        "DenominationPlanGroupId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.CreateWorkstationType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "WorkstationID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "WorkstationNum": {
          "format": "int32",
          "type": "integer"
        },
        "WorkstationName": {
          "type": "string"
        },
        "LocationID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "NodeID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.EditWorkstationType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "WorkstationID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "WorkstationNum": {
          "format": "int32",
          "type": "integer"
        },
        "WorkstationName": {
          "type": "string"
        },
        "LocationID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "NodeID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.ShipItemLocationType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "LocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "LocationCode": {
          "type": "string"
        },
        "Name": {
          "type": "string"
        },
        "Name2": {
          "type": "string"
        },
        "LocationNum": {
          "format": "int32",
          "type": "integer"
        },
        "TimeAdjust": {
          "format": "int32",
          "type": "integer"
        },
        "TaxZoneID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "LocationPriceGroupID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "Address1": {
          "type": "string"
        },
        "Address2": {
          "type": "string"
        },
        "Address3": {
          "type": "string"
        },
        "Address4": {
          "type": "string"
        },
        "Address5": {
          "type": "string"
        },
        "City": {
          "type": "string"
        },
        "State": {
          "type": "string"
        },
        "PostalCode": {
          "type": "string"
        },
        "Phone1": {
          "type": "string"
        },
        "Phone2": {
          "type": "string"
        },
        "Phone3": {
          "type": "string"
        },
        "Telex": {
          "type": "string"
        },
        "Fax": {
          "type": "string"
        },
        "Contact": {
          "type": "string"
        },
        "EMail": {
          "type": "string"
        },
        "HomePage": {
          "type": "string"
        },
        "CountryID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "NodeID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CustomText1": {
          "type": "string"
        },
        "CustomText2": {
          "type": "string"
        },
        "CustomText3": {
          "type": "string"
        },
        "CustomText4": {
          "type": "string"
        },
        "CustomText5": {
          "type": "string"
        },
        "CustomText6": {
          "type": "string"
        },
        "CustomFlag1": {
          "type": "boolean"
        },
        "CustomFlag2": {
          "type": "boolean"
        },
        "CustomFlag3": {
          "type": "boolean"
        },
        "CustomFlag4": {
          "type": "boolean"
        },
        "CustomFlag5": {
          "type": "boolean"
        },
        "CustomFlag6": {
          "type": "boolean"
        },
        "CustomFlag7": {
          "type": "boolean"
        },
        "CustomFlag8": {
          "type": "boolean"
        },
        "CustomFlag9": {
          "type": "boolean"
        },
        "CustomFlag10": {
          "type": "boolean"
        },
        "CustomFlag11": {
          "type": "boolean"
        },
        "CustomFlag12": {
          "type": "boolean"
        },
        "CustomDate1": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate2": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate3": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate4": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate5": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate6": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDecimal1": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal2": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal3": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal4": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal5": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal6": {
          "format": "double",
          "type": "number"
        },
        "CustomLookup1": {
          "type": "string"
        },
        "CustomLookup2": {
          "type": "string"
        },
        "CustomLookup3": {
          "type": "string"
        },
        "CustomLookup4": {
          "type": "string"
        },
        "CustomLookup5": {
          "type": "string"
        },
        "CustomLookup6": {
          "type": "string"
        },
        "CustomLookup7": {
          "type": "string"
        },
        "CustomLookup8": {
          "type": "string"
        },
        "CustomLookup9": {
          "type": "string"
        },
        "CustomLookup10": {
          "type": "string"
        },
        "CustomLookup11": {
          "type": "string"
        },
        "CustomLookup12": {
          "type": "string"
        },
        "CustomNumber1": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber2": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber3": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber4": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber5": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber6": {
          "format": "int32",
          "type": "integer"
        },
        "Type": {
          "format": "int32",
          "type": "integer"
        },
        "Latitude": {
          "format": "double",
          "type": "number"
        },
        "Longitude": {
          "format": "double",
          "type": "number"
        },
        "TransferGroup": {
          "type": "string"
        },
        "Area": {
          "type": "string"
        },
        "LocationAvailabilityGroupID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "LocationBaseCurrencyID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "DefaultPriceLevelID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsArchived": {
          "type": "boolean"
        },
        "ECommerce": {
          "format": "int32",
          "type": "integer"
        },
        "LastSent": {
          "format": "date-time",
          "type": "string"
        },
        "ECommerceFlag": {
          "type": "boolean"
        },
        "ECommerceAlias": {
          "type": "string"
        },
        "IsActive": {
          "type": "boolean"
        },
        "Warehouse": {
          "type": "boolean"
        },
        "LocationGroupId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "UtcOffset": {
          "format": "double",
          "type": "number"
        },
        "TimeZoneId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "EID": {
          "type": "string"
        },
        "Open": {
          "type": "boolean"
        },
        "AvailableForStorePickup": {
          "type": "boolean"
        },
        "FranchiseGroupID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CustomerPresetId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "ModelStockGroupId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "FiscalCode": {
          "type": "string"
        },
        "DenominationPlanGroupId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.PersonCustomerContactType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "ContactID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "OwnerID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsPrimary": {
          "type": "boolean"
        },
        "Address1": {
          "type": "string"
        },
        "Address2": {
          "type": "string"
        },
        "Address3": {
          "type": "string"
        },
        "Address4": {
          "type": "string"
        },
        "Address5": {
          "type": "string"
        },
        "City": {
          "type": "string"
        },
        "Phone": {
          "type": "string"
        },
        "CountryId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "Fax": {
          "type": "string"
        },
        "PostalCode": {
          "type": "string"
        },
        "EMail": {
          "type": "string"
        },
        "EMail2": {
          "type": "string"
        },
        "HomePage": {
          "type": "string"
        },
        "Birthdate": {
          "format": "date-time",
          "type": "string"
        },
        "BDDay": {
          "format": "int32",
          "type": "integer"
        },
        "BDMonth": {
          "format": "int32",
          "type": "integer"
        },
        "BDYear": {
          "format": "int32",
          "type": "integer"
        },
        "Gender": {
          "format": "int32",
          "type": "integer"
        },
        "WorkPhone": {
          "type": "string"
        },
        "MobilePhone": {
          "type": "string"
        },
        "Title": {
          "type": "string"
        },
        "FirstName": {
          "type": "string"
        },
        "LastName": {
          "type": "string"
        },
        "MiddleName": {
          "type": "string"
        },
        "CompanyName": {
          "type": "string"
        },
        "CreateEmployeeID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "EditEmployeeID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "State": {
          "type": "string"
        },
        "TaxZoneID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "Position": {
          "type": "string"
        },
        "Type": {
          "format": "int32",
          "type": "integer"
        },
        "Login": {
          "type": "string"
        },
        "Active": {
          "type": "boolean"
        },
        "ContactType": {
          "format": "int32",
          "type": "integer"
        },
        "EditDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "CreateDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "ContactNo": {
          "type": "string"
        },
        "IsCloudHqModified": {
          "type": "boolean"
        },
        "EID": {
          "type": "string"
        },
        "TypeId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "AVSPerformed": {
          "type": "boolean"
        },
        "FiscalCode": {
          "type": "string"
        },
        "ContactNoGeneratedDeviceId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CustomDate1": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate2": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate3": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate4": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate5": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate6": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate7": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate8": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDecimal1": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal2": {
          "format": "double",
          "type": "number"
        },
        "CustomFlag1": {
          "type": "boolean"
        },
        "CustomFlag2": {
          "type": "boolean"
        },
        "CustomLookup1": {
          "type": "string"
        },
        "CustomLookup2": {
          "type": "string"
        },
        "CustomLookup3": {
          "type": "string"
        },
        "CustomLookup4": {
          "type": "string"
        },
        "CustomLookup5": {
          "type": "string"
        },
        "CustomLookup6": {
          "type": "string"
        },
        "CustomNumber1": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber2": {
          "format": "int32",
          "type": "integer"
        },
        "CustomText1": {
          "type": "string"
        },
        "CustomText2": {
          "type": "string"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.SalesOrderType": {
      "type": "object",
      "properties": {
        "SalesOrderNo": {
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "SalesOrderId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "DeviceTransactionNumber": {
          "format": "int64",
          "type": "integer"
        },
        "Type": {
          "enum": [
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
          "type": "string"
        },
        "SalesOrderDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "IsArchive": {
          "type": "boolean"
        },
        "SellFromLocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "LocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "SaleCreditLocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "LockFillLocation": {
          "type": "boolean"
        },
        "InternationalId": {
          "type": "string"
        },
        "TotalAmountWithoutTax": {
          "format": "double",
          "type": "number"
        },
        "TotalAmountWithTax": {
          "format": "double",
          "type": "number"
        },
        "TotalTaxAmount": {
          "format": "double",
          "type": "number"
        },
        "TotalDiscountAmount": {
          "format": "double",
          "type": "number"
        },
        "MembershipCode": {
          "type": "string"
        },
        "MembershipEndDate": {
          "type": "string"
        },
        "MembershipLevelCode": {
          "type": "string"
        },
        "MembershipLevelOverrideCode": {
          "type": "string"
        },
        "MembershipLevelOverrideEmployeeId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "FraudStatus": {
          "enum": [
            "Unknown",
            "Accepted",
            "Alert",
            "Fraud"
          ],
          "type": "string"
        },
        "BlockEmailNotifications": {
          "type": "boolean"
        },
        "ShipDate": {
          "format": "date-time",
          "type": "string"
        },
        "ArrivalDate": {
          "format": "date-time",
          "type": "string"
        },
        "SellToCustomerId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "SellToLastName": {
          "type": "string"
        },
        "SellToFirstName": {
          "type": "string"
        },
        "SellToMiddleName": {
          "type": "string"
        },
        "SellToAddress1": {
          "type": "string"
        },
        "SellToAddress2": {
          "type": "string"
        },
        "SellToAddress3": {
          "type": "string"
        },
        "SellToAddress4": {
          "type": "string"
        },
        "SellToAddress5": {
          "type": "string"
        },
        "SellToCity": {
          "type": "string"
        },
        "SellToState": {
          "type": "string"
        },
        "SellToPostalCode": {
          "type": "string"
        },
        "SellToPhone1": {
          "type": "string"
        },
        "SellToPhone2": {
          "type": "string"
        },
        "SellToPhone3": {
          "type": "string"
        },
        "SellToPhone4": {
          "type": "string"
        },
        "SellToOrganization": {
          "type": "string"
        },
        "SellToGender": {
          "format": "int32",
          "type": "integer"
        },
        "SellToBirthdate": {
          "format": "date-time",
          "type": "string"
        },
        "SellToWholesaleCustomer": {
          "type": "boolean"
        },
        "SellToTradingPartner": {
          "type": "boolean"
        },
        "SellToCountryCode": {
          "type": "string"
        },
        "SellToEmail": {
          "type": "string"
        },
        "SellToFiscalCode": {
          "type": "string"
        },
        "DepositBalance": {
          "format": "double",
          "type": "number"
        },
        "TotalDepositAmount": {
          "format": "double",
          "type": "number"
        },
        "CreateDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "EditDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "BillToCustomerId": {
          "type": "string"
        },
        "BillToFirstName": {
          "type": "string"
        },
        "BillToMiddleName": {
          "type": "string"
        },
        "BillToAddress1": {
          "type": "string"
        },
        "BillToAddress2": {
          "type": "string"
        },
        "BillToAddress3": {
          "type": "string"
        },
        "BillToAddress4": {
          "type": "string"
        },
        "BillToAddress5": {
          "type": "string"
        },
        "BillToCity": {
          "type": "string"
        },
        "BillToState": {
          "type": "string"
        },
        "BillToPostalCode": {
          "type": "string"
        },
        "BillTorganization": {
          "type": "string"
        },
        "BillToPhone1": {
          "type": "string"
        },
        "BillToPhone2": {
          "type": "string"
        },
        "BillToPhone3": {
          "type": "string"
        },
        "BillToPhone4": {
          "type": "string"
        },
        "BillToEmail": {
          "type": "string"
        },
        "BillToWholesaleCustomer": {
          "type": "boolean"
        },
        "BillToTradingPartner": {
          "type": "boolean"
        },
        "BillToCountryCode": {
          "type": "string"
        },
        "BillToGender": {
          "format": "int32",
          "type": "integer"
        },
        "BillToBirthdate": {
          "format": "date-time",
          "type": "string"
        },
        "BillToLastName": {
          "type": "string"
        },
        "BillToFiscalCode": {
          "type": "string"
        },
        "ShipToCustomerId": {
          "type": "string"
        },
        "ShipToLastName": {
          "type": "string"
        },
        "ShipToFirstName": {
          "type": "string"
        },
        "ShipToMiddleName": {
          "type": "string"
        },
        "ShipToAddress1": {
          "type": "string"
        },
        "ShipToAddress2": {
          "type": "string"
        },
        "ShipToAddress3": {
          "type": "string"
        },
        "ShipToAddress4": {
          "type": "string"
        },
        "ShipToCity": {
          "type": "string"
        },
        "ShipToState": {
          "type": "string"
        },
        "ShipToPostalCode": {
          "type": "string"
        },
        "ShipToOrganization": {
          "type": "string"
        },
        "ShipToPhone1": {
          "type": "string"
        },
        "ShipToPhone2": {
          "type": "string"
        },
        "ShipToPhone3": {
          "type": "string"
        },
        "ShipToPhone4": {
          "type": "string"
        },
        "Address5": {
          "type": "string"
        },
        "ShipToWholesaleCustomer": {
          "type": "boolean"
        },
        "ShipToTradingPartner": {
          "type": "boolean"
        },
        "ShipToCountryCode": {
          "type": "string"
        },
        "ShipToGender": {
          "format": "int32",
          "type": "integer"
        },
        "ShipToBirthdate": {
          "format": "date-time",
          "type": "string"
        },
        "ShipToEmail": {
          "type": "string"
        },
        "ShipToType": {
          "type": "string"
        },
        "IsManualEntry": {
          "type": "boolean"
        },
        "IsStorePickup": {
          "type": "boolean"
        },
        "ShipToAddressId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "AVSPerformed": {
          "type": "boolean"
        },
        "ShipToFiscalCode": {
          "type": "string"
        },
        "Notes": {
          "type": "string"
        },
        "CustomDate1": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate2": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate3": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate4": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate5": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate6": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate7": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate8": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDecimal1": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal2": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal3": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal4": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal5": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal6": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal7": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal8": {
          "format": "double",
          "type": "number"
        },
        "CustomFlag1": {
          "type": "boolean"
        },
        "CustomFlag2": {
          "type": "boolean"
        },
        "CustomFlag3": {
          "type": "boolean"
        },
        "CustomFlag4": {
          "type": "boolean"
        },
        "CustomFlag5": {
          "type": "boolean"
        },
        "CustomFlag6": {
          "type": "boolean"
        },
        "CustomFlag7": {
          "type": "boolean"
        },
        "CustomFlag8": {
          "type": "boolean"
        },
        "CustomLookup1": {
          "type": "string"
        },
        "CustomLookup2": {
          "type": "string"
        },
        "CustomLookup3": {
          "type": "string"
        },
        "CustomLookup4": {
          "type": "string"
        },
        "CustomLookup5": {
          "type": "string"
        },
        "CustomLookup6": {
          "type": "string"
        },
        "CustomLookup7": {
          "type": "string"
        },
        "CustomLookup8": {
          "type": "string"
        },
        "CustomNumber1": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber2": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber3": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber4": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber5": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber6": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber7": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber8": {
          "format": "int32",
          "type": "integer"
        },
        "CustomText1": {
          "type": "string"
        },
        "CustomText2": {
          "type": "string"
        },
        "CustomText3": {
          "type": "string"
        },
        "CustomText4": {
          "type": "string"
        },
        "CustomText5": {
          "type": "string"
        },
        "CustomText6": {
          "type": "string"
        },
        "CustomText7": {
          "type": "string"
        },
        "CustomText8": {
          "type": "string"
        },
        "CustomText9": {
          "type": "string"
        },
        "CustomText10": {
          "type": "string"
        },
        "CustomText11": {
          "type": "string"
        },
        "CustomText12": {
          "type": "string"
        },
        "CustomText13": {
          "type": "string"
        },
        "CustomText14": {
          "type": "string"
        },
        "CustomText15": {
          "type": "string"
        },
        "CustomText16": {
          "type": "string"
        },
        "CustomLongText1": {
          "type": "string"
        },
        "CustomLongText2": {
          "type": "string"
        },
        "CustomLongText3": {
          "type": "string"
        },
        "CustomLongText4": {
          "type": "string"
        },
        "CustomLongText5": {
          "type": "string"
        },
        "CustomLongText6": {
          "type": "string"
        },
        "CustomLongText7": {
          "type": "string"
        },
        "CustomLongText8": {
          "type": "string"
        },
        "ExternalId": {
          "type": "string"
        },
        "ShipOnce": {
          "type": "boolean"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.LocationBaseCurrencyType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "CurrencyID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        },
        "AmountRoundingPrecision": {
          "format": "double",
          "type": "number"
        },
        "DisplayDecimalPrecision": {
          "format": "int32",
          "type": "integer"
        },
        "RoundingType": {
          "format": "int32",
          "type": "integer"
        },
        "CurrencyCode": {
          "type": "string"
        },
        "Base": {
          "type": "boolean"
        },
        "Symbol": {
          "type": "string"
        },
        "SymbolPosition": {
          "format": "int32",
          "type": "integer"
        },
        "PaymentRoundingPrecision": {
          "format": "double",
          "type": "number"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.DiscountReasonType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "DiscountReasonID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        },
        "DefaultPercent": {
          "format": "double",
          "type": "number"
        },
        "ListOrder": {
          "format": "int32",
          "type": "integer"
        },
        "MaxPercent": {
          "format": "double",
          "type": "number"
        },
        "Type": {
          "format": "int32",
          "type": "integer"
        },
        "ECommerceFlag]": {
          "type": "boolean"
        },
        "ECommerceAlias": {
          "type": "string"
        },
        "LocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "RequireAuthorization": {
          "type": "boolean"
        },
        "StartDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "EndDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "Archived": {
          "type": "boolean"
        },
        "CouponDiscount": {
          "type": "boolean"
        },
        "DiscountType": {
          "format": "int32",
          "type": "integer"
        },
        "DefaultDiscountAmoun": {
          "format": "double",
          "type": "number"
        },
        "PreventDiscountChange": {
          "type": "boolean"
        },
        "DoNotDisplayAuthCode": {
          "type": "boolean"
        },
        "ExternalId": {
          "type": "string"
        },
        "AuthorityLevel": {
          "format": "int32",
          "type": "integer"
        },
        "PermitCombiningWithCustomerDiscount": {
          "type": "boolean"
        },
        "Cascade": {
          "type": "boolean"
        },
        "PromoExclude": {
          "type": "boolean"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.DiscountCouponType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "ReceiptDiscountCouponId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CouponNumber": {
          "type": "string"
        },
        "CouponProgramName": {
          "type": "string"
        },
        "CouponStartDate": {
          "format": "date-time",
          "type": "string"
        },
        "CouponEndDate": {
          "format": "date-time",
          "type": "string"
        },
        "CouponProgramId": {
          "type": "string"
        },
        "IsReusable": {
          "type": "boolean"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.EmployeeType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "EmployeeId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "EmployeeNum": {
          "format": "int32",
          "type": "integer"
        },
        "LoginName": {
          "type": "string"
        },
        "MiddleName": {
          "type": "string"
        },
        "LastName": {
          "type": "string"
        },
        "FirstName": {
          "type": "string"
        },
        "EMail1": {
          "type": "string"
        },
        "EMail2": {
          "type": "string"
        },
        "MaxDiscPercent": {
          "format": "double",
          "type": "number"
        },
        "Universal": {
          "type": "boolean"
        },
        "Active": {
          "type": "boolean"
        },
        "Type": {
          "format": "int32",
          "type": "integer"
        },
        "ExpirationDate": {
          "format": "date-time",
          "type": "string"
        },
        "MaxGlobalDiscPercent": {
          "format": "double",
          "type": "number"
        },
        "CustomDate1": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate2": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate3": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate4": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate5": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate6": {
          "format": "date-time",
          "type": "string"
        },
        "CustomFlag1": {
          "type": "boolean"
        },
        "CustomFlag2": {
          "type": "boolean"
        },
        "CustomFlag3": {
          "type": "boolean"
        },
        "CustomFlag4": {
          "type": "boolean"
        },
        "CustomFlag5": {
          "type": "boolean"
        },
        "CustomFlag6": {
          "type": "boolean"
        },
        "CustomNumber1": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber2": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber3": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber4": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber5": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber6": {
          "format": "int32",
          "type": "integer"
        },
        "CustomDecimal1": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal2": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal3": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal4": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal5": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal6": {
          "format": "double",
          "type": "number"
        },
        "CustomText1": {
          "type": "string"
        },
        "CustomText2": {
          "type": "string"
        },
        "CustomText3": {
          "type": "string"
        },
        "CustomText4": {
          "type": "string"
        },
        "CustomText5": {
          "type": "string"
        },
        "CustomText6": {
          "type": "string"
        },
        "CustomLookup1": {
          "type": "string"
        },
        "CustomLookup2": {
          "type": "string"
        },
        "CustomLookup3": {
          "type": "string"
        },
        "CustomLookup4": {
          "type": "string"
        },
        "CustomLookup5": {
          "type": "string"
        },
        "CustomLookup6": {
          "type": "string"
        },
        "CustomLookup7": {
          "type": "string"
        },
        "CustomLookup8": {
          "type": "string"
        },
        "CustomLookup9": {
          "type": "string"
        },
        "CustomLookup10": {
          "type": "string"
        },
        "CustomLookup11": {
          "type": "string"
        },
        "CustomLookup12": {
          "type": "string"
        },
        "Code": {
          "type": "string"
        },
        "NickName": {
          "type": "string"
        },
        "ListOrder": {
          "format": "int32",
          "type": "integer"
        },
        "JobTitle": {
          "type": "string"
        },
        "Address1": {
          "type": "string"
        },
        "Address2": {
          "type": "string"
        },
        "City": {
          "type": "string"
        },
        "State": {
          "type": "string"
        },
        "CountryId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "PhoneNo": {
          "type": "string"
        },
        "MobilePhoneNo": {
          "type": "string"
        },
        "Title": {
          "type": "string"
        },
        "Suffix": {
          "type": "string"
        },
        "Organization": {
          "type": "string"
        },
        "PostalCode": {
          "type": "string"
        },
        "PhoneNo2": {
          "type": "string"
        },
        "Fax": {
          "type": "string"
        },
        "HomePage": {
          "type": "string"
        },
        "IsManager": {
          "type": "boolean"
        },
        "DiscRequireAuthCode": {
          "type": "boolean"
        },
        "MaxTradeAdjustmentPercent": {
          "format": "double",
          "type": "number"
        },
        "HomeLocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CommissionGroupId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "AvailableInCalendar": {
          "type": "boolean"
        },
        "PasswordChangeDate": {
          "format": "date-time",
          "type": "string"
        },
        "SecurityType": {
          "format": "int32",
          "type": "integer"
        },
        "OverrideRoleDiscountLimits": {
          "type": "boolean"
        },
        "QrScanCode": {
          "type": "string"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.OverrideEmployeeType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "EmployeeId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "EmployeeNum": {
          "format": "int32",
          "type": "integer"
        },
        "LoginName": {
          "type": "string"
        },
        "MiddleName": {
          "type": "string"
        },
        "LastName": {
          "type": "string"
        },
        "FirstName": {
          "type": "string"
        },
        "EMail1": {
          "type": "string"
        },
        "EMail2": {
          "type": "string"
        },
        "MaxDiscPercent": {
          "format": "double",
          "type": "number"
        },
        "Universal": {
          "type": "boolean"
        },
        "Active": {
          "type": "boolean"
        },
        "Type": {
          "format": "int32",
          "type": "integer"
        },
        "ExpirationDate": {
          "format": "date-time",
          "type": "string"
        },
        "MaxGlobalDiscPercent": {
          "format": "double",
          "type": "number"
        },
        "CustomDate1": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate2": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate3": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate4": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate5": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate6": {
          "format": "date-time",
          "type": "string"
        },
        "CustomFlag1": {
          "type": "boolean"
        },
        "CustomFlag2": {
          "type": "boolean"
        },
        "CustomFlag3": {
          "type": "boolean"
        },
        "CustomFlag4": {
          "type": "boolean"
        },
        "CustomFlag5": {
          "type": "boolean"
        },
        "CustomFlag6": {
          "type": "boolean"
        },
        "CustomNumber1": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber2": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber3": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber4": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber5": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber6": {
          "format": "int32",
          "type": "integer"
        },
        "CustomDecimal1": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal2": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal3": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal4": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal5": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal6": {
          "format": "double",
          "type": "number"
        },
        "CustomText1": {
          "type": "string"
        },
        "CustomText2": {
          "type": "string"
        },
        "CustomText3": {
          "type": "string"
        },
        "CustomText4": {
          "type": "string"
        },
        "CustomText5": {
          "type": "string"
        },
        "CustomText6": {
          "type": "string"
        },
        "CustomLookup1": {
          "type": "string"
        },
        "CustomLookup2": {
          "type": "string"
        },
        "CustomLookup3": {
          "type": "string"
        },
        "CustomLookup4": {
          "type": "string"
        },
        "CustomLookup5": {
          "type": "string"
        },
        "CustomLookup6": {
          "type": "string"
        },
        "CustomLookup7": {
          "type": "string"
        },
        "CustomLookup8": {
          "type": "string"
        },
        "CustomLookup9": {
          "type": "string"
        },
        "CustomLookup10": {
          "type": "string"
        },
        "CustomLookup11": {
          "type": "string"
        },
        "CustomLookup12": {
          "type": "string"
        },
        "Code": {
          "type": "string"
        },
        "NickName": {
          "type": "string"
        },
        "ListOrder": {
          "format": "int32",
          "type": "integer"
        },
        "JobTitle": {
          "type": "string"
        },
        "Address1": {
          "type": "string"
        },
        "Address2": {
          "type": "string"
        },
        "City": {
          "type": "string"
        },
        "State": {
          "type": "string"
        },
        "CountryId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "PhoneNo": {
          "type": "string"
        },
        "MobilePhoneNo": {
          "type": "string"
        },
        "Title": {
          "type": "string"
        },
        "Suffix": {
          "type": "string"
        },
        "Organization": {
          "type": "string"
        },
        "PostalCode": {
          "type": "string"
        },
        "PhoneNo2": {
          "type": "string"
        },
        "Fax": {
          "type": "string"
        },
        "HomePage": {
          "type": "string"
        },
        "IsManager": {
          "type": "boolean"
        },
        "DiscRequireAuthCode": {
          "type": "boolean"
        },
        "MaxTradeAdjustmentPercent": {
          "format": "double",
          "type": "number"
        },
        "HomeLocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CommissionGroupId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "AvailableInCalendar": {
          "type": "boolean"
        },
        "PasswordChangeDate": {
          "format": "date-time",
          "type": "string"
        },
        "SecurityType": {
          "format": "int32",
          "type": "integer"
        },
        "OverrideRoleDiscountLimits": {
          "type": "boolean"
        },
        "QrScanCode": {
          "type": "string"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.CustomerType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "CustomerId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "FirstName": {
          "type": "string"
        },
        "LastName": {
          "type": "string"
        },
        "Title": {
          "type": "string"
        },
        "Address1": {
          "type": "string"
        },
        "Address2": {
          "type": "string"
        },
        "City": {
          "type": "string"
        },
        "State": {
          "type": "string"
        },
        "PostalCode": {
          "type": "string"
        },
        "Phone1": {
          "type": "string"
        },
        "Phone2": {
          "type": "string"
        },
        "Phone3": {
          "type": "string"
        },
        "Gender": {
          "format": "int32",
          "type": "integer"
        },
        "CreateEmployeeId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "EditEmployeeId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "EMail1": {
          "type": "string"
        },
        "EMail2": {
          "type": "string"
        },
        "Birthdate": {
          "format": "date-time",
          "type": "string"
        },
        "AnniversaryDate": {
          "format": "date-time",
          "type": "string"
        },
        "TaxExempt": {
          "type": "boolean"
        },
        "Organization": {
          "type": "string"
        },
        "CountryId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "DefaultShipMethodId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "LargeMemo": {
          "type": "string"
        },
        "MiddleName": {
          "type": "string"
        },
        "Phone4": {
          "type": "string"
        },
        "IsCompany": {
          "type": "boolean"
        },
        "CustomText1": {
          "type": "string"
        },
        "CustomText2": {
          "type": "string"
        },
        "CustomText3": {
          "type": "string"
        },
        "CustomText4": {
          "type": "string"
        },
        "CustomText5": {
          "type": "string"
        },
        "CustomText6": {
          "type": "string"
        },
        "CustomDate1": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate2": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate3": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate4": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate5": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate6": {
          "format": "date-time",
          "type": "string"
        },
        "CustomFlag1": {
          "type": "boolean"
        },
        "CustomFlag2": {
          "type": "boolean"
        },
        "CustomFlag3": {
          "type": "boolean"
        },
        "CustomFlag4": {
          "type": "boolean"
        },
        "CustomFlag5": {
          "type": "boolean"
        },
        "CustomFlag6": {
          "type": "boolean"
        },
        "CustomNumber1": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber2": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber3": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber4": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber5": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber6": {
          "format": "int32",
          "type": "integer"
        },
        "CustomDecimal1": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal2": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal3": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal4": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal5": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal6": {
          "format": "double",
          "type": "number"
        },
        "CustomLookup1": {
          "type": "string"
        },
        "CustomLookup2": {
          "type": "string"
        },
        "CustomLookup3": {
          "type": "string"
        },
        "CustomLookup4": {
          "type": "string"
        },
        "CustomLookup5": {
          "type": "string"
        },
        "CustomLookup6": {
          "type": "string"
        },
        "CustomLookup7": {
          "type": "string"
        },
        "CustomLookup8": {
          "type": "string"
        },
        "CustomLookup9": {
          "type": "string"
        },
        "CustomLookup10": {
          "type": "string"
        },
        "CustomLookup11": {
          "type": "string"
        },
        "CustomLookup12": {
          "type": "string"
        },
        "VATRegistrationNumber": {
          "type": "string"
        },
        "TaxExemptionNumber": {
          "type": "string"
        },
        "PreferredLocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "HomePage": {
          "type": "string"
        },
        "BDDay": {
          "format": "int32",
          "type": "integer"
        },
        "BDMonth": {
          "format": "int32",
          "type": "integer"
        },
        "BDYear": {
          "format": "int32",
          "type": "integer"
        },
        "MembershipEndDate": {
          "format": "date-time",
          "type": "string"
        },
        "MembershipCode": {
          "type": "string"
        },
        "MembershipDays": {
          "format": "int32",
          "type": "integer"
        },
        "WholesaleCustomer": {
          "type": "boolean"
        },
        "TradingPartner": {
          "type": "boolean"
        },
        "TradingPartnerId": {
          "type": "string"
        },
        "MembershipLevelId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CustomerNo": {
          "type": "string"
        },
        "Login": {
          "type": "string"
        },
        "PriceLevelId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CreatedAtLocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "Active": {
          "type": "boolean"
        },
        "CreateDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "EditDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "AcceptMarketing": {
          "type": "boolean"
        },
        "StatusId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "Employee": {
          "type": "boolean"
        },
        "ImageGUId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "Phone1Digits": {
          "type": "string"
        },
        "Phone2Digits": {
          "type": "string"
        },
        "Phone3Digits": {
          "type": "string"
        },
        "Phone4Digits": {
          "type": "string"
        },
        "PrimaryContactID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "AcceptMarketing1": {
          "type": "boolean"
        },
        "AcceptMarketing2": {
          "type": "boolean"
        },
        "EID": {
          "type": "string"
        },
        "AcceptTransactional1": {
          "type": "boolean"
        },
        "AcceptTransactional2": {
          "type": "boolean"
        },
        "OverrideMembershipLevelId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "OverrideMembershipEndDate": {
          "format": "date-time",
          "type": "string"
        },
        "AVSPerformed": {
          "type": "boolean"
        },
        "PreferredPhone": {
          "format": "int32",
          "type": "integer"
        },
        "Address3": {
          "type": "string"
        },
        "Address4": {
          "type": "string"
        },
        "Address5": {
          "type": "string"
        },
        "FiscalCode": {
          "type": "string"
        },
        "MergedToID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CustomerNoGeneratedDeviceId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "Suffix": {
          "type": "string"
        },
        "MagentoID": {
          "type": "string"
        },
        "PayPalID": {
          "type": "string"
        },
        "PreferredAssociateID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "MembershipType": {
          "format": "int32",
          "type": "integer"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.CustomerType1": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "CustomerId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "FirstName": {
          "type": "string"
        },
        "LastName": {
          "type": "string"
        },
        "Title": {
          "type": "string"
        },
        "Address1": {
          "type": "string"
        },
        "Address2": {
          "type": "string"
        },
        "City": {
          "type": "string"
        },
        "State": {
          "type": "string"
        },
        "PostalCode": {
          "type": "string"
        },
        "Phone1": {
          "type": "string"
        },
        "Phone2": {
          "type": "string"
        },
        "Phone3": {
          "type": "string"
        },
        "Phone4": {
          "type": "string"
        },
        "Gender": {
          "format": "int32",
          "type": "integer"
        },
        "CreateEmployeeId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "EditEmployeeId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "EMail1": {
          "type": "string"
        },
        "EMail2": {
          "type": "string"
        },
        "Birthdate": {
          "format": "date-time",
          "type": "string"
        },
        "AnniversaryDate": {
          "format": "date-time",
          "type": "string"
        },
        "TaxExempt": {
          "type": "boolean"
        },
        "Organization": {
          "type": "string"
        },
        "CountryId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "DefaultShipMethodId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "LargeMemo": {
          "type": "string"
        },
        "MiddleName": {
          "type": "string"
        },
        "IsCompany": {
          "type": "boolean"
        },
        "CustomText1": {
          "type": "string"
        },
        "CustomText2": {
          "type": "string"
        },
        "CustomText3": {
          "type": "string"
        },
        "CustomText4": {
          "type": "string"
        },
        "CustomText5": {
          "type": "string"
        },
        "CustomText6": {
          "type": "string"
        },
        "CustomDate1": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate2": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate3": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate4": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate5": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate6": {
          "format": "date-time",
          "type": "string"
        },
        "CustomFlag1": {
          "type": "boolean"
        },
        "CustomFlag2": {
          "type": "boolean"
        },
        "CustomFlag3": {
          "type": "boolean"
        },
        "CustomFlag4": {
          "type": "boolean"
        },
        "CustomFlag5": {
          "type": "boolean"
        },
        "CustomFlag6": {
          "type": "boolean"
        },
        "CustomNumber1": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber2": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber3": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber4": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber5": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber6": {
          "format": "int32",
          "type": "integer"
        },
        "CustomDecimal1": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal2": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal3": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal4": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal5": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal6": {
          "format": "double",
          "type": "number"
        },
        "CustomLookup1": {
          "type": "string"
        },
        "CustomLookup2": {
          "type": "string"
        },
        "CustomLookup3": {
          "type": "string"
        },
        "CustomLookup4": {
          "type": "string"
        },
        "CustomLookup5": {
          "type": "string"
        },
        "CustomLookup6": {
          "type": "string"
        },
        "CustomLookup7": {
          "type": "string"
        },
        "CustomLookup8": {
          "type": "string"
        },
        "CustomLookup9": {
          "type": "string"
        },
        "CustomLookup10": {
          "type": "string"
        },
        "CustomLookup11": {
          "type": "string"
        },
        "CustomLookup12": {
          "type": "string"
        },
        "VATRegistrationNumber": {
          "type": "string"
        },
        "TaxExemptionNumber": {
          "type": "string"
        },
        "PreferredLocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "HomePage": {
          "type": "string"
        },
        "BDDay": {
          "format": "int32",
          "type": "integer"
        },
        "BDMonth": {
          "format": "int32",
          "type": "integer"
        },
        "BDYear": {
          "format": "int32",
          "type": "integer"
        },
        "MembershipEndDate": {
          "format": "date-time",
          "type": "string"
        },
        "MembershipCode": {
          "type": "string"
        },
        "MembershipDays": {
          "format": "int32",
          "type": "integer"
        },
        "WholesaleCustomer": {
          "type": "boolean"
        },
        "TradingPartner": {
          "type": "boolean"
        },
        "TradingPartnerId": {
          "type": "string"
        },
        "MembershipLevelId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CustomerNo": {
          "type": "string"
        },
        "Login": {
          "type": "string"
        },
        "PriceLevelId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CreatedAtLocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "Active": {
          "type": "boolean"
        },
        "CreateDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "EditDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "AcceptMarketing": {
          "type": "boolean"
        },
        "StatusId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "Employee": {
          "type": "boolean"
        },
        "ImageGUId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "Phone1Digits": {
          "type": "string"
        },
        "Phone2Digits": {
          "type": "string"
        },
        "Phone3Digits": {
          "type": "string"
        },
        "Phone4Digits": {
          "type": "string"
        },
        "PrimaryContactID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "AcceptMarketing1": {
          "type": "boolean"
        },
        "AcceptMarketing2": {
          "type": "boolean"
        },
        "EID": {
          "type": "string"
        },
        "AcceptTransactional1": {
          "type": "boolean"
        },
        "AcceptTransactional2": {
          "type": "boolean"
        },
        "OverrideMembershipLevelId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "OverrideMembershipEndDate": {
          "format": "date-time",
          "type": "string"
        },
        "AVSPerformed": {
          "type": "boolean"
        },
        "PreferredPhone": {
          "format": "int32",
          "type": "integer"
        },
        "Address3": {
          "type": "string"
        },
        "Address4": {
          "type": "string"
        },
        "Address5": {
          "type": "string"
        },
        "FiscalCode": {
          "type": "string"
        },
        "MergedToID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CustomerNoGeneratedDeviceId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "Suffix": {
          "type": "string"
        },
        "MagentoID": {
          "type": "string"
        },
        "PayPalID": {
          "type": "string"
        },
        "PreferredAssociateID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "MembershipType": {
          "format": "int32",
          "type": "integer"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.CustomerType2": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "CustomerId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "FirstName": {
          "type": "string"
        },
        "LastName": {
          "type": "string"
        },
        "Title": {
          "type": "string"
        },
        "Address1": {
          "type": "string"
        },
        "Address2": {
          "type": "string"
        },
        "City": {
          "type": "string"
        },
        "State": {
          "type": "string"
        },
        "PostalCode": {
          "type": "string"
        },
        "Phone1": {
          "type": "string"
        },
        "Phone2": {
          "type": "string"
        },
        "Phone3": {
          "type": "string"
        },
        "Gender": {
          "format": "int32",
          "type": "integer"
        },
        "CreateEmployeeId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "EditEmployeeId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "EMail1": {
          "type": "string"
        },
        "EMail2": {
          "type": "string"
        },
        "Birthdate": {
          "format": "date-time",
          "type": "string"
        },
        "AnniversaryDate": {
          "format": "date-time",
          "type": "string"
        },
        "TaxExempt": {
          "type": "boolean"
        },
        "Organization": {
          "type": "string"
        },
        "CountryId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "DefaultShipMethodId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "TaxZoneId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "LargeMemo": {
          "type": "string"
        },
        "MiddleName": {
          "type": "string"
        },
        "Phone4": {
          "type": "string"
        },
        "IsCompany": {
          "type": "boolean"
        },
        "CustomText1": {
          "type": "string"
        },
        "CustomText2": {
          "type": "string"
        },
        "CustomText3": {
          "type": "string"
        },
        "CustomText4": {
          "type": "string"
        },
        "CustomText5": {
          "type": "string"
        },
        "CustomText6": {
          "type": "string"
        },
        "CustomDate1": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate2": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate3": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate4": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate5": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate6": {
          "format": "date-time",
          "type": "string"
        },
        "CustomFlag1": {
          "type": "boolean"
        },
        "CustomFlag2": {
          "type": "boolean"
        },
        "CustomFlag3": {
          "type": "boolean"
        },
        "CustomFlag4": {
          "type": "boolean"
        },
        "CustomFlag5": {
          "type": "boolean"
        },
        "CustomFlag6": {
          "type": "boolean"
        },
        "CustomNumber1": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber2": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber3": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber4": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber5": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber6": {
          "format": "int32",
          "type": "integer"
        },
        "CustomDecimal1": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal2": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal3": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal4": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal5": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal6": {
          "format": "double",
          "type": "number"
        },
        "CustomLookup1": {
          "type": "string"
        },
        "CustomLookup2": {
          "type": "string"
        },
        "CustomLookup3": {
          "type": "string"
        },
        "CustomLookup4": {
          "type": "string"
        },
        "CustomLookup5": {
          "type": "string"
        },
        "CustomLookup6": {
          "type": "string"
        },
        "CustomLookup7": {
          "type": "string"
        },
        "CustomLookup8": {
          "type": "string"
        },
        "CustomLookup9": {
          "type": "string"
        },
        "CustomLookup10": {
          "type": "string"
        },
        "CustomLookup11": {
          "type": "string"
        },
        "CustomLookup12": {
          "type": "string"
        },
        "VATRegistrationNumber": {
          "type": "string"
        },
        "TaxExemptionNumber": {
          "type": "string"
        },
        "PreferredLocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "HomePage": {
          "type": "string"
        },
        "BDDay": {
          "format": "int32",
          "type": "integer"
        },
        "BDMonth": {
          "format": "int32",
          "type": "integer"
        },
        "BDYear": {
          "format": "int32",
          "type": "integer"
        },
        "MembershipEndDate": {
          "format": "date-time",
          "type": "string"
        },
        "MembershipCode": {
          "type": "string"
        },
        "MembershipDays": {
          "format": "int32",
          "type": "integer"
        },
        "WholesaleCustomer": {
          "type": "boolean"
        },
        "TradingPartner": {
          "type": "boolean"
        },
        "TradingPartnerId": {
          "type": "string"
        },
        "MembershipLevelId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CustomerNo": {
          "type": "string"
        },
        "Login": {
          "type": "string"
        },
        "PriceLevelId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CreatedAtLocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "Active": {
          "type": "boolean"
        },
        "CreateDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "EditDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "AcceptMarketing": {
          "type": "boolean"
        },
        "StatusId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "Employee": {
          "type": "boolean"
        },
        "ImageGUId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "Phone1Digits": {
          "type": "string"
        },
        "Phone2Digits": {
          "type": "string"
        },
        "Phone3Digits": {
          "type": "string"
        },
        "Phone4Digits": {
          "type": "string"
        },
        "PrimaryContactID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "AcceptMarketing1": {
          "type": "boolean"
        },
        "AcceptMarketing2": {
          "type": "boolean"
        },
        "EID": {
          "type": "string"
        },
        "AcceptTransactional1": {
          "type": "boolean"
        },
        "AcceptTransactional2": {
          "type": "boolean"
        },
        "OverrideMembershipLevelId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "OverrideMembershipEndDate": {
          "format": "date-time",
          "type": "string"
        },
        "AVSPerformed": {
          "type": "boolean"
        },
        "PreferredPhone": {
          "format": "int32",
          "type": "integer"
        },
        "Address3": {
          "type": "string"
        },
        "Address4": {
          "type": "string"
        },
        "Address5": {
          "type": "string"
        },
        "FiscalCode": {
          "type": "string"
        },
        "MergedToID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CustomerNoGeneratedDeviceId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "Suffix": {
          "type": "string"
        },
        "MagentoID": {
          "type": "string"
        },
        "PayPalID": {
          "type": "string"
        },
        "PreferredAssociateID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "MembershipType": {
          "format": "int32",
          "type": "integer"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.ShipMethodType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "ShippingMethodID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "DeliveryDays": {
          "format": "int32",
          "type": "integer"
        },
        "ListOrder": {
          "format": "int32",
          "type": "integer"
        },
        "Description": {
          "type": "string"
        },
        "ECommerceFlag": {
          "type": "boolean"
        },
        "ECommerceAlias": {
          "type": "string"
        },
        "Code": {
          "type": "string"
        },
        "TrackingUrl": {
          "type": "string"
        },
        "ShippingServiceAvailable": {
          "type": "boolean"
        },
        "IsDefaultShippingService": {
          "type": "boolean"
        },
        "ShippingServiceId": {
          "type": "string"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.TaxCategoryType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "TaxCategoryID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "ParentID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "Name": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        },
        "LocationID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "ExternalId": {
          "type": "string"
        },
        "IsIPI": {
          "type": "boolean"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.ItemDetailsType": {
      "type": "object",
      "properties": {
        "ItemId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "PLU": {
          "format": "int32",
          "type": "integer"
        },
        "CLU": {
          "type": "string"
        },
        "UPC": {
          "type": "string"
        },
        "StyleNo": {
          "type": "string"
        },
        "ExternalId": {
          "type": "string"
        },
        "ItemDescription": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.ItemDescriptionType"
        },
        "Attribute1": {
          "type": "string"
        },
        "Attribute2": {
          "type": "string"
        },
        "Attribute3": {
          "type": "string"
        },
        "ItemType": {
          "enum": [
            "Style",
            "SingleItem",
            "ServiceItem"
          ],
          "type": "string"
        },
        "DCSS": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.DCSSType"
        },
        "BasePrice": {
          "format": "double",
          "type": "number"
        },
        "Style": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.StyleType"
        },
        "Item": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.ItemType"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.MembershipLevelType1": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "MembershipLevelID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "Name": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        },
        "Level": {
          "format": "int32",
          "type": "integer"
        },
        "DayLength": {
          "format": "int32",
          "type": "integer"
        },
        "NormalPrice": {
          "format": "double",
          "type": "number"
        },
        "SaleDiscountPercent": {
          "format": "double",
          "type": "number"
        },
        "SalesDiscountSource": {
          "format": "int32",
          "type": "integer"
        },
        "Inactive": {
          "type": "boolean"
        },
        "LocationID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "PriceLevelId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "LRPEligible": {
          "type": "boolean"
        },
        "ItemId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "DayLengthRewarded": {
          "format": "int32",
          "type": "integer"
        },
        "NeededAmount": {
          "format": "double",
          "type": "number"
        },
        "CustomText1": {
          "type": "string"
        },
        "CustomText2": {
          "type": "string"
        },
        "CustomText3": {
          "type": "string"
        },
        "CustomText4": {
          "type": "string"
        },
        "CustomText5": {
          "type": "string"
        },
        "CustomText6": {
          "type": "string"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.LineDiscountsType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "ReceiptDiscountId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "InputSequence": {
          "format": "int32",
          "type": "integer"
        },
        "DiscountAmount": {
          "format": "double",
          "type": "number"
        },
        "DiscountPercent": {
          "format": "double",
          "type": "number"
        },
        "InputSource": {
          "format": "int32",
          "type": "integer"
        },
        "CascadeFlag": {
          "type": "boolean"
        },
        "MaxDiscountPercent": {
          "format": "double",
          "type": "number"
        },
        "CascadeAmount": {
          "format": "double",
          "type": "number"
        },
        "PromoExcluded": {
          "type": "boolean"
        },
        "OverrideCode": {
          "type": "string"
        },
        "ReturnedReceiptDiscountId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "DiscountReason": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.DiscountReasonType1"
        },
        "DiscountCoupon": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.DiscountCouponType1"
        },
        "Employee": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.EmployeeType1"
        },
        "OverrideEmployee": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.OverrideEmployeeType1"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.ReturnReasonType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "ReturnReasonId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "Description": {
          "type": "string"
        },
        "ListOrder": {
          "format": "int32",
          "type": "integer"
        },
        "LocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "Code": {
          "type": "string"
        },
        "ExternalId": {
          "type": "string"
        },
        "AutoTransferToLocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.ItemFeesType": {
      "type": "object",
      "properties": {
        "LineNo": {
          "format": "int32",
          "type": "integer"
        },
        "GlobalChargeLineNo": {
          "format": "int32",
          "type": "integer"
        },
        "ItemChargeCode": {
          "type": "string"
        },
        "ItemChargeType": {
          "enum": [
            "Empty",
            "Shipping",
            "Insurance",
            "RestockingFee"
          ],
          "type": "string"
        },
        "Qty": {
          "format": "double",
          "type": "number"
        },
        "UnitPrice": {
          "format": "double",
          "type": "number"
        },
        "ExtPrice": {
          "format": "double",
          "type": "number"
        },
        "ExtPriceWithTax": {
          "format": "double",
          "type": "number"
        },
        "TaxCategory": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.TaxCategoryType1"
        },
        "Spread": {
          "type": "boolean"
        },
        "LargeMemo": {
          "type": "string"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.TaxCategoryType2": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "TaxCategoryID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "ParentID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "Name": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        },
        "LocationID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "ExternalId": {
          "type": "string"
        },
        "IsIPI": {
          "type": "boolean"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.TaxesType": {
      "type": "object",
      "properties": {
        "TaxAmount": {
          "format": "double",
          "type": "number"
        },
        "TaxPercent": {
          "format": "double",
          "type": "number"
        },
        "DestTaxZoneCode": {
          "type": "string"
        },
        "TaxCategory": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.TaxCategoryType3"
        },
        "SourceTaxZoneCode": {
          "type": "string"
        },
        "TaxJurisdictionCode": {
          "type": "string"
        },
        "TaxCredit": {
          "format": "double",
          "type": "number"
        },
        "TaxCreditStoreCredit": {
          "format": "double",
          "type": "number"
        },
        "TaxExempt": {
          "type": "boolean"
        },
        "IsCustomTaxPercent": {
          "type": "boolean"
        },
        "IsCustomTaxAmount": {
          "type": "boolean"
        },
        "CustomFlag1": {
          "type": "boolean"
        },
        "CustomNumber1": {
          "format": "int32",
          "type": "integer"
        },
        "CustomDecimal1": {
          "format": "double",
          "type": "number"
        },
        "CustomLookup1": {
          "type": "string"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.TaxExemptInfoType1": {
      "type": "object",
      "properties": {
        "ADDRESS_1": {
          "type": "string"
        },
        "ADDRESS_2": {
          "type": "string"
        },
        "CHILD_NAME": {
          "type": "string"
        },
        "CITY": {
          "type": "string"
        },
        "COUNTRY": {
          "type": "string"
        },
        "FIRST_NAME": {
          "type": "string"
        },
        "LAST_NAME": {
          "type": "string"
        },
        "ORGANIZATION_NAME": {
          "type": "string"
        },
        "PHONE": {
          "type": "string"
        },
        "POSTAL_CODE": {
          "type": "string"
        },
        "STATE": {
          "type": "string"
        },
        "TAX_EXEMPT_NUM": {
          "type": "string"
        },
        "TAX_EXEMPT_REASON": {
          "type": "string"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.ShipMethodType1": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "ShippingMethodID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "DeliveryDays": {
          "format": "int32",
          "type": "integer"
        },
        "ListOrder": {
          "format": "int32",
          "type": "integer"
        },
        "Description": {
          "type": "string"
        },
        "ECommerceFlag": {
          "type": "boolean"
        },
        "ECommerceAlias": {
          "type": "string"
        },
        "Code": {
          "type": "string"
        },
        "TrackingUrl": {
          "type": "string"
        },
        "ShippingServiceAvailable": {
          "type": "boolean"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.SalesOrderItemType": {
      "type": "object",
      "properties": {
        "SalesOrderDTN": {
          "format": "int32",
          "type": "integer"
        },
        "SalesOrderNo": {
          "type": "string"
        },
        "SalesOrderDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "ListOrder": {
          "format": "int32",
          "type": "integer"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.PromoType": {
      "type": "object",
      "properties": {
        "Name": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        },
        "Rank": {
          "format": "int32",
          "type": "integer"
        },
        "Type": {
          "enum": [
            "BuyXGetY",
            "BuyXGetDiscount",
            "SpendMoreGetMore",
            "SalePricePromotion",
            "BuyMoreGetMore"
          ],
          "type": "string"
        },
        "ItemType": {
          "enum": [
            "BuyItem",
            "GetItem"
          ],
          "type": "string"
        },
        "Qty": {
          "format": "double",
          "type": "number"
        },
        "Amount": {
          "format": "double",
          "type": "number"
        },
        "Percent": {
          "format": "double",
          "type": "number"
        },
        "ListOrder": {
          "format": "int32",
          "type": "integer"
        },
        "PromoReturns": {
          "type": "boolean"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.PaymentMethodType": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "PaymentMethodID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        },
        "AccountType": {
          "format": "int32",
          "type": "integer"
        },
        "AllowOvercharge": {
          "type": "boolean"
        },
        "OverchargeAmount": {
          "format": "double",
          "type": "number"
        },
        "OverchangePercent": {
          "format": "double",
          "type": "number"
        },
        "NumberRangeLow": {
          "type": "string"
        },
        "NumberRangeHigh": {
          "type": "string"
        },
        "ListOrder": {
          "format": "int32",
          "type": "integer"
        },
        "Inactive": {
          "type": "boolean"
        },
        "DrawerListOrder": {
          "format": "int32",
          "type": "integer"
        },
        "CurrencyID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "RequireCustomer": {
          "type": "boolean"
        },
        "CheckNoRequired": {
          "format": "int32",
          "type": "integer"
        },
        "OpenCDOnFinalize": {
          "type": "boolean"
        },
        "AllowOverchargeNegative": {
          "type": "boolean"
        },
        "OverchargeAmountNegative": {
          "format": "double",
          "type": "number"
        },
        "OverchargePercentNegative": {
          "format": "double",
          "type": "number"
        },
        "ExternalId": {
          "type": "string"
        },
        "RefundOnCancel": {
          "type": "boolean"
        },
        "MaxAmount": {
          "format": "double",
          "type": "number"
        },
        "OnePaymentPerTransaction": {
          "type": "boolean"
        },
        "BinaryStorageId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "AutoReprintReceiptCopy": {
          "type": "boolean"
        },
        "ScoAddItemTimeout": {
          "format": "int32",
          "type": "integer"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.DepositHistoriesType": {
      "type": "object",
      "properties": {
        "LineNo": {
          "format": "int32",
          "type": "integer"
        },
        "PaymentMethod": {
          "$ref": "#/definitions/SalesReceiptFullExportToJson_get.PaymentMethodType1"
        },
        "PaymentAmount": {
          "format": "double",
          "type": "number"
        },
        "AccountNumber": {
          "type": "string"
        },
        "AccountType": {
          "enum": [
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
          "type": "string"
        },
        "ChangeAmount": {
          "format": "double",
          "type": "number"
        },
        "CurrencyCode": {
          "type": "string"
        },
        "PaymentProcessingRefNum": {
          "type": "string"
        },
        "CardholderFirstName": {
          "type": "string"
        },
        "CardholderLastName": {
          "type": "string"
        },
        "CardholderAddress1": {
          "type": "string"
        },
        "CardholderAddress2": {
          "type": "string"
        },
        "CardholderCity": {
          "type": "string"
        },
        "CardholderState": {
          "type": "string"
        },
        "CardholderPostalCode": {
          "type": "string"
        },
        "CardEnterMethod": {
          "enum": [
            "None",
            "Swipe",
            "Insert",
            "Tap",
            "Keyed",
            "Scan",
            "Unknown"
          ],
          "type": "string"
        },
        "CardOrderId": {
          "type": "string"
        },
        "CardTransactionId": {
          "type": "string"
        },
        "CardType": {
          "enum": [
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
          "type": "string"
        },
        "CustomDate1": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate2": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate3": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate4": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDecimal1": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal2": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal3": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal4": {
          "format": "double",
          "type": "number"
        },
        "CustomFlag1": {
          "type": "boolean"
        },
        "CustomFlag2": {
          "type": "boolean"
        },
        "CustomFlag3": {
          "type": "boolean"
        },
        "CustomFlag4": {
          "type": "boolean"
        },
        "CustomLookup1": {
          "type": "string"
        },
        "CustomLookup2": {
          "type": "string"
        },
        "CustomNumber1": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber2": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber3": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber4": {
          "format": "int32",
          "type": "integer"
        },
        "CustomText1": {
          "type": "string"
        },
        "CustomText2": {
          "type": "string"
        },
        "CustomText3": {
          "type": "string"
        },
        "CustomText4": {
          "type": "string"
        },
        "CustomText5": {
          "type": "string"
        },
        "CustomText6": {
          "type": "string"
        },
        "CustomText7": {
          "type": "string"
        },
        "CustomText8": {
          "type": "string"
        },
        "CustomText9": {
          "type": "string"
        },
        "CustomText10": {
          "type": "string"
        },
        "CustomText11": {
          "type": "string"
        },
        "CustomText12": {
          "type": "string"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.ItemDescriptionType": {
      "type": "object",
      "properties": {
        "Description": {
          "type": "string"
        },
        "Description2": {
          "type": "string"
        },
        "Description3": {
          "type": "string"
        },
        "Description4": {
          "type": "string"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.DCSSType": {
      "type": "object",
      "properties": {
        "DCSSCode": {
          "type": "string"
        },
        "Alias": {
          "type": "string"
        },
        "DeptCode": {
          "type": "string"
        },
        "DeptName": {
          "type": "string"
        },
        "DeptAlias": {
          "type": "string"
        },
        "ClassCode": {
          "type": "string"
        },
        "ClassName": {
          "type": "string"
        },
        "ClassAlias": {
          "type": "string"
        },
        "SubClass1Code": {
          "type": "string"
        },
        "SubClass1Name": {
          "type": "string"
        },
        "SubClass1Alias": {
          "type": "string"
        },
        "SubClass2Code": {
          "type": "string"
        },
        "SubClass2Name": {
          "type": "string"
        },
        "SubClass2Alias": {
          "type": "string"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.StyleType": {
      "type": "object",
      "properties": {
        "CustomDate1": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate2": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate3": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate4": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate5": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate6": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate7": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate8": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate9": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate10": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate11": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate12": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDecimal1": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal2": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal3": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal4": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal5": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal6": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal7": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal8": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal9": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal10": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal11": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal12": {
          "format": "double",
          "type": "number"
        },
        "CustomFlag1": {
          "type": "boolean"
        },
        "CustomFlag2": {
          "type": "boolean"
        },
        "CustomFlag3": {
          "type": "boolean"
        },
        "CustomFlag4": {
          "type": "boolean"
        },
        "CustomFlag5": {
          "type": "boolean"
        },
        "CustomFlag6": {
          "type": "boolean"
        },
        "CustomFlag7": {
          "type": "boolean"
        },
        "CustomFlag8": {
          "type": "boolean"
        },
        "CustomFlag9": {
          "type": "boolean"
        },
        "CustomFlag10": {
          "type": "boolean"
        },
        "CustomFlag11": {
          "type": "boolean"
        },
        "CustomFlag12": {
          "type": "boolean"
        },
        "CustomFlag13": {
          "type": "boolean"
        },
        "CustomFlag14": {
          "type": "boolean"
        },
        "CustomFlag15": {
          "type": "boolean"
        },
        "CustomFlag16": {
          "type": "boolean"
        },
        "CustomFlag17": {
          "type": "boolean"
        },
        "CustomFlag18": {
          "type": "boolean"
        },
        "CustomLookup1": {
          "type": "string"
        },
        "CustomLookup2": {
          "type": "string"
        },
        "CustomLookup3": {
          "type": "string"
        },
        "CustomLookup4": {
          "type": "string"
        },
        "CustomLookup5": {
          "type": "string"
        },
        "CustomLookup6": {
          "type": "string"
        },
        "CustomLookup7": {
          "type": "string"
        },
        "CustomLookup8": {
          "type": "string"
        },
        "CustomLookup9": {
          "type": "string"
        },
        "CustomLookup10": {
          "type": "string"
        },
        "CustomLookup11": {
          "type": "string"
        },
        "CustomLookup12": {
          "type": "string"
        },
        "CustomNumber1": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber2": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber3": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber4": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber5": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber6": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber7": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber8": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber9": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber10": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber11": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber12": {
          "format": "int32",
          "type": "integer"
        },
        "CustomText1": {
          "type": "string"
        },
        "CustomText2": {
          "type": "string"
        },
        "CustomText3": {
          "type": "string"
        },
        "CustomText4": {
          "type": "string"
        },
        "CustomText5": {
          "type": "string"
        },
        "CustomText6": {
          "type": "string"
        },
        "CustomText7": {
          "type": "string"
        },
        "CustomText8": {
          "type": "string"
        },
        "CustomText9": {
          "type": "string"
        },
        "CustomText10": {
          "type": "string"
        },
        "CustomText11": {
          "type": "string"
        },
        "CustomText12": {
          "type": "string"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.ItemType": {
      "type": "object",
      "properties": {
        "CustomDate1": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate2": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate3": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate4": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate5": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate6": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDecimal1": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal2": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal3": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal4": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal5": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal6": {
          "format": "double",
          "type": "number"
        },
        "CustomFlag1": {
          "type": "boolean"
        },
        "CustomFlag2": {
          "type": "boolean"
        },
        "CustomFlag3": {
          "type": "boolean"
        },
        "CustomFlag4": {
          "type": "boolean"
        },
        "CustomFlag5": {
          "type": "boolean"
        },
        "CustomFlag6": {
          "type": "boolean"
        },
        "CustomLookup1": {
          "type": "string"
        },
        "CustomLookup2": {
          "type": "string"
        },
        "CustomLookup3": {
          "type": "string"
        },
        "CustomLookup4": {
          "type": "string"
        },
        "CustomLookup5": {
          "type": "string"
        },
        "CustomLookup6": {
          "type": "string"
        },
        "CustomLookup7": {
          "type": "string"
        },
        "CustomLookup8": {
          "type": "string"
        },
        "CustomLookup9": {
          "type": "string"
        },
        "CustomLookup10": {
          "type": "string"
        },
        "CustomLookup11": {
          "type": "string"
        },
        "CustomLookup12": {
          "type": "string"
        },
        "CustomNumber1": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber2": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber3": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber4": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber5": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber6": {
          "format": "int32",
          "type": "integer"
        },
        "CustomText1": {
          "type": "string"
        },
        "CustomText2": {
          "type": "string"
        },
        "CustomText3": {
          "type": "string"
        },
        "CustomText4": {
          "type": "string"
        },
        "CustomText5": {
          "type": "string"
        },
        "CustomText6": {
          "type": "string"
        },
        "RMAcode": {
          "type": "string"
        },
        "RmaDeviceTransactionNumber": {
          "format": "int64",
          "type": "integer"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.DiscountReasonType1": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "DiscountReasonID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        },
        "DefaultPercent": {
          "format": "double",
          "type": "number"
        },
        "ListOrder": {
          "format": "int32",
          "type": "integer"
        },
        "MaxPercent": {
          "format": "double",
          "type": "number"
        },
        "Type": {
          "format": "int32",
          "type": "integer"
        },
        "ECommerceFlag]": {
          "type": "boolean"
        },
        "ECommerceAlias": {
          "type": "string"
        },
        "LocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "RequireAuthorization": {
          "type": "boolean"
        },
        "StartDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "EndDateTime": {
          "format": "date-time",
          "type": "string"
        },
        "Archived": {
          "type": "boolean"
        },
        "CouponDiscount": {
          "type": "boolean"
        },
        "DiscountType": {
          "format": "int32",
          "type": "integer"
        },
        "DefaultDiscountAmoun": {
          "format": "double",
          "type": "number"
        },
        "PreventDiscountChange": {
          "type": "boolean"
        },
        "DoNotDisplayAuthCode": {
          "type": "boolean"
        },
        "ExternalId": {
          "type": "string"
        },
        "AuthorityLevel": {
          "format": "int32",
          "type": "integer"
        },
        "PermitCombiningWithCustomerDiscount": {
          "type": "boolean"
        },
        "Cascade": {
          "type": "boolean"
        },
        "PromoExclude": {
          "type": "boolean"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.DiscountCouponType1": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "ReceiptDiscountCouponId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CouponNumber": {
          "type": "string"
        },
        "CouponProgramName": {
          "type": "string"
        },
        "CouponStartDate": {
          "format": "date-time",
          "type": "string"
        },
        "CouponEndDate": {
          "format": "date-time",
          "type": "string"
        },
        "CouponProgramId": {
          "type": "string"
        },
        "IsReusable": {
          "type": "boolean"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.EmployeeType1": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "EmployeeId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "EmployeeNum": {
          "format": "int32",
          "type": "integer"
        },
        "LoginName": {
          "type": "string"
        },
        "MiddleName": {
          "type": "string"
        },
        "LastName": {
          "type": "string"
        },
        "FirstName": {
          "type": "string"
        },
        "EMail1": {
          "type": "string"
        },
        "EMail2": {
          "type": "string"
        },
        "MaxDiscPercent": {
          "format": "double",
          "type": "number"
        },
        "Universal": {
          "type": "boolean"
        },
        "Active": {
          "type": "boolean"
        },
        "Type": {
          "format": "int32",
          "type": "integer"
        },
        "ExpirationDate": {
          "format": "date-time",
          "type": "string"
        },
        "MaxGlobalDiscPercent": {
          "format": "double",
          "type": "number"
        },
        "CustomDate1": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate2": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate3": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate4": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate5": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate6": {
          "format": "date-time",
          "type": "string"
        },
        "CustomFlag1": {
          "type": "boolean"
        },
        "CustomFlag2": {
          "type": "boolean"
        },
        "CustomFlag3": {
          "type": "boolean"
        },
        "CustomFlag4": {
          "type": "boolean"
        },
        "CustomFlag5": {
          "type": "boolean"
        },
        "CustomFlag6": {
          "type": "boolean"
        },
        "CustomNumber1": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber2": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber3": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber4": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber5": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber6": {
          "format": "int32",
          "type": "integer"
        },
        "CustomDecimal1": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal2": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal3": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal4": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal5": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal6": {
          "format": "double",
          "type": "number"
        },
        "CustomText1": {
          "type": "string"
        },
        "CustomText2": {
          "type": "string"
        },
        "CustomText3": {
          "type": "string"
        },
        "CustomText4": {
          "type": "string"
        },
        "CustomText5": {
          "type": "string"
        },
        "CustomText6": {
          "type": "string"
        },
        "CustomLookup1": {
          "type": "string"
        },
        "CustomLookup2": {
          "type": "string"
        },
        "CustomLookup3": {
          "type": "string"
        },
        "CustomLookup4": {
          "type": "string"
        },
        "CustomLookup5": {
          "type": "string"
        },
        "CustomLookup6": {
          "type": "string"
        },
        "CustomLookup7": {
          "type": "string"
        },
        "CustomLookup8": {
          "type": "string"
        },
        "CustomLookup9": {
          "type": "string"
        },
        "CustomLookup10": {
          "type": "string"
        },
        "CustomLookup11": {
          "type": "string"
        },
        "CustomLookup12": {
          "type": "string"
        },
        "Code": {
          "type": "string"
        },
        "NickName": {
          "type": "string"
        },
        "ListOrder": {
          "format": "int32",
          "type": "integer"
        },
        "JobTitle": {
          "type": "string"
        },
        "Address1": {
          "type": "string"
        },
        "Address2": {
          "type": "string"
        },
        "City": {
          "type": "string"
        },
        "State": {
          "type": "string"
        },
        "CountryId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "PhoneNo": {
          "type": "string"
        },
        "MobilePhoneNo": {
          "type": "string"
        },
        "Title": {
          "type": "string"
        },
        "Suffix": {
          "type": "string"
        },
        "Organization": {
          "type": "string"
        },
        "PostalCode": {
          "type": "string"
        },
        "PhoneNo2": {
          "type": "string"
        },
        "Fax": {
          "type": "string"
        },
        "HomePage": {
          "type": "string"
        },
        "IsManager": {
          "type": "boolean"
        },
        "DiscRequireAuthCode": {
          "type": "boolean"
        },
        "MaxTradeAdjustmentPercent": {
          "format": "double",
          "type": "number"
        },
        "HomeLocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CommissionGroupId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "AvailableInCalendar": {
          "type": "boolean"
        },
        "PasswordChangeDate": {
          "format": "date-time",
          "type": "string"
        },
        "SecurityType": {
          "format": "int32",
          "type": "integer"
        },
        "OverrideRoleDiscountLimits": {
          "type": "boolean"
        },
        "QrScanCode": {
          "type": "string"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.OverrideEmployeeType1": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "EmployeeId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "EmployeeNum": {
          "format": "int32",
          "type": "integer"
        },
        "LoginName": {
          "type": "string"
        },
        "MiddleName": {
          "type": "string"
        },
        "LastName": {
          "type": "string"
        },
        "FirstName": {
          "type": "string"
        },
        "EMail1": {
          "type": "string"
        },
        "EMail2": {
          "type": "string"
        },
        "MaxDiscPercent": {
          "format": "double",
          "type": "number"
        },
        "Universal": {
          "type": "boolean"
        },
        "Active": {
          "type": "boolean"
        },
        "Type": {
          "format": "int32",
          "type": "integer"
        },
        "ExpirationDate": {
          "format": "date-time",
          "type": "string"
        },
        "MaxGlobalDiscPercent": {
          "format": "double",
          "type": "number"
        },
        "CustomDate1": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate2": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate3": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate4": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate5": {
          "format": "date-time",
          "type": "string"
        },
        "CustomDate6": {
          "format": "date-time",
          "type": "string"
        },
        "CustomFlag1": {
          "type": "boolean"
        },
        "CustomFlag2": {
          "type": "boolean"
        },
        "CustomFlag3": {
          "type": "boolean"
        },
        "CustomFlag4": {
          "type": "boolean"
        },
        "CustomFlag5": {
          "type": "boolean"
        },
        "CustomFlag6": {
          "type": "boolean"
        },
        "CustomNumber1": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber2": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber3": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber4": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber5": {
          "format": "int32",
          "type": "integer"
        },
        "CustomNumber6": {
          "format": "int32",
          "type": "integer"
        },
        "CustomDecimal1": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal2": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal3": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal4": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal5": {
          "format": "double",
          "type": "number"
        },
        "CustomDecimal6": {
          "format": "double",
          "type": "number"
        },
        "CustomText1": {
          "type": "string"
        },
        "CustomText2": {
          "type": "string"
        },
        "CustomText3": {
          "type": "string"
        },
        "CustomText4": {
          "type": "string"
        },
        "CustomText5": {
          "type": "string"
        },
        "CustomText6": {
          "type": "string"
        },
        "CustomLookup1": {
          "type": "string"
        },
        "CustomLookup2": {
          "type": "string"
        },
        "CustomLookup3": {
          "type": "string"
        },
        "CustomLookup4": {
          "type": "string"
        },
        "CustomLookup5": {
          "type": "string"
        },
        "CustomLookup6": {
          "type": "string"
        },
        "CustomLookup7": {
          "type": "string"
        },
        "CustomLookup8": {
          "type": "string"
        },
        "CustomLookup9": {
          "type": "string"
        },
        "CustomLookup10": {
          "type": "string"
        },
        "CustomLookup11": {
          "type": "string"
        },
        "CustomLookup12": {
          "type": "string"
        },
        "Code": {
          "type": "string"
        },
        "NickName": {
          "type": "string"
        },
        "ListOrder": {
          "format": "int32",
          "type": "integer"
        },
        "JobTitle": {
          "type": "string"
        },
        "Address1": {
          "type": "string"
        },
        "Address2": {
          "type": "string"
        },
        "City": {
          "type": "string"
        },
        "State": {
          "type": "string"
        },
        "CountryId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "PhoneNo": {
          "type": "string"
        },
        "MobilePhoneNo": {
          "type": "string"
        },
        "Title": {
          "type": "string"
        },
        "Suffix": {
          "type": "string"
        },
        "Organization": {
          "type": "string"
        },
        "PostalCode": {
          "type": "string"
        },
        "PhoneNo2": {
          "type": "string"
        },
        "Fax": {
          "type": "string"
        },
        "HomePage": {
          "type": "string"
        },
        "IsManager": {
          "type": "boolean"
        },
        "DiscRequireAuthCode": {
          "type": "boolean"
        },
        "MaxTradeAdjustmentPercent": {
          "format": "double",
          "type": "number"
        },
        "HomeLocationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "CommissionGroupId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "AvailableInCalendar": {
          "type": "boolean"
        },
        "PasswordChangeDate": {
          "format": "date-time",
          "type": "string"
        },
        "SecurityType": {
          "format": "int32",
          "type": "integer"
        },
        "OverrideRoleDiscountLimits": {
          "type": "boolean"
        },
        "QrScanCode": {
          "type": "string"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.TaxCategoryType1": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "TaxCategoryID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "ParentID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "Name": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        },
        "LocationID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "ExternalId": {
          "type": "string"
        },
        "IsIPI": {
          "type": "boolean"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.TaxCategoryType3": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "TaxCategoryID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "ParentID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "Name": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        },
        "LocationID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "ExternalId": {
          "type": "string"
        },
        "IsIPI": {
          "type": "boolean"
        }
      }
    },
    "SalesReceiptFullExportToJson_get.PaymentMethodType1": {
      "type": "object",
      "properties": {
        "RecCreated": {
          "format": "date-time",
          "type": "string"
        },
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "StreamingDate": {
          "format": "date-time",
          "type": "string"
        },
        "PaymentMethodID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        },
        "AccountType": {
          "format": "int32",
          "type": "integer"
        },
        "AllowOvercharge": {
          "type": "boolean"
        },
        "OverchargeAmount": {
          "format": "double",
          "type": "number"
        },
        "OverchangePercent": {
          "format": "double",
          "type": "number"
        },
        "NumberRangeLow": {
          "type": "string"
        },
        "NumberRangeHigh": {
          "type": "string"
        },
        "ListOrder": {
          "format": "int32",
          "type": "integer"
        },
        "Inactive": {
          "type": "boolean"
        },
        "DrawerListOrder": {
          "format": "int32",
          "type": "integer"
        },
        "CurrencyID": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "RequireCustomer": {
          "type": "boolean"
        },
        "CheckNoRequired": {
          "format": "int32",
          "type": "integer"
        },
        "OpenCDOnFinalize": {
          "type": "boolean"
        },
        "AllowOverchargeNegative": {
          "type": "boolean"
        },
        "OverchargeAmountNegative": {
          "format": "double",
          "type": "number"
        },
        "OverchargePercentNegative": {
          "format": "double",
          "type": "number"
        },
        "ExternalId": {
          "type": "string"
        },
        "RefundOnCancel": {
          "type": "boolean"
        },
        "MaxAmount": {
          "format": "double",
          "type": "number"
        },
        "OnePaymentPerTransaction": {
          "type": "boolean"
        },
        "BinaryStorageId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "AutoReprintReceiptCopy": {
          "type": "boolean"
        },
        "ScoAddItemTimeout": {
          "format": "int32",
          "type": "integer"
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
