const app = "I don't do much."

function destructivelyAppendKitten(name) {
  return kittens.push(name);

}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;

}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;

}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();


}

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens];

}

function removeLastKitten() {
  return kittens.slice(0,array.length-1);

}

function removeFirstKitten() {
  return kittens.slice(1);

}
