const headerburgermenu = document.getElementById("headerburgermenu");
const minimenu = document.getElementById("minimenu");

const NewRightbutton = document.getElementById("NewRightbutton");
const NewLeftbutton = document.getElementById("NewLeftbutton");
const NewsContain = document.getElementById("NewsContain");
const productsNew1 = document.getElementById("productsNew1");
const productsNew6 = document.getElementById("productsNew6");
const NewsCarousel = document.getElementById("NewsCarousel");

const AssortimentRightbutton = document.getElementById("AssortimentRightbutton");
const AssortimentLeftbutton = document.getElementById("AssortimentLeftbutton");
const AssortimentContain = document.getElementById("AssortimentContain");
const productsAssortiment1 = document.getElementById("productsAssortiment1");
const productsAssortiment6 = document.getElementById("productsAssortiment6");
const AssortimentCarousel = document.getElementById("AssortimentCarousel");


const SalesRightbutton = document.getElementById("SalesRightbutton");
const SalesLeftbutton = document.getElementById("SalesLeftbutton");
const SalesContain = document.getElementById("SalesContain");
const productsSales1 = document.getElementById("productsSales1");
const productsSales6 = document.getElementById("productsSales6");
const SalesCarousel = document.getElementById("SalesCarousel");





let burgermenuActive = false
headerburgermenu.addEventListener('click', ()=>{
    if (!burgermenuActive){

        headerburgermenu.style.animation = '';
      headerburgermenu.style.animation = 'rotatemenu 0.3s linear forwards';

      minimenu.style.animation = 'none';
      minimenu.style.animation = 'minimenuAppearance 0.3s linear forwards';
      minimenu.style.display = 'block'

      burgermenuActive = true;
    }else{
closeBurgerMenu()
    }
})
function closeBurgerMenu(){
  if(burgermenuActive){
          headerburgermenu.style.animation = '';
headerburgermenu.style.animation = 'rotatemenuback 0.3s linear forwards';

      minimenu.style.animation = 'none';
      minimenu.style.animation = 'minimenuAppearanceback 0.3s linear forwards';
      setTimeout(() => {
        minimenu.style.display = 'none'
        headerburgermenu.style.animation = 'none';
      }, 300);
      

burgermenuActive = false;
}
}

  let TransformXNewRightLeftbutton = 0
NewRightbutton.addEventListener('click',()=>{
const productsNew6Rect = productsNew6.getBoundingClientRect();
const NewsCarouselRect = NewsCarousel.getBoundingClientRect();
if(productsNew6Rect.right <= NewsCarouselRect.right){return;}
   TransformXNewRightLeftbutton += -20
 NewsContain.style.transform =`translateX(${TransformXNewRightLeftbutton}%)`
})
NewLeftbutton.addEventListener('click',()=>{

const productsNew1Rect = productsNew1.getBoundingClientRect();
const NewsCarouselRect = NewsCarousel.getBoundingClientRect();
if(productsNew1Rect.left >= NewsCarouselRect.left){return;}
   TransformXNewRightLeftbutton += 20
 NewsContain.style.transform =`translateX(${TransformXNewRightLeftbutton}%)`

})


  let TransformXAssortimentRightLeftbutton = 0
AssortimentRightbutton.addEventListener('click',()=>{
const productsAssortiment6Rect = productsAssortiment6.getBoundingClientRect();
const AssortimentCarouselRect = AssortimentCarousel.getBoundingClientRect();
if(productsAssortiment6Rect.right <= AssortimentCarouselRect.right){return;}
   TransformXAssortimentRightLeftbutton += -20
 AssortimentContain.style.transform =`translateX(${TransformXAssortimentRightLeftbutton}%)`
})
AssortimentLeftbutton.addEventListener('click',()=>{

const productsAssortiment1Rect = productsAssortiment1.getBoundingClientRect();
const AssortimentCarouselRect = AssortimentCarousel.getBoundingClientRect();
if(productsAssortiment1Rect.left >= AssortimentCarouselRect.left){return;}
   TransformXAssortimentRightLeftbutton += 20
 AssortimentContain.style.transform =`translateX(${TransformXAssortimentRightLeftbutton}%)`

})



  let TransformXSalesRightLeftbutton = 0
SalesRightbutton.addEventListener('click',()=>{
const productsSales6Rect = productsSales6.getBoundingClientRect();
const SalesCarouselRect = SalesCarousel.getBoundingClientRect();
if(productsSales6Rect.right <= SalesCarouselRect.right){return;}
   TransformXSalesRightLeftbutton += -20
 SalesContain.style.transform =`translateX(${TransformXSalesRightLeftbutton}%)`
})
SalesLeftbutton.addEventListener('click',()=>{

const productsSales1Rect = productsSales1.getBoundingClientRect();
const SalesCarouselRect = SalesCarousel.getBoundingClientRect();
if(productsSales1Rect.left >= SalesCarouselRect.left){return;}
   TransformXSalesRightLeftbutton += 20
 SalesContain.style.transform =`translateX(${TransformXSalesRightLeftbutton}%)`

})