---
title: "Echo Digital Asset Export [6.41]"
date: 2022-09-15T08:25:00-05:00
draft: false
weight: 0308
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

This topic describes the **Echo Digital Asset Export** API which is used to export echo digital asset information from CHQ.

<span class="ir">???????? Should we have a description of the 'echo' functionality here? Or perhaps as a separate 'Supporting Information' document? ??????????</span>

See [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for a description on how export requests are made and on the standard request and response formats used. The API-Specific successful response format for this API will be described below.

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
Synchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/EchoDigitalAsset**  
Asynchronous URL: <span class="fg-brown">***\<your-chq-url\>***</span>**/chqapi/export/EchoDigitalAsset/async**  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

## Request settings {#RequestSettings}

There are no settings supported by this API.

## Request filters {#RequestFilters}

Below are the filters which can be defined in the **Filters** group of the export request (see [*How to make an export API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnExportRequest_6.41/) for additional info).

The **Field** column lists the names of the fields on which filtering can be done. The **Operators** column lists the filter operator values which are valid for the field. The **Value** column describes the value expected for the field.

**Field** | **Operators** | **Value** |
---- | ---- | ---- | ---- |
RecModified |"Greater than", "Greater than or equal", "Less than", "Less than or equal", "Equal" | Any valid string representing a *datetime* value. |
EchoSource | "Equal", "Contains" | Any valid string representing a code for an echo source<span class="ir">??????????</span> for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |
StyleIdentifierType | "Equal" | An identifier of the style the exported asset is linked to. |
ItemIdentifierType | "Equal" | An indicator of the value to be used as an identifier for items. Its value must be be one of the following: "PLU", "CLU", "EID", or "UPC". |
ItemIdentifier | "Equal", "Contains" | Any valid string representing a an item identifier for the "Equal" operator, or a comma-separated list of such values for the "Contains" operator. |
IsHidden | "Equal" | A valid boolean value. |
Roles | "Equal", "Contains" | Any valid asset role.<br><br>For example, for images, this can be Base, Thumbnail, etc.; depending on the image role on the ecommerce site. Multiple roles are separated by commas. |
CatalogLinkType | "Equal", "Contains" | Indicates whether the exported assets are to be used to illustrate a style, an item, or item attributes. Its value must be be one of the following: "None", "Style", "Attribute 1", "Attribute 2", "Attribute 3", "Item". |
AttributeValue | "Equal", "Contains" | Specifies the value of the attribute the exported asset is used to illustrate. |
MediaType | "Equal", "Contains" | Indicates the type of media of the exported asset. Its value must be be one of the following: "Text", "Image", "Video", "File", "Audio". |
SnaphotNo | "Equal", "Contains" | Specifies the number of snapshot(s) to export. |

## Request sorts {#RequestSorts}

The information returned is automatically sorted by the **RecModified** field *ascending*. No other sorts can be requested.

---

## Successful response {#SuccessfulResponse}

### Format {#SuccessfulResponseFormat}

Below is the format of the successful response to the export request. See [*JSON Data Types*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/JsonDataTypes_6.41/) for a description of the values which could appear in the **Data Type** column.

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |

<span class="ir">????????? There is no schema page for this API in the tech specs. ??????????</span>

### Schema {#SuccessfulResponseSchema}
 
Below is the JSON source for the schema of a successful response to the export request as described above.

<span class="ir">????????? There is no schema page for this API in the tech specs. ??????????</span>

---

## Request Example(s) {#RequestExamples}

**Request Example #1:**

<span class="ir">?????????? The source code example provided by the developers is a generic request schema, NOT an example of a request for this specific API. ??????????</span>

---

## Response Example(s) {#ResponseExamples}


**Response Example #1: In Process**

~~~
{
  "Id": "9c6f821a-7888-413e-8737-e862dfca80d6",
  "Status": "InProcess",
  "Progress": null,
  "TotalRecords": null,
  "AcceptedRecords": null,
  "ErrorRecords": null,
  "ElapsedTime": null,
  "ErrorMessage": null,
  "Lines": null,
  "ApiType": "EchoDigitalAsset-export",
  "Source": "string",
  "Response": null
}
~~~

**Response Example #2: Error**

~~~
<span class="ir">?????????? Need an 'Error' example ??????????</span>
~~~

**Response Example #3: Success**

~~~
{
  "ApiDocumentId": "00000000-0000-0000-0000-000000000000",
  "Status": "Successful",
  "ApiRequestType": "string",
  "TotalRecords": 0,
  "RecordsCount": 0,
  "ElapsedTime": "2022-02-02T13:59:39.375Z",
  "StartDateTime": "2022-02-02T13:59:39.375Z",
  "EndDateTime": "2022-02-02T13:59:39.375Z",
  "Response": {
    "EchoDigitalAsset": [
      {
        "RecCreated": "2022-02-02T13:59:39.375Z",
        "RecModified": "2022-02-02T13:59:39.375Z",
        "StreamingDate": "2022-02-02T13:59:39.375Z",
        "EchoDigitalAssetId": "00000000-0000-0000-0000-000000000000",
        "EchoSource": "string",
        "SnapshotNo": 0,
        "SnapshotDateTime": "2022-02-02T13:59:39.375Z",
        "ImportDateTime": "2022-02-02T13:59:39.375Z",
        "StyleIdentifierType": "string",
        "StyleIdentifier": "string",
        "ItemIdentifierType": "string",
        "DigitalAssetUrl": "string",
        "AltText": "string",
        "ListOrder": 0,
        "IsHidden": true,
        "Roles": "string",
        "CatalogLinkType": "Style",
        "AttributeValue": "string",
        "ItemIdentifier": "string",
        "AuxText1": "string",
        "AuxText2": "string",
        "MediaType": "Text"
      }
    ]
  }
}
~~~
