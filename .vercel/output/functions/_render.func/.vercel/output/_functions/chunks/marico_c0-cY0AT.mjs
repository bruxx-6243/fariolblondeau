const id = "marico";
const collection = "project";
const data = {cover:
						new Proxy({"src":"/_astro/marico.BHidPWXG.png","width":2220,"height":1175,"format":"png","fsPath":"C:/Users/blond/Documents/fariol-blondeau-resume/src/content/project/marico.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/blond/Documents/fariol-blondeau-resume/src/content/project/marico.png";
							}
							
							return target[name];
						}
					})
					,title:"Marico",description:"Marico is a platform that allows users to build an online audience and promote their content by increasing their visibility. This project uses yup to validate registration and login forms. It also utilizes react-router-dom to facilitate navigation between pages and protect routes for non-connected users.",stack:["React","TypeScript","React Router Dom","Tailwind"],demo:"https://marico-brx.vercel.app/",source:"https://github.com/bruxx-6243/marico"};
const _internal = {
	type: 'data',
	filePath: "C:/Users/blond/Documents/fariol-blondeau-resume/src/content/project/marico.yaml",
	rawData: "cover: \"./marico.png\"\r\ntitle: \"Marico\"\r\ndescription: \"Marico is a platform that allows users to build an online audience and promote their content by increasing their visibility. This project uses yup to validate registration and login forms. It also utilizes react-router-dom to facilitate navigation between pages and protect routes for non-connected users.\"\r\nstack:\r\n  - \"React\"\r\n  - \"TypeScript\"\r\n  - \"React Router Dom\"\r\n  - \"Tailwind\"\r\ndemo: \"https://marico-brx.vercel.app/\"\r\nsource: \"https://github.com/bruxx-6243/marico\"\r\n",
};

export { _internal, collection, data, id };
