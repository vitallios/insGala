document.addEventListener("DOMContentLoaded", () => {
  const vitBtnThemsChek = document.querySelector(".vit_btn_thems_chek");


  var myStor = localStorage.getItem('stor')

  




  localStorage.setItem('mar', localStorage.getItem('stor'))



  // vitBtnThemsChek.addEventListener("click", () => {
    const vh = document.querySelector(".vit_header "),
      vsw = document.querySelector(".vit_story_wrap"),
      vitFooter = document.querySelector(".vit_footer"),
      bodyContainer = document.querySelector(".body-container"),
      vitimgIcon = document.querySelectorAll(".vit_imgIcon"),
      vitIconItem = document.querySelectorAll(".vit_icon_item"),
      vitPiplMenu = document.querySelectorAll(".vit_pipl_menu"),
      vitFooterlinkImg = document.querySelectorAll(".vit_footer_link img"),
      vitTextAcauntP = document.querySelectorAll(".vit_text_acaunt p"),
      vitAngleDownImg = document.querySelectorAll(".vit_angleDown img"),
      vitPipl = document.querySelector(".vit_pipl"),
      vitStory = document.querySelector(".vit_story"),
      vitmBody = document.querySelectorAll(".vit_m-body"),
      tagColor = document.querySelectorAll(".linkTagColor");





    function SecsiotTesm(itemClass) {
      if (myStor == 'false') {
        itemClass.classList.add("dark_tem");
        itemClass.classList.remove("white_tem");
      } else if (myStor == 'true') {
        itemClass.classList.add("white_tem");
        itemClass.classList.remove("dark_tem");
      }
    }
    SecsiotTesm(vh);
    SecsiotTesm(bodyContainer);
    SecsiotTesm(vitFooter);

    function colorTag() {
      for (const tc of tagColor) {
        if (myStor == 'false') {
          tc.classList.add("dark_p");
          tc.classList.remove("white_p");
        } else if (myStor == 'true') {
          tc.classList.add("white_p");
          tc.classList.remove("dark_p");
        }
      }
    }
    colorTag("tagColor");

    function SecsiotTesmBody(itemClassBody) {
      if (myStor == 'false') {
        itemClassBody.classList.add("dark_tem_body");
        itemClassBody.classList.remove("white_tem_body");
      } else if (myStor == 'true') {
        itemClassBody.classList.add("white_tem_body");
        itemClassBody.classList.remove("dark_tem_body");
      }
    }
    SecsiotTesmBody(vsw);
    SecsiotTesmBody(vitPipl);
    SecsiotTesmBody(vitStory);

    function SecsiotTesmIcon(itemClassB) {
      for (const icb of itemClassB) {
        if (myStor == 'false') {
          icb.classList.add("dark_fil1");
          icb.classList.remove("white_fil0");
        } else if (myStor == 'true') {
          icb.classList.add("white_fil0");
          icb.classList.remove("dark_fil1");
        }
      }
    }
    SecsiotTesmIcon(vitFooterlinkImg);
    SecsiotTesmIcon(vitIconItem);
    SecsiotTesmIcon(vitimgIcon);
    SecsiotTesmIcon(vitPiplMenu);
    SecsiotTesmIcon(vitTextAcauntP);
    SecsiotTesmIcon(vitAngleDownImg);
    SecsiotTesmIcon(vitmBody);
  // });

  // tems

  function remnovModal() {
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
      .querySelector(".vit_modalMenuMessList")
      .classList.remove("vit_modalAdd");
    document
      .querySelector(".vit_IconHeaderMenu")
      .classList.remove("vit_iconRotate90");
    document
      .querySelector(".vit_piplMenuContent")
      .classList.remove("vit_bottomModalAdd");
    document
      .querySelector(".vit_modalPapMesseg")
      .classList.remove("vit_bottomModalAdd");
    document
      .querySelector(".vit_piplMenuContent")
      .classList.remove("vit_bottomModalAdd");
    document
      .querySelector(".vit_modalComments")
      .classList.remove("vit_bottomModalAdd");
    document
      .querySelector(".vit_modalADDComments")
      .classList.remove("vit_bottomModalAdd");

    document.querySelector(".vit_wrapsModalRemove")
    .style.display = "none";

  }

  const clousModalX = document.querySelectorAll(".vit_m-header_close");

  for (const clx of clousModalX) {
    clx.addEventListener("click", () => {
      remnovModal();
    });
  }

  // лайк
  const vitIconHeart = document.querySelectorAll(".vit_iconHeart");

  for (const vIH of vitIconHeart) {
    vIH.addEventListener("click", () => {
      vIH.children[0].classList.toggle("vit_none");
      vIH.children[1].classList.toggle("vit_none");
    });
  }
  // лайк

  // сохранить в закладки
  const vitPiplIconRight = document.querySelectorAll(".vit_pipl-icon_right");

  for (const vPIR of vitPiplIconRight) {
    vPIR.addEventListener("click", () => {
      vPIR.children[0].classList.toggle("vit_none");
      vPIR.children[1].classList.toggle("vit_none");
    });
  }
  // сохранить в закладки

  // выбор аккаунта
  const vitTextAcaunt = document.querySelectorAll(".vit_text_acaunt");
  for (const vta of vitTextAcaunt) {
    vta.addEventListener("click", () => {
      remnovModal();
      document.querySelector(".vit_modalAcaunts").classList.add("vit_modalAdd");
      document
        .querySelector(".vit_angleDown")
        .classList.add("vit_iconRotate180");
    });
  }

  // добавить быстрое фото
  const vitIconAdd = document.querySelectorAll(".vit_icon_add");

  for (const via of vitIconAdd) {
    via.addEventListener("click", () => {
      remnovModal();
      document
        .querySelector(".vit_modalAddPhoto")
        .classList.add("vit_modalAdd");
      document.querySelector(".vit_imgIcon").classList.add("vit_iconRotate180");
    });
  }

  // ваши сообщения
  const vitModalMenuHome = document.querySelectorAll(".vit_IconHeaderMenu");

  for (const vmmh of vitModalMenuHome) {
    vmmh.addEventListener("click", () => {
      remnovModal();
      document
        .querySelector(".vit_modalMenuMessList")
        .classList.add("vit_modalAdd");
      document
        .querySelector(".vit_IconHeaderMenu")
        .classList.add("vit_iconRotate90");
    });
  }

  // меню поста

  const vitPipMenu = document.querySelectorAll(".vit_pipl_menu");

  for (const vpm of vitPipMenu) {
    remnovModal();
    vpm.addEventListener("click", () => {
      document
        .querySelector(".vit_piplMenuContent")
        .classList.add("vit_bottomModalAdd");
      document.querySelector(".vit_wrapsModalRemove").style.display = "block";

      document
        .querySelector(".vit_wrapsModalRemove")
        .addEventListener("click", () => {
          document.querySelector(".vit_wrapsModalRemove").style.display =
            "none";
          document
            .querySelector(".vit_piplMenuContent")
            .classList.remove("vit_bottomModalAdd");
        });
    });
  }

  // Просмотр коментов

  const vitIconComment = document.querySelectorAll(".vit_iconComment");
  for (const viC of vitIconComment) {
    remnovModal();
    viC.addEventListener("click", () => {
      document
        .querySelector(".vit_modalComments")
        .classList.add("vit_bottomModalAdd");
      document.querySelector(".vit_wrapsModalRemove").style.display = "block";

      document
        .querySelector(".vit_wrapsModalRemove")
        .addEventListener("click", () => {
          document
            .querySelector(".vit_modalComments")
            .classList.remove("vit_bottomModalAdd");
          document.querySelector(".vit_wrapsModalRemove").style.display =
            "none";
        });
    });
  }
  // Написать  коментов

  const vitAddComment = document.querySelectorAll(".vit_addComment");
  for (const vAC of vitAddComment) {
    remnovModal();
    vAC.addEventListener("click", () => {
      document
        .querySelector(".vit_modalADDComments")
        .classList.add("vit_bottomModalAdd");
      document.querySelector(".vit_wrapsModalRemove").style.display = "block";

      document
        .querySelector(".vit_wrapsModalRemove")
        .addEventListener("click", () => {
          document
            .querySelector(".vit_modalADDComments")
            .classList.remove("vit_bottomModalAdd");
          document.querySelector(".vit_wrapsModalRemove").style.display =
            "none";
        });
    });
  }

  // переслать

  const vitIconPaper = document.querySelectorAll(".vit_iconPaper");

  for (const viP of vitIconPaper) {
    remnovModal();
    viP.addEventListener("click", () => {
      document
        .querySelector(".vit_modalPapMesseg")
        .classList.add("vit_bottomModalAdd");
      document.querySelector(".vit_wrapsModalRemove").style.display = "block";

      document
        .querySelector(".vit_wrapsModalRemove")
        .addEventListener("click", () => {
          document
            .querySelector(".vit_modalPapMesseg")
            .classList.remove("vit_bottomModalAdd");
          document.querySelector(".vit_wrapsModalRemove").style.display =
            "none";
        });
    });
  }




  // добавить видео или фото

  // const vitIconPhoto = document.querySelectorAll(".vit_iconPhoto");

  // for (const viPho of vitIconPhoto) {
  //   remnovModal();
  //   viPho.addEventListener("clock", () => {
  //     document
  //       .querySelector(".vit_modalPhoto")
  //       .classList.add("vit_bottomModalAdd");
  //     document.querySelector(".vit_wrapsModalRemove").style.display = "block";

  //     document
  //       .querySelector(".vit_wrapsModalRemove")
  //       .addEventListener("click", () => {
  //         document
  //           .querySelector(".vit_modalPhoto")
  //           .classList.remove("vit_bottomModalAdd");
  //         document.querySelector(".vit_wrapsModalRemove").style.display =
  //           "none";
  //       });
  //   });
  // }



  
});
