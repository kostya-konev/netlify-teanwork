---
title: "How to perform gift card processing [6.41]"
date: 2022-03-03T11:28:00-05:00
draft: false
weight: 16
---

<!-- begin comment block (when active)-------------------- -->
{{% notice warning %}}
The API Reference is currently under construction and its contents should not be used until further notice.
{{% /notice %}}

- [Introduction](#Introduction)
- [Getting an access token](#GettingAnAccessToken)
- &nbsp;&nbsp;&nbsp;&nbsp;[HTTP request](#GAAT_HTTPRqst)
- &nbsp;&nbsp;&nbsp;&nbsp;[Request attributes](GAAT_RqstAttrs)
- [Response example](#ResponseExample)
- [Available requests](#AvailRqsts)
- &nbsp;&nbsp;&nbsp;&nbsp;[*Get* Request](#AR_Get)
- &nbsp;&nbsp;&nbsp;&nbsp;[*MakeTransaction* Request](#AR_MakeTrans)
- &nbsp;&nbsp;&nbsp;&nbsp;[*AuthorizeTransaction* Request](#AR_AuthTrans)
- &nbsp;&nbsp;&nbsp;&nbsp;[*CaptureTransaction* Request](#AR_CaptureTrans)
- &nbsp;&nbsp;&nbsp;&nbsp;[*DiscardTransaction* Request](#AR_DiscardTrans)

---
<!-- end comment block (when active)-------------------- -->

## Introduction {#Introduction}

The document describes how to interact with Teamwork SVS (Stored Value Services) in CHQ V6.38 or later in order to:  
- Retrieve gift card information via the [*Get*](#AR_Get) request.  
- Perform payments or recharging via the [*MakeTransaction*](#AR_MakeTrans) request.  
- Get an authorization key via the [*AuthorizeTransaction*](#AR_AuthTrans) request for further transaction capturing or discarding.  
- Capture a previously authorized gift card transaction via the [*CaptureTransaction*](#AR_CaptureTrans) request.  
- Discard a previously authorized gift card transaction via the [*DiscardTransaction*](#AR_DiscardTrans) request.

{{% notice tip %}}
A gift card transaction (payment or recharge) can be made either in one step (*MakeTransaction*) or in two steps (*AuthorizeTransaction* followed by either *CaptureTransaction* or *DiscardTransaction*).
{{% /notice %}}

All the request types mentioned above require passing an *access token*. Such a token must be obtained via a separate request.

## Getting an access token {#GettingAnAccessToken}

{{% notice warning %}}
Please note that, once generated, the access token will expire in a certain period of time. 

The information on the validity period is always available in the **expires_in** field of the response. The time span during which the token remains valid is indicated in seconds.

After that time expires, another access token must be generated and used in requests.
{{% /notice %}}

Access tokens are required for gift card transaction requests to be executed.

In order to get an access token, execute the request below. 

### HTTP request {#GAAT_HTTPRqst}

An export status request is made by supplying the following:

- Request URL: <span class="fg-brown">***\<chq-url\></span>*/auth/connect/token**  
- Request method:**POST**  
- HTTP Header(s): **Content-Type:** **application/x-www-form-urlencoded**

<span class="fg-brown">***\<chq-url\>***</span> is the URL for your copy of CHQ as supplied by Teamwork.

### Request attributes {#GAAT_RqstAttrs}

**Key** | **Value** | **Required** **/** **Optional** | **Type** | **Description** |
---- | ---- | ---- | ---- | ---- |
grant_type | client_credentials | Required | string | |
scope | giftcard-api | Required | string | |
client_id | *\<API key\>* | Required | string | An API key obtained as described in the *How To create and manage API keys* document. |
client_secret | *\<API key\>* | Required | string | An API key obtained as described in the *How To create and manage API keys* document. |

### Response example {#ResponseExample}

~~~

{
  "access_token": "eyJhbGciOiJSUzI14Q0I<...>se_srpcS_U3iiZtDoIwKpZO2_A",
  "expires_in": 3600,
  "token_type": "Bearer",
  "scope": "giftcard-api"
}

~~~

## Available requests {#AvailRqsts}

Below are the various requests which can be made for gift card processing.

### *Get* Request {#AR_Get}

This request allows for retrieving a gift card with a specified id from SVS.

{{% notice note %}}
If the card is not found, *null* is returned.

If PIN validation is requested and the PIN is not valid, then *null* is returned.
{{% /notice %}}

#### HTTP Request

- Request URL: <span class="fg-brown">***\<chq-url\>*</span>/externalapi3/giftcards/get**  
- Request method: **POST**  
- HTTP Header(s): **Authorization:** <span class="fg-brown">***\<token-type\>*** ***\<access-token\>***</span>

<span class="fg-brown">***\<chq-url\>***</span> is the URL for your copy of CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<token-type\>***</span> and  <span class="fg-brown">***\<access-token\>***</span> are obtained as described in [Getting an access token](#GettingAnAccessToken) above.

#### Request attributes

**Name** | **Required** **/** **Optional** | **Type** | **Description** | **Example** |
---- | ---- | ---- | ---- | ---- |
giftcardID | Required | string | Gift card ID (case-insensitive). | "1234-5678-9123-6789" |
pin | Optional | string | Gift card PIN. The PIN will not be validated if: (a) the field is *null*, (b) the field is omitted in the request, or (c) the gift card has no PIN. | "1234" |
timezoneOffset | Optional | double | Local timezone offset from UTC in seconds. UTC (zero offset) is assumed if omitted. | 7200 |

#### Response attributes

**Name** | **Type** | **Description** |
---- | ---- | ---- |
card | object | A gift card object (see [below](#GiftCardObject)) or *null*. |

#### Gift card object structure {#GiftCardObject}

**Name** | **Type** | **Description** | **Example** |
---- | ---- | ---- | ---- |
giftcardID | string | Gift card identifier | "1234-5678-9123-6789" |
balance | string representation of a number | Current balance | "55.45" |
customerID | string, guid | A unique identifier of a customer (always uppercase). Will be *null* if not linked to a customer. | "06E9CEF7-BBEF-4866-9B16-806BB9198789" |
contactID |  string, guid | A unique identifier of a contact (always uppercase). Will be *null* if not linked to a customer. | "E699A2E6-460D-11E7-8B14-0021CCBDFD42" |
locationID |  string, guid | A unique identifier of a location (always uppercase). Will be *null* if not linked to a customer. | "00D3E47D-E8C8-4B17-AE3B-37B1D462F64E" |
isRechargeable | boolean | Indicates if the gift card supports recharging. | true |
isExpendable | boolean | Indicates if the gift card is expendable (I.E., only one payment can be made). | false |
isTransferable | boolean | Indicates if the gift card supports balance transfer to another card. | true |
isDeactivated | boolean | Indicates if the card has been deactivated. | false |
isExpired | boolean | Indicates if the card has expired (the *validUntilTime* below is greater than now). Local time for comparison is calculated based on the TZ offset supplied in the request. | false |
isSpent | boolean | Indicates if an expendable gift card has already been used. Applicable only for expendable cards. | false |
type | string | Gift Card type. Available types are: "Purchased", "Non-purchased", or "Identity". | "Non-purchased" |
reasonCode | string | The reason why this gift card was issued. Available options are: "Registry", "Marketing", "Customer Service","Events", "Promotion", "Other", "Purchased", or "Identity". | "Promotion" |
validUntilTime | double | The gift card "expires" timestamp in local time (UNIX time, in mSec). WIll be *null* if the card doesn't expire. | 1402487812000 |
canPay | boolean | Indicates if a gift card can be used for payment (I.E. it is not deactivated, not spent (if applicable), and not expired). | true |
canRecharge | boolean | Indicates whether a gift card can be recharged (I.E. it is not deactivated, not spent, and not expired and is rechargeable). | true |
creationTime | double | Gift card creation timestamp (UNIX time, in mSec). | 1389005834000 |
modificationTime | double | Gift card's last modified timestamp (UNIX time, in mSec). | 1389005834000 |
isRefundable | boolean | Refunds can be made on this gift card. | true |

#### Possible exceptions

**Exception** | **Reason** |
---- | ---- |
AccessDenied | An attempt was made to access a non-allowed API function (I.E., a function not intended for use from an External API). |
BadAccessToken | The *\<access-token\>* in the HTTP header is invalid or malformed. |
BadInputParameters | Some required parameters are missing or have an incorrect data type. |
InsecureProtocol | **HTTP** used instead of **HTTPS**. |
InternalError | An SVS internal server error occurred. |

### *MakeTransaction* Request {#AR_MakeTrans}

This request allows for performing multiple gift card transactions (*payment* or *recharge*) in one step.

#### HTTP Request

- Request URL: <span class="fg-brown">***\<chq-url\>*</span>/externalapi3/giftcards/get**  
- Request method: **POST**  
- HTTP Header(s): **Authorization:** <span class="fg-brown">***\<token-type\>*** ***\<access-token\>***</span>

<span class="fg-brown">***\<chq-url\>***</span> is the URL for your copy of CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<token-type\>***</span> and <span class="fg-brown">***\<access-token\>***</span> are obtained as described in [Getting an access token](#GettingAnAccessToken) above.

#### Request attributes

**Name** | **Required** **/** **Optional** | **Type** | **Description** | **Example** |
---- | ---- | ---- | ---- | ---- |
giftcardID | Required | string | Gift card identifier | "1234-5678-9123-6789" |
amount | Required | string representation of a number | Payment or recharge amount | "-150.25" |
locationID | Optional | string, guid | A unique identifier of a location (always uppercase). Will be *null* if not linked to a customer. | "00D3E47D-E8C8-4B17-AE3B-37B1D462F64E" |
locationCode | Optional | string | A case-insensitive, human-readable, location code of where transaction is made. This can be used instead of *locationID*. If both *locationID* and and *locationCode* are specified, the *locationID* is used. | "S056POSA" |
pin | Optional | string | Gift card PIN. The PIN will not be validated if: (a) the field is *null*, (b) the field is omitted in the request, or (c) the gift card has no PIN. | "1234" |
isReturn | Optional | boolean | Indicates whether the transaction is a return which allows for recharging a "non-rechargeable" gift card. The default, if omitted, is false. | false |
isRefund | Optional | boolean | Indicates if the transaction is a refund which will leave an "expendable" gift card active after this transaction. If omitted, the default is false. | false |
referenceNum | Optional | string | External transaction identifier. An arbitrary string which is case-insensitive and always converted to uppercase). It will be validated for uniqueness. | "TX534646546" |
description | Optional | string | An additional description. | "Some text" |
timezoneOffset | Optional | double | Local timezone offset from UTC in seconds. UTC (zero offset) is assumed if omitted. | 7200 |
customData1 – 5 | Optional | string | These five fileds supply any additional info. | "Store_ABCD" |
webOrderNumber | Optional | string | A web order number. | "web-order-no" |

#### Response attributes

**Name** | **Type** | **Description** |
---- | ---- | ---- |
card | object | A gift card object (see [above](#GiftCardObject)]) or *null*. |

#### Possible exceptions

**Exception** | **Reason** |
---- | ---- |
UnknownGiftcard | A gift card with the specified is doesn't exist or the PIN is incorrect. |
NotEnoughBalance | The gift card balance is insufficient for the requested transaction. |
InactiveGiftcard | The gift card is deactivated or expired. |
IllegalState | An attempt was made to recharge a non-rechargeable card. |
DuplicateTransaction | A transaction with an еру specified reference number already exists. |
BadInputParameters | Some required parameters are missing or have an incorrect data type. |
InsecureProtocol | **HTTP** used instead of **HTTPS**. |
BadAccessToken | The *\<access-token\>* in the HTTP header is invalid or malformed. |
AccessDenied | An attempt was made to access a non-allowed API function (I.E., a function not intended for use from an External API). |
InternalError | An SVS internal server error occurred. |

### *AuthorizeTransaction* Request {#AR_AuthTrans}

This request allows for performing the first step of a gift card transaction (either a payment or a recharge). If successful, it returns an authorization key. The key is to be used during the second step, the capturing or discarding a transaction.

#### HTTP Request

- Request URL: <span class="fg-brown">***\<chq-url\>*</span>/externalapi3/giftcards/authorizetransaction**  
- Request method: **POST**  
- HTTP Header(s): **Authorization:** <span class="fg-brown">***\<token-type\>*** ***\<access-token\>***</span>

<span class="fg-brown">***\<chq-url\>***</span> is the URL for your copy of CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<token-type\>***</span> and <span class="fg-brown">***\<access-token\>***</span> are obtained as described in [Getting an access token](#GettingAnAccessToken) above.

#### Request attributes

**Name** | **Required** **/** **Optional** | **Type** | **Description** | **Example** |
---- | ---- | ---- | ---- | ---- |
giftcardID | Required | string | Gift card identifier | "1234-5678-9123-6789" |
amount | Required | string representation of a number | Payment or recharge amount | "-150.25" |
locationID | Optional | string, guid | A unique identifier of a location (always uppercase). Will be *null* if not linked to a customer. | "00D3E47D-E8C8-4B17-AE3B-37B1D462F64E" |
locationCode | Optional | string | A case-insensitive, human-readable, location code of where transaction is made. This can be used instead of *locationID*. If both *locationID* and and *locationCode* are specified, the *locationID* is used. | "S056POSA" |
pin | Optional | string | Gift card PIN. The PIN will not be validated if: (a) the field is *null*, (b) the field is omitted in the request, or (c) the gift card has no PIN. | "1234" |
isReturn | Optional | boolean | Indicates whether the transaction is a return which allows for recharging a "non-rechargeable" gift card. The default, if omitted, is false. | false |
isRefund | Optional | boolean | Indicates if the transaction is a refund which will leave an "expendable" gift card active after this transaction. If omitted, the default is false. | false |
referenceNum | Optional | string | External transaction identifier. An arbitrary string which is case-insensitive and always converted to uppercase). It will be validated for uniqueness. | "TX534646546" |
description | Optional | string | An additional description. | "Some text" |
timezoneOffset | Optional | double | Local timezone offset from UTC in seconds. UTC (zero offset) is assumed if omitted. | 7200 |
customData1 – 5 | Optional | string | These five fileds supply any additional info. | "Store_ABCD" |
webOrderNumber | Optional | string | A web order number. | "web-order-no" |

#### Response attributes

**Name** | **Type** | **Description** |
---- | ---- | ---- |
authorizationKey | string | Authorization key for use in the CAPTURE or DISCARD call. | "ag5kZXZ-Y2xvdWR3a3N2c3IrCxIIR2lmdENhcmQiAzEyMwwLEg1HQ1RyYW5zYWN0aW9uGICAgICAgKALDKIBB2lua19pbmM"
card | object | A gift card object (see [above](#GiftCardObject)]) or *null*. |

#### Possible exceptions

**Exception** | **Reason** |
---- | ---- |
UnknownGiftcard | A gift card with the specified is doesn't exist or the PIN is incorrect. |
NotEnoughBalance | The gift card balance is insufficient for the requested transaction. |
DuplicateTransaction | A transaction with an еру specified reference number already exists. |
InactiveGiftcard | The gift card is deactivated or expired. |
IllegalState | An attempt was made to recharge a non-rechargeable card. |
BadInputParameters | Some required parameters are missing or have an incorrect data type. |
InsecureProtocol | **HTTP** used instead of **HTTPS**. |
BadAccessToken | The *\<access-token\>* in the HTTP header is invalid or malformed. |
AccessDenied | An attempt was made to access a non-allowed API function (I.E., a function not intended for use from an External API). |
InternalError | An SVS internal server error occurred. |

### *CaptureTransaction* Request {#AR_CaptureTrans}

This request allows for capturing a previously authorized gift card transaction. Some transaction fields (like *referenceNum*, *customData*, etc.) can be overwritten by this call. This can be useful for workflows where the above field values are not available during the *Authorize* step.

#### HTTP Request

- Request URL: <span class="fg-brown">***\<chq-url\>*</span>/externalapi3/giftcards/capturetransaction**  
- Request method: **POST**  
- HTTP Header(s): **Authorization:** <span class="fg-brown">***\<token-type\>*** ***\<access-token\>***</span>

<span class="fg-brown">***\<chq-url\>***</span> is the URL for your copy of CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<token-type\>***</span> and <span class="fg-brown">***\<access-token\>***</span> are obtained as described in [Getting an access token](#GettingAnAccessToken) above.

#### Request attributes

**Name** | **Required** **/** **Optional** | **Type** | **Description** | **Example** |
---- | ---- | ---- | ---- | ---- |
referenceNum | Optional | string | External transaction identifier. An arbitrary string which is case-insensitive and always converted to uppercase). It will be validated for uniqueness. | "TX534646546" |
description | Optional | string | An additional description. | "Some text" |
timezoneOffset | Optional | double | Local timezone offset from UTC in seconds. UTC (zero offset) is assumed if omitted. | 7200 |
customData1 – 5 | Optional | string | These five fileds supply any additional info. | "Store_ABCD" |
webOrderNumber | Optional | string | A web order number. | "web-order-no" |
authorizationKey | Required | string | An authorization key as returned by the [Authorize](#AR_AuthTrans) request. | "ag5kZXZ-Y2xvdWR3a3N2<br>c3IrCxIIR2lmdENhcmQ<br>iAzEyMwwLEg1HQ1RyYW5<br>zYWN0aW9uGICAgICAgKA<br>LDKIBB2lua19pbmM" |

#### Response attributes

**Name** | **Type** | **Description** |
---- | ---- | ---- |
card | object | A gift card object (see [above](#GiftCardObject)]) or *null*. |

#### Possible exceptions

**Exception** | **Reason** |
---- | ---- |
UnknownTransaction | A transaction with the specified authorization key doesn't exist. |
DiscardedTransaction | The specified transaction is already in the "DISCARDED" state. |
CapturedTransaction | The specified transaction is already in the "CAPTURED" state
DuplicateTransaction | The specified reference number is assigned to another existing transaction. |
BadInputParameters | Some required parameters are missing or have an incorrect data type. |
InsecureProtocol | **HTTP** used instead of **HTTPS**. |
BadAccessToken | The *\<access-token\>* in the HTTP header is invalid or malformed. |
AccessDenied | An attempt was made to access a non-allowed API function (I.E., a function not intended for use from an External API). |
InternalError | An SVS internal server error occurred. |

### *DiscardTransaction* Request {#AR_DiscardTrans}

This request allows for discarding a previously authorized gift card transaction. Some transaction fields (like *referenceNum*, *customData*, etc.) can be overwritten by this call. This can be useful for workflows where the above field values are not available during the *Authorize* step.

#### HTTP Request

- Request URL: <span class="fg-brown">***\<chq-url\>*</span>/externalapi3/giftcards/discardtransaction**  
- Request method: **POST**  
- HTTP Header(s): **Authorization:** <span class="fg-brown">***\<token-type\>*** ***\<access-token\>***</span>

<span class="fg-brown">***\<chq-url\>***</span> is the URL for your copy of CHQ as supplied by Teamwork.  
<span class="fg-brown">***\<token-type\>***</span> and <span class="fg-brown">***\<access-token\>***</span> are obtained as described in [Getting an access token](#GettingAnAccessToken) above.

#### Request attributes

**Name** | **Required** **/** **Optional** | **Type** | **Description** | **Example** |
---- | ---- | ---- | ---- | ---- |
referenceNum | Optional | string | External transaction identifier. An arbitrary string which is case-insensitive and always converted to uppercase). It will be validated for uniqueness. | "TX534646546" |
description | Optional | string | An additional description. | "Some text" |
timezoneOffset | Optional | double | Local timezone offset from UTC in seconds. UTC (zero offset) is assumed if omitted. | 7200 |
customData1 – 5 | Optional | string | These five fileds supply any additional info. | "Store_ABCD" |
webOrderNumber | Optional | string | A web order number. | "web-order-no" |
authorizationKey | Required | string | An authorization key as returned by the [Authorize](#AR_AuthTrans) request. | "ag5kZXZ-Y2xvdWR3a3N2<br>c3IrCxIIR2lmdENhcmQ<br>iAzEyMwwLEg1HQ1RyYW5<br>zYWN0aW9uGICAgICAgKA<br>LDKIBB2lua19pbmM" |

#### Response attributes

**Name** | **Type** | **Description** |
---- | ---- | ---- |
card | object | A gift card object (see [above](#GiftCardObject)]) or *null*. |

#### Possible exceptions

**Exception** | **Reason** |
---- | ---- |
UnknownTransaction | A transaction with the specified authorization key doesn't exist. |
DiscardedTransaction | The specified transaction is already in the "DISCARDED" state. |
CapturedTransaction | The specified transaction is already in the "CAPTURED" state
DuplicateTransaction | The specified reference number is assigned to another existing transaction. |
BadInputParameters | Some required parameters are missing or have an incorrect data type. |
InsecureProtocol | **HTTP** used instead of **HTTPS**. |
BadAccessToken | The *\<access-token\>* in the HTTP header is invalid or malformed. |
AccessDenied | An attempt was made to access a non-allowed API function (I.E., a function not intended for use from an External API). |
InternalError | An SVS internal server error occurred. |
