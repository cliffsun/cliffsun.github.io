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

I'm finishing up my work at the [Johns Hopkins University Applied Physics Laboratory](https://www.jhuapl.edu/), across tensor networks and machine learning for scaling holographic quantum circuits. I have also begun mentoring students in the [Bezryadin research group](https://research.physics.illinois.edu/bezryadin/) on projects that extend my previous papers. 

### <strong>previously </strong>

<hr class="mt-3">

I have completed a lot of other really different projects at UIUC and JHU APL. Below is a detailed recollection of the progression of my research ability, starting from my freshman college year until now.

In my freshman year, I joined [Professor Alexey Bezryadin's](https://physics.illinois.edu/people/directory/profile/bezryadi) lab, where I began investigating [generalized Josephson Junction superconducting quantum inteference devices]({{ "/modeling_jjs/" | relative_url }}), aka **JJ-SQUIDs**. I first developed a [critical current model](https://github.com/cliffsun/Josephson-Junction-Array-Model) of this device. Then, I published a [python package](https://pypi.org/project/statfit/) to investigate the effects of fabrication disorder in JJ-SQUIDs and also found several rotational symmetries. I documented my work in an [informal write-up](../assets/pdf/Josephson_Junctions.pdf) as my first technical write-up. Later, I built a [parallelized inverse JJ-SQUID tool](https://github.com/cliffsun/JJ-Model-Fitting) that approximates the JJ-SQUID geometry given experiment data using parallelized optimization algorithms, written in C++. This tool is now in use by **other UIUC physics research groups**. I was also the **first person** in my lab to revive a [broken time-resolved circuit-qed measurement setup]({{ "/cavity_setup/" | relative_url }}), allowing for new types of measurements to be done.

In my sophomore year, I investigated [multiple nanowire superconducting quantum interference devices](https://github.com/cliffsun/Nanowire-Memory-Model) (MW-SQUID), which are metastable. In my [first paper (first-author)](https://iopscience.iop.org/article/10.1088/2632-959X/adfe5c/meta), I conducted an in-depth analysis of the metastable properties of MW-SQUIDs. I **generalized the little parks effect** and proved a **isomorphism** between the MW-SQUID's symmetry and the **Charge-Parity-Time symmetry from Particle Physics**. In my [second paper (first-author)](https://www.sciencedirect.com/science/article/pii/S0375960125008357), I showed that **breaking space and time symmetry** in the MW-SQUID always produces **superconducting diodes**. Actually, a perfect diode can arise too! In parallel, I also led a UIUC NASA competition team, competing in the [NASA Human Lander Challenge](https://hulc.nianet.org/), where we focused on making meaningful progress on problems in NASA's **hardest field**: Cryogenics. Throughout my sophomore year, I led the vision of a [hardware-aware, fault tolerant cryogenic propellent transfer strategy](https://hulc.nianet.org/wp-content/uploads/2025-HuLC-University-of-Illinois-Urbana-Champaign-Technical-Paper.pdf) that mitigates, minimizes, and monitors propellant boil-off throughout line chilldown, tank chilldown, and single-phase propellant transfer. Our deliverables included a proposal (9 page, link not included) and [technical (15 page)](https://hulc.nianet.org/wp-content/uploads/2025-HuLC-University-of-Illinois-Urbana-Champaign-Technical-Paper.pdf) report, [a proposal video](https://www.youtube.com/watch?v=Gxhk1hIIWIo), [a technical poster](../assets/posters/eclipse_poster.pdf), and [slides](../assets/slides/eclipse.pdf). We were awarded $9k and invited to **present our work** to NASA, where our ideas were **integrated** into the NASA mission architecture.

I then began my summer research internship at the [Johns Hopkins University Applied Physics Laboratory](https://www.jhuapl.edu/), studying **holographic quantum tensor networks** with [Dr. Michael Wall](https://scholar.google.com/citations?user=OqBLrGUAAAAJ&hl=en). I developed and implemented a [holographic generative quantum machine learning algorithm]({{ "/gen_qml/" | relative_url }}) (based on [this paper](https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.3.023010)), investigated **quantum annealing** for high dimensional QUBO problems, and also **attempted** to use reinforcement learning for quantum compilation purposes. I was rehired for my junior year to work on quantum compilation problems. 

In my junior year, I investigated hardware applications of nanowires. I published a [third paper (first-author)](https://arxiv.org/pdf/2603.17214) laying the theoretical foundations for of the first-ever nanowire transmon qubit. This solved **a 20 year problem** in the nanowire community. We also **filed for a patent** on this concept. As well, the diode prediction I made in my 2nd paper was **experimentally confirmed** in a [fourth paper (2nd-author)](https://arxiv.org/abs/2606.14051). In parallel, I continued working at APL, where I was figuring out how to efficiently scale holographic quantum circuits towards classically intractable regimes.

I then entered my 2nd summer research internship at the [Johns Hopkins University Applied Physics Laboratory](https://www.jhuapl.edu/), working on three projects. Firstly, I designed and benchmarked a **hybrid machine learning architecture** used to scale up holographic quantum circuits. A **fifth paper (first-author)** will be released soon on this. Secondly, I developed a **Matrix Product State-based solver** for non-linear diffusion-advection partial differential equations. I solved several important tensor network problems and showed a **classical scaling advantage in time and memory** with this framework. I am preparing a **sixth paper (first-author)** on this work. Thirdly, I wrote and validated a semi-classical cold atom model for **non-inertial state estimation**. An **internal memo (first-author)** will be distributed to APL staff. 

Now, I am entering my senior year in my undergraduate career. See "now" for what I'm currently up to. 

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