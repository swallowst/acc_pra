window.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("devicemotion",(event) => {
    let ax = event.accelerationIncludingGravity.x;
    let ay = event.accelerationIncludingGravity.y;
    let az = event.accelerationIncludingGravity.z;
    let alpha = event.rotationRate.alpha;
    let beta = event.rotationRate.beta;
    let gamma = event.rotationRate.gamma;
    document.querySelector("#ax").innerHTML = ax;
    document.querySelector("#ay").innerHTML = ay;
    document.querySelector("#az").innerHTML = az;
    document.querySelector("#alpha").innerHTML = alpha;
    document.querySelector("#beta").innerHTML = beta;
    document.querySelector("#gamma").innerHTML = gamma;
  });
});
