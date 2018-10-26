$(document).ready( () => {

    let onState = false;
    let ans = 0;

    //NUMBER BUTTON:

    let one = $('.button_1');
    let two =  $('.button_2');
    let three =  $('.button_3');
    let four =  $('.button_4');
    let five =  $('.button_5');
    let six =  $('.button_6');
    let seven =  $('.button_7');
    let eight =  $('.button_8');
    let nine =  $('.button_9');
    let zero =  $('.button_0');
    let dec  =  $('.button_dec');
    let equal =  $('.button_equal');
    let dist  =  $('.button_dist');

    let answer = $(`.button_ans`);
    let ce = $(`.button_ce`);
    let onoff = $(`.button_power`);

    //Math Button:
    let add    = $(`.button_add`);
    let times  = $(`.button_times`);
    let divide = $(`.button_divide`);
    let subs = $(`.button_subs`);

    //Screen:
    let equation  = $(`.equation code`);
    let result   =  $(`.answer code`);

    //Put on the Calculator:
    onoff.click( () => {
        if(onState){
            onState = false;
            equation.html("");
            result.html("");
        }
        else{
            onState = true;
            result.html(0);
        }
    } );

    //THIS IS FOR VARIABLE ONE:
    one.click( () => {
        let word = equation.html();

        if(onState){           
            equation.html(`${word}1`);
        }
    });

    //VARIABLE TWO:
    two.click( () => {
        let word = equation.html();

        if(onState){           
            equation.html(`${word}2`);
        }
    });

    //VARIABLE THREE:
    three.click( () => {
        let word = equation.html();

        if(onState){           
            equation.html(`${word}3`);
        }
    });

        //VARIABLE FOUR:
        four.click( () => {
            let word = equation.html();

            if(onState){           
                equation.html(`${word}4`);
            }
        });

        //VARIABLE FIVE:
    five.click( () => {
        let word = equation.html();

        if(onState){           
            equation.html(`${word}5`);
        }
    });

    //VARIABLE SIX:
    six.click( () => {
        let word = equation.html();

        if(onState){           
            equation.html(`${word}6`);
        }
    });

    //VARIABLE SEVEN:
    seven.click( () => {
        let word = equation.html();

        if(onState){           
            equation.html(`${word}7`);
        }
    });

    //VARIABLE EIGHT:
    eight.click( () => {
        let word = equation.html();

        if(onState){           
            equation.html(`${word}8`);
        }
    });

    //VARIABLE NINE:
    nine.click( () => {
        let word = equation.html();

        if(onState){           
            equation.html(`${word}9`);
        }
    });

    //VARIABLE ZERO:
    zero.click( () => {
        let word = equation.html();

        if(onState){           
            equation.html(`${word}0`);
        }
    });

    //VARIABLE DEC:
    dec.click( () => {
        let word = equation.html();

        if(onState){           
            equation.html(`${word}.`);
        }
    });

    //VARIABLE ANSWER:
    answer.click( () => {
        let word = equation.html();

        if(onState){           
            equation.html(`${word}ans`);
        }
    });

    //VARIABLE ADD:
    add.click( () => {
        let word = equation.html();

        if(onState){           
            equation.html(`${word}+`);
        }
    });

    //VARIABLE TIMES:
    times.click( () => {
        let word = equation.html();

        if(onState){           
            equation.html(`${word}x`);
        }
    });


    //VARIABLE DIVIDE:
    divide.click( () => {
        let word = equation.html();

        if(onState){           
            equation.html(`${word}/`);
        }
    });

    //VARIABLE SUBSTRACT:
    subs.click( () => {
        let word = equation.html();

        if(onState){           
            equation.html(`${word}-`);
        }
    });

} )