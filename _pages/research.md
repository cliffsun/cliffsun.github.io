---
layout: page
title: research
permalink: /research/
nav: true
nav_order: 1
description: my research but more descriptive. I will try to keep this page updated.
---

### <strong>now </strong>

<hr class="mt-3">

I'm working on quantum compilation problems at the Johns Hopkins University Applied Physics Laboratory. I will also start several other quantum algorithm projects soon.

### <strong>previously </strong>

<hr class="mt-3">

I have completed a lot of other really different projects at UIUC.

In my freshman year, I investigated an many Josephson tunnel junction superconducting quantum inteference device (JJ-SQUIDs). I developed a python package to investigate the effects of fabrication disorder in JJ-SQUIDs and also found several rotational symmetries. I was also the first person in my lab to revive a broken time-resolved circuit-qed measurement setup, allowing for new types of measurements to be done.

In my sophomore year, I investigated a multiple nanowire superconducting quantum interference device (MW-SQUID), which are metastable. In my first paper, I conducted an in-depth analysis of the metastable vorticity stability regions of MW-SQUIDs. I generalized the little parks effect and also proved a isomorphism between the MW-SQUID's symmetry and the particle physics Charge-Parity-Time symmetry. In my second paper, I connected breaking space and time symmetry in the MW-SQUID to producing diodes.

In my junior year, I published a third paper on developing a transmon qubit from nanowires. This solves a 20 year problem in the nanowire community. We also filed a patent for this concept. I am still in my junior year.

At Johns Hopkins Applied Physics Lab, I worked on holographic quantum tensor networks. I developed and implemented a holographic generative quantum machine learning algorithm, investigated quantum annealing for high dimensional QUBO problems, and also attempted to use reinforcement learning for quantum compilation purposes.

### <strong>presentations </strong>

<hr class="mt-3">

{% assign sorted_talks = site.talks | sort: "date" | reverse %}

<ul>
{% for talk in sorted_talks %}
  <li>
    {% if talk.poster %}
      <a href="{{ talk.poster | relative_url }}">{{ talk.title }}</a> (poster)
    {% if talk.slides %}
      <a href="{{ talk.slides | relative_url }}">{{ talk.title }}</a> (slides)
    {% else %}
       {{ talk.title }} (slides not available)
    {% endif %}
  </li>
{% endfor %}
</ul>
