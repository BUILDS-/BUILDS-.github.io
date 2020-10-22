---
title:  "Musical Stairs Original Plan"
date:   2010-04-23
author: "buildscc"
permalink: /news/:year/:month/:day/:title/
tag: [projects]
---

## Original Plan

This document was the original inception of the Musical Stairs project.

### Overview
The musical stairs project is an attempt at making the main staircase in the GSU make noise when you step on each stair. Think the piano floor at FAO Schwarz, but in stair form.

### Mailing List
Listserve_Commands| musicalstairs-list@bu.edu

Wanna be on it? Email vryoung@bu.edu

### Technical
So far, the plan is to use IR LEDs at one end of each step and IR sensors at the other end, so when someone steps on the stair, the sensor no longer sees the light. The sensor then sends a signal to an Arduino, which processes the signals from all the steps and sends the information to a computer at the top of the stairs. That computer is responsible for making the noise. Current plans involve not only a direct-note mode, but possibly a song mode.

### Staircase

### Mounting
The current plan is to attach the sensors directly to the side of the stairs with double-sided tape or similar adhesive. For non-flat components, they might need to be mounted in epoxy/acrylic/hot-melt first, then attached. Wires will be run along the side of the step and down underneath to North side of the stairs (closest to the window). Those wires will be run to the top of the stairs, where any Arduinos and computers will be located.

### Possible Sensor Alternatives
A possible alternative to the IR sensor might be some sort of microphone which would pickup sound on the surface of the stair. I tested it personally, but with a mini-amplifying speaker and a specially designed microphone. However, amplifying the sound off a surface might be easier than amplifying a wave from an IR LED way out of range, because you can't tell between ambient light and the light form the LED. Costs and specifics are unknown.

Possible component (a piezo vibration sensor): [http://www.sparkfun.com/commerce/product_info.php?products_id=9196](http://www.sparkfun.com/commerce/product_info.php?products_id=9196)

- Nik Huntoon and Chris Woodall

### Upcoming Meetings

Dates to be announced.

### Build Session

~ This weekend (April 23rd-25th) in BUILDS We should have new IR LEDs and sensors in, so we're going to play with them, figure out their range, test mounting strategies, etc. If you want to learn how to solder or do Arduino stuff, there should be some of that going on at various points.

### Members
- Valerie Young (Project Leader)
- John-Nicholas Furst (Project Leader)
- Russell Shomberg
- Nicholas Colasuonno
- Danny Cooper
- Christopher Woodall