# -*- coding: utf-8 -*-
import re

from lektor.pluginsystem import Plugin

from nltk import tokenize

class TlTagsPlugin(Plugin):
    name = 'TL Tags'
    description = u'Add your description here.'

    def on_setup_env(self, **extra):
        def sentence_filter(txt):
            '''Accept html and return the first sentence only.
            '''
            try:
                rv = tokenize.punkt.PunktSentenceTokenizer().sentences_from_text(txt)[0]
            except IndexError: # txt is empty
                rv = ''
            return rv
        self.env.jinja_env.filters['sentence'] = sentence_filter

        def cleanhtml_filter(raw_html):
            cleanr = re.compile('<.*?>')
            cleantext = re.sub(cleanr, '', str(raw_html))
            return cleantext
        self.env.jinja_env.filters['cleanhtml'] = cleanhtml_filter
