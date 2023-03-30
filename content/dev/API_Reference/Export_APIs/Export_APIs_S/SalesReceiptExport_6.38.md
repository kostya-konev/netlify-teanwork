---
title: "Sales Receipt Export API [6.38]"
date: 2022-05-25T08:37:00-05:00
draft: true
weight: 19
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
- [Request example(s)](#RequestExamples)
- [Response example(s)](#ResponseExamples)

---

## Overview {#Overview}

This topic describes the **Sales Receipt Export** API which is used to export *Sales Receipts* from CHQ.

See the [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) document for a description on how export requests are made and on the standard request and response formats used. The **Sales Receipt Export** successful response format will be described below.

{{% notice note %}}
The **Sales Receipt Export API** can support both the *new* and *legacy* sales receipt formats. The desired configuration can be performed upon request. 
{{% /notice %}}

## Request endpoint {#RequestEndpoint}

Method: **POST**  
URL: <font color="Brown"><b><i>\<your-chq-url\></i></font> /chqapi/export/sales-receipt</b>  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <font color="Brown"><b><i>\<your-api-key\></b></i></font>

<font color="Brown"><b><i>\<your-chq-url\></b></i></font> is the URL of your CHQ as supplied by Teamwork.  
<font color="Brown"><b><i>\<your-api-key\></b></i></font> is your API key value. See the [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) document for further info.

## Request settings {#RequestSettings}

Below are the settings which can be supplied in the **Settings** group of the export request to define which value (field) is to be used for a particular value class (see the [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) document for additional info).

The **Key** column lists the names of the available settings. The **Supported Values** column lists the valid values which can be supplied for the setting. The **Default** column lists the default value for each setting if that setting is not supplied.

**Key** | **Supported Values** | **Default** |
---- | ---- | ---- | 
LocationIdentifierSetting | Code, ExternalId, ExternalIdCode, No, TeamworkId | ExternalIdCode |
EmployeeIdentifierSetting | TeamworkId, LoginName, FullName<br>*(FullName was added in V6.14)* | LoginName |
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
DeviceTransactionNumber | "Equal", "Contains" | Any valid long integer value representing a **DeviceTransactionNumber** for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |
AltDeviceTransactionNumber | "Equal", "Contains"  | Any valid string representing an alternative device transaction number for the "Equal" operator, or a comma-separated list of alternative device transaction numbers if the operator is "Contains". |
SalesReceiptNo | "Equal", "Greater than", "Greater than or equal", "Less than", "Less than or equal" | Any valid integer representing a sales receipt number. |
RecModified | "Greater than", "Greater than or equal", "Less than", "Less than or equal" | Any valid string representing a date-time value. |
DrawerMemoNo | "Equal" | Any valid integer representing a drawer memo number. |
DrawerMemoId | "Equal" | Any valid guid string representing a drawer memo id. |
OrderNo | "Equal" | Any valid string representing a sales order number.|


## Request sorts {#RequestSorts}

Below are the fields for which sorting can be requested in the **SortDescriptions** group of the export request (see the [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) document for additional info).

Currently, only the default sort by **RecModified** *ascending* is supported by this API.

---

## Successful response format {#SuccessfulResponse}

Below is the format of the successful response to the export request. See the [*JSON Data Types*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/JsonDataTypes_6.41/) document for a description of the values which could appear in the **Data Type** column.

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
ApiDocumentId | string, guid | A unique identifier of the API document being used. |
Status | string,enum | The status of the response. The value will always be "Success" because if an error occured the standard *Error* response will be returned. <font color="Crimson">***????????***</font>|
ApiRequestType | string | <font color="Crimson">***????????***</font>
TotalRecords | int32 | The total number of submitted records processed. <font color="Crimson">***????????***</font> |
RecordsCount | int32 | The number of records returned. <font color="Crimson">***????????***</font> |
ElapsedTime | string, datetime | The time it took to execute the export request. |
StartDateTime | string, datetime | A timestamp of when the export request started executing. |
EndDateTime | string, datetime | A timestamp of when the export request stopped executing. |
<font color=#008AE8>**Response**</font> | | <font color=#008AE8>A group containing the following fields and groups.</font> |
<font color=#008AE8>**Response: SalesReceipts**</font> |  | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries.</font> |
SalesReceiptNo | int32 | A number identifying the sales receipt. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
DeviceTransactionNumber | int64 | The receipt’s transaction number for the device used for the sales receipt. |
AltDeviceTransactionNumber | string | An alternate identifier of the receipt’s transaction number for the device used for the sales receipt. |
SalesReceiptId | string, guid | A unique identifier of the sales receipt. |
ReceiptCode | string | A code identifying the sales receipt. <font color="Crimson">***????????***</font> |
ReceiptIdentifier | string | An identifier of the sales receipt. |
PostedDateTime | string, datetime | A timestamp of when the receipt was posted. |
Location | string | An identifier of the location where the receipt was created. <font color="Crimson">***????????***</font> |
TransactionType | string, enum | An identifier of the receipt’s transaction type. Its value must be one of the following: "Default", "Sale", "Return", "Mixed", "Reversed", "Aborted", "NoItems", "Reversal", "Trade", "Deposit", "Adjustment" |
Associated | string | <font color="Crimson">***????????***</font> |
Cashier | string | An identifier of the cashier who created the receipt. <font color="Crimson">***????????***</font> |
<font color="Crimson">***?????????? more to come ??????????***</font> |
<!-- begin comment block (when active)-------------------- -->------------------------------------------------------<!-- end comment block (when active)-------------------- -->
<!-- begin comment block (when active)-------------------- -->------------------------------------------------------<!-- end comment block (when active)-------------------- -->
<font color=#008AE8>**---**</font> | | <font color=#008AE8>*end of* ***Response: SalesReceipts***</font> |
<font color=#008AE8>**---**</font> | | <font color=#008AE8>*end of* ***Response***</font> |

---

## Request Example(s) {#RequestExamples}

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

~~~

{
  "ApiDocumentId": "00000000-0000-0000-0000-000000000000",
  "Status": "Successful",
  "ApiRequestType": "string",
  "TotalRecords": 0,
  "RecordsCount": 0,
  "ElapsedTime": "2022-02-02T10:10:34.708Z",
  "StartDateTime": "2022-02-02T10:10:34.708Z",
  "EndDateTime": "2022-02-02T10:10:34.708Z",
  "Response": {
    "SalesReceipts": [
      {
        "SalesReceiptNo": 0,
        "RecModified": "2022-02-02T10:10:34.708Z",
        "DeviceTransactionNumber": 0,
        "AltDeviceTransactionNumber": "string",
        "SalesReceiptId": "00000000-0000-0000-0000-000000000000",
        "ReceiptCode": "string",
        "ReceiptIdentifier": "string",
        "PostedDateTime": "2022-02-02T10:10:34.709Z",
        "Location": "string",
        "TransactionType": "Default",
        "DrawerMemoIdentifier": "string",
        "Associated": "string",
        "Cashier": "string",
        "TotalQty": 0,
        "InventoryAmount": 0,
        "MembershipDiscount": 0,
        "TotalDiscountAmount": 0,
        "TotalItemsShippingAmount": 0,
        "TotalItemsFeeAmount": 0,
        "TotalTaxAmount": 0,
        "TotalAmount": 0,
        "TotalAmountRounded": 0,
        "MembershipCode": 0,
        "MembershipLevel": "string",
        "MembershipLevelOverride": "string",
        "MembershipLevelOverrideEmployee": "string",
        "GlobalDiscReason": "string",
        "GlobalDiscEmployee": "string",
        "GlobalDiscOverrideEmployee": "string",
        "DiscountReasons": [
          {
            "RecCreated": "2022-02-02T10:10:34.709Z",
            "RecModified": "2022-02-02T10:10:34.709Z",
            "StreamingDate": "2022-02-02T10:10:34.709Z",
            "ReceiptDiscountId": "00000000-0000-0000-0000-000000000000",
            "ReceiptId": "00000000-0000-0000-0000-000000000000",
            "InputSequence": 0,
            "DiscountAmount": 0,
            "DiscountPercent": 0,
            "InputSource": 0,
            "CascadeFlag": true,
            "GlobalReceiptDiscountId": "00000000-0000-0000-0000-000000000000",
            "MaxDiscountPercent": 0,
            "CascadeAmount": 0,
            "PromoExcluded": true,
            "OverrideCode": 0,
            "DiscountReasonId": "string",
            "GlobalDiscEmployee": "string",
            "GlobalDiscOverrideEmployee": "string",
            "ReturnedReceiptDiscountId": "00000000-0000-0000-0000-000000000000",
            "PurposeText": "string"
          }
        ],
        "DiscountCoupons": [
          {
            "CouponNumber": "string",
            "CouponProgramName": "string",
            "CouponAmount": 0,
            "CouponPercent": 0
          }
        ],
        "DestTaxArea": "string",
        "SourceTaxArea": "string",
        "ReversingDocumentIdentifier": "string",
        "ReversedDocumentIdentifier": "string",
        "SaleTime": 0,
        "TaxExempt": true,
        "TaxExemptInfo": {
          "ADDRESS_1": "string",
          "ADDRESS_2": "string",
          "CHILD_NAME": "string",
          "CITY": "string",
          "COUNTRY": "string",
          "FIRST_NAME": "string",
          "LAST_NAME": "string",
          "ORGANIZATION_NAME": "string",
          "PHONE": "string",
          "POSTAL_CODE": "string",
          "STATE": "string",
          "TAX_EXEMPT_NUM": "string",
          "TAX_EXEMPT_REASON": "string"
        },
        "SellInfo": {
          "Customer": "string",
          "LastName": "string",
          "FirstName": "string",
          "Address1": "string",
          "Address2": "string",
          "PostalCode": "string",
          "CountryCode": "string",
          "State": "string",
          "City": "string",
          "Phone1": "string",
          "Phone2": "string",
          "Phone3": "string",
          "Phone4": "string",
          "Organization": "string",
          "Gender": "Unknown",
          "Email": "string",
          "BirthdateText": "string",
          "WholesaleCustomer": true,
          "TradingPartner": true,
          "Custom": {
            "CustomDate1": "2022-02-02T10:10:34.709Z",
            "CustomDate2": "2022-02-02T10:10:34.709Z",
            "CustomDate3": "2022-02-02T10:10:34.709Z",
            "CustomDate4": "2022-02-02T10:10:34.709Z",
            "CustomDate5": "2022-02-02T10:10:34.709Z",
            "CustomDate6": "2022-02-02T10:10:34.709Z",
            "CustomDecimal1": 0,
            "CustomDecimal2": 0,
            "CustomDecimal3": 0,
            "CustomDecimal4": 0,
            "CustomDecimal5": 0,
            "CustomDecimal6": 0,
            "CustomFlag1": true,
            "CustomFlag2": true,
            "CustomFlag3": true,
            "CustomFlag4": true,
            "CustomFlag5": true,
            "CustomFlag6": true,
            "CustomLookup1": "string",
            "CustomLookup10": "string",
            "CustomLookup11": "string",
            "CustomLookup12": "string",
            "CustomLookup2": "string",
            "CustomLookup3": "string",
            "CustomLookup4": "string",
            "CustomLookup5": "string",
            "CustomLookup6": "string",
            "CustomLookup7": "string",
            "CustomLookup8": "string",
            "CustomLookup9": "string",
            "CustomNumber1": 0,
            "CustomNumber2": 0,
            "CustomNumber3": 0,
            "CustomNumber4": 0,
            "CustomNumber5": 0,
            "CustomNumber6": 0,
            "CustomText1": "string",
            "CustomText2": "string",
            "CustomText3": "string",
            "CustomText4": "string",
            "CustomText5": "string",
            "CustomText6": "string"
          }
        },
        "BillInfo": {
          "Customer": "string",
          "LastName": "string",
          "FirstName": "string",
          "Address1": "string",
          "Address2": "string",
          "PostalCode": "string",
          "CountryCode": "string",
          "State": "string",
          "City": "string",
          "Phone1": "string",
          "Phone2": "string",
          "Phone3": "string",
          "Phone4": "string",
          "Organization": "string",
          "Email": "string",
          "BirthdateText": "string",
          "WholesaleCustomer": true,
          "TradingPartner": true,
          "Custom": {
            "CustomDate1": "2022-02-02T10:10:34.709Z",
            "CustomDate2": "2022-02-02T10:10:34.709Z",
            "CustomDate3": "2022-02-02T10:10:34.709Z",
            "CustomDate4": "2022-02-02T10:10:34.709Z",
            "CustomDate5": "2022-02-02T10:10:34.709Z",
            "CustomDate6": "2022-02-02T10:10:34.709Z",
            "CustomDecimal1": 0,
            "CustomDecimal2": 0,
            "CustomDecimal3": 0,
            "CustomDecimal4": 0,
            "CustomDecimal5": 0,
            "CustomDecimal6": 0,
            "CustomFlag1": true,
            "CustomFlag2": true,
            "CustomFlag3": true,
            "CustomFlag4": true,
            "CustomFlag5": true,
            "CustomFlag6": true,
            "CustomLookup1": "string",
            "CustomLookup10": "string",
            "CustomLookup11": "string",
            "CustomLookup12": "string",
            "CustomLookup2": "string",
            "CustomLookup3": "string",
            "CustomLookup4": "string",
            "CustomLookup5": "string",
            "CustomLookup6": "string",
            "CustomLookup7": "string",
            "CustomLookup8": "string",
            "CustomLookup9": "string",
            "CustomNumber1": 0,
            "CustomNumber2": 0,
            "CustomNumber3": 0,
            "CustomNumber4": 0,
            "CustomNumber5": 0,
            "CustomNumber6": 0,
            "CustomText1": "string",
            "CustomText2": "string",
            "CustomText3": "string",
            "CustomText4": "string",
            "CustomText5": "string",
            "CustomText6": "string"
          }
        },
        "ShipInfo": {
          "Customer": "string",
          "LastName": "string",
          "FirstName": "string",
          "Address1": "string",
          "Address2": "string",
          "PostalCode": "string",
          "CountryCode": "string",
          "State": "string",
          "City": "string",
          "Phone1": "string",
          "Phone2": "string",
          "Phone3": "string",
          "Phone4": "string",
          "Organization": "string",
          "Email": "string",
          "BirthdateText": "string",
          "WholesaleCustomer": true,
          "TradingPartner": true,
          "Custom": {
            "CustomDate1": "2022-02-02T10:10:34.709Z",
            "CustomDate2": "2022-02-02T10:10:34.709Z",
            "CustomDate3": "2022-02-02T10:10:34.709Z",
            "CustomDate4": "2022-02-02T10:10:34.709Z",
            "CustomDate5": "2022-02-02T10:10:34.709Z",
            "CustomDate6": "2022-02-02T10:10:34.709Z",
            "CustomDecimal1": 0,
            "CustomDecimal2": 0,
            "CustomDecimal3": 0,
            "CustomDecimal4": 0,
            "CustomDecimal5": 0,
            "CustomDecimal6": 0,
            "CustomFlag1": true,
            "CustomFlag2": true,
            "CustomFlag3": true,
            "CustomFlag4": true,
            "CustomFlag5": true,
            "CustomFlag6": true,
            "CustomLookup1": "string",
            "CustomLookup10": "string",
            "CustomLookup11": "string",
            "CustomLookup12": "string",
            "CustomLookup2": "string",
            "CustomLookup3": "string",
            "CustomLookup4": "string",
            "CustomLookup5": "string",
            "CustomLookup6": "string",
            "CustomLookup7": "string",
            "CustomLookup8": "string",
            "CustomLookup9": "string",
            "CustomNumber1": 0,
            "CustomNumber2": 0,
            "CustomNumber3": 0,
            "CustomNumber4": 0,
            "CustomNumber5": 0,
            "CustomNumber6": 0,
            "CustomText1": "string",
            "CustomText2": "string",
            "CustomText3": "string",
            "CustomText4": "string",
            "CustomText5": "string",
            "CustomText6": "string"
          }
        },
        "Notes": "string",
        "CustomDate1": "2022-02-02T10:10:34.709Z",
        "CustomDate2": "2022-02-02T10:10:34.709Z",
        "CustomDate3": "2022-02-02T10:10:34.709Z",
        "CustomDate4": "2022-02-02T10:10:34.709Z",
        "CustomDecimal1": 0,
        "CustomDecimal2": 0,
        "CustomDecimal3": 0,
        "CustomDecimal4": 0,
        "CustomFlag1": true,
        "CustomFlag2": true,
        "CustomFlag3": true,
        "CustomFlag4": true,
        "CustomLookup1": "string",
        "CustomLookup2": "string",
        "CustomLookup3": "string",
        "CustomLookup4": "string",
        "CustomLookup5": "string",
        "CustomLookup6": "string",
        "CustomLookup7": "string",
        "CustomLookup8": "string",
        "CustomNumber1": 0,
        "CustomNumber2": 0,
        "CustomNumber3": 0,
        "CustomNumber4": 0,
        "CustomText1": "string",
        "CustomText2": "string",
        "CustomText3": "string",
        "CustomText4": "string",
        "CustomText5": "string",
        "CustomText6": "string",
        "CustomText7": "string",
        "CustomText8": "string",
        "ReceiptCharges": [
          {
            "LineNo": 0,
            "ChargeType": "GiftCard",
            "Amount": 0,
            "AccountNum": "string",
            "ExtTransactionId": "string",
            "CustomDate1": "2022-02-02T10:10:34.709Z",
            "CustomDate2": "2022-02-02T10:10:34.709Z",
            "CustomDecimal1": 0,
            "CustomDecimal2": 0,
            "CustomFlag1": true,
            "CustomFlag2": true,
            "CustomLookup1": "string",
            "CustomLookup2": "string",
            "CustomLookup3": "string",
            "CustomLookup4": "string",
            "CustomNumber1": 0,
            "CustomNumber2": 0,
            "CustomText1": "string"
          }
        ],
        "ReceiptFees": [
          {
            "LineNo": 0,
            "ItemChargeCode": "string",
            "ItemChargeType": "Empty",
            "Qty": 0,
            "UnitPrice": 0,
            "ExtPrice": 0,
            "ExtPriceWithTax": 0,
            "TaxCategoryCode": "string",
            "LargeMemo": "string",
            "Spread": true,
            "SpreadType": "Price"
          }
        ],
        "Items": [
          {
            "LineNo": 0,
            "ItemIdentifier": "string",
            "ItemType": "Regular",
            "RmaNo": "string",
            "SOItemRMANo": "string",
            "ActualReturnLocationId": "string",
            "ItemDetails": {
              "PLU": 0,
              "CLU": "string",
              "UPC": "string",
              "StyleNo": "string",
              "ExternalId": "string",
              "ItemDescription": "string",
              "Attribute1": "string",
              "Attribute2": "string",
              "Attribute3": "string",
              "ItemType": "Style",
              "DCSS": {
                "DCSSCode": "string",
                "Alias": "string",
                "DeptCode": "string",
                "DeptName": "string",
                "DeptAlias": "string",
                "ClassCode": "string",
                "ClassName": "string",
                "ClassAlias": "string",
                "SubClass1Code": "string",
                "SubClass1Name": "string",
                "SubClass1Alias": "string",
                "SubClass2Code": "string",
                "SubClass2Name": "string",
                "SubClass2Alias": "string"
              },
              "BasePrice": 0,
              "Style": {
                "CustomDate1": "2022-02-02T10:10:34.709Z",
                "CustomDate10": "2022-02-02T10:10:34.709Z",
                "CustomDate11": "2022-02-02T10:10:34.709Z",
                "CustomDate12": "2022-02-02T10:10:34.709Z",
                "CustomDate2": "2022-02-02T10:10:34.709Z",
                "CustomDate3": "2022-02-02T10:10:34.709Z",
                "CustomDate4": "2022-02-02T10:10:34.709Z",
                "CustomDate5": "2022-02-02T10:10:34.709Z",
                "CustomDate6": "2022-02-02T10:10:34.709Z",
                "CustomDate7": "2022-02-02T10:10:34.709Z",
                "CustomDate8": "2022-02-02T10:10:34.709Z",
                "CustomDate9": "2022-02-02T10:10:34.709Z",
                "CustomDecimal1": 0,
                "CustomDecimal10": 0,
                "CustomDecimal11": 0,
                "CustomDecimal12": 0,
                "CustomDecimal2": 0,
                "CustomDecimal3": 0,
                "CustomDecimal4": 0,
                "CustomDecimal5": 0,
                "CustomDecimal6": 0,
                "CustomDecimal7": 0,
                "CustomDecimal8": 0,
                "CustomDecimal9": 0,
                "CustomFlag1": true,
                "CustomFlag10": true,
                "CustomFlag11": true,
                "CustomFlag12": true,
                "CustomFlag13": true,
                "CustomFlag14": true,
                "CustomFlag15": true,
                "CustomFlag16": true,
                "CustomFlag17": true,
                "CustomFlag18": true,
                "CustomFlag2": true,
                "CustomFlag3": true,
                "CustomFlag4": true,
                "CustomFlag5": true,
                "CustomFlag6": true,
                "CustomFlag7": true,
                "CustomFlag8": true,
                "CustomFlag9": true,
                "CustomLookup1": "string",
                "CustomLookup10": "string",
                "CustomLookup11": "string",
                "CustomLookup12": "string",
                "CustomLookup2": "string",
                "CustomLookup3": "string",
                "CustomLookup4": "string",
                "CustomLookup5": "string",
                "CustomLookup6": "string",
                "CustomLookup7": "string",
                "CustomLookup8": "string",
                "CustomLookup9": "string",
                "CustomNumber1": 0,
                "CustomNumber10": 0,
                "CustomNumber11": 0,
                "CustomNumber12": 0,
                "CustomNumber2": 0,
                "CustomNumber3": 0,
                "CustomNumber4": 0,
                "CustomNumber5": 0,
                "CustomNumber6": 0,
                "CustomNumber7": 0,
                "CustomNumber8": 0,
                "CustomNumber9": 0,
                "CustomText1": "string",
                "CustomText10": "string",
                "CustomText11": "string",
                "CustomText12": "string",
                "CustomText2": "string",
                "CustomText3": "string",
                "CustomText4": "string",
                "CustomText5": "string",
                "CustomText6": "string",
                "CustomText7": "string",
                "CustomText8": "string",
                "CustomText9": "string"
              },
              "Item": {
                "CustomDate1": "2022-02-02T10:10:34.709Z",
                "CustomDate2": "2022-02-02T10:10:34.709Z",
                "CustomDate3": "2022-02-02T10:10:34.709Z",
                "CustomDate4": "2022-02-02T10:10:34.709Z",
                "CustomDate5": "2022-02-02T10:10:34.709Z",
                "CustomDate6": "2022-02-02T10:10:34.709Z",
                "CustomDecimal1": 0,
                "CustomDecimal2": 0,
                "CustomDecimal3": 0,
                "CustomDecimal4": 0,
                "CustomDecimal5": 0,
                "CustomDecimal6": 0,
                "CustomFlag1": true,
                "CustomFlag2": true,
                "CustomFlag3": true,
                "CustomFlag4": true,
                "CustomFlag5": true,
                "CustomFlag6": true,
                "CustomLookup1": "string",
                "CustomLookup10": "string",
                "CustomLookup11": "string",
                "CustomLookup12": "string",
                "CustomLookup2": "string",
                "CustomLookup3": "string",
                "CustomLookup4": "string",
                "CustomLookup5": "string",
                "CustomLookup6": "string",
                "CustomLookup7": "string",
                "CustomLookup8": "string",
                "CustomLookup9": "string",
                "CustomNumber1": 0,
                "CustomNumber2": 0,
                "CustomNumber3": 0,
                "CustomNumber4": 0,
                "CustomNumber5": 0,
                "CustomNumber6": 0,
                "CustomText1": "string",
                "CustomText2": "string",
                "CustomText3": "string",
                "CustomText4": "string",
                "CustomText5": "string",
                "CustomText6": "string"
              }
            },
            "Qty": 0,
            "PriceLevelCode": "string",
            "PriceChangeReasonCode": "string",
            "InventoryPrice": 0,
            "InitialOriginalPrice": 0,
            "MembershipDiscount": 0,
            "MembershipLevel": "string",
            "SalePrice": 0,
            "LineExtDiscountAmount": 0,
            "LineUnitDiscountAmount": 0,
            "LineDiscountPercent": 0,
            "LineDiscReason": "string",
            "CustomOriginalDiscountReason": "string",
            "GlobalExtDiscountAmount": 0,
            "GlobalUnitDiscountAmount": 0,
            "UnitAmount": 0,
            "ExtAmount": 0,
            "TaxExtAmount": 0,
            "ItemFeesAmount": 0,
            "PricesIncludeTaxes": true,
            "DiscountCoupons": [
              {
                "CouponNumber": "string",
                "CouponProgramName": "string",
                "CouponAmount": 0,
                "CouponPercent": 0
              }
            ],
            "Notes": "string",
            "ReturnReasonCode": "string",
            "OriginalReceiptIdentifier": "string",
            "OriginalLocation": "string",
            "ReturnValue": 0,
            "IsManuallyReturn": true,
            "IsShipToItem": true,
            "OrigReceiptItemId": "00000000-0000-0000-0000-000000000000",
            "OrigReceiptItemLineNo": 0,
            "CustomDate1": "2022-02-02T10:10:34.709Z",
            "CustomDate2": "2022-02-02T10:10:34.709Z",
            "CustomDate3": "2022-02-02T10:10:34.709Z",
            "CustomDate4": "2022-02-02T10:10:34.709Z",
            "CustomDecimal1": 0,
            "CustomDecimal2": 0,
            "CustomFlag1": true,
            "CustomFlag2": true,
            "CustomLookup1": "string",
            "CustomLookup2": "string",
            "CustomLookup3": "string",
            "CustomLookup4": "string",
            "CustomNumber1": 0,
            "CustomNumber2": 0,
            "CustomText1": "string",
            "CustomText2": "string",
            "ItemFees": [
              {
                "LineNo": 0,
                "GlobalChargeLineNo": 0,
                "ItemChargeCode": "string",
                "ItemChargeType": "Empty",
                "Qty": 0,
                "UnitPrice": 0,
                "ExtPrice": 0,
                "ExtPriceWithTax": 0,
                "TaxCategoryCode": "string",
                "Spread": true,
                "LargeMemo": "string"
              }
            ],
            "TaxExempt": true,
            "TaxCategoryCode": "string",
            "Taxes": [
              {
                "TaxAmount": 0,
                "TaxPercent": 0,
                "DestTaxZoneCode": "string",
                "TaxCategoryCode": "string",
                "SourceTaxZoneCode": "string",
                "TaxJurisdictionCode": "string",
                "TaxCredit": 0,
                "TaxCreditStoreCredit": 0,
                "TaxExempt": true,
                "IsCustomTaxPercent": true,
                "IsCustomTaxAmount": true,
                "CustomFlag1": true,
                "CustomNumber1": 0,
                "CustomDecimal1": 0,
                "CustomLookup1": "string"
              }
            ],
            "TaxExemptInfo": {
              "ADDRESS_1": "string",
              "ADDRESS_2": "string",
              "CHILD_NAME": "string",
              "CITY": "string",
              "COUNTRY": "string",
              "FIRST_NAME": "string",
              "LAST_NAME": "string",
              "ORGANIZATION_NAME": "string",
              "PHONE": "string",
              "POSTAL_CODE": "string",
              "STATE": "string",
              "TAX_EXEMPT_NUM": "string",
              "TAX_EXEMPT_REASON": "string"
            },
            "ShipMethod": "string",
            "TrackingNumber": "string",
            "SalesOrderItem": {
              "SalesOrderDTN": 0,
              "SalesOrderNo": "string",
              "SalesOrderDateTime": "2022-02-02T10:10:34.709Z",
              "ListOrder": 0
            },
            "SerialNumber": "string",
            "SerialNumberCustomText1": "string",
            "SerialNumberCustomText2": "string",
            "SerialNumberCustomNumber1": 0,
            "SerialNumberCustomDate1": "2022-02-02T10:10:34.710Z",
            "SerialNumberCustomFlag1": true,
            "QtyStatus": "string",
            "COGS": 0,
            "UnitCOGS": 0,
            "PurposeText": "string",
            "Promo": [
              {
                "Name": "string",
                "Description": "string",
                "Rank": 0,
                "Type": "BuyXGetY",
                "ItemType": "BuyItem",
                "Qty": 0,
                "Amount": 0,
                "Percent": 0,
                "ListOrder": 0,
                "PromoReturns": true
              }
            ],
            "Salespersons": [
              {
                "RecCreated": "2022-02-02T10:10:34.710Z",
                "RecModified": "2022-02-02T10:10:34.710Z",
                "ListOrder": 0,
                "EmployeeIdentifier": "string",
                "SalesCreditPercent": 0
              }
            ],
            "DiscountReasons": [
              {
                "RecCreated": "2022-02-02T10:10:34.710Z",
                "RecModified": "2022-02-02T10:10:34.710Z",
                "StreamingDate": "2022-02-02T10:10:34.710Z",
                "ReceiptDiscountId": "00000000-0000-0000-0000-000000000000",
                "ReceiptId": "00000000-0000-0000-0000-000000000000",
                "InputSequence": 0,
                "DiscountAmount": 0,
                "DiscountPercent": 0,
                "InputSource": 0,
                "CascadeFlag": true,
                "GlobalReceiptDiscountId": "00000000-0000-0000-0000-000000000000",
                "MaxDiscountPercent": 0,
                "CascadeAmount": 0,
                "PromoExcluded": true,
                "OverrideCode": 0,
                "DiscountReasonId": "string",
                "GlobalDiscEmployee": "string",
                "GlobalDiscOverrideEmployee": "string",
                "ReturnedReceiptDiscountId": "00000000-0000-0000-0000-000000000000",
                "PurposeText": "string"
              }
            ],
            "OriginalDTN": 0,
            "OriginalReceiptNum": 0,
            "OriginalAltDTN": "string",
            "OriginalExternalId": "string",
            "OriginalReceiptCode": "string",
            "OriginalReceiptItemId": "00000000-0000-0000-0000-000000000000",
            "OriginalReceiptItemLineNo": 0,
            "ReceiptItemReturn": {
              "RecCreated": "2022-02-02T10:10:34.710Z",
              "RecModified": "2022-02-02T10:10:34.710Z",
              "StreamingDate": "2022-02-02T10:10:34.710Z",
              "ReceiptItemReturnId": "00000000-0000-0000-0000-000000000000",
              "ReceiptItemId": "00000000-0000-0000-0000-000000000000",
              "ReturnReasonId": "00000000-0000-0000-0000-000000000000",
              "ExchangeReceiptItemId": "00000000-0000-0000-0000-000000000000",
              "ReturnedReceiptItemId": "00000000-0000-0000-0000-000000000000",
              "ReceiptReturnId": "00000000-0000-0000-0000-000000000000",
              "SaleDate": "00000000-0000-0000-0000-000000000000",
              "AssociateId": "00000000-0000-0000-0000-000000000000",
              "LocationId": "00000000-0000-0000-0000-000000000000",
              "ReceiptDTN": 0,
              "ReceiptNum": 0,
              "ReceiptAltDTN": "string",
              "ReceiptExternalId": "string",
              "OrigReceiptCode": "string",
              "OrigReceiptItemId": "00000000-0000-0000-0000-000000000000",
              "OrigReceiptItemLineNo": 0
            }
          }
        ],
        "Payments": [
          {
            "LineNo": 0,
            "PaymentMethod": "string",
            "PaymentAmount": 0,
            "AccountNumber": "string",
            "AccountType": "Cash",
            "ChangeAmount": 0,
            "CurrencyCode": "string",
            "PaymentProcessingRefNum": "string",
            "CardholderFirstName": "string",
            "CardholderLastName": "string",
            "CardholderAddress1": "string",
            "CardholderAddress2": "string",
            "CardholderCity": "string",
            "CardholderState": "string",
            "CardholderPostalCode": "string",
            "CardEnterMethod": "None",
            "CardOrderId": "string",
            "CardTransactionId": "string",
            "CardType": "Undefined",
            "CustomDate1": "2022-02-02T10:10:34.710Z",
            "CustomDate2": "2022-02-02T10:10:34.710Z",
            "CustomDate3": "2022-02-02T10:10:34.710Z",
            "CustomDate4": "2022-02-02T10:10:34.710Z",
            "CustomDecimal1": 0,
            "CustomDecimal2": 0,
            "CustomDecimal3": 0,
            "CustomDecimal4": 0,
            "CustomFlag1": true,
            "CustomFlag2": true,
            "CustomFlag3": true,
            "CustomFlag4": true,
            "CustomLookup1": "string",
            "CustomLookup2": "string",
            "CustomNumber1": 0,
            "CustomNumber2": 0,
            "CustomNumber3": 0,
            "CustomNumber4": 0,
            "CustomText1": "string",
            "CustomText2": "string",
            "CustomText3": "string",
            "CustomText4": "string",
            "CustomText5": "string",
            "CustomText6": "string",
            "CustomText7": "string",
            "CustomText8": "string",
            "CustomText9": "string",
            "CustomText10": "string",
            "CustomText11": "string",
            "CustomText12": "string",
            "DepositHistory": [
              {
                "LineNo": 0,
                "PaymentMethod": "string",
                "PaymentAmount": 0,
                "AccountNumber": "string",
                "AccountType": "Cash",
                "ChangeAmount": 0,
                "CurrencyCode": "string",
                "PaymentProcessingRefNum": "string",
                "CardholderFirstName": "string",
                "CardholderLastName": "string",
                "CardholderAddress1": "string",
                "CardholderAddress2": "string",
                "CardholderCity": "string",
                "CardholderState": "string",
                "CardholderPostalCode": "string",
                "CardEnterMethod": "None",
                "CardOrderId": "string",
                "CardTransactionId": "string",
                "CardType": "Undefined",
                "CustomDate1": "2022-02-02T10:10:34.710Z",
                "CustomDate2": "2022-02-02T10:10:34.710Z",
                "CustomDate3": "2022-02-02T10:10:34.710Z",
                "CustomDate4": "2022-02-02T10:10:34.710Z",
                "CustomDecimal1": 0,
                "CustomDecimal2": 0,
                "CustomDecimal3": 0,
                "CustomDecimal4": 0,
                "CustomFlag1": true,
                "CustomFlag2": true,
                "CustomFlag3": true,
                "CustomFlag4": true,
                "CustomLookup1": "string",
                "CustomLookup2": "string",
                "CustomNumber1": 0,
                "CustomNumber2": 0,
                "CustomNumber3": 0,
                "CustomNumber4": 0,
                "CustomText1": "string",
                "CustomText2": "string",
                "CustomText3": "string",
                "CustomText4": "string",
                "CustomText5": "string",
                "CustomText6": "string",
                "CustomText7": "string",
                "CustomText8": "string",
                "CustomText9": "string",
                "CustomText10": "string",
                "CustomText11": "string",
                "CustomText12": "string"
              }
            ]
          }
        ],
        "DeviceIdentifier": "string",
        "AcknowledgementDate": "2022-02-02T10:10:34.710Z",
        "AcknowledgementByUserIdentifier": "string",
        "TransactionAcknowledgementIdentifier": "string",
        "HoldReasonId": "00000000-0000-0000-0000-000000000000",
        "IsHeld": true
      }
    ]
  }
}

~~~