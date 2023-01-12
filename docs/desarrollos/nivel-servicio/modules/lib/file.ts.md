---
title: lib/file.ts
nav_order: 2
parent: Modules
---

## file overview

Handles file operations.

Added in v2.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [File](#file)
  - [cleanOutputDirectory](#cleanoutputdirectory)
  - [getData](#getdata)
  - [processData](#processdata)
  - [readTemplate](#readtemplate)
  - [writeFile](#writefile)

---

# File

## cleanOutputDirectory

It cleans the output directory.

**Signature**

```ts
export async function cleanOutputDirectory(): Promise<void>
```

**Example**

```ts
import { cleanOutputDirectory } from '../../src/lib/file'
cleanOutputDirectory()
```

Added in v2.0.3

## getData

Gets data from input file.

**Signature**

```ts
export async function getData(): Promise<ILine[]>
```

**Example**

```ts
import { getData } from '../../src/lib/file'
getData().then((data) => console.log(data))
```

Added in v2.0.1

## processData

Processes data from input file contents.

**Signature**

```ts
export async function processData(data: ILine[]): Promise<TAssociateData[]>
```

**Example**

```ts
import { processData } from '../../src/lib/file'
processData([]).then((data) => console.log(data))
```

Added in v2.0.2

## readTemplate

It reads the template file.

**Signature**

```ts
export async function readTemplate(type: 'ns' | 'mail'): Promise<string | undefined>
```

**Example**

```ts
import { readTemplate } from '../../src/lib/file'
readTemplate('ns').then((data) => console.log(data))
```

Added in v2.0.2

## writeFile

Writes string data to output file.

**Signature**

```ts
export async function writeFile(name: string, data: string): Promise<void>
```

**Example**

```ts
import { writeFile } from '../../src/lib/file'
writeFile('output.txt', 'Hello world!')
```

Added in v2.0.3
