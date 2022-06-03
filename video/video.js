document.addEventListener("DOMContentLoaded", () => {
  // tems

  var myStor = localStorage.getItem('stor')


  localStorage.setItem('mar', localStorage.getItem('stor'))


  const vitFooter = document.querySelector('.vit_footer'),
        iconTemsResurt = document.querySelectorAll('.iconTemsResurt'),
        bodyContainer = document.querySelector('.body-container'),
        vitPodpisBtn = document.querySelectorAll('.vit_podpisBtn')
      

  function bodyTesm(bodyClass){
    if (myStor == 'false') {
      bodyClass.classList.add('dark_tem_body')
      bodyClass.classList.remove('white_tem_body')
    } else if (myStor == 'true') {
      bodyClass.classList.add('white_tem_body')
      bodyClass.classList.remove('dark_tem_body')
    }
  }
  bodyTesm(bodyContainer)



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

function btnTeam(btnClass){
  for (const bC of btnClass) {
    bC.classList.add('bgWhite')
  }
}
btnTeam(vitPodpisBtn)




  // tems

  function remnov() {
    document
      .querySelector(".vit_modalMenuVideo")
      .classList.remove("vit_bottomModalAdd");
    document
      .querySelector(".vit_modalComments")
      .classList.remove("vit_bottomModalAdd");
    document
      .querySelector(".vit_modalToVideo")
      .classList.remove("vit_bottomModalAdd");

    document
      .querySelector(".vit_modalPhoto")
      .classList.remove("vit_bottomModalAdd");

    document.querySelector(".vit_wrapsModalRemove").style.display =
      "none";

  }

  const clousModalX = document.querySelectorAll(".vit_m-header_close");

  for (const clx of clousModalX) {
    clx.addEventListener("click", () => {
      remnov();
    });
  }

  // лайк

  const likes = document.querySelectorAll(".iconLike");

  for (const like of likes) {
    like.addEventListener("click", () => {
      like.children[0].classList.toggle("vit_none");
      like.children[1].classList.toggle("vit_none");
    });
  }

  // лайк

  // сохранить в закладки
  const vitPiplIconRight = document.querySelectorAll(".iconBookmark");

  for (const vPIR of vitPiplIconRight) {
    vPIR.addEventListener("click", () => {
      vPIR.children[0].classList.toggle("vit_none");
      vPIR.children[1].classList.toggle("vit_none");
    });
  }
  // сохранить в закладки

  const iconMenuVideo = document.querySelectorAll(".iconMenuVideo");

  for (const iMV of iconMenuVideo) {
    iMV.addEventListener("click", () => {
      remnov();
      document
        .querySelector(".vit_modalMenuVideo")
        .classList.add("vit_bottomModalAdd");

        document.querySelector(".vit_wrapsModalRemove").style.display = "block";

        document
          .querySelector(".vit_wrapsModalRemove")
          .addEventListener("click", () => {
  
            document
        .querySelector(".vit_modalMenuVideo")
        .classList.remove("vit_bottomModalAdd");
  
            document.querySelector(".vit_wrapsModalRemove").style.display =
              "none";
          });
    });
  }

  // Просмотр коментов

  const vitaddComment = document.querySelectorAll(".vit_addComment");
  for (const vaC of vitaddComment) {
    remnov();
    vaC.addEventListener("click", () => {
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

  // переслать
  const vitModalToVideo = document.querySelectorAll(".vit_addModalToVideo");
  for (const viMtV of vitModalToVideo) {
    remnov();
    viMtV.addEventListener("click", () => {
      document
        .querySelector(".vit_modalToVideo")
        .classList.add("vit_bottomModalAdd");

      document.querySelector(".vit_wrapsModalRemove").style.display = "block";

      document
        .querySelector(".vit_wrapsModalRemove")
        .addEventListener("click", () => {

          document
            .querySelector(".vit_modalToVideo")
            .classList.remove("vit_bottomModalAdd");

          document.querySelector(".vit_wrapsModalRemove").style.display =
            "none";
        });
    });
  }

  // добавить видео или фото

  const vitIconPhoto = document.querySelectorAll(".vit_iconPhoto");

  for (const viPho of vitIconPhoto) {
    remnov()
    viPho.addEventListener("click", () => {
      remnov()
      document
        .querySelector(".vit_modalPhoto")
        .classList.add("vit_bottomModalAdd");
      document.querySelector(".vit_wrapsModalRemove").style.display = "block";

      document
        .querySelector(".vit_wrapsModalRemove")
        .addEventListener("click", () => {
          document
            .querySelector(".vit_modalPhoto")
            .classList.remove("vit_bottomModalAdd");
          document.querySelector(".vit_wrapsModalRemove").style.display =
            "none";
        });
    });
  }





});
