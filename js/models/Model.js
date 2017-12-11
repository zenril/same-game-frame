class Model {
    static hooks = {

    };

    constructor() {
    }

    static addListener(event, callback, id) {
        if(!hooks[event]) {
            hooks[event] = [];
        }

        hooks[event].push(
            {
                event: event,
                callback: callback,
                id: id
            }
        );
    }

    static trigger(event, data, scope) {
        if(!hooks[event]) {
            return false;
        }

        var events = hooks[event];
        for (var index = 0; index < events.length; index++) {
            var event = events[index];
            if(event) {
                event.call(scope || null, data);
            }
        }
        return true;
    }

    _set(name, value) {
        if(this[name] != value){
            return false;
        }

        this[name] = value;
        Model.trigger('setValue', {
            name : name,
            value : value
        }, this);
    }

    set(data) {
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var element = object[key];
                this._set(key, element);
            }
        }
    }
}

export default Model;