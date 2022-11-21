/// <reference types="prosemirror-model" />
declare const _sfc_main: import("vue").DefineComponent<{
    node: {
        type: import("vue").PropType<import("prosemirror-model").Node<any>>;
        required: boolean;
    };
    updateAttrs: {
        type: import("vue").PropType<(attributes: Record<string, any>) => void>;
        required: boolean;
    };
}, {
    t: unknown;
    enableTooltip: boolean;
}, {
    editImageDialogVisible: boolean;
    imageAttrs: any;
}, {}, {
    syncImageAttrs(): void;
    getImageAttrs(): {
        src: any;
        alt: any;
        width: any;
        height: any;
    };
    updateImageAttrs(): void;
    openEditImageDialog(): void;
    closeEditImageDialog(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    node: {
        type: import("vue").PropType<import("prosemirror-model").Node<any>>;
        required: boolean;
    };
    updateAttrs: {
        type: import("vue").PropType<(attributes: Record<string, any>) => void>;
        required: boolean;
    };
}>>, {}>;
export default _sfc_main;
