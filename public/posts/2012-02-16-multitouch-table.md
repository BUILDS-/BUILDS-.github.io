---
title:  "Multitouch Table"
date:   2012-02-16
author: "buildscc"
permalink: /news/:year/:month/:day/:title/
tag: [projects]
---

### Current Status

Acrylic sheet obtained; in the process of sanding/flame-polishing the edges.

Meetings are vaguely set on Sundays around 2:30.

### Overview

There are a variety of ways to approach building a multitouch table, but for this project we will be using Frustrated Total Internal Reflection (FTIR). FTIR functions by shining Infrared (IR) light into the sides of an acrylic sheet, where the light is reflected. As soon as a surface hits the top of the acrylic the IR light is scattered downward through the sheet where it is picked up by an IR camera. Any surface hitting the sheet shows up to the camera as “blobs” of light, which can be tracked using software. Furthermore, a projection surface is placed on top of the acrylic sheet. It serves two purposes: one, to act as a screen for the multitouch table, so the projector (set underneath the acrylic) has a surface to project onto, and two, so that, coupled with a layer of silicone sealant between the acrylic and the projection surface (the compliant layer), the IR camera can pick up on motion rather than static points. For example, when a finger is pressed and slid across the surface, the compliant layer makes the projection surface briefly stick and slide, appearing to the IR camera as a short trail. This, rather than the acrylic sheet alone, allows for ease in tracking moving touches.

### Methodology

First, the edges of the acrylic must be sanded—the IR LEDs will not project properly into saw-cut acrylic edges. Next, the LEDs must be sautered together in a line, spaced about an inch apart from each other, so as to line all edges of the acrylic sheet. They can be taped or otherwise attached to the acrylic. To create the compliant layer, silicone sealant will be rolled onto a sheet of vellum using a foam roller in order to distribute it evenly. The silicone will be allowed to dry, and this process will be repeated at least twice more. Finally, the vellum can be placed on top of the acrylic.

In order to ensure the camera picks up only IR light, one can either purchase an IR camera, or open the camera and remove the IR filter, replacing it with a visible light filter. A visible light filter can be purchased, or one can be created using the magnetic tape inside of a floppy disk.

Finally, the projector will be set up either directly below the acrylic, or mirrors will be used to reflect the projected image onto the projection surface. A cabinet will be built out of wood to house the IR camera, projector, and multitouch surface, and a wooden baffle will be built around the top of the multitouch surface so that IR light directly from the IR LEDs does not shine at the user. The computer running the multitouch software will either be housed in this cabinet, or will be attached and set up separately for optimal ease of testing. Touchlib, an open source multitouch library, will be used for most software purposes until a software development phase has begun.

### Members

Project Leader: Monica Gribouski