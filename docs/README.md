# Fuego.JS

<img src="./src/fuegobanner.png" height="235" width="inherit">

# Fuego.JS Documentation

## Defining Components

`example.js`
```js
function Example() {
    let hello = "Hello, world!";

    const render = () => {
        return `
        <h1> ${hello} </h1>
        `;
    }

    return render();
}

window.Fuego.Register('example', Example) // Register the component so it can be used.
```

## Using Components

```html
<!DOCTYPE html>
<html lang="en">

    <head>

        <title>Fuego Example</title>

        <script type="text/javascript" src="fuego.js"></script>

        <script type="text/javascript" src="example.js"></script>
        
    </head>


    <body>

        <fuego-component name="example" />

    </body>

</html>
```