---
title: "Payments-As-A-Service"
date: 2023-03-10T12:38:00-05:00
draft: false
weight: 1
---

Clover offers developers several different ways to integrate. As a full featured POS application, Teamwork only utilizes Clover’s payment features. Clover refers to this “Semi-Integration” approach as a “Payments-as-a-Service” integration. This is found in the “Semi-Integrate with Clover Devices” portion of the Clover documentation.

Links to the related portions of the Clover Documentation are:  
* [Clover Development Basics (for semi-integrations)](https://docs.clover.com/docs/clover-development-basics-semi) 
* [Payments-As-A-Service integration options](https://docs.clover.com/docs/paas-integration-options)

Other sections of the Clover documentation such as “Build with Android,” “Build with Rest API,” and “Build with E-Commerce API” will not be used in this implementation and are not relevant.

#### CloverConnector

Clover offers two “Payments-as-a-Service” integration options:

1.	The Native Integration option which uses the *PaymentConnector* interface. This option is used by Android-based Clover apps running on Clover hardware. <span class="ltgray-on-red">**Teamwork does not use this option.**</span>  
2. The Semi-Integration option which uses the *CloverConnector* interface, available as an SDK for iOS. <span class="ltgray-on-green">**This is the option Teamwork uses.**</span>

Links to the related portions of the Clover documentation are:  
* [Using CloverConnector](https://docs.clover.com/docs/using-clover-connector)
* [On iOS](https://docs.clover.com/docs/ios)

#### Network Pay Display app

When using a Clover device as a payment terminal, the retailer will need to run the Clover **Network Pay Display** app on the Clover device. The **Network Pay Display** app listens to payment requests from the *CloverConnector* (within POS Pro), presents a UI (user interface) to the customer, and eventually returns the payment response information to POS Pro.

Clover offers three different **Network Pay Display** apps, each supporting a particular type of connection:  
1. **Cloud Pay Display – POS** connects to Clover via a Clover-hosted cloud service. <span class="ltgray-on-red">**Teamwork does not use this option.**</span>  
2. **USB Pay Display – POS** connects to Clover via USB. <span class="ltgray-on-red">**This option is not supported in the iOS SDK and will not be used.**</span>  
3. **Secure Network Pay Display – POS** connects to Clover via a LAN (Local Area Network). <span class="ltgray-on-green">**This is the option Teamwork will use.** </span>

The link to the related portion of the Clover documentation is:  
* [Network Pay Display apps](https://docs.clover.com/docs/pay-display-apps)
