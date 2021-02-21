
const {registerBlockType} = wp.blocks;

const { 
	RichText,
	InspectorControls,
	ColorPalette,
	MediaUpload,
	AlignmentToolbar,
	BlockControls,
	InnerBlocks,
} = wp.blockEditor;

const {
	PanelBody,
	Button,
	RangeControl,
	ResponsiveWrappertitle,
	SelectControl,
} = wp.components;

registerBlockType('stingless/custom-slider',{
	title: 'Slider',
	description: 'Custom slider',
	icon: 'smiley',
	category: 'layout',
	attributes: {
		slideCount:
		{
			type:'number',
			default:0
		},
		autoplay:
		{
			type:'string',
			default: 'no-autoplay'
		}
	},

	edit: ({attributes, setAttributes}) => {
		const { select,dispatch,subscribe } = wp.data;
		const parentBlock = select( 'core/block-editor' ).getBlocks()[0];
		const childBlocks = parentBlock.innerBlocks;
		const ALLOWED_BLOCKS = [ 'stingless/custom-slider-slide' ];
		const {slideCount,autoplay} = attributes;
		const isParentOfSelectedBlock = select( 'core/block-editor' ).hasSelectedInnerBlock( parentBlock.clientId, true );
		
		childBlocks.forEach(function(child,index){
 			if(isParentOfSelectedBlock)
	        {
	        	if(index == 0)
	        	{
	        		dispatch('core/block-editor').updateBlockAttributes(childBlocks[index].clientId, {active: 'slide-image active'});
	        	}
	        	else
	        	{
	        		dispatch('core/block-editor').updateBlockAttributes(childBlocks[index-1].clientId, {active: 'slide-image'});	        		
	        		dispatch('core/block-editor').updateBlockAttributes(childBlocks[index].clientId, {active: 'slide-image active'});
	        	}
	        }
		});

		setAttributes({slideCount: childBlocks.length});

		function onClickImage(event)
		{
			var position = event.currentTarget.id;
			var removeDotClass = document.querySelector('.slider__indicator.clicked').classList.remove('clicked');
        	var addDotClass = document.querySelectorAll('.slider__indicator')[position].classList.add('clicked');		
			var removeClass = document.querySelector('.slide-image.active').classList.remove('active');
        	var addClass = document.querySelectorAll('.slide-image')[position].classList.add('active');
        	
		}

		function onAutoplayChange(newAutoplay)
		{
			setAttributes({autoplay: newAutoplay});
		}

		return ([
			<InspectorControls style={{ marginBottom: '40px' }}>
				<PanelBody title={'Background image settings'}>
					<p><strong>Autoplay:</strong></p>
					<SelectControl
					    label={ 'Enable Autoplay:' }
					    value={ autoplay }
					    onChange={ onAutoplayChange }
					    options={ [
					        { value: 'no-autoplay', label: 'Disable' },
					        { value: 'autoplay', label: 'Enable' }, 
					    ] }
					/>						
				</PanelBody>
			</InspectorControls>,
				<div>
					<h2>Custom slider</h2>
					<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS }/>
	                <div className="slider__dots">
						<div>
							{childBlocks.map(function(link, index){
								if (childBlocks.length === index + 1) {
									return <a onClick={onClickImage} id={index} className="slider__indicator clicked"></a>
								} else {
									return <a onClick={onClickImage} id={index} className="slider__indicator"></a>
								}
			                })}
						</div>
						<div style={{clear:'both'}}></div>		                
            		</div>				
				</div>,						

		]);

	},

	save: ({attributes}) => {
		const {slideCount,autoplay} = attributes;
		return (
				<div className={autoplay}>	
					<h2>Custom slider</h2>
					<InnerBlocks.Content/>
 	                <div className="slider__dots">
			        	<Button
							icon="arrow-left-alt2"
							className="test1"
							style={{ width: '10%' , float: 'left'}}
							>
							
						</Button>	
						<div>
							{[...Array(slideCount)].map(function(link, index){
								if ([...Array(slideCount)].length === index + 1) {
									return <a id={index} className="slider__indicator clicked"></a>
								} else {
									return <a id={index} className="slider__indicator"></a>
								}
			                })}
						</div>
			        	<Button
							icon="arrow-right-alt2"
							className="test2"
							style={{ width: '10%' , float: 'left'}}
							>
							
						</Button>
						<div style={{clear:'both'}}></div>		                
            		</div>	
				</div>   

		);
	}


});

registerBlockType('stingless/custom-slider-slide',{
	title: 'Slide',
	description: 'Custom slider slide',
	icon: 'smiley',
	category: 'layout',
	attributes: {
		image:{
			type:'string',
			default:'',
		},
		overlayColor:{
			type: 'string',
			default: 'black',
		},
		overlayOpacity:{
			type: 'number',
			default: 0.3
		},
		active:{
			type:'string',
			default:'slide-image'
		}
	},

	edit: ({attributes, setAttributes}) => {
		const {
			image,
			overlayColor,
			overlayOpacity,
			active
		} = attributes;

		function onSelectImage(newImage)
		{
			setAttributes({image: newImage.sizes.full.url});
		}

		function onOverlayColorChange(newOverlayColor)
		{
			setAttributes({ overlayColor: newOverlayColor });
		}
		
		function onOverlayOpacityChange(newOverlayOpacity)
		{
			setAttributes({ overlayOpacity: newOverlayOpacity });
		}

		return ([
			<InspectorControls>
				<PanelBody title={'Background image settings'}>
					<p><strong>Upload Image:</strong></p>
					<MediaUpload
						onSelect={onSelectImage}
						type="image"
						value={image}
						render={({open})=>(
							<Button
								onClick={open}
								icon="upload"
								className="editor-media-placeholder__button is-button is-default is-large">
								Choose Image
							</Button>				
						)}
					/>
					<p><strong>Overlay Color:</strong></p>
					<ColorPalette
						value={overlayColor}
						onChange={onOverlayColorChange}
					/>
					<RangeControl
						label={'Overlay Opacity'}
						value={overlayOpacity}
						onChange={onOverlayOpacityChange}
						min={0}
						max={1}
						step={0.05}
					/>
				</PanelBody>
			</InspectorControls>,

			<div
    			style={{
    				backgroundImage: `url(${image})`,
    				backgroundSize: 'cover',
    				backgroundPosition: 'center',
    				backgroundRepeat: 'no-repeat',
    				position:'relative',
    			}}
    			className={active}
    		>
	    		<div style={{
						background: overlayColor,
						opacity: overlayOpacity,
						position:'absolute',
						top:0,
						left:0,
						right:0,
						bottom:0
				}}></div>
            	<div style={{padding:'2% 4%'}}>
            		<InnerBlocks/>
            	</div>
			</div>

		]);


	},
	save: ({attributes}) => {
		const {
			image,
			overlayColor,
			overlayOpacity,
			active
		} = attributes;

		return (
			<div
    			style={{
    				backgroundImage: `url(${image})`,
    				backgroundSize: 'cover',
    				backgroundPosition: 'center',
    				backgroundRepeat: 'no-repeat',
    				position:'relative',
    			}}
    			className={active}
    		>
	    		<div style={{
						background: overlayColor,
						opacity: overlayOpacity,
						position:'absolute',
						top:0,
						left:0,
						right:0,
						bottom:0
				}}></div>    		
    			<div style={{padding:'2% 4%'}}>
            		<InnerBlocks.Content/>
            	</div>

			</div>
		);
	}

});