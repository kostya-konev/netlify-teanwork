---
title: "How to manage API keys [6.41]"
date: 2022-02-15T09:28:00-05:00
draft: false
weight: 3
---

<!-- begin comment block (when active)-------------------- -->
{{% notice warning %}}
The API Reference is currently under construction and its contents should not be used until further notice.
{{% /notice %}}

- [Overview](#Overview)
- [Creating an API Key](#CreatingAnApiKey)
- &nbsp;&nbsp;&nbsp;&nbsp;[Enable the API key](#EnableTheAPIKey)
- &nbsp;&nbsp;&nbsp;&nbsp;[Allow for interaction with all API types](#AllowInteractionForAll)
- &nbsp;&nbsp;&nbsp;&nbsp;[Allow for interaction with specific APIs](#AllowInteractionForSpecific)
- [Editing an API Key](#EditingAnApiKey)
- [Removing an API Key](#RemovingAnApiKey)
- [Copying an API Key](#CopyingAnApiKey)

---
<!-- end comment block (when active)-------------------- -->

## Overview {#Overview}

Each time you want to request the execution of an API, you need to provide an **API Key** in order for Teamwork to recognize the request as a valid operation. An **API Key** is a GUID that unlocks the connection to the Teamwork API resources.

In CHQ, it is possible to:  
- Create an API Key.  
- Edit an API Key.  
- Remove an API Key.  
- Copy an API Key.

{{% notice info %}}
Any user who is to be able to create and manage API keys must have been granted the *Access Integration Settings CHQ* and *Add/Edit Integration Settings CHQ* rights in CHQ.
{{% /notice %}}

---

## Creating an API Key {#CreatingAnApiKey}

To create an API key in CHQ, do the following:

1. Navigate to **chq** > **settings**.

{{% gimg src="APIDOC/HowTos/CreateAndManageApiKeys/CreateAndManage_01.png" title="CHQ: Settings" width="500px" %}}

2. In the left-side panel, expand **integrations** and click **keys**.

{{% gimg src="APIDOC/HowTos/CreateAndManageApiKeys/CreateAndManage_02.png" title="CHQ: Keys menuitem" width="250px" %}}

3. In the **keys** pane, click **new**.

{{% gimg src="APIDOC/HowTos/CreateAndManageApiKeys/CreateAndManage_03.png" title="CHQ: Keys new" width="600px" %}}

4. In the **API key** dialog that opens you can perform the below activities.

#### Enable the API key {#EnableTheAPIKey}

You can enable the API key right after its creation by selecting **is active**.

{{% gimg src="APIDOC/HowTos/CreateAndManageApiKeys/CreateAndManage_04.png" title="CHQ: API Key" width="450px" %}}

#### Allow for interaction with all API types {#AllowInteractionForAll}

You can allow for interaction with ***all*** API types by selecting **allowed for all**.

{{% gimg src="APIDOC/HowTos/CreateAndManageApiKeys/CreateAndManage_05.png" title="CHQ: Allowed For All" width="400px" %}}

After selecting **allowed for all**, it will be possible to enable logging for interactions using all API types by selecting **logged for all**.

{{% gimg src="APIDOC/HowTos/CreateAndManageApiKeys/CreateAndManage_20.png" title="CHQ: Logged For All" width="400px" %}}

Also, it is possible to specify the date after which logging of any further activity will stop. To do so, click **set expiration date**.

{{% gimg src="APIDOC/HowTos/CreateAndManageApiKeys/CreateAndManage_21.png" title="CHQ: Set Expiration Date" width="400px" %}}

{{% notice tip %}}
After logging is stopped, old logs are not automatically deleted from the database.
{{% /notice %}}

#### Allow for interaction with specific APIs {#AllowInteractionForSpecific}

You can allow for interaction with specific API types by:

1. Selecting check box(es) in the **selected** listbox column which correspond to the desired APIs.

{{% gimg src="APIDOC/HowTos/CreateAndManageApiKeys/CreateAndManage_06.png" title="CHQ: API Key Select" width="500px" %}}

2. In the **logged** column of the listbox, select the **logged** checkbox if you want activity for that API type to be logged.

{{% gimg src="APIDOC/HowTos/CreateAndManageApiKeys/CreateAndManage_07.png" title="CHQ: Logged" width="500px" %}}

3. It is also possible to specify a date after which logging of any further activity for the corresponding API type(s) will stop. To do so, click **set expiration date** in the **logging until** column in the listbox.

{{% gimg src="APIDOC/HowTos/CreateAndManageApiKeys/CreateAndManage_08.png" title="CHQ: Set Expiration Date" width="500px" %}}

4. There will be a lot of API types in the list. To avoid scrolling through the whole list to find a needed API type, the search field can be used by typing the full API type name to show that API only:

{{% gimg src="APIDOC/HowTos/CreateAndManageApiKeys/CreateAndManage_09.png" title="CHQ: Search #1" width="500px" %}}

or, you can type a part of an API type name in which case all the API types that contain the entered text will be shown:

{{% gimg src="APIDOC/HowTos/CreateAndManageApiKeys/CreateAndManage_10.png" title="CHQ: Search #2" width="500px" %}}

5. You can enter a description for the API key in the **description** field. Make sure the description is meaningful and contains information about the API types the key will be used to interact with.

{{% gimg src="APIDOC/HowTos/CreateAndManageApiKeys/CreateAndManage_11.png" title="CHQ: Description entry" width="500px" %}}

The entered description will be displayed in the **description** column next to the API key value within the **keys** area.

{{% gimg src="APIDOC/HowTos/CreateAndManageApiKeys/CreateAndManage_12.png" title="CHQ: Description display" width="500px" %}}

6. Click **save** for a new API key to be generated.

---

## Editing an API Key {#EditingAnApiKey}

You would do the following to edit (modify) an API key:

1. In the **keys** pane, select the API key you want to edit by clicking the row in the list that contains the desired key's value and then clicking **edit**.

{{% gimg src="APIDOC/HowTos/CreateAndManageApiKeys/CreateAndManage_13.png" title="CHQ: Edit Description" width="500px" %}}

2. In the **API key** dialog box that opens, make the required customizations then click **save**.

---

## Removing an API Key {#RemovingAnApiKey}

You would do the following to remove an API key:

1. In the **keys** pane, select the API key you want to remove by clicking the row in the list that contains the desired key's value and then clicking **remove**.

{{% gimg src="APIDOC/HowTos/CreateAndManageApiKeys/CreateAndManage_15.png" title="CHQ: Remove API Key" width="500px" %}}

2. In the **remove API** key dialog box that opens, click **yes**.

---

## Copying an API Key {#CopyingAnApiKey}

To copy an API key, in the **keys** area, drag the mouse over the desired API key in the value column to select the text in the column and then copy the selected text into the clipboard.

{{% gimg src="APIDOC/HowTos/CreateAndManageApiKeys/CreateAndManage_16.png" title="CHQ: Copy API Key" width="500px" %}}


{{% notice note %}}
When selecting the API key, make sure that the API type value relevant to your export or import operation is selected for that key. Also, such a key can have the **all allowed** value selected. In the latter case, that key can be used for any type of export.

To check which API type value is selected, double-click the API key in the **value** column within the **keys** area.
{{% /notice %}}
