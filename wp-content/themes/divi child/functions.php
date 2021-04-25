<?php
function mystyle(){
    wp_enqueue_style('parent-style', get_template_directory_uri() .'/style.css');
}
add_action('wp_enqueue_scripts','mystyle');
?>

<?php
add_action('template_redirect', 'remove_shop_breadcrumbs' );
function remove_shop_breadcrumbs(){
 
    if (is_shop())
        remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20, 0);
 
}
?>

<?php
add_filter( 'woocommerce_show_page_title', 'bbloomer_hide_shop_page_title' );
function bbloomer_hide_shop_page_title( $title ) {
    if ( is_shop() ) $title = false;
    return $title;
}
?>

<?php
remove_action( 'woocommerce_before_shop_loop', 'woocommerce_result_count', 20 );
?>


