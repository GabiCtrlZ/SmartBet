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

$('body').on('click', '.calcOdds', function () {
    const arr = $('.odds')
    for (let i of arr) {
        if ($(i).val() !== '' && $(i).val() > 1) {
            const data = $(i).parent().text().split(' ')
            const num = parseFloat((data[data.length - 4]))
            const newOdd = $(i).val()
            let result = (newOdd - 1) * (num / 100) - (1 - (num / 100))
            result = result / (newOdd - 1)
            $(i).parent().find('.result').html((result * 100).toFixed(2))
        }
    }
})

