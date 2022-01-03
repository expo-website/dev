const scriptEl = document.createRange().createContextualFragment('<script  type="application/blocked" > console.log("script executed"); </script>');
document.body.append(scriptEl);
