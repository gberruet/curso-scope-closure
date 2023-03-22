function greeting() {
    let userName = 'Gastón';

    function displayUserName() {
        return `Hola ${userName}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());