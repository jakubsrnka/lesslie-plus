# Less compiler

This is a {less} compiler ready for microsites and small-scale web pages.

## Usage

### Startup

Run `npm run dev` in the `styles` folder to start the compiler.
The compiler will save `homepage.min.css` into `./../www/css/`. You can change this in `styles/webpack.config.js`.

### Development

The stylesheet is ready for dynamically scaled web pages. Use `calc([size in pixels] * @ratio)` for the size to be recalculated in `vw`.

The page breakpoints are configured in `styles/less/variables.css` as `@sizes`.

Do NOT delete the `homepage.less` file as it is the main compiled file. You can change this in `styles/app.js`.

Generally all files containing `-desktop` are used for desktop version and `-mobile` are used for mobile versions.
Import these files in `homepage.less` using `@import (multiple)` below `general-desktop` / `general-mobile` files.

Fonts can be defined in `variables.less` and then be used anywhere.

#### Why lesslie-plus?

lesslie-plus is a buffed up version of lesslie - a {less} compiler for microsites and small webpages. This version is enriched with `helper.less` file, which includes several predefined classes you can use in your styling.

lesslie-plus makes it easier for you to style sizes, background images or pseudo elements - with all of these there are several CSS attributes you'd need every time you wanted to use this type of styling. For example styling of background image could look like:

```
background-image: url("assets/some-image.png");
background-size: cover;
background-repeat: no-repeat;
background-position: center;
```

With lesslie-plus you can just write:

```
.cover("assets/some-image.png");
```

and the less compiler does the rest. Do you need to change from the `cover` property to `contain`? Just use:

```
.containt("assets/some-image.png");
```
