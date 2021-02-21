<?php
/**
 * Plugin Name: Slider gutenberg
 * Description: Custom slider
 * Version: 1.0
 */
 
function my_custom_slider()
{
	wp_register_script(
		'custom-slider-js',
		plugin_dir_url(__FILE__).'build/index.js',
		array('wp-blocks', 'wp-block-editor', 'wp-components')
	);

	wp_register_style(
		'custom-slider-css',
		plugin_dir_url(__FILE__).'css/style.css',
		array()
	);

	wp_register_script(
		'custom-additional-js',
		plugin_dir_url(__FILE__).'js/custom.js',
		array('jquery')
	);
	
	register_block_type('stingless/custom-slider',array(
		'editor_script' => 'custom-slider-js',
		'style' => 'custom-slider-css',
		'script' => 'custom-additional-js',
	));
	register_block_type('stingless/custom-slider-slide',array(
		'editor_script' => 'custom-slider-js',
		'style' => 'custom-slider-css',
		'script' => 'custom-additional-js',
	));
}
add_action('init','my_custom_slider');