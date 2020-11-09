---
title: String - split()
date: "2020-11-08"
description: Wyjaśnienie działania split() w JavaScript
featured: podsumowanie-miesiaca-maj-2020.png
category: javascript
tags: javscript,string,split
author: "Marcin Zogrodnik"
author_www: "https://marcinzogrodnik.pl"
---

```js
const name = "Marcin"

name.split('')
// ['m', 'a', 'r', 'c', 'i', 'n']
```

## Przykłady

```js
const name = "Marcin"

name.split() // domyślnie (bez '') zwraca cały string
// 'Marcin'
```

Ciekawą opcją jest użycie ```split()``` w celu destrukcji adresu URL.

```js
const url = 'www.nauczsiekodowac.pl/blog/string-split'

url.split('/')
// ['www.nauczsiekodowac.pl', 'blog', 'string-split']