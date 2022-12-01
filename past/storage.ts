interface SStorage<T> {
    [key: string]: T
}

class LocalStorage<T> {
    private storage: SStorage<T> = {}
    
    set (key: string, value: T) {
        try {
            if (this.storage[key]) {
                throw (`Faild to set ${key} because it is already exists`)
            }
            this.storage[key] = value
        } catch (e) {
            console.warn(e)
        }
    }

    get (key: string) {
        try {
            if (this.storage[key] === undefined) {
                throw (`Failed to get ${key} because it does not exist`)
            }

            return this.storage[key]
        } catch (e) {
            console.warn(e)
            return
        }
    }

    remove (key: string) {
        try {
            if (this.storage[key] === undefined) {
                throw (`Failed to remove ${key} because it does not wxist`)
            }
            delete this.storage[key]
        } catch (e) {
            console.log(e)
        }
    }

    clear () {
        this.storage = {}
    }
}