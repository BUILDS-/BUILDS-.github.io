---
title:  "Beowulf Cluster Build"
date:   2012-06-06
author: "buildscc"
permalink: /news/:year/:month/:day/:title/
tag: [projects]
---

## Overview

One of the physics research groups here at BU has donated the remnants of their old Beowulf cluster to us. This amounts to 23 nodes (specs to follow shortly) and some assorted cabling and power supplies. We also have plywood to mount them on, already cut to slot into a disused rack.

### Power Distributor

The physics department was using boards custom-built by BU in order to split the power output from one power supply to three nodes. We currently have one of these boards, and will be contacting the department that made them in order to acquire more.

### Layout

Each plywood shelf will be able to comfortably fit 3 nodes, a power supply, and a power distributor. We need to consider whether to mount the components directly to the board, or to purchase threaded spacers similar (or exactly like) motherboard posts found in a normal PC.

### Software

We would like to run/manage all nodes from one of the servers currently in our rack. Most of the ways I've seen for doing this require a separate root partition on the server for every node to mount via NFS on boot. We need to research methods for having many nodes mount one shared NFS root directory on boot, or else this will be a pain to add/subtract nodes from.

### Schedule

Hardware Build (Mounting components on plywood and throwing them into the rack) will tentatively happen the weekend of March 26-28. Contact Kyle if you're interested.

Software Setup: ???