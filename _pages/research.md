---
layout: page
title: Research
permalink: /research/
nav: true
nav_order: 1
description: my research but more descriptive.
---

### <strong>now </strong>

<hr class="mt-3">

I'm working on quantum compilation problems at the Johns Hopkins University Applied Physics Laboratory. I will also start several other quantum algorithm projects soon.

### <strong>previously </strong>

<hr class="mt-3">

I have completed a lot of other really different projects at UIUC. Below is my research progression detailed from my freshman year (college) till now. (kinda, except for my APL work)

In my freshman year, I investigated a [many Josephson tunnel junction superconducting quantum inteference device]({{ "/modeling_jjs/" | relative_url }}), aka **JJ-SQUIDs**. I first developed a [critical model](https://github.com/cliffsun/Josephson-Junction-Array-Model) of this device. Then, I published a [python package](https://pypi.org/project/statfit/) to investigate the effects of fabrication disorder in JJ-SQUIDs and also found several rotational symmetries. I documented my work in an [informal write-up](../assets/pdf/Josephson_Junctions.pdf), technically my first paper ish. Later, I built an [inverse JJ-SQUID tool](https://github.com/cliffsun/JJ-Model-Fitting) that approximates the JJ-SQUID geometry given experiment data. This tool is now in use by **other UIUC physics research groups**. I was also the **first person** in my lab to revive a [broken time-resolved circuit-qed measurement setup]({{ "/cavity_setup/" | relative_url }}), allowing for new types of measurements to be done. 

In my sophomore year, I investigated a [multiple nanowire superconducting quantum interference device](https://github.com/cliffsun/Nanowire-Memory-Model) (MW-SQUID), which are metastable. In my [first paper](https://iopscience.iop.org/article/10.1088/2632-959X/adfe5c/meta), I conducted an in-depth analysis of the metastable vorticity stability regions of MW-SQUIDs. I **generalized the little parks effect** and also proved a **isomorphism** between the MW-SQUID's symmetry and the **particle physics Charge-Parity-Time symmetry**. In my [second paper](https://www.sciencedirect.com/science/article/pii/S0375960125008357), I showed that **breaking space and time symmetry** in the MW-SQUID always produces **superconducting diodes**. Actually, a perfect diode can arise too!

In my junior year, I investigated hardware applications of nanowires. I published a [third paper](https://arxiv.org/pdf/2603.17214) on developing a transmon qubit from nanowires. This solves **a 20 year problem** in the nanowire community. We also **filed a patent** for this concept. I am still in my junior year.

I also research **quantum algorithms and compilation** at the [Johns Hopkins University Applied Physics Laboratory](https://www.jhuapl.edu/) for **holographic quantum tensor networks**. I developed and implemented a [holographic generative quantum machine learning algorithm]({{ "/gen_qml/" | relative_url }}) (based on [this paper](https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.3.023010)), investigated **quantum annealing** for high dimensional QUBO problems, and also **attempted** to use reinforcement learning for quantum compilation purposes. My work is on going, see "now". 

### <strong> presentations </strong>

<hr class="mt-3">

{% assign sorted_talks = site.talks | sort: "date" | reverse %}

<ul>
{% for talk in sorted_talks %}
  <li>
    {{ talk.title }}
    {% if talk.slides or talk.poster %}
      ({% if talk.slides %}
        <a href="{{ talk.slides | relative_url }}">slides</a>
      {% endif %}
      {% if talk.slides and talk.poster %}
        |
      {% endif %}
      {% if talk.poster %}
        <a href="{{ talk.poster | relative_url }}">poster</a>
      {% endif %})
    {% else %}
      (deliverables not included)
    {% endif %}
  </li>
{% endfor %}
</ul>

### <strong> other stuff </strong>

<hr class="mt-3">

<ul>
<li> Critical current model of many Josephson Junction Array (<a href="https://github.com/cliffsun/Josephson-Junction-Array-Model">code</a>)</li>
<li>Python package used to analyze fabrication disorder (<a href="https://pypi.org/project/statfit/">link</a>)</li>
<li> Critical current model of many nanowire SQUID (<a href="https://github.com/cliffsun/Nanowire-Memory-Model">code</a>)</li>
<li>Inverse design solver for many Josephson Junction Array (<a href="https://github.com/cliffsun/JJ-Model-Fitting">code</a>)</li>
<li>Technical Report Submitted to 2025 NASA Human Lander Challenge (<a href="https://hulc.nianet.org/wp-content/uploads/2025-HuLC-University-of-Illinois-Urbana-Champaign-Technical-Paper.pdf">link</a>)</li>
</ul>