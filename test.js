var userEmail = "laura@laura.com";

console.log(userEmail.indexOf("@"))
console.log(userEmail.indexOf(".com"))

if (userEmail.indexOf("@") == -1 || userEmail.indexOf(".com") == -1) {
   console.log("entrou")
} 

