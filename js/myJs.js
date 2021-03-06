(function() {
	

  $(document).ready(function() {   
    section = $('.section');
    mywindow = $(window);
    var mainbottom = $('#header-menu').offset().top + $('#header-menu').height(); 
    //Set up for waypoints navigation
    section.waypoint( function (direction) {
      element = $(this).attr("element")
      //cache the variable of the data-section attribute associated with each section
      nosection = $(element).attr('data-nosection');
      if (direction === 'down') {
          $('.navigation li[data-nosection="' + nosection + '"]').addClass('active').prev().removeClass('active');
      }

    }, {  offset: "25%"});

    section.waypoint( function (direction) {
      element = $(this).attr("element")
      //cache the variable of the data-section attribute associated with each section
      nosection = $(element).attr('data-nosection');
      if (direction === 'up') {
          $('.navigation li[data-nosection="' + nosection + '"]').addClass('active').next().removeClass('active');
      }

    }, {  offset: -50});

    mywindow.scroll(function () {
      if (mywindow.scrollTop() == 0) {
        $('.navigation li[data-nosection="1"]').addClass('active');
        $('.navigation li[data-nosection="2"]').removeClass('active');
      }
      stop = Math.round($(window).scrollTop());
      var $this = $('.navbar');
      if(stop > mainbottom){
        if ($this.hasClass('navbar-default')) {
          $this.removeClass('navbar-default');
          $('.navbar').addClass('navbar-inverse');
        }
      }
      else 
      {
       if ($this.hasClass('navbar-inverse')) {
          $this.removeClass('navbar-inverse');
          $('.navbar').addClass('navbar-default');
        }
      } 
    });

    mywindow.resize(function() {
      if(mywindow.width() < 990)
      {
        $('.content').removeClass('border-bottom');
        $('.date-content').addClass('border-bottom');
      }
      else
      {
        $('.content').addClass('border-bottom');
        $('.date-content').removeClass('border-bottom');        
      }
    });

    $('.navbar li').click(function(e) {
        $('.navbar li.active').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        e.preventDefault();
        $.scrollTo(
          $('.navbar li.active a').attr("href"),
          {
            duration: 1000,
          }
        );
    });

    $('.navbar li').click(function(e) {
        $('.navbar li.active').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        e.preventDefault();
        $.scrollTo(
          $('.navbar li.active a').attr("href"),
          {
            duration: 1000,
          }
        );
    });

    $('button[type="submit"]').click(function(e) {
        e.preventDefault();
    });
    
    function initialize() {
      var myLatlng = new google.maps.LatLng(45.379202,-71.928917);
      var mapOptions = {
        center: myLatlng,
        zoom: 8
      };
      var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Usherbrooke!'})
      }
    google.maps.event.addDomListener(window, 'load', initialize);

  });
}());
