let Login=document.querySelector("#form")
let users=JSON.parse(localStorage.getItem("userData"))||[]
Login.addEventListener("submit",(e)=>{
    e.preventDefault()
    let count=0;
    let temp;
    users.forEach(function(el){
        console.log(el)
        if(el.email===Login.email1.value){
            count++;
            temp=el;
            
            localStorage.setItem("loggedUser",JSON.stringify(el));
        }
    });
    if(count==0){
        alert("User not registered!")
    }else{
        if(temp.password!=Login.password1.value){
            alert("Wrong Password")
        }else{
            alert("Login Succesful")
        }
        
    }
    

    

    
});
let reg=document.getElementById("Register")
reg.addEventListener("click",()=>{
    setTimeout(()=>{
        window.location.assign("./register.html")

    },500)
   
})
