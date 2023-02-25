let container = document.getElementById("container");


// })

////fetch data///
let url = `https://upset-red-outfit.cyclic.app/mens`;
// let url=`https://63f3b033fe3b595e2ee78796.mockapi.io/products?_limit=10&_page=1`
fetchdata(url);
function fetchdata(url, page = 1) {
  try {
    async function fetchdata() {
      let res = await fetch(url);
      // let totaldata=res.headers.get("x_Total_Count")
      let totaldata = res.headers.get("X-Total-Count");
      paginafun(totaldata);
      let data = await res.json();
      console.log(data)

      let readydata = data.map((acc, item) => {
        return {
          id: acc.id,
          title: acc.title,
          image: acc.featured_image,
          price: acc.price,
          catagory: acc.tags[1] || acc.tags[0],
          mrp: acc.price_max,
          bander:acc.vendor,
          type:acc.type,
          handle:acc.handle
        };
      });
      let womendata = readydata.filter((women, i) => {
        if (
          women.catagory.includes("men") ||
          women.catagory.includes("men") ||
          women.catagory.includes("MEN") ||
          !women.catagory.includes("women")
        ) {
          return true;
        }
      });
      // console.log(womendata)
      search(womendata)
      filter(womendata)
      display(womendata);
    }
    fetchdata();
  } catch (error) {
    console.log(error);
  }
}
function display(data) {
  container.innerHTML = "";
  data.forEach((pro) => {
    let card = document.createElement("div");
    let disdiv = document.createElement("div");
    let pricediv = document.createElement("h6");
    disdiv.setAttribute("class", "disdiv");
    let img = document.createElement("img");
    img.setAttribute("src", pro.image);
    img.setAttribute("id", pro.id);
    let bander = document.createElement("span");
    bander.innerText = pro.bander;
    let title = document.createElement("span");
    title.innerText = pro.title;
    let price1 = document.createElement("span");
    price1.innerText = `MRP.` + " " + pro.price;
    price1.style.textDecoration = "line-through";
    let price2 = document.createElement("span");
    price2.innerText = `Rs. ${pro.price - 100}`;
    pricediv.append(price1, price2);
    disdiv.append(bander, title, pricediv);
    card.append(img, disdiv);
    container.append(card);
  });
}
container.addEventListener("click", (e) => {
  e.preventDefault();

  localStorage.setItem("showid", JSON.stringify(e.target.id));
  localStorage.setItem("url", JSON.stringify(url));
  if (e.target.id) {
    window.location.href = "./productdetail.html";
  }
});
let pagina = document.getElementById("pagination");
function paginafun(totaldata) {
  let button = Math.ceil(totaldata / 20);
  let page = [];
  for (let i = 1; i <= button; i++) {
    page.push(
      `<li class="page-item data-page-number=${i}"><a class="page-link" href="javascript:void(0);">${i}</a></li>`
    );
    pagina.innerHTML = `${page.join("")}`;
    let but = document.querySelectorAll(".page-item");
    console.log(but);

    }
  }
  // /filter part
  let featured=document.getElementById("featured")
  featured.addEventListener("change",()=>{
    console.log(featured.value)
    if(featured.value=="atoz"){
      fetchdata(`https://upset-red-outfit.cyclic.app/mens?_sort=title&_order=asc`)
    }else if(featured.value=="ztoa"){
      fetchdata(`https://upset-red-outfit.cyclic.app/mens?_sort=title&_order=desc`)
    }else if(featured.value=="lowtohigh"){
      fetchdata(`https://upset-red-outfit.cyclic.app/mens?_sort=price&_order=asc`)
    
    }else if(featured.value=="hightolow"){
      fetchdata(`https://upset-red-outfit.cyclic.app/mens?_sort=price&_order=desc`)
    }
  })
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

// filter
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
       if(ele.handle.toUpperCase().includes(choice.value.toUpperCase())||ele.title.toUpperCase().includes(choice.value.toUpperCase())||ele.type.toUpperCase().includes(choice.value.toUpperCase())||ele.bander.toUpperCase().includes(choice.value.toUpperCase())){
           return true
       }
       return false;
      });
      display(filter)
      console.log(filter)
   
      
   
  })
   }
