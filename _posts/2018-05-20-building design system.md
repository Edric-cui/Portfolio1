---
layout: post
title: Building Design Systems
cover: dscover.jpg
date: 2018-05-30 00:00:00
categories: posts
---

> You can right-click "Open Image in New Tab" for larger images)
（可以右键“新窗口打开 ”放大图片）

#### Fortunately enough, I have experience in the building of 2 design systems, which helped me to dive deeper into the core of each business and contribute to it.

---

## Medopad/HUMA Design system

*Note that due to Non-disclosure Agreement, I cannot make public the entire design system documentation*

HUMA design system was built in Sketch. The system has a heavy focus on a variety of inputs, which is due to the nature of the product being a health information collector.

### Design System Structure

I consolidated this structure to help the team clean up documents and drafts. It also helps front-end engineers to navigate through the system and build accordingly.

![Structure]({{site.baseurl}}/assets/design_system/huma-design-system.png){:class="img-responsive"}

### Component Library Examples:

Here's a glimpse of the component library I have contributed.

![spacing and element]({{site.baseurl}}/assets/design_system/spacing-and-element.png){:class="img-responsive"}

![layout and grid]({{site.baseurl}}/assets/design_system/layout-and-grid.png){:class="img-responsive"}

![components]({{site.baseurl}}/assets/design_system/components.png){:class="img-responsive"}

<!--
### Type scale (zh_Hans)

![Android Type Scale]({{site.baseurl}}/assets/design_system/androidtypescale.png){:class="img-responsive"}

![iOS Type Scale]({{site.baseurl}}/assets/design_system/iostypescale.png){:class="img-responsive"}
-->

---

## LeetCode App Design System

I am also currently building the design system for LeetCode app (in development).

This design system started with support for Light and Dark mode, which helps to reduce future rework.

![color]({{site.baseurl}}/assets/design_system/lc_color.png){:class="img-responsive"}

It also considers overriding rules when switching between Light and Dark mode. The principle is to make background elements darker while key elements lighter, but not to make dark color lighter, light color darker.

![button]({{site.baseurl}}/assets/design_system/lc_button.png){:class="img-responsive"}

Shadows are also made into components (Light and Dark) so that engineers can invoke them accordingly.
![shadow]({{site.baseurl}}/assets/design_system/lc_shadow.png){:class="img-responsive"}

And other parts of the design system (work in progress)

![grid]({{site.baseurl}}/assets/design_system/lc_grid.png){:class="img-responsive"}

![language]({{site.baseurl}}/assets/design_system/lc_language.png){:class="img-responsive"}
