import Model from './Model.js';

class Position extends Model{
    static all = [];

    constructor(x,y,a) {
        this.x = x;
        this.y = y;
        this.a = a;
        this.entity = null;

        all.push(this);
    }

    remove(){
        all = all.filter((t)=>{
            return t != this;
        });
    }

    update(position){
        this.x = position.x;
        this.y = position.y;
        this.a = position.a;
    }

    distanceTo(position){
        return Math.sqrt(Math.pow(position.x - this.x, 2) + Math.pow(position.y - this.y));
    }

    closest(){
        let min = null;
        for (var index = 0; index < all.length; index++) {
            var element = all[index];

            if(min == null){
                min = element;
            }

            if(element == this) continue;

            let distance = this.distanceTo(element);
            if(distance < this.distanceTo(min)) {
                min = element;
            }
        }
        return min;
    }

}

export default Position;