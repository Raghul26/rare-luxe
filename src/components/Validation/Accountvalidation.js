export default function Validationlogin(values, loggeduser) {
    let error = {}
    const emailpattern = /[a-zA-Z0-9,_%+-]+@[a-z0-9]+\.[a-z]{2,8}(.[a-z{2,8}]?)/
    const number = /^[6-9]\d{9}$/

    if (!values.username.trim()) {
        error.username = "Username required*"
    }
    if (!values.address.trim()) {
        error.address = "address required*"
    }
    if (!values.number.trim()) {
        error.number = "number required*"
    } else if (!number.test(values.number)) {
        error.number = "number invalid*"
    }

    if (!values.email.trim()) {
        error.email = "Email required*"
    } else if (emailpattern.test(values.email)) {
        error.email = ""
    }

    if (!values.password.trim()) {
        error.password = "Password required*"
    } else if (values.password.length < 5) {
        error.password = "Password needs to be 5 characters or more"
    }

    if (!values.confirmpassword.trim()) {
        error.confirmpassword = "Password required*"
    } else if (values.confirmpassword !== values.password) {
        error.confirmpassword = "Password didn't match"
    }


    return error;
}