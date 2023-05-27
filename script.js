var img = new Array('./images/dice1.png','./images/dice2.png','./images/dice3.png','./images/dice4.png','./images/dice5.png','./images/dice6.png');

// console.log(dice1);
//Rather than source we can do in this way also....
// setAttribute("src",img[x]);

// window.addEventListener("load",function()
// { //No need to add this event...
//This window automatically refresh and changes teh contet of the page.
    let x =Math.trunc(Math.random()*6);
     document.getElementsByClassName("img1")[0].src = img[x];

    let y =Math.trunc(Math.random()*6);
    document.getElementsByClassName("img2")[0].src = img[y];

    if(x>y)
        document.getElementById("h").innerHTML = "Player 1 won 🚩";
       else if(y>x)
    document.getElementById("h").innerHTML = "Player 2 won 🚩";
      else 
    document.getElementById("h").innerHTML = "Play Again!!!";          
// });
