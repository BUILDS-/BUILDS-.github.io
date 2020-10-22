---
title:  "DIY tDCS Device"
date:   2012-12-13
author: "buildscc"
permalink: /news/:year/:month/:day/:title/
tag: [projects]
---

## Goal

The goal of the project is to build a functioning transcranial direct current stimulation device, and to study its effects on the brain.

Later stages of research might include developing and testing interactive "brain training" programs that utilize a combination of tDCS and the user's willpower to effect long-term changes in neural activity...

## Research

### Brain

### Brain-Device Interface

A brain to device interface is achieved via electrodes placed on the user's scalp. The two electrodes, the cathode and the anode, function as positive and negatives terminals to the device respectively. [Studies](http://phd.szote.u-szeged.hu/Klinikai_DI/Tezisek_EN/2009/thesis_en_VargaEdina.PDF) have shown that areas under the effect of the cathode show decreased firing rates of neurons, while an opposite effect was achieved by areas under affect of the anode.


One standardized method of categorizing locations on the scalp in reference to experimental procedure is the [10-20 System](http://en.wikipedia.org/wiki/10-20_system_(EEG)).

### The Device

### Experiments

### Data Collection

Proposed flow of information between components of experimental apparatus:

```
    Subject-->Electrodes-->EEG board/similar "processing" (fpga/dsp?)-->DAQ board-->computer-->software---> raw data
      ^   |                                                                ^             |         \------> visualization
      |   \---------------other inputs (switches, cameras, etc)------------|             |          \-----> "quantitiative data"
      |                                                                                  |
      |                                                                                  V
      \----------------------------------------actuators/stimulators/lights/etc<----DAC Board
```

### Data Processing

Python [pyEEG](http://code.google.com/p/pyeeg) [sciPy](http://www.scipy.org) [MNE (In Python and C)](http://martinos.org/mne/index.html)

C [bwtool (loading eeg data)](http://users.dcc.uchile.cl/~peortega/bwtool) [FFT](http://www.fftw.org/)

Java [Apache Common Math Lib](http://commons.apache.org/math/) [Parallel Colt scientific library](https://sites.google.com/site/piotrwendykier/software/parallelcolt) [Jsci](http://jsci.sourceforge.net/) [Jtransform](https://sites.google.com/site/piotrwendykier/software/jtransforms) [Java EEG Tools](http://code.google.com/p/eeg4j/)

### Dummy EEG Data

[http://epileptologie-bonn.de/cms/front_content.php?idcat=193&lang=3](http://epileptologie-bonn.de/cms/front_content.php?idcat=193&lang=3)

### Python Environments

[http://epd-free.enthought.com/?Download=Download+EPD+Free+7.3-2](http://epd-free.enthought.com/?Download=Download+EPD+Free+7.3-2)

### Biofeedback libraries

EEGLAB suffices for a large component of the data visualization, training, and analysis we will perform in the course of this project, but it does not have much support for biofeedback and actually serving as a scriptable BCI interface.

So, I've identified two programs/libraries that would be suitable for triggering computer events/input/output based on biofeedback:\

#### BrainBay

Brainbay is a windows application with a LABVIEW-like interface for signal input, processing, and I/O driving. Possible behaviors include:
- driving mouse cursors
- causing keyboard pressesses
- causing parallel port I/O
- playing sounds or MIDI tones
- displaying images or videos


in response to certain desired EEG signals that can be found through experimentation and analysis via EEGLAB or a similar library.


linky: [http://www.shifz.org/brainbay/](http://www.shifz.org/brainbay/)


#### Ad-Hoc/python/programatic

However, maybe the pre-packaged capabilities of BrainBay might not be enough. Maybe we want to make a full featured video game using 3D graphics for training. Maybe we want more complex logic than what BrainBay can provide.

In this case, a combination of python/pygame, and some python-based biofeedback library might be useful. Candidates include:

#### Running Experiments

If scripting dialogues/testing procedures in EEGLAB proves too difficult, psychopy seems to be a wonderful scripting engine for doing just that... (runnign scripted as oppsoed to human driven experiments, of course, eliminates certain sources of experimental error, blah blah blah) [http://www.psychopy.org/coder/tutorial2.html](http://www.psychopy.org/coder/tutorial2.html)

#### OpenVibe

OpenVibe, developed at INRIA, is another training/control alternative that also looks like it might be able to supplant EEGLAB too....

[http://openvibe.inria.fr/discover/](http://openvibe.inria.fr/discover/)

### Component devices, costs, etc

#### Electrodes

Two types: passive, active Per wikipedia/openeeg: passive = less circuitry/amplification/shittier signal quality active = more driving circuitry/higher signal quality/

### References

[PEBL: The Psychology Experiment Building Language](http://pebl.sourceforge.net/)

[OpenEEG](http://openeeg.sourceforge.net/doc/)

[tDCS Overview](http://www.aipass.org/files/TDCS_State%20of%20the%20art.pdf)