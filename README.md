# TL Lektor Website

## Important Notes:

1. To use, download **with the theme**: `git clone --recursive git@github.com:terminal-labs/tl_web.git`. This is needed to get and keep up to date with https://github.com/terminal-labs/lektor-theme-terminal.
1. To develop this, in the project file you need to change to toggle

    ```ini
    #url_style = absolute
    url_style = external
    ```

    "External" is what is in prod and what should be committed, but it will break all your links (including styles, fonts, and page links) when developing. **Do not commit `url_style = absolute`**. See https://github.com/lektor/lektor/issues/377 if you want to fix this.

1. Currently this uses LessCSS, so you need to install that to compile new CSS. To compile, use a command like `lessc less/main.less assets/static/css/style.css`. Note that **you need to call main.less** to compile all the styles, not style.less.
1. Have installed [Git LFS](https://git-lfs.github.com/), since it is used to manage some binary assets, like the marketing pack.
1. To deploy, you need a `~/.aws/credentials` file with the following contents:

    ```ini
    [s3]
    AWS_ACCESS_KEY_ID=[your personal access key]
    AWS_SECRET_ACCESS_KEY=[your personal secret]
    ```

    Then you can deploy with `AWS_PROFILE=s3 lektor deploy`, or export that env var for repeated use.

This repo also uses lesscss. To install it, you can do:

```shell
npm install -g less
```

and to use it to compile css:

```shell
lessc less/main.less assets/static/css/terminal.css

## Handy links:

grayscale: https://www.december.com/html/spec/color0.html
