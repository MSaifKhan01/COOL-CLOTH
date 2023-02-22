let signup=document.getElementById("SignUp")
let users=JSON.parse(localStorage.getItem("userData"))||[]
signup.addEventListener("submit",(e)=>{
    e.preventDefault();
    let count=0;
    users.forEach(function(el){
        if(el.email===signup.email.value){
            count++;
        }
       
    })
    if(count>0){
        alert("User already Registered")
    }else{
        if(signup.password.value!=signup.passwordchk.value){
            alert("password do not match!")

        }else{
            let user={
                firstname:signup.First.value,
                lastname:signup.Last.value,
                email:signup.email.value,
                password:signup.password.value
            }
            users.push(user);
            localStorage.setItem("userData",JSON.stringify(users))
            alert("sigup successful")
            window.location.assign("./login.html")

        }
       
       
    }
    
    
   
});