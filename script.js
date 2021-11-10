let TablePostit = []


document.getElementById("rose").addEventListener("click",()=>{
    
    TablePostit.push(new Postit(100,300,150,200,"hotpink","rose",TablePostit.length))
    TablePostit[TablePostit.length-1].affichePostit()})

document.getElementById("vert").addEventListener("click",()=>{
    TablePostit.push(new Postit(400,300,150,200,"lawngreen","vert",TablePostit.length))
    TablePostit[TablePostit.length-1].affichePostit()})

document.getElementById("bleu").addEventListener("click",()=>{
    TablePostit.push(new Postit(100,500,150,200,"lightskyblue","bleu",TablePostit.length))
    TablePostit[TablePostit.length-1].affichePostit()})

    function deletChild(num){
        TablePostit.splice(num, 1)
    }