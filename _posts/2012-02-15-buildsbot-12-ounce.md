---
title:  "BUILDSbot 12 ounce"
date:   2012-02-15
author: "buildscc"
permalink: /news/:year/:month/:day/:title/
tag: [projects]
---

[[Image:IMG_4024.jpg|thumb|right|240px|12 Ounce compared to its name sake. The 12 Fl. Ounce Diet Coke can.]]

### Overview
BUILDSbot 12 Ounce is part of the overarching BUILDSbot project. The goal is to create a functional robot which can take commands from a USB serial connection (possibly move to a wireless connection eventually).

The robot should also be capable of doing line following as its main function. USB connectivity is simply for testing and possibly to help simplify future wireless based communication schemes.

### Specifications and Goals
[[Image:BUILDSbot-12Ounce-1-Holding.jpg|thumb|right|200px|Chris Holding 12 Ounce]]

* Tiny, lightweight and easy to make.
* Line Following Capabilities
* Begin development on a standard AVR-C++ library for future AVR microcontroller projects

### Version 1
Coming soon...

12 Ounce V1.0 is currently being worked on.

### Parts

### Electronics

### Mechanical

### Design

### Block Diagram

### Schematic

### PCB Layout

### Chasis/Mounting

### Change Log

### Prototype

### Parts

### Electronics
```
{| '''Part Names''' || '''Quantity''' || '''Part Number/Description''' || '''Vendor/Vendor ID'''|| '''Link/Datasheet''' |- | J1*, J2* || 2 || Mini Metal Gearmotor 100:1 (6V DC) || Sparkfun - ROB-08912 || [http://www.sparkfun.com/products/8912] |- | J1, J2 || 2 || Terminal Block 2-pin 3.5mm || Adafruit - 724 || [https://www.adafruit.com/products/724] |- | U3, U4, U5 || 3 || QRD1114 - Optical Detectors/Phototransistors || Sparkfun - SEN-00246 || [http://www.sparkfun.com/products/246] |- | U1 || 1 || Arduino Duemillanove (Uno also works) || DEV-11021 || [http://www.sparkfun.com/products/11021] |- | U2 || 1 || L293E Quadruple Half H-Bridge || Digikey - 497-3622-ND || [http://www.st.com/internet/com/TECHNICAL_RESOURCES/TECHNICAL_LITERATURE/DATASHEET/CD00000058.pdf] |- | D1 - D8 || 8 || Schottky Protection Diodes || N/A || N/A |- | C1, C2 || 2 || .1uF Ceramic Capacitors || N/A || N/A |- | C3 || 1 || 10uF Ceramic Capacitors || N/A || N/A |- | R1, R3, R5 || 3 || 200 Ohm Resistor || N/A || N/A |- | R2, R4, R6 || 3 || 5.6kOhm Resistors || N/A || N/A |- |}
```

### Mechanical
```
{| '''Quantity''' || '''Part Number/Description''' || '''Vendor/Vendor ID'''|| '''Link/Datasheet''' |- | 1 || Ball Caster Omni-Directional Metal || Sparkfun - ROB-00320 || [http://www.sparkfun.com/products/320] |- | 2 || 32x7mm Wheels || Sparkfun - ROB-08901 || [http://www.sparkfun.com/products/8901] |- | 1 || Broken IR/Microwave Motion Detection Sensor for the chasis || N/A || N/A |- | 2 || Heavy Duty Zip Ties (in same these things actually secure the motors in place || N/A || N/A |}
```

### Design

### Full Schematic
[[Image:12OUNCE_SCHEMATIC2.JPG|thumb|center|400px|Schematic done in EAGLE CAD]]

This schematic is laid out in EAGLE CAD 6, which offers an XML file format. The full schematic is available on [[https://github.com/cwoodall/buildsbot-12-ounce](https://github.com/cwoodall/buildsbot-12-ounce) Github].

### Motor Controller
[[Image:BUILDSbot-12Ounce-1-Side.jpg|thumb|center|250px|Side View of Motor Controller]]

The motor controller works in a very simple manner here. You have control of 3 pins A, B and Enable for each motor. Enable is hooked up to a PWM pin and will control the speed of the motors and whether they are on or off. Pins A and B will be set HIGH or LOW to determine the direction of the motor. For example, if A is HIGH and B is LOW you will move Counter Clockwise. Alternatively you can do a halt, which will drive the motor against itself it is moving by raising both A and B HIGH.

The problem is this state is not very good for the motor and does not actually lock the motor once it has stopped moving. To do a true halt A and B must be strobed between the Counter Clockwise state and the clockwise state. In the future models A will go direct and B will be the same pin as A and go through a NOT gate to reduce pin usage on the microcontroller. This also ensures that the halt state cannot be reached. Instead you should use a proper halt, which is more effective and better for the motors.

### Optical Detectors
[[Image:BUILDSbot-12Ounce-1-SensorArray.jpg|thumb|right|250px|Sensor Array]]

On the bottom of 12 Ounce 3 Optical Detectors/Photo-transistors from Sparkfun were mounted. These are very cheap, noise reduced units which can easily tell white from black and do object detection. These detectors are pointed down and are intended for use as line followers. Since white and black react very differently when IR light is shined on them we can easily tell the difference between the two shades.

Thus if a basic line follower course is created (white background with black lines) 12 Ounce should very easily be able to navigate it with the 3 sensors. Two of the sensors are spaced towards the outer extremities of 12 Ounce while the third is set in the centre and a little bit back.

This should allow for simplified tracking of lines. If a line appears to the right sensor but none of the others we can deduce the direction we should move in. If we see a line under the central sensor we know we are likely on path, or maybe at a decision point if certain other circumstances exist. Using all of this information we should be able to follow lines and possibly navigate slightly more complicated courses, which include decision points.

### Chasis
[[Image:BUILDSbot-12Ounce-1-Bottom1.jpg|thumb|left|260px|Bottom mounting]]

[[Image:BUILDSbot-12Ounce-1-TopOn.jpg|right|thumb|200px|Full 12 Ounce with its motion detector top on]]

The chassis is constructed out of a Motion Detection unit which was accidentally fried by me and a friend of mine. The flat back plate of the detector made up the base of the robot and a few holes were drilled into it. The holes function to: allow wires to be run from the motors and sensors to the microcontroller and motor controller; attach the motors to the chasis via zip ties; secure the ball roller with screws; and allow the line sensors to poke through the bottom of the chasis. The current mounting situation for the motors involves using zip ties to hold the motors in place. This is effective and deals perfectly with the forces at play; however, I am currently looking into a better solution (velcro, double sided tape, etc). The top of the motion detector is used as a cover for the robot for storage and eventually for when it is operating. The plan is to allow BUILDS members to decorate it and make it look nice and representative of BUILDS as it works its way around the course.

### Code Overview
Currently go to [https://github.com/cwoodall/buildsbot-12-ounce Github] to grab the code.

### Example Logic
This is some basic Psuedo-Code to get the point across of how a basic line follower might work. This code is not meant to work, some variables are missing as are the implementations of the functions. This code is subject to tons of changes, but demonstrates the simplest way of doing line detection, with no mapping.

The actual logic I used began to get more complex and is simply a list of states and not very elegant.

```
#define LEFT 0
#define MID 1
#define RIGHT 2
#define THRESHOLD 50

// ADC inputs are 10 bits long and unsigned.
uint16_t line_sensors[3];

// Implement some way to update sensors
void updateSensor(sensor);
void updateSensors();
void motor_speed(motor_pin, pwm_speed);

void main() {
	while(1) {
		// Fetch new data every loop
		updateSensors();

		// Basic algorithm only requires 2 sensors
		if (line_sensors[LEFT] > (line_sensors[RIGHT] + 20)) {
			// Then the line is to the left... move left
			motor_speed(left_motor, 100);
			motor_speed(right_motor, 250);
		} else if (line_sensor[RIGHT] > (line_sensors[LEFT] + 20)) {
			// Then the line is to the right... move right
			motor_speed(left_motor, 250);
			motor_speed(right_motor, 100);
		} else {
			// Keep going straight
			motor_speed(left_motor, 200);
			motor_speed(right_motor, 200);
		}
	}
}
```

### Classes
:Document

### Milestones
- [DONE] Milestone 1: Constructed and Moving === :

[http://www.youtube.com/watch?v=Bhn6o0GdhjE&feature=youtu.be](http://www.youtube.com/watch?v=Bhn6o0GdhjE)

Video of the BUILDSbot doing some basic movements (pre-programmed)

All of 12 Ounces sensors have been properly tested and identified. 12 Ounce can also take very basic commands over serial.

Current "protocol" is

```
{| '''Character''' || '''Action''' |- | g || Start moving (in whatever specified direction) |- | s || Stop movement (not a halt, a soft stop) |- | l || Turn/Spin Left (in place) |- | r || Turn/Spin Right (in place) |- | f || Forward Direction |- |b || Backward Direction |}
```

- [DONE] Milestone 2: Line Following in C++

12 Ounce should be able to follow a line without any problems at this point, even if the algorithm is sort of nasty looking. :

[[http://www.youtube.com/watch?v=2G8haKJKFIQ&feature=youtu.be](http://www.youtube.com/watch?v=2G8haKJKFIQ) Video of 12 Ounce Line Following]

### Issues:

* BUILDSbot lost Serial support in the move from Arduino to C++ (namely because I didn't spend enough time on getting serial communications working.

[ACTIVE] Milestone 3: Create a cheap, simple and easy to reproduce kit and general development platform

### Additional Specs for a 12 Ounce Robotics Platform
* Wheels mountable to PCB Board.
* 3-4 downward pointing Photo Transistors for detecting lines
* Expansion ports for up to 2 extra servos
* Shield like system
* Break out extra I/O pins in some manner allowing for addition of new sensors (possible IR collision detection sensors or range finders, or cameras, or whatever).
* USB bootloader programmable. (Arduino bootloader compatible, for those who like that nicety). Should also be mostly through-hole, possibly with an SMT MCU to combine the USB and MCU into one chip. Otherwise, use FTDI chip

### Team
* Christopher Woodall
* Anthony Inzero
* Allan Wirth

### References
* [[https://github.com/cwoodall/buildsbot-12-ounce](https://github.com/cwoodall/buildsbot-12-ounce) Github Repository (Firmware and Schematics)]
* [[http://www.flickr.com/photos/cjwoodall/sets/72157629429983849/](http://www.flickr.com/photos/cjwoodall/sets/72157629429983849/) Photo Dump]