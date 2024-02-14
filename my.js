const getForm = document.getElementById("nav-btn").addEventListener("click",function () {
        document.getElementById("section1").style.display = "block"
});

const formBtn = document.getElementById("submit").addEventListener("click",function () {
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "block";
    
    const getName = document.getElementById("name");
     const value = getName.innerHTML =getName.value;
     const showResult = document.getElementById("result");
     showResult.innerHTML = " Name is " + "  " +  value;

     const getEmail = document.getElementById("email");
     const value1 = getEmail.innerHTML =getEmail.value;
     const showResult1 = document.getElementById("result1");
     showResult1.innerHTML="Email is"  + "  " +  value1;

     const getComments = document.getElementById("message");
     const value2 = getComments.innerHTML =getComments.value;
     const showResult2 = document.getElementById("result2");
     showResult2.innerHTML=" Comments is" + "  " +  value2;

});


const btnClose = document.getElementById("close-btn").addEventListener("click", function () {
    document.getElementById("section2").style.display = "none";
    document.getElementById("section1").style.display = "block";
});



function getInputValue () {
    const getName =document.getElementById("name");
     const showName = getName.value;
     console.log(showName);
    }