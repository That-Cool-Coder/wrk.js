# Get started with wrk.js

[Back to tutorials](index.md)

## Installation
To use wrk.js in your project there are two options: link to a CDN (content delivery network) or download a copy of wrk.js. For beginners, it is recommended to link to a CDN as this ensures that wrk.js will be up to date.

#### Linking to a CDN

Unfortunately, due to technical difficulties there is not currently a wrk.js CDN. For the time being, you must download a copy.

#### Downloading wrk.js

To download a stable version of wrk.js, go to the [GitHub release page](https://github.com/That-Cool-Coder/wrk.js/releases/) and click on a release. Scroll down to the assets section and download `wrk.js`.

## First project

Download wrk.js and put it in a folder. Create a HTML page in that folder and write this in it:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>wrk.js example</title>
        <meta charset="utf-8">
    </head>

    <body>
        <h1>wrk.js example</h1>
        <p id="output1"></p>
        <p id="output2"></p>
    </body>
    
    <script src="wrk.js"></script>
    <script>
        // Say hello
        wrk.internalLog('wrk.js example');

        // Write some random symbols to the document
        var para = wrk.dom.id('output1');
        para.innerText = wrk.str.randomSymbols(50);

        // Display the mouse position on the page;
        var mouseWatcher = new wrk.MouseWatcher();
        setInterval(() => {
            var position = mouseWatcher.position();
            var para = wrk.dom.id('output2');
            para.innerText = `Mouse position: ${position.x}, ${position.y}`;
        }, 250);
    </script>

</html>
```