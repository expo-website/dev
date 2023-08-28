(function () {
  window.__MSFT_SDK = window.__MSFT_SDK || {};
  window.__MSFT_SDK.config = {
    name: 'TestPackage',
    models: [
      {
        name: 'Bing-CM',
        id: 'b6ab3a4f-a9ee-4f88-a8b1-24c98702b74c',
        kind: 'WebConsentModel',
        attributes: { countriesOrRegions: ['ALL'], geoLocations: ['ALL'] },
        headless: false,
        trackerCategories: [
          {
            categoryName: 'Ads',
            id: 'c3839119-7da4-4d84-a66f-6cdae820b954',
            isEssential: false,
            version: 2,
          },
          {
            categoryName: 'Marketing',
            id: '247363d3-f57f-4181-b5d7-86e4adc1425f',
            isEssential: true,
            version: 2,
          },
          {
            categoryName: 'Analytics',
            id: '49f61abc-32ce-4922-8285-c6fda933dc98',
            isEssential: false,
            version: 2,
          },
        ],
        defaultLCID: 'en',
        consentType: 'Explicit',
        translations: ['en'],
        layout: {
          name: 'SinglePageLayout',
          id: 'SinglePageLayout',
          version: 1,
          attributes: {},
        },
        consentId: 'a2a32918-06cb-4e2d-8abe-2cd7c6c50e87',
        consentVersion: 1,
        version: 2,
      },
    ],
    trackerCategories: [
      {
        categoryName: 'Ads',
        id: 'c3839119-7da4-4d84-a66f-6cdae820b954',
        isEssential: false,
        version: 2,
      },
      {
        categoryName: 'Marketing',
        id: '247363d3-f57f-4181-b5d7-86e4adc1425f',
        isEssential: true,
        version: 2,
      },
      {
        categoryName: 'Analytics',
        id: '49f61abc-32ce-4922-8285-c6fda933dc98',
        isEssential: false,
        version: 2,
      },
    ],
    defaultConsentModel: 'Bing-CM',
    consentSDKVersion: 1,
    configurations: {
      isTrackerBlockingEnabled: true,
      isUnknownTagBlockingEnabled: false,
      isAutoBlockingEnabled: false,
      websiteDatasourceID: '00000000-0000-0000-0000-000000000000',
      assetsPath: '',
      headless: false,
      isGeoTrackingEnabled: true,
      geoTrackingURL:
        'https://privacy-afd-test-endpoint-gqagcdh0agaybrfr.z01.azurefd.net',
      isConsentMasteringEnabled: false,
      consentMasteringURL: '',
    },
    id: '5f4fd921-efcc-4cb0-9836-5f4c10f91989',
    kind: 'WebConsentPackage',
    version: 1,
  };
})();
