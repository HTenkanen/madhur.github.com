---
title: Projects
layout: project
---

<div class="row">
{% for project in site.data.projects %}		

{% assign item = project[1] %}

{% for member in item.projects %}		

{% if member.publish == true %}

 	<div class="col-md-4 col-xs-12 col-sm-6 col-lg-4">
	<div class="panel panel-default">

		<div class="project-title panel-title">
			<h3><a href="/projects/{{ member.file }}.html"> <i class="{{ item.icon }} fa-2x"></i>  {{ member.project }}</a> </h3>    
	
		</div>
		
			<div class="panel-body">
				
				
				<div class="project-description ">
				{{ member.description }}
				</div>
		</div>
		
	</div>
	</div> 

{% endif %}

{% endfor %}
{% endfor %}


</div>

<div class="row">
<div class="col-md-4 col-xs-12 col-sm-6 col-lg-4">

<a href="/projects/old.html">View some of my legacy projects</a>

</div>
</div>
