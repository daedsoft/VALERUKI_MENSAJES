const filter = document.querySelector('.filter')
const filters = document.querySelector('.filters')

filter.addEventListener('click', () => {
    filters.classList.toggle('hide')
})

// ************************

const enableCopiar = () => {
    // **** copíar *********
    const btns = document.querySelectorAll('.btn')
    for (let i = 0; i < btns.length; i++){
        btns[i].addEventListener('click', () => {
            for (let j = 0; j < btns.length; j++){
                btns[j].textContent = '¡Copiar!'
            }
            let target = btns[i].parentElement.previousElementSibling
            let text = target.textContent
            navigator.clipboard.writeText(text)
            btns[i].textContent = 'Copiado'
        })
    }
}

// **************************************************************

const main = document.querySelector('.main')
let content = ''
messages.map((i) => {
    content += `<div class="card">                    
                    <p>${i.mensaje}</p>
                    <div class="card__footer">
                        <button type="button" class="btn">¡Copiar!</button>
                    </div>
                </div>`   
})
main.innerHTML = content
content = ''
enableCopiar()


// ******* filtrar ******************

const filtersItems = document.querySelectorAll('.filters__item')
for (let i = 0; i < filtersItems.length; i++){
    filtersItems[i].addEventListener('click', () => {
        if(filtersItems[i].textContent.trim() != "Todos"){
            main.innerHTML = ''
            let filtered = messages.filter(mensaje => mensaje.categoria == filtersItems[i].textContent.trim())
            filtered.map((i) => {
                content += `<div class="card">                    
                        <p>${i.mensaje}</p>
                        <div class="card__footer">
                            <button type="button" class="btn">¡Copiar!</button>
                        </div>
                    </div>`   
            })
            main.innerHTML = content
            content = ''            
            enableCopiar()
        }else{
            messages.map((i) => {
                content += `<div class="card">                    
                                <p>${i.mensaje}</p>
                                <div class="card__footer">
                                    <button type="button" class="btn">¡Copiar!</button>
                                </div>
                            </div>`   
            })
            main.innerHTML = content
            content = ''
            enableCopiar()
        }  
        filters.classList.toggle('hide')      
    })
}