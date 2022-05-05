---
layout: post
title: "Laravel Code Coverage Reports phpunit.xml Example"
date: 2014-10-30 09:04:21 -0500
excerpt: Laravel PHPUnit testing code coverage generation help xml
categories: laravel
tags: laravel php unit-test xml
---
Today, I wanted to show you a little bit into Laravel PHPUnit testing and code coverage report generation!  

Below is the example phpunit.xml file:  

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<phpunit backupGlobals="false"
  backupStaticAttributes="false"
  bootstrap="bootstrap/autoload.php"
  colors="true"
  convertErrorsToExceptions="true"
  convertNoticesToExceptions="true"
  convertWarningsToExceptions="true"
  processIsolation="false"
  stopOnFailure="false"
  syntaxCheck="false"
  >
  <testsuites>
    <testsuite name="Application Test Suite">
      <directory>./app/tests</directory>
    </testsuite>
  </testsuites>
</phpunit>
{% endhighlight %}

Now let's add the logging code to get the generated reports for the code coverage!  

{% highlight xml %}
</testsuites>
<logging>
  <log type="coverage-html" target="public/code-coverage" charset="UTF-8"/>
</logging>
{% endhighlight %}

The logging code above will generate the HTML files and pop them into the "public/code-coverage" directory, you can go to it in your browser by going to: `YOUR_URL/code-coverage`  
