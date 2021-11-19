let TablePostit = []
let IdPostit = -1

// Creation de post-it rose 
document.getElementById("rose").addEventListener("click",()=>{
    TablePostit.push(new Postit(300,100,150,200,"hotpink","",TablePostit.length,0))
    TablePostit[TablePostit.length-1].affichePostit()})
// Creation de post-it vert 
document.getElementById("vert").addEventListener("click",()=>{
    TablePostit.push(new Postit(700,400,150,200,"lawngreen","",TablePostit.length,0))
    TablePostit[TablePostit.length-1].affichePostit()})
// Creation de post-it bleu 
document.getElementById("bleu").addEventListener("click",()=>{
    TablePostit.push(new Postit(400,500,150,200,"lightskyblue","",TablePostit.length,0))
    TablePostit[TablePostit.length-1].affichePostit()})


/**
 * Supprimer un post-it du tableau
 * @param {number} num  numero du post-it a supprimer
 */
    function deletChild(num){
      //  TablePostit.splice(num, 1) 
       
       delete TablePostit[num]
    }

    // "blacklist" de la fonction changerTexte
/*  document.body.addEventListener("keydown", (event)=>{
    if (IdPostit >-1){
        
        let texte = TablePostit[IdPostit].texte 
        if (event.key === "Backspace"){
            let remove = texte.slice(0,texte.length - 1)
            TablePostit[IdPostit].changerTexte(remove)
            TablePostit[IdPostit].affichePostit()
        }
        else if (event.key === "Enter"){
            let saut = TablePostit[IdPostit].texte + '<br>'
            TablePostit[IdPostit].changerTexte(saut)
            TablePostit[IdPostit].affichePostit()
        }

        else if (event.key === "Shift"){
        }
        else if (event.key === "CapsLock"){
        }
        else if (event.key === "Control"){
        }
        else if (event.key === "Escape"){
        }
        else if (event.key === "Tab"){
        }
        else {
            TablePostit[IdPostit].changerTexte(TablePostit[IdPostit].texte + event.key)
            TablePostit[IdPostit].affichePostit()
        }
    }
}) */

setInterval(() => {
    localStorage.setItem('tableau',JSON.stringify(TablePostit))
}, 1000);


window.addEventListener('load', ()=>{
    let monCookie = JSON.parse(localStorage.getItem('tableau'))
    for (let i = 0 ; i < monCookie.length ; i++){
        TablePostit.push(new Postit(monCookie[i].x, monCookie[i].y, monCookie[i].largeur, monCookie[i].hauteur, monCookie[i].couleur, monCookie[i].texte, TablePostit.length, monCookie[i].zindex))
        TablePostit[TablePostit.length-1].affichePostit()
    }
    
}) 