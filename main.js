const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}


let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
let insertX = "Willy the Goblin, Big Daddy, Father Christmas"
let insertY = "the soup kitchen, Disneyland, the White House"
let insertZ = "spontaneously combusted, melted into a puddle on the sidewalk, turned into a slug and crawled away"

randomize.addEventListener('click', result);

function result() {
    if (customName.value !== '') {
        let name = "custom.value";
    }
}
if document.getElementById("uk").checked) {
    let weight = Math.round(300);
    let temperature = Math.round(94);
}
story.text = '';
story.computedStyleMap.visibility = 'visible';

let newStory = storyText;

let xItem = randomValueFromArray;
let yItem = randomValueFromArray;
let zItem = randomValueFromArray;

function newStory("xItem", "yItem", "zItem"); {
    newStory.contentString.replace(insertX, insertY, insertZ);
    content.contentString.replace("xItem", "yItem", "zItem");
}

var input = document.getElementById("customName");
if input !== input.value {
    customName = "Bob";
}

if document.getElementById("uk").checked {
    weight = Math.round(300 / 14) + 'stone';
    temperature = Math.round(temperature - 32 x .5556); + 'centigrade';
    temperature.replace('94 Farenheit', 'temperature');
    weight.replace('300 pounds', 'weight');

    textContent.story('p') = newStory;
}
