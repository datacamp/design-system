# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0-beta.17](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.45...@datacamp/waffles-core@2.0.0-beta.17) (2020-08-14)


### Bug Fixes

* font width/stretch for latest version of fonts ([f7a8ca8](https://github.com/datacamp/design-system/commit/f7a8ca8))


### Features

* add letter spacing for different size headings ([7b4ca34](https://github.com/datacamp/design-system/commit/7b4ca34))
* add line height for large headings ([7d70c17](https://github.com/datacamp/design-system/commit/7d70c17))
* change sans-serif font ([6f2d3cd](https://github.com/datacamp/design-system/commit/6f2d3cd))
* load font from hosted version ([0988a6c](https://github.com/datacamp/design-system/commit/0988a6c))
* load font in a way to allow font-weight to work ([186c1eb](https://github.com/datacamp/design-system/commit/186c1eb))
* load studio feixen fonts from production waffles site ([2c154b1](https://github.com/datacamp/design-system/commit/2c154b1))
* remove colour utils from core package ([a58d7c0](https://github.com/datacamp/design-system/commit/a58d7c0))
* remove gradients from waffles-core ([a21cb74](https://github.com/datacamp/design-system/commit/a21cb74))
* remove transparent colours ([89b8226](https://github.com/datacamp/design-system/commit/89b8226))
* temporarily load fonts from separate ttf files ([7a11485](https://github.com/datacamp/design-system/commit/7a11485))
* update font weights for new branding ([cf0f3bc](https://github.com/datacamp/design-system/commit/cf0f3bc))
* update font weights to work with latest font version ([812a41b](https://github.com/datacamp/design-system/commit/812a41b))
* update heading line height ([ca2da4f](https://github.com/datacamp/design-system/commit/ca2da4f))
* update the colours in core ([a52539d](https://github.com/datacamp/design-system/commit/a52539d))
* use JetBrains MonoNL for code font ([cea2bbb](https://github.com/datacamp/design-system/commit/cea2bbb))
* use studio feixen writer for monospace font ([c585560](https://github.com/datacamp/design-system/commit/c585560))


### BREAKING CHANGES

* The color functions, getColor and getContrastColor have 
been removed. Please access colours directly from the tokens now.
* all the colours have changed, and a lot of classes have 
been deprecated. Check the upgrading article for details
* white-transparent and black-transparent no longer exist
* All variables and utility classes related to gradients 
have been removed.
* all monospace font now uses JetBrains MonoNL
* Headings with size 800 (or h1 from the style sheets) 
now have a letter spacing of -1. Headings with size 700 & 600 (or h2 & 
h3 from the style sheets) now have a letter spacing of -0.5
* The line height for headings has changed from 1.25 to 
1.2
* The monospace font has changed from Roboto-Mono to 
Studio-Feixen-Writer. This may affect layout when using code or code 
blocks.
* Font weights have been updated to work with new 
branding
* The sans-serif font has changed from Lato to Studio-Feixen-Sans-Variable





# [2.0.0-beta.16](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.44...@datacamp/waffles-core@2.0.0-beta.16) (2020-08-06)


### Bug Fixes

* font width/stretch for latest version of fonts ([f7a8ca8](https://github.com/datacamp/design-system/commit/f7a8ca8))


### Features

* add letter spacing for different size headings ([7b4ca34](https://github.com/datacamp/design-system/commit/7b4ca34))
* add line height for large headings ([7d70c17](https://github.com/datacamp/design-system/commit/7d70c17))
* change sans-serif font ([6f2d3cd](https://github.com/datacamp/design-system/commit/6f2d3cd))
* load font from hosted version ([0988a6c](https://github.com/datacamp/design-system/commit/0988a6c))
* load font in a way to allow font-weight to work ([186c1eb](https://github.com/datacamp/design-system/commit/186c1eb))
* load studio feixen fonts from production waffles site ([2c154b1](https://github.com/datacamp/design-system/commit/2c154b1))
* remove colour utils from core package ([a58d7c0](https://github.com/datacamp/design-system/commit/a58d7c0))
* remove gradients from waffles-core ([a21cb74](https://github.com/datacamp/design-system/commit/a21cb74))
* remove transparent colours ([89b8226](https://github.com/datacamp/design-system/commit/89b8226))
* temporarily load fonts from separate ttf files ([7a11485](https://github.com/datacamp/design-system/commit/7a11485))
* update font weights for new branding ([cf0f3bc](https://github.com/datacamp/design-system/commit/cf0f3bc))
* update font weights to work with latest font version ([812a41b](https://github.com/datacamp/design-system/commit/812a41b))
* update heading line height ([ca2da4f](https://github.com/datacamp/design-system/commit/ca2da4f))
* update the colours in core ([a52539d](https://github.com/datacamp/design-system/commit/a52539d))
* use JetBrains MonoNL for code font ([cea2bbb](https://github.com/datacamp/design-system/commit/cea2bbb))
* use studio feixen writer for monospace font ([c585560](https://github.com/datacamp/design-system/commit/c585560))


### BREAKING CHANGES

* The color functions, getColor and getContrastColor have
been removed. Please access colours directly from the tokens now.
* all the colours have changed, and a lot of classes have
been deprecated. Check the upgrading article for details
* white-transparent and black-transparent no longer exist
* All variables and utility classes related to gradients
have been removed.
* all monospace font now uses JetBrains MonoNL
* Headings with size 800 (or h1 from the style sheets)
now have a letter spacing of -1. Headings with size 700 & 600 (or h2 &
h3 from the style sheets) now have a letter spacing of -0.5
* The line height for headings has changed from 1.25 to
1.2
* The monospace font has changed from Roboto-Mono to
Studio-Feixen-Writer. This may affect layout when using code or code
blocks.
* Font weights have been updated to work with new
branding
* The sans-serif font has changed from Lato to Studio-Feixen-Sans-Variable





# [2.0.0-beta.15](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@2.0.0-beta.14...@datacamp/waffles-core@2.0.0-beta.15) (2020-08-05)


### Features

* remove colour utils from core package ([a58d7c0](https://github.com/datacamp/design-system/commit/a58d7c0))


### BREAKING CHANGES

* The color functions, getColor and getContrastColor have
been removed. Please access colours directly from the tokens now.





# [2.0.0-beta.14](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.43...@datacamp/waffles-core@2.0.0-beta.14) (2020-08-03)


### Bug Fixes

* font width/stretch for latest version of fonts ([f7a8ca8](https://github.com/datacamp/design-system/commit/f7a8ca8))


### Features

* add letter spacing for different size headings ([7b4ca34](https://github.com/datacamp/design-system/commit/7b4ca34))
* add line height for large headings ([7d70c17](https://github.com/datacamp/design-system/commit/7d70c17))
* change sans-serif font ([6f2d3cd](https://github.com/datacamp/design-system/commit/6f2d3cd))
* load font from hosted version ([0988a6c](https://github.com/datacamp/design-system/commit/0988a6c))
* load font in a way to allow font-weight to work ([186c1eb](https://github.com/datacamp/design-system/commit/186c1eb))
* load studio feixen fonts from production waffles site ([2c154b1](https://github.com/datacamp/design-system/commit/2c154b1))
* remove gradients from waffles-core ([a21cb74](https://github.com/datacamp/design-system/commit/a21cb74))
* remove transparent colours ([89b8226](https://github.com/datacamp/design-system/commit/89b8226))
* temporarily load fonts from separate ttf files ([7a11485](https://github.com/datacamp/design-system/commit/7a11485))
* update font weights for new branding ([cf0f3bc](https://github.com/datacamp/design-system/commit/cf0f3bc))
* update font weights to work with latest font version ([812a41b](https://github.com/datacamp/design-system/commit/812a41b))
* update heading line height ([ca2da4f](https://github.com/datacamp/design-system/commit/ca2da4f))
* update the colours in core ([a52539d](https://github.com/datacamp/design-system/commit/a52539d))
* use JetBrains MonoNL for code font ([cea2bbb](https://github.com/datacamp/design-system/commit/cea2bbb))
* use studio feixen writer for monospace font ([c585560](https://github.com/datacamp/design-system/commit/c585560))


### BREAKING CHANGES

* all the colours have changed, and a lot of classes have
been deprecated. Check the upgrading article for details
* white-transparent and black-transparent no longer exist
* All variables and utility classes related to gradients
have been removed.
* all monospace font now uses JetBrains MonoNL
* Headings with size 800 (or h1 from the style sheets)
now have a letter spacing of -1. Headings with size 700 & 600 (or h2 &
h3 from the style sheets) now have a letter spacing of -0.5
* The line height for headings has changed from 1.25 to
1.2
* The monospace font has changed from Roboto-Mono to
Studio-Feixen-Writer. This may affect layout when using code or code
blocks.
* Font weights have been updated to work with new
branding
* The sans-serif font has changed from Lato to Studio-Feixen-Sans-Variable





# [2.0.0-beta.13](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@2.0.0-beta.12...@datacamp/waffles-core@2.0.0-beta.13) (2020-07-28)


### Features

* remove transparent colours ([89b8226](https://github.com/datacamp/design-system/commit/89b8226))
* update the colours in core ([a52539d](https://github.com/datacamp/design-system/commit/a52539d))


### BREAKING CHANGES

* all the colours have changed, and a lot of classes have
been deprecated. Check the upgrading article for details
* white-transparent and black-transparent no longer exist





# [2.0.0-beta.12](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@2.0.0-beta.11...@datacamp/waffles-core@2.0.0-beta.12) (2020-07-23)


### Features

* remove gradients from waffles-core ([a21cb74](https://github.com/datacamp/design-system/commit/a21cb74))
* use JetBrains MonoNL for code font ([cea2bbb](https://github.com/datacamp/design-system/commit/cea2bbb))


### BREAKING CHANGES

* All variables and utility classes related to gradients
have been removed.
* all monospace font now uses JetBrains MonoNL





# [2.0.0-beta.11](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.42...@datacamp/waffles-core@2.0.0-beta.11) (2020-07-17)


### Bug Fixes

* font width/stretch for latest version of fonts ([f7a8ca8](https://github.com/datacamp/design-system/commit/f7a8ca8))


### Features

* add letter spacing for different size headings ([7b4ca34](https://github.com/datacamp/design-system/commit/7b4ca34))
* add line height for large headings ([7d70c17](https://github.com/datacamp/design-system/commit/7d70c17))
* change sans-serif font ([6f2d3cd](https://github.com/datacamp/design-system/commit/6f2d3cd))
* load font from hosted version ([0988a6c](https://github.com/datacamp/design-system/commit/0988a6c))
* load font in a way to allow font-weight to work ([186c1eb](https://github.com/datacamp/design-system/commit/186c1eb))
* load studio feixen fonts from production waffles site ([2c154b1](https://github.com/datacamp/design-system/commit/2c154b1))
* temporarily load fonts from separate ttf files ([7a11485](https://github.com/datacamp/design-system/commit/7a11485))
* update font weights for new branding ([cf0f3bc](https://github.com/datacamp/design-system/commit/cf0f3bc))
* update font weights to work with latest font version ([812a41b](https://github.com/datacamp/design-system/commit/812a41b))
* update heading line height ([ca2da4f](https://github.com/datacamp/design-system/commit/ca2da4f))
* use studio feixen writer for monospace font ([c585560](https://github.com/datacamp/design-system/commit/c585560))


### BREAKING CHANGES

* Headings with size 800 (or h1 from the style sheets)
now have a letter spacing of -1. Headings with size 700 & 600 (or h2 &
h3 from the style sheets) now have a letter spacing of -0.5
* The line height for headings has changed from 1.25 to
1.2
* The monospace font has changed from Roboto-Mono to
Studio-Feixen-Writer. This may affect layout when using code or code
blocks.
* Font weights have been updated to work with new
branding
* The sans-serif font has changed from Lato to Studio-Feixen-Sans-Variable





# [2.0.0-beta.10](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@2.0.0-beta.9...@datacamp/waffles-core@2.0.0-beta.10) (2020-07-14)


### Features

* load studio feixen fonts from production waffles site ([2c154b1](https://github.com/datacamp/design-system/commit/2c154b1))





# [2.0.0-beta.9](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@2.0.0-beta.8...@datacamp/waffles-core@2.0.0-beta.9) (2020-07-13)

**Note:** Version bump only for package @datacamp/waffles-core






# [2.0.0-beta.8](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@2.0.0-beta.7...@datacamp/waffles-core@2.0.0-beta.8) (2020-07-08)


### Features

* temporarily load fonts from separate ttf files ([7a11485](https://github.com/datacamp/design-system/commit/7a11485))





# [2.0.0-beta.7](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.41...@datacamp/waffles-core@2.0.0-beta.7) (2020-07-07)


### Bug Fixes

* font width/stretch for latest version of fonts ([f7a8ca8](https://github.com/datacamp/design-system/commit/f7a8ca8))


### Features

* add letter spacing for different size headings ([7b4ca34](https://github.com/datacamp/design-system/commit/7b4ca34))
* add line height for large headings ([7d70c17](https://github.com/datacamp/design-system/commit/7d70c17))
* change sans-serif font ([6f2d3cd](https://github.com/datacamp/design-system/commit/6f2d3cd))
* load font from hosted version ([0988a6c](https://github.com/datacamp/design-system/commit/0988a6c))
* load font in a way to allow font-weight to work ([186c1eb](https://github.com/datacamp/design-system/commit/186c1eb))
* update font weights for new branding ([cf0f3bc](https://github.com/datacamp/design-system/commit/cf0f3bc))
* update font weights to work with latest font version ([812a41b](https://github.com/datacamp/design-system/commit/812a41b))
* update heading line height ([ca2da4f](https://github.com/datacamp/design-system/commit/ca2da4f))
* use studio feixen writer for monospace font ([c585560](https://github.com/datacamp/design-system/commit/c585560))


### BREAKING CHANGES

* Headings with size 800 (or h1 from the style sheets)
now have a letter spacing of -1. Headings with size 700 & 600 (or h2 &
h3 from the style sheets) now have a letter spacing of -0.5
* The line height for headings has changed from 1.25 to
1.2
* The monospace font has changed from Roboto-Mono to
Studio-Feixen-Writer. This may affect layout when using code or code
blocks.
* Font weights have been updated to work with new
branding
* The sans-serif font has changed from Lato to Studio-Feixen-Sans-Variable





# [2.0.0-beta.6](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@2.0.0-beta.5...@datacamp/waffles-core@2.0.0-beta.6) (2020-07-06)


### Features

* add letter spacing for different size headings ([7b4ca34](https://github.com/datacamp/design-system/commit/7b4ca34))
* add line height for large headings ([7d70c17](https://github.com/datacamp/design-system/commit/7d70c17))
* update heading line height ([ca2da4f](https://github.com/datacamp/design-system/commit/ca2da4f))


### BREAKING CHANGES

* Headings with size 800 (or h1 from the style sheets)
now have a letter spacing of -1. Headings with size 700 & 600 (or h2 &
h3 from the style sheets) now have a letter spacing of -0.5
* The line height for headings has changed from 1.25 to
1.2





# [2.0.0-beta.5](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@2.0.0-beta.4...@datacamp/waffles-core@2.0.0-beta.5) (2020-07-06)


### Features

* use studio feixen writer for monospace font ([c585560](https://github.com/datacamp/design-system/commit/c585560))


### BREAKING CHANGES

* The monospace font has changed from Roboto-Mono to
Studio-Feixen-Writer. This may affect layout when using code or code
blocks.





# [2.0.0-beta.4](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.40...@datacamp/waffles-core@2.0.0-beta.4) (2020-07-02)


### Bug Fixes

* font width/stretch for latest version of fonts ([f7a8ca8](https://github.com/datacamp/design-system/commit/f7a8ca8))


### Features

* change sans-serif font ([6f2d3cd](https://github.com/datacamp/design-system/commit/6f2d3cd))
* load font from hosted version ([0988a6c](https://github.com/datacamp/design-system/commit/0988a6c))
* load font in a way to allow font-weight to work ([186c1eb](https://github.com/datacamp/design-system/commit/186c1eb))
* update font weights for new branding ([cf0f3bc](https://github.com/datacamp/design-system/commit/cf0f3bc))
* update font weights to work with latest font version ([812a41b](https://github.com/datacamp/design-system/commit/812a41b))


### BREAKING CHANGES

* Font weights have been updated to work with new
branding
* The sans-serif font has changed from Lato to Studio-Feixen-Sans-Variable





# [2.0.0-beta.3](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@2.0.0-beta.2...@datacamp/waffles-core@2.0.0-beta.3) (2020-06-12)


### Bug Fixes

* font width/stretch for latest version of fonts ([f7a8ca8](https://github.com/datacamp/design-system/commit/f7a8ca8))





# [2.0.0-beta.2](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@2.0.0-beta.1...@datacamp/waffles-core@2.0.0-beta.2) (2020-06-11)


### Features

* load font from hosted version ([0988a6c](https://github.com/datacamp/design-system/commit/0988a6c))
* update font weights to work with latest font version ([812a41b](https://github.com/datacamp/design-system/commit/812a41b))





# [2.0.0-beta.1](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@2.0.0-beta.0...@datacamp/waffles-core@2.0.0-beta.1) (2020-06-09)


### Features

* load font in a way to allow font-weight to work ([186c1eb](https://github.com/datacamp/design-system/commit/186c1eb))
* update font weights for new branding ([cf0f3bc](https://github.com/datacamp/design-system/commit/cf0f3bc))


### BREAKING CHANGES

* Font weights have been updated to work with new
branding





# [2.0.0-beta.0](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.39-beta.0...@datacamp/waffles-core@2.0.0-beta.0) (2020-06-08)


### Features

* change sans-serif font ([6f2d3cd](https://github.com/datacamp/design-system/commit/6f2d3cd))


### BREAKING CHANGES

* The sans-serif font has changed from Lato to Studio-Feixen-Sans-Variable



## [1.2.45](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.44...@datacamp/waffles-core@1.2.45) (2020-08-14)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.44](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.43...@datacamp/waffles-core@1.2.44) (2020-08-06)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.43](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.42...@datacamp/waffles-core@1.2.43) (2020-07-30)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.43](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.42...@datacamp/waffles-core@1.2.43) (2020-07-30)

**Note:** Version bump only for package @datacamp/waffles-core




## [1.2.42](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.41...@datacamp/waffles-core@1.2.42) (2020-07-17)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.41](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.40...@datacamp/waffles-core@1.2.41) (2020-07-07)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.40](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.39...@datacamp/waffles-core@1.2.40) (2020-07-01)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.39](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.38...@datacamp/waffles-core@1.2.39) (2020-06-17)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.38](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.37...@datacamp/waffles-core@1.2.38) (2020-06-05)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.37](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.36...@datacamp/waffles-core@1.2.37) (2020-05-28)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.36](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.35...@datacamp/waffles-core@1.2.36) (2020-05-20)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.35](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.34...@datacamp/waffles-core@1.2.35) (2020-05-07)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.34](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.33...@datacamp/waffles-core@1.2.34) (2020-04-27)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.33](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.32...@datacamp/waffles-core@1.2.33) (2020-04-24)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.32](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.31...@datacamp/waffles-core@1.2.32) (2020-04-15)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.31](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.30...@datacamp/waffles-core@1.2.31) (2020-04-01)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.30](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.29...@datacamp/waffles-core@1.2.30) (2020-03-11)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.29](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.28...@datacamp/waffles-core@1.2.29) (2020-02-27)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.28](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.27...@datacamp/waffles-core@1.2.28) (2020-01-27)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.27](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.26...@datacamp/waffles-core@1.2.27) (2020-01-15)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.26](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.25...@datacamp/waffles-core@1.2.26) (2020-01-09)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.25](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.24...@datacamp/waffles-core@1.2.25) (2019-12-18)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.24](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.23...@datacamp/waffles-core@1.2.24) (2019-12-02)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.23](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.22...@datacamp/waffles-core@1.2.23) (2019-11-26)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.22](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.21...@datacamp/waffles-core@1.2.22) (2019-11-19)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.21](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.20...@datacamp/waffles-core@1.2.21) (2019-11-15)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.20](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.19...@datacamp/waffles-core@1.2.20) (2019-11-12)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.19](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.18...@datacamp/waffles-core@1.2.19) (2019-11-06)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.18](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.17...@datacamp/waffles-core@1.2.18) (2019-10-31)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.17](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.16...@datacamp/waffles-core@1.2.17) (2019-10-17)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.16](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.15...@datacamp/waffles-core@1.2.16) (2019-10-14)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.15](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.14...@datacamp/waffles-core@1.2.15) (2019-10-10)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.14](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.13...@datacamp/waffles-core@1.2.14) (2019-10-02)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.13](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.12...@datacamp/waffles-core@1.2.13) (2019-09-25)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.12](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.11...@datacamp/waffles-core@1.2.12) (2019-09-19)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.11](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.10...@datacamp/waffles-core@1.2.11) (2019-09-12)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.10](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.9...@datacamp/waffles-core@1.2.10) (2019-09-09)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.9](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.8...@datacamp/waffles-core@1.2.9) (2019-09-06)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.8](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.7...@datacamp/waffles-core@1.2.8) (2019-08-30)


### Bug Fixes

* force expanded output for sass compilation ([9c543ca](https://github.com/datacamp/design-system/commit/9c543ca))





## [1.2.7](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.6...@datacamp/waffles-core@1.2.7) (2019-08-29)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.6](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.5...@datacamp/waffles-core@1.2.6) (2019-08-23)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.5](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.4...@datacamp/waffles-core@1.2.5) (2019-08-14)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.4](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.3...@datacamp/waffles-core@1.2.4) (2019-08-12)


### Bug Fixes

* remove whitespace from rgba token value ([14b4671](https://github.com/datacamp/design-system/commit/14b4671))





## [1.2.3](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.2...@datacamp/waffles-core@1.2.3) (2019-08-08)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.2](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.1...@datacamp/waffles-core@1.2.2) (2019-08-06)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.2.1](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.2.0...@datacamp/waffles-core@1.2.1) (2019-07-16)

**Note:** Version bump only for package @datacamp/waffles-core





# [1.2.0](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.1.10...@datacamp/waffles-core@1.2.0) (2019-07-15)


### Features

* include webkit prefix for .dc-u-tor utility classes ([8ae0d38](https://github.com/datacamp/design-system/commit/8ae0d38))





## [1.1.10](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.1.9...@datacamp/waffles-core@1.1.10) (2019-07-10)


### Bug Fixes

* remove hashes from snapshot tests ([f836da0](https://github.com/datacamp/design-system/commit/f836da0))
* snapshot test exposed files from core ([0dea1c9](https://github.com/datacamp/design-system/commit/0dea1c9))
* update webpack and all other build packages ([5edbf05](https://github.com/datacamp/design-system/commit/5edbf05))
* use babel 7 and shared config ([bc9d503](https://github.com/datacamp/design-system/commit/bc9d503))





## [1.1.9](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.1.8...@datacamp/waffles-core@1.1.9) (2019-07-03)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.1.8](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.1.7...@datacamp/waffles-core@1.1.8) (2019-07-02)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.1.7](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.1.6...@datacamp/waffles-core@1.1.7) (2019-06-27)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.1.6](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.1.5...@datacamp/waffles-core@1.1.6) (2019-06-17)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.1.5](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.1.4...@datacamp/waffles-core@1.1.5) (2019-06-12)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.1.4](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.1.3...@datacamp/waffles-core@1.1.4) (2019-06-12)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.1.3](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@1.1.2...@datacamp/waffles-core@1.1.3) (2019-06-11)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.1.2](https://github.com/datacamp-engineering/design-system/tree/master/packages/stylesheets/core/compare/@datacamp/waffles-core@1.1.1...@datacamp/waffles-core@1.1.2) (2019-05-29)

**Note:** Version bump only for package @datacamp/waffles-core





## [1.1.1](https://github.com/datacamp-engineering/design-system/tree/master/packages/stylesheets/core/compare/@datacamp/waffles-core@1.1.0...@datacamp/waffles-core@1.1.1) (2019-05-28)


### Bug Fixes

* add trailing slash to repository URLs ([25f1174](https://github.com/datacamp-engineering/design-system/tree/master/packages/stylesheets/core/commit/25f1174))





# [1.1.0](https://github.com/datacamp-engineering/design-system/tree/master/packages/stylesheets/core/compare/@datacamp/waffles-core@1.0.1...@datacamp/waffles-core@1.1.0) (2019-05-17)


### Features

* use tokens.json from waffles-tokens internally ([3bc4db0](https://github.com/datacamp-engineering/design-system/tree/master/packages/stylesheets/core/commit/3bc4db0))
* use variables.scss from waffles-tokens internally ([289d66a](https://github.com/datacamp-engineering/design-system/tree/master/packages/stylesheets/core/commit/289d66a))





## [1.0.1](https://github.com/datacamp-engineering/design-system/tree/master/packages/stylesheets/core/compare/@datacamp/waffles-core@1.0.0...@datacamp/waffles-core@1.0.1) (2019-05-16)


### Bug Fixes

* update repo urls in package.json ([721a3b4](https://github.com/datacamp-engineering/design-system/tree/master/packages/stylesheets/core/commit/721a3b4))





# [1.0.0](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@0.1.19...@datacamp/waffles-core@1.0.0) (2019-05-13)


### Bug Fixes

* remove legacy tag classes ([dc2e85a](https://github.com/datacamp/design-system/commit/dc2e85a))


### BREAKING CHANGES

* styling for the legacy .tag classes have been removed,
.dc-tag should be used instead





## [0.1.19](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@0.1.19-alpha.0...@datacamp/waffles-core@0.1.19) (2019-04-29)


### Bug Fixes

* add babel-lodash to optimise bundles ([db44949](https://github.com/datacamp/design-system/commit/db44949))





## [0.1.19-alpha.0](https://github.com/datacamp/design-system/compare/@datacamp/waffles-core@0.1.19-alpha.0...@datacamp/waffles-core@0.1.19-alpha.0) (2019-04-15)


### Bug Fixes

* core js entrypoint ([2cbc256](https://github.com/datacamp/design-system/commit/2cbc256))
