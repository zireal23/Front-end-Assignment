leftbtn = document.getElementsByClassName("leftarrow")[0];
rightbtn = document.getElementsByClassName("rightarrow")[0];


leftbtn.addEventListener("click", function () { 
    text1Active = document.getElementsByClassName("emarketing-text1")[0].classList.contains("active");
    text2Active = document.getElementsByClassName("emarketing-text2")[0].classList.contains("active");
    text3Active = document.getElementsByClassName("emarketing-text3")[0].classList.contains("active");
    console.log(text1Active, text2Active, text3Active)
    if (text1Active) {
        document.getElementsByClassName("emarketing-text1")[0].classList.remove("active");
        document.getElementsByClassName("emarketing-text1")[0].classList.add("inactive");
        document.getElementsByClassName("emarketing-text3")[0].classList.remove("inactive");
        document.getElementsByClassName("emarketing-text3")[0].classList.add("active");
    }
    else if (text2Active) {
        document.getElementsByClassName("emarketing-text2")[0].classList.remove("active");
        document.getElementsByClassName("emarketing-text2")[0].classList.add("inactive");
        document.getElementsByClassName("emarketing-text1")[0].classList.remove("inactive");
        document.getElementsByClassName("emarketing-text1")[0].classList.add("active");
    }
    else if (text3Active) {
        document.getElementsByClassName("emarketing-text3")[0].classList.remove("active");
        document.getElementsByClassName("emarketing-text3")[0].classList.add("inactive");
        document.getElementsByClassName("emarketing-text2")[0].classList.remove("inactive");
        document.getElementsByClassName("emarketing-text2")[0].classList.add("active");
    }
});

rightbtn.addEventListener("click", function () { 
    text1Active = document.getElementsByClassName("emarketing-text1")[0].classList.contains("active");
    text2Active = document.getElementsByClassName("emarketing-text2")[0].classList.contains("active");
    text3Active = document.getElementsByClassName("emarketing-text3")[0].classList.contains("active");
    console.log(text1Active, text2Active, text3Active)
    if (text1Active) {
        document.getElementsByClassName("emarketing-text1")[0].classList.remove("active");
        document.getElementsByClassName("emarketing-text1")[0].classList.add("inactive");
        document.getElementsByClassName("emarketing-text2")[0].classList.remove("inactive");
        document.getElementsByClassName("emarketing-text2")[0].classList.add("active");
    }
    else if (text2Active) {
        document.getElementsByClassName("emarketing-text2")[0].classList.remove("active");
        document.getElementsByClassName("emarketing-text2")[0].classList.add("inactive");
        document.getElementsByClassName("emarketing-text3")[0].classList.remove("inactive");
        document.getElementsByClassName("emarketing-text3")[0].classList.add("active");
    }
    else if (text3Active) {
        document.getElementsByClassName("emarketing-text3")[0].classList.remove("active");
        document.getElementsByClassName("emarketing-text3")[0].classList.add("inactive");
        document.getElementsByClassName("emarketing-text1")[0].classList.remove("inactive");
        document.getElementsByClassName("emarketing-text1")[0].classList.add("active");
    }
});