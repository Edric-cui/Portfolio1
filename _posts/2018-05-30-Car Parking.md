---
layout: post
title: 8&#45;hour Challenge&#58; Car Parking in China
cover: carparking cover.jpg
date: 2018-05-30 00:00:00
categories: posts
---

## Task description

**8-hour Challenge: Design a Solution for Car Parking in China**

Car parking has always been an issue in most municipal cities in China. Despite efforts by officials from various government departments to put forth new policies and launch various solution proposals from time to time (followed by aggressive actions in the implementation of improvement action plans), their work seldom yields tangible outcomes, and the problem remains.

Today, we see more and more big cities in China, it becomes even worse and more common, parking challenges require creative solutions.

Please propose a creative solution to address this problem, it could be anything (App, Service, SW/HW) that works, feel free to make design assumptions and ideate based on them.

**Deliverables**

- A low-fidelity overview of the product or feature that show design insights and highlight key ideas
- A high-fidelity mockup of one screen

---

## Task breakdown

The core of the task is to match and redistribute space according to demands. However, the demand of space fluctuates unevenly across the day with crests and troughs.

![crests and troughs]({{site.baseurl}}/assets/carparking/crest.png){:class="img-responsive"}

Therefore,  I need to flatten the wave by redistribute a part of demands at crest to trough, as well as increasing supply during peak times (maybe temporarily).

Car parking is affected by a range of factors including economics, policy, habits, tradition, profits, architecture, city planning, etc.  

## Design process

I started with the good old double diamond design process for this broadly defined request, which starts with a diverging discovery. Then I converged random ideas into definitions.  

![double diamond design process]({{site.baseurl}}/assets/carparking/dd process.png){:class="img-responsive"}

When it comes to "develop" (visual draft) stage, I tried different kinds of designs and scrap those that don't work and kept those that make sense.

#### Tools used:
- Mindmap: Whimsical
- Wireframe: Whimsical
- Hi-Fi Mock-up: Figma

#### Visual element:
- UI fonts: Roboto, SF Pro, SF Pro Rounded
- Other fonts: Futura, Fira Sans
- Theme Colours: Neon Pink #F25CA2, Neon Blue #0B9ED9
  - Use pink and blue as main themes to build a cyber, techy and futuristic sense. This is because Pink and Blue rarely occur as combination in nature, hence best represent artificial lights

## From Divergence to Convergence

To better understand the problem, I collected facts and opinions from different sources, ranging from car owners, malls, governments, property managers, real estate developers, car manufacturers etc.  

![mind map]({{site.baseurl}}/assets/carparking/mind map 1.png){:class="img-responsive"}

Then I asked questions, to myself and friends, collected some answers and opinions.  

![mind map]({{site.baseurl}}/assets/carparking/mind map 2.png){:class="img-responsive"}

![mind map]({{site.baseurl}}/assets/carparking/mind map 3.png){:class="img-responsive"}

![mind map]({{site.baseurl}}/assets/carparking/mind map 4.png){:class="img-responsive"}

By evaluating answers against real world solutions and evidences, I proposed the following possible solutions:  

![mind map]({{site.baseurl}}/assets/carparking/mind map 5.png){:class="img-responsive"}

Again, I converge these solutions into features/functions to be created as low-fi designs.

![mind map]({{site.baseurl}}/assets/carparking/mind map 6.png){:class="img-responsive"}

![mind map]({{site.baseurl}}/assets/carparking/mind map 7.png){:class="img-responsive"}

## Hands-on Designs

This system has 3 core parts, a mobile app, a car centre console, and a city-wide tracking system (browser).

I started with pen and paper to rapidly test my ideas, and then realise them digitally.

![paper draft]({{site.baseurl}}/assets/carparking/paper draft.jpg){:class="img-responsive"}

#### App

This is a consumer-facing app that aims to help car owners efficiently utilise
parking space. It has 3 main parts:

1. Find and navigate to car parks
1. Share my parking space with others
1. Pay for parking and tolls (e.g. Buy Metro + Parking bundles)

Side Menu
![Side Menu]({{site.baseurl}}/assets/carparking/menu.png){:class="img-responsive"}

Find and navigate to car park
![Find and navigate to car park]({{site.baseurl}}/assets/carparking/nav 1.png){:class="img-responsive"}

Share my parking space with others
![Share my parking space with others]({{site.baseurl}}/assets/carparking/share my park.png){:class="img-responsive"}

Pay parking fee and traffic toll (Low fidelity)
![Pay fee low-fi]({{site.baseurl}}/assets/carparking/pay fee lowfi.png){:class="img-responsive"}

Pay parking fee and traffic toll (High fidelity)
![Pay fee high-fi]({{site.baseurl}}/assets/carparking/pay fee hifi.png){:class="img-responsive"}

#### In-car Console

I have referenced Tesla and Neo's console UI, which are some of the best in the
market now.

This UI focuses only on the parking part of console function, and deliberately hide
most irrelevant hardware control.

The set focuses on 4 parts:
1. Search for a car park
2. Navigate to a car park
3. Auto-parking system
4. In-door navigation (in a stacked car park)

**Low-fi Sketch:**
![in-car sketch]({{site.baseurl}}/assets/carparking/incar sketch.png){:class="img-responsive"}

**Search for a car park**
![searching]({{site.baseurl}}/assets/carparking/Searching for a car park.jpg){:class="img-responsive"}

**Navigate to a car park**
![navigate in car]({{site.baseurl}}/assets/carparking/navigate to a car park.jpg){:class="img-responsive"}

**Auto-parking system**
![autopark]({{site.baseurl}}/assets/carparking/auto parking system.jpg){:class="img-responsive"}

**In-door navigation (in a stacked car park)**
Visually this aims to be futuristic with 3D scanned models, but it turns out requiring much more time than I expected. Therefore, I added a mood board to help explain what I have on my mind.

![indoor]({{site.baseurl}}/assets/carparking/indoor nav.png){:class="img-responsive"}

![moodboard]({{site.baseurl}}/assets/carparking/moodboard.jpg){:class="img-responsive"}

#### Website

Website is primarily aiming at serving organisations and administrators. The website control centre helps to ease the burden of the entire traffic system by
providing a holographic view of city transportation.  

It aims to build:
1. a city-wide system tracking and allocation system
    - exchange spaces during peak hours (exchange with residential blocks, government offices, mall parks, etc.)
1. charge parking-fee based on empty seats
    - adjust fees according to availability

![Website]({{site.baseurl}}/assets/carparking/website admin.png){:class="img-responsive"}
