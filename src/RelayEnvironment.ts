import {
    Environment,
    Network,
    RecordSource,
    Store,
    FetchFunction,
} from "relay-runtime";

const fetchRelay: FetchFunction =
    async (params, variables) => {
        const response = await fetch(
            "http://localhost:3000/graphql",
            {
                method: "POST",
                headers: {
                    "content-type":
                        "application/json",
                    authorization: `Bearer XYZ`,
                },
                body: JSON.stringify({
                    query: params.text,
                    variables,
                }),
            }
        );

        // Get the response as JSON
        return await response.json();
    };

// Export a singleton instance of Relay Environment configured with our network function:
export const RelayEnvironment =
    new Environment({
        network: Network.create(fetchRelay),
        store: new Store(
            new RecordSource()
        ),
    });