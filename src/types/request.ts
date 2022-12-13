export interface Request {
    method?: string | "GET" | "POST" | "PUT" | "DELETE";
    path?: string;
    headers?: any;
    body?: any;
}