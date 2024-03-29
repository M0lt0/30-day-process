const inputArea = document.querySelector(".input-field")
const optionList = document.querySelector(".option-list")
const button = document.querySelector(".action-button")
const resultSection = document.querySelector(".result-section")
const options = document.querySelectorAll("option")
const resultDiv = document.querySelector(".result-div")
const result = document.querySelector(".result")
const imgFrame = document.querySelector(".img-side")



button.addEventListener("click", massCalculation = () => {
    let value = parseInt(inputArea.value)
    if (isNaN(value)) {
        alert("please enter a number")
        // resultDiv.innerHTML = " "
        // resultSection.textContent = "please enter a number"
        // resultDiv.append(resultSection)
        // console.log(value)
    } else {
        let theMass
        let theImageSource
        let selectedPlant
        options.forEach(option => {
            if (option.selected) {
                selectedPlant = option.value.toLowerCase();
            }
        });
        console.log(selectedPlant)
        if (selectedPlant !== "none") {
            switch (selectedPlant) {
                case "earth":
                    theMass = value * 8.9
                    theImageSource = "/day-24/images/earth.png"
                    break
                case "jupiter":
                    theMass = value * 24.79
                    theImageSource = "/day-24/images/jupiter.png"
                    break
                case "mars":
                    theMass = value * 3.721
                    theImageSource = "/day-24/images/mars.png"
                    break
                case "mercury":
                    theMass = value * 3.7
                    theImageSource = "/day-24/images/mercury.png"
                    break
                case "pluto":
                    theMass = value * 0.62
                    theImageSource = "/day-24/images/pluto.png"
                    break
                case "saturn":
                    theMass = value * 10.44
                    theImageSource = "/day-24/images/saturn.png"
                    break
                case "moon":
                    theMass = value * 1.62
                    theImageSource = "/day-24/images/moon.png"
                    break
                case "neptune":
                    theMass = value * 11.15
                    theImageSource = "/day-24/images/neptune.png"
                    break
                case "uranus":
                    theMass = value * 8.69
                    theImageSource = "/day-24/images/uranus.png"
                    break
                case "venus":
                    theMass = value * 8.87
                    theImageSource = "/day-24/images/venus.png"
                    break
                default:
                    console.error("no planet selected")
                    break;
            }
            const plantImge = document.createElement("img")
            plantImge.setAttribute("class", "plant-imge")
            plantImge.setAttribute("src", theImageSource)
            resultDiv.append(resultSection)
            result.textContent = `${theMass.toFixed(2)} N`
            resultDiv.innerHTML = "";
            resultDiv.append(resultSection)
            resultDiv.append(plantImge)
        } else {
            alert("please select a plant")
        }
    }

})


