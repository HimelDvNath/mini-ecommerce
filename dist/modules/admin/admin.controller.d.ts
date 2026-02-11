import { Request, Response } from "express";
export declare const adminController: {
    getAllOrders: (req: Request, res: Response) => Promise<void>;
    getAllProducts: (req: Request, res: Response) => Promise<void>;
    updateOrder: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=admin.controller.d.ts.map