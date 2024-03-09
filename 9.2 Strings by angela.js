
// var totalCount=180;
// var para = prompt("Add a paragraph here...Maximum allowed caracter is 180");
// var leftCount=para.length;
// var a=totalCount-leftCount;
// var b=leftCount;

// alert("You have written "+b+" Characters, " +"You have " +a+ " Characters Left.");
// prompt(para+" Add more characters that is "+ totalCount-leftCount);


// as per angela

// var tweet = prompt("Add you message here...");
// var count=tweet.length;
// alert("You have written "+ count + " Characters " + "you have "+ (180-count) + " Characters left.")



//Slice

// var name="shubham";
// name.slice(1,5);

// var para=prompt("Enter Your Paragraph here... ");
// var c=alert(para.slice(0,140));



//--------------------------
//to.upperCase()

var name=prompt("Enter Your Name Here? ");
var first=name.slice(0,1);
var uppercasefirst=first.toUpperCase();
var second=name.slice(1,name.length);
left=second.toLowerCase();

alert("Your Name is : "+ uppercasefirst+left);

