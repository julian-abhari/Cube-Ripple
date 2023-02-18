let angle = 0;
let isometricAngle;
var sphere;

function setup() {
	createCanvas(1000, 1000, WEBGL);
	isometricAngle = atan(1 / sqrt(2));
	sphere = new Sphere(0, 1000, 0, 1000);
}

function draw() {
	background(0);
	ortho(-1000, 1000, 1000, -1000, -2000, 1000);

	rotateX(isometricAngle);
	rotateY(-PI / 4);
	sphere.show(angle);
	angle -= 0.08;
}
