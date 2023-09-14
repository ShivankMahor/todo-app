const nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
    nav.classList.toggle("sticky", window.scrollY > 100);
});
const letters = "ABCDEFGHIJKLMNOPPRSTUVWXYZ";


ShuffleanimationOnMouseover1("animated-text");
function ShuffleanimationOnMouseover1(classname) {
    const elements = document.querySelectorAll(`.${classname}`)

    elements.forEach((element) => {
        element.addEventListener("mouseover", (event) => {
            // let iterations = 0.0;
            const obj = { iterations: 0 };
            var val=event.target.dataset.value1;
            animationStepNormal(event,obj,val);
        });
    });
}

ShuffleanimationOnMouseover2("animated-text2");
function ShuffleanimationOnMouseover2(classname) {
    const elements = document.querySelectorAll(`.${classname}`)

    elements.forEach((element) => {
        element.addEventListener("mouseover", (event) => {
            const obj = { iterations: 0 };
            if (event.target.dataset.ite == 1) {
                let repeat = "#".repeat(event.target.dataset.lendiff)
                event.target.innerText = event.target.innerText + repeat;
                var val = event.target.dataset.value2;
                animationStepNormal(event, obj, val);
                event.target.dataset.ite = 2;
            }
            else {
                event.target.innerText = event.target.innerText.slice(0, -parseInt(event.target.dataset.lendiff));
                var val = event.target.dataset.value1;
                animationStepNormal(event, obj, val);
                event.target.dataset.ite = 1;
            }
        });
    });
}

function animationStepNormal(event, obj, val) {
    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("").map((letter, index) => {
            if (index < obj.iterations) {
                return val[index++];
            }
            // console.log(`hi ${val}`);

            return letters[Math.floor(Math.random() * 26)]
        }).join("");
        obj.iterations += 1 / 3;
        if (obj.iterations >= val.length) {
            clearInterval(interval);
        }
    }, 30);
}
ShuffleanimationOnMouseover3("animated-text3");
function ShuffleanimationOnMouseover3(classname) {
    const elements = document.querySelectorAll(`.${classname}`)

    elements.forEach((element) => {
        element.addEventListener("mouseover", (event) => {
            const obj = { iterations: 0 };
            if (event.target.dataset.ite == 1) {
                let lendiff = event.target.dataset.value2.length - event.target.dataset.value1.length;
                let repeat = "#".repeat(lendiff)
                event.target.innerText = event.target.innerText + repeat;
                var val = event.target.dataset.value2;
                animationStepSlow(event, obj, val);
                event.target.dataset.ite = 2;
            }
            else if (event.target.dataset.ite == 2) {
                let lendiff = event.target.dataset.value3.length - event.target.dataset.value2.length;
                let repeat = "#".repeat(lendiff)
                event.target.innerText = event.target.innerText + repeat;
                var val = event.target.dataset.value3;
                animationStepSlow(event, obj, val);
                event.target.dataset.ite = 3;
            }
            else{
                let lendiff = event.target.dataset.value3.length - event.target.dataset.value1.length;
                event.target.innerText = event.target.innerText.slice(0, -lendiff);
                var val = event.target.dataset.value1;
                animationStepSlow(event, obj, val);
                event.target.dataset.ite = 1;
            }
        
        });
    });
}

function animationStepSlow(event, obj, val) {
    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("").map((letter, index) => {
            if (index < obj.iterations) {
                return val[index++];
            }
            // console.log(`hi ${val}`);

            return letters[Math.floor(Math.random() * 26)]
        }).join("");
        obj.iterations += 1 / 2;
        if (obj.iterations >= val.length) {
            clearInterval(interval);
        }
    }, 25);
}


// ShuffleanimationOnMouseover("animated-text2");
// function ShuffleanimationOnMouseover(classname) {
//     const elements = document.querySelectorAll(`.${classname}`)

//     elements.forEach((element) => {
//         element.addEventListener("mouseover", (event) => {
//             const obj = { iterations: 0 };
//             if (event.target.dataset.ite == 1) {
//                 let repeat = "#".repeat(event.target.dataset.lendiff)
//                 event.target.innerText = event.target.innerText + repeat;
//                 var val = event.target.dataset.value2;
//                 animationStep(event, obj, val);
//                 event.target.dataset.ite = 2;
//             }
//             else {
//                 event.target.innerText = event.target.innerText.slice(0, -parseInt(event.target.dataset.lendiff));
//                 var val = event.target.dataset.value1;
//                 animationStep(event, obj, val);
//                 event.target.dataset.ite = 1;
//             }
//         });
//     });
// }

// function animationStep(event, obj, val) {
//     const interval = setInterval(() => {
//         event.target.innerText = event.target.innerText.split("").map((letter, index) => {
//             if (index < obj.iterations) {
//                 return val[index++];
//             }
//             console.log(`hi ${val}`);

//             return letters[Math.floor(Math.random() * 26)]
//         }).join("");
//         obj.iterations += 1 / 3;
//         if (obj.iterations >= val.length) {
//             clearInterval(interval);
//         }
//     }, 30);
// }