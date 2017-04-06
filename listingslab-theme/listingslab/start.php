<?php

/*
  Handles user cookies which show react or
  twentyseventeen and unique user id
*/



$app_type = 'twentyseventeen';
// $app_type = 'react';

if (isset ($_POST['appSwitch'])){
  print 'switch on react';
  exit;
}



/*
function make_ll_cookie (){
  echo "make_ll_cookie";
}
if(!isset($_COOKIE['ll_cookie'])) {
    // echo "ll_cookie is not set!";
    // make_ll_cookie();
} else {
    // echo "Cookie '" . $cookie_name . "' is set!<br>";
    // echo "Value is: " . $_COOKIE[$cookie_name];
}

if ($app_type == 'react'){
  include dirname(__FILE__).'/react-html.php';
  exit;
}
*/
// print '<pre>';
// print_r ($ll_cookies);
// print '</pre>';
