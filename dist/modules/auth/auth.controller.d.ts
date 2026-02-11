import { Request, Response } from "express";
export declare const authController: {
    userLogIn: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    createUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=auth.controller.d.ts.map