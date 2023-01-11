---
title: lib/generator.ts
nav_order: 3
parent: Modules
---

## generator overview

Generators

Added in v2.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [Generators](#generators)
  - [PDFRenderer (class)](#pdfrenderer-class)
    - [generateMetrics (static method)](#generatemetrics-static-method)
    - [initialize (method)](#initialize-method)
    - [render (method)](#render-method)
    - [close (method)](#close-method)
    - [\_processed (property)](#_processed-property)
    - [\_timeouts (property)](#_timeouts-property)
- [utils](#utils)
  - [TGeneratedMetrics (type alias)](#tgeneratedmetrics-type-alias)
  - [TProcessedAssociateData (type alias)](#tprocessedassociatedata-type-alias)
  - [TTimeout (type alias)](#ttimeout-type-alias)

---

# Generators

## PDFRenderer (class)

Generator of reports. Singleton.

**Signature**

```ts
export declare class PDFRenderer {
  private constructor()
}
```

**Example**

```ts
import { PDFRenderer } from '../../src/lib/generator'
PDFRenderer.instance.render(data).then(() => console.log('Done'))
```

Added in v2.0.3

### generateMetrics (static method)

Generates metrics based on associate data

**Signature**

```ts
public static generateMetrics(v: TAssociateData): TGeneratedMetrics
```

**Example**

```ts
import { PDFRenderer } from '../../src/lib/generator'
PDFRenderer.generateRenderer([]).then((metrics) => console.log(metrics))
```

Added in v2.1.6

### initialize (method)

Initializes the renderer

**Signature**

```ts
private async initialize()
```

Added in v2.0.3

### render (method)

It renders the data of all associates in input array to PDF

**Signature**

```ts
public async render(data: TAssociateData[]): Promise<void>
```

**Example**

```ts
import { PDFRenderer } from '../../src/lib/generator'
PDFRenderer.instance.render()
```

Added in v2.0.3

### close (method)

Closes the browser

**Signature**

```ts
public async close(): Promise<void>
```

**Example**

```ts
import { PDFRenderer } from '../../src/lib/generator'
PDFRenderer.instance.close()
```

Added in v2.0.3

### \_processed (property)

Used to keep track of processed associates

**Signature**

```ts
_processed: TProcessedAssociateData[]
```

Added in v2.0.3

### \_timeouts (property)

Used to keep track of batch timeouts

**Signature**

```ts
_timeouts: TTimeout
```

Added in v2.0.3

# utils

## TGeneratedMetrics (type alias)

Return type for PDFRenderer.generateMetrics

**Signature**

```ts
export type TGeneratedMetrics = {
  ns: number[]
  table_data: Array<{
    month: string
    ns: string
    lines: number
  }>
  filtered_ns: number[]
  accumulated_ns: number
}
```

Added in v2.1.6

## TProcessedAssociateData (type alias)

PDFRenderer.render method return type

**Signature**

```ts
export type TProcessedAssociateData = {
  name: string
  file_path: string
  mail_path: string
}
```

Added in v2.1.4

## TTimeout (type alias)

Type for timeout data from PDFRenderer.render method

**Signature**

```ts
export type TTimeout = Map<string, { timeout?: NodeJS.Timeout; status: boolean }>
```

Added in v2.1.5
