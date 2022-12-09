/**
 * Compose une fonction à partir de deux.
 * forme : fnA.fnB / fnB.fnA
 * 
 * @param {String} forme
 * @param {String} fnA 
 * @param {String} fnB 
 * @returns 
 */
function compose(forme, fnA, fnB) {
    let struct = forme.split(".");

    if (struct[0] == "fnA" && struct[1] == "fnB") {
        struct[0] = fnA;
        struct[1] = fnB;
    }
    else if (struct[0] == "fnB" && struct[1] == "fnA") {
        struct[0] = fnB;
        struct[1] = fnA;
    }

    let fonction = struct[0].replace("x", `(${struct[1]})`);

    return fonction;
}

console.log(compose("fnA.fnB", "x^2-2", "e^x"));


/**
 * Transforme une fonction composé en tableau de fonction.
 * fn est de forme
 * 
 * @param {String} fn 
 * @returns 
 */
function decompose(fn) {
    return [];
}
