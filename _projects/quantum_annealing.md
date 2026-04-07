---
layout: page
title: Quantum Annealing for radar optimization
description: Using quantum annealing to solve a time-dependent high dimensional QUBO problem.
img: assets/img/QA_radar.png
importance: 1
category: Quantum Computing
related_publications: false
---

This was an intern project at the Johns Hopkins Applied Physics Lab. On a high level, I initiated and led a proposal on using quantum annealing to dynamically solve a time-dependent [QUBO problem](https://en.wikipedia.org/wiki/Quadratic_unconstrained_binary_optimization). Here, a QUBO problem means Quadratic Unconstrained Binary Optimization problem, which can be written with the following cost function.

$$
\begin{equation}
f_Q(x) = x^TQ x
\end{equation}
$$

Where $x$ is a vector and $Q$ is a matrix. For high dimensional QUBO problems, classical machines have a hard time efficiently solving them. But a quantum computer, using [quantum annealing](https://en.wikipedia.org/wiki/Quantum_annealing) is proposed to be able to solve QUBO problems a lot faster. Ideally, more information will come out as this project finalizes.
