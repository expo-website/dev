window.__MSFT_SDK = {};
window.__MSFT_SDK.config = {
    "extendedTrackers": [
      {
        "type": "script",
        "identifier": "http://127.0.0.1:8080/js/externalScript1.js",
        "categories": [
          "Performance"
        ]
      },
      {
        "type": "script",
        "identifier": "http://127.0.0.1:8080/js/externalScript2.js",
        "categories": [
          "Functional"
        ]
      },
      {
        "type": "iframe",
        "identifier": "https://www.youtube.com/embed/tgbNymZ7vqY",
        "categories": [
          "Functional"
        ]
      }
    ],
    "consentModels": [
      {
        "name": "DemoTrackerComplianceModel1",
        "templates": {
          "consentNotice": "<div class=\"ff-sans ps-fixed z-nav-fixed ws4 sm:w-auto p32 sm:p16 bg-black-750 fc-white bar-lg b16 l16 r16 js-consent-banner\"><p class=\"fs-body2 fw-bold mb4\">{{BannerNotice.banner-header}}</p><p class=\"mb16 s-anchors s-anchors__inherit s-anchors__underlined\">{{BannerNotice.banner-description}}</p><div class=\"d-flex gs8 ai-stretch fd-column sm:fd-row\"><button id=\"accept-btn\" class=\"flex--item s-btn s-btn__primary js-accept-cookies js-consent-banner-hide\">{{BannerNotice.accept-description}}</button><button id=\"manage-btn\" class=\"flex--item s-btn s-btn__filled js-cookie-settings\">{{BannerNotice.customize-description}}</button></div></div><script>document.getElementById(\"accept-btn\").onclick=()=>{MSFTConsent.trigger(\"AcceptAll\"),MSFTConsent.trigger(\"CloseConsentNotice\")},document.getElementById(\"manage-btn\").onclick=()=>{MSFTConsent.showChangeSettingsModal(),MSFTConsent.trigger(\"CloseConsentNotice\")};</script>",
          "preferenceCenter": "<style>.collapsible-container input[type=checkbox]:not(:checked)+.s-expandable{display:none}</style><aside aria-describedby=modal-description aria-hidden=false aria-labelledby=modal-title class=s-modal id=onetrust-pc-sdk tabindex=-1><div class=\"s-modal--dialog wmx5\"><h1 class=s-modal--header id=modal-title>{{CookieSettingsSummaryNotice.summary-header}}</h1><div class=s-modal--body id=modal-description><p>{{CookieSettingsSummaryNotice.summary-description}}<div class=\"d-flex ai-center jc-space-between mb12\"><div class=\"flex--item fl1\"><div class=\"c-pointer d-inline-block fw-bold\"aria-controls=cookie-expand-C0001 aria-expanded=false><label for={{StrictlyNecessary.header-header}} style=cursor:pointer>{{StrictlyNecessary.header-header}}</label></div></div><div class=\"d-flex ai-center\"><div class=\"flex--item s-toggle-switch\"><input id=ui-only-C0001 type=checkbox category name=StrictlyNecessary><div class=\"o40 s-toggle-switch--indicator\"></div></div></div></div><div class=collapsible-container><input id={{StrictlyNecessary.header-header}} type=checkbox style=display:none><div class=\"is-expanded s-expandable\"id=cookie-expand-C0001><div class=\"fc-light pb16 s-expandable--content\">{{StrictlyNecessary.description-description}}</div></div></div><div class=\"d-flex ai-center jc-space-between mb12\"><div class=\"flex--item fl1\"><div class=\"c-pointer d-inline-block fw-bold\"aria-controls=cookie-expand-C0001 aria-expanded=false><label for={{Performance.header-header}} style=cursor:pointer>{{Performance.header-header}}</label></div></div><div class=\"d-flex ai-center\"><div class=\"flex--item s-toggle-switch\"><input id=ui-only-C0001 type=checkbox category name=Performance><div class=\"o40 s-toggle-switch--indicator\"></div></div></div></div><div class=collapsible-container><input id={{Performance.header-header}} type=checkbox style=display:none><div class=\"is-expanded s-expandable\"id=cookie-expand-C0001><div class=\"fc-light pb16 s-expandable--content\">{{Performance.description-description}}</div></div></div><div class=\"d-flex ai-center jc-space-between mb12\"><div class=\"flex--item fl1\"><div class=\"c-pointer d-inline-block fw-bold\"aria-controls=cookie-expand-C0001 aria-expanded=false><label for={{Functional.header-header}} style=cursor:pointer>{{Functional.header-header}}</label></div></div><div class=\"d-flex ai-center\"><div class=\"flex--item s-toggle-switch\"><input id=ui-only-C0001 type=checkbox category name=Functional><div class=\"o40 s-toggle-switch--indicator\"></div></div></div></div><div class=collapsible-container><input id={{Functional.header-header}} type=checkbox style=display:none><div class=\"is-expanded s-expandable\"id=cookie-expand-C0001><div class=\"fc-light pb16 s-expandable--content\">{{Functional.description-description}}</div></div></div></div><div class=\"d-flex gs8 gsx mt0 s-modal--footer\"><button class=\"flex--item s-btn js-consent-banner-hide onetrust-close-btn-handler js-consent-save s-btn__primary save-preference-btn-handler\"id=save-btn type=button>{{CookieSettingsSummaryNotice.confirm-description}}</button> <button class=\"flex--item s-btn js-consent-banner-hide onetrust-close-btn-handler js-accept-cookies s-btn__filled\"id=accept-btn type=button>{{CookieSettingsSummaryNotice.accept-description}}</button> <button class=\"flex--item s-btn\"id=close-btn type=button>{{CookieSettingsSummaryNotice.cancel-description}}</button></div><a aria-label=Close class=\"s-btn s-btn__muted s-modal--close\"href=# tabindex=0></a></div></aside><script>window.addEventListener(\"DOMContentLoaded\",(()=>{let e=document.querySelectorAll(\"input[category]\"),n=MSFTConsent.getConsent(),t={};MSFTConsent.getTrackerCategories().forEach((e=>t[e.name]=e.isEssential)),e.forEach((e=>{e.checked=\"1\"==n.preferences[e.name],e.disabled=t[e.name]}))})),document.getElementById(\"save-btn\").onclick=()=>{let e=document.querySelectorAll(\"input[category]\"),n={preferences:{}};e.forEach((e=>{n.preferences[e.name]=e.checked?\"1\":\"0\"})),MSFTConsent.trigger(\"UpdateConsent\",{consent:n}),MSFTConsent.trigger(\"CloseChangeSettingsModal\")},document.getElementById(\"accept-btn\").onclick=()=>{MSFTConsent.trigger(\"AcceptAll\"),MSFTConsent.trigger(\"CloseChangeSettingsModal\")},document.getElementById(\"close-btn\").onclick=()=>{MSFTConsent.trigger(\"CloseChangeSettingsModal\")};</script>"
        },
        "translations": {
          "en_001": {
            "StrictlyNecessary": {
              "header-header": "Strictly Necessary",
              "description-description": "These cookies are necessary for our website to function properly and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms or where they’re essential to provide you with a service you have requested. You cannot opt-out of these cookies. You can set your browser to block or alert you about these cookies, but if you do, some parts of the site will not then work. These cookies do not store any personally identifiable information."
            },
            "Performance": {
              "header-header": "Performance Cookies",
              "description-description": "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site, which helps us optimize your experience. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not be able to use your data in this way."
            },
            "Functional": {
              "header-header": "Functional Cookies",
              "description-description": "These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly."
            },
            "BannerNotice": {
              "banner-header": "Your privacy",
              "banner-description": "By clicking “Accept all cookies”, you agree Stack Exchange can store cookies on your device and disclose information in accordance with our&nbsp;<a href=\"https://bing.com\">Cookie Policy.</a>",
              "accept-description": "Accept all cookies",
              "customize-description": "Customize settings"
            },
            "CookieSettingsSummaryNotice": {
              "summary-header": "Cookie Settings",
              "summary-description": "When you visit any of our websites, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and manage your preferences. Please note, blocking some types of cookies may impact your experience of the site and the services we are able to offer.",
              "confirm-description": "Confirm my choices",
              "accept-description": "Accept all cookies",
              "cancel-description": "Cancel"
            }
          },
          "fr_": {
            "StrictlyNecessary": {
              "header-header": "strictement nécessaire",
              "description-description": "Ces cookies sont nécessaires au bon fonctionnement de notre site Web et ne peuvent pas être désactivés dans nos systèmes. Ils ne sont généralement définis qu’en réponse à des actions effectuées par vous qui équivalent à une demande de services, telles que la définition de vos préférences de confidentialité, la connexion ou le remplissage de formulaires ou lorsqu’elles sont essentielles pour vous fournir un service que vous avez demandé. Vous ne pouvez pas désactiver ces cookies."
            },
            "Performance": {
              "header-header": "Performance Cookies",
              "description-description": "Ces cookies nous permettent de compter les visites et les sources de trafic afin que nous puissions mesurer et améliorer les performances de notre site. Ils nous aident à savoir quelles pages sont les plus et les moins populaires et à voir comment les visiteurs se déplacent sur le site, ce qui nous aide à optimiser votre expérience. Toutes les informations collectées par ces cookies sont agrégées et donc anonymes. Si vous n’autorisez pas ces cookies, nous ne pourrons pas utiliser vos données de cette manière."
            },
            "Functional": {
              "header-header": "Cookies fonctionnels",
              "description-description": "Ces cookies permettent au site Web de fournir des fonctionnalités et une personnalisation améliorées. Ils peuvent être définis par nous ou par des fournisseurs tiers dont nous avons ajouté les services à nos pages. Si vous n’autorisez pas ces cookies, certains ou tous ces services peuvent ne pas fonctionner correctement."
            },
            "BannerNotice": {
              "banner-header": "Votre vie privée",
              "banner-description": "En cliquant sur \"Accepter tous les cookies\", vous acceptez que Stack Exchange puisse stocker des cookies sur votre appareil et divulguer des informations conformément à notre politique en matière de <a href=\"https://bing.com\">cookies</a>.",
              "accept-description": "Accepter tous les cookies",
              "customize-description": "Personnaliser les paramètres"
            },
            "CookieSettingsSummaryNotice": {
              "summary-header": "Paramètres des cookies",
              "summary-description": "Lorsque vous visitez l'un de nos sites Web, il peut stocker ou récupérer des informations sur votre navigateur, principalement sous la forme de cookies. Ces informations peuvent vous concerner, vos préférences ou votre appareil et sont principalement utilisées pour faire fonctionner le site comme vous l'attendez. Les informations ne vous identifient généralement pas directement, mais elles peuvent vous offrir une expérience Web plus personnalisée. Parce que nous respectons votre droit à la vie privée, vous pouvez choisir de ne pas autoriser certains types de cookies. Cliquez sur les différentes rubriques des catégories pour en savoir plus et gérer vos préférences. Veuillez noter que le blocage de certains types de cookies peut avoir un impact sur votre expérience du site et les services que nous sommes en mesure d'offrir.",
              "confirm-description": "Confirmer mes choix",
              "accept-description": "Accepter tous les cookies",
              "cancel-description": "Annuler"
            }
          }
        },
        "version": 1,
        "geoLocations": [],
        "trackerCategories": [
          {
            "name": "StrictlyNecessary",
            "isEssential": true
          },
          {
            "name": "Performance",
            "isEssential": false
          },
          {
            "name": "Functional",
            "isEssential": false
          }
        ],
        "countriesOrRegions": [],
        "expiryInSec": 86400,
        "defaultLCID": "en_001"
      },
      {
        "name": "DemoTrackerComplianceModel2",
        "templates": {
          "consentNotice": "<div class=\"ff-sans ps-fixed z-nav-fixed ws4 sm:w-auto p32 sm:p16 bg-black-750 fc-white bar-lg b16 l16 r16 js-consent-banner\"><p class=\"fs-body2 fw-bold mb4\">{{BannerNotice.banner-header}}</p><p class=\"mb16 s-anchors s-anchors__inherit s-anchors__underlined\">{{BannerNotice.banner-description}}</p><div class=\"d-flex gs8 ai-stretch fd-column sm:fd-row\"><button id=\"accept-btn\" class=\"flex--item s-btn s-btn__primary js-accept-cookies js-consent-banner-hide\">{{BannerNotice.accept-description}}</button><button id=\"manage-btn\" class=\"flex--item s-btn s-btn__filled js-cookie-settings\">{{BannerNotice.customize-description}}</button></div></div><script>document.getElementById(\"accept-btn\").onclick=()=>{MSFTConsent.trigger(\"AcceptAll\"),MSFTConsent.trigger(\"CloseConsentNotice\")},document.getElementById(\"manage-btn\").onclick=()=>{MSFTConsent.showChangeSettingsModal(),MSFTConsent.trigger(\"CloseConsentNotice\")};</script>",
          "preferenceCenter": "<style>.collapsible-container input[type=checkbox]:not(:checked)+.s-expandable{display:none}</style><aside aria-describedby=modal-description aria-hidden=false aria-labelledby=modal-title class=s-modal id=onetrust-pc-sdk tabindex=-1><div class=\"s-modal--dialog wmx5\"><h1 class=s-modal--header id=modal-title>{{CookieSettingsSummaryNotice.summary-header}}</h1><div class=s-modal--body id=modal-description><p>{{CookieSettingsSummaryNotice.summary-description}}<div class=\"d-flex ai-center jc-space-between mb12\"><div class=\"flex--item fl1\"><div class=\"c-pointer d-inline-block fw-bold\"aria-controls=cookie-expand-C0001 aria-expanded=false><label for={{StrictlyNecessary.header-header}} style=cursor:pointer>{{StrictlyNecessary.header-header}}</label></div></div><div class=\"d-flex ai-center\"><div class=\"flex--item s-toggle-switch\"><input id=ui-only-C0001 type=checkbox category name=StrictlyNecessary><div class=\"o40 s-toggle-switch--indicator\"></div></div></div></div><div class=collapsible-container><input id={{StrictlyNecessary.header-header}} type=checkbox style=display:none><div class=\"is-expanded s-expandable\"id=cookie-expand-C0001><div class=\"fc-light pb16 s-expandable--content\">{{StrictlyNecessary.description-description}}</div></div></div><div class=\"d-flex ai-center jc-space-between mb12\"><div class=\"flex--item fl1\"><div class=\"c-pointer d-inline-block fw-bold\"aria-controls=cookie-expand-C0001 aria-expanded=false><label for={{Performance.header-header}} style=cursor:pointer>{{Performance.header-header}}</label></div></div><div class=\"d-flex ai-center\"><div class=\"flex--item s-toggle-switch\"><input id=ui-only-C0001 type=checkbox category name=Performance><div class=\"o40 s-toggle-switch--indicator\"></div></div></div></div><div class=collapsible-container><input id={{Performance.header-header}} type=checkbox style=display:none><div class=\"is-expanded s-expandable\"id=cookie-expand-C0001><div class=\"fc-light pb16 s-expandable--content\">{{Performance.description-description}}</div></div></div><div class=\"d-flex ai-center jc-space-between mb12\"><div class=\"flex--item fl1\"><div class=\"c-pointer d-inline-block fw-bold\"aria-controls=cookie-expand-C0001 aria-expanded=false><label for={{Functional.header-header}} style=cursor:pointer>{{Functional.header-header}}</label></div></div><div class=\"d-flex ai-center\"><div class=\"flex--item s-toggle-switch\"><input id=ui-only-C0001 type=checkbox category name=Functional><div class=\"o40 s-toggle-switch--indicator\"></div></div></div></div><div class=collapsible-container><input id={{Functional.header-header}} type=checkbox style=display:none><div class=\"is-expanded s-expandable\"id=cookie-expand-C0001><div class=\"fc-light pb16 s-expandable--content\">{{Functional.description-description}}</div></div></div></div><div class=\"d-flex gs8 gsx mt0 s-modal--footer\"><button class=\"flex--item s-btn js-consent-banner-hide onetrust-close-btn-handler js-consent-save s-btn__primary save-preference-btn-handler\"id=save-btn type=button>{{CookieSettingsSummaryNotice.confirm-description}}</button> <button class=\"flex--item s-btn js-consent-banner-hide onetrust-close-btn-handler js-accept-cookies s-btn__filled\"id=accept-btn type=button>{{CookieSettingsSummaryNotice.accept-description}}</button> <button class=\"flex--item s-btn\"id=close-btn type=button>{{CookieSettingsSummaryNotice.cancel-description}}</button></div><a aria-label=Close class=\"s-btn s-btn__muted s-modal--close\"href=# tabindex=0></a></div></aside><script>window.addEventListener(\"DOMContentLoaded\",(()=>{let e=document.querySelectorAll(\"input[category]\"),n=MSFTConsent.getConsent(),t={};MSFTConsent.getTrackerCategories().forEach((e=>t[e.name]=e.isEssential)),e.forEach((e=>{e.checked=\"1\"==n.preferences[e.name],e.disabled=t[e.name]}))})),document.getElementById(\"save-btn\").onclick=()=>{let e=document.querySelectorAll(\"input[category]\"),n={preferences:{}};e.forEach((e=>{n.preferences[e.name]=e.checked?\"1\":\"0\"})),MSFTConsent.trigger(\"UpdateConsent\",{consent:n}),MSFTConsent.trigger(\"CloseChangeSettingsModal\")},document.getElementById(\"accept-btn\").onclick=()=>{MSFTConsent.trigger(\"AcceptAll\"),MSFTConsent.trigger(\"CloseChangeSettingsModal\")},document.getElementById(\"close-btn\").onclick=()=>{MSFTConsent.trigger(\"CloseChangeSettingsModal\")};</script>"
        },
        "translations": {
          "en_001": {
            "StrictlyNecessary": {
              "header-header": "Strictly Necessary",
              "description-description": "These cookies are necessary for our website to function properly and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms or where they’re essential to provide you with a service you have requested. You cannot opt-out of these cookies. You can set your browser to block or alert you about these cookies, but if you do, some parts of the site will not then work. These cookies do not store any personally identifiable information."
            },
            "Performance": {
              "header-header": "Performance Cookies",
              "description-description": "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site, which helps us optimize your experience. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not be able to use your data in this way."
            },
            "Functional": {
              "header-header": "Functional Cookies",
              "description-description": "These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly."
            },
            "BannerNotice": {
              "banner-header": "Your privacy",
              "banner-description": "By clicking “Accept all cookies”, you agree Stack Exchange can store cookies on your device and disclose information in accordance with our&nbsp;<a href=\"https://bing.com\">Cookie Policy.</a>",
              "accept-description": "Accept all cookies",
              "customize-description": "Customize settings"
            },
            "CookieSettingsSummaryNotice": {
              "summary-header": "Cookie Settings",
              "summary-description": "When you visit any of our websites, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and manage your preferences. Please note, blocking some types of cookies may impact your experience of the site and the services we are able to offer.",
              "confirm-description": "Confirm my choices",
              "accept-description": "Accept all cookies",
              "cancel-description": "Cancel"
            }
          },
          "fr_": {
            "StrictlyNecessary": {
              "header-header": "strictement nécessaire",
              "description-description": "Ces cookies sont nécessaires au bon fonctionnement de notre site Web et ne peuvent pas être désactivés dans nos systèmes. Ils ne sont généralement définis qu’en réponse à des actions effectuées par vous qui équivalent à une demande de services, telles que la définition de vos préférences de confidentialité, la connexion ou le remplissage de formulaires ou lorsqu’elles sont essentielles pour vous fournir un service que vous avez demandé. Vous ne pouvez pas désactiver ces cookies."
            },
            "Performance": {
              "header-header": "Performance Cookies",
              "description-description": "Ces cookies nous permettent de compter les visites et les sources de trafic afin que nous puissions mesurer et améliorer les performances de notre site. Ils nous aident à savoir quelles pages sont les plus et les moins populaires et à voir comment les visiteurs se déplacent sur le site, ce qui nous aide à optimiser votre expérience. Toutes les informations collectées par ces cookies sont agrégées et donc anonymes. Si vous n’autorisez pas ces cookies, nous ne pourrons pas utiliser vos données de cette manière."
            },
            "Functional": {
              "header-header": "Cookies fonctionnels",
              "description-description": "Ces cookies permettent au site Web de fournir des fonctionnalités et une personnalisation améliorées. Ils peuvent être définis par nous ou par des fournisseurs tiers dont nous avons ajouté les services à nos pages. Si vous n’autorisez pas ces cookies, certains ou tous ces services peuvent ne pas fonctionner correctement."
            },
            "BannerNotice": {
              "banner-header": "Votre vie privée",
              "banner-description": "En cliquant sur \"Accepter tous les cookies\", vous acceptez que Stack Exchange puisse stocker des cookies sur votre appareil et divulguer des informations conformément à notre politique en matière de <a href=\"https://bing.com\">cookies</a>.",
              "accept-description": "Accepter tous les cookies",
              "customize-description": "Personnaliser les paramètres"
            },
            "CookieSettingsSummaryNotice": {
              "summary-header": "Paramètres des cookies",
              "summary-description": "Lorsque vous visitez l'un de nos sites Web, il peut stocker ou récupérer des informations sur votre navigateur, principalement sous la forme de cookies. Ces informations peuvent vous concerner, vos préférences ou votre appareil et sont principalement utilisées pour faire fonctionner le site comme vous l'attendez. Les informations ne vous identifient généralement pas directement, mais elles peuvent vous offrir une expérience Web plus personnalisée. Parce que nous respectons votre droit à la vie privée, vous pouvez choisir de ne pas autoriser certains types de cookies. Cliquez sur les différentes rubriques des catégories pour en savoir plus et gérer vos préférences. Veuillez noter que le blocage de certains types de cookies peut avoir un impact sur votre expérience du site et les services que nous sommes en mesure d'offrir.",
              "confirm-description": "Confirmer mes choix",
              "accept-description": "Accepter tous les cookies",
              "cancel-description": "Annuler"
            }
          }
        },
        "version": 1,
        "geoLocations": [],
        "trackerCategories": [
          {
            "name": "StrictlyNecessary",
            "isEssential": true
          },
          {
            "name": "Performance",
            "isEssential": false
          },
          {
            "name": "Functional",
            "isEssential": false
          }
        ],
        "countriesOrRegions": [],
        "expiryInSec": 86400,
        "defaultLCID": "en_001"
      }
    ]
  };
