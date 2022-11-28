console.clear()

type Words = {
    [key: string]: string
}

class Dictionary {
    private words: Words
    
    constructor () {
        this.words = {}
    }

    add (word: Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def
        }
    }

    update (term: string, def: string) {
        try {
            if (this.words[term] === undefined) {
                throw (`Failed to update because there is no "${term}"`)
            }

            this.words[term] = def
        } catch (e) {
            console.error(e)
        }
    }

    delete (term: string) {
        try {
            if (this.words[term] === undefined) {
                throw (`Failed to delete because there is no "${term}".`)
            }
            delete this.words[term]
        } catch (e) {
            console.error(e)
        }
    }
}

class Word {
    constructor(
        public term: string,
        public def: string
    ) {}
}

const dict = new Dictionary()
const kimchi = new Word('kimchi', '한국 전통 음식')
dict.add(kimchi)
console.log(dict)

dict.update('kimchi1', 'korean trandition food')

dict.update('kimchi', 'korean trandition food')
console.log(dict)

dict.delete('kimchi1')

dict.delete('kimchi')
console.log(dict)
