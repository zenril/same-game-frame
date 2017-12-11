import Point from "./Point.js";
import Position from './Position.js';
import Model from './Model.js';

class Enitity extends Model {

    constructor() {
        this.img = null;
        this.width = null;
        this.height = 20;
        this.width = 60;
        this.position = new Pointion(0,0,0);
        this.position.set({ entity : this });

        this.lastPostion = new Pointion(0,0,0);
        this.lastPostion.set({ entity : this });
    }
}

export default Enitity;