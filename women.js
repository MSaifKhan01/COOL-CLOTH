let container =document.getElementById("container")
let searchbar=document.getElementById("searchbar")
let search=document.getElementById("search")

// search.addEventListener("click",(e)=>{
    // console.log("hi")
    // searchbar.classList.remove("serchbarclose")
   
// })



////fetch data///
let url=`https://upset-red-outfit.cyclic.app/Products`
fetchdata(url)
function fetchdata(url,page=1) {
    try {
    async function fetchdata(){
        let res= await fetch(url+`?_limit=20&_page=${page}`)
        console.log(res)
        let data=await res.json()
        console.log(data)
        
       let readydata=data.map((acc,item)=>{
            return{
                id:acc.id,
                title:acc.name,
                image:acc.images[0],
                price:acc.price,
                catagory:acc.tags[1]||acc.tags[0],
                mrp:acc.price_max,
                bander:acc.vendor


            }
        })
        let womendata=readydata.filter((women,i)=>{
            if((women.catagory.includes("women")||women.catagory.includes("Women")||women.catagory.includes("WOMEN"))){
                return true
            }
            if(women.bander=="Koovs"){
                return women.bander="COOL CLOTH"
            }
           
        })
        let womendata1=readydata.filter((women,i)=>{
            
            if(women.bander=="Koovs"){
                return women.bander="COOL CLOTH"
            }
           
        })
        // console.log(womendata)
        display(womendata)
        console.log(womendata1)
        
    }
    
    fetchdata()
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
    console.log(e.target.id)
    localStorage.setItem("showid",JSON.stringify(e.target.id))
    localStorage.setItem("url",JSON.stringify(url))
    if(e.target.id){
        window.location.href="./productdetail.html"
    }
})