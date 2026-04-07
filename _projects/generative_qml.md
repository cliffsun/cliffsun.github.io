---
layout: page
title: Generative Tensor Networks on Holographic Quantum Tensor Networks
description: Implemented Born Machine with Pytorch Backend on Quantum Tensor Networks
img: assets/img/QML_workflow.png
importance: 1
category: Quantum Computing
related_publications: false
---

This was an intern project at the Johns Hopkins Applied Physics Lab. In this project, I defined and successfully implemented a generative machine learning algorithm on holographic quantum tensor networks. I first wrote a back propagation algorithm on Holographic Tensor Networks based on the probability of generating the "correct" data vector $x$ given a wavefunction is:

$$
\begin{equation}
 P(x) = \frac{\langle \psi | x\rangle \langle x | \psi \rangle}{\langle \psi | \psi \rangle}
\end{equation}
$$

Moreover, the quantum wavefunction is defined as a Matrix Product State as

$$
\begin{equation}
\ket{\psi} = \sum_{j_0,j_{N-1}}\text{Tr}[A^{i_0}\dots A^{i_{N-1}}]\ket{i_0\dots i_{N-1}}
\end{equation}
$$

The purpose of the algorithm is to optimize the wavefunction $\psi$ to maximize the probability of "generating" (hence generative qml) the correct data set. The back propagation algorithm is defined by taking the gradient of the MLE of $P(x)$ with respect to a series of tensors $\Theta = A_{i}\dots A_{j}$ for $i < j$. Then, the gradient is defined as

$$
\begin{equation}
\nabla_{\Theta}\mathcal{L}(T) = \frac{1}{N_T}\sum_{x \in T}\frac{\nabla_{\Theta}\langle \psi | x \rangle \langle x | \psi \rangle}{\langle \psi | x \rangle \langle x | \psi \rangle} - \sum_x \frac{\nabla_\Theta \langle \psi | x \rangle \langle x | \psi \rangle}{\langle \psi | \psi \rangle}
\end{equation}
$$

Using the above gradient, once can write a generative QML algorithm on a matrix product states, which was what I did. I also then verified my training algorithm on NIST handwritten data with a simulation of 4 qubits, of which the tensor network was able to learn qualitative features of the data.
