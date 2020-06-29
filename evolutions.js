const EVOLUTIONS = {
  "Bulbasaur":{
    "level":"16",
    "to":"Ivysaur"
  },
  "Ivysaur":{
    "level":"32",
    "to":"Venusaur"
  },
  "Venusaur":{
    "level":"100",
    "to":"M-Venusaur"
  },
  "Charmander":{
    "level":"16",
    "to":"Charmeleon"
  },
  "Charmeleon":{
    "level":"36",
    "to":"Charizard"
  },
  "Charizard":{
    "level":"100",
    "to":"M-Charizard X"
  },
  "Squirtle":{
    "level":"16",
    "to":"Wartortle"
  },
  "Wartortle":{
    "level":"36",
    "to":"Blastoise"
  },
  "Blastoise":{
    "level":"100",
    "to":"M-Blastoise"
  },
  "Caterpie":{
    "level":"7",
    "to":"Metapod"
  },
  "Metapod":{
    "level":"10",
    "to":"Butterfree"
  },
  "Weedle":{
    "level":"7",
    "to":"Kakuna"
  },
  "Kakuna":{
    "level":"10",
    "to":"Beedrill"
  },
  "Beedrill":{
    "level":"100",
    "to":"M-Beedrill"
  },
  "Pidgey":{
    "level":"18",
    "to":"Pidgeotto"
  },
  "Pidgeotto":{
    "level":"36",
    "to":"Pidgeot"
  },
  "Pidgeot":{
    "level":"100",
    "to":"M-Pidgeot"
  },
  "Rattata":{
    "level":"20",
    "to":"Raticate"
  },
  "Spearow":{
    "level":"20",
    "to":"Fearow"
  },
  "Ekans":{
    "level":"22",
    "to":"Arbok"
  },
  "Pichu":{
    "level":"10",
    "to":"Pikachu"
  },
  "Pikachu":{
    "level":"35",
    "to":"Raichu"
  },
  "Sandshrew":{
    "level":"22",
    "to":"Sandslash"
  },
  "Nidoran f":{
    "level":"16",
    "to":"Nidorina"
  },
  "Nidorina":{
    "level":"35",
    "to":"Nidoqueen"
  },
  "Nidoran m":{
    "level":"16",
    "to":"Nidorino"
  },
  "Nidorino":{
    "level":"35",
    "to":"Nidoking"
  },
  "Cleffa":{
    "level":"10",
    "to":"Clefairy"
  },
  "Clefairy":{
    "level":"35",
    "to":"Clefable"
  },
  "Vulpix":{
    "level":"35",
    "to":"Ninetales"
  },
  "Igglybuff":{
    "level":"10",
    "to":"Jigglypuff"
  },
  "Jigglypuff":{
    "level":"35",
    "to":"Wigglytuff"
  },
  "Zubat":{
    "level":"22",
    "to":"Golbat"
  },
  "Golbat":{
    "level":"45",
    "to":"Crobat"
  },
  "Oddish":{
    "level":"21",
    "to":"Gloom"
  },
  "Gloom":{
    "level":"35",
    "to":"Vileplume"
  },
  "Paras":{
    "level":"24",
    "to":"Parasect"
  },
  "Venonat":{
    "level":"31",
    "to":"Venomoth"
  },
  "Diglett":{
    "level":"26",
    "to":"Dugtrio"
  },
  "Meowth":{
    "level":"28",
    "to":"Persian"
  },
  "Psyduck":{
    "level":"33",
    "to":"Golduck"
  },
  "Mankey":{
    "level":"28",
    "to":"Primeape"
  },
   "Growlithe":{
    "level":"35",
    "to":"Arcanine"
  },
  "Poliwag":{
    "level":"25",
    "to":"Poliwhirl"
  },
  "Poliwhirl":{
    "level":"50",
    "to":"Poliwrath"
  },
  "Abra":{
    "level":"16",
    "to":"Kadabra"
  },
  "Kadabra":{
    "level":"40",
    "to":"Alakazam"
  },
  "Alakazam":{
    "level":"100",
    "to":"M-Alakazam"
  },
  "Machop":{
    "level":"28",
    "to":"Machoke"
  },
  "Machoke":{
    "level":"40",
    "to":"Machamp"
  },
  "Bellsprout":{
    "level":"21",
    "to":"Weepinbell"
  },
  "Weepinbell":{
    "level":"35",
    "to":"Victreebel"
  },
  "Tentacool":{
    "level":"30",
    "to":"Tentacruel"
  },
  "Geodude":{
    "level":"25",
    "to":"Graveler"
  },
  "Graveler":{
    "level":"40",
    "to":"Golem"
  },
  "Ponyta":{
    "level":"40",
    "to":"Rapidash"
  },
  "Slowpoke":{
    "level":"37",
    "to":"Slowbro"
  },
  "Slowbro":{
    "level":"100",
    "to":"M-Slowbro"
  },
  "Magnemite":{
    "level":"30",
    "to":"Magneton"
  },
  "Magneton":{
    "level":"45",
    "to":"Magnezone"
  },
  "Doduo":{
    "level":"31",
    "to":"Dodrio"
  },
  "Seel":{
    "level":"34",
    "to":"Dewgong"
  },
  "Grimer":{
    "level":"38",
    "to":"Muk"
  },
  "Shellder":{
    "level":"35",
    "to":"Cloyster"
  },
  "Gastly":{
    "level":"25",
    "to":"Haunter"
  },
  "Haunter":{
    "level":"40",
    "to":"Gengar"
  },
  "Gengar":{
    "level":"100",
    "to":"M-Gengar"
  },
  "Onix":{
    "level":"45",
    "to":"Steelix"
  },
  "Steelix":{
    "level":"100",
    "to":"M-Steelix"
  },
  "Drowzee":{
    "level":"26",
    "to":"Hypno"
  },
  "Krabby":{
    "level":"28",
    "to":"Kingler"
  },
  "Voltorb":{
    "level":"30",
    "to":"Electrode"
  },
   "Exeggcute":{
    "level":"35",
    "to":"Exeggutor"
  },
  "Cubone":{
    "level":"28",
    "to":"Marowak"
  },
  "Tyrogue":{
    "level":"20",
    "to":"Hitmontop"
  },
  "Lickitung":{
    "level":"33",
    "to":"Lickilicky"
  },
  "Koffing":{
    "level":"35",
    "to":"Weezing"
  },  
  "Rhyhorn":{
    "level":"42",
    "to":"Rhydon"
  },
  "Rhydon":{
    "level":"50",
    "to":"Rhyperior"
  },
  "Happiny":{
    "level":"17",
    "to":"Chansey"
  },
  "Chansey":{
    "level":"40",
    "to":"Blissey"
  },
  "Tangela":{
    "level":"38",
    "to":"Tangrowth"
  },
  "Kangaskhan":{
    "level":"100",
    "to":"M-Kangaskhan"
  },
  "Horsea":{
    "level":"32",
    "to":"Seadra"
  },
  "Seadra":{
    "level":"50",
    "to":"Kingdra"
  },
  "Goldeen":{
    "level":"33",
    "to":"Seaking"
  },
  "Staryu":{
    "level":"35",
    "to":"Starmie"
  },
  "Mime Jr.":{
    "level":"15",
    "to":"Mr. Mime"
  },
  "Scyther":{
    "level":"45",
    "to":"Scizor"
  },
  "Scizor":{
    "level":"100",
    "to":"M-Scizor"
  },
  "Smoochum":{
    "level":"30",
    "to":"Jynx"
  },
  "Elekid":{
    "level":"30",
    "to":"Electabuzz"
  },
  "Electabuzz":{
    "level":"50",
    "to":"Electivire"
  },
  "Magby":{
    "level":"30",
    "to":"Magmar"
  },
  "Magmar":{
    "level":"50",
    "to":"Magmortar"
  },
  "Pinsir":{
    "level":"100",
    "to":"M-Pinsir"
  },
  "Magikarp":{
    "level":"20",
    "to":"Gyarados"
  },
  "Gyarados":{
    "level":"100",
    "to":"M-Gyarados"
  },
  "Eevee":{
    "level":"25",
    "to":"Vaporeon"
  },
  "Porygon":{
    "level":"25",
    "to":"Porygon2"
  },
  "Porygon2":{
    "level":"37",
    "to":"Porygon-Z"
  },
  "Omanyte":{
    "level":"40",
    "to":"Omastar"
  },
  "Kabuto":{
    "level":"40",
    "to":"Kabutops"
  },
  "Aerodactyl":{
    "level":"100",
    "to":"M-Aerodactyl"
  },
  "Munchlax":{
    "level":"20",
    "to":"Snorlax"
  },
  "Dratini":{
    "level":"30",
    "to":"Dragonair"
  },
  "Dragonair":{
    "level":"55",
    "to":"Dragonite"
  },
  "Mewtwo":{
    "level":"100",
    "to":"M-Mewtwo Y"
  },
  "Chikorita":{
    "level":"16",
    "to":"Bayleef"
  },
  "Bayleef":{
    "level":"32",
    "to":"Meganium"
  },
  "Cyndaquil":{
    "level":"14",
    "to":"Quilava"
  },
  "Quilava":{
    "level":"36",
    "to":"Typhlosion"
  },
  "Totodile":{
    "level":"18",
    "to":"Croconaw"
  },
  "Croconaw":{
    "level":"30",
    "to":"Feraligatr"
  },
  "Sentret":{
    "level":"15",
    "to":"Furret"
  },
  "Hoothoot":{
    "level":"20",
    "to":"Noctowl"
  },
  "Ledyba":{
    "level":"18",
    "to":"Ledian"
  },
  "Spinarak":{
    "level":"22",
    "to":"Ariados"
  },
  "Chinchou":{
    "level":"27",
    "to":"Lanturn"
  },
  "Togepi":{
    "level":"20",
    "to":"Togetic"
  },
  "Togetic":{
    "level":"35",
    "to":"Togekiss"
  },
  "Natu":{
    "level":"25",
    "to":"Xatu"
  },
  "Mareep":{
    "level":"15",
    "to":"Flaaffy"
  },
  "Flaaffy":{
    "level":"30",
    "to":"Ampharos"
  },
  "Ampharos":{
    "level":"100",
    "to":"M-Ampharos"
  },
  "Azurill":{
    "level":"7",
    "to":"Marill"
  },
  "Marill":{
    "level":"18",
    "to":"Azumarill"
  },
  "Bonsly":{
    "level":"15",
    "to":"Sudowoodo"
  },
  "Hoppip":{
    "level":"18",
    "to":"Skiploom"
  },
  "Skiploom":{
    "level":"30",
    "to":"Jumpluff"
  },
  "Aipom":{
    "level":"32",
    "to":"Ambipom"
  },
  "Sunkern":{
    "level":"25",
    "to":"Sunflora"
  },
  "Yanma":{
    "level":"33",
    "to":"Yanmega"
  },
  "Wooper":{
    "level":"20",
    "to":"Quagsire"
  },
  "Murkrow":{
    "level":"35",
    "to":"Honchkrow"
  },
  "Misdreavus":{
    "level":"35",
    "to":"Mismagius"
  },
  "Wynaut":{
    "level":"15",
    "to":"Wobbuffet"
  },
  "Pineco":{
    "level":"31",
    "to":"Forretress"
  },
  "Gligar":{
    "level":"37",
    "to":"Gliscor"
  },
  "Snubbull":{
    "level":"23",
    "to":"Granbull"
  },
  "Heracross":{
    "level":"100",
    "to":"M-Heracross"
  },
  "Sneasel":{
    "level":"40",
    "to":"Weavile"
  },
  "Teddiursa":{
    "level":"30",
    "to":"Ursaring"
  },
  "Slugma":{
    "level":"38",
    "to":"Magcargo"
  },
  "Swinub":{
    "level":"33",
    "to":"Piloswine"
  },
  "Piloswine":{
    "level":"50",
    "to":"Mamoswine"
  },
  "Remoraid":{
    "level":"25",
    "to":"Octillery"
  },
  "Mantyke":{
    "level":"23",
    "to":"Mantine"
  },
  "Houndour":{
    "level":"24",
    "to":"Houndoom"
  },
  "Houndoom":{
    "level":"100",
    "to":"M-Houndoom"
  },
  "Phanpy":{
    "level":"25",
    "to":"Donphan"
  },
  "Larvitar":{
    "level":"30",
    "to":"Pupitar"
  },
  "Pupitar":{
    "level":"55",
    "to":"Tyranitar"
  },
  "Tyranitar":{
    "level":"100",
    "to":"M-Tyranitar"
  },
  "Treecko":{
    "level":"16",
    "to":"Grovyle"
  },
  "Grovyle":{
    "level":"36",
    "to":"Sceptile"
  },
  "Sceptile":{
    "level":"100",
    "to":"M-Sceptile"
  },
  "Torchic":{
    "level":"16",
    "to":"Combusken"
  },
  "Combusken":{
    "level":"36",
    "to":"Blaziken"
  },
  "Blaziken":{
    "level":"100",
    "to":"M-Blaziken"
  },
  "Mudkip":{
    "level":"16",
    "to":"Marshtomp"
  },
  "Marshtomp":{
    "level":"36",
    "to":"Swampert"
  },
  "Swampert":{
    "level":"100",
    "to":"M-Swampert"
  },
  "Poochyena":{
    "level":"18",
    "to":"Mightyena"
  },
  "Zigzagoon":{
    "level":"20",
    "to":"Linoone"
  },
  "Wurmple":{
    "level":"7",
    "to":"Silcoon"
  },
  "Silcoon":{
    "level":"10",
    "to":"Beautifly"
  },
  "Cascoon":{
    "level":"10",
    "to":"Dustox"
  },
  "Lotad":{
    "level":"14",
    "to":"Lombre"
  },
  "Lombre":{
    "level":"30",
    "to":"Ludicolo"
  },
  "Seedot":{
    "level":"14",
    "to":"Nuzleaf"
  },
  "Nuzleaf":{
    "level":"30",
    "to":"Shiftry"
  },
  "Taillow":{
    "level":"22",
    "to":"Swellow"
  },
  "Wingull":{
    "level":"25",
    "to":"Pelipper"
  },
  "Ralts":{
    "level":"20",
    "to":"Kirlia"
  },
  "Kirlia":{
    "level":"30",
    "to":"Gardevoir"
  },
  "Gardevoir":{
    "level":"100",
    "to":"M-Gardevoir"
  },
  "Gallade":{
    "level":"100",
    "to":"M-Gallade"
  },
  "Surskit":{
    "level":"22",
    "to":"Masquerain"
  },
  "Shroomish":{
    "level":"23",
    "to":"Breloom"
  },
  "Slakoth":{
    "level":"18",
    "to":"Vigoroth"
  },
  "Vigoroth":{
    "level":"36",
    "to":"Slaking"
  },
  "Nincada":{
    "level":"20",
    "to":"Ninjask"
  },
  "Whismur":{
    "level":"20",
    "to":"Loudred"
  },
  "Loudred":{
    "level":"40",
    "to":"Exploud"
  },
  "Makuhita":{
    "level":"24",
    "to":"Hariyama"
  },
  "Nosepass":{
    "level":"35",
    "to":"Probopass"
  },
  "Skitty":{
    "level":"25",
    "to":"Delcatty"
  },
  "Sableye":{
    "level":"100",
    "to":"M-Sableye"
  },
  "Mawile":{
    "level":"100",
    "to":"M-Mawile"
  },
  "Aron":{
    "level":"32",
    "to":"Lairon"
  },
  "Lairon":{
    "level":"42",
    "to":"Aggron"
  },
  "Aggron":{
    "level":"100",
    "to":"M-Aggron"
  },
  "Meditite":{
    "level":"37",
    "to":"Medicham"
  },
  "Medicham":{
    "level":"100",
    "to":"M-Medicham"
  },
  "Electrike":{
    "level":"37",
    "to":"Manectric"
  },
  "Manectric":{
    "level":"100",
    "to":"M-Manectric"
  },
  "Budew":{
    "level":"12",
    "to":"Roselia"
  },
  "Roselia":{
    "level":"27",
    "to":"Roserade"
  },
  "Gulpin":{
    "level":"26",
    "to":"Swalot"
  },
  "Carvanha":{
    "level":"30",
    "to":"Sharpedo"
  },
  "Sharpedo":{
    "level":"100",
    "to":"M-Sharpedo"
  },
  "Wailmer":{
    "level":"40",
    "to":"Wailord"
  },
  "Numel":{
    "level":"33",
    "to":"Camerupt"
  },
  "Camerupt":{
    "level":"100",
    "to":"M-Camerupt"
  },
  "Spoink":{
    "level":"32",
    "to":"Grumpig"
  },
  "Trapinch":{
    "level":"35",
    "to":"Vibrava"
  },
  "Vibrava":{
    "level":"45",
    "to":"Flygon"
  },
  "Cacnea":{
    "level":"32",
    "to":"Cacturne"
  },
  "Swablu":{
    "level":"35",
    "to":"Altaria"
  },
  "Altaria":{
    "level":"100",
    "to":"M-Altaria"
  },
  "Barboach":{
    "level":"30",
    "to":"Whiscash"
  },
  "Corphish":{
    "level":"30",
    "to":"Crawdaunt"
  },
  "Baltoy":{
    "level":"36",
    "to":"Claydol"
  },
  "Lileep":{
    "level":"40",
    "to":"Cradily"
  },
  "Anorith":{
    "level":"40",
    "to":"Armaldo"
  },
  "Feebas":{
    "level":"40",
    "to":"Milotic"
  },
  "Shuppet":{
    "level":"37",
    "to":"Banette"
  },
  "Banette":{
    "level":"100",
    "to":"M-Banette"
  },
  "Duskull":{
    "level":"37",
    "to":"Dusclops"
  },
  "Dusclops":{
    "level":"50",
    "to":"Dusknoir"
  },
  "Chingling":{
    "level":"20",
    "to":"Chimecho"
  },
  "Absol":{
    "level":"100",
    "to":"M-Absol"
  },
  "Snorunt":{
    "level":"42",
    "to":"Glalie"
  },
  "Glalie":{
    "level":"100",
    "to":"M-Glalie"
  },
  "Spheal":{
    "level":"32",
    "to":"Sealeo"
  },
  "Sealeo":{
    "level":"44",
    "to":"Walrein"
  },
  "Clamperl":{
    "level":"30",
    "to":"Gorebyss"
  },
  "Bagon":{
    "level":"30",
    "to":"Shelgon"
  },
  "Shelgon":{
    "level":"50",
    "to":"Salamence"
  },
  "Salamence":{
    "level":"100",
    "to":"M-Salamence"
  },
  "Beldum":{
    "level":"20",
    "to":"Metang"
  },
  "Metang":{
    "level":"45",
    "to":"Metagross"
  },
  "Metagross":{
    "level":"100",
    "to":"M-Metagross"
  },
  "Latias":{
    "level":"100",
    "to":"M-Latias"
  },
  "Latios":{
    "level":"100",
    "to":"M-Latios"
  },
  "Kyogre":{
    "level":"100",
    "to":"P-Kyogre"
  },
  "Groudon":{
    "level":"100",
    "to":"P-Groudon"
  },
  "Rayquaza":{
    "level":"100",
    "to":"M-Rayquaza"
  },
  "Turtwig":{
    "level":"18",
    "to":"Grotle"
  },
  "Grotle":{
    "level":"32",
    "to":"Torterra"
  },
  "Chimchar":{
    "level":"14",
    "to":"Monferno"
  },
  "Monferno":{
    "level":"36",
    "to":"Infernape"
  },
  "Piplup":{
    "level":"16",
    "to":"Prinplup"
  },
  "Prinplup":{
    "level":"36",
    "to":"Empoleon"
  },
  "Starly":{
    "level":"14",
    "to":"Staravia"
  },
  "Staravia":{
    "level":"34",
    "to":"Staraptor"
  },
  "Bidoof":{
    "level":"15",
    "to":"Bibarel"
  },
  "Kricketot":{
    "level":"10",
    "to":"Kricketune"
  },
  "Shinx":{
    "level":"15",
    "to":"Luxio"
  },
  "Luxio":{
    "level":"30",
    "to":"Luxray"
  },
  "Cranidos":{
    "level":"30",
    "to":"Rampardos"
  },
  "Shieldon":{
    "level":"30",
    "to":"Bastiodon"
  },
  "Burmy":{
    "level":"20",
    "to":"Wormadam"
  },
  "Combee":{
    "level":"21",
    "to":"Vespiquen"
  },
  "Buizel":{
    "level":"26",
    "to":"Floatzel"
  },
  "Cherubi":{
    "level":"25",
    "to":"Cherrim"
  },
  "Shellos":{
    "level":"30",
    "to":"Gastrodon"
  },
  "Drifloon":{
    "level":"28",
    "to":"Drifblim"
  },
  "Buneary":{
    "level":"25",
    "to":"Lopunny"
  },
  "Lopunny":{
    "level":"100",
    "to":"M-Lopunny"
  },
  "Glameow":{
    "level":"38",
    "to":"Purugly"
  },
  "Stunky":{
    "level":"34",
    "to":"Skuntank"
  },
  "Bronzor":{
    "level":"33",
    "to":"Bronzong"
  },
  "Gible":{
    "level":"24",
    "to":"Gabite"
  },
  "Gabite":{
    "level":"48",
    "to":"Garchomp"
  },
  "Garchomp":{
    "level":"100",
    "to":"M-Garchomp"
  },
  "Riolu":{
    "level":"35",
    "to":"Lucario"
  },
  "Lucario":{
    "level":"100",
    "to":"M-Lucario"
  },
  "Hippopotas":{
    "level":"34",
    "to":"Hippowdon"
  },
  "Skorupi":{
    "level":"40",
    "to":"Drapion"
  },
  "Croagunk":{
    "level":"37",
    "to":"Toxicroak"
  },
  "Finneon":{
    "level":"31",
    "to":"Lumineon"
  },
  "Snover":{
    "level":"40",
    "to":"Abomasnow"
  },
  "Abomasnow":{
    "level":"100",
    "to":"M-Abomasnow"
  },
  "Snivy":{
    "level":"17",
    "to":"Servine"
  },
  "Servine":{
    "level":"32",
    "to":"Serperior"
  },
  "Tepig":{
    "level":"17",
    "to":"Pignite"
  },
  "Pignite":{
    "level":"32",
    "to":"Emboar"
  },
  "Oshawott":{
    "level":"17",
    "to":"Dewott"
  },
  "Dewott":{
    "level":"32",
    "to":"Samurott"
  },
  "Patrat":{
    "level":"20",
    "to":"Watchog"
  },
  "Lillipup":{
    "level":"16",
    "to":"Herdier"
  },
  "Herdier":{
    "level":"32",
    "to":"Stoutland"
  },
  "Purrloin":{
    "level":"20",
    "to":"Liepard"
  },
  "Pansage":{
    "level":"22",
    "to":"Simisage"
  },
  "Pansear":{
    "level":"22",
    "to":"Simisear"
  },
  "Panpour":{
    "level":"22",
    "to":"Simipour"
  },
  "Munna":{
    "level":"25",
    "to":"Musharna"
  },
  "Pidove":{
    "level":"21",
    "to":"Tranquill"
  },
  "Tranquill":{
    "level":"32",
    "to":"Unfezant"
  },
  "Blitzle":{
    "level":"27",
    "to":"Zebstrika"
  },
  "Roggenrola":{
    "level":"25",
    "to":"Boldore"
  },
  "Boldore":{
    "level":"40",
    "to":"Gigalith"
  },
  "Woobat":{
    "level":"27",
    "to":"Swoobat"
  },
  "Drilbur":{
    "level":"31",
    "to":"Excadrill"
  },
  "Audino":{
    "level":"100",
    "to":"M-Audino"
  },
  "Timburr":{
    "level":"25",
    "to":"Gurdurr"
  },
  "Gurdurr":{
    "level":"40",
    "to":"Conkeldurr"
  },
  "Tympole":{
    "level":"25",
    "to":"Palpitoad"
  },
  "Palpitoad":{
    "level":"36",
    "to":"Seismitoad"
  },
  "Sewaddle":{
    "level":"20",
    "to":"Swadloon"
  },
  "Swadloon":{
    "level":"30",
    "to":"Leavanny"
  },
  "Venipede":{
    "level":"22",
    "to":"Whirlipede"
  },
  "Whirlipede":{
    "level":"30",
    "to":"Scolipede"
  },
  "Cottonee":{
    "level":"27",
    "to":"Whimsicott"
  },
  "Petilil":{
    "level":"27",
    "to":"Lilligant"
  },
  "Sandile":{
    "level":"29",
    "to":"Krokorok"
  },
  "Krokorok":{
    "level":"40",
    "to":"Krookodile"
  },
  "Darumaka":{
    "level":"35",
    "to":"Darmanitan"
  },
  "Dwebble":{
    "level":"34",
    "to":"Crustle"
  },
  "Scraggy":{
    "level":"39",
    "to":"Scrafty"
  },
  "Yamask":{
    "level":"34",
    "to":"Cofagrigus"
  },
  "Tirtouga":{
    "level":"37",
    "to":"Carracosta"
  },
  "Archen":{
    "level":"37",
    "to":"Archeops"
  },
  "Trubbish":{
    "level":"36",
    "to":"Garbodor"
  },
  "Zorua":{
    "level":"30",
    "to":"Zoroark"
  },
  "Minccino":{
    "level":"27",
    "to":"Cinccino"
  },
  "Gothita":{
    "level":"32",
    "to":"Gothorita"
  },
  "Gothorita":{
    "level":"41",
    "to":"Gothitelle"
  },
  "Solosis":{
    "level":"32",
    "to":"Duosion"
  },
  "Duosion":{
    "level":"41",
    "to":"Reuniclus"
  },
  "Ducklett":{
    "level":"35",
    "to":"Swanna"
  },
  "Vanillite":{
    "level":"35",
    "to":"Vanillish"
  },
  "Vanillish":{
    "level":"47",
    "to":"Vanilluxe"
  },
  "Deerling":{
    "level":"34",
    "to":"Sawsbuck"
  },
  "Karrablast":{
    "level":"30",
    "to":"Escavalier"
  },
  "Foongus":{
    "level":"39",
    "to":"Amoonguss"
  },
  "Frillish":{
    "level":"40",
    "to":"Jellicent"
  },
  "Joltik":{
    "level":"36",
    "to":"Galvantula"
  },
  "Ferroseed":{
    "level":"40",
    "to":"Ferrothorn"
  },
  "Klink":{
    "level":"38",
    "to":"Klang"
  },
  "Klang":{
    "level":"49",
    "to":"Klinklang"
  },
  "Tynamo":{
    "level":"39",
    "to":"Eelektrik"
  },
  "Eelektrik":{
    "level":"50",
    "to":"Eelektross"
  },
  "Elgyem":{
    "level":"42",
    "to":"Beheeyem"
  },
  "Litwick":{
    "level":"41",
    "to":"Lampent"
  },
  "Lampent":{
    "level":"55",
    "to":"Chandelure"
  },
  "Axew":{
    "level":"38",
    "to":"Fraxure"
  },
  "Fraxure":{
    "level":"48",
    "to":"Haxorus"
  },
  "Cubchoo":{
    "level":"37",
    "to":"Beartic"
  },
  "Shelmet":{
    "level":"30",
    "to":"Accelgor"
  },
  "Mienfoo":{
    "level":"50",
    "to":"Mienshao"
  },
  "Golett":{
    "level":"43",
    "to":"Golurk"
  },
  "Pawniard":{
    "level":"52",
    "to":"Bisharp"
  },
  "Rufflet":{
    "level":"54",
    "to":"Braviary"
  },
  "Vullaby":{
    "level":"54",
    "to":"Mandibuzz"
  },
  "Deino":{
    "level":"50",
    "to":"Zweilous"
  },
  "Zweilous":{
    "level":"64",
    "to":"Hydreigon"
  },
  "Larvesta":{
    "level":"59",
    "to":"Volcarona"
  },
  "Chespin":{
    "level":"16",
    "to":"Quilladin"
  },
  "Quilladin":{
    "level":"36",
    "to":"Chesnaught"
  },
  "Fennekin":{
    "level":"16",
    "to":"Braixen"
  },
  "Braixen":{
    "level":"36",
    "to":"Delphox"
  },
  "Froakie":{
    "level":"16",
    "to":"Frogadier"
  },
  "Frogadier":{
    "level":"36",
    "to":"Greninja"
  },
  "Greninja":{
    "level":"100",
    "to":"Ash-Greninja"
  },
  "Bunnelby":{
    "level":"20",
    "to":"Diggersby"
  },
  "Fletchling":{
    "level":"17",
    "to":"Fletchinder"
  },
  "Fletchinder":{
    "level":"35",
    "to":"Talonflame"
  },
  "Scatterbug":{
    "level":"9",
    "to":"Spewpa"
  },
  "Spewpa":{
    "level":"12",
    "to":"Vivillon"
  },
  "Litleo":{
    "level":"35",
    "to":"Pyroar"
  },
  "Flabebe":{
    "level":"19",
    "to":"Floette"
  },
  "Floette":{
    "level":"32",
    "to":"Florges"
  },
  "Skiddo":{
    "level":"32",
    "to":"Gogoat"
  },
  "Pancham":{
    "level":"32",
    "to":"Pangoro"
  },
  "Espurr":{
    "level":"25",
    "to":"Meowstic"
  },
  "Honedge":{
    "level":"35",
    "to":"Doublade"
  },
  "Doublade":{
    "level":"50",
    "to":"Aegislash"
  },
  "Spritzee":{
    "level":"28",
    "to":"Aromatisse"
  },
  "Swirlix":{
    "level":"28",
    "to":"Slurpuff"
  },
  "Inkay":{
    "level":"30",
    "to":"Malamar"
  },
  "Binacle":{
    "level":"39",
    "to":"Barbaracle"
  },
  "Skrelp":{
    "level":"48",
    "to":"Dragalge"
  },
  "Clauncher":{
    "level":"37",
    "to":"Clawitzer"
  },
  "Helioptile":{
    "level":"35",
    "to":"Heliolisk"
  },
  "Tyrunt":{
    "level":"39",
    "to":"Tyrantrum"
  },
  "Amaura":{
    "level":"39",
    "to":"Aurorus"
  },
  "Goomy":{
    "level":"40",
    "to":"Sliggoo"
  },
  "Sliggoo":{
    "level":"50",
    "to":"Goodra"
  },
  "Phantump":{
    "level":"40",
    "to":"Trevenant"
  },
  "Pumpkaboo":{
    "level":"40",
    "to":"Gourgeist"
  },
  "Bergmite":{
    "level":"37",
    "to":"Avalugg"
  },
  "Noibat":{
    "level":"48",
    "to":"Noivern"
  },
  "Diancie":{
    "level":"100",
    "to":"M-Diancie"
  },
  "Rowlet":{
    "level":"17",
    "to":"Dartrix"
  },
  "Dartrix":{
    "level":"34",
    "to":"Decidueye"
  },
  "Litten":{
    "level":"17",
    "to":"Torracat"
  },
  "Torracat":{
    "level":"34",
    "to":"Incineroar"
  },
  "Popplio":{
    "level":"17",
    "to":"Brionne"
  },
  "Brionne":{
    "level":"34",
    "to":"Primarina"
  },
  "Pikipek":{
    "level":"14",
    "to":"Trumbeak"
  },
  "Trumbeak":{
    "level":"28",
    "to":"Toucannon"
  },
  "Yungoos":{
    "level":"20",
    "to":"Gumshoos"
  },
  "Grubbin":{
    "level":"20",
    "to":"Charjabug"
  },
  "Charjabug":{
    "level":"33",
    "to":"Vikavolt"
  },
  "Crabrawler":{
    "level":"38",
    "to":"Crabominable"
  },
  "Cutiefly":{
    "level":"25",
    "to":"Ribombee"
  },
  "Rockruff":{
    "level":"25",
    "to":"Lycanroc"
  },
  "Wishiwashi":{
    "level":"20",
    "to":"Wishiwashi-S"
  },
  "Mareanie":{
    "level":"38",
    "to":"Toxapex"
  },
  "Mudbray":{
    "level":"30",
    "to":"Mudsdale"
  },
  "Dewpider":{
    "level":"22",
    "to":"Araquanid"
  },
  "Fomantis":{
    "level":"34",
    "to":"Lurantis"
  },
  "Morelull":{
    "level":"24",
    "to":"Shiinotic"
  },
  "Salandit":{
    "level":"33",
    "to":"Salazzle"
  },
  "Stufful":{
    "level":"27",
    "to":"Bewear"
  },
  "Bounsweet":{
    "level":"18",
    "to":"Steenee"
  },
  "Steenee":{
    "level":"29",
    "to":"Tsareena"
  },
  "Wimpod":{
    "level":"30",
    "to":"Golisopod"
  },
  "Sandygast":{
    "level":"42",
    "to":"Palossand"
  },
  "Type: Null":{
    "level":"50",
    "to":"Silvally"
  },
  "Jangmo-o":{
    "level":"35",
    "to":"Hakamo-o"
  },
  "Hakamo-o":{
    "level":"45",
    "to":"Kommo-o"
  },
  "Cosmog":{
    "level":"43",
    "to":"Cosmoem"
  },
  "Poipole":{
    "level":"60",
    "to":"Naganadel"
  },
    "Meltan":{
    "level":"70",
    "to":"Melmetal"
  },
  "Grookey":{
    "level":"16",
    "to":"Thwackey"
  }, 
  "Thwackey":{
    "level":"35",
    "to":"Rillaboom"
  }, 
  "Scorbunny":{
    "level":"16",
    "to":"Raboot"
  }, 
  "Raboot":{
    "level":"35",
    "to":"Cinderace"
  }, 
  "Sobble":{
    "level":"16",
    "to":"Drizzile"
  }, 
  "Drizzile":{
    "level":"35",
    "to":"Inteleon"
  },
  "Skwovet":{
    "level":"24",
    "to":"Greedent"
  },  
  "Rookidee":{
    "level":"18",
    "to":"Corvisquire"
  }, 
  "Corvisquire":{
    "level":"38",
    "to":"Corviknight"
  }, 
  "Blipbug":{
    "level":"10",
    "to":"Dottler"
  }, 
  "Dottler":{
    "level":"30",
    "to":"Orbeetle"
  }, 
  "Nickit":{
    "level":"18",
    "to":"Thievul"
  }, 
  "Gossifleur":{
    "level":"20",
    "to":"Eldegoss"
  }, 
  "Wooloo":{
    "level":"24",
    "to":"Dubwool"
  }, 
  "Chewtle":{
    "level":"22",
    "to":"Drednaw"
  }, 
  "Yamper":{
    "level":"25",
    "to":"Boltund"
  }, 
  "Rolycoly":{
    "level":"18",
    "to":"Carkol"
  }, 
  "Carkol":{
    "level":"34",
    "to":"Coalossal"
  }, 
  "Applin":{
    "level":"35",
    "to":"Flapple"
  }, 
  "Silicobra":{
    "level":"36",
    "to":"Sandaconda"
  }, 
  "Arrokuda":{
    "level":"26",
    "to":"Barraskewda"
  }, 
  "Toxel":{
    "level":"30",
    "to":"Toxtricity"
  }, 
  "Sizzlipede":{
    "level":"28",
    "to":"Centiskorch"
  }, 
  "Clobbopus":{
    "level":"35",
    "to":"Grapploct"
  }, 
  "Sinistea":{
    "level":"30",
    "to":"Polteageist"
  }, 
  "Hatenna":{
    "level":"32",
    "to":"Hattrem"
  }, 
  "Hattrem":{
    "level":"42",
    "to":"Hatterene"
  }, 
  "Impidimp":{
    "level":"32",
    "to":"Morgrem"
  }, 
  "Morgrem":{
    "level":"42",
    "to":"Grimmsnarl"
  }, 
  "Milcery":{
    "level":"30",
    "to":"Alcremie"
  }, 
  "Snom":{
    "level":"35",
    "to":"Frosmoth"
  }, 
  "Cufant":{
    "level":"34",
    "to":"Copperajah"
  }, 
  "Dreepy":{
    "level":"50",
    "to":"Drakloak"
  }, 
  "Drakloak":{
    "level":"60",
    "to":"Dragapult"
  }, 
  "A-Rattata":{
    "level":"20",
    "to":"A-Raticate"
  },
  "A-Sandshrew":{
    "level":"22",
    "to":"A-Sandslash"
  },
  "A-Vulpix":{
    "level":"35",
    "to":"A-Ninetales"
  },
  "A-Diglett":{
    "level":"26",
    "to":"A-Dugtrio"
  },
  "A-Meowth":{
    "level":"28",
    "to":"A-Persian"
  },
  "G-Meowth":{
    "level":"28",
    "to":"Perrserker"
  }, 
  "A-Geodude":{
    "level":"25",
    "to":"A-Graveler"
  },
  "A-Graveler":{
    "level":"40",
    "to":"A-Golem"
  },
  "A-Grimer":{
    "level":"38",
    "to":"A-Muk"
  },
  "G-Ponyta":{
    "level":"40",
    "to":"G-Rapidash"
  }, 
  "G-Farfetch\'d":{
    "level":"35",
    "to":"Sirfetch\'d"
  }, 
  "G-Mr. Mime":{
    "level":"42",
    "to":"Mr. Rime"
  }, 
  "G-Corsola":{
    "level":"38",
    "to":"Cursola"
  }, 
  "G-Zigzagoon":{
    "level":"20",
    "to":"G-Linoone"
  }, 
  "G-Linoone":{
    "level":"35",
    "to":"Obstagoon"
  }, 
  "G-Darumaka":{
    "level":"35",
    "to":"G-Darmanitan"
  }, 
  "G-Yamask":{
    "level":"34",
    "to":"Runerigus"
  },  
  "Kyurem":{
    "level":"100",
    "to":"B-Kyurem"
  },
  "B-Kyurem":{
    "level":"100",
    "to":"W-Kyurem"
  },
  "W-Kyurem":{
    "level":"100",
    "to":"B-Kyurem"
  },
  "W-Kyurem":{
    "level":"100",
    "to":"Kyurem"
  },
  "Vaporeon":{
    "level":"25",
    "to":"Jolteon"
  },
  "Jolteon":{
    "level":"25",
    "to":"Flareon"
  },
  "Flareon":{
    "level":"25",
    "to":"Espeon"
  },
  "Espeon":{
    "level":"25",
    "to":"Umbreon"
  },
  "Umbreon":{
    "level":"25",
    "to":"Leafeon"
  },
  "Leafeon":{
    "level":"25",
    "to":"Glaceon"
  },
  "Glaceon":{
    "level":"25",
    "to":"Sylveon"
  },
  "Sylveon":{
    "level":"25",
    "to":"Vaporeon"
  },
  "Vileplume":{
    "level":"35",
    "to":"Bellossom"
  },
  "Bellossom":{
    "level":"35",
    "to":"Vileplume"
  },
  "Poliwrath":{
    "level":"50",
    "to":"Politoed"
  },
  "Politoed":{
    "level":"50",
    "to":"Poliwrath"
  },
  "Hitmontop":{
    "level":"20",
    "to":"Hitmonchan"
  },
  "Hitmonchan":{
    "level":"20",
    "to":"Hitmonlee"
  },
  "Hitmonlee":{
    "level":"20",
    "to":"Hitmontop"
  },
  "Ninjask":{
    "level":"20",
    "to":"Shedinja"
  },
  "Shedinja":{
    "level":"20",
    "to":"Ninjask"
  },
  "Gorebyss":{
    "level":"30",
    "to":"Huntail"
  },
  "Huntail":{
    "level":"30",
    "to":"Gorebyss"
  },
  "Wormadam":{
    "level":"20",
    "to":"Mothim"
  },
  "Mothim":{
    "level":"20",
    "to":"Wormadam"
  },
  "Rotom":{
    "level":"5",
    "to":"H-Rotom"
  },
  "H-Rotom":{
    "level":"5",
    "to":"W-Rotom"
  },
  "W-Rotom":{
    "level":"5",
    "to":""
  },
  "W-Rotom":{
    "level":"5",
    "to":"F-Rotom"
  },
  "F-Rotom":{
    "level":"5",
    "to":"Fan-Rotom"
  },
  "Fan-Rotom":{
    "level":"5",
    "to":"M-Rotom"
  },
  "M-Rotom":{
    "level":"5",
    "to":"Rotom"
  },
  "Giratina":{
    "level":"50",
    "to":"Giratina-O"
  },
  "Shaymin":{
    "level":"30",
    "to":"Shaymin-S"
  },
  "Giratina-O":{
    "level":"50",
    "to":"Giratina"
  },
  "Shaymin-S":{
    "level":"30",
    "to":"Shaymin"
  },
  "Deoxys":{
    "level":"30",
    "to":"Deoxys-A"
  },
  "Deoxys-A":{
    "level":"30",
    "to":"Deoxys-D"
  },
  "Deoxys-D":{
    "level":"30",
    "to":"Deoxys-S"
  },
  "Deoxys-S":{
    "level":"30",
    "to":"Deoxys"
  },
  "Tornadus":{
    "level":"50",
    "to":"Tornadus-T"
  },
  "Tornadus-T":{
    "level":"50",
    "to":"Tornadus"
  },
  "Thundurus":{
    "level":"50",
    "to":"Thundurus-T"
  },
  "Thundurus-T":{
    "level":"50",
    "to":"Thundurus"
  },
  "Landorus":{
    "level":"50",
    "to":"Landorus-T"
  },
  "Landorus-T":{
    "level":"50",
    "to":"Landorus"
  },
  "Keldeo":{
    "level":"15",
    "to":"Keldeo-R"
  },
  "Keldeo-R":{
    "level":"15",
    "to":"Keldeo"
  },
  "Meloetta":{
    "level":"50",
    "to":"Meloetta-P"
  },
  "Meloetta-P":{
    "level":"50",
    "to":"Meloetta"
  },
  "Darmanitan":{
    "level":"35",
    "to":"Darmanitan-Z"
  },
  "Darmanitan-Z":{
    "level":"35",
    "to":"Darmanitan"
  },
  "Aegislash":{
    "level":"50",
    "to":"Aegislash-B"
  },
  "Aegislash-B":{
    "level":"50",
    "to":"Aegislash"
  },
  "Zygarde":{
    "level":"10",
    "to":"Zygarde-10"
  },
  "Zygarde-10":{
    "level":"100",
    "to":"Zygarde-C"
  },
  "Zygarde-C":{
    "level":"100",
    "to":"Zygarde"
  },
  "Hoopa":{
    "level":"100",
    "to":"Hoopa-U"
  },
  "Hoopa-U":{
    "level":"100",
    "to":"Hoopa"
  },
  "Lycanroc":{
    "level":"25",
    "to":"Lycanroc-M"
  },
  "Lycanroc-M":{
    "level":"25",
    "to":"Lycanroc-D"
  },
  "Raichu":{
    "level":"35",
    "to":"A-Raichu"
  },
  "A-Raichu":{
    "level":"35",
    "to":"Raichu"
  },
  "Exeggutor":{
    "level":"35",
    "to":"A-Exeggutor"
  },
  "A-Exeggutor":{
    "level":"35",
    "to":"Exeggutor"
  },
  "Marowak":{
    "level":"28",
    "to":"A-Marowak"
  },
  "A-Marowak":{
    "level":"28",
    "to":"Marowak"
  },
  "Wishiwashi-S":{
    "level":"20",
    "to":"Wishiwashi"
  },
  "M-Charizard X":{
    "level":"100",
    "to":"M-Charizard Y"
  },
  "M-Charizard Y":{
    "level":"100",
    "to":"M-Charizard X"
  },
  "M-Mewtwo X":{
    "level":"100",
    "to":"M-Mewtwo Y"
  },
  "M-Mewtwo Y":{
    "level":"100",
    "to":"M-Mewtwo X"
  },
  "Lycanroc-D":{
    "level":"25",
    "to":"Lycanroc"
  },
  "Necrozma":{
    "level":"100",
    "to":"Necrozma-S"
  },
  "Necrozma-S":{
    "level":"100",
    "to":"Necrozma-L"
  },
  "Necrozma-L":{
    "level":"100",
    "to":"U-Necrozma"
  },
  "U-Necrozma":{
    "level":"100",
    "to":"Necrozma"
  },
  "Flapple":{
    "level":"35",
    "to":"Appletun"
  }, 
  "Appletun":{
    "level":"35",
    "to":"Flapple"
  }, 
  "Weezing":{
    "level":"35",
    "to":"G-Weezing"
  }, 
  "G-Weezing":{
    "level":"35",
    "to":"Weezing"
  }, 
  "G-Darmanitan":{
    "level":"35",
    "to":"G-Darmanitan-Z"
  }, 
  "G-Darmanitan-Z":{
    "level":"35",
    "to":"G-Darmanitan"
  }, 
  "Zacian":{
    "level":"100",
    "to":"Zacian-CS"
  }, 
  "Zacian-CS":{
    "level":"100",
    "to":"Zacian"
  }, 
  "Zamazenta":{
    "level":"100",
    "to":"Zamazenta-CS"
  }, 
  "Zamazenta-CS":{
    "level":"100",
    "to":"Zamazenta"
  }, 
    "G-Slowpoke":{
    "level":"37",
    "to":"G-Slowbro"
  },  
    "Kubfu":{
    "level":"70",
    "to":"Urshifu-SSS"
  }, 
    "Urshifu-SSS":{
    "level":"75",
    "to":"Urshifu-RSS"
  }, 
    "Urshifu-RSS":{
    "level":"75",
    "to":"Urshifu-SSS"
  }, 
}
