const video = document.getElementById("video");

// Promise.add([
//     faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
// ])

function startVideo() {
    navigator.getUserMedia({ video: {} },
        stream => (video.srcObject = stream),
        err => console.log(err)
    );
}

startVideo();