$('body').on('click', '.league', function () {
    $('.name').empty()
    $('.input').empty()
    $('.name').html(`${$(this).text()}`)
    $('.input').append(`
        <div class=form><input type=text id="homeTeam" class="bar" placeholder="Home Team"></div>
        <div class=form><input type=text id="awayTeam" class="bar" placeholder="Against Team"></div>
        <div class=form><button class="button">Click</button></div>
    `)
})

$('body').on('click', '.button', function () {

    const data = {
        homeTeam: $('#homeTeam').val(),
        awayTeam: $('#awayTeam').val(),
        league: $(this).closest('.data').find('.name').text().replace(" ", "-")
    }
    $.post('/calc', data, function (res) {
        render(res)
    })
})