//HIGH ORDER ARRAY METHODS 


const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


/* They consist of the following 
   forEach
   filter
   map
   sort
   reduce
   */

//For Each .Now for each is an easier way and better way to loop through an array .Rather than using a for loop it does not return anything back like some other methods but it is a much nice way to loop through.

//lets look at the old method if we wanted to loop through the companies using for loop 

// for ( let i= 0; i<companies.length; i++){
//     console.log(companies[i]);
// }

//Now lets look at it while using ForEach

companies.forEach(function(Company){
    console.log(Company);
});



//filter. What filter does is excatly what as the name says. it filters out things from the array 
//Lets have an example which will be using the ages array and we would want to get all the ages that are 21 and over

//now lets have a look at it using the old method ..(using for loop )

// let candrink =[]
// for( let i=0; i<ages.length; i++){
//   if(ages[i] >= 21 ){
//     candrink.push(ages[i]);
//   }
// }

// console.log(candrink);

//now lets look at it using filter

const letsdrink = ages.filter(function(age){
  if(age >= 21) {
    return true;
  }
});

// console.log(letsdrink);

//we can actually make it look better using Es6 (arrow functions)

const drink= ages.filter(age => age>= 21);

console.log(drink);


//Lets look at another example using our companies where we would want to filter out the companies that are in retail.

//first up lets look at the old method 

// const retail=[];
// for (let i = 0; i>=companies.category; i++){
//   if(companies[i]==='retail'){
//     retail.push(companies[i])
//   }
// }
// console.log(retail);

//lets have a look using the filter

const retail=companies.filter(function(RCompany){
  if(RCompany.category === 'Retail'){
    return true;
  }

}

);

// console.log(retail);


//lets have a go using the arrow functions 
const retailcompany=companies.filter(comapny=> comapny.category=== 'Retail');

console.log(retailcompany);

//lets look at another example where we want to filter out the compaanies that started out in the 80s

//map.now map is kinda of different in the sense that it actually creates a new array 

//create an array of just thecompany name 

const companyname= companies.map(function(company){
  return company.name
}

);

console.log(companyname);


//Now lets have look at SORT now sort work just like filter

//now lets have an example .now what we want to do here is sort the companies by the start  the year .From the earliest year to the latest 

const sortedcompanies= companies.sort(function(c1,c2){
  if(c1.start>c2.start){
    return 1;
  }else{
    return -1;
  }
}

);

console.log(sortedcompanies);



//REDUCE-it is  very special that it can replace map and filter however we needed to understand them .Reduce can be a bit challenging at time 
//reduce will itirate over the array ,still use the callback function but reduces the value in the array to a single value .in the callback function instead of a single parametre now we have two ('accumulator' 'current itiration)

//lets have a look using the old way.In this example we are going to add the ages

//using for loop 

let sumage=0;
for(let i = 0; i<ages.length; i++){
  sumage+=ages[i]
}
console.log(sumage);

//using the reduce 

const agesum = ages.reduce(function(total, age){
  return total + age
},0);

console.log(agesum);

//using arrow functions 

const agesums = ages.reduce((total, age1) >= total+age1, 0);

console.log(agesums);







