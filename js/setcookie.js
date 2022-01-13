 const cname = "PRCookie1";
 const cvalue = "PRCookie1Value";
 const d = new Date();
 d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
 let expires = "expires="+d.toUTCString();
 document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
