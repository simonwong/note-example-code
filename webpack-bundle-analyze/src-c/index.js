const buttonEl = document.createElement('button')
buttonEl.innerText = '美好的周五又来了'

buttonEl.onclick = () => {
    import('./test').then(res => {
        console.log(res.default)
    })
}

document.querySelector('body').appendChild(buttonEl)
