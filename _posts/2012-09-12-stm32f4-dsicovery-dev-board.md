---
title:  "stm32f4 discovery dev board"
date:   2012-09-12
author: "buildscc"
permalink: /news/:year/:month/:day/:title/
tag: [projects]
---

### Specs

### Open Source Toolchain

### Linux

Under linux this is rather straightforward. I was able to compile with toolchain without a hitch using [http://cu.rious.org/make/stm32f4-discovery-board-with-linux/ these instructions], under OS X I would imagine its a tad more of a pain in the ass. 

The programs/scripts being used are the following:
* [https://github.com/esden/summon-arm-toolchain summon-arm-toolchain] : Downloads and compiles the arm-none-eabi toolchain which we will be using. I am not sure if it compiles with the STM32F4's FPU support.
* [https://github.com/texane/stlink Texane's stlink] : Allows us to program using the stlink on the STM32F4 Discovery board. We program using gdb to load the program into SRAM for now. If you link correctly you can flash too. In the future this should work to program other STM32 chips via the SWD link (if the jumpers are set correctly).
* [http://www.st.com/internet/mcu/product/252149.jsp#SOFTWARE_AND_DEVELOPMENT_TOOLS The official STM32F4 header files and libraries] : Not sure how compatible these are with our toolchain, but its probably worth grabbing them.

### OS X
Thanks to [[Alex Whittemore]] there is some good documentation

[here http://www.alexwhittemore.com/open-source-ide-and-toolchain-for-the-stm32f4-discovery-on-mac-osx-lion/] on one method of getting set up with Eclipse.

[[Chris Woodall]] would prefer to use emacs + a makefile to do his development, so the methodology is a little different.

First, you should make sure you have XCode installed, because that will install gcc and all of the development tools you need for some of the future steps. Now, lets get [http://www.macports.org/ macports] if you have a Mac and some self respect you should already have macports anyway (or [http://mxcl.github.com/homebrew/ homebrew]).

Then we will install the arm-none-eabi toolchain, this might take awhile if you have never used macports before, while you are at it you should install git:

```
$ sudo port install arm-none-eabi-*
$ sudo port install git # optional
```

Now we will use git to grab texane's great [https://github.com/texane/stlink stlink program]:

```
$ mkdir ~/src #optional, but my preferred working directory for installations like this
$ cd ~/src # optional
$ git clone https://github.com/texane/stlink.git
$ cd stlink/gdbserver
$ make
```

Now we can actually load up an example program! So lets do that:

```
$ cd ~/src/stlink/examples/blink
$ make CONFIG_STM32F4_DISCOVERY=1
```

Then connect to the debugger and try it out…

```
$ arm-none-eabi-gdb
(gdb) target remote localhost:4242
(gdb) load blink_F4.elf
(gdb) continue
```

You should see the Green, Orange, Blue and Red lights blink on and off. If this worked, then great success!

### Makefile and Libraries

So I am using a modified version of the standard STM32 libraries. As I go I might start rewriting parts of the STM32F4 library code for myself. However, at the moment I am use the peripheral access provided by ST.

The library along with some boilerplate template code can be found on [https://github.com/prattmic/stm32f4-templates github (thanks to prattmic)]. I needed to change some CFLAG variables in the Makefile and a few compiler directives in the file '''startup_stm32f4xx.s'''.

All of these altercations are due to the fact that our compiler wasn't compiled with support for the hardware FPU. LINK TO MY VERSION COMING SOON.