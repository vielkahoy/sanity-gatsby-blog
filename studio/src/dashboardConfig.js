export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60a3ed2790ee6324bcec0c80",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-5py5ktjt",
                  apiId: "4c4ebf75-2304-4647-a63e-e4411d369f28",
                },
                {
                  buildHookId: "60a3ed27ccc4b12557f58b05",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-2jtzefuu",
                  apiId: "d461808e-bab3-42e5-8efb-518f816977e3",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/vielkahoy/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-2jtzefuu.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
