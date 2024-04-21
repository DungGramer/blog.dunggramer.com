import ky from "ky";

// const config = ky.extend({
//   prefixUrl: "https://code.dunggramer.com/graphql",
// });

const api = async (query: string, variables = {}) => {
  try {
    return await ky
      .post("https://code.dunggramer.com/graphql", {
        json: {
          query: query,
          variables: variables,
        },
        headers: {
          "Content-Type": "application/json",
          // Add any other headers like authentication tokens here
        },
      })
      .json();
  } catch (error) {
    console.error("GraphQL query failed:", error);
    throw error;
  }
};

export default api;
