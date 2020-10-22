---
title:  "Rear-Projection Touchscreen: Code and Design"
date:   2010-07-14
author: "buildscc"
permalink: /news/:year/:month/:day/:title/
tag: [projects]
---

BUILDS and Furst Labs are working together to perfect a multi-touch screen.

The physical screen must be engineered for optimal finger blob-tracking.

Fingers are individually tracked on the surface using modified web cameras.

The camera input is fed into custom tracker program designed by Furst Labs which implements the latest standard of Open Computer Vision.

The tracker program then sends the individual tracked data points over a modified Tangible User Interface Objects protocol tunneled through the Open Sound Control protocol to another custom Furst Labs built program for gesture tracking and recognition.

Once gestures have been recognised this program responds appropriately by either opening other applications or interacting with the user’s graphical interface.

### Members

John-Nicholas Furst (Project Leader)