//汉化精灵名称，来源：http://www.pokemon.name/wiki/

function cnText(text) {

    //数组里面有的，返回中文
    for (var i in obj) {
        if (text == i) {
            return obj[i];
        }
    }

    //数组里面没有的，原样返回
    for (var i in obj) {
        if (text != i) {
            return text;
        }
    }
}
var obj = {
    'pokeball': '精灵球',
    'greatball': '超级球',
    'ultraball': '高级球',
    //1
    'Bulbasaur': '妙蛙种子',
    'Ivysaur': '妙蛙草',
    'Venusaur': '妙蛙花',
    'Charmander': '小火龙',
    'Charmeleon': '火恐龙',
    'Charizard': '喷火龙',
    'Squirtle': '杰尼龟',
    'Wartortle': '卡咪龟',
    'Blastoise': '水箭龟',
    'Caterpie': '绿毛虫',
    'Metapod': '铁甲蛹',
    'Butterfree': '巴大蝶',
    'Weedle': '独角虫',
    'Kakuna': '铁壳蛹',
    'Beedrill': '大针蜂',
    'Pidgey': '波波',
    'Pidgeotto': '比比鸟',
    'Pidgeot': '大比鸟',
    'Rattata': '小拉达',
    'Raticate': '拉达',
    'Spearow': '烈雀',
    'Fearow': '大嘴雀',
    'Ekans': '阿柏蛇',
    'Arbok': '阿柏怪',
    'Pikachu': '皮卡丘',
    'Raichu': '雷丘',
    'Sandshrew': '穿山鼠',
    'Sandslash': '穿山王',
    'Nidoran f': '尼多兰',
    'Nidorina': '尼多娜',
    'Nidoqueen': '尼多后',
    'Nidoran m': '尼多朗',
    'Nidorino': '尼多力诺',
    'Nidoking': '尼多王',
    'Clefairy': '皮皮',
    'Clefable': '皮可西',
    'Vulpix': '六尾',
    'Ninetales': '九尾',
    'Jigglypuff': '胖丁',
    'Wigglytuff': '胖可丁',
    'Zubat': '超音蝠',
    'Golbat': '大嘴蝠',
    'Oddish': '走路草',
    'Gloom': '臭臭花',
    'Vileplume': '霸王花',
    'Paras': '派拉斯',
    'Parasect': '派拉斯特',
    'Venonat': '毛球',
    'Venomoth': '摩鲁蛾',
    'Diglett': '地鼠',
    'Dugtrio': '三地鼠',
    'Meowth': '喵喵',
    'Persian': '猫老大',
    'Psyduck': '可达鸭',
    'Golduck': '哥达鸭',
    'Mankey': '猴怪',
    'Primeape': '火暴猴',
    'Growlithe': '卡蒂狗',
    'Arcanine': '风速狗',
    'Poliwag': '蚊香蝌蚪',
    'Poliwhirl': '蚊香君',
    'Poliwrath': '蚊香泳士',
    'Abra': '凯西',
    'Kadabra': '勇基拉',
    'Alakazam': '胡地',
    'Machop': '腕力',
    'Machoke': '豪力',
    'Machamp': '怪力',
    'Bellsprout': '喇叭芽',
    'Weepinbell': '口呆花',
    'Victreebel': '大食花',
    'Tentacool': '玛瑙水母',
    'Tentacruel': '毒刺水母',
    'Geodude': '小拳石',
    'Graveler': '隆隆石',
    'Golem': '隆隆岩',
    'Ponyta': '小火马',
    'Rapidash': '烈焰马',
    'Slowpoke': '呆呆兽',
    'Slowbro': '呆壳兽',
    'Magnemite': '小磁怪',
    'Magneton': '三合一磁怪',
    'Farfetchd': '大葱鸭',
    'Doduo': '嘟嘟',
    'Dodrio': '嘟嘟利',
    'Seel': '小海狮',
    'Dewgong': '白海狮',
    'Grimer': '臭泥',
    'Muk': '臭臭泥',
    'Shellder': '大舌贝',
    'Cloyster': '刺甲贝',
    'Gastly': '鬼斯',
    'Haunter': '鬼斯通',
    'Gengar': '耿鬼',
    'Onix': '大岩蛇',
    'Drowzee': '催眠貘',
    'Hypno': '引梦貘人',
    'Krabby': '大钳蟹',
    'Kingler': '巨钳蟹',
    'Voltorb': '霹雳电球',
    'Electrode': '顽皮雷弹',
    'Exeggcute': '蛋蛋',
    'Exeggutor': '椰蛋树',
    'Cubone': '卡拉卡拉',
    'Marowak': '嘎啦嘎啦',
    'Hitmonlee': '飞腿郎',
    'Hitmonchan': '快拳郎',
    'Lickitung': '大舌头',
    'Koffing': '瓦斯弹',
    'Weezing': '双弹瓦斯',
    'Rhyhorn': '独角犀牛',
    'Rhydon': '钻角犀兽',
    'Chansey': '吉利蛋',
    'Tangela': '蔓藤怪',
    'Kangaskhan': '袋兽',
    'Horsea': '墨海马',
    'Seadra': '海刺龙',
    'Goldeen': '角金鱼',
    'Seaking': '金鱼王',
    'Staryu': '海星星',
    'Starmie': '宝石海星',
    'Mr. Mime': '魔墙人偶',
    'Scyther': '飞天螳螂',
    'Jynx': '迷唇姐',
    'Electabuzz': '电击兽',
    'Magmar': '鸭嘴火兽',
    'Pinsir': '凯罗斯',
    'Tauros': '肯泰罗',
    'Magikarp': '鲤鱼王',
    'Gyarados': '暴鲤龙',
    'Lapras': '拉普拉斯',
    'Ditto': '百变怪',
    'Eevee': '伊布',
    'Vaporeon': '水伊布',
    'Jolteon': '雷伊布',
    'Flareon': '火伊布',
    'Porygon': '多边兽',
    'Omanyte': '菊石兽',
    'Omastar': '多刺菊石兽',
    'Kabuto': '化石盔',
    'Kabutops': '镰刀盔',
    'Aerodactyl': '化石翼龙',
    'Snorlax': '卡比兽',
    'Dratini': '迷你龙',
    'Dragonair': '哈克龙',
    'Dragonite': '快龙',
    'Articuno': '急冻鸟',
    'Zapdos': '闪电鸟',
    'Moltres': '火焰鸟',
    'Mewtwo': '超梦',
    'Mew': '梦幻',
    'Chikorita': '菊草叶',
    'Bayleef': '月桂叶',
    'Meganium': '大竺葵',
    'Cyndaquil': '火球鼠',
    'Quilava': '火岩鼠',
    'Typhlosion': '火暴兽',
    'Totodile': '小锯鳄',
    'Croconaw': '蓝鳄',
    'Feraligatr': '大力鳄',
    'Sentret': '尾立',
    'Furret': '大尾立',
    'Hoothoot': '咕咕',
    'Noctowl': '猫头夜鹰',
    'Ledyba': '芭瓢虫',
    'Ledian': '安瓢虫',
    'Spinarak': '圆丝蛛',
    'Ariados': '阿利多斯',
    'Crobat': '叉字蝠',
    'Chinchou': '灯笼鱼',
    'Lanturn': '电灯怪',
    'Pichu': '皮丘',
    'Cleffa': '皮宝宝',
    'Igglybuff': '宝宝丁',
    'Togepi': '波克比',
    'Togetic': '波克基古',
    'Natu': '天然雀',
    'Xatu': '天然鸟',
    'Mareep': '咩利羊',
    'Flaaffy': '茸茸羊',
    'Ampharos': '电龙',
    'Bellossom': '美丽花',
    'Marill': '玛力露',
    'Azumarill': '玛力露丽',
    'Sudowoodo': '树才怪',
    'Politoed': '蚊香蛙皇',
    'Hoppip': '毽子草',
    'Skiploom': '毽子花',
    'Jumpluff': '毽子棉',
    'Aipom': '长尾怪手',
    'Sunkern': '向日种子',
    'Sunflora': '向日花怪',
    'Yanma': '蜻蜻蜓',
    'Wooper': '乌波',
    'Quagsire': '沼王',
    'Espeon': '太阳伊布',
    'Umbreon': '月亮伊布',
    'Murkrow': '黑暗鸦',
    'Slowking': '呆呆王',
    'Misdreavus': '梦妖',
    'Unown': '未知图腾',
    'Wobbuffet': '果然翁',
    'Girafarig': '麒麟奇',
    'Pineco': '榛果球',
    'Forretress': '佛烈托斯',
    'Dunsparce': '土龙弟弟',
    'Gligar': '天蝎',
    'Steelix': '大钢蛇',
    'Snubbull': '布鲁',
    'Granbull': '布鲁皇',
    'Qwilfish': '千针鱼',
    'Scizor': '巨钳螳螂',
    'Shuckle': '壶壶',
    'Heracross': '赫拉克罗斯',
    'Sneasel': '狃拉',
    'Teddiursa': '熊宝宝',
    'Ursaring': '圈圈熊',
    'Slugma': '熔岩虫',
    'Magcargo': '熔岩蜗牛',
    'Swinub': '小山猪',
    'Piloswine': '长毛猪',
    'Corsola': '太阳珊瑚',
    'Remoraid': '铁炮鱼',
    'Octillery': '章鱼桶',
    'Delibird': '信使鸟',
    'Mantine': '巨翅飞鱼',
    'Skarmory': '盔甲鸟',
    'Houndour': '戴鲁比',
    'Houndoom': '黑鲁加',
    'Kingdra': '刺龙王',
    'Phanpy': '小小象',
    'Donphan': '顿甲',
    'Porygon2': '多边兽Ⅱ',
    'Stantler': '惊角鹿',
    'Smeargle': '图图犬',
    'Tyrogue': '无畏小子',
    'Hitmontop': '战舞郎',
    'Smoochum': '迷唇娃',
    'Elekid': '电击怪',
    'Magby': '鸭嘴宝宝',
    'Miltank': '大奶罐',
    'Blissey': '幸福蛋',
    'Raikou': '雷公',
    'Entei': '炎帝',
    'Suicune': '水君',
    'Larvitar': '幼基拉斯',
    'Pupitar': '沙基拉斯',
    'Tyranitar': '班基拉斯',
    'Lugia': '洛奇亚',
    'Ho-Oh': '凤王',
    'Celebi': '时拉比',
    'Treecko': '木守宫',
    'Grovyle': '森林蜥蜴',
    'Sceptile': '蜥蜴王',
    'Torchic': '火稚鸡',
    'Combusken': '力壮鸡',
    'Blaziken': '火焰鸡',
    'Mudkip': '水跃鱼',
    //258
    'Marshtomp': '沼跃鱼',
    'Swampert': '巨沼怪',
    'Poochyena': '土狼犬',
    'Mightyena': '大狼犬',
    'Zigzagoon': '蛇纹熊',
    'Linoone': '直冲熊',
    'Wurmple': '刺尾虫',
    'Silcoon': '甲壳茧',
    'Beautifly': '狩猎凤蝶',
    'Cascoon': '盾甲茧',
    'Dustox': '毒粉蛾',
    'Lotad': '莲叶童子',
    'Lombre': '莲帽小童',
    'Ludicolo': '乐天河童',
    'Seedot': '橡实果',
    'Nuzleaf': '长鼻叶',
    'Shiftry': '狡猾天狗',
    'Taillow': '傲骨燕',
    'Swellow': '大王燕',
    'Wingull': '长翅鸥',
    'Pelipper': '大嘴鸥',
    'Ralts': '拉鲁拉丝',
    'Kirlia': '奇鲁莉安',
    'Gardevoir': '沙奈朵',
    'Surskit': '溜溜糖球',
    'Masquerain': '雨翅蛾',
    'Shroomish': '蘑蘑菇',
    'Breloom': '斗笠菇',
    'Slakoth': '懒人獭',
    'Vigoroth': '过动猿',
    'Slaking': '请假王',
    'Nincada': '土居忍士',
    'Ninjask': '铁面忍者',
    'Shedinja': '脱壳忍者',
    'Whismur': '咕妞妞',
    'Loudred': '吼爆弹',
    'Exploud': '爆音怪',
    'Makuhita': '幕下力士',
    'Hariyama': '铁掌力士',
    'Azurill': '露力丽',
    'Nosepass': '朝北鼻',
    'Skitty': '向尾喵',
    //300
    'Delcatty': '优雅猫',
    'Sableye': '勾魂眼',
    'Mawile': '大嘴娃',
    'Aron': '可可多拉',
    'Lairon': '可多拉',
    'Aggron': '波士可多拉',
    'Meditite': '玛沙那',
    'Medicham': '恰雷姆',
    'Electrike': '落雷兽',
    'Manectric': '雷电兽',
    'Plusle': '正电拍拍',
    'Minun': '负电拍拍',
    'Volbeat': '电萤虫',
    'Illumise': '甜甜萤',
    'Roselia': '毒蔷薇',
    'Gulpin': '溶食兽',
    'Swalot': '吞食兽',
    'Carvanha': '利牙鱼',
    'Sharpedo': '巨牙鲨',
    'Wailmer': '吼吼鲸',
    'Wailord': '吼鲸王',
    'Numel': '呆火驼',
    'Camerupt': '喷火驼',
    'Torkoal': '煤炭龟',
    'Spoink': '跳跳猪',
    'Grumpig': '噗噗猪',
    'Spinda': '晃晃斑',
    'Trapinch': '大颚蚁',
    'Vibrava': '超音波幼虫',
    'Flygon': '沙漠蜻蜓',
    'Cacnea': '刺球仙人掌',
    'Cacturne': '梦歌仙人掌',
    'Swablu': '青绵鸟',
    'Altaria': '七夕青鸟',
    'Zangoose': '猫鼬斩',
    'Seviper': '饭匙蛇',
    'Lunatone': '月石',
    'Solrock': '太阳岩',
    'Barboach': '泥泥鳅',
    'Whiscash': '鲶鱼王',
    'Corphish': '龙虾小兵',
    'Crawdaunt': '铁螯龙虾',
    'Baltoy': '天秤偶',
    'Claydol': '念力土偶',
    'Lileep': '触手百合',
    'Cradily': '摇篮百合',
    'Anorith': '太古羽虫',
    'Armaldo': '太古盔甲',
    'Feebas': '丑丑鱼',
    'Milotic': '美纳斯',
    'Castform': '飘浮泡泡',
    'Kecleon': '变隐龙',
    'Shuppet': '怨影娃娃',
    'Banette': '诅咒娃娃',
    'Duskull': '夜巡灵',
    'Dusclops': '彷徨夜灵',
    'Tropius': '热带龙',
    'Chimecho': '风铃铃',
    'Absol': '阿勃梭鲁',
    'Wynaut': '小果然',
    'Snorunt': '雪童子',
    'Glalie': '冰鬼护',
    'Spheal': '海豹球',
    'Sealeo': '海魔狮',
    'Walrein': '帝牙海狮',
    'Clamperl': '珍珠贝',
    'Huntail': '猎斑鱼',
    'Gorebyss': '樱花鱼',
    'Relicanth': '古空棘鱼',
    'Luvdisc': '爱心鱼',
    'Bagon': '宝贝龙',
    'Shelgon': '甲壳龙',
    'Salamence': '暴飞龙',
    'Beldum': '铁哑铃',
    'Metang': '金属怪',
    'Metagross': '巨金怪',
    'Regirock': '雷吉洛克',
    'Regice': '雷吉艾斯',
    'Registeel': '雷吉斯奇鲁',
    'Latias': '拉帝亚斯',
    'Latios': '拉帝欧斯',
    'Kyogre': '盖欧卡',
    'Groudon': '固拉多',
    'Rayquaza': '烈空坐',
    'Jirachi': '基拉祈',
    'Deoxys': '代欧奇希斯',
    'Turtwig': '草苗龟',
    'Grotle': '树林龟',
    'Torterra': '土台龟',
    'Chimchar': '小火焰猴',
    'Monferno': '猛火猴',
    'Infernape': '烈焰猴',
    'Piplup': '波加曼',
    'Prinplup': '波皇子',
    'Empoleon': '帝王拿波',
    'Starly': '姆克儿',
    'Staravia': '姆克鸟',
    'Staraptor': '姆克鹰',
    'Bidoof': '大牙狸',
    //400
    'Bibarel': '大尾狸',
    'Kricketot': '圆法师',
    'Kricketune': '音箱蟀',
    'Shinx': '小猫怪',
    'Luxio': '勒克猫',
    'Luxray': '伦琴猫',
    'Budew': '含羞苞',
    'Roserade': '罗丝雷朵',
    'Cranidos': '头盖龙',
    'Rampardos': '战槌龙',
    'Shieldon': '盾甲龙',
    'Bastiodon': '护城龙',
    'Burmy': '结草儿',
    'Wormadam': '结草贵妇',
    'Mothim': '绅士蛾',
    'Combee': '三蜜蜂',
    'Vespiquen': '蜂女王',
    'Pachirisu': '帕奇利兹',
    'Buizel': '泳圈鼬',
    'Floatzel': '浮潜鼬',
    'Cherubi': '樱花宝',
    'Cherrim': '樱花儿',
    'Shellos': '无壳海兔',
    'Gastrodon': '海兔兽',
    'Ambipom': '双尾怪手',
    'Drifloon': '飘飘球',
    'Drifblim': '随风球',
    'Buneary': '卷卷耳',
    'Lopunny': '长耳兔',
    'Mismagius': '梦妖魔',
    'Honchkrow': '乌鸦头头',
    'Glameow': '魅力喵',
    'Purugly': '东施喵',
    'Chingling': '铃铛响',
    'Stunky': '臭鼬噗',
    'Skuntank': '坦克臭鼬',
    'Bronzor': '铜镜怪',
    'Bronzong': '青铜钟',
    'Bonsly': '盆才怪',
    'Mime Jr.': '魔尼尼',
    'Happiny': '小福蛋',
    'Chatot': '聒噪鸟',
    'Spiritomb': '花岩怪',
    'Gible': '圆陆鲨',
    'Gabite': '尖牙陆鲨',
    'Garchomp': '烈咬陆鲨',
    'Munchlax': '小卡比兽',
    'Riolu': '利欧路',
    'Lucario': '路卡利欧',
    'Hippopotas': '沙河马',
    'Hippowdon': '河马兽',
    'Skorupi': '钳尾蝎',
    'Drapion': '龙王蝎',
    'Croagunk': '不良蛙',
    'Toxicroak': '毒骷蛙',
    'Carnivine': '尖牙笼',
    'Finneon': '荧光鱼',
    'Lumineon': '霓虹鱼',
    'Mantyke': '小球飞鱼',
    'Snover': '雪笠怪',
    'Abomasnow': '暴雪王',
    'Weavile': '玛狃拉',
    'Magnezone': '自爆磁怪',
    'Lickilicky': '大舌舔',
    'Rhyperior': '超甲狂犀',
    'Tangrowth': '巨蔓藤',
    'Electivire': '电击魔兽',
    'Magmortar': '鸭嘴炎兽',
    'Togekiss': '波克基斯',
    'Yanmega': '远古巨蜓',
    'Leafeon': '叶伊布',
    'Glaceon': '冰伊布',
    'Gliscor': '天蝎王',
    'Mamoswine': '象牙猪',
    'Porygon-Z': '多边兽Ｚ',
    'Gallade': '艾路雷朵',
    'Probopass': '大朝北鼻',
    'Dusknoir': '黑夜魔灵',
    'Froslass': '雪妖女',
    'Rotom': '洛托姆',
    'Uxie': '由克希',
    'Mesprit': '艾姆利多',
    'Azelf': '亚克诺姆',
    'Dialga': '帝牙卢卡',
    'Palkia': '帕路奇亚',
    'Heatran': '席多蓝恩',
    'Regigigas': '雷吉奇卡斯',
    'Giratina': '骑拉帝纳',
    'Cresselia': '克雷色利亚',
    'Phione': '霏欧纳',
    'Manaphy': '玛纳霏',
    'Darkrai': '达克莱伊',
    'Shaymin': '谢米',
    'Arceus': '阿尔宙斯',
    'Victini': '比克提尼',
    'Snivy': '藤藤蛇',
    'Servine': '青藤蛇',
    'Serperior': '君主蛇',
    'Tepig': '暖暖猪',
    'Pignite': '炒炒猪',
    'Emboar': '炎武王',
    //500
    'Oshawott': '水水獭',
    'Dewott': '双刃丸',
    'Samurott': '大剑鬼',
    'Patrat': '探探鼠',
    'Watchog': '步哨鼠',
    'Lillipup': '小约克',
    'Herdier': '哈约克',
    'Stoutland': '长毛狗',
    'Purrloin': '扒手猫',
    'Liepard': '酷豹',
    'Pansage': '花椰猴',
    'Simisage': '花椰猿',
    'Pansear': '爆香猴',
    'Simisear': '爆香猿',
    'Panpour': '冷水猴',
    'Simipour': '冷水猿',
    'Munna': '食梦梦',
    'Musharna': '梦梦蚀',
    'Pidove': '豆豆鸽',
    'Tranquill': '咕咕鸽',
    'Unfezant': '高傲雉鸡',
    'Blitzle': '斑斑马',
    'Zebstrika': '雷电斑马',
    'Roggenrola': '石丸子',
    'Boldore': '地幔岩',
    'Gigalith': '庞岩怪',
    'Woobat': '滚滚蝙蝠',
    'Swoobat': '心蝙蝠',
    'Drilbur': '螺钉地鼠',
    'Excadrill': '龙头地鼠',
    'Audino': '差不多娃娃',
    'Timburr': '搬运小匠',
    'Gurdurr': '铁骨土人',
    'Conkeldurr': '修建老匠',
    'Tympole': '圆蝌蚪',
    'Palpitoad': '蓝蟾蜍',
    'Seismitoad': '蟾蜍王',
    'Throh': '投摔鬼',
    'Sawk': '打击鬼',
    'Sewaddle': '虫宝包',
    'Swadloon': '宝包茧',
    'Leavanny': '保姆虫',
    'Venipede': '百足蜈蚣',
    'Whirlipede': '车轮球',
    'Scolipede': '蜈蚣王',
    'Cottonee': '木棉球',
    'Whimsicott': '风妖精',
    'Petilil': '百合根娃娃',
    'Lilligant': '裙儿小姐',
    'Basculin': '野蛮鲈鱼',
    'Sandile': '黑眼鳄',
    'Krokorok': '混混鳄',
    'Krookodile': '流氓鳄',
    'Darumaka': '火红不倒翁',
    'Darmanitan': '达摩狒狒',
    'Maractus': '沙铃仙人掌',
    'Dwebble': '石居蟹',
    'Crustle': '岩殿居蟹',
    'Scraggy': '滑滑小子',
    'Scrafty': '头巾混混',
    'Sigilyph': '象征鸟',
    'Yamask': '哭哭面具',
    'Cofagrigus': '死神棺',
    'Tirtouga': '原盖海龟',
    'Carracosta': '肋骨海龟',
    'Archen': '始祖小鸟',
    'Archeops': '始祖大鸟',
    'Trubbish': '破破袋',
    'Garbodor': '灰尘山',
    'Zorua': '索罗亚',
    'Zoroark': '索罗亚克',
    'Minccino': '泡沫栗鼠',
    'Cinccino': '奇诺栗鼠',
    'Gothita': '哥德宝宝',
    'Gothorita': '哥德小童',
    'Gothitelle': '哥德小姐',
    'Solosis': '单卵细胞球',
    'Duosion': '双卵细胞球',
    'Reuniclus': '人造细胞卵',
    'Ducklett': '鸭宝宝',
    'Swanna': '舞天鹅',
    'Vanillite': '迷你冰',
    'Vanillish': '多多冰',
    'Vanilluxe': '双倍多多冰',
    'Deerling': '四季鹿',
    'Sawsbuck': '萌芽鹿',
    'Emolga': '电飞鼠',
    'Karrablast': '盖盖虫',
    'Escavalier': '骑士蜗牛',
    'Foongus': '哎呀球菇',
    'Amoonguss': '败露球菇',
    'Frillish': '轻飘飘',
    'Jellicent': '胖嘟嘟',
    'Alomomola': '保姆曼波',
    'Joltik': '电电虫',
    'Galvantula': '电蜘蛛',
    'Ferroseed': '种子铁球',
    'Ferrothorn': '坚果哑铃',
    'Klink': '齿轮儿',
    'Klang': '齿轮组',
    'Klinklang': '齿轮怪',
    'Tynamo': '麻麻小鱼',
    'Eelektrik': '麻麻鳗',
    'Eelektross': '麻麻鳗鱼王',
    'Elgyem': '小灰怪',
    'Beheeyem': '大宇怪',
    'Litwick': '烛光灵',
    'Lampent': '灯火幽灵',
    'Chandelure': '水晶灯火灵	',
    'Axew': '牙牙',
    'Fraxure': '斧牙龙',
    'Haxorus': '双斧战龙',
    'Cubchoo': '喷嚏熊',
    'Beartic': '冻原熊',
    'Cryogonal': '几何雪花',
    'Shelmet': '小嘴蜗',
    'Accelgor': '敏捷虫',
    'Stunfisk': '泥巴鱼',
    'Mienfoo': '功夫鼬',
    'Mienshao': '师父鼬',
    'Druddigon': '赤面龙',
    'Golett': '泥偶小人',
    'Golurk': '泥偶巨人',
    'Pawniard': '驹刀小兵',
    'Bisharp': '劈斩司令',
    'Bouffalant': '爆炸头水牛',
    'Rufflet': '毛头小鹰',
    'Braviary': '勇士雄鹰',
    'Vullaby': '秃鹰丫头',
    'Mandibuzz': '秃鹰娜',
    'Heatmor': '熔蚁兽',
    'Durant': '铁蚁',
    'Deino': '单首龙',
    'Zweilous': '双首暴龙',
    'Hydreigon': '三首恶龙',
    'Larvesta': '燃烧虫',
    'Volcarona': '火神蛾',
    'Cobalion': '勾帕路翁',
    'Terrakion': '代拉基翁',
    'Virizion': '毕力吉翁',
    'Tornadus': '龙卷云',
    'Thundurus': '雷电云',
    'Reshiram': '莱希拉姆',
    'Zekrom': '捷克罗姆',
    'Landorus': '土地云',
    'Kyurem': '酋雷姆',
    'Keldeo': '凯路迪欧',
    'Meloetta': '美洛耶塔',
    'Genesect': '盖诺赛克特',
    'Chespin': '哈力栗',
    //650
    'Chespin': '哈力栗',
    'Quilladin': '胖胖哈力',
    'Chesnaught': '布里卡隆',
    'Fennekin': '火狐狸',
    'Braixen': '长尾火狐',
    'Delphox': '妖火红狐',
    'Froakie': '呱呱泡蛙',
    'Frogadier': '呱头蛙',
    'Greninja': '甲贺忍蛙',
    'Bunnelby': '掘掘兔',
    'Diggersby': '掘地兔',
    'Fletchling': '小箭雀',
    'Fletchinder': '火箭雀',
    'Talonflame': '烈箭鹰',
    'Scatterbug': '粉蝶虫',
    'Spewpa': '粉蝶蛹',
    'Vivillon': '彩粉蝶',
    'Litleo': '小狮狮',
    'Pyroar': '火炎狮',
    'Flabebe': '花蓓蓓',
    'Floette': '花叶蒂',
    'Florges': '花洁夫人',
    'Skiddo': '坐骑小羊',
    'Gogoat': '坐骑山羊',
    'Pancham': '顽皮熊猫',
    'Pangoro': '流氓熊猫',
    'Furfrou': '多丽米亚',
    'Espurr': '妙喵',
    'Meowstic': '超能妙喵',
    'Honedge': '独剑鞘',
    'Doublade': '双剑鞘',
    'Aegislash': '坚盾剑怪',
    'Spritzee': '粉香香',
    'Aromatisse': '芳香精',
    'Swirlix': '绵绵泡芙',
    'Slurpuff': '胖甜妮',
    'Inkay': '好啦鱿',
    'Malamar': '乌贼王',
    'Binacle': '龟脚脚',
    'Barbaracle': '龟足巨铠',
    'Skrelp': '垃垃藻',
    'Dragalge': '毒藻龙',
    'Clauncher': '铁臂枪虾',
    'Clawitzer': '钢炮臂虾',
    'Helioptile': '伞电蜥',
    'Heliolisk': '光电伞蜥',
    'Tyrunt': '宝宝暴龙',
    'Tyrantrum': '怪颚龙',
    'Amaura': '冰雪龙',
    'Aurorus': '冰雪巨龙',
    'Sylveon': '仙子伊布',
    'Hawlucha': '摔角鹰人',
    'Dedenne': '咚咚鼠',
    'Carbink': '小碎钻',
    'Goomy': '黏黏宝',
    'Sliggoo': '黏美儿',
    'Goodra': '黏美龙',
    'Klefki': '钥圈儿',
    'Phantump': '小木灵',
    'Trevenant': '朽木妖',
    'Pumpkaboo': '南瓜精',
    'Gourgeist': '南瓜怪人',
    'Bergmite': '冰宝',
    'Avalugg': '冰岩怪',
    'Noibat': '嗡蝠',
    'Noivern': '音波龙',
    'Xerneas': '哲尔尼亚斯',
    'Yveltal': '伊裴尔塔尔',
    'Zygarde': '基格尔德',
    'Diancie': '蒂安希',
    'Hoopa': '胡帕',
    'Volcanion': '波尔凯尼恩',
    //721
    'Rowlet': '木木枭',
    //722
    'Dartrix': '投羽枭',
    'Decidueye': '狙射树枭',
    'Litten': '火斑喵',
    'Torracat': '炎热喵',
    'Incineroar': '炽焰咆哮虎',
    'Popplio': '球球海狮',
    'Brionne': '花漾海狮',
    'Primarina': '西狮海壬',
    'Pikipek': '小笃儿',
    'Trumbeak': '喇叭啄鸟',
    'Toucannon': '铳嘴大鸟',
    'Yungoos': '猫鼬少',
    'Gumshoos': '猫鼬探长',
    'Grubbin': '强颚鸡母虫',
    'Charjabug': '虫电宝',
    'Vikavolt': '锹农炮虫',
    'Crabrawler': '好胜蟹',
    'Crabominable': '好胜毛蟹',
    'Oricorio': '花舞鸟',
    'Cutiefly': '萌虻',
    'Ribombee': '蝶结萌虻',
    'Rockruff': '岩狗狗',
    'Lycanroc': '鬃岩狼人',
    'Wishiwashi': '弱丁鱼',
    'Mareanie': '好坏星',
    'Toxapex': '超坏星',
    'Mudbray': '泥驴仔',
    'Mudsdale': '重泥挽马',
    'Dewpider': '滴蛛',
    'Araquanid': '滴蛛霸',
    'Fomantis': '伪螳草',
    'Lurantis': '兰螳花',
    'Morelull': '睡睡菇',
    'Shiinotic': '灯罩夜菇',
    'Salandit': '夜盗火蜥',
    'Salazzle': '焰后蜥',
    'Stufful': '童偶熊',
    'Bewear': '穿着熊',
    'Bounsweet': '甜竹竹',
    'Steenee': '甜舞妮',
    'Tsareena': '甜冷美后',
    'Comfey': '花疗环环',
    'Oranguru': '智挥猩',
    'Passimian': '投掷猴',
    'Wimpod': '胆小虫',
    'Golisopod': '具甲武者',
    'Sandygast': '沙丘娃',
    'Palossand': '噬沙堡爷',
    'Pyukumuku': '拳海参',
    'Type: Null': '属性：空',
    'Silvally': '银伴战兽',
    'Minior': '小陨星',
    'Komala': '树枕尾熊',
    'Turtonator': '爆焰龟兽',
    'Togedemaru': '托戈德玛尔',
    'Mimikyu': '谜拟Ｑ',
    'Bruxish': '磨牙彩皮鱼',
    'Drampa': '老翁龙',
    'Dhelmise': '破破舵轮',
    'Jangmo-o': '心鳞宝',
    'Hakamo-o': '鳞甲龙',
    'Kommo-o': '杖尾鳞甲龙',
    'Tapu Koko': '卡璞・鸣鸣',
    'Tapu Lele': '卡璞・蝶蝶',
    'Tapu Bulu': '卡璞・哞哞',
    'Tapu Fini': '卡璞・鳍鳍',
    'Cosmog': '科斯莫古',
    'Cosmoem': '科斯莫姆',
    'Solgaleo': '索尔迦雷欧',
    'Lunala': '露奈雅拉',
    'Nihilego': '虚吾伊德',
    'Buzzwole': '爆肌蚊',
    'Pheromosa': '费洛美螂',
    'Xurkitree': '电束木',
    'Celesteela': '铁火辉夜',
    'Kartana': '纸御剑',
    'Guzzlord': '恶食大王',
    'Necrozma': '奈克洛兹玛',
    'Magearna': '玛机雅娜',
    'Marshadow': '玛夏多',
    'Poipole': '毒贝比',
    'Naganadel': '四颚针龙',
    'Stakataka': '垒磊石',
    'Blacephalon': '砰头小丑',
    'Zeraora': '捷拉奥拉',
    //807
    //808开始
    'Meltan': '美录坦',
    'M-Venusaur': 'M-妙蛙花',
    'M-Charizard X': 'M-喷火龙 X',
    'M-Charizard Y': 'M-喷火龙 Y',
    'M-Blastoise': 'M-水箭龟',
    'M-Beedrill': 'M-大针蜂',
    'M-Pidgeot': 'M-大比鸟',
    'A-Rattata': 'A-小拉达',
    'A-Raticate': 'A-拉达',
    'A-Raichu': 'A-雷丘',
    'A-Sandshrew': 'A-穿山鼠',
    'A-Sandslash': 'A-穿山王',
    'A-Vulpix': 'A-六尾',
    'A-Ninetales': 'A-九尾',
    'A-Diglett': 'A-地鼠',
    'A-Dugtrio': 'A-三地鼠',
    'A-Meowth': 'A-喵喵',
    'A-Persian': 'A-猫老大',
    'M-Alakazam': 'M-胡地',
    'A-Geodude': 'A-小拳石',
    'A-Graveler': 'A-隆隆石',
    'A-Golem': 'A-隆隆岩',
    'M-Slowbro': 'M-呆壳兽',
    'A-Grimer': 'A-臭泥',
    'A-Muk': 'A-臭臭泥',
    'M-Gengar': 'M-耿鬼',
    'A-Exeggutor': 'A-椰蛋树',
    'A-Marowak': 'A-嘎啦嘎啦',
    'M-Kangaskhan': 'M-袋兽',
    'M-Pinsir': 'M-凯罗斯',
    'M-Gyarados': 'M-暴鲤龙',
    'M-Aerodactyl': 'M-化石翼龙',
    'M-Mewtwo X': 'M-超梦 X',
    'M-Mewtwo Y': 'M-超梦 Y',
    'M-Ampharos': 'M-电龙',
    'M-Steelix': 'M-大钢蛇',
    'M-Scizor': 'M-巨钳螳螂',
    'M-Heracross': 'M-赫拉克罗斯',
    'M-Houndoom': 'M-黑鲁加',
    'M-Tyranitar': 'M-班基拉斯',
    'M-Sceptile': 'M-蜥蜴王',
    'M-Blaziken': 'M-火焰鸡',
    'M-Swampert': 'M-巨沼怪',
    'M-Gardevoir': 'M-沙奈朵',
    'M-Sableye': 'M-勾魂眼',
    'M-Mawile': 'M-大嘴娃',
    'M-Aggron': 'M-波士可多拉',
    'M-Medicham': 'M-恰雷姆',
    'M-Manectric': 'M-雷电兽',
    'M-Sharpedo': 'M-巨牙鲨',
    'M-Camerupt': 'M-喷火驼',
    'M-Altaria': 'M-七夕青鸟',
    'M-Banette': 'M-诅咒娃娃',
    'M-Absol': 'M-阿勃梭鲁',
    'M-Glalie': 'M-冰鬼护',
    'M-Salamence': 'M-暴飞龙',
    'M-Metagross': 'M-巨金怪',
    'M-Latias': 'M-拉帝亚斯',
    'M-Latios': 'M-拉帝欧斯',
    //867开始
    'P-Kyogre': '原始盖欧卡',
    'P-Groudon': '原始古拉顿',
    'M-Rayquaza': 'M-裂空座',
    'Deoxys-A': '迪奥西斯-攻击',
    'Deoxys-D': '迪奥西斯-防御',
    'Deoxys-S': '迪奥西斯-速度',
    'M-Garchomp': 'M-烈咬陆鲨',
    'M-Lopunny': 'M-长耳兔',
    'M-Lucario': 'M-路卡利欧',
    'M-Abomasnow': 'M-暴雪王',
    'M-Gallade': 'M-艾路雷朵',
    'H-Rotom': '加热洛托姆',
    'W-Rotom': '清洗洛托姆',
    'F-Rotom': '结冰洛托姆',
    'Fan-Rotom': '旋转洛托姆',
    'M-Rotom': '切割洛托姆',
    'Giratina-O': '骑拉帝纳-起源',
    'Shaymin-S': '谢米-天空',
    'M-Audino': 'M-差不多娃娃',
    'Darmanitan-Z': '达摩狒狒-达摩模式',
    'Tornadus-T': '龙卷云-灵兽',
    'Thundurus-T': '雷电云-灵兽',
    'Landorus-T': '土地云-灵兽',
    'B-Kyurem': '暗黑酋雷姆',
    'W-Kyurem': '焰白酋雷姆',
    'Keldeo-R': '凯路迪欧-斗士',
    'Meloetta-P': '美洛耶塔-舞步',
    'Ash-Greninja': '小智的甲贺忍蛙',
    'Aegislash-B': '坚盾剑怪-剑形态',
    'Zygarde-10': '基格尔德-10%形态',
    'Zygarde-C': '基格尔德-核心',
    'M-Diancie': 'M-蒂安希',
    'Hoopa-U': '胡帕-解放',
    'Lycanroc-M': '鬓岩狼人-黑夜',
    'Wishiwashi-S': '弱丁鱼-鱼群',
    'Lycanroc-D': '鬓岩狼人-黄昏',
    'Necrozma-S': '奈克洛兹玛-黄昏之鬃',
    'Necrozma-L': '奈克洛兹玛-拂晓之翼',
    'U-Necrozma': '究极奈克洛兹玛'
};


//汉化地名，来源：https://wiki.52poke.com/
function cnMap(text) {
    //数组里面有的，返回中文
    for (var i in map) {
        if (text == i) {
            return map[i];
        }
    }

    //数组里面没有的，原样返回
    for (var i in map) {
        if (text != i) {
            console.log(text)
            return text;
        }
    }
}
var map = {
    'Pallet Town': '真新镇',
    'Viridian City': '常青市',
    'Pewter City': '深灰市',
    'Route 0': '0号道路',
    'Route 1': '1号道路',
    'Route 2': '2号道路',
    'Route 3': '3号道路',
    'Route 4': '4号道路',
    'Route 5': '5号道路',
    'Route 6': '6号道路',
    'Route 7': '7号道路',
    'Route 8': '8号道路',
    'Route 9': '9号道路',
    'Route 10': '10号道路',
    'Route 11': '11号道路',
    'Route 12': '12号道路',
    'Route 13': '13号道路',
    'Route 14': '14号道路',
    'Route 15': '15号道路',
    'Route 16': '16号道路',
    'Route 17': '17号道路',
    'Route 18': '18号道路',
    'Route 19': '19号道路',
    'Route 20': '20号道路',
    'Route 21': '21号道路',
    'Route 22': '22号道路',
    'Route 23': '23号道路',
    'Route 24': '24号道路',
    'Route 25': '25号道路',
    'Route 26': '26号道路',
    'Route 27': '27号道路',
    'Route 28': '28号道路',
    'Route 29': '29号道路',
    'Route 30': '30号道路',
    'Route 31': '31号道路',
    'Route 32': '32号道路',
    'Route 33': '33号道路',
    'Route 34': '34号道路',
    'Route 35': '35号道路',
    'Route 36': '36号道路',
    'Route 37': '37号道路',
    'Route 38': '38号道路',
    'Route 39': '39号道路',
    'Route 40': '40号道路',
    'Route 41': '41号道路',
    'Route 42': '42号道路',
    'Route 43': '43号道路',
    'Route 44': '44号道路',
    'Route 45': '45号道路',
    'Route 46': '46号道路',
    'Route 47': '47号道路',
    'Route 48': '48号道路',
    'Route 49': '49号道路',
    'Route 50': '50号道路',
    'Route 51': '51号道路',
    'Route 52': '52号道路',
    'Route 53': '53号道路',
    'Route 54': '54号道路',
    'Route 55': '55号道路',
    'Route 56': '56号道路',
    'Route 57': '57号道路',
    'Route 58': '58号道路',
    'Route 59': '59号道路',
    'Route 60': '60号道路',
    'Route 61': '61号道路',
    'Route 62': '62号道路',
    'Route 63': '63号道路',
    'Route 64': '64号道路',
    'Route 65': '65号道路',
    'Route 66': '66号道路',
    'Route 67': '67号道路',
    'Route 68': '68号道路',
    'Route 69': '69号道路',
    'Route 70': '70号道路',
    'Route 71': '71号道路',
    'Route 72': '72号道路',
    'Route 73': '73号道路',
    'Route 74': '74号道路',
    'Route 75': '75号道路',
    'Route 76': '76号道路',
    'Route 77': '77号道路',
    'Route 78': '78号道路',
    'Route 79': '79号道路',
    'Route 80': '80号道路',
    'Route 81': '81号道路',
    'Route 82': '82号道路',
    'Route 83': '83号道路',
    'Route 84': '84号道路',
    'Route 85': '85号道路',
    'Route 86': '86号道路',
    'Route 87': '87号道路',
    'Route 88': '88号道路',
    'Route 89': '89号道路',
    'Route 90': '90号道路',
    'Route 91': '91号道路',
    'Route 92': '92号道路',
    'Route 93': '93号道路',
    'Route 94': '94号道路',
    'Route 95': '95号道路',
    'Route 96': '96号道路',
    'Route 97': '97号道路',
    'Route 98': '98号道路',
    'Route 99': '99号道路',
    'Route 100': '100号道路',
    'Route 101': '101号道路',
    'Route 102': '102号道路',
    'Route 103': '103号道路',
    'Route 104': '104号道路',
    'Route 105': '105号道路',
    'Route 106': '106号道路',
    'Route 107': '107号道路',
    'Route 108': '108号道路',
    'Route 109': '109号道路',
    'Route 110': '110号道路',
    'Route 111': '111号道路',
    'Route 112': '112号道路',
    'Route 113': '113号道路',
    'Route 114': '114号道路',
    'Route 115': '115号道路',
    'Route 116': '116号道路',
    'Route 117': '117号道路',
    'Route 118': '118号道路',
    'Route 119': '119号道路',
    'Route 120': '120号道路',
    'Route 121': '121号道路',
    'Route 122': '122号道路',
    'Route 123': '123号道路',
    'Route 124': '124号道路',
    'Route 125': '125号道路',
    'Route 126': '126号道路',
    'Route 127': '127号道路',
    'Route 128': '128号道路',
    'Route 129': '129号道路',
    'Route 130': '130号道路',
    'Route 131': '131号道路',
    'Route 132': '132号道路',
    'Route 133': '133号道路',
    'Route 134': '134号道路',
    'Route 135': '135号道路',
    'Route 136': '136号道路',
    'Route 137': '137号道路',
    'Route 138': '138号道路',
    'Route 139': '139号道路',
    'Route 140': '140号道路',
    'Route 141': '141号道路',
    'Route 142': '142号道路',
    'Route 143': '143号道路',
    'Route 144': '144号道路',
    'Route 145': '145号道路',
    'Route 146': '146号道路',
    'Route 147': '147号道路',
    'Route 148': '148号道路',
    'Route 149': '149号道路',
    'Route 150': '150号道路',
    'Route 151': '151号道路',
    'Route 152': '152号道路',
    'Route 153': '153号道路',
    'Route 154': '154号道路',
    'Route 155': '155号道路',
    'Route 156': '156号道路',
    'Route 157': '157号道路',
    'Route 158': '158号道路',
    'Route 159': '159号道路',
    'Route 160': '160号道路',
    'Route 161': '161号道路',
    'Route 162': '162号道路',
    'Route 163': '163号道路',
    'Route 164': '164号道路',
    'Route 165': '165号道路',
    'Route 166': '166号道路',
    'Route 167': '167号道路',
    'Route 168': '168号道路',
    'Route 169': '169号道路',
    'Route 170': '170号道路',
    'Route 171': '171号道路',
    'Route 172': '172号道路',
    'Route 173': '173号道路',
    'Route 174': '174号道路',
    'Route 175': '175号道路',
    'Route 176': '176号道路',
    'Route 177': '177号道路',
    'Route 178': '178号道路',
    'Route 179': '179号道路',
    'Route 180': '180号道路',
    'Route 181': '181号道路',
    'Route 182': '182号道路',
    'Route 183': '183号道路',
    'Route 184': '184号道路',
    'Route 185': '185号道路',
    'Route 186': '186号道路',
    'Route 187': '187号道路',
    'Route 188': '188号道路',
    'Route 189': '189号道路',
    'Route 190': '190号道路',
    'Route 191': '191号道路',
    'Route 192': '192号道路',
    'Route 193': '193号道路',
    'Route 194': '194号道路',
    'Route 195': '195号道路',
    'Route 196': '196号道路',
    'Route 197': '197号道路',
    'Route 198': '198号道路',
    'Route 199': '199号道路',
    'Route 200': '200号道路',
    'Route 201': '201号道路',
    'Route 202': '202号道路',
    'Route 203': '203号道路',
    'Route 204': '204号道路',
    'Route 205': '205号道路',
    'Route 206': '206号道路',
    'Route 207': '207号道路',
    'Route 208': '208号道路',
    'Route 209': '209号道路',
    'Route 210': '210号道路',
    'Route 211': '211号道路',
    'Route 212': '212号道路',
    'Route 213': '213号道路',
    'Route 214': '214号道路',
    'Route 215': '215号道路',
    'Route 216': '216号道路',
    'Route 217': '217号道路',
    'Route 218': '218号道路',
    'Route 219': '219号道路',
    'Route 220': '220号道路',
    'Route 221': '221号道路',
    'Route 222': '222号道路',
    'Route 223': '223号道路',
    'Route 224': '224号道路',
    'Route 225': '225号道路',
    'Route 226': '226号道路',
    'Route 227': '227号道路',
    'Route 228': '228号道路',
    'Route 229': '229号道路',
    'Route 230': '230号道路',
    'Virdian Forest': '常青森林',
    'Mt. Moon': '月见山',
    'Diglett Cave': '地鼠洞穴',
    'Rock Tunnel': '岩山隧道',
    'Power Plant': '无人发电厂',
    'Pokemon Tower': '宝可梦塔',
    'Celadon City': '玉虹市',
    'Saffron City': '金黄市',
    'Safari Zone': '狩猎地带',
    'Trading Center': '交易中心',
    'Seafom Island': '双子岛',
    'Pkmn Mansion': '宝可梦屋',
    'Victory Road': '冠军之路',
    'Cerulean Cave': '华蓝洞窟',
    'Legendary Island': '传说孤岛',
    'The Movie': '电影院',
    'Old Rod': '破旧钓竿',
    'Good Rod': '好钓竿',
    'Super Rod': '厉害钓竿',
    //关都结束
    'New Bark Town': '若叶镇',
    'Dark Cave': '黑暗穴',
    'Sprout Tower': '喇叭芽之塔',
    'Ruin of Alph': '阿露福遗迹',
    'Inside the Ruins': '遗迹之内',
    'Union Cave': '互连洞',
    'Slowpoke Well': '呆呆兽之井',
    'Ilex Forest': '桐树林',
    'Daycare House': '培育屋',
    'National Park': '自然公园',
    'Burned Tower': '烧焦塔',
    'Tin Tower': '铃铛塔',
    'Whirl Island': '漩涡列岛',
    'Cianwood City': '湛蓝市',
    'Mt.Mortar': '擂钵山',
    'Rocket Hideout': '火箭队基地',
    'Lake of Rage': '愤怒之湖',
    'Ice Path': '冰雪通路',
    'Dragons Den': '龙穴',
    'Mt.Silver': '白银山',
    'Headbutt': '头槌',
    'Altar of Time': '时之祭坛',
    'Tin Tower 10F': '铃铛塔10层',
    'Whirl Island B2F Inner': '漩涡列岛地下2层内',
    'Felines, Cats or Dogs ?': '传说三圣兽',
    //成都结束
    'Littleroot Town': '未白镇',
    'Petalburg Woods': '橙华森林',
    'Rusturf Tunnel': '卡绿隧道',
    'Granite Cave': '石之洞窟',
    'New Mauville': '新紫堇',
    'Mirage Tower': '幻影之塔',
    'Fiery Path': '热焰小径',
    'Jagged Pass': '凹凸山道',
    'Meteor Falls': '流星瀑布',
    'Weather Institute': '天气研究所',
    'Safari Zone (RS Edition)': '狩猎地带 (红蓝宝石版)',
    'Safari Zone (Emerald Edition)': '狩猎地带 (翡翠版)',
    'Mt. Pyre': '送火山',
    'Too much Hideouts': '太多的藏身处',
    'Mossdeep City': '绿岭市',
    'Shoal Cave': '浅滩洞穴',
    'Mirage Island': '幻之岛',
    'Sky Pillar': '天空之柱',
    'Ruins': '遗迹',
    'Southern Island': '南方孤岛',
    'Cave of Origin': '觉醒祠堂',
    'Sky Pillar (Top)': '天空之柱（顶部）',
    'Wishmaker': '愿望乐园',
    'THE UNIVERSE': '宇宙',
    'Underwater 7.8': '水下 7.8',
    //丰缘结束
    'Twinleaf Town': '双叶镇',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
};
