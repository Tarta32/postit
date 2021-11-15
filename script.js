let TablePostit = []
let IdPostit = -1

document.getElementById("rose").addEventListener("click",()=>{
    
    TablePostit.push(new Postit(300,100,150,200,"hotpink","rose",TablePostit.length))
    TablePostit[TablePostit.length-1].affichePostit()})

document.getElementById("vert").addEventListener("click",()=>{
    TablePostit.push(new Postit(700,400,150,200,"lawngreen","vert",TablePostit.length))
    TablePostit[TablePostit.length-1].affichePostit()})

document.getElementById("bleu").addEventListener("click",()=>{
    TablePostit.push(new Postit(400,500,150,200,"lightskyblue","bleu",TablePostit.length))
    TablePostit[TablePostit.length-1].affichePostit()})

    function deletChild(num){
        TablePostit.splice(num, 1)
    }
document.body.addEventListener("keydown", (event)=>{
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
})