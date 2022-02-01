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
