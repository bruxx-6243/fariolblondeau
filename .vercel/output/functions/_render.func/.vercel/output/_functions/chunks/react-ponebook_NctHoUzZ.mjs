const id = "react-ponebook";
const collection = "project";
const data = {cover:
						new Proxy({"src":"/_astro/react-phonebook.GFCAaS19.png","width":2104,"height":1119,"format":"png","fsPath":"C:/Users/blond/Documents/fariol-blondeau-resume/src/content/project/react-phonebook.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/blond/Documents/fariol-blondeau-resume/src/content/project/react-phonebook.png";
							}
							
							return target[name];
						}
					})
					,trash:true,title:"React PhoneBook",description:"React PhoneBook is an application that allows users to register contacts in an address book. I use React for creating the user interface, Zod for form validation, Zustand for state management, and localStorage for storing contacts.",stack:["React","Tailwind","TypeScript","Zod","Zustand"],demo:"https://github.com/bruxx-6243/react-phoneBook",source:"https://brx-hashcode-react-phonebook.netlify.app/"};
const _internal = {
	type: 'data',
	filePath: "C:/Users/blond/Documents/fariol-blondeau-resume/src/content/project/react-ponebook.yaml",
	rawData: "cover: \"./react-phonebook.png\"\r\ntitle: \"React PhoneBook\"\r\ntrash: true\r\ndescription: \"React PhoneBook is an application that allows users to register contacts in an address book. I use React for creating the user interface, Zod for form validation, Zustand for state management, and localStorage for storing contacts.\"\r\nstack:\r\n  - \"React\"\r\n  - \"Tailwind\"\r\n  - \"TypeScript\"\r\n  - \"Zod\"\r\n  - \"Zustand\"\r\ndemo: \"https://github.com/bruxx-6243/react-phoneBook\"\r\nsource: \"https://brx-hashcode-react-phonebook.netlify.app/\"\r\n",
};

export { _internal, collection, data, id };
