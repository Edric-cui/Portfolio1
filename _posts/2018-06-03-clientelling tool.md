---
layout: post
title: TimeVallée (CRM)
cover: mcon-cover.jpg
date: 2018-06-03 00:00:00
categories: posts
---

## A Clienteling tool for a luxury distributor

> Note: The original logo has been replaced with placeholder

> You can right-click "Open Image in New Tab" for larger images)
（可以右键“新窗口打开 ”放大图片）

## Definition

**Clienteling**

> Clienteling is a technique used by retail sales associates to establish long-term relationships with key customers based on data about their preferences, behaviors and purchases.

## Project Background

The client [XXX] is expanding its business rapidly with new stores and franchisees. While the customer base is increasing, a great proportion of customer data is being omitted. Therefore the business is in need of a CRM system that can help them to **collect, organise, analyse**, and **maintain** customer information.

This Clienteling UI prototype demonstrates the "collect" stage of the CRM system.

- **The project was launched on a short notice.**

- **It took only 3 weeks from receiving request, to carrying out interviews, then to wireframes and high-fidelity designs. I teamed up with a product owner and participated in all the stages mentioned**

To spilt the tasks, the product owner (similar to project manager) was responsible for analysing needs from the client (shop owner); I was mainly responsible for researching end-users (salespeople).

More designs were planned but then the project was cancelled due to business shut-down.

![store]({{site.baseurl}}/assets/mcon/valle store.jpg){:class="img-responsive"}

## User Research

- Methods: on-site interview (recorded and logged)

- One persona of the target user is generated

The user of this tool will be primarily salespeople in stores. They use this tool to onboard clients (customers), manage contacts, assign staff and schedules tasks. The hardware will be iPad (or iPad Mini).

The findings from my user study can be summarised into the following:

### Characteristics:    

- Inexperienced with CRM system  

- Sales advisor as a job has high liquidity, so they have low incentive to learn complex operations  

- No enough training is provided for new people, they were only taught very basic operations

- Education background tend to be relatively limited (most only attended high-school)  

- Hardware (iPad) will be handed to store customers during onboarding, which means customer may need to interact with the UI and fill in information

### Pain Points:
- Current Onboarding tools are often integrated in a complex CRM system, which have a steep learning curve

- Current tools are not optimised for touchscreen and tablets, making it difficult to use on the go

- The interface is the same for store manager and sales advisor, causing information overload for sales advisor

### Design Principles:
- Separate the clienteling tool (Dashboard) from CRM system on the interface level (backend is still connected)

- Create an intuitive, touchscreen-optimised, clean UI, with straightforward interactions, thus meaning a flat learning curve for users

## Interaction  

> You can right-click "Open Image in New Tab" for larger images)
（可以右键“新窗口打开 ”放大图片）

Device: iPad and iPad Mini only

The design starts with dark mode because, 1. visually it aligns with the luxury style of the client; 2. a darker colour tone would make salespeople and customer feel less dazzling.

![rationale-1]({{site.baseurl}}/assets/mcon/rationale 1.png){:class="img-responsive"}

---

The visual key is the calendar in the top left corner. This aims to help the salespeople to organise their days since all the sale orders, contacts, and tasks are strictly time-related.

A two-column view displays a large amount of information in a compact way.

![rationale-2]({{site.baseurl}}/assets/mcon/rationale 2.jpg){:class="img-responsive"}

---

A three-column view utilise the screen size to show an additional category, at the cost of reduce information in each category.

User research shows that the user's tasks can be divided into 3 categories, daily task, contacts, and transactions, and they are equally important.

This design is more balanced between utilities and information layout.

![rationale-3]({{site.baseurl}}/assets/mcon/rationale 3.jpg){:class="img-responsive"}

---

Another three-column view, but in a more traditional CRM way. This aims to reduce user learning cost, since salespeople tend to have little training and many rotations. The development cost is high because many elements in the page are responsive to layout change (when the side panel is open).

![rationale-4]({{site.baseurl}}/assets/mcon/rationale 4.jpg){:class="img-responsive"}

---

**If I had a chance to further complete this project, I would use the 2nd design as main layout, adding calendar view in 1st design, and side column detail from 3rd design. As well as creating an alternative vertical layout**

---

## Maybe the best case for A/B Testing

In order to choose between those designs shown above, I proposed to PM on carrying out an A/B testing for this project, and got approved (although it didn't happen due to business problem).

![AorB Testing]({{site.baseurl}}/assets/mcon/abtesting.jpg){:class="img-responsive"}

Here's why I believe A/B testing is suitable for this project:

First of all, salespeople work face-to-face with customers, meaning they will know how customers react to the UI at first glance, and even comments. Customer satisfaction will also be reflected on onboarding rate.

Additionally, the salespeople will set-up follow-up calls with customers in most circumstances. Therefore, we can simply add a few quick questions to the follow-up call, making it an opportunity to collect feedback on user experience.

Then salespeople can use follow-up survey (sales call) to test if our system left customers with a good impression, which can also help us trace the retention rate and drop-off rate.

One of the cons of A/B testing is that it measures quantity not quality. However, with salespeople helping designers collect qualitative feedback, we can overcome this disadvantage.

---

## ​Mockup

![mockup1]({{site.baseurl}}/assets/mcon/preview route 1.jpg){:class="img-responsive"}

![mockup2]({{site.baseurl}}/assets/mcon/preview route 2.jpg){:class="img-responsive"}

![mockup3]({{site.baseurl}}/assets/mcon/preview route 3.jpg){:class="img-responsive"}


## Backend CRM Hi-Fi Mockup + interactive prototypes + wireframes

These designs largely follow traditional CRM UI due to limited development resources.

Originally planned to make optimization for iPad, taking advantage of touchscreen and gestures. Unfortunately, the project was later cancelled.

![portal-1]({{site.baseurl}}/assets/mcon/portal 1.png){:class="img-responsive"}

![portal-2]({{site.baseurl}}/assets/mcon/portal 2.png){:class="img-responsive"}

![portal-3]({{site.baseurl}}/assets/mcon/portal 3.png){:class="img-responsive"}

![portal-4]({{site.baseurl}}/assets/mcon/portal 4.jpg){:class="img-responsive"}

<!---
## Extra: Web-app dashboard concept

![dashboard]({{site.baseurl}}/assets/mcon/dashboard.png){:class="img-responsive"}
--->

## Learnings

1. When users are not willingly using a product, better make the product as simple and fool-proof as possible

1. Users may not want to answer honestly in user interviews, for example, when they don't want to learn to use a new tool; especially when they are not expecting any training. Therefore, I need to think about how users' interest conflict and create questionnaire accordingly

---

## User Interviews (conducted in Chinese)

**Target interviewees：**
* TimeVallee Store Salesperson x3（Junior x2，Senior x1）
* TimeVallee Store Manager x1

**Materials：**
* Consent form x5
* Recorder x1
* Smart Phone (to take footage of existing system) x1
* Laptop (notes, mind map) x1

### Question List

**Introduction：**

你好，谢谢X经理的安排，感谢各位今日的配合，我是MCON的界面设计师崔佳晨，今天来延安路TimeVallee门店进行用户调研，目的是为了设计一款新的销售软件。请不用在意我，保持平时的工作方式即可。

接下来的2小时内我会在门店观察记录一些你们工作的方式和流程，然后会与3个门店销售进行简单的访谈，大概30分钟，请畅所欲言，越真实越好，整个访谈都会保密而且匿名，你们的回答只会用于启发我们设计最适合你们使用的软件。

**Interview Guidelines**
**Ask for basic information first, the sequence of other questions can be adjusted flexibly**
* Basic information
    * Age
    * Education
    * Work years
    * Work experience
        * “您为什么选择做这一行呢？”
    * Job training
        * “您入职前接受了培训吗？都培训了哪些内容？你觉得培训的效果如何呢？“
        * “您在这里工作期间接受过培训吗？都培训了哪些内容？你觉得培训的效果如何呢？”
    * “您平时使用经常使用电子产品吗？手机/电脑/平板电脑？”
    * ”店里的顾客都是什么样的？“

* Product
    * ”您以前使用过类似的系统吗？“
    * “您觉得门店当前招揽顾客用的工具怎么样？哪里好用/不好用？可以举个例子吗？“
    * “您觉得门店现在的订单管理系统怎么样？（举例）”
    * ”如果换了一套新的工具，您愿意主动去学习如何使用吗？为什么？“
    * ”如果把系统从台式电脑换成了平板电脑（iPad），您认为会对您的工作有帮助吗？为什么？“
    * ”顾客对于您带领他们注册的时候态度怎么样？“
    * ”您最希望看到什么样的改进？为什么？“
        * “您最不希望改变的地方是什么？”
    * ”你觉得顾客希望看到什么样的改进？为什么“

* Behaviour and scenario
    * “您是如何使用当前的系统登录客户的？”
    * “您最常用的功能有哪些，可以举出几个例子吗？”
    * ”您联系顾客一般用什么呢？电话？短信？微信？其他？“
    * “您联系顾客的频率是多少呢？”（每个方式都统计）
    * “请问在哪些情况下需要您联系顾客？”
    * ”请问在什么情况下您会选择用纸笔记录后再转移到电脑？“
    * ”请问您平时有业绩要求/KPI吗？“
    * ”您觉得门店的客户管理系统对您完成业绩有帮助吗？在哪些具体的地方？如果没有，可以详细解释吗？“
