//create credentials interface with token and expiresAt
export interface Credentials {
    token: string;
    expires_in: number;
}