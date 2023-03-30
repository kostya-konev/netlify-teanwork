---
title: "Handling the CommunicationId parameter [6.41]"
date: 2022-04-20T06:49:00-05:00
draft: false
weight: 8
---

<!-- begin comment block (when active)-------------------- -->
{{% notice warning %}}
The API Reference is currently under construction and its contents should not be used until further notice.
{{% /notice %}}
<!-- end comment block (when active)-------------------- -->

When the optional **CommunicationId** parameter is sent in a request, Teamwork will look for a previous request with the same **CommunicationId**.

If such a request is found, a hash of the current request will be computed based on the **api-type**, **source**, and **data** values. This hash will be compared with the hash of the previous request. If the hashes are equal, the status of the previous request will be returned. If the hashes are different, an error with the message *“Request with same CommunicationId already present but has different request body, source or API type”* will be returned.

If no previous request with the same **CommunicationId** is found, the current request is processed in the normal manner.