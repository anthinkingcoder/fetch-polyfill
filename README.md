# fetch-polyfill
<<<<<<< HEAD
a fetch polyfill(es6 style)


## Installation
* `npm install ywl-fetch --save`;

## Usage
> in this way, your need use babel to compile,.babelrc file like 
```
{
  "presets": [
    [
      "env"
    ],
    "stage-2"
  ],
  "plugins": [
    "transform-runtime"
  ]
}
```
```javascript
import {fetch,Response,Request} from 'ywl-fetch'
fetch('./mock/a.json')
        .then(function (response) {
                return response.json()
        }).then(json => {
                console.info(json)
      })
```

## Script
```html
  <script src="./dist/fetch-polyfill.js"></script>
  <script>
  fetch('./mock/a.json')
            .then(function (response) {
                    return response.json()
            }).then(json => {
                    console.info(json)
          })
</script>
```

## Support
> ie10+ or chrome etc.



=======
a fetch polyfill,support interceptors
>>>>>>> parent of 40b0a91... Update README.md
