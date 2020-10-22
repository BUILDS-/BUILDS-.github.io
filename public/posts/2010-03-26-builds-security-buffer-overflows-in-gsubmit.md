---
title:  "BUILDS Security: Buffer Overflows in gsubmit"
date:   2010-03-26
author: "buildscc"
permalink: /news/:year/:month/:day/:title/
tag: [projects]
---

## BUILDS Security: Buffer Overflows in gsubmit

In mid February, BUILDS found a Buffer Overflow exploit in gsubmit, an assignment submission tool actively used in the Boston University Computer Science Department. Upon discovering the vulnerability and authoring a proof of concept exploit, the CS Department and Lab Administrators were made aware of the problem. A new version of gsubmit which fixed these problems was installed on March 19, 2010, the day that BUILDS presented a poster and demo on this topic at the BU Computer Science Research Open House [[1](http://www.cs.bu.edu/IAP/ResearchDay2010/)].

[Paper](/docs/BUILDS_gsubmit_paper.pdf)

### Low Hanging Fruit

In the course of this project, work started on developing a tool that can statically analyze an ELF binary object for potential security vulnerabilities. Dubbed "Low Hanging Fruit", this tool aims to discover possible problems in the binary, such as unchecked buffers, potentially dangerous library calls (such as the system() function), format string exploit attack vectors, etc. Development is ongoing, using the libelf and libdisasm libraries.

### Future Work
- Continue development of Low-Hanging Fruit
- Use the vulnerable version of gsubmit as a tool to experiment with defeating different methods of Linux and gcc security.
- Possibly adapt a more generalized version of our research for presentation to a wider audience.
