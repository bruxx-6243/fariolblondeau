const id = "hoobank";
const collection = "project";
const data = {cover:
						new Proxy({"src":"/_astro/hoobank.D15HzXuM.png","width":2220,"height":1175,"format":"png","fsPath":"C:/Users/blond/Documents/fariol-blondeau-resume/src/content/project/hoobank.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/blond/Documents/fariol-blondeau-resume/src/content/project/hoobank.png";
							}
							
							return target[name];
						}
					})
					,title:"HooBank",description:"The Next Generation Payment Method. Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.",stack:["React/Vite","JavaScript","Tailwind"],demo:"https://hoobank-site.netlify.app/",source:"https://github.com/bruxx-6243/hoobank"};
const _internal = {
	type: 'data',
	filePath: "C:/Users/blond/Documents/fariol-blondeau-resume/src/content/project/hoobank.yaml",
	rawData: "cover: \"./hoobank.png\"\r\ntitle: \"HooBank\"\r\ndescription: \"The Next Generation Payment Method. Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.\"\r\nstack:\r\n  - \"React/Vite\"\r\n  - \"JavaScript\"\r\n  - \"Tailwind\"\r\ndemo: \"https://hoobank-site.netlify.app/\"\r\nsource: \"https://github.com/bruxx-6243/hoobank\"\r\n",
};

export { _internal, collection, data, id };
