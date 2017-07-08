---
title:  "Improved BU Shuttle Tracker"
date:   2010-09-20
author: "buildscc"
permalink: /news/:year/:month/:day/:title/
tag: [projects]
---

## Overview

the BUS now has GPS, which means we can track it. Unfortunately the tracking site is pretty terrible. [BU's BUS tracker](http://www.bu.edu/maps/?lat=42.346714230174676&lng=-71.10033988952637&zoom=15&bus_widget_box=on&bus_box=on&route_box=on&livebus_box=on&bus_schedule=weekday/) refuses to load nicely on default many mobile browsers (android, opera mini, blackberry) doesn't have any information about bus speed, time to stops, schedule correction due to traffic at that time etc. We want to change this.

### GPS system on the BUS

currently don't know. will update when find out/someone who knows posts it (John?), may (will?) have impact on chosen software.

### Software Options

Google Maps BU's 'official' site uses google maps. Real time tracking is certainly possible using google maps. There are other mapping softwares available such as openlayers, something by microsoft and a few more. I don't know much about any of these. Anyone who does, feel free to voice their opinions.

[OpenGTS](http://www.opengts.org/) is a free real time GPS tracking project under the Apache License. Would require a server running the OpenGTS. From the demos looks very promising.

OpenGTS is pretty much ideal for this project as it seems very powerful and flexible and has a nice [install guide](https://sourceforge.net/apps/mediawiki/poweropengts/index.php?title=Quick_Installation_guide_Ubuntu_Server_10.04_LTS_and_OpenGTS), but I'm open to other ideas.

### Members

- Jeff Crowell (Project Leader)