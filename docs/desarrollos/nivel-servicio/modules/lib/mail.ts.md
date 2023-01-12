---
title: lib/mail.ts
nav_order: 5
parent: Modules
---

## mail overview

All mail related functions

Added in v2.1.4

---

<h2 class="text-delta">Table of contents</h2>

- [Mail](#mail)
  - [TMailOptions (type alias)](#tmailoptions-type-alias)
  - [sendMail](#sendmail)

---

# Mail

## TMailOptions (type alias)

Type of sendMail function input

**Signature**

```ts
export type TMailOptions = {
  body: string
  subject: string
  to: string
  file_path?: string
}
```

Added in v2.1.4

## sendMail

Sends mail with the specified options.

**Signature**

```ts
export declare function sendMail({ body, subject, to, file_path }: TMailOptions): void
```

**Example**

```ts
import { sendMail } from '../../src/lib/mail'
sendMail('Hello world!', 'Hello, example', 'admin@test.com', 'output.pdf')
```

Added in v2.1.4
