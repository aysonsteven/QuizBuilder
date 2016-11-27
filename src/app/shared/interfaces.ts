
export interface UserCredentials {
    username: string;
    password: string;
}

export interface IUser {
    uid: string;
    username: string;
}

export interface Predicate<T> {
    (item: T): boolean;
}

export interface ValidationResult {
    [key: string]: boolean;
}