export default function Validationlogin(values, loggeduser) {
    let error = {}
    const emailpattern = /[a-zA-Z0-9,_%+-]+@[a-z0-9]+\.[a-z]{2,8}(.[a-z{2,8}]?)/


    if (!values.email.trim()) {
        error.email = "Email required*"
    } else if (!emailpattern.test(values.email)) {
        error.email = "Email is invalid"
    }

    if (!values.password.trim()) {
        error.password = "Password required*"
    } else if (values.password.length < 5) {
        error.password = "Password needs to be 5 characters or more"
    }


    return error;
}