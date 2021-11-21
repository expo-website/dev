function addLink(url) {
  const a = document.createElement('a');
  a.href = url;
  a.hidden = true;
  document.body.appendChild(a)
}

const links = {
  internal: {
    selector: 'internal-links',
    urls: ['pages/about.html', 'pages/products.html', 'pages/cart.html']
  },
  external: {
    selector: 'external-links',
    urls: [
    "https://www.microsoft.com/",
    "https://www.microsoft.com/microsoft-365",
    "https://www.microsoft.com/microsoft-365/microsoft-office",
    "https://www.microsoft.com/en-in/windows/",
    "https://www.microsoft.com/surface",
    "https://www.microsoft.com/microsoft-365",
    "https://www.microsoft.com/microsoft-365/microsoft-office",
    "https://www.microsoft.com/en-in/windows/",
    "https://www.microsoft.com/surface",
    "https://www.microsoft.com/en-in/store/apps/windows?icid=CNavAppsWindowsApps",
    "https://www.microsoft.com/microsoft-teams/group-chat-software",
    "https://www.microsoft.com/en-in/store/b/xbox?icid=CNavDevicesXbox",
    "https://www.microsoft.com/en-in/accessories",
    "https://www.microsoft.com/en-in/p/xbox-game-pass-ultimate/cfq7ttc0khs0?WT.mc_id=CNavGamesXboxGamePassUltimate",
    "https://www.microsoft.com/en-in/p/xbox-live-gold/cfq7ttc0k5dj?WT.mc_id=CNavGamesXboxLiveGold",
    "https://www.microsoft.com/en-in/store/games/windows?icid=CNavGamesWindowsGames",
    "https://www.microsoft.com/en-in/store/games/windows?icid=TopNavWindowsGames",
    "https://www.microsoft.com/microsoft-cloud",
    "https://www.microsoft.com/en-in/dynamics365/home",
    "https://www.microsoft.com/microsoft-365/business/all-business",
    "https://www.microsoft.com/windows-365",
    "https://www.microsoft.com/en-in/enterprise",
    "https://www.microsoft.com/en-in/store/b/business?icid=CNavBusinessStore",
    "https://www.microsoft.com/net/",
    "https://www.microsoft.com/cloud-platform/windows-server",
    "https://www.microsoft.com/en-in/download/default.aspx",
    "https://www.microsoft.com/en-in/education?icid=CNavMSCOML0_Studentsandeducation",
    "https://www.microsoft.com/en-in/p/xbox-gift-card-digital-code/cfq7ttc0k7qk/0001?icid=TopNavMoreGiftCards",
    "https://www.microsoft.com/licensing/",
    "https://www.microsoft.com/en-in/sitemap.aspx",
    "https://www.microsoft.com/en-in/store/buy",
    "https://www.microsoft.com/mscomhp/onerf/signout?pcexp=True&ru=https%3A%2F%2Fwww.microsoft.com%2Fen-in%2F%3FSilentAuth%3D1%26wa%3Dwsignin1.0",
    "https://www.microsoft.com/en-in/surface/devices/surface-laptop-go?icid=mscom_marcom_H1a_SurfaceLaptopGo_Store_Holiday22",
    "https://www.microsoft.com/en-in/surface/devices/surface-laptop-4?icid=mscom_marcom_H2a_SurfaceLaptop4_Store_Holiday22",
    "https://www.microsoft.com/en-in/microsoft-365/compare-all-microsoft-365-products?icid=MSCOM_QL_M365",
    "https://www.microsoft.com/en-in/surface?icid=MSCOM_QL_Surface",
    "https://www.microsoft.com/en-in/store/b/xbox?icid=MSCOM_QL_Xbox",
    "https://www.microsoft.com/en-in/windows/get-windows-11?icid=MSCOM_QL_Windows",
    "https://www.microsoft.com/en-in/surface/devices/surface-pro-7?icid=mscom_marcom_CPH1a_SurfacePro7_Store_Holiday22",
    "https://www.microsoft.com/en-in/p/xbox-game-pass-ultimate/cfq7ttc0khs0?icid=mscom_marcom_CPH2a_GamePassUltimate_Store_Holiday22",
    "https://www.microsoft.com/en-in/microsoft-365/p/microsoft-365-family/cfq7ttc0k5dm?icid=mscom_marcom_CPH3a_M365Family_Store_Holiday22",
    "https://www.microsoft.com/en-in/microsoft-365/p/microsoft-365-personal/cfq7ttc0k5bf?icid=mscom_marcom_CPH3b_M365Personal_Store_Holiday22",
    "https://www.microsoft.com/en-us/edge?form=MI13F3&OCID=MI13F3",
    "https://www.microsoft.com/en-in/microsoft-365/onedrive/online-cloud-storage?icid=mscom_marcom_MPH1a_OneDrive",
    "https://www.microsoft.com/en-in/surface/business?icid=mscom_marcom_CPW1a_SurfaceforBusiness",
    "https://www.microsoft.com/en-in/microsoft-365/business/compare-all-microsoft-365-business-products?icid=mscom_marcom_CPW2a_M365forBusiness&activetab=tab%3aprimaryr2",
    "https://www.microsoft.com/en-in/microsoft-teams/free?icid=mscom_marcom_CPW3a_MicrosoftTeams",
    "https://www.microsoft.com/en-in/windows-365?icid=mscom_marcom_CPW4a_Windows365",
    "https://www.microsoft.com/microsoft-365",
    "https://www.microsoft.com/en-in/surface/devices/surface-pro-x",
    "https://www.microsoft.com/en-in/surface/devices/surface-pro-7",
    "https://www.microsoft.com/en-in/surface/devices/surface-laptop-3",
    "https://www.microsoft.com/windows/windows-11-apps",
    "https://www.microsoft.com/en-in/download",
    "https://www.microsoft.com/en-in/education",
    "https://www.microsoft.com/en-in/education/products/office/default.aspx",
    "https://www.microsoft.com/en-in/industry/automotive",
    "https://www.microsoft.com/en-in/industry/government",
    "https://www.microsoft.com/en-in/industry/health/microsoft-cloud-for-healthcare",
    "https://www.microsoft.com/en-in/industry/manufacturing/microsoft-cloud-for-manufacturing",
    "https://www.microsoft.com/en-in/industry/financial-services/microsoft-cloud-for-financial-services",
    "https://www.microsoft.com/en-in/industry/retail/microsoft-cloud-for-retail",
    "https://www.microsoft.com/en-in/about",
    "https://www.microsoft.com/investor/default.aspx",
    "https://www.microsoft.com/en-in/security/default.aspx",
    "https://www.microsoft.com/en-in/locale?absoluteReturnUrl=https%3a%2f%2fwww.microsoft.com%2fen-in%2f%3fSilentAuth%3d1%26wa%3dwsignin1.0",
    "https://www.microsoft.com/trademarks"
  
  ]
},
  error: {
    selector: 'error-links',
    urls: ['pages/redirect.html', 'pages/timeout.html', 'pages/non-existent-page.html']
  }
}

Object.keys(links).forEach(key => {
  const ul = document.querySelector(`#${links[key].selector} > ul`);
  const count = document.querySelector(`#${links[key].selector} .count`);
  const liList = links[key].urls.map(url => {
    addLink(url);
    return `<li class="list-group-item">
      <a href="${url}">${url}</a>
    </li>`
  }).join('');

  count.innerText = links[key].urls.length;
  ul.innerHTML = liList;
})
