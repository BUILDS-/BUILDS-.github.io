---
title:  "BUILDS Bot"
date:   2011-11-09
author: "buildscc"
permalink: /news/:year/:month/:day/:title/
tag: [projects]
---

### Overview
BUILDS Bot will be circular, autonomous, wheeled robot designed with the future in mind. It will consist of a base disk module,12 inches in diameter, which is driven by two DC motors attached to wheels with a smaller, free moving wheel allowing for full rotation in place.

Eight IR sensors, 45 degrees apart, will be placed around the circumference of the disk. The motors and sensors wil be controlled from an Arduino board that will also be responsible for simple robot behaviors. For more complex behaviors, the base will mount an mini-ITX motherboard with an Intel x86 CPU.

Future projects will be able to use the robot for their own purposes by stacking further disks on top of the base module. The project will generate open source software libraries that will allow other teams outside of BUILDS to program their own BUILDS bot.

### Progress Reports

### April 10, 2012
* Talked about DARPA Grand Challenge for a humanoid robot [https://www.fbo.gov/utils/view?id=74d674ab011d5954c7a46b9c21597f30 DARPA Grand Challenge](https://www.fbo.gov/utils/view?id=74d674ab011d5954c7a46b9c21597f30 DARPA Grand Challenge).
* Parts orders put in for McMaster-Carr (Polycarbonate), HobbyKing (Battery) and Pololu.
* Discussed plans for motor mounting brackets. Patrick and Rusty will make these and the polycarbonate chasis. The machine shops are packed right now, but they should be able to get ahold of the proper equipment.
* Chris has finished the schematic and he needs to finish doing the PCB layout and send a parts order and PCB order. If the PCB is not done we can rig together a system that will work decently well from what we have for the showcase. Similar to what we currently have. Should work out fine actually.
* Watched propaganda and formed the [[BU Propaganda Enthusiast Society]] (BUPES, pronounced Boops).

### April 9, 2012
Put in a parts order to Leo. Needs to be OKed then sent to Theresa.

Supplier Part# Description Qty Price/Part McMaster-Carr 8574K55 Clear Polycarbonate to craft our chasis from.

- 1 $39.36 HobbyKing 601Ax5 XT60 connectors for the battery.
- 1 $2.44 HobbyKing ECO6 Charger for Battery.
- 1 $17.99 HobbyKing Z22003S20C ZIPPY Flightmax 2200mAh 3S1P 20C
- 1 $8.99 Pololu 1930 Female Crimp Pins for 0.1" Housings 100-Pack
- 1 $5.95 Pololu 1902 0.1" (2.54mm) Crimp Connector Housing: 1x3-Pin 25-Pack
- 1 $0.79 Pololu 965 0.100" (2.54 mm) Breakaway Male Header: 1x40-Pin, Straight
- 4 $0.99 Pololu 2440 Screw Terminal Block:
- 2-Pin, 5 mm Pitch, Side Entry (4-Pack) 2 $1.50
- Total Cost: $82.48

### April 3, 2012
Mechanical CAD design is nearing completion. We will be using polycarbonate and Rusty and Patrick will be doing the CNCing. They may also be CNCing wheels which fit nicer for our design. We will be purchasing part number 8574K55 from McMaster Carr (24" by 24" by 1/4" clear polycarbonate. The cost is $39.36 and will give us enough polycarbonate for later (for possible wheels or an additional layer or two. Battery will be picked up from Radioshack. They have some pretty nice batteries we can use for 2 Liter Electronics schematic is almost complete. The PCB board should be done soon. Chris plan on sending it out to review to Eric Hazen and Dan Gastler to reduce the number of errors and problems. Coding is at a stand still until the Gyros come in and the electronics board is done.

### Task Allocation
- [[Russell Shomberg]] and [[Patrick Ehrlicher]] will be finishing up the CAD designs, most notably for two mounting brackets for our motors.
- [[Christopher Woodall]] needs to put in a part order for the polycarbonate so that the chasis can be made.
- [[ Christopher Woodall]] needs to complete the electronics layout in KiCAD. Schematic then PCB layout (~1 weeks worth of work, bug him about it).
- [[Allan Wirth]] has no particular duties this week except to be ultra productive on other projects.

### 12 Ounce Update
12 Ounce is a smaller robotic platform and has recently received eyes. We work on 12 Ounce from time to time to test ideas and get hands on experience with certain components. Here is a video of 12 Ounce working: [http://www.youtube.com/watch?v=snESCy5T1bk&feature=youtu.be 12 Ounce working]

### March 27, 2012
Revised and defined our design goals:
* Modularity in the mechanical design (and electronic design using the I2C bus)
* Ability to navigate BUILDS with minimal collisions
* Basic mapping abilities should be present. Defined our CAD design parameters:
* 12" diameter 1/4" thickness polycarbonate disk (possible change)
** Should have places to mount the IR sensors
* 2 mounting brackets for the motors
* 5" x 4" PCB board (possibly will change), mounted above board with standoffs
* Holes for threaded rod (modularity)

We are also going to replace our wheels, with new wheels that fit better and are more durable. We are waiting for a finished CAD design to choose the exact wheels. [http://www.active-robots.com/motors-wheels/wheels/speed-run-robot-wheels-12-5mm-wide.html Possibility for our new wheels]

Need to figure out an easy way to share electronics between modular layers... (Ribbon cables?)

Thoughts about updating our microcontroller. Currently we are using an ATMega328 on an Arduino development board (only using Arduino language for rapid testing of electrical components). However, there are plans to put a beefier microcontroller into our future PCB board. One option was to go with an ARM chip, possibly something in the [http://www.nxp.com/documents/data_sheet/LPC2131_32_34_36_38.pdf LPC2131 family] or the [http://ics.nxp.com/products/lpc1000/datasheet/lpc1311.lpc1313.lpc1342.lpc1343.pdf LPC1311 family].

These chips offer higher processing speeds, a built-in USB interface, More GPIOs, I2C bus (which we currently have). GPIOs which are not used for main board purposes should be broken out and accessible to future boards via ribbon cable or "shields". The disadvantages of using an ARM chip are that we would likely need a RTOS to manage the processes, so that we can properly thread and manage our processes.

Also there is an increased complexity in programming for an ARM chip versus an 8-bit microcontroller like an ATMega32u4 which is another option (ATMega chip which provides on board USB support). Also planning on using this PCB Manufacture [https://www.my4pcb.com/ Advanced Circuits] with their Barebone PCB 1 day turnaround prototyping option. We will also likely put in a massive Digikey order for our parts (also order extras of those parts).

### Task Allocation
* Russell Shomberg and Patrick Ehrlicher are on CAD layout duty for the mechanical design.
* Chris Woodall is on Electronics EDA/CAD design for the schematic and PCB board. Allan Wirth is helping him pick out a new processor.
* Allan Wirth is going to work with our current 2 Liter prototype and bring him to a semi functional level [[Image:2Liter_IRSensor_3272012.jpg|thumb|2 Liter with IR Sensor]]

### Progress Report
[http://www.youtube.com/watch?v=9HJlxGpTHEc&feature=youtu.be 2 Liter can move and detect walls... Kind of... Has a little bit of an issue rolling straight (likely a wheel alignment issue)]

### March 20, 2012
[[Image:2_Liter_Bottom_32012.jpg|thumb|left|Bottom of 2 Liter, displaying the mounting]]

We did a lot of work today. We mounted the motors onto our new semi-circle chasis. To do this we used:
* 4 rubber chair stoppers that were the same radius as our motor
* 4 U brackets of appropriate radius

This mounting method is somewhat non-traditional, but it works and holds the motors in solid. It is also non-permanent. If the appropriate mounting brackets are purchase they can easily be put in place of our current mounting solution. The motor controller was relocated to a tiny breadboard that could be easily mounted to our chasis.

All electronics were mounted using removable velcro tape, which allows for a removable platform that we can be changed during the prototyping stages. Rapid prototyping is essential for the success of this project because it is a great way to learn about and change your methods with limited consequences. The basic schematic used for our motor controller is pictured [[#Motor Controller|below]].

The pin mapping is stated in the code snippet. Our current electronic set up allows for tethered movement. 2 Liter needs a power supply for the Arduino and a power supply for the motors. We have been using the USB link to program and power the Arduino and our new Bench Power Supply as an adjustable voltage source for 2 Liter's motors.

Currently we are researching battery solutions and they should be ordered at the next meeting. [[Image:2_Liter_Electronics_2_32012.jpg|thumb|right|Electronics for 2 Liter (Motor Controller and Arduino)]]

```
/* Buildsbot 2 Liter Test Code
 * March 20, 2012
 * Written By Christopher Woodall
 *
 * Makes 2 Liter do a little dance. Developed using the Arduino language and IDE.
 *
 * Pin Setup
 * Left Motor
 * 11 - Enable
 * 12 - A
 * 13 - B
 *
 * Right Motor
 * 10 - Enable
 * 9 - A
 * 8 - B
 */

void setup() {
	pinMode(13, OUTPUT);
	pinMode(12, OUTPUT);
	pinMode(11, OUTPUT);
	pinMode(10, OUTPUT);
	pinMode(9, OUTPUT);
	pinMode(8, OUTPUT);
	stopBot();
}

void loop() {
	forward();
	delay(1000);
	backward();
	delay(1000);
	turnLeft();
	delay(1000);
	turnRight();
	delay(1000);
	forward();
	delay(500);
	turnRight();
	delay(1000);
	stopBot();
	delay(3000);
}

void backward() {
	digitalWrite(13, LOW);
	digitalWrite(12, HIGH);
	digitalWrite(11, HIGH);
	digitalWrite(10, HIGH);
	digitalWrite(9, LOW);
	digitalWrite(8, HIGH);
}

void forward() {
	digitalWrite(13, HIGH);
	digitalWrite(12, LOW);
	digitalWrite(11, HIGH);
	digitalWrite(10, HIGH);
	digitalWrite(9, HIGH);
	digitalWrite(8, LOW);
}

void turnLeft() {
	// L digitalWrite(13, LOW);
	digitalWrite(12, HIGH);
	digitalWrite(11, HIGH);
	// R digitalWrite(10, HIGH);
	digitalWrite(9, HIGH);
	digitalWrite(8, LOW);
}

void turnRight() {
	// L digitalWrite(13, HIGH);
	digitalWrite(12, LOW);
	digitalWrite(11, HIGH);
	// R digitalWrite(10, HIGH);
	digitalWrite(9, LOW);
	digitalWrite(8, HIGH);
}

void stopBot() {
	digitalWrite(11, LOW);
	digitalWrite(10, LOW);
}
```

Video of 2 Liter working: [https://s-static.ak.facebook.com/rsrc.php/v1/y1/r/Qyh5ph9cQ_M.swf?v=10150581414727084&ev=0 BUILDSbot 2 Liter taking a stroll] ''Note: Gather price information and part information''

### March 7, 2012
My minions (You know... Chris, Allan, and Rusty) have been hard at work this past month honing their crafts for the eventually creation of this unholy machine.

We've managed to setup an I2C bus between the accelerometer,gyroscope, and ADC, and we've discovered that our gyroscope was defective. More parts have arrived too, heralding a new rush of activity involving wheels and IR sensors. Among the new parts, we've purchased some new motor controllers that integrate diodes that protect against motor feedback.

Soon we'll have a robot platform to play with not a miscellaneous collection of parts. Rusty will be machining custom motor brackets for the now semi-circle shaped body. Chris will be working on a PCB layout so all of our sensors can be mounted together, and Allan has created a bunch of nice code for integrating everything all together.

-Z Parts List
http://www.pololu.com/catalog/product/1431 (80x10mm Red) (Wheels) (2) http://www.pololu.com/catalog/product/955 (.75 inch) (Caster) (1) http://www.pololu.com/catalog/product/1081 (Mounting Adapters for Wheels) (1) http://www.pololu.com/catalog/product/117 (Harnesses for IR Sensors) (8) http://www.pololu.com/catalog/product/24 (Motor Controller Chips) (2)

### Febuary 14, 2012
Parts,Parts,Parts! We have parts! Today I'm proud to report that our ADC and motor controllers came in today. Additionally, the motors themselves will arrive Thursday by the end of the day, with the IR sensors coming in sometime next week. In the meantime, we've decided to build a mini-robot using some parts Chris had knocking around, so go check that out over on the [[BUILDSbot Diet Coke|project]] page.

A hackathon has been scheduled this Saturday, February 18th, starting in the early afternoon, so make sure to come by and hack away on the thing! We've also chosen code names for both robots, please inquire to team member Allan towards there significances...As always, more to come later. -Z

### January 26, 2012
Another day, another intensively productive meeting. Below lays before you the final list of parts we'll need to get this project off the ground. You'll notice a few more playthings than last we met. Namely, the 12-bit, 8 channel ADC (We need more of them!), and the motors with encoders (something whats other she said,yeah, we've decided to get new motors). Having motors that can tell us their revolutions per minute is great for things like feedback, which is rad code speak for deducing where the robot really is versus where we think it is after we moved it.

Yes, I really did coin the phrase "rad code speak", please address a stamped envelope to yours truly with 2 cents inside for all utterances of this phrase in every day conversation. You may also keenly notice that we've changed out Accelerometer out for a more resolute model that runs on an I2C bus. Moods are high, and we're all very excited to get parts in from which to tinker and build with. Until next time. -Z

### Tentative Parts List
- 8 x Sharp IR sensors http://www.robotshop.com/sharp-gp2y0a21yk0f-ir-range-sensor-2.html [http://www.robotshop.com/content/PDF/datasheet-gp2y0a21yk0f.pdf Datasheet]
- $8.80 4 x Motor Controllers http://search.digikey.com/us/en/products/L293E/497-3622-ND/677549 [http://www.st.com/internet/com/TECHNICAL_RESOURCES/TECHNICAL_LITERATURE/DATASHEET/CD00000058.pdf Datasheet]
- $11.40 1 x Accelerometer http://www.sparkfun.com/products/9836 [http://www.analog.com/static/imported-files/data_sheets/ADXL345.pdf Datasheet]
- $27.95 1 x Gyroscope http://www.sparkfun.com/products/10612 [http://www.st.com/internet/com/TECHNICAL_RESOURCES/TECHNICAL_LITERATURE/DATASHEET/CD00265057.pdf Datasheet]
- $49.95 2 x DC Motors w/encoders http://www.robotshop.com/productinfo.aspx?pc=RB-Dev-40&lang=en-US [http://www.robotshop.com/content/PDF/datasheet-emg30.pdf Datasheet]- $115.08 1 x ADC Converter http://www.gravitech.us/i2c128anco.html [http://site.gravitech.us/MicroResearch/I2C/I2C-ADC/ADS7828.pdf Datasheet]
- $19.99 Total: $313.17

### January 21, 2012
Today we finalized the what the processor for the robot will look like, namely that we'll have an Arduino control the low level stuff such as sensors and motors, and that we'll have the higher level behavior be controlled by *drumroll* an onboard x86 Intel processor. We plan to go with an mini ITX board running Linux (Most likely Arch), with communication to the Arduino going through a serial port.

We've rediscover two [http://www.firstwiki.net/index.php/CIM_motor First Robotics motors] that we intend to use, there very torquey and should let us have a robot that weighs in around 30 pounds. Sensors were discussed, and we decided to go with an accelerometer and 8 Sharp IR sensors recessed 4 inches (there minimum range) onto the frame as to avoid junk data. A initial list of parts we need to order was also created for the project

* 8 x Sharp GP2Y0A21YKOF IR sensors
* 1 x Accelerometer
* 2 x [http://datasheet.octopart.com/L6202-STMicroelectronics-datasheet-2876.pdf L6202 Motor Controllers]

Gears and wheels may or may not be added to this initial order, we'd like to prototype everything first and get used to programming the Arduino, which, on a side note, we've also rediscovered laying around. Regarding some administrative details, we also decide to start meeting twice weekly on Tuesday and Thursday nights, 6 to 8. Anyways, we're all super excited to get the project underway, and I hope you stop on by! So. You know. Go ahead and do that. See you space cowboy. -Z

### Design

### Mechanical Design
[[Image:BUILDSbot_ChasisPlate_RevA.jpg|thumb|center|First draft of our CAD layout for the 2 Liter Chasis. Done by [[Patrick Ehrlicher]]]]

### Electronics Design

### Microcontroller Selection
Alright, this is all getting a little complicated. So lets break it down by order of boards, revisions and ideas:

1) Original/Prototyping — Arduino Duemillanove with ATMega328
2) Board rev A (Never ordered) — ATMega32u4
3) Board rev B — Move to a 32-bit ARM (Cortex-M3 or Cortex-M4).

Likely STM32F4 Currently [[Chris W]] is working on rev B, but needs to select an ARM processor to go on that board. The current battle is between the LPC1768 or the STM32F4. The dev equipment for the STM32 is much cheaper and the chip has more features and is generally a better idea... We will go with the STM32F4 :) [[http://search.digikey.com/scripts/DkSearch/dksus.dll?vendor=0&keywords=STM32F4DISCOVERY STM32F4 devboard + programmer]]

### Schematic

### Connectors
For the IR Sensors we need to add some .1" spacing pins. These can be hand made for cheap. Also, we will have extra around (this is good).

* [http://www.pololu.com/catalog/product/1798 JST to Crimp pins for .1" spacing]
* [http://www.pololu.com/catalog/product/1930 Crimp Pins for .1" spacing]
* [http://www.pololu.com/catalog/product/1902 .1" Crimp pin housings] This means all external things, thus far, will use .1" spacing (100 thou), which makes [[Chis Woodall]] happy (easier layout).

In general we need lots of .1" spaced headers. This we should buy these [http://www.pololu.com/catalog/product/965 .1" Male Headers] Also Terminal Blocks! [http://www.pololu.com/catalog/product/2440 Terminal Blocks!] Some of these for the battery: [http://www.hobbyking.com/hobbyking/store/uh_viewItem.asp?idProduct=9572 XT60 Connectors] Oh and 12 Gauge wire.

Thanks for Pololu being easy to use compared to digikey when it comes to connectors.

### Power Supply
We are picking the [http://www.hobbyking.com/hobbyking/store/__6306__ZIPPY_Flightmax_2200mAh_3S1P_20C.html Zippy Flightmax 2200mAh 3S 20C] Lithium Polymer battery with the [http://www.hobbyking.com/hobbyking/store/__11060__HobbyKing_ECO6_50W_5A_Balancer_Charger_w_accessories.html Hobbyking ECO6] Battery Charger.

Replace XT60 Connectors with the easier to use T-Connectors http://www.hobbyking.com/hobbyking/store/uh_viewItem.asp?idProduct=10414

### Power Needs
* The battery
* Appropriate off bot charger.
* DC-to-DC converter for the mini-ITX board.
* Other voltage regulators to provide 5V DC, 3.3V DC (on board on most Arduinos) and 12V DC. For the uC, sensors and motors.
** 5V Linear LDO Regulator (which can provide decently high currents 500mA-1A should be ok).
** 3V3 Linear LDO Regulator (possibly on Arduino, current provisions are less of a concern).
** 12V Linear LDO Regulator (which can provide high currents, might be hard to find, but a preference on something close or above to 1.5A with heatsinks)
* Heat sinks for the Regulators.
* Some form of low battery detection circuitry with a low power draw. We will need a battery to power the miniITX board, the motors and the microcontroller. We will also need some [http://www.mini-box.com/DC-DC DC to DC Converters].

### How to Pick a Lithium Polymer Battery
Voltage: You want something with at least as much voltage as you need out of it. You can regulate your voltage to a lower level if need be. One could also use something of lower voltage to power certain things.

C rating: C rating specifies how much current it is safe to draw at any given point in time. This is only related to the other capacity rating (which is in mAh). Basically it is safe to draw the following:

<math>(Capacity)*(C rating)=(Max Current Draw)</math>

Capacity/mAh/Watt-Hours: Defines how long a charge of battery will last (how much current the battery can provide over what period of time).

'''Example''': The Turnigy 5000mAh 20C 14.8V battery can draw a maximum of <math>5 * 20 = 100A</math>.

That would allow us to provide a MAXIMUM of <math>14.8V * 100A = 1480W</math>.

All of that said, that would drain our battery in minutes, maybe less. Assuming we want to run for about an hour we can draw up to <math>5A * 14.8V = 74W</math>.

This provides a minor problem considering that the mini-ITX boards power usage can range from 25-150W and the motors are also going to be drawing a lot of power. Furthermore, running near the max power draw is not suggested for various reasons, namely LiPolys can explode.

(NOTE: These power calculations do not take into consideration Power factors, but give a reasonable approximation of the maximum power that can be drawn from the LiPoly)

### Motor Controller
[[Image:BUILDSbot2Liter_MotorController.jpg|thumb|500px|center|Motor controller schematic]]

We changed motor controllers to the [[SN754410]], which is a quadrupel Half-H bridge, with protection diodes. We are using the [[SN754410]] as a double full-H bridge driver to drive our motors both forwards and backwards. We currently have our motor controller functioning with the schematic shown above.

The [[SN754410]] includes protection diodes and has a somewhat smaller package than the [[L293]]. The [[SN754410]] has been tested running at 12V for a few minutes and nothing bad happened to the IC and the heat gains were not bad. Also the motors are operating within operating range for the [[SN754410]]. We should be fine!

* [http://www.ti.com/lit/ds/symlink/sn754410.pdf SN754410 Datasheet]

### Old Motor Controller
Previous suggestion included the [[L6202]] and the [[L293]]. Given some more research using the [http://www.ti.com/lit/ds/symlink/l293.pdf L293] may be a better option. Care must be taken not to order the L293D which can only handle 600mA, where the [[L293]] can handle 1A with a maximum current of 2A. They will function on voltages from 4.5V to 55V and include four half h-bridges (aka 2 full h-bridges).

Furthermore, they are significantly cheaper than the L6202, but they do not have current sense pins and a few other of the "nicer" features of the L6202 (which quite honestly I am not 100% sure on how to use appropriately).

:Problem :: We accidentally ordered the L293E instead of the L293, which needs protection diodes... Which are not bad, but slightly inconvenient for us. Since we had a wait time we decided to change to the [[ SN754410]]

* [http://search.digikey.com/us/en/products/L293E/497-3622-ND/677549 Digikey Link]
* [http://www.robotshop.com/Images/big/en/brushed-dc-motor-controller-4-channel-1.jpg A L293 in use]

### Software Design

### System Bus

### Polling Rate Calculation
I2C Bit Rate (Fast Mode) = 400 kbit/s
* I2C Frame
** 1 start bit
** 7 bit address
** 1 bit r/w mode
** 1 ack bit (from slave)
** data (1 ack bit per byte)
** 1 stop bit
* Total: 11 bits overhead
** ADC Write data
*** 8 bit 'command byte'
** ADC Read data
*** 16 bit 'output'
** 1 ADC Sensor Read
*** (2 * 11) + 8 + 16 = 46 bits of overhead per read.
* With 8 IR sensors: * 400 kb/s / (8 * 46 bits)=1.11304348 kHz (or how fast we can poll our IR sensors)

### Repositories
- Code for the robot: https://github.com/allanlw/BuildsBot
- Code for the client: https://github.com/allanlw/BuildsBotClient
- Software and Hardware Repo is here: https://github.com/cwoodall/buildsbot-2-liter

### Milestones
[Complete]
- Milestone 1: Working Prototype of 2 Liter using the Arduino Board

### This was a partial prototype.
- 2 Liter was a semi circle (final will be a full circle).

### [Active] Milestone 2:
Complete CAD Layout (both Electronic and Mechanical)

### Milestone 3: Construction of Mechanical CAD and Electronic Parts

### Milestone 4: Semi Functioning Robot

### Milestone 5: Nice Library and Functioning Robot

### End Goal: World Domination

### Offshoots and Minions
BUILDSbot 12 Ounce Line Follower and Development Platform

[[BUILDSbot 12 Ounce]] will be made up of some parts which are coming in and that we have laying around. [[BUILDSbot 12 Ounce]] is spec-ed to be a line follower and the main focus will be on controllable motor movements and issuing commands directly too it over a tethered USB interface (may add a small radio eventually). [[BUILDSbot 12 Ounce]] is in a complete and mostly functioning state. Code being cleaned and documentation being completed. Possibility of making a PCB layout, but not a necessity.

### BUILDSbot Droplet Swarm
[[BUILDSbot Droplet]] is a swarm of tiny wirelessly controlled robots. Extremely simple logic, with basic collision detection. Possibly addition of minimal accelerometers and gyroscope.

### BUILDSbot Kiwi Drive
A future possibility. A 3 wheeled Omni Wheel Vector (Kiwi) drive Robot.

[http://store.kornylak.com/ProductDetails.asp?ProductCode=FXA309 Affordable OmniWheels] [http://www.societyofrobots.com/robot_omni_wheel.shtml#omniwheel Some information from Society of Robots]

### Team
- Christopher Woodall (Project Leader/Resident SparkE)
- Russell Shomberg (MechE 2)
- Patrick Ehrlicher (MechE 1)
- Allan Wirth (Coder General)
- Anthony Inzero

### Contact
Team Meetings: Tuesday/Thursday 6pm-8pm @ BUILDS | Please come by if your interested!

Mailing List: buildsbot-list@bu.edu | [http://builds.cc/wiki/index.php?title=Listserve_Commands Information on how to subscribe]