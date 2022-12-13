import { ICommand } from "../../..";
import _request from "../../../utils/_request";


/**
     * addCommand({ category, name, description, syntax })
     * @param {object} data - The data to send
     * @param {string} data.category - The title of the announcement
     * @param {string} data.name - The name of the command
     * @param {string} data.description - The description of the announcement
     * @param {string} data.syntax - The syntax of the command
     * 
     * @example
     * 
     * client.addCommand({
     *    name: "Help",
     *    description: "Shows the help menu",
     *    syntax: "/help"
     * });
     * 
     * @returns {Promise<ICommand>}
*/

export default function (data: ICommand) {
    if (!data.name) throw new Error("No name provided");
    if (!data.description) throw new Error("No description provided");
    if (!data.syntax) throw new Error("No syntax provided");

    return _request({
        method: "POST",
        path: `/bot/${this.options.bot.id}/commands`,
        body: {
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