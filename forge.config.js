const path = require('path')

module.exports = {
    "packagerConfig": {
      "icon": path.join(__dirname,"src","assets","img","icon.ico")
    },
    "makers": [
      {
        "name": "@electron-forge/maker-squirrel",
        "config": {
          "setupIcon": path.join(__dirname,"src","assets","img","icon.ico"),
          "iconUrl": "https://raw.githubusercontent.com/koxx12-dev/Skyclient-electron/master/icon.ico",
          "name": "skyclient"
        }
      },
      {
        "name": "@electron-forge/maker-zip",
        "platforms": [
          "darwin"
        ]
      },
      {
        "name": "@electron-forge/maker-deb",
        "config": {}
      }
    ]
  }