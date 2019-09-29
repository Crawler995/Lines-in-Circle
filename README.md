# Lines in Circle

## Introduction
>A casual idea, but looks surprised when finished.<br>
If a quantity of lines cover on a circle, what will we see?<br>
https://crawler995.github.io/Lines-in-Circle/

All configuration are in `config.js`, you can modify them.<br>
`mapFunc` in it is the interesting item.<br>
When it equals `i * 2`, we will see `Cardioid` curve in the circle.<br>
When it equals `i * 3`, we will see `Nephroid` curve in the circle.<br>
Try to modify it casually, there're endless possibilities.<br>

## Build
1. You can double click `index.html` to run it. In this way, if you modify the configuration or the source code, the changes will not become effective. You have to refresh the page.
2. do `npm install`, and `npm run dev`, the page will be opened automatically in `localhost:3000`. In this way, if you modify the configuration or the source code, the changes will become effective immediately without manual refresh.

## Show
`mapFunc = i => i * 0.618`
![0dot618.PNG](https://github.com/Crawler995/Lines-in-Circle/blob/master/doc/0dot618.PNG)

`mapFunc = i => i * 2`
![0dot618.PNG](https://github.com/Crawler995/Lines-in-Circle/blob/master/doc/2.PNG)

`mapFunc = i => i * 2.5`
![0dot618.PNG](https://github.com/Crawler995/Lines-in-Circle/blob/master/doc/2dot5.PNG)

`mapFunc = i => i * 3`
![0dot618.PNG](https://github.com/Crawler995/Lines-in-Circle/blob/master/doc/3.PNG)

`mapFunc = i => i * 6`
![0dot618.PNG](https://github.com/Crawler995/Lines-in-Circle/blob/master/doc/6.PNG)

`mapFunc = i => i * 10`
![0dot618.PNG](https://github.com/Crawler995/Lines-in-Circle/blob/master/doc/10.PNG)

`mapFunc = i => Math.sin(i)`
![0dot618.PNG](https://github.com/Crawler995/Lines-in-Circle/blob/master/doc/sin.PNG)

`mapFunc = i => Math.atan(i)`
![0dot618.PNG](https://github.com/Crawler995/Lines-in-Circle/blob/master/doc/atan.PNG)