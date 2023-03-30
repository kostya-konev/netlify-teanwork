---
title: "Clover Vendor Guide"
date: 2022-01-31T07:12:00-05:00
draft: false
weight: 0312
---
<!-- Weight: ffss; ff=>1st letter's nbr/ss=>2nd letter's nbr (w/leading zeros) -->

{{% notice warning %}}
This vendor guide is currently under construction and its contents should not be used until further notice.
{{% /notice %}}

**Vendor Full Name:**  
Fiserv/Clover Connect

**Product/Service Name:**  
Clover Connect

**Description:**  
Clover is a POS hardware/embedded software platform that can be utilized by a retailer in several different ways: it can function as a POS, a sales register, or as a stand-alone payment terminal.

**Purpose:**  
Clover Connect provides innovative payment processing solutions designed to streamline and simplify business. In Teamwork's implementation, the Clover device will be functioning only as a payment terminal.

This guide is divided into the following sections:

{{% children %}}

{{% notice warning %}}
Please be advised that when a Clover device goes into *sleep mode* its connection with POS PRO is lost and payments cannot be taken.

If this occurs, the Clover **Network Pay Display** app must be opened on the Clover device and the **Start** button tapped to reestablish the connection with POS PRO. Currently, the **Network Pay Display** app will go into *sleep mode* if nothing is done for 30 minutes. To keep the **Network Pay Display** app from going into *sleep mode* an associate must tap the screen within 30 minutes to keep the app active.

If the app loses the connection with POS PRO (for any reason) the connection can be reestablished by opening the **Network Pay Display** app on the Clover device and tapping the **Start** button, which reactivates the app, which reestablishes the connection to POS PRO.
{{% /notice %}}