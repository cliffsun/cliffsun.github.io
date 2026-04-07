---
layout: page
title: Josephson Junction Arrays
description: Extensively studied dynamics of disordered Josephson Junction Arrays
img: assets/img/jj_array.png
importance: 1
category: Superconductivity
related_publications: false
poster: /assets/posters/jj_array.pdf
permalink: /modeling_jjs/
---

This project was done at UIUC in the Bezryadin Condensed Matter Lab. This project can be split into two parts. (1) Modeling and (2) Disorder and Symmetry Analysis.

### Modeling

I first developed a critical current model of a many Josephson Junction Array. In order to do this, I used the current-phase-relationship (CPR) of a traditional tunnel junction of

$$
\begin{equation}
I(\varphi) = \sin(\varphi)
\end{equation}
$$

Here, $\varphi$ is the phase difference in the superconducting wavefunction across the tunnel junction. Then, lining many tunnel junctions nanowires in a parallel fashion and applying a magnetic field $b$ would generate _Meissner currents_. Such currents arise because the cumulative phase difference traced out by any closed loop must be equal to $2\pi n$ where $n$ is an integer. I used this boundary condition to then derive the following _Generalized Meissner Phase correlation_:

$$
\begin{equation}
\oint \vec{\nabla}\phi \cdot \vec{dl} = 2\pi n \iff \phi_j - \phi_i - 2\pi b = 2\pi n
\end{equation}
$$

I modeled the _critical current_, or the maximum current that the device can support, using Equations 1 and 2. Then, I verified the model against analytically known solutions. The code can be found [here](https://github.com/cliffsun/Josephson-Junction-Array-Model).

### Disorder and Symmetry Analysis

After developing the model, I led an extensive analysis into the effects of fabrication disorder. In this analysis, I ended up developing a [python package](https://pypi.org/project/statfit/) which allows the user to inverse generate data points that correspond to a standard deviation and mean. I used this python package to study the effects of increase the standard deviation of the junction widths (increasing fabrication disorder) on the resulting critical current. I also used this python package to solve a 10 year node-lifting problem posed by Professor Alexey Bezryadin.

I also led a symmetry analysis of the device. In this analysis, I discovered several rotational symmetries as well as a current-magnetic symmetry that was always preserved. These results are currently being published.
