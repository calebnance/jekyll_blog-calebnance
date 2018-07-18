---
layout: post
title: "Creating A CSV File In PHP"
date: 2011-12-09 12:15:19 -0500
excerpt: Using php language to create an csv file from scratch
comments: true
categories: php
tags: php csv code howto
---
Today, I want to talk about how you would go about creating a CSV file from scratch, with all of your data from the database.  

First off we need a little PHP code, very simple and hopefully you can understand what it is doing. To create the file we are going to be using the `fopen()` to check if a file is there and writable, and if it is not there we want to create it.  

{% highlight php %}
<?php
  // create CSV file
  $csv_folder = BASEURLHERE . '/csv';
  $filename = "sales";
  $CSVFileName = $csv_folder . '/' . $filename . '.csv';
  $FileHandle = fopen($CSVFileName, 'w') or die("can't open file");
  fclose($FileHandle);
  $fp = fopen($CSVFileName, 'w');
  foreach ($csv_fields as $fields) {
    fputcsv($fp, $fields);
  }
  fclose($fp);
?>
{% endhighlight %}

So above you see the variable, `$csv_fields`, and it hasn't been declared. This is the variable that I am using to store all of my data from the data base in. Remember this needs to be declared BEFORE the code above, I just wanted to break it up for a little easier viewing of both. Below we start the array() variable `$csv_fields`, and add the header of the CSV file, this is not a needed step at all, but if you want to have the top of the columns labeled, this is how it is done.  

{% highlight php %}
<?php
  $csv_fields = array();
  // add header of fields
  // this step is optional (more for client view)
  $csv_fields[0] = array();
  $csv_fields[0][] = 'Product ID';
  $csv_fields[0][] = 'Product Name';
  $csv_fields[0][] = 'Category';
?>
{% endhighlight %}

Now we want to actually have the data into the variable `$csv_fields`... Next does just that.  

{% highlight php %}
<?php
  $database_returned_data = YOUR QUERY;

  // your data should be like this
  $database_returned_data = array(
    [0] => array(
      [0] => 1,
      [1] => 'Headphones',
      [2] => 3,
    ),
    [1] => array(
      [0] => 2,
      [1] => 'CD',
      [2] => 4,
    ),
    [2] => array(
      [0] => 3,
      [1] => 'iTouch',
      [2] => 1,
    ),
  );

  $i = 1;
  foreach($database_returned_data as $row):
    $csv_fields[$i][0] = $row[0];  
    $csv_fields[$i][1] = $row[1];
    $csv_fields[$i][2] = $row[2];  
    $i++;
  endforeach;
?>
{% endhighlight %}
