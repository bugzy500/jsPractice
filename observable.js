class User {
    name;
    weatherObservable;

    constructor(name, weatherObservable) {
        this.name = name;
        this.weatherObservable = weatherObservable;
        this.weatherObservable.subscribe(this.onWeatherChange);
    }

    onWeatherChange = (weatherData) => {
        console.log(this)
        console.log(`${this.name} received weather updates: `, weatherData);
    }

    stopListening() {
        this.weatherObservable.unsubscribe(this.onWeatherChange);
    }
}


function createObservable() {
    const observers = []
    
    return {
        subscribe: function (callback) { 
            if(!observers.includes(callback))
                observers.push(callback)
         },
        unsubscribe: function (callback) { 
            const temp = observers.indexOf(callback)
            observers.splice(temp, 1)
         },
        notify: function (data) { 
            observers.forEach((callback) => {
                console.log(callback)
                callback(data)
            })
         }
    }
    
}

const weatherObservable = createObservable();
const bob = new User("Bob", weatherObservable);
weatherObservable.notify({ temperature: 20, humidity: 80 });

/**
 * Should print:
 * Bob received weather updates: { temperature: 20, humidity: 80 }
 */

/**
 * Should print:
 * Bob received weather updates:  { temperature: 25, humidity: 75 }
 */
weatherObservable.notify({ temperature: 25, humidity: 75 });

bob.stopListening();

// Should not print anything, because the user is no longer
// subscribed to the weatherObservable observable.
weatherObservable.notify({ temperature: 22, humidity: 68 });

