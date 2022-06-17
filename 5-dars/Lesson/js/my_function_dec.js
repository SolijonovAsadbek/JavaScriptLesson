let ismim = 'Asadbek'

// 1-usul
function ism(ismim){
    console.log(`Mening ismim ${ismim}`)
    // ism(ismim) bilan globaldagini qiymatini ololmaydi.
    // ism(ismim) bilan globaldagini qiymatini o`zgartira olmaydi.

    ismim = 'Ahror'
    console.log(`Mening ismim ${ismim}`)
}
ism(ismim)
console.log(ismim)


// 2-usul
function ism(){
    // Globaldagi o`zgaruchi qiymatini ham ololaydi.
    // Qolabaldagi o`zgaruvchini qiymatini o`zgartira oladi.    

    ismim = 'Toshmat'
    console.log(`Mening ismim ${ismim}`)
}
ism(ismim)
console.log(ismim)
