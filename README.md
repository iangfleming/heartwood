# Heartwood

## Purpose

To provide a solid foundation typographical foundation for projects
using scss.

## Use

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
needs.
https://css-tricks.com/rems-ems
