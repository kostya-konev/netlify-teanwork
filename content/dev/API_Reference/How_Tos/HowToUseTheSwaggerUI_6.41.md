---
title: "How to use the Swagger UI [6.41]"
date: 2022-02-21T10:17:00-05:00
draft: false
weight: 21
---

<!-- begin comment block (when active)-------------------- -->
{{% notice warning %}}
The API Reference is currently under construction and its contents should not be used until further notice.
{{% /notice %}}

- [Introduction](#Introduction)
- [Accessing Swagger](#AccessingSwagger)
- [Available Groups](#AvailableGroups)
- [Making an Import Request](#MakingAnImportRequest)
- [Making an Export Request](#MakingAnExportRequest)
- [Export Request: Form View](#FormView)
- &nbsp;&nbsp;&nbsp;&nbsp;[Areas Available in Form View](#FormView_AvailableAreas)
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Settings](#FormView_Settings)
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Filters](#FormView_Filters)
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Sort Descriptions](#FormView_SortDesc)
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Skip](#FormView_Skip)
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Top](#FormView_Top)
- [Export Request: Raw View](#RawView)

---
<!-- end comment block (when active)-------------------- -->

## Introduction {#Introduction}

The Swagger UI can be used to interact with Teamwork APIs for importing and exporting data. For example, it is possible to import and export catalog information, purchase orders, sales orders, sales receipts, transfer memos, vendor invoices, and so on.

This document shows how to access and use the Swagger UI to make execution requests for Teamwork export and import APIs.

<br>

## Accessing Swagger {#AccessingSwagger}

To access Swagger, use the following URL:

<b>https://<span class="fg-brown"><i>\<your-chq-url\></i></span>/integration/api/index#</b>

<span class="fg-brown">***\<your-chq-url\>***</span> is your base CHQ URL as supplied by Teamwork.

<br>

## Available Groups {#AvailableGroups}

In the Swagger UI, available endpoints are grouped as follows:  
- Adjustment  
- Catalog  
- Common  
- ECommerce  
- ItemsAvailability  
- Purchase  
- Report  
- Reserve  
- Sales  
- Settings
- Snapshot

<br>

## Making an Import Request {#MakingAnImportRequest}

In order to make an import request:

1. Click the name of the desired group to expand it.

{{% gimg src="APIDOC/HowTos/UseTheSwaggerUI/UseSwagger_01.png" title="Select Group" width="500px" %}}

2. Click the desired endpoint to expand it. In case of an entity import, the operation name will begin with “/chqapi/import/”.

{{% gimg src="APIDOC/HowTos/UseTheSwaggerUI/UseSwagger_02.png" title="Select Operation" width="400px" %}}

3. For Teamwork to recognize the operation as being valid, you will need to provide an API key. Paste the key into the **APIKey** field near the bottom of the **Parameters** area.

{{% gimg src="APIDOC/HowTos/UseTheSwaggerUI/UseSwagger_03.png" title="Update apiKey" width="650px" %}}

{{% notice info %}}
For information on how to create and copy API keys see [*How to create and manage API Keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/Create_Amd_Manage_API_Keys/).
{{% /notice %}}

4. In the **Data Type** column of the **Parameters** area, click **Model** to view the generalized information on the request's structure and format.

{{% gimg src="APIDOC/HowTos/UseTheSwaggerUI/UseSwagger_04.png" title="Select model" width="650px" %}}

5. In the **apiRequest** field of the **Parameters** area, add or modify your request.

{{% gimg src="APIDOC/HowTos/UseTheSwaggerUI/UseSwagger_05.png" title="Add/Modify Request #1" width="700px" %}}

6. If the **apiRequest** field of the **Parameters** area is empty, it is possible to insert a template of a request there. To do so, click anywhere in the **Example Value** area, located to the right of **apiRequest**. In the template, certain properties have “dummy” values. Such “dummy” values are used as an example of the property data type (for example, "CustomLookup1": "string"). The “dummy” values in **Example Value** should be replaced by “valid” ones in **apiRequest** when submitting your request. 

{{% gimg src="APIDOC/HowTos/UseTheSwaggerUI/UseSwagger_06.png" title="Add/Modify Request #2" width="700px" %}}

{{% notice info %}}
**Validation**  
There are three types of validation that always precede an import procedure:

**1. Required Fields**  
Certain fields are required for certain import types. Such fields cannot be omitted from the request. For example, when a new entity is created as a result of the import procedure, omission of a field such as **Name** will lead to a validation failure.

**2. Data Type**  
When processing a request, it is not possible to handle property (field) values with data in an invalid format. For example, you cannot use the "number" data type instead of "string" for the **Location** property (field).

**3. Associated Entities**  
There are certain entities for which an ID of an associated entity is stored on the database level. For example, in the case of an *Item*, the associated entity is represented by "Vendor". If, during the import procedure, a non-existent ID of an associated entity is supplied in the request, validation will fail.

If validation fails for any of these, or other, reasons, the import will not take place and you will receive an error response. In this case, no changes will be made on the database level.
{{% /notice %}}

7. To execute the import, click **Try it out!**.

The Swagger UI will submit the request and show:  
- The CURL (Client URL) that was submitted  
- The request URL  
- The response body  
- The response code  
- The response headers

<br>

## Making an Export Request {#MakingAnExportRequest}

1. Click the name of the desired group to expand it.

{{% gimg src="APIDOC/HowTos/UseTheSwaggerUI/UseSwagger_07.png" title="Select group" width="500px" %}}

2. Click the desired endpoint to expand it. In case of an entity export, the operation name will start with “/chqapi/export/”.

{{% gimg src="APIDOC/HowTos/UseTheSwaggerUI/UseSwagger_08.png" title="Select endpoint" width="400px" %}}

3. For Teamwork to recognize the operation as valid, you will need to provide an API key. Paste the key into the **ApiKey** field near the bottom of the **Parameters** area.

{{% gimg src="APIDOC/HowTos/UseTheSwaggerUI/UseSwagger_09.png" title="Select endpoint" width="700px" %}}

{{% notice info %}}
For information on how to create and copy API keys see [*How to manage API Keys*](https://twdocs.netlify.app/dev/API_Reference/How_Tos/HowToManageApiKeys_6.41/).
{{% /notice %}}

4. For export requests, it is possible to choose how to specify your request parameters: via the [**Form**](#FormView) or [**Raw**](#RawView) views.

{{% gimg src="APIDOC/HowTos/UseTheSwaggerUI/UseSwagger_10.png" title="Select view" width="300px" %}}

5. Click **Try it out!**.

The Swagger UI will submit the request and show:  
- The CURL (Client URL) that was submitted  
- The request URL  
- The response body  
- The response code  
- The response headers

## Form View {#FormView}

After expanding the endpoint when making the export request, the **Form** view will open in the **Parameters** area. The **Form** view allows selecting property values from drop-down menus or specifying them in separate fields.

{{% gimg src="APIDOC/HowTos/UseTheSwaggerUI/UseSwagger_11.png" title="Form view" width="700px" %}}

### Areas Available in Form View {#FormView_AvailableAreas}

In the **Form** view the following areas are available:

#### Settings {#FormView_Settings}

In the **Settings** area, you can specify which identifier from the list of those supported will be used for the corresponding entity in your request (for example, for *Item identifiers* you can select among "PLU", "CLU", "External ID", etc.).

#### Filters {#FormView_Filters}

In the **Filters** area, click the plus button to add a new filter. Then, select a property, relation, and value to be used as criteria when the output is generated.

For example, by selecting "RecModified Greater than" and indicating any date, you will customize the request so that only entities that were modified after that particular date will be included in the output.

#### Sort Descriptions {#FormView_SortDesc}

In the **Sort Descriptions** area, click the **plus** button to specify the way the data will be sorted in the output. You can select the property, based on the value of which the entities will be sorted. Then you need to specify if the sort order will be *ascending* or *descending*.

#### Skip {#FormView_Skip}

In the **Skip** field, indicate how many entities to skip from the top during sorting which will not be included in the output.

#### Top {#FormView_Top}

In the **Top** field, indicate how many entities are to be included in the output, starting from the top of the list while sorting.

## Raw View {#RawView}

If you want to manually add and/or modify the source code for your request, click **Raw** in the **Parameters** area and manually enter the source code your request in the **apiRequest** field.

{{% gimg src="APIDOC/HowTos/UseTheSwaggerUI/UseSwagger_12.png" title="Raw view" width="700px" %}}

If the apiRequest field is empty, it is possible to insert a template of a request. To do so, click anywhere in the **Example Value** area, located to the right of the **apiRequest** field. In the template, certain properties have “dummy” values. Such “dummy” values are used as an example of the property data type. The “dummy” values in **Example Value** should be replaced by “valid” ones in **apiRequest** when submitting your request.
