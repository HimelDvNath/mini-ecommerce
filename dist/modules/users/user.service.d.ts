export declare const userServices: {
    addToCart: (userId: number, productId: number, quantity: number) => Promise<{
        message: string;
    }>;
    removeFromCart: (userId: number, productId: number) => Promise<{
        message: string;
    }>;
    placeOrder: (cartId: number) => Promise<{
        message: string;
        order: any;
    }>;
};
//# sourceMappingURL=user.service.d.ts.map