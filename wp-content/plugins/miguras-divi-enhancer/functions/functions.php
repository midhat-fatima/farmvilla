<?php

function divienhancer_scripts_and_styles(){



  // Carousels
  if(null !== get_option('divienhancer-enable-carousel') || null !== get_option('divienhancer-enable-shop')) {
    if(get_option('divienhancer-enable-carousel') != 'no' || get_option('divienhancer-enable-shop') != 'no' ){

      wp_enqueue_style( 'divienhancer-slick-css',  plugin_dir_url( __FILE__ ) . 'styles/slick.css' );
    	wp_enqueue_style( 'divienhancer-slick-theme',  plugin_dir_url( __FILE__ ) . 'styles/slick-theme.css' );
      wp_enqueue_script( 'divienhancer-slick-js', plugin_dir_url( __FILE__ ) . 'scripts/slick.min.js' );
    }
  }






  //general scripts
	wp_enqueue_style( 'divienhancer-custom',  plugin_dir_url( __FILE__ ) . 'styles/custom.css', rand(1, 100) );
  wp_enqueue_script( 'divienhancer-event-move', plugin_dir_url( __FILE__ ) . 'scripts/jquery.event.move.js' );


}
add_action('wp_enqueue_scripts', 'divienhancer_scripts_and_styles', 999);



function divienhancer_main_script(){
  wp_enqueue_script( 'divienhancer-additional-js',  plugin_dir_url( __FILE__ ) . 'scripts/main-scripts.js' );
}
add_action('wp_enqueue_scripts', 'divienhancer_main_script', 1000);
add_action('admin_enqueue_scripts', 'divienhancer_main_script', 1000);

function divienhancer_data_script(){
  


  wp_localize_script('divienhancer-additional-js', 'divienhancerData', array(
      'url' => plugin_dir_url( __FILE__ ),
      'bingKey' => get_option('divienhancer_bing_key')
  ));



}
add_action('wp_enqueue_scripts', 'divienhancer_data_script', 1001);
add_action('admin_enqueue_scripts', 'divienhancer_data_script', 1001);


function divienhancer_admin_styles(){
  wp_enqueue_style( 'divienhancer-admin-css',  plugin_dir_url( __FILE__ ) . 'styles/admin.css', rand(1, 100) );
  wp_enqueue_script('divienhancer-gumroad', 'https://gumroad.com/js/gumroad.js');
  wp_enqueue_script('divienhancer-admin-js', plugin_dir_url( __FILE__ ) . 'scripts/admin.js');
}
add_action('admin_enqueue_scripts', 'divienhancer_admin_styles', 999);






?>
