document.addEventListener("DOMContentLoaded", () => {
  // const iconModal = document.querySelectorAll(".iconModal");



  // tems

  const vitBtnThemsChek = document.querySelector(".vit_btn_thems_chek");
  

  


  vitBtnThemsChek.addEventListener("click", () => {
    localStorage.setItem('stor', vitBtnThemsChek.checked)





    const vh = document.querySelector(".vit_header "),
          pDark = document.querySelector(".pDark"),
          iconColor = document.querySelector('.iconColor'),
          bodyContainer = document.querySelector('.body-container'),
          vitHomeContent = document.querySelector('.vit_home_content'),
          vitFooter = document.querySelector('.vit_footer'),
          vitIconAdd = document.querySelector('.vit_iconAdd'),
          vitIconHeaderMenu = document.querySelector('.vit_IconHeaderMenu'),
          vitlistMyImg = document.querySelector('.vit_listMy img'),
          vitlistPlayImg = document.querySelector('.vit_listPlay img'),
          vitlistAboutImg = document.querySelector('.vit_listAbout img'),
          vitModalItem = document.querySelectorAll('.vit_modalItem p'),
          vitFHomeImg = document.querySelector('.vit_footer_link img'),
          vitFSearchImg = document.querySelector('.vit_f-search img'),
          vitFPlayImg = document.querySelector('.vit_f-play img'),
          vitFLinkImg = document.querySelector('.vit_f-like img'),
          vitIconTemsLabl = document.querySelectorAll('.vit_iconTemsLabl') 


          function iconTeamsHeaderAnim(iconTeamClass){
            for (const itc of iconTeamClass) {
              if (vitBtnThemsChek.checked == false) {
                document.querySelector('.moon').classList.add('none')
                document.querySelector('.sun').classList.remove('none')
              } else if (vitBtnThemsChek.checked == true) {
                document.querySelector('.moon').classList.remove('none')
                document.querySelector('.sun').classList.add('none')
              }

            }
          }
          iconTeamsHeaderAnim(vitIconTemsLabl)


    function SecsiotTesm(itemClass) {
      if (vitBtnThemsChek.checked == false) {
        itemClass.classList.add("dark_tem");
        itemClass.classList.remove("white_tem");
      } else if (vitBtnThemsChek.checked == true) {
        itemClass.classList.add("white_tem");
        itemClass.classList.remove("dark_tem");
      }
    }
    SecsiotTesm(vh)
    SecsiotTesm(vitFooter)


    function SecsiotTesmBody(itemClassBody) {
      if (vitBtnThemsChek.checked == false) {
        itemClassBody.classList.add("dark_tem_body");
        itemClassBody.classList.remove("white_tem_body");
      } else if (vitBtnThemsChek.checked == true) {
        itemClassBody.classList.add("white_tem_body");
        itemClassBody.classList.remove("dark_tem_body");
      }
    }
    SecsiotTesmBody(vitHomeContent)
    SecsiotTesmBody(bodyContainer)


   
    function Se(itep) {

        for (const item of itep) {

          item.classList.add('dark_p')
        
        }
      
      
    }
    Se(vitModalItem)



    function tesm(itemClassP) {
      if (vitBtnThemsChek.checked == false) {
        itemClassP.classList.add("colorDark");
        itemClassP.classList.remove("colorWhite");
      } else if (vitBtnThemsChek.checked == true) {
        itemClassP.classList.add("colorWhite");
        itemClassP.classList.remove("colorDark");
      }
    }
    tesm(pDark)
    
  


    function FilltrColor(FilterClass) {
      if (vitBtnThemsChek.checked == false) {
        FilterClass.style.filter = 'invert(1)'
      } else if (vitBtnThemsChek.checked == true) {
        FilterClass.style.filter = 'invert(0)'
      }
    }
    FilltrColor(iconColor)
    FilltrColor(vitIconAdd)
    FilltrColor(vitIconHeaderMenu)
    FilltrColor(vitlistMyImg)
    FilltrColor(vitlistPlayImg)
    FilltrColor(vitlistAboutImg)
    FilltrColor(vitFHomeImg)
    FilltrColor(vitFSearchImg)
    FilltrColor(vitFPlayImg)
    FilltrColor(vitFLinkImg)

  });


  var local = localStorage.getItem('mar');

  if(local == 'true'){
    vitBtnThemsChek.checked = true

    const vh = document.querySelector(".vit_header "),
          pDark = document.querySelector(".pDark"),
          iconColor = document.querySelector('.iconColor'),
          bodyContainer = document.querySelector('.body-container'),
          vitHomeContent = document.querySelector('.vit_home_content'),
          vitFooter = document.querySelector('.vit_footer'),
          vitIconAdd = document.querySelector('.vit_iconAdd'),
          vitIconHeaderMenu = document.querySelector('.vit_IconHeaderMenu'),
          vitlistMyImg = document.querySelector('.vit_listMy img'),
          vitlistPlayImg = document.querySelector('.vit_listPlay img'),
          vitlistAboutImg = document.querySelector('.vit_listAbout img'),
          vitModalItem = document.querySelectorAll('.vit_modalItem p'),
          vitFHomeImg = document.querySelector('.vit_footer_link img'),
          vitFSearchImg = document.querySelector('.vit_f-search img'),
          vitFPlayImg = document.querySelector('.vit_f-play img'),
          vitFLinkImg = document.querySelector('.vit_f-like img'),
          vitIconTemsLabl = document.querySelectorAll('.vit_iconTemsLabl') 


          function iconTeamsHeaderAnim(iconTeamClass){
            for (const itc of iconTeamClass) {
              if (vitBtnThemsChek.checked == false) {
                document.querySelector('.sun').classList.add('none')
                document.querySelector('.moon').classList.remove('none')
              } else if (vitBtnThemsChek.checked == true) {
                document.querySelector('.sun').classList.remove('none')
                document.querySelector('.moon').classList.add('none')
              }

            }
          }
          iconTeamsHeaderAnim(vitIconTemsLabl)

          function SecsiotTesm(itemClass) {
            if (vitBtnThemsChek.checked == false) {
              itemClass.classList.add("dark_tem");
              itemClass.classList.remove("white_tem");
            } else if (vitBtnThemsChek.checked == true) {
              itemClass.classList.add("white_tem");
              itemClass.classList.remove("dark_tem");
            }
          }
          SecsiotTesm(vh)
          SecsiotTesm(vitFooter)

          function SecsiotTesmBody(itemClassBody) {
            if (vitBtnThemsChek.checked == false) {
              itemClassBody.classList.add("dark_tem_body");
              itemClassBody.classList.remove("white_tem_body");
            } else if (vitBtnThemsChek.checked == true) {
              itemClassBody.classList.add("white_tem_body");
              itemClassBody.classList.remove("dark_tem_body");
            }
          }
          SecsiotTesmBody(vitHomeContent)
          SecsiotTesmBody(bodyContainer)
      
      
         
          function Se(itep) {
      
              for (const item of itep) {
      
                item.classList.add('dark_p')
              
              }
            
            
          }
          Se(vitModalItem)
      
      
      
          function tesm(itemClassP) {
            if (vitBtnThemsChek.checked == false) {
              itemClassP.classList.add("colorDark");
              itemClassP.classList.remove("colorWhite");
            } else if (vitBtnThemsChek.checked == true) {
              itemClassP.classList.add("colorWhite");
              itemClassP.classList.remove("colorDark");
            }
          }
          tesm(pDark)
          
        
      
      
          function FilltrColor(FilterClass) {
            if (vitBtnThemsChek.checked == false) {
              FilterClass.style.filter = 'invert(1)'
            } else if (vitBtnThemsChek.checked == true) {
              FilterClass.style.filter = 'invert(0)'
            }
          }
          FilltrColor(iconColor)
          FilltrColor(vitIconAdd)
          FilltrColor(vitIconHeaderMenu)
          FilltrColor(vitlistMyImg)
          FilltrColor(vitlistPlayImg)
          FilltrColor(vitlistAboutImg)
          FilltrColor(vitFHomeImg)
          FilltrColor(vitFSearchImg)
          FilltrColor(vitFPlayImg)
          FilltrColor(vitFLinkImg)
    
  }
  

  // tems





  function remnov() {
    document
      .querySelector(".vit_modalAcaunts")
      .classList.remove("vit_modalAdd");
    document
      .querySelector(".vit_angleDown")
      .classList.remove("vit_iconRotate180");
    document
      .querySelector(".vit_modalAddPhoto")
      .classList.remove("vit_modalAdd");
    document
      .querySelector(".vit_imgIcon")
      .classList.remove("vit_iconRotate180");
    document
      .querySelector(".vit_modalMenuHome")
      .classList.remove("vit_modalAdd");
    document
      .querySelector(".vit_IconHeaderMenu")
      .classList.remove("vit_iconRotate90");
    document
      .querySelector(".vit_settingModal")
      .classList.remove("vit_settingModalAdd");
    }


//  bacgraund
  // function clickBGClose() {
  //   const bgClous = document.querySelector(".vit_wrapsModalRemove");
  //   bgClous.addEventListener("click", () => {
     


  //     document.querySelector(".vit_wrapsModalRemove").classList.remove("vit_wrapsModalBlok")
  //   });
  // }
//  bacgraund





  const clousModalX = document.querySelectorAll('.vit_m-header_close')

  for (const clx of clousModalX) {
    clx.addEventListener('click', ()=>{

      remnov()


    })
  }




  // главная страница

  // выбор аккаунта
  const vitTextAcaunt = document.querySelectorAll(".vit_text_acaunt");
  for (const vta of vitTextAcaunt) {
    vta.addEventListener("click", () => {
      remnov();
      document
        .querySelector(".vit_modalAcaunts")
        .classList.add("vit_modalAdd");
      document
        .querySelector(".vit_angleDown")
        .classList.add("vit_iconRotate180");
    });
  }


  // добавить быстрое фото
  const vitIconAdd = document.querySelectorAll(".vit_icon_add");

  for (const via of vitIconAdd) {
    via.addEventListener("click", () => {
      remnov();
      document.querySelector(".vit_modalAddPhoto").classList.add("vit_modalAdd");
      document.querySelector(".vit_imgIcon").classList.add("vit_iconRotate180");
    });
  }

  // меню пользователя "бургер"
  const vitIconMenu = document.querySelectorAll(".vit_icon_menu ");

  for (const vim of vitIconMenu) {
    vim.addEventListener("click", () => {
      remnov();
      document
        .querySelector(".vit_modalMenuHome")
        .classList.add("vit_modalAdd");
      document
        .querySelector(".vit_IconHeaderMenu")
        .classList.add("vit_iconRotate90");
    });
  }




  // статус пользователя
  const vitStstus = document.querySelectorAll(".vit_ststus");

  for (const vs of vitStstus) {
    vs.addEventListener("click", () => {
      document
        .querySelector(".vit_ststusHeadrModal")
        .classList.add("vit_contentHeaderModal");

      document
        .querySelector(".vit_ststusHeadrModal a")
        .addEventListener("click", () => {
          document
            .querySelector(".vit_ststusHeadrModal")
            .classList.remove("vit_contentHeaderModal");
        });
    });
  }


  // публикации
  const vitPublic  = document.querySelectorAll('.vit_public ')

  // Прокрутка до экрана с публикациями
  for (const vp of vitPublic) {
    vp.addEventListener('click',()=>{
      window.scrollBy(0, 400)
    })
  }

  // подписки
  const vitAftor = document.querySelectorAll(".vit_aftor");

  for (const va of vitAftor) {
    va.addEventListener("click", () => {
      document
        .querySelector(".vit_aftorHeadrModal")
        .classList.add("vit_contentHeaderModal");

      document
        .querySelector(".vit_aftorHeadrModal a")
        .addEventListener("click", () => {
          document
            .querySelector(".vit_aftorHeadrModal")
            .classList.remove("vit_contentHeaderModal");
        });
    });
  }

  // подписчики
  const vitLickUser = document.querySelectorAll(".vit_lickUser");

  for (const vlu of vitLickUser) {
    vlu.addEventListener("click", () => {
      document
        .querySelector(".vit_lickUserHeadrModal")
        .classList.add("vit_contentHeaderModal");

      document
        .querySelector(".vit_lickUserHeadrModal a")
        .addEventListener("click", () => {
          document
            .querySelector(".vit_lickUserHeadrModal")
            .classList.remove("vit_contentHeaderModal");
        });
    });
  }

  // Редактирование профиля
  const settingProf = document.querySelectorAll(".vit_settingProf");

  for (const sp of settingProf) {
    sp.addEventListener("click", () => {
      remnov();
      document
        .querySelector(".vit_settingProfModal")
        .classList.add("vit_settingModaAdd");

      document
        .querySelector(".vit_settingProfModal a")
        .addEventListener("click", () => {
          document
            .querySelector(".vit_settingProfModal")
            .classList.remove("vit_settingModaAdd");
        });
    });
  }

  // настройка рекламы
  const vitLinkSetting = document.querySelectorAll(".settingRecklama");

  for (const vis of vitLinkSetting) {
    vis.addEventListener("click", () => {
      document
        .querySelector(".vit_settingRecklamaModal")
        .classList.add("vit_settingModaAdd");

      document
        .querySelector(".vit_settingRecklamaModal a")
        .addEventListener("click", () => {
          document
            .querySelector(".vit_settingRecklamaModal")
            .classList.remove("vit_settingModaAdd");
        });
    });
  }

  // статистика
  const vitSettingStatus = document.querySelectorAll(".settingStatus");

  for (const vss of vitSettingStatus) {
    vss.addEventListener("click", () => {
      document
        .querySelector(".vit_settingStatusModal")
        .classList.add("vit_settingModaAdd");

      document
        .querySelector(".vit_settingStatusModal a")
        .addEventListener("click", () => {
          document
            .querySelector(".vit_settingStatusModal")
            .classList.remove("vit_settingModaAdd");
        });
    });
  }
  // контакты
  const vitSettingContact = document.querySelectorAll(".settingContact");

  for (const vsc of vitSettingContact) {
    vsc.addEventListener("click", () => {
      document
        .querySelector(".vit_settingContactModal")
        .classList.add("vit_settingModaAdd");

      document
        .querySelector(".vit_settingContactModal a")
        .addEventListener("click", () => {
          document
            .querySelector(".vit_settingContactModal")
            .classList.remove("vit_settingModaAdd");
        });
    });
  }

  // ListMy
  const vitListMy = document.querySelector(".vit_listMy ");
  // ListPlay
  const vitListPlay = document.querySelector(".vit_listPlay ");
  // ListAbout
  const vitListAbout = document.querySelector(".vit_listAbout ");

  // blokListMy
  const vitGridMy = document.querySelector(".vit_grid_my");
  // blokListPlay
  const vitGridPlay = document.querySelector(".vit_grid_play");
  // blokListAbout
  const vitGridAbout = document.querySelector(".vit_grid_about");

  vitListMy.addEventListener("click", () => {
    if (vitListMy.className !== "vit_active") {
      vitListMy.classList.add("vit_active");
      vitGridMy.classList.add("vit_grid_lenta--active");
    }

    vitListPlay.classList.remove("vit_active");
    vitGridPlay.classList.remove("vit_grid_lenta--active");

    vitListAbout.classList.remove("vit_active");
    vitGridAbout.classList.remove("vit_grid_lenta--active");
  });

  vitListPlay.addEventListener("click", () => {
    if (vitListPlay.className !== "vit_active") {
      vitListPlay.classList.add("vit_active");
      vitGridPlay.classList.add("vit_grid_lenta--active");
    }

    vitListMy.classList.remove("vit_active");
    vitGridMy.classList.remove("vit_grid_lenta--active");

    vitListAbout.classList.remove("vit_active");
    vitGridAbout.classList.remove("vit_grid_lenta--active");
  });

  vitListAbout.addEventListener("click", () => {
    if (vitListAbout.className !== "vit_active") {
      vitListAbout.classList.add("vit_active");
      vitGridAbout.classList.add("vit_grid_lenta--active");
    }

    vitListMy.classList.remove("vit_active");
    vitGridMy.classList.remove("vit_grid_lenta--active");

    vitListPlay.classList.remove("vit_active");
    vitGridPlay.classList.remove("vit_grid_lenta--active");
  });

  // menuLentaBtn

  // главная страница

  // страница публикаций
  // перейти в чат с сообщениями
  const vitIconMenuMess = document.querySelectorAll(".vit_icon_menuMess");

  for (const vimm of vitIconMenuMess) {
    vimm.addEventListener("click", () => {
      remnov();
      document
        .querySelector(".vit_modalMenuMessList")
        .classList.add("vit_modalAddList");
      document
        .querySelector(".vit_IconHeaderMenu")
        .classList.add("vit_iconRotate90");
      document
        .querySelector(".vit_wrapsModalRemove")
        .classList.add("vit_wrapsModalBlok");




      document
        .querySelector(".vit_m-header_close")
          .addEventListener("click", () => {
          document
            .querySelector(".vit_modalMenuMessList")
            .classList.remove("vit_modalAddList");
          document
            .querySelector(".vit_IconHeaderMenu")
            .classList.remove("vit_iconRotate90");
          document
            .querySelector(".vit_wrapsModalRemove")
            .classList.remove("vit_wrapsModalBlok");
        });
    });
  }
})