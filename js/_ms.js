// Menu Open / Close Function

$(document).ready(function(){
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
});


// Table Click to show line summary sidebar

$(document).ready(function(){
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
});

// Table Click to show data entry sidebar

$(document).ready(function(){
	$('#manual-entry').on('click',function() {
		if( $('#data-entry').is(":hidden") ) {
			// Hide all other widgets and show the data entry widget
			$('#data-entry').siblings().hide();
			$('#data-entry').show();
			// Remove any highlights on the table data
			$('#inputdata-table tbody tr').removeClass('highlight');
			// Highlight manual entry button
			$('#manual-entry').addClass('active');
		}
	});

	// Close the "#data-summary" widget view by clicking on the "Cancel" or "Save" button.
	$('.close-line-summary').click(function(){
		$('#total-summary').siblings().hide();
		$('#total-summary').show();
		$('#inputdata-table tbody tr').removeClass('highlight');
		$('#manual-entry').removeClass('active');
	});
});

// Show / hide file upload
$(document).ready(function(){
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
});

// Review Data Specific Functions

$(document).ready(function(){
	// Close the "Loading" screen by clicking on the loading icon
	$('#processing svg').on('click',function() {
		$('#processing').hide();
		$('#processing-summary').hide();
		$('#tab-content').show();
		$('#total-summary').show();
	});

	
	// Add .warning and .error classes to table rows that contain certain words
	$('tr').each(function(){
		if($('td:contains("Field")', this).length){
			$(this).addClass('warning');
		}
		if($('td:contains("Critical")', this).length){
			$(this).addClass('error');
		}
	});

	
	// Clicking edit reveals the editing inputs
	$('.edit-button').click( function() {
		$(this).siblings('dl').find('.summary').hide();
		$(this).siblings('dl').find('.edit').show();
		$(this).siblings('dl').find('.cancel-save').show();
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
});



























