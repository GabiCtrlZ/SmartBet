$('body').on('click', '.league', function () {
    $('.name').empty()
    $('.input').empty()
    $('.data2').empty()
    $('.name').html(`${$(this).text()}`)
    const leauge = $(this).text().replace(" ", "-")
    $.get(`/teams/${leauge}`, function (res) {
        $('.input').append(`<select id=team1></select>`)
        $('.input').append(`<select id=team2></select>`)
        for (let i of res) {
            $(`#team1`).append(`<option value=${i}>${i}</option>`)
            $(`#team2`).append(`<option value=${i}>${i}</option>`)
        }
        $('.input').append(`<div class=form><button class="button">Click</button></div>`)
    })
})

$('body').on('click', '.button', function () {

    const data = {
        homeTeam: $("#team1 option:selected").text(),
        awayTeam: $("#team2 option:selected").text(),
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