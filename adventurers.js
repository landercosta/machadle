let adventurers = [
  {
    name: "Narguezelli",
    specie: "aasimar",
    class: ["monk"],
    size: "medium",
    originFeat: ["tavern brawler"],
    skills: ["acrobatics", "insight", "perception", "stealth"],
    languages: ["common sign language", "celestial"],
    tools: ["calligrapher's supplies"]
  },
  {
    name: "Ágata",
    specie: "changeling",
    class: ["sorcerer"],
    size: "medium",
    originFeat: ["tough"],
    skills: ["deception", "insight", "acrobatics", "history"],
    languages: ["infernal", "primordial"],
    tools: ["calligrapher's supplies"]
  },
  {
    name: "Maximus",
    specie: "human",
    class: ["fighter"],
    size: "medium",
    originFeat: ["alert", "savage attacker"],
    skills: ["athletics", "intimidation", "perception", "survival"],
    languages: ["elvish", "dwarvish"],
    tools: ["dice set"]
  },
  {
    name: "Cleiton",
    specie: "human",
    class: ["fighter"],
    size: "medium",
    originFeat: ["lucky", "tough"],
    skills: ["survival", "nature", "athletics", "perception"],
    languages: ["common sign language", "giant"],
    tools: ["navigator's tools"]
  },
  {
    name: "Ysraa",
    specie: "goliath",
    class: ["fighter"],
    size: "medium",
    originFeat: ["alert"],
    skills: ["perception", "deception", "acrobatics", "survival"],
    languages: ["infernal", "giant"],
    tools: ["smith's tools"]
  },
  {
    name: "Shiro Ryu",
    specie: "human",
    class: ["paladin"],
    size: "medium",
    originFeat: ["tough", "magic initiate"],
    skills: ["insight", "perception", "survival", "intimidation", "persuasion"],
    languages: ["elvish", "celestial"],
    tools: ["smith's tools"],
    notes: ["magic initiate wizard"]
  },
  {
    name: "Serena",
    specie: "tiefling",
    class: ["shaman"],
    size: "medium",
    originFeat: ["magic initiate"],
    skills: ["arcana", "history", "nature", "survival"],
    languages: ["abyssal", "sylvan"],
    tools: ["Calligrapher's Supplies"]
  },
  {
    name: "Alpha",
    specie: "aasimar",
    class: ["cleric"],
    size: "medium",
    originFeat: ["healer"],
    skills: ["arcana", "perception", "religion", "medicine"],
    languages: ["celestial", "abyssal"],
    tools: ["painter's supplies"]
  },
  {
    name: "Lennox",
    specie: "elf",
    class: ["cleric"],
    size: "medium",
    originFeat: ["healer"],
    skills: ["perception", "arcana", "insight", "religion", "medicine"],
    languages: ["elvish", "undercommon"],
    tools: ["calligrapher's supplies"],
    notes: ['elf drow']
  },
  {
    name: "Benji",
    specie: "human",
    class: ["fighter"],
    size: "medium",
    originFeat: ["tough", "magic initiate"],
    skills: ["arcana", "history", "perception", "persuasion", "survival"],
    languages: ["draconic", "giant"],
    tools: ["carpenter's tools"],
    notes: ["magic initiate druid"]
  },
  {
    name: "Kaelen Suri",
    specie: "human",
    class: ["bard"],
    size: "medium",
    originFeat: ["tough", "musician"],
    skills: ["stealth", "acrobatics", "performance", "persuasion", "intimidation", "deception"],
    languages: ["elvish", "dwarvish"],
    tools: ["musical instrument"],
    notes: ["musical instrument - Viol"]
  },
  {
    name: "Rancor",
    specie: "tiefling",
    class: ["ranger"],
    size: "medium",
    originFeat: ["magic initiate"],
    skills: ["acrobatics", "perception", "insight", "stealth", "perception"],
    languages: ["abyssal", "primordial"],
    tools: ["smith's tools"],
    notes: ["magic initiate wizard", "tiefling infernal"]
  },
  {
    name: "Vildamór",
    specie: "elf",
    class: ["fighter"],
    size: "medium",
    originFeat: ["magic initiate"],
    skills: ["perception", "arcana", "religion", "athletics", "insight"],
    languages: ["elvish", "draconic"],
    tools: ["alchemist's Supplies"],
    notes: ["high elf", "magic initiate"]
  },
  {
    name: "Estel",
    specie: "elf",
    class: ["rogue"],
    size: "medium",
    originFeat: ["savage attacker"],
    skills: ["perception", "arcana", "acrobatics", "investigation", "sleight of hand", "stealth"],
    languages: ["elvish", "sylvan", "thieves' cant"],
    tools: ["disguise kit", "thieves' tools"],
    notes: ["wood elf"]
  },
  {
    name: "Ronar",
    specie: "human",
    class: ["cleric"],
    size: "medium",
    originFeat: ["tough", "healer"],
    skills: ["perception", "athletics", "survival", "medicine", "insight"],
    languages: ["dwarvish", "common sign language"],
    tools: [""],
    notes: [""]
  },
  {
    name: "Sylas Kow",
    specie: "human",
    class: ["wizard"],
    size: "medium",
    originFeat: ["magic initiate"],
    skills: ["investigation", "insight", "persuasion", "arcana", "history"],
    languages: ["abyssal", "draconic"],
    tools: ["alchemist's supplies"],
    notes: [""]
  },
  {
    name: "Noah",
    specie: "human",
    class: ["warlock"],
    size: "medium",
    originFeat: ["magic initiate", "tough"],
    skills: ["intimidation", "perception", "survival", "arcana", "deception"],
    languages: ["infernal", "thieves' cant"],
    tools: ["thieves' tools"],
    notes: [""]
  },
  {
    name: "Galria",
    specie: "goliath",
    class: ["barbarian"],
    size: "medium",
    originFeat: ["tough"],
    skills: ["animal handling", "perception", "athletics", "survival"],
    languages: ["giant", "sylvan"],
    tools: ["cartographer's tools"],
    notes: ["goliath stone giant"]
  },
  {
    name: "Wigfrid",
    specie: "human",
    class: ["shaman"],
    size: "medium",
    originFeat: ["tough"],
    skills: ["athletics", "medicine", "insight", "perception", "survival"],
    languages: ["giant", "draconic"],
    tools: ["cook's utensils"],
    notes: [""]
  },
  {
    name: "Valente",
    specie: "tiefling",
    class: ["monk"],
    size: "medium",
    originFeat: ["magic initiate"],
    skills: ["perception", "survival", "acrobatics", "stealth"],
    languages: ["abyssal", "primordial"],
    tools: ["cook's utensils", "weaver's tools"],
    notes: ["magic initiate wizard"]
  },
  {
    name: "Kira",
    specie: "human",
    class: ["rogue"],
    size: "human",
    originFeat: ["magic initiate"],
    skills: ["arcana", "history", "insight", "acrobatics", "investigation", "perception", "stealth"],
    languages: ["abyssal", "infernal"],
    tools: ["disguise kit", "thieves' tools"],
    notes: ["magic initiate wizard"]
  },
  {
    name: "Kravak",
    specie: "orc",
    class: ["barbarian"],
    size: "medium",
    originFeat: ["savage attacker"],
    skills: ["nature", "intimidation", "athletics", "survival"],
    languages: ["elvish", "orc"],
    tools: ["smith's tools"],
    notes: [""]
  },
  {
    name: "Tor'ka",
    specie: "minotaur",
    class: ["shaman"],
    size: "medium",
    originFeat: ["magic initiate"],
    skills: ["perception", "investigation", "insight", "survival"],
    languages: ["primordial", "orc"],
    tools: ["woodcarver's tools"],
    notes: ["magic initiate wizard"]
  },
  {
    name: "Kaira",
    specie: "human",
    class: ["barbarian"],
    size: "medium",
    originFeat: ["savage attacker"],
    skills: ["survival", "stealth", "athletics", "perception"],
    languages: [],
    tools: ["carpenter's tools"],
    notes: [""]
  },
  {
    name: "Kuki",
    specie: "harengon",
    class: ["cleric"],
    size: "small",
    originFeat: ["magic initiate"],
    skills: ["perception", "insight", "religion", "history", "medicine"],
    languages: ["sylvan", "dwarvish"],
    tools: ["herbalism kit"],
    notes: ["magic initiate druid"]
  },
  {
    name: "HD-III",
    specie: "autognome",
    class: ["artificer"],
    size: "small",
    originFeat: ["magic initiate"],
    skills: ["perception", "persuasion", "investigation", "arcana"],
    languages: ["gnomish", "draconic"],
    tools: ["glassblower's tools", "smith's tools", "woodcarver's tools", "thieves' tools", "tinker's tools", "herbalism kit"],
    notes: ["autognome construct kobold", "magic initiate"]
  },
  {
    name: "Traxex",
    specie: "elf",
    class: ["rogue"],
    size: "medium",
    originFeat: ["magic initiate"],
    skills: ["survival", "arcana", "history", "acrobatics", "investigation", "perception", "stealth"],
    languages: ["elvish", "draconic"],
    tools: ["painter's supplies", "thieves' tools"],
    notes: ["elf drow", "magic initiate wizard"]
  },
  {
    name: "Baphomênica",
    specie: "tiefling",
    class: ["bard"],
    size: "medium",
    originFeat: ["skilled"],
    skills: ["acrobatics", "perception", "deception", "history", "persuasion", "performance", "intimidation", "arcana"],
    languages: ["infernal", "abyssal"],
    tools: ["dice set"],
    notes: ["tiefling infernal"]
  },
  {
    name: "Ben",
    specie: "human",
    class: ["paladin"],
    size: "medium",
    originFeat: ["alert", "magic initiate"],
    skills: ["perception", "religion", "insight", "athletics", "persuasion"],
    languages: [],
    tools: ["calligrapher's supplies"],
    notes: ["magic initiate cleric"]
  },
  {
    name: "Psi Psi",
    specie: "tabaxi",
    class: ["barbarian"],
    size: "small",
    originFeat: ["crafter"],
    skills: ["perception", "stealth", "sleight of hand", "animal handling"],
    languages: ["celestial", "primordial"],
    tools: ["smith's tools", "woodcarver's tools", "weaver's tools", "cook's utensils"],
    notes: [""]
  },
  {
    name: "Islogtan Magsdein",
    specie: "goliath",
    class: ["barbarian"],
    size: "medium",
    originFeat: ["savage attacker"],
    skills: ["athletics", "intimidation", "perception", "survival"],
    languages: ["giant", "primordial"],
    tools: ["smith's tools"],
    notes: ["goliath fire"]
  },
  {
    name: "Naamir",
    specie: "aasimar",
    class: ["cleric"],
    size: "medium",
    originFeat: ["healer"],
    skills: ["religion", "medicine", "insight", "history"],
    languages: ["celestial", "infernal"],
    tools: ["calligrapher's supplies"],
    notes: [""]
  },
  {
    name: "Felaris O'llen",
    specie: "goliath",
    class: ["fighter"],
    size: "medium",
    originFeat: ["lucky"],
    skills: ["sleight of hand", "history", "survival", "athletics"],
    languages: ["draconic", "infernal"],
    tools: ["cartographer's tools"],
    notes: ["goliath stone"]
  },
  {
    name: "Raffi",
    specie: "fairy",
    class: ["druid"],
    size: "small",
    originFeat: ["tough"],
    skills: ["animal handling", "nature", "perception", "survival"],
    languages: ["sylvan", "celestial"],
    tools: ["calligrapher's supplies"],
    notes: [""]
  },
  {
    name: "Yoh Asakura",
    specie: "dwarf",
    class: ["shaman"],
    size: "medium",
    originFeat: ["skilled"],
    skills: ["acrobatics", "animal handling", "performance", "investigation", "perception", "survival", "insight"],
    languages: ["dwarvish", "sylvan"],
    tools: ["calligrapher's supplies"],
    notes: [""]
  },
  {
    name: "Luna",
    specie: "tiefling",
    class: ["cleric"],
    size: "medium",
    originFeat: ["magic initiate"],
    skills: ["arcana", "history", "medicine", "religion"],
    languages: ["celestial", "infernal"],
    tools: [""],
    notes: ["magic initiate wizard"]
  },
  {
    name: "Mahad",
    specie: "zongari",
    class: ["wizard"],
    size: "medium",
    originFeat: ["magic initiate"],
    skills: ["insight", "perception", "insight", "religion"],
    languages: ["primordial", "celestial"],
    tools: ["calligrapher's supplies"],
    notes: ["magic initiate cleric"]
  },
  {
    name: "Tiddus",
    specie: "gnome",
    class: ["ranger"],
    size: "small",
    originFeat: ["magic initiate"],
    skills: ["animal handling", "intimidation", "perception", "stealth", "survival"],
    languages: ["gnomish", "undercommon"],
    tools: ["navigator's tools"],
    notes: ["deep gnome", "magic initiate wizard"]
  },
  {
    name: "Albert",
    specie: "human",
    class: ["artificer"],
    size: "medium",
    originFeat: ["tough", "crafter"],
    skills: ["investigation", "persuasion", "arcana", "perception"],
    languages: ["dwarvish", "elvish"],
    tools: ["smith's tools", "thieves' tools", "tinker's tools", "carpenter's tools"],
    notes: [""]
  },
  {
    name: "Pietro",
    specie: "halfling",
    class: ["warlock"],
    size: "small",
    originFeat: ["skilled"],
    skills: ["persuasion", "stealth", "deception", "sleight of hand", "arcana", "investigation"],
    languages: ["halfling", "elvish"],
    tools: ["forgery kit", "thieves' tools"],
    notes: [""]
  },
  {
    name: "Kardrum",
    specie: "dwarf",
    class: ["barbarian"],
    size: "medium",
    originFeat: ["tavern brawler"],
    skills: ["acrobatics", "perception", "survival", "intimidation"],
    languages: ["dwarvish", "orc"],
    tools: ["navigator's tools"],
    notes: [""]
  },
  {
    name: "Yunara",
    specie: "elf",
    class: ["monk"],
    size: "medium",
    originFeat: ["tough"],
    skills: ["perception", "insight", "sleight of hand", "stealth", "acrobatics"],
    languages: ["elvish", "thieves' cant"],
    tools: ["disguise kit"],
    notes: ["elf high"]
  },
  {
    name: "Abigail",
    specie: "human",
    class: ["monk"],
    size: "medium",
    originFeat: ["healer", "tough"],
    skills: ["sleight of hands", "perception", "survival", "acrobatics", "stealth"],
    languages: ["elvish", "sylvan"],
    tools: ["weaver's tools"],
    notes: [""]
  },
  {
    name: "Gertrudes",
    specie: "changeling",
    class: ["wizard"],
    size: "medium",
    originFeat: ["magic initiate"],
    skills: ["persuasion", "insight", "perception", "investigation"],
    languages: ["primordial", "undercommon"],
    tools: ["calligrapher's supplies"],
    notes: ["magic initiate cleric"]
  },
  {
    name: "Usk",
    specie: "dragonborn",
    class: ["barbarian"],
    size: "medium",
    originFeat: ["savage attacker"],
    skills: ["athletics", "perception", "intimidation", "survival"],
    languages: ["draconic", "orc"],
    tools: ["carpenter's tools"],
    notes: [""]
  },
  {
    name: "Dravak",
    specie: "dragonborn",
    class: ["barbarian"],
    size: "medium",
    originFeat: ["tough"],
    skills: ["athletics", "persuasion", "intimidation", "perception"],
    languages: ["common sign language", "draconic"],
    tools: ["brewer's supplies"],
    notes: [""]
  },
  {
    name: "Aizen",
    specie: "human",
    class: ["artificer"],
    size: "medium",
    originFeat: ["luck"],
    skills: ["athletics", "arcana", "insight", "investigation", "persuasion"],
    languages: ["undercommon", "dwarvish", "elvish"],
    tools: ["calligrapher's supplies"],
    notes: [""]
  },
  {
    name: "Adhanji Ekko",
    specie: "dhampir",
    class: ["monk"],
    size: "medium",
    originFeat: ["tavern brawler"],
    skills: ["perception", "survival", "medicine", "acrobatics", "insight", "stealth"],
    languages: ["infernal", "elvish"],
    tools: ["thieves' tools"],
    notes: [""]
  },
  {
    name: "GluGlu",
    specie: "plasmoid",
    class: ["druid"],
    size: "small",
    originFeat: ["magic initiate"],
    skills: ["survival", "medicine", "perception", "nature"],
    languages: ["sylvan", "deep speech"],
    tools: ["poisoner's kit"],
    notes: ["magic initiate wizard"]
  },
  {
    name: "Kael",
    specie: "human",
    class: ["sorcerer"],
    size: "medium",
    originFeat: ["alert"],
    skills: ["perception", "deception", "performance", "intimidation", "persuasion"],
    languages: ["dwarvish", "elvish"],
    tools: ["dice set"],
    notes: [""]
  },
  {
    name: "Zoltan",
    specie: "orc",
    class: ["paladin"],
    size: "medium",
    originFeat: ["savage attacker"],
    skills: ["athletics", "intimidation", "religion", "persuasion"],
    languages: ["orc", "dwarvish"],
    tools: ["dice set"],
    notes: [""]
  },
  {
    name: "Paxó",
    specie: "goliath",
    class: ["cleric"],
    size: "medium",
    originFeat: ["healer"],
    skills: ["medicine", "religion", "history", "persuasion"],
    languages: ["giant", "orc"],
    tools: ["herbalism kit"],
    notes: [""]
  },
  {
    name: "Evendur",
    specie: "human",
    class: ["cleric"],
    size: "medium",
    originFeat: ["magic initiate", "magic initiate"],
    skills: ["perception", "insight", "religion", "history", "medicine"],
    languages: ["elvish", "dwarvish"],
    tools: ["calligrapher's supplies"],
    notes: ["magic initiate wizard e cleric"]
  },
  {
    name: "Ugz",
    specie: "goblin",
    class: ["bard"],
    size: "small",
    originFeat: ["healer"],
    skills: ["insight", "perception", "acrobatics", "persuasion", "stealth"],
    languages: ["goblin", "halfling"],
    tools: ["herbalism kit"],
    notes: [""]
  },
  {
    name: "Ronaldo",
    specie: "human",
    class: ["bard"],
    size: "medium",
    originFeat: ["lucky", "magic initiate"],
    skills: ["persuasion", "acrobatics", "athletics", "stealth"],
    languages: ["draconic", "elvish"],
    tools: [""],
    notes: ["magic initiate wizard"]
  },
  {
    name: "Luli",
    specie: "gnome",
    class: ["paladin"],
    size: "small",
    originFeat: ["magic initiate"],
    skills: ["deception", "animal handling", "persuasion", "athletics"],
    languages: ["gnomish", "sylvan"],
    tools: ["herbalism kit"],
    notes: ["forest gnome", "magic initiate druid"]
  },
  {
    name: "Guy Gadsby",
    specie: "human",
    class: ["wizard"],
    size: "small",
    originFeat: ["lucky", "alert"],
    skills: ["investigation", "perception", "stealth", "arcana", "history"],
    languages: ["common sign language", "undercommon"],
    tools: ["herbalism kit"],
    notes: [""]
  },
  {
    name: "Mirio",
    specie: "goblin",
    class: ["sorcerer"],
    size: "small",
    originFeat: ["magic initiate"],
    skills: ["stealth", "perception", "arcana", "persuasion"],
    languages: ["goblin", "primordial"],
    tools: ["musical instrument"],
    notes: ["magic initiate", "Musical Instrument Lute"]
  },
  {
    name: "Elijah Abdul",
    specie: "tiefling",
    class: ["rogue"],
    size: "medium",
    originFeat: ["skilled"],
    skills: ["athletics", "stealth", "investigation", "deception", "sleight of hand", "acrobatics", "perception", "persuasion", "insight"],
    languages: ["thieves' cant"],
    tools: ["forgery kit", "thieves' tools"],
    notes: ["tiefling infernal"]
  },
  {
    name: "Gorar",
    specie: "aasimar",
    class: ["barbarian"],
    size: "medium",
    originFeat: ["tough"],
    skills: ["intimidation", "survival", "athletics", "perception"],
    languages: ["celestial", "draconic"],
    tools: ["navigator's tools"],
    notes: [""]
  },
  {
    name: "Aldebaran",
    specie: "tiefling",
    class: ["warlock"],
    size: "medium",
    originFeat: ["lucky"],
    skills: ["persuasion", "perception", "deception", "arcana"],
    languages: ["infernal", "orc"],
    tools: ["disguise kit"],
    notes: [""]
  },
  {
    name: "Yu-baba",
    specie: "reborn",
    class: ["shaman"],
    size: "medium",
    originFeat: ["magic initiate"],
    skills: ["insight", "stealth", "perception", "survival"],
    languages: ["dwarvish", "elvish"],
    tools: ["herbalism kit"],
    notes: ["reborn de fairy", "magic initiate wizard"]
  },
  {
    name: "Belladonna",
    specie: "human",
    class: ["monk"],
    size: "medium",
    originFeat: ["oportunista", "tough"],
    skills: ["insight", "deception", "stealth", "acrobatics", "sleight of hand"],
    languages: ["infernal", "draconic"],
    tools: ["alchemist's Supplies"],
    notes: [""]
  },
  {
    name: "Mírio",
    specie: "goblin",
    class: ["sorcerer"],
    size: "small",
    originFeat: ["magic initiate"],
    skills: ["stealth", "perception", "arcana", "persuasion"],
    languages: ["goblin", "primordial"],
    tools: ["musical instrument"],
    notes: ["musical instrument lute", "magic initiate de qual tipo?"]
  },
  {
    name: "Elijah Abdul",
    specie: "tiefling",
    class: ["rogue"],
    size: "medium",
    originFeat: [""],
    skills: ["deception", "sleight of hand", "acrobatics", "perception", "persuasion", "insight"],
    languages: [],
    tools: ["forgery kit", "thieves' tools"],
    notes: [""]
  },
  {
    name: "Gorar Rarogsøn",
    specie: "aasimar",
    class: ["barbarian"],
    size: "medium",
    originFeat: ["tough"],
    skills: ["intimidation", "survival", "athletics", "perception"],
    languages: ["celestial", "draconic"],
    tools: ["navigator's tools"],
    notes: [""]
  },
  {
    name: "Aldebaran",
    specie: "tiefling",
    class: ["warlock"],
    size: "medium",
    originFeat: ["lucky"],
    skills: ["persuasion", "perception", "deception", "arcana"],
    languages: ["infernal", "orc"],
    tools: ["disguise kit"],
    notes: [""]
  },  
  {
    name: "Yu-baba",
    specie: "reborn",
    class: ["shaman"],
    size: "medium",
    originFeat: ["magic initiate"],
    skills: ["insight", "stealth", "perception", "survival"],
    languages: ["dwarvish", "elvish"],
    tools: ["herbalism kit"],
    notes: ["reborn de fairy", "magic initiate wizard"]
  },
  {
    name: "Thalor Tempesmar",
    specie: "human",
    class: ["druid"],
    size: "medium",
    originFeat: ["magic initiate", "tough"],
    skills: ["insight", "deception", "nature", "perception"],
    languages: ["primordial", "sylvan"],
    tools: ["navigator's tools"],
    notes: ["Magic initiate Wizard"]
  },
  {
    name: "Sanguinyus",
    specie: "dragonborn",
    class: ["fighter"],
    size: "medium",
    originFeat: ["magic initiate"],
    skills: ["stealth", "insight", "acrobatics", "perception"],
    languages: ["draconic", "abyssal"],
    tools: ["cartographer's tools"],
    notes: [""]
  },
  {
    name: "John Pathfinder",
    specie: "human",
    class: ["rogue"],
    size: "medium",
    originFeat: ["skilled", "skilled"],
    skills: ["history", "survival", "religion", "animal handling", "medicine", "arcana", "nature", "investigation", "insight", "acrobatics", "sleight of hand"],
    languages: [],
    tools: ["cartographer's tools", "jeweler's tools", "calligrapher's supplies", "thieves' tools"],
    notes: [""]
  },
  {
    name: "Aurora",
    specie: "aasimar",
    class: ["druid"],
    size: "medium",
    originFeat: ["magic initiate"],
    skills: ["stealth", "survival", "medicine", "perception"],
    languages: ["celestial", "common sign language"],
    tools: ["cartographer's tools"],
    notes: ["magic initiate druid"]
  },
  {
    name: "Lirae Varethiel",
    specie: "elf",
    class: ["monk"],
    size: "medium",
    originFeat: ["savage attacker"],
    skills: ["perception", "insight", "religion", "acrobatics", "stealth"],
    languages: ["elvish", "celestial", "infernal", "goblin"],
    tools: ["tinker's tools"],
    notes: ["high elf"]
  },
  {
    name: "Aeren",
    specie: "elf",
    class: ["rogue"],
    size: "medium",
    originFeat: ["lucky"],
    skills: ["perception", "arcana", "history", "acrobatics", "investigation", "sleight of hand", "stealth"],
    languages: ["dwarvish", "draconic", "thieves' cant"],
    tools: ["herbalism kit", "thieves' tools"],
    notes: ["high elf"]
  },
  {
    name: "Patrurgo Bugurgo",
    specie: "bugbear",
    class: ["ranger"],
    size: "medium",
    originFeat: ["alert"],
    skills: ["stelth", "nature", "acrobatics", "perception", "insight", "survival"],
    languages: ["goblin", "undercommon"],
    tools: ["musical instrument"],
    notes: ["musical instrument bagpipes"]
  },
  {
    name: "Minno'Xi Dhyl",
    specie: "elf",
    class: ["ranger"],
    size: "medium",
    originFeat: ["lucky"],
    skills: ["perception", "religion", "acrobatics", "insight", "stealth", "survival"],
    languages: ["celestial", "elvish"],
    tools: ["jeweler's tools"],
    notes: ["high elf"]
  },
  {
    name: "Garro Runcandel",
    specie: "human",
    class: ["paladin"],
    size: "medium",
    originFeat: ["magic initiate", "lucky"],
    skills: ["persuasion", "survival", "perception", "athletics", "intimidation"],
    languages: ["undercommon", "celestial"],
    tools: ["smith's tools"],
    notes: ["magic initiate wizard"]
  },
  {
    name: "Vassa Punho das Cinzas",
    specie: "goliath",
    class: ["monk"],
    size: "medium",
    originFeat: ["lucky"],
    skills: ["stealth", "insight", "acrobatics", "religion"],
    languages: ["giant", "dwarvish"],
    tools: ["thieves' tools", "brewer's supplies"],
    notes: ["goliath fire"]
  },
  {
    name: "Caranthir Maenal",
    specie: "elf",
    class: ["rogue"],
    size: "medium",
    originFeat: ["alert"],
    skills: ["survival", "perception", "stealth", "sleight of hand", "acrobatics", "arcana", "investigation"],
    languages: ["elf", "orc"],
    tools: ["poisoner's kit"],
    notes: [""]
  },
  {
    name: "Seraphina Silvaine",
    specie: "dhampir",
    class: ["rogue"],
    size: "medium",
    originFeat: ["alert"],
    skills: ["investigation", "acrobatics", "perception", "intimidation", "sleight of hand", "stealth"],
    languages: ["draconic", "infernal"],
    tools: ["thieves' tools"],
    notes: [""]
  },
  {
    name: "Thandoril",
    specie: "elf",
    class: ["ranger"],
    size: "medium",
    originFeat: ["savage attacker"],
    skills: ["investigation", "insight", "perception", "survival", "stealth", "athletics"],
    languages: ["elvish", "celestial"],
    tools: [""],
    notes: ["elf drow"]
  },
  {
    name: "Sthurnie",
    specie: "tabaxi",
    class: ["cleric", "fighter"],
    size: "medium",
    originFeat: [""],
    skills: ["religion"],
    languages: [],
    tools: ["woodcarver's tools"],
    notes: [""]
  },
  {
    name: "Severo",
    specie: "goliath",
    class: ["paladin"],
    size: "medium",
    originFeat: ["tough"],
    skills: ["athletics", "intimidation", "insight", "persuasion"],
    languages: [""],
    tools: ["gaming set"],
    notes: ["goliath stone", "Gaming Set: playing cards"]
  },
  {
    name: "Xhan-kizs",
    specie: "bugbear",
    class: ["fighter"],
    size: "medium",
    originFeat: ["alert"],
    skills: ["athletics", "insight", "survival", "stealth", "intimidation"],
    languages: [],
    tools: [],
    notes: [""]
  },
  {
    name: "Rakhar",
    specie: "orc",
    class: ["rogue"],
    size: "medium",
    originFeat: ["magic initiate"],
    skills: ["arcana", "medicine", "deception", "perception", "sleight of hand", "stealth"],
    languages: [""],
    tools: ["cook's utensils", "thieves' tools"],
    notes: ["magic initiate wizard"]
  },



  // {
  //   name: "",
  //   specie: "",
  //   class: [""],
  //   size: "",
  //   originFeat: [""],
  //   skills: [],
  //   languages: [],
  //   tools: [],
  //   notes: [""]
  // },
];

// Variáveis html
let adventurersGuessDiv = document.getElementById('adventurers-guess-div');
let inputGuessContainer = document.getElementById('input-guess-container');
let inputGuess = document.getElementById('input-guess');
let winBanner = document.getElementById('win-banner');
let dropdownGuess = document.getElementById('dropdown-guess');
let tableAdventurers = document.getElementById('adventurer-table');
let imgTodayClassicAdventurer = document.getElementById('img-today-classic-adventurer');
const tableBody = document.querySelector('#adventurer-table tbody');

// Variáveis do jogo
let answers = {
  15: "Maximus",
  16: "Severo",
  17: "Mírio",
  18: "Luli",
  19: "Aeren",
  20: "Lennox",
  21: "Minno'Xi Dhyl",
  22: "Noah",
  23: "Gertrudes"
}

// pickAdventurer();

const guesses = [];
let win = false;
let date = getBRDate();
let todayAnswerName = answers[`${date.day}`];
const todayAnswerIndex = adventurers.findIndex(adventurer => adventurer.name === todayAnswerName);
let todayAnswer = adventurers[todayAnswerIndex];
// TODO: salvar todas as imagens de aventureiros e converter para webp
imgTodayClassicAdventurer.setAttribute("src", `./img/adventurers/${todayAnswerName.toLowerCase()}.webp`);

inputGuess.addEventListener('input', () => {
  // TODO: usar algoritmo para remover comparação com acentos e outros caracteres ao invés de apenas comparar com lowerCase
  const searchedTerm = normalizeString(inputGuess.value);

  dropdownGuess.innerHTML = '';

  if(!searchedTerm) return;
      
  const filteredAdventurers = adventurers.filter(adventurer => normalizeString(adventurer.name).startsWith(searchedTerm));

  if(filteredAdventurers) makeSearchDropdown(filteredAdventurers);

  if(!filteredAdventurers) {
    const guessedAdventurerDiv = document.createElement('div');
    guessedAdventurerDiv.textContent = 'Nenhum aventureiro encontrado.';
    guessedAdventurerDiv.classList.add('guessed-adventurer-div');

    dropdownGuess.appendChild(guessedAdventurerDiv);
  }
});

function pickAdventurer(){
  const sorteado = adventurers[Math.floor(Math.random() * adventurers.length)];
  console.log(sorteado);
}

function makeSearchDropdown(filteredAdventurers){
  filteredAdventurers.forEach(adventurer => {
    if(guesses.includes(adventurer.name)) return;
    const guessedAdventurerDiv = document.createElement('div');
    // TODO: adicionar a imagem do aventureiro aqui antes do nome
    guessedAdventurerDiv.textContent = adventurer.name;
    guessedAdventurerDiv.classList.add('guessed-adventurer-div');

    guessedAdventurerDiv.addEventListener('click', () => {
      addItemOnTable(adventurer);
      inputGuess.value = '';
      dropdownGuess.innerHTML = '';
      
      if(isRightAnswer(adventurer.name)){
        win = true;
        winBanner.classList.remove('hide');
        adventurersGuessDiv.classList.add('hide');
      }

      return;
    });

    dropdownGuess.appendChild(guessedAdventurerDiv);
  });
}

function addItemOnTable(adventurer) {
  if(guesses.includes(adventurer.name)) return;
  guesses.push(adventurer.name);

  let key = {
    name: '',
    specie: '',
    class: [],
    size: '',
    originFeat: '',
    skills: [],
    languages: []
  }

  key.name = adventurer.name === todayAnswer.name ? 'right' : 'wrong';
  key.specie = adventurer.specie === todayAnswer.specie ? 'right' : 'wrong';
  key.class = compareArraysGuessWithAnswer(adventurer.class, todayAnswer.class);
  key.size = adventurer.size === todayAnswer.size ? 'right' : 'wrong';
  key.originFeat = compareArraysGuessWithAnswer(adventurer.originFeat, todayAnswer.originFeat);
  key.skills = compareArraysGuessWithAnswer(adventurer.skills, todayAnswer.skills);
  key.languages = compareArraysGuessWithAnswer(adventurer.languages, todayAnswer.languages);

  const tr = document.createElement('tr');
  
  tr.innerHTML = `
    <td class=${key.name}>${adventurer.name}</td>
    <td class=${key.specie}>${adventurer.specie}</td>
    <td class=${key.class}>${adventurer.class.join(',<br> ')}</td>
    <td class=${key.size}>${adventurer.size}</td>
    <td class=${key.originFeat}>${adventurer.originFeat.join(',<br> ')}</td>
    <td class=${key.skills}>${adventurer.skills.join(',<br> ')}</td>
    <td class=${key.languages}>${adventurer.languages.join(',<br> ')}</td>
  `;

  tableBody.insertBefore(tr, tableBody.firstChild);
  tableAdventurers.classList.remove('hide');
}

function isRightAnswer(name){
  return name.toLowerCase() === todayAnswer.name.toLowerCase() ? true : false;
}

function compareArraysGuessWithAnswer(arr1, arr2) {
  // Verifica se todos os elementos de arr1 estão em arr2 e vice-versa
  const allInBoth = arr1.length === arr2.length &&
    arr1.every(item => arr2.includes(item)) &&
    arr2.every(item => arr1.includes(item));

  if (allInBoth) return 'right';

  // Verifica se há pelo menos um item em comum
  const someCommon = arr1.some(item => arr2.includes(item));
  if (someCommon) return 'parcial';

  // Nenhum item em comum
  return 'wrong';
}

function getBRDate(){
  const nowBrazil = new Date(
    new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' })
  );

  const date = {
    day: nowBrazil.getDate(),
    month: nowBrazil.getMonth() + 1,
    year: nowBrazil.getFullYear()
  }

  return date;
}

function normalizeString(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}