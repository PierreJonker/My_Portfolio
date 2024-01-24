// Chapter 8 Begining of own car 

let dreamCar = {
make : "Toyota",
model : "Hilux Bakkie",
color : "brown",
year : "2024",
bodyStyle : "Pick up",
price : 4500
};

document.getElementById ("pricetag").innerHTML = dreamCar.price;

document.getElementById("modelyear").innerHTML = dreamCar.year;

document.getElementById("body").innerHTML = dreamCar.color;

document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;


