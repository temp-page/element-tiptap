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
    decorations: {
        type: import("vue").PropType<import("prosemirror-view").Decoration<{
            [key: string]: any;
        }>[]>;
        required: boolean;
    };
    selected: {
        type: import("vue").PropType<boolean>;
        required: boolean;
    };
    extension: {
        type: import("vue").PropType<import("@tiptap/vue-3").Node<any, any>>;
        required: boolean;
    };
    getPos: {
        type: import("vue").PropType<() => number>;
        required: boolean;
    };
    updateAttributes: {
        type: import("vue").PropType<(attributes: Record<string, any>) => void>;
        required: boolean;
    };
    deleteNode: {
        type: import("vue").PropType<() => void>;
        required: boolean;
    };
}, unknown, unknown, {
    done: {
        get(): boolean;
        set(done: boolean): void;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    editor: {
        type: import("vue").PropType<import("@tiptap/core").Editor>;
        required: boolean;
    };
    node: {
        type: import("vue").PropType<import("prosemirror-model").Node<any>>;
        required: boolean;
    };
    decorations: {
        type: import("vue").PropType<import("prosemirror-view").Decoration<{
            [key: string]: any;
        }>[]>;
        required: boolean;
    };
    selected: {
        type: import("vue").PropType<boolean>;
        required: boolean;
    };
    extension: {
        type: import("vue").PropType<import("@tiptap/vue-3").Node<any, any>>;
        required: boolean;
    };
    getPos: {
        type: import("vue").PropType<() => number>;
        required: boolean;
    };
    updateAttributes: {
        type: import("vue").PropType<(attributes: Record<string, any>) => void>;
        required: boolean;
    };
    deleteNode: {
        type: import("vue").PropType<() => void>;
        required: boolean;
    };
}>>, {}>;
export default _sfc_main;
