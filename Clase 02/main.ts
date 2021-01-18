// Desafio Clase 02

const calculateModule = './calculates';

const operacion = async (num1: number, num2: number, ope: string): Promise<any> => {
    let operation = null;
    switch (ope.toLowerCase()){
        case 'suma':
            operation = await import(calculateModule).then(m => m.Suma);
            break
        case 'resta':
            operation = await import(calculateModule).then(m => m.Resta);
            break
        default:
            return console.log(`${ope} no es una operacion valida.`)
    }
    return new operation(num1, num2).resultado();
}

const operaciones = async () => {
    const suma = await operacion(9, 5, 'suma');
    console.log('Resultado suma: ' + suma)
    const resta = await operacion(9, 5, 'resta');
    console.log('Resultado resta: ' + resta)
}

operaciones();