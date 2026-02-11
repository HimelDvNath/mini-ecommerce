import { NextFunction, Request, Response } from "express";
declare const adminAuth: () => (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
export default adminAuth;
//# sourceMappingURL=adminAuth.d.ts.map