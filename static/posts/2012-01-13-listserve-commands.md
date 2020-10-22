---
title:  "Listserve Commands"
date:   2012-01-13
author: "buildscc"
permalink: /news/:year/:month/:day/:title/
tag: [tutorials]
---

## Overview

If you haven't noticed, we tend to use list-serves quite a bit around here. Here's how to add (and remove) yourself from a list-serve, so you don't end up spamming everyone with requests. (You might only be able to do this from your BU e-mail, but I really don't know.)

### Basics

List-serves are all run by majordomo@bu.edu. The way it works is that you e-mail commands in the body of the e-mail to majordomo, and it carries them out. Anything in the subject line is ignored, so don't worry about including one.


Subscribing to a List Send an e-mail to: majordomo@bu.edu with the following command in the body of the e-mail:

```
subscribe <list-serve address> <your e-mail address>
```

(The carats (< & >) here are just used to indicate where you put the respective addresses, so don't put them in your real message. See the examples if you're still confused.)


Unsubscribing to a List Send an e-mail to: majordomo@bu.edu with the following command in the body of the e-mail:

```
unsubscribe <list-serve address> <your e-mail address>
```

### Example

```
To: majordomo@bu.edu

Subject: (no subject)

Body: subscribe awesome-dudes-list jchatham@bu.edu
```

### Majordomo Commands

BU's Majordomo understands the following commands:

```
  subscribe [<list>] [<address>]
      Subscribe yourself (or <address> if specified) to the named <list>.
  unsubscribe [<list>] [<address>]
      Unsubscribe yourself (or <address> if specified) from the named <list>.
  get [<list>] <filename>
      Get a file related to <list>.
  index [<list>]
      Return an index of files you can "get" for <list>.
  who [<list>]
      Find out who is on the named <list>.
  info [<list>]
      Retrieve the general introductory information for the named <list>.
  lists
      Show the lists served by this Majordomo server.
  help
      Retrieve this message.
  end
      Stop processing commands (useful if your mailer adds a signature).
```