export default (text = "Hello world") => {
  const element = document.createElement("div");

  element.innterHtml = text;

  return element;
}
