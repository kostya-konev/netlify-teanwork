---
title: "Custom Table Import API"
date: 2022-08-15T08:28:00-05:00
draft: true
weight: 3
---

{{% notice warning %}}
The API Reference is currently under construction and its contents should not be used until further notice.
{{% /notice %}}

## Overview {#Overview}

The **Custom Table Import** API is used to create or update custom table definitions and the structure of custom tables.

See the [*How to make an import API request*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToMakeAnImportRequest_6.41/) document for a description on how import requests are made and on the standard response formats used.

{{% notice warning %}}
This API must **always** be submitted as an *asynchronous* request.
{{% /notice %}}

The **Custom Table Import** request format will be described below.

---

## Request endpoint {#RequestEndpoint}

Method: **POST**  
URL: <span class="fg-brown"><b><i>\<your-chq-url\></i></span>/chqapi/import/custom-table</b>  
HTTP Headers: **Content-Type: application/json**  
HTTP Headers: **ApiKey:** <span class="fg-brown">***\<your-api-key\>***</span>

<span class="fg-brown">***\<your-chq-url\>***</span> is the URL of your CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<your-api-key\>***</span> is your API key value. See [*How to manage API keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/) for further info.

---

## Request format {#RequestFormat}

Any field not explicitly marked as **Required** is optional and can be omitted. See [*JSON Data Types*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/JsonDataTypes_6.41/) for a description of the values which could appear in the **Data Type** column.

**Field Name** | **Data Type** | **Description** |
---- | ---- | ---- |
Source | string | The source of the data being supplied to the import. **Required** |
CommunicationId | string, guid | A unique identifier of the request (see [*Handling the CommunicationId parameter*](https://twdocs.netlify.app/dev/API_Reference/Supporting_Information/HandlingTheCommunicationIdParam_6.41/) for additional info). |
<span class="fg-twb">**Data**</span> | | <span class="fg-twb">A group containing the following fields and groups. **Required**</span> |
<span class="fg-twb">**Data: Request**</span> | | <span class="fg-twb">A group containing the following fields and groups. **Required**</span> |
<span class="fg-twb">**Data: Request: CustomTable**</span> | | <span class="fg-twb">A group containing the following fields and groups. **Required**</span> |
TableName | string,<br>len:1-128 | The name of the custom table. |
ImportData | *object* | *(see below)* |
<span class="fg-twb">**---**</span>  | <span class="fg-twb">**---**</span>  | <span class="fg-twb">*end of* ***Data: Request: CustomTable***</span> |
<span class="fg-twb">**---**</span>  | <span class="fg-twb">**---**</span>  | <span class="fg-twb">*end of* ***Data: Request***</span> |
ApiDocumentId | string, guid | A unique identifier of the API document being used. |
<span class="fg-twb">**---**</span>  | | <span class="fg-twb">*end of* ***Data***</span> |

The **ImportData** object should contain a group array which defines the fields in the custom table. The name of the the group array will be the value of the **TableName** field. 
