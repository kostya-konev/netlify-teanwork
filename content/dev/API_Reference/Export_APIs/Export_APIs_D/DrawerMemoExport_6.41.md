---
title: "Drawer Memo Export API [6.41]"
date: 2022-09-15T08:25:00-05:00
draft: false
weight: 1801
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

This topic describes the **Drawer Memo Export** API which is used to export drawer memos from CHQ.

See [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for a description on how export requests are made and on the standard request and response formats used. The API-Specific successful response format for this API will be described below.

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/drawer-memo**  
Asynchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/drawer-memo/async**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

In the Swagger UI the **/chqapi/export/drawer-memo** endpoint is a member of the **DrawerMemo** endpoint group.

## Request settings {#RequestSettings}

Below are the settings which can be supplied in the **Settings** group of the export request to define which value (field) is to be used for a particular value class (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Key** column lists the names of the available settings. The **Supported Values** column lists the valid values which can be supplied for the setting. The **Default** column lists the default value for each setting if that setting is not supplied.

**Key** | **Supported Values** | **Default** | **Description** |
---- | ---- | ---- | ---- |
DrawerIdentifierSetting | WorkstationCode, WorkstationNo, ExternalId, TeamworkId | WorkstationCode | An indicator of which value is to be used to identify drawers. |
EmployeeIdentifierSetting | LoginName, FullName, TeamworkId | LoginName | An indicator of which value is to be used to identify employees. The 'FullName' value was added in V6.14.|
LocationIdentifierSetting | ExternalIdCode, Code, ExternalId, No, TeamworkId | ExternalIdCode | An indicator of which value is to be used to identify locations. |
PaymentMethodIdentifierSetting | Code, ExternalId, ExternalIdCode, TeamworkId | ExternalIdCode | An indicator of which value is to be used to identify payment methods. |
DeviceIdentifierSetting | DeviceId, DeviceUniqueId, LocationDeviceCode, TeamworkId | LocationDeviceCode | An indicator of which value is to be used to identify devices. The 'TeamworkId' value was added in V6.14. |
SalesReceiptIdentifierSetting | Code, DTN, No, AltDTN, ExternalId, TeamworkId | Code | An indicator of which value is to be used to identify sales receipts. |
CurrencyDenominationIdentifierSetting | Code, Description, TeamworkId | Code | An indicator of which value is to be used to identify currency denominations. |
CashDrawerActionIdentifierSetting | Code, Description, TeamworkId | Code | An indicator of which value is to be used to identify drawer actions. |

## Request filters {#RequestFilters}

Below are the filters which can be defined in the **Filters** group of the export request (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Field** column lists the names of the fields on which filtering can be done. The **Operators** column lists the filter operator values which are valid for the field. The **Value** column describes the value expected for the field.

**Field** | **Operators** | **Value** |
---- | ---- | ---- |
RecModified |"Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. |
DrawerMemoId | "Equal", "Contains" | Any valid GUID value representing a drawer memo for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |
DrawerMemoNum | "Greater than or equal", "Less than or equal", "Equal" | Any valid integer value representing a drawer memo number. |
LocationId "Equal", "Contains" | Any valid value representing a location identifier for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |
LocationEID "Equal", "Contains" | Any valid value representing a external location identifier for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |
LocationCode "Equal", "Contains" | Any valid value representing a location code for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |
LocationNum "Equal", "Contains" | Any valid value representing a location number for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |

## Request sorts {#RequestSorts}

The information returned is automatically sorted by the **RecModified** field *ascending*. No other sorts can be requested.

---

## Successful response {#SuccessfulResponse}

### Format {#SuccessfulResponseFormat}

Below is the format of the successful response to the export request. See [*JSON Data Types*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/JsonDataTypes_6.41/) for a description of the values which could appear in the **Data Type** column.

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
ApiDocumentId | string,guid | A unique identifier of the API document being used. |
Status | string, enum | The status of the response. The value will always be "Successful". |
ApiRequestType | string | <span class="ir">***????????***</span>
TotalRecords | int32 | The total number of submitted records processed. <span class="ir">***????????***</span> |
RecordsCount | int32 | The number of records returned. <span class="ir">***????????***</span> |
ElapsedTime | string, datetime | The time it took to execute the export request. |
StartDateTime | string, datetime | A timestamp of when the export request started executing. |
EndDateTime | string, datetime | A timestamp of when the export request stopped executing. |
<span class="api-gn">Response</span> | | <span class="api-gd">A group containing the following fields and groups.</span> |
<span class="api-gn">Response: DrawerMemos</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
DrawerMemoId | string, guid | A unique identifier of the drawer memo. |
DrawerMemoNum | int32 | An identifier number of the drawer memo. |
Status | string, enum | An indicator of the status of the drawer memo. Its value must be one of the following: "OnLine", "OffLine", "Finalized", "Deposited", "Unknown".
CashDrawerId | string, guid | A unique identifier of the cash drawer. |
DrawerIdentifier | string | An identifier of the cash drawer. |
CreateEmployeeIdentifier | string | An identifier of the employee who created the drawer memo. |
CreateDateTime | string, datetime | A timestamp of when the drawer memo was created. |
EditEmployeeIdentifier | string | An identifier of the employee who edited (last modified) the drawer memo. |
EditDateTime | string, datetime | A timestamp of when the drawer memo was edited (last modified). |
CloseEmployeeIdentifier | string | An identifier of the employee who closed the drawer memo. |
CloseDateTime | string, datetime | A timestamp of when the drawer memo was closed. |
AuditEmployeeIdentifier | string | An identifier of the employee who last audited the drawer memo. |
AuditDateTime | string, datetime | A timestamp of when the drawer memo was last audited. |
LocationIdentifier | string | An identifier of the drawer memo's location. |
WebDrawerMemo | boolean | An indicator as to whether or not this is a web-based drawer memo. |
LoggedByService | boolean | An indicator as to whether or not <span class="ir">??????????</span> |
FullyDepositedDateTime | string, datetime | A timestamp of when <span class="ir">??????????</span> |
NetRoundAmount | double | The drawer memo's net amount, rounded. <span class="ir">??????????</span> |
LargeMemo | string | Misc. notes about the drawer memo. |
ReprintCounter | int32 | The number of times the drawer memo has been reprinted. <span class="ir">??????????</span> |
DiscardedReceiptsCounter | int32 | The number of times receipts for the drawer memo have been discarded. <span class="ir">??????????</span> |
DiscardedReceiptsTotalDueAmount | double | <span class="ir">??????????</span> |
BlankAlterationTicketsCounter | int32 | <span class="ir">??????????</span> |
BlankAlterationTicketsItemsCounter | int32 | <span class="ir">??????????</span> |
<span class="api-gn">Response: DrawerMemos: DrawerMemoMedias</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
LineNo | int32 | <span class="ir">??????????</span> |
Amount | double | <span class="ir">??????????</span> |
OpenAmount | double | <span class="ir">??????????</span> |
PaidInOutAmount | double | <span class="ir">??????????</span> |
FoundAmount | double | <span class="ir">??????????</span> |
AuditedAmount | double | <span class="ir">??????????</span> |
NextDrawerAmount | double | <span class="ir">??????????</span> |
CreateEmployeeIdentifier | string | An identifier of the employee who created the <span class="ir">??????????</span> |
CreateDateTime | string, datetime | A timestamp of when <span class="ir">??????????</span> was created. |
EditEmployeeIdentifier | string | An identifier of the employee who edited (last modified) the <span class="ir">??????????</span> |
EditDateTime | string, datetime | A timestamp of when <span class="ir">??????????</span> was edited (last modified). |
AuditEmployeeIdentifier | string | An identifier of the employee who last audited the <span class="ir">??????????</span> |
AuditDateTime | string, datetime | A timestamp of when <span class="ir">??????????</span> was last audited. |
CurrencyCode | string | A code indicating the type of currency used for the media. <span class="ir">??????????</span> |
DepositMemoId | string, guid | A unique identifier of <span class="ir">??????????</span> |
PaymentMethodIdentifier  | string | A identifier of the payment method used for the media. <span class="ir">??????????</span> |
AccountType | string, enum | An indicator of the account used for the media. Its value must be one of the following: "Cash", "Check", "CreditCard", "DepositUSed", "StoreCredit", "GiftCard", "GiftCertificate", "StoreCharge", "Coupon", "FreeFormGiftCertificate", "Undefined", "Fictions", "DebitCard", "Token", "CreditCardCredit", "HouseCharge", "Universal", "UniversalCredit", "Unknown". |
OpenExpectedAmount | double | <span class="ir">??????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: DrawerMemos: DrawerMemoMedias</span> |
<span class="api-gn">Response: DrawerMemos: DrawerMemoMedias</span> |  | <span class="api-gd">A group containing the following fields and groups.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
Amount | double | The payment amount. |
FoundAmount | double | <span class="ir">??????????</span> |
AuditedAmount | double | <span class="ir">??????????</span> |
FCAmount | double | The payment amount in foriegn currency. <span class="ir">??????????</span> |
ExchangeRate | double | The foreign currency exchange rate. <span class="ir">??????????</span> |
HavePayment | boolean | <span class="ir">??????????</span> |
AccountNumber | string | An identifier of the assount used for the payment. <span class="ir">??????????</span> |
CardType | string, enum | An indicator of the card used for the payment. Its value must be one of the following: "Undefined", "Visa", "Master", "Discover", "Amex", "JCB", "Diners", "Solo", "Maestro", "Cirrus", "Switch", "Laser", "Other", "VisaDebit", "Debit". |
PaymentMethodIdentifier | string | An identifier of the payment method used. |
PaymentRef | string | <span class="ir">??????????</span> |
IsChange | boolean | An indicator as to whether or not <span class="ir">??????????</span> |
SalesReceiptPaymentIdentifier | string, guid | A unique identifier of the payment on the sales receipt. |
DeviceIdentifier | string | An identifier of the device used to take the payment. <span class="ir">??????????</span> |
ReceiptIdentifier | string | An identifier of the sales receipt to which the payment applies. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: DrawerMemos: DrawerMemoPayments</span> |
<span class="api-gn">Response: DrawerMemos: DrawerMemoDenominations</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
LineNo | int32 | <span class="ir">??????????</span> |
OpenCount | int32 | The count of the denomination when the drawer was opened. |
Amount | double | The amount of the denomination when the drawer was opened. <span class="ir">??????????</span> |
CloseCount | int32 | The count of the denomination when the drawer was closed. |
CloseAmount | double | The amount of the denomination when the drawer was closed. |
AuditedCount | int32 | The count of the denomination when the drawer was last audited. <span class="ir">??????????</span> |
AuditedAmount | double | The amount of the denomination when the drawer was last audited. <span class="ir">??????????</span> |
CreateEmployeeIdentifier | string | An identifier of the employee who <span class="ir">??????????</span> |
CreateDateTime | string, datetime | A timestamp of when <span class="ir">??????????</span> |
EditEmployeeIdentifier | string | An identifier of the employee who <span class="ir">??????????</span> |
EditDateTime | string, datetime | A timestamp of when <span class="ir">??????????</span> |
CloseEmployeeIdentifier | string | An identifier of the employee who <span class="ir">??????????</span> |
CloseDateTime | string, datetime | A timestamp of when <span class="ir">??????????</span> |
AuditEmployeeIdentifier | string | An identifier of the employee who <span class="ir">??????????</span> |
AuditDateTime | string, datetime | A timestamp of when <span class="ir">??????????</span> |
CurrencyCode | string | A code identifying the denomination's currency. |
CurrencyDenominationIdentifier | string | <span class="ir">??????????</span> |
LargeMemoOpen | string | Misc. notes about the denomination when the drawer was opened. |
LargeMemoClosed | string | Misc. notes about the denomination when the drawer was closed. |
Value | double | <span class="ir">??????????</span> |
PaymentMethodIdentifier | string | <span class="ir">??????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: DrawerMemos: DrawerMemoDenominations</span> |
<span class="api-gn">Response: DrawerMemos: DrawerMemoStatusHistories</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
NewStatus | string, enum | An indicator of the drawer's new status. Its value must be one of the following: "OnLine", "OffLine", "Finalized", "Deposited". <span class="ir">??????????</span> |
OldStatus | string, enum | An indicator of the drawer's old status. Its value must be one of the following: "OnLine", "OffLine", "Finalized". <span class="ir">??????????</span> |
EmployeeIdentifier | string | An identifier of the employee who <span class="ir">??????????</span> |
StatusDateTime | string, datetime | A timestamp of when the status was taken. <span class="ir">??????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: DrawerMemos: DrawerMemoStatusHistories</span> |
<span class="api-gn">Response: DrawerMemos: DrawerMemoPaidInOuts</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
LineNo | int32 | <span class="ir">??????????</span> |
Amount | double | The amount paid in/out. |
AuditedAmount | double | <span class="ir">??????????</span> |
CurrencyCode | string | A code identifying the payment's currency. |
CreateEmployeeIdentifier | string | An identifier of the employee who created the payment transaction. <span class="ir">??????????</span> |
CreateDateTime | string, datetime | A timestamp of when the payment occured.<span class="ir">??????????</span> |
EditEmployeeIdentifier | string | An identifier of the employee who last edited (modified) the payment. <span class="ir">??????????</span> |
EditDateTime | string, datetime | A timestamp of when payment was last modified. <span class="ir">??????????</span> |
AuditEmployeeIdentifier | string | An identifier of the employee who last audited the payment. <span class="ir">??????????</span> |
AuditDateTime | string, datetime | A timestamp of when paymnet was last audited. <span class="ir">??????????</span> |
IsVoId | boolean | <span class="ir">??????????</span> |
VoidEmployeeIdentifier | string | An identifier of the employee who voided the payment. <span class="ir">??????????</span> |
VoidDateTime | string, datetime | A timestamp of when the payment was voided. <span class="ir">??????????</span> |
LargeMemo | string | Misc. notes about the payment. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: DrawerMemos: DrawerMemoPaidInOuts</span> |
<span class="api-gn">Response: DrawerMemos: DrawerMemoDeposits</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
DrawerMemoDepositId | string, guid | A unique identifier of the deposit. |
DrawerMemoDepositDTN | int32 | The device transaction number of the deposit.
CreateDateTime | string, datetime | A timestamp of when the deposit occured. |
Source | int64 | <span class="ir">??????????</span> |
CreateEmployeeIdentifier | string | An identifier of the employee who made the deposit. <span class="ir">??????????</span> |
ModifiedEmployeeIdentifier | string | An identifier of the employee who <span class="ir">??????????</span> |
CashDrawerActionIdentifier | string | An identifier of the action taken. <span class="ir">??????????</span> |
IsVoId | boolean | <span class="ir">??????????</span> |
IsConfirmed | boolean | <span class="ir">??????????</span> |
Amount | double | The amount of the deposit. |
Notes | string | Misc. notes about the deposit. |
VoidDateTime | string, datetime | A timestamp of when the deposit was voided. |
VoidEmployeeIdentifier | string | An identifier of the employee who voided the deposit. |
DrawerMemoId | string, guid | A unique identifier of the drawer memo which contains the deposit. <span class="ir">??????????</span> |
DepositedDateTime | string, datetime | A timestamp of the deposit. |
DepositEmployeeIdentifier | string | An identifier of the employee who took the deposit. <span class="ir">??????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: DrawerMemos: DrawerMemoDeposits</span> |
<span class="api-gn">Response: DrawerMemos: DrawerMemoCashMovements</span> |  | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
DrawerMemoCashMovementId | string, guid | A unique identifier of the cash movement. <span class="ir">??????????</span> |
DrawerMemoCashMovementDTN | int64 | The device transaction number for the cash movement. <span class="ir">??????????</span> ||
Type | int32 | <span class="ir">??????????</span> |
CreateEmployeeIdentifier | string | An identifier the employee who created the cash movement. <span class="ir">??????????</span> |
ModifiedEmployeeIdentifier | string | An identifier of the employee who modified the cash movement. <span class="ir">??????????</span> |
CashDrawerActionIdentifier | string | An identifier of the action. <span class="ir">??????????</span> |
IsVoId | boolean | An indicator as to whether or not the cash movement has been voided. <span class="ir">??????????</span> |
Amount | double | The cash amount. |
Notes | string | Misc. notes about the cash movement. |
VoidDateTime | string, datetime | A timestamp of when the cash movement was voided. |
VoidEmployeeIdentifier | string | An idemtifier of the employee who voided the cash movement. |
DrawerMemoId | string, guid | A unique identifier of the drawer memo which contains the cash movement. |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: DrawerMemos: DrawerMemoCashMovements</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: DrawerMemos</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response</span> |


### Schema {#SuccessfulResponseSchema}
 
Below is the JSON source for the schema of a successful response to the export request as described above.

~~~
{
     "DeviceExportToJson_get.ApiDocumentType": {
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
          "$ref": "#/definitions/DeviceExportToJson_get.ResponseType"
        }
      }
    },
    "DeviceExportToJson_get.ResponseType": {
      "type": "object",
      "properties": {
        "Devices": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/DeviceExportToJson_get.DevicesType"
          }
        }
      }
    },
    "DeviceExportToJson_get.DevicesType": {
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
        "DeviceId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "DeviceNo": {
          "format": "int32",
          "type": "integer"
        },
        "IsDeleted": {
          "type": "boolean"
        },
        "DeviceAgentId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "LocationIdentifier": {
          "type": "string"
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
          "type": "string"
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
        "MobileApplication": {
          "$ref": "#/definitions/DeviceExportToJson_get.MobileApplicationType"
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
        "ParentDevice": {
          "$ref": "#/definitions/DeviceExportToJson_get.ParentDeviceType"
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
        "WorkstationIdentifier": {
          "type": "string"
        },
        "ShopperDisplayGroupIdentifier": {
          "type": "string"
        },
        "UpdateScheduledOnDate": {
          "format": "date-time",
          "type": "string"
        }
      }
    },
    "DeviceExportToJson_get.MobileApplicationType": {
      "type": "object",
      "properties": {
        "MobileApplicationId": {
          "format": "uuid",
          "type": "string",
          "example": "00000000-0000-0000-0000-000000000000"
        },
        "BundleId": {
          "type": "string"
        },
        "DisplayName": {
          "type": "string"
        },
        "VersionNo": {
          "type": "string"
        },
        "SvsType": {
          "format": "int32",
          "type": "integer"
        },
        "AllowUpdate": {
          "type": "boolean"
        },
        "LocationSpecificType": {
          "format": "int32",
          "type": "integer"
        },
        "MobileApplicationType": {
          "format": "int32",
          "type": "integer"
        },
        "AltBundleId": {
          "type": "boolean"
        }
      }
    },
    "DeviceExportToJson_get.ParentDeviceType": {
      "type": "object",
      "properties": {
        "RecModified": {
          "format": "date-time",
          "type": "string"
        },
        "LocationIdentifier": {
          "type": "string"
        },
        "DeviceName": {
          "type": "string"
        },
        "DeviceAlias": {
          "type": "string"
        },
        "DeviceNo": {
          "format": "int32",
          "type": "integer"
        },
        "LocationDeviceCode": {
          "format": "int32",
          "type": "integer"
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
      "ApiDocumentId":"E6C8D298-5DDC-4238-AC18-C2ACEE500C5C",
      "Request":{
         "Settings":[
            {
               "Key":"DrawerIdentifierSetting",
               "Value":"WorkstationCode"
            },
            {
               "Key":"EmployeeIdentifierSetting",
               "Value":"LoginName"
            },
            {
               "Key":"LocationIdentifierSetting",
               "Value":"ExternalIdCode"
            },
            {
               "Key":"PaymentMethodIdentifierSetting",
               "Value":"ExternalIdCode"
            },
            {
               "Key":"DeviceIdentifierSetting",
               "Value":"LocationDeviceCode"
            },
            {
               "Key":"SalesReceiptIdentifierSetting",
               "Value":"Code"
            },
            {
               "Key":"CurrencyDenominationIdentifierSetting",
               "Value":"Code"
            },
            {
               "Key":"CashDrawerActionIdentifierSetting",
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
         "Top":10,
         "Skip":0
      }
   }
}
~~~

---

## Response Example(s) {#ResponseExamples}


**Response Example #1: In Process**

~~~
{  "Id": "c1f723e4-4e2b-4ebf-b374-91328abb8b00",  "Status": "InProcess",  "ApiType": "drawer-memo-export",  "Source": "string"}
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

**Response Example #3: Success**

~~~
{
  "ApiDocumentId": "00000000-0000-0000-0000-000000000000",
  "Status": "Successful",
  "ApiRequestType": "string",
  "TotalRecords": 0,
  "RecordsCount": 0,
  "ElapsedTime": "2022-03-30T13:30:08.173Z",
  "StartDateTime": "2022-03-30T13:30:08.173Z",
  "EndDateTime": "2022-03-30T13:30:08.173Z",
  "Response": {
    "DrawerMemos": [
      {
        "RecCreated": "2022-03-30T13:30:08.174Z",
        "RecModified": "2022-03-30T13:30:08.174Z",
        "DrawerMemoId": "00000000-0000-0000-0000-000000000000",
        "DrawerMemoNum": 0,
        "Status": "OnLine",
        "CashDrawerId": "00000000-0000-0000-0000-000000000000",
        "DrawerIdentifier": "string",
        "CreateEmployeeIdentifier": "string",
        "CreateDateTime": "2022-03-30T13:30:08.174Z",
        "EditEmployeeIdentifier": "string",
        "EditDateTime": "2022-03-30T13:30:08.174Z",
        "CloseEmployeeIdentifier": "string",
        "CloseDateTime": "2022-03-30T13:30:08.174Z",
        "AuditEmployeeIdentifier": "string",
        "AuditDateTime": "2022-03-30T13:30:08.174Z",
        "LocationIdentifier": "string",
        "WebDrawerMemo": true,
        "LoggedByService": true,
        "FullyDepositedDateTime": "2022-03-30T13:30:08.174Z",
        "NetRoundAmount": 0,
        "LargeMemo": "string",
        "ReprintCounter": 0,
        "DiscardedReceiptsCounter": 0,
        "DiscardedReceiptsTotalDueAmount": 0,
        "BlankAlterationTicketsCounter": 0,
        "BlankAlterationTicketsItemsCounter": 0,
        "DrawerMemoMedias": [
          {
            "RecCreated": "2022-03-30T13:30:08.174Z",
            "RecModified": "2022-03-30T13:30:08.174Z",
            "LineNo": 0,
            "Amount": 0,
            "OpenAmount": 0,
            "PaidInOutAmount": 0,
            "FoundAmount": 0,
            "AuditedAmount": 0,
            "NextDrawerAmount": 0,
            "CreateEmployeeIdentifier": "string",
            "CreateDateTime": "2022-03-30T13:30:08.174Z",
            "EditEmployeeIdentifier": "string",
            "EditDateTime": "2022-03-30T13:30:08.174Z",
            "AuditEmployeeIdentifier": "string",
            "AuditDateTime": "2022-03-30T13:30:08.174Z",
            "CurrencyCode": "string",
            "DepositMemoId": "00000000-0000-0000-0000-000000000000",
            "PaymentMethodIdentifier": "string",
            "AccountType": "Cash",
            "OpenExpectedAmount": 0
          }
        ],
        "DrawerMemoPayments": [
          {
            "RecCreated": "2022-03-30T13:30:08.174Z",
            "RecModified": "2022-03-30T13:30:08.174Z",
            "Amount": 0,
            "FoundAmount": 0,
            "AuditedAmount": 0,
            "FCAmount": 0,
            "ExchangeRate": 0,
            "HavePayment": true,
            "AccountNumber": "string",
            "CardType": "Undefined",
            "PaymentMethodIdentifier": "string",
            "PaymentRef": "string",
            "IsChange": true,
            "SalesReceiptPaymentIdentifier": "00000000-0000-0000-0000-000000000000",
            "DeviceIdentifier": "string",
            "ReceiptIdentifier": "string"
          }
        ],
        "DrawerMemoDenominations": {
          "RecCreated": "2022-03-30T13:30:08.174Z",
          "RecModified": "2022-03-30T13:30:08.174Z",
          "LineNo": 0,
          "OpenCount": 0,
          "Amount": 0,
          "CloseCount": 0,
          "CloseAmount": 0,
          "AuditedCount": 0,
          "AuditedAmount": 0,
          "CreateEmployeeIdentifier": "string",
          "CreateDateTime": "2022-03-30T13:30:08.174Z",
          "EditEmployeeIdentifier": "string",
          "EditDateTime": "2022-03-30T13:30:08.174Z",
          "CloseEmployeeIdentifier": "string",
          "CloseDateTime": "2022-03-30T13:30:08.174Z",
          "AuditEmployeeIdentifier": "string",
          "AuditDateTime": "2022-03-30T13:30:08.174Z",
          "CurrencyCode": "string",
          "CurrencyDenominationIdentifier": "string",
          "LargeMemoOpen": "string",
          "LargeMemoClose": "string",
          "Value": 0
        },
        "DrawerMemoStatusHistories": [
          {
            "RecCreated": "2022-03-30T13:30:08.174Z",
            "RecModified": "2022-03-30T13:30:08.174Z",
            "NewStatus": "OnLine",
            "OldStatus": "OnLine",
            "EmployeeIdentifier": "string",
            "StatusDateTime": "2022-03-30T13:30:08.174Z"
          }
        ],
        "DrawerMemoPaidInOuts": [
          {
            "RecCreated": "2022-03-30T13:30:08.174Z",
            "RecModified": "2022-03-30T13:30:08.174Z",
            "LineNo": 0,
            "Amount": 0,
            "AuditedAmount": 0,
            "CurrencyCode": "string",
            "CreateEmployeeIdentifier": "string",
            "CreateDateTime": "2022-03-30T13:30:08.174Z",
            "EditEmployeeIdentifier": "string",
            "EditDateTime": "2022-03-30T13:30:08.174Z",
            "AuditEmployeeIdentifier": "string",
            "AuditDateTime": "2022-03-30T13:30:08.174Z",
            "IsVoId": true,
            "VoidEmployeeIdentifier": "string",
            "VoidDateTime": "2022-03-30T13:30:08.174Z",
            "LargeMemo": "string",
            "CashDrawerAction": {
              "RecCreated": "2022-03-30T13:30:08.174Z",
              "RecModified": "2022-03-30T13:30:08.174Z",
              "StreamingDate": "2022-03-30T13:30:08.174Z",
              "CashDrawerActionId": "string",
              "IsDeleted": 0,
              "Description": "string",
              "Type": 0,
              "ListOrder": 0,
              "SCShift": true,
              "SCCtrl": true,
              "SCAlt": true,
              "SCKey": true,
              "CompanyId": "string",
              "LocationId": "string",
              "Code": "string",
              "TypeDescription": "string"
            }
          }
        ],
        "DrawerMemoDeposits": [
          {
            "RecCreated": "2022-03-30T13:30:08.174Z",
            "RecModified": "2022-03-30T13:30:08.174Z",
            "DrawerMemoDepositId": "00000000-0000-0000-0000-000000000000",
            "Source": 0,
            "CreateDateTime": "2022-03-30T13:30:08.174Z",
            "CreatedEmployeeIdentifier": "string",
            "ModifiedEmployeeIdentifier": "string",
            "CashDrawerActionIdentifier": "string",
            "IsVoIded": true,
            "IsConfirmed": true,
            "Amount": 0,
            "Notes": "string",
            "VoidDateTime": "2022-03-30T13:30:08.174Z",
            "VoidEmployeeIdentifier": "string",
            "DrawerMemoId": "00000000-0000-0000-0000-000000000000",
            "DepositedDateTime": "2022-03-30T13:30:08.174Z",
            "DepositedEmployeeIdentifier": "string"
          }
        ],
        "DrawerMemoCashMovements": [
          {
            "RecCreated": "2022-03-30T13:30:08.174Z",
            "RecModified": "2022-03-30T13:30:08.174Z",
            "DrawerMemoCashMovementI": "00000000-0000-0000-0000-000000000000",
            "Type": 0,
            "CreatedEmployeeIdentifier": "string",
            "ModifiedEmployeeIdentifier": "string",
            "CashDrawerActionIdentifier": "string",
            "IsVoIded": true,
            "Amount": 0,
            "Notes": "string",
            "VoidDateTime": "2022-03-30T13:30:08.174Z",
            "VoidEmployeeIdentifier": "string",
            "DrawerMemoId": "00000000-0000-0000-0000-000000000000"
          }
        ]
      }
    ]
  }
}
~~~
