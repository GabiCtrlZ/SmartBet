$('body').on('click', '.league', function () {
    $('.name').empty()
    $('.input').empty()
    $('.data2').empty()
    $('.name').html(`${$(this).text()}`)
    const leauge = $(this).text().replace(" ", "-")
    $.get(`/teams/${leauge}`, function (res) {
        $('.input').append(`<select id=${leauge}></select>`)
        for (let i of res) {
            $(`#${leauge}`).append(`<option value=${i}>${i}</option>`)
        }
        $('.input').append(`<div class=form><button class="button">Click</button></div>`)
    })
    // $('.input').append(`
    //     <div class=form><input type=text id="homeTeam" class="bar" value="Roma" placeholder="Home Team"></div>
    //     <div class=form><input type=text id="awayTeam" class="bar" value="Milan" placeholder="Against Team"></div>
    //     <div class=form><button class="button">Click</button></div>
    // `)
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

$('body').on('keypress', '#awayTeam', function (event) { // I CANT PRESS ENTER AND IT WORKS
    if (event.keyCode == 13) {
        $('.button').click()
    }
})

$('body').on('click', '.fa-trash', function () {
    $('#homeTeam').val('')
    $('#awayTeam').val('')
})