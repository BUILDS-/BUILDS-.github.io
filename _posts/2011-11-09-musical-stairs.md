---
title:  "Musical Stairs"
date:   2011-11-09
author: "buildscc"
permalink: /news/:year/:month/:day/:title/
tag: [projects]
---

== Overview ==
The musical stairs project is an attempt at making the main staircase in the GSU make noise when you step on each stair.
Think the piano floor at FAO Schwarz, but in stair form.

== Mailing List == [[Listserve_Commands| musicalstairs-list@bu.edu]]
Wanna be on it? Email vryoung@bu.edu

== Technical ==
So far, the plan is to use IR LEDs at one end of each step and IR sensors at the other end, so when someone steps on the stair, the sensor no longer sees the light. The sensor then sends a signal to an Arduino, which processes the signals from all the steps and sends the information to a computer at the top of the stairs. That computer is responsible for making the noise. Current plans involve not only a direct-note mode, but possibly a song mode.

==== Staircase ====

==== Mounting ====
The current plan is to attach the sensors directly to the side of the stairs with double-sided tape or similar adhesive.For non-flat components, they might need to be mounted in epoxy/acrylic/hot-melt first, then attached. Wires will be run along the side of the step and down underneath to North side of the stairs (closest to the window). Those wires will be run to the top of the stairs, where any Arduinos and computers will be located.

==== Possible Sensor Alternatives ====
A possible alternative to the IR sensor might be some sort of microphone which would pickup sound on the surface of the stair. I tested it personally, but with a mini-amplifying speaker and a specially designed microphone. However, amplifying the sound off a surface might be easier than amplifying a wave from an IR LED way out of range, because you can't tell between ambient light and the light form the LED. Costs and specifics are unknown.

Possible component (a piezo vibration sensor): http://www.sparkfun.com/commerce/product_info.php?products_id=9196 - Nik Huntoon and Chris Woodall

== Upcoming Meetings ==
We should have new IR LEDs and sensors in, so we're going to play with them, figure out their range, test mounting strategies, etc. If you want to learn how to solder or do Arduino stuff, there should be some of that going on at various points.

==== Build Session ====
Dates to be announced.

==Members== 
*[[Valerie Young]] (Project Leader)
*[[John-Nicholas Furst]] (Project Leader)
*[[Russell Shomberg]]
*[[Nicholas Colasuonno]]
*[[Danny Cooper]]
*[[Christopher Woodall]]

== Overview == The Musical Staircase project will transform the GSU main staircase into a musical staircase, where each step up the stairs will set off an individual note. Currently, the plan is to use an IR tripwire (an IR sensor and emitter on each side of the stair) which will communicate with a computer via an arduino (arduino.cc) microcontroller. The computer will have a user interface for changing the notes of the staircase.

== Mailing List ==
[[Listserve_Commands| musicalstairs-list@bu.edu]] Wanna be on it? Email vryoung@bu.edu

== Technical ==
So far, the plan is to use IR LEDs at one end of each step and IR sensors at the other end, so when someone steps on the stair, the sensor no longer sees the light. The sensor then sends a signal to an Arduino, which processes the signals from all the steps and sends the information to a computer at the top of the stairs. That computer is responsible for making the noise. Current plans involve ascending/descending notes with a user interface for changing the type of note (i.e. from piano to bagpipe).

====Staircase====

==== Computer Interface ====
Lead: Ian Felder, Jeff Crowell
Team: Ian Felder, Jeff Crowell
We are using a MIDI to USB converter that belongs to Jeff, and need to order our own at the following link
http://www.amazon.com/Cable-Converter-Music-Keyboard-Window/dp/B0017H4EBG/ref=sr_1_2?ie=UTF8&qid=1287873776&sr=8-2

Once the midi interface becomes more of a permanant device, we should order this female midi jack from sparkfun.
http://www.sparkfun.com/commerce/product_info.php?products_id=9536

The computer interface needs to read in the stair number tripped from the arduino and produce a note. Currently, the arudino will output a MIDI command with the CMD(ON/OFF), PITCH(note) and VELOCITY(volume). The arudino's serial output must be set to 31250b/s (Serial.begin(31250);) and the following function will send a midi signal to the computer. Using this solution, any music composition software can be used as long as it supports MIDI USB input (most). 

====Sensor/Emitter Wiring====
Lead: Dan Gastler
Team: Chris Woodall
Hardware:
Test 1: In lab setup with one sensor and emitter. Video soon
Test 2: On stairs @ GSU [http://search.digikey.com/scripts/DkSearch/dksus.dll?Detail&name=609-3784-ND Option 1] | [http://search.digikey.com/scripts/DkSearch/dksus.dll?Detail&name=WM5430-ND Option 2] | LED connector: | [http://search.digikey.com/scripts/DkSearch/dksus.dll?Detail&name=S5438-ND 2pin right angle]

==== Mounting ====
Lead: Rusty
Team:
''New plan for sensors/emitters'': To create an easily to install beam routed out in the bottom/middle to run wires up and down the staircase, with holes in the side for the sensors and emitters.
''Old plan for sensors/emitters'': The original plan was to attach the sensors directly to the side of the stairs with double-sided tape or similar adhesive. For non-flat components, they might need to be mounted in epoxy/acrylic/hot-melt first, then attached. Wires will be run along the side of the step and down underneath to North side of the stairs (closest to the window). Those wires will be run to the top of the stairs, where any Arduinos and computers will be located. Other mounting problems for solving: *speakers *laptop/mouse and flatscreen monitor interface

==== Piezo-Electric Vibration Sensors ====
A possible alternative to the IR sensor might be some sort of microphone which would pickup sound on the surface of the stair. I tested it personally, but with a mini-amplifying speaker and a specially designed microphone. However, amplifying the sound off a surface might be easier than amplifying a wave from an IR LED way out of range, because you can't tell between ambient light and the light form the LED. Costs and specifics are unknown.

Possible component (a piezo vibration sensor): http://www.sparkfun.com/commerce/product_info.php?products_id=9196

I just figured out that what I tested the idea on was a piezo electronic vibration sensor not a microphone. - Nik Huntoon and Chris Woodall

== Upcoming Meetings ==
Every Sunday at 5pm. Updates at weekly BUILDS meeting, Wednesday at 6:30.

==== Build Session ====
Dates to be announced.

==Members==
*[[Valerie Young]] (Project Leader)
*[[John-Nicholas Furst]] (Project Leader)
*[[Russell Shomberg]]
*[[Nicholas Colasuonno]]
*[[Danny Cooper]]
*[[Christopher Woodall]]
*[[Janoo Fernandes]]
*[[Katherine Zhao]]