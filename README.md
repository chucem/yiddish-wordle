# A Yiddish Wordle

This repository as a Yiddish fork of [roedoejet/AnyLanguage-Wordle](https://github.com/roedoejet/AnyLanguage-Wordle), itself cloned from [cwackerfuss/react-wordle](https://github.com/cwackerfuss/react-wordle).

The dictionary is based on [alephreish/hunspell-yi](https://github.com/alephreish/hunspell-yi), in turn based on collections of [Raphael A. Finkel](http://www.cs.uky.edu/~raphael/yiddish.html), [Simche Taub](http://jidysz.net/) and [alephreish](https://github.com/alephreish).

_To Run Locally:_
Clone the repository and perform the following command line actions:
```bash
$ cd wordle
$ npm install
$ npm run start
```

_To build/run docker container:_
```bash
$ docker build -t notwordle .
$ docker run -d -p 3000:3000 notwordle
```
open http://localhost:3000 in browser.

