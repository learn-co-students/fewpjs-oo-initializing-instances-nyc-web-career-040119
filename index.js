// Write your code here
class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

new Breakfast('egg', 'juice')

class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink
  }
}
new Lunch('side salad', 'broccoli cheddar', 'iced tea')

class Dinner {
  constructor(salad, soup, entree, _dessert){
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this._dessert = _dessert;
  }
}

new Dinner('balsamic salad', 'consomme', 'filet mignon', 'cheesecake')
