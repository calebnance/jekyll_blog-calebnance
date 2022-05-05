---
layout: post
title: "Using Left Join In Joomla (MySQL)"
date: 2011-05-31 11:15:51 -0500
excerpt: Joomla mysql query, using left join how to with php
categories: mysql
tags: mysql php howto joomla code
---
Wanted to show you how easy it is to use the Left Join function in MySQL inside of Joomla.  

First you need to figure out which 2 tables you need to connect.  

Table: `jos_users`  

| id     | first_name    | last_name  |
| ------ | ------------- | -----------|
| 1      | caleb         | nance      |
| 2      | marshall      | mathers    |
| 3      | anthony       | kiedis     |
{:.table}

Table: `jos_access`  

| id     | user_id  | access  | username  |
| ------ | -------- | ------- | --------- |
| 1      | 1        | 1       | JoomlaFTW |
| 2      | 2        | 0       | Eminem    |
| 3      | 3        | 0       | RHCP      |
{:.table}

We want to get the access and username of each entry in the `jos_users` table.  

Second you want to **prepare the query with the LEFT JOIN** for the 2 tables that you'd like to connect.  

{% highlight php %}
<?php
  // get a database object
  $db = &JFactory::getDBO();
  $query =  ' SELECT u.*, a.*'.
            ' FROM #__ users as u'.
            ' LEFT JOIN #__access as a' .
            ' ON u.id = a.user_id' .
            ' WHERE u.id = 1';
?>
{% endhighlight %}

Third we want to **set the query**.  

{% highlight php %}
<?php
  $db->setQuery($query);
?>
{% endhighlight %}

Finally we send the query, return the result and print it to the page.  

{% highlight php %}
<?php
  $result = $db->loadObject();
  print_r($result);
?>
{% endhighlight %}

The result will be in an object oriented list like this:  

{% highlight php %}
stdClass Object(
  [id] => 1
  [first_name] => 'caleb'
  [last_name] => 'nance'
  [access] = > 1
  [username] => 'JoomlaFTW'
)
{% endhighlight %}

This was an example of returning a **single row** back, if your query calls for **multiple rows** to be returned, you are going to want to change the `loadObject()` to `loadObjectList()`. What this does is places all of the results in a numbered array but still keeps the object oriented format, which is what I prefer, but to each there own. So let me know what you think, and hope this helped!  
