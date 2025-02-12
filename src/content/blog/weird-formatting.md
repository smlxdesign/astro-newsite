---
title: "Weird Formatting Test"
subtitle: "Will your engine parse this correctly?"
date: "2024-07-07"
author: "Charlie"
slug: "weird-formatting-test"
---

# Formatting Test

Some fields above have random spacing. If your YAML parser is too strict, this might break.

Also, let's test **whitespace shenanigans**:

```yaml
title:        "Should work"
  subtitle: "Oops, wrong indent?"
date  :     "Why so much space?"
author  : "Still works?"
```
