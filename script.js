const Header_Dashboard = document.getElementById("header-dashboard");
const Header_About = document.getElementById("header-about");
const Header_Contact = document.getElementById("header-contact");
const Header_Services = document.getElementById("header-services");
const Nav_List = [Header_Dashboard, Header_About, Header_Contact, Header_Services]

function flush_nav(Nav_List){   
    Nav_List.forEach((_list)=>{
        _list.style.color = "aliceblue";
        _list.style.background = "rgb(0, 0, 0)";
    })
}

Nav_List.forEach((_list)=>{
    _list.addEventListener("click",()=>{ 
        flush_nav(Nav_List);
        _list.style.color = "black";
        _list.style.background = "rgb(255, 255, 255)";
    })
})
