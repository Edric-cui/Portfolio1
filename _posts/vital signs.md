## Vital signs tracking

glucose

heart rate and blood pressure

Parkinson's disease


## How do I make tracking glucose a better process for diabetes patient

glucose

## Problems I found through research with medical professionals:
- Tracking glucose is tedious and repetitive. Patients with diabetes may need to track glucose as often as possible, up to 6 times a day.
- glucose value alone is not a good indicator, it's much more useful when paired with eating habits.
  - a decent part of our users use small devices therefore need to consider showing all fields in one screen


problems found through internal focus group
- adjusting time picker is inaccurate and often gives wrong answer if spinning too fast
-

# a new ver released and survey sent out:

Eventhough internal review is passed, some problems were found through user survey
- too many inputs not consecutive



# solution for glucose (and applied to other modules)

1. simplify the process and make everything fit in one page (screen)

1. add a prominent "complete and thanks" screen to give users a sense of achievement

1. add eating status menu, and then pair it with time of the day. Only if hour is not edited, then changing eating status will change hour too. By default, hour is showing current hour and most often selected eating status

1. because of this, we can also make eating status control a horizontally scrollable bar, so that all input can fit in one screen

1. replace the native time picker with numpad key input for more accurate and more efficient input. And change the font to Monospace so that they are immediately recognisable and can be distinguished between "0" "O" "o".

## the solutions above were refined and tweaked during a few the internal design reviews, until most internal testers feel the process makes sense and smooth

after released upon survey

1. auto jump to next input when the previous one is done, and when the last input is complete. collapse the keyboard to show the "next button"


# Problems of BP&HR

## Problems I found through research with medical professionals:

- BP and HR values are heavily affected by multiple factors from time of the day, activity level, mood etc. It also depends on if the person is talking, which posture, and whether relaxed.

- need to make sure every measurement is taken under similar conditions so that the data are usable




# Solution for hr and bp

1. created an animated illustration to help users maintain similar posture every measurement.

1. added a voice prompt to speak out the helper text, to help users follow the instruction

  1. In general, this module received positive feedback from our phase 1 testers, some specifically commented that the voice prompt being helpful.

  1. First iteration we use system text-to-speech, which is a slightly robotic voice. The users did not show positive feedback. We quickly updated with professional voice actor, and received a number of positive feedback saying the calm voice and tone helped me to relax, and hope to see more of it.



# PKD

## Problems I found through research with medical professionals:

Taking photos of X-ray films using a phone is often problematic because x-ray films are made of special materials and are meant to be viewed by medical specialists.

However it is not impossible if users are given instructions and opportunities to redo.

Best solution:
connect to hospital's HIS system and acquire source image. This is currently impossible due to legal and technical limitation

Second best:
Shoot photos of x-ray films from a backlit panel.

# Solution

- Create an instruction with clear examples to help users understand what could go wrong, and more importantly, how to avoid mistakes.

# Challenge

- During phase 1 live, the actual outcome was not ideal. More than half of photos were unusable according to the doctor (we cannot pin-point patient's photo thus no analytics can be done). The reason behind is that we cannot provide immediate feedback on the quality of photos, hence users do not know if they have followed the instruction correctly.

- I proposed a possible solution which is to allow doctors to markup the photo so that the patient knows where to pay attention next time.

- In the future, we plan to use algorithms to pre-judge the quality of the photos.


# Notifications

All modules above (and many doctors) share one common challenge, which is how to motivate users take their measurement at the required time and record them in the app as they do.

Our previous solution is simply a timed notification with text to remind users to open the app and complete actions. I believe it has much room for improvement, so I started with some research.

## research
- there are 3 main parts involved according to psychology theories built from Maslow, Deci, etc.

1. Intrinsic motivation
1. Extrinsic motivation
1. Ease of completion

Simply put, intrinsic motivation is the most sustainable source of motivation. External motivation is strong in the short term. And ease of completion can boost up other factors.

Our users are referred by doctors, so they tend to have a strong extrinsic motivation at the beginning. Therefore, we intend to use this extrinsic motivation as a head-start, then build their intrinsic motivation by providing a visualised and tangible path to better health. Meanwhile, reduce the ease of completion to smooth the entire process.

In this case study I will focus on the notification/reminder system, which acts as extrinsic motivation to remind users of what need to be done. **This system aims to require minimum efforts from users to complete the task of recording vital signs.**

I did research on how iOS and Android handle notification, and how to support in-line reply, and in-line actions.

In-line reply allow users to complete certain action without opening the app. It makes some repetitive actions less boring, and takes less time.

## My solution:

For medication tracker module, once users have set up routine medications and reminder. They will received a push notification with two options: "taken" and "remind me in 30min".

If they have taken their meds already, then they can tap "taken" without confirming it in-app. Or, they can delay the reminder it for 30 minutes, until they tap "taken".

Some patients are requested to write journals regularly, which are normally just a sentence or two. Hence I added in-line reply for users to quickly finish their journal.

For modules that require other tracking devices, users can decide if they are ready or snooze it. If they are ready, they will be taken to the specific screen respectively. This is achieved on Android after discussing with engineers on enabling multiple thread operation. However, we haven't find a similar solution on iOS.


# Learnings

1. Taught in school so many times bu still relevant, "understanding user and their motivation is key to good design".

1. there are many ways to understand users, and sometimes they don't even know themselves very well. For example, medical experts know patients more than anyone, and they can provide valuable opinions.

1. even if it's impossible to test with real users, internal testing with colleagues, families, other team-members can still provide useful feedback.

1. A user flow can be repeated many times, and then users may not flow as intended afterwards.

1. Need to keep track of new features and changes released to each platform, sometimes they provide better and native solution than your hacks.
