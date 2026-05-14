// ==========================================
// 1. BANCOS DE DADOS
// ==========================================

const dbKillers = [
    { id: "trapper", nome: "The Trapper", genero: "Masculino", raio: "32m", vel: "4.6", range: "Melee", altura: "Alta", origem: "Norte-Americano", ano: 2016 },
    { id: "wraith", nome: "The Wraith", genero: "Masculino", raio: "32m", vel: "4.6", range: "Melee", altura: "Alta", origem: "Nigeriano", ano: 2016 },
    { id: "hillbilly", nome: "The Hillbilly", genero: "Masculino", raio: "32m", vel: "4.6", range: "Melee", altura: "Alta", origem: "Norte-Americano", ano: 2016 },
    { id: "nurse", nome: "The Nurse", genero: "Feminino", raio: "32m", vel: "3.85", range: "Melee", altura: "Média", origem: "Norte-Americana", ano: 2016 },
    { id: "shape", nome: "The Shape", genero: "Masculino", raio: "16m/32m", vel: "4.2/4.6", range: "Melee", altura: "Alta", origem: "Norte-Americano", ano: 2016 },
    { id: "hag", nome: "The Hag", genero: "Feminino", raio: "24m", vel: "4.4", range: "Melee", altura: "Baixa", origem: "Norte-Americana", ano: 2016 },
    { id: "doctor", nome: "The Doctor", genero: "Masculino", raio: "32m", vel: "4.6", range: "Melee/Ranged", altura: "Alta", origem: "Norte-Americano", ano: 2017 },
    { id: "huntress", nome: "The Huntress", genero: "Feminino", raio: "24m", vel: "4.4", range: "Melee/Ranged", altura: "Alta", origem: "Russa", ano: 2017 },
    { id: "cannibal", nome: "The Cannibal", genero: "Masculino", raio: "32m", vel: "4.6", range: "Melee", altura: "Alta", origem: "Norte-Americano", ano: 2017 },
    { id: "nightmare", nome: "The Nightmare", genero: "Masculino", raio: "32m", vel: "4.6", range: "Melee", altura: "Média", origem: "Norte-Americano", ano: 2017 },
    { id: "pig", nome: "The Pig", genero: "Feminino", raio: "32m", vel: "4.6/3.6", range: "Melee", altura: "Média", origem: "Norte-Americana", ano: 2018 },
    { id: "clown", nome: "The Clown", genero: "Masculino", raio: "32m", vel: "4.6", range: "Melee/Ranged", altura: "Alta", origem: "Norte-Americano", ano: 2018 },
    { id: "spirit", nome: "The Spirit", genero: "Feminino", raio: "24m", vel: "4.4", range: "Melee", altura: "Média", origem: "Japonesa", ano: 2018 },
    { id: "legion", nome: "The Legion", genero: "Outro", raio: "32m", vel: "4.6/5.28", range: "Melee", altura: "Média", origem: "Canadense", ano: 2018 },
    { id: "plague", nome: "The Plague", genero: "Feminino", raio: "32m", vel: "4.6", range: "Melee/Ranged", altura: "Alta", origem: "Babilônica", ano: 2019 },
    { id: "ghostface", nome: "The Ghost Face", genero: "Masculino", raio: "32m", vel: "4.6/3.6", range: "Melee", altura: "Média", origem: "Norte-Americano", ano: 2019 },
    { id: "demogorgon", nome: "The Demogorgon", genero: "Outro", raio: "32m", vel: "4.6", range: "Melee", altura: "Alta", origem: "Desconhecida", ano: 2019 },
    { id: "oni", nome: "The Oni", genero: "Masculino", raio: "32m", vel: "4.6", range: "Melee", altura: "Alta", origem: "Japonês", ano: 2019 },
    { id: "deathslinger", nome: "The Deathslinger", genero: "Masculino", raio: "32m", vel: "4.4", range: "Melee/Ranged", altura: "Alta", origem: "Norte-Americano", ano: 2020 },
    { id: "executioner", nome: "The Executioner", genero: "Masculino", raio: "32m", vel: "4.6", range: "Melee/Ranged", altura: "Alta", origem: "Desconhecida", ano: 2020 },
    { id: "blight", nome: "The Blight", genero: "Masculino", raio: "32m", vel: "4.4", range: "Melee", altura: "Média", origem: "Escocês", ano: 2020 },
    { id: "twins", nome: "The Twins", genero: "Outro", raio: "32m", vel: "4.6/6.0", range: "Melee", altura: "Alta/Baixa", origem: "Francesa", ano: 2020 },
    { id: "trickster", nome: "The Trickster", genero: "Masculino", raio: "24m", vel: "4.4", range: "Melee/Ranged", altura: "Média", origem: "Sul-Coreano", ano: 2021 },
    { id: "nemesis", nome: "The Nemesis", genero: "Masculino", raio: "32m", vel: "4.6", range: "Melee/Ranged", altura: "Alta", origem: "Desconhecida", ano: 2021 },
    { id: "cenobite", nome: "The Cenobite", genero: "Masculino", raio: "32m", vel: "4.6", range: "Melee/Ranged", altura: "Alta", origem: "Desconhecida", ano: 2021 },
    { id: "artist", nome: "The Artist", genero: "Feminino", raio: "32m", vel: "4.6", range: "Melee/Ranged", altura: "Alta", origem: "Chilena", ano: 2021 },
    { id: "onryo", nome: "The Onryō", genero: "Feminino", raio: "24m", vel: "4.6", range: "Melee", altura: "Baixa", origem: "Japonesa", ano: 2022 },
    { id: "dredge", nome: "The Dredge", genero: "Outro", raio: "32m", vel: "4.6", range: "Melee", altura: "Alta", origem: "Desconhecida", ano: 2022 },
    { id: "mastermind", nome: "The Mastermind", genero: "Masculino", raio: "40m", vel: "4.6", range: "Melee", altura: "Média", origem: "Norte-Americano", ano: 2022 },
    { id: "knight", nome: "The Knight", genero: "Masculino", raio: "32m", vel: "4.6", range: "Melee", altura: "Alta", origem: "Húngaro", ano: 2022 },
    { id: "skullmerchant", nome: "The Skull Merchant", genero: "Feminino", raio: "32m", vel: "4.6", range: "Melee", altura: "Média", origem: "Brasileira", ano: 2023 },
    { id: "singularity", nome: "The Singularity", genero: "Outro", raio: "32m", vel: "4.6", range: "Melee/Ranged", altura: "Alta", origem: "Desconhecida", ano: 2023 },
    { id: "xenomorph", nome: "The Xenomorph", genero: "Outro", raio: "32m", vel: "4.6", range: "Melee/Ranged", altura: "Alta", origem: "Desconhecida", ano: 2023 },
    { id: "goodguy", nome: "The Good Guy", genero: "Masculino", raio: "16m", vel: "4.4", range: "Melee", altura: "Baixa", origem: "Norte-Americano", ano: 2023 },
    { id: "unknown", nome: "The Unknown", genero: "Outro", raio: "32m", vel: "4.6", range: "Melee/Ranged", altura: "Média", origem: "Desconhecida", ano: 2024 },
    { id: "lich", nome: "The Lich", genero: "Masculino", raio: "32m", vel: "4.6", range: "Melee/Ranged", altura: "Alta", origem: "Desconhecida", ano: 2024 },
    { id: "darklord", nome: "The Dark Lord", genero: "Masculino", raio: "32m", vel: "4.6", range: "Melee/Ranged", altura: "Alta", origem: "Romeno", ano: 2024 },
    { id: "houndmaster", nome: "The Houndmaster", genero: "Feminino", raio: "32m", vel: "4.6", range: "Melee/Ranged", altura: "Média", origem: "Britânica", ano: 2024 },
    { id: "springtrap", nome: "The Animatronic", genero: "Masculino", raio: "32m", vel: "4.6", range: "Melee", altura: "Alta", origem: "Norte-Americano", ano: 2025 },
    { id: "krasue", nome: "The Krasue", genero: "Feminino", raio: "32m", vel: "4.6", range: "Melee", altura: "Média", origem: "Tailandesa", ano: 2025 },
    { id: "first", nome: "The First", genero: "Masculino", raio: "32m", vel: "4.6", range: "Melee", altura: "Alta", origem: "Norte-Americano", ano: 2026 },
    { id: "ghoul", nome: "The Ghoul", genero: "Masculino", raio: "32m", vel: "4.6", range: "Melee", altura: "Média", origem: "Japonês", ano: 2025 }
];

const dbPerksKiller = [
    { id: "agitation", nome: "Agitation", dono: "The Trapper" },
    { id: "alien-instinct", nome: "Alien Instinct", dono: "The Xenomorph" },
    { id: "all-shaking-thunder", nome: "All-Shaking Thunder", dono: "The Houndmaster" },
    { id: "a-nurses-calling", nome: "A Nurse's Calling", dono: "The Nurse" },
    { id: "awakened-awareness", nome: "Awakened Awareness", dono: "The Mastermind" },
    { id: "bamboozle", nome: "Bamboozle", dono: "The Clown" },
    { id: "barbecue-chili", nome: "Barbecue & Chili", dono: "The Cannibal" },
    { id: "batteries-included", nome: "Batteries Included", dono: "The Good Guy" },
    { id: "beast-of-prey", nome: "Beast of Prey", dono: "The Huntress" },
    { id: "bitter-murmur", nome: "Bitter Murmur", dono: "Geral" },
    { id: "blood-echo", nome: "Blood Echo", dono: "The Oni" },
    { id: "bloodhound", nome: "Bloodhound", dono: "The Wraith" },
    { id: "blood-warden", nome: "Blood Warden", dono: "The Nightmare" },
    { id: "brutal-strength", nome: "Brutal Strength", dono: "The Trapper" },
    { id: "call-of-brine", nome: "Call of Brine", dono: "The Onryō" },
    { id: "corrupt-intervention", nome: "Corrupt Intervention", dono: "The Plague" },
    { id: "coulrophobia", nome: "Coulrophobia", dono: "The Clown" },
    { id: "cruel-limits", nome: "Cruel Limits", dono: "The Demogorgon" },
    { id: "dark-arrogance", nome: "Dark Arrogance", dono: "The Lich" },
    { id: "dark-devotion", nome: "Dark Devotion", dono: "The Plague" },
    { id: "darkness-revealed", nome: "Darkness Revealed", dono: "The Dredge" },
    { id: "deadlock", nome: "Deadlock", dono: "The Cenobite" },
    { id: "dead-mans-switch", nome: "Dead Man's Switch", dono: "The Deathslinger" },
    { id: "deathbound", nome: "Deathbound", dono: "The Executioner" },
    { id: "deerstalker", nome: "Deerstalker", dono: "Geral" },
    { id: "discordance", nome: "Discordance", dono: "The Legion" },
    { id: "dissolution", nome: "Dissolution", dono: "The Dredge" },
    { id: "distressing", nome: "Distressing", dono: "Geral" },
    { id: "dominance", nome: "Dominance", dono: "The Dark Lord" },
    { id: "dragons-grip", nome: "Dragon's Grip", dono: "The Blight" },
    { id: "dying-light", nome: "Dying Light", dono: "The Shape" },
    { id: "eruption", nome: "Eruption", dono: "The Nemesis" },
    { id: "fire-up", nome: "Fire Up", dono: "The Nightmare" },
    { id: "forced-hesitation", nome: "Forced Hesitation", dono: "The Singularity" },
    { id: "forced-penance", nome: "Forced Penance", dono: "The Executioner" },
    { id: "forever-entwined", nome: "Forever Entwined", dono: "The Animatronic" },
    { id: "franklins-demise", nome: "Franklin's Demise", dono: "The Cannibal" },
    { id: "friends-til-the-end", nome: "Friends 'Til the End", dono: "The Good Guy" },
    { id: "furtive-chase", nome: "Furtive Chase", dono: "The Ghost Face" },
    { id: "game-afoot", nome: "Game Afoot", dono: "The Skull Merchant" },
    { id: "gearhead", nome: "Gearhead", dono: "The Deathslinger" },
    { id: "genetic-limits", nome: "Genetic Limits", dono: "The Singularity" },
    { id: "grim-embrace", nome: "Grim Embrace", dono: "The Artist" },
    { id: "haywire", nome: "Haywire", dono: "The Animatronic" },
    { id: "help-wanted", nome: "Help Wanted", dono: "The Animatronic" },
    { id: "hex-blood-favor", nome: "Hex: Blood Favor", dono: "The Blight" },
    { id: "hex-crowd-control", nome: "Hex: Crowd Control", dono: "The Trickster" },
    { id: "hex-devour-hope", nome: "Hex: Devour Hope", dono: "The Hag" },
    { id: "hex-face-the-darkness", nome: "Hex: Face the Darkness", dono: "The Knight" },
    { id: "hex-haunted-ground", nome: "Hex: Haunted Ground", dono: "The Spirit" },
    { id: "hex-hive-mind", nome: "Hex: Hive Mind", dono: "The First" },
    { id: "hex-huntress-lullaby", nome: "Hex: Huntress Lullaby", dono: "The Huntress" },
    { id: "hex-no-one-escapes-death", nome: "Hex: No One Escapes Death", dono: "Geral" },
    { id: "hex-nothing-but-misery", nome: "Hex: Nothing But Misery", dono: "The Ghoul" },
    { id: "hex-overture-of-doom", nome: "Hex: Overture of Doom", dono: "The Krasue" },
    { id: "hex-pentimento", nome: "Hex: Pentimento", dono: "The Artist" },
    { id: "hex-plaything", nome: "Hex: Plaything", dono: "The Cenobite" },
    { id: "hex-retribution", nome: "Hex: Retribution", dono: "The Deathslinger" },
    { id: "hex-the-third-seal", nome: "Hex: The Third Seal", dono: "The Hag" },
    { id: "hex-thrill-of-the-hunt", nome: "Hex: Thrill of the Hunt", dono: "Geral" },
    { id: "hex-two-can-play", nome: "Hex: Two Can Play", dono: "The Good Guy" },
    { id: "hex-undying", nome: "Hex: Undying", dono: "The Blight" },
    { id: "hex-wretched-fate", nome: "Hex: Wretched Fate", dono: "The Dark Lord" },
    { id: "hoarder", nome: "Hoarder", dono: "The Twins" },
    { id: "hubris", nome: "Hubris", dono: "The Knight" },
    { id: "human-greed", nome: "Human Greed", dono: "The Dark Lord" },
    { id: "hysteria", nome: "Hysteria", dono: "The Nemesis" },
    { id: "im-all-ears", nome: "I'm All Ears", dono: "The Ghost Face" },
    { id: "infectious-fright", nome: "Infectious Fright", dono: "The Plague" },
    { id: "insidious", nome: "Insidious", dono: "Geral" },
    { id: "iron-maiden", nome: "Iron Maiden", dono: "The Legion" },
    { id: "knock-out", nome: "Knock Out", dono: "The Cannibal" },
    { id: "languid-touch", nome: "Languid Touch", dono: "The Lich" },
    { id: "lethal-pursuer", nome: "Lethal Pursuer", dono: "The Nemesis" },
    { id: "leverage", nome: "Leverage", dono: "The Skull Merchant" },
    { id: "lightborn", nome: "Lightborn", dono: "The Hillbilly" },
    { id: "machine-learning", nome: "Machine Learning", dono: "The Singularity" },
    { id: "mad-grit", nome: "Mad Grit", dono: "The Legion" },
    { id: "make-your-choice", nome: "Make Your Choice", dono: "The Pig" },
    { id: "merciless-storm", nome: "Merciless Storm", dono: "The Onryō" },
    { id: "mindbreaker", nome: "Mindbreaker", dono: "The Demogorgon" },
    { id: "monitor-abuse", nome: "Monitor and Abuse", dono: "The Doctor" },
    { id: "nemesis", nome: "Nemesis", dono: "The Oni" },
    { id: "none-are-free", nome: "None Are Free", dono: "The Ghoul" },
    { id: "no-quarter", nome: "No Quarter", dono: "The Houndmaster" },
    { id: "no-way-out", nome: "No Way Out", dono: "The Trickster" },
    { id: "nowhere-to-hide", nome: "Nowhere to Hide", dono: "The Knight" },
    { id: "overcharge", nome: "Overcharge", dono: "The Doctor" },
    { id: "overwhelming-presence", nome: "Overwhelming Presence", dono: "The Doctor" },
    { id: "phantom-fear", nome: "Phantom Fear", dono: "The Animatronic" },
    { id: "play-with-your-food", nome: "Play with Your Food", dono: "The Shape" },
    { id: "pop-goes-the-weasel", nome: "Pop Goes the Weasel", dono: "The Clown" },
    { id: "predator", nome: "Predator", dono: "The Wraith" },
    { id: "rancor", nome: "Rancor", dono: "The Spirit" },
    { id: "rapid-brutality", nome: "Rapid Brutality", dono: "The Xenomorph" },
    { id: "ravenous", nome: "Ravenous", dono: "The Krasue" },
    { id: "remember-me", nome: "Remember Me", dono: "The Nightmare" },
    { id: "scourge-hook-floods-of-rage", nome: "Scourge Hook: Floods of Rage", dono: "The Onryō" },
    { id: "scourge-hook-gift-of-pain", nome: "Scourge Hook: Gift of Pain", dono: "The Cenobite" },
    { id: "scourge-hook-hangmans-trick", nome: "Scourge Hook: Hangman's Trick", dono: "The Pig" },
    { id: "scourge-hook-jagged-compass", nome: "Scourge Hook: Jagged Compass", dono: "The Houndmaster" },
    { id: "scourge-hook-monstrous-shrine", nome: "Scourge Hook: Monstrous Shrine", dono: "Geral" },
    { id: "scourge-hook-pain-resonance", nome: "Scourge Hook: Pain Resonance", dono: "The Artist" },
    { id: "secret-project", nome: "Secret Project", dono: "The First" },
    { id: "septic-touch", nome: "Septic Touch", dono: "The Dredge" },
    { id: "shadowborn", nome: "Shadowborn", dono: "The Wraith" },
    { id: "shattered-hope", nome: "Shattered Hope", dono: "Geral" },
    { id: "sloppy-butcher", nome: "Sloppy Butcher", dono: "Geral" },
    { id: "spies-from-the-shadows", nome: "Spies from the Shadows", dono: "Geral" },
    { id: "spirit-fury", nome: "Spirit Fury", dono: "The Spirit" },
    { id: "starstruck", nome: "Starstruck", dono: "The Trickster" },
    { id: "stridor", nome: "Stridor", dono: "The Nurse" },
    { id: "superior-anatomy", nome: "Superior Anatomy", dono: "The Mastermind" },
    { id: "surge", nome: "Surge", dono: "The Demogorgon" },
    { id: "surveillance", nome: "Surveillance", dono: "The Pig" },
    { id: "terminus", nome: "Terminus", dono: "The Mastermind" },
    { id: "territorial-imperative", nome: "Territorial Imperative", dono: "The Huntress" },
    { id: "thanatophobia", nome: "Thanatophobia", dono: "The Nurse" },
    { id: "thrilling-tremors", nome: "Thrilling Tremors", dono: "The Ghost Face" },
    { id: "thwack", nome: "Thwack!", dono: "The Skull Merchant" },
    { id: "tinkerer", nome: "Tinkerer", dono: "The Hillbilly" },
    { id: "trail-of-torment", nome: "Trail of Torment", dono: "The Executioner" },
    { id: "turn-back-the-clock", nome: "Turn Back The Clock", dono: "The First" },
    { id: "ultimate-weapon", nome: "Ultimate Weapon", dono: "The Xenomorph" },
    { id: "unbound", nome: "Unbound", dono: "The Unknown" },
    { id: "undone", nome: "Undone", dono: "The Unknown" },
    { id: "unforeseen", nome: "Unforeseen", dono: "The Unknown" },
    { id: "unnerving-presence", nome: "Unnerving Presence", dono: "The Trapper" },
    { id: "wandering-eye", nome: "Wandering Eye", dono: "The Krasue" },
    { id: "weave-attunement", nome: "Weave Attunement", dono: "The Lich" },
    { id: "whispers", nome: "Whispers", dono: "Geral" },
    { id: "zanshin-tactics", nome: "Zanshin Tactics", dono: "The Oni" }
];

const dbPerksSurv = [
    { id: "ace-in-the-hole", nome: "Ace in the Hole", dono: "Ace Visconti" },
    { id: "adrenaline", nome: "Adrenaline", dono: "Meg Thomas" },
    { id: "aftercare", nome: "Aftercare", dono: "Jeff Johansen" },
    { id: "alert", nome: "Alert", dono: "Feng Min" },
    { id: "any-means-necessary", nome: "Any Means Necessary", dono: "Yui Kimura" },
    { id: "a-place-for-us", nome: "A Place For Us", dono: "Kwon Tae-Young" },
    { id: "apocalyptic-ingenuity", nome: "Apocalyptic Ingenuity", dono: "Rick Grimes" },
    { id: "appraisal", nome: "Appraisal", dono: "Élodie Rakoto" },
    { id: "autodidact", nome: "Autodidact", dono: "Adam Francis" },
    { id: "babysitter", nome: "Babysitter", dono: "Steve Harrington" },
    { id: "background-player", nome: "Background Player", dono: "Renato Lyra" },
    { id: "bada-bada-boom", nome: "Bada Bada Boom", dono: "Dustin Henderson" },
    { id: "balanced-landing", nome: "Balanced Landing", dono: "Nea Karlsson" },
    { id: "bardic-inspiration", nome: "Bardic Inspiration", dono: "Aestri Yazar" },
    { id: "better-than-new", nome: "Better than New", dono: "Rebecca Chambers" },
    { id: "better-together", nome: "Better Together", dono: "Nancy Wheeler" },
    { id: "bite-the-bullet", nome: "Bite the Bullet", dono: "Leon S. Kennedy" },
    { id: "blast-mine", nome: "Blast Mine", dono: "Jill Valentine" },
    { id: "blood-pact", nome: "Blood Pact", dono: "Cheryl Mason" },
    { id: "blood-rush", nome: "Blood Rush", dono: "Renato Lyra" },
    { id: "boil-over", nome: "Boil Over", dono: "Kate Denson" },
    { id: "bond", nome: "Bond", dono: "Dwight Fairfield" },
    { id: "boon-circle-of-healing", nome: "Boon: Circle of Healing", dono: "Mikaela Reid" },
    { id: "boon-dark-theory", nome: "Boon: Dark Theory", dono: "Yoichi Asakawa" },
    { id: "boon-exponential", nome: "Boon: Exponential", dono: "Jonah Vasquez" },
    { id: "boon-illumination", nome: "Boon: Illumination", dono: "Alan Wake" },
    { id: "boon-shadow-step", nome: "Boon: Shadow Step", dono: "Mikaela Reid" },
    { id: "borrowed-time", nome: "Borrowed Time", dono: "Bill Overbeck" },
    { id: "botany-knowledge", nome: "Botany Knowledge", dono: "Claudette Morel" },
    { id: "breakdown", nome: "Breakdown", dono: "Jeff Johansen" },
    { id: "breakout", nome: "Breakout", dono: "Yui Kimura" },
    { id: "buckle-up", nome: "Buckle Up", dono: "Ash Williams" },
    { id: "built-to-last", nome: "Built to Last", dono: "Felix Richter" },
    { id: "camaraderie", nome: "Camaraderie", dono: "Steve Harrington" },
    { id: "champion-of-light", nome: "Champion of Light", dono: "Alan Wake" },
    { id: "change-of-plan", nome: "Change of Plan", dono: "Dustin Henderson" },
    { id: "chemical-trap", nome: "Chemical Trap", dono: "Ellen Ripley" },
    { id: "clairvoyance", nome: "Clairvoyance", dono: "Mikaela Reid" },
    { id: "clean-break", nome: "Clean Break", dono: "Taurie Cain" },
    { id: "come-and-get-me", nome: "Come and Get Me!", dono: "Rick Grimes" },
    { id: "conviction", nome: "Conviction", dono: "Michonne" },
    { id: "corrective-action", nome: "Corrective Action", dono: "Jonah Vasquez" },
    { id: "counterforce", nome: "Counterforce", dono: "Jill Valentine" },
    { id: "cut-loose", nome: "Cut Loose", dono: "Thalita Lyra" },
    { id: "dance-with-me", nome: "Dance With Me", dono: "Kate Denson" },
    { id: "dark-sense", nome: "Dark Sense", dono: "Geral" },
    { id: "dead-hard", nome: "Dead Hard", dono: "David King" },
    { id: "deadline", nome: "Deadline", dono: "Alan Wake" },
    { id: "deception", nome: "Deception", dono: "Élodie Rakoto" },
    { id: "decisive-strike", nome: "Decisive Strike", dono: "Laurie Strode" },
    { id: "deja-vu", nome: "Deja Vu", dono: "Geral" },
    { id: "deliverance", nome: "Deliverance", dono: "Adam Francis" },
    { id: "desperate-measures", nome: "Desperate Measures", dono: "Felix Richter" },
    { id: "detectives-hunch", nome: "Detective's Hunch", dono: "David Tapp" },
    { id: "distortion", nome: "Distortion", dono: "Jeff Johansen" },
    { id: "diversion", nome: "Diversion", dono: "Adam Francis" },
    { id: "do-no-harm", nome: "Do No Harm", dono: "Orela Rose" },
    { id: "dramaturgy", nome: "Dramaturgy", dono: "Nicolas Cage" },
    { id: "duty-of-care", nome: "Duty of Care", dono: "Orela Rose" },
    { id: "empathic-connection", nome: "Empathic Connection", dono: "Yoichi Asakawa" },
    { id: "empathy", nome: "Empathy", dono: "Claudette Morel" },
    { id: "extrasensory-perception", nome: "Extrasensory Perception", dono: "Eleven" },
    { id: "exultation", nome: "Exultation", dono: "Trevor Belmont" },
    { id: "eyes-of-belmont", nome: "Eyes of Belmont", dono: "Trevor Belmont" },
    { id: "fast-track", nome: "Fast Track", dono: "Yun-Jin Lee" },
    { id: "finesse", nome: "Finesse", dono: "Lara Croft" },
    { id: "five-moves-ahead", nome: "Five Moves Ahead", dono: "Kwon Tae-Young" },
    { id: "fixated", nome: "Fixated", dono: "Nancy Wheeler" },
    { id: "flashbang", nome: "Flashbang", dono: "Leon S. Kennedy" },
    { id: "flip-flop", nome: "Flip-Flop", dono: "Ash Williams" },
    { id: "flow-state", nome: "Flow State", dono: "Kwon Tae-Young" },
    { id: "fogwise", nome: "Fogwise", dono: "Vittorio Toscano" },
    { id: "for-the-people", nome: "For the People", dono: "Zarina Kassir" },
    { id: "friendly-competition", nome: "Friendly Competition", dono: "Thalita Lyra" },
    { id: "ghost-notes", nome: "Ghost Notes", dono: "Vee Bonnyasak" },
    { id: "hardened", nome: "Hardened", dono: "Lara Croft" },
    { id: "head-on", nome: "Head On", dono: "Jane Romero" },
    { id: "hope", nome: "Hope", dono: "Geral" },
    { id: "hyperfocus", nome: "Hyperfocus", dono: "Rebecca Chambers" },
    { id: "inner-focus", nome: "Inner Focus", dono: "Haddie Kaur" },
    { id: "inner-strength", nome: "Inner Strength", dono: "Nancy Wheeler" },
    { id: "invocation-treacherous-crows", nome: "Invocation: Treacherous Crows", dono: "Taurie Cain" },
    { id: "invocation-weaving-spiders", nome: "Invocation: Weaving Spiders", dono: "Sable Ward" },
    { id: "iron-will", nome: "Iron Will", dono: "Jake Park" },
    { id: "kindred", nome: "Kindred", dono: "Geral" },
    { id: "last-stand", nome: "Last Stand", dono: "Michonne" },
    { id: "leader", nome: "Leader", dono: "Dwight Fairfield" },
    { id: "left-behind", nome: "Left Behind", dono: "Bill Overbeck" },
    { id: "light-footed", nome: "Light-Footed", dono: "Ellen Ripley" },
    { id: "lightweight", nome: "Lightweight", dono: "Geral" },
    { id: "lithe", nome: "Lithe", dono: "Feng Min" },
    { id: "low-profile", nome: "Low Profile", dono: "Ada Wong" },
    { id: "lucky-break", nome: "Lucky Break", dono: "Yui Kimura" },
    { id: "lucky-star", nome: "Lucky Star", dono: "Ellen Ripley" },
    { id: "made-for-this", nome: "Made for This", dono: "Gabriel Soma" },
    { id: "mettle-of-man", nome: "Mettle of Man", dono: "Ash Williams" },
    { id: "mirrored-illusion", nome: "Mirrored Illusion", dono: "Aestri Yazar" },
    { id: "moment-of-glory", nome: "Moment of Glory", dono: "Trevor Belmont" },
    { id: "no-mither", nome: "No Mither", dono: "David King" },
    { id: "no-one-left-behind", nome: "No One Left Behind", dono: "Geral" },
    { id: "object-of-obsession", nome: "Object of Obsession", dono: "Laurie Strode" },
    { id: "off-the-record", nome: "Off the Record", dono: "Zarina Kassir" },
    { id: "one-two-three-four", nome: "One Two Three Four", dono: "Vee Bonnyasak" },
    { id: "open-handed", nome: "Open-Handed", dono: "Ace Visconti" },
    { id: "overcome", nome: "Overcome", dono: "Jonah Vasquez" },
    { id: "overzealous", nome: "Overzealous", dono: "Haddie Kaur" },
    { id: "parental-guidance", nome: "Parental Guidance", dono: "Yoichi Asakawa" },
    { id: "pharmacy", nome: "Pharmacy", dono: "Quentin Smith" },
    { id: "plot-twist", nome: "Plot Twist", dono: "Nicolas Cage" },
    { id: "plunderers-instinct", nome: "Plunderer's Instinct", dono: "Geral" },
    { id: "poised", nome: "Poised", dono: "Jane Romero" },
    { id: "potential-energy", nome: "Potential Energy", dono: "Vittorio Toscano" },
    { id: "power-struggle", nome: "Power Struggle", dono: "Élodie Rakoto" },
    { id: "premonition", nome: "Premonition", dono: "Geral" },
    { id: "prove-thyself", nome: "Prove Thyself", dono: "Dwight Fairfield" },
    { id: "quick-gambit", nome: "Quick Gambit", dono: "Vittorio Toscano" },
    { id: "rapid-response", nome: "Rapid Response", dono: "Orela Rose" },
    { id: "reactive-healing", nome: "Reactive Healing", dono: "Ada Wong" },
    { id: "reassurance", nome: "Reassurance", dono: "Rebecca Chambers" },
    { id: "red-herring", nome: "Red Herring", dono: "Zarina Kassir" },
    { id: "repressed-alliance", nome: "Repressed Alliance", dono: "Cheryl Mason" },
    { id: "residual-manifest", nome: "Residual Manifest", dono: "Haddie Kaur" },
    { id: "resilience", nome: "Resilience", dono: "Geral" },
    { id: "road-life", nome: "Road Life", dono: "Vee Bonnyasak" },
    { id: "rookie-spirit", nome: "Rookie Spirit", dono: "Leon S. Kennedy" },
    { id: "saboteur", nome: "Saboteur", dono: "Jake Park" },
    { id: "scavenger", nome: "Scavenger", dono: "Gabriel Soma" },
    { id: "scene-partner", nome: "Scene Partner", dono: "Nicolas Cage" },
    { id: "second-wind", nome: "Second Wind", dono: "Steve Harrington" },
    { id: "self-care", nome: "Self-Care", dono: "Claudette Morel" },
    { id: "self-preservation", nome: "Self-Preservation", dono: "Yun-Jin Lee" },
    { id: "shoulder-the-burden", nome: "Shoulder The Burden", dono: "Taurie Cain" },
    { id: "slippery-meat", nome: "Slippery Meat", dono: "Geral" },
    { id: "small-game", nome: "Small Game", dono: "Geral" },
    { id: "smash-hit", nome: "Smash Hit", dono: "Yun-Jin Lee" },
    { id: "sole-survivor", nome: "Sole Survivor", dono: "Laurie Strode" },
    { id: "soul-guard", nome: "Soul Guard", dono: "Cheryl Mason" },
    { id: "specialist", nome: "Specialist", dono: "Lara Croft" },
    { id: "spine-chill", nome: "Spine Chill", dono: "Geral" },
    { id: "sprint-burst", nome: "Sprint Burst", dono: "Meg Thomas" },
    { id: "stake-out", nome: "Stake Out", dono: "David Tapp" },
    { id: "still-sight", nome: "Still Sight", dono: "Aestri Yazar" },
    { id: "streetwise", nome: "Streetwise", dono: "Nea Karlsson" },
    { id: "strength-in-shadows", nome: "Strength in Shadows", dono: "Sable Ward" },
    { id: "teamwork-collective-stealth", nome: "Teamwork: Collective Stealth", dono: "Renato Lyra" },
    { id: "teamwork-full-circuit", nome: "Teamwork: Full Circuit", dono: "Dustin Henderson" },
    { id: "teamwork-power-of-two", nome: "Teamwork: Power of Two", dono: "Thalita Lyra" },
    { id: "teamwork-soft-spoken", nome: "Teamwork: Soft Spoken", dono: "Eleven" },
    { id: "teamwork-throw-down", nome: "Teamwork: Throw Down", dono: "Michonne" },
    { id: "teamwork-toughen-up", nome: "Teamwork: Toughen Up", dono: "Rick Grimes" },
    { id: "technician", nome: "Technician", dono: "Feng Min" },
    { id: "tenacity", nome: "Tenacity", dono: "David Tapp" },
    { id: "troubleshooter", nome: "Troubleshooter", dono: "Gabriel Soma" },
    { id: "unbreakable", nome: "Unbreakable", dono: "Bill Overbeck" },
    { id: "up-the-ante", nome: "Up the Ante", dono: "Ace Visconti" },
    { id: "urban-evasion", nome: "Urban Evasion", dono: "Nea Karlsson" },
    { id: "vigil", nome: "Vigil", dono: "Quentin Smith" },
    { id: "visionary", nome: "Visionary", dono: "Felix Richter" },
    { id: "wake-up", nome: "Wake Up!", dono: "Quentin Smith" },
    { id: "well-make-it", nome: "We'll Make It", dono: "Geral" },
    { id: "were-gonna-live-forever", nome: "We're Gonna Live Forever", dono: "David King" },
    { id: "we-see-you", nome: "We See You", dono: "Eleven" },
    { id: "wicked", nome: "Wicked", dono: "Sable Ward" },
    { id: "windows-of-opportunity", nome: "Windows of Opportunity", dono: "Kate Denson" },
    { id: "wiretap", nome: "Wiretap", dono: "Ada Wong" }
];

// Sorteio inicial
let alvoKiller = dbKillers[Math.floor(Math.random() * dbKillers.length)];
let alvoPerkK = dbPerksKiller[Math.floor(Math.random() * dbPerksKiller.length)];
let alvoPerkS = dbPerksSurv[Math.floor(Math.random() * dbPerksSurv.length)];

let venceuKiller = false, venceuPerkK = false, venceuPerkS = false;

// ==========================================
// 2. FUNÇÕES DE NAVEGAÇÃO
// ==========================================

function trocarModo(modoId, botao) {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.mode-section').forEach(s => s.classList.remove('active'));
    
    botao.classList.add('active');
    document.getElementById(modoId).classList.add('active');

    const angulosFixos = [0, 90, 180, 270];
    const rotK = angulosFixos[Math.floor(Math.random() * angulosFixos.length)];
    const rotS = angulosFixos[Math.floor(Math.random() * angulosFixos.length)];

    if(modoId === 'perk-killer-mode') {
        const imgK = document.getElementById('hiddenPerkK');
        imgK.src = `perks/${alvoPerkK.id}.webp`;
        imgK.style.transform = `rotate(${rotK}deg)`;
    }
    if(modoId === 'perk-surv-mode') {
        const imgS = document.getElementById('hiddenPerkS');
        imgS.src = `perks/${alvoPerkS.id}.webp`;
        imgS.style.transform = `rotate(${rotS}deg)`;
    }
}

// ==========================================
// 3. LÓGICA DE AUTOCOMPLETE
// ==========================================

function setupAutocomplete(inputId, listId, database, pasta, ext) {
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);

    input.addEventListener("input", function() {
        const val = this.value.trim().toLowerCase();
        list.innerHTML = "";
        if (!val) { list.style.display = "none"; return; }

        const matches = database.filter(item => item.nome.toLowerCase().includes(val));

        if (matches.length > 0) {
            list.style.display = "block";
            matches.forEach(match => {
                const div = document.createElement("div");
                div.className = "autocomplete-item";
                // Imagem normal, sem style de transform
                div.innerHTML = `<img src="${pasta}/${match.id}.${ext}" class="autocomplete-img"><span>${match.nome}</span>`;
                div.addEventListener("mousedown", (e) => {
                    e.preventDefault();
                    input.value = match.nome;
                    list.style.display = "none";
                });
                list.appendChild(div);
            });
        } else { list.style.display = "none"; }
    });

    document.addEventListener("mousedown", (e) => {
        if (e.target !== input && !list.contains(e.target)) list.style.display = "none";
    });
}

setupAutocomplete("guessInput", "custom-autocomplete", dbKillers, "fotos_dos_killers", "webp");
setupAutocomplete("guessPerkKInput", "auto-perk-k", dbPerksKiller, "perks", "webp");
setupAutocomplete("guessPerkSInput", "auto-perk-s", dbPerksSurv, "perks", "webp");

// ==========================================
// 4. LÓGICA DE VITÓRIA E ÁUDIOS
// ==========================================

function tocarAudiosVitoria() {
    const a1 = document.getElementById('winAudio');
    const a2 = document.getElementById('winAudio2');
    const a3 = document.getElementById('winAudio3');

    if(a1) { a1.currentTime = 0; a1.play(); }
    if(a2) { 
        a2.volume = 0.2; 
        a2.currentTime = 0; a2.play(); 
    }
    if(a3) { a3.volume = 0.3; a3.currentTime = 0; a3.play(); }
}

function tocarEasterEgg() {
    const audio = document.getElementById('easterEggAudio');
    if(audio) { audio.currentTime = 0; audio.play(); }
}

// ==========================================
// 5. PROCESSAMENTO DE PALPITES
// ==========================================

function fazerPalpiteKiller() {
    if (venceuKiller) return;
    const input = document.getElementById("guessInput");
    const val = input.value.trim().toLowerCase();
    const palpite = dbKillers.find(k => k.nome.toLowerCase() === val) || dbKillers.find(k => k.nome.toLowerCase().includes(val));

    if (!palpite) return;
    input.value = '';
    document.getElementById("custom-autocomplete").style.display = "none";

    const tbody = document.getElementById('guessesBody');
    const tr = document.createElement('tr');
    tr.className = 'new-row';

    const check = (g, t) => g === t ? 'match' : (g.includes('/') || t.includes('/')) && g.split('/').some(i => t.includes(i.trim())) ? 'partial' : 'no-match';
    
    let anoHTML = palpite.ano;
    if (palpite.ano !== alvoKiller.ano) {
        const setinha = alvoKiller.ano > palpite.ano ? 'arrow-up' : 'arrow-down';
        anoHTML = `<div class="graphic-arrow-container"><div class="graphic-arrow ${setinha}"></div><span class="arrow-year">${palpite.ano}</span></div>`;
    }

    tr.innerHTML = `
        <td><img src="fotos_dos_killers/${palpite.id}.webp" class="killer-img"></td>
        <td class="${check(palpite.genero, alvoKiller.genero)}">${palpite.genero}</td>
        <td class="${check(palpite.raio, alvoKiller.raio)}">${palpite.raio.replace('/','<br>')}</td>
        <td class="${check(palpite.vel, alvoKiller.vel)}">${palpite.vel.replace('/',' m/s<br>') + ' m/s'}</td>
        <td class="${check(palpite.range, alvoKiller.range)}">${palpite.range.replace('/','<br>')}</td>
        <td class="${check(palpite.altura, alvoKiller.altura)}">${palpite.altura}</td>
        <td class="${check(palpite.origem, alvoKiller.origem)}">${palpite.origem}</td>
        <td class="${palpite.ano === alvoKiller.ano ? 'match' : 'arrow-cell'}">${anoHTML}</td>
    `;
    tbody.insertBefore(tr, tbody.firstChild);

    if (palpite.id === alvoKiller.id) {
        venceuKiller = true; input.disabled = true;
        setTimeout(() => {
            document.getElementById('winImage').src = `fotos_dos_killers/${palpite.id}.webp`;
            document.getElementById('winName').textContent = palpite.nome.replace(/^The\s+/i, '');
            document.getElementById('message').style.display = 'flex';
            tocarAudiosVitoria();
        }, 1800);
    }
}

function fazerPalpitePerk(inputId, autoId, database, alvo, bodyId, msgId, nameId, imgId, venceuFlag) {
    const input = document.getElementById(inputId);
    const val = input.value.trim().toLowerCase();
    const palpite = database.find(p => p.nome.toLowerCase() === val) || database.find(p => p.nome.toLowerCase().includes(val));

    if (!palpite) return;
    input.value = '';
    document.getElementById(autoId).style.display = "none";

    const tbody = document.getElementById(bodyId);
    const tr = document.createElement('tr');
    tr.className = 'new-row';

    // Imagem da tabela normal, sempre a 0 graus
    tr.innerHTML = `
        <td><img src="perks/${palpite.id}.webp" class="killer-img"></td>
        <td class="${palpite.id === alvo.id ? 'match' : 'no-match'}">${palpite.nome}</td>
        <td class="${palpite.dono === alvo.dono ? 'match' : 'no-match'}">${palpite.dono}</td>
    `;
    tbody.insertBefore(tr, tbody.firstChild);

    if (palpite.id === alvo.id) {
        input.disabled = true;
        setTimeout(() => {
            const imgCentral = document.getElementById(imgId);
            imgCentral.classList.add('revealed');
            imgCentral.style.transform = `rotate(0deg)`; 
            
            document.getElementById(nameId).textContent = palpite.nome;
            document.getElementById(msgId).style.display = 'flex';
            tocarAudiosVitoria();
        }, 800);
    }
}

function fazerPalpitePerkK() { fazerPalpitePerk('guessPerkKInput', 'auto-perk-k', dbPerksKiller, alvoPerkK, 'body-perk-k', 'msg-perk-k', 'winNamePerkK', 'hiddenPerkK'); }
function fazerPalpitePerkS() { fazerPalpitePerk('guessPerkSInput', 'auto-perk-s', dbPerksSurv, alvoPerkS, 'body-perk-s', 'msg-perk-s', 'winNamePerkS', 'hiddenPerkS'); }

// Atalho Enter
document.getElementById("guessInput").onkeypress = (e) => { if(e.key==="Enter") fazerPalpiteKiller(); };
document.getElementById("guessPerkKInput").onkeypress = (e) => { if(e.key==="Enter") fazerPalpitePerkK(); };
document.getElementById("guessPerkSInput").onkeypress = (e) => { if(e.key==="Enter") fazerPalpitePerkS(); };