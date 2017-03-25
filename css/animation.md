# defining keyframes

```css
@keyframes fade {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

# using to/from

@keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

# or shorthand, assumes defined opacity of 1.
@keyframes fade {
  to {
    opacity: 0;
  }
}

```

consider browser support...

```css
@-webkit-keyframes tutsFade { /* your style */ }
@-moz-keyframes tutsFade { /* your style */ }
@-ms-keyframes tutsFade { /* your style */ }
@-o-keyframes tutsFade { /* your style */ }

@keyframes tutsFade { /* your style */ }
```
applying animations, writing the shorthand, etc

```css
.element {
  animation-name: fade;
  animation-duration: 4s;
  animation-deplay: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: alternate;
}

# or shorthand
.element {
  animation: fade 4s 1s infinite linear alternate;
}

```
consider browser support...

```css
.element {
    -webkit-animation: tutsFade 4s 1s infinite linear alternate;
    -moz-animation: tutsFade 4s 1s infinite linear alternate;
    -ms-animation: tutsFade 4s 1s infinite linear alternate;
    -o-animation: tutsFade 4s 1s infinite linear alternate;
    animation: tutsFade 4s 1s infinite linear alternate;

}
```
chain multiple animations

```css
.element {
  animation: tutsFade 4s 1s infinite linear alternate,
             tutsRotate 4s 1s infinite linear alternate;
}
@keyframes tutsFade {
  to {
    opacity: 0;
  }
}
@keyframes tutsRotate {
  to {
    transform: rotate(180deg);
  }

}
```
