const stilCss = await getFileContent('../assets/css/stil.css');
const coderHtml = await getFileContent('../pages/coder.html');
async function getFileContent(path) {
    return await fetch(path).then(r => r.text());
}
export {};
//# sourceMappingURL=main.js.map