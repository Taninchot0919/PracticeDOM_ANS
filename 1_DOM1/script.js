let menu = document.querySelector('.menu');
let appetizer = document.getElementById('appetizer');
let soup = document.getElementById('soup');
// console.log(menu);
// console.log(appetizer);
// console.log(soup);

//1.1 show the first menu of appetizer
console.log('ข้อ 1.1')
console.log(appetizer.firstElementChild.innerHTML)

//1.2 show a second menu item  of soup menu
console.log('ข้อ 1.2')
console.log(soup.firstElementChild.nextElementSibling.innerHTML)

//1.3 show all menus of vegan class
console.log('ข้อ 1.3')
let veganClass = document.getElementsByClassName('vegan');
// console.log(veganClass);
for (let i = 0; i < veganClass.length; i++) {
    console.log(i + ' ' + veganClass[i].innerHTML);
}

//1.4 insert a new list item "<li class="seafood">Shrimp Rolls</li>" to the end of appetizer menu
console.log('ข้อ 1.4')
//ให้ใช้ var ได้เนื่องจากข้ออื่นต่อจากนี้ก็ใช้ เลยให้ใช้ๆเลย จะได้ไม่งง
var li = document.createElement('li');
li.innerHTML = 'Shrimp Rolls';
li.setAttribute('class', 'seafood')
appetizer.insertBefore(li, null);

//1.5 change a classname of Tuna Sandwich to "seafood"
console.log('ข้อ 1.5')
let appetizerIndex = appetizer.firstElementChild;
for (let i = 0; i < appetizer.childElementCount; i++) {
    if (appetizerIndex.innerHTML == 'Tuna Sandwich') {
        appetizerIndex.setAttribute('class', 'seafood');
        break;
    }
    appetizerIndex = appetizerIndex.nextElementSibling;
}

//1.6 insert a new list item "<li class="seafood">Shrimp-Corn Soup></li> before <li class="meat">Beef Soup</li>
console.log('ข้อ 1.6')
var li = document.createElement('li');
li.innerHTML = 'Shrimp-Corn Soup';
li.setAttribute('class', 'seafood');
// ทางเลือก 1 ใช้ class เพราะเขากำหนดว่าต้องก่อน Beef Soup ซึ่ง Beef Soup มี class meat
var meatClass = document.getElementsByClassName('meat');
// console.log(meatClass);
for (let i = 0; i < meatClass.length; i++) {
    // console.log(meatClass[i].innerHTML);
    if (meatClass[i].innerHTML == 'Beef Soup') {
        soup.insertBefore(li, meatClass[i]);
        break;
    }
}
// ทางเลือก 2 ใช้วนใน soup เพราะ Beef Soup เป็นลูกของ Soup
// let soupIndex = soup.firstElementChild;
// console.log(soupIndex.innerHTML);
// for (let i = 0; i < soup.childElementCount; i++) {
//     if (soupIndex.innerHTML == 'Beef Soup') {
//         soup.insertBefore(li, soupIndex);
//         break;
//     }
//     soupIndex = soupIndex.nextElementSibling;
// }

//1.7 show the menu category [Appetizer|Soup] of a list item <li class="meat">Beef Soup</li>
console.log('ข้อ 1.7')
// ทางเลือกที่ 1 เนื่องจาก Beef Soup อยู่ใน soup เราก็หาใน soup เลย
// var soupIndex = soup.firstElementChild;
// for(let i = 0 ;i<soup.childElementCount;i++){
//     if(soupIndex.innerHTML=='Beef Soup'){
//         soupIndex.innerHTML = 'Beef Soup'+' [ Soup ]'
//         break;
//     }
//     soupIndex = soupIndex.nextElementSibling;
// }
//ทางเลือกที่ 2 เนื่องจากอยากให้เป็นโปรแกรมที่ดีเราต้องทำให้มันรองรับทั้ง Appetizer และ Soup และ Beef Soup อยู่ใน class Meat เลยต้องใช้ให้เป็นประโยชน์
// var meatClass = document.getElementsByClassName('meat');
// for (let i = 0; i < meatClass.length; i++) {
//     // console.log(meatClass[i].innerHTML);
//     if (meatClass[i].innerHTML == 'Beef Soup') {
//         meatClass[i].innerHTML = 'Beef Soup' + ' [ ' +meatClass[i].parentElement.id+' ] '
//         break;
//     }
// }

//1.8 remove a menu item <li class="meat">Beef Soup</li>
console.log('ข้อ 1.8 จะรันข้อ 8 ต้อง // 1.7 ก่อน')
var soupIndex = soup.firstElementChild;
for(let i = 0 ;i<soup.childElementCount;i++){
    if(soupIndex.innerHTML=='Beef Soup'){
        soup.removeChild(soupIndex);
        break;
    }
    soupIndex = soupIndex.nextElementSibling
}