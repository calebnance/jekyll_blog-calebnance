---
layout: post
title: "How to add ajax to Bootstrap Typeahead From MySQL - Step by Step"
date: 2013-08-10 08:50:33 -0500
updated: 2017-02-12 18:45:13 -0500
excerpt: Today I want to write about using Ajax to get the source data for Twitter Bootstrap's Typeahead
comments: true
categories: jquery
tags: tutorial json ajax twitter bootstrap mysql howto javascript jquery
---
Today I want to write about using **Ajax to get the source data for Twitter Bootstrap's Typeahead** instead of a static json list. I was on stackoverflow last night and saw a guy asking how to do it and I've done it before so thought I'd write a step by step tutorial on how to do just that! Here we go...

First I'll show you what the form will look like... with the css/js includes that you need for this to work.

**index.php**
{% highlight html %}
<!DOCTYPE html>
<html lang="en">
  <head>
    <link href="/assets/bootstrap/2.3.2/css/bootstrap.min.css" rel="stylesheet">
    <link href="/assets/bootstrap/2.3.2/css/bootstrap-responsive.min.css" rel="stylesheet">
  </head>
  <body>

    <div class="container">
      <input class="typeahead" type="text" data-provide="typeahead" autocomplete="off">
    </div><!-- /.container -->

    <!-- Le javascript -->
    <script src="/assets/jquery/jquery-1.10.2.min.js"></script>
    <script src="/assets/bootstrap/2.3.2/js/bootstrap-typeahead.js"></script>

    <script type="text/javascript">
      $(document).ready(function() {
        $('input.typeahead').typeahead({
          source: function (query, process) {
            $.ajax({
              url: 'data.php',
              type: 'POST',
              dataType: 'JSON',
              data: 'query=' + query,
              success: function(data) {
                console.log(data);
                process(data);
              }
            });
          }
        });
      });
    </script>

  </body>
</html>
{% endhighlight %}

Above we have everything you need for this example to work! It is all the basics for your index.php page.

The ajax above is the meat of what we are trying to achieve. On Line 20, we are setting any input field with a class of typeahead (it can be anything you want, I just picked typeahead) to have this functionality added to it.

The only option on the typeahead is source, you can see all the options you can set for it here.

Now for the data.php page

**data.php**
{% highlight php %}
  <?php
  $mysqli = new mysqli("localhost", "root", "root", "sandbox");

  // check connection
  if ($mysqli->connect_errno){
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
  }

  $query = 'SELECT title FROM typeahead_example';

  if(isset($_POST['query'])){
    // Add validation and sanitization on $_POST['query'] here

    // Now set the WHERE clause with LIKE query
    $query .= ' WHERE title LIKE "%' . $_POST['query'] . '%"';
  }

  $return = array();

  if($result = $mysqli->query($query)){
    // fetch object array
    while($obj = $result->fetch_object()) {
      $return[] = $obj->title;
    }

    // free result set
    $result->close();
  }

  // close connection
  $mysqli->close();

  $json = json_encode($return);
  print_r($json);
  exit();

{% endhighlight %}

That should do it! Make sure the data.php file only prints out the json! If you have other things echoing/printing out, it will mess the json response up and you will not get the return you want for the typeahead.

The best way to test data.php is going directly to that page, or using your browser to see the network response (Chrome or FF dev tools). Cheers!
