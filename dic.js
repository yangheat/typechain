console.clear();
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.words = {};
    }
    Dictionary.prototype.add = function (word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    };
    Dictionary.prototype.update = function (term, def) {
        try {
            if (this.words[term] === undefined) {
                throw ("Failed to update because there is no \"".concat(term, "\""));
            }
            this.words[term] = def;
        }
        catch (e) {
            console.error(e);
        }
    };
    Dictionary.prototype["delete"] = function (term) {
        try {
            if (this.words[term] === undefined) {
                throw ("Failed to delete because there is no \"".concat(term, "\"."));
            }
            delete this.words[term];
        }
        catch (e) {
            console.error(e);
        }
    };
    return Dictionary;
}());
var Word = /** @class */ (function () {
    function Word(term, def) {
        this.term = term;
        this.def = def;
    }
    return Word;
}());
var dict = new Dictionary();
var kimchi = new Word('kimchi', '한국 전통 음식');
dict.add(kimchi);
console.log(dict);
dict.update('kimchi1', 'korean trandition food');
dict.update('kimchi', 'korean trandition food');
console.log(dict);
dict["delete"]('kimchi1');
dict["delete"]('kimchi');
console.log(dict);
