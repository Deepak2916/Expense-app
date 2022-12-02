const form=document.getElementById('formId')
form.addEventListener('submit',SignUp)
const status=document.getElementById('status')

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
    // console.log(name,email,number,password)
    async function PostUser(){
       let user=await axios.post('http://localhost:3000/user/signup',obj)
       console.log(user.data.success)
       let status=document.getElementById('status')
       if(user.data.success){
        status.innerHTML='SUCCESS'
       }
       else{
        if(user.data.error=="number"){
            status.innerHTML=`user with number <b> '${number}' </b> has already existed`
        }
        else{
            status.innerHTML=`user with email id <b>'${email}'</b> has already existed`
        }
       }
    //   let user= await axios.get('http://localhost:3000/user')
    //   console.log(user)
    }
    PostUser()

}