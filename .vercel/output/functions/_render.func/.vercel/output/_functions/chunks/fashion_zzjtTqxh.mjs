const id = "fashion";
const collection = "project";
const data = {cover:
						new Proxy({"src":"/_astro/fashion.BS-ao_rG.png","width":2220,"height":1175,"format":"png","fsPath":"C:/Users/blond/Documents/fariol-blondeau-resume/src/content/project/fashion.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/blond/Documents/fariol-blondeau-resume/src/content/project/fashion.png";
							}
							
							return target[name];
						}
					})
					,processing:true,title:"Fashion Magazine",description:"Fashion is an online store for selling woman clothing. We believe that social platforms are taking advantage of creators. We want to change that and help creators fight back.",stack:["Astro","TypeScript","Tailwind"],demo:"https://shopping-website-brx.netlify.app/",source:"https://github.com/bruxx-6243/shopping-website"};
const _internal = {
	type: 'data',
	filePath: "C:/Users/blond/Documents/fariol-blondeau-resume/src/content/project/fashion.yaml",
	rawData: "cover: \"./fashion.png\"\r\nprocessing: true\r\ntitle: \"Fashion Magazine\"\r\ndescription: \"Fashion is an online store for selling woman clothing. We believe that social platforms are taking advantage of creators. We want to change that and help creators fight back.\"\r\nstack:\r\n  - \"Astro\"\r\n  - \"TypeScript\"\r\n  - \"Tailwind\"\r\ndemo: \"https://shopping-website-brx.netlify.app/\"\r\nsource: \"https://github.com/bruxx-6243/shopping-website\"\r\n",
};

export { _internal, collection, data, id };
