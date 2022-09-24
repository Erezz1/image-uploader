export interface IFileContext {
    file: File | null;
    cleanFile: () => void;
    addFile: ( file: File ) => void;
}
