const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Number type-a çevirmək üçün parseInt() metodundan istifadə edirik.
    Vergüllə daxil edilmiş sətri iki fərqli ədədə bölmək üçün split metodundan istifadə edirik.
    Massivin elementlərini sətirə çevirmək üçün join() metodundan istifadə edirik.
    */
    var input = result.input; // "5,3 5 6 8 9"
    var input_data = input.split(','); // ['5', '3 5 6 8 9']
    var n = parseInt(input_data[0]); // Massivin element sayı. Nümunə - 5
    var massiv = input_data[1].split(' '); // Daxil edilmiş massiv. Nümunə - ['3', '5', '6', '8', '9']
    for(i=0;i<n;i++){
        massiv[i]=parseInt(massiv[i])+1
    }

    /* 
        Yeni massivimiz ['4', '6', '7', '9', '10'] olacaq
        Bu massivi sətirə çevirmək üçün join(' ') metodundan istifadə edirik;
        ['4', '6', '7', '9', '10'] ==> '4 6 7 9 10'
    */
    massiv_as_str = massiv.join(' ');
    console.log(massiv_as_str)
});
