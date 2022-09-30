const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = myArrayMax(points);


function myArrayMax(points) {
    return Math.max.apply(null, points);
}