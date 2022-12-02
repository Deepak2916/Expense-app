const form=document.getElementById('formId')
form.addEventListener('submit',Login)

// console.log('hello')
function Login(e){
    e.preventDefault()
    
    let email=document.getElementById('email').value
    let password=document.getElementById('password').value
    console.log(email)
    async function User(){
        let user= await axios.get(`http://localhost:3000/user/login/${email}`)
        let existingUser=user.data[0]
        const status=document.getElementById('status')
        if(existingUser){
            if(existingUser.password==password){
                status.innerHTML='login successfully'
            }
            else{
                status.innerHTML='wrong password'
            }
        }
        else{
            status.innerHTML='user does not existed'
        }
    }
    User()

}