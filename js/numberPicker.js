function numberPicker(value){
    let picker = event.target.parentElement;
    let pickerField = picker.querySelector(".number-picker-field");
    let result = Number(pickerField.value) + value;
    
    if(result < 0) result = 0;
    pickerField.value = result;
}
function resetNumberPicker(){
    let picker = event.target.parentElement;
    let pickerField = picker.querySelector(".number-picker-field");
    pickerField.value = 0;
}

export {numberPicker, resetNumberPicker};