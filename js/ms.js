// Menu Open / Close Function

$(document).ready(function(){

	console.log('this got loaded');

	// // initialize Masonry
	// var $container = $('#dashboard').masonry();
	// // layout Masonry again after all images have loaded
	// $container.imagesLoaded( function() {
	// 	$container.masonry({
	// 		columnWidth: '.large-4',
	// 		itemSelector: '.widget-container'
	// 	});
	// });

	// var $container = $('#dashboard');
	// // initialize
	// $container.masonry();

	$('#opn-cls').click(function(){
		// Check if the nav is open. If it is, close it.
		if( $('#nav').hasClass('open') ) {
			$('#nav').removeClass('open');
			$('#page-container').removeClass('open');
		// Otherwise, if it is closed, open it.
		} else {
			$('#nav').addClass('open');
			$('#page-container').addClass('open');
		}
	});


	// Table Click to show line summary sidebar

	$('#inputdata-table').on('click','tbody tr',function() {
		if( $('#total-summary').is(":visible") || $('#manual-entry').is(":visible") ) {
			$('#manual-entry').removeClass('active');
			$('#line-summary').siblings().hide();
			$('#line-summary').show();
		}
	});


	// Close the "#line-summary" widget view by clicking on the "Cancel" or "Save" button.
	$('.close-line-summary').click(function(){
		$('#total-summary').siblings().hide();
		$('#total-summary').show();
		$('#inputdata-table tbody tr').removeClass('highlight');
	});


	// Highlight selected tr
	$('#inputdata-table').on('click','tbody tr',function() {
		if( $(this).hasClass('highlight') ) {
			// Do nothing
		} else {
			$(this).siblings().removeClass('highlight');
			$(this).addClass('highlight');
		}
	});
	// Also Highlight rows for full collection table
	$('#full-collection-panel').on('click','tbody tr',function() {
		if( $(this).hasClass('highlight') ) {
			// Do nothing
		} else {
			$(this).siblings().removeClass('highlight');
			$(this).addClass('highlight');
		}
	});

	// Always start with first row highlighted
	$('#full-collection-table').ready(function() {
		$('#full-collection-table tbody tr:first-child').addClass('highlight');
	});

	// Table Click to show data entry sidebar

	$('#manual-entry').on('click',function() {
		if( $('#data-entry').is(":hidden") ) {
			// Hide all other widgets and show the data entry widget
			$('#data-entry').siblings().hide();
			$('#data-entry').show();
			// Remove any highlights on the table data
			$('#inputdata-table tbody tr').removeClass('highlight');
			$('#full-collection-table tbody tr').removeClass('highlight');
			// Highlight manual entry button
			$('#manual-entry').addClass('active');
		}
	});

	// Close the "#data-summary" widget view by clicking on the "Cancel" or "Save" button.

	$('.close-line-summary').click(function(){
		$('#total-summary').siblings().hide();
		$('#total-summary').show();
		$('#collection-item-summary').siblings().hide();
		$('#collection-item-summary').show();
		$('#inputdata-table tbody tr').removeClass('highlight');
		$('#manual-entry').removeClass('active');
	});

	
	// Show / hide file upload

	$('#add-file').on('click',function() {
		// check if the upload verification is not there
		if( $('#upload-verification').is(":hidden") ) {
			// if it isn't hidden do this
			$('#upload-verification').show();
		}
	});
	$('.remove').on('click',function() {
		// check if the upload verification is there
		if( $('#upload-verification').is(":visible") ) {
			// if it is there, do this
			$('#upload-verification').hide();
		}
	});


	// Review Data Specific Functions
	// Close the "Loading" screen by clicking on the loading icon and add in the interactive functionalities
	$('#processing svg').on('click',function() {
		$('#processing').hide();
		$('#processing-summary').hide();
		$('#tab-content').show();
		$('#total-summary').show();

		// Add .warning and .error classes to table rows that contain certain words
		$('tr').each(function(){
			if($('td:contains("Field")', this).length){
				$(this).addClass('warning');
			}
			if($('td:contains("Critical")', this).length){
				$(this).addClass('error');
			}
		});

		// Add <span class="color-block"></span> to the first td in the error listing and impacted member tables
		$('#error-listing-table td:first-child, #impacted-table td:first-child').prepend('<span class="color-block"></span>');

		// Show / hide corresponding sidebar and highlight table row
		$('tr').on('click',function() {
			if( $('#error-list-panel').is(":visible") && $(this).hasClass('warning') ) {
				// Hide all other widgets and show the data entry widget
				$('#error-list-warning').siblings().hide();
				$('#error-list-warning').show();
				// Remove any highlights on the table data
				$(this).siblings().removeClass('highlight');
				$(this).addClass('highlight');
				$('.secondary').find('.edit').hide();
				$('.secondary').find('.cancel-save').hide();
				$('.secondary').find('.summary').show();
			} else if( $('#error-list-panel').is(":visible") && $(this).hasClass('error') ) {
				// Hide all other widgets and show the data entry widget
				$('#error-list-error').siblings().hide();
				$('#error-list-error').show();
				// Remove any highlights on the table data
				$(this).siblings().removeClass('highlight');
				$(this).addClass('highlight');
				$('.secondary').find('.edit').hide();
				$('.secondary').find('.cancel-save').hide();
				$('.secondary').find('.summary').show();
			} if( $('#impacted-list-panel').is(":visible") && $(this).hasClass('warning') ) {
				// Hide all other widgets and show the data entry widget
				$('#impacted-list-warning').siblings().hide();
				$('#impacted-list-warning').show();
				// Remove any highlights on the table data
				$(this).siblings().removeClass('highlight');
				$(this).addClass('highlight');
				$('.secondary').find('.edit').hide();
				$('.secondary').find('.cancel-save').hide();
				$('.secondary').find('.summary').show();
			} else if( $('#impacted-list-panel').is(":visible") && $(this).hasClass('error') ) {
				// Hide all other widgets and show the data entry widget
				$('#impacted-list-error').siblings().hide();
				$('#impacted-list-error').show();
				// Remove any highlights on the table data
				$(this).siblings().removeClass('highlight');
				$(this).addClass('highlight');
				$('.secondary').find('.edit').hide();
				$('.secondary').find('.cancel-save').hide();
				$('.secondary').find('.summary').show();
			} else if( $('#view-all-panel').is(":visible")) {
				// Hide all other widgets and show the data entry widget
				$('#view-all-edit').siblings().hide();
				$('#view-all-edit').show();
				// Remove any highlights on the table data
				$(this).siblings().removeClass('highlight');
				$(this).addClass('highlight');
				$('.secondary').find('.edit').hide();
				$('.secondary').find('.cancel-save').hide();
				$('.secondary').find('.summary').show();
			}
		});

		// Close the "#line-summary" widget view by clicking on the "Cancel" or "Save" button.
		$('.close-line-summary, .action').click(function(){
			$('#total-summary').siblings().hide();
			$('#total-summary').show();
			$('tbody tr').removeClass('highlight');
			$('.secondary').find('.edit').hide();
			$('.secondary').find('.cancel-save').hide();
			$('.secondary').find('.summary').show();
		});
	
		// Clicking edit reveals the editing inputs
		$('.edit-button').click( function() {
			$(this).siblings('dl').find('.summary').hide();
			$(this).siblings('dl').find('.edit').show();
			$(this).siblings('dl').find('.cancel-save').show();
		});

	});

	// Expand Widget to full width when toggle clicked
	$('.widget-expand').click( function(event) {
		$(this).parents('.widget-container').toggleClass('large-4');
		$(this).parents('.widget-container').toggleClass('large-12');
		$(this).siblings('.overflow-off').toggleClass('overflow-on');
		$(this).siblings().children('.overflow-off').toggleClass('overflow-on');
		$(this).toggleClass('widget-contract');
		// trigger layout
  		msnry.layout();
  		// Focus on item after open or close
  		setTimeout(function (){
             $('html, body').animate({
				scrollTop: $(event.target).parents('.widget-container').offset().top
			}, 1000);
         }, 400);  		
	});

	// Toggle message activation state for expanded widgets
	$("#page-container").on("click", ".large-12 .message-list li", function() {
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});
	// Disable default link behaviour when the messages widget is expanded
	$('.message-list li a').click(function(e) {
		if ($('.message-list li a').parents().hasClass('large-12')) {
		
		    // Cancel the default action
		    e.preventDefault();
		}
	});

});
