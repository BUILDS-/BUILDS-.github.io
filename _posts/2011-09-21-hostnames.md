---
title:  "Hostnames"
date:   2011-09-21
author: "buildscc"
permalink: /news/:year/:month/:day/:title/
tag: [about]
---

This is a list of hostnames used in builds and their associated static ips.

### Hostnames

{|- ! Hostname ! IP ! Description |- | builds-cluster-head || 128.197.15.35 || SunFire V20z Cluster (Head Node) |- | builds-ares || 128.197.15.36 ||Desktop (Windows 8) |- | builds-haku || 128.197.15.37 || Desktop (Debian Stable Xfce) |- | builds-portal || 128.197.15.38 || [[Portal|Ceiling laptop]] |- | builds-ashitaka || 128.197.15.39 || Desktop (Debian Squeeze) |- | builds-door || 128.197.15.40 || [[BUILDS Door Upgrade|Door computer]] |- | builds-patsu || 128.197.15.41 || [[Lan-Tunes|Lan-Tunes server]] |- | builds-clunky || 128.197.15.42 || Laser printer |- | builds-fesh || 128.197.15.43 || creeper laptop portal #2 |- | builds-jorge || 128.197.15.44 || creeper laptop portal multiplexer (woo) |- | builds-caiaphas || 128.197.15.45 || creeper laptop portal #3 |- | builds-greenmachine || 128.197.15.46 || [DOWN] In the greenhouse |- | builds-heman || 128.197.15.47 || creeper laptop portal #4 |- | builds-zippo || 128.197.15.48 || Crowell's Zippopotamus server [TEMPORARY, established 5/01/13] |- | builds-nicholas-hoult || 128.197.15.49 || BkP CTF Website server [TEMPORARY] |- | builds-punpckldq || 128.197.15.50 || Debian Squeeze VM on Ashitaka |- | builds-website || 128.197.15.51 || Self-explanatory. Debian Squeeze |- | builds-pclmulqdq || 128.197.15.52 || Ubuntu Precise VM on Ashitaka (for Zero) |- | builds-invlpga || 128.197.15.53 || Debian Wheezy (for building packages) |- | builds-vrsqrtsnv || 128.197.15.54 || Ubutunu Precise VM on Ashitak (for Chris) |- | builds-vmptrld || 128.197.15.56 || Windows VM for Space Station |- | builds-popf|| 128.197.15.57 || Ubuntu VM for John |} == /etc/network/interfaces == iface eth0 inet static address 128.197.15.* gateway 128.197.15.33 netmask 255.255.255.224

### /etc/resolv.conf
domain bu.edu search bu.edu nameserver 128.197.253.183 nameserver 128.197.253.120 nameserver 128.197.253.254