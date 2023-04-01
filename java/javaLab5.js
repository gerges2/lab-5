let valuee
let count =0;
function sandData(){
    valuee= document.getElementsByClassName("general")[0].value
    if (valuee=="") {console.log("empty String")}
    else{
        count++
        let Tbody =document.getElementsByTagName('tbody')[0];
        let newRow =document.createElement("tr");
        newRow.innerHTML=`<td><input type="checkbox" value="film"></td>\n<td>${valuee}</td>\n<td id ="pointer" onclick=deleteItem(${count})><i class="fa-solid fa-trash-can" style="color: #d60a0a;"></i></td>`;
        newRow.setAttribute("id",`${count}`)
        if (count%2==0){
            newRow.setAttribute("class","even")
        }//غامق
        else{
            newRow.setAttribute("class","odd")
        }

        Tbody.appendChild(newRow);
    }
}
function deleteItem(id){
    document.getElementById(id).remove()
}