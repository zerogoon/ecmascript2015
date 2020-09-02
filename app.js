const userObj = {
    username: "nico",
    age: 12,
    password: 1234
};

const userFilter = {
    get: (target, prop, receiver) => {
        return prop === "password" ? `${"*".repeat(5)}` : target[prop];
    },
    set: () => {
        console.log("Somebody wrote something");
    },
    deleteProperty: (target, prop) => {
        if (prop === "password") {
            return;
        } else {
            target[prop] = "DELETED";
        }
    }
};

const filteredUser = new Proxy(userObj, userFilter);