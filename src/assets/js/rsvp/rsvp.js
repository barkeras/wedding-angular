// (function ( $ ) {

// 	'use strict';

// 	$.fn.ajaxrsvp = function( options ) {
		
// 		var defaults = {           
//             messageWrapper: "#message",
// 			scrollAfterSubmit : true,			
//         }
		
//         var settings = $.extend( {},defaults, options );
		
// 		//GET FORM ID NAME
// 		var form_id = this.attr("id");
		
// 		//ON SUBMIT EVENT
// 		this.submit(function(event){
			
// 			//PREVENT DEFAULT SUBMIT
// 			event.preventDefault();				
			
// 			//GET ALL INPUT ELEMENT
// 			var ajax_input_element = $(this).find ( ".ajax-input" );
// 			/*console.log (ajax_input_item.get(0).id);*/
			
// 			//GET FORM ACTION URL
// 			var action_url = $(this).attr( 'action' );
			
// 			//DEFINE ARRAY VARIABLE FOR SAVE ALL INPUT ID
// 			var all_id = [];
			
// 			//DEFINE ARRAY VARIABLE FOR SAVE ALL ERR VALIDATION MESSAGE
// 			var all_err = [];
						
// 			//DEFINE OBJECT VARIABLE FOR SAVE ALL INPUT VALUE AND DATA-REQUIRED MESSAGE
// 			var post_data = {};			
// 			/*var post_data1 = { inputname: $('#inputname').val()};*/
			
						
					
// 			//LOOPING TO SAVE ALL INPUT VALUE, DATA-REQUIRED MESSAGE, AND ADD/REMOVE HAS-ERROR CLASS
// 			$.each(ajax_input_element , function(index, element){
				
// 				//DEBUG CONSOLE LOG
//      			//console.log(index + ':' + element.id + ' ' +element.type+ ' ' + element.getAttribute("data-required")); 
				
// 				//SAVE INPUT ID TO all_id ARRAY
// 				all_id.push(element.id);
				
// 				//IF CHECKBOX INPUT
// 				if ($(this).hasClass("ajax-checkbox")){
					
// 					//DEFINE CHECKED CHECKBOX
// 					var checked_checkbox = $("#" + element.id + " input[type='checkbox']:checked");
									
// 					//VALIDATION, SAVE INPUT VALUE OR ERR VALUE, ADD REMOVE HAS-ERROR CLASS				
// 					if (checked_checkbox.length > 0 || !($(this).attr("data-required")) ) {		
// 						$(this).removeClass("has-error");
// 						post_data[element.id] = checked_checkbox.map(function(i, elem) { return $(this).val(); }).get().join( ", " );
// 						post_data[element.id + "_label"] = element.getAttribute("data-output-label");
//        		 		}
// 					else 
// 					{
// 						$(this).addClass("has-error");
// 						all_err.push(element.getAttribute("data-required"));
										
// 					}
// 				}
				
// 				//ELSE IF RADIO INPUT
// 				else if ($(this).hasClass("ajax-radio")){
										
// 					//DEFINE RADIO NAME
// 					var radio_name = $("#" + element.id + " input").first().attr("name");
					
// 					//DEFINE CHECKED RADIO
// 					//var checked_radio = $("#" + element.id + " [type='radio']:checked");
// 					var checked_radio = $("#" + element.id + " [type='radio'][name='" + radio_name + "']:checked");
					
// 					//GET RADIO VALUE
// 					var radio_value = $("#" + element.id + " [type='radio'][name='" + radio_name + "']:checked").val();
					
// 					//SAVE RADIO VALUE & DATA-REQUIRED TO post_data
// 					if (radio_value == null)
// 					{
// 						radio_value = "";
// 					}
					
// 					//VALIDATION, SAVE INPUT VALUE OR ERR VALUE, ADD REMOVE HAS-ERROR CLASS		
// 					if (checked_radio.length > 0 || !($(this).attr("data-required"))) {
// 						$(this).removeClass("has-error");
// 						post_data[element.id] = radio_value;
// 						post_data[element.id + "_label"] = element.getAttribute("data-output-label");
//        		 		}
// 					else
// 					{
// 						$(this).addClass("has-error");
// 						all_err.push(element.getAttribute("data-required"));
					
// 					}
// 				}
				
// 				//ELSE OTHER INPUT (TEXT, TEXTAREA, SELECT OPTIONS)
// 				else
// 				{
// 					//GET INPUT VALUE
// 					var this_input_value = $(this).val();
					
// 					//VALIDATION, SAVE INPUT VALUE OR ERR VALUE, ADD REMOVE HAS-ERROR CLASS			
// 					if ( this_input_value == null  || this_input_value.length == 0 ) {
// 						if ($(this).attr("data-required"))
// 						{
//             				$(this).closest("div").addClass("has-error");	
// 							all_err.push(element.getAttribute("data-required"));
// 						}
//        		 		}
// 					else
// 					{
// 						$(this).closest("div").removeClass("has-error");
// 						post_data[element.id] = this_input_value;		
// 						post_data[element.id + "_label"] = element.getAttribute("data-output-label");					
// 					}
// 				}
// 			});
			
			
// 			//SAVE ALL ID TO POST DATA	
// 			post_data["all_input_id"] = all_id;
			
// 			//SAVE ALL ERROR REQUIRED TO POST DATA	
// 			post_data["all_error_required"] = all_err;
			
// 			//DEBUG POST DATA	
// 			/*console.log ("json " + JSON.stringify(post_data));*/
			
// 			//DISABLE SUBMIT BUTTON
// 			var submit_value = $('input[type="submit"]#submitButton').val();
// 			$('input[type="submit"]#submitButton').prop('disabled', true);
// 			$('input[type="submit"]#submitButton').val('SENDING ...');
			
// 			//START POST ACTION
//             $.post(action_url, post_data, function(response){  
			
//                 //DEFINE OUTPUT MESSAGE VARIABLE
// 				var output = "";
				
// 				//IF RESPONSE ERROR
// 				if(response.type == 'error')
// 				{
// 					output = '<div class="bg-danger">'+response.text+'</div>';
// 				}
// 				//ELSE IF NO ERROR
// 				else
// 				{
// 				    output = '<div class="bg-success">'+response.text+'</div>';
					
// 					//RESET INPUT VALUE
// 					$("#" + form_id).find("input[type='text']").val('');
// 					$("#" + form_id).find("input[type='email']").val('');
// 					$("#" + form_id).find("textarea").val('');
// 					$("#" + form_id).find("input[type='radio']").prop("checked", false);
// 					$("#" + form_id).find($('.ajax-radio .btn')).removeClass('active-icon active');
// 					$("#" + form_id).find("input[type='checkbox']").attr('checked', false);
// 					$("#" + form_id).find($('.ajax-checkbox .btn')).removeClass('active-icon active');
// 					$("#" + form_id).find("select").prop('selectedIndex',0);
// 					$("#" + form_id).find("select[multiple]").prop('selectedIndex',-1);	
							
// 				}				
				
// 				//ENABLE SUBMIT BUTTON
// 				$('input[type="submit"]#submitButton').prop('disabled', false);
// 				$('input[type="submit"]#submitButton').val(submit_value);		
					
// 				//OUTPUT MESSAGE
// 				$(settings.messageWrapper).hide().html(output).slideDown();
				
// 				if (settings.scrollAfterSubmit){
// 					$('html, body').animate({
//         				scrollTop: $(settings.messageWrapper).offset().top - 200
//     				}, 1000);	
// 				}
				
//             }, 'json');
// 		});
		
		
		
		
		
//    	 	/*return this.each(function(){
// 		});*/
// 	};

// }( jQuery ));

(function ( $ ) {

	'use strict';

	$.fn.ajaxrsvp = function( options ) {
		
		var defaults = {           
            messageWrapper: "#message",
			scrollAfterSubmit : true,			
        }
		
        var settings = $.extend( {},defaults, options );
		
		//GET FORM ID NAME
		var form_id = this.attr("id");

		let guestList = [];
		let validGuest;
		emailjs.init('user_4ohqiouOGl4CVR2LkygXx');
		const jsonLocation = window.location.origin + '/js/rsvp/rsvp.json';

		$.getJSON( jsonLocation, function( data ) {

			// console.log('data:\n', data); //json output
			guestList = data;
		});

		$('#inputrsvpcode').focusout(function(){

			const rsvpCode = $(this)[0].value;

			validGuest = guestList.filter(guest => {
				return guest.rsvpCode === rsvpCode
			})[0];

			if(validGuest) {
				var index;
				for(index = 1; index <= 7; index++) {
					if(index > validGuest.maxGuests) {
						let guestElem = $(`input[type="radio"]#${index}`);
						guestElem.parent().hide();
					}
				}
			} else{
				resetGuestsView();
			}
		})
		
		//ON SUBMIT EVENT
		this.submit(function(event){

			var output = '';
			
			//PREVENT DEFAULT SUBMIT
			event.preventDefault();		

			//DISABLE SUBMIT BUTTON
			var submit_value = $('input[type="submit"]#submitButton').val();
			$('input[type="submit"]#submitButton').prop('disabled', true);
			$('input[type="submit"]#submitButton').val('SENDING ...');

			if(validGuest) {

				validGuest.numberAttending = $('input[name=guest]:checked', '#guest-radio').val();
			validGuest.attendCeremony = $('#wedding-ceremony').is(':checked');
			validGuest.attendReception = $('#wedding-party').is(':checked');
			validGuest.message = $('#inputmessage')[0].value;
			validGuest.guestName = `${validGuest.firstName} ${validGuest.lastName}`.replace('&', 'and');

			if(validGuest.numberAttending === undefined){

				Swal.fire({
					position: 'top-end',
					icon: 'error',
					title: 'Please select how many people are attending!',
					showConfirmButton: false,
					timer: 2500,
					timerProgressBar: true
				  })

			} else if(!validGuest.attendCeremony && !validGuest.attendReception) {
				Swal.fire({
					title: '<h1>Verify RSVP</h1>',
					html: '<p>We noticed that you are unable to attend the ceremony or reception. Are you sure you wish to submit your RSVP this way?</p>',
					icon: 'warning',
					confirmButtonText: '<span style="font-size: 15px"><i class="far fa-frown"></i> Respectfully Decline</span>',
					showCancelButton: true,
					cancelButtonText: '<span style="font-size: 15px"><i class="far fa-edit"></i> Edit RSVP</span>',
					customClass: {
						confirmButton: 'btn btn-danger',
						cancelButton: 'btn btn-warning'
					  },
					  buttonsStyling: false,
					width: '50%'
				  }).then((result) => {
					  if(result.isConfirmed) {
						  sendRsvpToEmail(validGuest);
					  }
				  });

			} else {
				sendRsvpToEmail(validGuest);
			}
						

			} else {
				Swal.fire({
					title: '<h1>Invalid RSVP Code!</h1>',
					html: '<p>Please verify that the RSVP code you entered matches what was sent on your invitation. If you continue to have issues, contact Rachel/Andrew or respond via the physical invitation.</p>',
					icon: 'error',
					confirmButtonText: 'OK',
					width: '50%'
				  });
			}

			//ENABLE SUBMIT BUTTON
			$('input[type="submit"]#submitButton').prop('disabled', false);
			$('input[type="submit"]#submitButton').val(submit_value);	
			
			
		});
		
		
		
		
		
   	 	/*return this.each(function(){
		});*/
	};

}( jQuery ));


function resetGuestsView(){
	var index;
	for(index = 1; index <= 7; index++) {
		let guestElem = $(`input[type="radio"]#${index}`);
		guestElem.parent().show();
	}
}

function sendRsvpToEmail(rsvpDetails) {
	console.log('Guest info to email', rsvpDetails);

		 
	emailjs.send('gmail2', 'template_iy17sbf', rsvpDetails)
		.then(function(response) {
		   console.log('SUCCESS!', response.status, response.text);
		   Swal.fire({
			position: 'top-end',
			icon: 'success',
			title: 'Your RSVP has successfully been sent to Rachel and Andrew!',
			showConfirmButton: false,
			timer: 4500,
			timerProgressBar: true
		  });
		  
		}, function(error) {
		   console.log('FAILED...', error);
		   Swal.fire({
			title: '<h1>Uh Oh!</h1>',
			html: '<p>We were unable to send your RSVP to Rachel and Andrew. Please try again. If the problem persists, please contact Rachel and Andrew or respond back via your physical invitation!</p>',
			icon: 'error',
			confirmButtonText: 'OK',
			width: '50%',
			footer: `<span>Additional Error Info: ${error.text}</span>`
		  });
		});


	
}