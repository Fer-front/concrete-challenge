function Validate(el) {
    this._el = el
}

function pipeValidate (value, rules) {
    const processRules = rules.map((rule) => (rule(value)))
    const hasFalse = processRules.some((bool) => (bool === false))

    return !hasFalse
}

function isString(value) {
    return typeof value === "string"
}

function isNumber(value) {
    const convert = Number(value)
    return typeof convert === 'number'
}

function isEmpty(value) {
    return Boolean(value.trim()) 
}

function isCpf(value) {
    const cpfClean = value.replace(/\D/g, '')
    return cpfClean.length === 11
}

function isEmail(value) {
    const regex = new RegExp(/\S+@\S+\.\S+/)
    return regex.test(value)
}

function isPwd(value) {
    const caracterSpecial = value.replace(/\w/g, '')

    const caracterUpperCase = value
        .replace(/\W/g, '')
        .replace(/\d/g, '')
        .replace(/[a-z]/g, '')

    const caracterLowerCase = value
        .replace(/\W/g, '')
        .replace(/\d/g, '')
        .replace(/[A-Z]/g, '')

    const alphaNumeric = value
        .replace(/\W/g, '')
        .replace(/[a-z]/g, '')
        .replace(/[A-Z]/g, '')

    const hasEightChar = char(value).min(8)
    const minAlphNumeric = char(alphaNumeric).min(1)
    const minCharLowerCase = char(caracterLowerCase).min(2) 
    const minCharUpperCase = char(caracterUpperCase).min(2) 
    const minSpecialChar = char(caracterSpecial).min(2) 

    const hasError = [hasEightChar, minAlphNumeric, minCharLowerCase, minCharUpperCase, minSpecialChar]
        .some((rule) =>{
            return rule === false
        })
        
    return hasError ? false : true
}

function char(value) {
    const len = value.length
    return {
        min(qtd) {
            return len >= qtd
        },
        max(qtd) {
            return len <= qtd
        }
    }
}


Validate.prototype.required = function() {
    const rules = [ isString, isEmpty ]
    return pipeValidate(this._el.value, rules)
} 

Validate.prototype.empty = function() {
    return pipeValidate(this._el.value, [isEmpty])
}

Validate.prototype.cpf = function() {
    return pipeValidate(this._el.value, [isEmpty, isNumber, isCpf])
}

Validate.prototype.email = function() {
    return pipeValidate(this._el.value, [isEmpty, isEmail])
}

Validate.prototype.pwd = function() {
    return pipeValidate(this._el.value, [isEmpty, isPwd])
}

Validate.prototype.min = function(qtd) {
    const min = value => (char(value).min(qtd))
    
    return pipeValidate(this._el.value, [isEmpty, min ])
}

Validate.prototype.max = function(qtd) {
    const max = value => (char(value).max(qtd))
    return pipeValidate(this._el.value, [isEmpty, max ])
}

export default Validate