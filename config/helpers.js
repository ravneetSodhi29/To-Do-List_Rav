'use strict';

const path = require('path');

const _root = path.resolve(__dirname, '..');
entry: path.resolve(__dirname, 'src') + '/path/to/your/file.js',
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);

    return path.join.apply(path, [_root].concat(args));
}

exports.root = root;