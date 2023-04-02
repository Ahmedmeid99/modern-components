const inputSoundEl = document.getElementById('range_sound')
const soundSize = document.getElementById('sound_size')
const soundValue = document.getElementById('sound_value')
const stateIcons = document.querySelectorAll('.state_icon')
const highIcon = document.getElementById('state_icon_high')
const lowIcon = document.getElementById('state_icon_low')
const xmarkIcon = document.getElementById('state_icon_xmark')

const removeActiveFromAll = () => {
    stateIcons.forEach((icon) => {
        icon.classList.remove('active')
    })
}

const renderIconState = (sound) => {
    if (sound == 0) {
        removeActiveFromAll()
        xmarkIcon.classList.add('active')
        console.log('work...')
    }
    else if (sound > 0 && sound < 80) {
        removeActiveFromAll()
        lowIcon.classList.add('active')
        console.log('work...')
    }
    else if (sound >= 90) {
        removeActiveFromAll()
        highIcon.classList.add('active')
        console.log('work...')
    }
}

// // toggle sound state
// xmarkIcon.addEventListener("click", () => {
//     inputSoundEl.value = "100"
//     soundValue.innerHTML = 100
//     renderIconState(inputSoundEl.value)
// })
// highIcon.addEventListener("click", () => {
//     inputSoundEl.value = "0"
//     soundValue.innerHTML = 0
//     renderIconState(inputSoundEl.value)
// })

// set sound value when bage load
const inputValue = inputSoundEl.value
soundSize.style.transform = `translateY(-${inputValue * 1.2}px)`
soundValue.innerHTML = inputValue
renderIconState(inputValue)

// set sound value when bage change
inputSoundEl.addEventListener('change', (e) => {
    let val = e.target.value
    soundValue.innerHTML = val
    soundSize.style.transform = `translateY(-${val * 1.2}px)`
    renderIconState(val)
})
