//Funcion asincrona

const funcAsync = (text, time= 1000, callback) => {
    const arrayWords = text.split(' ');
    let index = 0;
    let myInterval = setInterval((words)=>{
        if(index < words.length) {
            console.log(words[index]);
            index++;
        }else{
            clearInterval(myInterval);
            callback(arrayWords.length);
        }
    }, time, arrayWords);
}


funcAsync('Primera Lorem ipsum dolor sit amet consectetur adipiscing elit', 500, (count) => {
    let totalCount = count;
    funcAsync('Segunda Morbi eu ultrices quam. Proin ut purus urna', 500, (count) => {
        totalCount += count;
        funcAsync('Tercera Maecenas hendrerit pulvinar nibh id finibus', 500, (count) => {
            totalCount += count;
            console.log('Completado, cantidad de palabras: ' + totalCount);
        });
    });
});