module.exports = {
  entry: 'src/store/index.spec.js',
  filename: {
    js: 'index.spec.js',
  },
  // Don't split into two separate files
  vendor: false,
  // Don't generate an HTML file
  html: false,
  // Don't copy static files/images
  copy: false,
  // Don't minify
  minimize: false,
  // Don't generate sourcemaps
  sourceMap: false
}
