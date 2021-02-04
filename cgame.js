var colors=colorlistgenerator(6);
var square= document.querySelectorAll(".square");
var easymode= document.querySelector("#easybtn");
var hardmode=document.querySelector("#hardbtn");
var easy=false;
hardmode.classList.add("selected");
function colorlistgenerator(num)
{
    var arr=[]
    var r,g,b;
    for (var i=0; i<num;++i)
    {
        r=String(Math.floor( Math.random()*256));
        g=String(Math.floor( Math.random()*256));
        b=String(Math.floor( Math.random()*256));
        arr[i]="rgb("+ r +", "+ g +", "+ b +")";
    }
    return arr;

}

function setboard(num)
{
    for (var i=0; i<num;++i)
    {
        if(colors[i])
        {
            square[i].style.backgroundColor=colors[i];
        }
        else
        {
            square[i].style.display="none";
        }
    }  
}

easymode.addEventListener("click", function()
{
    easymode.classList.add("selected");
    hardmode.classList.remove("selected");
    colors=colorlistgenerator(3);
    pickedcolor=pickcolor();
    setboard(6);
    easy=true;
    play();
   

})
hardmode.addEventListener("click", function()
{
    
    hardmode.classList.add("selected");
    easymode.classList.remove("selected");
    colors=colorlistgenerator(6);
    for (var i=0 ; i<colors.length;++i)
    {
        square[i].style.display="inline";
    }
    pickedcolor=pickcolor();
    easy=false;
    play();
})



var pickedcolor= pickcolor();

function pickcolor()
{
    var rnd= Math.floor( Math.random()*colors.length);
    return colors[rnd];
}
play();
function play()
{
    document.getElementById("pcolor").textContent=pickedcolor;  
    for(var i=0; i<colors.length;++i)
    {
        square[i].style.backgroundColor=colors[i];
    
        square[i].addEventListener("click", 
        function()
        {
            var clickedColor= this.style.backgroundColor;
            if(clickedColor==pickedcolor)
            {
                document.querySelector("#h").textContent="Correct!";
                changeall(clickedColor);
            }
            else
            {
                document.querySelector("#h").textContent="Try Again!";
                this.style.backgroundColor= "rgb(27, 25, 25)";
            }
        })   
    }
}
function changeall(col)
{
    for (var j=0 ; j<square.length;++j)
    {
        square[j].style.backgroundColor=col;
    }
    document.querySelector("h1").style.backgroundColor=col;
}

var rematch= document.getElementById("retry");

rematch.addEventListener("click", function()
 {
     if(easy===true)
     {
        colors=colorlistgenerator(3);
     }
     else{
        colors=colorlistgenerator(6);
     }
     
     pickedcolor=pickcolor();
     play();

 })

