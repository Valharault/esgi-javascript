function ucfirst(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    let string = chaine.toLowerCase().split(" ");
    for (let i = 0; i < string.length; i++) {
        string[i] = ucfirst(string[i]);
    }
    return string.join(" ");
}

function camelCase(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return capitalize(chaine).replace('_','').split(" ").join("");
}

function snake_case(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.toLowerCase().replace(/(\W)+/g, "_");
}

function leet(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.replace(/[AEIOUY]/gi, function (e) {
        switch (e.toLowerCase()) {
            case "a":
                return 4;
            case "e":
                return 3;
            case "i":
                return 1;
            case "o":
                return 0;
            case "u":
                return "(_)";
            case "y":
                return 7;
        }
    });
}

function prop_access(object, path) {
    if (typeof object !== "object") return "";
    if (typeof path !== "string" || path === "" || path === null) return object;
    let result = object;
    for (const element of path.split(".")) {
        if (!(element in result)) {
            return path + " not exist";
        }
        result = result[element];
    }
    return result;
}

function verlan(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    let output = "";
    for (const element of chaine.split(" ")) {
        output += element.split("").reverse().join("") + " ";
    }
    return output.trim();
}

function yoda(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";

    return chaine.split(" ").reverse().join(" ");
}

function vig(chaine, key) {
    if (typeof chaine !== 'string' || chaine === "" || typeof key !== 'string' || chaine === "") return '';
    let result = [];
    let counter = 0;
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    while (counter < chaine.length) {
        for (let i = 0; i < key.length; i++) {
            result.push(alphabet[(alphabet.indexOf(key[i]) + alphabet.indexOf(chaine[counter])) % alphabet.length]);
            counter++;
            if (counter >= chaine.length) break;
        }
    }
    return result.join('');
}

const prairie = {
    animal: {
        type: {
            name: "chien"
        }
    }
};

console.log(ucfirst("hello world"))
console.log(capitalize("hello world"));
console.log(camelCase("ToggleCase is_the coolest"));
console.log(snake_case("hello world"));
console.log(leet("anaconda"));

console.log(prop_access(prairie, "animal.type.name"));
console.log(prop_access(prairie, "animal.gender"));

console.log(verlan("Hello world"));
console.log(yoda("Hello world"));

console.log(vig('wikipedia', 'crypto'));





