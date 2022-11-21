/// <reference types="prosemirror-model" />
import { ImageDisplay } from '../../utils/image';
declare const enum ResizeDirection {
    TOP_LEFT = "tl",
    TOP_RIGHT = "tr",
    BOTTOM_LEFT = "bl",
    BOTTOM_RIGHT = "br"
}
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
}, unknown, {
    maxSize: {
        width: number;
        height: number;
    };
    originalSize: {
        width: number;
        height: number;
    };
    resizeDirections: ResizeDirection[];
    resizing: boolean;
    resizerState: {
        x: number;
        y: number;
        w: number;
        h: number;
        dir: string;
    };
}, {
    src(): string;
    width(): number;
    height(): number;
    display(): ImageDisplay;
    imageViewClass(): string[];
}, {
    selectImage(): void;
    getMaxSize(): void;
    onMouseDown(e: MouseEvent, dir: ResizeDirection): void;
    onMouseMove(e: MouseEvent): void;
    onMouseUp(e: MouseEvent): void;
    onEvents(): void;
    offEvents(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
