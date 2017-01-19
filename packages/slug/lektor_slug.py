# -*- coding: utf-8 -*-
from lektor.pluginsystem import Plugin

from slugify import slugify

class SlugPlugin(Plugin):
    def on_setup_env(self, **extra):
        def slug_filter(value):
            return unicode(slugify(value))
        self.env.jinja_env.filters['slug'] = slug_filter
