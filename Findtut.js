const tname=document.getElementById("tname")
const fname=document.getElementById("fname")
const lname=document.getElementById("lname")
const gend=document.getElementById("gend")
const day=document.getElementById("day")
const Iname=document.getElementById("Iname")
const num=document.getElementById("num")
const tarea=document.getElementById("tarea")
const buts=document.getElementById("buts")

const database=firebase.database()

buts.addEventListener('click',(e) =>{
    e.preventDefault()
    database.ref('/users/'+tname.value).set(
        {
            tname:tname.value,
            fname:fname.value,
            lname:lname.value,
            gend:gend.value,
            day:day.value,
            Iname:Iname.value,
            num:num.value,
            tarea:tarea.value
        }
    )
    alert("Information saved successfully")

})

var ref=database.ref('scores')
ref.on('value',gotData,errData)

function gotData(users)
{
    console.log(users.val())
}
function errData(err)
{
    console.log('Error!')
    console.log(err)
}
