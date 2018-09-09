---
layout: post
title: "Saving A Multi-Select Field in a Custom Joomla 3.X Component"
date: 2014-03-20 21:54:34 -0500
excerpt: Joomla 3.x multi-select field in a custom component
comments: true
categories: joomla-3.0
tags: php code howto joomla joomla3
---

First we want to make sure the XML is set for your multi-select field. Here is an example of the field:

{% highlight xml %}
<field
  default=""
  description=""
  label="Bands (multi-select)"
  name="bands"
  type="list"
  multiple="true"
>
  <option value="nirvana">Nirvana</option>
  <option value="rhcp">Red Hot Chili Peppers</option>
  <option value="modest mouse">Modest Mouse</option>
</field>
{% endhighlight %}

Once this has been completed, we want to handle the data (array) being passed before saying. So let's go to the views controller file!

If the `postSaveHook()` is not present, create it.

{% highlight php %}
protected function postSaveHook(JModelLegacy &$model, $validData = array())
{% endhighlight %}

Inside this function we cant to take the multi-select value, which is an array and `implode()` it!

{% highlight php %}
// band (multi-select) set format
if(isset($validData['bands'])){
  $data['bands'] = implode(',', $validData['bands']);
}
{% endhighlight %}

Make sure the function ends with `$model->save($data);`

After that, it should be saving properly in the database. Now to show it correctly whenever you edit the item again... We are going to head to the views model file.

Make sure the following is inside the protected `function loadFormData()`

{% highlight php %}
protected function loadFormData(){
  // check the session for previously entered form data.
  $data = JFactory::getApplication()->getUserState('com_MYCOMPONENT.edit.MYVIEW.data', array());
  if (empty($data)){
    $data = $this->getItem();
  };

  // bands
  if($data->bands){
    $data->bands = explode(',', $data->bands);
  }

  return $data;
}
{% endhighlight %}

And just like that, we are done. That was easy right? Post in the comments below if you have any questions!
