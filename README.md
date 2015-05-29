# Heartwood

## Purpose

To provide a solid typographic core for projects
using scss.

## Use

1: Install via Bower or [download](https://github.com/iangfleming/heartwood/archive/master.zip) the zip.

```
$ bower install heartwood
```

2: Import into your project.

```
@import '<path to heartwood>/heartwood';
```

3: If needed change the defaults do so in _config-heartwood.scss

```
// If you'd like to change the defaults do so here;
$headings-font-family: null;
$body-font-family: null;
$code-font-family: null;
$base-font-size: null;
$no-type-margins: null;
$ms-base: null;
$ms-ratio: null;
$body-copy-color: null;
```

Heartwood is based on the concept of setting the font size at
different levels of the design. At the document level the size is set in
%, at the module level in rem's, and at the element level in em's.

```
<html>
  <header>
    <p>Title</p>
  </header
</html>
```

```
html {
  font-size: 62.5%;
}
header {
  font-size: 1rem;
}
p {
  font-size: 1.6em;
}
```

This allows type to scale together or seperately depending on your
needs. I first encountered this idea here https://css-tricks.com/rems-ems
described by Chris Coyier.

The above example would look like this using Heartwood.

```
html {
  @include document-type;
}
header {
  @include module-type;
}
p {
  @include p;
}
```

Why is this any better than the original? Here's what it compiles to.

```
html {
  font-size: 62.5%;
  color: #2d2d2d;
}
  @media (max-width: 900px) {
    html {
      font-size: 59.375%;
     }
   }
  @media (max-width: 400px) {
    html {
      font-size: 56.25%;
     }
   }

header {
  font-size: 10px;
  font-size: 1rem;
}

p {
  font-family: "Roboto", helvetica, sans-serif;
  font-size: 16px;
  font-size: 1.6em;
  letter-spacing: .01rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 0 0 1em 0;
  text-rendering: optimizeSpeed;
}
```
