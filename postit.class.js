class Postit {
    x;
    y;
    largeur;
    hauteur;
    couleur;
    texte;
    id;

    constructor(x,y,largeur,hauteur,couleur,texte,id) {
        this.x = x;
        this.y = y;
        this.largeur = largeur;
        this.hauteur = hauteur;
        this.couleur = couleur;
        this.texte = texte;
        this.id = id;
    }

    deplacement(x,y){
        this.x = x;
        this.y = y;
    }
    redimensionnement(largeur,hauteur){
        this.largeur = largeur
        this.hauteur = hauteur
    }
    changerTexte(texte){
        this.texte = texte
    }
    changerCouleur(couleur){
        this.couleur = couleur
    }
    affichePostit(){
        let postit = document.getElementById("postit"+this.id)
        if (postit == null){
            postit = document.createElement("div")
            document.body.appendChild(postit)
        }
        postit.className = "postit_new"
        postit.id = "postit"+this.id
        postit.style.position = "fixed"
        postit.style.top = this.x + "px"
        postit.style.left = this.y + "px"
        postit.style.width = this.largeur + "px"
        postit.style.height = this.hauteur + "px"
        postit.style.backgroundColor = this.couleur
        postit.innerHTML = this.texte
        let MenuPostit = document.createElement('div')
        postit.appendChild(MenuPostit)
        MenuPostit.className = "menu"
        let ItemMenu_moove = document.createElement('div')
        MenuPostit.appendChild(ItemMenu_moove)
        ItemMenu_moove.className = "fas fa-arrows-alt"
        let ItemMenu_write = document.createElement('div')
        MenuPostit.appendChild(ItemMenu_write)
        ItemMenu_write.className = "far fa-keyboard"
        let ItemMenu_size = document.createElement('div')
        MenuPostit.appendChild(ItemMenu_size)
        ItemMenu_size.className = "fas fa-expand-alt"
        let ItemMenu_front = document.createElement('div')
        MenuPostit.appendChild(ItemMenu_front)
        ItemMenu_front.className = "fas fa-angle-double-up"
        let ItemMenu_back = document.createElement('div')
        MenuPostit.appendChild(ItemMenu_back)
        ItemMenu_back.className = "fas fa-angle-double-down"
        let ItemMenu_delet = document.createElement('div')
        MenuPostit.appendChild(ItemMenu_delet)
        ItemMenu_delet.className = "far fa-trash-alt"
        ItemMenu_delet.addEventListener("click", function(){
            document.body.removeChild(postit)
            deletChild(this.id)
        
        })
        
    }

}