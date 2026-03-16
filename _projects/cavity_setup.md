---
layout: page
title: Superconducting Qubit Measurement Set-up
description: Built qubit measurement set-up using commerical microwave circuitry and LabVIEW
img: assets/img/crater.png
importance: 1
category: Superconductivity
related_publications: false
---

This project was done at UIUC in the Bezryadin Condensed Matter Lab. To measure the state of a superconducting qubit coupled to a cavity, one must inject microwave pulses and study the response of the qubit. Studying the response of the qubit to the pulse allows one to non-destructively measure the state of the qubit. The physics of this project belong to Circuit Quantum Electrodynamics.

In this project, I used microwave circuitry to combine several signals from an Arbitrary Waveform Generator and other waveform generators for input into the microwave cavity containing a sample. Then, I wrote a LabVIEW program which used wave modulation to extract the qubit's pure response embedded inside the microwave pulse. In the end, I was able to successfully measure an empty cavity's Lorenztian response. 

Then, I used this set-up to measure a "Cratered Lorenztian" response from a superconducting nanowire sample. The crater is due to the fact that the nanowire sample undergoes quantum phase slips at a critical power (associated with its critical current). 