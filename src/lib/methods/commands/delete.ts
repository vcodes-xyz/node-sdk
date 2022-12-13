import _request from "../../../utils/_request";


/**
     * deleteCommand(id)
     * @param {string} id - The id of the command
     * 
     * @example
     * 
     * client.deleteCommand(id);
     * 
     * @returns {Promise<ICommand>}
*/

export default function (id: string) {
    if (!id) throw new Error("No id provided");
    return _request({
        method: "DELETE",
        path: `/bot/${this.options.bot.id}/commands/${id}`,
        headers: {
            Authorization: `Bot ${this.options.token}`
        }
    }).then((res: any) => {
        return res?.message;
    });
}