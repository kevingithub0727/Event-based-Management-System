$(document).ready(async function(){
    $('#inputField').focus();

    $('#inputForm').on('submit', function(e){
        e.preventDefault();    
        showPhotos();
    })
    $('#inputForm2').on('submit', function(e){
        e.preventDefault();    
        showPhotos2();
    })
    $('#inputForm3').on('submit', function(e){
        e.preventDefault();    
        showPhotos3();
    })
    $('#inputForm4').on('submit', function(e){
        e.preventDefault();    
        showPhotos4();
    })
 
    
})

async function showPhotos () {
    let inputFieldValue = $('#inputField').val()
    const photos = await $.post('/photos/imageTitle', {inputField: inputFieldValue})
    for(let item of photos) {
        showPhoto(item)
    }
}

async function showPhotos2 () {
    let inputFieldValue2 = $('#inputField2').val()
    const photos = await $.post('/photos/month', {inputField2: inputFieldValue2})
    for(let item of photos) {
        showPhoto2(item)
    }
}
async function showPhotos3 () {
    let inputFieldValue3 = $('#inputField3').val()
    const photos = await $.post('/photos/owner', {inputField3: inputFieldValue3})
    for(let item of photos) {
        showPhoto3(item)
    }
}
async function showPhotos4 () {
    let inputFieldValue4 = $('#inputField4').val()
    const photos = await $.post('/photos/location', {inputField4: inputFieldValue4})
    for(let item of photos) {
        showPhoto4(item)
    }
}


function showPhoto (photo) {
    let elem = $(`<li><span class="text">${photo.imageTitle + " " + photo.date + " " + photo.month + " " + photo.owner + " in " + photo.location}</span><br></br><img src= "${'./images/' + photo.imageName}" width= "200px" height= "200px"></li>`)
    $('#photo-list').prepend(elem);
    elem.data('id', photo._id)
}

function showPhoto2 (photo) {
    let elem2 = $(`<li><span class="text">${photo.imageTitle + " " + photo.date + " " + photo.month + " " + photo.owner + " in " + photo.location}</span><br></br><img src= "${'./images/' + photo.imageName}" width= "200px" height= "200px"></li>`)
    $('#photo-list2').prepend(elem2);
    elem2.data('id', photo._id)
}

function showPhoto3 (photo) {
    let elem3 = $(`<li><span class="text">${photo.imageTitle + " " + photo.date + " " + photo.month + " " + photo.owner + " in " + photo.location}</span><br></br><img src= "${'./images/' + photo.imageName}" width= "200px" height= "200px"></li>`)
    $('#photo-list3').prepend(elem3);
    elem3.data('id', photo._id)
}

function showPhoto4 (photo) {
    let elem4 = $(`<li><span class="text">${photo.imageTitle + " " + photo.date + " " + photo.month + " " + photo.owner + " in " + photo.location}</span><br></br><img src= "${'./images/' + photo.imageName}" width= "200px" height= "200px"></li>`)
    $('#photo-list4').prepend(elem4);
    elem4.data('id', photo._id)
}

// Initialize and add the map
function initMap() {
    // The location of San Francisco
    const sf = { lat: 37.791350, lng: -122.435883 };
    // The map, centered at San Francisco
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: sf,
    });
    // The marker, positioned at San Francisco
    const marker = new google.maps.Marker({
      position: sf,
      map: map,
    });
  }
  
  window.initMap = initMap;