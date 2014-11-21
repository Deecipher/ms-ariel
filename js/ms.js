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


// Table Click to show other sidebar data summary

$(document).ready(function(){
	$('#inputdata-table').on('click','tbody tr',function() {
		if( $('#total-summary').is(":visible") ) {
			$('#total-summary').hide();
			$('#line-summary').show();
		}
	});
	// Close the "#line-summary" widget view by clicking on the "Cancel" or "Save" button.
	$('.close-line-summary').click(function(){
		$('#line-summary').hide();
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