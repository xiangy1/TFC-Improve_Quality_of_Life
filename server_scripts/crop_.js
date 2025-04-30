TFCEvents.data(event => {
    event.climateRange(climate => {
    climate.temperatureWiggle(5)
        climate.maxHydration(80)
        climate.minHydration(55)
        climate.minTemperature(10)
        climate.maxTemperature(30)
    }, 'kubejs:cotton')
})
