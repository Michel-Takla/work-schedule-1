$(".saveBtn").on("click", function(event){
    console.log(event)
    console.log(this.previousElementSibling.value)
    localStorage.setItem(this.parentElement.id,this.previousElementSibling.value)
})

for (let i = 9; i < 18; i++) {
    $("#hour-"+i).children("textarea").val(localStorage.getItem("hour-"+i))
    console.log(dayjs().hour())
    if(dayjs().hour()==i){
     $("#hour-"+i).addClass("present")
    }else if(dayjs().hour()>i){
        $("#hour-"+i).addClass("past")
    }else {
        $("#hour-"+i).addClass("future")
 
    }
}

$("#currentDay").text(dayjs())

