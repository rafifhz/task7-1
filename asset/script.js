let form = document.getElementById('form');
let form2 = document.getElementById('form2');
let form3 = document.getElementById('form3');
let form4 = document.getElementById('form4');
let form5 = document.getElementById('form5');
let formch = document.getElementById('formch');




let ch = document.getElementById('ch');  
var textinput1 = document.getElementById('textinput1');
var textinput2 = document.getElementById('textinput2');

var textinput3 = document.getElementById('textinput3');
let num = document.getElementById('num'); 
let even = document.getElementById('ev'); 
let mark1 = document.getElementById('mark1'); 
let mark2 = document.getElementById('mark2'); 

let mark3 = document.getElementById('mark3'); 

let mark4 = document.getElementById('mark4'); 

let mark5 = document.getElementById('mark5'); 
let g1 = document.getElementById('g1'); 
let g2 = document.getElementById('g2'); 
let g3 = document.getElementById('g3'); 
let g4 = document.getElementById('g4'); 
let g5 = document.getElementById('g5'); 






let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btnch = document.getElementById('btnch');







//max number+min number//
btn.addEventListener('click', () => {

    Compare();

    });


    let Compare = () => {
        if (textinput1.value === "" | textinput2.value === "" | textinput3.value === "" ) {
          alert("Please,Enter the Empty field!");
        
    
        }
        else{
    
        let numbers = [parseInt(textinput1.value), parseInt(textinput2.value), parseInt(textinput3.value)];
        let max = numbers[0];
        let min = numbers[0];
        numbers.forEach(x => {
            if (x > max) {
                max = x;
            }
            if (x < min) {
                min = x;
            }
        
        });
    
     
        alert("max element =  "   +max + "     "  +   "Min element =  "   +min,);
        console.log("max element =", max);
        console.log("min element =", min);

        

        }}
    
        ///Write a program that take character from user then if it is vowel chars
        //(a,e,I,o,u) then print vowel otherwise print consonant

        btnch.addEventListener('click', () => {

            if (ch.value === "" ) {
                alert("Please,Enter the Empty field!");
              
          
              }
              else{
          
        ch.value = ch.value .toLowerCase();
        
       if (ch.value === 'a' || ch.value === 'e' || ch.value === 'i' || ch.value === 'o' || ch.value === 'u') {
          alert("Output: vowel ");

       } else if (ch.value >= 'a' && ch.value <= 'z') {
            alert("Output: Consonant");
        } else {
         alert("Invalid input");
        }
    }

    });

        //Write a program that allows userto insert integerthen print a multiplication table up to 12.
 
        btn2.addEventListener('click', () => {

            let num =document.getElementById('num');  
            document.write( " Outputs: " )
            console.log( " Outputs: " )


        for ( i = 1; i <= 12; ++i) {
        document.write( "  " + num.value *i )
        console.log( "  " + num.value *i )}

        })


        //Write a program that allows to user to insert number then print all even numbers between 1 to this number

        btn3.addEventListener('click', () => {

            let even =document.getElementById('ev');  
            document.write( " Outputs: " )
            console.log( " Outputs: " )


        for ( i = 1; i <= even.value; ++i) {
            if(i%2==0){
                document.write( "  ", i )
                console.log(i)}

            }})


            //Write a program to enter marks of five subjects and calculate total, average and percentage.
            
            btn4.addEventListener('click', () => {

                average();
            
                });
            
            
                let average = () => {
                    if (mark1.value === "" | mark2.value === "" | mark3.value === ""  | mark4.value === "" | mark5.value === "" )  {
                      alert("Please,Enter the Empty field!");
                    
                
                    }
                    else{
                
                    let marks = [parseInt(mark1.value), parseInt(mark2.value), parseInt(mark3.value) , parseInt(mark4.value) , parseInt(mark5.value)];
                    var Avgmarks = 0;
                    for ( i = 0; i < marks.length; i++) {
                        Avgmarks += marks[i];
                        var avg = (Avgmarks / marks.length);
                        var percentage = (Avgmarks / 500.0) * 100;
                    }
                    document.write("Output: Total marks =" + Avgmarks + "<br>");

                    document.write("Average Marks: " + avg +"<br>");
                    document.write("percentage : " + percentage);

                

                }};
                

                //6- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade
                btn5.addEventListener('click', () => {

                    Grade();
                
                    });
                
                
                    let Grade = () => {
                        if (g1.value === "" | g2.value === "" | g3.value === ""  | g4.value === "" | g5.value === "" )  {
                          alert("Please,Enter the Empty field!");
                        
                    
                        }
                        else{
                    
                        let marksg = [parseInt(g1.value), parseInt(g2.value), parseInt(g3.value) , parseInt(g4.value) , parseInt(g5.value)];
                        var Avgmarks2 = 0;
                        for ( i = 0; i < marksg.length; i++) {
                            Avgmarks2 += marksg[i];
                            var avg2 = (Avgmarks2 / marksg.length);
                            var percentage2 = (Avgmarks2 / 500.0) * 100;
                        }
                        document.write("Output: Total marks =" + Avgmarks2 + "<br>");
    
                        document.write("Average Marks: " + avg2 +"<br>");
                        document.write("percentage : " + percentage2);
                        
                        if (percentage2 >= 90) {
                            document.write("Grade: A");
                        }else if (percentage2 >= 80) {
                                document.write("Grade: B");
                         } else if (percentage2 >= 70) {
                                document.write("Grade: C");

                         } else if (percentage2 >= 60) {
                                document.write("Grade: D");

                         } else if(percentage2 >= 40) {
                                document.write("Grade: E");   
                        
                        } else if (percentage2 < 40) {
                            document.write("Grade: F");
                        } 
                        
    
                    }};
                    
    


                 
                