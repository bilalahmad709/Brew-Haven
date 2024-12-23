let linksColor = document.querySelectorAll(".nav-link");

linksColor.forEach(link => {
    link.style.color = "white";
  });

  
// for mouse hover on links

let linkMouseHover = document.querySelectorAll(".nav-link");

// making it bold on mouse enter
linkMouseHover.forEach(link => {
  //mouseenter event listener
  link.addEventListener("mouseenter", () => {
    link.style.fontWeight = "bold"; 
  });

  // mouseleave event listener to become become normal on mouse leave
  link.addEventListener("mouseleave", () => {
    link.style.fontWeight = "normal"; 
  });
});

// first inner container js work start

// creating element h1
let craftedcoffee= document.createElement("h1");
craftedcoffee.style.color= "white";

// creating text for h1
let craftedcoffeetext = document.createTextNode("Crafted Coffee Curated Moments");

craftedcoffee.appendChild(craftedcoffeetext);

document.getElementById("firstTextdiv").appendChild(craftedcoffee);

// creating element p 
let para = document.createElement("p");
para.style.color = "white";

//creating text for p element
let paraText = document.createTextNode("Including in the richness of our hand-selected coffee blends, sourced ethically and brewed to perfection");

//combining both element and text
para.appendChild(paraText);
document.getElementById("firstTextdiv").appendChild(para);

// icons div js work
let firstIcon = document.createElement("h6");
firstIcon.style.color = "white";

let firstIcontexth6 = document.createTextNode("Blend Orignal - Ethiopian Roast");

// combining both h4 and its text
firstIcon.appendChild(firstIcontexth6);
document.getElementById("iconDiv1text").appendChild(firstIcon);

//creating  p tag for the first icon
let firsticonP = document.createElement("p");
firsticonP.style.color = "white";
firsticonP.style.fontSize= "10px";
let firsticonPText = document.createTextNode("The bold, fruity flavor with vibrant acidity, sourced from the highlands of Ethopia.");

// combining the above p tag and its text
firsticonP.appendChild(firsticonPText);
document.getElementById("iconDiv1text").appendChild(firsticonP);

// second icon div
let secIcon = document.createElement("h6");
secIcon.style.color = "white";

let secIconh6 = document.createTextNode("Roasted Locally - Brewed Fresh");
secIcon.appendChild(secIconh6);

document.getElementById("iconDiv2text").appendChild(secIcon);

let secIconp = document.createElement("p");
secIconp.style.color = "white";
secIconp.style.fontSize= "10px";
let secIconptext = document.createTextNode("Expertly roasted in-house to bring out the unique notes of every bean, ensuring freshness in every cup.");

//combining the above created p tag and its text
secIconp.appendChild(secIconptext);

document.getElementById("iconDiv2text").appendChild(secIconp);

// second icon div
//creating h6
let thirdIconh6 = document.createElement("h6");
thirdIconh6.style.color = "white";
let thirdIconh6text = document.createTextNode("Relax & Enjoy Every Sip");

//combining both
thirdIconh6.appendChild(thirdIconh6text);
document.getElementById("iconDiv3text").appendChild(thirdIconh6);

//creating p tag

let thirdIconp = document.createElement("p");
thirdIconp.style.color = "white";
thirdIconp.style.fontSize= "10px";

// text for p tag
let thirdIconptext = document.createTextNode("Take a moment for yourself with a perfectly balanced brew that soothes and satisfies.");

// combining both p tag and its text
thirdIconp.appendChild(thirdIconptext);
document.getElementById("iconDiv3text").appendChild(thirdIconp);










// first inner container js work end



