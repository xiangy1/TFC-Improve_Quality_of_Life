ServerEvents.tags("block",event => {
    event.add('minecraft:dirt', [
		'tfc:grass/silt',
		'tfc:grass/loam',
		'tfc:grass/sandy_loam',
		'tfc:grass/silty_loam'
	])

	event.add('minecraft:kelp', [
		'tfc:plant/leafy_kelp',
		'tfc:plant/laminaria',
		'tfc:plant/winged_kelp',
		
	])
})