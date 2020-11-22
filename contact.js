const name=document.getElementById("name")
const email=document.getElementById("email")
const message=document.getElementById("message")
const butub=document.getElementById("butub")

const database=firebase.database()

butub.addEventListener('click',(e) =>{
    e.preventDefault()
    database.ref('/users/'+name.value).set(
        {
            nname:name.value,
            email:email.value,
            message:message.value
        }
    )
    alert("Information saved successfully")

})