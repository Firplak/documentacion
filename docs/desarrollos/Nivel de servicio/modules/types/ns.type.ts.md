---
title: types/ns.type.ts
nav_order: 8
parent: Modules
---

## ns.type overview

All types related to graph/month data

Added in v2.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [Types](#types)
  - [ILine (interface)](#iline-interface)
  - [Months](#months)
  - [TMonthData (type alias)](#tmonthdata-type-alias)
  - [TNSData (type alias)](#tnsdata-type-alias)
  - [TPossibleMonths (type alias)](#tpossiblemonths-type-alias)

---

# Types

## ILine (interface)

Line data from input file

**Signature**

```ts
export interface ILine {
  name: string
  result: string
  month: string
  index: number
}
```

Added in v2.0.2

## Months

All months of the year in spanish

**Signature**

```ts
export declare const Months: {
  '1': string
  '2': string
  '3': string
  '4': string
  '5': string
  '6': string
  '7': string
  '8': string
  '9': string
  '10': string
  '11': string
  '12': string
}
```

Added in v2.0.1

## TMonthData (type alias)

Monthly NS data

**Signature**

```ts
export type TMonthData = {
  lines: number
  s: number
  n: number
}
```

Added in v2.0.2

## TNSData (type alias)

All data needed for creating graphs based on months

**Signature**

```ts
export type TNSData = {
  [key in TPossibleMonths]?: TMonthData
}
```

Added in v2.0.1

## TPossibleMonths (type alias)

All possible months based on Months array

**Signature**

```ts
export type TPossibleMonths = keyof typeof Months
```

Added in v2.0.1
