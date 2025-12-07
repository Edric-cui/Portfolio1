---
layout: post
title: H1 Tech - Agricultural IOT
cover: h1sankey.jpg  
date: 2018-06-05 00:00:00
categories: posts
---

## Reconstruct and visualise automations

> You can right-click "Open Image in New Tab" for larger images)
（可以右键“新窗口打开 ”放大图片）

## Project Background

The client provides agricultural solutions based on IoT devices. The main product are control boards (PCBs or SBCs) connecting to sensors and controllers, thus facilitate unmanned control.  For example, in green houses, sensors of temperature, humidity, and level of light, can be linked to controllers of heating, irrigation, roller, etc. All of which works automatically based on a set of strategies and alert staff when necessary.

## Tasks

My responsibility is to build a web-based user interface for this automation system, with a dashboard integrating information from hundreds of control boards.

## UX Findings

- User ranging from electronic engineers to farm worker. Engineers create presets based on real-world conditions. Farm worker can pause/override the presets and manually adjust devices or parameters (heater, water jets, film roller, etc.)
- Due to the complex nature of the hardware, professional users need an advanced mode to create complicated presets; while also simple mode for average user to run simpler automation
- Batch operation is key in the workflow due to the large number of sensor and controllers
- Dashboard will be used to present information to the public, as well as regulatory bodies. Therefore it serves display and data visualisation purposes, instead of actions.  

## Work Flow and Wireframe

> This section is not translated

<details markdown="1">

<summary>
Expand/Hide
</summary>

- Sign up and sign in

![img]({{site.baseurl}}/assets/h1tech/flow signup sign in.jpg){:class="img-responsive"}

---

- Device registration and management

![img]({{site.baseurl}}/assets/h1tech/flow device mgmt.jpg){:class="img-responsive"}

---

- Program and project structure

![img]({{site.baseurl}}/assets/h1tech/flow program and project.jpg){:class="img-responsive"}

---

- Automation Strategy

![img]({{site.baseurl}}/assets/h1tech/flow strategy mgmt.jpg){:class="img-responsive"}

---

- Data export and backup/restore

![img]({{site.baseurl}}/assets/h1tech/flow data mgmt.jpg){:class="img-responsive"}

---

- System info

![img]({{site.baseurl}}/assets/h1tech/flow sys mgmt.jpg){:class="img-responsive"}

</details>
<br>

## Hi-Fi Mockups

- Dashboard with component Variants

![img]({{site.baseurl}}/assets/h1tech/dashboard var.jpg){:class="img-responsive"}

---

- Dashboard in fullscreen view mode (for monitor hub)

![img]({{site.baseurl}}/assets/h1tech/fullscreen mode.jpg){:class="img-responsive"}

---

- Sign up with: Username and password; Mobile & SMS code; QR code

- Variants: Sign up / Sign in / Password reset / SMS verification / Error messages

![img]({{site.baseurl}}/assets/h1tech/sign up sign in.jpg){:class="img-responsive"}

---

- Device registration (single device)

![img]({{site.baseurl}}/assets/h1tech/device reg single.png){:class="img-responsive"}

---

- Device registration (batch operations): batch naming, batch self-check, batch tagging

![img]({{site.baseurl}}/assets/h1tech/device reg batch.png){:class="img-responsive"}

---

- Program and project tree views

![img]({{site.baseurl}}/assets/h1tech/program tree view.png){:class="img-responsive"}

---

- Invoke preset strategy in projects (basic and advanced)

![img]({{site.baseurl}}/assets/h1tech/strategy invoke.png){:class="img-responsive"}

---

- Create a basic strategy with pre-defined input/compare variables

![img]({{site.baseurl}}/assets/h1tech/create strategy basic.png){:class="img-responsive"}

---

- Create an advanced strategy with customised input/compare variables (more complex functions)

![img]({{site.baseurl}}/assets/h1tech/create strategy advanced.png){:class="img-responsive"}

---

- Data export and backup

![img]({{site.baseurl}}/assets/h1tech/data export backup.png){:class="img-responsive"}

---

- System information, permission management, license update variants

![img]({{site.baseurl}}/assets/h1tech/sys info var.png){:class="img-responsive"}
