---
title: facture
---
Module `src.lib.facture`
========================

```python
    import pytest
    import http.client
    import json
    from datetime import date
    from .constants import CONFIG
    import requests
    
    
    FACTURE_CREDENTIALS: str = {
        "USER": CONFIG["Facture"]["USERNAME"],
        "PASSWORD": CONFIG["Facture"]["PASSWORD"],
    }
    """str: The credentials for connection with the Facture API"""
    
    
    def getFactureJWT() -> str:
        """
        It authenticates with the Facture API and returns a JWT
    
        Returns:
                JWT (str): A JWT for connection with the Facture API
        """
    
        url = "https://api.facture.co/PLColab.Identity/Auth/Login"
    
        payload = {
            "u": FACTURE_CREDENTIALS["USER"],
            "p": FACTURE_CREDENTIALS["PASSWORD"],
            "ft": "issuer|Receiver",
        }
        headers = {"Content-Type": "application/json"}
    
        response = requests.request(
            "POST", url, json=payload, headers=headers, timeout=20)
    
        try:
            return json.loads(response.text)["accessToken"]
        except json.decoder.JSONDecodeError:
            return
    
    
    def getFactureInvoices(JWT: str) -> list:
        """
        It gets all the invoices from the Facture API that were sent today
    
        Args:
                JWT (str): A JWT for connection with the Facture API
    
        Returns:
                invoices (list): All invoices received in the current day
        """
    
        url = "https://fone-reception-inbox-pro.azurewebsites.net/PLColab.Inbox/Notification/PRINCIPAL/With/RECEIVED;ACKNOWLEDGED;RECEIVEDGOODS/WithNot/ACCEPTED;REJECTED/0b409936-666f-4a61-8efd-a9c400d9fa7f"
    
        querystring = {
            "receiverStartingDate": f"{str(date.today())}T00:00:00.000Z",
            "receiverEndingDate": f"{str(date.today())}T23:59:59.000Z",
            "pageIndex": "1",
            "pageSize": "100",
        }
    
        payload = ""
        headers = {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": f"Bearer {JWT}",
        }
    
        response = requests.request(
            "GET", url, data=payload, headers=headers, params=querystring, timeout=20
        )
    
        try:
            return json.loads(response.text)["items"]
        except json.decoder.JSONDecodeError:
            return
    
    
    def getFactureInvoiceDetails(JWT: str, invoiceLdf: str) -> dict:
        """
        Gets the details of a specific invoice in the Facture API
    
        Args:
                JWT (str): A JWT for connection with the Facture API
                invoiceLdf (str): The LDF of the invoice to get the details
    
        Returns:
                invoiceDetails (dict): The details of the invoice
        """
    
        if (invoiceLdf.split("-"))[0] == "NC":
            return
    
        conn = http.client.HTTPSConnection(
            "fone-reception-inbox-pro.azurewebsites.net")
        headers = {"Authorization": f"Bearer {JWT}"}
    
        conn.request("GET", "/PLColab.Documents/Document/Get/" +
                     invoiceLdf, "", headers)
    
        res = conn.getresponse()
        data = res.read()
    
        try:
            return json.loads(data.decode("utf-8"))
        except json.decoder.JSONDecodeError:
            return
    
    
    @pytest.fixture
    def jwt():
        """For testing purposes"""
        return getFactureJWT()
    
    
    def test_getFactureJWT(jwt):
        """For testing purposes"""
        assert type(jwt) is str
        assert len(jwt) > 0
    
    
    @pytest.fixture
    def invoices(jwt):
        """For testing purposes"""
        return getFactureInvoices(jwt)
    
    
    def test_getFactureInvoices(invoices):
        """For testing purposes"""
        assert type(invoices) is list
        assert len(invoices) > 0
    
    
    @pytest.fixture
    def invoiceDetails(jwt, invoices):
        """For testing purposes"""
        return getFactureInvoiceDetails(jwt, invoices[0]["ldf"])
    
    
    def test_getFactureInvoiceDetails(invoiceDetails):
        """For testing purposes"""
        assert type(invoiceDetails) is dict
```

Global variables
----------------

`var FACTURE_CREDENTIALS : str`

str: The credentials for connection with the Facture API

Functions
---------

`def getFactureInvoiceDetails(JWT: str, invoiceLdf: str) ‑> dict`

Gets the details of a specific invoice in the Facture API

Args
----

**`JWT`** : `str`

A JWT for connection with the Facture API

**`invoiceLdf`** : `str`

The LDF of the invoice to get the details

Returns
-------

invoiceDetails (dict): The details of the invoice

```python
    def getFactureInvoiceDetails(JWT: str, invoiceLdf: str) -> dict:
        """
        Gets the details of a specific invoice in the Facture API
    
        Args:
                JWT (str): A JWT for connection with the Facture API
                invoiceLdf (str): The LDF of the invoice to get the details
    
        Returns:
                invoiceDetails (dict): The details of the invoice
        """
    
        if (invoiceLdf.split("-"))[0] == "NC":
            return
    
        conn = http.client.HTTPSConnection(
            "fone-reception-inbox-pro.azurewebsites.net")
        headers = {"Authorization": f"Bearer {JWT}"}
    
        conn.request("GET", "/PLColab.Documents/Document/Get/" +
                     invoiceLdf, "", headers)
    
        res = conn.getresponse()
        data = res.read()
    
        try:
            return json.loads(data.decode("utf-8"))
        except json.decoder.JSONDecodeError:
            return
```

`def getFactureInvoices(JWT: str) ‑> list`

It gets all the invoices from the Facture API that were sent today

Args
----

**`JWT`** : `str`

A JWT for connection with the Facture API

Returns
-------

invoices (list): All invoices received in the current day

```python
    def getFactureInvoices(JWT: str) -> list:
        """
        It gets all the invoices from the Facture API that were sent today
    
        Args:
                JWT (str): A JWT for connection with the Facture API
    
        Returns:
                invoices (list): All invoices received in the current day
        """
    
        url = "https://fone-reception-inbox-pro.azurewebsites.net/PLColab.Inbox/Notification/PRINCIPAL/With/RECEIVED;ACKNOWLEDGED;RECEIVEDGOODS/WithNot/ACCEPTED;REJECTED/0b409936-666f-4a61-8efd-a9c400d9fa7f"
    
        querystring = {
            "receiverStartingDate": f"{str(date.today())}T00:00:00.000Z",
            "receiverEndingDate": f"{str(date.today())}T23:59:59.000Z",
            "pageIndex": "1",
            "pageSize": "100",
        }
    
        payload = ""
        headers = {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": f"Bearer {JWT}",
        }
    
        response = requests.request(
            "GET", url, data=payload, headers=headers, params=querystring, timeout=20
        )
    
        try:
            return json.loads(response.text)["items"]
        except json.decoder.JSONDecodeError:
            return
```

`def getFactureJWT() ‑> str`

It authenticates with the Facture API and returns a JWT

Returns
-------

JWT (str): A JWT for connection with the Facture API

```python
    def getFactureJWT() -> str:
        """
        It authenticates with the Facture API and returns a JWT
    
        Returns:
                JWT (str): A JWT for connection with the Facture API
        """
    
        url = "https://api.facture.co/PLColab.Identity/Auth/Login"
    
        payload = {
            "u": FACTURE_CREDENTIALS["USER"],
            "p": FACTURE_CREDENTIALS["PASSWORD"],
            "ft": "issuer|Receiver",
        }
        headers = {"Content-Type": "application/json"}
    
        response = requests.request(
            "POST", url, json=payload, headers=headers, timeout=20)
    
        try:
            return json.loads(response.text)["accessToken"]
        except json.decoder.JSONDecodeError:
            return
```

`def invoiceDetails(jwt, invoices)`

For testing purposes

```python
    @pytest.fixture
    def invoiceDetails(jwt, invoices):
        """For testing purposes"""
        return getFactureInvoiceDetails(jwt, invoices[0]["ldf"])
```

`def invoices(jwt)`

For testing purposes

```python
    @pytest.fixture
    def invoices(jwt):
        """For testing purposes"""
        return getFactureInvoices(jwt)
```

`def jwt()`

For testing purposes

```python
    @pytest.fixture
    def jwt():
        """For testing purposes"""
        return getFactureJWT()
```

`def test_getFactureInvoiceDetails(invoiceDetails)`

For testing purposes

```python
    def test_getFactureInvoiceDetails(invoiceDetails):
        """For testing purposes"""
        assert type(invoiceDetails) is dict
```

`def test_getFactureInvoices(invoices)`

For testing purposes

```python
    def test_getFactureInvoices(invoices):
        """For testing purposes"""
        assert type(invoices) is list
        assert len(invoices) > 0
```

`def test_getFactureJWT(jwt)`

For testing purposes

```python
    def test_getFactureJWT(jwt):
        """For testing purposes"""
        assert type(jwt) is str
        assert len(jwt) > 0
```

Index
=====

*   ### Super-module
    
    *   [src.lib](.. "src.lib")
*   ### [Global variables](#header-variables)
    
    *   [FACTURE_CREDENTIALS](#src.lib.facture.FACTURE_CREDENTIALS "src.lib.facture.FACTURE_CREDENTIALS")
*   ### [Functions](#header-functions)
    
    *   [getFactureInvoiceDetails](#src.lib.facture.getFactureInvoiceDetails "src.lib.facture.getFactureInvoiceDetails")
    *   [getFactureInvoices](#src.lib.facture.getFactureInvoices "src.lib.facture.getFactureInvoices")
    *   [getFactureJWT](#src.lib.facture.getFactureJWT "src.lib.facture.getFactureJWT")
    *   [invoiceDetails](#src.lib.facture.invoiceDetails "src.lib.facture.invoiceDetails")
    *   [invoices](#src.lib.facture.invoices "src.lib.facture.invoices")
    *   [jwt](#src.lib.facture.jwt "src.lib.facture.jwt")
    *   [test_getFactureInvoiceDetails](#src.lib.facture.test_getFactureInvoiceDetails "src.lib.facture.test_getFactureInvoiceDetails")
    *   [test_getFactureInvoices](#src.lib.facture.test_getFactureInvoices "src.lib.facture.test_getFactureInvoices")
    *   [test_getFactureJWT](#src.lib.facture.test_getFactureJWT "src.lib.facture.test_getFactureJWT")

Generated by [pdoc 0.10.0](https://pdoc3.github.io/pdoc "pdoc: Python API documentation generator").