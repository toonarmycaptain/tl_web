from setuptools import setup

setup(
    name='lektor-tl-tags',
    version='0.1',
    author='Terminal Labs',
    author_email='solutions@terminallabs.com',
    license='MIT',
    py_modules=['lektor_tl_tags'],
    entry_points={
        'lektor.plugins': [
            'tl-tags = lektor_tl_tags:TlTagsPlugin',
        ]
    },
    install_requires=[
        'nltk',
    ]

)
