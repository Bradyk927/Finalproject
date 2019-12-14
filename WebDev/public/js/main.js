function menuFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
  
  function MyHobbies(hobby1, hobby2, hobby3, hobby4){

    this.hobby1 = hobby1;
    this.hobby2 = hobby2;
    this.hobby3 = hobby3;
    this.hobby4 = hobby4;
    return this.MyHobbies;
    }

    var classOne = new MyHobbies("I love sports.", " I like football,", " I like baseball,", " and I like basketball.");
    var classTwo = new MyHobbies("Video games.", " I like to play with my friends in my spare time.", " I have been playing them since I was ", 6);
    var classThree = new MyHobbies("Music.", " I love music and play a little bit of guitar when I find the time, I have been playing for", 10, " years.");
    var classFour = new MyHobbies("History.", " I love learning about different eras of history around the world.", " My favorite era of history is the 19th century.", "I think history can truly sharpen one's mind and make them a more interesting indivdual.");

    var info1 = classOne.hobby1  +  classOne.hobby2  + classOne.hobby3 + classOne.hobby4
    function hobby1Info(){
      alert(classOne.hobby1  +  classOne.hobby2  + classOne.hobby3 + classOne.hobby4)
    };
    var info2 = classTwo.hobby1  +  classTwo.hobby2  + classTwo.hobby3 + classTwo.hobby4
    function hobby2Info(){
      alert(classTwo.hobby1  +  classTwo.hobby2  + classTwo.hobby3 + classTwo.hobby4)
    };

    var info3 = classThree.hobby1  +  classThree.hobby2  + classThree.hobby3 + classThree.hobby4
    function hobby3Info(){
      alert(classThree.hobby1  +  classThree.hobby2  + classThree.hobby3 + classThree.hobby4)
    };

    var info4 = classFour.hobby1  +  classFour.hobby2  + classFour.hobby3 + classFour.hobby4
    function hobby4Info(){
      alert(classFour.hobby1  +  classFour.hobby2  + classFour.hobby3 + classFour.hobby4)
    };


     // var modal = document.getElementById("myModal");

    // var btn = document.getElementById("myBtn");

    // var span = document.getElementsByClassName("close")[0];

    // btn.onclick = function() {
    //   modal.style.display = "block";
    // }

    // span.onclick = function() {
    //   modal.style.display = "none";
    // }

    // window.onclick = function(event) {
    //   if (event.target == modal) {
    //     modal.style.display = "none";
    //   }
    // }
    $("#slideshow > div:gt(0)").hide();

    setInterval(function() {
      $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    }, 3000);
    
