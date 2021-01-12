//your code here!

function createTable(){
    const tbl = document.getElementById('table')
    const row = document.getElementById('input-row').value
    const col = document.getElementById('input-col').value
    const cte = document.getElementById('create')
cte.innerHTML = "Create by 620610802"
    console.log(parseInt(row))
    table.innerHTML = ""
    let count=1,stat=0;
    if(row>0 && col>0 && !isNaN(row) && !isNaN(col)){
        var tbdy = document.createElement('tbody');
    for (var i = 0; i < parseInt(row); i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < parseInt(col); j++) {
           
            var td = document.createElement('td');
            if( i%2==0 &&j%2==1){
                td.appendChild(document.createTextNode('*'))
            }else if( i%2==0 &&j%2==0){
                td.appendChild(document.createTextNode(count.toString()))
            }else if( i%2==1 &&j%2==0){
                td.appendChild(document.createTextNode('*'))
            }else if(i%2==1 &&j%2==1){
                td.appendChild(document.createTextNode(count.toString()))
            }
            
            //i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
            tr.appendChild(td)
            count+=1
          
        }
        tbdy.appendChild(tr);
      }
      tbl.appendChild(tbdy);
    }
    
      
    


}

function ID(){
    const credit = document.getElementById('input-number').value
    const out = document.getElementById('stu_id')
    if(isNaN(credit)){
        alert("Error")
    }else{
        out.innerText = (parseInt(credit)+620610802).toString();
    }
    
    console.log(parseInt(credit))
}