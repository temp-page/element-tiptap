import { Node } from '@tiptap/core';
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        iframe: {
            setIframe: (options: {
                src: string;
            }) => ReturnType;
        };
    }
}
declare const IframeLink: Node<any, any>;
export default IframeLink;
