---
layout: post
title: Projects at Medopad
cover: medopadcover.jpeg
date: 2019-07-02 00:00:00
categories: posts
---

# Medopad UI - Building a Design System
<br>

> [Medopad rebranded to HUMA](https://www.telegraph.co.uk/technology/2020/04/15/medopad-rebrands-acquires-firms-boost-remote-monitoring-patients/)


> You can right-click "Open Image in New Tab" for larger images)
（可以右键“新窗口打开 ”放大图片）

*Note that due to Non-disclosure Agreement, I cannot make public the entire desgin system documentation*


## Instructions on taking photos of X-Ray films

### User flow  
![xray userflow]({{site.baseurl}}/assets/medopad/xray userflow.png){:class="img-responsive"}

### UI of 5 core functions

![module overview]({{site.baseurl}}/assets/medopad/storescreens.jpg){:class="img-responsive"}


### UI for X-Ray instructions

![module overview]({{site.baseurl}}/assets/medopad/photo overview.png){:class="img-responsive"}

![module overview]({{site.baseurl}}/assets/medopad/instructions.png){:class="img-responsive"}

Behaviour-Driven-Documentation was also produced for the screens shown above. In case you are interested, you can inspect this page with your browser, I commented them out.

<!---
### BDD (Behaviour-Driven-Documentation)

#### Acceptance Criteria
- Users can take photos of intended objects
- Users can add photos from their local library
- Users can submit photos they took/selected
- Users can retake/re-select photos
<br>
- Users are prompted to read instructions before adding/uploading photos
- Users can add notes before they submit a photo
- Users can review the photos they have previously uploaded, by date
<br>
- User can skip instructions
- User can exit Photo.
- User can edit responses.
<br>
- User can retry submission if it fails.

#### Module overview

|Screens (hidden)|Expected Behaviour|
|---|---|
|-| **Given**  The user has access to the Photo module<br>**When**  The user is on the Photo module overview<br>**Then**   The user should see the title of the screen "Photos", alongside a back button and a pill button [add]<br>**And**     The user should see a link to their previous questionnaire entries<br>**And**     The user should see a section where they can see the schedule and frequency<br>**And**     The user should see a reminders section where  they can  add reminders|
|-|**Given**  The user has access to the Photo module<br>**When**  The user is Adding Photo <br>**Then**   The user should see the title of the screen with a back button<br>**And**    the user should see one correct example and one wrong example, with illustration and text<br>**And**     The user should be able to skip to the last instruction screen|
|-|**Given**  The user has confirmed a photo to submit<br>**Then**   The user should see the thumbnail of the selected photo above note-input section <br>**And**     The user should see the note-input section clearly written “mandatory”, with placeholder text<br>**And**     The user should see an primary button in disabled state<br>**And**     The user should see an tertiary button above the primary button|
|-|**Given**  The user has confirmed a photo to submit<br>**When**   The user taps on the input field<br>**Then**    The user should see the native text keyboard<br>**And**     The user should see a blinking caret (i.e. text-cursor) showing where their typed text will be input|
|-|**Given**  The user has confirmed a photo to submit<br>**When**   The user taps on the input field<br>**Then**    The user should see the native text keyboard<br>**And**     The user should see a blinking caret (i.e. text-cursor) showing where their typed text will be input<br>**And**     (iOS only) The user should see a bar stick to the top of the keyboard with a "Done" button inside it—which will allow them to dismiss the number keyboard|
|...|the rest of this list is omitted...|
-->



## Android & iOS Push Notifications Research

### UI Mockups
![iOS Notifications]({{site.baseurl}}/assets/medopad/ios notifications.jpg){:class="img-responsive"}

![Android Notifications]({{site.baseurl}}/assets/medopad/android notifications.jpg){:class="img-responsive"}

<!--
### BDD on Notifications
This Behavioural Driven Development documentation describes the expected user journeys and behaviours for adding and updating Profile details. The final User Interface and visuals are not finalised. Look on Abstract for final visuals (LINK)

#### Acceptance Criteria
- Users can see what action is required to be taken, e.g. measure blood pressure; measure heart rate; etc.

- Users can see what medication & dosage they need to take without opening the app

- Users can see when was the notification sent to them (system default, but we need to somehow have a more accurate history of adherence in-app)

- Users can preview more content with expandable notifications

#### Next iteration

- Users can snooze the notification for later

- Users can take inline actions with a notification, e.g. "complete" with Medication Tracker, "add" with Journal

- Users can submit journals inline within notification

- Users can be notified when their weekly/monthly/quarterly stat report is ready

#### Dos and don'ts

- DON'T use Notification Action to provide duplicate action to system default actions e.g open the app; dismiss the notification.

- DO use the call to action area to provide user with extra actions e.g. snooze, complete, add, etc.

Reference: https://uxplanet.org/fundamentals-of-drafting-good-push-notifications-181c8255c33d

|Android (hidden) | iOS (hidden)| Expected Behaviours|
|---|---|---|
|-|-|	**When** user is due for an upcoming action <br>**Then** the notification will arrive showing the action required|
|-|-|	**When** user taps anywhere on the notification <br>**Then** user will land on its according module screen|
|-|-|	**Scenario 1 Android 4.2+:** <br>**Given** the user's notification centre is full<br>**When** notifications arrives<br>**Then** user can swipe down to expand the notification for additional actions<br><br>**Scenario 2 iOS 11+:** <br>**When** notifications arrives<br>**Then** user can 3D Touch/Long Press to show additional actions |
|-|-| **Given** the user's notification centre is empty/almost empty<br>**When** notifications arrives expanded<br>**Then** user can see the expanded view of the notification (with additional actions)|
|-|-|	**Given** the user receives a notification with inline reply<br>**And** the user expanded the notification<br>**When** the user taps the inline reply action e.g. "ADD"<br>**Then** perform text input inline|
|...|...|the rest of this list is omitted...|
-->



## Glucose Monitoring Module

Glucose Module with segmented control

![Glucose]({{site.baseurl}}/assets/medopad/glucose.png){:class="img-responsive"}

Blood Pressure Module

![Blood Pressure Overiew]({{site.baseurl}}/assets/medopad/bloodpressure overview.png){:class="img-responsive"}

![Blood Pressure Posture]({{site.baseurl}}/assets/medopad/bloodpressure posture.png){:class="img-responsive"}



## Poster

![Mockup]({{site.baseurl}}/assets/medopad/mockup2.jpg){:class="img-responsive"}

![Mockup]({{site.baseurl}}/assets/medopad/mockup3.jpg){:class="img-responsive"}
