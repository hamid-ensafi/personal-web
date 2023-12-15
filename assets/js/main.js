const Li_menu = document.querySelectorAll('.menu-header>li')

const Content_page = document.querySelectorAll('.web-content>div')

const Image_About = document.querySelector('.image-about')

const Skills_content = document.querySelectorAll('.skills-content')

const Filter_image = document.querySelectorAll('.filter-image>figure')

const _input = document.querySelectorAll('.input-form')

const _form = document.querySelector('.form-container>form')

const Humborg_icon = document.querySelector('.menu-humborg')

const Menu_pc = document.querySelector('.header-pc')

let _index = 0

Li_menu.forEach((value) => {
    value.addEventListener('click', () => ShowContent(value))
})


function ShowContent(value = Li_menu[0]) {
    for (let target of Li_menu) {
        target.classList.remove('active-li')
    }
    
    for (let i of Content_page) {

        if (i.getAttribute('id') == value.getAttribute('data-status')) {
            i.classList.add('page-active')
            i.classList.remove('page-not-active')
        } else {
            i.classList.add('page-not-active')
            i.classList.remove('page-active')
        }

    }
    _Show_menu(_index=-1)
    value.classList.add('active-li')
    if (value.getAttribute('data-status') == 'resume-page') {
        let _transition_num = 3
        Skills_content.forEach((value) => {
            value.style.width = value.getAttribute('data-width')
            _transition_num = _transition_num + 10
            value.style.transition = '' + _transition_num * .1 + 's'
        })
    } else {
        Skills_content.forEach((value) => {
            value.style.transition = 'none'
            if (value.getClientRects()[0].width > 0) {
                value.style.width = '0'

            }
        })
    }


}

ShowContent()
let Top, Left
Image_About.addEventListener('mousemove', (e) => {
    Top = (e.offsetY * .05) - 13.5
    Left = (e.offsetX * .05) - 10
    Image_About.children[0].style.cssText = 'transform:rotateX(' + Top + 'deg) rotateY(' + Left + 'deg);transition:none;'
})
Image_About.addEventListener('mouseleave', () => {
    Image_About.children[0].style.cssText = 'transform:rotateX(0deg) rotateY(0deg);transition-duration:.5s;'
})





const Box_fun = document.querySelectorAll('.box-fun-fact')


Box_fun.forEach((value) => {
    value.addEventListener('mouseenter', () => {
        let x, y
        value.style.transition = 'none'

        value.addEventListener('mousemove', (e) => {
            x = ((((e.layerX)) - (value.clientWidth) / 2)) * (.1)
            y = (((e.layerY)) - ((value.clientHeight) / 2)) * (.1)


            value.style.transition = 'none'


            value.style.transform = 'perspective(300px)rotateY(' + x + 'deg)rotateX(' + y + 'deg)'

        })
        value.addEventListener('mouseleave', (e) => {
            value.style.transform = 'perspective(300px)rotateY(0deg)rotateX(0deg)'
            value.style.transition = 'all .5s'
        })
    })
})


Filter_image.forEach((value) => {
    value.addEventListener('mouseleave', () => Hidden_info(event, value))

    value.addEventListener('mouseenter', () => Show_info(event, value))
})

function Show_info(event, filterItems) {
    let infoProj = filterItems.querySelector('.information-project')
    Math_filter(event, filterItems)

    setTimeout(() => {
        infoProj.style.top = '0'
        infoProj.style.left = '0'
    }, 10);
}

function Hidden_info(event, filterItems) {
    Math_filter(event, filterItems)
}



function Math_filter(event, filterItems) {
    let infoProj = filterItems.querySelector('.information-project')
    let _OffsetX = (event.offsetX) - ((filterItems.clientWidth) / 2)
    let _OffsetY = (event.offsetY) - ((filterItems.clientHeight) / 2)


    if (_OffsetX >= ((filterItems.clientWidth) / 2) - 20) {
        infoProj.style.left = '100%'
    } else if ((_OffsetX) <= (((filterItems.clientWidth) / 2) - 20) * (-1)) {
        infoProj.style.left = '-100%'
    } else if (_OffsetY >= ((filterItems.clientHeight) / 2) - 20) {
        infoProj.style.top = '100%'
    } else if (_OffsetY <= (((filterItems.clientHeight) / 2) - 20) * (-1)) {
        infoProj.style.top = '-100%'
    }

}

_input.forEach((field) => {

    field.addEventListener('focus', () => _Focus(field))
    field.addEventListener('blur', () => _Blur(field))
})

function _Focus(field) {
    let target = field.parentElement.querySelectorAll('.border-status,.fa-regular')
    for (let Child of target) {
        Child.style.cssText = 'background-color:#ff724c;color:#ff724c;width:100%;'
    }

}

function _Blur(field) {
    let target = field.parentElement.querySelectorAll('.border-status,.fa-regular')
    for (let Child of target) {
        Child.style.cssText = 'background-color:red;color:#555;width:0%;'
    }
}



Humborg_icon.addEventListener('click',()=> _Show_menu())

 
function _Show_menu() {
    if(_index%2==0){
        Menu_pc.style.transform='translateX(0)'
        console.log('hamid')
    }else{
        Menu_pc.style.transform='translateX(-100%)'

    }
    _index++
    console.log(_index)
}