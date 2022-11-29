type Words = {
    [key: string]: string
}

class Dictionary {
    private words: Words
    
    constructor() {
        this.words = {}
    }

    add (word: Word) {
        try {
            if (this.words[word.term]) {
                throw (`Failed to add ${word.term} because it already exists`)
            }

            this.words[word.term] = word.def
        } catch (e) {
            console.warn(e)
        }
    }

    update (word: string, def: string) {
        try {
            if (this.words[word] === undefined) {
                throw (`Failed to update ${word} because it does not exist`)
            }

            this.words[word] = def
        } catch (e) {
            console.warn(e)
        }
    }

    delete (word: string) {
        try {
            if (this.words[word] === undefined) {
                throw (`Failed to delete ${word} because it does not exist`)
            }

            delete this.words[word]
        } catch (e) {
            console.warn(e)
        }
    }

    get (word: string): string | void {
        try {
            if (this.words[word] === undefined) {
                throw (`Failed to get ${word} because it does not exist`)
            }

            console.log(`${word}: ${this.words[word]}`)
            return this.words[word]
        } catch (e) {
            console.warn(e)
        }
    }
}


class Word {
    constructor(
        public term: string,
        public def: string
    ) {}
}

const dictionary = new Dictionary()
const kimchi = new Word('kimchi', '한국 전통 음식')

dictionary.add(kimchi)
dictionary.get('kimchi')
dictionary.get('bulgogi')
dictionary.add(kimchi)
dictionary.update('kimchi1', 'korean trandition food')
dictionary.update('kimchi', 'korean trandition food')
dictionary.get('kimchi')
dictionary.delete('kimchi1')
dictionary.delete('kimchi')
dictionary.get('kimchi')
