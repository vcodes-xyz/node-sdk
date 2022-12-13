import { ICommand } from "../../..";
import _request from "../../../utils/_request";

export default function (data: { id: string, uses: number | string }) {
    if (!data.id) throw new Error("No id provided");
    if (!data.uses) throw new Error("No count provided");

    return _request({
        method: "PUT",
        path: `/bot/${this.options.bot.id}/commands/${data.id}/uses`,
        body: {
            uses: data.uses
        },
        headers: {
            Authorization: `Bot ${this.options.token}`
        }
    }).then((res: any) => {
        return res?.message;
    });
}