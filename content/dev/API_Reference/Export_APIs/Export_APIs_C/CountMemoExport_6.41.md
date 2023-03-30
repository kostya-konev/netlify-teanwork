---
title: "Count Memo Export API [6.41]"
date: 2022-02-28T08:42:00-05:00
draft: false
weight: 1521
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

This topic describes the **Count Memo Export** API which is used to export count memo information from CHQ.

See [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for a description on how export requests are made and on the standard request and response formats used. The API-Specific sucessful response format for this API will be described below.

{{% notice note%}}
For this API, a **Device Transaction Number** (**DTN**) is a value of the *BigInteger* type (for example, *100011311*). A **Short Device Transaction Number** (**ShortDTN**) is a value of the *Base36* type (for example, *GJDPNA*).
{{% /notice %}}

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/countmemo**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

In the Swagger UI the **/chqapi/export/countmemo** endpoint is a member of the **Catalog** endpoint group.

## Request settings {#RequestSettings}

Below are the settings which can be supplied in the **Settings** group of the export request to define which value (field) is to be used for a particular value class (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Key** column lists the names of the available settings. The **Supported Values** column lists the valid values which can be supplied for the setting. The **Default** column lists the default value for each setting if that setting is not supplied.

**Key** | **Supported Values** | **Default** | **Description** |
---- | ---- | ---- | ---- |
LocationIdentifierSetting | ExternalIdCode, Code, ExternalId, No, TeamworkId | ExternalIdCode | An indicator of which value is to be used to identify locations. |
EmployeeIdentifierSetting | LoginName, FullName, TeamworkId | LoginName | An indicator of which value is to be used to identify employees. |
AdjustmentIdentifierSetting | No, DTN, TeamworkId | No | An indicator of which value is to be used to identify adjustments. |
CountMemoHeaderIdSetting | DTN, ShortDTN | DTN | An indicator of which value is to be used to identify count memo headers. |
ShowCountMemoItemsSetting | true, false | false | An indicator as to whether or not count memo items will be exported. |

## Request filters {#RequestFilters}

<span class="ir">????????</span> <span class="fg-crimson">**The API documentation in Confluence contains the following filter info; however, the schema source doesn't contain a *Filters* section.**</span> <span class="ir">????????</span> 

Below are the filters which can be defined in the **Filters** group of the export request (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Field** column lists the names of the fields on which filtering can be done. The **Operators** column lists the filter operator values which are valid for the field. The **Value** column describes the value expected for the field.

**Field** | **Operators** | **Value** |
---- | ---- | ---- |
RecModified | "Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. |
DeviceTransactionNumber | "Equal", "Contains" | Any valid value representing a device transaction number (as described above) for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. |
Status | "Equal", "Contains" | Any one of the following valid values for the "Equal" operator or a comma-separated list of such values for the "Contains" operator. The valid values are: "Open", "Finalized", "Adjusted". |
IsArchived | "Equal" | Any valid boolean value. |

## Request sorts {#RequestSorts}

The information returned is automatically sorted by the **RecModified** field *ascending*. No other sorts can be requested.

---

## Successful response {#SuccessfulResponse}

### Format {#SuccessfulResponseFormat}

Below is the format of the successful response to the export request. See [*JSON Data Types*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/JsonDataTypes_6.41/) for a description of the values which could appear in the **Data Type** column.

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
ApiDocumentId | string, guid | A unique identifier of the API document being used. |
Status | string, enum | The status of the response. The value will always be "Successful". |
ApiRequestType | string | <span class="ir">***????????***</span> |
TotalRecords | int32 | The total number of records processed. |
RecordsCount | int32 | The number of records exported. |
ElapsedTime | string, datetime | The time it took to execute the API. |
StartDateTime | string, datetime | A timestamp of when the API began executing. |
EndDateTime | string, datetime | A timestamp of when the API completed. |
<span class="api-gn">Response</span> | | <span class="api-gd">A group containing the following fields and groups.</span> |
<span class="api-gn">Response: Coupons</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries.</span> |
RecCreated | string, datetime | A timestamp of when the record was created. |
RecModified | string, datetime | A timestamp of when the record was last modified. |
CouponId | string, guid | A unique identifier of the coupon. |
CouponNumber | string | An identifier of the coupon. |
Description | string | A description of the coupon. |
ExternalId | string | An identifier of the coupon used when interacting with an external system. |
Type | string, enum | An indicator of the coupon’s type. Its value must be one of the following: "amount" "percentage". |
Value | double | The coupon's value. |
Status | string, enum | An indicator of the coupon’s status. Its value must be one of the following: "active", "deactivated", "used", "expired", "not yet active", "invalid". |
CustomerIdentifier | string | An identifier of the customer who used the coupon. |
CouponProgramIdentifier | string | An identifier of the coupon program to which this coupon is a member. |
SVSZoneIdentifier | string | An identifier of the stored value services zone to which the coupon belongs. |
DeviceId | string | An identifier of the device on which the coupon was <span class="ir">??????????created/applied??????????</span>. |
IsManuallyDeactivated | boolean | An indicator as to whether or not the coupon has been manually deactived. <span class="ir">??????????</span> |
StartDate | string,date-time | A timestamp of when the coupon can begin to be applied. <span class="ir">??????????</span> |
ExpirationDate | string,date-time | A timestamp of when the coupon expires. |
CreateDateTime  | string,date-time | A timestamp of when the coupon was created. |
EditDateTime  | string,date-time | A timestamp of when the coupon was last modified. |
DeactiveDateTime  | string,date-time | A timestamp of when the coupon was deactivated. |
CreateEmployeeIdentifier | string | An identifier of the employee who created the coupon. |
EditEmployeeIdentifier | string | An identifier of the employee who last modified the coupon. |
DeactivateEmployeeIdentifier | string | An identifier of the employee who deactivated the coupon. |
NumberOfSpentUses | int32 | The number of times the coupon has been applied. <span class="ir">??????????</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response: Coupons</span> |
<span class="api-gs">---</span> | | <span class="api-gde">end of Response</span> |

### Schema {#SuccessfulResponseSchema}
 
Below is the JSON source for the schema of a successful response to the export request as described above.

~~~
~~~

---

## Request Example(s) {#RequestExamples}

**Request Example #1: Status = 'Finalized' with CountMemoHeaderIdSetting = "DTN"**

~~~
{
  "Source":"Integrator",
  "Data":{
    "ApiDocumentId":"907B65C7-8F2C-45FB-AEB2-68C5577D6162",
    "Request":{
      "Settings":[
        {
          "Key":"EmployeeIdentifierSetting",
          "Value":"LoginName"
        },
        {
          "Key":"LocationIdentifierSetting",
          "Value":"ExternalIdCode"
        },
        {
          "Key":"AdjustmentIdentifierSetting",
          "Value":"No"
        },
  		{
          "Key":"CountMemoHeaderIdSetting",
          "Value":"DTN"
        },
  		{
          "Key":"ShowCountMemoItemsSetting",
          "Value":"0"
        }   	
      ],
      "Filters":[
        {
          "Field":"Status",
          "Operator":"Equal",
          "Value":"Finalized"
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

**Request Example #2: DeviceTransactionNumber = 'GJDPNZ' with CountMemoHeaderIdSetting = "ShortDTN"**

~~~
{
  "Source":"Integrator",
  "Data":{
    "ApiDocumentId":"907B65C7-8F2C-45FB-AEB2-68C5577D6162",
    "Request":{
      "Settings":[
        {
          "Key":"EmployeeIdentifierSetting",
          "Value":"LoginName"
        },
        {
          "Key":"LocationIdentifierSetting",
          "Value":"ExternalIdCode"
        },
        {
          "Key":"AdjustmentIdentifierSetting",
          "Value":"No"
        },
        {
          "Key":"CountMemoHeaderIdSetting",
          "Value":"ShortDTN"
        },
        {
          "Key":"ShowCountMemoItemsSetting",
          "Value":"0"
        }   		
      ],
      "Filters":[
        {
          "Field":"DeviceTransactionNumber",
          "Operator":"Equal",
          "Value":"GJDPNZ"
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

**Request Example #3: With ShowCountMemoItemsSetting = "1" (to receive count memos with their items)**

~~~
{
  "Source":"Integrator",
  "Data":{
    "ApiDocumentId":"907B65C7-8F2C-45FB-AEB2-68C5577D6162",
    "Request":{
      "Settings":[
        {
          "Key":"EmployeeIdentifierSetting",
          "Value":"LoginName"
        },
        {
          "Key":"LocationIdentifierSetting",
          "Value":"ExternalIdCode"
        },
        {
          "Key":"AdjustmentIdentifierSetting",
          "Value":"No"
        },
        {
          "Key":"CountMemoHeaderIdSetting",
          "Value":"ShortDTN"
        },
        {
          "Key":"ShowCountMemoItemsSetting",
          "Value":"1"
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
~~~

**Response Example #2: Error**

~~~
~~~

**Response Example #3: Success when requesting CouponNumber = '72598621'**

~~~
~~~
