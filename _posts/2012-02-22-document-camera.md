---
title:  "Document Camera"
date:   2012-02-22
author: "buildscc"
permalink: /news/:year/:month/:day/:title/
tag: [projects]
---

## Overview

### Design

### Parts List

- Arduino Uno
- Servo Motor
- Canon Camera (compatible with CHDK)

### Specifications

### Powering the Camera

### Servo Controller

The Arduino is used mainly as a controller for the servo and can be configured and issued commands over a Serial connection. The serial protocol used is extremely basic and relies on messages of three characters in length.

| Command Bit | Value Bit | \n |
| ----------- | --------- | -- |
|             |           |    |

Newline characters will always break and only the first two characters will ever actually be interpreted.

The following commands will set different position registers. Where n represents the ascii representation of a number.

| Command | Value |
| ------- | ----- |
| 1	      | x     |
| 2       |	x     |
| n       |	x     |

The following command flags are recognized.

| String | Description |
| ------ | ----------- |
| -t	 | Trigger through array positions |
| -l	 | List the values in int array positions |
| -d	 | Toggle debug mode |

Debug mode can be set using pin 12 on the Arduino. It is high active (when high debug mode will be on). Code is hosted at [Document Camera Source Code](https://github.com/cwoodall/BUILDS-Document-Camera)

### Camera Communications