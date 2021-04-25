<?php

class DIVIENHANCER_bingMapChild extends ET_Builder_Module {
	
	function init() {
		$this->slug                        = 'divienhancer_bingMapChild';
		$this->type                        = 'child';
		$this->vb_support 				   = 'on';
		$this->name                        = esc_html__( 'Pin', 'et_builder' );
		$this->plural                      = esc_html__( 'Pins', 'et_builder' );
		$this->child_title_var             = 'identifier';
		$this->advanced_setting_title_text = 'Pin';
		$this->settings_text               = esc_html__( 'Pin Settings', 'divienhancer' );
		$this->main_css_element = '%%order_class%%';
		// Toggle settings
		$this->settings_modal_toggles  = array(
			'general'  => array(
				'toggles' => array(
					'main_content' => esc_html__( 'Content', 'divienhancer' ),
				),
			),
			'advanced' => array(
				'toggles' => array(
					'text' => array(
						'title'    => esc_html__( 'Text', 'divienhancer' ),
						'priority' => 45,
						'bb_icons_support' => true,
					),
					'header' => array(
						'title'    => esc_html__( 'Heading Text', 'divienhancer' ),
						'priority' => 49,
						'tabbed_subtoggles' => true,
						'sub_toggles' => array(
							'h2' => array(
								'name' => 'H2',
								'icon' => 'text-h2',
							),
							'h3' => array(
								'name' => 'H3',
								'icon' => 'text-h3',
							),


						),
					),
				),
			),
		);
	}

	public function get_fields() {
		return array(
			'identifier' => array(
				'label'           => esc_html__( 'Pin Title', 'divienhancer' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'This lets you identify each slide at modal', 'divienhancer' ),
				'toggle_slug'     => 'main_content',
			),
			'content' => array(
				'label'           => esc_html__( 'Pin Content', 'divienhancer' ),
				'type'            => 'tiny_mce',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Content entered here will appear inside the module.', 'divienhancer' ),
				'toggle_slug'     => 'main_content',
			),
			'coordinates' => array(
				'label'           => esc_html__( 'Address or Map Coordinates (Latitude, Longitude)', 'divienhancer' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'toggle_slug'     => 'main_content',
				'default'					=> 'london',
				'description'			=> ''
			),
		);


	}
	public function get_advanced_fields_config() {
		$advanced_fields = $this->advanced_tab_options;
	
		$advanced_fields['width']  = array(
			'css' => array(
				'main'    => '%%order_class%% >',
			),
			'options' => array(
				'width' => array(
					'default'         => '200px',
					'default_tablet'  => '200px',
					'default_phone'   => '200px',
				),
			),
		);

		$advanced_fields['max_width'] =  array(
			'css' => array(
				'main' => "%%order_class%%",
			),
		);

		$advanced_fields['background'] = array(
			'options' => array(
				'background_color' => array(
					'default' => '#ffffff',
				),
				'use_background_color' => array(
					'default'          => 'on',
				),
			),
			'css'             => array(
				'main'         => "{$this->main_css_element}",
			),
		);

		$advanced_fields['fonts']  = array(
			'main_text'   => array(
				'label'    => esc_html__( 'Content', 'divienhancer' ),
				'css'      => array(
					'main' => "{$this->main_css_element} .divienhancer_timeline_child_inner",
				),
				'font_size' => array(
					'default' => absint( '14' ) . 'px',
				),
				'line_height' => array(
					'default' => '1.4em',
				),
				'letter_spacing' => array(
					'default' => '0px',
				),
				'toggle_slug' => 'text',
			),
			'header'   => array(
				'label'    => esc_html__( 'Heading', 'divienhancer' ),
				'css'      => array(
					'main' => "{$this->main_css_element} .divienhancer_timeline_child_inner h1",
				),
				'font_size' => array(
					'default' => absint( et_get_option( 'body_header_size', '30' ) ) . 'px',
				),
				'toggle_slug' => 'header',
				'sub_toggle'  => 'h1',
			),
			'header_2'   => array(
				'label'    => esc_html__( 'Heading 2', 'divienhancer' ),
				'css'      => array(
					'main' => "{$this->main_css_element} .divienhancer_timeline_child_inner h2",
				),
				'font_size' => array(
					'default' => '26px',
				),
				'line_height' => array(
					'default' => '1em',
				),
				'toggle_slug' => 'header',
				'sub_toggle'  => 'h2',
			),
			'header_3'   => array(
				'label'    => esc_html__( 'Heading 3', 'divienhancer' ),
				'css'      => array(
					'main' => "{$this->main_css_element} .divienhancer_timeline_date h3",
				),
				'font_size' => array(
					'default' => '22px',
				),
				'line_height' => array(
					'default' => '1em',
				),
				'toggle_slug' => 'header',
				'sub_toggle'  => 'h3',
			),
			'header_4'   => array(
				'label'    => esc_html__( 'Heading 4', 'divienhancer' ),
				'css'      => array(
					'main' => "{$this->main_css_element} h4",
				),
				'font_size' => array(
					'default' => '18px',
				),
				'line_height' => array(
					'default' => '1em',
				),
				'toggle_slug' => 'header',
				'sub_toggle'  => 'h4',
			),
			'header_5'   => array(
				'label'    => esc_html__( 'Heading 5', 'divienhancer' ),
				'css'      => array(
					'main' => "{$this->main_css_element} h5",
				),
				'font_size' => array(
					'default' => '16px',
				),
				'line_height' => array(
					'default' => '1em',
				),
				'toggle_slug' => 'header',
				'sub_toggle'  => 'h5',
			),
			'header_6'   => array(
				'label'    => esc_html__( 'Heading 6', 'divienhancer' ),
				'css'      => array(
					'main' => "{$this->main_css_element} h6",
				),
				'font_size' => array(
					'default' => '14px',
				),
				'line_height' => array(
					'default' => '1em',
				),
				'toggle_slug' => 'header',
				'sub_toggle'  => 'h6',
			),
		);



		return $advanced_fields;
	}

	function render( $attrs, $content = null, $render_slug ) {

		return sprintf(
			'
			<div class="divienhancer_bing_map_pin" data-title="%1$s" data-address="%2$s"></div>
			<div style="display: none;" class="divienhancer_bing_map_pin_content">
				<span class="divienhancer_bing_map_pin_close et-pb-icon et-animated">M</span>
				<h2 class="divienhancer_bing_map_pin_title">
					%1$s
				</h2>
					%3$s
			</div>
			',
			esc_attr($this->props['identifier']),
			esc_attr($this->props['coordinates']),
			et_sanitized_previously( $this->content )
			
		);
	}
}

new DIVIENHANCER_bingMapChild;
