---
layout: default
permalink: /blog/
title: Other Stuff
nav: true
nav_order: 2
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---

<div class="post">

<h1>{{ page.title }}</h1>

  <ul class="post-list">

    {% if page.pagination.enabled %}
      {% assign postlist = paginator.posts %}
    {% else %}
      {% assign postlist = site.posts %}
    {% endif %}

    {% for post in postlist %}

    <li>

      <h3>
        {% if post.redirect == blank %}
          <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
        {% elsif post.redirect contains '://' %}
          <a class="post-title" href="{{ post.redirect }}" target="_blank">{{ post.title }}</a>
          <svg width="2rem" height="2rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        {% else %}
          <a class="post-title" href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
        {% endif %}
      </h3>
      <p>{{ post.description }}</p>
      <p class="post-meta">
        {{ post.date | date: '%B %d, %Y' }}
        {% if post.external_source %}
        &nbsp; &middot; &nbsp; {{ post.external_source }}
        {% endif %}
      </p>

    </li>

    {% endfor %}

  </ul>

{% if page.pagination.enabled %}
{% include pagination.liquid %}
{% endif %}

</div>

<h3>Media Features</h3>

<hr class="mt-3">

<ul>
<li> Goldwater: <a href="https://news.illinois.edu/four-illinois-students-receive-goldwater-scholarship/">UIUC News</a> and <a href="https://math.illinois.edu/news/2026-04-09/four-illinois-students-receive-goldwater-scholarships">UIUC Math Department</a> </li>
<li> For NASA Competitions: <a href="https://aerospace.illinois.edu/news/67680">UIUC (2024)</a>, <a href="https://www.nasa.gov/directorates/esdmd/artemis-campaign-development-division/human-landing-system-program/nasa-selects-finalist-teams-for-student-human-lander-challenge/">NASA (2025)</a>, and <a href="https://mechse.illinois.edu/news/stories/NASAchallenge">UIUC (2025)</a> </li>
<li><a href="https://chicagoquantum.org/news/five-researchers-recognized-poster-awards-eighth-annual-chicago-quantum-summit">Chicago Quantum Exchange Poster Award </a></li>
<li><a href="https://dailyillini.com/life_and_culture-stories/education-campus-life/2026/01/10/ui-students-and-alumni-reflect-on-published-works/">Featured in Daily Illini for published research</a></li>
</ul>