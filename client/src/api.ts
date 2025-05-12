export async function getPosts() {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query {
          posts {
            id
            title
            content
          }
        }`,
      }),
    });
  
    const data = await response.json();
    return data.data.posts;
}
  