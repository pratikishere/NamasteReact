### CSS

## What if there are multiple style sheets defined? Which style sheet gets the priority?

All the styles in a page will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:

Inline style (inside an HTML element)
External and internal style sheets (in the head section)
Browser default

## CSS background - Shorthand property

Instead of writing:

```
body {
  background-color: #ffffff;
  background-image: url("img_tree.png");
  background-repeat: no-repeat;
  background-position: right top;
}
```

You can use the shorthand property background

```
body {
  background: #ffffff url("img_tree.png") no-repeat right top;
}
```
