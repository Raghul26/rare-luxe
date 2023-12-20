export default function Validation(values) {
    let error = {}
    const emailpattern = /[a-zA-Z0-9,_%+-]+@[a-z0-9]+\.[a-z]{2,8}(.[a-z{2,8}]?)/

    if (!values.username.trim()) {
        error.username = "Username required*"
    }

    if (!values.email.trim()) {
        error.email = "Email *"
    } else if (!emailpattern.test(values.email)) {
        error.email = "Email is invalid *"
    } else if (emailpattern.test(values.email)) {
        error.email = ""
    }

    if (!values.password.trim()) {
        error.password = "Password required *"
    } else if (values.password.length < 5) {
        error.password = "Password needs to be 5 characters or more *"
    }

    if (!values.confirmpassword.trim()) {
        error.confirmpassword = "Password required *"
    } else if (values.confirmpassword !== values.password) {
        error.confirmpassword = "Password didn't match *"
    }


    return error;
}