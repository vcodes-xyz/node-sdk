import _request from "../../utils/_request";


/**
     * checkVote(userId)
     * 
     * @example
     * 
     * client.checkVote(userId);
     * 
     * @returns {Promise<>}
*/

export default function (userId: string) {
    if (!userId) throw new Error("No userId provided");
    return _request({
        method: "GET",
        path: `/bot/${this.options.bot.id}/voters/${userId}`,
        headers: {
            Authorization: `Bot ${this.options.token}`
        }
    }).then((res: any) => {
        return res?.success;
    }).catch((err: any) => {
        return err?.success || false;
    });
}