TFCEvents.data(event => {
    event.fauna(climate => {
        climate.minTemp(-10)
    }, fauna => {
        fauna.chance(50)
    }, 'youkaishomecoming:lamprey')
})