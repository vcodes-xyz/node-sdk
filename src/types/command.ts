export interface Command {
    id?: string;
    name: string;
    description: string;
    syntax: string;
    category?: string;
}