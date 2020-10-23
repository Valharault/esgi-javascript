function type_check_v1(arg, type) {
    switch (typeof arg) {
        case "symbol":
        case "number":
        case "string":
        case "boolean":
        case "undefined":
        case "function":
            return type === typeof arg;
        case "object":
            switch (type) {
                case "null":
                    return arg === null;
                case "array":
                    return Array.isArray(arg);
                default:
                    return arg !== null && !Array.isArray(arg);
            }
    }
    return typeof arg === type;
}

function type_check_v2(arg, object) {
    for (item in object) {
        switch (item) {
            case 'type':
                if (!type_check_v1(arg, object.type)) return false;
                break;
            case 'value':
                if (arg !== object.value) return false;
                break;
            case 'enum':
                let found = false;
                for (value of object.enum) {
                    found = type_check_v2(arg, {value: value})
                    if (found) break;
                }
                if (!found) return false
                break
        }
    }
    return true;
}

function type_check(object, conf) {
    let check = type_check_v2(object, conf);
    if (!conf.properties) return check;
    for (const typeKey in conf.properties) {
        check = type_check(type_check_v1(object, 'object') ? object[typeKey] : object, conf.properties[typeKey]);
        if (!check) break
    }
    return check;
}