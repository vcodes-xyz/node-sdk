import { IAnnouncement } from "../../..";
import _request from "../../../utils/_request";


/**
     * createAnnouncement({ title, description })
     * @param {object} data - The data to send
     * @param {string} data.title - The title of the announcement
     * @param {string} data.description - The description of the announcement
     * 
     * @example
     * 
     * client.createAnnouncement({
     *    title: "Hello World", 
     *   description: "This is an announcement"
     * });
     * 
     * @returns {Promise<Announcement>}
*/

export default function (data: IAnnouncement) {
    if (!data.title) throw new Error("No title provided");
    if (!data.description) throw new Error("No description provided");
    return _request({
        method: "POST",
        path: `/bot/${this.options.bot.id}/announcements`,
        body: {
            title: data.title,
            description: data.description
        },
        headers: {
            Authorization: `Bot ${this.options.token}`
        }
    }).then((res: any) => {
        return res?.message;
    });
}