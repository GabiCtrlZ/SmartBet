$('body').on('click', '.league', function () {
    $('.name').empty()
    $('.input').empty()
    $('.name').html(`${$(this).text()}`)
    $('.input').append(`
        <div class=form><input type=text class="bar" placeholder="Home Team"></div>
        <div class=form><input type=text class="bar" placeholder="Against Team"></div>
        <div class=form><button class="button">Click</button></div>
    `)
})