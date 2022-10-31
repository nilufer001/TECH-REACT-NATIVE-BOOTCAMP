var kullanicilar=[
    { email:"niluferballi@gmail.com",sifre:"1234"    },
    {email:"hiranurballi@gmail.com", sifre: "nilüfer" }, 
]

var tivitler= [
    {email:"niluferballi@gmail.com",tvit:"Bugün günlerden çarşamba"},
    {email:"hiranurballi@gmail.com",tvit:"Bugün hava güzel"},
    {email:"niluferballi@gmail.com",tvit:"Bugün  hava çok güzel"},
    
]
var email=prompt("email?");
var sifre=prompt("Sifre?");

function giris(){
if(email==kullanicilar[0].email && sifre == kullanicilar[0].sifre||
email==kullanicilar[1].email && sifre==kullanicilar[1].sifre ){
    console.log(tivitler)
} 
else{
    console.log("Kullanıcı adı veya şifre hatalı ...")
}
}
giris(email,sifre);