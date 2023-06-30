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

## Specific Side Widths

```
p.two {
  border-style: solid;
  border-width: 20px 5px; /* 20px top and bottom, 5px on the sides */
}

p.three {
  border-style: solid;
  border-width: 25px 10px 4px 35px; /* 25px top, 10px right, 4px bottom and 35px left */
}
```

# If the border-style property has four values:

border-style: dotted solid double dashed;  
top border is dotted  
right border is solid  
bottom border is double
left border is dashed

# If the border-style property has three values:

border-style: dotted solid double;  
top border is dotted  
right and left borders are solid  
bottom border is double

# If the border-style property has two values:

border-style: dotted solid;  
top and bottom borders are dotted  
right and left borders are solid

# If the border-style property has one value:

border-style: dotted;  
all four borders are dotted

## Margin - Individual Sides

CSS has properties for specifying the margin for each side of an element:

margin-top  
margin-right  
margin-bottom  
margin-left  
All the margin properties can have the following values:

auto - the browser calculates the margin  
length - specifies a margin in px, pt, cm, etc.  
% - specifies a margin in % of the width of the containing element  
inherit - specifies that the margin should be inherited from the parent element
