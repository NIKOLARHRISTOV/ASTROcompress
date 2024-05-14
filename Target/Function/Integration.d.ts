/**
 * @module Integration
 *
 */
export declare let System: string;
declare const _default: (Option?: import("../Interface/Option.js").default | undefined) => {
    name: string;
    hooks: {
        "astro:config:done": ({ config: { outDir: { pathname }, }, }: {
            config: import("astro").AstroConfig;
            setAdapter: (adapter: import("astro").AstroAdapter) => void;
            logger: import("astro").AstroIntegrationLogger;
        }) => Promise<void>;
        "astro:build:done": ({ dir: Directory }: {
            pages: {
                pathname: string;
            }[];
            dir: URL;
            routes: import("astro").RouteData[];
            logger: import("astro").AstroIntegrationLogger;
            cacheManifest: boolean;
        }) => Promise<void>;
    };
};
export default _default;
import type Action from "@playform/pipe/Target/Interface/Action.js";
export declare const Default: Omit<{} & {
    CSS: {
        csso: {
            comments: false;
            forceMediaMerge: true;
            restructure: false;
        };
        lightningcss: {
            minify: true;
        };
    };
    HTML: {
        "html-minifier-terser": {
            caseSensitive: true;
            collapseInlineTagWhitespace: false;
            collapseWhitespace: true;
            continueOnParseError: true;
            html5: true;
            ignoreCustomComments: RegExp[];
            includeAutoGeneratedTags: true;
            keepClosingSlash: true;
            minifyCSS: true;
            minifyJS: true;
            minifyURLs: false;
            noNewlinesBeforeTagClose: true;
            preventAttributesEscaping: false;
            processConditionalComments: false;
            processScripts: string[];
            quoteCharacter: string;
            removeAttributeQuotes: true;
            removeComments: true;
            removeScriptTypeAttributes: true;
            removeStyleLinkTypeAttributes: true;
            removeTagWhitespace: false;
            sortAttributes: true;
            sortClassName: true;
            trimCustomFragments: true;
            useShortDoctype: false;
        };
    };
    Image: {
        sharp: {
            avif: {
                chromaSubsampling: string;
                effort: number;
                lossless: true;
            };
            gif: {
                effort: number;
            };
            jpeg: {
                chromaSubsampling: string;
                mozjpeg: true;
                trellisQuantisation: true;
                overshootDeringing: true;
                optimiseScans: true;
            };
            png: {
                compressionLevel: number;
                palette: true;
            };
            tiff: {
                compression: string;
            };
            webp: {
                effort: number;
                lossless: true;
            };
            heif: {
                effort: number;
                lossless: true;
            };
            sharp: {
                failOn: "error";
                sequentialRead: true;
                unlimited: true;
            };
        };
    };
    JavaScript: {
        terser: {
            ecma: 5;
            enclose: false;
            keep_classnames: false;
            keep_fnames: false;
            ie8: false;
            module: false;
            safari10: false;
            toplevel: false;
            format: {
                comments: false;
            };
        };
    };
    SVG: {
        svgo: {
            multipass: true;
            js2svg: {
                indent: number;
                pretty: false;
            };
            plugins: "preset-default"[];
        };
    };
    Map: {
        CSS: string;
        HTML: string;
        Image: string;
        JavaScript: string;
        SVG: string;
    };
    Parser: {
        CSS: ("csso" | "lightningcss")[];
        HTML: "html-minifier-terser";
        Image: "sharp";
        JavaScript: "terser";
        SVG: "svgo";
    };
    Path: string;
    Cache: {
        Search: string;
        Folder: string;
    };
    Logger: 2;
    Action: Omit<{} & {
        Failed: ({ Input }: import("@playform/pipe/Target/Interface/File.js").default) => Promise<string>;
        Passed: ({ Before, Buffer }: import("@playform/pipe/Target/Interface/File.js").default) => Promise<boolean>;
        Accomplished: ({ Input, Before, After }: import("@playform/pipe/Target/Interface/File.js").default) => Promise<string>;
        Changed: (Plan: import("@playform/pipe/Target/Interface/Plan.js").default) => Promise<any>;
        Read: ({ Input }: import("@playform/pipe/Target/Interface/File.js").default) => Promise<string>;
        Wrote: ({ Buffer }: import("@playform/pipe/Target/Interface/File.js").default) => Promise<import("@playform/pipe/Target/Type/Buffer.js").Type>;
        Fulfilled: ({ File }: import("@playform/pipe/Target/Interface/Plan.js").default) => Promise<string | false>;
    }, "__proto__">;
    File: string;
    Exclude: false;
}, "__proto__">;
export declare const Search: string;
export declare const Merge: import("../Interface/Merge.js").default<import("../Interface/Merge.js").Generic>;
export declare let _Action: Action;
