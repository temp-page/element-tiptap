import { Node } from '@tiptap/core';
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        iframe: {
            setIframeVideo: (options: {
                src: string;
            }) => ReturnType;
        };
    }
}
declare const IframeVideo: Node<any, any>;
export default IframeVideo;
