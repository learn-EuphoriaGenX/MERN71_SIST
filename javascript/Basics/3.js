// call back function

let sayHello = (name, fn) => {
    console.log(`Hello ${name}`);
    fn(name)
}
let sayWelcome = (name) => {
    console.log(`Welcome ${name}`);
}
let sayBye = (name) => {
    console.log(`Bye ${name}`);
}

let myName = "Campa"
// sayHello(myName, sayWelcome)
// promises

let user = "admin"
let pass = "admin"

let Login = (username, password) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            // rej("Login Don/e")
            rej("Some Error in Login")

        }, 5000);
    })
}
let Logout = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Logout Done~")
        }, 3000);
    })
}

// async-await
let openInsta = async () => {
    try {
        let result = await Login("admin", "Admin")
        console.log(result);
        result = await Logout();
    } catch (error) {
        console.log(error);
    }
}

openInsta()