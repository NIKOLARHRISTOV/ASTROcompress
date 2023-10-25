var M=(...[r={}])=>{Object.entries(r).forEach(([a,e])=>Object.defineProperty(r,a,{value:e===!0?l[a]:r[a]}));const{Path:o,Cache:s,Logger:d,Map:m,Exclude:u,Action:y,CSS:w,HTML:g,Image:T,JavaScript:h,SVG:j}=c(l,r),p=new Set;return typeof o<"u"&&(Array.isArray(o)||o instanceof Set)&&o.forEach(a=>p.add(a)),{name:"astro-compress",hooks:{"astro:build:done":async({dir:a})=>{if(typeof m=="object"){p.size||p.add(a),typeof s=="object"&&s.Search===A&&(s.Search=a);for(const[e,i]of Object.entries({CSS:w,HTML:g,Image:T,JavaScript:h,SVG:j})){if(!(i&&m[e]))return;f=c(y,c(y,{Wrote:async({Buffer:t,Input:n})=>{switch(e){case"CSS":return(await import("csso")).minify(t.toString(),i).css;case"HTML":return await(await import("html-minifier-terser")).minify(t.toString(),i);case"JavaScript":return(await(await import("terser")).minify(t.toString(),i)).code??t;case"Image":return(await import("../Function/Image.js")).default(i,{Buffer:t,Input:n});case"SVG":{const{data:I}=(await import("svgo")).optimize(t.toString(),i);return I??t}default:return t}},Fulfilled:async t=>t.Files>0?`Successfully compressed a total of ${t.Files} ${e} ${t.Files===1?"file":"files"} for ${await(await import("files-pipe/Target/Function/Bytes.js")).default(t.Info.Total)}.`:!1})),e==="Image"&&(f=c(f,{Read:async({Input:t})=>{const{format:n}=await S(t).metadata();return S(t,{failOn:"none",sequentialRead:!0,unlimited:!0,animated:n==="webp"||n==="gif"})}})),await Promise.allSettled(Array.from(p).map(async t=>{await(await(await(await new(await import("files-pipe")).default(s,d).In(t)).By(m[e]??"**/*")).Not(u)).Pipe(f)}))}}}}}};const{default:l}=await import("../Variable/Option.js"),{default:{Cache:{Search:A}}}=await import("files-pipe/Target/Variable/Option.js"),{default:c}=await import("typescript-esbuild/Target/Function/Merge.js"),{default:S}=await import("sharp");let f;export{l as Default,c as Merge,A as Search,f as _Action,M as default,S as sharp};
