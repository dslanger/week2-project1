//THE OBJECT OF MY AFFECTION: OBJECTS
//IN CLASS OBJECT EXERCISES

// For any methods that we didn't cover, please refer to the Object Documentation.
// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// If you would like, practice using document.write() as well. Use any elements you like!
// ==========================================================================
//console.log("Question 1");
//console.log(yourAnswer);
// 1. Create an object called "me" that describes you with your name, city, and job title.
console.log("Question 1");
var me = {
  name: 'Dan Slanger',
  city: 'Boulder',
  jobTitle: 'jack of sorts'
}
console.log(me);


// 2. To your "me" object, add a key of "family" with the value being an array of three of your family members.
// Example of desired output: { name: 'Bob Smith',
//                              city: 'Denver',
//                              jobTitle: 'professional wrestler',
//                               family: ['Joan', 'Kyle', 'Hank'] }

console.log("Question 2");
me.family = ['Rob', 'Jim', 'Marie'];
console.log(me);

// 3. Using the "me" object, use two different methods of accessing your city.
console.log("Question 2");
var dotNotation = console.log(me.city);
var bracketNotation = console.log(me['city']);
console.log(dotNotation + '\n' + bracketNotation);


// Use the following Object for questions 4-9:
var invitees = { adults: [{
                          name: "Penny",
                          table: 10,
                          dinnerChoice: ["salad", "beef", "ice cream"]
                        },
                        {
                          name: "Billy",
                          table: 12,
                          dinnerChoice: ["soup", "beef", "sorbet"]
                        },
                        {
                          name: "Lauren",
                          table: 3,
                          dinnerChoice: ["soup", "chicken", "ice cream"],
                          specialConsiderations: { allergies: "melon",
                                                   seating: "Don't sit her next to ex husband at table 8."}
                        }
                        ],
                  children: [{
                             name: "Junior",
                             table: 4,
                             allergies: ["nuts"]
                            },
                            { name: "Pablo",
                            table: 4,
                            allergies: ["gluten", "following directions"]
                            },
                            { name: "Ada",
                            table: 4,
                            allergies: ["boys"]
                            }
                         ]
                      };

// 4. Access Penny's dinner choice (this will be the second item in his dinneChoice array)
console.log("Question 4");
var pennysDinnerChoice = invitees.adults[0].dinnerChoice;
console.log(pennysDinnerChoice);


// 5. Access Pablo's table number.
console.log("Question 5");
var pablosTableNumber = invitees.children[1].table;
console.log(pablosTableNumber);


// 6. Access Lauren's seating specialConsideration.
console.log("Question 6");
var laurensSeatingConsideration = invitees.adults[2].specialConsiderations.seating;
console.log(laurensSeatingConsideration);


// 7. Access Billy's dessert choice (this will be the third item in his dinneChoice array)
console.log("Question 7");
var billysDessert = invitees.adults[1].dinnerChoice[2];
console.log(billysDessert);


// 8. Access Ada's allergies.
console.log("Question 8");
var adasAllergies = invitees.children[2].allergies;
console.log(adasAllergies);


// 9. Create a string that reads Lauren's dinner choice in a sentence.
// Desired result: "Lauren's appetizer is _______. She will be eating ______ for dinner
// and has selected ________ as her dessert."
console.log("Question 9");
var appetizer = invitees.adults[2].dinnerChoice[0];
var dinner = invitees.adults[2].dinnerChoice[1];
var dessert = invitees.adults[2].dinnerChoice[2];
var fullCourse = "Lauren's appetizer is " + appetizer + ". She will be eating " + dinner + " for dinner and has selected " + dessert + " as her dessert." ;
console.log(fullCourse);


// 10. Create an empty object called "jsWorkshop" using Constructor Notation.
console.log("Question 10");
function Workshop(classmates) {
  this.classmates = classmates;
}

var jsWorkshop = new Workshop();
console.log(jsWorkshop);


// 11. To your "jsWorkshop" object, assign a key of "classmates" with the value being an array of five your classmates.
console.log("Question 11");
jsWorkshop.classmates = ['Chip', 'Toby', 'Chip at time t1', 'Toby at time t1', 'me at time t1'];
console.log(jsWorkshop.classmates);


// 12. Acesss the third classmate in your "jsWorkshop" object.
console.log("Question 12");
var classmateThree = jsWorkshop.classmates[2];
console.log(classmateThree);


// 13. Get the length of the fourth classmate's name.
console.log("Question 13");
var classmateFourLen = jsWorkshop.classmates[3].length;
console.log(classmateFourLen);


// 14. Clear the classmates value.
console.log("Question 14");
jsWorkshop.classmates = '';
console.log(jsWorkshop.classmates);


// 15. Create an emtpy array called "books".
// Create three objects that contain book titles, their author, and number of pages.
// Insert the three objects into the "books" array.
// (Feel free to make up the titles. And the authors. Have fun. No pressure.)
// Example of desired array: [ youHadMeAtWoof, bangkokHaunts, theCatcherInTheRye]
// Example of desired object: {title: "You Had Me at Woof", author: "Julie Klum", pages: 207}
// Final desired result:
  console.log("Question 15");
  var books = [];
  function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  var afterThis = new Book ('After This', 'Alice McDermott', 450); 
  var infiniteLoop = new Book ('Infinite Loop', 'David Foster Wallace While He Was David Foster Wallace', 0.000000000000000000000); 
  var stringAndObject = new Book ('String & Object', 'W.V.O Quine', 50); 
  books.push(afterThis, infiniteLoop, stringAndObject);
  console.log(books);

    // var books = [{youHadMeAtWoof: {title: "You Had Me at Woof",
    //                               author: "Julie Klum",
    //                               pages: 207
    //                               },
    //                theCatcherInTheRye: {
    //                               title: "The Catcher in the Rye",
    //                               author: "JD Salinger",
    //                               pages: 214
    //                               },
    //                bangkokHaunts: {
    //                               title: "Bangkok Haunts",
    //                               author: "John Burdett",
    //                               pages: 569
    //                               }
    //             }] 
// 15a. Access the author of the first book.
console.log("Question 15a");
console.log(books[0].author);



// 15b. Print the length of the author the the third book.
console.log("Question 15b");
console.log(books[2].author.length);



// 16. To each book object variable, add a key of "dateRead" with a value of the year you read the book.
// (Go ahead and make this up, too. Get wild.)
console.log("Question 16");
console.log(books[0].dateRead = 2018);
console.log(books[1].dateRead = 0000);
console.log(books[2].dateRead = 2007);



// 17. Remove the second book from the books Array.
console.log("Question 17a");
books.splice(1, 1);
console.log(books);


// Bonus: Explain, in your own words, the difference between Literal Notation and Constructor.
console.log("Bonus");
console.log("Constructor notation involves a constructor function from which you can instantiate several varied instances of the object initially defined in the constructor. Literal notation involves creating a single, standalone object. Use literal only when you know you'll need just a single instance of an object. Otherwise use constructor.");



// 17. Let's play a game. Create an object (like we did with the bike in class) and assign it at least five properties.
// The class will guess what your object is based on it's properties.
console.log("Question 17b");
var boulder = {
  males: 53195,
  females: 49971,
  medianAge: 27.7,
  perCapitaIncome: '$38,840',
  medianGrossRent: '$1,213'
};
console.log(boulder);


// You're a zookeeper and keeping a detailed log of each of the animals in your zoo.
// 18. Create an empty object called "zoo"
console.log("Question 18");
var zoo = {};
console.log(zoo);


// 19. Create assign three animals as your keys in the "zoo" object. The values of the animals should be empty objects.
console.log("Question 19");
zoo.zebra = {};
zoo.cheetah = {};
zoo.tygra = {};
console.log(zoo);


// 20. Within each animal empty object, assign a key/value pair of "timeSlept" and a number indicating the hours of sleep each animal got. (Make this up, obvi)
console.log("Question 20");
zoo.zebra.timeSlept = 1;
zoo.cheetah.timeSlept = 11;
zoo.tygra.timeSlept = 21; 
console.log(zoo);


// 21. Within each animal object, assign a object pair consisting of a key called "meals" and an empty array as the value.
console.log("Question 21");
zoo.zebra.meals = [];
zoo.cheetah.meals = [];
zoo.tygra.meals = [];
console.log(zoo);


// 22. Within each animal's meals array, create two objects with keys of "monday" and "wednesday". You only feed those jerks twice a week. It's fine.
console.log("Question 22");
function monday(breakfast, lunch, dinner) {
    this.breakfast = breakfast;
    this.lunch = lunch;
    this.dinner = dinner;
  }

function wednesday(breakfast, lunch, dinner) {
    this.breakfast = breakfast;
    this.lunch = lunch;
    this.dinner = dinner;
  }
zoo.zebra.meals[0] = new monday (); 
zoo.cheetah.meals[0] = new monday (); 
zoo.tygra.meals[0] = new monday ();

zoo.zebra.meals[1] = new wednesday (); 
zoo.cheetah.meals[1] = new wednesday (); 
zoo.tygra.meals[1] = new wednesday (); 


console.log(zoo);

// 23. In the individual days of the week, create an object with the key of each meal ("breakfast", "lunch", "dinner") and a made up value of what they ate.
// That array should look like this (within the meals object, within the animal object, within the zoo object):
  // [ { monday: {
  //   breakfast: "cheetos on top of greek yogurt",
  //   lunch: "6 gallons of Diet Coke",
  //   dinner: "leftover lasagna"
  // }},
  //  {wednesday: {
  //   breakfast: "cashews, diced apples, tuna, grapes, BubbleYum",
  //   lunch: "a ham and cheddar lunchable",
  //   dinner: "I put my thing down, flip it, and reverse it"
  // }}]
console.log("Question 23");

zoo.zebra.meals[0].breakfast = "hot pockets";
zoo.zebra.meals[0].lunch = "pop tarts";
zoo.zebra.meals[0].dinner = "izzie";

zoo.zebra.meals[1].breakfast = "hot pockets";
zoo.zebra.meals[1].lunch = "pop tarts";
zoo.zebra.meals[1].dinner = "dirt";

zoo.cheetah.meals[0].breakfast = "oatmeal";
zoo.cheetah.meals[0].lunch = "sweet potato";
zoo.cheetah.meals[0].dinner = "Jamba Juice";

zoo.cheetah.meals[1].breakfast = "eggs";
zoo.cheetah.meals[1].lunch = "zebra";
zoo.cheetah.meals[1].dinner = "zebra";

zoo.tygra.meals[0].breakfast = "toast";
zoo.tygra.meals[0].lunch = "black bean burger";
zoo.tygra.meals[0].dinner = "pride";

zoo.tygra.meals[1].breakfast = "Bloody Mary";
zoo.tygra.meals[1].lunch = "Maker's Mark";
zoo.tygra.meals[1].dinner = "Bourbon Neat";

console.log(zoo);


// 24. Damn it. The night zookeeper just informed you that your second animal took a nap right before bed time. Add two hours to his "timeSlept" value.
console.log("Question 24");
console.log(zoo.cheetah.timeSlept += 2);
//console.log(yourAnswer);


// 25. To each animal object, add a "favoriteActivities" key with the value being an array of three of his/her favorite activities.
console.log("Question 25");
zoo.zebra.favoriteActivities = ['pacing back and forth', 'pacing back and forth', 'eating'];
zoo.cheetah.favoriteActivities = ['pacing back and forth', 'pacing back and forth', 'eating'];
zoo.tygra.favoriteActivities = ['truth', 'loyalty', 'honor and justice'];
console.log(zoo);


// 26. Your first animal just tossed his lunch at the zoo visitors. Change his monday lunch value to an empty string.
console.log("Question 26");
zoo.zebra.meals[0].lunch = '';
console.log(zoo.zebra.meals[0].lunch);


// 27. You know your "zoo" object? The owner wants to add zookeepers to the object, too. But before we do that, we need to make sure
// the animals stay separate from the zookeepers. To do this, create an object within the "zoo" object. The key will be "animals" and the value will be an array
// containing the three animals you already defined.
console.log("Question 27");

//first try: syntax error, can't have '.' notation in list
//zoo.animals = {zoo.zebra, zoo.cheetah, zoo.tygra}; 

//second try: yes
var zebra = zoo.zebra;
var cheetah = zoo.cheetah;
var tygra = zoo.tygra;
zoo.animals = {zebra, cheetah, tygra};
delete zoo.zebra;
delete zoo.cheetah;
delete zoo.tygra;
console.log(zoo);

// 28. To the "zoo" object, add an object named "zookeepers" with the value being and empty object.
console.log("Question 28");
zoo.zookeepers = {};
console.log(zoo);


// 29. To the empty "zookeepers" object, add two objects with their keys being two names and their values being an empty object.
console.log("Question 29");
zoo.zookeepers = {name1: {}, name2: {}};
console.log(zoo.zookeepers);


// 30. This joker wants you to add the "hireDate" for each zookeeper. Within the empty array attached to each name, assign a key/value pair of
// "hireDate" and the value being a string of hire date.
console.log("Question 30");
zoo.zookeepers.name1.hireDate = '10/31/10';
zoo.zookeepers.name2.hireDate = '12/10/13';
console.log(zoo);

