# Lab 5 - Starter
Lab Partners: Sarah Chun, Niroop Krishnakumar

## Explore Questions
1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
Yes and no. I would use unit tests to test that components of the messaging application work as intended (e.g. reading in the user's message and having the correct connection to send a message to another user), but would test the message feature of the application as a whole after it passes the unit tests. The unit tests would help organize the different parts of the feature and make debugging easier by ensuring that the separate components were implemented correctly. However, the messaging application would still need to be tested as a whole to ensure that the different components still work as intended once combined together.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
Yes, the max message length feature of a messaging application is a component that I would use a unit test to test for to ensure that it works as intended before incorporating it into the overall message application.
 