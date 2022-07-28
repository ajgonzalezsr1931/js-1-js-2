const totalBasketballScore = (freeThrows, midRange, threePointers) => 
    typeof freeThrows == 'number' && typeof midRange == 'number' && typeof threePointers == 'number' ? 
    ((freeThrows)+(midRange*2)+(threePointers*3))  : 'You must enter numbers only!';



const itemPrice = item => {
    let price=0;
        if (typeof item != 'string'){
            return 'All entries must be a string';
        }else{
            item = item.toLowerCase();
            switch (item) {
                case 'computer':
                    price += 500;
                    break;
                case 'mouse':
                    price += 10;
                    break;
                case 'tablet':
                    price += 250;
                    break;
                case 'case':
                    price += 25;
                    break;
                case 'router':
                    price += 100;
                    break;
                default:
                    return `${item} is not in the store.`
                    break;
            }
        }        
     return (`$${price}`);

}

const restaurants =['Applebees', 'Panera Bread', 'Popeyes', 'Chopt', 'Chick-fil-A', 'Cheesecake Factory', 'Five Guys'];
const randomRestaurant = numOfRestaurants => {
    let randomRestaurantList=[];
    if (typeof numOfRestaurants == 'number') {
         for (let index = 0; index < numOfRestaurants; index++) {
        randomRestaurantList.push(restaurants[Math.floor(Math.random()*7)]);       
        } 
    }else {
        return 'You must enter a number.'
    };
    return randomRestaurantList;
}

const isLeapYear = year => {
    if (year %100 ==0){
        if(year%400 ==0){
            return true
        }else {
            return false
        }
    }else {
        if (year%4 ==0){
            return true
        }
    }
}

