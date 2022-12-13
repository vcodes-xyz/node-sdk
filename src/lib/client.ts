import { EventEmitter } from "events";
import WebSocket from 'ws';
import config from "../config.json";
import { _request } from "../";


import { addCommand, deleteCommand, editCommand, getCommands, setUses } from "./methods/commands";
import { addAnnouncement, deleteAnnouncement, getAnnouncements } from "./methods/announcements";
import getVoters from "./methods/getVoters";
import checkVote from "./methods/checkVote";

export class vCodesClient extends EventEmitter {
    options: {
        token: string;
        ws: WebSocket;
        bot: any;
        ping: NodeJS.Timeout;
    }

    /*
    * @param {string} token - The token to use for authentication
    *
    * @example
    * const client = new Client(token);
    * 
    * client.on("ready", bot => {
    *    console.log(bot);
    * });
    */
    constructor(token: string) {
        if (!token) throw new Error("No token provided");
        super();
        this.options = {
            token,
            ws: new WebSocket(config.protocol.websockets + "://" + config.hostname + "/?transport=websocket&token=" + token),
            bot: null,
            ping: setInterval(() => {
                this.emit("ping", true);
            }, 30000)
        }

        const onMessage = (data: any) => {
            try {
                let json = data.toString().split("\"message\",")[1]?.substring(0, data.toString().split("\"message\",")[1]?.length - 1);
                if (!json) return;
                json = JSON.parse(json);
                while (typeof json === "string") json = JSON.parse(json);
                if (json?.event) {
                    if (json.event === "ready") {
                        this.options.bot = json?.data;
                    }
                    this.emit(json.event, json?.data || {});
                } else {
                    this.emit("noEvent", json?.data || {});
                }
            } catch (err) {
                this.emit("error", err);
            }
        }

        this.options.ws.on("close", (code: number, reason: string) => {
            this.emit("reconnecting", { code, reason });
            let interval = setInterval(() => {
                try {
                    this.options.ws = new WebSocket(config.protocol.websockets + "://" + config.hostname + "/?transport=websocket&token=" + this.options.token);
                    this.options.ws.on("open", () => {
                        clearInterval(interval);
                        this.emit("reconnected", true);
                    });
                    this.options.ws.on("error", () => {});
                } catch (err) {
                    this.emit("error", err);
                }
            }, 1000);
        });

        this.options.ws.on("message", onMessage);

        this.options.ws.on("error", (err: string) => {
            this.emit("error", err);
        });
    }



    
    /**
     * addCommand({ category, name, description, syntax })
     * deleteCommand(id)
     * editCommand({ category, name, description, syntax, id })
     * getCommands()
     * setUses({ id, uses })
     * 
    */

    addCommand = addCommand;
    deleteCommand = deleteCommand;
    editCommand = editCommand;
    getCommands = getCommands;
    setUses = setUses;

    /**
     * addAnnouncement({ title, description, color, image, footer, timestamp })
     * deleteAnnouncement(id)
     * getAnnouncements()
     * 
    */

    addAnnouncement = addAnnouncement;
    deleteAnnouncement = deleteAnnouncement;
    getAnnouncements = getAnnouncements;

    /**
     * getVoters()
     * checkVote(userId)
     *
    */

    getVoters = getVoters;
    checkVote = checkVote;
}