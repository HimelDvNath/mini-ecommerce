export declare const authServices: {
    createUser: (payload: Record<string, unknown>) => Promise<import("pg").QueryResult<any>>;
    userLogIn: (payload: Record<string, unknown>) => Promise<false | {
        token: string;
        user: any;
    } | null>;
};
//# sourceMappingURL=auth.service.d.ts.map