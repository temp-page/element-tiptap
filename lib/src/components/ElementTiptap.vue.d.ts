declare const _sfc_main: import("vue").DefineComponent<Readonly<import("vue").ComponentPropsOptions<{
    [x: string]: unknown;
}>>, {
    t: (...args: any[]) => string;
    editor: import("vue").ShallowRef<import("@tiptap/vue-3").Editor | undefined>;
    characters: import("vue").ComputedRef<any>;
    showFooter: import("vue").ComputedRef<any>;
    isFullscreen: import("vue").Ref<boolean>;
    isCodeViewMode: import("vue").Ref<boolean>;
    cmTextAreaRef: import("vue").Ref<any>;
    editorStyle: {
        width: string | number | undefined;
        height: string | number | undefined;
    }[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, readonly string[] | Readonly<import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
    [x: string]: unknown;
}>>>>, {
    [x: number]: string;
} | {}>;
export default _sfc_main;
