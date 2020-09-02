class User {
    constructor(options) {
        this.username = options.name;
        this.lastName = options.lastName;
        this.email = options.email;
        this.password = options.password;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.username}`);
    }
    getProfile() {
        console.log(`${this.username} ${this.email} ${this.password}`)
    }
    updatePassword(newPassword, currentPassword) {
        if (currentPassword == this.password) {
            this.password = newPassword;
        } else {
            console.log("Can't change password");
        }
    }
}

const sexyUser = new User({
    username: "ZERO",
    lastName: "GOON", 
    email: "zerogoon@gmail.com", 
    password: "1234"
});

class Admin extends User {
    constructor({userName, lastName, email, password, superAdmin, isActive}) {
        super({userName, lastName, email, password});
        this.superadmin = superAdmin;
        this.isActive = isActive;
    }
    deleteWebsite() {
        console.log("Deleting the whole website....");
    }
}

const admin = new Admin({
    username: "ZERO",
    lastName: "GOON", 
    email: "zerogoon@gmail.com", 
    password: "1234",
    supserAdmin: true,
    isActive: true
});