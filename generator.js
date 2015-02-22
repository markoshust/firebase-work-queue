var Firebase = require("firebase"),
    newWorkPeriod = 700,
    workItems = new Firebase("https://workqueue.firebaseio-demo.com/"),
    i = 0;

setInterval(function() {
    workItems.push({
        number: i,
        time: Math.floor(Math.random()*2000),
        createdAt: Firebase.ServerValue.TIMESTAMP
    });

    i++;
}, newWorkPeriod);
