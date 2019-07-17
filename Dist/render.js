const calculator = new Calculator()

const render = function (arr) {
    $('.data2').empty()
    $('.data2').append(`
    <div>
        <div>${(calculator.homeWin(arr)).toFixed(2)}</div>
        <div>${(calculator.draw(arr)).toFixed(2)}</div>
        <div>${(calculator.awayWin(arr)).toFixed(2)}</div>
    </div>
    <div>
        <div>${(calculator.homeOrDraw(arr)).toFixed(2)}</div>
        <div>${(calculator.homeOrAway(arr)).toFixed(2)}</div>
        <div>${(calculator.drawOrAway(arr)).toFixed(2)}</div>
    </div>
    <div>
        <div>${(calculator.under05Goals(arr)).toFixed(2)}</div>
        <div>${(calculator.under15Goals(arr)).toFixed(2)}</div>
        <div>${(calculator.under25Goals(arr)).toFixed(2)}</div>
        <div>${(calculator.under35Goals(arr)).toFixed(2)}</div>
        <div>${(calculator.under45Goals(arr)).toFixed(2)}</div>
        <div>${(calculator.under55Goals(arr)).toFixed(2)}</div>
    </div>
    <div>
        <div>${(100 - calculator.under05Goals(arr)).toFixed(2)}</div>
        <div>${(100 - calculator.under15Goals(arr)).toFixed(2)}</div>
        <div>${(100 - calculator.under25Goals(arr)).toFixed(2)}</div>
        <div>${(100 - calculator.under35Goals(arr)).toFixed(2)}</div>
        <div>${(100 - calculator.under45Goals(arr)).toFixed(2)}</div>
        <div>${(100 - calculator.under55Goals(arr)).toFixed(2)}</div>
    </div>
    <div>
        <div>${(calculator.bothTeamToScore(arr)).toFixed(2)}</div>
    </div>
    `)
}