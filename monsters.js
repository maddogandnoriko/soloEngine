var monstersArray = [
  /* Name, HD, AC, ML, XP, #ATKS(some have more than one per turn),ATKS[],DAMS[],Special Descrip[],terrains[0,none,null = any,1= coastal,2=dark/dungeon/cavern,3 = forest/woods,4=jungle,5= desert,6= mountains,7= arctic,8= saltwater,9= freshwater,10=swamp,11=hills,12=plains/meadow/field,13=ruins,14=urban/city/town/house,15=volcano/Hot,16=barren lands,20=other],rarity[0=common,1=rare,2=very rare] */
	["Any","Coastal","Dark/Dungeon/Castle/Caverns","Forest","Jungle","Desert","Mountains","Arctic","Saltwater","Freshwater","Swamp","Hills","Plains","Ruins","Urban/City/Town/House","Volcano/Hot","Barren Lands","Other"],

	["Acolyte",1,17,7,10,1,["mace","Sacred Flame"],["1d6","1d8"],["Sacred Flame: Flame descends on character and must win BODY check or take d8 damage."],[1,2,3,4,5,6,10,11,12,13,14],[0]],

	["Angry Spriggan",1,11,8,10,1,["bite"],["1d4"],[],[3,4],[2]],

	["Ankheg",5,18,7,200,1,["crushing bite","Squirt Acid"],["3d6","4d8"],["Squirt Acid: If pressed, squirts digestive acid 30' once, half DAM on win BODY Check."],[3,4,11,12],[1]],

	["Driver Ant",4,16,12,125,1,["bite"],["2d6"],["Miners: Lair has 30% chance contain 1d10 × 1,000cp worth of copper nuggets."],[1,2,3,4,5,6,11,12],[1]],

	["Giant Ant",1,15,8,10,1,["bite","sting"],["1d6","1d6"],["Queen:HD 5, HP 20,+2 DAM, XP 175"],[1,2,3,4,5,6,11,12],[1]],

	["Ape, White",4,13,7,75,1,["2 claws","thrown rock"],["1d4","1d6"], ["Territorial: Defend their lair"],[2,11,6,13],[1]],

	["Bandit",1,12,8,10,1,["weapon"],["1d8"],["Trickery: Use disguise or trickery"],[1,2,3,4,5,6,10,11,12,13,14],[0]],

	["Bandit",2,12,6,20,1,["sword","bow"],["1d8","1d6"],[],[2,3,4,5,6,10,11,12,13,14],[0]],

	["Basilisk",7,15,9,950,2,["bite","Gaze"],["1d10","Petrify"],["Touch/Gaze: Anyone meeting a basilisk's gaze or touched by a basilisk is petrified (BODY Check)"],[2,3],[2]],

	["Bat, Giant",2,12,8,20,1,["bite"],["1d6"],[],[2,13],[0]],

	["Giant Bat",2,13,8,20,1,["bite"],["1d4"],["Echolocation: Unaffected by effects that affect sight."],[2,13],[0]],

	["Giant Vampire Bat",2,13,8,20,1,["bite"],["1d4+Blood Drain"],["Echolocation: Unaffected by effects that affect sight.","Blood Drain: BODY Check, 1d4 hit point damage. A victim killed by Blood Drain may become a vampire (SPIRIT Check)"],[2,13],[1]],

	["Normal Bat",1,13,6,5,1,["bite/scratch"],["1d4"],["Echolocation: Unaffected by effects that affect sight."],[2,13],[0]],

	["Black Bear",4,13,7,75,2,["2 claws","bite"],["1d3","1d6"],["Defensive: Protect young with their lives, otherwise only attack if cornered.","Camp Raids: Sometimes raid camps, for food","Bear Hug: If a victim is hit by both paws in the same round, the bear hugs for an extra 2d8 damage."],[1,3,6,11],[0]],

	["Cave Bear",7,14,9,450,2,["2 claws","bite"],["1d8","2d6"],["Sense of Smell: Poor eyesight, but keen sense of smell.","Bear Hug: If a victim is hit by both paws in the same round, the bear hugs for an extra 2d8 damage."],[1,3,6,11],[2]],

	["Grizzly Bear",5,13,8,175,2,["2 claws","bite"],["1d4","1d8"],["Bear Hug: If a victim is hit by both paws in the same round, the bear hugs for an extra 2d8 damage."],[,,3,6,11],[0]],

	["Polar Bear",6,13,8,275,2,["2 claws","bite"],["1d6","1d10"],["Bear Hug: If a victim is hit by both paws in the same round, the bear hugs for an extra 2d8 damage."],[7],[1]],

	["Fire Beetle",3,15,7,15,1,["bite"],["2d4"],["Glowing Nodules: 3 glowing glands cast light. If removed, keep glowing for 1d6 days."],[2,3,12,13],[0]],

	["Oil Beetle",2,15,8,25,2,["bite","oil spray"],["1d6","blistering"],["Oil spray: A hit within 5' causes blistering: -2 to Attack Rolls for 24 hours. Any minor healing to cure this, instead of restoring hit points."],[2,3,12,13],[0]],

	["Tiger Beetle",4,16,9,50,1,["bite"],["2d6"],[],[2,3,12,13],[0]],

	["Berserker",2,12,12,19,1,["weapon"],["d8 or weapon"],["Battle Rage: +2 to Attack Rolls. Rage sometimes makes them attack their allies."],[2,3,4,5,6,10,11,12,13,14],[1]],

	["Black Pudding",10,13,12,1600,1,["touch"],["3d8"],["Immunity: Only harmed by fire-based attacks.","Division: Non-fire attacks cause the pudding to divide, each hit creates a 2HD pudding that does 1d8 DAM.","Erode Wood and Metal: Can dissolve wood or metal in one turn.","Cling: Can move across walls and ceilings.","Seep: Can squeeze through small holes and cracks."],[2,13],[0]],

	["Blink Dog",4,14,6,125,1,["bite"],["d6"],["Blink: Can teleport to and from an enemy."],[3,5,12],[0]],

	["Boar",3,12,9,35,1,["tusks"],["2d4"],[],[3,4,5,11],[0]],

	["Brigand",1,13,8,10,1,["weapon"],["1d6 or weapon"],[],[3,6],[0]],

	["Buccaneer",1,12,6,10,1,["weapon"],["1d6 or weapon"],["Treasure: May have a map to where it is buried."],[8,9],[1,8]],

	["Bugbear",4,14,9,50,1,["weapon"],["2d4 or weapon +1"],["Stealthy"],[2,3,6,11],[0]],

	["Caecilia",6,13,9,500,1,["bite"],["d8"],["Swallow Whole: On an Attack Roll of 19 or more. Inside the monster's belly: suffer 1d8 damage per round (until the caecilia is killed); may attack with a dagger at -4 to Attack Rolls"],[1,2,3,4,5,6,10,11,12,13,14],[1]],

	["Camel",2,12,50,7,20,1,["bite","hoof"],["1d4","1d4"],["Water: Can survive 2 weeks without water.","Beast of Burden: Carry up to 3,000 coins unencumbered; up to 6,000 at half speed."],[5,12],[0]],

	["Carcass Crawler",4,12,9,75,1,["8 tentacles","bite"],["paralysis","1"],["Paralysis: A hit by a tentacle causes paralysis for 2d4 turns (BODY Check). Paralysed victims will be devoured, if the crawler is left in peace.","Cling: Can walk on walls and ceilings."],[2,13],[0]],

	["Carnivorous Plant",2,12,11,20,1,["vine whip","bite"],["1d8","1d6"],[],[1,2,3,4,5,6,10,11,13],[0]],

	["Catfish, Giant",11,15,8,8,2,["bite","4×feeler"],["2d8","1d4"],[],[9],[0]],

	["Cave Locust",2,15,5,20,1,["bite","spit"],["1d2","Stinking Spittle"],["Blend in with Stone","Shriek: If attacked or frightened, shriek to warn others.","Skittish","Stinking Spittle: Target treated as AC 9. Affected character is covered and unable to act for 1 turn (BODY Check). Until the goo is washed off, others who come within 5' must also succeed a BODY Check or be sick."],[2],[0]],

	["Cellar Gremlin",3,13,8,35,25,["bite","Sock"],["1d8","Sock"],["Drain: *Bite attacks also drain 1d4 BODY.","Sock: Instead of biting a gremlin can sock its enemy on the head. On a failed BODY Check, the target is stunned for 1d4 turns.","Agoraphobia: Gremlin fears outdoors and looses its Sock ability if it ends up outside.","Resistant to charm","Vulnerable to cold iron"],[14],[0]],

	["Centaur",4,14,8,75,2,["2 hooves","weapon"],["1d6","weapon"],["Lair: Hidden in dense woods, along twisting, guarded paths."],[3,11,12],[0]],

	["Centipede, Giant",1,10,7,5,1,["bite"],["poison"],["Poison: Victims become horribly sick for 10 days (BODY Check): no physical activity possible except half speed movement."],[1,3,13],[0]],

	["Centipede, Giant",1,10,7,5,1,["bite"],["poison"],["Poison: Target must succeed on a BODY Check or take 2d8 poison damage. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."],[1,3,13],[0]],

	["Chimera",9,15,9,2,300,4,["2 claws","goat gore","lion bite","dragon bite or breath"],["1d3","2d4","2d4","3d4 /3d6"],["Dragon Head: 50% chance of breath attack.","Breath Weapon: Cone of Fire: end 10' wide, 50' long (BODY Check)."],[1,6,11,13],[2]],

	["Cockatrice",5,13,7,425,1,["beak"],["1d6 + petrification"],["Petrification: Anyone touched is turned to stone (BODY Check)."],[1,2,3,4,5,6,10,11,12,13,14],[2]],

	["Cockroach, Giant",1,15,5,10,1,["bite"],["1d4"],[],[1,2,3,4,5,6,10,11,12,13,14],[0]],

	["Crab, Giant",3,17,7,35,2,["pincers"],["2d6"],["Ravenous: Attack any moving creature"],[8,9],[1]],

	["Giant Crocodile",18,18,9,1,350,1,["bite"],["3d8"],["Feeding Frenzy: Attracted to the scent of blood or violent movement in the water."],[9,10],[1]],

	["Large Crocodile",6,16,7,275,1,["bite"],["2d8"],["Feeding Frenzy: Attracted to the scent of blood or violent movement in the water."],[9,10],[0]],

	["Normal Crocodile",2,14,7,20,1,["bite"],["1d8"],["Feeding Frenzy: Attracted to the scent of blood or violent movement in the water."],[9,10],[0]],

	["Cyclops",13,14,9,2,300,1,["club","rock"],["3d10","3d6"],["Poor Depth Perception: -2 to hit rolls.","Rock throwing: Up to 200'.","Slow-witted"],[6,11],[1]],

	["Dervish",1,14,10,10,1,["weapon"],["1d6 or weapon"],["Intolerant: Of other religious views.","Holy War: Occasionally wage war against other religious factions. Will slay people of different faith, or take them prisoner. Prisoners must convert; otherwise killed or used as slaves."],[5],[0]],

	["Desiccator",4,13,10,10,1,["Rejuvenating Claws"],["1d6"],["Dry Breath: Once every 1-4 rounds, a Desiccator may breath a 15' cone of extremely dry air that absorbs all water in the area. Anyone within the cone must make a BODY Check or lose 1 point of BODY, which can be regained after one day's rest and rehydration.","Rejuvenating Claws: Anyone struck by a Dessicator's claws takes a -1 penalty to attack rolls for 1-6 rounds. In addition, whenever the Dessicator deals damage with its attack, it regains a number of hit points equal to the damage dealt."],[5,13],[2]],

	["Displacer Beast",6,15,8,500,2,["tentacles"],["2d4"],["Displacement: Appear 3' from actual location: attackers suffer -2 to hit.","Save Bonus: +2 to all saves."],[3,4,11],[1]],

	["Djinni (Lesser)",8,14,12,450,2,["fists","magic"],["2d8","spell"],["Mundane damage immunity: Can only be harmed by magical attacks.","Magic powers: Each can be used three times per day","Whirlwind form: 5 rounds to transform (or change back). 70' tall, 20' wide at top, 10' wide at base. 2d6 damage to all in path. Creatures with less than 2HD swept aside (BODY Check).","Gaseous form","Invisibility","Illusion: Visual and audial. No concentration required. Remains until touched or dispelled.","Create food and drink: For 12 humans and mounts for one day.","Conjure metallic objects: Up to 1,000 coins weight. Temporary: hardness determines duration (gold: 1 day; iron: 1 round).","Conjure soft goods/wooden objects: Up to 1,000 coins weight. Permanent.","Carrying capacity: 6,000 coins without fatigue. Up to 12,000 coins for 3 turns walking / 1 turn flying. Must rest 1 turn afterwards."],[5],[1,20]],

	["Doppelgänger",4,14,10,125,1,["bite"],["1d12"],["Shape Stealing: Can adopt the form of any human-like creature.","Trickery: Will attempt to kill a PC, take on his or her role, then attack the party by surprise","Spell Immunity: Unaffected by sleep and charm spells.","Reversion: If killed, reverts to its original form."],[1,2,3,4,5,6,10,11,12,13,14],[1]],

	["Draco, Giant",6,14,7,125,1,["bite"],["1d10"],["Glide: Skin flaps between legs enable gliding."],[3],[0]],

	["Black Dragon",7,17,8,1250,2,["2 claws","bite OR breath"],["1d6","2d10 or Breath"],["Breath Weapon: 60' long line of acid.All caught in the area suffer damage equal to the dragon's current hit points (BODY Check for half damage)."],[10],[1]],

	["Blue Dragon",9,19,9,2300,2,["2 claws","bite or Breath"],["1d6","3d10 OR Breath"],["Breath Weapon: 100' long line of lightning.All caught in the area suffer damage equal to the dragon's current hit points (BODY Check for half damage)."],[5,12],[1]],

	["Gold Dragon",11,21,10,2700,2,["2 claws","bite or Breath"],["2d4","6d6"],["Breath Weapon: 90' long cone of fire or cloud of chlorine gas.All caught in the area suffer damage equal to the dragon's current hit points (BODY Check for half damage).","Shape Changing: May take on the form of a person or animal."],[1,2,3,4,5,6,7,10,11,12,13,14,15],[1]],

	["Green Dragon",8,18,9,1750,2,["2 claws","bite or Breath"],["1d6","3d8 or Breath"],["Breath Weapon: Cloud of chlorine gas.All caught in the area suffer damage equal to the dragon's current hit points (BODY Check for half damage)."],[3,4],[1]],

	["Red Dragon",10,20,10,2300,2,["2 claws","bite or Breath"],["1d8","4d8 or Breath"],["Breath Weapon: 90' long cone of fire.All caught in the area suffer damage equal to the dragon's current hit points (BODY Check for half damage)."],[6,11],[1]],

	["Sea Dragon",8,18,9,1750,1,["bite","Breath"],["3d8","Breath"],["Breath Weapon: Poison spittle, 100' range, 20' diameter. BODY Check or die.","Gliding: Leap out of the water and glide for up to 6 rounds."],[8],[1]],

	["White Dragon",6,16,8,725,2,["2 claws","bite or Breath"],["1d4","2d8 or Breath"],["Breath Weapon: 80' long cone of cold.All caught in the area suffer damage equal to the dragon's current hit points (BODY Check for half damage)."],[7],[1]],

	["Dragon Turtle",30,22,10,4750,2,["claws","bite"],["2d8","1d6x10"],["Breath Weapon: 90' long, 30' wide cloud of steam.All caught in the area suffer damage equal to the dragon turtle's current hit points (BODY Check for half damage).","Mistaken for Island: When floating, can be mistaken for a small island."],[8],[1]],

	["Dryad",2,14,6,25,1,["magic"],["Charm"],["Bound with Tree: Spiritually connected with a single tree. Dryad dies if the tree dies.","Meld with Tree: Can disappear by joining with tree.","Charm: Victim compelled to approach the tree, vanishes inside it (MIND Check with -2 penalty).If not immediately rescued, the victim is lost forever.","Treasure: Hidden in roots of the tree."][3],[1]],

	["Dungeon Shrimp, Giant",1,13,4,10,1,["claw"],["1d6"],[],[2,13],[0]],

	["Dwarf",1,4,8,10,1,["weapon"],["1d8 or weapon"],["Hate Goblins"],[1,2,3,4,5,6,10,11,12,13,14],[0]],

	["Efreeti (Lesser)",10,16,12,1600,1,["fists","magic"],["2d8","magic"],["Mundane damage immunity: Can only be harmed by magical attacks.","Pillar of flame: Transform into a column of fire for 3 rounds. Flammable items within 5' are ignited. Attacks do additional 1d8 damage (3d8 total).","Invisibility","Illusion: Visual and audial. No concentration required. Remains until touched or dispelled.","Create wall of fire","Create food and drink: For 12 humans and mounts for one day.","Conjure metallic objects: Up to 1,000 coins weight. Temporary: hardness determines duration (gold: 1 day; iron: 1 round).","Conjure soft goods/wooden objects: Up to 1,000 coins weight. Permanent.","Carrying capacity: Up to 10,000 coins (flying).","Bound servitor: Efreet summoning spells can be researched by high-level magic-users. Can be bound to servitude for 101 days. Efreet are treacherous and will follow commands to the letter while subverting the intent."],[1,2,3,4,5,6,10,11,12,13,14,20],[1]],

	["Air Elemental",12,19,10,1100,1,["blow"],["2d8"],["Whirlwind: Creatures with less than 2HD swept aside (BODY Check).","Mundane Damage Immunity: Can only be harmed by magical attacks.","Harm Flying Creatures: Inflict extra 1d8 damage."],[1,2,3,4,5,6,7,10,11,12,13,14,20],[0]],

	["Earth Elemental",12,19,10,1100,1,["bludgeon"],["2d8"],["Blocked by Water: Cannot cross a channel wider than own height.","Mundane Damage Immunity: Can only be harmed by magical attacks.","Harm Creatures on the Ground: Inflict extra 1d8 damage."],[1,2,3,4,5,6,7,10,11,12,13,14,20],[0]],

	["Fire Elemental",12,19,10,1100,1,["fire"],["2d8"],["Blocked by Water: Cannot cross a channel wider than own diameter.","Mundane Damage Immunity: Can only be harmed by magical attacks.","Harm Cold-based Creatures: Inflict extra 1d8 damage."],[1,2,3,4,5,6,10,11,12,13,14,20],[0]],

	["Water Elemental",12,19,10,1100,1,["water"],["2d8"],["Water-bound: Must remain within 60' of water.","Mundane Damage Immunity: Can only be harmed by magical attacks.","Harm Creatures in Water: Inflict extra 1d8 damage."],[0],[0]],

	["Elephant",9,14,8,900,1,["2 tusks","trample"],["2d4","4d8"],["Charge: In first round of combat. Requires run of 20 yards. Tusks inflict double damage.","Trample: 3-in-4 chance of trampling each round. +4 to-hit human-sized or smaller creatures.","Ivory: Each tusk is worth 1d6 × 100cp."],[3,4,11,12],[0]],

	["Elf",2,14,8,19,1,["weapon"],["1d8 or weapon"],["Spells: Each individual has one random 1st level spell."],[1,2,3,4,5,6,10,11,12,13,14],[0]],

	["Ferret, Giant",2,14,8,15,1,["bite"],["1d8"],["Volatile: Unpredictable temper; may turn on trainers or other people."],[2,3],[0]],

	["Gargoyle",4,14,11,75,1,["2 claws","bite","horn"],["1d3 ea","1d6","1d4"],["Blend in with Stone: May be overlooked or mistaken for inanimate statues.","Mundane Damage Immunity: Can only be harmed by magical attacks.","Spell Immunity: Unaffected by sleep or charm spells."],[2,13,14],[1]],

	["Gecko, Giant",4,14,7,50,1,["bite"],["1d8"],["Cling: Climb walls, trees, etc. and drop on victims."],[2,4,3,13],[0]],

	["Gelatinous Cube",4,11,12,125,1,["touch"],["2d4 + paralysis"],["Surprise: On a roll of 1-4, due to near-invisibility.","Paralysis: For 2d4 turns (BODY Check).","Energy Immunity: Unharmed by cold or lightning.","Embedded Items: Indigestible items (e.g. gems, coins) are carried around inside the cube."],[2,13],[0]],

	["Gholdako",10,17,10,2500,1,["bite","2 claws"],["2d8 ea","3d8"],["Nightvision","Blinding Breath: Exhale a cloud of dust once every 1-4 rounds. Anyone caught in this cloud must make a BODY Check or be permanently blinded.","Seaside Rot: Anyone hit by a Gholdako must make a BODY Check or lose 1-4 points of BODY. BODY points lost in this way can be regained at a rate of 1 point per day. Anyone reduced to 0 BODY dies immediately and crumbles to dust."],[5,13],[1]],

	["Gholdako",10,17,10,2500,1,["2 claws","bite"],["3d8","2d8"],["Gholdakos can exhale a cloud of dust once every 1-4 rounds. Anyone caught in this cloud must make a BODY Check or be permanently blinded.","Anyone hit by a Gholdako must make a BODY Check or lose 1-4 points of BODY. BODY points lost in this way can be regained at a rate of 1 point per day. Anyone reduced to 0 BODY dies immediately and crumbles to dust."],[5,13],[1]],

	["Ghoul",3,13,6,50,1,["2 claws","bite"],["1d6"],["1d8+paralysis"],["Paralysis: For 2d4 turns (BODY Check). Elves and creatures larger than ogres are unaffected. After paralysing a target, ghouls will attack others.","Undead: Make no noise, until they attack. Immune to effects that affect living creatures (e.g. poison). Immune to mind-affecting or mind-reading spells (e.g. charm, hold, sleep).",[2,13],[0]],

	["Ghoul",2,13,9,25,1,["2 claws","bite"],["1d3","1d3+ paralysis"],["Paralysis: For 2d4 turns (BODY Check). Elves and creatures larger than ogres are unaffected. After paralysing a target, ghouls will attack others."],"Undead: Make no noise, until they attack. Immune to effects that affect living creatures (e.g. poison). Immune to mind-affecting or mind-reading spells (e.g. charm, hold, sleep)."],[2,13],[0]],

	["Cloud Giant",12,15,10,1100,1,["weapon","boulder"],["6d6","3d6"],["Keen Sight and Smell: Only surprised on a 1.","Boulder Throwing: Up to 200'."],[6],[1]],

	["Fire Giant",11,15,9,1100,1,["weapon","boulder"],["5d6","3d6"],["Boulder Throwing: Up to 200'.","Fire immunity: Unharmed by fire."],[15],[1]],

	["Frost Giant",10,15,9,900,1,["weapon","boulder"],["4d6","3d6"],["Boulder Throwing: Up to 200'.","Cold Immunity: Unharmed by cold-based attacks."],[7],[1]],

	["Hill Giant",8,15,8,650,1,["weapon"],["2d8"],["Weapons: Wield giant clubs and spears."],[11],[0]],

	["Stone Giant",8,15,9,900,1,["weapon","boulder"],["3d6","3d6"],["Weapons: Stone clubs made from huge stalactites.","Boulder Throwing: Up to 300'."],[6,11,12],[1]],

	["Storm Giant",15,17,10,1350,1,["weapon","Lightning Bolt"],["8d6","Lightning Bolt"],["Summon Storm: Takes 1 turn.","Lightning Bolts: In a storm, may throw lightning once per 5 rounds: 60' long, 5' wide; inflicts damage equal to the giant's current hit point total (MIND Check for half damage); will bounce off of hard surfaces in its path.","Lightning Immunity: Unharmed by lightning. Enjoy basking in storms."],[3,4,5,6,10,11,12],[1]],

	["Gnoll",2,14,8,20,1,["weapon"],["2d4 OR weapon"],[],[6,11],[0]],

	["Gnoll",2,14,6,25,1,["scimitar","bite"],["1d6","1d6"],["Hideous Cackle: Intimidate enemies on a failed SPIRIT Check, gives disadvantage to attack roll the next round."],[6,11],[0]],

	["Gnome",1,14,8,10,1,["weapon"],["1d6 or weapon"],["Weapons: Typically use warhammers and crossbows.","Infravision: 90'.","Hate Kobolds: Normally attack on sight.","Mines and Machines: Love machinery, mining, gold, and gems. May make foolish decisions to obtain precious items. War with goblins and kobolds over precious metals."],[2,12],[0]],

	["Goblin",1,12,5,10,1,["club"],["1d6"],["Goblins get advantage on sneaking in the dark."],[2,3,6,11],[0]],

	["Goblin",1,13,7,5,1,["weapon"],["1d6 or weapon"],["Infravision: 90'.","Hate the Sun: -1 to-hit in full daylight.","Hate Dwarves: Attack on sight."],[2,3,6,11],[0]],

	["Amber Golem",10,13,12,2300,1,["2 claws","bite"],["2d6","2d10"],["Tracking: Without error.","Detect Invisible Creatures: Within 60'.","Mundane Damage Immunity: Can only be harmed by magical attacks.","Immunity: Unharmed by gas; unaffected by charm, hold, and sleep spells."],[1,2,3,4,5,6,10,11,12,13,14],[1]],

	["Bone Golem",8,17,12,650,4,["weapon"],["1d6 or weapon"],["Weapons: 4×1-handed or 2×2-handed.","Attack Multiple Opponents: Up to 2 per round.","Energy Immunity: Unharmed by fire, cold, and electricity.","Mundane Damage Immunity: Can only be harmed by magical attacks.","Immunity: Unharmed by gas; unaffected by charm, hold, and sleep spells."],[1,2,3,4,5,6,10,11,12,13,14],[1]],

	["Bronze Golem",20,19,12,4300,1,["fist"],["3d10 + 1d10 Heat"],["Flaming Blood: If damaged by an edged weapon, emits a spurt of liquid fire: attacker suffers 2d6 damage (BODY Check to avoid).","Fire Immunity: Unharmed by fire.","Mundane Damage Immunity: Can only be harmed by magical attacks.","Immunity: Unharmed by gas; unaffected by charm, hold, and sleep spells."],[1,2,3,4,5,6,10,11,12,13,14],[1]],

	["Wood Golem",4,12,12,25,1,["fist"],["1d8"],["Flammable: -2 to saves against fire attacks; suffers one extra point of damage per die.","Mundane Damage Immunity: Can only be harmed by magical attacks.","Immunity: Unharmed by gas; unaffected by charm, hold, and sleep spells."],[1,2,3,4,5,6,10,11,12,13,14],[1]],

	["Gorgon",8,17,8,1200,1,["gore","breath"],["2d6","Petrify"],["Charge: When not in melee. Requires a clear run of 20 yards.","Petrifying Breath: Cloud 60' long, 10' wide. All in the cloud are turned to stone (BODY Check to avoid)."],[11,12,20],[2]],

	["Grey Ooze",3,11,12,50,1,["touch"],["2d8"],["Blend with Stone: Difficult to tell apart from wet stone.","Acid: After a successful attack, sticks to the victim and exudes acid. The acid destroys normal armour immediately and inflicts 2d8 damage per round. (Magic armour is dissolved in one turn.)","Energy Immunity: Unharmed by cold or fire."],[2,13],[0]],

	["Green Slime",2,0,12,25,1,["touch"],["consume flesh"],["Surprise: Drops down on surprised characters from above.","Acid: When in contact with a victim, sticks on and exudes acid. The acid destroys wood or metal (including armour) in 6 rounds, but cannot affect stone.","Consume Flesh: Once in contact with flesh for 6 rounds, the victim is turned into green slime in a further 1d4 rounds.","Removing: Once stuck on a victim, can only be removed by fire. This inflicts half damage to the victim and half to the slime.","Immunity: Unharmed by all attacks except cold or fire."],[2,13],[0]],

	["Griffon",7,14,8,450,2,["2 claws","bite"],["1d4","2d8"],["Taming: Captured young can be trained as loyal mounts. Their fierce nature cannot be trained out: they still instinctively attack horses."],[6],[1]],

	["Halfling",1,12,7,5,1,["weapon"],["d6 or weapon"],[],[11,12],[0]],

	["Harpy",3,12,7,50,2,["2 claws","weapon + song"],["1d4","1d6 or weapon + Charm"],["Charm: Anyone who hears the song of a group of harpies must BODY Check or be charmed: move towards the harpies (resisting those who try to prevent it); defend the harpies; obey the harpies' commands (if understood); unable to cast spells or use magic items; unable to harm the harpies. A character who saves is unaffected for the rest of the encounter. Killing the harpies breaks the charm.","Magic Resistance: +2 to all Checks."],[6,11],[1]],

	["Giant Hawk",5,13,8,50,1,["talon","beak"],["1d6"],["Carry Prey: Up to halfling-sized.","Swoop: Can dive onto victims visible from above. If the victim is surprised, the attack inflicts double damage. On an attack roll of 18 or more, the victim can be carried away (if of appropriate size).","Trainable: Can be trained as guards or hunting animals."],[3,4,5,6,10,11,12,14],[0]],

	["Normal Hawk",1,11,7,5,1,["talon","beak"],["1d2","1d2"],["Swoop: Can dive onto victims visible from above. If the victim is surprised, the attack inflicts double damage. On an attack roll of 18 or more, the victim can be carried away (if of appropriate size).","Trainable: Can be trained as guards or hunting animals."],[3,4,5,6,10,11,12,14],[0]],

	["Hell Hound",5,15,9,300,1,["bite","breath"],["1d6","1d6 per HP"],["Fire Breath: 2-in-6 chance per round of breathing fire. One target. BODY Check for half damage.","Fire Immunity: Unharmed by non-magical fire.","Pets: Sometimes found with other creatures with an affinity for fire."],[2,6,15,20],[1]],

	["Large Herd Animal",4,12,5,75,1,["butt"],["1d8"],["Stampede: Herds of 20 or more can trample those in their path. +4 to-hit human-sized or smaller creatures. 1d20 damage.","Females and Young: Flee from danger. Females do not have a butt attack. Young have half normal hit points."],[3,12],[0]],

	["Medium Herd Animal",3,12,5,35,1,["butt"],["1d6"],["Stampede: Herds of 20 or more can trample those in their path. +4 to-hit human-sized or smaller creatures. 1d20 damage.","Females and Young: Flee from danger. Females do not have a butt attack. Young have half normal hit points."],[3,12],[0]],

	["Small Herd Animal",2,12,5,20,1,["butt"],["1d4"],["Stampede: Herds of 20 or more can trample those in their path. +4 to-hit human-sized or smaller creatures. 1d20 damage.","Females and Young: Flee from danger. Females do not have a butt attack. Young have half normal hit points."],[3,12],[0]],

	["Hippogriff",4,14,8,50,2,["2 claws","bite"],["1d6","1d10"],["Hate Pegasi: Will usually attack.","Mount: Can carry a human-sized rider.","Taming: Can be trained as mounts."],[6],[1]],

	["Hobgoblin",2,13,8,15,1,["weapon"],["1d8 or weapon"],[],[2,3,6,11],[0]],

	["Horned Chameleon,Giant",5,17,7,300,1,["tongue/bite","horn","Tail"],["2d4"],["1d6","knock down"],["Surprise: On a 1-5, due to camouflage.","Sticky Tongue: Can attack targets up to 5' away. If the attack succeeds, the victim is dragged to the mouth and bitten (2d4 damage).","Tail: Causes no damage, but knocks opponent down: cannot attack that round."],[3,4],[0]],

	["Draft Horse",3,12,6,35,1,["2 hooves"],["1d6"],["Non-combatant: Will flee, if attacked.","Domestic: Not encountered in the wild.","Beast of Burden: Carry up to 4,500 coins unencumbered; up to 9,000 at half speed."],[11,12],[0]],

	["Riding Horse",2,12,7,20,1,["2 hooves"],["1d4"],["Domestic: Not encountered in the wild.","Beast of Burden: Carry up to 3,000 coins unencumbered; up to 6,000 at half speed."],[11,12],[0]],

	["War Horse",3,12,9,35,1,["2 hooves"],["1d6"],["Charge: When not in melee. Requires a clear run of at 20 yards. Rider's lance inflicts double damage. Horse cannot attack when charging.","Melee: When in melee, both rider and horse can attack.","Domestic: Not encountered in the wild.","Beast of Burden: Carry up to 4,000 coins unencumbered; up to 8,000 that at half speed."],[11,12],[0]],

	["Wild Horse",2,12,7,20,1,["2 hooves"],["1d4"],["Stampede: Herds of 20 or more can trample those in their path. +4 to-hit human-sized or smaller creatures. 1d20 damage.","Taming: Wild horses can be trained as mounts (riding horses)."],[11,12],[0]],

	["Hydra",9,14,9,450,1,["5-12 × bite"],["1d10"],["Heads: 1d8+4 heads; 1HP per head.","Disabling Heads: For every 8hp damage taken, one head is disabled (cannot attack).","Variants: Special hydras sometimes found with venom, fiery breath, etc."],[6,8,9,10],[1]],

	["Insect Swarm",3,12,11,35,["Swarm Attack"],["3hp"],["Immunity: Only harmed by fire, extreme cold, sleep spells (affect the whole swarm), smoke (drives off), or other attacks as the referee wishes.","Swarm Attack: Automatically damages characters within swarm area: 2hp if wearing armour, 4hp without.","Warding Off: Characters inside the swarm who defend themselves by brandishing a weapon (or similar) suffer half damage from the swarm. A brandished torch damages the swarm.","Escaping: On exiting the swarm, characters continue to suffer half damage until 3 rounds are spent swatting the attached insects.","Diving into Water: Suffer damage for one round, then attached insects drown.","Pursuit: An angry (i.e. damaged) swarm will pursue characters until they are out of sight or inaccessible."],[1,2,3,4,5,6,8,9,10,11,12,13,14],[1]],

	["Invisible Stalker",8,16,12,1200,1,["blow"],["4d4"],["Tracking: Without fault.","Surprise: 5-in-6, unless target can detect invisibility."],[1,2,3,4,5,6,10,11,12,13,14],[1]],

	["Killer Bee",1,12,9,6,1,["sting"],["1d3 + Poison + Lodged Stinger"],["Aggressive: Usually attack on sight. Always attack intruders within 30' of their hive.","Die After Attacking: On a successful sting attack, a killer bee dies.","Poison: Causes death (BODY Check).","Lodged Stinger: Inflicts 1 damage per round, as the stinger works its way in. A round can be spent to remove it.","Queen: The queen does not die when she stings.","Honey: Magical honey (around 2 pints) may be found in the hive. It heals 1d4 hit points if eaten (in its entirety)."],[1,2,3,4,5,6,10,11,12,13,14],[0]],

	["Kobold",1,12,6,5,1,["weapon"],["1d4 or weapon"],["Infravision: 90'."],[2,11,6,3],[0]],

	["Kraken",20,19,10,2375,2,["8 tentacles","bite"],["6d6","4d6"],["Squid Ink They can emit a 100' cloud of ink 4 times a day"],[8],[2]],

	["Leech, Giant",6,12,10,275,1,["bite"],["1d6 + Blood Drain"],["Blood Drain: Attaches to victim on a successful hit, doing 1d6 automatic damage per round.","Detaching: Must be killed.","If Victim Dies: Leech detaches and finds a hidden place to digest."],[9,10],[0]],

	["Lion",5,13,9,175,1,["2 claws","bite"],["1d4+1","1d10"],["Cautious Hunter: Usually avoids combat unless starving or cornered.","Pursuit: Always pursue prey that flees."],[11,12],[0]],

	["Lion, Mountain",4,13,8,50,1,["2 claws","bite"],["1d3","1d6"],["Cautious Hunter: Usually avoids combat unless starving or cornered.","Pursuit: Always pursue prey that flees."],[6,11],[0]],

	["Crystal Living Statue",3,15,11,35,2,["blows"],["1d6"],["Immunity: Unaffected by sleep spells.","Magical Origins: Created by powerful wizards.","Attacks: Depend on form of statue (humanoid statues may use weapons, animal statues use claws, etc.)."],[1,2,3,4,5,6,10,11,12,13,14],[0]],

	["Iron Living Statue",4,17,11,75,2,["blows"],["1d8"],["Absorb Metals: Hits with non-magical, metal weapons cause damage, but the weapon may become stuck in the statue (save vs WIS). Stuck weapons can be removed if the statue is killed.","Immunity: Unaffected by sleep spells.","Attacks: Depend on form of statue (humanoid statues may use weapons, animal statues use claws, etc.)."],[1,2,3,4,5,6,10,11,12,13,14],[1]],

	["Rock Living Statue",5,15,11,425,2,["Magma Jets"],["2d6"],["Magma Jets: Streams of magma shoot from their fingertips, 2d6 damage.","Immunity: Unaffected by sleep spells."],[1,2,3,4,5,6,10,11,12,13,14,15],[1]],

	["Lizard Man",2,14,12,25,1,["weapon"],["d6+1 or weapon +1"],["Weapons: Favour spears or large clubs.","Man-eaters: Kidnap humans and demihumans, whose flesh they regard as a delicacy."],[2,9,10],[0]],

	["Devil Swine",9,16,10,1600,1,["gore","weapon","magic"],["2d6","1d6 or weapon","Charm Person"],["Shapechange: Only at night.","Ambush: Prefer to attack by surprise.","Charm Person: 3 times a day. MIND Check at -2 or be charmed: move towards the devil swine (resisting those who try to prevent it); obey the devil swine's commands (if understood); defend the devil swine; unable to cast spells or use magic items; unable to harm the devil swine. Killing the swine breaks the charm.","Charmed Victims: 1d4-1 accompany a devil swine.","Animal Form: Only harmed by silver weapons or +1 or better magical weapons.","Armour: Not used because it hinders shape-changing.","Wolfsbane: If hit, must save versus their level or flee in terror.","Reversion: If killed, a lycanthrope reverts to its human form.","Scent: Horses and some other animals can smell lycanthropes and will become afraid.","Infection: A character who loses more than half his or her hit points from the natural attacks of lycanthropes (i.e. bites, claws) contracts lycanthropy. Humans become were-creatures of the same type (run by the referee, henceforth); non-humans die. The disease takes full effect in 2d12 days, showing signs of infection after half the time."],[1,2,3,4,5,6,10,11,12,13,14,20],[0]],

	["Werebear",6,17,10,500,1,["2 claws","bite"],["2d4","2d8"],["Amiable: May be friendly, if approached peacefully.","Bear Hug: If a victim is hit by both claws in the same round, the werebear can hug for an extra 2d8 automatic damage.","Animal Form: Only harmed by silver weapons or +1 or better magical weapons.","Armour: Not used because it hinders shape-changing.","Wolfsbane: If hit, must save versus their level or flee in terror.","Reversion: If killed, a lycanthrope reverts to its human form.","Scent: Horses and some other animals can smell lycanthropes and will become afraid.","Infection: A character who loses more than half his or her hit points from the natural attacks of lycanthropes (i.e. bites, claws) contracts lycanthropy. Humans become were-creatures of the same type (run by the referee, henceforth); non-humans die. The disease takes full effect in 2d12 days, showing signs of infection after half the time."],[1,2,3,4,5,6,10,11,12,13,14,20],[0]],

	["Wereboar",4,15,9,200,1,["tusk/bite"],["2d6"],["Battle Rage: In human form, may enter a berserk rage: +2 to hit; fight to the death. Rage sometimes causes them to attack their allies.","Animal Form: Only harmed by silver weapons or +1 or better magical weapons.","Armour: Not used because it hinders shape-changing.","Wolfsbane: If hit, must save versus their level or flee in terror.","Reversion: If killed, a lycanthrope reverts to its human form.","Scent: Horses and some other animals can smell lycanthropes and will become afraid.","Infection: A character who loses more than half his or her hit points from the natural attacks of lycanthropes (i.e. bites, claws) contracts lycanthropy. Humans become were-creatures of the same type (run by the referee, henceforth); non-humans die. The disease takes full effect in 2d12 days, showing signs of infection after half the time."],[1,2,3,4,5,6,10,11,12,13,14,20],[0]],

	["Wererat",3,12,8,50,1,["bite","weapon"],["1d4","1d6 or weapon"],["Surprise: Surprise on 1-4; set ambushes.","Weapons: May use weapons in both forms.","Animal Form: Only harmed by silver weapons or +1 or better magical weapons.","Armour: Not used because it hinders shape-changing.","Wolfsbane: If hit, must save versus their level or flee in terror.","Reversion: If killed, a lycanthrope reverts to its human form.","Scent: Horses and some other animals can smell lycanthropes and will become afraid.","Infection: A character who loses more than half his or her hit points from the natural attacks of lycanthropes (i.e. bites, claws) contracts lycanthropy. Humans become were-creatures of the same type (run by the referee, henceforth); non-humans die. The disease takes full effect in 2d12 days, showing signs of infection after half the time."],[1,2,3,4,5,6,10,11,12,13,14,20],[0]],

	["Weretiger",5,16,9,300,1,["2 claws","bite"],["1d6","2d6"],["Surprise: On a 1-4, due to stealth.","Animal Form: Only harmed by silver weapons or +1 or better magical weapons.","Armour: Not used because it hinders shape-changing.","Wolfsbane: If hit, must save versus their level or flee in terror.","Reversion: If killed, a lycanthrope reverts to its human form.","Scent: Horses and some other animals can smell lycanthropes and will become afraid.","Infection: A character who loses more than half his or her hit points from the natural attacks of lycanthropes (i.e. bites, claws) contracts lycanthropy. Humans become were-creatures of the same type (run by the referee, henceforth); non-humans die. The disease takes full effect in 2d12 days, showing signs of infection after half the time."],[1,2,3,4,5,6,10,11,12,13,14,20],[0]],

	["Werewolf",4,14,8,125,1,["bite"],["2d4"],["Animal Form: Only harmed by silver weapons or +1 or better magical weapons.","Armour: Not used because it hinders shape-changing.","Wolfsbane: If hit, must save versus their level or flee in terror.","Reversion: If killed, a lycanthrope reverts to its human form.","Scent: Horses and some other animals can smell lycanthropes and will become afraid.","Infection: A character who loses more than half his or her hit points from the natural attacks of lycanthropes (i.e. bites, claws) contracts lycanthropy. Humans become were-creatures of the same type (run by the referee, henceforth); non-humans die. The disease takes full effect in 2d12 days, showing signs of infection after half the time."],[1,2,3,4,5,6,10,11,12,13,14,20],[0]],

	["Manticore",6,15,9,350,1,["2 claws","bite","6 tail spikes"],["1d4","2d4","1d6 ea"],["Tail Spikes: 180' range. 24 in total; 2 regrow each day.","Track and Ambush: Follow humans and attack with tail spikes when they stop to rest."],[6],[1]],

	["Mastodon",15,16,8,1350,1,["2 tusks","Trample"],["2d6","4d8"],["Charge: In first round of combat, when not in melee. Requires a clear run of 20 yards. Tusks inflict double damage.","Trample: 3-in-4 chance of trampling each round. +4 to-hit human-sized or smaller creatures.","Ivory: Each tusk is worth 2d4 × 100cp."],[3,4,6,10,11,12],[1]],

	["Medium",1,10,7,16,1,["dagger","Spell"],["1d4","Spell"],["Spells: Each individual has one 1st level spell. (Choose or select at random.)","Master: A 3rd level master has two 1st level spells and one 2nd level spell. (Choose or select at random.)"],[0],[0]],

	["Medusa",4,11,8,175,1,["snakebite"],["1d6 + Poison"],["Disguise: Use hooded cloaks to lure victims close before revealing their true form.","Petrification: Anyone who looks at an undisguised medusa will be turned to stone (BODY Check).","Averting Eyes: -4 penalty to-hit; the medusa gains a +2 bonus to attack.","Mirrors: The reflection of a medusa is harmless. If a medusa sees her own reflection, she must MIND Check or be petrified.","Poison: The snakes' bites are venomous: BODY Check or die in 1 turn.","Magic Resistance: +2 to saves vs spells."],[2,13,20],[2]],

	["Merchant",1,12,14,10,1,["weapon"],["1d6 or weapon"],["Wagons: 2 per merchant. Pulled by horses, mules, or camels (by terrain).","Caravan Guards: For every merchant, 4 guards are present (HD 1). AC 15, with crossbows, swords, daggers.","Guard Captain: Guards are led by a HD 5  fighter. AC 15. Equipped as guards.","Pack Animals: 1d12 extra horses, mules, or camels.","Treasure: Should be reduced, if less than 10 merchants are in the group."],[1,2,3,4,5,6,10,11,12,13,14],[0]],

	["Merman",1,13,8,10,1,["weapon"],["1d6 or weapon"],["Weapons: Spears, tridents, or daggers.","Underwater Villages: Home to 1d3 × 100 individuals.","Guardians: Use trained sea creatures or monsters to guard their homes."],[8],[0]],

	["Minotaur",6,13,12,275,2,["gore","bite OR weapon"],["1d6","1d6 OR 1d6 + 2 or weapon + 2"],["Weapons: Prefer axes, clubs, or spears.","Aggressive: Attack same size or smaller creatures on sight. Pursue until the victims are out of sight."],[2,13],[0]],

	["Mule",2,12,8,20,1,["kick","bite"],["1d4","1d3"],["Tenacious: Can be taken underground, if the referee allows it.","Defensive: May attack if threatened, but cannot be trained to attack on command.","Beast of Burden: Carry up to 2,000 coins unencumbered; up to 4,000 at half speed."],[1,2,3,4,5,6,10,11,12,13,14],[0]],

	["Mummy",5,16,12,400,1,["touch"],["1d12 + Disease"],["Paralyse with Terror: Anyone seeing a mummy must SPIRIT Check or be paralysed with terror. Paralysis is broken if the mummy attacks or goes out of sight.","Disease: Anyone hit contracts a horrible rotting disease. Magical healing is ineffective; natural healing is ten times slower. The disease can only be removed by magic.","Damage Immunity: Only harmed by fire or magic. All damage reduced by half.","Undead: Make no noise, until they attack. Immune to effects that affect living creatures (e.g. poison). Immune to mind-affecting or mind-reading spells (e.g. charm, hold, sleep)."],[13],[0]],

	["Neanderthal(Caveman)",2,11,7,20,1,["weapon"],["2d4 or weapon + 1"],["Weapons: Prefer stone axes, stone hammers, clubs, or spears."],[1,2,3,4,5,6,10,11,12,13,14],[1]],

	["Nixie",1,12,6,10,1,["weapon","group spell"],["1d4","Charm"],["Shy: Will try to charm intruders, rather than entering combat.","Weapons: Daggers and small tridents (as spears).","Charm: 10 nixies together can cast a charm to enchant a victim to serve them for one year. MIND Check or be charmed: move towards the nixies (resisting those who try to prevent it); defend the nixies; obey the nixies' commands (if understood); unable to cast spells or use magic items; unable to harm the nixies. Killing the nixies breaks the charm.","Summon Giant Bass: Each nixie can summon one fish to aid in combat.","Bestow Water Breathing: Can cast upon charmed slaves. Lasts for one day, then must be refreshed."],[9],[1]],

	["Noble",3,17,8,35,1,["weapon"],["1d8 or weapon"],["Squire and Retainers: Accompanied by a 2nd level guard (a squire) and up to ten 1st level guard (retainers)."],[1,2,3,4,5,6,10,11,12,13,14],[0]],

	["Nomad",1,12-15,8,10,1,["weapon"],["1d6 or weapon"],["Mounted: On riding horses or (in the desert) on camels.","Camps: Hunting / foraging groups commonly combine and live in a tribe of up to 300 nomad warriors.","Traders: Often carry trade route tales of faraway lands."],[1,2,3,4,5,6,10,11,12,13,14],[0]],

	["Normal Human",3,10,6,5,1,["weapon"],["1d6 or weapon"],[],[1,2,3,4,5,6,10,11,12,13,14],[0]],

	["Ochre Jelly",5,11,12,300,1,["touch"],["2d6"],["Immunity: Unharmed by all attacks except cold or fire.","Division: Lightning or attacks with weapons cause the jelly to divide into 1d4+1 2HD jellies that do half damage.","Acid: After a successful attack, sticks to the victim and exudes acid. The acid inflicts 2d6 damage per round to flesh and destroys cloth, leather, or wood in one round. (Stone and metal are unaffected.)","Seep: Can squeeze through small holes and cracks."],[2,13],[0]],

	["Octopus, Giant",8,12,7,650,1,["8 tentacles","bite"],["1d3 + Constriction","1d6"],["Constriction: Tentacles grab and constrict after a hit. Each constricting tentacle inflicts: 1d3 automatic damage per round, plus a -1 penalty to attacks.","Severing Tentacles: Requires a hit with a cutting weapon that does 6 or more damage.","Ink Cloud: When escaping, can emit a cloud of black ink (80' diameter) and jet away at 3 times normal speed."],[8],[0]],

	["Ogre",4,14,10,125,1,["club"],["1d10"],["Sack: Outside of the lair, carry a sack containing 1d6 × 100cp."],[2,3,4,5,6,10,11,12,13],[0]],

	["Orc",1,13,6,10,1,["weapon"],["1d6 or weapon"],["Hate the Sun: -1 to-hit in full daylight.","Mercenaries: Orcs may be hired to fight in Chaotic armies. They delight in wanton killing and razing of settlements."],[1,2,3,4,5,6,10,11,12,13],[0]],

	["Owlbear",5,14,9,175,1,["2 claws","bite"],["1d8","1d8"],["Bear Hug: If a victim is hit by both paws in the same round, the owl bear hugs for an extra 2d8 automatic damage."],[2,3],[0]],

	["Panther",4,15,8,75,1,["2 claws","bite"],["1d4","1d8"],["Cautious Hunter: Usually avoids combat unless starving or cornered.","Pursuit: Always pursue prey that flees."],[3,4,6,11],[0]],

	["Pegasus",3,13,8,25,1,["2 hooves"],["1d6"],["Hate Hippogriffs: Natural enemies.","Mount: Can carry a human-sized rider.","Training: If captured when young, will serve Lawful characters."],[1],[6,11,12]],

	["Piranha, Giant",4,13,7,50,1,["bite"],["1d8"],["Surround opponents: A target can be attacked by up to 8 giant piranhas.","Morale: When blood is in the water, do not check morale."],[9],[0]],

	["Pirate",1,12,7,10,1,["weapon"],["1d6 or weapon"],["Ships and Crew: Depends where encountered. Rivers or Lakes: 1d8 river boats (1d2 × 10 pirates each); coastal waters: 1d6 small galleys (1d3+1 × 10 pirates each); any: 1d4 longships (1d3+2 × 10 pirates each); ocean: 1d3 small warships (1d5+3 × 10 pirates each).","Treasure: Divided between vessels. Instead of carrying with them, may have a map to where it is buried."],[1,8,9],[0]],

	["Pixie",1,16,7,13,1,["dagger"],["1d4"],["Invisible: Naturally invisible, but may choose to reveal themselves. May remain invisible when attacking: cannot be attacked in the first round; in subsequent rounds, may be attacked at -2 to hit (locatable by faint shadows and air movement).","Surprise: Always surprise, if invisible.","Limited Flight: Small wings only allow 3 turns of flight. Must rest 1 turn after flying."],[3],[1]],

	["Pteranodon",5,13,8,175,1,["bite"],["1d12"],[],[4,6,11],[2]],

	["Pterodactyl",1,12,7,10,1,["bite"],["1d3"],[],[4,6,11],[2]],

	["Purple Worm",15,13,10,2300,2,["bite","sting"],["2d8","1d8 + Poison"],["Swallow Whole: A bite attack roll of 20, or 4 or more than the target number required, indicates that a human-sized (or smaller) victim is swallowed. Inside the worm's belly: suffer 3d6 damage per round (until the worm dies); may attack with sharp weapons at -4 to hit; body digested in 6 turns after death.","Poison: Causes death (BODY Check).","In Restricted Spaces: May not always be able to bite and sting at once."],[2,3,10,13],[2]],

	["Giant Rat",1,12,,8,5,1,["bite"],["1d3 + Disease"],["Disease: Bite has a 1-in-20 chance of infecting the target (BODY Check). The disease has a 1-in-4 chance of being deadly (die in 1d6 days). Otherwise, the victim is sick and bedridden for one month.","Afraid of Fire: Will flee fire, unless forced to fight by summoner.","Attacking in Water: May attack without penalty; excellent swimmers."],[2,13],[0]],

	["Normal Rat",1,10,5,5,1["1 bite per pack"],["1d6 + Disease"],["Pack: Each group of 5-10 rats attacks as a pack. Each pack makes a single attack roll against one creature.","Engulf: The creature attacked must save vs death or fall prone, unable to attack until able to stand up again.","Disease: Bite has a 1-in-20 chance of infecting the target (BODY Check). The disease has a 1-in-4 chance of being deadly (die in 1d6 days). Otherwise, the victim is sick and bedridden for one month.","Afraid of Fire: Will flee fire, unless forced to fight by summoner.","Attacking in Water: May attack without penalty; excellent swimmers."],[1,2,3,4,5,6,10,11,12,13,14],[0]],

	["Remnants",1,11,5,10,1,["weapon"],["1d6"],["Malleable Individual remnants can mold their flesh to assume an appearance of different person at will.","Hivemind All remnants within 1 mile can communicate telepathically and act with impeccable coordination in combat.","Obedient Individual remnant will carry out loud, one-word command that is not directly harmful to him or other remnants.","Vulnerable to mind-altering effects"],[1,2,3,4,5,6,10,11,12,13,14],[1]],

	["Rhagodessa",4,14,9,125,1,["Sucker","bite"],["Grab","2d8"],["Suckers: Front legs equipped with suckers for grabbing prey.","Grab: When hit with a sucker, the victim is stuck and will be bitten automatically next round.","Cling: Can walk on walls."],[2,3,6,11,13],[1]],

	["Normal Rhinoceros",6,14,6,275,1,["horn","Trample"],["2d4","2d8"],["Charge: If disturbed or threatened, will charge in a random direction. Requires a clear run of 20 yards. Make a horn attack on all in the path: inflicts double damage.","Trample: 3-in-4 chance of trampling each round. +4 to-hit human-sized or smaller creatures."],[12],[0]],

	["Woolly Rhinoceros",8,15,6,650,1,["horn","Trample"],["2d6","2d12"],["Charge: If disturbed or threatened, will charge in a random direction. Requires a clear run of 20 yards. Make a horn attack on all in the path: inflicts double damage.","Trample: 3-in-4 chance of trampling each round. +4 to-hit human-sized or smaller creatures."],[7],[0]],

	["Robber Fly",2,13,8,20,1,["bite"],["1d8"],["Surprise: Hunt patiently. Surprise on a 1-4, when waiting in shadows for prey.","Poison Immunity: Unharmed by killer bees' poison.","Leap: Can leap up to 30' and attack."],[3,12,13],[1]],

	["Giant Roc",36,19,10,6250,1,["2 claws","bite"],["3d6","8d6"],["Swoop: Can dive onto victims visible from above. If the victim is surprised, the attack inflicts double damage. On an attack roll of 18 or more, the victim can be carried away (if of appropriate size).","Eggs: 1d6 eggs or chicks in 50% of nests.","Trainable: Can be trained, if captured when young."],[1,2,3,4,5,6,10,11,12,13,14],[0]],

	["Large Roc",12,17,9,1100,1,["2 claws","bite"],["1d8","2d10"],["Swoop: Can dive onto victims visible from above. If the victim is surprised, the attack inflicts double damage. On an attack roll of 18 or more, the victim can be carried away (if of appropriate size).","Eggs: 1d6 eggs or chicks in 50% of nests.","Trainable: Can be trained, if captured when young."],[1,2,3,4,5,6,10,11,12,13,14],[0]],

	["Small Roc",6,15,8,275,1,["2 claws","bite"],["1d4+1","2d6"],["Swoop: Can dive onto victims visible from above. If the victim is surprised, the attack inflicts double damage. On an attack roll of 18 or more, the victim can be carried away (if of appropriate size).","Eggs: 1d6 eggs or chicks in 50% of nests.","Trainable: Can be trained, if captured when young."],[1,2,3,4,5,6,10,11,12,13,14],[0]],

	["Rock Baboon",2,13,8,20,2,["club","bite"],["d6","1d3"],["Weapons: Wield bones or branches as clubs. (Do not use other tools."],[6,11,12],[3,4,12]],

	["Rockfish, Giant",6,12,8,400,4,["spine"],["1d4 + poison"],["Camouflage: 70% chance of being mistaken for a rock or coral formation.","Grasping: If mistaken for a rock and grasped, all 4 spines automatically hit.","Poison: Causes death (BODY Check)."],[8],[0]],

	["Rust Monster",5,17,7,175,1,["feeler"],["Rusting"],["Rusting: Metal that touches a rust monster (e.g. weapons that hit it, or armour struck by a feeler) crumbles instantly to rust. Magic items have a 10% chance per “plus”, to be unaffected on each successful hit. Each time a magic item is affected, it loses one 'plus'.","Mundane Damage Immunity: Can only be harmed by magical attacks.","Smell Metal: Attracted by the scent."],[2],[1]],

	["Flame Salamander",8,17,8,1200,2,["2 claws","bite","Heat Aura"],["1d4","1d8","1d8"],["Heat Aura: All creatures within 20' suffer 1d8 damage per round.","Fire Immunity: Unharmed by fire.","Hate Frost Salamanders: Will attack on sight.","Mundane Damage Immunity: Can only be harmed by magical attacks."],[2],[15,20]],

	["Frost Salamander",12,16,9,1900,2,["4 claws","bite","Cold Aura",],["1d6","2d6","1d8"],["Cold Aura: All creatures within 20' suffer 1d8 damage per round.","Cold Immunity: Unharmed by cold-based attacks.","Hate Flame Salamanders: Will attack on sight.","Mundane Damage Immunity: Can only be harmed by magical attacks."],[7,20],[0]],

	["Scorpion, Giant",6,16,7,275,1,["2 claws","stinger"],["1d6+1 ea","1d6+2 + BODY or take additional 3d6 damage"],[2,5,13],[1]],

	["Scorpion, Giant",2,13,7,20,1,["claw","stinger"],["1d4","1d8"],[],[2,5,13],[1]],

	["Scorpion, Giant",4,17,11,125,1,["2 claws","sting"],["1d10","1d4 + Poison"],["Aggressive: Normally attack on sight.","Poison: Causes death (BODY Check).","Grab and Sting: +2 bonus to sting attack, if a claw hits."],[2,5,13],[1]],

	["Sea Serpent (Lesser)",6,14,8,275,1,["bite","Squeeze"],["2d6","1d10 hull damage"],["Lunge: Up to 20' out of water to use bite attack.","Squeeze: Coil around and crush a vessel (of equal size or smaller)."],[8],[1]],

	["Shadow",3,12,35,1,["touch"],["1d4 + Strength Drain"],["Surprise: On a 1-5.","Strength Drain: Victims lose 1 BODY per hit. Recovers after 8 turns. If reduced to 0 BODY, the victim becomes a shadow.","Mundane Damage Immunity: Can only be harmed by magical attacks.","Spell Immunity: Unaffected by charm and sleep spells."],[3,13],[1]],

	["Bull Shark",2,15,7,20,2,["bite","stun"],["2d4","Ram"],["Blood Scent: Can detect blood in water up to 300' away.","Feeding Frenzy: Triggered by the scent of blood: always attack; no morale checks.","Ram: Stunned for 3 rounds (BODY Check)."],[8],[0]],

	["Great White Shark",8,15,7,650,1,["bite"],["2d10"],["Blood Scent: Can detect blood in water up to 300' away.","Feeding Frenzy: Triggered by the scent of blood: always attack; no morale checks."],[8],[1]],

	["Mako Shark",4,15,7,75,1,["bite"],["2d6"],["Blood Scent: Can detect blood in water up to 300' away.","Feeding Frenzy: Triggered by the scent of blood: always attack; no morale checks.","Unpredictable: May ignore other creatures, only to attack moments later."],[8],[0]],

	["Shrew, Giant",1,15,10,10,2,["bite","1d6"],["Initiative: Always gain initiative on first attack. +1 to initiative on second attack.","Ferocity: Attack targets' heads. Targets with 3 HD or less must MIND Check or flee.","Climbing: Skilled climbers; can jump up to 5'.","Territorial: Ferociously defend their hunting area from all intruders.","Echolocation: Perceive their surroundings up to 60'. Unaffected by lack of light. If unable to hear (e.g. silence, 15' radius): AC reduced to 11, -4 penalty to attacks."],[3,12,13],[1]],

	["Shrieker",3,12,12,35,1,["Shriek"],["Shriek"],["Shriek: Triggered by light (up to 60' away) or movement (up to 30' away). Shriek lasts for 1d3 rounds. Each round of the shriek, there is a 50% chance of a wandering monster being attracted (will arrive in 2d6 rounds)."],[2,13],[0]],

	["Skeleton",1,12,12,10,1,["weapon"],["1d6 or weapon"],["Undead: Make no noise, until they attack. Immune to effects that affect living creatures (e.g. poison). Immune to mind-affecting or mind-reading spells (e.g. charm, hold, sleep)."],[2,13],[0]],

	["Giant Rattler",4,14,8,125,2,["bite"],["1d4 + Poison"],["Rattle: Shaken to warn off creatures the snake does not wish to attack.","Poison: Causes death in 1d6 turns (BODY Check).","Speed: Attack twice per round. Second attack at the end of each round."],[1,2,3,4,5,6,10,11,12,13,14],[0]],

	["Pit Viper",2,13,7,25,1,["bite"],["1d4 + Poison"],["Infravision: 60'. (Pits in the head allow heat sense.)","Initiative: Always gains initiative (no roll), due to special senses.","Poison: Causes death (BODY Check)."],[1,2,3,4,5,6,10,11,12,13,14],[0]],

	["Rock Python",5,13,8,300,1,["bite"],["1d4 + Constriction"],["Constriction: When a bite attack is successful, the python wraps around the victim and begins to squeeze, inflicting 2d4 automatic damage immediately and on each subsequent round."],[1,2,3,4,5,6,10,11,12,13,14],[0]],

	["Sea Snake",3,13,7,50,1,["bite"],["1hp + Poison"],["Pinprick Bite: 50% chance of going unnoticed.","Poison: BODY Check to avoid. Slow acting: effects felt after 1d4+2 turns. At this point, the neutralize poison spell has a 25% chance of being ineffectual.","Larger Individuals: With higher HD may be used, if the referee wishes. These snakes are 6' long for every 3 HD."],[8],[0]],

	["Spitting Cobra",1,12,7,13,1,["spit","bite"],["Blinding Spit","1d3 + Poison"],["Blinding Spit: Range: 6'. A hit causes permanent blindness (BODY Check).","Poison: Causes death in 1d10 turns (BODY Check)."],[1,2,3,4,5,6,10,11,12,13,14],[0]],

	["Spectre",6,17,11,725,1["touch"],["1d8 + Energy Drain"],["Undead: Make no noise, until they attack. Immune to effects that affect living creatures (e.g. poison).","Immune to mind-affecting or mind-reading spells (e.g. charm, hold, sleep).","Mundane Damage Immunity: Can only be harmed by magical attacks.","Energy Drain: A successfully hit target permanently loses two experience levels (or Hit Dice). This incurs a loss of two Hit Dice of hit points, as well as all other benefits due to the drained levels (e.g. spells, saving throws, etc.). A character's XP is reduced to the lowest amount for the new level. A person drained of all levels becomes a spectre next night, under the control of the spectre that killed him or her."],[13],[1]],

	["Black Widow",3,13,8,50,1["bite"],["2d6 + Poison"],["Poison: Causes death in 1 turn (BODY Check).","Webs: Creatures caught in webs become entangled and unable to move. Breaking free depends on BODY: 2d4 turns for BODY in the normal human range; 4 rounds for BODY above 18; 2 rounds for creatures with giant strength. The webs can be destroyed by fire in two rounds. All creatures in a flaming web suffer 1d6 points of damage."],[],[]],

	["Black Widow",3,14,7,50,1,["bite"],["1d6 + BODY Check or take additional 3d6 damage"],["Sticky Webs Anyone fighting in these webs take a -1 penalty to attack rolls due to getting caught on threads."],[3,13],[1]],

	["Crab Spider",2,12,7,25,1,["bite"],["d8 + Poison"],["Ambush: Attack by dropping on victims from above.","Surprise: On a 1-4, due to camouflage.","Cling: Can walk on walls and ceilings.","Poison: Causes death in 1d4 turns (BODY Check with a +2 bonus)."],[2,13],[1]],

	["Jumping Spider,Giant",2,14,7,25,1,["bite"],["1d6"],["Nightvision","Spider Jump Can jump far allowing them to close gaps rapidly."],[2,3,4,6,10,11,13],[1]],

	["Tarantella",4,14,8,125,1,["bite"],["1d8 + Poison"],["Poison: BODY Check or dance for 2d6 turns (suffering from painful, jerking spasms that resemble a macabre dance).","Onlookers: Viewers of one affected by the poison must MIND Check or begin dancing in the same fashion, for as long as the poisoned victim.","Dancing: Those affected suffer a -4 penalty to attack rolls and AC. After 5 turns of dancing, they become exhausted: fall to the ground, helpless."],[3,13],[1]],

	["Sprite",1,14,7,6,1,["spell"],["Curse"],["Curse: Five sprites can collectively curse a target (no attack roll; MIND Check). The effect is determined by the referee, but will always be used to comical effect (e.g. target trips, target's nose grows).","Pranksters: Even if attacked, sprites have no interest in killing, merely in making practical jokes."],[3],[0]],

	["Stegosaurus",11,16,7,1100,1,["tail","Trample"],["2d8","2d8"],["Trample: 3-in-4 chance of trampling each round. +4 to-hit human-sized or smaller creatures."],[11,12],[2]],

	["Stirge",1,12,9,13,1,["beak"],["1d3 + Blood Sucking"],["Dive Attack: First attack at an opponent is at +2 to hit.","Blood Sucking: Upon a successful attack, attaches to the victim and drains its blood: 1d3 automatic damage per round.","Detaching: If stirge or victim dies."],[2,3,13],[0]],

	["Sturgeon, Giant",10,19,9,1600,1,["bite"],["2d10"],["Swallow Whole: On an attack roll of 18 or more. Inside the fish's belly: suffer 2d6 damage per round (until the fish dies); BODY Check or be paralysed; may attack with sharp weapons at -4 to hit (inside belly has AC 7); body digested 6 turns after death."],[9],[0]],

	["Squid, Giant",6,12,7,275,10,["8 small tentacles","2 large tentacles","beak"],["1d4 + Constriction","1d4 + Constriction","1d10 Crush Boats","1d10 OR 2 hull damage"],["Crush Boats: 25% likely to wrap the 2 large tentacles around a boat, doing 1d10 hull damage per tentacle. When the large tentacles are grappling a boat, in subsequent rounds, the beak inflicts 2 points of hull damage automatically.","Grab Crew: 75% likely to grab crew from the deck and drag them underwater to be eaten.","Constriction: Tentacles grab and constrict after a hit. 1d4 automatic damage per round.","Severing Tentacles: Requires a hit that does 6 or more damage (8 small tentacles) or 10 or more (2 large tentacles).","Ink Cloud: When escaping, can emit a cloud of black ink (60' diameter) and jet away at 3 times normal speed. Maximum twice a day.","Gargantuan Specimens: Two or three times larger can be encountered."],[8],[1]],

	["Thoul",3,13,10,65,1,["2 claws","weapon"],["1d3 + Paralysis","1d6 or weapon"],["Paralysis: Successful attacks cause paralysis for 2d4 turns (BODY Check negates). Elves and creatures larger than ogres are unaffected. After paralysing a target, thouls will attack others.","Regeneration: A damaged thoul gains 1 hit point at the start of each round, as long as it is alive."],[2,16],[2]],

	["Tiger",6,13,9,275,1,["2 claws","bite"],["1d6","2d6"],["Surprise: On a 1-4 on a d6, in woodland, due to camouflage.","Cautious Hunter: Usually avoids combat unless starving or cornered.","Pursuit: Always pursue prey that flees."],[4,11,12],[0]],

	["Tiger, Sabre-Toothed",8,13,10,650,1,["2 claws","bite"],["1d8","2d8"],["Cautious Hunter: Usually avoids combat unless starving or cornered.","Pursuit: Always pursue prey that flees."],[3,6,11,12],[0]],

	["Titanothere",12,14,7,1100,1,["butt","Trample"],["2d6","3d8"],["Peaceful Grazers: Will not attack if left alone.","Trample: 3-in-4 chance of trampling each round. +4 to-hit human-sized or smaller creatures."],[11,12],[2]],

	["Toad, Giant",3,12,6,25,1,["bite"],["1d4+1"],["Surprise: On a 1-3, in forests or dark dungeons, due to the ability to change colour to match their surrounding.","Sticky Tongue: Attack up to 15' away. On a hit, prey (up to dwarf size) is dragged to the mouth and bitten.","Swallow Whole: An attack roll of 20 indicates a small victim is swallowed. Inside the toad's belly: suffer 1d6 damage per round (until the toad dies); may attack with sharp weapons at -4 to hit; body digested in 6 turns after death."],[2,3,9],[0]],

	["Trader",1,13,7,10,1,["weapon"],["1d6 or weapon"],["Arms: Usually carry: hand-axe, sword, shield, furs (equivalent to leather armour).","Mules: In the wilderness, have 1d4 mules loaded with trade goods (e.g. carved wooden items, furs, spices)."],[1,3,4,5,6,10,11,12,14],[0]],

	["Treant",8,17,9,650,1,["2 fists"],["2d6"],["Distrust Fire: And those who wield it.","Surprise: On a 1-3, in a forest, due to being mistaken for a tree. Encounter occurs at 30 yards or less.","Animate Trees: Each individual can animate 2 trees (within 60'; may switch trees at will). These fight as treants with movement rate 30' (10')."],[3],[1]],

	["Triceratops",11,17,8,1100,1,["gore","Trample"],["3d6","3d6"],["Aggressive: Normally attack on sight.","Charge: In first round of combat, when not in melee. Requires a clear run of 20 yards. Horns inflict double damage.","Trample: 3-in-4 chance of trampling each round. +4 to-hit human-sized or smaller creatures."],[11,12],[2]],

	["Troglodyte",2,14,9,25,1,["2 claws","bite"],["1d4","1d4"],["Hateful: Attempt to kill any creatures they encounter.","Surprise: On a 1-4, due to the ability to change colour to match their surroundings. Lurk by rock walls and await victims.","Nauseating Stench: Oils on the skin have a smell that sickens humans and demihumans: save vs BODY or suffer -2 to hit, while in melee with troglodytes."],[2,13],[1]],

	["Troll",6,15,10,650,1,["2 talons","bite"],["1d6","1d10"],["Regeneration: 3 rounds after being damaged, start regaining 3hp per round. Severed limbs reattach.","Return from Death: If killed (0hp) will regenerate and fight again in 2d6 rounds.","Fire and Acid: Cannot regenerate damage from these sources. The only way to permanently kill a troll.","Fear of Fire: Morale 8 when attacked with fire or acid."],[2,3,4,6,10,11,12,13],[1]],

	["Tuatara, Giant",6,15,6,275,1,["2 claws","bite"],["1d4","2d6"],["Infravision: 90'. Granted by retractable eye membranes."],[1,2,3,4,5,6,10,11,12,13],[0]],

	["Tyrannosaurus Rex",20,16,11,2000,1,["bite"],["6d6"],["Large Prey: Attack largest target first."],[3,4,12],[2]],

	["Unicorn",4,17,7,125,1,["2 hooves","horn"],["1d8","1d8"],["Empathy with Maidens: A pure-hearted maiden can communicate with and ride a unicorn.","Teleport: Once per day, up to 360' (including rider)."],[3],[1]],

	["Vampire",8,17,11,1500,1,["touch","gaze"],["1d10 + Energy Drain)","Charming Gaze"],["Gaseous Cloud:Immune to all weapons. Cannot attack.","Summon Beasts: In human form only. Creatures from the surrounding area: 1d10 × 10 rats, 5d4 giant rats, 1d10 × 10 bats, 3d6 giant bats, 3d6 wolves, or 2d4 dire wolves.","Coffins: Must rest in a coffin during the day or lose 2d6hp (only regenerated by resting a full day). Cannot rest in a blessed coffin. Always keep multiple coffins in hidden locations.","Undead: Make no noise, until they attack. Immune to effects that affect living creatures (e.g. poison). Immune to mind-affecting or mind-reading spells (e.g. charm, hold, sleep).","Mundane Damage Immunity: Can only be harmed by magical attacks.","Energy Drain: A successfully touched target permanently loses two experience levels (or Hit Dice). This incurs a loss of two Hit Dice of hit points, as well as all other benefits due to the drained levels (e.g. spells, saving throws, etc.). A character's XP is reduced to the lowest amount for the new level. A person drained of all levels becomes a vampire in 3 days.","Charming Gaze: MIND Check at -2 or be charmed: move towards the vampire (resisting those who try to prevent it); defend the vampire; obey the vampire's commands (if understood); unable to cast spells or use magic items; unable to harm the vampire. Killing the vampire breaks the charm.","Regeneration: A damaged vampire gains 3hp at the start of each round, as long as it is alive. At 0hp: Change into Gaseous Form; flee to coffin.","Change Form: At will; takes 1 round: Humanoid: Standard form. Dire Wolf: Atk bite (2d4). AC, HD, ML, saves as Vampire. Giant Bat: Atk bite (1d4). AC, HD, ML, saves as Vampire.","Garlic: Odour repels: save vs their level or unable to attack this round.","Holy Symbols: If presented, will keep a vampire at bay (10'). May attack wielder from another direction.","Running Water: Cannot cross (in any form), except by a bridge or carried inside a coffin.","Mirrors: Avoid; do not cast a reflection.","Continual Light: Partly blinded by the light from this spell (-4 to attacks).","Sunlight: CHECK vs their HD each round or be disintegrated.","Stake Through the Heart: Permanently kills.","Immersion in Water: For 1 turn permanently kills.","Destroying Coffins: Permanently killed if all hit points lost when unable to rest (see coffins)."],[1,2,3,4,5,6,11,12,13,14],[1]],

	["Veteran",1-3,17,9,20,["weapon"],["1d8 or weapon"],[],[1,2,3,4,5,6,10,11,12,13,14],[0]],

	["Freshwater Termite",2,13,8,25,1,["bite","Irritant Spray"],["1d4","stun"],["Irritant Spray: Above water; maximum once a turn. Can spray one target: BODY Check or stunned for 1 turn.","Ink Cloud: Underwater; maximum once a turn. When escaping, can emit a cloud of black ink to confuse attackers.","Eat Ships: Cling to bottom of vessel. Each individual inflicts 1d3 hull damage then drops off.","Noticing ship damage: 50% chance per round of spotting leaks."],[9],[0]],

	["Saltwater Termite",4,14,11,75,1,["bite","Irritant Spray"],["1d6","stun"],["Irritant Spray: Above water; maximum once a turn. Can spray one target: save vs Constituiton or stunned for 1 turn.","Ink Cloud: Underwater; maximum once a turn. When escaping, can emit a cloud of black ink to confuse attackers.","Eat Ships: Cling to bottom of vessel. Each individual inflicts 1d3 hull damage then drops off.","Noticing ship damage: 50% chance per round of spotting leaks."],[8],[0]],

	["Swamp Termite",2,15,10,15,1,["bite","Irritant Spray"],["1d3","stun"],["Irritant Spray: Above water; maximum once a turn. Can spray one target: save vs Constituiton or stunned for 1 turn.","Ink Cloud: Underwater; maximum once a turn. When escaping, can emit a cloud of black ink to confuse attackers.","Eat Ships: Cling to bottom of vessel. Each individual inflicts 1d3 hull damage then drops off.","Noticing ship damage: 50% chance per round of spotting leaks."],[10],[0]],

	["Weasel, Giant",5,12,8,125,1,["bite"],["2d4 + Blood Sucking"],["Infravision: 30'.","Blood Sucking: Upon a successful attack, locks onto the victim and drains its blood: 2d4 automatic damage per round.","Detaching: If weasel or victim dies.","Tracking: By scent, favouring wounded prey.","Treasure: Found in lair on bodies of victims."],[2,3,13],[0]],

	["Killer Whale",6,13,10,275,1,["bite"],["1d20"],["Swallow Whole: An attack roll of 20 indicates a halfling-sized (or smaller) victim is swallowed. Inside the whale's belly: suffer 1d6 damage per round (until the whale dies); may attack with sharp weapons at -4 to hit; drown after 10 rounds; body digested in 6 turns after death."],[8],[0]],

	["Narwhal",12,12,8,1100,1,["bite","horn"],["1d8","2d6"],["Horn: Is worth 1d6 × 1,000cp. Rumours say a narwhal's horn vibrates when evil is near."],[8],[1]],

	["Sperm Whale",36,13,7,6250,1,["bite","Ram Ship"],["3d20","6d6 hull damage"],["Swallow Whole: An attack roll of 4 or more than the target number required indicates a human-sized (or smaller) victim is swallowed. Inside the whale's belly: suffer 3d6 damage per round (until the whale dies); may attack with sharp weapons at -4 to hit; body digested in 6 turns after death.","Ram Ships: 10% likely to attack vessels."],[8],[0]],

	["Wight",3,14,12,50,1,["touch"],["Energy Drain"],["Undead: Make no noise, until they attack. Immune to effects that affect living creatures (e.g. poison). Immune to mind-affecting or mind-reading spells (e.g. charm, hold, sleep).","Mundane Weapon Immunity: Only harmed by silver weapons or magic.","Energy Drain: A successfully hit target permanently loses one experience level (or Hit Die). This incurs a loss of one Hit Die of hit points, as well as all other benefits due to the drained level (e.g. spells, saving throws, etc.). A character's XP is reduced to halfway between the former and new levels. A person drained of all levels becomes a wight in 1d4 days, under the control of the wight that killed him or her."],[13,16],[0]],

	["Dire Wolf",5,13,8,125,1,["bite"],["2d4"],["Training: At the referee's discretion, captured cubs may be trained like dogs. Dire wolves are ferocious and extremely difficult to train.","Mounts: Sometimes trained as mounts by goblins."],[3],[1]],

	["Normal Wolf",3,12,6,25,1,["bite"],["1d6"],["Training: At the referee's discretion, captured cubs may be trained like dogs. Wolves are difficult to train.","Strength in Numbers: Packs of 4 or more wolves have morale 8. If the pack is reduced to less than 50% of its original size, this morale bonus is lost."],[3],[0]],

	["Wraith",4,16,12,175,1,["touch"],["1d6 + Energy Drain"],["Undead: Make no noise, until they attack. Immune to effects that affect living creatures (e.g. poison). Immune to mind-affecting or mind-reading spells (e.g. charm, hold, sleep).","Mundane Weapon Immunity: Only harmed by silver weapons or magic.","Damage Reduction: Half damage from silver weapons.","Energy Drain: A successfully hit target permanently loses one experience level (or Hit Die). This incurs a loss of one Hit Die of hit points, as well as all other benefits due to the drained level (e.g. spells, saving throws, etc.). A character's XP is reduced to the lowest amount for the new level. A person drained of all levels becomes a wraith in one day, under the control of the wraith that killed him or her."],[13,16],[1]],

	["Wyvern",7,16,9,850,1,["bite","sting"],["2d8","1d6 + Poison"],["Poison: Causes death (BODY Check)."],[1],[3,6]],

	["Yellow Mould",1,8,0,12,20,1,["spores"],["1d6 + Choking"],["Area: Each 10 square feet (e.g. 2' × 5') covered in yellow mould is treated as one 'individual'. (A 10' × 10' area would consist of 10 individual moulds.)","Immunity: Unharmed by all attacks but fire (a burning torch does 1d4 damage).","Spore Cloud: 50% chance of attacking if touched (or damaged): releases a cloud of spores affecting all within a 10' cube area.","Choking: BODY Check or die within 6 rounds.","Erosion: Wood or leather in contact with the mould will be eaten away."],[2,13],[0]],

	["Zombie",2,11,12,20,1,["weapon"],["1d8 or weapon"],["Initiative: Always lose (no roll).","Undead: Make no noise, until they attack. Immune to effects that affect living creatures (e.g. poison). Immune to mind-affecting or mind-reading spells (e.g. charm, hold, sleep)."],[13],[0]],
];