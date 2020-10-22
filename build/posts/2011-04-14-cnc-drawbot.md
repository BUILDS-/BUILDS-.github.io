---
title:  "CNC Drawbot"
date:   2011-04-14
author: "buildscc"
permalink: /news/:year/:month/:day/:title/
tag: [projects]
---

## Overview

The original idea was to make a mechanized etch-a-sketch. However, this has no progressed into making a laser-etching device.

### Status

4/13/2011 Ordered new steppers from adafruit, as our were not precise enough :(

The College of Engineering has approved funding for the project, we are waiting on the funds to be transferred to acm/sao accounts. Jeff has order a few parts and we are waiting for the transfer to go through before ordering the rest.

03/05/2011 - Software is ~95% complete, steps through and lights a debug LED. most parts ordered. still requires interfacing with the laser, a way to attach the steppers to etch a sketch, and final fabrication of an enclosure.

//code documented -jeff

current code can be found here [https://github.com/BUILDS-/Drawbot](https://github.com/BUILDS-/Drawbot)

graphical QT wrapper for PC_Side scripts can be found here [https://github.com/crowell/laser-Kontrol](https://github.com/crowell/laser-Kontrol)

### Joining

If you want to join this project, email Jeffrey Crowell (Can Be Found on the BU Directory)

### Laser

The laser that will most likely be used will be a 650nm, 250mW red diode laser (250mW "Cute" laser from O-Like) that will have the capacity to etch into wood and/or dark plastics. The laser will be focused to get a resolution approximately equal to the resolution of a motorized etch and sketch

### CNC Element

Stepper motors are controlled by the arduino (currently jeff's arduino uno(2010)) Code for this is on the github. These are (eventually going to be) connected to the dials on the etch-a-sketch. Thus we can control the position of the laser. The laser on/off (is going to be) controlled by the arduino setting a transistor to high/low

### Proposal

Here is a copy of the Proposal that Jeff and Samir submitted to the college of Engineering for funding and was approved

Included is a detailed list of parts that we intend to purchase

[https://docs.google.com/viewer?a=v&pid=explorer&chrome=true&srcid=10nUFBhPybaU1FA5deRZc-I4yIwbrwS4er4K-lVtS4vyYy8rWpHrTmBv9zXKj&hl=en&authkey=CIajltwN](https://docs.google.com/viewer?a=v&pid=explorer&chrome=true&srcid=10nUFBhPybaU1FA5deRZc-I4yIwbrwS4er4K-lVtS4vyYy8rWpHrTmBv9zXKj&hl=en&authkey=CIajltwN)