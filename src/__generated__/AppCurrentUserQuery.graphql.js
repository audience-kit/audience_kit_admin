/**
 * @generated SignedSource<<b380f90b64f555fa184ef0cffef88711>>
 * @lightSyntaxTransform
 * @nogrep
 */
const node = (function () {
    var v0 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    }, v1 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
    }, v2 = [
        {
            "kind": "Literal",
            "name": "isAdmin",
            "value": true
        }
    ], v3 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "dnsName",
        "storageKey": null
    };
    return {
        "fragment": {
            "argumentDefinitions": [],
            "kind": "Fragment",
            "metadata": null,
            "name": "AppCurrentUserQuery",
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "me",
                    "plural": false,
                    "selections": [
                        (v0 /*: any*/),
                        (v1 /*: any*/),
                        {
                            "alias": null,
                            "args": (v2 /*: any*/),
                            "concreteType": "Audience",
                            "kind": "LinkedField",
                            "name": "audiences",
                            "plural": true,
                            "selections": [
                                (v0 /*: any*/),
                                (v1 /*: any*/),
                                {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "AudienceDomain",
                                    "kind": "LinkedField",
                                    "name": "domains",
                                    "plural": true,
                                    "selections": [
                                        (v3 /*: any*/)
                                    ],
                                    "storageKey": null
                                }
                            ],
                            "storageKey": "audiences(isAdmin:true)"
                        }
                    ],
                    "storageKey": null
                }
            ],
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": [],
            "kind": "Operation",
            "name": "AppCurrentUserQuery",
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "me",
                    "plural": false,
                    "selections": [
                        (v0 /*: any*/),
                        (v1 /*: any*/),
                        {
                            "alias": null,
                            "args": (v2 /*: any*/),
                            "concreteType": "Audience",
                            "kind": "LinkedField",
                            "name": "audiences",
                            "plural": true,
                            "selections": [
                                (v0 /*: any*/),
                                (v1 /*: any*/),
                                {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "AudienceDomain",
                                    "kind": "LinkedField",
                                    "name": "domains",
                                    "plural": true,
                                    "selections": [
                                        (v3 /*: any*/),
                                        (v0 /*: any*/)
                                    ],
                                    "storageKey": null
                                }
                            ],
                            "storageKey": "audiences(isAdmin:true)"
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "26f2c91e32ae6976969e27f9a625bdc5",
            "id": null,
            "metadata": {},
            "name": "AppCurrentUserQuery",
            "operationKind": "query",
            "text": "query AppCurrentUserQuery {\n  me {\n    id\n    name\n    audiences(isAdmin: true) {\n      id\n      name\n      domains {\n        dnsName\n        id\n      }\n    }\n  }\n}\n"
        }
    };
})();
node.hash = "2dec0b5a73b3d4eba672707ae5dc2dd6";
export default node;
