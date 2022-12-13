import _request from "../../utils/_request";


/**
     * getVoters({ page, limit })
     * 
     * @example
     * 
     * client.getVoters({ page: 1, limit: 10});
     * 
     * @returns {Promise<>}
*/

export default function (data: { page?: number, limit?: number} = {}) {
    return _request({
        method: "GET",
        path: `/bot/${this.options.bot.id}/voters?page=${data?.page || 1}&limit=${data?.limit || 10}`,
        headers: {
            Authorization: `Bot ${this.options.token}`
        }
    }).then((res: any) => {
        return res?.data?.data || [];
    });
}