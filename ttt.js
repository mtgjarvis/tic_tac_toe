
document.addEventListener("DOMContentLoaded", function() {
    const table = document.getElementById('table')
    const square = document.querySelectorAll('td')
    let player1 = []
    let player2 = []
    const winConditions = [
        [1,2,3],
        [1,5,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [4,5,6],
        [7,8,9],
        [3,5,7]
    ]
    count = 0
    table.addEventListener('click', function(e) {
        if (count %2 === 0 && count <= 9) {
        console.log(e.target.innerHTML);
        e.target.innerHTML = 'X'
        count++
        } else if (count % 2 != 0 && count <=9) {
            console.log(e.target.innerHTML);
            e.target.innerHTML = '0'
            count++
        }
    })

});
