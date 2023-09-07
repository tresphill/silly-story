const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];


let newStory = storyText;
let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);
randomize.addEventListener('click', result);

newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);
    newStory = newStory.replaceAll(':insertx:', xItem);
    
function result() {
    let newStory = storyText;

    if (customName.value !== "") {
      let name = customName.value;
      newStory = newStory.replaceAll("Bob", name);
    }
    if (document.getElementById("uk").checked) {
      let weight = Math.round(300 / 14) + " stone";
      let temperature = Math.round(((94 - 32) * 5) / 9) + " centigrade";
      newStory = newStory.replaceAll("94 fahrenheit", temperature);
      newStory = newStory.replaceAll("300 pounds", weight);
    }
  
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
  
    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);
  
    story.textContent = newStory;
    story.style.visibility = "visible";
}