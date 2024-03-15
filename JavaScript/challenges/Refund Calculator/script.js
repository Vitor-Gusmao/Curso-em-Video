function buy() {
    var product = prompt("What product you are buying ?")
    var price = prompt("How much does it cost the " + product + " that you are buying ?")
    price = parseFloat(price).toFixed(2)
    var money = prompt("How much money did you give for buy the " + product + "?")
    money = parseFloat(money).toFixed(2)
    alert("You bought the " + product + " that costs $" + price + ".\n Gave $" + money + " in cash and gonna receive $" + (money - price).toFixed(2) + " in change" + ".\nSee you Later!")
}