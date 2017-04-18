function greeter() {
    document.write('From greeter 555');
}

// anyone who "requires"" this file will now get access to this function
module.exports = greeter;