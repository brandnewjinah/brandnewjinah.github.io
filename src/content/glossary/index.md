---
title: Glossary - things I must know as a front-end developer
date: 2020-07-01
tags:
  - Keywords
---

Here I put together the things I must know as a front-end developer. The list will keep growing.
<br><br>

<h5 style="color: #214bce; font-weight: 700;">A</h5>

###### Asynchronous

Asynchronous is when you don't wait until something is done to continue your program. You want to continue while it's happening. In contrast, synchronous is when something happens and you wait until it's completely finished until you move on to the next. Why asynchronous? You often make requests to servers and it can take a while to get your data back. You don't want your program to stall until you get the data.

<h5 style="color: #214bce; font-weight: 700;">P</h5>

###### Promise

Just like a promise in real life, it commits to do something. When we send an HTTP request, there is going to be a delay until we get the result. It promises to hold the result of an asynchoronous operation, and return either resolved(success) or rejected(fail).

<br />

<h5 style="color: #214bce; font-weight: 700;">R</h5>

###### React Hooks

- <code>useLayoutEffect</code><br>
  Runs synchronously after a render but before the screen is updated. React starts to render, <code>useLayoutEffect</code> runs, an when it's done, then the screen is updated. Usually when you need to perform measurements.

###### Regular Expression

Patterns used to match or locate character combinations in strings<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions" target="_blank"> [MDN].</a> It's commonly used to validate input value. For example, <code>/(?=._\d)(?=._[a-z])(?=._[A-Z])(?=._[!@#$%^&*]).{8}/</code>this pattern sees if a string matches any one number<code>\d</code>, a lowercase character<code>[a-z]</code>, an uppercase character<code>[A-Z]</code>, a special character<code>[!@#$%^&*]</code> and at least 8 characters<code>{8}</code>.

###### REST

It stands for **Re**presentational **S**tate **T**ransfer. REST is a convention for building HTTP communications to create, read, update and delete data (CRUD). In HTTP verbs, it's POST, GET, PUT, and DELETE. When you say RESTful, it means it's following the REST conventions.
