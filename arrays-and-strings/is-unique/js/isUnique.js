#!/usr/bin/env node

if (isUnique(process.argv[2])) {
    console.log("All characters in string are unique")
} else {
    console.log("Duplicate characters in string.  Characters are not unique.")
}


function isUnique(str) {
    if (str.length > 128) {
        return false
    }

    let char_set = []

    for (let i=0; i<str.length; i++) {
        let val = str.charAt(i)

        if (char_set[val]) {
            return false
        }

        char_set[val] = true;
    }

    return true
}