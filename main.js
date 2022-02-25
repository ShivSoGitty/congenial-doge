Webcam.set({
    width:350,
    height:275,
    image_format: 'png',
    png_quality:90
});

camera = document.getElementById("camera");

webcam.attach('#camera');

function takephoto(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="pi" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}