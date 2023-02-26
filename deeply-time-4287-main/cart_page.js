

let container = document.querySelector(".cart")
let idarray=JSON.parse(localStorage.getItem("idarray"))||[]
let url=JSON.parse(localStorage.getItem("url"))||[]
let total=document.getElementById("total")
let cart_count=document.getElementById("count")
cart_count.innerText=idarray.length

let payment=document.getElementById("pay")
payment.addEventListener("click",()=>{
    if(idarray.length>=1){
        window.location.href="./payment.html"
    }else{
        window.location.href="./cart_page.html"
    }
})
    // console.log(idarray)
    idarray.forEach((ele)=>{
        fetchdata()
        async function fetchdata(){
            // try {
               
              let res= await fetch(`https://upset-red-outfit.cyclic.app/Products/${ele}`)
            let data=await res.json() 
            // console.log(data) 
            let readydata=[data].map((acc,item)=>{
                return{
                    id:acc.id,
                    name:acc.title,
                    image:acc.featured_image,
                    image1:acc.images[0],
                    image2:acc.images[1]||acc.images[0],
                    image3:acc.images[2]||acc.images[0],
                    image4:acc.images[3]||acc.images[0],
                    price:acc.price,
                    catagory:acc.tags[1]||acc.tags[0],
                    mrp:acc.price_max,
                    bander:acc.vendor
                }
            })
            var quantity;
        // console.log(readydata)
        displaydata(readydata)
            function displaydata(data){
                console.log(data)
                
                    data.forEach(function(ele,i){
                        let card=document.createElement("div");
                        card.className="card"
        
                        let img=document.createElement("img");
                        img.src=ele.image;
        
                        let name=document.createElement("p")
                        name.textContent=ele.name;
        
                        let price=document.createElement("p")
                        price.innerText=ele.price+"₹";
        
                         quantity=document.createElement("span");
                        quantity.innerText=1;
        
                        let allbtn=document.createElement("div")
                       
                        let remove=document.createElement("button")
                        remove.innerText="Remove";
                        let increment=document.createElement("button")
                        increment.innerText="+";
                        let decrement=document.createElement("button")
                        decrement.innerHTML="-";
        
                        remove.addEventListener("click",()=>{
                            AfterRemove=data.filter((element)=>{
                                return element.id!==ele.id
                            })
                            localStorage.setItem("idarray",JSON.stringify(AfterRemove))
                            displaydata(AfterRemove);
                        })
                        increment.addEventListener("click",()=>{
                            total.innerText=" ₹ "+(sum+2000);
                            quantity.innerText++;
                            
                            // localStorage.setItem("cart",JSON.stringify(data))
                            // displaydata(data);
                        })
                        decrement.addEventListener("click",()=>{
                            if(quantity.innerText>1)
                            quantity.innerText--;

                            total.innerText=" ₹ "+(sum-20445);
                            // localStorage.setItem("cart",JSON.stringify(data))
                            // displaydata(data);
                        })
                        var sum=0
                        for(let i=0;i<readydata.length;i++){
                        sum+=Number(readydata[i].price)*quantity.innerText
                        console.log(sum)
            
                        total.innerText=" ₹ "+sum;
                        }
        
                        allbtn.append(decrement,quantity,increment,remove)
                        card.append(img,name,price,allbtn);
                        container.append(card);
                    })
                   
            }
        }


    })
// function fetch(url,products){
   

// }
   