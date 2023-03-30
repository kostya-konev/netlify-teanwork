---
title: "How to use the Sales Receipt import API [6.41]"
date: 2022-03-07T06:04:00-05:00
draft: false
weight: 21
---

<!-- begin comment block (when active)-------------------- -->
{{% notice warning %}}
The API Reference is currently under construction and its contents should not be used until further notice.
{{% /notice %}}

- [General](#General)  
- [Location](#Location)  
- [Items](#Items)  
- [Held or Complete](#HeldOrComplete)  
- [Importing the simplest Held Sales Receipt](#ImportSimplestHeldSales)  
- [Payments](#Payments)  
- [Customer](#Customer)  
- [Other examples](#OtherExamples)  
- &nbsp;&nbsp;&nbsp;&nbsp;[Extended credit card data](#ExtCCData)  
- &nbsp;&nbsp;&nbsp;&nbsp;[Item (Line) discount](#ItemDiscount)  
- &nbsp;&nbsp;&nbsp;&nbsp;[Global discount](#GlobalDiscount)  
- &nbsp;&nbsp;&nbsp;&nbsp;[Extended customer data](#ExtCustData)  
- &nbsp;&nbsp;&nbsp;&nbsp;[Receipt with simplified tax details](#SimplifiedTaxDtls)  
- &nbsp;&nbsp;&nbsp;&nbsp;[Receipt with extended tax details](#ExtTaxDtls)  
- &nbsp;&nbsp;&nbsp;&nbsp;[Specifying a receipt id](#SpecifyingReceiptId)  

---
<!-- end comment block (when active)-------------------- -->

## General {#General}

The *Sales Receipt Import API* can be used for two purposes:  
1. Importing completed sales transactions (*Completed Sales Receipts*)  
2. Importing *Held Sales Receipts* (*Open Carts*)

*Completed Sales Receipts* can be imported for reporting purposes and/or potential future returns against those receipts.

*Held Sales Receipts* can be imported so that they can later be accessed in POS to be modified, to have payments taken, and to be completed. 

Both puposes have a similar JSON structure with the only difference being that the *Complete Sales Receipt* transaction ***requires*** the **Payments** parameter while the *Held Sales Receipt* ***can't*** have a **Payments** parameter.

This document walks through the basics of the *Sales Receipt Import* process. The examples below provide descriptions of most common fields that are used in such an import. 

The full set of fields available for a *Sales Receipt Import* transaction is much larger than that shown in the examples below, and Teamwork recommends that the *Sales Receipt Import API* document be read to see a full list of the fields and their types which are available for a sales recipt import request.

## Location {#Location}

Each sales receipt has to be associated with particular *location* (store) where the receipt was created. Therefore, for *any* sales receipt that is imported, the receipt's location ***must be*** specified by providing the **LocationID** field. 

In the **Settings** group in the API, the id type to be used to identify a location needs to be specified. Valid types are "Id" (the Teamwork Id) or "Code". If omitted, "Id" is the default.

~~~

	"Settings":{
		"LocationSetting": "Id"
	},
or
	"Settings":{
		"LocationSetting": "Code"
	},

~~~

After the **LocationSetting** is set as desired, all references to a location would be expected to be provided in the selected format. This includes the required field **LocationID**. 

~~~

"LocationId": "513"

~~~

## Items {#Items}

*Items* are an essential part of any sales receipt transaction.

{{% notice note %}}
While ***essential***, items are ***not required***. It is possible to create a sales receipt without items, if needed (for example, for putting money on *deposit* or a *store credit*).
{{% /notice %}}

Item information is supplied in the **Items** group of a *Sales Receipt* API. There are two required fields that must be specified for each Item:  
- **ItemIdentifier** is an identifier of a particular inventory item  
- **Qty** is the quantity of the item on the sales receipt

~~~

"Items":[
	{
		"ItemIdentifier": "859553005525",
		"Qty": 1
	}
]

~~~

An item identifier can be one of the following:  
- A Teamwork Id (a GUID)  
- A PLU (Product Lookup Number)  
- A UPC (Universal Product Code)  
- An External Id (an id used when interacting with an external system)

In the **Settings** group you must specify which type is being used to identify items in the current API call:

~~~

"Settings":{
	"ItemSetting": "Id",
}

or

"Settings":{
	"ItemSetting": "Plu",
}

or

"Settings":{
	"ItemSetting": "Upc",
}

or

"Settings":{
	"ItemSetting": "ExternalID",
}

~~~

In the above example the *Item Price* and *Tax* have not been set. This means that Teamwork would use the **Price Engine** to calculate the price for the item and the **Tax Engine** to calculate the tax. Such a scenario only makes sense in the case of an *Open Cart* being imported (that is, that no payment had been made yet by the customer and the external system does not control the price).

In case an external system wants to control the price of item (but still wants Teamwork to calculate the taxes), this can be specified in the JSON as follows:  
- The **TotalAmount** field should be set to the total amount for the item (for the full **Qty**)
- The **TotalIncludeTax** flag should specify whether the **TotalAmount** includes taxes

~~~

"Items":[
	{
		"ItemIdentifier": "859553005525",
		"Qty": 1,
		"TotalAmount": 169.85,
		"TotalIncludeTax": true
	}
]

~~~

## Held or Complete {#HeldOrComplete}

As stated above, the *Sales Receipt Import API* can be used to import *Completed Sales Receipts* or *Held Sales Receipts* (*Open Carts*).

The type of document being imported is indicated using the **IsHeld** field. If the field is set to *true*, it means that a *Held Sales Receipt* is being imported:

~~~

"IsHeld": true

~~~

If the field is set to *false* or is omitted, it means that a *Completed Sales Receipt* is being imported:

~~~

"IsHeld": false

~~~

## Importing the simplest *Held Sales Receipt* {#ImportSimplestHeldSales}

Once Teamwork has a location and items, there is enough data to import the simplest *Held Sales Receipt*:

~~~

{
	"Source": "integrator",
	"Data": {
		"Request": {
			"Settings":{
				"ItemSetting": "Upc",
				"LocationSetting": "Code"
			},
			"Receipts": [
				{
					"IsHeld": true,
					"LocationId": "TEST",
					"Items":[
						{
							"ItemIdentifier": "859553005525",
							"Qty": 1,
							"TotalAmount": 169.85,
							"TotalIncludeTax": true
						}
					]
				}
			]
		}
	}
}

~~~

This request would successfully be imported into Teamwork and would create a *Held Sales Receipt* with one Item for 169.85. 

While this information is enough for importing a minimum *Held Sales Receipt*, for the simplest *Completed Sales Receipt* one more piece of data would need to be supplied: *Payments*.

## Payments {#Payments}

Payments are supplied in the **Payments** group of a *Sales Receipt Import* API. There are two required fields that have to be specified for each payment: the **PaymentMethodId** and the **PaymentAmount**.

~~~

"Payments":[
	{
		"PaymentMethodId":"CASH",
		"PaymentAmount": 169.85,
	}
]

~~~

This request would be successfully imported into Teamwork and would create a *Completed Sales Receipt* with one item for 169.85 balanced by a cash payment.

## Customer {#Customer}

All receipts created so far were not linked to a customer. However, a Customer can be specified on a *Sales Receipt* during an import request.

In order to do that, customer information needs to be provided in the *Sales Receipt* JSON. The minimum data needed to be provided is the *customer id* or *membership code*.

A customer identifier can be one of the following:  
- A Teamwork Id (a GUID, the default)  
- A Customer Number (human readable number assigned by Teamwork)  
- An Email Address  
- A Phone Number

In the **Settings** group you must specify which type is being used to identify customers in the current API call:

~~~

"Settings":{
	"CustomerSetting":"Id"
}

or

"Settings":{
	"CustomerSetting":"No"
}

or

"Settings":{
	"CustomerSetting":"Email"
}

or

"Settings":{
	"CustomerSetting":"Phone"
}

~~~

Below is an example of a *Sales Receipt Import* JSON which includes customer data:

~~~

{
	"Source": "integrator",
	"Data": {
		"Request": {
			"Settings":{
				"ItemSetting":"Upc",
				"LocationSetting":"Code",
				"CustomerSetting":"Email",
				"PaymentMethodSetting":"Code"
			},
			"Receipts": [
				{
					"LocationId": "TEST",
					"Customer":{
						"CustomerId":"test@test.com"
					},
					"Items":[
						{
							"ItemIdentifier": "859553005525",
							"Qty": 1,
							"TotalAmount": 169.85,
							"TotalIncludeTax": true
						}
					],
					"Payments":[
						{
							"PaymentMethodId": "CASH",
							"PaymentAmount":169.85
						}
					]
				}
			]
		}
	}
}

~~~

*Membership Code* does not support additional settings. The customer is searched for by *membership code* if it is specified and a new customer is created with additional information which you can specify as well.

Below is an example of a *Sales Receipt Import* JSON which includes customer membership code data:

~~~

{
	"Source": "integrator",
	"Data": {
		"Request": {
			"Settings":{
				"ItemSetting":"Upc",
				"LocationSetting":"Code",
				"CustomerSetting":"Email",
				"PaymentMethodSetting":"Code"
			},
			"Receipts": [
				{
					"LocationId": "TEST",
					"Customer":{
						"MembershipCode":"10000145590",
						"BillInfo": {
							"LastName": "Test",
							"FirstName": "Receipt",
							"Address1": "Test Address1",
							"Address2": "Test Address 2",
							"City": "London",
							"PostalCode": "W2 5LF",
							"CountryCode": "GB",
							"Email": "Receipt@test.com"
						},
						"ShipInfo": {
							"LastName": "Test",
							"FirstName": "Receipt",
							"Address1": "Test Address1",
							"Address2": "Test Address 2",
							"City": "London",
							"PostalCode": "W2 5LF",
							"CountryCode": "GB",
							"Email": "Receipt@test.com"
						}
					},
					"Items":[
						{
							"ItemIdentifier": "859553005525",
							"Qty": 1,
							"TotalAmount": 169.85,
							"TotalIncludeTax": true
						}
					],
					"Payments":[
						{
							"PaymentMethodId": "CASH",
							"PaymentAmount":169.85
						}
					]
				}
			]
		}
	}
}

~~~

## Other examples {#OtherExamples}

### Extended credit card data {#ExtCCData}

New fields introduced:  
- **ListOrder** indicates the field on which payments will be sorted when displayed in the Teamwork UI.  
- **Captured** indicates whether the payment has been captured or authorized.

~~~

{
	"Source": "integrator",
	"Data": {
		"Request": {
			"Settings":{
				"ItemSetting":"Upc",
				"LocationSetting":"Code",
				"CustomerSetting":"Email",
				"PaymentMethodSetting":"Code"
			},
			"Receipts": [
				{
					"LocationId": "TEST",
					"Customer":{
						"CustomerId":"test@test.com"
					},
					"Items":[
						{
							"ItemIdentifier": "5370",
							"Qty": 1,
							"TotalAmount": 169.85,
							"TotalIncludeTax": true
						}
					],
					"Payments": [
						{
							"PaymentMethodId": "MWCC",
							"PaymentAmount": 169.85,
							"ListOrder": 0,
							"Captured": true,
							"CardInfo": {
								"AccountNumber": "",
								"CardExpMonth": 2,
								"CardExpYear": 2030,
								"MerchantId": "",
								"CardOrderId": "card_AAAAz4Kn91M3jkFq22JESlHh",
								"ReferenceNum": "",
								"TransactionId": "5840888888",
								"CardType": "Visa",
								"CardholderCountryCode": "US"
							}
						}
					]
				}
			]
		}
	}
}

~~~

### Item (Line) discount {#ItemDiscount}

{{% notice warning %}}
Please note, that if the **LineDiscountCouponValue** is not equal to **0**, the **LineDiscountCouponNumber** field is ***required***.
{{% /notice %}}

~~~

{
	"Source": "integrator",
	"Data": {
		"Request": {
			"Settings":{
				"ItemSetting":"Plu",
				"LocationSetting":"Code",
				"DiscountReasonSetting":"Code",
				"CustomerSetting":"No",
				"PaymentMethodSetting":"Code"
			},
			"Receipts": [
				{
					"LocationId": "801",
					"Items":[
						{
							"ItemIdentifier": "11996",
							"Qty": 1,
							"TotalAmount": 57.0000,
							"TotalIncludeTax": true,
							"LineDiscountReason": {
                				"LineDiscountReasonId": "string",
                				"LineDiscountAmount": 0,
                				"LineDiscountCouponNumber": "string",
               					"LineDiscountCouponType": "Percent",
              					"LineDiscountCouponValue": 0
									              }	
						}
					],
					"Payments": [
						{
							"PaymentMethodId": "MWCC",
							"PaymentAmount": 57.0000,
							"ListOrder": 1,
							"Captured": true,
							"CardInfo": {
								"AccountNumber": "",
								"CardExpMonth": 2,
								"CardExpYear": 2030,
								"MerchantId": "",
								"CardOrderId": "card_AAAAz4Kn91M3jkFq22JESlHh",
								"ReferenceNum": "",
								"TransactionId": "5840888888",
								"CardType": "Visa",
								"CardholderCountryCode": "US"
							}
						}
					]
				}
			]
		}
	}
}

~~~

### Global discount {#GlobalDiscount}

~~~

{
	"Source": "integrator",
	"Data": {
		"Request": {
			"Settings":{
				"ItemSetting":"Plu",
				"LocationSetting":"Code",
				"DiscountReasonSetting":"Code",
				"CustomerSetting":"No",
				"PaymentMethodSetting":"Code"
			},
			"Receipts": [
				{
					"LocationId": "801",
					"GlobalDiscountReason":{
						"GlobalDiscountReasonId":"MGR",
						"GlobalDiscountAmount":5.0000
					}
					"Items":[
						{
							"ItemIdentifier": "11996",
							"Qty": 1,
							"TotalAmount": 57.0000,
							"TotalIncludeTax": true
						}
					],
					"Payments": [
						{
							"PaymentMethodId": "MWCC",
							"PaymentAmount": 57.0000,
							"ListOrder": 1,
							"Captured": true,
							"CardInfo": {
								"AccountNumber": "",
								"CardExpMonth": 2,
								"CardExpYear": 2030,
								"MerchantId": "",
								"CardOrderId": "card_AAAAz4Kn91M3jkFq22JESlHh",
								"ReferenceNum": "",
								"TransactionId": "5840888888",
								"CardType": "Visa",
								"CardholderCountryCode": "US"
							}
						}
					]
				}
			]
		}
	}
}

~~~

### Extended customer data {#ExtCustData}

~~~

{
	"Source": "integrator",
	"Data": {
		"Request": {
			"Settings": {
				"ItemSetting": "Plu",
				"LocationSetting": "Code",
				"PaymentMethodSetting": "Code",
				"CustomerSetting": "No"
			},
			"Receipts": [
				{
					"LocationId": "801",
					"Customer": {
						"CustomerId": "2086",
						"BillInfo": {
							"LastName": "test",
							"FirstName": "test",
							"MiddleName": "",
							"Address1": "test",
							"City": "new york",
							"State": "New York",
							"PostalCode": "17777",
							"CountryCode": "US",
							"Organization": "",
							"Phone1": "777777",
							"Phone2": "",
							"Phone3": "",
							"Phone4": "",
							"Gender": "None",
							"Email": "test@test.com",
							"WholesaleCustomer": false,
							"TradingPartner": false
						},
						"SellInfo": {
							"LastName": "test",
							"FirstName": "test",
							"MiddleName": "",
							"Address1": "test",
							"City": "new york",
							"State": "New York",
							"PostalCode": "17777",
							"CountryCode": "US",
							"Organization": "",
							"Phone1": "777777",
							"Phone2": "",
							"Phone3": "",
							"Phone4": "",
							"Gender": "None",
							"Email": "test@test.com",
							"WholesaleCustomer": false,
							"TradingPartner": false
						},
						"ShipInfo": {
							"LastName": "test",
							"FirstName": "test",
							"MiddleName": "",
							"Address1": "test",
							"City": "new york",
							"State": "New York",
							"PostalCode": "17777",
							"CountryCode": "US",
							"Organization": "",
							"Phone1": "777777",
							"Phone2": "",
							"Phone3": "",
							"Phone4": "",
							"Gender": "None",
							"Email": "test@test.com",
							"WholesaleCustomer": false,
							"TradingPartner": false
						}
					},
					"Items": [
						{
							"ItemIdentifier": "11996",
							"Qty": 1.0,
							"TotalAmount": 57.0000,
							"TotalIncludeTax": true
						}
					],
					"Payments": [
						{
							"PaymentMethodId": "MWCC",
							"PaymentAmount": 57.0000,
							"ListOrder": 1,
							"Captured": true,
							"CardInfo": {
								"AccountNumber": "",
								"CardExpMonth": 2,
								"CardExpYear": 2030,
								"MerchantId": "",
								"CardOrderId": "card_AAAAz4Kn91M3jkFq22JESlHh",
								"ReferenceNum": "",
								"TransactionId": "5888888888",
								"CardType": "Visa",
								"CardholderCountryCode": "US"
							}
						}
					]
				}
			]
		}
	}
}

~~~

### Receipt with simplified tax details {#SimplifiedTaxDtls}

~~~

{
	"Source": "integrator",
	"Data": {
		"Request": {
			"Settings":{
				"ItemSetting": "Plu",
				"LocationSetting": "Code",
				"TaxZoneSetting": "Code",
				"TaxCategorySetting": "Code",
				"TaxJurisdictionSetting": "Code",
				"PaymentMethodSetting": "Code"
			},
			"Receipts": [
				{
					"LocationId": "AIGNATENKO",
					"Items":[
						{
							"ReceiptItemId": "cfcba8c9-3a09-4dc1-8b6c-9360a52e07c1",
							"ItemIdentifier": "12034",
							"IsDropShipment": false,
							"TrackingNumber": null,
							"ShipMethodId": null,
							"Qty": 3.00000000000000000000,
							"TotalAmount": 97.9900,
							"TaxAmount": 7.9900,
							"TotalIncludeTax": true
						},
						{
							"ReceiptItemId": "be8a5df9-c43b-4402-9016-0b91724205c2",
							"ItemIdentifier": "12035",
							"IsDropShipment": false,
							"TrackingNumber": null,
							"ShipMethodId": null,
							"Qty": 2.00000000000000000000,
							"TotalAmount": 65.3200,
							"TaxAmount": 5.3200,
							"TotalIncludeTax": true,
							"TaxCategoryId": "RETAIL"
						}
					],
					"Payments":[
						{
							"PaymentMethodId": "CASH",
							"PaymentAmount": 163.3100,
							"ListOrder": 0,
							"Captured": true
						}
					]
				}
			]
		}
	}
}

~~~

### Receipt with extended tax details {#ExtTaxDtls}

~~~

{
	"Source": "integrator",
	"Data": {
		"Request": {
			"Settings":{
				"ItemSetting": "Plu",
				"LocationSetting": "Code",
				"TaxZoneSetting": "Code",
				"TaxCategorySetting": "Code",
				"TaxJurisdictionSetting": "Code",
				"PaymentMethodSetting": "Code"
			},
			"Receipts": [
				{
					"LocationId": "AIGNATENKO",
					"Items":[
						{
							"ReceiptItemId": "cfcba8c9-3a09-4dc1-8b6c-9360a52e07c0",
							"ItemIdentifier": "12034",
							"IsDropShipment": false,
							"TrackingNumber": null,
							"ShipMethodId": null,
							"Qty": 3.00000000000000000000,
							"TotalAmount": 97.9900,
							"TaxAmount": 7.9900,
x							"TotalIncludeTax": true,
							"Taxes": [
								{
									"TaxAmount": 4.3900,
									"DestTaxZoneId": "NYC",
									"SourceTaxZoneId": "NYC",
									"TaxCategoryId": "RETAIL",
									"TaxJurisdictionId": "NYST"
								},
								{
									"TaxAmount": 3.6000,
									"DestTaxZoneId": "NYC",
									"SourceTaxZoneId": "NYC",
									"TaxCategoryId": "RETAIL",
									"TaxJurisdictionId": "NYC"
								}
							]
						},
						{
							"ReceiptItemId": "cfcba8c9-3a09-4dc1-8b6c-9360a52e07c0",
							"ItemIdentifier": "12035",
							"IsDropShipment": false,
							"TrackingNumber": null,
							"ShipMethodId": null,
							"Qty": 2.00000000000000000000,
							"TotalAmount": 65.3200,
							"TaxAmount": 5.3200,
							"TotalIncludeTax": true,
							"TaxCategoryId": "RETAIL",
							"Taxes": [
								{
									"TaxAmount": 2.9200,
									"DestTaxZoneId": "NYC",
									"SourceTaxZoneId": "NYC",
									"TaxCategoryId": "RETAIL",
									"TaxJurisdictionId": "NYST"
								},
								{
									"TaxAmount": 2.4000,
									"DestTaxZoneId": "NYC",
									"SourceTaxZoneId": "NYC",
									"TaxCategoryId": "RETAIL",
									"TaxJurisdictionId": "NYC"
								}
							]
						}
					],
					"Payments":[
						{
							"PaymentMethodId": "CASH",
							"PaymentAmount": 163.3100,
							"ListOrder": 0,
							"Captured": true
						}
					]
				}
			]
		}
	}
}

~~~

### Specifying a receipt id {#SpecifyingReceiptId}

In the case where a *held receipt* needs to be modified by an external system, the **ReceiptID** field can be used. 

The external system can generate a **ReceiptID** (which is a [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)) and provide it as part of the request. Later, if a document provides with same GUID, the previous document would be modified and a new version saved. <span class="ir">***???????? Should this be reversed? The 'previous' document saved and a 'new' document created based on the 'previous' document along with the new info? Am I thinking of this backwards? In any case, I think this could be expressed more clearly. ????????***</span>

~~~

{
	"Source": "integrator",
	"Data": {
		"Request": {
			"Settings":{
				"ItemSetting": "Upc",
				"LocationSetting": "Code"
			},
			"Receipts": [
				{
					"ReceiptId": "feac47eb-4586-434f-b5b1-8ea7e69ca538",
					"IsHeld": true,
					"LocationId": "TEST",
					"Items":[
						{
							"ItemIdentifier": "859553005525",
							"Qty": 1,
							"TotalAmount": 169.85,
							"TotalIncludeTax": false
						}
					]
				}
			]
		}
	}
}

~~~