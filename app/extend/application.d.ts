import { Application } from 'egg';
export interface EmailOption {
    to: string;
    subject: string;
    text?: string;
    html?: string;
}
declare const _default: {
    sendEmail(this: Application, option: EmailOption): Promise<{}>;
};
export default _default;
