---
title: lib/logger.ts
nav_order: 4
parent: Modules
---

## logger overview

Everything related to logging

Added in v2.1.7

---

<h2 class="text-delta">Table of contents</h2>

- [Logger](#logger)
  - [Logger](#logger-1)

---

# Logger

## Logger

Logger instance

**Signature**

```ts
export declare const Logger: winston.Logger
```

**Example**

```ts
import { Logger } from '../../src/lib/logger'
Logger.log('info', 'Hello world!')
```

Added in v2.1.7
