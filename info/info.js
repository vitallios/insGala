document.addEventListener("DOMContentLoaded", () => {
    const vitBtnThemsChek = document.querySelector(".vit_btn_thems_chek");











  
    localStorage.setItem('mar', localStorage.getItem('stor'))


   var myStor = localStorage.getItem('stor')



















  
    const vitFooter = document.querySelector('.vit_footer '),
    iconTemsResurt = document.querySelectorAll('.iconTemsResurt'),
    vitInfo = document.querySelector('.vit_info'),
    vitiAddBtn = document.querySelectorAll('.vit_i-add-btn')
    

      function SecsiotTesm(itemClass) {
        if (myStor == 'false') {
          itemClass.classList.add('dark_tem')
          itemClass.classList.remove('white_tem')
        } else if (myStor == 'true') {
          itemClass.classList.add('white_tem')
          itemClass.classList.remove('dark_tem')
        }
      }
      SecsiotTesm(vitFooter)

      function bodyTesm(bodyClass) {
        if (myStor == 'false') {
          bodyClass.classList.add('dark_tem_body')
          bodyClass.classList.remove('white_tem_body')
        } else if (myStor == 'true') {
          bodyClass.classList.add('white_tem_body')
          bodyClass.classList.remove('dark_tem_body')
        }
      }
      bodyTesm(vitInfo)
    
      function iconTeam(iconClass){
        for (const iC of iconClass) {
          if (myStor == 'false') {
            iC.classList.add('dark_fil1')
            iC.classList.remove('dark_fil0')
          } else if (myStor == 'true') {
            iC.classList.add('dark_fil0')
            iC.classList.remove('dark_fil1')
          }
        }
      }
    iconTeam(iconTemsResurt)
    iconTeam(vitiAddBtn)
    
 });
  