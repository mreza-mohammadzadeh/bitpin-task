export const setItem = (key: any, value: any) => {
    return new Promise(function (resolve: any, reject: any) {
        try {
            resolve(localStorage.setItem(key, value))
        }
        catch (e) {
            reject('ERROR , work could not be completed')
        }
    })
}

export const getItem = (key: any) => {
    return new Promise(function (resolve: any, reject: any) {
        try {
            resolve(localStorage.getItem(key))
        }
        catch (e) {
            reject('ERROR , work could not be completed')
        }
    })
}

export const removeItem = (key: any) => {
    return new Promise(function (resolve: any, reject: any) {
        try {
            resolve(localStorage.removeItem(key))
        }
        catch (e) {
            reject('ERROR , work could not be completed')
        }
    })
}

export const removeAllItem = () => {
    return new Promise(function (resolve: any, reject: any) {
        try {
            resolve(localStorage.clear())
        }
        catch (e) {
            reject('ERROR , work could not be completed')
        }
    })
}