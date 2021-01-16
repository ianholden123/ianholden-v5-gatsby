module.exports = {
  // The transform section tells Jest that all js or jsx files need to be transformed using
  // a jest-preprocess.js file in the project root. This is where you set up your Babel
  // config.
  transform: {
    '^.+\\.jsx?$': '<rootDir>/jest-preprocess.js'
  },

  // The next option is moduleNameMapper. This section works a bit like webpack rules and
  // tells Jest how to handle imports. You are mainly concerned here with mocking static
  // file imports, which Jest can’t handle. Here we are mocking assets rather than code.
  // For stylesheets you need to use the package identity-obj-proxy. For all other assets,
  // you need to use a manual mock called file-mock.js.
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/file-mock.js'
  },

  // The next config setting is testPathIgnorePatterns. You are telling Jest to ignore
  // any tests in the node_modules or .cache directories.
  testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public'],

  // The reason that you need transformIgnorePatterns is because Gatsby includes
  // un-transpiled ES6 code. By default Jest doesn’t try to transform code inside
  // node_modules, so you may see errors. This is because gatsby-browser-entry.js isn’t
  // being transpiled before running in Jest. You can fix this by changing the default
  // transformIgnorePatterns to exclude the gatsby module.
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],

  // The globals section sets __PATH_PREFIX__, which is usually set by Gatsby, and which
  // some components need.
  globals: {
    __PATH_PREFIX__: ''
  },

  // You need to set testURL to a valid URL, because some DOM APIs such as localStorage
  // are unhappy with the default (about:blank).
  testURL: 'http://localhost',
  
  // There’s one more global that you need to set, but as it’s a function you can’t set
  // it here in the JSON.The setupFiles array lets you list files that will be included
  // before all tests are run, so it’s perfect for this.
  setupFiles: ['<rootDir>/loadershim.js']
}
