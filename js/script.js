let ham = document.querySelector(".ham_btn");

ham.addEventListener("click",function(){
    document.getElementById("nav_menu").classList.toggle("sub_menu")
})

let t_lists = document.querySelectorAll(".tab_list");
let t_spaces = document.querySelectorAll(".tab_space");

t_lists[0].classList.add("show");
t_spaces[0].classList.add("view");

t_lists.forEach(function(t_list, i){
    t_list.addEventListener("click", function(){
        for(let j=0; j<t_lists.length; j++){
            t_lists[j].classList.remove("show");
            t_spaces[j].classList.remove("view");
        }
        t_list.classList.add("show");
        t_spaces[i].classList.add("view");
    })
})