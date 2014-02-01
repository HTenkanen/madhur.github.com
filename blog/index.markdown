---
layout: blog
title: Blog
feed: atom.xml
keywords: C/C++, Windbg, Reverse Engineering, important
important: yes
---

Blog [![Feed icon](/images/feed-icon-14x14.png)][feed]
=====================
<span class="low-top quiet large-bottom"><a href="/archives" class="small quiet">Archives</a></span>
<p/>

{% for post in site.posts limit: 10 %}
<article>
<header>
<h2 class="prepend-top"><a href="{{ post.url }}">{{ post.title }}</a></h2>
<h3 class="datetext" style="float:left">
Posted on {{ post.date | date_to_string }}
</h3>
<span class="tag-list"> 
{% for tag in post.tags %}
<a href="/tags/{{ tag | slugize }}/">{{ tag }}</a> 
{% endfor %}
</span>
</header>


<div class="c">&nbsp;</div>
<p>{{ post.content | strip_html | truncatewords: 75 }}</p>
<footer>
<p><a href="{{ post.url }}">Read more...</a></p>
</footer>
</article>
{% endfor %}


[feed]: {{ site.feedname }}



<p>
<a href="/archives">Older Posts &rarr;</a>
</p>


