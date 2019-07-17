const calculator = new Calculator()

const render = function (arr) {
    $('.data2').empty()
    $('.data2').append(`
    <div>
        <div class ='row'>
            <div class="ftrLabel col s12 m6"">
              <div class="ftr card blue-grey darken-1">
                <span class="card-title">Fulltime Result</span>
                <div class="card-content white-text">
                    <p>1 - ${(calculator.homeWin(arr)).toFixed(2) + "%"}</p>
                    <p>X - ${(calculator.draw(arr)).toFixed(2) + "%"}</p>
                    <p>2 - ${(calculator.awayWin(arr)).toFixed(2) + "%"}</p>
                </div>
            </div> 
        </div>

        <div class ='row'>
            <div class="ftrLabel col s12 m6"">
              <div class="ftr card blue-grey darken-1">
                <span class="card-title">Double Chance</span>
                <div class="card-content white-text">
                    <p>1X - ${(calculator.homeOrDraw(arr)).toFixed(2) + "%"}</p>
                    <p>12 - ${(calculator.homeOrAway(arr)).toFixed(2) + "%"}</p>
                    <p>X2 - ${(calculator.drawOrAway(arr)).toFixed(2) + "%"}</p>
                </div>
            </div> 
        </div>


        <div class ='row'>
            <div class="ftrLabel col s12 m6"">
              <div class="ftr card blue-grey darken-1">
                <span class="card-title">Under Goals</span>
                <div class="card-content white-text">
                    <p>Under 0.5 - ${(calculator.under05Goals(arr)).toFixed(2) + "%"}</p>
                    <p>Under 1.5 - ${(calculator.under15Goals(arr)).toFixed(2) + "%"}</p>
                    <p>Under 2.5 - ${(calculator.under25Goals(arr)).toFixed(2) + "%"}</p>
                    <p>Under 3.5 - ${(calculator.under35Goals(arr)).toFixed(2) + "%"}</p>
                    <p>Under 4.5 - ${(calculator.under45Goals(arr)).toFixed(2) + "%"}</p>
                    <p>Under 5.5 - ${(calculator.under55Goals(arr)).toFixed(2) + "%"}</p>
                </div>
            </div> 
        </div>

        <div class ='row'>
        <div class="ftrLabel col s12 m6"">
          <div class="ftr card blue-grey darken-1">
            <span class="card-title">Over Goals</span>
            <div class="card-content white-text">
                <p>Over 0.5 - ${(100-calculator.under05Goals(arr)).toFixed(2) + "%"}</p>
                <p>Over 1.5 - ${(100-calculator.under15Goals(arr)).toFixed(2) + "%"}</p>
                <p>Over 2.5 - ${(100-calculator.under25Goals(arr)).toFixed(2) + "%"}</p>
                <p>Over 3.5 - ${(100-calculator.under35Goals(arr)).toFixed(2) + "%"}</p>
                <p>Over 4.5 - ${(100-calculator.under45Goals(arr)).toFixed(2) + "%"}</p>
                <p>Over 5.5 - ${(100-calculator.under55Goals(arr)).toFixed(2) + "%"}</p>
            </div>
        </div> 
    </div>


        <div class ='row'>
            <div class="ftrLabel col s12 m6"">
              <div class="ftr card blue-grey darken-1">
                <span class="card-title">Exact Goals</span>
                <div class="card-content white-text">
                    <p>0 - ${(calculator.exact0(arr)).toFixed(2) + "%"}</p>
                    <p>1 - ${(calculator.exact1(arr)).toFixed(2) + "%"}</p>
                    <p>2 - ${(calculator.exact2(arr)).toFixed(2) + "%"}</p>
                    <p>3 - ${(calculator.exact3(arr)).toFixed(2) + "%"}</p>
                    <p>4 - ${(calculator.exact4(arr)).toFixed(2) + "%"}</p>
                    <p>5 - ${(calculator.exact5(arr)).toFixed(2) + "%"}</p>
                    <p>6 - ${(calculator.exact6(arr)).toFixed(2) + "%"}</p>
                    <p>7 - ${(calculator.exact7(arr)).toFixed(2) + "%"}</p>
                    <p>8 - ${(calculator.exact8(arr)).toFixed(2) + "%"}</p>
                </div>
            </div> 
        </div>
    `)
}