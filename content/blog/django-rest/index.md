---
title: "Tying Everything Together with Django REST"
date: "2019-12-22"
path: "/tying-everything-together-with-django-rest"
featuredImage: django-rest.jpg
---

Over the past few years at my job, we have written many ad-hoc PHP scripts that all achieve the same task of proxying APIs from various first and third party sources. This allows us to handle any required token authorization, as well as reformatting the output to something easilly parsable for our mobile app. While this has become routine for us, it gives us a massive headache down the line in managing and debugging each individual server-side script. Recently, my team has started to look for a better way to tie everything together.

I believe we have found that solution in the [Django REST framework](https://www.django-rest-framework.org). Using this new framework, we will finally be able to centralize all of our custom web service proxies to our ERP, manage credentials, and handle authentication and authorization in our mobile app. One thing we're excited about is the ability to create our own browsable API documentation.

Django also has a really cool admin tool, so that we can quickly spin up our own data entry systems for our partners in other administrative offices. This will allow them to easily control the flow of data to the mobile app.

While we unashamedly love PHP, we're excited to add Python and Django to our web and mobile app architecture.