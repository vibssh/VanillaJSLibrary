function $(selector) {
  const settingsObj = {
    elements: document.querySelectorAll(selector),
    hide: () => {
      Array.prototype.forEach.call(settingsObj.elements, (el) => {
        el.style.display = 'none';
      })
    }
  }

  return settingsObj;
}

