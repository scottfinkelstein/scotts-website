---
title: "Navigating the LiveZilla Chat API"
date: "2020-05-30"
path: "/navigating-the-livezilla-chat-api"
featuredImage: chat-image.jpg
##Photo by Austin Distel on Unsplash
---
**UPDATE July 11, 2020 &mdash; LiveZilla GmbH went into dissolution and will be winding down their operations over the next year. So over the next few months we will be selecting a replacement.**

**While we need to find a solution that ultimately checks all the boxes for our HelpDesk, I will be advocating that whatever we choose has many of the same REST API features as LiveZilla, along with many other features that I felt LiveZilla was lacking in &mdash; mainly full control over the design for cleaner integration in our website, along with possible chatbot and voice assistant integration.**

In evaluating student needs for our new mobile app, we decided that a built in chat is something students will benefit from. Our IT Help Desk uses LiveZilla as a live chat application. It's an awesome tool providing a direct line of communication for our students and staff to receive support. That said,I didn't think that Livezilla had a robust enough API, but after spending some time with it and building a rough prototype, my opinion has changed in favor of it.

In building out a native mobile chat interface, we will need to utilize three LiveZilla API endpoints:

1. Initiate a new chat session with a Help Desk rep on behalf of the user 
2. Send subsequent messages to the chat session opened via the previous endpoint.
3. End the chat on behalf of the user (creating a support ticket within our ticketing system)

All of this can be done simply by POSTing to these three endpoints.

This leaves receiving messages. In the past, we have set interval timers in the app that would periodically check for new data, however, this time we are going to use sockets so we can push outgoing messages directly to the app user.

We are using Django REST Framework to develop our API platform. While this affords us the robust [Django Channels](https://channels.readthedocs.io/en/latest/) library, we would like to keep this API platform as RESTful as possible, I'm looking to spin up a separate NodeJS instance running [Socket.IO](https://socket.io). This NodeJS Server will sit between the mobile app and the API, listening to the outgoing Help Desk rep chat messages (along with the chat session ID)and sending it to the client app.

So far, we have a proof-of-concept working using a bare-bones SwiftUI iOS app, connecting to the the 3 API endpoints, and a node socket server running on localhost + [ngrok](https://ngrok.com) listening to chat operator responses. 

I tested this out with a couple of simultanious chat sessions. Since they use the chat ID this keeps the communication one-to-one, however we will need to test this with multiple devices / operators.