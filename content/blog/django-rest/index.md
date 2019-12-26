---
title: "Tying Everything Together with Django REST"
date: "2019-12-22"
path: "/tying-everything-together-with-django-rest"
featuredImage: 
---

Over the past few years, we have written many ad-hoc PHP scripts that all do achieve the same task of proxying APIs from various first and third party sources. This allows us to handle any required token authorization, as well as reformatting the output to something more homogenous for our mobile app. While this has sort of become routine for us, it gives us a massive headache in managing and debugging each individual script. Recently, my team has started to look for a way to tie everything together.

The solution is implementing a REST API framework that will centralize all of our custom web service calls to our ERP, as well as to third-party API's. In addition, Django has a really cool admin tool so we can quickly spin up our own data entry systems for our partners in other administrative offices, allowing them to control the data, which will be outputted as JSON.