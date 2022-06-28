// basile steph kevin ophélie Sébastien
const app = document.getElementById('app');
const colors = ['red', 'yellow', 'green', 'blue', 'black', 'white'];
const palette = document.createElement("tr")

for (let i = 0 ; i < colors.length; i++) {
  const colorpicker = document.createElement("td");
  colorpicker.classList.add(colors[i]);
  
  colorpicker.onclick= function() {
    picker = colors[i]
}
  palette.appendChild(colorpicker)
}

/*
const red = document.createElement("td")
red.classList.add("red");

const yellow = document.createElement("td")
yellow.classList.add("yellow");

const green = document.createElement("td")
green.classList.add("green");

const blue = document.createElement("td")
blue.classList.add("blue");

const black = document.createElement("td")
black.classList.add("black");*/

const clear = document.createElement("button");
clear.data = "hi";
clear.innerHTML = 'Clear';
clear.onclick = function() {
window.location.reload()
}

let picker = '';
// let target = '';
const canvasSize = 11;

const canva = document.createElement("table");

for (let i = 0; i < canvasSize; i++) {
    const canvastr = document.createElement("tr");

    for (let j = 0; j < canvasSize; j++) {
        const canvastd = document.createElement("td")
        // canvastd.setAttribute("id", `id${i}${j}`)
        canvastr.appendChild(canvastd)
        canvastd.onclick = function() {
        //  target = `id${i}${j}`
        //  console.log(target)
        
          for (let i = 0 ; i < colors.length; i++) {
            canvastd.classList.remove(colors[i])
          }
          canvastd.classList.add(picker)
        } 
    }
    canva.appendChild(canvastr)
}

    /*palette.appendChild(red)
    palette.appendChild(yellow)
    palette.appendChild(green)
    palette.appendChild(blue)
    palette.appendChild(black)*/
    app.appendChild(palette);
    app.appendChild(canva);
    app.appendChild(clear)
/*
    red.onclick= function() {
        picker = "red"
    }
    yellow.onclick= function() {
        picker = "yellow"
    }
    green.onclick= function() {
        picker = "green"
    }
    blue.onclick= function() {
        picker = "blue"
    }
    black.onclick= function() {
        picker = "black"
    }*/

    