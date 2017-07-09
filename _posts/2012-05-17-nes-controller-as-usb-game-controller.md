---
title:  "NES Controller as USB Game Controller"
date:   2012-05-17
author: "buildscc"
permalink: /news/:year/:month/:day/:title/
tag: [projects]
---

## Overview

Chris Woodall wanted to play video games with an NES controller (the motivating games being Cave Story and Jamestown, the former was successfully beat with the controller). To do this he decided to use an Arduino UNO (definitely overkill). The best method for doing this is to announce your microcontroller as an HID Keyboard so that it can write to the keyboard buffer like any other USB peripheral keyboard. This adds the convenience of portability and flexibility; however, it requires flashing the ATMega8u2 on the Arduino UNO, which normally only handles serial communication via USB with a firmware that handles HID communication via USB. To do this you need to do some sketchy (explained below), but there is little risk of bricking your Arduino because you should always be able to flash the original atmega8u2 firmware.

## Electronics

### Parts List
- An Arduino Uno
- A NES Controller from [Amazon](http://www.amazon.com/NES-Controller-Nintendo-Entertainment-System/dp/B000UCF9TA/ref=sr_1_1?ie=UTF8&qid=1335208627&sr=8-1)
- Lots of wires (solid core preferably)

#### Future Upgrade for SNES Controller version
- SNES Controller from [Adafruit](https://www.adafruit.com/products/131) or [Amazon](http://www.amazon.com/gp/offer-listing/B002KJ02ZC/ref=sr_1_2_olp?ie=UTF8&qid=1335208652&sr=8-2&condition=new)

#### Future No Arduino Version
- PICS actually sell DIP package chips that can be programmed to do USB :) [[1](http://ww1.microchip.com/downloads/en/DeviceDoc/41350E.pdf)]
- However, I can do a PCB for an ATMega8u2 or similar.

#### Schematic

### NES Version
Basic Schematic for the NES Controller to Arduino interface

### SNES Version
Coming Soon...

## Software

### Getting Data from the NES Controller
NES Controller Data Protocol

Getting the data off of the NES controller is really straight forward and I read up on it [here](https://web.archive.org/web/20121120082847/http://www.mit.edu/~tarvizo/nes-controller.html). The basic idea is that the NES controller contains a shift register (parallel in, serial out). To start off, the latch should be low as should the clock (pulse) pin. To start a read you pull latch high for approximately 2us to load the data into the shift register. Then you read the data on the serial line, and pulse the clock high (for ~2us) then do another read. in total you should pulse 8 times and read each bit in the shift register. I think the clock rate can be changed a little bit, but 2us is the fastest the Arduino can reliably clock at (unless you use nop's). The SNES controllers function the same way, but the Shift Registers have 16 bits instead of 8.

To tackle the NES Controller easily I created a NESController class. The class documentation is in the code.

#### Example Pseudo-Code
```
uint8_t data = 0;
digitalWrite(latch, LOW);
digitalWrite(clk, LOW);

// Pull Latch high for 2us to load new data
digitalWrite(latch, HIGH);
delayMicroseconds(2);
digitalWrite(latch, LOW);

// Read off the first bit
data = digitalRead(din);

// Read off the next seven bits 
for (int i = 1; i <= 7; i++) {
    // Pull clock high 
    digitalWrite(clk, HIGH);
    delayMicroseconds(2);
   
    // Read new data into the "front" of data
    data |= digitalRead(din) << i;

   // Push clock low for 2us
    digitalWrite(clk, LOW);
    delayMicroseconds(2);
    digitalWrite(clk,LOW);
}
```

#### References
- [NES Controller Protocol Outline (Not Official)](http://www.mit.edu/~tarvizo/nes-controller.html)

### Making Your Arduino an HID device with LUFA
Sketchy method to put your Arduino into DFU mode to program the ATMega8u2

In order to make your Uno look like an HID device you need to flash your ATMega8u2 with an appropriate firmware. The problem is that to do this you need to do some sketchy by grounding some leads. This is discussed in full in the following link: [Putting arduino in DFU mode](http://arduino.cc/forum/index.php/topic,52447.msg374201.html#msg374201). In order to actually program the DFU you will need to install dfu-programmer. Instructions can be found [here](http://hunt.net.nz/users/darran/weblog/13a32/Arduino_UNO_Keyboard_HID_Part_1.html) along with some Keyboard HID code. The actually Keyboard HID code I used is found [here](http://hunt.net.nz/users/darran/weblog/b3029/Arduino_UNO_Keyboard_HID_version_03.html). Thanks to darran for his contributions for the Keyboard LUFA code.

Basically once you load up the Arduino code and then flash the Keyboard firmware you should be able to unplug your device, plug it back in and have it detected as a keyboard. All your code needs to do is send, via a serial connection the data that the HID Keyboard firmware is expecting to receive in this case it is 8 bytes.

```
Byte	Contents
0	0 - Left CTRL | 1 - L SHIFT | 2 - L ALT | 3 - L GUI | 4 - R CTRL | 5 - R SHIFT | 6 - R ALT | 7 - R GUI
1	Not Used
2 - 7	HID Active Key Usage Codes (outlined below)
```

NOTICE: In order to reprogram your Arduino you will need to flash the default Arduino Serial hex unto your arduino. This can be found on your computer (on OSX that will be in your `/Applications/Arduino.app/Contents/Resources/Java/hardware/arduino/firmwares/arduino-usbserial/` directory. On other OSes I am not 100% sure where it will be located)

The basic flow for programming is as follows:
```
  $ sudo dfu-programmer at90usb82 erase
  $ sudo dfu-programmer at90usb82 flash Arduino-usbserial-uno.hex 
  $ sudo dfu-programmer at90usb82 reset
```

#### References
- [A Bunch of useful information for HID Arduino Hacks](http://hunt.net.nz/users/darran/)
- [Putting arduino in DFU mode](http://arduino.cc/forum/index.php/topic,52447.msg374201.html#msg374201)

### Sending the Keyboard Commands
This is pretty simple. To communicate with the keyboard all you need to do is start a serial connection with: Serial.begin(9600). Once a serial connection is created you check the controller, load up a key into an appropriate byte of the buffer. Then write that 8 byte buffer to the Serial port.

#### Example Code
```
byte buf[8] = { 0 };	/* Keyboard report buffer */

void setup()
{
  Serial.begin(9600); // initialize serial connection
  delay(200); // Allow computer to recognize HID device
}

void loop() 
{
    j = 2; // Reset buttons count
    controller.update();
    buf[2] = 0;
    buf[3] = 0;
    buf[4] = 0;
    buf[5] = 0;
    buf[6] = 0;
    buf[7] = 0;

    if ((controller.read() | 0b11111110) != 0xFF) {
        buf[j] = KEY_Z;
        j += 1;
    }
    
    if ((controller.read() | 0b11111101) != 0xFF) {
        buf[j] = KEY_X;
        j += 1;
    }
    
    if ((controller.read() | 0b11111011) != 0xFF) {
        buf[j] = KEY_A;
        j += 1;
    }
    
    if ((controller.read() | 0b11110111) != 0xFF) {
        buf[j] = KEY_S;
        j += 1;
    }
    
    if ((controller.read() | 0b11101111) != 0xFF) {
        buf[j] = KEY_UARROW;
        j += 1;
    }
    
    if ((controller.read() | 0b11011111) != 0xFF) {
        buf[j] = KEY_DARROW;
        j += 1;
    }
    
    if ((controller.read() | 0b10111111) != 0xFF) {
        buf[j] = KEY_LARROW;
        j += 1;
    }
 
   if ((controller.read() | 0b01111111) != 0xFF) {
        buf[j] = KEY_RARROW;
        j += 1;
    }
    
    Serial.write(buf, 8);	// Send keypress
}
```

#### HID Keycodes
Here are some modifiers and some alpha numeric keys as define statements.

```
// List of standard HID Keycodes
#define KEY_LEFT_CTRL 0x01
#define KEY_LEFT_SHIFT 0x02
#define KEY_RIGHT_CTRL 0x10
#define KEY_RIGHT_SHIFT 0x20
#define KEY_NULL 0
#define KEY_A 4
#define KEY_B 5 
#define KEY_C 6
#define KEY_D 7
#define KEY_E 8
#define KEY_F 9
#define KEY_G 10
#define KEY_H 11
#define KEY_I 12
#define KEY_J 13
#define KEY_K 14
#define KEY_L 15
#define KEY_M 16
#define KEY_N 17
#define KEY_O 18
#define KEY_P 19
#define KEY_Q 20
#define KEY_R 21
#define KEY_S 22
#define KEY_T 23
#define KEY_U 24
#define KEY_V 25
#define KEY_W 26
#define KEY_X 27
#define KEY_Y 28
#define KEY_Z 29
#define KEY_RARROW 79
#define KEY_LARROW 80
#define KEY_DARROW 81
#define KEY_UARROW 82
```

#### References
- [USB HID Usage Table](http://www.usb.org/developers/devclass_docs/Hut1_11.pdf)

### References
- [NES Controller Arduino Code](https://github.com/cwoodall/nes_controller)