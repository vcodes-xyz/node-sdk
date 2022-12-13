import _request from "../../../utils/_request";


/**
     * getCommands()
     *
     * @example
     * 
     * client.getCommands();
     * 
     * @returns {Promise<ICommand>}
*/

export default function () {
    return _request({
        method: "GET",
        path: `/bot/${this.options.bot.id}/commands`,
        headers: {
            Authorization: `Bot ${this.options.token}`
        }
    }).then((res: any) => {
        return res?.data;
    });
}