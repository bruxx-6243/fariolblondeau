import { getCollection } from "astro:content";

export async function GET({}) {
  const projects = await getCollection("project");

  if (!projects || !projects.length) {
    return new Response(JSON.stringify({ projects: [] }, null, 2), {
      status: 404,
      statusText: "No projects found",
    });
  }

  const sortedProjects = projects.sort((a, b) => {
    if (a.data.processing === true && b.data.processing !== true) {
      return -1;
    } else if (a.data.processing !== true && b.data.processing === true) {
      return 1;
    } else {
      return 0;
    }
  });

  return new Response(JSON.stringify(sortedProjects), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
    statusText: "OK",
  });
}
