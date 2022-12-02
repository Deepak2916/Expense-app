const form=document.getElementById('formId')
form.addEventListener('submit',Login)


function Login(e){
    e.preventDefault()
    
    let email=document.getElementById('email').value
    let password=document.getElementById('password').value
    console.log(email)
    async function User(){
        let statusText=document.getElementById('status')
        try{
        let user= await axios.get(`http://localhost:3000/user/login?email=${email}&password=${password}`)
        statusText.innerHTML=user.data.status
    
        }
        catch(err){
          
            statusText.innerHTML= err.response.data.status
        }
      
    }
    User()

}