# fetch-polyfill
<<<<<<< HEAD
a fetch polyfill(es6 style)


## Installation
* `npm install ywl-fetch --save`;

## Usage
```javascript
import 'ywl-fetch'
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

