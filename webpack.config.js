var path = require('path')

const PATHS = {
    src: path.join( __dirname, "src"),
    bundle: path.join( __dirname, "bundle")
}

module.exports = {
    entry:{ src: PATHS.src},
    output:{ path: PATHS.bundle,
             filename:"bundle.js"
    }
}
