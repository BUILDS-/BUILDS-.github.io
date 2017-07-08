---
title:  "Musical Stairs"
date:   2011-11-09
author: "buildscc"
permalink: /news/:year/:month/:day/:title/
tag: [projects]
---

## Original Plan

## Overview
The musical stairs project is an attempt at making the main staircase in the GSU make noise when you step on each stair.
Think the piano floor at FAO Schwarz, but in stair form.

### Mailing List 
musicalstairs-list@bu.edu

Wanna be on it? Email vryoung@bu.edu

### Technical
So far, the plan is to use IR LEDs at one end of each step and IR sensors at the other end, so when someone steps on the stair, the sensor no longer sees the light. The sensor then sends a signal to an Arduino, which processes the signals from all the steps and sends the information to a computer at the top of the stairs. That computer is responsible for making the noise. Current plans involve not only a direct-note mode, but possibly a song mode.

### Staircase

### Mounting
The current plan is to attach the sensors directly to the side of the stairs with double-sided tape or similar adhesive.For non-flat components, they might need to be mounted in epoxy/acrylic/hot-melt first, then attached. Wires will be run along the side of the step and down underneath to North side of the stairs (closest to the window). Those wires will be run to the top of the stairs, where any Arduinos and computers will be located.

### Possible Sensor Alternatives
A possible alternative to the IR sensor might be some sort of microphone which would pickup sound on the surface of the stair. I tested it personally, but with a mini-amplifying speaker and a specially designed microphone. However, amplifying the sound off a surface might be easier than amplifying a wave from an IR LED way out of range, because you can't tell between ambient light and the light form the LED. Costs and specifics are unknown.

Possible component (a piezo vibration sensor): [http://www.sparkfun.com/commerce/product_info.php?products_id=9196](http://www.sparkfun.com/commerce/product_info.php?products_id=9196) - Nik Huntoon and Chris Woodall

## Upcoming Meetings
We should have new IR LEDs and sensors in, so we're going to play with them, figure out their range, test mounting strategies, etc. If you want to learn how to solder or do Arduino stuff, there should be some of that going on at various points.

## Updates

## Overview
The Musical Staircase project will transform the GSU main staircase into a musical staircase, where each step up the stairs will set off an individual note. Currently, the plan is to use an IR tripwire (an IR sensor and emitter on each side of the stair) which will communicate with a computer via an arduino (arduino.cc) microcontroller. The computer will have a user interface for changing the notes of the staircase.

### Technical
So far, the plan is to use IR LEDs at one end of each step and IR sensors at the other end, so when someone steps on the stair, the sensor no longer sees the light. The sensor then sends a signal to an Arduino, which processes the signals from all the steps and sends the information to a computer at the top of the stairs. That computer is responsible for making the noise. Current plans involve ascending/descending notes with a user interface for changing the type of note (i.e. from piano to bagpipe).

## Staircase

### Computer Interface
Lead: Ian Felder, Jeff Crowell

Team: Ian Felder, Jeff Crowell

We are using a MIDI to USB converter that belongs to Jeff, and need to order our own at the following link
[http://www.amazon.com/Cable-Converter-Music-Keyboard-Window/dp/B0017H4EBG/ref=sr_1_2?ie=UTF8&qid=1287873776&sr=8-2](http://www.amazon.com/Cable-Converter-Music-Keyboard-Window/dp/B0017H4EBG/ref=sr_1_2?ie=UTF8&qid=1287873776&sr=8-2)

Once the midi interface becomes more of a permanant device, we should order this female midi jack from sparkfun.
[http://www.sparkfun.com/commerce/product_info.php?products_id=9536](http://www.sparkfun.com/commerce/product_info.php?products_id=9536)

The computer interface needs to read in the stair number tripped from the arduino and produce a note. Currently, the arudino will output a MIDI command with the CMD(ON/OFF), PITCH(note) and VELOCITY(volume). The arudino's serial output must be set to 31250b/s (Serial.begin(31250);) and the following function will send a midi signal to the computer. Using this solution, any music composition software can be used as long as it supports MIDI USB input (most). 

### Sensor/Emitter Wiring
Lead: Dan Gastler

Team: Chris Woodall

Hardware:

Test 1: In lab setup with one sensor and emitter. Video soon

Test 2: On stairs @ GSU [http://search.digikey.com/scripts/DkSearch/dksus.dll?Detail&name=609-3784-ND Option 1] | [http://search.digikey.com/scripts/DkSearch/dksus.dll?Detail&name=WM5430-ND Option 2] | LED connector: | [http://search.digikey.com/scripts/DkSearch/dksus.dll?Detail&name=S5438-ND 2pin right angle]

### Mounting
Lead: Rusty

Team:

''New plan for sensors/emitters'': To create an easily to install beam routed out in the bottom/middle to run wires up and down the staircase, with holes in the side for the sensors and emitters.

''Old plan for sensors/emitters'': The original plan was to attach the sensors directly to the side of the stairs with double-sided tape or similar adhesive. For non-flat components, they might need to be mounted in epoxy/acrylic/hot-melt first, then attached. Wires will be run along the side of the step and down underneath to North side of the stairs (closest to the window). Those wires will be run to the top of the stairs, where any Arduinos and computers will be located. Other mounting problems for solving: *speakers *laptop/mouse and flatscreen monitor interface

### Piezo-Electric Vibration Sensors
A possible alternative to the IR sensor might be some sort of microphone which would pickup sound on the surface of the stair. I tested it personally, but with a mini-amplifying speaker and a specially designed microphone. However, amplifying the sound off a surface might be easier than amplifying a wave from an IR LED way out of range, because you can't tell between ambient light and the light form the LED. Costs and specifics are unknown.

Possible component (a piezo vibration sensor): http://www.sparkfun.com/commerce/product_info.php?products_id=9196

I just figured out that what I tested the idea on was a piezo electronic vibration sensor not a microphone. - Nik Huntoon and Chris Woodall

### Upcoming Meetings
Every Sunday at 5pm. Updates at weekly BUILDS meeting, Wednesday at 6:30.

### Build Session
Dates to be announced.

### Members
*[[Valerie Young]] (Project Leader)
*[[John-Nicholas Furst]] (Project Leader)
*[[Russell Shomberg]]
*[[Nicholas Colasuonno]]
*[[Danny Cooper]]
*[[Christopher Woodall]]
*[[Janoo Fernandes]]
*[[Katherine Zhao]]


```
void noteOn(int cmd, int pitch, int velocity) {
	Serial.print(cmd, BYTE);
	Serial.print(pitch, BYTE);
	Serial.print(velocity, BYTE);
}

The CMD byte is on or off, 0x90 will trigger on, and any value between 0x81 and 0x8F will trigger off. The velocity byte anywhere between 0x00 for no volume, 0x45 for medium volume, and 0x90 for maximum volume. the pitch byte is determined by the following table. (table will format correctly) Middle C has a MIDI value of 60, perhaps that could be set to the middle stair?

{|border = "1" ! Stair Number ! Note ! Decimal ! Hex |- |1|| F#|| 30|| 0x1E |- |2||G||31||0x1F |- |3||G#||32||0x20 |- |4||A||33||0x21 |- |5||A#||34||0x22 |- |6||B||35||0x23 |- |7||C||36||0x24 |- |8||C#||37||0x25 |- |9||D||38||0x26 |- |10||D#||39||0x27 |- |11||E||40||0x28 |- |12||F||41||0x29 |- |13||F#||42||0x2A |- |14||G||43||0x2B |- |15||G#||44||0x2C |- |16||A||45||0x2D |- |17||A#||46||0x2E |- |18||B||47||0x2F |- |19||C||48||0x30 |- |20||C#||49||0x31 |- |21||D||50||0x32 |- |22||D#||51||0x33 |- |23||E||52||0x34 |- |24||F||53||0x35 |- |25||F#||54||0x36 |- |26||G||55||0x37 |- |27||G#||56||0x38 |- |28||A||57||0x39 |}

Arduino Midi Example code:

//This code plays a seqence of notes (C,E,G#,D,F,G,A,A,A)
void setup() { 
	// Set MIDI baud rate: Serial.begin(31250);
}

void loop() {
	noteOn(0x90,0x24,0x45);
	delay(100);
	noteOn(0x90,0x28,0x45);
	delay(100);
	noteOn(0x90,0x20,0x45);
	delay(100);
	noteOn(0x90,0x26,0x45);
	delay(100);
	noteOn(0x90,0x29,0x45);
	delay(100);
	noteOn(0x90,0x2B,0x45);
	delay(100);
	noteOn(0x90,0x21,0x45);
	delay(100);
	noteOn(0x90,0x21,0x45);
	delay(100);
	noteOn(0x90,0x21,0x45);
	delay(100);
}

// plays a MIDI note. Doesn't check to see that
// cmd is greater than 127, or that data values are less than 127:

void noteOn(int cmd, int pitch, int velocity) {
	Serial.print(cmd, BYTE);
	Serial.print(pitch, BYTE);
	Serial.print(velocity, BYTE);
}

example of control from a button, something similar can be used to be used for the trigger from another arduino

//BUTTON INPUT SUCCESS!
// define the pins we use, MIDI port is always on Arduino pin 1 (TX)
int switchPin1 = 8;
int switchPin2=9;
// general midi notes
char note1 = 84;
// C6 char note2 = 89;
//Perfect 5th mario coin block

// Variables
int switchState1 = LOW;
int switchState2 = LOW;
int currentSwitchState1 = LOW;
int currentSwitchState2 = LOW;

void setup() {
	// set the states of the I/O pins:
	pinMode(switchPin1, INPUT);
	// set MIDI baud rate :
	Serial.begin(31250);
}

void loop() {
	//switchPin1
	currentSwitchState1 = digitalRead(switchPin1);

	if( currentSwitchState1 == HIGH && switchState1 == LOW )
	// push
	//Note on channel 5 (0x94), some note value (note), middle velocity (0x45):
	noteOn(0x94, note1, 0x45);

	if( currentSwitchState1 == LOW && switchState1 == HIGH )
		// release
		//Note on channel 5 (0x94), some note value (note), silent velocity (0x00):
		noteOn(0x94, note1, 0x00);
		switchState1 = currentSwitchState1;

	//switchPin2
	currentSwitchState2 = digitalRead(switchPin2);

	if( currentSwitchState2 == HIGH && switchState2 == LOW )
		// push
		//Note on channel 5 (0x94), some note value (note), middle velocity (0x45):
		noteOn(0x94, note2, 0x45);

	if( currentSwitchState2 == LOW && switchState2 == HIGH )
		// release
		//Note on channel 5 (0x94), some note value (note), silent velocity (0x00):
		noteOn(0x94, note2, 0x00);
		switchState2 = currentSwitchState2;
	}

	// Send a MIDI note-on/off message.
	void noteOn(char cmd, char data1, char data2) {
		Serial.print(cmd, BYTE);
		Serial.print(data1, BYTE);
		Serial.print(data2, BYTE);
	}

	John code to write to arduino

	int fd;
	struct termios options;
	fd = open("/dev/ttyUSB0", O_RDWR | O_NOCTTY | O_NONBLOCK);
	tcgetattr(fd, &options);
	cfsetispeed(&options, B9600);
	cfsetospeed(&options, B9600);
	write(fd, "u\r", 3);
	//write the letter u to the arduino. This ca be changed to anything
	int nbytes;
	#define BUFSIZE 30
	char bufptr[BUFSIZE];
	while ((nbytes = read(fd, bufptr, BUFSIZE)) > 0) {
		//cout<<bufptr[-1]<<endl;
		//bufptr += nbytes;
		if (bufptr[-1] == '\n' || bufptr[-1] == '\r') {
			//cout<<"broke"<<endl; break;
		}
	}
```

### Instrument Selection
We can deal with instrument selection by creating garageband projects with the desired instruments, and saving them in a common directory. Because garageband only allows one project to be open at a time, we can use an apple script to open a desired project file and it will close the previous session and open a new one.

Here an example apple script to open a garage band project called "Piano.band", this script is saved as "piano.scpt".

```
tell application "Finder" activate open document file "Piano.band" of folder "GBTEST" of folder "Desktop" of folder "ian" of folder "Users" of startup disk end tell
```

To run an apple script from terminal use the following command. 

osascript piano.scpt

This will make it easy to create a GUI interface for selecting various instruments, as it can call the "osascript" command. This also opens up options to run this command over SSH detaching the user interface from the sound generating computer altogether. in place of using the osasript commands, the open() function in [http://processing.org/ processing] allows the opening of files, and will allow the .band files to be opened in garageband. this [http://www.superduper.org/processing/fullscreen_api/ fullscreen] library for processing allows the interface to be run in a fullscreen, if the user has only access to a touchscreen, the interface will be impossible to exited as there will be no public access to a keyboard.

sample code of such an interface, written in processing is below, along with a (non fullscreen) screenshot of the program running.

```
//BUILDS musical stairs kiosk touchscreen interface //fullscreen library from here http://www.superduper.org/processing/fullscreen_api/ import fullscreen.*; FullScreen fs; int pianox = 50; int pianoy = 50; int pianow = 75; int pianoh = 75; int eguitarx = 200; int eguitary = 50; int eguitarw = 75; int eguitarh = 75; int aswirlx=350; int aswirly = 50; int aswirlw=75; int aswirlh=75; int keyboardx=50; int keyboardy=200; int keyboardw=75; int keyboardh=75; int hornx=200; int horny=200; int hornw=75; int hornh=75; PImage piano = loadImage("piano.png"); PImage aswirl = loadImage("swirl.png"); PImage horn = loadImage("horn.png"); PImage eguitar=loadImage("eguitar.png"); PImage keyboard=loadImage("keyboard.png"); PImage bg=loadImage("background.jpg"); void setup() { size(640, 480); frameRate(10); fs = new FullScreen(this); fs.enter(); } void draw() { background(bg); image(piano,pianox,pianoy,pianow,pianoh); image(aswirl,aswirlx,aswirly,aswirlw,aswirlh); image(horn,hornx,horny,hornw,hornh); image(eguitar,eguitarx,eguitary,eguitarw,eguitarh); image(keyboard,keyboardx,keyboardy,keyboardw,keyboardh); } void mousePressed() { if (mouseX > pianox && mouseX < pianox+pianow && mouseY > pianoy && mouseY < pianoy+pianoh) { open("/Users/ibookg4/Desktop/musical-stairs/Piano.band"); } if (mouseX > eguitarx && mouseX < eguitarx+eguitarw && mouseY > eguitary && mouseY < eguitary+eguitarh) { open("/Users/ibookg4/Desktop/musical-stairs/Eguitar.band"); } if (mouseX > aswirlx && mouseX < aswirlx+aswirlw && mouseY > aswirly && mouseY < aswirly+aswirlh) { open("/Users/ibookg4/Desktop/musical-stairs/Aswirl.band"); } if (mouseX > keyboardx && mouseX < keyboardx+keyboardw && mouseY > keyboardy && mouseY < keyboardy+keyboardh) { open("/Users/ibookg4/Desktop/musical-stairs/Keyboard.band"); } if (mouseX > hornx && mouseX < hornx+hornw && mouseY > horny && mouseY < horny+hornh) { open("/Users/ibookg4/Desktop/musical-stairs/horn.band"); } }
```

### Arduino Code for Sensors/Emitters
'''For testing one sensor set up:'''

<pre>
//Serial transmit: pin 1 //Sensor input pins: 22 //LEDs output at pin 52, squarewave at 600 mircoseconds //Serial prints the "state of stairs" in every .0168 seconds int STAIR = 22; int DATA = 1; int LEDS = 52; void setup() { pinMode(STAIR, INPUT); pinMode(LEDS, OUTPUT); pinMode(DATA, OUTPUT); Serial.begin(9600); } void loop() { int stairSet = 0; int i = 0; while (i < 100) { digitalWrite(LEDS, LOW); delayMicroseconds(600); digitalWrite(LEDS, HIGH); stairSet = digitalRead(STAIR); i++; delayMicroseconds(600); } Serial.println(stairSet); } 
</pre>

'''For multiple stair set up (set to 28):'''

<pre>
/* Serial transmit: pin 1 Stair digital input pins 0-28 map to 22-49 LEDs output at pin 52, squarewave at 600 mircoseconds Set up initializes elements of array STAIR to corrosponding pins on Mega */ int STAIR[28]; int DATA = 1; int LEDS = 52; void setup() { for(int i = 1; i <= 28; i++) { int pn = 22; STAIR[i] = pn; pn++; } for(int i = 1; i <= 28; i++) { pinMode(STAIR[i], INPUT); } pinMode(LEDS, OUTPUT); pinMode(DATA, OUTPUT); Serial.begin(9600); } void loop() { int i = 1; int stairSet = 0; while (i <= 28) { digitalWrite(LEDS, LOW); delayMicroseconds(600); digitalWrite(LEDS, HIGH); int temp = digitalRead(STAIR[i]); stairSet = stairSet + (temp << (i-1)); i++; delayMicroseconds(600); } Serial.println(stairSet); }
</pre>

### Most Recent Updates

== Overview == The Musical Staircase project will transform the GSU main staircase into a musical staircase, where each step up the stairs will set off an individual note. Currently, the plan is to use an IR tripwire (an IR sensor and emitter on each side of the stair) which will communicate with a computer via an arduino (arduino.cc) microcontroller. The computer will have a user interface for changing the notes of the staircase. == Mailing List == [[Listserve_Commands| musicalstairs-list@bu.edu]] == Technical == So far, the plan is to use IR LEDs at one end of each step and IR sensors at the other end, so when someone steps on the stair, the sensor no longer sees the light. The sensor then sends a signal to an Arduino, which processes the signals from all the steps and sends the information to a computer at the top of the stairs. That computer is responsible for making the noise. Current plans involve ascending/descending notes with a user interface for changing the type of note (i.e. from piano to bagpipe). ====Staircase==== {| | [[Image:Full_Staircase.png|thumb|upright|Full GSU staircase]] | [[Image:Lower_Staircase.png|thumb|upright|Lower section of the GSU staircase]] | [[Image:Step.png|thumb|upright|Single step of GSU staircase]] |} width of stair: 76.25'' depth of stair: 11.25'' height of stair: 5'' ==== Computer Interface ==== Lead: Ian Felder, Jeff Crowell Team: Ian Felder, Jeff Crowell We are using a MIDI to USB converter that belongs to Jeff, and need to order our own at the following link http://www.amazon.com/Cable-Converter-Music-Keyboard-Window/dp/B0017H4EBG/ref=sr_1_2?ie=UTF8&qid=1287873776&sr=8-2 Once the midi interface becomes more of a permanant device, we should order this female midi jack from sparkfun. http://www.sparkfun.com/commerce/product_info.php?products_id=9536 The computer interface needs to read in the stair number tripped from the arduino and produce a note. Currently, the arudino will output a MIDI command with the CMD(ON/OFF), PITCH(note) and VELOCITY(volume). The arudino's serial output must be set to 31250b/s (Serial.begin(31250);) and the following function will send a midi signal to the computer. Using this solution, any music composition software can be used as long as it supports MIDI USB input (most). void noteOn(int cmd, int pitch, int velocity) { Serial.print(cmd, BYTE); Serial.print(pitch, BYTE); Serial.print(velocity, BYTE); } The CMD byte is on or off, 0x90 will trigger on, and any value between 0x81 and 0x8F will trigger off. The velocity byte anywhere between 0x00 for no volume, 0x45 for medium volume, and 0x90 for maximum volume. the pitch byte is determined by the following table. (table will format correctly) Middle C has a MIDI value of 60, perhaps that could be set to the middle stair? {|border = "1" ! Stair Number ! Note ! Decimal ! Hex |- |1|| F#|| 30|| 0x1E |- |2||G||31||0x1F |- |3||G#||32||0x20 |- |4||A||33||0x21 |- |5||A#||34||0x22 |- |6||B||35||0x23 |- |7||C||36||0x24 |- |8||C#||37||0x25 |- |9||D||38||0x26 |- |10||D#||39||0x27 |- |11||E||40||0x28 |- |12||F||41||0x29 |- |13||F#||42||0x2A |- |14||G||43||0x2B |- |15||G#||44||0x2C |- |16||A||45||0x2D |- |17||A#||46||0x2E |- |18||B||47||0x2F |- |19||C||48||0x30 |- |20||C#||49||0x31 |- |21||D||50||0x32 |- |22||D#||51||0x33 |- |23||E||52||0x34 |- |24||F||53||0x35 |- |25||F#||54||0x36 |- |26||G||55||0x37 |- |27||G#||56||0x38 |- |28||A||57||0x39 |} Arduino Midi Example code: //This code plays a seqence of notes (C,E,G#,D,F,G,A,A,A) void setup() { // Set MIDI baud rate: Serial.begin(31250); } void loop() { noteOn(0x90,0x24,0x45); delay(100); noteOn(0x90,0x28,0x45); delay(100); noteOn(0x90,0x20,0x45); delay(100); noteOn(0x90,0x26,0x45); delay(100); noteOn(0x90,0x29,0x45); delay(100); noteOn(0x90,0x2B,0x45); delay(100); noteOn(0x90,0x21,0x45); delay(100); noteOn(0x90,0x21,0x45); delay(100); noteOn(0x90,0x21,0x45); delay(100); } // plays a MIDI note. Doesn't check to see that // cmd is greater than 127, or that data values are less than 127: void noteOn(int cmd, int pitch, int velocity) { Serial.print(cmd, BYTE); Serial.print(pitch, BYTE); Serial.print(velocity, BYTE); } example of control from a button, something similar can be used to be used for the trigger from another arduino //BUTTON INPUT SUCCESS! // define the pins we use, MIDI port is always on Arduino pin 1 (TX) int switchPin1 = 8; int switchPin2=9; // general midi notes char note1 = 84; // C6 char note2 = 89; //Perfect 5th mario coin block // Variables int switchState1 = LOW; int switchState2 = LOW; int currentSwitchState1 = LOW; int currentSwitchState2 = LOW; void setup() { // set the states of the I/O pins: pinMode(switchPin1, INPUT); // set MIDI baud rate : Serial.begin(31250); } void loop() { //switchPin1 currentSwitchState1 = digitalRead(switchPin1); if( currentSwitchState1 == HIGH && switchState1 == LOW ) // push //Note on channel 5 (0x94), some note value (note), middle velocity (0x45): noteOn(0x94, note1, 0x45); if( currentSwitchState1 == LOW && switchState1 == HIGH ) // release //Note on channel 5 (0x94), some note value (note), silent velocity (0x00): noteOn(0x94, note1, 0x00); switchState1 = currentSwitchState1; //switchPin2 currentSwitchState2 = digitalRead(switchPin2); if( currentSwitchState2 == HIGH && switchState2 == LOW ) // push //Note on channel 5 (0x94), some note value (note), middle velocity (0x45): noteOn(0x94, note2, 0x45); if( currentSwitchState2 == LOW && switchState2 == HIGH ) // release //Note on channel 5 (0x94), some note value (note), silent velocity (0x00): noteOn(0x94, note2, 0x00); switchState2 = currentSwitchState2; }// Send a MIDI note-on/off message. void noteOn(char cmd, char data1, char data2) { Serial.print(cmd, BYTE); Serial.print(data1, BYTE); Serial.print(data2, BYTE); } John code to write to arduino int fd; struct termios options; fd = open("/dev/ttyUSB0", O_RDWR | O_NOCTTY | O_NONBLOCK); tcgetattr(fd, &options); cfsetispeed(&options, B9600); cfsetospeed(&options, B9600); write(fd, "u\r", 3); //write the letter u to the arduino. This ca be changed to anything int nbytes; #define BUFSIZE 30 char bufptr[BUFSIZE]; while ((nbytes = read(fd, bufptr, BUFSIZE)) > 0) { //cout<<bufptr[-1]<<endl; //bufptr += nbytes; if (bufptr[-1] == '\n' || bufptr[-1] == '\r') { //cout<<"broke"<<endl; break; } } ===Instrument Selection=== We can deal with instrument selection by creating garageband projects with the desired instruments, and saving them in a common directory. Because garageband only allows one project to be open at a time, we can use an apple script to open a desired project file and it will close the previous session and open a new one. Here an example apple script to open a garage band project called "Piano.band", this script is saved as "piano.scpt". tell application "Finder" activate open document file "Piano.band" of folder "GBTEST" of folder "Desktop" of folder "ian" of folder "Users" of startup disk end tell To run an apple script from terminal use the following command. osascript piano.scpt This will make it easy to create a GUI interface for selecting various instruments, as it can call the "osascript" command. This also opens up options to run this command over SSH detaching the user interface from the sound generating computer altogether. in place of using the osasript commands, the open() function in [http://processing.org/ processing] allows the opening of files, and will allow the .band files to be opened in garageband. this [http://www.superduper.org/processing/fullscreen_api/ fullscreen] library for processing allows the interface to be run in a fullscreen, if the user has only access to a touchscreen, the interface will be impossible to exited as there will be no public access to a keyboard. sample code of such an interface, written in processing is below, along with a (non fullscreen) screenshot of the program running. //BUILDS musical stairs kiosk touchscreen interface //fullscreen library from here http://www.superduper.org/processing/fullscreen_api/ import fullscreen.*; FullScreen fs; int pianox = 50; int pianoy = 50; int pianow = 75; int pianoh = 75; int eguitarx = 200; int eguitary = 50; int eguitarw = 75; int eguitarh = 75; int aswirlx=350; int aswirly = 50; int aswirlw=75; int aswirlh=75; int keyboardx=50; int keyboardy=200; int keyboardw=75; int keyboardh=75; int hornx=200; int horny=200; int hornw=75; int hornh=75; PImage piano = loadImage("piano.png"); PImage aswirl = loadImage("swirl.png"); PImage horn = loadImage("horn.png"); PImage eguitar=loadImage("eguitar.png"); PImage keyboard=loadImage("keyboard.png"); PImage bg=loadImage("background.jpg"); void setup() { size(640, 480); frameRate(10); fs = new FullScreen(this); fs.enter(); } void draw() { background(bg); image(piano,pianox,pianoy,pianow,pianoh); image(aswirl,aswirlx,aswirly,aswirlw,aswirlh); image(horn,hornx,horny,hornw,hornh); image(eguitar,eguitarx,eguitary,eguitarw,eguitarh); image(keyboard,keyboardx,keyboardy,keyboardw,keyboardh); } void mousePressed() { if (mouseX > pianox && mouseX < pianox+pianow && mouseY > pianoy && mouseY < pianoy+pianoh) { open("/Users/ibookg4/Desktop/musical-stairs/Piano.band"); } if (mouseX > eguitarx && mouseX < eguitarx+eguitarw && mouseY > eguitary && mouseY < eguitary+eguitarh) { open("/Users/ibookg4/Desktop/musical-stairs/Eguitar.band"); } if (mouseX > aswirlx && mouseX < aswirlx+aswirlw && mouseY > aswirly && mouseY < aswirly+aswirlh) { open("/Users/ibookg4/Desktop/musical-stairs/Aswirl.band"); } if (mouseX > keyboardx && mouseX < keyboardx+keyboardw && mouseY > keyboardy && mouseY < keyboardy+keyboardh) { open("/Users/ibookg4/Desktop/musical-stairs/Keyboard.band"); } if (mouseX > hornx && mouseX < hornx+hornw && mouseY > horny && mouseY < horny+hornh) { open("/Users/ibookg4/Desktop/musical-stairs/horn.band"); } } [[Image:Kiosk2.png]] ===Sensor/Emitter Wiring=== Lead: Dan Gastler and Chris Hoffman Things with the patch board to fix (pin numbers are looking at the BACK of the board, counting from left to right. This is DIFFERENT then the numbering for the jacks below) : * pin 1 on J30+ is not physically connected to the jack, but IS the pin that is physically connected to the arduino. * pin 1 on J31 is ACCIDENTALLY connected to 5 volts (therefore also is the corresponding arduino pin). This is a manufacturing error, right by the pin 1 on J31, and has been cut with a blade. * pin 2 & 3 on J30+ are ground * pin 4 is 5 volts * pin 5 and 6 are not connected to anything * WE MUST solder purple wire from pin 1 to pin 5 Everyone: take serious note, this will be confusing. The below is looking down on the jacks, counting from left to right. Sensor's patch-board jack: originally wrong * 1: signal yellow * 2: 5volts green * 3: GND red * 4: GND black Sensor's board jack: * 1: 5v green * 2: GND r/b * 3: signal yellow * 4: GND r/b Emitter's patch-board jack: * 1-3: collector (?) * 4: 5V Emitter's board jack: * 1: ? * 2: GND * 3: * 4: GND OLD WIRING: Holding the jack up (wires down), looking at the top: blue, blue stripe, green, green stripe. stripes: ground FOR RECEIVERS BLACK is five volts RED is ground GREEN in signal YELLOW is ground OLD: blue: 5v input voltage, green: arduino read wire FOR EMITTERS OLD: blue: input + 5 volts, green: output, transistors Hardware: {| | v0.1: | [[image:IR_Receiver_rpm7138.pdf|thumb|upright|IR receiver]] |} Test 1: In lab setup with one sensor and emitter. Video soon Test 2: On stairs @ GSU [[image:Test2a.jpg|thumb|Emitters]] [[image:Test2b.jpg|thumb|Sensors]] PCBoard: {| | RJ11 6p2c: | [http://search.digikey.com/scripts/DkSearch/dksus.dll?Detail&name=609-3784-ND Option 1] | [http://search.digikey.com/scripts/DkSearch/dksus.dll?Detail&name=WM5430-ND Option 2] |} {| | LED connector: | [http://search.digikey.com/scripts/DkSearch/dksus.dll?Detail&name=S5438-ND 2pin right angle] |} {| | PCBoard: | [[image:PCBoardV0.1.png|thumb|V0.1]] | [[image:PCBoardV1.0.png|thumb|V1.0 Sensor/Transmitter]] |} Prices: {| | [https://spreadsheets.google.com/ccc?key=0Ar7hGgQILVtEdEZYQ1FjVkpDSHkzbnFvM2wwTE90ZVE&hl=en&authkey=CIzn7tsP spread sheet] |} ====Sensor Frequency==== 37.9 kHz ====Arduino Code for Sensors/Emitters==== '''For testing one sensor set up:''' <pre> //Serial transmit: pin 1 //Sensor input pins: 22 //LEDs output at pin 52, squarewave at 600 mircoseconds //Serial prints the "state of stairs" in every .0168 seconds int STAIR = 22; int DATA = 1; int LEDS = 52; void setup() { pinMode(STAIR, INPUT); pinMode(LEDS, OUTPUT); pinMode(DATA, OUTPUT); Serial.begin(9600); } void loop() { int stairSet = 0; int i = 0; while (i < 100) { digitalWrite(LEDS, LOW); delayMicroseconds(600); digitalWrite(LEDS, HIGH); stairSet = digitalRead(STAIR); i++; delayMicroseconds(600); } Serial.println(stairSet); } </pre> '''For multiple stair set up (set to 28):''' <pre> /* Serial transmit: pin 1 Stair digital input pins 0-28 map to 22-49 LEDs output at pin 52, squarewave at 600 mircoseconds Set up initializes elements of array STAIR to corrosponding pins on Mega */ int STAIR[28]; int DATA = 1; int LEDS = 52; void setup() { for(int i = 1; i <= 28; i++) { int pn = 22; STAIR[i] = pn; pn++; } for(int i = 1; i <= 28; i++) { pinMode(STAIR[i], INPUT); } pinMode(LEDS, OUTPUT); pinMode(DATA, OUTPUT); Serial.begin(9600); } void loop() { int i = 1; int stairSet = 0; while (i <= 28) { digitalWrite(LEDS, LOW); delayMicroseconds(600); digitalWrite(LEDS, HIGH); int temp = digitalRead(STAIR[i]); stairSet = stairSet + (temp << (i-1)); i++; delayMicroseconds(600); } Serial.println(stairSet); } </pre> === Mounting === Lead: Rusty Team: ''Final Plan'': Use double stick tape to attach the circuit boards directly to the side of the stairs in the correct position. Then run a 2X4 painted the same color as the side of the stairs (dark grey). We will need to obtain a paint chip. The board will protect the circuit boards while still allowing for easy access for fixing and simple set up. To do: -obtain stair dimensions -length of each section -obtain double sided tape -obtain wood and cut to length properly with angles at either end -attach piece at top to hold up, and at midway to stablize -match paint color and obtain paint -get a cord hiding system. (use ducttape as back up) -mount board on site -use a bit more double stick tape to insure that it does not come off the wall -mount circuit board under board -tape other parts underneath stairs ''New plan for sensors/emitters'': To create an easily to install beam routed out in the bottom/middle to run wires up and down the staircase, with holes in the side for the sensors and emitters. ''Old plan for sensors/emitters'': The original plan was to attach the sensors directly to the side of the stairs with double-sided tape or similar adhesive. For non-flat components, they might need to be mounted in epoxy/acrylic/hot-melt first, then attached. Wires will be run along the side of the step and down underneath to North side of the stairs (closest to the window). Those wires will be run to the top of the stairs, where any Arduinos and computers will be located. Other mounting problems for solving: *speakers *laptop/mouse and flatscreen monitor interface === Other === ==== Piezo-Electric Vibration Sensors ==== A possible alternative to the IR sensor might be some sort of microphone which would pickup sound on the surface of the stair. I tested it personally, but with a mini-amplifying speaker and a specially designed microphone. However, amplifying the sound off a surface might be easier than amplifying a wave from an IR LED way out of range, because you can't tell between ambient light and the light form the LED. Costs and specifics are unknown. Possible component (a piezo vibration sensor): http://www.sparkfun.com/commerce/product_info.php?products_id=9196 I just figured out that what I tested the idea on was a piezo electronic vibration sensor not a microphone. - Nik Huntoon and Chris Woodall == Upcoming Meetings == Every Sunday at 5pm. Updates at weekly BUILDS meeting, Wednesday at 6:30. ==== Build Session ==== Dates to be announced. ==Members== *[[Valerie Young]] (Project Leader) *[[John-Nicholas Furst]] (Project Leader) *[[Russell Shomberg]] *[[Nicholas Colasuonno]] *[[Danny Cooper]] *[[Christopher Woodall]] *[[Janoo Fernandes]] *[[Katherine Zhao]] *[[Christopher Hoffman]] *[[Samir Ahmed]] *[[Dan Gastler]] == Parts to Order == https://spreadsheets.google.com/ccc?key=0Ajk4NM7crW6bdEJfbHkwcEpyOXZ3VDZnZnZJekZWV2c&hl=en&authkey=CLDsxvAB