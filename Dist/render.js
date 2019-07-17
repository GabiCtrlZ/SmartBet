const calculator = new Calculator()

const render = function (arr) {
    $('.data2').empty()
    $('.data2').append(`
    <div>
        <div class="ftrLabel">Fulltime Result</div>
            <div class="ftr">
            <div>
                <div>1 - </div>
                <div>${(calculator.homeWin(arr)).toFixed(2) + "%"}</div>
            </div>
            <div>
                <div>X - </div>
                <div>${(calculator.draw(arr)).toFixed(2) + "%"}</div>
            </div>
            <div>
                <div>2 - </div>
                <div>${(calculator.awayWin(arr)).toFixed(2) + "%"}</div>
            </div>
        </div>
        <div class="ftrLabel">Double Chance</div>
            <div class="ftr">
                <div>
                    <div>1X - </div>
                    <div>${(calculator.homeOrDraw(arr)).toFixed(2) + "%"}</div>
                </div>
                <div>
                    <div>12 - </div>
                    <div>${(calculator.homeOrAway(arr)).toFixed(2) + "%"}</div>
                </div>
                <div>
                    <div>X2 - </div>
                    <div>${(calculator.drawOrAway(arr)).toFixed(2) + "%"}</div>
                </div>
            </div> 
        <div class="ftrLabel">Under Goals</div>
            <div class="ftr">
                <div>
                    <div>Under 0.5 - </div>
                    <div>${(calculator.under05Goals(arr)).toFixed(2) + "%"}</div>
                </div>
                <div>
                    <div>Under 1.5 - </div>
                    <div>${(calculator.under15Goals(arr)).toFixed(2) + "%"}</div>
                </div>
                <div>
                    <div>Under 2.5 - </div>
                    <div>${(calculator.under25Goals(arr)).toFixed(2) + "%"}</div>
                </div>
                <div>
                    <div>Under 3.5 - </div>
                    <div>${(calculator.under35Goals(arr)).toFixed(2) + "%"}</div>
                </div>
                <div>
                    <div>Under 4.5 - </div>
                    <div>${(calculator.under45Goals(arr)).toFixed(2) + "%"}</div>
                </div>
                <div>
                    <div>Under 5.5 - </div>
                    <div>${(calculator.under55Goals(arr)).toFixed(2) + "%"}</div>
                </div>
            </div>    
        <div class="ftrLabel">Over Goals</div>
            <div class="ftr">
                <div>
                    <div>Over 0.5 - </div>
                    <div>${(100 - calculator.under05Goals(arr)).toFixed(2) + "%"}</div>
                </div>
                <div>
                    <div>Over 1.5 - </div>
                    <div>${(100 - calculator.under15Goals(arr)).toFixed(2) + "%"}</div>
                </div>
                <div>
                    <div>Over 2.5 - </div>
                    <div>${(100 - calculator.under25Goals(arr)).toFixed(2) + "%"}</div>
                </div>
                <div>
                    <div>Over 3.5 - </div>
                    <div>${(100 - calculator.under35Goals(arr)).toFixed(2) + "%"}</div>
                </div>
                <div>
                    <div>Over 4.5 - </div>
                    <div>${(100 - calculator.under45Goals(arr)).toFixed(2) + "%"}</div>
                </div>
                <div>
                    <div>Over 5.5 - </div>
                    <div>${(100 - calculator.under55Goals(arr)).toFixed(2) + "%"}</div>
                </div>
            </div>
    </div>
    `)
}