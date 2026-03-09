---
layout: page
title: Quantum interference in superconducting nanowire devices
description: A brief introduction into quantum interference devices
img: assets/img/vsr.png
importance: 1
category: Superconductivity
related_publications: true
---

Traditional superconducting quantum interference devices (SQUIDs) are made up of tunnel Josephson Junctions (JJs) that obey a sinusoidal current-phase relationship of the form $I(\Delta\phi) = I_c \sin(\Delta\phi)$. Here, $\Delta \phi$ is the phase difference across the tunnel Josephson Junction. 

But what if we used some other superconductor besides the tunnel JJ? In this case, we would use superconducting nanowires, of which have shown to exhibit metastabiity. In this case, in the low temperature approximation, the current-phase relationship is 

$$
\begin{equation}
I(\Delta \phi) = I_c \frac{\Delta \phi}{\Delta \phi_c}
\end{equation}
$$

Here, $\Delta \phi_c$ is the _critical phase difference_ that the nanowire can support. Different nanowires can have different critical phases. Then, I considered what would happen if we lined these nanowires in a parallel fashion and connecting two large superconducting electrodes, then applied a magnetic field $b$? In this case, the magnetic field will generate _Meissner currents_, which arise because the cumulative phase difference traced out by any closed loop must be equal to $2\pi n$ where $n$ is an integer. I used this boundary condition to then derive the following _Generalized Meissner Phase correlation_:

$$
\begin{equation}
\oint \vec{\nabla}\phi \cdot \vec{dl} = 2\pi n \iff \phi_j - \phi_i - 2\pi b = 2\pi n
\end{equation}
$$

Here, if $n\neq 0$, then there are _vortices_ present in the device, which affect the state of the device. I modeled the _critical current_, or the maximum current that the device can support, using Equations 1 and 2. My first first-author paper was on studying the metastable critical current properties of such nanowire SQUIDs {% cite sun-mwsquid-2025 %}. As it turns out, irregardless of whatever combination of vortices I programmed into the device, the nanowire squid always produced what I called "vorticity stability regions" or VSRs.

VSRs are closed superconductivty regions on the magnetic-current plane where superconductivity is strictly supported inside the region, and leaving the region breaks superconductivity (actually not, quantum phase slips happen, but for this paper, we assumed that superconductivity breaks).  

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/vsr.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Example of a Vorticity Stability Region (VSR)
</div>

I conducted a thorough analysis of VSR geometries and symmetries. I also discovered a global device symmetry and studied group theory to prove that it was isomorphic to the famous particle physics symmetry of Charge-Parity-Time. In the end, my manuscript was 31 pages and took me nearly 1.5 years to fully complete. What a fun ride into the world of publishing research!  
<!-- 
Every project has a beautiful feature showcase page.
It's easy to include images in a flexible 3-column grid format.
Make your photos 1/3, 2/3, or full width.

To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
``` -->

{% endraw %}
