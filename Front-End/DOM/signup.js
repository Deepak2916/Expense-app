const form=document.getElementById('formId')
form.addEventListener('submit',SignUp)

function SignUp(e){
    e.preventDefault()
    let name=document.getElementById('name').value
    let email=document.getElementById('email').value
    let number=document.getElementById('number').value
    let password=document.getElementById('password').value
    let obj={
        name:name,
        email:email,
        number:number,
        password:password
    }
    console.log(name,email,number,password)
    async function PostUser(){
       await axios.post('http://localhost:3000/user/signup',obj)
    //   let user= await axios.get('http://localhost:3000/user')
    //   console.log(user)
    }
    PostUser()

}