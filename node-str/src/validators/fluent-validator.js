'use strict';

//lista de erros 
let errors = [];

function ValidationContract(){
    errors = [];
}

ValidationContract.prototype.isRequired = (value, message) => {
    if(!value || value.length <= 0)
        errors.push({ message: message });
}

//hasMinLen - ter o minimo de caractere
ValidationContract.prototype.hasMinLen = (value, min, message) => {
    if(!value || value.length < min)
        errors.push({ message: message });
}

ValidationContract.prototype.hasMaxLen = (value, min, message) => {
    if(!value || value.length < max)
        errors.push({ message: message });
}

//FixedLen - ter um tamanho fixo
ValidationContract.prototype.isFixedLen = (value, len, message) => {
    if(value.length != len)
        error.push({ message: message });
}

//se é um email
ValidationContract.prototype.isEmail = (value, message) => {
    var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+)*\.\w+([-.]\w+)*$/);
    if(!reg.test(value))
        errors.push({ message: message });
}

ValidationContract.prototype.error = () => {
    return errors;
}

ValidationContract.prototype.clear = () => {
    errors = [];
}

ValidationContract.prototype.isValid = () => {
    return errors.length == 0;
}

module.exports = ValidationContract;