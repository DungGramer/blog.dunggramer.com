import ky from "ky";

// const config = ky.extend({
//   prefixUrl: "https://code.dunggramer.com/graphql",
// });

async function api <T>(query: string, variables = {}) {
  try {
    return await ky
      .post("https://blog.dunggramer.com/graphql", {
        json: { query, variables },
        headers: { "Content-Type": "application/json; charset=utf-8" },
      })
      .json<T>();
  } catch (error) {
    console.error("GraphQL query failed:", error);
    throw error;
  }
};

export default api;
