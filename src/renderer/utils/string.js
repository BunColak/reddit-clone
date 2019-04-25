export function decodeHTML(encodedHTML) {
  const parser = new DOMParser();
  const dom = parser.parseFromString(encodedHTML, 'text/html');
  const html = dom.body.textContent;  
  return html
}

export function dummyFunction() {
  return '';
}

