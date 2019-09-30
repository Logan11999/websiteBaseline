const convertbtn = async (event) => {
    const c = parseInt(document.querySelector('#cTemp').value)
    const s = 273.15
    const sub = c - s
    const ans = `In Kelvin is ${sub}.`
    document.querySelector('#result').innerHTML = ans
    }

document.addEventListener('click', event => {
    if (event.target && event.target.id === 'convertBtn') {  
    console.log("clicked")
    convertbtn(event)
    }
  })