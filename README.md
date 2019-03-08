# TL Lektor Website

## Important Notes:

1. To use, download **with the theme**: `git clone --recursive git@bitbucket.org:terminal_labs/tl-lektor.git`. This is needed to get and keep up to date with https://github.com/terminal-labs/lektor-theme-terminal.
2. To develop this, in the project file you need to change to toggle

    ```ini
    #url_style = absolute
    url_style = external
    ```

    "External" is what is in prod and what should be committed, but it will break all your links (including styles, fonts, and page links) when developing. **Do not commit `url_style = absolute`**. See https://github.com/lektor/lektor/issues/377 if you want to fix this.

3. Currently this uses LessCSS, so you need to install that to compile new CSS. To compile, use a command like `lessc less/main.less assets/static/css/terminal.css`. Note that **you need to call main.less** to compile all the styles, not style.less.
4. To deploy, you need a `~/.aws/credentials` file with the following contents:

    ```ini
    [s3]
    AWS_ACCESS_KEY_ID=[your personal access key]
    AWS_SECRET_ACCESS_KEY=[your personal secret]
    ```

## Handy links:

grayscale: https://www.december.com/html/spec/color0.html
