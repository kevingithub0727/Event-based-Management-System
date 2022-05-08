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

function showPhoto (photo) {
    let elem = $(`<li><span class="text">${photo.imageTitle + " " + photo.date + " " + photo.month + " " + photo.owner}</span><br></br><img src= "${'./images/' + photo.imageName}" width= "200px" height= "200px"></li>`)
    $('#photo-list').prepend(elem);
    elem.data('id', photo._id)
}

function showPhoto2 (photo) {
    let elem2 = $(`<li><span class="text">${photo.imageTitle + " " + photo.date + " " + photo.month + " " + photo.owner}</span><br></br><img src= "${'./images/' + photo.imageName}" width= "200px" height= "200px"></li>`)
    $('#photo-list2').prepend(elem2);
    elem2.data('id', photo._id)
}

function showPhoto3 (photo) {
    let elem3 = $(`<li><span class="text">${photo.imageTitle + " " + photo.date + " " + photo.month + " " + photo.owner}</span><br></br><img src= "${'./images/' + photo.imageName}" width= "200px" height= "200px"></li>`)
    $('#photo-list3').prepend(elem3);
    elem3.data('id', photo._id)
}
