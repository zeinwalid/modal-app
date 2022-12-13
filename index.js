let dropBtn = document.getElementById("dropBtn");

dropBtn.addEventListener("click", () => {
    console.log("clicked")
    document.querySelector(".text").classList.toggle("down");
    document.querySelector(".btn").classList.toggle("btn-animation");
    // document.querySelector(".btn").classList.remove("btn");
})