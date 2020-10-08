---
title: Glossary - things I must know as a front-end developer
date: 2020-07-01
tags:
  - Keywords
---

Here I put together the things I must know as a front-end developer. The list will keep growing.
<br><br>

##### A

**Asynchronous**<br/>
Asynchronous is when you don't wait until something is done to continue your program. You want to continue while it's happening. In contrast, synchronous is when something happens and you wait until it's completely finished until you move on to the next. Why asynchronous? You often make requests to servers and it can take a while to get your data back. You don't want your program to stall until you get the data.

##### P

**Promise**<br />
Just like a promise in real life, it commits to do something. When we send an HTTP request, there is going to be a delay until we get the result. It promises to hold the result of an asynchoronous operation, and return either resolved(success) or rejected(fail).

<br />

##### R

**Regular Expression**<br />
Patterns used to match or locate character combinations in strings<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions" target="_blank"> [MDN].</a> It's commonly used to validate input value. For example, `/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8}/` this pattern sees if a string matches any one number`\d`, a lowercase character`[a-z]`, an uppercase character`[A-Z]`, a special character`[!@#$%^&*]` and at least 8 characters`{8}`.
