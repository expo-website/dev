(function () {
  window.__MSFT_SDK = window.__MSFT_SDK || {};
  window.__MSFT_SDK.config = {
    name: 'LivePreviewTestingModel',
    id: '507bf267-2d3c-40a9-a82a-e7378c101c5d',
    models: [
      {
        name: 'LivePreviewModel',
        id: '03c87f14-b399-48df-8da4-156284ff93f7',
        kind: 'WebConsentModel',
        consentId: '2',
        consentVersion: 2,
        attributes: {
          countriesOrRegions: ['IN'],
          geoLocations: ['Asia/Kolkata', 'Asia/Calcutta'],
        },
        assetsPath: '',
        headless: false,
        trackerCategories: [
          {
            categoryName: 'TestCategory1',
            id: '0ba4047b-8b91-423f-9bf5-36207dab9f14',
            isEssential: true,
            version: 1,
          },
          {
            categoryName: 'TestCategory2',
            id: '3c4ee90f-1aeb-41d9-9e0e-c18e42040cab',
            isEssential: false,
            version: 1,
          },
        ],
        defaultLCID: 'en',
        consentType: 'Explicit',
        translations: ['en'],
        layout: {
          name: 'LayoutTest',
          id: 'c0b39407-61fd-4710-a8c2-e2cfcb5eed07',
          version: 2,
          attributes: {},
        },

        version: 1,
        references: [],
      },
    ],
    trackerCategories: [
      {
        categoryName: 'TestCategory1',
        id: '0ba4047b-8b91-423f-9bf5-36207dab9f14',
        isEssential: true,
        version: 1,
      },
      {
        categoryName: 'TestCategory2',
        id: '3c4ee90f-1aeb-41d9-9e0e-c18e42040cab',
        isEssential: false,
        version: 1,
      },
    ],
    defaultConsentModel: 'LivePreviewModel',
    consentSDKVersion: 1,
    version: 1,
    kind: 'WebConsentPackage',
    references: [],
  };
})();
