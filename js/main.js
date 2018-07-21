window.onload = () => {
  particlesJS.load("particles-js", "assets/particles.json", function() {});

  var rellax = new Rellax(".rellax", {
    //   center:true
  });

  // Navbar and dropdowns
  var toggle = document.getElementsByClassName("navbar-toggler")[0],
    collapse = document.getElementsByClassName("navbar-collapse")[0],
    dropdowns = document.getElementsByClassName("dropdown");

  // Toggle if navbar menu is open or closed
  function toggleMenu() {
    collapse.classList.toggle("collapse");
    collapse.classList.toggle("in");
  }

  // Close all dropdown menus
  function closeMenus() {
    for (var j = 0; j < dropdowns.length; j++) {
      dropdowns[j]
        .getElementsByClassName("dropdown-toggle")[0]
        .classList.remove("dropdown-open");
      dropdowns[j].classList.remove("open");
    }
  }

  // Add click handling to dropdowns
  for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener("click", function() {
      if (document.body.clientWidth < 768) {
        var open = this.classList.contains("open");
        closeMenus();
        if (!open) {
          this.getElementsByClassName("dropdown-toggle")[0].classList.toggle(
            "dropdown-open"
          );
          this.classList.toggle("open");
        }
      }
    });
  }

  // Close dropdowns when screen becomes big enough to switch to open by hover
  function closeMenusOnResize() {
    if (document.body.clientWidth >= 768) {
      closeMenus();
      collapse.classList.add("collapse");
      collapse.classList.remove("in");
    }
  }

  // Event listeners
  window.addEventListener("resize", closeMenusOnResize, false);
  toggle.addEventListener("click", toggleMenu, false);

  // let itensMenu = document.querySelectorAll("nav a");
  // itensMenu.forEach(a => {
  //   a.addEventListener("click", function(evt) {
  //     let linkMenuAtivo = document.querySelector("nav .nav-item.active");
  //     linkMenuAtivo.classList.remove("active");
  //     evt.target.parentNode.classList.add("active");
  //   });
  // });
  // let destaqueMenuAtivo = document.querySelector(".navbar-item-active-status");
  // destaqueMenuAtivo.style.opacity = 1;
  // let windowHeight = document.documentElement.scrollHeight;
  // let larguraMenu = document.querySelector("nav ul").getBoundingClientRect().width;
  // var ultimaPosicaoScroll = 0;
  // var ticking = false;

  //   function atualizarPosicaoDoDestaqueDoMenu(scroll) {
  //     let porcentagem = scroll / windowHeight;
  //     let posicao = larguraMenu * porcentagem;
  //         destaqueMenuAtivo.style.left = `${posicao}px`;
  //   }

  //   window.addEventListener('scroll', function(e) {

  //   ultimaPosicaoScroll = window.scrollY;

  //   if (!ticking) {

  //       window.requestAnimationFrame(function() {
  //       atualizarPosicaoDoDestaqueDoMenu(ultimaPosicaoScroll);
  //       ticking = false;
  //       });

  //       ticking = true;

  //   }

  //   });

  //   itensMenu.forEach(li => {

  // li.addEventListener("mouseover", function(evt){
  //     let pos = evt.target.getBoundingClientRect();
  //     console.log(pos);
  //     let posX = pos && pos.x ;
  //     let width = pos && pos.width | 0;

  //     // destaqueMenuAtivo.style.width = `${width}px`;
  //     // console.log(document.querySelector("nav::before"));

  //     // let linkMenuAtivo = document.querySelector("nav .nav-item.active");
  //     // linkMenuAtivo.classList.remove("active");
  //     // evt.target.parentNode.classList.add("active");

  //     console.log(1);
  // })
  //   });
};
