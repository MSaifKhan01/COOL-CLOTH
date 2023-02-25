let container =document.getElementById("container")




////fetch data///
let url=`https://upset-red-outfit.cyclic.app/Products`
fetchdata(url)
function fetchdata(url,page=1) {
    
    try {
    async function fetchdataas(){
        let res= await fetch(url)
        
        let data=await res.json()
       console.log(data)
        
       let readydata=data.map((acc,item)=>{
            return{
                id:acc.id,
                title:acc.title,
                image:acc.images[0],
                price:acc.price,
                catagory:acc.tags[1]||acc.tags[0],
                mrp:acc.price_max,
                bander:acc.vendor,
                type:acc.type,
                handle:acc.handle


            }
        })
        let womendata=readydata.filter((women,i)=>{
            // console.log(women)
            if((women.catagory.includes("women"))){
                return true
            }
            // if(women.bander=="Koovs"){
            //     return women.bander="COOL CLOTH"
            // }
           
        })
        // let womendata1=readydata.filter((women,i)=>{
            
        //     if(women.bander=="Koovs"){
        //         return women.bander="COOL CLOTH"
        //     }
           
        // })
        // console.log(womendata1)
        globalarray=womendata
        search(womendata)
        display(womendata)
        filter(womendata)
        
    }
    
    fetchdataas()
    } catch (error) {
       console.log(error)     
    }
}
function display(data){
    container.innerHTML=""
    data.forEach((pro) => {
        let card=document.createElement("div")
        let disdiv=document.createElement("div")
        let pricediv=document.createElement("h6")
        disdiv.setAttribute("class","disdiv")
        let img=document.createElement("img")
        img.setAttribute("src",pro.image);
        img.setAttribute("id",pro.id);
        let bander=document.createElement("span")
        bander.innerText=pro.bander
        let title=document.createElement("span")
        title.innerText=pro.title
        let price1=document.createElement("span")
        price1.innerText=`MRP.`+" "+pro.price
        price1.style.textDecoration="line-through"
        let price2=document.createElement("span")
        price2.innerText=`Rs. ${pro.price-Math.floor(Math.random()*10000)}.00`
        pricediv.append(price1,price2)
        disdiv.append(bander,title,pricediv)
        card.append(img,disdiv)
        container.append(card)
    });
}
container.addEventListener("click",(e)=>{
    e.preventDefault()
  
    localStorage.setItem("showid",JSON.stringify(e.target.id))
    localStorage.setItem("url",JSON.stringify(url))
    if(e.target.id){
        window.location.href="./productdetail.html"
    }
})
let featured=document.getElementById("featured")
featured.addEventListener("change",()=>{

  if(featured.value=="atoz"){
    fetchdata(`https://upset-red-outfit.cyclic.app/Products?_sort=title&_order=asc`)
    
  }else if(featured.value=="ztoa"){
    fetchdata(`https://upset-red-outfit.cyclic.app/Products?_sort=title&_order=desc`)
  }else if(featured.value=="lowtohigh"){
    fetchdata(`https://upset-red-outfit.cyclic.app/Products?_sort=price&_order=asc`)
  
  }else if(featured.value=="hightolow"){
    fetchdata(`https://upset-red-outfit.cyclic.app/Products?_sort=price&_order=desc`)
  }
})
//////search func
let addsearch=document.getElementById("searchbar")
let searchbtn=document.getElementById("search")
let searchvalue=document.getElementById("searchvalue")
function search(data){
 searchbtn.addEventListener("click",(e)=>{
   let searfilter=data.filter((ele,i)=>{
    if(ele.handle.toUpperCase().includes(searchvalue.value.toUpperCase())||ele.title.toUpperCase().includes(searchvalue.value.toUpperCase())||ele.type.toUpperCase().includes(searchvalue.value.toUpperCase())){
        return true
    }
    return false;
   });
   display(searfilter)

   
})   
}
let choice=document.getElementById("Choice")
// let nike=document.getElementById("nike")
// let Bravesoul=document.getElementById("Bravesoul")
// let Comatoes=document.getElementById("Comatoes")
// let Sneakers=document.getElementById("Sneakers")
// let Slides=document.getElementById("Slides")
// let tshitr=document.getElementById("T-Shirts")
function filter(data){
    choice.addEventListener("change",(e)=>{
if(choice.value==""){
  return display(data)
}
      let filter=data.filter((ele,i)=>{
       if(ele.handle.toUpperCase().includes(choice.value.toUpperCase())||ele.title.toUpperCase().includes(choice.value.toUpperCase())||ele.type.toUpperCase().includes(choice.value.toUpperCase())||ele.bander.toUpperCase().includes(choice.value.toUpperCase())||ele.catagory.toUpperCase().includes(choice.value.toUpperCase())){
           return true
       }
       return false;
      });
      display(filter)
      console.log(filter)
   
      
   
  })
   }


