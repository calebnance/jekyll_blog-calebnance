---
layout: post
title: "Selecting Individual Values In A Database With MySql (DISTINCT) In Joomla"
date: 2011-10-06 20:37:12 -0500
excerpt: How easy it is to use distinct within mysql inside of joomla
categories: mysql
tags: mysql php howto joomla code
---
Wanted to show you how easy it is to use the `DISTINCT` function in **MySQL** inside of Joomla.  

This is very useful whenever you want to create a list of all the individual values of a specific field in a database table. It only gets that value once, so like below, there is several "Burlington" values in the city field.  

Table: `jos_locations`

| id     | name            | city       | state |
| ------ | --------------- | ---------- | ----- |
| 1      | Coffee House    | Graham     | NC    |
| 2      | Barnes & Nobile | Burlington | NC    |
| 3      | Sheetz          | Mebane     | NC    |
| 4      | Starbucks       | Burlington | NC    |
| 5      | Panera          | Burlington | NC    |
{:.table}

So this is how you would use distinct to just grab that list of specific values.  

{% highlight php %}
<?php
  // get a database object
  $db = &JFactory::getDBO();
  $query = 'SELECT DISTINCT city FROM #__locations';
?>
{% endhighlight %}

Now we want to **set the query**.

{% highlight php %}
<?php
  $db->setQuery($query);
?>
{% endhighlight %}

Finally we send the query and return the **results** and print it out.  

{% highlight php %}
<?php
  $results = $db->loadObjectList();
  print_r($results);
?>
{% endhighlight %}

The results will be in an object oriented list like this:  

{% highlight php %}
array(
  [0] => stdClass Object ([city] => Graham)
  [1] => stdClass Object ([city] => Burlington)
  [2] => stdClass Object ([city] => Mebane)
)
{% endhighlight %}

**NOTICE:** Burlington is only shown 1 time, not 3!  

So let me know what you think, and hope this helped!
