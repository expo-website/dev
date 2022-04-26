window.__MSFT_SDK = {
  config: {
      "consentModels": [
          {
              "name": "DemoTrackerComplainceModel",
              "conditionalAttributes": {
                  "countriesOrRegions": [],
                  "geoLocations": ["Asia/Calcutta"]
              },
              "attributes": {
                  "assetsPath": "https://expo-website.github.io/dev",
                  "headless": false,
                  "version": 1,
                  "trackerCategories": [{
                      "categoryName": "StrictlyNecessary",
                      "isEssential": true
                  }, {
                      "categoryName": "Functional",
                      "isEssential": false
                  }, {
                      "categoryName": "Performance",
                      "isEssential": false
                  }],
                  "definition": "Explicit",
                  "defaultLCID": "en-US",
                  "lcids": ["en-US", "fr"],
                  "notices": ["BannerNotice", "CookieSettingsSummaryNotice", "Functional", "Performance", "StrictlyNecessary"],
                  "templates": [{ "name": "template" }]
              }
          },
          {
              "name": "DemoTrackerComplainceModel2",
              "conditionalAttributes": {
                  "countriesOrRegions": [],
                  "geoLocations": ["America/Halifax"]
              },
              "attributes": {
                  "assetsPath": "https://expo-website.github.io/dev",
                  "headless": false,
                  "version": 1,
                  "trackerCategories": [{
                      "categoryName": "StrictlyNecessary",
                      "isEssential": true
                  }, {
                      "categoryName": "Functional",
                      "isEssential": false
                  }, {
                      "categoryName": "Performance",
                      "isEssential": false
                  }],
                  "definition": "Implicit",
                  "defaultLCID": "en-US",
                  "lcids": ["en-US", "fr"],
                  "notices": ["BannerNotice", "CookieSettingsSummaryNotice", "Functional", "Performance", "StrictlyNecessary"],
                  "templates": [{ "name": "template" }]
              }
          }
      ]
  }
};