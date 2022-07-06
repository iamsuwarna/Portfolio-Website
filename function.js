

/*for changing pictures in blog webpage*/
var img = document.getElementById("blogphoto");
function bgphoto(){
    img.src="blog/blog2.jpg";
}
function bgimage(){
    img.src="blog/blog1.jpg";
}

/* for changing picure in research webpage*/
var photo = document.getElementById("main");
function research1(){
    photo.src="research/second.png";
}
function research2(){
    photo.src="research/fourth.jpg";
}


/*for changing theme icon*/
var image = document.getElementById("dark");
function change(){
    image.src="realday.jpg";
    document.body.style.background="lightslategray";
}

/*for error message in contact form*/
function validation(){
var text = document.forms["input"]["name"].value;
var email = document.forms["input"]["email"].value;
var number = document.forms["input"]["number"].value;
var radio = document.forms["input"]["gender"].value;
var age = document.forms["input"]["date"].value;

if(text =="" || email=="" || number==""|| radio=="" ||age==""){
    alert("Fields are empty !");
}
else{
    alert("The message has been submitted!");
}
}

/*subscription in blog page*/
var tag = document.getElementById("btn");
function subscribe(){
    alert("Thanks for subscribing!");
}


/*End of JavaScript*/