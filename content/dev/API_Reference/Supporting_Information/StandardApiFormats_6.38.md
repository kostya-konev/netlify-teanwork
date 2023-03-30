---
title: "Standard request and response formats (6.38)"
date: 2022-02-28T11:30:00-05:00
draft: true
weight: 19
---

<!-- begin comment block (when active)-------------------- -->
{{% notice warning %}}
The API Reference is currently under construction and its contents should not be used until further notice.
{{% /notice %}}
<!-- end comment block (when active)-------------------- -->

This topic describes the standard JSON request and response formats.

In the format descriptions below any field not explicitly marked as **REQUIRED** is optional and can be omitted. See the [*JSON Data Types*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/JsonDataTypes_6.41/) document for a description of the values which could appear in the **Data Type** columns.

---

- [Standard requests](#StdRequests)
- &nbsp;&nbsp;&nbsp;&nbsp;[*Export* request format](#ExportStdRqst)
- &nbsp;&nbsp;&nbsp;&nbsp;[*Check Status* request format](#CheckStatusStdRqst)
- [Standard responses](#StdResponses)
- &nbsp;&nbsp;&nbsp;&nbsp;[*Import Success* response format](#ImportSuccessStdRspn)
- &nbsp;&nbsp;&nbsp;&nbsp;[*In Progress* response format](#InProgressStdRspn)
- &nbsp;&nbsp;&nbsp;&nbsp;[*Error* response format](#ErrorStdRspn)

---

## **Standard requests** {#StdRequests}

There are two standard requests: *Export* and *Status Check*.

The *Export* standard request is used, as might be expected, to request the exporting of data from Teamwork.

The *Check Status* standard request is used to check on the status of a previously posted asychronous export request. See the [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) document for details on how an asynchronous request can be made.

### <font color=#008AE8>**Export** request format</font> {#ExportStdRqst}

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
ApiDocumentId | string, guid | A unique identifier of the API document being used. |
<font color=#008AE8>**Request**</font> | | <font color=#008AE8>A group containing the following fields and groups.</font> |
<font color=#008AE8>**Request:Settings**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries. **Note:** The settings available for a given API will be listed in that API's document.</font> |
Key | string | The name of a setting being supplied. |
Value | string | The value being supplied for the setting. |
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*end of* ***Request:Settings***</font> |
<font color=#008AE8>**Request:Filters**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries. **Note:** The filters available for a given API will be listed in that API's document.</font> |
Field | string | The name of the column (field) in the table being exported to which the filter will apply. |
Operator | string, enum | The operator to apply for the filter. Its value must be one of the following: “Equal”, “Notequal”, “Greaterthan”, Lessthan”, “Lessthanorequal”, “Greaterthanorequal”, “Contains”. **Note:** Not all of the operator values listed will apply to every filter for every API. The list of which of the operator values are valid for a given filter for a given API will be listed in that API's document. |
Value | string | The value which the values in the database records are to be checked against. |
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*end of* ***Request:Filters***</font> |
Skip | integer | Indicates the number of records to skip (bypass) before starting to export records. |
<font color=#008AE8>**Request:SortDescriptions**</font> | | <font color=#008AE8>A group containing the following fields and groups. This group is an array with zero or more entries. **Note:** The fields available to be sorted on for a given API will be listed in that API's document.</font> |
Direction | string, enum | The direction in which the sort will be performed. Its value must be one of the following: “Ascending”, “Descending”. |
Name | string | The name of the field on which to apply the sort. |
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*end of* ***Request:SortDescriptions***</font> |
Ties | boolean | An indicator as to whether or not <font color="Crimson">***????????***</font> |
Top | integer | Indicates that the data from only the top (first) number of records is to be exported. |
Skip | integer | Indicates the number of records to skip (bypass) before starting to export records. |
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*end of* ***Request***</font> |

### <font color=#008AE8>*Check Status* request format</font> {#CheckStatusStdRqst}

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
ApiDocumentId | string, guid | A unique identifier of the API document used to make the asynchronous export request. |

---

## **Standard responses** {#StdResponses}

There are three standard response formats: *Import Success*, *In Progress*, and *Error*.

The *Import Success* standard response is returned to indicate that a previously posted import request completed successfully.

The *In Progress* standard response is returned when a previously posted asynchronous export request has not completed within 30 seconds. See the [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/Make_An_Export_API_Reference) document for further details.

The *Error* standard response is returned when a previously posted import or export request did not complete successfully.

### <font color=#008AE8>*Import Success* response format</font> {#ImportSuccessStdRspn}

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
Id | string, guid | A unique identifier of the API document used to make the import request. |
Status | string | The completion status (such as "Success") of the request. |
Progress | string<font color="Crimson">***????????***</font>, null | <font color="Crimson">***????????***</font> |
TotalRecords | integer<font color="Crimson">***????????***</font> | The total number of submitted records processed. <font color="Crimson">***????????***</font> |
AcceptedRecords | integer<font color="Crimson">***????????***</font> | The number of submitted records accepted (written to the database). <font color="Crimson">***????????***</font> |
ErrorRecords | integer<font color="Crimson">***????????***</font> | The number of submitted records which had errors. <font color="Crimson">***????????***</font> |
ElapsedTime | string, datetime, null<font color="Crimson">***????????***</font> | The time it took to execute the import request. |
ErrorMessage | string<font color="Crimson">***????????***</font>, null | A general error message if there were any errors. |
<font color=#008AE8>**Lines**</font> | | <font color=#008AE8>A group containing the following fields and groups. This is an array containing zero or more entries.</font> |
EntityNo | integer<font color="Crimson">***????????***</font> | The line number in the import where the record was submitted. <font color="Crimson">***????????***</font>|
EntityId | string, guid | A unique identifier of the record which was submitted. <font color="Crimson">***????????***</font> |
Error | string<font color="Crimson">***????????***</font> | An error message describing why the import of the record failed (if the import of the record failed). |
Status | string, enum<font color="Crimson">***????????***</font> | An indication of whether the record was imported successfully or not. Its value will be one of the following: “Success”, “Error”.<font color="Crimson">***????????***</font>|
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*end of* ***Lines***</font> |
ApiType | string<font color="Crimson">***????????***</font> | <font color="Crimson">***????????***</font> |
Source | string<font color="Crimson">***????????***</font> | The source of the data being supplied to the import. |

### <font color=#008AE8>*In Progress* response format</font> {#InProgressStdRspn}

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
Id | string, guid<font color="Crimson">***????????***</font> | A unique identifier of the API document used to make the import request. |
Status | string<font color="Crimson">***????????***</font>  | An indication of the status of the request. Its value will be “InProcess”. <font color="Crimson">***????????***</font> |
TotalRecords | integer<font color="Crimson">***????????***</font> | The total number of submitted records processed. <font color="Crimson">***????????***</font> |
AcceptedRecords | integer<font color="Crimson">***????????***</font> | The number of submitted records accepted (written to the database). <font color="Crimson">***????????***</font> |
ErrorRecords | integer<font color="Crimson">***????????***</font> | The number of submitted records which had errors. <font color="Crimson">***????????***</font> |
ElapsedTime | string, datetime, null<font color="Crimson">***????????***</font> | The time it took to execute the import request. |
ErrorMessage | string<font color="Crimson">***????????***</font>, null | A general error message if there were any errors. |
<font color=#008AE8>**Lines**</font> | | <font color=#008AE8>A group containing the following fields and groups. This is an array containing zero or more entries.</font> |
EntityNo | integer<font color="Crimson">***????????***</font> | The line number in the import where the record was submitted. <font color="Crimson">***????????***</font>|
EntityId | string, guid | A unique identifier of the record which was submitted. <font color="Crimson">***????????***</font> |
Error | string<font color="Crimson">***????????***</font> | An error message describing why the import of the record failed (if the import of the record failed). |
Status | string, enum<font color="Crimson">***????????***</font> | An indication of whether the record was imported successfully or not. Its value will be one of the following: “Success”, “Error”.<font color="Crimson">***????????***</font>|
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*end of* ***Lines***</font> |
ApiType | string<font color="Crimson">***????????***</font> | <font color="Crimson">***????????***</font> |
Source | string<font color="Crimson">***????????***</font> | The source of the data being supplied to the import. |

### <font color=#008AE8>*Error* response format</font> {#InProgressStdRspn}

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
Id | string, guid<font color="Crimson">***????????***</font> | A unique identifier of the API document used to make the request. <font color="Crimson">***????????***</font> |
Status | string<font color="Crimson">***????????***</font>  | An indication of the status of the request. Its value will be “Error”. <font color="Crimson">***????????***</font> |
TotalRecords | integer<font color="Crimson">***????????***</font> | The total number of submitted records processed. <font color="Crimson">***????????***</font> |
AcceptedRecords | integer<font color="Crimson">***????????***</font> | The number of submitted records accepted (written to the database). <font color="Crimson">***????????***</font> |
ErrorRecords | integer<font color="Crimson">***????????***</font> | The number of submitted records which had errors. <font color="Crimson">***????????***</font> |
ElapsedTime | string, datetime, null<font color="Crimson">***????????***</font> | The time it took to execute the import request. |
ErrorMessage | string<font color="Crimson">***????????***</font>, null | A general error message if there were any errors. |
<font color=#008AE8>**Lines**</font> | | <font color=#008AE8>A group containing the following fields and groups. This is an array containing zero or more entries.</font> |
EntityNo | integer<font color="Crimson">***????????***</font> | The line number in the import where the record was submitted. <font color="Crimson">***????????***</font>|
EntityId | string, guid | A unique identifier of the record which was submitted. <font color="Crimson">***????????***</font> |
Error | string<font color="Crimson">***????????***</font> | An error message describing why the import of the record failed (if the import of the record failed). |
Status | string, enum<font color="Crimson">***????????***</font> | An indication of whether the record was imported successfully or not. Its value will be one of the following: “Success”, “Error”. <font color="Crimson">***????????***</font>|
<font color=#008AE8>**---**</font>  | <font color=#008AE8>**---**</font>  | <font color=#008AE8>*end of* ***Lines***</font> |
ApiType | string<font color="Crimson">***????????***</font> | <font color="Crimson">***????????***</font> |
Source | string<font color="Crimson">***????????***</font> | The source of the data being supplied to the import. |
