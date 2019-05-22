// Write your code here
//class Breakfast with food and drink
class Breakfast{
  constructor(food, drink){
    this.food = food;
    this.drink = drink;
  }
}
//class Lunch with salad, soup, drink
class Lunch{
  constructor(salad, soup, drink){
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}
//class Dinner with salad, soup, entree, private dessert
class Dinner{
  constructor(salad, soup, entree, dessert){
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this._dessert = dessert;
  }
}
