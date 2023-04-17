//create credentials interface with token and expiresAt
export interface Credentials {
    token: string;
    expires_in: number | null;
}

export interface Profile {
    email: string;
    firstName: string;
    lastName: string;
    title: string;
    uid: string;
    expiresAt: number;
}

export interface Message {
    id: string;
    message: string;
    right: boolean;
    created_at: string;
    updated_at: string;
}