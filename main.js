Webcam.set({
    width:300,
    height:250,
    image_format:'png',
    png_quality:99
});
Camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML="<img id='capture_image' src="+data_uri+">";
    });

}
console.log("ml5 version",ml5.version);
classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/YzToh8Dev/model.json',modelLoaded)
function modelLoaded(){
    console.log("model loaded")
}
function check(){
    img = document.getElementById("capture_image");
    classifier.classify(img,GotResult)
}

function GotResult(error,result ) {
    if(error){
        console.error(error);
    }

    else{
        console.log(result);
        Accuracy=result[0].confidence*100
        document.getElementById("result_object_name").innerHTML=result[0].label;
        document.getElementById("result_object_accuracy").innerHTML=Accuracy.toFixed(2)+" %";

    }
}