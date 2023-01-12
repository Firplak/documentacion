---
title: lib/utils.ts
nav_order: 6
parent: Modules
---

## utils overview

All utility functions

Added in v2.0.3

---

<h2 class="text-delta">Table of contents</h2>

- [Utils](#utils)
  - [sleep](#sleep)

---

# Utils

## sleep

Sleeps for the specified number of milliseconds.

**Signature**

```ts
export declare const sleep: (ms: number) => Promise<void>
```

**Example**

```ts
import { sleep } from '../../src/lib/utils'
sleep(1000)
```

Added in v2.0.3
