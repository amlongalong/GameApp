const newRecipe = document.querySelector(".recipeList")
const rcpBox    = document.querySelector(".rcpBox")
const ingr = document.querySelector(".itemList")
const cookBox = document.querySelector(".cookBox")
const tryBtn = document.querySelector(".btn")
const unlockDiv = document.querySelector(".unlockDiv")
const span1 = document.querySelector("#span1")
const counterDisplay = document.querySelector("#counter")

const ingrList = ['Yam', 'Strawberry', 'Apple', 'Grapes', 'Orange', 'Cheese', 'Chocolate', 'Grape', 'Wine','Riceballs', 'Curry Powder', 'Blue Grass', 'Green Grass', 'Red Grass', 'Yellow Grass', 'Orange Grass', 'Purple Grass', 'Indigo Grass', 'Black Grass', 'White Grass', 'Oil', 'Cabbage', 'Flour', 'Egg', 'Potato', 'Onion', 'Corn', 'Milk', 'Eggplant', 'Apple', 'Bread', 'Fish', 'Buckwheat Noodles', 'Cabbage', 'Tomato', 'Butter', 'Pumpkin', 'Fish', 'Spinach', 'Noodles', 'Buckwheat Flour', 'Carrot', 'Bamboo Shoots', 'Shiitake'];
ingrList.forEach(function (items){
    let itemDiv = document.createElement("div");
    itemDiv.textContent = items;
    itemDiv.classList.add("ingrStyle");
    ingr.append(itemDiv);
    
    itemDiv.addEventListener('click', function (){
        let cln = itemDiv.cloneNode(true);
        cookBox.append(cln);
        clicklist.push(cln.textContent)
    });
});



let rcpGuide = [
    {name:"Hot Milk", ingrs:["Milk"]},
    {name:"Hot Chocolate", ingrs:["Milk","Chocolate"]},
    {name:"Wine Grape", ingrs:["Grape","Wine","Purple Grass"]},
    {name:"Pumpkin Stew", ingrs:["Pumpkin"]},
    {name:"Boiled Spinach", ingrs:["Spinach"]},
    {name:"Boiled Egg", ingrs:["Egg"]},
    {name:"Candied Potato", ingrs:["Yum"]},
    {name:"Dumplings", ingrs:["Cabbage","Onion","Oil","Flour"]},
    {name:"Strawberry Jam", ingrs:["Strawberry"]},
    {name:"Apple Jam", ingrs:["Apple"]},
    {name:"Grape Jam", ingrs:["Grape"]},
    {name:"Marmalade", ingrs:["Orange"]},
    {name:"Cheese Fondue", ingrs:["Cheese","Bread"]},
    {name:"Noodles", ingrs:["Flour"]},
    {name:"Curry Noodles", ingrs:["Noodles","Curry Powder"]},
    {name: "Stir Fry", ingrs:["Oil", "Cabbage",]},
    {name: "Fried Rice", ingrs:["Riceballs", "Oil", "Egg"]},
    {name: "Savory Pancake", ingrs:["Cabbage", "Flour", "Oil", "Egg"]},
    {name: "Frech Fries", ingrs:["Potato", "Oil",]},
    {name: "Croquette", ingrs:["Potato", "Onion", "Egg", "Flour", "Oil"]},
    {name: "Popcorn", ingrs:["Corn",]},
    {name: "Cornflakes", ingrs:["Corn", "Milk",]},
    {name: "Happy Eggplant", ingrs:["Eggplant"]},
    {name: "Scrambled Eggs", ingrs:["Egg", "Oil",]},
    {name: "Omelet", ingrs:["Egg", "Milk", "Oil"]},
    {name: "Omelet Rice", ingrs:["Egg", "Milk", "Oil", "Riceballs", ]},
    {name: "Apple Souffle", ingrs:["Apple"]},
    {name: "Curry Bread", ingrs:["Curry Bread", "Curry Powder",]},
    {name: "French Toast", ingrs:["Egg", "Bread", "Oil"]},
    {name: "Doughnut", ingrs:["Egg", "Milk", "Oil", "Butter", "Flour"]},
    {name: "Grilled Fish", ingrs:["Fish",]},
    {name: "Fried Thick Noodles", ingrs:["Noodles", "Oil",]},
    {name: "Fried Noodles", ingrs:["Buckwheat", "Noodles", "Oil"]},
    {name: "Tempura", ingrs:["Egg", "Oil", "Flour"]},
    {name: "Pancake", ingrs:["Egg", "Milk", "Oil", "Flour"]},
    {name: "Pot Sticker", ingrs:["Cabbage", "Onion", "Flour", "Oil"]},
    {name: "Risotto", ingrs:["Tomato", "Onion", "Riceballs", "Oil"]},
    {name: "Curry Rice", ingrs: ["Riceballs", "Curry Powder"]},
    {name: "Blue Curry", ingrs: ["Riceballs", "Curry Powder", "Blue Grass"]},
    {name: "Green Curry", ingrs: ["Riceballs", "Curry Powder", "Green Grass"]},
    {name: "Red Curry", ingrs: ["Riceballs", "Curry Powder", "Red Grass"]},
    {name: "Yellow Curry", ingrs: ["Riceballs", "Curry Powder","Yellow Grass"]},
    {name: "Orange Curry", ingrs: ["Riceballs", "Curry Powder", "Orange Grass"]},
    {name: "Purple Curry", ingrs: ["Riceballs", "Curry Powder", "Purple Grass"]},
    {name: "Indigo Curry", ingrs: ["Riceballs", "Curry Powder", "Indigo Grass"]},
    {name: "Black Curry", ingrs: ["Riceballs", "Curry Powder", "Black Grass"]},
    {name: "White Curry", ingrs: ["Riceballs", "Curry Powder", "White Grass"]},
];

let rcpcounter = 0;
let unlockRcp = [];
let clicklist   = [];
tryBtn.addEventListener("click", function (){
    rcpGuide.forEach(function (rcp){
            let matched = 0;
            clicklist.forEach(function (click) {
                if(rcp.ingrs.indexOf(click) >= 0){
                    matched++;
                };
            });
            if(matched == clicklist.length && matched ===rcp.ingrs.length)  {
                unlockRcp.push(rcp.name)
            };
        });
        span1.textContent = unlockRcp;
        unlockDiv.style.display = "block";
    });


            // if (rcp === clicklist){
            //         console.log(rcp, clicklist)
            //         clicklist.forEach(function (click){
            //                 if (click.length === rcp.length){
            //                 }
            //             })
            //         }
                
                
    // rcpGuide.forEach(function (guide){
    //     let matched = 0;
    //     clicklist.forEach(function (click){
    //         if (guide.ingrs.indexOf(click) >= 0){
    //             matched++;
    //         };
    //     });
        
    //     if (matched == clicklist.length && matched == guide.ingrs.length){
    //         unlockRcp.push(guide.name)
    //     } else if (!matched){
    //         alert();
    //     }
        
    // })


            span1.textContent = `${unlockRcp}`
            rcpcounter++;
            counterDisplay.textContent = `${rcpcounter} / 100`
            unlockDiv.style.display = "block";
            const againBtn  = document.querySelector(".again")
            againBtn.addEventListener('click', function (){
                cookBox.textContent="";
                unlockDiv.style.display ="none";
                rcpBox.classList.add("unlockedRcp");
                unlockRcp.forEach(function (unlockRcpName){
                    rcpName = document.createElement("div");
                    rcpName.textContent = unlockRcpName;
                    rcpName.style.width = "100%";
                    rcpBox.append(rcpName);
                })
            });
        // });