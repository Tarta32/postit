document.getElementById("rose").addEventListener("click",()=>{
    let postit = new Postit(100,300,150,200,"hotpink","rose",1)
    postit.affichePostit()})

document.getElementById("vert").addEventListener("click",()=>{
    let postit = new Postit(400,300,150,200,"lawngreen","vert",2)
    postit.affichePostit()})

document.getElementById("bleu").addEventListener("click",()=>{
    let postit = new Postit(100,500,150,200,"lightskyblue","bleu",3)
    postit.affichePostit()})