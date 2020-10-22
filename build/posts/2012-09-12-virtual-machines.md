---
title:  "Virtual Machines"
date:   2012-09-12
author: "buildscc"
permalink: /news/:year/:month/:day/:title/
tag: [about]
---

We are running all virtual machines on builds-ashitaka.

Here are the steps that we took while setting them up.

---- The VMs are being managed by 'virt-manager' Any user that wants to be able to see and configure VMs must be in the group 'libvirt', and then can run 'virt-manager'. Networking is running BRIDGED. So, we have a bridge device, br0, that both ashitaka and all of its VMs connect to.

Externally, it looks like ashitaka is a switch, that ashitaka and all of its VMs hide behind. The configuration for this is as follows.

On ashitaka, /etc/network/interfaces was modified as follows:

auto br0 iface br0 inet static address 128.197.15.39 gateway 128.197.15.33 netmask 255.255.255.224 bridge_ports eth0 bridge_stp on bridge_maxwait 0 bridge_fd 0

In virt-manager, we set up a network called 'bridge', which has some pretty logical setup involving bridging.

---- For Linux VM's to be able to resolve DNS add the following to /etc/resolv.conf:

domain bu.edu search bu.edu nameserver 128.197.253.183 nameserver 128.197.253.120 nameserver 128.197.253.254