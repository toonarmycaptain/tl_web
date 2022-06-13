lessc-theme:
	lessc themes/lektor-theme-terminal/less/main.less themes/lektor-theme-terminal/assets/static/css/terminal.css

lessc-theme-watch:
	nodemon -e less --exec lessc themes/lektor-theme-terminal/less/main.less themes/lektor-theme-terminal/assets/static/css/terminal.css

lessc:
	lessc less/main.less assets/static/css/style.css

lessc-watch:
	nodemon -e less --exec lessc less/main.less assets/static/css/style.css
