function validation(username, password) {
    let pattern = /^[a-z]+/
    let validateUsername = username.match(pattern)
    return validateUsername

}

console.log(validation('cobaahyeA', 'password'))
