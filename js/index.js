const colores = ['blue','red','black','pink','yellow']

const randomColor = (length) => {
    return Math.floor(Math.random() * length)
}

const btn = document.querySelector('.btn-click')

btn.onclick = () =>{
    document.body.style.backgroundColor = colores[randomColor(colores.length)]
}