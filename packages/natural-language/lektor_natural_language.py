# -*- coding: utf-8 -*-
from nltk import tokenize

from lektor.pluginsystem import Plugin

class NaturalLanguagePlugin(Plugin):
    name = 'Natural Language'
    description = u'Template tags to do a little language processing with nltk.'

    def on_setup_env(self, **extra) :
        def sentences_filter(txt):
            '''Accept a string of text and return a list of sentences in that text.
            '''
            return tokenize.punkt.PunktSentenceTokenizer().sentences_from_text(txt)
        self.env.jinja_env.filters['sentences'] = sentences_filter

        def firstsentence_filter(txt):
            '''Accept a string of text and return a list of sentences in that text.
            '''
            try:
                rv = sentences_filter(txt)[0]
            except IndexError:
                rv = ''
            return rv
        self.env.jinja_env.filters['firstsentence'] = firstsentence_filter
