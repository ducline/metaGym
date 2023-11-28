/*carousel slider*/

let count = 1

document.getElementById("radio1").checked = true

setInterval(() => {
    nextImg()
}, 5000)

const nextImg = () => {
    count++

    if (count > 3) {
        count = 1
    }

    document.getElementById("radio"+count).checked = true
}


