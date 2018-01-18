from setuptools import setup

setup(
    name='lektor-slug',
    version='0.1.1',
    author=u'Terminal Labs',
    author_email='solutions@terminallabs.com',
    license='MIT',
    py_modules=['lektor_slug'],
    entry_points={
        'lektor.plugins': [
            'slug = lektor_slug:SlugPlugin',
        ]
    },
    install_requires=[
        'python-slugify',
    ]
)
