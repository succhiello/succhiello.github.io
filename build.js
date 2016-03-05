'use strict';

import Metalsmith from 'metalsmith'
import asciidoc from 'metalsmith-asciidoc'
import collections from 'metalsmith-collections'
import permalinks from 'metalsmith-permalinks'
import layouts from 'metalsmith-layouts'
import inPlace from 'metalsmith-in-place'

Metalsmith(__dirname)
    .use(asciidoc())
    .use(collections({
        blog: {
            pattern: 'blog/**/*.asciidoc'
        }
    }))
    .use(permalinks({
        pattern: 'blog/:date',
    }))
    .use(layouts({
        engine: 'handlebars',
    }))
    .use(inPlace({
        engine: 'handlebars',
    }))
    .build((err) => {
        if (err) {
            throw err;
        }
    });
