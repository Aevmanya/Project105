Webcam.set({
width: 350,
height: 350,
image_format: 'png',
png_quality: 90
});
    
camera= document.getElementById("camera").value;
    
Webcam.attach('#camera');
    
function move(){
window.location= "webcam.html";
}


function take_snapshot(){
Webcam.snap(function(data_uri){
    
document.getElementById("image").innerHTML= '<img id="captured_image" src="'+data_uri+'">';
});
};
    
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/nq0JDtL0f/model.json", modelLoaded);
    
function modelLoaded(){
console.log("model loaded");
};
    
function check(){
img = document.getElementById('captured_image');
classifier.classify(img, gotResult);
};
    
function gotResult(error, results){
if(error){
console.error(error);
}
else{
console.log(results);
document.getElementById("result_object_name").innerHTML = results[0].label;
document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
}
};