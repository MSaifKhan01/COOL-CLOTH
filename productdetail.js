let leftcont=document.getElementById("leftcont")
let rightcont=document.getElementById("rightcont")
let localStorageid=JSON.parse(localStorage.getItem("showid"))
let geturl=JSON.parse(localStorage.getItem("url"))
console.log("id",geturl)
let count=1;
 
let dcsbtn=document.getElementById("dec")
let incbtn=document.getElementById("inc")
let quantity=document.getElementById("quantity")
let priceshow=document.getElementById("price")
let xl=document.getElementById("xl")
let m=document.getElementById("m")
let size=document.getElementById("size")
size.innerText="XL"
// quantity.innerText="1"||count;
quantity.innerText=count;
  
let url=`${geturl}/${localStorageid}`
fetchdata(url)
function fetchdata(url) {
async function fetchdata(){
    // try {
      let res= await fetch(url)
    let data=await res.json() 
    console.log(data) 
    let readydata=[data].map((acc,item)=>{
        return{
            id:acc.id,
            name:acc.name,
            image:acc.featured_image,
            image1:acc.images[0],
            image2:acc.images[1]||acc.images[0],
            image3:acc.images[2]||acc.images[0],
            image4:acc.images[0]||acc.images[0],
            price:acc.price,
            catagory:acc.tags[1]||acc.tags[0],
            mrp:acc.price_max,
            bander:acc.vendor


        }
    })
    display(readydata)
    console.log(readydata)
 
    incbtn.addEventListener("click",()=>{
            count++;
            display(readydata)
            
        })
    dcsbtn.addEventListener("click",()=>{
        if(count>1){
              count--;
            display(readydata)
           
        }
          
        })
        xl.style.backgroundColor="black"
        xl.style.color="white"
        xl.addEventListener("click",()=>{
            size.innerText="XL"
            xl.style.backgroundColor="black"
            xl.style.color="white"
            m.style.backgroundColor="white"
            m.style.color="black"
        })
        m.addEventListener("click",()=>{
            size.innerText="M"
            m.style.backgroundColor="black"
            m.style.color="white"
            xl.style.backgroundColor="white"
            xl.style.color="black"
        })
    function display(data){
        let name=document.getElementById("name")
        name.innerText=data[0].name
        let quan=+data[0].price*count
      
        quantity.innerText=count; 
        priceshow.innerText=quan;  
        

    }
   
    let womendata=readydata.filter((women,i)=>{
        // if((women.catagory.includes("women")||women.catagory.includes("Women")||women.catagory.includes("WOMEN"))){
        //     return true
        // }
        if(women.bander=="Koovs"){
            return women.bander="COOL CLOTH"
        }
       
    })
    let womendata1=readydata.filter((women,i)=>{
        
        if(women.bander=="Koovs"){
            return women.bander="COOL CLOTH"
        }
       
    })
     leftdisplay(readydata)
     
}

fetchdata()
}
let img1=document.getElementById("img11")
// let img2=document.getElementById("img22")
let img3=document.getElementById("img33")
let img4=document.getElementById("img44")
function leftdisplay(data){
leftcont.innerHTML=""
data.forEach((product) => {
    let div1=document.createElement("img")
    let div2=document.createElement("img")
    let div3=document.createElement("img")
    let div4=document.createElement("img")
    let div5=document.createElement("img")
    div2.setAttribute("src",product.image1)
    div3.setAttribute("src",product.image2)
    div4.setAttribute("src",product.image3)
    div5.setAttribute("src",product.image4)
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.setAttribute("src",product.image)
  img.append(div1)
  img1.append(div2)
//   img2.append(div1)
  img3.append(div4)
  img4.append(div5)
    div.append(img)
    leftcont.append(div)
});

}
let addcart=document.getElementById("addtocard")
addcart.addEventListener("click",()=>{
    window.location.href="./payment.html"
})