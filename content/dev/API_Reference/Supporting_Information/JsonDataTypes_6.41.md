---
title: "JSON data types [6.41]"
date: 2022-02-25T06:51:00-05:00
draft: false
weight: 10
---

<!-- begin comment block (when active)-------------------- -->
{{% notice warning %}}
The API Reference is currently under construction and its contents should not be used until further notice.
{{% /notice %}}
<!-- end comment block (when active)-------------------- -->

This topic describes the codes used to identify a field's data type in descriptions of request and response formats. More than one of the codes can appear as a comma separated list.

## JSON basic data types

These are the basic data types supported by JSON. One of these codes will appear for each field.

**Data Type** | **Description** |
---- | ----|
**string** | A sequence of zero or more Unicode characters. Strings are delimited with double-quotation marks (") and support a backslash escaping syntax. |
**number**,<br>**double**  | A signed decimal (floating-point) number which may contain a fractional part and which may use exponential notation. This is a double-precision (64 bit) floating-point number. |
**single** | A subset of the **number** type which may contain a fractional part and which may use exponential notation. This is a single-precision (32 bit) floating-point number. |
**integer** | An integer number which does not allow for a fractional part. The minimum and maximum values are those which are the largest supported by JSON for integer numbers. | 
**int16**,<br>**int32**,<br>**int64** | A subset of the **integer** type. The minimum and maximum values are those which are allowed by the indicated number of bits. |  
**boolean** | Either of the values *true* or *false*. |

## Data type format indicators

These format indicators identify any special formatting requirements that a field's value must match (when importing) or will be (when exporting). Zero or one of these codes will appear for each field.

**Format Indicator** | **Description** |
---- | ----|
**datetime** | Indicates that the data value will have the format: "<i>yyyy</i><b>-</b><i>mm</i><b>-</b><i>dd</i><b>T</b><i>hh</i><b>:</b><i>mm</i><b>:</b><i>ss</i><b>.</b><i>uz</i>”.<br><br>The dynamic (user supplied) components are: *yyyy* = **y**ear (four digits), *mm* = **m**onth (two digits), *dd* = **d**ay (two digits), *hh* = **h**our (two digits), *mm* = **m**inute (two digits), *ss* = **s**econd (two digits), *u* = h**u**ndredth-second (optional, zero or more digits as needed), *z* = time **z**one (optional).<br><br>The dash (**-**), colon (<b>:</b>), and date / time (**T**)  components are literals which *must* appear where indicated.<br><br>The period component (**.**) is a literal which is required if the optional hundreth-second component (*u*) is supplied and may not be supplied otherwise.<br><br>The *z* component identifies the time zone of the datetime value. It is optional. When present, it must either be a literal **Z** (indicating that the time zone is the UTC (Coordinated Universal Time) zone) or an offset from the UTC zone in the format: <i>ohh</i><b>:</b><i>mm</i><b>:</b><i>ss</i>, with *o* being an offset direction (**+** or **-**) and *hh*, *mm*, and *ss* being the hours, minutes, and seconds of the difference between the UTC zone and the zone being used. The minute component must always be present even if 00. The seconds component (and its preceding colon separator) is optional. |
**enum** | Indicates the value of the field must be one of an enumerated list of specific values. The valid values for a given field will be listed in that field’s description. |
**guid** | The field's value is formatted as a **G**lobally **U**nique **ID**entifier which is an industry standard unique identifier value with the following format: "<i>xxxxxxxx</i><b>-</b><i>xxxx</i><b>-</b><i>xxxx</i></i><b>-</b><i>xxxx</i><b>-</b><i>xxxxxxxxxxxx</i>". Eight case-insensitive alphanumeric characters followed by a literal dash, four case-insensitive alphanumeric characters followed by a literal dash, four case-insensitive alphanumeric characters followed by a literal dash, four case-insensitive alphanumeric characters followed by a literal dash, and twelve case-insensitive alphanumeric characters. |
**time** | Indicates that the data value will have the format: "<i>hh</i><b>:</b><i>mm</i><b>:</b><i>ss</i><b>.</b><i>uz</i>”.<br><br>The dynamic (user supplied) components are: *hh* = **h**our (two digits), *mm* = **m**inute (two digits), *ss* = **s**econd (two digits), *u* = h**u**ndredth-second (optional, zero or more digits as needed), *z* = time **z**one (optional).<br><br>The colon (<b>:</b>) components are literals which *must* appear where indicated.<br><br>The period component (**.**) is a literal which is required if the optional hundreth-second component (*u*) is supplied and may not be supplied otherwise.<br><br>The *z* component identifies the time zone of the time value. It is optional. When present, it must either be a literal **Z** (indicating that the time zone is the UTC (Coordinated Universal Time) zone) or an offset from the UTC zone in the format: <i>ohh</i><b>:</b><i>mm</i><b>:</b><i>ss</i>, with *o* being an offset direction (**+** or **-**) and *hh*, *mm*, and *ss* being the hours, minutes, and seconds of the difference between the UTC zone and the zone being used. The minute component must always be present even if 00. The seconds component (and its preceding colon separator) is optional. |

## Data type limit indicators

These indicators define any limitations which a field's value must meet (when importing) or will meet (when exporting). Zero or more of these codes can appear for each field.

**Limit Indicator** | **Description** |
---- | ----|
<b>len:</b><i>x</i><br><b>len:</b><i>x</i><b>-*</b><br><b>len:</b><i>x</i><b>-</b><i>y</i> | For the **string** data type, this indicates that the length of the string must be *x* characters (<b>len:</b><i>x</i>), or must be *x* or more characters (<b>len:</b><i>x</i><b>-*</b>), or must be *x* through *y* characters, inclusive (<b>len:</b><i>x</i><b>-</b><i>y</i>). If this limit is omitted, the string length can be from zero to the maximum allowed by JSON. |
**only** | This indicates that only certain values will be programmatically allowed. The valid values for a given field will be listed in that field’s description. If this limit is omitted, any value is allowed which is valid for the data type in question and meets the **len** or **range** limits (if supplied). |
<b>occurs:</b><i>x</i><br><b>occurs:</b><i>x</i><b>-*</b><br><b>occurs:</b><i>x</i><b>-</b><i>y</i> | Indicates that the field must (when importing) or will (when exporting) occur *x* times (<b>occurs:</b><i>x</i>), or must/will occur *x* or more times (<b>occurs:</b><i>x</i><b>-*</b>), or must/will occur *x* through *y* times, inclusive (<b>occurs:</b><i>x</i><b>-</b><i>y</i>). If this limit is omitted, it indicates that the field may be omitted (if not required) or, if supplied, may occur only once. |
<b>range:</b><i>x</i><b>-*</b><br><b>range:</b><i>x</i><b>-</b><i>y</i> | For a numeric data type (**number**, **integer**, **int16**, **int32**, or **int64**), the value must be in the range of *x* to the maximum value supported by the data type (<b>range:</b><i>x</i><b>-*</b>) or must be in the range of *x* to *y*, inclusive (<b>range:</b><i>x</i><b>-</b><i>y</i>). If this element is omitted, the field’s value range is from the minimum through the maximum supported by JSON for the data type in question. |

## Special indicators

These special indicators identify special situations the field values must, or may, meet (whether importing or exporting). Zero or more of these codes can appear for each field.

**Special Indicator** | **Description** |
---- | ----|
**null** | Indicates that the value for the field can be *null*. If omitted, the field cannot be *null*.|
**xmax** *(Exclusive Maximum)* | Indicates that, when the **range** limit indicator is supplied, the maximum value shown is ***not*** valid. This will typically appear for the **number**, **double**, or **single** data types (where fractional digits could appear). For example, **range:1-10,xmax** indicates that the maximum valid value is 9.9... (that is, the single digit 9 or a 9 followed by one or more fractional digits) but, that the value *cannot* be 10. |
**xmin** *(Exclusive Minimum)* | Indicates that, when the **range** limit indicator is supplied, the minimum value shown is ***not*** valid. This will typically appear for the **number**, **double**, or **single** data types (where fractional digits could appear). For example, **range:1-10,xmin** indicates that the minimum valid value would be 1.0... (that is, the digit 1 followed by one or more fractional digits) but, that the single digit 1 *cannot* be supplied. |

{{% notice tip %}}
**xmin** and **xmax** can be both be supplied. For example, **range:1-10,xmin,xmax** indicates that the valid values are in the range 1.0... through 9.9..., but *cannot* be 1 or 10.
{{% /notice %}}
