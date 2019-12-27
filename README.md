# Dynamic jQuery SelectListItems using jQuery.SelectListActions

jQuery.SelectListActions is a jQuery plugin that gives you several actions to perform with Select lists.
Based on repository by Esau Silva https://github.com/esausilva/jquery.selectlistactions.js we updated some functions and let dynamic.

We updated what Esau Silva developed with these news features:
In our concept an item is a list and a list is an item.

* Move selected item(s) up or down a list - (Removed function)
* Create new list based on the selected item
* Move selected item(s) to the new list created
* Move all items from a destination list to a source list and remove all destination list
* Move item(s) from a source list to a destination list if and only if the item was not added before
* Remove list when its is not used anymore

## Usage

Include **jquery.selectlistactions.js** in your page

```html
<script src="js/jquery.selectlistactions.js"></script>
```

## Demo

We are using the same files in **Example** folder Esau provided in his repository. This folder is styled with Bootstrap and some custom CSS.

The examples included are responsive and will look good in desktop as well as mobile.

For running the example just run the ```html demo.html``` in your respective browser.

<!-- Take a look at the [JSFiddle](http://jsfiddle.net/nzdak7aL/1/) for quick view -->

**enjoy!**

-- Adson Lessa and Caio Broflovski
