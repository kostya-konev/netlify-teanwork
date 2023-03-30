---
title: "How to make an export request [6.41]"
date: 2022-02-21T07:56:00-05:00
draft: false
weight: 13
---

<!-- begin comment block (when active)-------------------- -->
{{% notice warning %}}
The API Reference is currently under construction and its contents should not be used until further notice.
{{% /notice %}}

- [Making an *Export* request](#ExportRequest)
- &nbsp;&nbsp;&nbsp;&nbsp;[Synchronous *Export* requests](#SynchronousRequests)
- &nbsp;&nbsp;&nbsp;&nbsp;[Asynchronous *Export* requests](#AsynchronousRequests)
- &nbsp;&nbsp;&nbsp;&nbsp;[Identifying value classes](#IdentifyingValueClasses)
- &nbsp;&nbsp;&nbsp;&nbsp;[Controlling the information returned](#ControllingInfoReturned)
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Filtering rows](#FilteringRows)
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Skipping rows](#SkippingRows)
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Maximum returned rows](#MaxReturnedRows)
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Sorting the returned rows](#SortReturnedRows)
- &nbsp;&nbsp;&nbsp;&nbsp;[*Export* request endpoint](#ExportRequestEndpoint)
- &nbsp;&nbsp;&nbsp;&nbsp;[*Export* request format](#ExportRequestFormat)
- [Making a *Check Status* request](#CheckStatusRequest)
- &nbsp;&nbsp;&nbsp;&nbsp;[*Check Status* request endpoint](#CheckStatusRequestEndPoint)
- &nbsp;&nbsp;&nbsp;&nbsp;[*Check Status* request using Swagger](#CheckStatusRequestSwagger)
- [Making a *Get Data* request](#GetDataRequest)
- &nbsp;&nbsp;&nbsp;&nbsp;[*Get Data* request endpoint](#GetDataRequestEndpoint)
- &nbsp;&nbsp;&nbsp;&nbsp;[*Get Data* request using Swagger](#GetDataRequestSwagger)
- [Receiving a response](#ReceivingAResponse)
- &nbsp;&nbsp;&nbsp;&nbsp;[*Success* Response format](#SuccessResponseFormat)
- &nbsp;&nbsp;&nbsp;&nbsp;[*Error* response format](#ErrorResponseFormat)
- [Export API Name/Id Cross-Reference](#NameIdXref)

---
<!-- end comment block (when active)-------------------- -->

{{% notice tip %}}
The **Swagger UI** can be used to make the request(s) related to exporting information. See [*How to use the Swagger UI*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToUseTheSwaggerUI_6.41/) for details. Examples of using Swagger will appear in this document, however, it is not *required* that Swagger be used.
{{% /notice %}}

---

## Making an *Export* request {#ExportRequest}

Making an export request involves you either posting a synchronous *Export* request and processing the response sent back or posting an asychronous *Export* request and one or more *Status Check* requests and then processing the responses sent back.

### Synchronous *Export* requests {#SynchronousRequests}

When making a synchronous *Export* request, you'll receive a response within 90 seconds which will either notify you that the request completed successfully or completed with an error.

If an *Error* response is returned with the **timeout** error, you'll need to add filtering to the request to decrease the time needed to process it.

{{% notice note %}}
Teamwork cannot guarantee that the data returned in the synchronous response will be present in the database following sending of the response. It is possible that the data may be changed or removed subsequently.
{{% /notice %}}

### Asynchronous *Export* requests {#AsynchronousRequests}

When making an asynchronous *Export* request, you’ll always receive an *In Process* response. You'll need to continue checking the status of the request until either a *Success* or *Error* response is received. See [Making a *Check Status* request](#CheckStatusRequest) below.

### Identifying value classes {#IdentifyingValueClasses}

*Export* requests can include a *Settings* group containing zero or more items identifying which value (field) is to be used for a particular value class.

For example, the **Adjustment Export API** has the **Setting** entry **LocationIdentifierSetting**. This setting indicates which of the supported values (in this instance, “ExternalIdCode", "Code", "ExternalId", "No", or "TeamworkId”) is to be used to identify locations while that export request is being processed.

Each export API has its own settings (or perhaps no settings at all). The settings that can be used for a given API will be described in that API’s documentation. The documentation will list the available settings along with the valid values for that setting, and the default value if the setting is omitted.

### Controlling the information returned {#ControllingInfoReturned}

The amount of information returned by a successful *Export* request and the order that that information will appear in the response can be controlled in various ways based upon values supplied in the *Export* request.

#### Filtering rows {#FilteringRows}

Supplying one or more filters in the **Filters** group of the *Export* request establishes selection criteria. Only those rows in the database which match the selection criteria will be returned. 

A filter is comprised of a field name, a comparison operator, and a value to be compared against. Possible operators are: “Greater than”, “Greater than or equal”, “Less than”, “Less than or equal”, “Equal”, or “Contains”. Not every operator will apply to every field.

Each export API has its own set of filters (or perhaps no filters at all). The filters that can be applied for a given API will be described in that API’s documentation which will list the fields which can be used for filtering for that API and what comparison operators are applicable for each such field.

#### Skipping rows {#SkippingRows}

It is possible to skip (bypass) a certain number of rows which meet the selection criteria. This is indicated using the **Skip** parameter. For example, **"Skip": 5** will skip the first five rows which meet the selection criteria. If omitted, the default is 0 (all records which meet the selection criteria will be returned).

#### Maximum returned rows {#MaxReturnedRows}

It is possible to limit the number of rows which will be returned. This is indicated using the **Top** parameter. If the number of rows which match the selection criteria is greater than the **Top** value, only the **Top** number of rows will be returned. If **Top** is omitted, all rows which match the selection criteria (and which are not skipped) will be returned.

#### Sorting the returned rows {#SortReturnedRows}

It is possible to sort the rows which are returned. The sort orders are defined in the **SortDescriptions** group of the *Export* request. This group is an array with each element consisting of two fields, **Name** and **Direction**. The **Name** field is the field name on which the returned rows should be sorted. The **Direction** field indicates the direction of the sort, “Ascending” or “Descending”.

In addition, it will be indicated as to whether or not a field is a table index or not. An index field is identified by "(index)". Any field which does not have this indicator is not an index field. A sort on an index field will execute more efficiently than a sort on a non-index field. 

If a given API supports sorting, the documentation for that API will list the fields which can be used.

### *Export* request endpoint {#ExportRequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown"><b><i>\<your-chq-url\></i></span>/chqapi/export/<span class="fg-brown"><i>\<api-id\></i></b></span>  
Asynchronous URL: <span class="fg-brown"><b><i>\<your-chq-url\></i></span>/chqapi/export/<span class="fg-brown"><i>\<api-id\></i></span>/async</b>  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<api-id\>***</span> is an identifier of the API as listed in the [Export API Name/Id Cross-Reference](#NameIdXref) below.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToCreateManageApiKeys_6.41/) for further info.

### *Export* request format  {#ExportRequestFormat}

Below is the format of the standard *Export* request which is to be used for both synchronous and asynchronous requests. Any field not explicitly marked as **Required** is optional and can be omitted. See [*JSON Data Types*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/JsonDataTypes_6.41/) for a description of the values which could appear in the **Data Type** column.

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
ApiDocumentId | string, guid | A unique identifier of the API document being used. |
<span class="api-gn">Request</span> | | <span class="api-gd">A group containing the following fields and groups.</span> |
<span class="api-gn">Request: Settings</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries. The settings available for a given API will be listed in that API's document.</span> |
Key | string | The name of a setting being supplied. |
Value | string | The value being supplied for the setting. |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Request: Settings</span> |
<span class="api-gn">Request: Filters</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries. The filters available for a given API will be listed in that API's document.</span> |
Field | string | The name of the column (field) in the table being exported to which the filter will apply. |
Operator | string, enum | The operator to apply for the filter. Its value must be one of the following: “Equal”, “Notequal”, “Greaterthan”, Lessthan”, “Lessthanorequal”, “Greaterthanorequal”, “Contains”. **Note:** Not all of the operator values listed will apply to every filter for every API. The list of which of the operator values are valid for a given filter for a given API will be listed in that API's document. |
Value | string | The value which the values in the database records are to be checked against. |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Request: Filters</span> |
Skip | integer | Indicates the number of records to skip (bypass) before starting to export records. |
<span class="api-gn">Request: SortDescriptions</span> | | <span class="api-gd">A group containing the following fields and groups. This group is an array with zero or more entries. The fields available to be sorted on for a given API will be listed in that API's document.</span> |
Direction | string, enum | The direction in which the sort will be performed. Its value must be one of the following: “Ascending”, “Descending”. |
Name | string | The name of the field on which to apply the sort. |
<span class="api-gs">---</span>  | | <span class="api-gde">end of Request: SortDescriptions</span> |
Ties | boolean | An indicator as to whether or not <span class="ir">***????????***</span> |
Top | integer | Indicates that the data from only the top (first) number of records is to be exported. |
Skip | integer | Indicates the number of records to skip (bypass) before starting to export records. |
<span class="api-gs">**---**</span>  | | <span class="api-gde">end of Request</span> |

--- 

## Making a *Check Status* request {#CheckStatusRequest}

As noted above, when an asynchronous *Export* request is made, the initial response will always be an *In Process* response. As long as an *In Process* response is received, you'll need to continue making *Check Status* requests until either a *Success* or *Error* response is returned.

{{% notice info %}}
When checking the status of an *Export* request you must provide the initial *Export* request's **ApiDocumentId** value. The **ApiDocumentId** is a GUID which can, optionally, be generated by you and supplied in the initial *Export* request. If you do not supply an **ApiDocumentId** in the *Export* request, a GUID for the request will be generated by Teamwork and will be included in the initial *In Process* response. Whether the id is generated by you or by Teamwork, that id **must** be provided in subsequent status check requests.
{{% /notice %}}

### *Check Status* request endpoint {#CheckStatusRequestEndPoint}

Method: **POST**  
URL: <span class="fg-brown">***\<your-chq-url\>*</span>/chqapi/status**  
HTTP Headers: **Content-Type: application/json**  

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.

In the Swagger UI the **/chqapi/status** endpoint is a member of the **Common** endpoint group.

### *Check Status* using Swagger {#CheckStatusRequestSwagger}

The image below shows the Swagger user interface for checking the status:

{{% gimg src="APIDOC/HowTos/MakeAnExportRqst/GetStatus.png" title="Get Request Status" width="800px" %}}

---

## Making a *Get Data* request {#GetDataRequest}

It is possible to obtain information about an *Export* request. <span class="ir">***?????????? Need a description of how and why someone would use this. ??????????***</span>

### *Get Data* request endpoint {#GetDataRequestEndpoint}

Method: **POST**  
URL: <span class="fg-brown">***\<your-chq-url\>*</span>/chqapi/getdata**  
HTTP Headers: **Content-Type: application/json**  

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  

### *Get Data* request using Swagger {#GetDataRequestSwagger}

The image below shows the Swagger user interface for getting the data:

{{% gimg src="APIDOC/HowTos/MakeAnExportRqst/InfoRqstBody.png" title="Get Request Status" width="800px" %}}

{{% notice info %}}
Each time you want to interact with the *Get Data* API, you need to provide an API key for Teamwork to recognize this as a valid operation. For information on how to get the API key, see [*How To Create and Manage API Keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToCreateManageApiKeys_6.41/).
{{% /notice %}}

---

## Receiving a response {#ReceivingAResponse}

As mentioned above, the response received after posting a request can be of three possible types: *Success*, *In Process*, or *Error*.

The *Success* response is automatically returned when the processing of a synchronous *Export* request has completed successfully or when a *Check Status* request is made after the successful completion of the processing of an asynchronous *Export* request.

An *In Process* response is automatically returned in response to the initial asynchronous *Export* request and will also be returned after each *Check Status* request until the processing of the initial *Export* request has completed.

An *Error* response will automatically be received when the processing of a synchronous *Export* request has completed with an error or when a *Check Status* request is made after the unsuccessful completion of the processing of an asynchronous *Export* request.

### *Success* Response format {#SuccessResponseFormat}

Below is the generic successful response format. See [*JSON Data Types*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/JsonDataTypes_6.41/) for a description of the values which could appear in the **Data Type** column.

<span class="ir">***?????????? Need to confirm that this format is still valid. The JSON source code I have available to me is very old. Also, is this a generic format? In other words, is the 'Lines' group in this format a generic representation of the specific lines which might appear in a specific response format? ??????????***</span>

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
Id | string, guid | A unique identifier of the API document used to make the import request. **Required**|
Status | string, enum  | An indication of the status of the request. Its value will be one of the following: "Error", "InQueue", "Validation", "InProcess", "Successful". **Required**|
Progress | number, null | <span class="ir">***????????***</span> |
TotalRecords | integer, null | The total number of records processed. <span class="ir">***????????***</span> |
AcceptedRecords | integer, null | The number of submitted records accepted (written to the database). <span class="ir">***????????***</span> |
ErrorRecords | integer, null | The number of submitted records which had errors. <span class="ir">***????????***</span> |
ElapsedTime | string, datetime, null | The time it took to execute the import request. |
ErrorMessage | string, null | A general error message if there were any errors. |
<span class="api-gn">Lines</span> | | <span class="api-gd">A group containing the following fields and groups. This is an array containing zero or more entries.</span> |
EntityNo | string | An identifier of the entity being referenced.<span class="ir">***????????***</span> |
EntityId | string, guid | A unique identifier of the entitiy being referenced.<span class="ir">***????????***</span> |
Error | string, null | A message describing the error related to the entitiy being referenced.<span class="ir">***????????***</span> |
Status | string, enum | An indicator of status of the entity being referenced. Its value will be one of the following: "Error", "InQueue", "Validation", "InProcess", "Successful" <span class="ir">***????????***</span>|
<span class="api-gs">---</span>  | | <span class="api-gde">end of Lines</span> |
ApiType | string | <span class="ir">***????????***</span> **Required** |
Source | string | The source of the data being supplied. <span class="ir">***????????***</span> |

The bulk of content for the *Success* response will be those rows in the database which meet the selection criteria. The format of that content will be different for each export API and is described in that API's document.

In addition to the API-Specific fields, other values may also be returned. These values are:

**Field** | **Description** |
--- | --- |
ApiDocumentId | A unique identifier of the API document being processed. |
ApiRequestType | A value indicating the API which was requested (I.E., "catalog-export"). |
ElapsedTime | The time it took for the export to execute. |
EndDateTime | The timestamp of when the export completed. |
RecordsCount | The number of records exported, I.E., that satisfy the selection criteria taking into account the **Top** and **Skip** parameters, if supplied. |
StartDateTime | The timestamp of when the export began. |
Status | A code indicating the status of the export. |
TotalRecords | The total number of records which meet the selection criteria ignoring the **Top** and **Skip** parameters, if supplied. |

<br>The calculation of the **RecordsCount** and **TotalRecords** values is as follows.

**RecordsCount** is set to the **TotalRecords** minus the **Skip** value (which could be zero).

If the **Top** parameter is supplied, **RecordsCount** will be set to the previously calculated **RecordsCount** value minus the **Top** value.

If the final **RecordsCount** value is less than the **Top** value, the calculated **RecordsCount** will be returned.

If the final **RecordsCount** value is greater than or equal to **Top**, the **Top** value will be returned.

**Count Example 1:**

There are 10 records that satisfy the selection criteria and the **Top** and **Skip** parameters are not specified. The response will contain the fields: **"TotalRecords": 10** and **"RecordsCount": 10**.

**Count Example 2:**

There are 10 records that satisfy the selection criteria and the **Top** parameter is set to 5 (**"Top": 5**). The response will contain the fields: **"TotalRecords": 10** and **"RecordsCount": 5**.

**Count Example 3:**

There are 10 records that satisfy the selection criteria and the **Skip** parameter is set to 3 (**"Skip ": 3**). The response, will contain the fields: **"TotalRecords": 10** and **"RecordsCount": 7**.

**Count Example 4:**

There are 10 records that satisfy the selection criteria , the **Skip** parameter is set to 8 (**"Skip ":8**), and the **Top** parameter is set to 5 (**"Top ": 5**). The response, will contain the fields: **"TotalRecords": 10** and **"RecordsCount": 2**.

### *Error* response format {#ErrorResponseFormat}

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
Id | string, guid<span class="ir">***????????***</span> | A unique identifier of the API document used to make the request. <span class="ir">***????????***</span> |
Status | string<span class="ir">***????????***  | An indication of the status of the request. Its value will be “Error”. <span class="ir">***????????***</span> |
TotalRecords | integer<span class="ir">***????????*** | The total number of submitted records processed. <span class="ir">***????????***</span> |
AcceptedRecords | integer<span class="ir">***????????***</span> | The number of submitted records accepted (written to the database). <span class="ir">***????????***</span> |
ErrorRecords | integer<span class="ir">***????????***</span> | The number of submitted records which had errors. <span class="ir">***????????***</span> |
ElapsedTime | string, datetime, null<span class="ir">***????????***</span> | The time it took to execute the import request. |
ErrorMessage | string<span class="ir">***????????***</span>, null | A general error message if there were any errors. |
<span class="api-gn">Lines</span> | | <span class="api-gd">A group containing the following fields and groups. This is an array containing zero or more entries.</span> |
EntityNo | integer<span class="ir">***????????***</span> | The line number in the import where the record was submitted. <span class="ir">***????????***</span> |
EntityId | string, guid | A unique identifier of the record which was submitted. <span class="ir">***????????***</span> |
Error | string<span class="ir">***????????***</span> | An error message describing why the import of the record failed (if the import of the record failed). |
Status | string, enum<span class="ir">***????????***</span> | An indication of whether the record was imported successfully or not. Its value will be one of the following: “Success”, “Error”. <span class="ir">***????????***</span> |
<span class="api-gs">**---**</span>  | | <span class="api-gde">end of Lines</span> |
ApiType | string<span class="ir">***????????***</span> | <span class="ir">***????????***</span> |
Source | string<span class="ir">***????????***</span> | The source of the data being supplied to the import. |

---

## Response examples {#ResponseExamples}

**Response Example 1: Success**

~~~
{
  "Id": "5bb3bfe9-b721-4c2e-99b0-78c12d14607b",
  "Status": "Successful",
  "Progress": null,
  "TotalRecords": 157,
  "TotalRecordsSerialized": 157,
  "AcceptedRecords": null,
  "ErrorRecords": null,
  "ElapsedTime": null,
  "ErrorMessage": null,
  "Lines": null,
  "ApiType": "location-export",
  "Source": "string"
}
~~~

**Response Example 2: In Process**

~~~
{
   "Id":"5bb3bfe9-b721-4c2e-99b0-78c12d14607b",
   "Status":"InProcess",
   "Progress":null,
   "TotalRecords":null,
   "AcceptedRecords":null,
   "ErrorRecords":null,
   "ElapsedTime":null,
   "ErrorMessage":null,
   "Lines":null,
   "ApiType":"location-export",
   "Source":"string"
}
~~~

**Response Example 3: Error**

~~~
{
  "Id": "60fd68ab-b6ac-4c8d-8315-e989a095b7df",
  "Status": "Error",
  "Progress": null,
  "TotalRecords": null,
  "AcceptedRecords": null,
  "ErrorRecords": null,
  "ElapsedTime": null,
  "ErrorMessage": "Conversion failed when converting date and/or time from character string.",
  "Lines": null,
  "ApiType": "location-export",
  "Source": "string"
}
~~~

**Response Example 4: The result for a successful export**

~~~
{
   "ApiDocument":{
      "ApiDocumentId":"FD0AE5F6-9A04-4D7D-A937-36F9C05C022E",
      "Status":"Successful",
      "TotalRecords":5,
      "RecordsCount":2,
      "ElapsedTime":"00:00:00.0300000",
      "StartDateTime":"2019-04-22T13:03:10.803",
      "EndDateTime":"2019-04-22T13:03:10.833",
      "Response":{
         "Locations":[
            {
               "RecCreated":"2013-11-08T15:02:20.987",
               "RecModified":"2017-03-15T17:52:02.697",
               "LocationId":"EF72D4C2-CE5E-4C33-8A6A-0756EEA2D254",
               "Name":"",
               "Name2":"",
               "Code":"TEMP",
               "LocationNo":31,
               "ExternalId":"",
               "NodeId":"504D4554-0A08-0E0C-1012-1416181A1C1E",
               "IsActive":true,
               "IsArchived":false,
               "Area":"",
               "TimeAdjust":0,
               "TimeZoneIdentifier":"Ukraine time zone",
               "PriceLevelIdentifier":"",
               "AvailabilityGroupIdentifier":"ALL LOCAT",
               "TransferGroup":"",
               "Warehouse":false,
               "AvailableForStorePickup":true,
               "ECommerce":"NonEc",
               "ECommerceFlag":false,
               "CustomFlag1":false,
               "CustomFlag2":false,
               "CustomFlag3":false,
               "CustomFlag4":false,
               "CustomFlag5":false,
               "CustomFlag6":false,
               "CustomFlag7":false,
               "CustomFlag8":false,
               "CustomFlag9":false,
               "CustomFlag10":false,
               "CustomFlag11":false,
               "CustomFlag12":false,
               "CustomDecimal1":0,
               "CustomDecimal2":0,
               "CustomDecimal3":0,
               "CustomDecimal4":0,
               "CustomDecimal5":0,
               "CustomDecimal6":0,
               "CustomNumber1":0,
               "CustomNumber2":0,
               "CustomNumber3":0,
               "CustomNumber4":0,
               "CustomNumber5":0,
               "CustomNumber6":0,
               "ContactInfo":{
                  "Address1":"",
                  "Address2":"",
                  "Address3":"",
                  "Address4":"",
                  "City":"",
                  "State":"",
                  "PostalCode":"",
                  "Contact":"",
                  "EMail":"",
                  "Fax":"",
                  "HomePage":"",
                  "Latitude":0,
                  "Longitude":0,
                  "Phone1":"",
                  "Phone2":"",
                  "Phone3":"",
                  "Telex":""
               },
               "Schedule":{

               }
            },
            {
               "RecCreated":"2013-10-25T13:06:23.997",
               "RecModified":"2017-03-15T17:52:02.697",
               "LocationId":"D023BF71-108A-47B6-A30B-0F54E6723665",
               "Name":"Mitya",
               "Name2":"",
               "Code":"MITYA",
               "LocationNo":29,
               "ExternalId":"",
               "NodeId":"5954494D-0A41-0E0C-1012-1416181A1C1E",
               "IsActive":true,
               "IsArchived":false,
               "Area":"",
               "TimeAdjust":0,
               "TimeZoneIdentifier":"Ukraine time zone",
               "PriceLevelIdentifier":"",
               "AvailabilityGroupIdentifier":"ALL LOCAT",
               "TransferGroup":"TRAINING",
               "Warehouse":false,
               "AvailableForStorePickup":true,
               "ECommerce":"NonEc",
               "ECommerceFlag":true,
               "CustomFlag1":false,
               "CustomFlag2":false,
               "CustomFlag3":false,
               "CustomFlag4":false,
               "CustomFlag5":false,
               "CustomFlag6":false,
               "CustomFlag7":false,
               "CustomFlag8":false,
               "CustomFlag9":false,
               "CustomFlag10":false,
               "CustomFlag11":false,
               "CustomFlag12":false,
               "CustomDecimal1":0,
               "CustomDecimal2":0,
               "CustomDecimal3":0,
               "CustomDecimal4":0,
               "CustomDecimal5":0,
               "CustomDecimal6":0,
               "CustomNumber1":0,
               "CustomNumber2":0,
               "CustomNumber3":0,
               "CustomNumber4":0,
               "CustomNumber5":0,
               "CustomNumber6":0,
               "FranchiseGroupIdentifier":"TRAINING",
               "ContactInfo":{
                  "Address1":"",
                  "Address2":"",
                  "Address3":"",
                  "Address4":"",
                  "City":"",
                  "State":"",
                  "PostalCode":"",
                  "Contact":"",
                  "EMail":"",
                  "Fax":"",
                  "HomePage":"",
                  "Latitude":0,
                  "Longitude":0,
                  "Phone1":"",
                  "Phone2":"",
                  "Phone3":"",
                  "Telex":""
               },
               "Schedule":{

               }
            }
         ]
      }
   }
}
~~~

**Response Example 5: The result for an error export**

~~~
{
  "Message": "API document was not successfully prepared"
}
~~~

---

## Export API Name/Id Cross-Reference {#NameIdXref}

**Export API Name** | **Export API Id**
--- | --- |
<span class="ir">***??????????***</span> | <span class="ir">***??????????***</span> |

<span class="ir">***?????????? We have such a list for import APIs so we should have one for export APIs as well. ??????????***</span>
