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

I'm currently researching various quantum problems at the [Johns Hopkins University Applied Physics Laboratory](https://www.jhuapl.edu/). Below is a high-level overview of my current work:
<ul>
<li>Efficient scaling of Holographic Quantum Circuits</li>
<li>Quantum tensor network algorithms for problems in Computational Fluid Dynamics (CFD)</li>
<li>Quantum sensing for Position Estimation</li>
</ul>

### <strong>previously </strong>

<hr class="mt-3">

I have completed a lot of other really different projects at UIUC and JHU APL. Below is my research progression detailed from my freshman college year till now.

In my freshman year, I joined [Professor Alexey Bezryadin](https://physics.illinois.edu/people/directory/profile/bezryadi)'s lab, where I began investigating [generalized Josephson Junction superconducting quantum inteference devices]({{ "/modeling_jjs/" | relative_url }}), aka **JJ-SQUIDs**. I first developed a [critical current model](https://github.com/cliffsun/Josephson-Junction-Array-Model) of this device. Then, I published a [python package](https://pypi.org/project/statfit/) to investigate the effects of fabrication disorder in JJ-SQUIDs and also found several rotational symmetries. I documented my work in an [informal write-up](../assets/pdf/Josephson_Junctions.pdf) as my first technical write-up. Later, I built a [parallelized inverse JJ-SQUID tool](https://github.com/cliffsun/JJ-Model-Fitting) that approximates the JJ-SQUID geometry given experiment data using parallelized optimization algorithms, written in C++. This tool is now in use by **other UIUC physics research groups**. I was also the **first person** in my lab to revive a [broken time-resolved circuit-qed measurement setup]({{ "/cavity_setup/" | relative_url }}), allowing for new types of measurements to be done. 

In my sophomore year, I investigated [multiple nanowire superconducting quantum interference devices](https://github.com/cliffsun/Nanowire-Memory-Model) (MW-SQUID), which are metastable. In my [first paper](https://iopscience.iop.org/article/10.1088/2632-959X/adfe5c/meta), I conducted an in-depth analysis of the metastable properties of MW-SQUIDs. I **generalized the little parks effect** and proved a **isomorphism** between the MW-SQUID's symmetry and the **Charge-Parity-Time symmetry from Particle Physics**. In my [second paper](https://www.sciencedirect.com/science/article/pii/S0375960125008357), I showed that **breaking space and time symmetry** in the MW-SQUID always produces **superconducting diodes**. Actually, a perfect diode can arise too!

I then began my summer research internship at the [Johns Hopkins University Applied Physics Laboratory](https://www.jhuapl.edu/), studying **holographic quantum tensor networks** with [Dr. Michael Wall](https://scholar.google.com/citations?user=OqBLrGUAAAAJ&hl=en). I developed and implemented a [holographic generative quantum machine learning algorithm]({{ "/gen_qml/" | relative_url }}) (based on [this paper](https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.3.023010)), investigated **quantum annealing** for high dimensional QUBO problems, and also **attempted** to use reinforcement learning for quantum compilation purposes. I was selected (4/400 interns) to present my project to APL leadership. I was rehired for my junior year to work on quantum compilation problems. 

In my junior year, I investigated hardware applications of nanowires. I published a [third paper](https://arxiv.org/pdf/2603.17214) on developing a transmon qubit from nanowires. This solved **a 20 year problem** in the nanowire community. We also **filed for a patent** on this concept. As well, a theoretical symmetry breaking prediction I made was experimentally confirmed in a [fourth paper](https://arxiv.org/abs/2606.14051). In parallel, at APL, I was developing a machine learning architecture to scale holographic quantum circuits.

For this summer, I went back to APL to finish up my projects. See "now" for my current research projects at APL.  

### <strong> presentations </strong>

<hr class="mt-3">

{% assign sorted_talks = site.talks | sort: "date" | reverse %}

<ul>
{% for talk in sorted_talks %}
  <li>
   <em>"{{ talk.title }}"</em> @ {{ talk.venue }}
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
<li>Technical report submitted to 2025 NASA Human Lander Challenge (<a href="https://hulc.nianet.org/wp-content/uploads/2025-HuLC-University-of-Illinois-Urbana-Champaign-Technical-Paper.pdf">link</a>)</li>
<li>Proposal rendered video submitted to 2025 NASA Human Lander Challenge (<a href="https://www.youtube.com/watch?v=Gxhk1hIIWIo">link</a>)</li>
</ul>