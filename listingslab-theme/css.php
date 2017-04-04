<style>
/* Runtime Styling */
<?php
  $option_name = "listingslab_link_colour";
  $option_exists = (get_option($option_name, null) !== null);
  if ($option_exists) {
      $link_colour = get_option($option_name);
  } else {
      $link_colour = '000';
  }
?>
a {
	color: #<?php print_r ($link_colour); ?>;
}

</style>
