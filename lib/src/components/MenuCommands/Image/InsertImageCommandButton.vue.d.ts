import { Editor } from '@tiptap/core';
declare const _sfc_main: import("vue").DefineComponent<{
    editor: {
        type: typeof Editor;
        required: true;
    };
}, {
    t: unknown;
    enableTooltip: boolean;
    isCodeViewMode: boolean;
}, {
    imageUploadDialogVisible: boolean;
    uploading: boolean;
}, {
    imageNodeOptions(): any;
}, {
    openUrlPrompt(): void;
    uploadImage(requestOptions: any): Promise<void>;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    editor: {
        type: typeof Editor;
        required: true;
    };
}>>, {}>;
export default _sfc_main;
