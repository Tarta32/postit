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
        postit.id = "postit"+this.id
        postit.style.position = "fixed"
        postit.style.top = this.x + "px"
        postit.style.left = this.y + "px"
        postit.style.width = this.largeur + "px"
        postit.style.height = this.hauteur + "px"
        postit.style.backgroundColor = this.couleur
        postit.innerHTML = this.texte
    }

}