export abstract class ApiResponse {
    protected provider: string;
    protected userId: string;
    protected data;
    constructor(provider, userId, data) {
        this.provider, this.userId, this.data = provider, userId, data;
    }
}
