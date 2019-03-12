const loopedElement = (nodeList) => {
  let node;
  Array.prototype.forEach.call(nodeList, (n) => {
    node = n;
  });
  return node;
}


const $ = (selector) => {
  const settingsObj = {
    elements: document.querySelectorAll(selector),
    hide: () => {
      const el = loopedElement(settingsObj.elements);
      el.style.display = 'none';
    }
  }

  return settingsObj;
}

