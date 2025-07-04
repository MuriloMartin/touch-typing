let common_programming_words = [
    ["function", "return", "if", "else", "for", "while", "switch", "case", "break", "continue"],
    ["try", "catch", "throw", "class", "interface", "import", "export", "package", "public", "private"],
    ["protected", "static", "final", "const", "var", "let", "new", "delete", "yield", "async"],
    ["await", "this", "super", "extends", "implements", "def", "lambda", "in", "not", "and", "or"],
    ["get", "set", "create", "update", "delete", "add", "remove", "check", "validate", "calculate"],
    ["convert", "process", "save", "load", "read", "write", "open", "close", "start", "stop"],
    ["run", "build", "compile", "execute", "test", "debug", "log", "send", "receive", "connect"],
    ["disconnect", "fetch", "post", "parse", "render", "display", "show", "hide", "enable", "disable"],
    ["data", "value", "result", "input", "output", "name", "type", "list", "array", "object"],
    ["map", "key", "index", "length", "size", "count", "flag", "status", "error"]
]
let current_word_index = 0
let page = 0
let prefix = document.getElementById("prefix")
let target = document.getElementById("targetLetter")
let sufix = document.getElementById("sufix")
let elements = [prefix, target, sufix]

let left_letters = "qazwsxedcrfvtgb"
let rigth_letters = "yhnujmikolp<>,.;"

let text = common_programming_words[page].join(" ")
let parts = getTextParts(current_word_index,text)
updateText(parts,elements)

let mode = 1 //0, 1 ou 2 
document.addEventListener("keydown", (key)=>{
    let letter = key.key   
    expected_letter = text[current_word_index]
    if (letter == expected_letter){
        if (current_word_index < (text.length-1)) {
            current_word_index+=1
        }
        else {
            current_word_index = 0
            page += 1
        }
        text = common_programming_words[page].join(" ")
        parts = getTextParts(current_word_index,text)
        updateText(parts, elements)
        elements[1].className="targetLetter"

        return
    }
    elements[1].className="targetLetter incorrectLetters"
})

function getTextParts(index, text){
    let prefix = text.substring(0,index)
    let target = text[index]
    let sufix = text.substring(index+1,text.length)
    console.log(prefix, target, sufix)
    return [prefix, target, sufix]
}

function updateText(parts, elementsRefs){
    console.log('asdfasdfasdfasd')
    for(let i=0;i<=parts.length-1;i++){
        elementsRefs[i].innerHTML = parts[i]
    }
}