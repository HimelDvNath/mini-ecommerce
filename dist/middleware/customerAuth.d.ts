import { NextFunction, Request, Response } from "express";
declare const customerAuth: () => (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
export default customerAuth;
//# sourceMappingURL=customerAuth.d.ts.map