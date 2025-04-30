StartupEvents.registry('block', event => {

    let stage = {
        0 : 'kubejs:block/cotton_stage0',
        1 : 'kubejs:block/cotton_stage0',
        2 : 'kubejs:block/cotton_stage0',
        3 : 'kubejs:block/cotton_stage1',
        4 : 'kubejs:block/cotton_stage1',
        5 : 'kubejs:block/cotton_stage2',
        6 : 'kubejs:block/cotton_stage2',
        7 : 'kubejs:block/cotton_stage3'
      }

    //自定义一个默认作物，亚麻
        event.create('cotton', 'tfc:pickable_crop')
        .stages(7)
        .displayName("Cotton")
        .noCollision()
        .hardness(0.5)
        .nutrient('potassium')
        //.tagBlock('tfc:mineable_with_sharp_tool')
        .renderType("cutout")
        .textures(0, stage )
        .fruit('rusticdelight:cotton_boll')
        .deadBlock(dead => {
            dead.hardness(0.5)
            dead.noCollision()
            //dead.tagBlock('tfc:mineable_with_sharp_tool')
            dead.displayName("dead_bush")
        })
        .seedItem(seed => {
            seed.displayName("cotton_seeds")
            seed.texture("rusticdelight:item/cotton_seeds")
        })
    //以上为一个完整示例，接下来的几个示例会省略部分重复内容
    })