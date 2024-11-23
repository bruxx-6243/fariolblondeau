const id = "hashcode-crud-app";
const collection = "project";
const data = {cover:
						new Proxy({"src":"/_astro/hashcode-crud-app.CV49ipY-.png","width":2120,"height":1139,"format":"png","fsPath":"C:/Users/blond/Documents/fariol-blondeau-resume/src/content/project/hashcode-crud-app.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/blond/Documents/fariol-blondeau-resume/src/content/project/hashcode-crud-app.png";
							}
							
							return target[name];
						}
					})
					,processing:true,title:"HashCode CRUD App",description:"HashCode is a CRUD app that allows users to create, read, update, delete tasks and toggle completed status. This project is build on top of NextJS v14, Tailwind and Framer Motion, the project is still in development",stack:["NextJS V14","TypeScript","Tailwind","Framer Motion","Zod","Supabase"],demo:"https://brx-hashcode-crud-app.netlify.app/",source:"https://github.com/bruxx-6243/crud-app"};
const _internal = {
	type: 'data',
	filePath: "C:/Users/blond/Documents/fariol-blondeau-resume/src/content/project/hashcode-crud-app.yaml",
	rawData: "cover: \"./hashcode-crud-app.png\"\r\nprocessing: true\r\ntitle: \"HashCode CRUD App\"\r\ndescription: \"HashCode is a CRUD app that allows users to create, read, update, delete tasks and toggle completed status. This project is build on top of NextJS v14, Tailwind and Framer Motion, the project is still in development\"\r\nstack:\r\n  - \"NextJS V14\"\r\n  - \"TypeScript\"\r\n  - \"Tailwind\"\r\n  - \"Framer Motion\"\r\n  - \"Zod\"\r\n  - \"Supabase\"\r\ndemo: \"https://brx-hashcode-crud-app.netlify.app/\"\r\nsource: \"https://github.com/bruxx-6243/crud-app\"\r\n",
};

export { _internal, collection, data, id };
