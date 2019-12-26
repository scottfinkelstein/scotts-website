---
title: "Tying Everything Together with Django REST"
date: "2019-12-22"
path: "/tying-everything-together-with-django-rest"
featuredImage: django-rest.jpg
---

Over the past few years at my job, we have written many ad-hoc PHP scripts that all achieve the same task of proxying APIs from various first and third party sources. This allows us to handle any required token authorization, as well as reformatting the output to something more homogenous for our mobile app. While this has sort of become routine for us, it gives us a massive headache in managing and debugging each individual script. Recently, my team has started to look for a better way to tie everything together.

I believe we have found that solution in the Django REST framework. Using this new framework, we will finally be able to centralize all of our custom web service proxies to our ERP, as well as manage authentication and authorization in our mobile app. In addition, Django has a really cool admin tool so we can quickly spin up our own data entry systems for our partners in other administrative offices, allowing them to control the data, which will be outputted as JSON.

While we are mostly a LAMP shop, and unashamedly love PHP, we're excited to add Python and Django to our web and mobile app architecture.