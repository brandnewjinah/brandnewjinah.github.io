---
title: RegEx
date: 2020-10-10
tags:
  - Regex
---

RegEx or regular expression is patterns used to match or locate character combinations in strings. It's commonly used to validate input value.

##### Use it to vaidate password

I used it in my last post to create Mailchimp registration example. Mailchimp requires the password to have

- one lowercase character
- one uppercase character
- one number
- one special character
- 8 characters minimum

This can be validated with RegEx

```Javascript
if (!password.match(/(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&*]).{8}/)) {
    return "error message"
}
```

- `(?=.[a-z])` matches any lowercase character
- `(?=.[A-Z])` matches any uppercase character
- `(?=.\d)` matches any number
- `(?=.[!@#$%^&*])` matches any special character
- `.{8}` at least 8 characters

##### Other uses

From the [edabit](https://edabit.com/challenge/rvsvGvqZ3BzNieKqA) javascript challenges

<h6 style="color: #565656">Question</h6>

From a given string comprised of uppercase and lowercase characters, detect lowercase characters, extract them and return it as one word.

```bash
detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
```

<h6 style="color: #565656">Answer</h6>

```javascript
const detectWord = str => {
  return str.replace(/[A-Z]/g, "")
}
```

- `/[A-Z]/g` do a global search for uppercase characters
- `replace` all uppercase characters with empty string " "
- this leaves us with only lowercase characters

<h6 style="color: #565656">Question</h6>

How many D's are in a sentence?

```bash
countDs("My friend Dylan got distracted in school.") ➞ 4
```

<h6 style="color: #565656">Answer</h6>

```javascript
const countDs = str => {
  str.match(/d/di).length
}
```

- `/d/id` match character "d", case insensitive
