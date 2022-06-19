const first_skill = document.querySelector('.skill:first-child')
const sk_counters = document.querySelectorAll('.counter span')
const progress_bars = document.querySelectorAll('.skills svg circle')

window.addEventListener('scroll', () => {
    if (!skillsPlayed) skillsCounter()
})

/* --------------------- Skill Progress Bar Animation ----------------------*/

function hasReached(e) {
    let topPos = e.getBoundingClientRect().top

    if (window.innerHeight >= topPos + e.offsetHeight) return true
    return false
}

function updateCount(num, maxNum) {
    let currNum = +num.innerText
    if (currNum < maxNum) {
        num.innerText = currNum + 1
        setTimeout(() => {
            updateCount(num, maxNum)
        }, 12)
    }
}

let skillsPlayed = false

function skillsCounter() {
    if (!hasReached(first_skill)) return

    skillsPlayed = true

    sk_counters.forEach((counter, i) => {
        let target = +counter.dataset.target
        let strokeVal = 427 - 427 * (target / 100)
        console.log(strokeVal)

        progress_bars[i].style.setProperty('--target', strokeVal)

        setTimeout(() => {
            updateCount(counter, target)
        }, 400)
    })

    progress_bars.forEach(
        (p) => (p.style.animation = 'progress 2s ease-in-out forwards')
    )
}
