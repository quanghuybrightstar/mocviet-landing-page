export const scrollToElement = (idElement, offset) => {
  const element =
    typeof idElement === "string"
      ? document.getElementById(idElement)
      : idElement;
  if (element) {
    setTimeout(() => {
      element.classList.add("bling");
      setTimeout(() => {
        element.classList.remove("bling");
      }, 500);
    }, 500);
    window.scrollTo({
      behavior: "smooth",
      top:
        element.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        (offset || 0),
    });
  }
};
