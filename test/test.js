const users = ["Alice", "Bob", "Charlie"];


debugger

for (const user of users) {
    (function (value) {
        console.log(value);
    })(user);
}
