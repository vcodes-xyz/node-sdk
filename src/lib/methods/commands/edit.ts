import { ICommand } from "../../..";
import _request from "../../../utils/_request";

export default function (data: ICommand) {
    if (!data.id) throw new Error("No id provided");
    if (!data.name) throw new Error("No name provided");
    if (!data.description) throw new Error("No description provided");
    if (!data.syntax) throw new Error("No syntax provided");

    return _request({
        method: "PUT",
        path: `/bot/${this.options.bot.id}/commands`,
        body: {
            id: data.id,
            name: data.name,
            description: data.description,
            syntax: data.syntax,
            category: data?.category || undefined
        },
        headers: {
            Authorization: `Bot ${this.options.token}`
        }
    }).then((res: any) => {
        return res?.message;
    });
}