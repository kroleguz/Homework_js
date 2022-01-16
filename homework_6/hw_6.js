//Первое практическое задание
function Cat(name) {

    var foodAmount = 50;
	
	this.dailyNorm = function(amount) {

        if(!arguments.length) return formatFoodAmount();
        
        if (amount < 50) {
            throw new Error('Мало корма');
    }
        if (amount > 100) {
            throw new Error('Много корма');
    }
	
        foodAmount = amount;
        
}

function formatFoodAmount() {

     return foodAmount + ' гр.';

}

    this.name = name;
	
    this.feed = function() {

        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
    };
}

    var barsik = new Cat('Барсик');

    barsik.feed();

    barsik.dailyNorm(75);

    alert( barsik.dailyNorm() );

//Второе и третье практическое задание

function Animal(name){

	var foodAmount = 50;
	
	var self = this;

function formatFoodAmount() {

    return foodAmount + ' гр.';
}

    this._name = name;

    this.feed = function() {

        console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма.');

        return self;
    };
}

function Cat(name){

	Animal.apply(this, arguments);

    var self = this
	
	var animalFeed = this.feed;

        this.feed = function() {

        animalFeed();

        this.feedNew();

        this.stroke();

    }

        this.feedNew = function() {

        console.log('Кот доволен  ^_^');

        return self;

    }

        this.stroke = function() {

        console.log('Гладим кота'); 

        return self;

        }
}

    var barsik = new Cat('Барсик');

    barsik.feed();