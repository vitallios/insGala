document.addEventListener("DOMContentLoaded", () => {
    
    // tems
  
    // const vitBtnThemsChek = document.querySelector(".vit_btn_thems_chek");

  
    // vitBtnThemsChek.addEventListener("click", () => {

      var myStor = localStorage.getItem('stor')

      localStorage.setItem('mar', localStorage.getItem('stor'))
      const vs = document.querySelector(".vit_search"),
            vitFooter = document.querySelector('.vit_footer'),
            bodyContainer = document.querySelector('.body-container'),
            vitFooterLink = document.querySelectorAll('.iconTemsResurt')
        
  
  
      function SecsiotTesm(itemClass) {
        if (myStor == 'false') {
          itemClass.classList.add("dark_tem");
          itemClass.classList.remove("white_tem");
        } else if (myStor == 'true') {
          itemClass.classList.add("white_tem");
          itemClass.classList.remove("dark_tem");
        }
      }
      SecsiotTesm(vs)
      SecsiotTesm(vitFooter)
  
  
      function SecsiotTesmBody(itemClassBody) {
        if (myStor == 'false') {
          itemClassBody.classList.add("dark_tem_body");
          itemClassBody.classList.remove("white_tem_body");
        } else if (myStor == 'true') {
          itemClassBody.classList.add("white_tem_body");
          itemClassBody.classList.remove("dark_tem_body");
        }
      }
      SecsiotTesmBody(bodyContainer)

      function SecsiotTesmIcon(itemIcons){
        for (const itemIcon of itemIcons) {
          
          if (myStor == 'false') {
            itemIcon.classList.add("dark_fil1");
            itemIcon.classList.remove("dark_fil0");
          } else if (myStor == 'true') {
            itemIcon.classList.add("dark_fil0");
            itemIcon.classList.remove("dark_fil1");
          }

        }
      }

      SecsiotTesmIcon(vitFooterLink)



    });
  
    // tems
  
    function remnov() {

 
  
      }
  

  
  
  
  
    // главная страница
  
    // выбор аккаунта
    
  // })