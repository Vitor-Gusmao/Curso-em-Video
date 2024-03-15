function start() {
    var number = prompt("Type any integer number")
    number = parseInt(number); 
    alert("Before " + number + ", we have the number " + (number - 1) + ".\nAfter " + number + ", we have the number " + (number + 1) + ".")
}