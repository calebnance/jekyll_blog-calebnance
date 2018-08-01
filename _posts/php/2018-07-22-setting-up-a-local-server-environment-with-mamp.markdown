---
layout: post
title: "Setting Up A Local Server Environment with MAMP"
date: 2018-07-22 21:42:32 -0500
excerpt: local development environment to run sites like Laravel, Lumen, Wordpress, Joomla
comments: true
categories: php
tags: code howto php mamp lumen laravel
---
Today I wanted to show you how easy it is to get a local server environment up and running on your Mac. ***This tutorial will be specifically for Mac users***.

Before we can get started, we need to [download MAMP](https://www.mamp.info/en/downloads/) and install it on your machine.

## Editing the Host File
Now we need to edit the host file to map our local host ip to the pretty `http://lumen.development/`

Open up your command line terminal and run:
{% highlight conf %}
sudo nano /etc/hosts
{% endhighlight %}
***If you don't have that file run: touch /etc/hosts then run the above, but you should have it.***

Once you are editing the hosts file, add a line for this project, I went with this pointer for this example:
{% highlight conf %}
###########################
## LARAVEL / LUMEN SITES ##
###########################
127.0.0.1       lumen.development
{% endhighlight %}

So this is a little generic, but for the above line, it creates a pointer for http://lumen.development/ on your local environment, allowing you to have some custom urls for projects. You can and should change lumen to something a little more project specific.

### Updating the Apache vhost Config File
Now we need to set up apache to point to our Lumen site's file directory along with the reference we made above so that you can actually navigate to http://lumen.development/

Open up your command line terminal and run:
{% highlight conf %}
cd /Applications/MAMP/conf/apache/
{% endhighlight %}

Open this directory in your favorite code editor and then open the file: `/extra/httpd-vhosts.conf` and add the following
{% highlight conf %}
<VirtualHost *:80>
    DocumentRoot "/Applications/MAMP/htdocs/[project_directory_here]"
    ServerName lumen.development
</VirtualHost>
{% endhighlight %}
Again, **keep in mind**, change the appropriate pathing/namings to fit your preferences.


### Edit httpd.conf If Needed
If this is your first time using a vhost with MAMP, you'll need to do one extra step.

Head over to the file: /httpd.conf and uncomment the following line.. (file line number ~585)
{% highlight conf %}
# Virtual hosts
Include /Applications/MAMP/conf/apache/extra/httpd-vhosts.conf
{% endhighlight %}
The include, correct example shown above, should no longer have a `#` in front of it.

Save that and we are good to go! Restart your MAMP server and you should be able to navigate to the url desired...
