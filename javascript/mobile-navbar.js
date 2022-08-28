class MobileNavbar {
  constructor(mobileMenu, barraList, barraLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.barraList = document.querySelector(barraList);
    this.barraLinks = document.querySelectorAll(barraLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.barraLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.barraList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }

  
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".barra-list",
  ".barra-list li"
);
mobileNavbar.init();

