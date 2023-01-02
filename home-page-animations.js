const widgets = document.querySelectorAll('.widget-wrapper')
widgets.forEach(widget => {
    widget.addEventListener('mouseover', () => {
        widget.childNodes[1].childNodes[1].classList.add('widget-darken')
    })
    widget.addEventListener('mouseout', () => {
        widget.childNodes[1].childNodes[1].classList.remove('widget-darken')
    })

})