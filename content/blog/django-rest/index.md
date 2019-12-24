---
title: "Tying Everything Together with Django REST"
date: "2019-12-22"
path: "/tying-everything-together-with-django-rest"
---

Over the past few years, one of the challenges I've faced is pulling API data from various sources into our mobile app, AU2GO. I've always had to write a PHP script to handle the cURL request, sending auth tokens to the third party endpoint. The problem was, that I've accumulated too many of these ad-hoc scripts on a few different web servers. Recently, my team has started to look for a way to tie everything together.

The solution is implementing a REST API framework that will centralize all of our custom web service calls to our ERP, as well as to third-party API's. In addition, Django has a really cool admin tool so we can quickly spin up our own data entry systems for our partners in other administrative offices, allowing them to control the data, which will be outputted as JSON.