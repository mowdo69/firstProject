//Initializing and add the map
function initMap(){
    //Location
    const location = {lat: -23.593069, lng: -46.689098};
    
    //creating map location 
    const map = new  google.maps.Map(document.querySelector('.map'),
        {
            zoom: 14,
            center: location
        });
    //  maker positioning the location
    const maker = new google.maps.Maker({position: location, map: map});
}

// sticky menu background

window.addEventListener('scroll', function() {
    if (this.window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity = 1; 
    }
});

//Smooth scrolling page with JQuery...
$('#navbar a, .btn').on('click', function(event){
    if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top -100
            }, 800
        );
    }
});