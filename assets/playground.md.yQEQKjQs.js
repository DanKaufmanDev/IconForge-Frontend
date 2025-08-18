import{_ as d,x as a,h as f,p as m,c as r,o as n,j as t,J as u}from"./chunks/framework.DuYXm8Z9.js";const p={class:"playground-container"},g={class:"preview-pane"},h=["srcdoc"],y={__name:"Playground",setup(l){const i=a(`<!-- Welcome to the IconForge Galaxy! -->
<!-- Explore the cosmos of possibilities. -->

<div style="font-family: sans-serif;text-align: center;padding: 2rem;background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);border-radius: 16px;width: 100%;height: 100%; overflow: hidden;  position: relative;  display: flex; flex-direction: column;  justify-content: center;  align-items: center;">
  
    <i class="if-star is-size-sm is-color-white is-anim-drift is-opacity-50 is-top-[20%] is-left-[10%]" style="--i: 1;"></i>
    <i class="if-star is-size-xs is-color-white is-anim-drift is-opacity-75 is-top-[50%] is-left-[80%]" style="--i: 5;"></i>
    <i class="if-star is-size-md is-color-white is-anim-drift is-opacity-25 is-top-[80%] is-left-[40%]" style="--i: 8;"></i>
    <i class="if-star is-size-sm is-color-mist-3 is-anim-flicker is-absolute is-top-[15%] is-left-[90%]" style="animation-duration: 5s;"></i>
    <i class="if-star is-size-xs is-color-mist-3 is-anim-flicker is-absolute is-top-[70%] is-left-[5%]"></i>
    <i class="if-star is-size-md is-color-mist-3 is-anim-flicker is-absolute is-top-[40%] is-left-[40%]" style="animation-duration: 3s;"></i>

    <i class="if-earth is-size-[150px] is-anim-wiggle is-gradient-radial-[circle,green,blue]"></i>

    <i class="if-rocket is-size-6xl is-color-twilight-5 is-rot-65deg] hover:is-scale-[2.5] is-transition is-absolute is-bottom-[15%] is-left-[15%]"></i>

    <h1 class="is-gradient-linear-[90deg,white,#6b7280] is-size-3xl is-m-[1rem] is-z-[10]" style="font-weight: 700;">
      IconForge Playground
    </h1>
    <p class="is-color-mist-7 is-m-[0] is-z-[10]" >
        The universe of icons is at your fingertips. Edit the code to see what's possible.
    </p>

</div>`),s=a(null),c=f(()=>`
    <html>
      <head>
        <script src="https://cdn.jsdelivr.net/npm/iconforged@latest"><\/script>
        <style>
           body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 98dvh;
            margin: 0;
            background-color: #1f2939;
            overflow: hidden;
          }
        </style>
      </head>
      <body>
        ${i.value}
      </body>
    </html>
  `);m(()=>{if(window.monaco){o();return}const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.0/min/vs/loader.min.js",e.onload=()=>{window.require.config({paths:{vs:"https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.0/min/vs"}}),window.require(["vs/editor/editor.main"],()=>{o()})},document.head.appendChild(e)});function o(){if(!s.value)return;window.monaco.editor.defineTheme("IconForge",{base:"vs-dark",inherit:!1,rules:[{token:"comment",foreground:"919191"},{token:"keyword",foreground:"cacaca"},{token:"string",foreground:"E6DB74"},{token:"tag",foreground:"e7c6ff"},{token:"attribute",foreground:"89c2d9"},{token:"delimiter",foreground:"e0aaff"}],colors:{"editor.background":"#1f29379b","editor.foreground":"#ffffff","editor.lineHighlightBackground":"#355070","editorCursor.foreground":"#A9A9A9"}});const e=window.monaco.editor.create(s.value,{value:i.value,language:"html",theme:"IconForge",automaticLayout:!0,minimap:{enabled:!1},fontFamily:"Inter",fontSize:16,lineHeight:24});e.onDidChangeModelContent(()=>{i.value=e.getValue()})}return(e,b)=>(n(),r("div",p,[t("div",{ref_key:"editorHost",ref:s,class:"editor-pane"},null,512),t("div",g,[t("iframe",{srcdoc:c.value,class:"preview-iframe"},null,8,h)])]))}},_=d(y,[["__scopeId","data-v-dfb296e9"]]),k=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page","sidebar":false},"headers":[],"relativePath":"playground.md","filePath":"playground.md"}'),v={name:"playground.md"},x=Object.assign(v,{setup(l){return(i,s)=>(n(),r("div",null,[u(_)]))}});export{k as __pageData,x as default};
