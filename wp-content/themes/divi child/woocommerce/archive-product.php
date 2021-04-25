<?php
/**
 * The Template for displaying product archives, including the main shop page which is a post type archive
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/archive-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.4.0
 */

defined( 'ABSPATH' ) || exit;

get_header( 'shop' );

?>

<div class="et_builder_inner_content et_pb_gutters3">
	<div class="et_pb_section et_pb_section_0 et_pb_with_background et_section_regular">				
				<div class="et_pb_row et_pb_row_0">
			<div class="et_pb_column et_pb_column_4_4 et_pb_column_0    et_pb_css_mix_blend_mode_passthrough et-last-child">			
			<div class="et_pb_module et_pb_text et_pb_text_0 et_pb_bg_layout_light  et_pb_text_align_center">
			<div class="et_pb_text_inner">
				<h3 style="color:#f1f1f1; font-weight: 600;">SHOP PRODUCT PAGE</h3>
<p style="color:#f1f1f1;">Home – Project</p>
			</div>
		</div> <!-- .et_pb_text -->
		</div> <!-- .et_pb_column -->			
		</div> <!-- .et_pb_row -->
		</div> <!-- .et_pb_section -->
		
		
		
		
		<div class="et_pb_section et_pb_section_1 et_section_regular">
		<div id="x-section-2" class="x-section" style="margin: 0px;padding: 30px 30px 20px; background-color: transparent;">
<div class="x-container" style="margin: 0px auto;padding: 0px;">
<div class="x-column x-sm x-1-1" style="padding: 0px;margin-top: 50px;margin-bottom: 90px;">
<div class="bearsthemes-element bearsthemes-block-element bt-row ">



  <div class="bt-col-4">
  <div class="bearsthemes-element bearsthemes-block-item-element bearsthemes-block-item-element-layout-default " style="background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://balloon.beplusthemes.com/wp-content/uploads/2016/11/image-6.jpg) no-repeat center center / cover;height: 230px;">
    <div class="bearsthemes-element-inner">
      <div class="block-entry">
  <h4 class="block-title" style="font-family: 'Pacifico'; font-size: 30px; line-height: 40px; letter-spacing: 3px; color: #88C000; font-style: normal; font-weight: 900">Ftuits</h4>
  <div class="block-content" style="color: hsl(0, 0%, 100%);">Deliciosly fresh</div>
</div>
<a class="bt-btn-block-link" href="#" style="color:white;">SHOP NOW</a>    </div>
  </div>
</div>





<div class="bt-col-4">
  <div class="bearsthemes-element bearsthemes-block-item-element bearsthemes-block-item-element-layout-default " style="background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://balloon.beplusthemes.com/wp-content/uploads/2016/11/image-5.jpg) no-repeat center center / cover;height: 230px;">
    <div class="bearsthemes-element-inner">
      <div class="block-entry">
  <h4 class="block-title" style="font-family: 'Pacifico'; font-size: 30px; line-height: 40px; letter-spacing: 3px; color: #88C000; font-style: normal; font-weight: 900">Meats</h4>
  <div class="block-content" style="color: hsl(0, 0%, 100%);">Deliciosly fresh</div></div>
<a class="bt-btn-block-link" href="#" style="color:white;">SHOP NOW</a>    </div>
  </div>
</div>




<div class="bt-col-4">
  <div class="bearsthemes-element bearsthemes-block-item-element bearsthemes-block-item-element-layout-default " style="background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://balloon.beplusthemes.com/wp-content/uploads/2016/11/image-4-1.jpg) no-repeat center center / cover;height: 230px;">
    <div class="bearsthemes-element-inner">
      <div class="block-entry">
  <h4 class="block-title" style="font-family: 'Pacifico'; font-size: 30px; line-height: 40px; letter-spacing: 3px; color: #88C000; font-style: normal; font-weight: 900">Vegetables</h4>
  <div class="block-content" style="color: hsl(0, 0%, 100%);">Organic and freshly Picked</div></div>
<a class="bt-btn-block-link" href="#" style="color:white;">SHOP NOW</a>    </div>
  </div>
</div>




<div class="bt-col-4">
  <div class="bearsthemes-element bearsthemes-block-item-element bearsthemes-block-item-element-layout-default " style="background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://balloon.beplusthemes.com/wp-content/uploads/2016/11/image-7.jpg) no-repeat center center / cover;height: 230px;">
    <div class="bearsthemes-element-inner">
      <div class="block-entry">
  <h4 class="block-title" style="font-family: 'Pacifico'; font-size: 30px; line-height: 40px; letter-spacing: 3px; color: #88C000; font-style: normal; font-weight: 900">Organic Milk</h4>
  <div class="block-content" style="color: hsl(0, 0%, 100%);">Deliciosly fresh</div></div>
<a class="bt-btn-block-link" href="#" style="color:white;">SHOP NOW</a>    </div>
  </div>
</div>
</div>
</div></div></div>



<?php

/**
 * Hook: woocommerce_before_main_content.
 *
 * @hooked woocommerce_output_content_wrapper - 10 (outputs opening divs for the content)
 * @hooked woocommerce_breadcrumb - 20
 * @hooked WC_Structured_Data::generate_website_data() - 30
 */
do_action( 'woocommerce_before_main_content' );

?>

<header class="woocommerce-products-header">
	<?php if ( apply_filters( 'woocommerce_show_page_title', true ) ) : ?>
		<h1 class="woocommerce-products-header__title page-title"><?php woocommerce_page_title(); ?></h1>
	<?php endif; ?>

	<?php
	/**
	 * Hook: woocommerce_archive_description.
	 *
	 * @hooked woocommerce_taxonomy_archive_description - 10
	 * @hooked woocommerce_product_archive_description - 10
	 */
	do_action( 'woocommerce_archive_description' );
	?>
</header>

<?php
if ( woocommerce_product_loop() ) {

	/**
	 * Hook: woocommerce_before_shop_loop.
	 *
	 * @hooked woocommerce_output_all_notices - 10
	 * @hooked woocommerce_result_count - 20
	 * @hooked woocommerce_catalog_ordering - 30
	 */
	do_action( 'woocommerce_before_shop_loop' );

	woocommerce_product_loop_start();

	if ( wc_get_loop_prop( 'total' ) ) {
		while ( have_posts() ) {
			the_post();

			/**
			 * Hook: woocommerce_shop_loop.
			 */
	
			do_action( 'woocommerce_shop_loop' );

			wc_get_template_part( 'content', 'product' );
	
		}

	}

	woocommerce_product_loop_end();

	/**
	 * Hook: woocommerce_after_shop_loop.
	 *
	 * @hooked woocommerce_pagination - 10
	 */
	do_action( 'woocommerce_after_shop_loop' );
} else {
	/**
	 * Hook: woocommerce_no_products_found.
	 *
	 * @hooked wc_no_products_found - 10
	 */
	do_action( 'woocommerce_no_products_found' );
}

/**
 * Hook: woocommerce_after_main_content.
 *
 * @hooked woocommerce_output_content_wrapper_end - 10 (outputs closing divs for the content)
 */
do_action( 'woocommerce_after_main_content' );

/**
 * Hook: woocommerce_sidebar.
 *
 * @hooked woocommerce_get_sidebar - 10
 */
do_action( 'woocommerce_sidebar' );

get_footer( 'shop' );
