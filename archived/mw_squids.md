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
