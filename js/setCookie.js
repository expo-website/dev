 const d = new Date();
 const cname = "Cookie1Name1";
 const cvalue = "Cookie1Value1";
  d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();  
  document.cookie = cname +"=" + cvalue + ";domain=expo-website.github.io;path=/;" + expires;
   cname = "Cookie2Name2";
   cvalue = "Cookie2Value2";
   document.cookie = cname +"=" + cvalue + ";domain=.example.com;path=/;" + expires;