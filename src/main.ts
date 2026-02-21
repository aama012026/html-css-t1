const stilCss: string = await getFileContent('../assets/css/stil.css');
const coderHtml: string = await getFileContent('../pages/coder.html');

async function getFileContent(path: string) {
	return await fetch(path).then(r => r.text());
}
