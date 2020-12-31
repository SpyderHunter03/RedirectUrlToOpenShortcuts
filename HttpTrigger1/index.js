module.exports = async function (context, req) {
  console.log(req.originalUrl);
  let shortcut = req.query.state;
  if (!shortcut) {
    shortcut = "OAuth%202.0";
  }
  let code = req.query.code;

  let location =
    "shortcuts://run-shortcut?name=" +
    encodeURI(shortcut) +
    "&input=text&text=" +
    encodeURI(code);
  console.log(location);

  context.res = {
    status: 301,
    headers: {
      Location: location,
    },
  };
  context.done();
};
/*
<?php
$shortcut = $_REQUEST['shortcut'] ?: 'OAuth%202.0';
$code = $_REQUEST['code'];

header('Location: ' . 'shortcuts://run-shortcut?name=' . rawurlencode($shortcut) . '&input=text&text=' . rawurlencode($code));
die();
?>
*/
