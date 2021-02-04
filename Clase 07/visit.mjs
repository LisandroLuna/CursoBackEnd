export default class Visit{
    constructor() {
        this.visits = {
                items: 0,
                item: 0
        }
    }
    add(d){
        this.visits[d] += 1;
    }

}