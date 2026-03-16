---
layout: page
title: physics stuff
permalink: /research/
nav: true
nav_order: 1
description:  
---

This page is intended to be a general hub of my research, including publications, talks, and any related projects. I will faithfully try to keep this page updated. 


<h2><b>Publications</b></h2>

<div class="publications">

{% bibliography %}

</div>

<h2 style="margin-bottom: 2rem;"><b>Talks</b></h2>

{% assign sorted_talks = site.talks | sort: "date" | reverse %}

<ul class="list-unstyled">
{% for talk in sorted_talks %}
<li class="mb-4 pb-3">
<h5>{{ talk.title }}</h5>
<p><i>{{ talk.description }}</i></p>
<p><strong>{{ talk.venue }}</strong> - {{ talk.date | date: "%B %Y" }}</p>
{% if talk.poster %}
<a href="{{ talk.poster | relative_url }}" style="margin-right: 10px;">poster</a>
{% endif %}
{% if talk.slides %}
<a href="{{ talk.slides | relative_url }}" style="margin-right: 10px;">slides</a>
{% endif %}
<hr class="mt-3">
</li>
{% endfor %}
</ul>

<h2 style="margin-bottom: 2rem;"><b>Projects</b></h2>

{% assign sorted_projects = site.projects | sort: "importance" %}

<ul class="list-unstyled">
{% for project in sorted_projects %}
<li class="mb-4 pb-3">
  <div class="d-flex align-items-start">

    {% if project.img %}
    <div class="flex-shrink-0" style="margin-right: 2rem;">
      <img src="{{ project.img | relative_url }}"
           alt="{{ project.title }}"
           class="img-fluid"
           style="width: 180px;">
    </div>
    {% endif %}

    <div>
      <h5>{{ project.title }}</h5>
      <p><i>{{ project.description }}</i></p>

      <a href="{{ project.url | relative_url }}" style="margin-right: 10px;">project </a>
      {% if project.poster %}
      <a href="{{ project.poster }}"> poster </a>
      {% endif %}
    </div>

  </div>

  <hr class="mt-3">
</li>
{% endfor %}
</ul>