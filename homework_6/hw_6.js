//Первое задание
function Cat(name) {

    var foodAmount = 75;
	
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

    this.dailyNorm = function() {

        console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма.');
    
}

    this.feed = function() {

        return this.dailyNorm();

};

}

var barsik = new Cat('Барсик');

barsik.feed();

barsik.dailyNorm(75);

alert( barsik.dailyNorm() );

// Второе и третье задание

function Animal(name) {

	var foodAmount = 75;
	
	var self = this;

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
        
        this.dailyNorm = function() {
        
            console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма.');
            
}
        
        this.feed = function() {
        
            return this.dailyNorm();
        
};

}

function Cat(name) {
        
    Animal.apply(this, arguments);
        
    var self = this
            
    var animalFeed = this.feed;
        
    this.feed = function() {
        
        animalFeed();
        
        this.feedNew();
        
        return this;
        
}
        
    this.feedNew = function() {
        
        console.log('Кот доволен  ^_^');
        
        return this;
        
}
        
    this.stroke = function() {
        
        console.log('Гладим кота'); 
        
}
}      
     
var barsik = new Cat('Барсик');
        
barsik.feed().stroke();