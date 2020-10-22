---
title:  "Using D-Type Flip Flops for Toggling"
date:   2011-10-15
author: "buildscc"
permalink: /news/:year/:month/:day/:title/
tag: [tutorials]
---

When using momentary pushbuttons it is common to want to store and then toggle state. There are a couple of ways to do this, for example, you could using a 555 timer, or construct your own latch/flip-flop. However, the 7400 series of integrated circuits has a few nicely packaged D-Type Flip-Flops which are appropriate for switching. The most appropriate is the 74xx74, which is a dual D-type flip flop with inverted and non-inverted outputs. There are other packages like the 74xx174 which is a quad, but you will need to use your own inverter, such as the 74xx04 or 74xx14, to invert the output. Also the packages with more than 4 D-type flip-flops often share a clock, which means that this method of toggling will not work with them.


## Contents

1 Parts and Tools
2 Lets Put it Together!
  2.1 Schematic Diagram
  2.2 Step By Step
  2.3 Video Tutorial
3 Resources
4 Credits

### Parts and Tools

- 1 74xx74 D-Type Flip-Flop (choose your logic level for your own project, LS is TTL logic and HC/HCT are CMOS).
- 1 74xx14 Hex Inverting Schmitt Trigger(for debouncing)
- 1 1k Resistor
- 3 0.1uF Ceramic Capacitor (one for debouncing and two for the ICs)
- Breadboard (or some other prototyping platform)
- Momentary Push Button
- Wire

### Lets Put it Together!

### Schematic Diagram

### Step By Step

### Video Tutorial

### Resources

### Credits

Christopher Woodall - chris.j.woodall <at> gmail.com