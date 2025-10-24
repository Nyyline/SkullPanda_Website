const initSlider = () =>{
    const slidebtn = document.querySelectorAll(".material-symbols-rounded");
    const imagelist = document.querySelector("#image-list");


    slidebtn.forEach(button => {
        button.addEventListener("click", () =>{
            const direction = button.id === "left" ? -1 : 1;
            const scrollAmount = imagelist.clientWidth * direction;
            imagelist.scrollBy({left:scrollAmount, behavior: "smooth"})
        })
        
    });
}

window.addEventListener("load", initSlider);

function wish(){
    alert("You have no items in your wishlist for now")
}
