const id = "robbie-lens";
const collection = "project";
const data = {cover:
						new Proxy({"src":"/_astro/robbie-lens.FfmLKBlS.png","width":2120,"height":1139,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					})
					,title:"Robbie Lens",description:"Robbie Lens is a portfolio website for photographie that is showing case of projects, in this project I used TypeScript and Google App Script to store the inputs intries to the GoogleSheet.",stack:["TypeScript","SCSS","GoogleSheet API","Google App Script"],demo:"https://brx-hashcode-robbie-lens.netlify.app/",source:"https://github.com/PossaCode-Community/Fariol-Blondeau_Robbie-Lens"};
const _internal = {
	type: 'data',
	filePath: "C:/Users/blond/Documents/fariol-blondeau-resume/src/content/project/robbie-lens.yaml",
	rawData: "cover: \"./robbie-lens.png\"\r\ntitle: \"Robbie Lens\"\r\ndescription: \"Robbie Lens is a portfolio website for photographie that is showing case of projects, in this project I used TypeScript and Google App Script to store the inputs intries to the GoogleSheet.\"\r\nstack:\r\n  - \"TypeScript\"\r\n  - \"SCSS\"\r\n  - \"GoogleSheet API\"\r\n  - \"Google App Script\"\r\ndemo: \"https://brx-hashcode-robbie-lens.netlify.app/\"\r\nsource: \"https://github.com/PossaCode-Community/Fariol-Blondeau_Robbie-Lens\"\r\n",
};

export { _internal, collection, data, id };
