interface calculate{
    resultado(): Promise<any>
}

class Suma implements calculate{

    private readonly num1: number;
    private readonly num2: number;

    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    }

    // @ts-ignore
    public async resultado(): Promise<number>{
        return this.num1 + this.num2;
    }
}

class Resta implements calculate{

    private readonly num1: number;
    private readonly num2: number;

    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    }

    // @ts-ignore
    public async resultado(): Promise<number>{
        return this.num1 - this.num2;
    }
}


export = {
    Suma,
    Resta
}