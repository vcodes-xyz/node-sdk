import axios from "axios";
import { IRequest } from "../";
import config from "../config.json"

export default function ({ method = "GET", path = "", headers = {}, body = {} }: IRequest) {
    return new Promise((resolve, reject) => {
        const req = axios({
            method,
            url: `${config.protocol.web}://${config.base}/v1${path}`,
            headers: {
                "Content-Type": "application/json",
                ...headers
            },
            data: body
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err?.response?.data);
        });
    });
}