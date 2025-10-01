// Último aventureiro de nível 1 visto foi o Kalius
// Último aventureiro de nível 5 visto foi a Kuki
// Último respec visto foi o Rancor

let adventurers = [
  {
    name: "Narguezelli",
    specie: "aasimar",
    class: ["monk", "ranger"],
    size: "medium",
    originFeat: ["tavern brawler", "ASI"],
    skills: ["acrobatics", "insight", "perception", "stealth"],
    languages: ["common sign language", "celestial"],
    tools: ["calligrapher's supplies", "ASI(dex+2)"]
  },
  {
    name: "Ágata",
    specie: "changeling",
    class: ["sorcerer"],
    size: "medium",
    originFeat: ["tough", "fey touched"],
    skills: ["deception", "insight", "acrobatics", "history"],
    languages: ["infernal", "primordial"],
    tools: ["calligrapher's supplies", "fey touched command"]
  },
  {
    name: "Maximus",
    specie: "human",
    class: ["fighter"],
    size: "medium",
    originFeat: ["alert", "savage attacker"],
    skills: ["athletics", "intimidation", "perception", "survival"],
    languages: ["elvish", "dwarvish"],
    tools: ["gaming set"],
    notes: ["dice set"]
  },
  {
    name: "Cleiton",
    specie: "human",
    class: ["fighter"],
    size: "medium",
    originFeat: ["lucky", "tough", "great weapon master"],
    skills: ["survival", "nature", "athletics", "perception"],
    languages: ["elvish", "giant"],
    tools: ["smith's tools"]
  },
  {
    name: "Ysraa",
    specie: "goliath",
    class: ["fighter", "warlock"],
    size: "medium",
    originFeat: ["alert", "dual wielder"],
    skills: ["perception", "deception", "acrobatics", "survival"],
    languages: ["infernal", "giant"],
    tools: ["smith's tools", "dual wielder dex", "tem tough pela invocação de warlock"]
  },
  {
    name: "Shiro",
    specie: "human",
    class: ["paladin", "warlock"],
    size: "medium",
    originFeat: ["tough", "magic initiate", "fey touched"],
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
    originFeat: ["tough", "war caster"],
    skills: ["arcana", "history", "nature", "survival"],
    languages: ["abyssal", "sylvan"],
    tools: ["Calligrapher's Supplies", "war caster wis+1"]
  },
  {
    name: "Alpha",
    specie: "aasimar",
    class: ["cleric"],
    size: "medium",
    originFeat: ["healer", "ASI"],
    skills: ["arcana", "perception", "religion", "medicine"],
    languages: ["celestial", "abyssal"],
    tools: ["painter's supplies", "ASI(+2WIS)"]
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
    originFeat: ["tough", "magic initiate", "mage slayer"],
    skills: ["arcana", "history", "perception", "persuasion", "survival"],
    languages: ["draconic", "giant"],
    tools: ["smith's tools"],
    notes: ["magic initiate druid", "mage slayer(str+1)"]
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
    class: ["paladin"],
    size: "medium",
    originFeat: ["tough", "mage slayer"],
    skills: ["perception", "survival", "insight", "intimidation"],
    languages: ["abyssal", "primordial"],
    tools: ["smith's tools"],
    notes: ["magic initiate wizard", "tiefling infernal", "ASI(dex+2)"]
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
    originFeat: ["savage attacker", "ASI"],
    skills: ["perception", "arcana", "acrobatics", "investigation", "sleight of hand", "stealth"],
    languages: ["elvish", "sylvan", "thieves' cant"],
    tools: ["disguise kit", "thieves' tools"],
    notes: ["wood elf", "ASI(+2dex)"]
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
    originFeat: ["magic initiate", "skilled", "ASI"],
    skills: ["investigation", "insight", "persuasion", "arcana", "history"],
    languages: ["abyssal", "draconic"],
    tools: ["alchemist's supplies", "ASI(int+2)"],
    notes: [""]
  },
  {
    name: "Noah",
    specie: "human",
    class: ["warlock", "paladin"],
    size: "medium",
    originFeat: ["magic initiate", "savage attacker", "ASI"],
    skills: ["intimidation", "perception", "survival", "arcana", "deception"],
    languages: ["infernal", "thieves' cant"],
    tools: ["thieves' tools"],
    notes: ["ASI(cha+2)", "tough por invocação"]
  },
  {
    name: "Galria",
    specie: "goliath",
    class: ["barbarian"],
    size: "medium",
    originFeat: ["tough", "great weapon master"],
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
    originFeat: ["tough", "war caster"],
    skills: ["athletics", "medicine", "insight", "perception", "survival"],
    languages: ["giant", "draconic"],
    tools: ["cook's utensils"],
    notes: ["war caster(wis+1)"]
  },
  {
    name: "Valente",
    specie: "tiefling",
    class: ["monk"],
    size: "medium",
    originFeat: ["tough", "grappler"],
    skills: ["perception", "survival", "acrobatics", "stealth"],
    languages: ["abyssal", "primordial"],
    tools: ["cook's utensils", "weaver's tools"],
    notes: ["tiefling abyssal", "magic initiate wizard", "grappler(+1dex)"]
  },
  {
    name: "Kira",
    specie: "human",
    class: ["rogue", "sorcerer"],
    size: "medium",
    originFeat: ["magic initiate", "lucky"],
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
    originFeat: ["tough", "war caster"],
    skills: ["perception", "arcana", "insight", "survival"],
    languages: ["primordial", "giant"],
    tools: ["smith's tools"],
    notes: ["war caster wis+1"]
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
    class: ["barbarian"],
    size: "small",
    originFeat: ["tough", "sentinel"],
    skills: ["intimidation", "athletics", "nature", "animal handling", "survival"],
    languages: ["sylvan", "dwarvish"],
    tools: ["herbalism kit"],
    notes: ["barbarian zealot"]
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
    originFeat: ["skilled", "ASI"],
    skills: ["acrobatics", "perception", "deception", "history", "persuasion", "performance", "intimidation", "arcana"],
    languages: ["infernal", "abyssal"],
    tools: ["gaming set"],
    notes: ["tiefling infernal", "dice set", "ASI(+2CHA)"]
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
    originFeat: ["crafter", "dual wielder"],
    skills: ["perception", "stealth", "sleight of hand", "animal handling"],
    languages: ["celestial", "primordial"],
    tools: ["smith's tools", "woodcarver's tools", "weaver's tools", "cook's utensils"],
    notes: ["subclass zealot", "dual wielder(+1str)"]
  },
  {
    name: "Islogtan",
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
    class: ["barbarian"],
    size: "medium",
    originFeat: ["tough", "great weapon master"],
    skills: ["religion", "medicine", "insight", "history"],
    languages: ["celestial", "infernal"],
    tools: ["Smith tools"],
    notes: ["Barbarian Wild Heart"]
  },
  {
    name: "Felaris",
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
    originFeat: ["tavern brawler", "grappler"],
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
    originFeat: ["healer", "tough", "ASI"],
    skills: ["sleight of hands", "perception", "survival", "acrobatics", "stealth"],
    languages: ["elvish", "sylvan"],
    tools: ["weaver's tools"],
    notes: ["subclass mercy", "ASI(+1DEX+1WIS)"]
  },
  {
    name: "Gertrudes",
    specie: "changeling",
    class: ["wizard"],
    size: "medium",
    originFeat: ["skilled", "skill expert"],
    skills: ["persuasion", "insight", "perception", "investigation"],
    languages: ["primordial", "undercommon"],
    tools: ["calligrapher's supplies"],
    notes: ["magic initiate cleric", "skill expert(int+1)"]
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
    tools: ["gaming set"],
    notes: ["dice set"]
  },
  {
    name: "Zoltan",
    specie: "orc",
    class: ["paladin"],
    size: "medium",
    originFeat: ["savage attacker"],
    skills: ["athletics", "intimidation", "religion", "persuasion"],
    languages: ["orc", "dwarvish"],
    tools: ["gaming set"],
    notes: ["dice set"]
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
    originFeat: ["magic initiate", "ASI"],
    skills: ["deception", "animal handling", "persuasion", "athletics"],
    languages: ["gnomish", "sylvan"],
    tools: ["herbalism kit"],
    notes: ["forest gnome", "magic initiate druid", "ASI(+1STR+1CHA)"]
  },
  {
    name: "Guy",
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
    name: "Mírio",
    specie: "goblin",
    class: ["sorcerer"],
    size: "small",
    originFeat: ["magic initiate", "elemental adept"],
    skills: ["stealth", "perception", "arcana", "persuasion"],
    languages: ["goblin", "primordial"],
    tools: ["musical instrument"],
    notes: ["musical instrument lute", "magic initiate de qual tipo?", "elemental adept fogo (+1cha)"]
  },
  {
    name: "Elijah Abdul",
    specie: "tiefling",
    class: ["rogue"],
    size: "medium",
    originFeat: ["skilled", "sharpshooter"],
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
    originFeat: ["tough", "mage slayer"],
    skills: ["intimidation", "survival", "athletics", "perception"],
    languages: ["celestial", "draconic"],
    tools: ["navigator's tools"],
    notes: ["mage slayer(str+1)"]
  },
  {
    name: "Aldebaran",
    specie: "human",
    class: ["warlock", "fighter"],
    size: "medium",
    originFeat: ["magic initiate", "lucky", "warcaster"],
    skills: ["persuasion", "perception", "deception", "arcana"],
    languages: ["infernal", "orc"],
    tools: ["disguise kit"],
    notes: ["magic initiate cleric", "spell sniper(+1cha)", "great old one"]
  },
  {
    name: "Yu-baba",
    specie: "reborn",
    class: ["shaman"],
    size: "medium",
    originFeat: ["magic initiate", "war caster"],
    skills: ["insight", "stealth", "perception", "survival"],
    languages: ["dwarvish", "elvish"],
    tools: ["herbalism kit"],
    notes: ["reborn de fairy", "magic initiate wizard", "war caster(+1wis)"]
  },
  {
    name: "Belladonna",
    specie: "tiefling",
    class: ["monk"],
    size: "medium",
    originFeat: ["tough", "grappler"],
    skills: ["perception", "stealth", "acrobatics", "sleight of hand"],
    languages: ["infernal", "draconic"],
    tools: ["alchemist's Supplies"],
    notes: [""]
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
    name: "Lirae",
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
    class: ["rogue", "wizard"],
    size: "medium",
    originFeat: ["lucky", "war caster"],
    skills: ["perception", "arcana", "history", "acrobatics", "investigation", "sleight of hand", "stealth"],
    languages: ["dwarvish", "draconic", "thieves' cant"],
    tools: ["herbalism kit", "thieves' tools"],
    notes: ["high elf", "war caster int+1"]
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
    originFeat: ["lucky", "war caster"],
    skills: ["perception", "religion", "acrobatics", "insight", "stealth", "survival"],
    languages: ["celestial", "elvish"],
    tools: ["jeweler's tools"],
    notes: ["high elf", "cleric light", "war caster(+1wis)"]
  },
  {
    name: "Garro",
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
    name: "Vassa",
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
    tools: ["herbalism kit"],
    notes: [""]
  },
  {
    name: "Seraphina",
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
    class: ["fighter", "cleric"],
    size: "medium",
    originFeat: ["crafter", "war caster"],
    skills: ["religion"],
    languages: [],
    tools: ["woodcarver's tools"],
    notes: ["subclass trickery", "war caster wis+1"]
  },
  {
    name: "Severo",
    specie: "goliath",
    class: ["paladin"],
    size: "medium",
    originFeat: ["tough", "ASI"],
    skills: ["athletics", "intimidation", "insight", "persuasion"],
    languages: [""],
    tools: ["gaming set"],
    notes: ["goliath stone", "Gaming Set: playing cards", "ASI(str+2)"]
  },
  // {
  //   name: "Xhan-kizs",
  //   specie: "bugbear",
  //   class: ["fighter"],
  //   size: "medium",
  //   originFeat: ["alert"],
  //   skills: ["athletics", "insight", "survival", "stealth", "intimidation"],
  //   languages: [],
  //   tools: [],
  //   notes: [""]
  // },
  // {
  //   name: "Xhanks",
  //   specie: "bugbear",
  //   class: ["barbarian"],
  //   size: "medium",
  //   originFeat: ["alert"],
  //   skills: [],
  //   languages: [],
  //   tools: [],
  //   notes: [""]
  // },
  {
    name: "Rakhar",
    specie: "orc",
    class: ["rogue", "fighter"],
    size: "medium",
    originFeat: ["magic initiate", "skill expert"],
    skills: ["arcana", "medicine", "deception", "perception", "sleight of hand", "stealth"],
    languages: [""],
    tools: ["cook's utensils", "thieves' tools"],
    notes: ["magic initiate wizard", "skill expert(dex+1)"]
  },
  {
    name: "Kael'Thar",
    specie: "aasimar",
    class: ["warlock"],
    size: "medium",
    originFeat: ["tough"],
    skills: ["acrobatics", "perception", "intimidation", "deception"],
    languages: ["celestial", "elvish"],
    tools: [""],
    notes: [""]
  },
  {
    name: "Christopher",
    specie: "aasimar",
    class: ["barbarian"],
    size: "medium",
    originFeat: ["tough"],
    skills: ["stealth", "survival", "athletics", "perception"],
    languages: ["celestial", "giant"],
    tools: ["smith's tools"],
    notes: [""]
  },
  {
    name: "Eiti",
    specie: "aasimar",
    class: ["paladin"],
    size: "medium",
    originFeat: ["tough"],
    skills: ["perception", "survival", "athletics", "intimidation"],
    languages: ["celestial", "giant"],
    tools: ["smith's tools"],
    notes: ["subclass devotion"]
  },
  {
    name: "Erick",
    specie: "goliath",
    class: ["ranger"],
    size: "medium",
    originFeat: ["alert"],
    skills: ["sleight of hand", "stealth", "investigation", "perception", "survival"],
    languages: ["undercommon", "giant"],
    tools: ["thieves' tools"],
    notes: ["goliath frost"]
  },
  {
    name: "Han",
    specie: "gnome",
    class: ["wizard"],
    size: "small",
    originFeat: ["magic initiate"],
    skills: ["arcana", "history", "insight", "medicine"],
    languages: ["gnomish", "elvish"],
    tools: [],
    notes: [""]
  },
  {
    name: "Elric",
    specie: "human",
    class: ["fighter"],
    size: "medium",
    originFeat: ["lucky"],
    skills: ["perception", "insight", "stealth", "acrobactics", "persuasion"],
    languages: ["thieves' cant", "dwarvish"],
    tools: ["thieves' tools"],
    notes: [""]
  },
  {
    name: "Horion",
    specie: "elf",
    class: ["sorcerer"],
    size: "medium",
    originFeat: ["skilled"],
    skills: ["perception", "intimidation", "deception", "investigation", "persuasion", "history", "arcana", "insight"],
    languages: ["elf", "draconic"],
    tools: ["gaming set"],
    notes: ["high elf", "dice set"]
  },
  {
    name: "Belldran",
    specie: "dwarf",
    class: ["paladin"],
    size: "medium",
    originFeat: ["magic initiate"],
    skills: ["insight", "religion", "athletics", "persuasion"],
    languages: ["celestial", "primordial"],
    tools: ["calligrapher's supplies"],
    notes: ["duergar", "magic initiate cleric"]
  },
  {
    name: "Zé da Manga",
    specie: "dwarf",
    class: ["druid"],
    size: "medium",
    originFeat: ["tough"],
    skills: ["medicine", "animal handling", "perception", "nature"],
    languages: ["dwarvish", "sylvan", "druidc"],
    tools: ["carpenter's tools"],
    notes: [""]
  },
  {
    name: "Mug",
    specie: "orc",
    class: ["druid"],
    size: "medium",
    originFeat: ["magic initiate"],
    skills: ["survival", "stealth", "insight", "nature"],
    languages: ["orc"],
    tools: ["cartographer's tools"],
    notes: ["magic initiate druid"]
  },
  {
    name: "Marquês de Lorenzo",
    specie: "elf",
    class: ["sorcerer"],
    size: "medium",
    originFeat: ["alert"],
    skills: ["perception", "arcana", "insight", "deception", "persuasion"],
    languages: ["elvish", "draconic"],
    tools: ["thieves' tools"],
    notes: ["high elf"]
  },
  {
    name: "Zurgo",
    specie: "orc",
    class: ["cleric"],
    size: "medium",
    originFeat: ["tough"],
    skills: ["athletics", "perception", "insight", "religion"],
    languages: ["orc", "celestial"],
    tools: ["cook's utensils"],
    notes: [""]
  },
  {
    name: "Dumbo",
    specie: "halfling",
    class: ["rogue"],
    size: "small",
    originFeat: ["alert"],
    skills: ["acrobatics", "insight", "perception", "stealth"],
    languages: ["halfling", "goblin"],
    tools: ["thieves' tools"],
    notes: [""]
  },
  {
    name: "Bramble",
    specie: "harengon",
    class: ["fighter"],
    size: "medium",
    originFeat: ["musician"],
    skills: ["performance", "acrobatics", "history", "persuasion"],
    languages: ["sylvan", "goblin"],
    tools: ["musical instrument"],
    notes: ["musical instrument flute"]
  },
  {
    name: "Dante",
    specie: "halfling",
    class: ["barbarian"],
    size: "small",
    originFeat: ["savage attacker"],
    skills: ["intimidation", "athletics", "survival", "perception"],
    languages: ["halfling", "druidic"],
    tools: ["gaming set"],
    notes: ["gaming set: playing cards"]
  },
  {
    name: "Gherman",
    specie: "halfling",
    class: ["fighter"],
    size: "small",
    originFeat: ["alert"],
    skills: ["survival", "history", "perception", "athletics"],
    languages: ["halfling", "elvish"],
    tools: ["thieves' tools"],
    notes: [""]
  },
  {
    name: "Lyzander",
    specie: "Thri-kreen",
    class: ["ranger"],
    size: "medium",
    originFeat: ["alert"],
    skills: ["stealth", "sleight of hand", "investigation", "survival", "perception"],
    languages: ["draconic", "abyssal"],
    tools: ["thieves' tools"],
    notes: [""]
  },
  {
    name: "Arthas",
    specie: "human",
    class: ["cleric"],
    size: "medium",
    originFeat: ["magic initiate", "healer"],
    skills: ["insight", "religion"],
    languages: ["celestial", "infernal"],
    tools: ["smith's tools"],
    notes: [""]
  },
  {
    name: "Kael Draven",
    specie: "human",
    class: ["fighter"],
    size: "medium",
    originFeat: ["savage attacker"],
    skills: ["stealth", "athletics", "intimidation", "perception"],
    languages: ["dwarvish", "elvish"],
    tools: ["gaming set"],
    notes: ["gaming set: playing cards"]
  },
  {
    name: "Drised",
    specie: "elf",
    class: ["ranger"],
    size: "medium",
    originFeat: ["magic initiate"],
    skills: ["animal handling", "athletics", "perception", "stealth", "survival", "insight"],
    languages: ["elvish", "druidic"],
    tools: ["cartographer's tools"],
    notes: ["forest elf, ele chamou de silvestre", "magic initiate druid"]
  },
  {
    name: "Turuk",
    specie: "human",
    class: ["wizard"],
    size: "medium",
    originFeat: ["lucky", "alert"],
    skills: ["perception", "sleight of hand", "stealth", "arcana", "religion"],
    languages: ["undercommon", "celestial"],
    tools: ["thieves' tools"],
    notes: [""]
  },
  {
    name: "Kalius",
    specie: "dragonborn",
    class: ["wizard"],
    size: "medium",
    originFeat: ["magic initiate"],
    skills: ["history", "religion", "arcane", "investigation"],
    languages: ["dragonborn", "elvish"],
    tools: ["calligrapher's supplies"],
    notes: ["magic initiate cleric"]
  },
  {
    name: "Lyra",
    specie: "gnome",
    class: ["bard"],
    size: "small",
    originFeat: ["magic initiate"],
    skills: ["prestidigitation", "perception", "performance", "persuasion", "deception"],
    languages: ["gnomish", "elvish"],
    tools: ["smith's tools"],
    notes: ["bard valor", "magic initiate wizard"]
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
  29: "Garro",
  30: "Gorar",
  01: "Rakhar",
  02: "Kardrum",
  03: "Eiti",
  04: "Han",
  05: "Tiddus",
  06: "Lennox",
  07: "Ronar",
  08: "GluGlu",
  09: "Kaelen Suri",
  10: "Caranthir Maenal",
  11: "Kravak",
  12: "Ben",
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
      addRowOnTable(adventurer);
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

function addRowOnTable(adventurer) {
  if(guesses.includes(adventurer.name)) return;
  guesses.push(adventurer.name);

  // Key significa se a resposta é certa, errada ou parcial.
  // TODO: pensar se existe algum nome melhor do que key para substituir
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
    `;
  
  // TODO: refatorar esse código removendo a repetição das funções
  
  let cellText = '';

  cellText = key.class === "parcial" ? makeHtmlForPartialAnswer('class', adventurer.class) : `${adventurer.class.join('<br>')}`;
  tr.innerHTML += `<td class=${key.class}>${cellText}</td>`;

  tr.innerHTML += `<td class=${key.size}>${adventurer.size}</td>`;

  cellText = key.originFeat === "parcial" ? makeHtmlForPartialAnswer('originFeat', adventurer.originFeat) : `${adventurer.originFeat.join('<br>')}`;
  tr.innerHTML += `<td class=${key.originFeat}>${cellText}</td>`;

  cellText = key.skills === "parcial" ? makeHtmlForPartialAnswer('skills', adventurer.skills) : `${adventurer.skills.join('<br>')}`;
  tr.innerHTML += `<td class=${key.skills}>${cellText}</td>`;

  cellText = key.languages === "parcial" ? makeHtmlForPartialAnswer('languages', adventurer.languages) : `${adventurer.languages.join('<br>')}`;
  tr.innerHTML += `<td class=${key.languages}>${cellText}</td>`;

  tableBody.insertBefore(tr, tableBody.firstChild);
  tableAdventurers.classList.remove('hide');

  function makeHtmlForPartialAnswer(cellTitle, cellContent){
    const itensWithColorCode = [];
    for(item of cellContent){
      if(todayAnswer[cellTitle].includes(item)){
        itensWithColorCode.push(`<span class="right-item-parcial">${item}</span>`);
      } else {
        itensWithColorCode.push(`<span class="wrong-item-parcial">${item}</span>`);
      }
    }
    return itensWithColorCode.join('<br>');
  }
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