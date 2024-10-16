const updateClassName = (method, el, classNew = null, ...className) => {
  switch (method) {
    case "add":
      className.forEach((c) => {
        el.classList.add(c);
      });
      break;
    case "remove":
      className.forEach((c) => {
        el.classList.remove(c);
      });
      break;
    case "replace":
      if (className.length === 1 && classNew) {
        if (el) {
          el.classList.replace(className[0], classNew);
        }
      }
      break;
    case "toggle":
      className.forEach((c) => {
        el.classList.toggle(c);
      });
      break;
  }
};

export default updateClassName;
