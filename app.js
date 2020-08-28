const p1 = new Promise(resolve => {
    setTimeout(resolve, 10000, "First");
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(reject, 5000, "I hate JS");
});

const p3 = new Promise(resolve => {
    setTimeout(resolve, 3000, "Third");
});

const motherPromise = Promise.race([p1, p2, p3]);

motherPromise
    .then(values => console.log(values))
    .catch(err => console.log(err));
