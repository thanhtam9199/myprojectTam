document.addEventListener("DOMContentLoaded",function(){
   $('.product__transport-icon--local').click(function () { 
       $('.product__transport-icon--local').toggleClass('icon-down-to-up');  
   });
   $(function(){
    $('img.img-child').hover(function(){
        let img = $(this).attr('src');
       $('img#img-main').attr('src', img);    
    })

    
})
},false)
