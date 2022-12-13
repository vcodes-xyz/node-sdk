import _request from "../../../utils/_request";


/**
     * deleteAnnouncement(id)
     * @param {string} id - The id of the announcement
     * 
     * @example
     * 
     * client.deleteAnnouncement(id);
     * 
     * @returns {Promise<Announcement>}
*/

export default function (id: string) {
    if (!id) throw new Error("No id provided");
    return _request({
        method: "DELETE",
        path: `/bot/${this.options.bot.id}/announcements/${id}`,
        headers: {
            Authorization: `Bot ${this.options.token}`
        }
    }).then((res: any) => {
        return res?.message;
    });
}