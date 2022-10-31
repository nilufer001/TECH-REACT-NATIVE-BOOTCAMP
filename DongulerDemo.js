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

function KullaniciVarMi(email, sifre){
console.log(email);
console.log(sifre);
for(i=0; i<kullanicilar.length;i++){
    if(kullanicilar[i].email===email &&  kullanicilar[i].sifre===sifre){
        return true;
    }
    else{
        return false;
    }
}
}
function giris()
{
    if(KullaniciVarMi(email,sifre)){
        console.log(tivitler);
    }
    else{
        console.log("Kullanici adı veya sifre hatali");
    }
}
giris();