$('body').on('click', '.league', function () {
    $('.name').empty()
    $('.input').empty()
    $('.name').html(`${$(this).text()}`)
    $('.input').append(`
        <div class=form><input type=text></div>
        <div class=form><input type=text></div>
        <div class=form><button>Click</button></div>
    `)
})