const jsonData = require('./data.json');

let result;

function listOfFood(data){
    let result = jsonData.map((item) => {
        return item.foodname;
    });
    return result;
}

function listOfCategory(data, category){
     const result = [];
	 data.forEach((item) => {
	 	if (item.category === category && item.foodname) {
	 		result.push(item.foodname);
	 	}
	 });
	 return result;
}

function listOfCategorylessThanGivenCalorie(data, calorie){
    const result = [];
    data.filter((item) =>{
    if(item.calorie < calorie){
    result.push(item.calorie);
}
})
    return result;
}

function listOfCategorymoreThanGivenCalorie(data, calorie){
    const result = [];
    data.filter((item) =>{
        if (item.calorie > calorie){
            result.push(item.calorie);
        }
    })
        return result;
}

function HighestoLowestProtein(data){
    data.sort((a, b) => b.protiens - a.protiens);
         return data;
}

result = listOfFood(jsonData);
console.log("all food items", result);
console.log("-----******-----")

const jsonData = require('./data.json');


function HighestoLowestCab(data){
   for(let i = 0; i<data.length; i++){
    for(let j=0; j< data.length-1-i; j++){
        if(data[j].cab > data[j+1].cab){
            let temp = data[j];
            data[j] = data[j+1];
            data[j+1] = temp;
        }
    }
   }
   return data;
}


result = listOfCategory(jsonData, 'Vegetable');
console.log("All Vegetable items", result);
console.log("-----******-----")


result = listOfCategory(jsonData, "Fruit");
console.log("All fruit data", result);
console.log("-----******-----")


result = listOfCategory(jsonData, "Protein");
console.log("All Protein data", result);
console.log("-----******-----")


result = listOfCategory(jsonData, "Grain");
console.log("All Grain data", result);
console.log("-----******-----")


result = listOfCategory(jsonData, "Dairy");
console.log("All Dairy data", result);
console.log("-----******-----")


result = listOfCategory(jsonData, "Nuts");
console.log("All Nuts data", result);
console.log("-----******-----")


result = listOfCategorylessThanGivenCalorie(jsonData, 100);
console.log("less calorie", result);
console.log("-----******-----")


result = listOfCategorymoreThanGivenCalorie(jsonData, 100);
console.log("More calorie", result);
console.log("-----******-----")


result = HighestoLowestProtein(jsonData);
console.log("Highest to lowest Protein", result);
console.log("-----******-----")


result = HighestoLowestCab(jsonData);
console.log("Lowest to highest Protein", result);