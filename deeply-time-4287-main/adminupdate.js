let allpro=document.getElementById("AllPro")

allpro.addEventListener("submit",(e)=>{
    e.preventDefault();
   let id=allpro.id_AllPro.value;
   let img=allpro.image_AllPro.value;
   let title=allpro.titl_eAllPro.value;
   let category=allpro.category_AllPro.value;
   let price=allpro.price_AllPro.value;
   let gender=allpro.gender.value
   updateAllPro(id,img,title,category,price,gender)

})
function updateAllPro(id,img,title,category,price,gender){
    // let obj={
    //     "name": "Elegant Cotton Chair",
    //     "images": [
    //       "//cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-3496-273.jpg?v=1668074409",
    //       "//cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-3500-275.jpg?v=1668074409",
    //       "//cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-3488-272.jpg?v=1668074301"
    //     ],
    //     "title": "Tobasco Sweatshirt Green",
    //     "price": 99000,
    //     "id": "1",
    //     "handle": "tobasco-sweatshirt-green",
    //     "description": "<meta charset=\"utf-8\"><span data-mce-fragment=\"1\">Get a seamless experience with koovs.</span>",
    //     "published_at": "2022-11-10T13:25:07+05:30",
    //     "created_at": "2022-11-10T13:23:16+05:30",
    //     "vendor": "Koovs",
    //     "type": "Sweatshirts & Hoodies",
    //     "tags": [
    //       "koovs graphics",
    //       "women",
    //       "women sweatshirts"
    //     ],
    //     "price_min": 99000,
    //     "price_max": 99000,
    //     "available": true,
    //     "price_varies": false,
    //     "compare_at_price": null,
    //     "compare_at_price_min": 0,
    //     "compare_at_price_max": 0,
    //     "compare_at_price_varies": false,
    //     "variants": [
    //       {
    //         "id": 43736394400043,
    //         "title": "XS",
    //         "option1": "XS",
    //         "option2": null,
    //         "option3": null,
    //         "sku": "K071_Green_XS",
    //         "requires_shipping": true,
    //         "taxable": true,
    //         "featured_image": null,
    //         "available": true,
    //         "name": "Tobasco Sweatshirt Green - XS",
    //         "public_title": "XS",
    //         "options": [
    //           "XS"
    //         ],
    //         "price": 99000,
    //         "weight": 0,
    //         "compare_at_price": null,
    //         "inventory_management": "shopify",
    //         "barcode": "8905777012152"
    //       },
    //       {
    //         "id": 43737096192299,
    //         "title": "S",
    //         "option1": "S",
    //         "option2": null,
    //         "option3": null,
    //         "sku": "K071_Green_S",
    //         "requires_shipping": true,
    //         "taxable": true,
    //         "featured_image": null,
    //         "available": true,
    //         "name": "Tobasco Sweatshirt Green - S",
    //         "public_title": "S",
    //         "options": [
    //           "S"
    //         ],
    //         "price": 99000,
    //         "weight": 0,
    //         "compare_at_price": null,
    //         "inventory_management": "shopify",
    //         "barcode": "8905777012169"
    //       },
    //       {
    //         "id": 43737096225067,
    //         "title": "M",
    //         "option1": "M",
    //         "option2": null,
    //         "option3": null,
    //         "sku": "K071_Green_M",
    //         "requires_shipping": true,
    //         "taxable": true,
    //         "featured_image": null,
    //         "available": true,
    //         "name": "Tobasco Sweatshirt Green - M",
    //         "public_title": "M",
    //         "options": [
    //           "M"
    //         ],
    //         "price": 99000,
    //         "weight": 0,
    //         "compare_at_price": null,
    //         "inventory_management": "shopify",
    //         "barcode": "8905777012176"
    //       },
    //       {
    //         "id": 43737096257835,
    //         "title": "L",
    //         "option1": "L",
    //         "option2": null,
    //         "option3": null,
    //         "sku": "K071_Green_L",
    //         "requires_shipping": true,
    //         "taxable": true,
    //         "featured_image": null,
    //         "available": false,
    //         "name": "Tobasco Sweatshirt Green - L",
    //         "public_title": "L",
    //         "options": [
    //           "L"
    //         ],
    //         "price": 99000,
    //         "weight": 0,
    //         "compare_at_price": null,
    //         "inventory_management": "shopify",
    //         "barcode": "8905777012183"
    //       }
    //     ],
    //     "featured_image": "//cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-3496-273.jpg?v=1668074409",
    //     "options": [
    //       {
    //         "name": "Size",
    //         "position": 1,
    //         "values": [
    //           "XS",
    //           "S",
    //           "M",
    //           "L"
    //         ]
    //       }
    //     ],
    //     "url": "/products/tobasco-sweatshirt-green",
    //     "media": [
    //       {
    //         "alt": "Tobasco Sweatshirt Green - Koovs",
    //         "id": 32159928975659,
    //         "position": 1,
    //         "preview_image": {
    //           "aspect_ratio": 0.75,
    //           "height": 1600,
    //           "width": 1200,
    //           "src": "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-3496-273.jpg?v=1668074409"
    //         },
    //         "aspect_ratio": 0.75,
    //         "height": 1600,
    //         "media_type": "image",
    //         "src": "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-3496-273.jpg?v=1668074409",
    //         "width": 1200
    //       },
    //       {
    //         "alt": "Tobasco Sweatshirt Green - Koovs",
    //         "id": 32159928910123,
    //         "position": 2,
    //         "preview_image": {
    //           "aspect_ratio": 0.75,
    //           "height": 1600,
    //           "width": 1200,
    //           "src": "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-3500-275.jpg?v=1668074409"
    //         },
    //         "aspect_ratio": 0.75,
    //         "height": 1600,
    //         "media_type": "image",
    //         "src": "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-3500-275.jpg?v=1668074409",
    //         "width": 1200
    //       },
    //       {
    //         "alt": "Tobasco Sweatshirt Green - Koovs",
    //         "id": 32159929008427,
    //         "position": 3,
    //         "preview_image": {
    //           "aspect_ratio": 0.75,
    //           "height": 1600,
    //           "width": 1200,
    //           "src": "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-3488-272.jpg?v=1668074301"
    //         },
    //         "aspect_ratio": 0.75,
    //         "height": 1600,
    //         "media_type": "image",
    //         "src": "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-3488-272.jpg?v=1668074301",
    //         "width": 1200
    //       }
    //     ]
    //   }
      // obj.images[0]=img;
      // obj.title=title;
      // obj.type=category;
      // obj.price=price
      // obj.tags[0]=gender
    //   console.log(obj)
    fetch(`https://upset-red-outfit.cyclic.app/Mens/${id}`,{
        method:'PUT',
        body:JSON.stringify({
          images:[img],
          name:title,
          category:category,
          price:price,
          tag:[gender]
        }
      
        ),
        // 'Authorization':`Bearer_${token}`,
        
        headers:{
            "content-type":"application/json"
        }
    }).then((res)=>{
        return res.json()
        // console.log(res)
    }).then((data)=>{
        console.log(data)
    }).catch((err)=>{
        console.log(err)
    });
    alert("Product Updated")

}
// let price=document.getElementById("price")
// price.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     let id_price=price.Id_price.value;
//     let price_price=price.Price_price.value;
//     console.log(id_price,price_price);
//     uddatePrice(id_price,price_price)

// })
// function uddatePrice(id_price,price_price){
    
   
  
//     // let obj = {
//     //   price:price_price,
//     // };
  
//     fetch(`https://63f86f636978b1f9105939cb.mockapi.io/womenproducts/${Id_price.value}`,{
//       method:"PATCH",
//       body:JSON.stringify({price:price_price}),
//       headers:{
//         'content-type':'application/json',
//       }
//     })
//     .then(res=>res.json()
        
//     )
    
//     .then((data)=>{
//       console.log(data)
      
//     })
//     .catch((err)=>{
//       console.log(err)
//     })

// }
// loginfunction()
// async function loginfunction(){
//     let obj={
//       username:"Prashant",
//       password:"cool5",
//       email:"prashant@coolcloth.com",
      
//     }
//   try {
//     let resp=await fetch(`https://upset-red-outfit.cyclic.app/adminLogin`,{
//       method:"POST",
//       body:JSON.stringify(obj),
//       headers:{'Content-Type': 'application/json'}
//     })
//     let data=await resp.json()
//     // localStorage.setItem("localAccessToken",data.accessToken)
    
  
//     console.log(data)
//   } catch (error) {
//     alert("please enter valid credential!!")
//   }
    
//   }

// //   updateprice
// updateScoreEmpSalaryButton.addEventListener("click", function () {
//     let id=updateEmpIdInput.value
//     let salary = updateScoreEmpSalary.value;
//     console.log(id, salary);
  
//     let obj = {
//       salary:salary,
//     };
  
//     fetch(`${baseServerURL}/employees/${updateScoreEmpId.value}`,{
//       method:"PATCH",
//       body:JSON.stringify(obj),
//       headers:{
//         'content-type':'application/json',
//       }
//     })
//     .then(res=>res.json())
//     .then((data)=>{
//       console.log(data)
//       fetchAndRenderEmployees();
//     })
//     .catch((err)=>{
//       console.log(err)
//     })
  
//   });