 const d = new Date();
 const cname = "Cookie1Name1";
 const cvalue = "Cookie1Value1";
  d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";