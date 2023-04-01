const inputSoundEl = document.getElementById('range_sound')
const soundSize = document.getElementById('sound_size')

inputSoundEl.addEventListener('change', (e) => {
    let val = e.target.value
    console.log(val)
    soundSize.style.transform = `translateY(-${val * 1.2}px)`
})

