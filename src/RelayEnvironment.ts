import {
    Environment,
    Network,
    RecordSource,
    Store,
} from "relay-runtime";
import type { FetchFunction } from "relay-runtime";

const GRAPHQL_URL =
    import.meta.env.VITE_GRAPHQL_URL ?? "http://localhost:3000/graphql";

const fetchRelay: FetchFunction =
    async (params, variables) => {
        const response = await fetch(
            GRAPHQL_URL,
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