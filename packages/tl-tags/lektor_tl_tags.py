# -*- coding: utf-8 -*-
import re

from lektor.pluginsystem import Plugin

class TlTagsPlugin(Plugin):
    name = 'TL Tags'
    description = u'Some template tags made by Terminal Labs.'

    def on_setup_env(self, **extra):
        def removehtml_filter(raw_html):
            '''Accept string and return with html tags removed.
            '''
            r = re.compile('<.*?>')
            rv = re.sub(r, '', str(raw_html))
            return rv
        self.env.jinja_env.filters['removehtml'] = removehtml_filter
