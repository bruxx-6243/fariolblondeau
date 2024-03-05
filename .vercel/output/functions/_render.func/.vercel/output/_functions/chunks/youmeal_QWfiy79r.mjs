const id = "youmeal";
const collection = "project";
const data = {cover:
						new Proxy({"src":"/_astro/youmeal.0bDTpTxp.png","width":2220,"height":1175,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					})
					,title:"YouMeal",description:"YouMeal is an online fast food delivery service. In where to can order fast food, such as Pizza, Burgers, and so on.",stack:["React","React useContext Hook","React Router Dom","TypeScript","Tailwind"],demo:"https://youmeal.netlify.app/",source:"https://github.com/bruxx-6243/youmeal"};
const _internal = {
	type: 'data',
	filePath: "C:/Users/blond/Documents/fariol-blondeau-resume/src/content/project/youmeal.yaml",
	rawData: "cover: \"./youmeal.png\"\r\ntitle: \"YouMeal\"\r\ndescription: \"YouMeal is an online fast food delivery service. In where to can order fast food, such as Pizza, Burgers, and so on.\"\r\nstack:\r\n  - \"React\"\r\n  - \"React useContext Hook\"\r\n  - \"React Router Dom\"\r\n  - \"TypeScript\"\r\n  - \"Tailwind\"\r\ndemo: \"https://youmeal.netlify.app/\"\r\nsource: \"https://github.com/bruxx-6243/youmeal\"\r\n",
};

export { _internal, collection, data, id };
