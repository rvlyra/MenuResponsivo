class MbMenuItems {
    constructor(mbMenu,  menuItems, menuLinks){
        this.mbMenu = document.querySelector(mbMenu);
        this.menuItems = document.querySelector(menuItems);
        this.menuLinks = document.querySelectorAll(menuLinks);
        this.activeClass = "active";

        //aplicando o método bind
        this.handleClick = this.handleClick.bind(this);
    }

    // Efeito de fade na transição
    animationLinks(){
        this.menuLinks.forEach((link, index) => {
            // console.log(index / 7 + 0.3) // testando cada posição de links
            // verificando se o link possui a propriedade animation. Senão, inserimos com o método abaixo.
            link.style.animation 
            ? (link.style.animation = "")
            : (link.style.animation = `menuLinksFade ease 0.5s forwards ${index / 7 + 0.3}s`)
        })
    }

    // Efeito Toggle do botão de menu
    handleClick() {
        this.menuItems.classList.toggle(this.activeClass);
        this.mbMenu.classList.toggle(this.activeClass)
        // console.log("Olá, mundo👍!")
        this.animationLinks()
    }

    addClickEvent() {
        this.mbMenu.addEventListener("click", this.handleClick)
    }


    init() {
        if (this.mbMenu){
            this.addClickEvent();
        }
        return this;
    }   
}

const mbMenuItems = new MbMenuItems(
    ".mb-menu",
    ".menu-items",
    ".menu-items li",
);

mbMenuItems.init();