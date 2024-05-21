let first_character = '';
let second_character = '';
let selected_operator = 'not defined';
let answer;

//takes the input of user at first
function collect_first(number) {
    if(selected_operator === 'not defined' && first_character < 9999999 && number !== '.'){
        number = String(number);
        first_character = first_character + number;
        first_character = Number(first_character);
        console.log(first_character);
        console.log(`First is a ${typeof(first_character)}`);
        document.getElementById('answer_display').textContent = first_character;
    } else if(selected_operator !== '' && answer !== '' && first_character !== '' && second_character !== '' && number !== '.'){

        if(selected_operator === '*'){
            document.getElementById('multiply_btn').classList.remove('tb_bw');
            document.getElementById('multiply_btn_txt').classList.remove('tb_bw');
            selected_operator = 'not defined';
        }
        if(selected_operator === '/'){
            document.getElementById('divide_btn').classList.remove('tb_bw');
            document.getElementById('divide_btn_txt').classList.remove('tb_bw');
            selected_operator = 'not defined';
        }
        if(selected_operator === '+'){
            document.getElementById('add_btn').classList.remove('tb_bw');
            document.getElementById('add_btn_txt').classList.remove('tb_bw');
            selected_operator = 'not defined';
        }
        if(selected_operator === '-'){
            document.getElementById('minus_btn').classList.remove('tb_bw');
            document.getElementById('minus_btn_txt').classList.remove('tb_bw');
            selected_operator = 'not defined';
        }
        first_character = '';
        second_character = '';
        answer = '';

        number = String(number);
        first_character = first_character + number;
        first_character = Number(first_character);
        console.log(first_character);
        console.log(`First is a ${typeof(first_character)}`);
        document.getElementById('answer_display').textContent = first_character;
    } if(number === '.'){
        number = String(number);
        first_character = first_character + number;
        document.getElementById('answer_display').textContent = first_character;
    }
}

//takes the operator input
function operator_input(operator){
    if(operator === 'X'){
        if(selected_operator === '*'){
            document.getElementById('multiply_btn').classList.remove('tb_bw');
            document.getElementById('multiply_btn_txt').classList.remove('tb_bw');
            selected_operator = 'not defined';
        } else if(selected_operator === 'not defined'){
            document.getElementById('multiply_btn').classList.add('tb_bw');
            document.getElementById('multiply_btn_txt').classList.add('tb_bw');
            selected_operator = '*';
        }
        console.log(selected_operator);
    }
    if(operator === '+'){
        if(selected_operator === '+'){
            document.getElementById('add_btn').classList.remove('tb_bw');
            document.getElementById('add_btn_txt').classList.remove('tb_bw');
            selected_operator = 'not defined';
        } else if(selected_operator === 'not defined'){
            document.getElementById('add_btn').classList.add('tb_bw');
            document.getElementById('add_btn_txt').classList.add('tb_bw');
            selected_operator = '+';
        }
        console.log(selected_operator);
    }
    if(operator === '-'){
        if(selected_operator === '-'){
            document.getElementById('minus_btn').classList.remove('tb_bw');
            document.getElementById('minus_btn_txt').classList.remove('tb_bw');
            selected_operator = 'not defined';
        } else if(selected_operator === 'not defined'){
            document.getElementById('minus_btn').classList.add('tb_bw');
            document.getElementById('minus_btn_txt').classList.add('tb_bw');
            selected_operator = '-';
        }
        console.log(selected_operator);
    }
    if(operator === '/'){
        if(selected_operator === '/'){
            document.getElementById('divide_btn').classList.remove('tb_bw');
            document.getElementById('divide_btn_txt').classList.remove('tb_bw');
            selected_operator = 'not defined';
        } else if(selected_operator === 'not defined'){
            document.getElementById('divide_btn').classList.add('tb_bw');
            document.getElementById('divide_btn_txt').classList.add('tb_bw');
            selected_operator = '/';
        }
        console.log(selected_operator);
    }
}

//takes the secomd omput
function collect_second(number) {
   if(selected_operator !== 'not defined' && first_character < 9999999 && number !== '.'){
        number = String(number);
        second_character = second_character + number;
        second_character = Number(second_character);
        console.log(second_character);
        console.log(`Second is a ${typeof(second_character)}`);
        document.getElementById('answer_display').textContent = second_character;
  }  if(selected_operator !== 'not defined' && number === '.'){
        number = String(number);
        second_character = second_character + number;
        document.getElementById('answer_display').textContent = second_character;
  }
}

function calculating_answer(){
    if(selected_operator === '+'){
        answer = first_character + second_character;
    } else 
    if(selected_operator === '-'){
        answer = first_character - second_character;
    } else
    if(selected_operator === '*'){
        answer = first_character * second_character;
    }else
    if(selected_operator === '/'){
        answer = first_character / second_character;
    }
    document.getElementById('answer_display').textContent = answer;
}