//--- GLOBAL VAR -----
var  data
var  dataDia
var  dataHora_head


$(document).ready(function(){
    
    setInterval(function(){
       
        data = new Date()
        div_dataAno     = document.getElementById('data')
        div_dataHora     = document.getElementById('hora')
        dataDia  = data.getDate()+"/"+(data.getMonth()+1)+"/"+data.getFullYear();

        hours = data.getHours();
        mins  = data.getMinutes();
        let  time_hour,time_mins
        if (hours < 10) { time_hour = "0" + hours + ":" ; } else { time_hour = hours + ":" ;};
        if (mins < 10) { time_mins = "0" + mins  ; } else { time_mins = mins ;};
        dataHora_head =  time_hour+time_mins
       
        div_dataAno.innerHTML=`${dataDia}`
        div_dataHora.innerHTML=`${dataHora_head}`
  
    },1000)
})



$('#add-Btn').click(elm = () =>{
        inserir()
});

function inserir(){
    
    txtArea =  document.querySelector('#input-client')
    if(txtArea.value == ''){
       $('#add-Btn').popover({
           title:"Erro!",
           content:"O Campo não pode estar vazio!",
           trigger:"click"
        })
        return
    }
    var checklist = new itemTable(txtArea,dataHora_head)
   // $('#div-list-pen').animate({ scrollTop: $(checklist.row).offset().top }, 1000);
   
    txtArea.value = '';
}
//------------------------------------------------
//--------------------- PAINEL -------------------
//------------------------------------------------
$(".navLi").click(function(){
    $(this).addClass("active").siblings().removeClass("active")
})
/*
$('#div-list-pen').on('click','.cbox-table', function(){
    $(this).prop('checked',this.checked)
    if(this.checked){
    $(this.parentNode.parentNode.parentNode).addClass("checked")

    }else{
    $(this.parentNode.parentNode.parentNode).removeClass("checked")
    }
})

$('#div-list-pen').on('click','#cbox-all', function(){
    $('.cbox-table').prop('checked',this.checked)
    if(this.checked){
        $('.tb-item').addClass("checked")
    }else{
        $('.tb-item').removeClass("checked")
    }
})

*/
//-------------------------------------------------
//-------------------------------------------------


function itemTable(txt,hora_inicio){

    this.td_cont = document.createElement("td")
    this.cont   = document.getElementById("tabela").childElementCount

    this.tbody = document.createElement("tbody")

    this.row     = document.createElement("tr")
    this.row.setAttribute("id","tb-item"+this.cont)
    this.row.classList.add("tb-item")
    
    // this.td_check     = document.createElement("td")

    this.td_label = document.createElement("td")
    this.label  = document.createElement("label")
    
    this.cbox = document.createElement("input")
    this.cbox.setAttribute("type","checkbox")
    this.cbox.setAttribute("name","table-check")
    this.cbox.setAttribute("id","cbox-item"+this.cont)
    this.cbox.classList.add("cbox-table")

    this.td_nome = document.createElement("td")
    this.td_nome.innerHTML+=txt.value

    this.td_inicio = document.createElement("td")
    this.td_inicio.innerHTML+=hora_inicio
    
    this.td_fim = document.createElement("td")
    this.td_fim.innerHTML+="--:--"
    
    this.td_texto = document.createElement("td")
    
    this.txt_area = document.createElement("textarea")
    this.txt_area.setAttribute("id","tx-area-item"+this.cont)
    this.txt_area.setAttribute("cols","25")
    this.txt_area.setAttribute("rows","3")
    this.txt_area.setAttribute("maxlength","100")
    this.txt_area.classList.add("tx-area-item")
/*
    this.td_btn = document.createElement("button")
    this.td_btn.classList.add("btn-item")
    this.td_btn.classList.add("btn")
    this.td_btn.classList.add("btn-sm")
    this.td_btn.classList.add("btn-outline-dark")
    this.td_btn.setAttribute("id","btn-item"+this.cont)

    this.i = document.createElement("i")
    this.i.setAttribute("id","span-btn"+this.cont)
    this.i.classList.add("bi")
    this.i.classList.add("bi-check2")

*/
    this.td_cont.append(this.cont)
    this.label.append(this.cbox)
    this.td_label.append(this.label)
    this.td_texto.appendChild(this.txt_area)
    
   
    //this.td_btn.append(this.i)
   
   
    $(this.row).append(
                  
                    this.td_label,
                    this.td_cont,
                    this.td_nome,
                    this.td_inicio,
                    this.td_fim,
                    this.td_texto,
               //     this.td_btn
                    ).hide().fadeIn(700)

    $("#tabela").append(this.row)
}
