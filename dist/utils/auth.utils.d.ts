export declare const AuthUtils: {
    generateAccessToken: (userId: string) => string;
    generateRefreshToken: (userId: string) => Promise<string>;
};
