---
title:  "Linux Computers"
date:   2012-11-02
author: "buildscc"
permalink: /news/:year/:month/:day/:title/
tag: [about]
---

We have a few machines here that are running Debian Stable. To make it easier to maintain and fix them, here are the specific things that we are doing. The last time that the machines were updated is Friday, 2 November 2012.

---- They all have static IP addresses. This is configured in /etc/network/interfaces, by adding a stanza like the following. The 'address' line will depend on the actual static IP being used.

allow-hotplug eth0 iface eth0 inet static address 128.197.15.39 gateway 128.197.15.33 netmask 255.255.255.224

---- The admin account [which is 'george' on the main four linux machines] should be added to the 'sudo' group, by running gpasswd -a [username] sudo

---- Syntax highlighting in vim, which is disabled globally by default, is enabled in /etc/vim/vimrc: syntax on

---- They all have multiple aptitude sources, as configured in /etc/aptitude/sources.list

```
deb http://mirrors.mit.edu/debian/ squeeze main deb-src http://mirrors.mit.edu/debian/ squeeze main deb http://security.debian.org/ squeeze/updates main deb-src http://security.debian.org/ squeeze/updates main deb http://mirrors.mit.edu/debian/ squeeze-updates main deb-src http://mirrors.mit.edu/debian/ squeeze-updates main deb http://backports.debian.org/debian-backports/ squeeze-backports main deb-src http://backports.debian.org/debian-backports/ squeeze-backports main
```

---- The programs running backported are: xorg [with all dependencies--- very specifically, we need the intel drivers] linux-image-3.2.0-0.bpo.2-amd64 iceweasel

---- We run the display manager 'slim': aptitude install slim

---- We used to be running a version of Iceweasel not in the main repo, to get an updated version. However, now that Iceweasel 10 has been backported, we're running that.

---- We are running a more modern version of Chromium, because the one in Squeeze is 12 versions behind. So, this line was added to /etc/apt/sources.list. deb http://ppa.launchpad.net/chromium-daily/stable/ubuntu lucid main To trust that repo, we added its key manually. sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 4E5E17B5 This provides us with Chromium 18, and updated libvpx [vp8 support!], and one or two other minor things.

---- To make the Intel drivers dual-screen in the correct manner, the following line was added to /etc/X11/Xsession.d/95BUILDSDUALMONITOR . Obviously, this line will need to be altered based on the relative location of the monitors. #!/bin/sh xrandr --output HDMI1 --right-of VGA1

---- Printing is hard and no one understands. First, install these packages: cups system-config-printer xfprint4 Now, as root, run system-config-printer, and use "find network printer", and add a printer at builds-clunky. Then, run xfprint4, and switch the printing selection to CUPS. Name the printer BuildsClunky, the description HP LaserJet 4350, and the location BUILDS.

---- Here is a specific list of development-related packages. Some of these require updates that will be tricky. blender [This definitely needs an update to be usable.] kicad [Version seems fine] freecad [Version seems fine] gimp [Version seems fine] netbeans [Not in the repos. Must be compiled.]

---- xscreensaver has been configured like this: It is set to "only one screensaver", and the screensaver is always BRIGHTLY COLORED. It is set to start automatically by setting an autostart with the command xscreensaver -no-splash

---- xfce4-terminal has been configured with MY SPECIAL COLOR CONFIG, which I have tyrannically imposed on everyone. Due to its length it is on a separate page, [[xfce4-terminal configuration|here]]. It belongs at ~/.config/Terminal/terminalrc

---- The configuration for xfwm is on [[xfwm4 configuration|a separate page]]. It belongs at ~/.config/xfce4/xfconf/xfce-perchannel-xml/xfwm4.xml . Simply clobbering the old file seems not to work, but I don't understand why.

---- Here is a list of packages that we've explicitly installed, that haven't been mentioned here. Ones that are STARRED** are backported.

mesa-utils xfce4 xfce4-terminal texlive-latex-base texlive-latex-recommended texlive-latex-extra pgf gedit emacs23-nox vim nethack gimp gdb chromium-browser browser-plugin-gnash

** sl cowsay screen nethack-console tmux xscreensaver xscreensaver-data xscreensaver-data-extra xscreensaver-gl xscreensaver-gl-extra xscreensaver-screensaver-bsod xscreensaver-screensaver-webcollage evince-gtk gedit openjdk-6-jre openjdk-6-jdk