import { Mark } from '@tiptap/core';
export interface BtnOptions {
    /**
     * An array of custom protocols to be registered with linkifyjs.
     */
    protocols: Array<string>;
    /**
     * A list of HTML attributes to be rendered.
     */
    HTMLAttributes: Record<string, any>;
    /**
     * A validation function that modifies link verification for the auto linker.
     * @param url - The url to be validated.
     * @returns - True if the url is valid, false otherwise.
     */
    validate?: (url: string) => boolean;
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        btn: {
            /**
             * Set a link mark
             */
            setBtn: (attributes: {
                href: string;
                target?: string;
                class?: string;
                style?: string;
            }) => ReturnType;
        };
    }
}
export declare const TiptapBtn: Mark<BtnOptions, any>;
