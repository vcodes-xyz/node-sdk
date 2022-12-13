import _request from "../../../utils/_request";


/**
     * getAnnouncements()
     *
     * @example
     * 
     * client.getAnnouncements();
     * 
     * @returns {Promise<Announcement>}
*/

export default function () {
    return _request({
        method: "GET",
        path: `/bot/${this.options.bot.id}/announcements`,
        headers: {
            Authorization: `Bot ${this.options.token}`
        }
    }).then((res: any) => {
        return res?.data;
    });
}