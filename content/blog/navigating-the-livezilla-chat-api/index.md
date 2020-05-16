---
title: "Navigating the LiveZilla Chat API"
date: "2020-05-16"
path: "/navigating-the-livezilla-chat-api"
featuredImage: chat-image.jpg
##Photo by Austin Distel on Unsplash
---
Our IT Help Desk currently use LiveZilla as a live chat application. It's an awesome tool providing a direct line of communication for our students and staff to receive support. I was never a fan of Livezilla from a technology standpoint... until now.

In evaluating student needs for our new mobile app, we decided that a built in chat is something students will benefit from. I didn't think that Livezilla had a robust enough API, but after spending some time with it, my confidence in it has been renewed.

The app will call three API endpoints, one to initiate a new chat with a Help Desk rep on behalf of the user, another one to send subsequent messages, and another to end the chat (creating a support ticket within our ticketing system). All of this can be done simply by POSTing to these three endpoints.

This leaves receiving messages. In the past, we have set interval timers in the app that would periodically check for new data, however, this time we are going to use sockets so we can push outgoing messages directly to the app user.

We are using Django REST Framework to develop our API platform, which has the robust [Django Channels](https://channels.readthedocs.io/en/latest/) library. However, in the interest of keeping this API platform as RESTful as possible, I'm looking to spin up a separate NodeJS instance running [Socket.IO](https://socket.io). This NodeJS Server will sit between the mobile app and the API.