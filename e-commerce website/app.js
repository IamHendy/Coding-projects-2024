// Product array
const products = [
    {
    
    
        id: 1,
        title: "Stilletos",
        price: 3000,
        colors: [
           {
            code: "#D4AF37",
            img: "./images/stilleto 2.webp"
           },
           {
            code: "black",
            img: "./images/stilleto-black.png"
           },
        ],
    },
    
    {
        id: 2,
        title: "Wedges",
        price: 1500,
        colors: [
           {
            code: "pink",
            img: "./images/wedge.png"
           },
           {
            code: "wheat",
            img: "./images/wedge2.avif"
           },
        ],
    },
    
    {
        id: 3,
        title: "Boots",
        price: 3500,
        colors: [
           {
            code: "black",
            img: "./images/boot2.png"
           },
           {
            code: "wheat",
            img: "./images/boot white.jpg"
           },
        ],
    },
    
    {
        id: 4,
        title: "Red Bottoms",
        price: 4500,
        colors: [
           {
            code: "black",
            img: "./images/red bottom.jpg"
           },
           {
            code: "wheat",
            img: "./images/nude-redbottom.webp"
           },
        ],
    },
    
    {
        id: 5,
        title: "Platform Heels",
        price: 3300,
        colors: [
           {
            code: "black",
            img: "./images/platform heels.webp"
           },
           {
            code: "white ",
            img: "./images/platform-2.webp"
           },
        ],
    },
    ];
    
    

// DOM elements
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
let chosenProduct = products[0]; 
const currentProductImg = document.querySelector(".productImg");
const currentproductDetails = document.querySelector(".productDetails");
const productTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDescription = document.querySelector(".productDescription"); // Fixed missing dot
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {

        // Change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;


        // Change the chosen product
        chosenProduct = products[index]; 

        // Change texts of currentProduct
        productTitle.textContent = chosenProduct.title; 
        currentProductPrice.textContent = "Ksh" + chosenProduct.price; 

        currentProductImg.src = chosenProduct.colors[0].img;

        // Assign new color
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code; 
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
      currentProductImg.src = chosenProduct.colors[index].img;
    });
  });

  currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white"
    })
  })

  const productButton = document.querySelector(".productButton");
  const payment = document.querySelector(".payment");
  const close = document.querySelector(".close ");

productButton.addEventListener("click", () => {
    payment.style.display="flex"
})

close.addEventListener("click", () =>{
    payment.style.display="none"
})

  