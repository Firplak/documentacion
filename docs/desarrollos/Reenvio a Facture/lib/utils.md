---
title: utils
---

Module `src.lib.utils`
======================


```python
    import pytest
    import requests
    
    from .constants import PROCESSED_FILE
    
    
    def registerProcessed(itemLdf: str) -> None:
        """
        It registers the LDF of the item in PROCESSED_FILE
    
        Args:
            itemLdf (str): The LDF of the item
        """
    
        with open(PROCESSED_FILE, "a", encoding="utf-8") as file:
            file.write(f"{itemLdf}\n")
    
    
    def getProcessed() -> list:
        """
        It gets all the registered LDFs
    
        Returns:
            processedLdfs (list): A list with all processed Ldfs
        """
    
        with open(PROCESSED_FILE, "r", encoding="utf-8") as file:
            return file.read().split("\n")
    
    
    def getUrlAsBlob(url: str) -> bytes:
        """
        Gets the content of a URL as a blob
    
        Args:
            url (str): The url where the content is
    
        Returns:
            content (bytes): The content of the URL
        """
    
        headers = {"Content-Type": "application/json"}
        response = requests.request("GET", url, headers=headers, timeout=20)
        return response.content
    
    
    @pytest.fixture
    def google_content():
        """For testing purposes"""
    
        return getUrlAsBlob("https://www.google.com")
    
    
    def test_getUrlAsBlob(google_content):
        """For testing purposes"""
    
        assert type(google_content) is bytes
    
    
    @pytest.fixture
    def processed():
        """For testing purposes"""
    
        return getProcessed()
    
    
    @pytest.fixture
    def processed_after_modification():
        """For testing purposes"""
    
        registerProcessed("test1")
        return getProcessed()
    
    
    @pytest.fixture
    def processed_after_second_modification():
        """For testing purposes"""
    
        registerProcessed("test2")
        return getProcessed()
    
    
    def test_getProcessed(processed, processed_after_modification):
        """For testing purposes"""
    
        assert type(processed) is list
        assert "test1" in processed_after_modification
    
    
    def test_registerProcessed(processed_after_second_modification):
        """For testing purposes"""
    
        assert "test2" in processed_after_second_modification
```

Functions
---------

`def getProcessed() ‑> list`

It gets all the registered LDFs

Returns
-------

processedLdfs (list): A list with all processed Ldfs

```python
    def getProcessed() -> list:
        """
        It gets all the registered LDFs
    
        Returns:
            processedLdfs (list): A list with all processed Ldfs
        """
    
        with open(PROCESSED_FILE, "r", encoding="utf-8") as file:
            return file.read().split("\n")
```

`def getUrlAsBlob(url: str) ‑> bytes`

Gets the content of a URL as a blob

Args
----

**`url`** : `str`

The url where the content is

Returns
-------

content (bytes): The content of the URL

```python
    def getUrlAsBlob(url: str) -> bytes:
        """
        Gets the content of a URL as a blob
    
        Args:
            url (str): The url where the content is
    
        Returns:
            content (bytes): The content of the URL
        """
    
        headers = {"Content-Type": "application/json"}
        response = requests.request("GET", url, headers=headers, timeout=20)
        return response.content
```

`def google_content()`

For testing purposes

```python
    @pytest.fixture
    def google_content():
        """For testing purposes"""
    
        return getUrlAsBlob("https://www.google.com")
```

`def processed()`

For testing purposes

```python
    @pytest.fixture
    def processed():
        """For testing purposes"""
    
        return getProcessed()
```

`def processed_after_modification()`

For testing purposes

```python
    @pytest.fixture
    def processed_after_modification():
        """For testing purposes"""
    
        registerProcessed("test1")
        return getProcessed()
```

`def processed_after_second_modification()`

For testing purposes

```python
    @pytest.fixture
    def processed_after_second_modification():
        """For testing purposes"""
    
        registerProcessed("test2")
        return getProcessed()
```

`def registerProcessed(itemLdf: str) ‑> None`

It registers the LDF of the item in PROCESSED\_FILE

Args
----

**`itemLdf`** : `str`

The LDF of the item

```python
    def registerProcessed(itemLdf: str) -> None:
        """
        It registers the LDF of the item in PROCESSED_FILE
    
        Args:
            itemLdf (str): The LDF of the item
        """
    
        with open(PROCESSED_FILE, "a", encoding="utf-8") as file:
            file.write(f"{itemLdf}\n")
```

`def test_getProcessed(processed, processed_after_modification)`

For testing purposes

```python
    def test_getProcessed(processed, processed_after_modification):
        """For testing purposes"""
    
        assert type(processed) is list
        assert "test1" in processed_after_modification
```

`def test_getUrlAsBlob(google_content)`

For testing purposes

```python
    def test_getUrlAsBlob(google_content):
        """For testing purposes"""
    
        assert type(google_content) is bytes
```

`def test_registerProcessed(processed_after_second_modification)`

For testing purposes

```python
    def test_registerProcessed(processed_after_second_modification):
        """For testing purposes"""
    
        assert "test2" in processed_after_second_modification
```

Index
=====

*   ### Super-module
    
    *   [src.lib](index.html "src.lib")
*   ### [Functions](#header-functions)
    
    *   [getProcessed](#src.lib.utils.getProcessed "src.lib.utils.getProcessed")
    *   [getUrlAsBlob](#src.lib.utils.getUrlAsBlob "src.lib.utils.getUrlAsBlob")
    *   [google_content](#src.lib.utils.google_content "src.lib.utils.google_content")
    *   [processed](#src.lib.utils.processed "src.lib.utils.processed")
    *   [processed_after_modification](#src.lib.utils.processed_after_modification "src.lib.utils.processed_after_modification")
    *   [processed_after_second_modification](#src.lib.utils.processed_after_second_modification "src.lib.utils.processed_after_second_modification")
    *   [registerProcessed](#src.lib.utils.registerProcessed "src.lib.utils.registerProcessed")
    *   [test_getProcessed](#src.lib.utils.test_getProcessed "src.lib.utils.test_getProcessed")
    *   [test_getUrlAsBlob](#src.lib.utils.test_getUrlAsBlob "src.lib.utils.test_getUrlAsBlob")
    *   [test_registerProcessed](#src.lib.utils.test_registerProcessed "src.lib.utils.test_registerProcessed")

Generated by [pdoc 0.10.0](https://pdoc3.github.io/pdoc "pdoc: Python API documentation generator").