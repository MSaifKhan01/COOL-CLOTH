let container = document.getElementById("container");
let searchbar = document.getElementById("searchbar");
let search = document.getElementById("search");
// search.addEventListener("click",(e)=>{

searchbar.classList.remove("serchbarclose");

// })

////fetch data///
let url = `https://upset-red-outfit.cyclic.app/mens`;
// let url=`https://63f3b033fe3b595e2ee78796.mockapi.io/products?_limit=10&_page=1`
fetchdata(url);
function fetchdata(url, page = 1) {
  try {
    async function fetchdata() {
      let res = await fetch(url + `?_limit=20&_page=${page}`);
      // let totaldata=res.headers.get("x_Total_Count")
      let totaldata = res.headers.get("X-Total-Count");
      paginafun(totaldata);
      let data = await res.json();

      let readydata = data.map((acc, item) => {
        return {
          id: acc.id,
          title: acc.title,
          image: acc.featured_image,
          price: acc.price,
          catagory: acc.tags[1] || acc.tags[0],
          mrp: acc.price_max,
          bander: "COOL CLOTH",
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
    // for (let buttun of but) {
    //   console.log(button.page - item.data - page - number);
    //   // but.addEventListener("click",(e)=>{
    //   //     page=e.target.data-page-number
    //   //     fetchdata(url,page)
    //   // })
    // }
    // but.addEventListener("click",(e)=>{
    //     page=(e.target.dataset.page.Number)
    //     fetchdata(url,page)

    // })
  }
}
// $(document).ready( function() {

//     $('.add').click(function(e){
//       e.stopPropagation();
//      if ($(this).hasClass('active')){
//        $('.dialog').fadeOut(200);
//        $(this).removeClass('active');
//      } else {
//        $('.dialog').delay(300).fadeIn(200);
//        $(this).addClass('active');
//      }
//    });
//    $('.radio > .button').click( function() {
//      $('.radio').find('.button.active').removeClass('active');
//      $(this).addClass('active');
//    });

//    function closeMenu(){
//      $('.dialog').fadeOut(200);
//      $('.add').removeClass('active');
//    }

//    $(document.body).click( function(e) {
//         closeMenu();
//    });

//    $(".dialog").click( function(e) {
//        e.stopPropagation();
//    });
//    });
