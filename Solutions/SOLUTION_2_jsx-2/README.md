
# `02` Building a layout

Let's practice a little bit more about using JSX for creating HTML.

Now we have another object that is just a bit more complex than the last one.

## Instructions:

In `index.js` you have been given a `data` object that contains Bob Dylan's information (image, title, etc).

- Use the information contained in `data` to render a JSX card!
- Then render the card in `index.html` using `ReactDOM`.
- **Note:** In the HTML file, Bootstrap will use each element's "class" to work out how to style it, so make sure you create classes in the right way in your JSX!

To help you, here is the HTML code for creating a Bootstrap card:

```html
<div class="card m-5" style="width: 18rem">
  <img class="card-img-top" src="Use the data object!" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Use the data object!</h5>
    <p class="card-text">Use the data object!</p>
    <a href="Use the data object!" class="btn btn-primary">Use the data object!</a>
  </div>
</div>
```
Source: [Bootstrap Card](https://getbootstrap.com/docs/4.0/components/card/#example)

### This is how your end result should look:

![Bob Dylan Card](./src/image/reference-image-react.png)