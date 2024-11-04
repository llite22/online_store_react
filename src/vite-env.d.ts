declare module "*.svg?react" {
    import React from "react";
    type SVGComponent = (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    const ReactComponent: SVGComponent;
    export default ReactComponent;
}

interface ImportMetaEnv {
    readonly VITE_APP_BASE_URL: string
    readonly VITE_APP_ACCEPT: string
    readonly VITE_APP_CONTENT_TYPE: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}