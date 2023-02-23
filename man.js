let container =document.getElementById("container")
let searchbar=document.getElementById("searchbar")
let search=document.getElementById("search")
// search.addEventListener("click",(e)=>{
    console.log("hi")
    searchbar.classList.remove("serchbarclose")
   
// })



////fetch data///
let url=`https://63f3b033fe3b595e2ee78796.mockapi.io/products`
fetchdata(url,1)
function fetchdata(url,page) {
    async function fetchdata(){
        let res= await fetch(`${url}?limit=10&_page=1`)
        let data=await res.json()
        console.log(data)
        
       let readydata=data.map((acc,item)=>{
            return{
                id:acc.id,
                title:acc.title,
                image:acc.featured_image,
                price:acc.price,
                catagory:acc.tags[1]||acc.tags[0],
                mrp:acc.price_max,
                bander:"COOL CLOTH"


            }
        })
        let womendata=readydata.filter((women,i)=>{
            if((women.catagory.includes("men")||women.catagory.includes("men")||women.catagory.includes("MEN"))&&(!women.catagory.includes("women"))){
                return true
            }
           
        })
        // console.log(womendata)
        display(womendata)
        console.log(womendata)
    
    }
    
    fetchdata()
}
function display(data){
    container.innerHTML=""
    data.forEach((pro) => {
        let card=document.createElement("div")
        let disdiv=document.createElement("div")
        disdiv.setAttribute("class","disdiv")
        let img=document.createElement("img")
        img.setAttribute("src",pro.image);
        img.setAttribute("id",pro.id);
        let bander=document.createElement("span")
        bander.innerText=pro.bander
        let title=document.createElement("span")
        title.innerText=pro.title
        let price=document.createElement("span")
        price.innerText=`RS`+" "+pro.price
        disdiv.append(bander,title,price)
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