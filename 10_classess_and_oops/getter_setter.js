class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        // return this._password.toUpperCase();

        // by using getter and setter if someone want to access the values then we can give different result to them instead of what we stored

        return `${this._password}siddhant`;
    }


    set password(value) {
        this._password = value;
    }
}

const siddhant = new User("sid@siddhant.yt", "abc");
console.log(siddhant.password);
console.log(siddhant.email);