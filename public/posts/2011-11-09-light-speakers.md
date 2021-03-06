---
title:  "Light Speakers"
date:   2011-11-09
author: "buildscc"
permalink: /news/:year/:month/:day/:title/
tag: [projects]
---

### Overview
Light Speakers receive an audio input and toggles a SSR (Solid State Relay) with the "beat". The light speaker accomplishes this by amplifying the incoming sound, filtering the sound with a bandpass filter for the desired band and then putting the output of the filter through a "peak" detector which will turn on the relay for a longer period of time when something gets through the filter.

### Electronics
Schematic and PCB files are available on [https://github.com/cwoodall/LightSpeakers github].

### Block Diagram

### Buffer
The two audio channels (left and right) need to be isolated from one another before they can be summed together. Using a basic unity gain buffer will do this perfectly. It allows fro the current and voltage changes to be transmitted through the buffer, but for no current to be drawn from the source of the signals.

### Amplifier

### Band Pass Filter

### Peak Detector

### Schematic
[[Image:LightspeakersV1Final.jpg|thumb|center|400px|LightSpeaker Rev. A Schematic. Made with EAGLE]]

### PCB Layout
[[Image:Lightspeakers_pcbV1Final.jpg|thumb|center|400px|LightSpeaker Rev. A PCB Layout. Made with EAGLE]

### Bill of Materials (aka Parts List)

```
{| | | | | | | | | | |---- |Part |Value |Distributor |Distributor Number |Manufacturer |Manufacturer Number |Unit Price |Qty |Total Price |---- |C1,C8, C9 |10uF Electrolytic |Digikey |P5148-ND | | |0.2 |3 |0.6 |---- |C2 |.01uF 603 |Digikey |490-1512-1-ND | | |0.023 |1 |0.023 |---- |C3 |100uF Electrolytic |Digikey |P5152-ND | | |0.25 |1 |0.25 |---- |C4, C6 |.1uF 603 |Digikey |490-1532-1-ND | | |0.023 |2 |0.046 |---- |C5 |.047uF 603 |Digikey |490-1567-1-ND | | |0.041 |1 |0.041 |---- |D1 |1N4001 |Digikey |1N4001-E3/54GICT-ND |Vishay |1N4001-E3/54 |0.43 |1 |0.43 |---- |IC1 |LM1117 5V Regulator |Digikey |LM1117MPX-5.0CT-ND |National |LM1117MPX-5.0/NOPB |1.16 |1 |1.16 |---- |IC2 |LM324 SOIC14 |Digikey |296-1390-5-ND |TI | |0.31 |1 |0.31 |---- |J1 |Power Jack |Digikey |CP-202A-ND |CUI Inc |PJ-202A |0.092 |1 |0.092 |---- |J2 |Terminal Block (2x) |Digikey |ED1623-ND | | |0.59 |1 |0.59 |---- |JP2 |.1” Headers |stock |stock |stock |stock |0 |1 |0 |---- |JP3 |.1” Headers |stock |stock |stock |stock |0 |1 |0 |---- |LED1 |LED BLUE 603 |Digikey |475-2816-1-ND | | |0.21 |1 |0.21 |---- |LED2 |LED RED 603 |Digikey |475-2816-1-ND | | |0.21 |1 |0.21 |---- |Q1 |2n2222 TO-92 |Digikey |P2N2222AGOS-ND |ON Semiconductor |P2N2222AG |0.36 |1 |0.36 |---- |R1 |150 603 |Digikey |RMCF0603JT150RCT-ND |Stackpole | |0.02 |1 |0.02 |---- |R2, R15 |470 603 |Digikey |RMCF0603JT470RCT-ND |Stackpole | |0.02 |2 |0.04 |---- |R3, R13 |2.2k 603 |Digikey |RMCF0603JT2K20TR-ND |Stackpole | |0.02 |2 |0.04 |---- |R6,R12 |47k 603 |Digikey |RMCF0603JT47K0TR-ND |Stackpole | |0.02 |2 |0.04 |---- |R7 |33k 603 |Digikey |RMCF0603JT33K0TR-ND |Stackpole | |0.02 |1 |0.02 |---- |R8, R9, R14 |100k 603 |Digikey |RMCF0603JT100kTR-ND |Stackpole | |0.02 |3 |0.06 |---- |R10, R11 |1M 603 |Digikey |RMCF0603JT1M00TR-ND |Stackpole | |0.02 |2 |0.04 |---- |S1 |SWITCH-SPSTSMD2 |Digikey |450-1635-ND |TE |SSJ12R04 |0.79 |1 |0.79 |---- |SV1 |.1” Headers Male Right Angle |stock |stock | | |0 |1 |0 |---- |SV2 |.1” Headers Female Right Angle |Digikey |S5439-ND | | |0.65 |1 |0.65 |---- |U$1 |10k Pot 3362U |Digikey |3362U-103LF-ND |Bourns Inc. |3362U-1-103LF |1.05 |1 |1.05 |---- |U1 |SSR S108T02 |Digikey |425-2396-5-ND |Sharp Micro |S108T02F |5.01 |1 |5.01 |---- |U2 |3.5mm Audio Jack |Digikey |CP1-3524NG-ND |CUI Inc |SJ1-3524NG |0.85 |1 |0.85 |---- |F1 |FUSEHOLDER OPEN 5X20MM PC MNT |Digikey |WK0011-ND |Littelfuse Inc |64900001039 |0.38 |1 |0.38 |---- | | | | | | | | | |---- | | | | | | | | | |---- |Total Cost |13.312 | | | | | | | |---- |}
```

### Cost Reductions
Change all Resistors to Stackpole resistors (eg 150 ohm 603 Resistor RMCF0603JT150KCT-ND costs $.02 per instead of $.1 per): Approx Savings $1.04

Change LED1 and LED2 to OSRAM CHIPLED (example LB Q39G-L2N2-35-1 OSRAM Opto Semiconductors Inc 475-2816-1-ND).From $.5 per to $.2 per: Approx Savings: $.6

LM385 -> LM324 (quad opamps with buffering): LM324D Texas Instruments 296-1390-5-ND $.31 : Approx Savings: $.45

### Prototyping

### Version 004
Semi Complete May 24, with Solid State Relay. BOM coming soon along with PCB board and a finalized schematic. [[Image:Lightspeakers.jpg|thumb|800px|center]]

### Version 003
Completed 12 May 2012 [[Image:LightspeakerVersion3.png|thumb|800px|center]] This time the LED is replaced with a relay switch which AC powered lights can be plugged into.

### Version 002
Completed 12 May 2012 [[Image:LightspeakerVersion2.png|thumb|800px|center]] This version still only lights up an LED, but it also does a better job of filtering out noise so that the on and off is much crisper.

### Version 001
Completed 12 May 2012 [[Image:LightspeakerVersion1.png|thumb|800px|center]] This circuit passes the signal from a audio jack into an LED based on the amplitude of the signal alone. It works. The potentiometer determines how low the bass must be to be let through.

### Team
* Chris Woodall
* Rusty Shomberg
* Patrick Ehrlicher
* Tom