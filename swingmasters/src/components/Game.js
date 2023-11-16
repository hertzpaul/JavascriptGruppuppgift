export default class Game {
    constructor() {
        this.counter = 0;
    }

    draw(context) {
        this.counter++;
        context.fillRect(this.counter, 10, 100, 10);
    }
}