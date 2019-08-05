console.log('\'Allo \'Allo!');

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });

// $('a[href*="#"]').on('click', function(e) {
//   e.preventDefault()

//   $('html, body').animate(
//     {
//       scrollTop: $($(this).attr('href')).offset().top,
//     },
//     500,
//     'linear'
//   )
// })



  // var waypoints = $('#step-1').waypoint(function(direction) {
  //   // console.log(this.element.id + ' hit 25% from top of window' + direction) 
  //   if (direction == 'up') {
  //     console.log('up');
  //     $('#progress-container').removeClass('stuck');
  //   }
  //   else {
  //     console.log('down');
  //     $('#progress-container').addClass('stuck');
  //   }
  // }, {
  //   offset: '-50'
  // })





// $('#trigger-2').on('click', function() {
//   $(this).hide();
//   $('#step-2').fadeIn(); 
//   $('.step').removeClass('active');
  
//   $('html, body').animate({scrollTop: $('#step-2').offset().top -65 }, 500, 'linear');          
//   $('#step-2').addClass('active');
// });
 
$('#emailInput').on('change', function() {
  // regular expression to test if valid email
  var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
  var inputEmail = $('#emailInput').val();
  
  // checks to see if value from email input passes as a valid email
  if (testEmail.test(inputEmail)) {
    // if email is valid this will check to see if it contains certain restricted words
    var blacklist = [
      'abuse',
      'admin',
      'all',
      'billing',
      'customerservice',
      'delete',
      'everyone',
      'feedback',
      'ftp',
      'help',
      'hostmaster',
      'info',
      'inquiries',
      'investorrelations',
      'ispfeedback',
      'ispsupport',
      'jobs',
      'junk',
      'junkmail',
      'list',
      'list-request',
      'login',
      'logon',
      'mailer-daemon',
      'marketing',
      'news',
      'nobody',
      'noc',
      'nospam',
      'orders',
      'postmaster',
      'remove',
      'sales',
      'security',
      'show',
      'shows',
      'spam',
      'subscribe',
      'support',
      'tech',
      'tradeshow',
      'tradeshows',
      'trouble',
      'tspamorders',
      'undisclosed-recipients',
      'unsubscribe',
      'usenet',
      'webmaster'
    ];


    var nameMatch = inputEmail.match(/^([^@]*)@/);
    var name = nameMatch ? nameMatch[1] : null;
    if(blacklist.indexOf(name)>=0) {
      // trigger for restricted words popup to show
      console.log('email contains restricted words');
      $('#email-feedback').hide();
      $('#email-match-feedback').show();
      $('#emailInput').addClass('is-invalid');
      
    }
    else {
      // trigger for success and move to next section of form
      console.log('email validation has passed'); 
      $('#emailInput').removeClass('is-invalid');
      $('#email-match-feedback').hide();
      $('#email-feedback').hide();      
    }
  }
  // trigger for invalid email
  else {
    console.log('invalid email')
    $('#email-match-feedback').hide();
    $('#email-feedback').show();
    $('#emailInput').addClass('is-invalid');
    
  }
});



$('#trigger-3').on('click', function() {
  // regular expression to test if valid email
  var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
  var inputEmail = $('#emailInput').val();


  var contactFirstName = $('#firstNameInput').val();
  if (contactFirstName.length < 1) {
    $('#firstName-feedback').show();
    $('#firstNameInput').addClass('is-invalid');
  } else {
    $('#firstName-feedback').hide();
    $('#firstNameInput').removeClass('is-invalid');
  }

  var contactLastName = $('#lastNameInput').val();
  if (contactLastName.length < 1) {
    $('#lastName-feedback').show();
    $('#lastNameInput').addClass('is-invalid');
  } else {
    $('#lastName-feedback').hide();
    $('#lastNameInput').removeClass('is-invalid');
  }

  var contactBusinessAddress = $('#businessAddressInput').val();
  if (contactBusinessAddress.length < 1) {
    $('#businessAddress-feedback').show();
    $('#businessAddressInput').addClass('is-invalid');
  } else {
    $('#businessAddress-feedback').hide();
    $('#businessAddressInput').removeClass('is-invalid');
  }

  var contactCity = $('#cityInput').val();
  if (contactCity.length < 1) {
    $('#city-feedback').show();
    $('#cityInput').addClass('is-invalid');
  } else {
    $('#city-feedback').hide();
    $('#cityInput').removeClass('is-invalid');
  }  

  var contactState = $('#stateInput').val();
  if (contactState === null) {
    $('#state-feedback').show();
    $('#stateInput').addClass('is-invalid');
  } else {
    $('#state-feedback').hide();
    $('#stateInput').removeClass('is-invalid');
  }    

  var contactCountry = $('#countryInput').val();
  if (contactCountry === null) {
    $('#country-feedback').show();
    $('#countryInput').addClass('is-invalid');
  } else {
    $('#country-feedback').hide();
    $('#countryInput').removeClass('is-invalid');
  }     


  var contactZip = $('#zipInput').val();
  if (contactZip.length < 1) {
    $('#zip-feedback').show();
    $('#zipInput').addClass('is-invalid');
  } else {
    $('#zip-feedback').hide();
    $('#zipInput').removeClass('is-invalid');
  }  
   

  var contactPhone = $('#phoneInput').val();
  if (contactPhone.length < 1) {
    $('#phone-feedback').show();
    $('#phoneInput').addClass('is-invalid');
  } else {
    $('#phone-feedback').hide();
    $('#phoneInput').removeClass('is-invalid');
  }  

  
  // checks to see if value from email input passes as a valid email
  if (testEmail.test(inputEmail)) {
    // if email is valid this will check to see if it contains certain restricted words
    var blacklist = [
      'abuse',
      'admin',
      'all',
      'billing',
      'customerservice',
      'delete',
      'everyone',
      'feedback',
      'ftp',
      'help',
      'hostmaster',
      'info',
      'inquiries',
      'investorrelations',
      'ispfeedback',
      'ispsupport',
      'jobs',
      'junk',
      'junkmail',
      'list',
      'list-request',
      'login',
      'logon',
      'mailer-daemon',
      'marketing',
      'news',
      'nobody',
      'noc',
      'nospam',
      'orders',
      'postmaster',
      'remove',
      'sales',
      'security',
      'show',
      'shows',
      'spam',
      'subscribe',
      'support',
      'tech',
      'tradeshow',
      'tradeshows',
      'trouble',
      'tspamorders',
      'undisclosed-recipients',
      'unsubscribe',
      'usenet',
      'webmaster'
    ];


    
    

    var nameMatch = inputEmail.match(/^([^@]*)@/);
    var name = nameMatch ? nameMatch[1] : null;
    if(blacklist.indexOf(name)>=0) {
      // trigger for restricted words popup to show
      console.log('email contains restricted words');
      $('#email-feedback').hide();
      $('#email-match-feedback').show();
      $('#emailInput').addClass('is-invalid');

    }
    else {
      // trigger for success and move to next section of form

      if(contactFirstName.length && contactLastName.length && contactBusinessAddress.length && contactCity.length && contactState != null && contactCountry != null && contactZip.length && contactPhone.length)  {
      console.log('email validation has passed'); 
      $('#emailInput').removeClass('is-invalid');
      $('#email-match-feedback').hide();
      $('#email-feedback').hide();      
      $(this).hide();
      $('#step-3').fadeIn();        
      $('.step').removeClass('active');
      
      $('#progress-2').addClass('active');
      $('#car-2').addClass('active');
      $('#line-2').addClass('active');
      $('html, body').animate({scrollTop: $('#step-3').offset().top -65 }, 500, 'linear');           
      $('#step-3').addClass('active');
      }      
    }
  }
  // trigger for invalid email
  else {
    console.log('invalid email')
    $('#email-match-feedback').hide();
    $('#email-feedback').show();
    $('#emailInput').addClass('is-invalid');

  }
});

$('#trigger-4').on('click', function() {
  var businessChecked = $('.business-check[type=checkbox]:checked').length;
  console.log('section 3');
  if(!businessChecked) {
    console.log('You must check at least one checkbox.');
    $('#business-feedback').show();
    return false;
  } 
  else {
    $('#business-feedback').hide();
    $(this).hide();
    $('#step-4').fadeIn();
    $('.step').removeClass('active');
    $('#progress-3').addClass('active');
    $('#car-3').addClass('active');
    $('#line-3').addClass('active');
    $('html, body').animate({scrollTop: $('#step-4').offset().top -65 }, 500, 'linear');      
    $('#step-4').addClass('active');
  }

});

$('#trigger-5').on('click', function() {
  console.log('section 4');
  var jobChecked = $('.job-check[type=radio]:checked').length;
  var salesChecked = $('.sales-check[type=radio]:checked').length;
  var foreign = $('#countryInput').val();

  console.log(foreign);

  if((foreign) == "USA") {
    console.log('Customer is from USA');
    $('#usa-issue').show();
    $('#foreign-issue').hide();
    $('.payment-info').show();
  }  
  else {
    $('#foreign-issue').show();
    $('#usa-issue').hide();
    $('.payment-info').hide();
  }

  if(!jobChecked) {
    console.log('You must check at least one checkbox.');
    $('#job-feedback').show();
  }  
  else {
    $('#job-feedback').hide();
  }

  if(!salesChecked) {
    console.log('You must check at least one checkbox.');
    $('#sales-feedback').show();
  }
  else {
    $('#sales-feedback').hide();
  }

    if(salesChecked && jobChecked) {
      $(this).hide();
      $('#step-5').fadeIn();   
      $('.step').removeClass('active');
      
      $('#progress-4').addClass('active');
      $('#car-4').addClass('active');
      $('#line-4').addClass('active');
      $('html, body').animate({scrollTop: $('#step-5').offset().top -65 }, 500, 'linear');        
      $('#step-5').addClass('active');
  }


  
    

});

$('#trigger-6').on('click', function() {

  var contactFirstName = $('#firstNameInput').val();
  if (contactFirstName.length < 1) {
    $('#firstName-feedback').show();
    $('#firstNameInput').addClass('is-invalid');
  } else {
    $('#firstName-feedback').hide();
    $('#firstNameInput').removeClass('is-invalid');
  }

  var contactLastName = $('#lastNameInput').val();
  if (contactLastName.length < 1) {
    $('#lastName-feedback').show();
    $('#lastNameInput').addClass('is-invalid');
  } else {
    $('#lastName-feedback').hide();
    $('#lastNameInput').removeClass('is-invalid');
  }

  var contactBusinessAddress = $('#businessAddressInput').val();
  if (contactBusinessAddress.length < 1) {
    $('#businessAddress-feedback').show();
    $('#businessAddressInput').addClass('is-invalid');
  } else {
    $('#businessAddress-feedback').hide();
    $('#businessAddressInput').removeClass('is-invalid');
  }

  var contactCity = $('#cityInput').val();
  if (contactCity.length < 1) {
    $('#city-feedback').show();
    $('#cityInput').addClass('is-invalid');
  } else {
    $('#city-feedback').hide();
    $('#cityInput').removeClass('is-invalid');
  }  

  var contactState = $('#stateInput').val();
  if (contactState === null) {
    $('#state-feedback').show();
    $('#stateInput').addClass('is-invalid');
  } else {
    $('#state-feedback').hide();
    $('#stateInput').removeClass('is-invalid');
  }    

  var contactCountry = $('#countryInput').val();
  if (contactCountry === null) {
    $('#country-feedback').show();
    $('#countryInput').addClass('is-invalid');
  } else {
    $('#country-feedback').hide();
    $('#countryInput').removeClass('is-invalid');
  }     


  var contactZip = $('#zipInput').val();
  if (contactZip.length < 1) {
    $('#zip-feedback').show();
    $('#zipInput').addClass('is-invalid');
  } else {
    $('#zip-feedback').hide();
    $('#zipInput').removeClass('is-invalid');
  }  
   

  var contactPhone = $('#phoneInput').val();
  if (contactPhone.length < 1) {
    $('#phone-feedback').show();
    $('#phoneInput').addClass('is-invalid');
  } else {
    $('#phone-feedback').hide();
    $('#phoneInput').removeClass('is-invalid');
  }     

  if(contactFirstName.length && contactLastName.length && contactBusinessAddress.length && contactCity.length && contactState != null && contactCountry != null && contactZip.length && contactPhone.length)  {

    $(this).hide();
    $('#step-6').fadeIn();
    $('.step').removeClass('active');
    $('#progress-5').addClass('active');
    $('#car-5').addClass('active');
    $('#line-5').addClass('active');
    $('html, body').animate({scrollTop: $('#step-6').offset().top -65 }, 500, 'linear');           
    $('#step-6').addClass('active');
  }
});

$('select#countryInput').on('change', function () {
  if ($(this).val() != 'USA') {
    $('.consent').show();
  } else {
    $('.consent').hide();
  }
});



$('#trigger-7').on('click', function() {
  var tcChecked = $('#tcCheck[type=checkbox]:checked').length;

  if(!tcChecked) {
    console.log('You must check at least one checkbox.');
    $('#submit-feedback').show();
    return false;
  }   
  else {
    $('#submit-feedback').hide();
    alert('all validation has passed')
  }
});