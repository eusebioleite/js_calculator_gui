function add_text(id) {
    var textarea = document.getElementById('textarea');
    switch(id){
        case "btn_1":
            textarea.value += 1;
            break;
        case "btn_2":
            textarea.value += 2;
            break;
        case "btn_3":
            textarea.value += 3;
            break;
        case "btn_4":
            textarea.value += 4;
            break;
        case "btn_5":
            textarea.value += 5;
            break;
        case "btn_6":
            textarea.value += 6;
            break;
        case "btn_7":
            textarea.value += 7;
            break;
        case "btn_8":
            textarea.value += 8;
            break;
        case "btn_9":
            textarea.value += 9;
            break;
        case "btn_0":
            textarea.value += 0;
            break;
        case "btn_div":
            textarea.value += "/";
            break;
        case "btn_mul":
            textarea.value += "*";
            break;
        case "btn_sub":
            textarea.value += "-";
            break;
        case "btn_add":
            textarea.value += "+";
            break;
        case "btn_enter":
            var formula = eval(textarea.value);
            textarea.value = formula;
            break;
        case "btn_clear":
            textarea.value = "";
            break;
    }
}
