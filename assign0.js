
function ecount(num)
{   
    
    var section_txt= "<h3><u>Counting from 1 to " + num + "</h3></u>";
    var factor_of_3 = false;
    var factor_of_5 = false;

    document.getElementById('output').innerHTML = section_txt;

    // count to N within the div
    for(var i=1; i<=num; i++)
    {   
        factor_of_3 = false; 
        factor_of_5 = false;


        if((i % 3) === 0)
        {   factor_of_3 = true;
        }

        if((i % 5) === 0)
        {   factor_of_5 = true;
        }
       
        // factor of 3 only
        if(factor_of_3 && !factor_of_5)
        {   document.getElementById('output').innerHTML += "<li>Fizz</li>";
        }


        // factor of 5 only        
        else if(factor_of_5 && !factor_of_3)
        {   document.getElementById('output').innerHTML += "<li>Buzz</li>";
        }

        // factor of 3 and 5
        else if(factor_of_3 && factor_of_5)
        {   document.getElementById('output').innerHTML += "<li>FizzBuzz</li>";
        }


        // not a factor of 3 or 5
        else
        {   document.getElementById('output').innerHTML += "<li>" + i + "</li>";
        }

    }
 
}
