var LocksList = [
  "Magical(Wizard Locked)","Magical(unique key somewhere in dungeon)","Mundane(Extremely Difficult)","Mundane(Hard to pick)","Mundane(Simple)","padlock"
];
var surfaceAdjectives= [
  'pitted','barnacled','smooth','soft','rough','velveteen','coarse','elegant','sleek','polished','brushed','grainy','glistening','wet','slick',"lustrous","monolithic","shining","hammered","tarnished","rusty","dinged","scratched","brushed","dirty","bolted","damaged","broken"
];
var doorHardware = [
  "bands","bolts","hardware","frame","panels","knob","handle","knocker","inlay(s)","hatch","ornate handle"
];
var SpecialMaterialList = [
  'ceramic','bone','coral','earth','ivory','plaster','concrete','Leather','Shields','Animal Hide','Reptile Hide','Boulder','Tree trunk','Curtain','Tapestry','Loose Bricks','Illusion','Magical Darkness','Stone Golem (argumentative but harmless)','Sheet of Flames','Ice','Waterfall','Smoke'
];
var doorTraps = [
  "Acid spray above door",
  "Flame shoots up from holes in front of door",
  "Block fall from ceiling",
  "Door charged with electricity",
  "Pit opens",
  "Chute opens",
  "Sleeping gas",
  "Spiked portcullis drops from ceiling",
  "Poisoned Needle in doorknob",
  "Spear Trap",
  "Crossbow Trap",
  "Bell Rings, roll for wandering monster",
  "Teleporter",
  "a piercing dart",
  "slashing swing-blade",
  "rock drops",
  "a fiery explosion",
  "a resource-draining beam",
  "a spray of diseased slime",
  "magical portal",
  "discharges magical energy",
  "activates a spell",
  "opens a hatch/trapdoor/sliding cover with something nasty",
  "gives visions to any who pass through","summons guardians","triggers alarm","falls on anyone opening it"
];
var UnusualFeaturesList=[
  "arcane writing (read magic required to decipher)","ancient pictograms","warning sign on door",'sign on door reads "management" in orcish',"message box hangs on door", "contains 1d4-1 messages","runed","obscene graffiti","comedic graffiti","geometric patterns","magic circle inscribed on door","human-shaped outline charred onto door","fingernail scratches on door","bas relief of demonic face (10% delivers magic mouth message)","peephole (50% looks in, 50% looks out)","water seeping from under door","acid scars on door","smell of rotting meat exudes from door","smell of delicious cooking meat exudes from door","smell of perfume lingers around door","small bouquet of flowers placed outside door","charred corpse in front of door","holy symbol on chain hangs from doorknob","bell that rings when it opens","has picture hanging","has mosaic painted on it","The key hangs from the door","The key is in the lock","has things nailed to it","arched","sliding","slides into the ceiling","slides to the side","a shelf built into it","a prominent door-knocker","a locking bar","a window of metal bars","circular","triangular","unusual shape","has a talking face","incorporated into a larger piece of art","is a mimic or other shapeshifter","has a hidden compartment with something valuable inside","is a magical portal","contains an imprisoned spirit","drains energy from any who touch it","makes sounds","has a book case built into it","covered in bloodstains","is sticky","opens to somewhere unexpected - "+ getRandomElements(1,["a cliff face","a chasm","water","darkness"])[0][0]
];
var shapeList = [
  
];  
var craftsmanship = [
  "gracefully","elegantly","intricately","meticulously"
];
var patterns = [
  "floral","faunal","fractal","spiral","geometric"
];

function makeDoor(){
  var material=rollDice('1d8','Y');
  var doorState=rollDice('1d6','Y');
  var lock=rollDice('1d8','Y');
  var useUnusual=true;
  var wood=getRandomElements(1, TreesList)[0][0];
  var metal=getRandomElements(1, MetalsList)[0][0];
  var hardware=getRandomElements(1, doorHardware)[0][0];
  var surface=getRandomElements(1, surfaceAdjectives)[0][0];
  var stone=getRandomElements(1, StoneList)[0][0];
  var specialMaterial=getRandomElements(1, SpecialMaterialList)[0][0];
  var trap=getRandomElements(1,doorTraps)[0][0];
  var lock;
  var unusualFeature = getRandomElements(1, UnusualFeaturesList)[0][0];
  var carvedFeature = getRandomElements(1, craftsmanship)[0][0] + " carved "+ getRandomElements(1, patterns)[0][0] + " pattern";
  var doorColor=getRandomElements(1, ColorList)[0][0];
  var resultText;
 
  if(material<=3){ //wood
    resultText= wood +" wood";
    if(rollDice('1d100','Y')<=10){
      resultText+= " with a " + carvedFeature;
      useUnusual = false;
    }
  }
  if(material==4){ //wood & metal
    resultText= "painted "+doorColor;
  }
  if(material>=4 && material<=5){ //wood & metal
    resultText= wood + " wood with " + metal + " " + hardware;
  }
  if(material==6){
    resultText = surface+" "+metal;
    if(rollDice('1d2','Y') >=2) material+=", unbreakable door";
  }
  if(material==7){
    resultText=stone;
  }
  if(material==8){
    resultText=specialMaterial;
    if(specialMaterial=='Leather') resultText=getRandomElements(1, LeathersList)[0][0]+" leather.";
  }
  
/*doorTraps(1d12)[damage typically 1d6 per level of dungeon, at DM's discretion]*/
  if(doorState==1){
    resultText+=", "+trap;
  }

  if(doorState==1 || doorState==2){
    if(lock==1) lock= LocksList[0];
    if(lock==2) lock= LocksList[1];
    if(lock==3) lock= LocksList[2];
    if(lock>=4&&lock<=5) lock= LocksList[3];
    if(lock>=6&&lock<=8) lock= LocksList[4];
    resultText+= " with a "+ lock +" lock";
  }

  if(doorState==3){
    resultText+=", Open";
  }
  
  if(doorState>=4 && doorState<=5){
    resultText+=", Stuck";
  }
  
  if(doorState==6){
    resultText+=", Ajar";
  }
  
  //(*10% of doors have Unusual Features, see below)
  if(rollDice('1d100','Y')<=10 && useUnusual){
    resultText+=", "+unusualFeature;
  }
  
  addResultToStory("Door","generator_text","", resultText, "generatorsBtnsexpand")
}