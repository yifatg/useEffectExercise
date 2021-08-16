const { TsJestTransformer } = require("ts-jest/dist/ts-jest-transformer");

module.exports = {
  preset: "ts-jest",
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|less)$": "identity-obj-proxy"
    }
  ,transform: {

    '^.+\\.(ts|tsx)?$': 'ts-jest',

    "^.+\\.(js|jsx)$": "babel-jest",

  }

 

 
    //,testEnvironment: 'jsdom'
    /*,transform: {
      "^.+\\.(js?)$": "babel-jest"
    }*/
  }
  