/*
    * @Author: Void Development
    * @Developer: clqu
    * @Date 2022-12-12
    * @Version: 4.0.0
    * @License: MIT
    * @Description: vCodes API Wrapper
    * @Repository: https://github.com/vcodes-xyz/node-sdk
    * @Documentation: https://developers.vcodes.xyz
    * @Discord: https://vcodes.xyz/discord
    * @Website: https://vcodes.xyz
*/



/*
    * Export Client 
*/

export { vCodesClient as Client } from './lib/client';

/*
    * Export Methods
*/

export { default as _request } from './utils/_request';

/*
    * Export Interfaces
*/

export { Request as IRequest } from './types/request';
export { Announcement as IAnnouncement } from './types/announcement';
export { Command as ICommand } from './types/command';