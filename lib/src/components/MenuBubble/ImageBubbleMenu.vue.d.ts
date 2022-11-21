/// <reference types="prosemirror-model" />
declare const _sfc_main: import("vue").DefineComponent<{
    editor: {
        type: import("vue").PropType<import("@tiptap/core").Editor>;
        required: boolean;
    };
    node: {
        type: import("vue").PropType<import("prosemirror-model").Node<any>>;
        required: boolean;
    };
    updateAttrs: {
        type: import("vue").PropType<(attributes: Record<string, any>) => void>;
        required: boolean;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    editor: {
        type: import("vue").PropType<import("@tiptap/core").Editor>;
        required: boolean;
    };
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
