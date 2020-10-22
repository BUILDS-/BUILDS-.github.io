---
title:  "Open 7400 Drum Machine"
date:   2011-11-01
author: "buildscc"
permalink: /news/:year/:month/:day/:title/
tag: [projects]
---

## Overview

This is a basic 4 stage, 4 tone, drum machine built from 7400 Logic ICs and other discrete components and ICs for Dangerous Prototypes Open 7400 Competition (http://www.7400contest.com). I started brainstorming and designing the project on October 7, 2011 and submitted the project on October 20, 2011.

The idea for building a drum machine came from a discussion I had with my roommates in which we were talking about the popularity of drum machines as simple web applications. I decided to try to implement one, but using 7400 Logic Chips. The design was rather simple and is based mostly around utilizing sequential logic devices in order to count, step through and play different tones.

Here is a video describing and demoing the final product: http://www.youtube.com/watch?v=kdsNmtxFp7E

### Versioning

Current version is 1.0 (Bleeping Tilde)

### Parts List

- 8 x 74LS74 (dual D-type Flip-Flops)
- 4 x 74LS14 (Hex Schmitt Trigger Inverters. You could minimize this to 3 if you want, but I preferred to have one IC per stage)
- 1 x 555 Timer (could have more for generating different frequencies)
- 2 x 74LS253 (dual 4x1 multiplexers)
- 1 x 74LS107 (dual JK-flip-flops)
- 24 x 0.1 uF Ceramic Capacitors (You may need more, but you need one on every 7400 IC and for debouncing)
- 22 x 1k Resistors
- 2 x10k Resistors
- 1 x 100k Potentiometer
- 4 x Piezo Buzzers (should have 4 Piezo Buzzers... One for each tone, but I used two to demonstrate functionality)
- 1 x 10uF Electrolytic Capacitor
- 1 x Switch (for power)
- Some power source which provides 5V and GND(I used my Arduino for a rather stable 5V and GND)
- Some array of 16 Buttons and 16 LEDs for input. I used a panel which Valerie Young found. It has 24 pushbuttons with 25 LEDs and one RESET button (currently unused). I made a little "breakout" board of sorts with headers and used this board. Explanation below.
- 3 x Breadboards (I used 3 breadboards and one protoboard, but this board can likely be made better)
- 6 x LEDs for monitoring

Notes: I used all LS TTL based logic instead of CMOS logic. This was quite fun to use and was cost effective because I had access to free surplus parts.

### The Heart: Clock and Binary Counter

The first step was to get a stable and working clock, which could then be put through a 2-bit binary counter, which will select between the 4 stages. Once the stage is determined the 2-bit code which designates one of the 4 stages can then be put through a multiplexer and a tone associated with that multiplexer can then be played. To accomplish the task I broke down the logic into three basic parts: the clock, the counter and the mux.

The clock was created using a 555 timer with a 10 uF electrolytic capacitor a 100k Potentiometer and a 10k resistor. This give a frequency of about .68 Hz or ~41 cycles per minute, which is on the order of 60 beats per minute and can be adjusted upwards to rather high speed using the 100k Potentiometer. More theory on the 555 timer can be found at kspec: [http://www.kpsec.freeuk.com/555timer.htm](http://www.kpsec.freeuk.com/555timer.htm), they do a really good job at explaining the operations of the 555 timer.

The output of this clock is then feed through a 2-bit Binary Counter created using two J-K Flip Flops in a 74LS107 IC. These J-K Flip Flops are setup to basically switch on different signals and they way J-K's toggle, if set up correctly, means that they change delayed cycle. The 2-bit Binary Counter creates a repeated count of 00, 01, 10, 11.

Here is the clock and multiplexer at work: [Video of Clock and Mux](http://www.youtube.com/watch?feature=player_embedded&v=omN2CQKSUus)

### The Brain: Multiplexer

Here is the multiplexer part of the circuit. I used two 74LS253 ICs with dual 4x1 Multiplexers on it. The 2-bit binary counters is feed into the 4 different multiplexers and they then loop through there 4 stages in order. Each mux has an output which is associated with some sort of sound which will be produced when that stage is triggered. The Mux reads if a 0 or 1 is sitting at the selected input and then feeds that state to its output which then sends a signal to the sound production devices (in this case LEDs for monitoring and Piezos). The inputs are provided by the D-type Flip-Flops which store and toggle state feed into them by the pushbutton array.

The circuit so far

### The Interactive Surface: The Button Panel

The cool looking LED/Pushbutton Array I used.

This is the most tedious part of the whole project if you are not ready to solder tons of wires and make them look neat. In fact, sort of using ribbon cables and similar cable types your circuit will start to look like a mess of cables right about here. This is thanks to the fact that you have to run 2 bundles of 16 wires from your LED/Button Array to your actual board and then another 16 from your Flip-Flops to your Multiplexers. Besides being the easiest theoretically this part ended up taking the longest, costing the most and creating the most errors in the system as a whole.

The circuit here is simple, you need to take your pushbutton signal and debounce it using a capacitor and a Schmidt Trigger Inverter (74LS14). The Schmidt Trigger has hysteresis, which prevents small changes in making changes to the system and as such allows you to have a nice sharp switch in logic levels instead of the smooth switch which just a capacitor would create. You will need to debounce your buttons pretty much regardless of your types of switches you use. I used pushbuttons then stored and toggled their value using D-type Flip Flops.

The actual debounced pushbutton signal is used as the Clock/Enable input into the D-type Flip Flops and the negated output is put into the input. This means that the state of the flip-flop will toggle as you press on the push button.

### Tips and Tricks
- Make sure you ground all the unused inputs on your 74LS14 Schmidt Triggers, if you don't weird things will happen.
- I highly suggest trying to find a button array with a sensible pin out (like the one I found). Sparkfun has a pretty interesting looking button array.
- If you need to make your own try to get pushbuttons with LEDs built-in. They look nice and simplify your protoboard layout.
- You will need to use a protoboard for the array, but you can put your ICs wherever you want.

### Current State of the Project

Currently done and ready for submission, but I need better noises and more piezo elements or just a better way to make noises. Possibilities include: motors to hit/vibrate things (very possibly with BJT transistors), 555 timers to oscillate at different tones. The current setup is made mostly to show off the fact that it works.

Other problems:
- Noise in the Vcc and Ground lines causing jumping bits in my d-flip-flop array which stores state for the pushbuttons and allow them to toggle. All attempts thus far have failed at removing this side effect.
- Better tempo adjustment and user interfacing.

### The Path Forward

- Make sounds that sound good
- Make those good sounding sounds adjustable
- Make the clock a little more stable and usable as a DRUM machine
- Debug the inputs... Possibly change input styles to a 4 button input with 1 button to toggle between 4 different instrument states (or 4 buttons). this would reduce the number of buttons and thus the number of ICs needed (by about 6 ICs).
- Maybe involve a basic microprocessor to implement MIDI type controls.
- RGB LEDS! FOR EVERYTHING!

### Licensing and Credits

Licensed under [CERN OHL v.1.1](http://www.ohwr.org/attachments/735/CERNOHLv1_1.txt) or later

This project was previously under the MIT License, but as of November 1st is being moved to the CERN Open Hardware License.

#### Credits
Designed and Implemented by by Christopher Woodall

Thanks to Dan Gastler, Valerie Young and Eric Hazen for help, parts and support.

### Sources

- [GitHub](https://github.com/cwoodall/Open-7400-Drum-Machine)
- [Photo Dump](https://picasaweb.google.com/105087053790397133357/Open7400DrumMachine)