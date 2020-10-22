---
title:  "BUILDS Door Upgrade"
date:   2012-02-20
author: "buildscc"
permalink: /news/:year/:month/:day/:title/
tag: [projects]
---

## New BUILDS room

### Door

### Monitor

Installed and working!

The desktop background stays the same at all times with a transparent terminal over it. On swipe, an alternative display based on the user id number is made using latex-beamer and converted to an image file that gets displayed with feh.

Currently, the display contains a 1984 reference. It has the potential to be expanded into different displays which could be rotated daily. Fun interactive door displays can be used for recruiting.

### Door computer

> Old door computer has been placed on the floor next to the door, but moving it into the ceiling would be a better option. 

One can access the door computer by plugging in a USB keyboard and mouse into the back of monitor on the inside of the door. The old door computer now lives above the door in a trough like structure in the ceiling. DO NOT lift the ceiling tile in the corner above the door, it has the video/power cables on it; lift the one next to it. There is currently no fixed IP, but if one uses the keyboard/mouse, they can figure out the IP and log in remotely by SSH.

### Card reader

The card reader has been physically installed, but the software backend needs to be revived.

Note: this reader contains magical black smoke that turns it into a keyboard, so make sure you have the active window if you are using it.

Currently, the card reader is used to display interesting "information" on the door screen. This is done in a screen session named "SwipeControl", through 3 files (I'll upload them soon!).

- masterrun.sh
```
This creates a full screen gnome-terminal on the door screen (nifty) and executes run.sh in it. 
```
- run.sh
```
This script loops over waiting for a card swipe, generating interesting outputs, and displaying them on the door screen. 
```
- troll.c
```
This script turns off keyboard echoing to the screen and waits for a card swipe.   After a card swipe, it helps generate the output generated in the run.sh script.
```

### Restarting Software in Case of Crash

1. Figure out computers IP address.

2. ssh to machine

3. open the screen session
```
screen -r SwypeControl
```
if there is an error,
```
screen -S SwypeControl
```
4. Find relevent code in directory
```
cd ~/swipe_control
```
5. Run code in swipe_control directory
```
sh masterRun.sh
```
6. Detach from screen session
```
ctrl-a ctrl-d
```
7. Test

### Door strike

After doing some measurements and looking at tech sheets we have determined that this one will fit our door.

[http://www.amazon.com/Skylink-ES-201-Electric-Strike/dp/B000KKXRB4](http://www.amazon.com/Skylink-ES-201-Electric-Strike/dp/B000KKXRB4)

A request for money has been sent to the BUILDS secretary.

Upon arrival, the install should be quick.

### Web-cam

Cable feedthrough is in place for door webcam.

### Old BUILDS room

The door has been upgraded from its original RFID reader to a magstripe reader. The main cause of this is the cost of purchasing RFID tags. Now bu students may use bu ids to swipe into BUILDS and non-bu members may use any magstripe card they wish as their swipe card.

The door upgrade has also added a monitor outside of the door.

While right now it doesn't have much use besides looking cool, it will eventually host announcements and general news.