/**
 * Classe post-it
 */
class Postit {
    x;
    y;
    largeur;
    hauteur;
    couleur;
    texte;
    id;
    zindex;
    /**
     * Donné de la classe post-it
     * @param {number} x position horizontale du post-it
     * @param {number} y position verticale du post-it
     * @param {number} largeur largeur du post-it
     * @param {number} hauteur hauteur du post-it
     * @param {string} couleur couleur du post-it
     * @param {string} texte texte du post-it
     * @param {number} id id du post-it
     * @param {number} zindex z-index du post-it
     */
    constructor(x,y,largeur,hauteur,couleur,texte,id,zindex) {
        this.x = x;
        this.y = y;
        this.largeur = largeur;
        this.hauteur = hauteur;
        this.couleur = couleur;
        this.texte = texte;
        this.id = id;
        this.zindex = zindex;
    }
    
    /**
     * Fonction de deplacement du post-it
     * @param {number} x coordonnées horizontales
     * @param {number} y coordonnées verticales
     */
    deplacement(x,y){
        this.x = x;
        this.y = y;
    }

    /**
     * Fonction de redimensionnement du post-it
     * @param {number} largeur largeur du post-it
     * @param {number} hauteur hauteur du post-it
     */
    redimensionnement(largeur,hauteur){
        this.largeur = largeur
        this.hauteur = hauteur
    }
    /**
     * Fonction de changement de texte du post-it
     * @param {string} texte changer texte du post-it
     */
    changerTexte(texte){
        this.texte = texte
    }
    /**
     * Fontion de changement de couleur du post-it
     * @param {string} couleur 
     */
    changerCouleur(couleur){
        this.couleur = couleur
    }
    /**
     * Fonction d'affichage du post-it
     */
    affichePostit(){
        let postit = document.getElementById("postit"+this.id)
        if (postit == null){
            postit = document.createElement("div")
            document.body.appendChild(postit)
        }
        postit.className = "postit_new"
        postit.id = "postit"+this.id
        postit.style.position = "fixed"
        postit.style.top = this.y + "px"
        postit.style.left = this.x + "px"
        postit.style.width = this.largeur + "px"
        postit.style.height = this.hauteur + "px"
        postit.style.backgroundColor = this.couleur
        let texte = postit.querySelector('.divEditable')
        if(texte!=null){
            this.changerTexte(texte.innerHTML)
        }
        
        postit.innerHTML = ''
        
        //Div editable
        let divEditable = document.createElement('div')
        postit.appendChild(divEditable)
        divEditable.className = "divEditable"
        divEditable.contentEditable=false
        divEditable.innerHTML = this.texte
        
        // Menu des post-it
        let MenuPostit = document.createElement('div')
        MenuPostit.className = "menu"

        // Bouton changement de couleur
        let ItemMenu_color = document.createElement('div')
        MenuPostit.appendChild(ItemMenu_color)
        ItemMenu_color.className = "fas fa-palette"
        ItemMenu_color.addEventListener("click", ()=>{
            if (this.couleur == "hotpink"){
                this.couleur = "lawngreen"
            }
            else if (this.couleur == "lawngreen"){
                this.couleur = "lightskyblue"
            }
            else {
                this.couleur = "hotpink"
            }
            this.affichePostit()
        })

        // Bouton de deplacement
        let ItemMenu_moove = document.createElement('div')
        MenuPostit.appendChild(ItemMenu_moove)
        ItemMenu_moove.className = "fas fa-arrows-alt"
        postit.addEventListener("mousedown", (event) => {
            
            let pointerX = event.clientX
            let pointerY = event.clientY
            let posX = this.x
            let posY = this.y
            document.onmousemove = (event) => {
                this.deplacement(event.clientX-(pointerX-posX),event.clientY-(pointerY-posY))
                this.affichePostit()
            }
        })
        postit.addEventListener("mouseup", () => {
            document.onmousemove = () => {
            }
        })

        // Bouton de changement de texte
        let ItemMenu_write = document.createElement('div')
        MenuPostit.appendChild(ItemMenu_write)
        ItemMenu_write.className = "far fa-keyboard"
        ItemMenu_write.addEventListener("click", (event)=> {
            IdPostit = this.id 
            console.log(divEditable.contentEditable)
            if(divEditable.contentEditable!="false"){
                
                divEditable.contentEditable=false
                this.changerTexte(divEditable.innerHTML)
            }
            else{
               divEditable.contentEditable=true 
            }
            
            event.stopPropagation()
        })
        document.body.addEventListener("click", ()=>{   
            IdPostit = -1
        })

        // Bouton de redimmensionnement
        let ItemMenu_size = document.createElement('div')
        MenuPostit.appendChild(ItemMenu_size)
        ItemMenu_size.className = "fas fa-expand-alt"
        ItemMenu_size.addEventListener("mousedown", (event) => {
            event.stopPropagation()
            let pointerX = event.clientX
            let pointerY = event.clientY
            let tailleX = this.largeur
            let tailleY = this.hauteur
            document.onmousemove = (event) => {
                this.redimensionnement(event.clientX-pointerX+tailleX,event.clientY-pointerY+tailleY)
                this.affichePostit()
            }
        })
        ItemMenu_size.addEventListener("mouseup", ()=>{
            document.onmousemove = ()=> {
            }
        })

        // Bouton z-index +
        let ItemMenu_front = document.createElement('div')
        MenuPostit.appendChild(ItemMenu_front)
        ItemMenu_front.className = "fas fa-angle-double-up"
        ItemMenu_front.addEventListener('click' ,(event) => {
            event.stopPropagation()
            postit.style.zIndex = this.zindex
            if (this.zindex<TablePostit.length+1){
                this.zindex++
            }
            else {
            }
        }) 

        // Bouton z-index -
        let ItemMenu_back = document.createElement('div')
        MenuPostit.appendChild(ItemMenu_back)
        ItemMenu_back.className = "fas fa-angle-double-down"
        ItemMenu_back.addEventListener('click' ,(event) => {
            event.stopPropagation()
            postit.style.zIndex = this.zindex
            if (this.zindex>0){
                this.zindex--
            }
            else {
            }           
        }) 

        // Bouton supprimer
        let ItemMenu_delet = document.createElement('div')
        MenuPostit.appendChild(ItemMenu_delet)
        ItemMenu_delet.className = "far fa-trash-alt"
        ItemMenu_delet.addEventListener("click", function(){
            deletChild(this.id)
            document.body.removeChild(postit)
            
        })
        postit.appendChild(MenuPostit)
    }
    
}