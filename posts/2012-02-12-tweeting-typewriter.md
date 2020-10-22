---
title:  "Tweeting Typewriter"
date:   2012-02-12
author: "buildscc"
permalink: /news/:year/:month/:day/:title/
tag: [projects]
---

## Overview

Christopher Woodall and Tom Nadovich found a semi functional typewriter being thrown out around campus. We have decided to fix it up to a semi functional condition and turn it into a tweeting typewriter.

## Design

### Specifications

- Make typewriter semi functional

### Parts List

- Royal Jupiter 12 typewriter (current use)

### Ideas For Getting Key Inputs

Using conductive tape, we can sense if the conductive levers for the keys are touching the tape or not. We would do this by grounding and filtering the metal contacts on the typewriter. Then connect the conductive tape to a uC pin and 5V through a 10k Resistor. This will give us a digital input of 0 when the key is unpressed and 1 when its been triggered. Detection time depends on how fast the machine moves the lever. If the body of the typewriter is connected to ground there should be limited potential for AC noise. Needs a series of multiplexers and possibly some other supporting electronics to make communication with such a multiplexer practical. Would use part of an 6-bit 64 input multiplexer. Could get complex and hard to deal with, but would be straightforward.

This other guys uses shift registers to pass a pulse through each key at a very rapid speed. When a key is pressed down and the shift register sends that contact high you will send the carriage high. Since you have a counter which can tell where the signal is/should be at any given point in time you can effectively find which key was pressed down using a bunch of shift registers and two uC pins.

[USB Type Writer](http://www.usbtypewriter.com/design-files/how-it-works)

### Members