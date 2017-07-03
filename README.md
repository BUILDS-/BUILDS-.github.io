# builds-.github.io

Latest version of the BUILDS website created on July 3, 2017. Feel free to add posts on your hacks in the `_posts` folder.
Feel free to make any styling changes!

## Installation on Ubuntu

```
sudo apt-get install ruby ruby-dev build-essential
sudo gem install jekyll bundler
sudo apt-get install zlib1g-dev
sudo gem install jekyll-stemap jekyll-paginate jemoji --verbose
```

### Run locally

```
jekyll serve
```

Visit [http://127.0.0.1:4000](http://127.0.0.1:4000) to see the site.

## Adding new posts

It is really easy to add new blog posts. We should update it often because there is so much historical value by keeping track of what we've done!

```
cd _posts/
```

Create a file like `2012-03-22-buildsbot-12-ounce.md` with the `YYYY-MM-DD-name.md` format.

### Header

Add a Header like this. Tags can be anything, but you should use the ones that already exist.

```
---
title:  "BUILDSBot: 12 Ounce"
date:   2012-03-22 13:07:36
author: "Chris Woodall"
permalink: /news/:year/:month/:day/:title/
tag: [projects]
---

Start writing.
```

You can see more examples in the `_example_posts` folder.

## Customization

Edit **_config.yml** and files inside **_data/** before using

### Files with old_

Files with the prefix `old_` are from the template. I left the files there for reference.

## Licensing

[MIT](https://github.com/railsr/autm-rb/blob/master/LICENSE)

[pages]: http://pages.github.com
[fork]: https://github.com/railsr/autm-rb/fork
[demo]: http://kirqe.github.io/autm-rb/