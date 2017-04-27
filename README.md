# Special Character

[![Build Status](https://travis-ci.org/wuriyanto48/special-char.svg?branch=master)](https://travis-ci.org/wuriyanto48/special-char)

# Why ?
Sometimes you need to add **special character** to your string variable....
 **¼ µ ¿ Ȝ Φ** , hope can fix your problem

# Usage

- Install using NPM

```shell
$ npm install special-char
```

- Very simple, just add to your code

```javascript
let str1 = `Its so cold, i think 10${SC.DEGREE_SIGN} now..`;
console.log(str1);
```

- you'll see the following result

```
Its so cold, i think 10° now..
```

# How to Contribute
- Fork first
- Clone to your local machine
```shell
$ git clone https://github.com/<your-github-username>/special-char
```

- Install dependencies
```shell
$ npm install
```

- Create a new branch
```shell
$ git checkout -b feature/your-feature-branch
```

- Run test
```shell
$ npm test
```

- Push to your repository
```shell
$ git push -u origin feature/your-feature-branch
```

- Hit the Pull Request
