/*!
 * form-create 可视化表单设计器
 * @form-create/designer v3.1.5
 * (c) 2021-2024 xaboy
 * Github https://github.com/xaboy/form-create-designer
 * Released under the MIT License.
 */
(function(){"use strict";try{if(typeof document!="undefined"){var o=document.createElement("style");o.appendChild(document.createTextNode('._fc-designer{cursor:default;height:100%;min-height:500px;overflow:hidden;position:relative}._fc-designer>.el-main{bottom:0;left:0;padding:0;position:absolute;right:0;top:0}._fc-m .form-create ._fc-l-item{background:#2e73ff;height:10px;overflow:hidden;transition:all .3s ease;width:100%}._fc-l,._fc-m,._fc-r{border-top:1px solid #ececec;box-sizing:border-box}._fc-l-group{padding:0 12px}._fc-l-title{font-size:14px;font-weight:600;margin:18px 0 5px}._fc-l-item{background:#fff;color:#000;cursor:pointer;display:inline-block;height:70px;line-height:1;min-width:70px;text-align:center;transition:all .2s ease;width:33.33%}._fc-l-item i{display:inline-block;font-size:21px}._fc-l-item ._fc-l-name{font-size:12px}._fc-l-item ._fc-l-icon{padding:10px 5px 12px}._fc-l-item:hover{background:#2e73ff;color:#fff}._fc-m-tools{align-items:center;border:1px solid #ececec;border-top:0;display:flex;height:40px;justify-content:flex-end}._fc-m-tools button.el-button{align-items:center;display:flex;padding:5px 14px}._fc-m-tools .fc-icon{font-size:14px;margin-right:2px}._fc-r .el-tabs__nav-wrap:after{background-color:#ececec;height:1px}._fc-r ._fc-r-tabs{border-bottom:1px solid #ececec;display:flex;padding:0}._fc-r ._fc-r-tab{box-sizing:border-box;color:#303133;display:inline-block;flex:1;font-size:14px;font-weight:600;height:40px;line-height:40px;list-style:none;position:relative;text-align:center}._fc-r ._fc-r-tab.active{border-bottom:2px solid #409eff;color:#409eff}.drag-box{min-height:60px;width:100%}._fc-m-drag{box-sizing:border-box;overflow:auto;padding:2px}._fc-m-drag,.draggable-drag{background:#fff;height:100%;position:relative}._fc-m-drag>form,._fc-m-drag>form>.el-row{height:100%}.drag-tool{word-wrap:break-word;box-sizing:border-box;display:flex;min-height:20px;outline:1px dashed #2e73ff;overflow:hidden;padding:2px;position:relative;word-break:break-all}.drag-tool .drag-tool{margin:5px}.drag-tool+.drag-tool{margin-top:5px}.drag-tool.active{outline:2px solid #2e73ff}.drag-tool.active>div>.drag-btn{display:flex}.drag-tool .drag-btn{display:none}.drag-r{bottom:2px;right:2px}.drag-l,.drag-r{position:absolute;z-index:2}.drag-l{left:0;top:0}.drag-btn{background-color:#2e73ff;color:#fff;cursor:pointer;float:left;height:18px;justify-content:center;line-height:20px;padding-bottom:1px;text-align:center;width:18px}.drag-btn+.drag-btn{margin-left:2px}.drag-btn-danger{background-color:#ff2e2e}.drag-btn i{font-size:13px}.drag-mask{bottom:0;left:0;position:absolute;right:0;top:0;z-index:1}.CodeMirror{color:#000;direction:ltr;font-family:monospace;height:300px}.CodeMirror-lines{padding:4px 0}.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{padding:0 4px}.CodeMirror-gutter-filler,.CodeMirror-scrollbar-filler{background-color:#fff}.CodeMirror-gutters{background-color:#f7f7f7;border-right:1px solid #ddd;white-space:nowrap}.CodeMirror-linenumber{color:#999;min-width:20px;padding:0 3px 0 5px;text-align:right;white-space:nowrap}.CodeMirror-guttermarker{color:#000}.CodeMirror-guttermarker-subtle{color:#999}.CodeMirror-cursor{border-left:1px solid #000;border-right:none;width:0}.CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}.cm-fat-cursor .CodeMirror-cursor{background:#7e7;border:0!important;width:auto}.cm-fat-cursor div.CodeMirror-cursors{z-index:1}.cm-fat-cursor .CodeMirror-line::selection,.cm-fat-cursor .CodeMirror-line>span::selection,.cm-fat-cursor .CodeMirror-line>span>span::selection{background:transparent}.cm-fat-cursor .CodeMirror-line::-moz-selection,.cm-fat-cursor .CodeMirror-line>span::-moz-selection,.cm-fat-cursor .CodeMirror-line>span>span::-moz-selection{background:transparent}.cm-fat-cursor{caret-color:transparent}.cm-tab{display:inline-block;text-decoration:inherit}.CodeMirror-rulers{bottom:0;left:0;overflow:hidden;position:absolute;right:0;top:-50px}.CodeMirror-ruler{border-left:1px solid #ccc;bottom:0;position:absolute;top:0}.cm-s-default .cm-header{color:#00f}.cm-s-default .cm-quote{color:#090}.cm-negative{color:#d44}.cm-positive{color:#292}.cm-header,.cm-strong{font-weight:700}.cm-em{font-style:italic}.cm-link{text-decoration:underline}.cm-strikethrough{text-decoration:line-through}.cm-s-default .cm-keyword{color:#708}.cm-s-default .cm-atom{color:#219}.cm-s-default .cm-number{color:#164}.cm-s-default .cm-def{color:#00f}.cm-s-default .cm-variable-2{color:#05a}.cm-s-default .cm-type,.cm-s-default .cm-variable-3{color:#085}.cm-s-default .cm-comment{color:#a50}.cm-s-default .cm-string{color:#a11}.cm-s-default .cm-string-2{color:#f50}.cm-s-default .cm-meta,.cm-s-default .cm-qualifier{color:#555}.cm-s-default .cm-builtin{color:#30a}.cm-s-default .cm-bracket{color:#997}.cm-s-default .cm-tag{color:#170}.cm-s-default .cm-attribute{color:#00c}.cm-s-default .cm-hr{color:#999}.cm-s-default .cm-link{color:#00c}.cm-invalidchar,.cm-s-default .cm-error{color:red}.CodeMirror-composing{border-bottom:2px solid}div.CodeMirror span.CodeMirror-matchingbracket{color:#0b0}div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#a22}.CodeMirror-matchingtag{background:rgba(255,150,0,.3)}.CodeMirror-activeline-background{background:#e8f2ff}.CodeMirror{background:#fff;overflow:hidden;position:relative}.CodeMirror-scroll{height:100%;margin-bottom:-50px;margin-right:-50px;outline:none;overflow:scroll!important;padding-bottom:50px;position:relative;z-index:0}.CodeMirror-sizer{border-right:50px solid transparent;position:relative}.CodeMirror-gutter-filler,.CodeMirror-hscrollbar,.CodeMirror-scrollbar-filler,.CodeMirror-vscrollbar{display:none;outline:none;position:absolute;z-index:5}.CodeMirror-vscrollbar{overflow-x:hidden;overflow-y:scroll;right:0;top:0}.CodeMirror-hscrollbar{bottom:0;left:0;overflow-x:scroll;overflow-y:hidden}.CodeMirror-scrollbar-filler{bottom:0;right:0}.CodeMirror-gutter-filler{bottom:0;left:0}.CodeMirror-gutters{left:0;min-height:100%;position:absolute;top:0;z-index:3}.CodeMirror-gutter{display:inline-block;height:100%;margin-bottom:-50px;vertical-align:top;white-space:normal}.CodeMirror-gutter-wrapper{background:none!important;border:none!important;position:absolute;z-index:4}.CodeMirror-gutter-background{bottom:0;position:absolute;top:0;z-index:4}.CodeMirror-gutter-elt{cursor:default;position:absolute;z-index:4}.CodeMirror-gutter-wrapper ::selection{background-color:transparent}.CodeMirror-gutter-wrapper ::-moz-selection{background-color:transparent}.CodeMirror-lines{cursor:text;min-height:1px}.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{word-wrap:normal;-webkit-tap-highlight-color:transparent;background:transparent;border-radius:0;border-width:0;color:inherit;font-family:inherit;font-size:inherit;font-variant-ligatures:contextual;line-height:inherit;margin:0;overflow:visible;position:relative;white-space:pre;z-index:2}.CodeMirror-wrap pre.CodeMirror-line,.CodeMirror-wrap pre.CodeMirror-line-like{word-wrap:break-word;white-space:pre-wrap;word-break:normal}.CodeMirror-linebackground{bottom:0;left:0;position:absolute;right:0;top:0;z-index:0}.CodeMirror-linewidget{padding:.1px;position:relative;z-index:2}.CodeMirror-rtl pre{direction:rtl}.CodeMirror-code{outline:none}.CodeMirror-gutter,.CodeMirror-gutters,.CodeMirror-linenumber,.CodeMirror-scroll,.CodeMirror-sizer{box-sizing:content-box}.CodeMirror-measure{height:0;overflow:hidden;position:absolute;visibility:hidden;width:100%}.CodeMirror-cursor{pointer-events:none;position:absolute}.CodeMirror-measure pre{position:static}div.CodeMirror-cursors{position:relative;visibility:hidden;z-index:3}.CodeMirror-focused div.CodeMirror-cursors,div.CodeMirror-dragcursors{visibility:visible}.CodeMirror-selected{background:#d9d9d9}.CodeMirror-focused .CodeMirror-selected{background:#d7d4f0}.CodeMirror-crosshair{cursor:crosshair}.CodeMirror-line::selection,.CodeMirror-line>span::selection,.CodeMirror-line>span>span::selection{background:#d7d4f0}.CodeMirror-line::-moz-selection,.CodeMirror-line>span::-moz-selection,.CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}.cm-searching{background-color:#ffa;background-color:#ff06}.cm-force-border{padding-right:.1px}@media print{.CodeMirror div.CodeMirror-cursors{visibility:hidden}}.cm-tab-wrap-hack:after{content:""}span.CodeMirror-selectedtext{background:none}._fc_struct{width:100%}._fc_struct .CodeMirror{height:450px}._fc_struct .CodeMirror-line{font-size:13px!important;line-height:16px!important}.CodeMirror-lint-tooltip{z-index:1!important}._fc_struct .el-dialog__body{padding:0 20px}._fc_err{color:red;float:left;text-align:left;width:65%}._fc_fetch .el-form-item__label{display:inline-block;float:left;padding-right:5px;text-align:right}._fc_fetch{background-color:#bfdaf7;padding:10px}._fc-validate .form-create .el-form-item{margin-bottom:22px!important}._fc-validate .append-msg{cursor:pointer}._fc-validate .el-input-group__append{padding:0 10px}._fc-required{align-items:center;display:flex}._fc-required .el-input{margin-left:15px}._fc-required .el-switch{height:28px}._fc_table_opt[data-v-0d635ce0]{width:100%}@font-face{font-family:fc-icon;src:url(data:font/woff;base64,d09GRgABAAAAABa8AAsAAAAAJQQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAARAAAAGA9hU5KY21hcAAAAYgAAAE2AAADaEcfEkJnbHlmAAACwAAAEPIAABsQkdIMXGhlYWQAABO0AAAALwAAADYmk54paGhlYQAAE+QAAAAgAAAAJAfgBARobXR4AAAUBAAAABIAAACIiGIAAGxvY2EAABQYAAAARgAAAEZ5NHJIbWF4cAAAFGAAAAAdAAAAIAE2ALZuYW1lAAAUgAAAAUAAAAJnEKM8sHBvc3QAABXAAAAA+QAAAWbrmcBBeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGFhZpzAwMrAwNTJdIaBgaEfQjO+ZjBi5ACKMrAyM2AFAWmuKQwHnhe8Lmdu+N/AwMB8hwFIMjCiKGICAH8ZDVB4nOXTR04DQRSE4X/IOefMniUnQBwIBMILWyZnkVkhjmNYcY+SzCGgxsUKjkBL30j9pA7qVwN0Au22Zh1QfFBQjndXi1a9nb5WvYMXz8cYcaVN29pVRTVd67n59ln5+gJtaUd7qqqum2YjtV+j8PoJpphhjnU22HRtgUWWWGaFVbp8n2566PWZ/QwwyBDDPnHUp48x7rWTXj3t9bPeYZ623LLo+nPS/xsD5ad4/Zmtlv0IvzDaDr812gm/OtoNvz/aC3cCVaK1TzXcHVSLMjeqhzuG9sO9QwfhLqLDKDOko3Bn0XGUt9ZJuNvoNNx3dBZOADoPZwFdhFOBLqPMrq7CSUHX4cygm3B60G04R+gunCh0H84WeginDD2G84aewslDz+EM0myE00jzLcp/6rMSFN+kJ4M/AAB4nHU5DZAU1Zn93pv+mZ7p7umZ/pnZ2fnfmWHZndlhemZaliwEEBZYFEEBo8huDkPiXuTk/Fkq3Gk0xxlSKKAclkbu8KTU8y6pilVRVAhRq6g7c1bInScpEkmRi4nlRanEu3Bc7Oa+1z2zsws60/O9733ve/1ef+/77WFYBj7kTvzfzDpmM/MV5s+ZexkGFfJcChVkpBmmpUNHMxYgvdPXjHqrqTZaC1Dd0FWNK+TypXa/VRpAeRkDNY2tXH0hBnoV81a91aAjHJ3vM3GXYZ1xfOFAZuCCKMvihQshWQ5d8HElpigijAxk3CiFJ+VIRD6ZqBRisUIlgT5qYwcOiJSPTjwgw+eAIsvKDKwzij8eTG9BsiajnYqm7PSweXQhnBXlzhroo8xAIkHv70Znr/QdWZfh+psEfA54wCeAKDHDXLoUQGSAUZgEw8SajRYIIoMMgEYKsapGMZDfQMZAc4zI7YRFzxmZT6BL/tTI4IE3jSwQs8aqAbdpZIDpR/SecEb/C/eMMXPgnsQX9vRNc3mOrSI4Bo4nnCf4lh1rldauzRiuoWwjAXSvkXGqOYvs583wJx9GUywQFTNMYhQNsOhX7jt4QWfhOXExZKjuZDiuQYsOhuOwPILnOk8eIiJThE59IWp4K3oqARphptGCNpWeI19FIwifHbquVrtuyL0a2kp53edjG6xXqmuqcL1iXR9TY+jU3BXrV8wFsNz45+V3GIOt/hUbVsyt98tz4y/QR/ae+2X8LZBllqnCut6CaURViy7FLkT1NNZknK/iRgsVgFgqW/U0guPEL7g/XrFjdHTHCjTPa53/SY+tHftcNvs5v0Hn9tdardr++RP2VRN49/Id+3Ys98BdacqzbtVIJjOyat2Ye7x4+9duL80f3z5uM4zo7WkH/iNjMoPMCLOYWcmsZW5gJpl7mAeoZHxx5GabhmWCEfGqN9CyVdhlrorKRXp4PtMIonqiw5fVC3qhWWjmzEK5wBdss8zbcFND13iOh9bHBlCTWo3dajbKYDm6VadoieLoHxWTGArq75s3r885WqjXCz/5CSVF8Bqvcd9KD2B0RDUTintGjSciqOSegd/o4vRipI7l1XVqfmwonXk/ogsSL4UklieiFsluyNREmfC8JNdsSZY5VlJt/Ecjcr8Sx/U+dxddCa8u1AeNiPM9byV0LwyRwd4XEpH1UTMRWaeaczb8Ifnss8nXa7XXp9avn+J4MD1ZChAS4EU9pYivr2NxQJV4fg/PxgSJ8CDugCfzbfgjZoAZY77E/LXnoUq+xwHJlajqgyTBSdV1DWTTkacvX+g2G9QoKCsMgtQa5SrVV1/8RbDRNpqnLHlOVzkeOiUzP4RKDbtFTU3XFAy0IVRFnJZBacTLiMSPhZVI6Fg4poWcUxQme9VQkgoe1/rm1d1RSelF63hN49/nUEAOBzD7fmaoknP3zButR0K6qSdZNsBLaloUd5lmYlmiEsAYFhcCtpBQ+F0cx2IZfSlihrXQObrAOSkaDyvz+s7SRc7la+534TZx8Q4RBB2EBQL1wva+eacu5mu1/Imwkjwh6rrofswipBwX95rLzZ4eKyDyQZ5g1hKIkgNBq7wQpCJmp+WsMBmQtQ3SpjYH8uh4rUZpplZTLSft8EBdOD8DJxTQg6EE1Y8ZRHXOllqtEs4DNBXnrGKaCs4r5uSjoqqKACKhaewpirj/ReF2VVPxh61Sd7bzQGeqqbjvw7BqKN9UdVU1FZSmra66J+lUNNzxI5Pec8WYimels6yTzam5or0QDlVBREGcXrAKcPLgXTLYJpaZzZrOQTOTMfGkcxBPugdPC6ZCBPJbglEhxPNbBRIxBLL+NP4wQzmBH0+amZZz8K2LMKQFA+55ghDmH+CNiEC2XvR0+pJLHiCY0Zh+kPTVIP58GQwY1A0Ujto5NXiuXLc9fYWRPO1rdMTOV1GD+j6ky7js+0LfM2Jm8qaN9WazvvGmtzvI5M3XjlWq1crYtS92kJtHp5Ytm3p4ahlafveoPW7b49vG7dZm3J1n3XjTv1HEmjXPQ9Ysn3poavnyqdEVU1db3kx7/M8220w7Tj0IzzTIXM8wRTAWnsuDqS1CAEC+i/BCZNUhVmRwGpkGp1DAw3OVjQyCBx0Czla5NIRLeThb+qwZOBFo6k3bMPFrUePxxyPVVEwluR2RMCcU48+tDvUnUnIoglc+F+9jhXB0R4qLauCvohgMKxBmi8qDQY4NnrqZ7WFvPsXzCLGPh/p4ohwnt8TFa64RZamaOLI9UjESGZJ6XO9RWC30eIrkDH1I2/50fEAlgWGMUICL/Kv89WBYZPt+EAq9VhRkwrEPR18MCYSM4xp9dM57/i/jDzz7KTAWs4BZBPH6smBgzjaoAqtaqgle32pSz0+h1UQAVPjx0D2HhzODgxnnZLpSSXtJynBIkkLOe9Ybu15trYEfykw+9dTk5K5d+INK2jlJufFwumLJonOSsuJhUd7hbkJHBnf/fn36m79fn3GP2ugF+1m7fWaT+CWmh4GHQHbbVEHmrQbYAFg0GAQcQYulPjbXpP6R+lrfoZbQoWukuHwNr8v8FCexYXyPIPAxdCIsOfvkuCyH8eGwzGFmwv1OGHro+gle1vl9JID38TrPohNy+Jln6MgPPdBDt8O3/dBvGB3k2M80mGXMevD7YLegOyA7maYeVQTSA33Ksb48wcugtkRzKg2AnBcFMu1o0HH3ECxnEwr8ZX3C92fkSE816ZxPVpJwYdk5H00mo6+iL9DG/dl9HDfCBoPsHyg491kA/zotlXTHSVZ74GaYwJ2sZNT5v2gSTziHk1HMRZPOIfTvLFvDAXYTFyDrgmySzkxzwh6B89AkJ+wV2F5W8EDHR9+AT3u+LAdZ0YLP8GdooWddSEblUotFLciKeJAJeBgyq5M1UinDOU4hXuoc934FOc4HA4rzrtcijFYFFS3ovhhUQvwltDIY0UT3pWBEFPA73blGynKOp2AuGxR12XlXYUXeTMJUFI0E3ZeDSOCjqIGWB5EaEd1XoB+M0LO+dJH8PdEg3mxkJpjboALZyfyV5w0LpfL0F7yH3TK9/CeDdMNzjSUIwaAQgFmG3QQm8JSmBe6xRb+gvP5U4OI5Os2bTah+UyW2r0DMKxD0bkEj1aFiX48RIYuCfDH/jXU3fmHL+iWVuIrjSwZW9Rd7NZFlRSTk/zZwZwpxvBjJjhBVi/UayWgthiR97sjYhmuuHd2eybP8fCVmZLJzHknOTabKva1UKQXXPvgB4bDfXOcTOcL16FkzGeM2b920Ye1UMiVHljXXzp3HBh5c0s8SntXDPaI5V1lpxZaKimY0okCFIMMF1drtaE5p9dACKdwTv3Xp6rU33xQ1td6YiUa03t5yKnlvjK6QGoGm3NvrE1OP+g0znXdva8fLuZ+uX6QAFNr3MjEvFTC4gkVqib6+hHOYQrzFeQJvPbQzmojulKJRCVlSFKsRgj+c5phI9A07T6Dvuqc8hhqwRsNSdGZ8VJkSeKYR2AVUllBXQlUJiS6kz90g2Q2cJt1TmeZzvG/Nvm1jZunOTU1rfOcu2tSqO5dOzopyNO49kchopCdj1GAnPdEo/nGHnTbVmmXN4vai5DHFNCKQgnwlGv6Y7v/jcJSZzlcn8Q9AklEmTSUYU3NqcXYcMOkudV+IsRn4STzlbMPPC5IkOBsE6aykSHD9NhyRpEgYP+ycwaWhsOAcoQx4k5YOg8Sco+FYLIxXdPFuPncDfh6sTGWSULkNedFIgx00YlZdg2QYct/cNFaYxnifC7A38W3ZrPNYNnsbvVSs+O3v2k17VMXPNxqXmEZPWO78HCsRltu69OV2Ttm6PBqWroyGJpg62KpGHbiXfoMfK2kzgiAezHWjoNv/8lFW44ggvMVH2TfBTcZEjD+knF4YtHOV1sww+P2TJ3kM7Kb4Mx6zkMeJIhYwbsfu3fg1wCQmBVFnPkQdBvEmjcgxu0wDNM11/VBDN9sqEU9aaoPWHcVZY41ZY+j82NjEhLZ69fj4iYO9c0rJg8kSLkRDB0XxYAhdfCxZLPU8liyVI+JjIlx4UWu4WHIPDwNEZ4u9jtNbLEEA6S06R2G7vCguLvdcSWzXpjTPjTB5yD6WQWV6C3jUu5n7mX8Ayesdc6ChjhY+0xbSqaYgOzO6BRQcFOt16FinSKJa7J9eo2XPwIvTU4H+GTgPuc3MPUwvr89gshrWG7IOx7VXkuHMSrRCnKLHt5c426boye+FHiS+h3kPC00Bg3MMfY8OuWsoZQaOKns7U0Kfgp2qSXSp16GvybU4HdtCx+L4+BRd/hFvqX7OnzEF+3I20RniPto/MmNvB2khq8njdFSXdvrNxCzi6TeSlHdoGsTf8MdJJ3ecxP/p2WoCzm8A8p6utU7bY4dSpLKiUiNXIN/Hj+bzzu35fLuNRtoIHu7p67P6+n7dUyg0CoUP/B4+3mo5v7STkoKkVusYJVl97vnZbTe//Sf8rmfLm5ivMn/JPEQrxJlVOGfY3dLbM3I252eO1nQF3i7WPbPXO6lk5wa5ZpfWKs3K3OBmV2RzbFdfvReS6BfoOUXXFfdGRSdGUmDRFE2e3N2sgL7t/lTR3fdNxTCUP6FMZlhACwwZzfFm/FQ23PdQXFdonxju2wJ7gc4F4H6dJmMLaG8B3t+l46ohb6GTt8jGnZR2FQUH4M4HYEA1DBUG3Kv5sEmZ/DXf8fAtYc19fXoGctoILPHxNBXELUzH4gxYtM0sZa4Dyd/G3EPfgbST8U5SXpjpSquI9d7UjqBcu7X0XBNB5GZnGJvvCTzJLkTdTqPVZWpexkVqWyA+um9He9QNZqFg4i1mAeed30DoRhUAW509eJvzCN7uqlZIVSQrFJGfpQAwlcjPdVDVfduC4isEfeUZi5oTHVfwS3EaxeI+LJjOKW+RWiJnazTGaj7cutX5F3Roq5JQ2pcUbmOHVF1SwkGl3TCza+0SSHERzSWmi+lugR2TEX2RuBDX01iXEZqZQcQKXXF1iuyZ+cCuIZosNGiy8LVbGsRyf+WnEYcfpdt9VFJj5FOqa2fvUMNPM2izePFO9KwqvkdnvCeq7lmaDSWiNI5f+oTcRVioh4pME/a/Bp6AvuvLK16h2DlzqBvbx9R5PR+7rF+2/WPOoMtH8NE1irk7Ll/36g2FOPpRPL/BTQhsmqohgH1BNsUJAgdg3yCnha4OadzgcJeI996qqrdWnP+I5/NxPFBxPqIDaIpCd3cX/7YdhI89c9h/Z+6Q+wnNWILwZCq4ALUMGRO533kanbedp/F+56vbcGkbYLf4/J+QJ0kA5AEZTdGoL0L0rwTVdy46pKScyRY6ptFxOB03gy6SIP4LqN7XsoElAXYtFF5YB8S5w+tDZPmdrLM/J+RJNojuCrBswN0jBu7myPPPE44jZ2Rdl8+Q9r5/QZ4iWdCreZ+lU17FOSvKtiMpGBhmtn9xsz1/vr35i7/sICs1aUesV5uSYzG5jZDsLA4PcSfk2I42Twfp5u73Qx4TB12pejUzfTuvcZ1EuQra7KXK/hsj/+0RT/Wabg8zq1cutRsjCxtXLVl1YNWSqxoLRxr20pVj/aP9/aPXU9CfrVQ+X6ngH2ZTVu2OzXfUGqlcLtXwUCuV/buBVRtXDgys3LhqYO3QkiG4mPb/B0fIz8kmr14tl6i7ohEBMjxQYs77fwnOSvFerhqet4IDBLR9tk36vxOgDXL6ECdfupHn2fsCocB9LC9sdGXuSZZ9kpcu3ShQcniafCiAvtXFA4c+lSUAN3Q3+uT/BzxDuncAAHicY2BkYGAA4qmuv3vi+W2+MnCzMIDAw51rxRD0/yUsjMwxQC4HAxNIFABBdgrdAHicY2BkYGBu+N/AEMOSxMDw/z8LIwNQBAUoAQB7ogTseJxjYWBgYKE1TiKsBgAzHgDrAAAAAAAAAKgA0gEUAU4BmAJSAwYDcgO8BCYEpgUABUoF2AZABwoHTAeqB+4IMAiECOYJxAoWCtALcgvSDEIMWgyeDOgNNA2IAAB4nGNgZGBgUGJYxcDFAAJMQMwFZv8H8xkAHWAB7QAAAHichZE9bsJAEIWfwZAElChKpDRpVikoEsn8lEipUKCnoAez5ke211ovSNQ5TY6QE+QI6Whzikh52EMDRbza2W/evpkdyQDusIeH8rvnLtnDJbOSK7jAo3CV+pOwT34WrqGJnnCd+qtwAy94E26yY8YOnn/FrIV3YQ+3+BCu4AafwlXqX8I++Vu4hgf8CNep/wo3MPGuhZtoeeHA6qnTczXbqVVo0sik7niO9WITT+2pPNE2X5lUdYPOURrpVNtjm3y76DkXqciaRA15q+PYqMyatQ5dsHQu67fbkehBaBIMYKExhWOcQ2GGHeMKIQxSREV0Z/mY7gU2iFlp/3VP6LbIqR9yhS4CdM5cI7rSwnk6TY4tX+tRdXQrbsuahDSUWs1JYrLiDzzcramE1AMsi6oMfbS5ohN/UMyQ/AHYk29XeJxtT8lSwzAMzStNnJay72uhnPVRjq1OPTiRx3Fa+HvsgSO6SE96y6iaVb+1rP6vDWY4whw1Gii0WGCJY6xwglOc4RwXuMQVrnGDW9zhHg94xBOe8YJXrPGGd2zwUbU0Tt1WYq9oK95yXP11ksDDkrS1ZHbOW0XjwSWzm1PSnaJuSkmGhtwQprTIFDafnXw1FLV1UueWWNEw9R1HRVPwom2m6dHobN7QGLThhox4iXVB2Ut7jmlOUQ4tWbd3tkhH9mxyQop6GLdlw9YlKRdfGHW+MNdkc2CeXZ9jbdYUZCR8K3J9kOKbX2kpRN47PtTUy56r6ge3iFdEAAAA) format("woff")}.fc-icon{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:fc-icon!important;font-size:16px;font-style:normal}.icon-group:before{content:"\\eb77"}.icon-add-child:before{content:"\\e789"}.icon-switch:before{content:"\\e77c"}.icon-tab:before{content:"\\e77b"}.icon-button:before{content:"\\e77e"}.icon-input:before{content:"\\e77f"}.icon-checkbox:before{content:"\\e780"}.icon-radio:before{content:"\\e781"}.icon-rate:before{content:"\\e782"}.icon-number:before{content:"\\e783"}.icon-upload:before{content:"\\e784"}.icon-cascader:before{content:"\\e785"}.icon-space:before{content:"\\e786"}.icon-color:before{content:"\\e787"}.icon-span:before{content:"\\e788"}.icon-alert:before{content:"\\e78a"}.icon-row:before{content:"\\e78b"}.icon-divider:before{content:"\\e78d"}.icon-select:before{content:"\\e78e"}.icon-transfer:before{content:"\\e78f"}.icon-editor:before{content:"\\e790"}.icon-slider:before{content:"\\e791"}.icon-tree:before{content:"\\e792"}.icon-date:before{content:"\\e793"}.icon-time:before{content:"\\e794"}.icon-delete:before{content:"\\e770"}.icon-copy:before{content:"\\e771"}.icon-import:before{content:"\\e773"}.icon-add:before{content:"\\e774"}.icon-preview:before{content:"\\e776"}.icon-move:before{content:"\\e777"}')),document.head.appendChild(o)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import { defineComponent as Pn, openBlock as tt, createElementBlock as Gt, createElementVNode as ft, markRaw as _f, computed as io, unref as ed, isRef as Lv, ref as Zi, resolveComponent as ut, TransitionGroup as Nv, h as ta, nextTick as Fr, toRefs as Ul, getCurrentInstance as Fv, reactive as rl, provide as Ef, toRef as Qi, watch as il, createBlock as Hn, normalizeStyle as Ov, withCtx as qe, createVNode as Je, Fragment as td, renderList as nd, toDisplayString as on, normalizeClass as Xo, renderSlot as rd, createTextVNode as Kn, createCommentVNode as vn, withDirectives as jo, vShow as $o, inject as Bv, withModifiers as Hv, pushScopeId as Uv, popScopeId as zv, mergeProps as Wv } from "vue";
import id from "@form-create/element-ui";
function bf({ t: c }) {
  return [
    {
      type: "radio",
      field: "labelPosition",
      value: "left",
      title: c("form.labelPosition"),
      options: [
        { value: "right", label: "right" },
        { value: "left", label: "left" },
        { value: "top", label: "top" }
      ]
    },
    {
      type: "radio",
      field: "size",
      value: "small",
      title: c("form.size"),
      options: [
        { value: "large", label: "large" },
        { value: "default", label: "default" },
        { value: "small", label: "small" }
      ]
    },
    {
      type: "input",
      field: "labelWidth",
      value: "125px",
      title: c("form.labelWidth")
    },
    {
      type: "switch",
      field: "hideRequiredAsterisk",
      value: !1,
      title: c("form.hideRequiredAsterisk")
    },
    {
      type: "switch",
      field: "showMessage",
      value: !0,
      title: c("form.showMessage")
    },
    {
      type: "switch",
      field: "inlineMessage",
      value: !1,
      title: c("form.inlineMessage")
    },
    {
      type: "switch",
      field: "formCreateSubmitBtn",
      value: !0,
      title: c("form.submitBtn")
    },
    {
      type: "switch",
      field: "formCreateResetBtn",
      value: !1,
      title: c("form.resetBtn")
    }
  ];
}
const mr = (c, A) => {
  const l = c.__vccOpts || c;
  for (const [o, t] of A)
    l[o] = t;
  return l;
}, jv = Pn({
  name: "IconRefresh"
}), $v = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  "data-v-029747aa": ""
}, Yv = /* @__PURE__ */ ft("path", {
  fill: "currentColor",
  d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
}, null, -1), Vv = [
  Yv
];
function Qv(c, A, l, o, t, s) {
  return tt(), Gt("svg", $v, Vv);
}
const Gv = /* @__PURE__ */ mr(jv, [["render", Qv]]);
function Gi({ t: c }) {
  return [
    {
      type: "input",
      field: "field",
      value: "",
      title: c("form.field")
    },
    {
      type: "input",
      field: "title",
      value: "",
      title: c("form.title")
    },
    {
      type: "input",
      field: "info",
      value: "",
      title: c("form.info")
    },
    {
      type: "Struct",
      field: "_control",
      value: [],
      title: c("form.control"),
      props: {
        defaultValue: [],
        validate(A) {
          return Array.isArray(A) ? A.length ? !A.some(({ rule: l }) => !Array.isArray(l)) : !0 : !1;
        }
      }
    },
    {
      type: "col",
      props: {
        span: 24
      },
      children: [
        {
          type: "el-button",
          props: {
            type: "primary",
            size: "small"
          },
          inject: !0,
          on: {
            click({ $f: A }) {
              const l = A.activeRule;
              l && (l.__fc__.updateKey(), l.value = void 0, l.__fc__.$api.sync(l));
            }
          },
          native: !0,
          children: [{ type: "i", class: "fc-icon icon-delete" }, c("form.clear")]
        },
        {
          type: "el-button",
          props: {
            type: "success",
            size: "small",
            icon: _f(Gv)
          },
          inject: !0,
          on: {
            click({ $f: A }) {
              const l = A.activeRule;
              l && (l.__fc__.updateKey(!0), l.__fc__.$api.sync(l));
            }
          },
          native: !0,
          children: [c("form.refresh")]
        }
      ]
    }
  ];
}
function Cf() {
  return [
    {
      type: "validate",
      field: "validate",
      value: []
    }
  ];
}
function ki(c, A, l) {
  c[A] = l;
}
const xt = {
  type(c, A) {
    return Object.prototype.toString.call(c) === "[object " + A + "]";
  },
  Undef(c) {
    return c == null;
  },
  Element(c) {
    return typeof c == "object" && c !== null && c.nodeType === 1 && !xt.Object(c);
  },
  trueArray(c) {
    return Array.isArray(c) && c.length > 0;
  },
  Function(c) {
    const A = this.getType(c);
    return A === "Function" || A === "AsyncFunction";
  },
  getType(c) {
    const A = Object.prototype.toString.call(c);
    return /^\[object (.*)\]$/.exec(A)[1];
  },
  empty(c) {
    return c == null || Array.isArray(c) && Array.isArray(c) && !c.length ? !0 : typeof c == "string" && !c;
  }
};
["Date", "Object", "String", "Boolean", "Array", "Number"].forEach((c) => {
  xt[c] = function(A) {
    return xt.type(A, c);
  };
});
function od(c, A) {
  return {}.hasOwnProperty.call(c, A);
}
function ad(c, A = {}, l) {
  let o = !1;
  for (let t in A)
    if (Object.prototype.hasOwnProperty.call(A, t)) {
      let s = A[t];
      if ((o = Array.isArray(s)) || xt.Object(s)) {
        let u = c[t] === void 0;
        if (o)
          o = !1, u && ki(c, t, []);
        else if (s._clone && l !== void 0)
          if (l)
            s = s.getRule(), u && ki(c, t, {});
          else {
            ki(c, t, s._clone());
            continue;
          }
        else
          u && ki(c, t, {});
        c[t] = ad(c[t], s, l);
      } else
        ki(c, t, s), xt.Undef(s) || (xt.Undef(s.__json) || (c[t].__json = s.__json), xt.Undef(s.__origin) || (c[t].__origin = s.__origin));
    }
  return l !== void 0 && Array.isArray(c) ? c.filter((t) => !t || !t.__ctrl) : c;
}
function vr(c) {
  return ad({}, { value: c }).value;
}
function kv(c) {
  const A = c.replace(/(-[a-z])/g, function(l) {
    return l.replace("-", "").toLocaleUpperCase();
  });
  return zl(A);
}
function zl(c) {
  return c.replace(c[0], c[0].toLowerCase());
}
let Kv = 0;
function St() {
  const c = 370 + ++Kv;
  return "F" + Math.random().toString(36).substr(3, 3) + Number(`${Date.now()}`).toString(36) + c.toString(36) + "c";
}
function Xv(c, A, l) {
  return `[form-create ${c}]: ${A}` + (l ? `

rule: ` + JSON.stringify(l.getRule ? l.getRule() : l) : "");
}
function Jv(c, A) {
  console.error(Xv("err", c, A));
}
const Tf = "[[FORM-CREATE-PREFIX-", wf = "-FORM-CREATE-SUFFIX]]", Df = "$FN:", Mf = "$FNX:", Rf = "$GLOBAL:", Yo = "function";
function Pf(c) {
  return new Function("return " + c)();
}
function Zv(c, A) {
  if (c && xt.String(c) && c.length > 4) {
    let l = c.trim(), o = !1;
    try {
      if (l.indexOf(wf) > 0 && l.indexOf(Tf) === 0)
        l = l.replace(wf, "").replace(Tf, ""), o = !0;
      else if (l.indexOf(Df) === 0)
        l = l.replace(Df, ""), o = !0;
      else if (l.indexOf(Rf) === 0) {
        const s = l.replace(Rf, "");
        return l = function(...u) {
          const f = u[0].api.getGlobalEvent(s);
          if (f)
            return f.call(this, ...u);
        }, l.__json = c, l.__inject = !0, l;
      } else {
        if (l.indexOf(Mf) === 0)
          return l = Pf("function($inject){" + l.replace(Mf, "") + "}"), l.__json = c, l.__inject = !0, l;
        !A && l.indexOf(Yo) === 0 && l !== Yo && (o = !0);
      }
      if (!o)
        return c;
      const t = Pf(l.indexOf(Yo) === -1 && l.indexOf("(") !== 0 ? Yo + " " + l : l);
      return t.__json = c, t;
    } catch (t) {
      Jv(`\u89E3\u6790\u5931\u8D25:${l}

err: ${t}`);
      return;
    }
  }
  return c;
}
const qv = {
  name: "zh-cn",
  form: {
    field: "\u5B57\u6BB5 ID",
    title: "\u5B57\u6BB5\u540D\u79F0",
    info: "\u63D0\u793A\u4FE1\u606F",
    control: "\u8054\u52A8\u6570\u636E",
    clear: "\u6E05\u7A7A\u503C",
    refresh: "\u5237\u65B0",
    labelPosition: "\u6807\u7B7E\u4F4D\u7F6E",
    size: "\u8868\u5355\u5C3A\u5BF8",
    labelWidth: "\u6807\u7B7E\u5BBD\u5EA6",
    hideRequiredAsterisk: "\u9690\u85CF\u5FC5\u586B\u5B57\u6BB5\u7684\u6807\u7B7E\u65C1\u8FB9\u7684\u7EA2\u8272\u661F\u53F7",
    showMessage: "\u663E\u793A\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F",
    inlineMessage: "\u4EE5\u884C\u5185\u5F62\u5F0F\u5C55\u793A\u6821\u9A8C\u4FE1\u606F",
    submitBtn: "\u662F\u5426\u663E\u793A\u8868\u5355\u63D0\u4EA4\u6309\u94AE",
    resetBtn: "\u662F\u5426\u663E\u793A\u8868\u5355\u91CD\u7F6E\u6309\u94AE",
    submit: "\u63D0\u4EA4",
    reset: "\u91CD\u7F6E"
  },
  validate: {
    type: "\u5B57\u6BB5\u7C7B\u578B",
    typePlaceholder: "\u8BF7\u9009\u62E9",
    trigger: "\u89E6\u53D1\u65B9\u5F0F",
    mode: "\u9A8C\u8BC1\u65B9\u5F0F",
    modes: {
      required: "\u5FC5\u586B",
      pattern: "\u6B63\u5219\u8868\u8FBE\u5F0F",
      min: "\u6700\u5C0F\u503C",
      max: "\u6700\u5927\u503C",
      len: "\u957F\u5EA6"
    },
    message: "\u9519\u8BEF\u4FE1\u606F",
    auto: "\u81EA\u52A8\u83B7\u53D6",
    autoRequired: "\u8BF7\u8F93\u5165{title}",
    autoMode: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684{title}",
    requiredPlaceholder: "\u8BF7\u8F93\u5165\u63D0\u793A\u8BED"
  },
  tableOptions: {
    handle: "\u64CD\u4F5C",
    add: "\u6DFB\u52A0"
  },
  struct: {
    title: "\u7F16\u8F91\u6570\u636E",
    submit: "\u786E \u5B9A",
    cancel: "\u53D6 \u6D88",
    error: "\u8F93\u5165\u5185\u5BB9\u683C\u5F0F\u6709\u8BEF"
  },
  fetch: {
    action: "\u63A5\u53E3",
    actionRequired: "\u8BF7\u6570\u636E\u63A5\u53E3",
    method: "\u8BF7\u6C42\u65B9\u5F0F",
    dataType: "\u63D0\u4EA4\u65B9\u5F0F",
    data: "\u9644\u5E26\u6570\u636E",
    headers: "header\u4FE1\u606F",
    parse: "\u89E3\u6790\u51FD\u6570",
    parseInfo: "\u89E3\u6790\u63A5\u53E3\u6570\u636E\uFF0C\u8FD4\u56DE\u7EC4\u4EF6\u6240\u9700\u7684\u6570\u636E\u7ED3\u6784",
    parseValidate: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u89E3\u6790\u51FD\u6570"
  },
  designer: {
    preview: "\u9884 \u89C8",
    clear: "\u6E05 \u7A7A",
    clearConfirm: "\u6E05\u7A7A",
    clearCancel: "\u53D6\u6D88",
    clearConfirmTitle: "\u6E05\u7A7A\u540E\u5C06\u4E0D\u80FD\u6062\u590D\uFF0C\u786E\u5B9A\u8981\u6E05\u7A7A\u5417\uFF1F",
    config: {
      component: "\u7EC4\u4EF6\u914D\u7F6E",
      form: "\u8868\u5355\u914D\u7F6E",
      rule: "\u57FA\u7840\u914D\u7F6E",
      props: "\u5C5E\u6027\u914D\u7F6E",
      validate: "\u9A8C\u8BC1\u914D\u7F6E"
    }
  },
  menu: {
    main: "\u8868\u5355\u7EC4\u4EF6",
    aide: "\u8F85\u52A9\u7EC4\u4EF6",
    layout: "\u5E03\u5C40\u7EC4\u4EF6"
  },
  props: {
    required: "\u662F\u5426\u5FC5\u586B",
    options: "\u9009\u9879\u6570\u636E",
    option: "\u9009\u9879",
    optionsType: {
      json: "JSON\u6570\u636E",
      fetch: "\u63A5\u53E3\u6570\u636E",
      struct: "\u9759\u6001\u6570\u636E"
    }
  },
  components: {
    group: {
      name: "\u5B50\u8868\u5355",
      props: {
        disabled: "\u662F\u5426\u7981\u7528",
        syncDisabled: "\u662F\u5426\u4E0E\u5B50\u8868\u5355\u5F3A\u5236\u540C\u6B65 disabled \u72B6\u6001",
        expand: "\u8BBE\u7F6E\u9ED8\u8BA4\u5C55\u5F00\u51E0\u9879",
        button: "\u662F\u5426\u663E\u793A\u64CD\u4F5C\u6309\u94AE",
        sortBtn: "\u662F\u5426\u663E\u793A\u6392\u5E8F\u6309\u94AE",
        min: "\u8BBE\u7F6E\u6700\u5C0F\u6DFB\u52A0\u51E0\u9879",
        max: "\u8BBE\u7F6E\u6700\u591A\u6DFB\u52A0\u51E0\u9879",
        mode: "\u7EC4\u4EF6\u7C7B\u578B",
        modeOpts: {
          subform: "\u5BF9\u8C61",
          group: "\u6570\u7EC4"
        }
      }
    },
    radio: {
      name: "\u5355\u9009\u6846",
      props: {
        disabled: "\u662F\u5426\u7981\u7528",
        type: "\u6309\u94AE\u5F62\u5F0F",
        textColor: "\u6309\u94AE\u5F62\u5F0F\u7684 Radio \u6FC0\u6D3B\u65F6\u7684\u6587\u672C\u989C\u8272",
        fill: "\u6309\u94AE\u5F62\u5F0F\u7684 Radio \u6FC0\u6D3B\u65F6\u7684\u586B\u5145\u8272\u548C\u8FB9\u6846\u8272"
      }
    },
    checkbox: {
      name: "\u591A\u9009\u6846",
      props: {
        type: "\u6309\u94AE\u7C7B\u578B",
        disabled: "\u662F\u5426\u7981\u7528",
        min: "\u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5C0F\u6570\u91CF",
        max: "\u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5927\u6570\u91CF",
        textColor: "\u6309\u94AE\u5F62\u5F0F\u7684 Checkbox \u6FC0\u6D3B\u65F6\u7684\u6587\u672C\u989C\u8272",
        fill: "\u6309\u94AE\u5F62\u5F0F\u7684 Checkbox \u6FC0\u6D3B\u65F6\u7684\u586B\u5145\u8272\u548C\u8FB9\u6846\u8272"
      }
    },
    input: {
      name: "\u8F93\u5165\u6846",
      props: {
        type: "\u7C7B\u578B",
        maxlength: "\u6700\u5927\u8F93\u5165\u957F\u5EA6",
        minlength: "\u6700\u5C0F\u8F93\u5165\u957F\u5EA6",
        showWordLimit: "\u662F\u5426\u663E\u793A\u8F93\u5165\u5B57\u6570\u7EDF\u8BA1",
        placeholder: "\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C",
        clearable: "\u662F\u5426\u53EF\u6E05\u7A7A",
        showPassword: "\u662F\u5426\u663E\u793A\u5207\u6362\u5BC6\u7801\u56FE\u6807",
        disabled: "\u7981\u7528",
        prefixIcon: "\u8F93\u5165\u6846\u5934\u90E8\u56FE\u6807",
        suffixIcon: "\u8F93\u5165\u6846\u5C3E\u90E8\u56FE\u6807",
        rowInfo: '\u53EA\u5BF9 type="textarea" \u6709\u6548',
        rows: "\u8F93\u5165\u6846\u884C\u6570",
        autocomplete: "\u81EA\u52A8\u8865\u5168",
        readonly: "\u662F\u5426\u53EA\u8BFB",
        resize: "\u63A7\u5236\u662F\u5426\u80FD\u88AB\u7528\u6237\u7F29\u653E",
        autofocus: "\u81EA\u52A8\u83B7\u53D6\u7126\u70B9"
      }
    },
    inputNumber: {
      name: "\u8BA1\u6570\u5668",
      props: {
        min: "\u8BBE\u7F6E\u8BA1\u6570\u5668\u5141\u8BB8\u7684\u6700\u5C0F\u503C",
        max: "\u8BBE\u7F6E\u8BA1\u6570\u5668\u5141\u8BB8\u7684\u6700\u5927\u503C",
        step: "\u8BA1\u6570\u5668\u6B65\u957F",
        stepStrictly: "\u662F\u5426\u53EA\u80FD\u8F93\u5165 step \u7684\u500D\u6570",
        disabled: "\u662F\u5426\u7981\u7528\u8BA1\u6570\u5668",
        controls: "\u662F\u5426\u4F7F\u7528\u63A7\u5236\u6309\u94AE",
        controlsPosition: "\u63A7\u5236\u6309\u94AE\u4F4D\u7F6E",
        placeholder: "\u8F93\u5165\u6846\u9ED8\u8BA4 placeholder"
      }
    },
    select: {
      name: "\u9009\u62E9\u5668",
      props: {
        multiple: "\u662F\u5426\u591A\u9009",
        disabled: "\u662F\u5426\u7981\u7528",
        clearable: "\u662F\u5426\u53EF\u4EE5\u6E05\u7A7A\u9009\u9879",
        collapseTags: "\u591A\u9009\u65F6\u662F\u5426\u5C06\u9009\u4E2D\u503C\u6309\u6587\u5B57\u7684\u5F62\u5F0F\u5C55\u793A",
        multipleLimit: "\u591A\u9009\u65F6\u7528\u6237\u6700\u591A\u53EF\u4EE5\u9009\u62E9\u7684\u9879\u76EE\u6570\uFF0C\u4E3A 0 \u5219\u4E0D\u9650\u5236",
        autocomplete: "autocomplete \u5C5E\u6027",
        placeholder: "\u5360\u4F4D\u7B26",
        filterable: "\u662F\u5426\u53EF\u641C\u7D22",
        allowCreate: "\u662F\u5426\u5141\u8BB8\u7528\u6237\u521B\u5EFA\u65B0\u6761\u76EE",
        noMatchText: "\u641C\u7D22\u6761\u4EF6\u65E0\u5339\u914D\u65F6\u663E\u793A\u7684\u6587\u5B57",
        noDataText: "\u9009\u9879\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u6587\u5B57",
        reserveKeyword: "\u591A\u9009\u4E14\u53EF\u641C\u7D22\u65F6\uFF0C\u662F\u5426\u5728\u9009\u4E2D\u4E00\u4E2A\u9009\u9879\u540E\u4FDD\u7559\u5F53\u524D\u7684\u641C\u7D22\u5173\u952E\u8BCD",
        defaultFirstOption: "\u5728\u8F93\u5165\u6846\u6309\u4E0B\u56DE\u8F66\uFF0C\u9009\u62E9\u7B2C\u4E00\u4E2A\u5339\u914D\u9879",
        popperAppendToBody: "\u662F\u5426\u5C06\u5F39\u51FA\u6846\u63D2\u5165\u81F3 body \u5143\u7D20",
        automaticDropdown: "\u5BF9\u4E8E\u4E0D\u53EF\u641C\u7D22\u7684 Select\uFF0C\u662F\u5426\u5728\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u540E\u81EA\u52A8\u5F39\u51FA\u9009\u9879\u83DC\u5355"
      }
    },
    switch: {
      name: "\u5F00\u5173",
      props: {
        disabled: "\u662F\u5426\u7981\u7528",
        width: "\u5BBD\u5EA6\uFF08px\uFF09",
        activeText: "switch \u6253\u5F00\u65F6\u7684\u6587\u5B57\u63CF\u8FF0",
        inactiveText: "switch \u5173\u95ED\u65F6\u7684\u6587\u5B57\u63CF\u8FF0",
        activeValue: "switch \u6253\u5F00\u65F6\u7684\u503C",
        inactiveValue: "switch \u5173\u95ED\u65F6\u7684\u503C",
        activeColor: "switch \u6253\u5F00\u65F6\u7684\u80CC\u666F\u8272",
        inactiveColor: "switch \u5173\u95ED\u65F6\u7684\u80CC\u666F\u8272"
      }
    },
    slider: {
      name: "\u6ED1\u5757",
      props: {
        min: "\u6700\u5C0F\u503C",
        max: "\u6700\u5927\u503C",
        disabled: "\u662F\u5426\u7981\u7528",
        step: "\u6B65\u957F",
        showInput: "\u662F\u5426\u663E\u793A\u8F93\u5165\u6846\uFF0C\u4EC5\u5728\u975E\u8303\u56F4\u9009\u62E9\u65F6\u6709\u6548",
        showInputControls: "\u5728\u663E\u793A\u8F93\u5165\u6846\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u5426\u663E\u793A\u8F93\u5165\u6846\u7684\u63A7\u5236\u6309\u94AE",
        showStops: "\u662F\u5426\u663E\u793A\u95F4\u65AD\u70B9",
        range: "\u662F\u5426\u4E3A\u8303\u56F4\u9009\u62E9",
        vertical: "\u662F\u5426\u7AD6\u5411\u6A21\u5F0F",
        height: "Slider \u9AD8\u5EA6\uFF0C\u7AD6\u5411\u6A21\u5F0F\u65F6\u5FC5\u586B"
      }
    },
    timePicker: {
      name: "\u65F6\u95F4\u9009\u62E9\u5668",
      props: {
        pickerOptions: "\u5F53\u524D\u65F6\u95F4\u65E5\u671F\u9009\u62E9\u5668\u7279\u6709\u7684\u9009\u9879",
        readonly: "\u5B8C\u5168\u53EA\u8BFB",
        disabled: "\u7981\u7528",
        editable: "\u6587\u672C\u6846\u53EF\u8F93\u5165",
        clearable: "\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE",
        placeholder: "\u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9",
        startPlaceholder: "\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9",
        endPlaceholder: "\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9",
        isRange: "\u662F\u5426\u4E3A\u65F6\u95F4\u8303\u56F4\u9009\u62E9",
        arrowControl: "\u662F\u5426\u4F7F\u7528\u7BAD\u5934\u8FDB\u884C\u65F6\u95F4\u9009\u62E9",
        align: "\u5BF9\u9F50\u65B9\u5F0F",
        prefixIcon: "\u81EA\u5B9A\u4E49\u5934\u90E8\u56FE\u6807\u7684\u7C7B\u540D",
        clearIcon: "\u81EA\u5B9A\u4E49\u6E05\u7A7A\u56FE\u6807\u7684\u7C7B\u540D"
      }
    },
    datePicker: {
      name: "\u65E5\u671F\u9009\u62E9\u5668",
      props: {
        pickerOptions: "\u5F53\u524D\u65F6\u95F4\u65E5\u671F\u9009\u62E9\u5668\u7279\u6709\u7684\u9009\u9879",
        readonly: "\u5B8C\u5168\u53EA\u8BFB",
        disabled: "\u7981\u7528",
        type: "\u663E\u793A\u7C7B\u578B",
        editable: "\u6587\u672C\u6846\u53EF\u8F93\u5165",
        clearable: "\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE",
        placeholder: "\u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9",
        startPlaceholder: "\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9",
        endPlaceholder: "\u8303\u56F4\u9009\u62E9\u65F6\u7ED3\u675F\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9",
        format: "\u663E\u793A\u5728\u8F93\u5165\u6846\u4E2D\u7684\u683C\u5F0F",
        align: "\u5BF9\u9F50\u65B9\u5F0F",
        rangeSeparator: "\u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26",
        unlinkPanels: "\u5728\u8303\u56F4\u9009\u62E9\u5668\u91CC\u53D6\u6D88\u4E24\u4E2A\u65E5\u671F\u9762\u677F\u4E4B\u95F4\u7684\u8054\u52A8",
        prefixIcon: "\u81EA\u5B9A\u4E49\u5934\u90E8\u56FE\u6807\u7684\u7C7B\u540D",
        clearIcon: "\u81EA\u5B9A\u4E49\u6E05\u7A7A\u56FE\u6807\u7684\u7C7B\u540D"
      }
    },
    rate: {
      name: "\u8BC4\u5206",
      props: {
        max: "\u6700\u5927\u5206\u503C",
        disabled: "\u662F\u5426\u4E3A\u53EA\u8BFB",
        allowHalf: "\u662F\u5426\u5141\u8BB8\u534A\u9009",
        voidColor: "\u672A\u9009\u4E2D icon \u7684\u989C\u8272",
        disabledVoidColor: "\u53EA\u8BFB\u65F6\u672A\u9009\u4E2D icon \u7684\u989C\u8272",
        voidIconClass: "\u672A\u9009\u4E2D icon \u7684\u7C7B\u540D",
        disabledVoidIconClass: "\u53EA\u8BFB\u65F6\u672A\u9009\u4E2D icon \u7684\u7C7B\u540D",
        showScore: "\u662F\u5426\u663E\u793A\u5F53\u524D\u5206\u6570\uFF0Cshow-score \u548C show-text \u4E0D\u80FD\u540C\u65F6\u4E3A\u771F",
        textColor: "\u8F85\u52A9\u6587\u5B57\u7684\u989C\u8272",
        scoreTemplate: "\u5206\u6570\u663E\u793A\u6A21\u677F"
      }
    },
    colorPicker: {
      name: "\u989C\u8272\u9009\u62E9\u5668",
      props: {
        disabled: "\u662F\u5426\u7981\u7528",
        showAlpha: "\u662F\u5426\u652F\u6301\u900F\u660E\u5EA6\u9009\u62E9",
        colorFormat: "\u989C\u8272\u7684\u683C\u5F0F"
      }
    },
    row: {
      name: "\u6805\u683C\u5E03\u5C40",
      props: {
        gutter: "\u6805\u683C\u95F4\u9694",
        type: "flex\u5E03\u5C40\u6A21\u5F0F",
        justify: "flex \u5E03\u5C40\u4E0B\u7684\u6C34\u5E73\u6392\u5217\u65B9\u5F0F",
        align: "flex \u5E03\u5C40\u4E0B\u7684\u5782\u76F4\u6392\u5217\u65B9\u5F0F"
      }
    },
    col: {
      name: "\u683C\u5B50",
      props: {
        span: "\u6805\u683C\u5360\u636E\u7684\u5217\u6570",
        offset: "\u6805\u683C\u5DE6\u4FA7\u7684\u95F4\u9694\u683C\u6570",
        push: "\u6805\u683C\u5411\u53F3\u79FB\u52A8\u683C\u6570",
        pull: "\u6805\u683C\u5411\u5DE6\u79FB\u52A8\u683C\u6570"
      }
    },
    tab: {
      name: "\u6807\u7B7E\u9875",
      props: {
        type: "\u98CE\u683C\u7C7B\u578B",
        closable: "\u6807\u7B7E\u662F\u5426\u53EF\u5173\u95ED",
        tabPosition: "\u9009\u9879\u5361\u6240\u5728\u4F4D\u7F6E",
        stretch: "\u6807\u7B7E\u7684\u5BBD\u5EA6\u662F\u5426\u81EA\u6491\u5F00"
      }
    },
    "tab-pane": {
      name: "\u6807\u7B7E\u9875",
      props: {
        label: "\u9009\u9879\u5361\u6807\u9898",
        disabled: "\u662F\u5426\u7981\u7528",
        name: "\u4E0E\u9009\u9879\u5361\u7ED1\u5B9A\u503C value \u5BF9\u5E94\u7684\u6807\u8BC6\u7B26\uFF0C\u8868\u793A\u9009\u9879\u5361\u522B\u540D",
        lazy: "\u6807\u7B7E\u662F\u5426\u5EF6\u8FDF\u6E32\u67D3"
      }
    },
    "el-divider": {
      name: "\u5206\u5272\u7EBF",
      props: {
        direction: "\u8BBE\u7F6E\u5206\u5272\u7EBF\u65B9\u5411",
        formCreateChild: "\u8BBE\u7F6E\u5206\u5272\u7EBF\u6587\u6848",
        contentPosition: "\u8BBE\u7F6E\u5206\u5272\u7EBF\u6587\u6848\u7684\u4F4D\u7F6E"
      }
    },
    cascader: {
      name: "\u7EA7\u8054\u9009\u62E9\u5668",
      props: {
        props: "\u914D\u7F6E\u9009\u9879",
        size: "\u5C3A\u5BF8",
        placeholder: "\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C",
        disabled: "\u662F\u5426\u7981\u7528",
        clearable: "\u662F\u5426\u652F\u6301\u6E05\u7A7A\u9009\u9879",
        showAllLevels: "\u8F93\u5165\u6846\u4E2D\u662F\u5426\u663E\u793A\u9009\u4E2D\u503C\u7684\u5B8C\u6574\u8DEF\u5F84",
        collapseTags: "\u591A\u9009\u6A21\u5F0F\u4E0B\u662F\u5426\u6298\u53E0Tag",
        separator: "\u9009\u9879\u5206\u9694\u7B26"
      }
    },
    upload: {
      name: "\u4E0A\u4F20",
      props: {
        uploadType: "\u4E0A\u4F20\u7C7B\u578B",
        action: "\u4E0A\u4F20\u7684\u5730\u5740(\u5FC5\u586B)",
        headers: "\u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u5934\u90E8",
        multiple: "\u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6",
        data: "\u4E0A\u4F20\u65F6\u9644\u5E26\u7684\u989D\u5916\u53C2\u6570",
        name: "\u4E0A\u4F20\u7684\u6587\u4EF6\u5B57\u6BB5\u540D",
        withCredentials: "\u652F\u6301\u53D1\u9001 cookie \u51ED\u8BC1\u4FE1\u606F",
        accept: "\u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B\uFF08thumbnail-mode \u6A21\u5F0F\u4E0B\u6B64\u53C2\u6570\u65E0\u6548\uFF09",
        autoUpload: "\u662F\u5426\u5728\u9009\u53D6\u6587\u4EF6\u540E\u7ACB\u5373\u8FDB\u884C\u4E0A\u4F20",
        disabled: "\u662F\u5426\u7981\u7528",
        limit: "\u6700\u5927\u5141\u8BB8\u4E0A\u4F20\u4E2A\u6570"
      }
    },
    "el-transfer": {
      name: "\u7A7F\u68AD\u6846",
      props: {
        data: "Transfer \u7684\u6570\u636E\u6E90",
        filterable: "\u662F\u5426\u53EF\u641C\u7D22",
        filterPlaceholder: "\u641C\u7D22\u6846\u5360\u4F4D\u7B26",
        targetOrder: "\u53F3\u4FA7\u5217\u8868\u5143\u7D20\u7684\u6392\u5E8F\u7B56\u7565",
        titles: "\u81EA\u5B9A\u4E49\u5217\u8868\u6807\u9898",
        buttonTexts: "\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u6848",
        format: "\u5217\u8868\u9876\u90E8\u52FE\u9009\u72B6\u6001\u6587\u6848",
        props: "\u6570\u636E\u6E90\u7684\u5B57\u6BB5\u522B\u540D",
        leftDefaultChecked: "\u521D\u59CB\u72B6\u6001\u4E0B\u5DE6\u4FA7\u5217\u8868\u7684\u5DF2\u52FE\u9009\u9879\u7684 key \u6570\u7EC4",
        rightDefaultChecked: "\u521D\u59CB\u72B6\u6001\u4E0B\u53F3\u4FA7\u5217\u8868\u7684\u5DF2\u52FE\u9009\u9879\u7684 key \u6570\u7EC4"
      }
    },
    tree: {
      name: "\u6811\u5F62\u63A7\u4EF6",
      props: {
        emptyText: "\u5185\u5BB9\u4E3A\u7A7A\u7684\u65F6\u5019\u5C55\u793A\u7684\u6587\u672C",
        props: "\u914D\u7F6E\u9009\u9879\uFF0C\u5177\u4F53\u770B\u4E0B\u8868",
        renderAfterExpand: "\u662F\u5426\u5728\u7B2C\u4E00\u6B21\u5C55\u5F00\u67D0\u4E2A\u6811\u8282\u70B9\u540E\u624D\u6E32\u67D3\u5176\u5B50\u8282\u70B9",
        defaultExpandAll: "\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u8282\u70B9",
        expandOnClickNode: "\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9\uFF0C \u9ED8\u8BA4\u503C\u4E3A true\uFF0C\u5982\u679C\u4E3A false\uFF0C\u5219\u53EA\u6709\u70B9\u7BAD\u5934\u56FE\u6807\u7684\u65F6\u5019\u624D\u4F1A\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9\u3002",
        checkOnClickNode: "\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u9009\u4E2D\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u4E3A false\uFF0C\u5373\u53EA\u6709\u5728\u70B9\u51FB\u590D\u9009\u6846\u65F6\u624D\u4F1A\u9009\u4E2D\u8282\u70B9\u3002",
        autoExpandParent: "\u5C55\u5F00\u5B50\u8282\u70B9\u7684\u65F6\u5019\u662F\u5426\u81EA\u52A8\u5C55\u5F00\u7236\u8282\u70B9",
        checkStrictly: "\u5728\u663E\u793A\u590D\u9009\u6846\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u5426\u4E25\u683C\u7684\u9075\u5FAA\u7236\u5B50\u4E0D\u4E92\u76F8\u5173\u8054\u7684\u505A\u6CD5\uFF0C\u9ED8\u8BA4\u4E3A false",
        accordion: "\u662F\u5426\u6BCF\u6B21\u53EA\u6253\u5F00\u4E00\u4E2A\u540C\u7EA7\u6811\u8282\u70B9\u5C55\u5F00",
        indent: "\u76F8\u90BB\u7EA7\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u7F29\u8FDB\uFF0C\u5355\u4F4D\u4E3A\u50CF\u7D20",
        iconClass: "\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u7684\u56FE\u6807",
        nodeKey: "\u6BCF\u4E2A\u6811\u8282\u70B9\u7528\u6765\u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6\u7684\u5C5E\u6027\uFF0C\u6574\u68F5\u6811\u5E94\u8BE5\u662F\u552F\u4E00\u7684"
      }
    },
    "el-alert": {
      name: "\u63D0\u793A",
      description: "description",
      props: {
        title: "\u6807\u9898",
        type: "\u4E3B\u9898",
        description: "\u8F85\u52A9\u6027\u6587\u5B57",
        closable: "\u662F\u5426\u53EF\u5173\u95ED",
        center: "\u6587\u5B57\u662F\u5426\u5C45\u4E2D",
        closeText: "\u5173\u95ED\u6309\u94AE\u81EA\u5B9A\u4E49\u6587\u672C",
        showIcon: "\u662F\u5426\u663E\u793A\u56FE\u6807",
        effect: "\u9009\u62E9\u63D0\u4F9B\u7684\u4E3B\u9898"
      }
    },
    span: {
      name: "\u6587\u5B57",
      props: {
        formCreateTitle: "\u6807\u9898",
        formCreateChild: "\u5185\u5BB9"
      }
    },
    div: {
      name: "\u95F4\u8DDD",
      props: {
        height: "\u9AD8\u5EA6"
      }
    },
    "el-button": {
      name: "\u6309\u94AE",
      props: {
        formCreateChild: "\u5185\u5BB9",
        size: "\u5C3A\u5BF8",
        type: "\u7C7B\u578B",
        plain: "\u662F\u5426\u6734\u7D20\u6309\u94AE",
        round: "\u662F\u5426\u5706\u89D2\u6309\u94AE",
        circle: "\u662F\u5426\u5706\u5F62\u6309\u94AE",
        loading: "\u662F\u5426\u52A0\u8F7D\u4E2D\u72B6\u6001",
        disabled: "\u662F\u5426\u7981\u7528\u72B6\u6001",
        icon: "\u56FE\u6807\u7C7B\u540D"
      }
    },
    "fc-editor": {
      name: "\u5BCC\u6587\u672C\u6846",
      props: {
        disabled: "\u662F\u5426\u7981\u7528"
      }
    }
  }
};
function kt() {
  return {
    type: "Required",
    field: "formCreate$required",
    title: "\u662F\u5426\u5FC5\u586B"
  };
}
function vi(c, A, l) {
  const o = [
    { label: c("props.optionsType.json"), value: 0 },
    { label: c("props.optionsType.fetch"), value: 1 }
  ], t = [
    {
      value: 0,
      rule: [
        {
          type: "Struct",
          field: "formCreate" + oo(A).replace(".", ">"),
          props: { defaultValue: [] }
        }
      ]
    },
    {
      value: 1,
      rule: [
        {
          type: "Fetch",
          field: "formCreateEffect>fetch",
          props: {
            to: A
          }
        }
      ]
    }
  ];
  return l !== !1 && (o.splice(0, 0, { label: c("props.optionsType.struct"), value: 2 }), t.push({
    value: 2,
    rule: [
      {
        type: "TableOptions",
        field: "formCreate" + oo(A).replace(".", ">"),
        props: { defaultValue: [] }
      }
    ]
  })), {
    type: "radio",
    title: c("props.options"),
    field: "_optionType",
    value: l !== !1 ? 2 : 0,
    options: o,
    props: {
      type: "button"
    },
    control: t
  };
}
function oo(c) {
  return c.replace(c[0], c[0].toLocaleUpperCase());
}
const qi = function(c) {
  const A = /object ([a-zA-Z]*)/.exec(Object.prototype.toString.call(c));
  return A && If[A[1].toLowerCase()] ? If[A[1].toLowerCase()](c) : c;
}, If = {
  object: function(c) {
    var A = [];
    for (var l in c)
      !od(c, l) || A.push(
        qi(l) + ": " + (c[l] != null ? qi(c[l]) : "null")
      );
    return `{
 ` + A.join(`,
 `) + `
}`;
  },
  function: function(c) {
    c = "" + c;
    var A = /^ *([\w]+) *\(/.exec(c);
    return A && A[1] !== "function" ? "function " + c : c;
  },
  array: function(c) {
    for (var A = 0, l = []; A < c.length; A++)
      l[A] = c[A] != null ? qi(c[A]) : "null";
    return "[" + l.join(", ") + "]";
  },
  string: function(c) {
    for (var A = c.split(""), l = 0; l < A.length; l++) {
      var o = A[l];
      o >= " " ? o === "\\" ? A[l] = "\\\\" : o === '"' && (A[l] = '\\"') : A[l] = o === `
` ? "\\n" : o === "\r" ? "\\r" : o === "	" ? "\\t" : o === "\b" ? "\\b" : o === "\f" ? "\\f" : (o = o.charCodeAt(), "\\u00" + (o > 15 ? 1 : 0) + o % 16);
    }
    return '"' + A.join("") + '"';
  }
}, ld = function(c) {
  if (c && typeof c == "object") {
    for (let A in c)
      if (Object.prototype.hasOwnProperty.call(c, A)) {
        let l = c[A];
        (Array.isArray(l) || xt.Object(l)) && ld(l), xt.String(l) && (c[A] = Zv(l));
      }
  }
  return c;
};
function _v(c, A, l) {
  A = (A || "").split(".");
  let o = 0, t = A.length;
  for (; c != null && o < t; )
    c = c[A[o++]];
  return o && o === t && c !== void 0 ? c : l;
}
const ep = (c) => (A, l) => tp(A, l, ed(c)), tp = (c, A, l) => _v(l, c, "").replace(
  /\{(\w+)\}/g,
  (o, t) => {
    var s;
    return `${(s = A == null ? void 0 : A[t]) != null ? s : `{${t}}`}`;
  }
), np = (c) => {
  const A = io(() => ed(c).name), l = io(() => oo(kv(A.value || ""))), o = Lv(c) ? c : Zi(c);
  return {
    lang: A,
    name: l,
    locale: o,
    t: ep(c)
  };
}, Wl = (c) => np(io(() => c.value || qv)), et = (c, A, l) => l.map((o) => (o.field === "formCreate$required" ? o.title = c("props.required") || o.title : o.field && o.field !== "_optionType" && (o.title = c("components." + A + "." + o.field) || o.title), o)), rp = "\u5355\u9009\u6846", ol = "radio", jl = {
  icon: "icon-radio",
  label: rp,
  name: ol,
  rule({ t: c }) {
    const A = c("props.option");
    return {
      type: ol,
      field: St(),
      title: c("components.radio.name"),
      info: "",
      effect: {
        fetch: ""
      },
      $required: !1,
      props: {},
      options: [1, 2].map((l) => ({
        label: A + l,
        value: l
      }))
    };
  },
  props(c, { t: A }) {
    return et(A, ol + ".props", [
      kt(),
      vi(A, "options"),
      {
        props: { type: "textarea" },
        field: "customFieldFormula",
        title: "\u81EA\u5B9A\u4E49\u516C\u5F0F"
      },
      { type: "switch", field: "disabled", title: "\u662F\u5426\u7981\u7528" },
      {
        type: "switch",
        field: "type",
        title: "\u6309\u94AE\u5F62\u5F0F",
        props: { activeValue: "button", inactiveValue: "default" }
      },
      { type: "input", field: "textColor", title: "\u6309\u94AE\u5F62\u5F0F\u7684 Radio \u6FC0\u6D3B\u65F6\u7684\u6587\u672C\u989C\u8272" },
      {
        type: "input",
        field: "fill",
        title: "\u6309\u94AE\u5F62\u5F0F\u7684 Radio \u6FC0\u6D3B\u65F6\u7684\u586B\u5145\u8272\u548C\u8FB9\u6846\u8272"
      }
    ]);
  }
}, ip = "\u591A\u9009\u6846", al = "checkbox", $l = {
  icon: "icon-checkbox",
  label: ip,
  name: al,
  rule({ t: c }) {
    const A = c("props.option");
    return {
      type: al,
      field: St(),
      title: c("components.checkbox.name"),
      info: "",
      effect: {
        fetch: ""
      },
      $required: !1,
      props: {},
      options: [1, 2].map((l) => ({
        label: A + l,
        value: l
      }))
    };
  },
  props(c, { t: A }) {
    return et(A, al + ".props", [
      kt(),
      vi(A, "options"),
      {
        props: { type: "textarea" },
        field: "customFieldFormula",
        title: "\u81EA\u5B9A\u4E49\u516C\u5F0F"
      },
      {
        type: "switch",
        field: "type",
        title: "\u6309\u94AE\u7C7B\u578B",
        props: { activeValue: "button", inactiveValue: "default" }
      },
      { type: "switch", field: "disabled", title: "\u662F\u5426\u7981\u7528" },
      {
        type: "inputNumber",
        field: "min",
        title: "\u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5C0F\u6570\u91CF",
        props: { min: 0 }
      },
      { type: "inputNumber", field: "max", title: "\u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5927\u6570\u91CF", props: { min: 0 } },
      {
        type: "input",
        field: "textColor",
        title: "\u6309\u94AE\u5F62\u5F0F\u7684 Checkbox \u6FC0\u6D3B\u65F6\u7684\u6587\u672C\u989C\u8272"
      },
      { type: "input", field: "fill", title: "\u6309\u94AE\u5F62\u5F0F\u7684 Checkbox \u6FC0\u6D3B\u65F6\u7684\u586B\u5145\u8272\u548C\u8FB9\u6846\u8272" }
    ]);
  }
}, op = "\u8F93\u5165\u6846", ll = "input", Yl = {
  icon: "icon-input",
  label: op,
  name: ll,
  rule({ t: c }) {
    return {
      type: ll,
      field: St(),
      title: c("components.input.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(c, { t: A }) {
    return et(A, ll + ".props", [kt(), {
      props: { type: "textarea" },
      field: "customFieldFormula",
      title: "\u81EA\u5B9A\u4E49\u516C\u5F0F"
    }, {
      type: "select",
      field: "type",
      title: "\u7C7B\u578Bsadasdasdasdasda",
      options: [{ label: "text", value: "text" }, {
        label: "textarea",
        value: "textarea"
      }, { label: "number", value: "number" }, { label: "password", value: "password" }]
    }, { type: "inputNumber", field: "maxlength", title: "\u6700\u5927\u8F93\u5165\u957F\u5EA6", props: { min: 0 } }, {
      type: "inputNumber",
      field: "minlength",
      title: "\u6700\u5C0F\u8F93\u5165\u957F\u5EA6",
      props: { min: 0 }
    }, { type: "switch", field: "showWordLimit", title: "\u662F\u5426\u663E\u793A\u8F93\u5165\u5B57\u6570\u7EDF\u8BA1" }, {
      type: "input",
      field: "placeholder",
      title: "\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C"
    }, { type: "switch", field: "clearable", title: "\u662F\u5426\u53EF\u6E05\u7A7A" }, {
      type: "switch",
      field: "showPassword",
      title: "\u662F\u5426\u663E\u793A\u5207\u6362\u5BC6\u7801\u56FE\u6807"
    }, { type: "switch", field: "disabled", title: "\u7981\u7528" }, {
      type: "input",
      field: "prefixIcon",
      title: "\u8F93\u5165\u6846\u5934\u90E8\u56FE\u6807"
    }, { type: "input", field: "suffixIcon", title: "\u8F93\u5165\u6846\u5C3E\u90E8\u56FE\u6807" }, {
      type: "inputNumber",
      field: "rows",
      info: A("components.input.props.rowsInfo"),
      title: "\u8F93\u5165\u6846\u884C\u6570",
      props: { min: 0 }
    }, {
      type: "select",
      field: "autocomplete",
      title: "\u81EA\u52A8\u8865\u5168",
      options: [{ label: "on", value: "on" }, { label: "off", value: "off" }]
    }, { type: "switch", field: "readonly", title: "\u662F\u5426\u53EA\u8BFB" }, {
      type: "select",
      field: "resize",
      title: "\u63A7\u5236\u662F\u5426\u80FD\u88AB\u7528\u6237\u7F29\u653E",
      options: [{ label: "none", value: "none" }, { label: "both", value: "both" }, {
        label: "horizontal",
        value: "horizontal"
      }, { label: "vertical", value: "vertical" }]
    }, { type: "switch", field: "autofocus", title: "\u81EA\u52A8\u83B7\u53D6\u7126\u70B9" }]);
  }
}, ap = "\u8BA1\u6570\u5668", sl = "inputNumber", Vl = {
  icon: "icon-number",
  label: ap,
  name: sl,
  rule({ t: c }) {
    return {
      type: sl,
      field: St(),
      title: c("components.inputNumber.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(c, { t: A }) {
    return et(A, sl + ".props", [kt(), {
      props: { type: "textarea" },
      field: "customFieldFormula",
      title: "\u81EA\u5B9A\u4E49\u516C\u5F0F"
    }, {
      type: "inputNumber",
      field: "min",
      title: "\u8BBE\u7F6E\u8BA1\u6570\u5668\u5141\u8BB8\u7684\u6700\u5C0F\u503C"
    }, {
      type: "inputNumber",
      field: "max",
      title: "\u8BBE\u7F6E\u8BA1\u6570\u5668\u5141\u8BB8\u7684\u6700\u5927\u503C"
    }, { type: "inputNumber", field: "step", title: "\u8BA1\u6570\u5668\u6B65\u957F", props: { min: 0 } }, {
      type: "switch",
      field: "stepStrictly",
      title: "\u662F\u5426\u53EA\u80FD\u8F93\u5165 step \u7684\u500D\u6570"
    }, { type: "switch", field: "disabled", title: "\u662F\u5426\u7981\u7528\u8BA1\u6570\u5668" }, {
      type: "switch",
      field: "controls",
      title: "\u662F\u5426\u4F7F\u7528\u63A7\u5236\u6309\u94AE",
      value: !0
    }, {
      type: "select",
      field: "controlsPosition",
      title: "\u63A7\u5236\u6309\u94AE\u4F4D\u7F6E",
      options: [{ label: "default", value: "" }, { label: "right", value: "right" }]
    }, { type: "input", field: "placeholder", title: "\u8F93\u5165\u6846\u9ED8\u8BA4 placeholder" }]);
  }
}, lp = "\u9009\u62E9\u5668", ul = "select", Ql = {
  icon: "icon-select",
  label: lp,
  name: ul,
  rule({ t: c }) {
    const A = c("props.option");
    return {
      type: ul,
      field: St(),
      title: c("components.select.name"),
      info: "",
      effect: {
        fetch: ""
      },
      $required: !1,
      props: {},
      options: [1, 2].map((l) => ({
        label: A + l,
        value: l
      }))
    };
  },
  watch: {
    multiple({ rule: c }) {
      c.key = St();
    }
  },
  props(c, { t: A }) {
    return et(A, ul + ".props", [
      kt(),
      vi(A, "options"),
      {
        props: { type: "textarea" },
        field: "customFieldFormula",
        title: "\u81EA\u5B9A\u4E49\u516C\u5F0F"
      },
      { type: "switch", field: "multiple", title: "\u662F\u5426\u591A\u9009" },
      {
        type: "switch",
        field: "disabled",
        title: "\u662F\u5426\u7981\u7528"
      },
      { type: "switch", field: "clearable", title: "\u662F\u5426\u53EF\u4EE5\u6E05\u7A7A\u9009\u9879" },
      {
        type: "switch",
        field: "collapseTags",
        title: "\u591A\u9009\u65F6\u662F\u5426\u5C06\u9009\u4E2D\u503C\u6309\u6587\u5B57\u7684\u5F62\u5F0F\u5C55\u793A"
      },
      { type: "inputNumber", field: "multipleLimit", title: "\u591A\u9009\u65F6\u7528\u6237\u6700\u591A\u53EF\u4EE5\u9009\u62E9\u7684\u9879\u76EE\u6570\uFF0C\u4E3A 0 \u5219\u4E0D\u9650\u5236", props: { min: 0 } },
      {
        type: "input",
        field: "autocomplete",
        title: "autocomplete \u5C5E\u6027"
      },
      { type: "input", field: "placeholder", title: "\u5360\u4F4D\u7B26" },
      {
        type: "switch",
        field: "filterable",
        title: "\u662F\u5426\u53EF\u641C\u7D22"
      },
      { type: "switch", field: "allowCreate", title: "\u662F\u5426\u5141\u8BB8\u7528\u6237\u521B\u5EFA\u65B0\u6761\u76EE" },
      {
        type: "input",
        field: "noMatchText",
        title: "\u641C\u7D22\u6761\u4EF6\u65E0\u5339\u914D\u65F6\u663E\u793A\u7684\u6587\u5B57"
      },
      {
        type: "switch",
        field: "remote",
        title: "\u5176\u4E2D\u7684\u9009\u9879\u662F\u5426\u4ECE\u670D\u52A1\u5668\u8FDC\u7A0B\u52A0\u8F7D"
      },
      {
        type: "Struct",
        field: "remoteMethod",
        title: "\u81EA\u5B9A\u4E49\u8FDC\u7A0B\u641C\u7D22\u65B9\u6CD5"
      },
      { type: "input", field: "noDataText", title: "\u9009\u9879\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u6587\u5B57" },
      {
        type: "switch",
        field: "reserveKeyword",
        title: "\u591A\u9009\u4E14\u53EF\u641C\u7D22\u65F6\uFF0C\u662F\u5426\u5728\u9009\u4E2D\u4E00\u4E2A\u9009\u9879\u540E\u4FDD\u7559\u5F53\u524D\u7684\u641C\u7D22\u5173\u952E\u8BCD"
      },
      { type: "switch", field: "defaultFirstOption", title: "\u5728\u8F93\u5165\u6846\u6309\u4E0B\u56DE\u8F66\uFF0C\u9009\u62E9\u7B2C\u4E00\u4E2A\u5339\u914D\u9879" },
      {
        type: "switch",
        field: "popperAppendToBody",
        title: "\u662F\u5426\u5C06\u5F39\u51FA\u6846\u63D2\u5165\u81F3 body \u5143\u7D20",
        value: !0
      },
      { type: "switch", field: "automaticDropdown", title: "\u5BF9\u4E8E\u4E0D\u53EF\u641C\u7D22\u7684 Select\uFF0C\u662F\u5426\u5728\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u540E\u81EA\u52A8\u5F39\u51FA\u9009\u9879\u83DC\u5355" }
    ]);
  }
}, sp = "\u5F00\u5173", fl = "switch", Gl = {
  icon: "icon-switch",
  label: sp,
  name: fl,
  rule({ t: c }) {
    return {
      type: fl,
      field: St(),
      title: c("components.switch.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(c, { t: A }) {
    return et(A, fl + ".props", [kt(), {
      type: "switch",
      field: "disabled",
      title: "\u662F\u5426\u7981\u7528"
    }, {
      type: "inputNumber",
      field: "width",
      title: "\u5BBD\u5EA6\uFF08px\uFF09",
      props: { min: 0 }
    }, { type: "input", field: "activeText", title: "switch \u6253\u5F00\u65F6\u7684\u6587\u5B57\u63CF\u8FF0" }, {
      type: "input",
      field: "inactiveText",
      title: "switch \u5173\u95ED\u65F6\u7684\u6587\u5B57\u63CF\u8FF0"
    }, { type: "input", field: "activeValue", title: "switch \u6253\u5F00\u65F6\u7684\u503C" }, {
      type: "input",
      field: "inactiveValue",
      title: "switch \u5173\u95ED\u65F6\u7684\u503C"
    }, { type: "input", field: "activeColor", title: "switch \u6253\u5F00\u65F6\u7684\u80CC\u666F\u8272" }, {
      type: "input",
      field: "inactiveColor",
      title: "switch \u5173\u95ED\u65F6\u7684\u80CC\u666F\u8272"
    }]);
  }
}, up = "\u6ED1\u5757", dl = "slider", kl = {
  icon: "icon-slider",
  label: up,
  name: dl,
  rule({ t: c }) {
    return {
      type: dl,
      field: St(),
      title: c("components.slider.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(c, { t: A }) {
    return et(A, dl + ".props", [kt(), {
      props: { type: "textarea" },
      field: "customFieldFormula",
      title: "\u81EA\u5B9A\u4E49\u516C\u5F0F"
    }, {
      type: "inputNumber",
      field: "min",
      title: "\u6700\u5C0F\u503C",
      props: { min: 0 }
    }, {
      type: "inputNumber",
      field: "max",
      title: "\u6700\u5927\u503C",
      props: { min: 0 }
    }, { type: "switch", field: "disabled", title: "\u662F\u5426\u7981\u7528" }, {
      type: "inputNumber",
      field: "step",
      title: "\u6B65\u957F",
      props: { min: 0 }
    }, { type: "switch", field: "showInput", title: "\u662F\u5426\u663E\u793A\u8F93\u5165\u6846\uFF0C\u4EC5\u5728\u975E\u8303\u56F4\u9009\u62E9\u65F6\u6709\u6548" }, {
      type: "switch",
      field: "showInputControls",
      title: "\u5728\u663E\u793A\u8F93\u5165\u6846\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u5426\u663E\u793A\u8F93\u5165\u6846\u7684\u63A7\u5236\u6309\u94AE",
      value: !0
    }, { type: "switch", field: "showStops", title: "\u662F\u5426\u663E\u793A\u95F4\u65AD\u70B9" }, {
      type: "switch",
      field: "range",
      title: "\u662F\u5426\u4E3A\u8303\u56F4\u9009\u62E9"
    }, { type: "switch", field: "vertical", title: "\u662F\u5426\u7AD6\u5411\u6A21\u5F0F" }, {
      type: "input",
      field: "height",
      title: "Slider \u9AD8\u5EA6\uFF0C\u7AD6\u5411\u6A21\u5F0F\u65F6\u5FC5\u586B"
    }]);
  }
}, fp = "\u65F6\u95F4\u9009\u62E9\u5668", cl = "timePicker", Kl = {
  icon: "icon-time",
  label: fp,
  name: cl,
  rule({ t: c }) {
    return {
      type: cl,
      field: St(),
      title: c("components.timePicker.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(c, { t: A }) {
    return et(A, cl + ".props", [kt(), {
      props: { type: "textarea" },
      field: "customFieldFormula",
      title: "\u81EA\u5B9A\u4E49\u516C\u5F0F"
    }, {
      type: "Struct",
      field: "pickerOptions",
      title: "\u5F53\u524D\u65F6\u95F4\u65E5\u671F\u9009\u62E9\u5668\u7279\u6709\u7684\u9009\u9879",
      props: { defaultValue: {} }
    }, { type: "switch", field: "readonly", title: "\u5B8C\u5168\u53EA\u8BFB" }, {
      type: "switch",
      field: "disabled",
      title: "\u7981\u7528"
    }, { type: "switch", field: "editable", title: "\u6587\u672C\u6846\u53EF\u8F93\u5165", value: !0 }, {
      type: "switch",
      field: "clearable",
      title: "\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE",
      value: !0
    }, { type: "input", field: "placeholder", title: "\u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9" }, {
      type: "input",
      field: "startPlaceholder",
      title: "\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9"
    }, { type: "input", field: "endPlaceholder", title: "\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9" }, {
      type: "switch",
      field: "isRange",
      title: "\u662F\u5426\u4E3A\u65F6\u95F4\u8303\u56F4\u9009\u62E9"
    }, { type: "switch", field: "arrowControl", title: "\u662F\u5426\u4F7F\u7528\u7BAD\u5934\u8FDB\u884C\u65F6\u95F4\u9009\u62E9" }, {
      type: "select",
      field: "align",
      title: "\u5BF9\u9F50\u65B9\u5F0F",
      options: [{ label: "left", value: "left" }, { label: "center", value: "center" }, {
        label: "right",
        value: "right"
      }]
    }, { type: "input", field: "prefixIcon", title: "\u81EA\u5B9A\u4E49\u5934\u90E8\u56FE\u6807\u7684\u7C7B\u540D" }, {
      type: "input",
      field: "clearIcon",
      title: "\u81EA\u5B9A\u4E49\u6E05\u7A7A\u56FE\u6807\u7684\u7C7B\u540D"
    }]);
  }
}, dp = "\u65E5\u671F\u9009\u62E9\u5668", vl = "datePicker", Xl = {
  icon: "icon-date",
  label: dp,
  name: vl,
  rule({ t: c }) {
    return {
      type: vl,
      field: St(),
      title: c("components.datePicker.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(c, { t: A }) {
    return et(A, vl + ".props", [kt(), {
      props: { type: "textarea" },
      field: "customFieldFormula",
      title: "\u81EA\u5B9A\u4E49\u516C\u5F0F"
    }, {
      type: "Struct",
      field: "pickerOptions",
      title: "\u5F53\u524D\u65F6\u95F4\u65E5\u671F\u9009\u62E9\u5668\u7279\u6709\u7684\u9009\u9879",
      props: { defaultValue: {} }
    }, { type: "switch", field: "readonly", title: "\u5B8C\u5168\u53EA\u8BFB" }, {
      type: "switch",
      field: "disabled",
      title: "\u7981\u7528"
    }, {
      type: "select",
      field: "type",
      title: "\u663E\u793A\u7C7B\u578B",
      options: [{ label: "year", value: "year" }, { label: "month", value: "month" }, {
        label: "date",
        value: "date"
      }, { label: "dates", value: "dates" }, { label: "week", value: "week" }, {
        label: "datetime",
        value: "datetime"
      }, { label: "datetimerange", value: "datetimerange" }, {
        label: "daterange",
        value: "daterange"
      }, { label: "monthrange", value: "monthrange" }]
    }, { type: "switch", field: "editable", title: "\u6587\u672C\u6846\u53EF\u8F93\u5165", value: !0 }, {
      type: "switch",
      field: "clearable",
      title: "\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE",
      value: !0
    }, { type: "input", field: "placeholder", title: "\u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9" }, {
      type: "input",
      field: "startPlaceholder",
      title: "\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9"
    }, { type: "input", field: "endPlaceholder", title: "\u8303\u56F4\u9009\u62E9\u65F6\u7ED3\u675F\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9" }, {
      type: "input",
      field: "format",
      title: "\u663E\u793A\u5728\u8F93\u5165\u6846\u4E2D\u7684\u683C\u5F0F"
    }, {
      type: "select",
      field: "align",
      title: "\u5BF9\u9F50\u65B9\u5F0F",
      options: [{ label: "left", value: "left" }, { label: "center", value: "center" }, {
        label: "right",
        value: "right"
      }, { label: "left", value: "left" }]
    }, { type: "input", field: "rangeSeparator", title: "\u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26" }, {
      type: "switch",
      field: "unlinkPanels",
      title: "\u5728\u8303\u56F4\u9009\u62E9\u5668\u91CC\u53D6\u6D88\u4E24\u4E2A\u65E5\u671F\u9762\u677F\u4E4B\u95F4\u7684\u8054\u52A8"
    }, { type: "input", field: "prefixIcon", title: "\u81EA\u5B9A\u4E49\u5934\u90E8\u56FE\u6807\u7684\u7C7B\u540D" }, {
      type: "input",
      field: "clearIcon",
      title: "\u81EA\u5B9A\u4E49\u6E05\u7A7A\u56FE\u6807\u7684\u7C7B\u540D"
    }]);
  }
}, cp = "\u8BC4\u5206", pl = "rate", Jl = {
  icon: "icon-rate",
  label: cp,
  name: pl,
  rule({ t: c }) {
    return {
      type: pl,
      field: St(),
      title: c("components.rate.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(c, { t: A }) {
    return et(A, pl + ".props", [
      kt(),
      {
        props: { type: "textarea" },
        field: "customFieldFormula",
        title: "\u81EA\u5B9A\u4E49\u516C\u5F0F"
      },
      { type: "inputNumber", field: "max", title: "\u6700\u5927\u5206\u503C", props: { min: 0 } },
      {
        type: "switch",
        field: "disabled",
        title: "\u662F\u5426\u4E3A\u53EA\u8BFB"
      },
      { type: "switch", field: "allowHalf", title: "\u662F\u5426\u5141\u8BB8\u534A\u9009" },
      {
        type: "input",
        field: "voidColor",
        title: "\u672A\u9009\u4E2D icon \u7684\u989C\u8272"
      },
      { type: "input", field: "disabledVoidColor", title: "\u53EA\u8BFB\u65F6\u672A\u9009\u4E2D icon \u7684\u989C\u8272" },
      {
        type: "input",
        field: "voidIconClass",
        title: "\u672A\u9009\u4E2D icon \u7684\u7C7B\u540D"
      },
      { type: "input", field: "disabledVoidIconClass", title: "\u53EA\u8BFB\u65F6\u672A\u9009\u4E2D icon \u7684\u7C7B\u540D" },
      {
        type: "switch",
        field: "showScore",
        title: "\u662F\u5426\u663E\u793A\u5F53\u524D\u5206\u6570\uFF0Cshow-score \u548C show-text \u4E0D\u80FD\u540C\u65F6\u4E3A\u771F"
      },
      { type: "input", field: "textColor", title: "\u8F85\u52A9\u6587\u5B57\u7684\u989C\u8272" },
      {
        type: "input",
        field: "scoreTemplate",
        title: "\u5206\u6570\u663E\u793A\u6A21\u677F"
      }
    ]);
  }
}, vp = "\u989C\u8272\u9009\u62E9\u5668", hl = "colorPicker", Zl = {
  icon: "icon-color",
  label: vp,
  name: hl,
  rule({ t: c }) {
    return {
      type: hl,
      field: St(),
      title: c("components.colorPicker.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(c, { t: A }) {
    return et(A, hl + ".props", [kt(), {
      props: { type: "textarea" },
      field: "customFieldFormula",
      title: "\u81EA\u5B9A\u4E49\u516C\u5F0F"
    }, {
      type: "switch",
      field: "disabled",
      title: "\u662F\u5426\u7981\u7528"
    }, {
      type: "switch",
      field: "showAlpha",
      title: "\u662F\u5426\u652F\u6301\u900F\u660E\u5EA6\u9009\u62E9"
    }, {
      type: "select",
      field: "colorFormat",
      title: "\u989C\u8272\u7684\u683C\u5F0F",
      options: [{ label: "hsl", value: "hsl" }, { label: "hsv", value: "hsv" }, {
        label: "hex",
        value: "hex"
      }, { label: "rgb", value: "rgb" }]
    }]);
  }
}, pp = "\u6805\u683C\u5E03\u5C40", Lf = "row", ql = {
  icon: "icon-row",
  label: pp,
  name: Lf,
  mask: !1,
  rule() {
    return {
      type: "FcRow",
      props: {},
      children: []
    };
  },
  children: "col",
  childrenLen: 2,
  props(c, { t: A }) {
    return et(A, Lf + ".props", [{
      type: "inputNumber",
      field: "gutter",
      title: "\u6805\u683C\u95F4\u9694",
      props: { min: 0 }
    }, {
      type: "switch",
      field: "type",
      title: "flex\u5E03\u5C40\u6A21\u5F0F",
      props: { activeValue: "flex", inactiveValue: "default" }
    }, {
      type: "select",
      field: "justify",
      title: "flex \u5E03\u5C40\u4E0B\u7684\u6C34\u5E73\u6392\u5217\u65B9\u5F0F",
      options: [{ label: "start", value: "start" }, { label: "end", value: "end" }, {
        label: "center",
        value: "center"
      }, { label: "space-around", value: "space-around" }, { label: "space-between", value: "space-between" }]
    }, {
      type: "select",
      field: "align",
      title: "flex \u5E03\u5C40\u4E0B\u7684\u5782\u76F4\u6392\u5217\u65B9\u5F0F",
      options: [{ label: "top", value: "top" }, { label: "middle", value: "middle" }, {
        label: "bottom",
        value: "bottom"
      }]
    }]);
  }
}, gl = "col", Nf = {
  name: gl,
  label: "\u683C\u5B50",
  drag: !0,
  dragBtn: !1,
  inside: !0,
  mask: !1,
  rule() {
    return {
      type: gl,
      props: { span: 12 },
      children: []
    };
  },
  props(c, { t: A }) {
    return et(A, gl + ".props", [
      { type: "slider", field: "span", title: "\u6805\u683C\u5360\u636E\u7684\u5217\u6570", value: 12, props: { min: 0, max: 24 } },
      { type: "slider", field: "offset", title: "\u6805\u683C\u5DE6\u4FA7\u7684\u95F4\u9694\u683C\u6570", props: { min: 0, max: 24 } },
      { type: "slider", field: "push", title: "\u6805\u683C\u5411\u53F3\u79FB\u52A8\u683C\u6570", props: { min: 0, max: 24 } },
      { type: "slider", field: "pull", title: "\u6805\u683C\u5411\u5DE6\u79FB\u52A8\u683C\u6570", props: { min: 0, max: 24 } }
    ]);
  }
}, hp = "\u6807\u7B7E\u9875", Ff = "tab-pane", Of = {
  label: hp,
  name: Ff,
  inside: !0,
  drag: !0,
  dragBtn: !1,
  mask: !1,
  rule({ t: c }) {
    return {
      type: "el-tab-pane",
      props: { label: c("components.el-transfer.name") },
      children: []
    };
  },
  props(c, { t: A }) {
    return et(A, Ff + ".props", [{ type: "input", field: "label", title: "\u9009\u9879\u5361\u6807\u9898" }, {
      type: "switch",
      field: "disabled",
      title: "\u662F\u5426\u7981\u7528"
    }, { type: "input", field: "name", title: "\u4E0E\u9009\u9879\u5361\u7ED1\u5B9A\u503C value \u5BF9\u5E94\u7684\u6807\u8BC6\u7B26\uFF0C\u8868\u793A\u9009\u9879\u5361\u522B\u540D" }, {
      type: "switch",
      field: "lazy",
      title: "\u6807\u7B7E\u662F\u5426\u5EF6\u8FDF\u6E32\u67D3"
    }]);
  }
}, gp = "\u5206\u5272\u7EBF", ml = "el-divider", _l = {
  icon: "icon-divider",
  label: gp,
  name: ml,
  rule() {
    return {
      type: ml,
      props: {},
      wrap: { show: !1 },
      native: !1,
      children: [""]
    };
  },
  props(c, { t: A }) {
    return et(A, ml + ".props", [{
      type: "select",
      field: "direction",
      title: "\u8BBE\u7F6E\u5206\u5272\u7EBF\u65B9\u5411",
      options: [{ label: "horizontal", value: "horizontal" }, { label: "vertical", value: "vertical" }]
    }, {
      type: "input",
      field: "formCreateChild",
      title: "\u8BBE\u7F6E\u5206\u5272\u7EBF\u6587\u6848"
    }, {
      type: "select",
      field: "contentPosition",
      title: "\u8BBE\u7F6E\u5206\u5272\u7EBF\u6587\u6848\u7684\u4F4D\u7F6E",
      options: [{ label: "left", value: "left" }, { label: "right", value: "right" }, {
        label: "center",
        value: "center"
      }]
    }]);
  }
}, mp = "\u7EA7\u8054\u9009\u62E9\u5668", Vo = "cascader", es = {
  icon: "icon-cascader",
  label: mp,
  name: Vo,
  rule({ t: c }) {
    const A = c("props.option");
    return {
      type: Vo,
      field: St(),
      title: c("components.cascader.name"),
      info: "",
      effect: {
        fetch: ""
      },
      $required: !1,
      props: {
        options: [1, 2].map((l) => ({
          label: A + l,
          value: l,
          children: []
        }))
      }
    };
  },
  props(c, { t: A }) {
    return et(A, Vo + ".props", [
      kt(),
      vi(A, "props.options", !1),
      {
        props: { type: "textarea" },
        field: "customFieldFormula",
        title: "\u81EA\u5B9A\u4E49\u516C\u5F0F"
      },
      {
        type: "Object",
        field: "props",
        title: "\u914D\u7F6E\u9009\u9879",
        props: {
          rule: et(A, Vo + ".propsOpt", [{
            type: "select",
            field: "expandTrigger",
            title: "\u6B21\u7EA7\u83DC\u5355\u7684\u5C55\u5F00\u65B9\u5F0F",
            options: [{ label: "click", value: "click" }, { label: "hover", value: "hover" }]
          }, { type: "switch", field: "multiple", title: "\u662F\u5426\u591A\u9009" }, {
            type: "switch",
            field: "checkStrictly",
            title: "\u662F\u5426\u4E25\u683C\u7684\u9075\u5B88\u7236\u5B50\u8282\u70B9\u4E0D\u4E92\u76F8\u5173\u8054"
          }, {
            type: "switch",
            field: "emitPath",
            title: "\u5728\u9009\u4E2D\u8282\u70B9\u6539\u53D8\u65F6\uFF0C\u662F\u5426\u8FD4\u56DE\u7531\u8BE5\u8282\u70B9\u6240\u5728\u7684\u5404\u7EA7\u83DC\u5355\u7684\u503C\u6240\u7EC4\u6210\u7684\u6570\u7EC4\uFF0C\u82E5\u8BBE\u7F6E false\uFF0C\u5219\u53EA\u8FD4\u56DE\u8BE5\u8282\u70B9\u7684\u503C",
            value: !0
          }, { type: "input", field: "value", title: "\u6307\u5B9A\u9009\u9879\u7684\u503C\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C", value: "value" }, {
            type: "input",
            field: "label",
            title: "\u6307\u5B9A\u9009\u9879\u6807\u7B7E\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C",
            value: "label"
          }, { type: "input", field: "children", title: "\u6307\u5B9A\u9009\u9879\u7684\u5B50\u9009\u9879\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C", value: "children" }, {
            type: "input",
            field: "disabled",
            title: "\u6307\u5B9A\u9009\u9879\u7684\u7981\u7528\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C",
            value: "disabled"
          }, { type: "input", field: "leaf", title: "\u6307\u5B9A\u9009\u9879\u7684\u53F6\u5B50\u8282\u70B9\u7684\u6807\u5FD7\u4F4D\u4E3A\u9009\u9879\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C" }])
        }
      },
      {
        type: "select",
        field: "size",
        title: "\u5C3A\u5BF8",
        options: [{ label: "large", value: "large" }, { label: "default", value: "default" }, {
          label: "small",
          value: "small"
        }]
      },
      { type: "input", field: "placeholder", title: "\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C" },
      {
        type: "switch",
        field: "disabled",
        title: "\u662F\u5426\u7981\u7528"
      },
      { type: "switch", field: "clearable", title: "\u662F\u5426\u652F\u6301\u6E05\u7A7A\u9009\u9879" },
      {
        type: "switch",
        field: "showAllLevels",
        title: "\u8F93\u5165\u6846\u4E2D\u662F\u5426\u663E\u793A\u9009\u4E2D\u503C\u7684\u5B8C\u6574\u8DEF\u5F84",
        value: !0
      },
      { type: "switch", field: "collapseTags", title: "\u591A\u9009\u6A21\u5F0F\u4E0B\u662F\u5426\u6298\u53E0Tag" },
      {
        type: "input",
        field: "separator",
        title: "\u9009\u9879\u5206\u9694\u7B26"
      }
    ]);
  }
}, yp = "\u4E0A\u4F20", yl = "upload", ts = {
  icon: "icon-upload",
  label: yp,
  name: yl,
  rule({ t: c }) {
    return {
      type: yl,
      field: St(),
      title: c("components.upload.name"),
      info: "",
      $required: !1,
      props: {
        action: "",
        onSuccess(A, l) {
          l.url = A.data.url;
        }
      }
    };
  },
  props(c, { t: A }) {
    return et(A, yl + ".props", [kt(), {
      props: { type: "textarea" },
      field: "customFieldFormula",
      title: "\u81EA\u5B9A\u4E49\u516C\u5F0F"
    }, {
      type: "select",
      field: "list-type",
      title: "\u4E0A\u4F20\u7C7B\u578B",
      value: "text",
      options: [{ label: "\u6587\u5B57", value: "text" }, {
        label: "\u56FE\u7247",
        value: "picture"
      }, {
        label: "\u5361\u7247",
        value: "picture-card"
      }]
    }, { type: "input", field: "action", title: "\u4E0A\u4F20\u7684\u5730\u5740(\u5FC5\u586B)" }, {
      type: "Struct",
      field: "headers",
      title: "\u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u5934\u90E8",
      props: { defaultValue: {} }
    }, { type: "switch", field: "multiple", title: "\u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6" }, {
      type: "Struct",
      field: "data",
      title: "\u4E0A\u4F20\u65F6\u9644\u5E26\u7684\u989D\u5916\u53C2\u6570",
      props: { defaultValue: {} }
    }, { type: "input", field: "name", title: "\u4E0A\u4F20\u7684\u6587\u4EF6\u5B57\u6BB5\u540D" }, {
      type: "switch",
      field: "withCredentials",
      title: "\u652F\u6301\u53D1\u9001 cookie \u51ED\u8BC1\u4FE1\u606F"
    }, { type: "input", field: "accept", title: "\u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B\uFF08thumbnail-mode \u6A21\u5F0F\u4E0B\u6B64\u53C2\u6570\u65E0\u6548\uFF09" }, {
      type: "switch",
      field: "autoUpload",
      title: "\u662F\u5426\u5728\u9009\u53D6\u6587\u4EF6\u540E\u7ACB\u5373\u8FDB\u884C\u4E0A\u4F20",
      value: !0
    }, {
      type: "switch",
      field: "disabled",
      title: "\u662F\u5426\u7981\u7528"
    }, {
      type: "inputNumber",
      field: "limit",
      title: "\u6700\u5927\u5141\u8BB8\u4E0A\u4F20\u4E2A\u6570",
      props: { min: 0 }
    }]);
  }
}, Ap = "\u7A7F\u68AD\u6846", Al = "el-transfer", xp = () => {
  const c = [];
  for (let A = 1; A <= 15; A++)
    c.push({
      key: A,
      label: `\u5907\u9009\u9879 ${A}`,
      disabled: A % 4 === 0
    });
  return c;
}, ns = {
  icon: "icon-transfer",
  label: Ap,
  name: Al,
  rule({ t: c }) {
    return {
      type: Al,
      field: St(),
      title: c("components.el-transfer.name"),
      info: "",
      $required: !1,
      props: {
        data: xp()
      }
    };
  },
  props(c, { t: A }) {
    return et(A, Al + ".props", [{
      type: "Struct",
      field: "data",
      title: "Transfer \u7684\u6570\u636E\u6E90",
      props: { defaultValue: [] }
    }, { type: "switch", field: "filterable", title: "\u662F\u5426\u53EF\u641C\u7D22" }, {
      type: "input",
      field: "filterPlaceholder",
      title: "\u641C\u7D22\u6846\u5360\u4F4D\u7B26"
    }, {
      type: "select",
      field: "targetOrder",
      title: "\u53F3\u4FA7\u5217\u8868\u5143\u7D20\u7684\u6392\u5E8F\u7B56\u7565",
      info: "\u82E5\u4E3A original\uFF0C\u5219\u4FDD\u6301\u4E0E\u6570\u636E\u6E90\u76F8\u540C\u7684\u987A\u5E8F\uFF1B\u82E5\u4E3A push\uFF0C\u5219\u65B0\u52A0\u5165\u7684\u5143\u7D20\u6392\u5728\u6700\u540E\uFF1B\u82E5\u4E3A unshift\uFF0C\u5219\u65B0\u52A0\u5165\u7684\u5143\u7D20\u6392\u5728\u6700\u524D",
      options: [{ label: "original", value: "original" }, {
        label: "push",
        value: "push"
      }, { label: "unshift", value: "unshift" }]
    }, {
      type: "Struct",
      field: "titles",
      title: "\u81EA\u5B9A\u4E49\u5217\u8868\u6807\u9898",
      props: { defaultValue: [] }
    }, {
      type: "Struct",
      field: "buttonTexts",
      title: "\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u6848",
      props: { defaultValue: [] }
    }, {
      type: "Struct",
      field: "format",
      title: "\u5217\u8868\u9876\u90E8\u52FE\u9009\u72B6\u6001\u6587\u6848",
      props: { defaultValue: {} }
    }, {
      type: "Struct",
      field: "props",
      title: "\u6570\u636E\u6E90\u7684\u5B57\u6BB5\u522B\u540D",
      props: { defaultValue: {} }
    }, {
      type: "Struct",
      field: "leftDefaultChecked",
      title: "\u521D\u59CB\u72B6\u6001\u4E0B\u5DE6\u4FA7\u5217\u8868\u7684\u5DF2\u52FE\u9009\u9879\u7684 key \u6570\u7EC4",
      props: { defaultValue: [] }
    }, {
      type: "Struct",
      field: "rightDefaultChecked",
      title: "\u521D\u59CB\u72B6\u6001\u4E0B\u53F3\u4FA7\u5217\u8868\u7684\u5DF2\u52FE\u9009\u9879\u7684 key \u6570\u7EC4",
      props: { defaultValue: [] }
    }]);
  }
}, Sp = "\u6811\u5F62\u63A7\u4EF6", xl = "tree", rs = {
  icon: "icon-tree",
  label: Sp,
  name: xl,
  rule({ t: c }) {
    const A = c("props.option");
    return {
      type: xl,
      field: St(),
      title: c("components.tree.name"),
      info: "",
      effect: {
        fetch: ""
      },
      $required: !1,
      props: {
        props: {
          label: "label"
        },
        showCheckbox: !0,
        nodeKey: "id",
        data: [1, 2].map((l) => ({
          label: A + l,
          id: l,
          children: []
        }))
      }
    };
  },
  props(c, { t: A }) {
    return et(A, xl + ".props", [
      kt(),
      vi(A, "props.data", !1),
      { type: "input", field: "emptyText", title: "\u5185\u5BB9\u4E3A\u7A7A\u7684\u65F6\u5019\u5C55\u793A\u7684\u6587\u672C" },
      {
        type: "Struct",
        field: "props",
        title: "\u914D\u7F6E\u9009\u9879\uFF0C\u5177\u4F53\u770B\u4E0B\u8868",
        props: { defaultValue: {} }
      },
      { type: "switch", field: "renderAfterExpand", title: "\u662F\u5426\u5728\u7B2C\u4E00\u6B21\u5C55\u5F00\u67D0\u4E2A\u6811\u8282\u70B9\u540E\u624D\u6E32\u67D3\u5176\u5B50\u8282\u70B9", value: !0 },
      {
        type: "switch",
        field: "defaultExpandAll",
        title: "\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u8282\u70B9"
      },
      {
        type: "switch",
        field: "expandOnClickNode",
        title: "\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9\uFF0C \u9ED8\u8BA4\u503C\u4E3A true\uFF0C\u5982\u679C\u4E3A false\uFF0C\u5219\u53EA\u6709\u70B9\u7BAD\u5934\u56FE\u6807\u7684\u65F6\u5019\u624D\u4F1A\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9\u3002",
        value: !0
      },
      {
        type: "switch",
        field: "checkOnClickNode",
        title: "\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u9009\u4E2D\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u4E3A false\uFF0C\u5373\u53EA\u6709\u5728\u70B9\u51FB\u590D\u9009\u6846\u65F6\u624D\u4F1A\u9009\u4E2D\u8282\u70B9\u3002"
      },
      { type: "switch", field: "autoExpandParent", title: "\u5C55\u5F00\u5B50\u8282\u70B9\u7684\u65F6\u5019\u662F\u5426\u81EA\u52A8\u5C55\u5F00\u7236\u8282\u70B9", value: !0 },
      {
        type: "switch",
        field: "checkStrictly",
        title: "\u5728\u663E\u793A\u590D\u9009\u6846\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u5426\u4E25\u683C\u7684\u9075\u5FAA\u7236\u5B50\u4E0D\u4E92\u76F8\u5173\u8054\u7684\u505A\u6CD5\uFF0C\u9ED8\u8BA4\u4E3A false"
      },
      { type: "switch", field: "accordion", title: "\u662F\u5426\u6BCF\u6B21\u53EA\u6253\u5F00\u4E00\u4E2A\u540C\u7EA7\u6811\u8282\u70B9\u5C55\u5F00" },
      {
        type: "inputNumber",
        field: "indent",
        title: "\u76F8\u90BB\u7EA7\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u7F29\u8FDB\uFF0C\u5355\u4F4D\u4E3A\u50CF\u7D20"
      },
      { type: "input", field: "iconClass", title: "\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u7684\u56FE\u6807" },
      {
        type: "input",
        field: "nodeKey",
        title: "\u6BCF\u4E2A\u6811\u8282\u70B9\u7528\u6765\u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6\u7684\u5C5E\u6027\uFF0C\u6574\u68F5\u6811\u5E94\u8BE5\u662F\u552F\u4E00\u7684"
      }
    ]);
  }
}, Ep = "\u63D0\u793A", Sl = "el-alert", is = {
  icon: "icon-alert",
  label: Ep,
  name: Sl,
  rule({ t: c }) {
    return {
      type: Sl,
      props: {
        title: c("components.el-alert.name"),
        description: c("components.el-alert.description"),
        type: "success",
        effect: "dark"
      },
      children: []
    };
  },
  props(c, { t: A }) {
    return et(A, Sl + ".props", [{ type: "input", field: "title", title: "\u6807\u9898" }, {
      type: "select",
      field: "type",
      title: "\u4E3B\u9898",
      options: [{ label: "success", value: "success" }, { label: "warning", value: "warning" }, {
        label: "info",
        value: "info"
      }, { label: "error", value: "error" }]
    }, { type: "input", field: "description", title: "\u8F85\u52A9\u6027\u6587\u5B57" }, {
      type: "switch",
      field: "closable",
      title: "\u662F\u5426\u53EF\u5173\u95ED",
      value: !0
    }, { type: "switch", field: "center", title: "\u6587\u5B57\u662F\u5426\u5C45\u4E2D", value: !0 }, {
      type: "input",
      field: "closeText",
      title: "\u5173\u95ED\u6309\u94AE\u81EA\u5B9A\u4E49\u6587\u672C"
    }, { type: "switch", field: "showIcon", title: "\u662F\u5426\u663E\u793A\u56FE\u6807" }, {
      type: "select",
      field: "effect",
      title: "\u9009\u62E9\u63D0\u4F9B\u7684\u4E3B\u9898",
      options: [{ label: "light", value: "light" }, { label: "dark", value: "dark" }]
    }]);
  }
}, bp = "\u6587\u5B57", El = "span", os = {
  icon: "icon-span",
  label: bp,
  name: El,
  rule({ t: c }) {
    return {
      type: El,
      title: c("components.span.name"),
      native: !1,
      children: [c("components.span.name")]
    };
  },
  props(c, { t: A }) {
    return et(A, El + ".props", [
      {
        type: "input",
        field: "formCreateTitle",
        title: "title"
      },
      {
        type: "input",
        field: "formCreateChild",
        title: "\u5185\u5BB9",
        props: {
          type: "textarea"
        }
      }
    ]);
  }
}, Cp = "\u95F4\u8DDD", bl = "div", as = {
  icon: "icon-space",
  label: Cp,
  name: bl,
  rule() {
    return {
      type: bl,
      wrap: {
        show: !1
      },
      native: !1,
      style: {
        width: "100%",
        height: "20px"
      },
      children: []
    };
  },
  props(c, { t: A }) {
    return [
      {
        type: "object",
        field: "formCreateStyle",
        native: !0,
        props: {
          rule: et(A, bl + ".props", [
            {
              type: "input",
              field: "height",
              title: "height"
            }
          ])
        }
      }
    ];
  }
}, Tp = "\u6807\u7B7E\u9875", Bf = "tab", ls = {
  icon: "icon-tab",
  label: Tp,
  name: Bf,
  children: "tab-pane",
  mask: !1,
  rule() {
    return {
      type: "el-tabs",
      style: "width:100%;",
      children: []
    };
  },
  props(c, { t: A }) {
    return et(A, Bf + ".props", [{
      type: "select",
      field: "type",
      title: "\u98CE\u683C\u7C7B\u578B",
      options: [{
        label: "card",
        value: "card"
      }, { label: "border-card", value: "border-card" }]
    }, { type: "switch", field: "closable", title: "\u6807\u7B7E\u662F\u5426\u53EF\u5173\u95ED" }, {
      type: "select",
      field: "tabPosition",
      title: "\u9009\u9879\u5361\u6240\u5728\u4F4D\u7F6E",
      options: [{ label: "top", value: "top" }, { label: "right", value: "right" }, {
        label: "left",
        value: "left"
      }]
    }, { type: "switch", field: "stretch", title: "\u6807\u7B7E\u7684\u5BBD\u5EA6\u662F\u5426\u81EA\u6491\u5F00" }]);
  }
}, wp = "\u6309\u94AE", Cl = "el-button", ss = {
  icon: "icon-button",
  label: wp,
  name: Cl,
  mask: !1,
  rule({ t: c }) {
    return {
      type: Cl,
      props: {},
      children: [c("components.el-button.name")]
    };
  },
  props(c, { t: A }) {
    return et(A, Cl + ".props", [{
      type: "input",
      field: "formCreateChild",
      title: "\u5185\u5BB9"
    }, {
      type: "select",
      field: "size",
      title: "\u5C3A\u5BF8",
      options: [{ label: "large", value: "large" }, { label: "default", value: "default" }, {
        label: "small",
        value: "small"
      }]
    }, {
      type: "select",
      field: "type",
      title: "\u7C7B\u578B",
      options: [{ label: "primary", value: "primary" }, {
        label: "success",
        value: "success"
      }, { label: "warning", value: "warning" }, { label: "danger", value: "danger" }, {
        label: "info",
        value: "info"
      }]
    }, { type: "switch", field: "plain", title: "\u662F\u5426\u6734\u7D20\u6309\u94AE" }, {
      type: "switch",
      field: "round",
      title: "\u662F\u5426\u5706\u89D2\u6309\u94AE"
    }, { type: "switch", field: "circle", title: "\u662F\u5426\u5706\u5F62\u6309\u94AE" }, {
      type: "switch",
      field: "loading",
      title: "\u662F\u5426\u52A0\u8F7D\u4E2D\u72B6\u6001"
    }, { type: "switch", field: "disabled", title: "\u662F\u5426\u7981\u7528\u72B6\u6001" }, {
      type: "input",
      field: "icon",
      title: "\u56FE\u6807\u7C7B\u540D"
    }]);
  }
}, Dp = "\u5BCC\u6587\u672C\u6846", Tl = "fc-editor", us = {
  icon: "icon-editor",
  label: Dp,
  name: Tl,
  rule({ t: c }) {
    return {
      type: Tl,
      field: St(),
      title: c("components.fc-editor.name"),
      info: "",
      $required: !1,
      props: {}
    };
  },
  props(c, { t: A }) {
    return et(A, Tl + ".props", [kt(), {
      props: { type: "textarea" },
      field: "customFieldFormula",
      title: "\u81EA\u5B9A\u4E49\u516C\u5F0F"
    }, {
      type: "switch",
      field: "disabled",
      title: "\u662F\u5426\u7981\u7528"
    }]);
  }
}, Mp = "\u5B50\u8868\u5355", Hf = "group", fs = {
  icon: "icon-group",
  label: Mp,
  name: Hf,
  inside: !1,
  drag: !0,
  dragBtn: !0,
  mask: !1,
  loadRule(c) {
    c.children = c.props.rule || [], c.props || (c.props = {}), c.props.mode = ["fcSubForm", "object", "subForm"].indexOf(c.type) > -1 ? "subForm" : "group", c.type = "FcRow", delete c.props.rule;
  },
  parseRule(c) {
    c.props.rule = c.children, c.type = c.props.mode === "subForm" ? "subForm" : "group", delete c.children, delete c.props.mode;
  },
  rule({ t: c }) {
    return {
      type: "FcRow",
      field: St(),
      title: c("components.group.name"),
      info: "",
      $required: !1,
      props: {},
      children: []
    };
  },
  props(c, { t: A }) {
    return et(A, Hf + ".props", [
      kt(),
      {
        type: "switch",
        field: "disabled",
        title: "\u662F\u5426\u7981\u7528"
      },
      { type: "switch", field: "syncDisabled", title: "\u662F\u5426\u4E0E\u5B50\u8868\u5355\u5F3A\u5236\u540C\u6B65 disabled \u72B6\u6001", value: !0 },
      {
        type: "select",
        field: "mode",
        title: "\u7EC4\u4EF6\u7C7B\u578B",
        options: [{
          label: A("components.group.props.modeOpts.group"),
          value: "group"
        }, { label: A("components.group.props.modeOpts.subform"), value: "subForm" }],
        value: "group"
      },
      { type: "switch", field: "button", title: "\u662F\u5426\u663E\u793A\u64CD\u4F5C\u6309\u94AE", value: !0 },
      { type: "switch", field: "sortBtn", title: "\u662F\u5426\u663E\u793A\u6392\u5E8F\u6309\u94AE", value: !0 },
      { type: "inputNumber", field: "expand", title: "\u8BBE\u7F6E\u9ED8\u8BA4\u5C55\u5F00\u51E0\u9879" },
      { type: "inputNumber", field: "min", title: "\u8BBE\u7F6E\u6700\u5C0F\u6DFB\u52A0\u51E0\u9879" },
      { type: "inputNumber", field: "max", title: "\u8BBE\u7F6E\u6700\u591A\u6DFB\u52A0\u51E0\u9879" }
    ]);
  }
}, cr = {
  [jl.name]: jl,
  [$l.name]: $l,
  [Yl.name]: Yl,
  [Vl.name]: Vl,
  [Ql.name]: Ql,
  [Gl.name]: Gl,
  [kl.name]: kl,
  [Kl.name]: Kl,
  [Xl.name]: Xl,
  [Jl.name]: Jl,
  [Zl.name]: Zl,
  [ql.name]: ql,
  [Nf.name]: Nf,
  [ls.name]: ls,
  [Of.name]: Of,
  [_l.name]: _l,
  [es.name]: es,
  [ts.name]: ts,
  [ns.name]: ns,
  [rs.name]: rs,
  [is.name]: is,
  [os.name]: os,
  [as.name]: as,
  [ss.name]: ss,
  [us.name]: us,
  [fs.name]: fs
};
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Uf(c, A) {
  var l = Object.keys(c);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(c);
    A && (o = o.filter(function(t) {
      return Object.getOwnPropertyDescriptor(c, t).enumerable;
    })), l.push.apply(l, o);
  }
  return l;
}
function Wn(c) {
  for (var A = 1; A < arguments.length; A++) {
    var l = arguments[A] != null ? arguments[A] : {};
    A % 2 ? Uf(Object(l), !0).forEach(function(o) {
      Rp(c, o, l[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(l)) : Uf(Object(l)).forEach(function(o) {
      Object.defineProperty(c, o, Object.getOwnPropertyDescriptor(l, o));
    });
  }
  return c;
}
function Jo(c) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Jo = function(A) {
    return typeof A;
  } : Jo = function(A) {
    return A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A;
  }, Jo(c);
}
function Rp(c, A, l) {
  return A in c ? Object.defineProperty(c, A, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : c[A] = l, c;
}
function Jn() {
  return Jn = Object.assign || function(c) {
    for (var A = 1; A < arguments.length; A++) {
      var l = arguments[A];
      for (var o in l)
        Object.prototype.hasOwnProperty.call(l, o) && (c[o] = l[o]);
    }
    return c;
  }, Jn.apply(this, arguments);
}
function Pp(c, A) {
  if (c == null)
    return {};
  var l = {}, o = Object.keys(c), t, s;
  for (s = 0; s < o.length; s++)
    t = o[s], !(A.indexOf(t) >= 0) && (l[t] = c[t]);
  return l;
}
function Ip(c, A) {
  if (c == null)
    return {};
  var l = Pp(c, A), o, t;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(c);
    for (t = 0; t < s.length; t++)
      o = s[t], !(A.indexOf(o) >= 0) && (!Object.prototype.propertyIsEnumerable.call(c, o) || (l[o] = c[o]));
  }
  return l;
}
var Lp = "1.14.0";
function Xn(c) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(c);
}
var Zn = Xn(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), ao = Xn(/Edge/i), zf = Xn(/firefox/i), _i = Xn(/safari/i) && !Xn(/chrome/i) && !Xn(/android/i), sd = Xn(/iP(ad|od|hone)/i), Np = Xn(/chrome/i) && Xn(/android/i), ud = {
  capture: !1,
  passive: !1
};
function ke(c, A, l) {
  c.addEventListener(A, l, !Zn && ud);
}
function Ye(c, A, l) {
  c.removeEventListener(A, l, !Zn && ud);
}
function na(c, A) {
  if (!!A) {
    if (A[0] === ">" && (A = A.substring(1)), c)
      try {
        if (c.matches)
          return c.matches(A);
        if (c.msMatchesSelector)
          return c.msMatchesSelector(A);
        if (c.webkitMatchesSelector)
          return c.webkitMatchesSelector(A);
      } catch {
        return !1;
      }
    return !1;
  }
}
function Fp(c) {
  return c.host && c !== document && c.host.nodeType ? c.host : c.parentNode;
}
function Un(c, A, l, o) {
  if (c) {
    l = l || document;
    do {
      if (A != null && (A[0] === ">" ? c.parentNode === l && na(c, A) : na(c, A)) || o && c === l)
        return c;
      if (c === l)
        break;
    } while (c = Fp(c));
  }
  return null;
}
var Wf = /\s+/g;
function dn(c, A, l) {
  if (c && A)
    if (c.classList)
      c.classList[l ? "add" : "remove"](A);
    else {
      var o = (" " + c.className + " ").replace(Wf, " ").replace(" " + A + " ", " ");
      c.className = (o + (l ? " " + A : "")).replace(Wf, " ");
    }
}
function Le(c, A, l) {
  var o = c && c.style;
  if (o) {
    if (l === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? l = document.defaultView.getComputedStyle(c, "") : c.currentStyle && (l = c.currentStyle), A === void 0 ? l : l[A];
    !(A in o) && A.indexOf("webkit") === -1 && (A = "-webkit-" + A), o[A] = l + (typeof l == "string" ? "" : "px");
  }
}
function di(c, A) {
  var l = "";
  if (typeof c == "string")
    l = c;
  else
    do {
      var o = Le(c, "transform");
      o && o !== "none" && (l = o + " " + l);
    } while (!A && (c = c.parentNode));
  var t = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return t && new t(l);
}
function fd(c, A, l) {
  if (c) {
    var o = c.getElementsByTagName(A), t = 0, s = o.length;
    if (l)
      for (; t < s; t++)
        l(o[t], t);
    return o;
  }
  return [];
}
function zn() {
  var c = document.scrollingElement;
  return c || document.documentElement;
}
function It(c, A, l, o, t) {
  if (!(!c.getBoundingClientRect && c !== window)) {
    var s, u, f, d, m, T, S;
    if (c !== window && c.parentNode && c !== zn() ? (s = c.getBoundingClientRect(), u = s.top, f = s.left, d = s.bottom, m = s.right, T = s.height, S = s.width) : (u = 0, f = 0, d = window.innerHeight, m = window.innerWidth, T = window.innerHeight, S = window.innerWidth), (A || l) && c !== window && (t = t || c.parentNode, !Zn))
      do
        if (t && t.getBoundingClientRect && (Le(t, "transform") !== "none" || l && Le(t, "position") !== "static")) {
          var w = t.getBoundingClientRect();
          u -= w.top + parseInt(Le(t, "border-top-width")), f -= w.left + parseInt(Le(t, "border-left-width")), d = u + s.height, m = f + s.width;
          break;
        }
      while (t = t.parentNode);
    if (o && c !== window) {
      var b = di(t || c), g = b && b.a, x = b && b.d;
      b && (u /= x, f /= g, S /= g, T /= x, d = u + T, m = f + S);
    }
    return {
      top: u,
      left: f,
      bottom: d,
      right: m,
      width: S,
      height: T
    };
  }
}
function jf(c, A, l) {
  for (var o = gr(c, !0), t = It(c)[A]; o; ) {
    var s = It(o)[l], u = void 0;
    if (l === "top" || l === "left" ? u = t >= s : u = t <= s, !u)
      return o;
    if (o === zn())
      break;
    o = gr(o, !1);
  }
  return !1;
}
function ci(c, A, l, o) {
  for (var t = 0, s = 0, u = c.children; s < u.length; ) {
    if (u[s].style.display !== "none" && u[s] !== Ne.ghost && (o || u[s] !== Ne.dragged) && Un(u[s], l.draggable, c, !1)) {
      if (t === A)
        return u[s];
      t++;
    }
    s++;
  }
  return null;
}
function ms(c, A) {
  for (var l = c.lastElementChild; l && (l === Ne.ghost || Le(l, "display") === "none" || A && !na(l, A)); )
    l = l.previousElementSibling;
  return l || null;
}
function mn(c, A) {
  var l = 0;
  if (!c || !c.parentNode)
    return -1;
  for (; c = c.previousElementSibling; )
    c.nodeName.toUpperCase() !== "TEMPLATE" && c !== Ne.clone && (!A || na(c, A)) && l++;
  return l;
}
function $f(c) {
  var A = 0, l = 0, o = zn();
  if (c)
    do {
      var t = di(c), s = t.a, u = t.d;
      A += c.scrollLeft * s, l += c.scrollTop * u;
    } while (c !== o && (c = c.parentNode));
  return [A, l];
}
function Op(c, A) {
  for (var l in c)
    if (!!c.hasOwnProperty(l)) {
      for (var o in A)
        if (A.hasOwnProperty(o) && A[o] === c[l][o])
          return Number(l);
    }
  return -1;
}
function gr(c, A) {
  if (!c || !c.getBoundingClientRect)
    return zn();
  var l = c, o = !1;
  do
    if (l.clientWidth < l.scrollWidth || l.clientHeight < l.scrollHeight) {
      var t = Le(l);
      if (l.clientWidth < l.scrollWidth && (t.overflowX == "auto" || t.overflowX == "scroll") || l.clientHeight < l.scrollHeight && (t.overflowY == "auto" || t.overflowY == "scroll")) {
        if (!l.getBoundingClientRect || l === document.body)
          return zn();
        if (o || A)
          return l;
        o = !0;
      }
    }
  while (l = l.parentNode);
  return zn();
}
function Bp(c, A) {
  if (c && A)
    for (var l in A)
      A.hasOwnProperty(l) && (c[l] = A[l]);
  return c;
}
function wl(c, A) {
  return Math.round(c.top) === Math.round(A.top) && Math.round(c.left) === Math.round(A.left) && Math.round(c.height) === Math.round(A.height) && Math.round(c.width) === Math.round(A.width);
}
var eo;
function dd(c, A) {
  return function() {
    if (!eo) {
      var l = arguments, o = this;
      l.length === 1 ? c.call(o, l[0]) : c.apply(o, l), eo = setTimeout(function() {
        eo = void 0;
      }, A);
    }
  };
}
function Hp() {
  clearTimeout(eo), eo = void 0;
}
function cd(c, A, l) {
  c.scrollLeft += A, c.scrollTop += l;
}
function vd(c) {
  var A = window.Polymer, l = window.jQuery || window.Zepto;
  return A && A.dom ? A.dom(c).cloneNode(!0) : l ? l(c).clone(!0)[0] : c.cloneNode(!0);
}
var pn = "Sortable" + new Date().getTime();
function Up() {
  var c = [], A;
  return {
    captureAnimationState: function() {
      if (c = [], !!this.options.animation) {
        var o = [].slice.call(this.el.children);
        o.forEach(function(t) {
          if (!(Le(t, "display") === "none" || t === Ne.ghost)) {
            c.push({
              target: t,
              rect: It(t)
            });
            var s = Wn({}, c[c.length - 1].rect);
            if (t.thisAnimationDuration) {
              var u = di(t, !0);
              u && (s.top -= u.f, s.left -= u.e);
            }
            t.fromRect = s;
          }
        });
      }
    },
    addAnimationState: function(o) {
      c.push(o);
    },
    removeAnimationState: function(o) {
      c.splice(Op(c, {
        target: o
      }), 1);
    },
    animateAll: function(o) {
      var t = this;
      if (!this.options.animation) {
        clearTimeout(A), typeof o == "function" && o();
        return;
      }
      var s = !1, u = 0;
      c.forEach(function(f) {
        var d = 0, m = f.target, T = m.fromRect, S = It(m), w = m.prevFromRect, b = m.prevToRect, g = f.rect, x = di(m, !0);
        x && (S.top -= x.f, S.left -= x.e), m.toRect = S, m.thisAnimationDuration && wl(w, S) && !wl(T, S) && (g.top - S.top) / (g.left - S.left) === (T.top - S.top) / (T.left - S.left) && (d = Wp(g, w, b, t.options)), wl(S, T) || (m.prevFromRect = T, m.prevToRect = S, d || (d = t.options.animation), t.animate(m, g, S, d)), d && (s = !0, u = Math.max(u, d), clearTimeout(m.animationResetTimer), m.animationResetTimer = setTimeout(function() {
          m.animationTime = 0, m.prevFromRect = null, m.fromRect = null, m.prevToRect = null, m.thisAnimationDuration = null;
        }, d), m.thisAnimationDuration = d);
      }), clearTimeout(A), s ? A = setTimeout(function() {
        typeof o == "function" && o();
      }, u) : typeof o == "function" && o(), c = [];
    },
    animate: function(o, t, s, u) {
      if (u) {
        Le(o, "transition", ""), Le(o, "transform", "");
        var f = di(this.el), d = f && f.a, m = f && f.d, T = (t.left - s.left) / (d || 1), S = (t.top - s.top) / (m || 1);
        o.animatingX = !!T, o.animatingY = !!S, Le(o, "transform", "translate3d(" + T + "px," + S + "px,0)"), this.forRepaintDummy = zp(o), Le(o, "transition", "transform " + u + "ms" + (this.options.easing ? " " + this.options.easing : "")), Le(o, "transform", "translate3d(0,0,0)"), typeof o.animated == "number" && clearTimeout(o.animated), o.animated = setTimeout(function() {
          Le(o, "transition", ""), Le(o, "transform", ""), o.animated = !1, o.animatingX = !1, o.animatingY = !1;
        }, u);
      }
    }
  };
}
function zp(c) {
  return c.offsetWidth;
}
function Wp(c, A, l, o) {
  return Math.sqrt(Math.pow(A.top - c.top, 2) + Math.pow(A.left - c.left, 2)) / Math.sqrt(Math.pow(A.top - l.top, 2) + Math.pow(A.left - l.left, 2)) * o.animation;
}
var li = [], Dl = {
  initializeByDefault: !0
}, lo = {
  mount: function(A) {
    for (var l in Dl)
      Dl.hasOwnProperty(l) && !(l in A) && (A[l] = Dl[l]);
    li.forEach(function(o) {
      if (o.pluginName === A.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(A.pluginName, " more than once");
    }), li.push(A);
  },
  pluginEvent: function(A, l, o) {
    var t = this;
    this.eventCanceled = !1, o.cancel = function() {
      t.eventCanceled = !0;
    };
    var s = A + "Global";
    li.forEach(function(u) {
      !l[u.pluginName] || (l[u.pluginName][s] && l[u.pluginName][s](Wn({
        sortable: l
      }, o)), l.options[u.pluginName] && l[u.pluginName][A] && l[u.pluginName][A](Wn({
        sortable: l
      }, o)));
    });
  },
  initializePlugins: function(A, l, o, t) {
    li.forEach(function(f) {
      var d = f.pluginName;
      if (!(!A.options[d] && !f.initializeByDefault)) {
        var m = new f(A, l, A.options);
        m.sortable = A, m.options = A.options, A[d] = m, Jn(o, m.defaults);
      }
    });
    for (var s in A.options)
      if (!!A.options.hasOwnProperty(s)) {
        var u = this.modifyOption(A, s, A.options[s]);
        typeof u < "u" && (A.options[s] = u);
      }
  },
  getEventProperties: function(A, l) {
    var o = {};
    return li.forEach(function(t) {
      typeof t.eventProperties == "function" && Jn(o, t.eventProperties.call(l[t.pluginName], A));
    }), o;
  },
  modifyOption: function(A, l, o) {
    var t;
    return li.forEach(function(s) {
      !A[s.pluginName] || s.optionListeners && typeof s.optionListeners[l] == "function" && (t = s.optionListeners[l].call(A[s.pluginName], o));
    }), t;
  }
};
function jp(c) {
  var A = c.sortable, l = c.rootEl, o = c.name, t = c.targetEl, s = c.cloneEl, u = c.toEl, f = c.fromEl, d = c.oldIndex, m = c.newIndex, T = c.oldDraggableIndex, S = c.newDraggableIndex, w = c.originalEvent, b = c.putSortable, g = c.extraEventProperties;
  if (A = A || l && l[pn], !!A) {
    var x, v = A.options, M = "on" + o.charAt(0).toUpperCase() + o.substr(1);
    window.CustomEvent && !Zn && !ao ? x = new CustomEvent(o, {
      bubbles: !0,
      cancelable: !0
    }) : (x = document.createEvent("Event"), x.initEvent(o, !0, !0)), x.to = u || l, x.from = f || l, x.item = t || l, x.clone = s, x.oldIndex = d, x.newIndex = m, x.oldDraggableIndex = T, x.newDraggableIndex = S, x.originalEvent = w, x.pullMode = b ? b.lastPutMode : void 0;
    var y = Wn(Wn({}, g), lo.getEventProperties(o, A));
    for (var h in y)
      x[h] = y[h];
    l && l.dispatchEvent(x), v[M] && v[M].call(A, x);
  }
}
var $p = ["evt"], sn = function(A, l) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, t = o.evt, s = Ip(o, $p);
  lo.pluginEvent.bind(Ne)(A, l, Wn({
    dragEl: Ae,
    parentEl: vt,
    ghostEl: He,
    rootEl: it,
    nextEl: Nr,
    lastDownEl: Zo,
    cloneEl: pt,
    cloneHidden: hr,
    dragStarted: Ki,
    putSortable: Wt,
    activeSortable: Ne.active,
    originalEvent: t,
    oldIndex: fi,
    oldDraggableIndex: to,
    newIndex: cn,
    newDraggableIndex: pr,
    hideGhostForTarget: md,
    unhideGhostForTarget: yd,
    cloneNowHidden: function() {
      hr = !0;
    },
    cloneNowShown: function() {
      hr = !1;
    },
    dispatchSortableEvent: function(f) {
      rn({
        sortable: l,
        name: f,
        originalEvent: t
      });
    }
  }, s));
};
function rn(c) {
  jp(Wn({
    putSortable: Wt,
    cloneEl: pt,
    targetEl: Ae,
    rootEl: it,
    oldIndex: fi,
    oldDraggableIndex: to,
    newIndex: cn,
    newDraggableIndex: pr
  }, c));
}
var Ae, vt, He, it, Nr, Zo, pt, hr, fi, cn, to, pr, Qo, Wt, ui = !1, ra = !1, ia = [], Ir, Rn, Ml, Rl, Yf, Vf, Ki, si, no, ro = !1, Go = !1, qo, Qt, Pl = [], ds = !1, oa = [], la = typeof document < "u", ko = sd, Qf = ao || Zn ? "cssFloat" : "float", Yp = la && !Np && !sd && "draggable" in document.createElement("div"), pd = function() {
  if (!!la) {
    if (Zn)
      return !1;
    var c = document.createElement("x");
    return c.style.cssText = "pointer-events:auto", c.style.pointerEvents === "auto";
  }
}(), hd = function(A, l) {
  var o = Le(A), t = parseInt(o.width) - parseInt(o.paddingLeft) - parseInt(o.paddingRight) - parseInt(o.borderLeftWidth) - parseInt(o.borderRightWidth), s = ci(A, 0, l), u = ci(A, 1, l), f = s && Le(s), d = u && Le(u), m = f && parseInt(f.marginLeft) + parseInt(f.marginRight) + It(s).width, T = d && parseInt(d.marginLeft) + parseInt(d.marginRight) + It(u).width;
  if (o.display === "flex")
    return o.flexDirection === "column" || o.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (o.display === "grid")
    return o.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (s && f.float && f.float !== "none") {
    var S = f.float === "left" ? "left" : "right";
    return u && (d.clear === "both" || d.clear === S) ? "vertical" : "horizontal";
  }
  return s && (f.display === "block" || f.display === "flex" || f.display === "table" || f.display === "grid" || m >= t && o[Qf] === "none" || u && o[Qf] === "none" && m + T > t) ? "vertical" : "horizontal";
}, Vp = function(A, l, o) {
  var t = o ? A.left : A.top, s = o ? A.right : A.bottom, u = o ? A.width : A.height, f = o ? l.left : l.top, d = o ? l.right : l.bottom, m = o ? l.width : l.height;
  return t === f || s === d || t + u / 2 === f + m / 2;
}, Qp = function(A, l) {
  var o;
  return ia.some(function(t) {
    var s = t[pn].options.emptyInsertThreshold;
    if (!(!s || ms(t))) {
      var u = It(t), f = A >= u.left - s && A <= u.right + s, d = l >= u.top - s && l <= u.bottom + s;
      if (f && d)
        return o = t;
    }
  }), o;
}, gd = function(A) {
  function l(s, u) {
    return function(f, d, m, T) {
      var S = f.options.group.name && d.options.group.name && f.options.group.name === d.options.group.name;
      if (s == null && (u || S))
        return !0;
      if (s == null || s === !1)
        return !1;
      if (u && s === "clone")
        return s;
      if (typeof s == "function")
        return l(s(f, d, m, T), u)(f, d, m, T);
      var w = (u ? f : d).options.group.name;
      return s === !0 || typeof s == "string" && s === w || s.join && s.indexOf(w) > -1;
    };
  }
  var o = {}, t = A.group;
  (!t || Jo(t) != "object") && (t = {
    name: t
  }), o.name = t.name, o.checkPull = l(t.pull, !0), o.checkPut = l(t.put), o.revertClone = t.revertClone, A.group = o;
}, md = function() {
  !pd && He && Le(He, "display", "none");
}, yd = function() {
  !pd && He && Le(He, "display", "");
};
la && document.addEventListener("click", function(c) {
  if (ra)
    return c.preventDefault(), c.stopPropagation && c.stopPropagation(), c.stopImmediatePropagation && c.stopImmediatePropagation(), ra = !1, !1;
}, !0);
var Lr = function(A) {
  if (Ae) {
    A = A.touches ? A.touches[0] : A;
    var l = Qp(A.clientX, A.clientY);
    if (l) {
      var o = {};
      for (var t in A)
        A.hasOwnProperty(t) && (o[t] = A[t]);
      o.target = o.rootEl = l, o.preventDefault = void 0, o.stopPropagation = void 0, l[pn]._onDragOver(o);
    }
  }
}, Gp = function(A) {
  Ae && Ae.parentNode[pn]._isOutsideThisEl(A.target);
};
function Ne(c, A) {
  if (!(c && c.nodeType && c.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(c));
  this.el = c, this.options = A = Jn({}, A), c[pn] = this;
  var l = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(c.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    invertSwap: !1,
    invertedSwapThreshold: null,
    removeCloneOnHide: !0,
    direction: function() {
      return hd(c, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(u, f) {
      u.setData("Text", f.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Ne.supportPointer !== !1 && "PointerEvent" in window && !_i,
    emptyInsertThreshold: 5
  };
  lo.initializePlugins(this, c, l);
  for (var o in l)
    !(o in A) && (A[o] = l[o]);
  gd(A);
  for (var t in this)
    t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
  this.nativeDraggable = A.forceFallback ? !1 : Yp, this.nativeDraggable && (this.options.touchStartThreshold = 1), A.supportPointer ? ke(c, "pointerdown", this._onTapStart) : (ke(c, "mousedown", this._onTapStart), ke(c, "touchstart", this._onTapStart)), this.nativeDraggable && (ke(c, "dragover", this), ke(c, "dragenter", this)), ia.push(this.el), A.store && A.store.get && this.sort(A.store.get(this) || []), Jn(this, Up());
}
Ne.prototype = {
  constructor: Ne,
  _isOutsideThisEl: function(A) {
    !this.el.contains(A) && A !== this.el && (si = null);
  },
  _getDirection: function(A, l) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, A, l, Ae) : this.options.direction;
  },
  _onTapStart: function(A) {
    if (!!A.cancelable) {
      var l = this, o = this.el, t = this.options, s = t.preventOnFilter, u = A.type, f = A.touches && A.touches[0] || A.pointerType && A.pointerType === "touch" && A, d = (f || A).target, m = A.target.shadowRoot && (A.path && A.path[0] || A.composedPath && A.composedPath()[0]) || d, T = t.filter;
      if (eh(o), !Ae && !(/mousedown|pointerdown/.test(u) && A.button !== 0 || t.disabled) && !m.isContentEditable && !(!this.nativeDraggable && _i && d && d.tagName.toUpperCase() === "SELECT") && (d = Un(d, t.draggable, o, !1), !(d && d.animated) && Zo !== d)) {
        if (fi = mn(d), to = mn(d, t.draggable), typeof T == "function") {
          if (T.call(this, A, d, this)) {
            rn({
              sortable: l,
              rootEl: m,
              name: "filter",
              targetEl: d,
              toEl: o,
              fromEl: o
            }), sn("filter", l, {
              evt: A
            }), s && A.cancelable && A.preventDefault();
            return;
          }
        } else if (T && (T = T.split(",").some(function(S) {
          if (S = Un(m, S.trim(), o, !1), S)
            return rn({
              sortable: l,
              rootEl: S,
              name: "filter",
              targetEl: d,
              fromEl: o,
              toEl: o
            }), sn("filter", l, {
              evt: A
            }), !0;
        }), T)) {
          s && A.cancelable && A.preventDefault();
          return;
        }
        t.handle && !Un(m, t.handle, o, !1) || this._prepareDragStart(A, f, d);
      }
    }
  },
  _prepareDragStart: function(A, l, o) {
    var t = this, s = t.el, u = t.options, f = s.ownerDocument, d;
    if (o && !Ae && o.parentNode === s) {
      var m = It(o);
      if (it = s, Ae = o, vt = Ae.parentNode, Nr = Ae.nextSibling, Zo = o, Qo = u.group, Ne.dragged = Ae, Ir = {
        target: Ae,
        clientX: (l || A).clientX,
        clientY: (l || A).clientY
      }, Yf = Ir.clientX - m.left, Vf = Ir.clientY - m.top, this._lastX = (l || A).clientX, this._lastY = (l || A).clientY, Ae.style["will-change"] = "all", d = function() {
        if (sn("delayEnded", t, {
          evt: A
        }), Ne.eventCanceled) {
          t._onDrop();
          return;
        }
        t._disableDelayedDragEvents(), !zf && t.nativeDraggable && (Ae.draggable = !0), t._triggerDragStart(A, l), rn({
          sortable: t,
          name: "choose",
          originalEvent: A
        }), dn(Ae, u.chosenClass, !0);
      }, u.ignore.split(",").forEach(function(T) {
        fd(Ae, T.trim(), Il);
      }), ke(f, "dragover", Lr), ke(f, "mousemove", Lr), ke(f, "touchmove", Lr), ke(f, "mouseup", t._onDrop), ke(f, "touchend", t._onDrop), ke(f, "touchcancel", t._onDrop), zf && this.nativeDraggable && (this.options.touchStartThreshold = 4, Ae.draggable = !0), sn("delayStart", this, {
        evt: A
      }), u.delay && (!u.delayOnTouchOnly || l) && (!this.nativeDraggable || !(ao || Zn))) {
        if (Ne.eventCanceled) {
          this._onDrop();
          return;
        }
        ke(f, "mouseup", t._disableDelayedDrag), ke(f, "touchend", t._disableDelayedDrag), ke(f, "touchcancel", t._disableDelayedDrag), ke(f, "mousemove", t._delayedDragTouchMoveHandler), ke(f, "touchmove", t._delayedDragTouchMoveHandler), u.supportPointer && ke(f, "pointermove", t._delayedDragTouchMoveHandler), t._dragStartTimer = setTimeout(d, u.delay);
      } else
        d();
    }
  },
  _delayedDragTouchMoveHandler: function(A) {
    var l = A.touches ? A.touches[0] : A;
    Math.max(Math.abs(l.clientX - this._lastX), Math.abs(l.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    Ae && Il(Ae), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var A = this.el.ownerDocument;
    Ye(A, "mouseup", this._disableDelayedDrag), Ye(A, "touchend", this._disableDelayedDrag), Ye(A, "touchcancel", this._disableDelayedDrag), Ye(A, "mousemove", this._delayedDragTouchMoveHandler), Ye(A, "touchmove", this._delayedDragTouchMoveHandler), Ye(A, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(A, l) {
    l = l || A.pointerType == "touch" && A, !this.nativeDraggable || l ? this.options.supportPointer ? ke(document, "pointermove", this._onTouchMove) : l ? ke(document, "touchmove", this._onTouchMove) : ke(document, "mousemove", this._onTouchMove) : (ke(Ae, "dragend", this), ke(it, "dragstart", this._onDragStart));
    try {
      document.selection ? _o(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(A, l) {
    if (ui = !1, it && Ae) {
      sn("dragStarted", this, {
        evt: l
      }), this.nativeDraggable && ke(document, "dragover", Gp);
      var o = this.options;
      !A && dn(Ae, o.dragClass, !1), dn(Ae, o.ghostClass, !0), Ne.active = this, A && this._appendGhost(), rn({
        sortable: this,
        name: "start",
        originalEvent: l
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Rn) {
      this._lastX = Rn.clientX, this._lastY = Rn.clientY, md();
      for (var A = document.elementFromPoint(Rn.clientX, Rn.clientY), l = A; A && A.shadowRoot && (A = A.shadowRoot.elementFromPoint(Rn.clientX, Rn.clientY), A !== l); )
        l = A;
      if (Ae.parentNode[pn]._isOutsideThisEl(A), l)
        do {
          if (l[pn]) {
            var o = void 0;
            if (o = l[pn]._onDragOver({
              clientX: Rn.clientX,
              clientY: Rn.clientY,
              target: A,
              rootEl: l
            }), o && !this.options.dragoverBubble)
              break;
          }
          A = l;
        } while (l = l.parentNode);
      yd();
    }
  },
  _onTouchMove: function(A) {
    if (Ir) {
      var l = this.options, o = l.fallbackTolerance, t = l.fallbackOffset, s = A.touches ? A.touches[0] : A, u = He && di(He, !0), f = He && u && u.a, d = He && u && u.d, m = ko && Qt && $f(Qt), T = (s.clientX - Ir.clientX + t.x) / (f || 1) + (m ? m[0] - Pl[0] : 0) / (f || 1), S = (s.clientY - Ir.clientY + t.y) / (d || 1) + (m ? m[1] - Pl[1] : 0) / (d || 1);
      if (!Ne.active && !ui) {
        if (o && Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) < o)
          return;
        this._onDragStart(A, !0);
      }
      if (He) {
        u ? (u.e += T - (Ml || 0), u.f += S - (Rl || 0)) : u = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: T,
          f: S
        };
        var w = "matrix(".concat(u.a, ",").concat(u.b, ",").concat(u.c, ",").concat(u.d, ",").concat(u.e, ",").concat(u.f, ")");
        Le(He, "webkitTransform", w), Le(He, "mozTransform", w), Le(He, "msTransform", w), Le(He, "transform", w), Ml = T, Rl = S, Rn = s;
      }
      A.cancelable && A.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!He) {
      var A = this.options.fallbackOnBody ? document.body : it, l = It(Ae, !0, ko, !0, A), o = this.options;
      if (ko) {
        for (Qt = A; Le(Qt, "position") === "static" && Le(Qt, "transform") === "none" && Qt !== document; )
          Qt = Qt.parentNode;
        Qt !== document.body && Qt !== document.documentElement ? (Qt === document && (Qt = zn()), l.top += Qt.scrollTop, l.left += Qt.scrollLeft) : Qt = zn(), Pl = $f(Qt);
      }
      He = Ae.cloneNode(!0), dn(He, o.ghostClass, !1), dn(He, o.fallbackClass, !0), dn(He, o.dragClass, !0), Le(He, "transition", ""), Le(He, "transform", ""), Le(He, "box-sizing", "border-box"), Le(He, "margin", 0), Le(He, "top", l.top), Le(He, "left", l.left), Le(He, "width", l.width), Le(He, "height", l.height), Le(He, "opacity", "0.8"), Le(He, "position", ko ? "absolute" : "fixed"), Le(He, "zIndex", "100000"), Le(He, "pointerEvents", "none"), Ne.ghost = He, A.appendChild(He), Le(He, "transform-origin", Yf / parseInt(He.style.width) * 100 + "% " + Vf / parseInt(He.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(A, l) {
    var o = this, t = A.dataTransfer, s = o.options;
    if (sn("dragStart", this, {
      evt: A
    }), Ne.eventCanceled) {
      this._onDrop();
      return;
    }
    sn("setupClone", this), Ne.eventCanceled || (pt = vd(Ae), pt.draggable = !1, pt.style["will-change"] = "", this._hideClone(), dn(pt, this.options.chosenClass, !1), Ne.clone = pt), o.cloneId = _o(function() {
      sn("clone", o), !Ne.eventCanceled && (o.options.removeCloneOnHide || it.insertBefore(pt, Ae), o._hideClone(), rn({
        sortable: o,
        name: "clone"
      }));
    }), !l && dn(Ae, s.dragClass, !0), l ? (ra = !0, o._loopId = setInterval(o._emulateDragOver, 50)) : (Ye(document, "mouseup", o._onDrop), Ye(document, "touchend", o._onDrop), Ye(document, "touchcancel", o._onDrop), t && (t.effectAllowed = "move", s.setData && s.setData.call(o, t, Ae)), ke(document, "drop", o), Le(Ae, "transform", "translateZ(0)")), ui = !0, o._dragStartId = _o(o._dragStarted.bind(o, l, A)), ke(document, "selectstart", o), Ki = !0, _i && Le(document.body, "user-select", "none");
  },
  _onDragOver: function(A) {
    var l = this.el, o = A.target, t, s, u, f = this.options, d = f.group, m = Ne.active, T = Qo === d, S = f.sort, w = Wt || m, b, g = this, x = !1;
    if (ds)
      return;
    function v(K, q) {
      sn(K, g, Wn({
        evt: A,
        isOwner: T,
        axis: b ? "vertical" : "horizontal",
        revert: u,
        dragRect: t,
        targetRect: s,
        canSort: S,
        fromSortable: w,
        target: o,
        completed: y,
        onMove: function(_, le) {
          return Ko(it, l, Ae, t, _, It(_), A, le);
        },
        changed: h
      }, q));
    }
    function M() {
      v("dragOverAnimationCapture"), g.captureAnimationState(), g !== w && w.captureAnimationState();
    }
    function y(K) {
      return v("dragOverCompleted", {
        insertion: K
      }), K && (T ? m._hideClone() : m._showClone(g), g !== w && (dn(Ae, Wt ? Wt.options.ghostClass : m.options.ghostClass, !1), dn(Ae, f.ghostClass, !0)), Wt !== g && g !== Ne.active ? Wt = g : g === Ne.active && Wt && (Wt = null), w === g && (g._ignoreWhileAnimating = o), g.animateAll(function() {
        v("dragOverAnimationComplete"), g._ignoreWhileAnimating = null;
      }), g !== w && (w.animateAll(), w._ignoreWhileAnimating = null)), (o === Ae && !Ae.animated || o === l && !o.animated) && (si = null), !f.dragoverBubble && !A.rootEl && o !== document && (Ae.parentNode[pn]._isOutsideThisEl(A.target), !K && Lr(A)), !f.dragoverBubble && A.stopPropagation && A.stopPropagation(), x = !0;
    }
    function h() {
      cn = mn(Ae), pr = mn(Ae, f.draggable), rn({
        sortable: g,
        name: "change",
        toEl: l,
        newIndex: cn,
        newDraggableIndex: pr,
        originalEvent: A
      });
    }
    if (A.preventDefault !== void 0 && A.cancelable && A.preventDefault(), o = Un(o, f.draggable, l, !0), v("dragOver"), Ne.eventCanceled)
      return x;
    if (Ae.contains(A.target) || o.animated && o.animatingX && o.animatingY || g._ignoreWhileAnimating === o)
      return y(!1);
    if (ra = !1, m && !f.disabled && (T ? S || (u = vt !== it) : Wt === this || (this.lastPutMode = Qo.checkPull(this, m, Ae, A)) && d.checkPut(this, m, Ae, A))) {
      if (b = this._getDirection(A, o) === "vertical", t = It(Ae), v("dragOverValid"), Ne.eventCanceled)
        return x;
      if (u)
        return vt = it, M(), this._hideClone(), v("revert"), Ne.eventCanceled || (Nr ? it.insertBefore(Ae, Nr) : it.appendChild(Ae)), y(!0);
      var E = ms(l, f.draggable);
      if (!E || Jp(A, b, this) && !E.animated) {
        if (E === Ae)
          return y(!1);
        if (E && l === A.target && (o = E), o && (s = It(o)), Ko(it, l, Ae, t, o, s, A, !!o) !== !1)
          return M(), l.appendChild(Ae), vt = l, h(), y(!0);
      } else if (E && Xp(A, b, this)) {
        var C = ci(l, 0, f, !0);
        if (C === Ae)
          return y(!1);
        if (o = C, s = It(o), Ko(it, l, Ae, t, o, s, A, !1) !== !1)
          return M(), l.insertBefore(Ae, C), vt = l, h(), y(!0);
      } else if (o.parentNode === l) {
        s = It(o);
        var R = 0, F, B = Ae.parentNode !== l, O = !Vp(Ae.animated && Ae.toRect || t, o.animated && o.toRect || s, b), z = b ? "top" : "left", I = jf(o, "top", "top") || jf(Ae, "top", "top"), U = I ? I.scrollTop : void 0;
        si !== o && (F = s[z], ro = !1, Go = !O && f.invertSwap || B), R = Zp(A, o, s, b, O ? 1 : f.swapThreshold, f.invertedSwapThreshold == null ? f.swapThreshold : f.invertedSwapThreshold, Go, si === o);
        var H;
        if (R !== 0) {
          var $ = mn(Ae);
          do
            $ -= R, H = vt.children[$];
          while (H && (Le(H, "display") === "none" || H === He));
        }
        if (R === 0 || H === o)
          return y(!1);
        si = o, no = R;
        var P = o.nextElementSibling, Y = !1;
        Y = R === 1;
        var Q = Ko(it, l, Ae, t, o, s, A, Y);
        if (Q !== !1)
          return (Q === 1 || Q === -1) && (Y = Q === 1), ds = !0, setTimeout(Kp, 30), M(), Y && !P ? l.appendChild(Ae) : o.parentNode.insertBefore(Ae, Y ? P : o), I && cd(I, 0, U - I.scrollTop), vt = Ae.parentNode, F !== void 0 && !Go && (qo = Math.abs(F - It(o)[z])), h(), y(!0);
      }
      if (l.contains(Ae))
        return y(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Ye(document, "mousemove", this._onTouchMove), Ye(document, "touchmove", this._onTouchMove), Ye(document, "pointermove", this._onTouchMove), Ye(document, "dragover", Lr), Ye(document, "mousemove", Lr), Ye(document, "touchmove", Lr);
  },
  _offUpEvents: function() {
    var A = this.el.ownerDocument;
    Ye(A, "mouseup", this._onDrop), Ye(A, "touchend", this._onDrop), Ye(A, "pointerup", this._onDrop), Ye(A, "touchcancel", this._onDrop), Ye(document, "selectstart", this);
  },
  _onDrop: function(A) {
    var l = this.el, o = this.options;
    if (cn = mn(Ae), pr = mn(Ae, o.draggable), sn("drop", this, {
      evt: A
    }), vt = Ae && Ae.parentNode, cn = mn(Ae), pr = mn(Ae, o.draggable), Ne.eventCanceled) {
      this._nulling();
      return;
    }
    ui = !1, Go = !1, ro = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), cs(this.cloneId), cs(this._dragStartId), this.nativeDraggable && (Ye(document, "drop", this), Ye(l, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), _i && Le(document.body, "user-select", ""), Le(Ae, "transform", ""), A && (Ki && (A.cancelable && A.preventDefault(), !o.dropBubble && A.stopPropagation()), He && He.parentNode && He.parentNode.removeChild(He), (it === vt || Wt && Wt.lastPutMode !== "clone") && pt && pt.parentNode && pt.parentNode.removeChild(pt), Ae && (this.nativeDraggable && Ye(Ae, "dragend", this), Il(Ae), Ae.style["will-change"] = "", Ki && !ui && dn(Ae, Wt ? Wt.options.ghostClass : this.options.ghostClass, !1), dn(Ae, this.options.chosenClass, !1), rn({
      sortable: this,
      name: "unchoose",
      toEl: vt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: A
    }), it !== vt ? (cn >= 0 && (rn({
      rootEl: vt,
      name: "add",
      toEl: vt,
      fromEl: it,
      originalEvent: A
    }), rn({
      sortable: this,
      name: "remove",
      toEl: vt,
      originalEvent: A
    }), rn({
      rootEl: vt,
      name: "sort",
      toEl: vt,
      fromEl: it,
      originalEvent: A
    }), rn({
      sortable: this,
      name: "sort",
      toEl: vt,
      originalEvent: A
    })), Wt && Wt.save()) : cn !== fi && cn >= 0 && (rn({
      sortable: this,
      name: "update",
      toEl: vt,
      originalEvent: A
    }), rn({
      sortable: this,
      name: "sort",
      toEl: vt,
      originalEvent: A
    })), Ne.active && ((cn == null || cn === -1) && (cn = fi, pr = to), rn({
      sortable: this,
      name: "end",
      toEl: vt,
      originalEvent: A
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    sn("nulling", this), it = Ae = vt = He = Nr = pt = Zo = hr = Ir = Rn = Ki = cn = pr = fi = to = si = no = Wt = Qo = Ne.dragged = Ne.ghost = Ne.clone = Ne.active = null, oa.forEach(function(A) {
      A.checked = !0;
    }), oa.length = Ml = Rl = 0;
  },
  handleEvent: function(A) {
    switch (A.type) {
      case "drop":
      case "dragend":
        this._onDrop(A);
        break;
      case "dragenter":
      case "dragover":
        Ae && (this._onDragOver(A), kp(A));
        break;
      case "selectstart":
        A.preventDefault();
        break;
    }
  },
  toArray: function() {
    for (var A = [], l, o = this.el.children, t = 0, s = o.length, u = this.options; t < s; t++)
      l = o[t], Un(l, u.draggable, this.el, !1) && A.push(l.getAttribute(u.dataIdAttr) || _p(l));
    return A;
  },
  sort: function(A, l) {
    var o = {}, t = this.el;
    this.toArray().forEach(function(s, u) {
      var f = t.children[u];
      Un(f, this.options.draggable, t, !1) && (o[s] = f);
    }, this), l && this.captureAnimationState(), A.forEach(function(s) {
      o[s] && (t.removeChild(o[s]), t.appendChild(o[s]));
    }), l && this.animateAll();
  },
  save: function() {
    var A = this.options.store;
    A && A.set && A.set(this);
  },
  closest: function(A, l) {
    return Un(A, l || this.options.draggable, this.el, !1);
  },
  option: function(A, l) {
    var o = this.options;
    if (l === void 0)
      return o[A];
    var t = lo.modifyOption(this, A, l);
    typeof t < "u" ? o[A] = t : o[A] = l, A === "group" && gd(o);
  },
  destroy: function() {
    sn("destroy", this);
    var A = this.el;
    A[pn] = null, Ye(A, "mousedown", this._onTapStart), Ye(A, "touchstart", this._onTapStart), Ye(A, "pointerdown", this._onTapStart), this.nativeDraggable && (Ye(A, "dragover", this), Ye(A, "dragenter", this)), Array.prototype.forEach.call(A.querySelectorAll("[draggable]"), function(l) {
      l.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), ia.splice(ia.indexOf(this.el), 1), this.el = A = null;
  },
  _hideClone: function() {
    if (!hr) {
      if (sn("hideClone", this), Ne.eventCanceled)
        return;
      Le(pt, "display", "none"), this.options.removeCloneOnHide && pt.parentNode && pt.parentNode.removeChild(pt), hr = !0;
    }
  },
  _showClone: function(A) {
    if (A.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (hr) {
      if (sn("showClone", this), Ne.eventCanceled)
        return;
      Ae.parentNode == it && !this.options.group.revertClone ? it.insertBefore(pt, Ae) : Nr ? it.insertBefore(pt, Nr) : it.appendChild(pt), this.options.group.revertClone && this.animate(Ae, pt), Le(pt, "display", ""), hr = !1;
    }
  }
};
function kp(c) {
  c.dataTransfer && (c.dataTransfer.dropEffect = "move"), c.cancelable && c.preventDefault();
}
function Ko(c, A, l, o, t, s, u, f) {
  var d, m = c[pn], T = m.options.onMove, S;
  return window.CustomEvent && !Zn && !ao ? d = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (d = document.createEvent("Event"), d.initEvent("move", !0, !0)), d.to = A, d.from = c, d.dragged = l, d.draggedRect = o, d.related = t || A, d.relatedRect = s || It(A), d.willInsertAfter = f, d.originalEvent = u, c.dispatchEvent(d), T && (S = T.call(m, d, u)), S;
}
function Il(c) {
  c.draggable = !1;
}
function Kp() {
  ds = !1;
}
function Xp(c, A, l) {
  var o = It(ci(l.el, 0, l.options, !0)), t = 10;
  return A ? c.clientX < o.left - t || c.clientY < o.top && c.clientX < o.right : c.clientY < o.top - t || c.clientY < o.bottom && c.clientX < o.left;
}
function Jp(c, A, l) {
  var o = It(ms(l.el, l.options.draggable)), t = 10;
  return A ? c.clientX > o.right + t || c.clientX <= o.right && c.clientY > o.bottom && c.clientX >= o.left : c.clientX > o.right && c.clientY > o.top || c.clientX <= o.right && c.clientY > o.bottom + t;
}
function Zp(c, A, l, o, t, s, u, f) {
  var d = o ? c.clientY : c.clientX, m = o ? l.height : l.width, T = o ? l.top : l.left, S = o ? l.bottom : l.right, w = !1;
  if (!u) {
    if (f && qo < m * t) {
      if (!ro && (no === 1 ? d > T + m * s / 2 : d < S - m * s / 2) && (ro = !0), ro)
        w = !0;
      else if (no === 1 ? d < T + qo : d > S - qo)
        return -no;
    } else if (d > T + m * (1 - t) / 2 && d < S - m * (1 - t) / 2)
      return qp(A);
  }
  return w = w || u, w && (d < T + m * s / 2 || d > S - m * s / 2) ? d > T + m / 2 ? 1 : -1 : 0;
}
function qp(c) {
  return mn(Ae) < mn(c) ? 1 : -1;
}
function _p(c) {
  for (var A = c.tagName + c.className + c.src + c.href + c.textContent, l = A.length, o = 0; l--; )
    o += A.charCodeAt(l);
  return o.toString(36);
}
function eh(c) {
  oa.length = 0;
  for (var A = c.getElementsByTagName("input"), l = A.length; l--; ) {
    var o = A[l];
    o.checked && oa.push(o);
  }
}
function _o(c) {
  return setTimeout(c, 0);
}
function cs(c) {
  return clearTimeout(c);
}
la && ke(document, "touchmove", function(c) {
  (Ne.active || ui) && c.cancelable && c.preventDefault();
});
Ne.utils = {
  on: ke,
  off: Ye,
  css: Le,
  find: fd,
  is: function(A, l) {
    return !!Un(A, l, A, !1);
  },
  extend: Bp,
  throttle: dd,
  closest: Un,
  toggleClass: dn,
  clone: vd,
  index: mn,
  nextTick: _o,
  cancelNextTick: cs,
  detectDirection: hd,
  getChild: ci
};
Ne.get = function(c) {
  return c[pn];
};
Ne.mount = function() {
  for (var c = arguments.length, A = new Array(c), l = 0; l < c; l++)
    A[l] = arguments[l];
  A[0].constructor === Array && (A = A[0]), A.forEach(function(o) {
    if (!o.prototype || !o.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));
    o.utils && (Ne.utils = Wn(Wn({}, Ne.utils), o.utils)), lo.mount(o);
  });
};
Ne.create = function(c, A) {
  return new Ne(c, A);
};
Ne.version = Lp;
var At = [], Xi, vs, ps = !1, Ll, Nl, aa, Ji;
function th() {
  function c() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var A in this)
      A.charAt(0) === "_" && typeof this[A] == "function" && (this[A] = this[A].bind(this));
  }
  return c.prototype = {
    dragStarted: function(l) {
      var o = l.originalEvent;
      this.sortable.nativeDraggable ? ke(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? ke(document, "pointermove", this._handleFallbackAutoScroll) : o.touches ? ke(document, "touchmove", this._handleFallbackAutoScroll) : ke(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(l) {
      var o = l.originalEvent;
      !this.options.dragOverBubble && !o.rootEl && this._handleAutoScroll(o);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Ye(document, "dragover", this._handleAutoScroll) : (Ye(document, "pointermove", this._handleFallbackAutoScroll), Ye(document, "touchmove", this._handleFallbackAutoScroll), Ye(document, "mousemove", this._handleFallbackAutoScroll)), Gf(), ea(), Hp();
    },
    nulling: function() {
      aa = vs = Xi = ps = Ji = Ll = Nl = null, At.length = 0;
    },
    _handleFallbackAutoScroll: function(l) {
      this._handleAutoScroll(l, !0);
    },
    _handleAutoScroll: function(l, o) {
      var t = this, s = (l.touches ? l.touches[0] : l).clientX, u = (l.touches ? l.touches[0] : l).clientY, f = document.elementFromPoint(s, u);
      if (aa = l, o || this.options.forceAutoScrollFallback || ao || Zn || _i) {
        Fl(l, this.options, f, o);
        var d = gr(f, !0);
        ps && (!Ji || s !== Ll || u !== Nl) && (Ji && Gf(), Ji = setInterval(function() {
          var m = gr(document.elementFromPoint(s, u), !0);
          m !== d && (d = m, ea()), Fl(l, t.options, m, o);
        }, 10), Ll = s, Nl = u);
      } else {
        if (!this.options.bubbleScroll || gr(f, !0) === zn()) {
          ea();
          return;
        }
        Fl(l, this.options, gr(f, !1), !1);
      }
    }
  }, Jn(c, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function ea() {
  At.forEach(function(c) {
    clearInterval(c.pid);
  }), At = [];
}
function Gf() {
  clearInterval(Ji);
}
var Fl = dd(function(c, A, l, o) {
  if (!!A.scroll) {
    var t = (c.touches ? c.touches[0] : c).clientX, s = (c.touches ? c.touches[0] : c).clientY, u = A.scrollSensitivity, f = A.scrollSpeed, d = zn(), m = !1, T;
    vs !== l && (vs = l, ea(), Xi = A.scroll, T = A.scrollFn, Xi === !0 && (Xi = gr(l, !0)));
    var S = 0, w = Xi;
    do {
      var b = w, g = It(b), x = g.top, v = g.bottom, M = g.left, y = g.right, h = g.width, E = g.height, C = void 0, R = void 0, F = b.scrollWidth, B = b.scrollHeight, O = Le(b), z = b.scrollLeft, I = b.scrollTop;
      b === d ? (C = h < F && (O.overflowX === "auto" || O.overflowX === "scroll" || O.overflowX === "visible"), R = E < B && (O.overflowY === "auto" || O.overflowY === "scroll" || O.overflowY === "visible")) : (C = h < F && (O.overflowX === "auto" || O.overflowX === "scroll"), R = E < B && (O.overflowY === "auto" || O.overflowY === "scroll"));
      var U = C && (Math.abs(y - t) <= u && z + h < F) - (Math.abs(M - t) <= u && !!z), H = R && (Math.abs(v - s) <= u && I + E < B) - (Math.abs(x - s) <= u && !!I);
      if (!At[S])
        for (var $ = 0; $ <= S; $++)
          At[$] || (At[$] = {});
      (At[S].vx != U || At[S].vy != H || At[S].el !== b) && (At[S].el = b, At[S].vx = U, At[S].vy = H, clearInterval(At[S].pid), (U != 0 || H != 0) && (m = !0, At[S].pid = setInterval(function() {
        o && this.layer === 0 && Ne.active._onTouchMove(aa);
        var P = At[this.layer].vy ? At[this.layer].vy * f : 0, Y = At[this.layer].vx ? At[this.layer].vx * f : 0;
        typeof T == "function" && T.call(Ne.dragged.parentNode[pn], Y, P, c, aa, At[this.layer].el) !== "continue" || cd(At[this.layer].el, Y, P);
      }.bind({
        layer: S
      }), 24))), S++;
    } while (A.bubbleScroll && w !== d && (w = gr(w, !1)));
    ps = m;
  }
}, 30), Ad = function(A) {
  var l = A.originalEvent, o = A.putSortable, t = A.dragEl, s = A.activeSortable, u = A.dispatchSortableEvent, f = A.hideGhostForTarget, d = A.unhideGhostForTarget;
  if (!!l) {
    var m = o || s;
    f();
    var T = l.changedTouches && l.changedTouches.length ? l.changedTouches[0] : l, S = document.elementFromPoint(T.clientX, T.clientY);
    d(), m && !m.el.contains(S) && (u("spill"), this.onSpill({
      dragEl: t,
      putSortable: o
    }));
  }
};
function ys() {
}
ys.prototype = {
  startIndex: null,
  dragStart: function(A) {
    var l = A.oldDraggableIndex;
    this.startIndex = l;
  },
  onSpill: function(A) {
    var l = A.dragEl, o = A.putSortable;
    this.sortable.captureAnimationState(), o && o.captureAnimationState();
    var t = ci(this.sortable.el, this.startIndex, this.options);
    t ? this.sortable.el.insertBefore(l, t) : this.sortable.el.appendChild(l), this.sortable.animateAll(), o && o.animateAll();
  },
  drop: Ad
};
Jn(ys, {
  pluginName: "revertOnSpill"
});
function As() {
}
As.prototype = {
  onSpill: function(A) {
    var l = A.dragEl, o = A.putSortable, t = o || this.sortable;
    t.captureAnimationState(), l.parentNode && l.parentNode.removeChild(l), t.animateAll();
  },
  drop: Ad
};
Jn(As, {
  pluginName: "removeOnSpill"
});
Ne.mount(new th());
Ne.mount(As, ys);
function Ol(c) {
  c.parentElement !== null && c.parentElement.removeChild(c);
}
function kf(c, A, l) {
  const o = l === 0 ? c.children[0] : c.children[l - 1].nextSibling;
  c.insertBefore(A, o);
}
function nh() {
  return typeof window < "u" ? window.console : global.console;
}
const rh = nh();
function ih(c) {
  const A = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return A[o] || (A[o] = c(o));
  };
}
const oh = /-(\w)/g, ah = ih((c) => c.replace(oh, (A, l) => l.toUpperCase())), xd = ["Start", "Add", "Remove", "Update", "End"], Sd = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], Ed = ["Move"], lh = [Ed, xd, Sd].flatMap((c) => c).map((c) => `on${c}`), hs = {
  manage: Ed,
  manageAndEmit: xd,
  emit: Sd
};
function sh(c) {
  return lh.indexOf(c) !== -1;
}
const uh = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];
function fh(c) {
  return uh.includes(c);
}
function dh(c) {
  return ["transition-group", "TransitionGroup"].includes(c);
}
function bd(c) {
  return ["id", "class", "role", "style"].includes(c) || c.startsWith("data-") || c.startsWith("aria-") || c.startsWith("on");
}
function Cd(c) {
  return c.reduce((A, [l, o]) => (A[l] = o, A), {});
}
function ch({ $attrs: c, componentData: A = {} }) {
  return {
    ...Cd(
      Object.entries(c).filter(([o, t]) => bd(o))
    ),
    ...A
  };
}
function vh({ $attrs: c, callBackBuilder: A }) {
  const l = Cd(Td(c));
  Object.entries(A).forEach(([t, s]) => {
    hs[t].forEach((u) => {
      l[`on${u}`] = s(u);
    });
  });
  const o = `[data-draggable]${l.draggable || ""}`;
  return {
    ...l,
    draggable: o
  };
}
function Td(c) {
  return Object.entries(c).filter(([A, l]) => !bd(A)).map(([A, l]) => [ah(A), l]).filter(([A, l]) => !sh(A));
}
const Kf = ({ el: c }) => c, ph = (c, A) => c.__draggable_context = A, Xf = (c) => c.__draggable_context;
class hh {
  constructor({
    nodes: { header: A, default: l, footer: o },
    root: t,
    realList: s
  }) {
    this.defaultNodes = l, this.children = [...A, ...l, ...o], this.externalComponent = t.externalComponent, this.rootTransition = t.transition, this.tag = t.tag, this.realList = s;
  }
  get _isRootComponent() {
    return this.externalComponent || this.rootTransition;
  }
  render(A, l) {
    const { tag: o, children: t, _isRootComponent: s } = this;
    return A(o, l, s ? { default: () => t } : t);
  }
  updated() {
    const { defaultNodes: A, realList: l } = this;
    A.forEach((o, t) => {
      ph(Kf(o), {
        element: l[t],
        index: t
      });
    });
  }
  getUnderlyingVm(A) {
    return Xf(A);
  }
  getVmIndexFromDomIndex(A, l) {
    const { defaultNodes: o } = this, { length: t } = o, s = l.children, u = s.item(A);
    if (u === null)
      return t;
    const f = Xf(u);
    if (f)
      return f.index;
    if (t === 0)
      return 0;
    const d = Kf(o[0]), m = [...s].findIndex(
      (T) => T === d
    );
    return A < m ? 0 : t;
  }
}
function gh(c, A) {
  const l = c[A];
  return l ? l() : [];
}
function mh({ $slots: c, realList: A, getKey: l }) {
  const o = A || [], [t, s] = ["header", "footer"].map(
    (d) => gh(c, d)
  ), { item: u } = c;
  if (!u)
    throw new Error("draggable element must have an item slot");
  const f = o.flatMap(
    (d, m) => u({ element: d, index: m }).map((T) => (T.key = l(d), T.props = { ...T.props || {}, "data-draggable": !0 }, T))
  );
  if (f.length !== o.length)
    throw new Error("Item slot must have only one child");
  return {
    header: t,
    footer: s,
    default: f
  };
}
function yh(c) {
  const A = dh(c), l = !fh(c) && !A;
  return {
    transition: A,
    externalComponent: l,
    tag: l ? ut(c) : A ? Nv : c
  };
}
function Ah({ $slots: c, tag: A, realList: l, getKey: o }) {
  const t = mh({ $slots: c, realList: l, getKey: o }), s = yh(A);
  return new hh({ nodes: t, root: s, realList: l });
}
function wd(c, A) {
  Fr(() => this.$emit(c.toLowerCase(), A));
}
function Dd(c) {
  return (A, l) => {
    if (this.realList !== null)
      return this[`onDrag${c}`](A, l);
  };
}
function xh(c) {
  const A = Dd.call(this, c);
  return (l, o) => {
    A.call(this, l, o), wd.call(this, c, l);
  };
}
let Bl = null;
const Sh = {
  list: {
    type: Array,
    required: !1,
    default: null
  },
  modelValue: {
    type: Array,
    required: !1,
    default: null
  },
  itemKey: {
    type: [String, Function],
    required: !0
  },
  clone: {
    type: Function,
    default: (c) => c
  },
  tag: {
    type: String,
    default: "div"
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: !1,
    default: null
  }
}, Eh = [
  "update:modelValue",
  "change",
  ...[...hs.manageAndEmit, ...hs.emit].map((c) => c.toLowerCase())
], xs = Pn({
  name: "draggable",
  inheritAttrs: !1,
  props: Sh,
  emits: Eh,
  data() {
    return {
      error: !1
    };
  },
  render() {
    try {
      this.error = !1;
      const { $slots: c, $attrs: A, tag: l, componentData: o, realList: t, getKey: s } = this, u = Ah({
        $slots: c,
        tag: l,
        realList: t,
        getKey: s
      });
      this.componentStructure = u;
      const f = ch({ $attrs: A, componentData: o });
      return u.render(ta, f);
    } catch (c) {
      return this.error = !0, ta("pre", { style: { color: "red" } }, c.stack);
    }
  },
  created() {
    this.list !== null && this.modelValue !== null && rh.error(
      "modelValue and list props are mutually exclusive! Please set one or another."
    );
  },
  mounted() {
    if (this.error)
      return;
    const { $attrs: c, $el: A, componentStructure: l } = this;
    l.updated();
    const o = vh({
      $attrs: c,
      callBackBuilder: {
        manageAndEmit: (s) => xh.call(this, s),
        emit: (s) => wd.bind(this, s),
        manage: (s) => Dd.call(this, s)
      }
    }), t = A.nodeType === 1 ? A : A.parentElement;
    this._sortable = new Ne(t, o), this.targetDomElement = t, t.__draggable_component__ = this;
  },
  updated() {
    this.componentStructure.updated();
  },
  beforeUnmount() {
    this._sortable !== void 0 && this._sortable.destroy();
  },
  computed: {
    realList() {
      const { list: c } = this;
      return c || this.modelValue;
    },
    getKey() {
      const { itemKey: c } = this;
      return typeof c == "function" ? c : (A) => A[c];
    }
  },
  watch: {
    $attrs: {
      handler(c) {
        const { _sortable: A } = this;
        !A || Td(c).forEach(([l, o]) => {
          A.option(l, o);
        });
      },
      deep: !0
    }
  },
  methods: {
    getUnderlyingVm(c) {
      return this.componentStructure.getUnderlyingVm(c) || null;
    },
    getUnderlyingPotencialDraggableComponent(c) {
      return c.__draggable_component__;
    },
    emitChanges(c) {
      Fr(() => this.$emit("change", c));
    },
    alterList(c) {
      if (this.list) {
        c(this.list);
        return;
      }
      const A = [...this.modelValue];
      c(A), this.$emit("update:modelValue", A);
    },
    spliceList() {
      const c = (A) => A.splice(...arguments);
      this.alterList(c);
    },
    updatePosition(c, A) {
      const l = (o) => o.splice(A, 0, o.splice(c, 1)[0]);
      this.alterList(l);
    },
    getRelatedContextFromMoveEvent({ to: c, related: A }) {
      const l = this.getUnderlyingPotencialDraggableComponent(c);
      if (!l)
        return { component: l };
      const o = l.realList, t = { list: o, component: l };
      return c !== A && o ? { ...l.getUnderlyingVm(A) || {}, ...t } : t;
    },
    getVmIndexFromDomIndex(c) {
      return this.componentStructure.getVmIndexFromDomIndex(
        c,
        this.targetDomElement
      );
    },
    onDragStart(c) {
      this.context = this.getUnderlyingVm(c.item), c.item._underlying_vm_ = this.clone(this.context.element), Bl = c.item;
    },
    onDragAdd(c) {
      const A = c.item._underlying_vm_;
      if (A === void 0)
        return;
      Ol(c.item);
      const l = this.getVmIndexFromDomIndex(c.newIndex);
      this.spliceList(l, 0, A);
      const o = { element: A, newIndex: l };
      this.emitChanges({ added: o });
    },
    onDragRemove(c) {
      if (kf(this.$el, c.item, c.oldIndex), c.pullMode === "clone") {
        Ol(c.clone);
        return;
      }
      const { index: A, element: l } = this.context;
      this.spliceList(A, 1);
      const o = { element: l, oldIndex: A };
      this.emitChanges({ removed: o });
    },
    onDragUpdate(c) {
      Ol(c.item), kf(c.from, c.item, c.oldIndex);
      const A = this.context.index, l = this.getVmIndexFromDomIndex(c.newIndex);
      this.updatePosition(A, l);
      const o = { element: this.context.element, oldIndex: A, newIndex: l };
      this.emitChanges({ moved: o });
    },
    computeFutureIndex(c, A) {
      if (!c.element)
        return 0;
      const l = [...A.to.children].filter(
        (u) => u.style.display !== "none"
      ), o = l.indexOf(A.related), t = c.component.getVmIndexFromDomIndex(
        o
      );
      return l.indexOf(Bl) !== -1 || !A.willInsertAfter ? t : t + 1;
    },
    onDragMove(c, A) {
      const { move: l, realList: o } = this;
      if (!l || !o)
        return !0;
      const t = this.getRelatedContextFromMoveEvent(c), s = this.computeFutureIndex(t, c), u = {
        ...this.context,
        futureIndex: s
      }, f = {
        ...c,
        relatedContext: t,
        draggedContext: u
      };
      return l(f, A);
    },
    onDragEnd() {
      Bl = null;
    }
  }
});
function bh({ t: c }) {
  return [
    {
      name: "main",
      title: c("menu.main"),
      list: [
        Yl,
        Vl,
        jl,
        $l,
        Ql,
        Gl,
        Kl,
        Xl,
        kl,
        Jl,
        Zl,
        es,
        ts,
        ns,
        rs,
        us,
        fs
      ]
    },
    {
      name: "aide",
      title: c("menu.aide"),
      list: [
        is,
        ss,
        os,
        _l
      ]
    },
    {
      name: "layout",
      title: c("menu.layout"),
      list: [
        ql,
        ls,
        as
      ]
    }
  ];
}
const Ss = id, Lt = id.factory();
let Md = null, Jf = Zi(null);
function gs(...c) {
  return Md(...c);
}
const Rd = (c) => {
  Jf.value = c;
  const A = Wl(Jf);
  return Md = A.t, A;
};
Rd();
const Ch = Pn({
  name: "FcDesigner",
  components: {
    draggable: xs,
    DragForm: Lt.$form(),
    ViewForm: Ss.$form()
  },
  props: ["menu", "height", "config", "mask", "locale"],
  setup(c) {
    const { menu: A, height: l, mask: o, locale: t } = Ul(c), s = Fv(), u = rl({ active: null });
    Ef("fcx", u), Ef("designer", s);
    const f = Qi(c, "config", {}), d = Qi(f.value, "baseRule", null), m = Qi(f.value, "componentRule", {}), T = Qi(f.value, "validateRule", null), S = Qi(f.value, "formRule", null), w = io(() => {
      const h = l.value;
      return h ? xt.Number(h) ? `${h}px` : h : "100%";
    });
    let b = gs;
    t.value && (b = Wl(t).t);
    const g = (...h) => b(...h), x = (h, E, ...C) => {
      if (E) {
        if (xt.Function(E))
          return E(...C);
        if (E.rule) {
          let R = E.rule(...C);
          return E.append && (R = [...R, ...h(...C)]), R;
        }
      }
      return h(...C);
    }, v = rl({
      cacheProps: {},
      moveRule: null,
      addRule: null,
      added: null,
      activeTab: "form",
      activeRule: null,
      children: Zi([]),
      menuList: A.value || bh({ t: g }),
      showBaseRule: !1,
      visible: {
        preview: !1
      },
      t: g,
      preview: {
        state: !1,
        rule: [],
        option: {}
      },
      dragForm: Zi({
        rule: [],
        api: {}
      }),
      form: {
        rule: x(bf, S.value, { t: g }),
        api: {},
        option: {
          form: {
            labelPosition: "top",
            size: "small"
          },
          submitBtn: !1
        },
        value: {
          form: {
            inline: !1,
            hideRequiredAsterisk: !1,
            labelPosition: "right",
            size: "small",
            labelWidth: "125px",
            formCreateSubmitBtn: !0,
            formCreateResetBtn: !1
          },
          submitBtn: !1
        }
      },
      baseForm: {
        rule: x(Gi, d.value, { t: g }),
        api: {},
        value: {},
        options: {
          form: {
            labelPosition: "top",
            size: "small"
          },
          submitBtn: !1,
          mounted: (h) => {
            h.activeRule = v.activeRule, h.setValue(h.options.formData || {});
          }
        }
      },
      validateForm: {
        rule: x(Cf, T.value, { t: g }),
        api: {},
        value: [],
        options: {
          form: {
            labelPosition: "top",
            size: "small"
          },
          submitBtn: !1,
          mounted: (h) => {
            h.activeRule = v.activeRule, h.setValue(h.options.formData || {});
          }
        }
      },
      propsForm: {
        rule: [],
        api: {},
        value: {},
        options: {
          form: {
            labelPosition: "top",
            size: "small"
          },
          submitBtn: !1,
          mounted: (h) => {
            h.activeRule = v.activeRule, h.setValue(h.options.formData || {});
          }
        }
      }
    });
    il(() => v.preview.state, function(h) {
      h || Fr(() => {
        v.preview.rule = v.preview.option = null;
      });
    });
    let M = null;
    il(() => t.value, (h) => {
      b = h ? Wl(t).t : gs;
      const E = v.form.api.formData && v.form.api.formData(), C = v.baseForm.api.formData && v.baseForm.api.formData(), R = v.validateForm.api.formData && v.validateForm.api.formData();
      v.validateForm.rule = x(Cf, T.value, { t: g }), v.baseForm.rule = x(Gi, d.value, { t: g }), v.form.rule = x(bf, S.value, { t: g }), v.cacheProps = {};
      const F = v.activeRule;
      let B = null;
      F && (B = v.propsForm.api.formData && v.propsForm.api.formData(), v.propsForm.rule = v.cacheProps[F._id] = x(F.config.config.props, m.value && m.value[F.config.config.name], F, {
        t: g,
        api: v.dragForm.api
      })), Fr(() => {
        E && v.form.api.setValue(E), C && v.baseForm.api.setValue(C), R && v.validateForm.api.setValue(R), B && v.propsForm.api.setValue(B);
      });
    });
    const y = {
      unWatchActiveRule() {
        M && M(), M = null;
      },
      watchActiveRule() {
        y.unWatchActiveRule(), M = il(() => v.activeRule, function(h) {
          h && y.updateRuleFormData();
        }, { deep: !0, flush: "post" });
      },
      makeChildren(h) {
        return rl({ children: h }).children;
      },
      addMenu(h) {
        if (!h.name || !h.list)
          return;
        let E = !0;
        v.menuList.forEach((C, R) => {
          C.name === h.name && (v.menuList[R] = h, E = !1);
        }), E && v.menuList.push(h);
      },
      removeMenu(h) {
        [...v.menuList].forEach((E, C) => {
          E.name === h && v.menuList.splice(C, 1);
        });
      },
      setMenuItem(h, E) {
        v.menuList.forEach((C) => {
          C.name === h && (C.list = E);
        });
      },
      appendMenuItem(h, E) {
        v.menuList.forEach((C) => {
          C.name === h && C.list.push(...Array.isArray(E) ? E : [E]);
        });
      },
      removeMenuItem(h) {
        v.menuList.forEach((E) => {
          let C;
          xt.String(h) ? [...E.list].forEach((R, F) => {
            R.name === h && E.list.splice(F, 1);
          }) : (C = E.list.indexOf(h)) > -1 && E.list.splice(C, 1);
        });
      },
      addComponent(h) {
        Array.isArray(h) ? h.forEach((E) => {
          cr[E.name] = E;
        }) : cr[h.name] = h;
      },
      getParent(h) {
        let E = h.__fc__.parent.rule;
        const C = E.config;
        return C && C.config.inside && (h = E, E = E.__fc__.parent.rule), { root: E, parent: h };
      },
      makeDrag(h, E, C, R) {
        return {
          type: "DragBox",
          wrap: {
            show: !1
          },
          col: {
            show: !1
          },
          inject: !0,
          props: {
            rule: {
              props: {
                tag: "el-col",
                group: h === !0 ? "default" : h,
                ghostClass: "ghost",
                animation: 150,
                handle: "._fc-drag-btn",
                emptyInsertThreshold: 0,
                direction: "vertical",
                itemKey: "type"
              }
            },
            tag: E
          },
          children: C,
          on: R
        };
      },
      clearDragRule() {
        y.setRule([]);
      },
      makeDragRule(h) {
        return y.makeChildren([y.makeDrag(!0, "draggable", h, {
          add: (E, C) => y.dragAdd(h, C),
          end: (E, C) => y.dragEnd(h, C),
          start: (E, C) => y.dragStart(h, C),
          unchoose: (E, C) => y.dragUnchoose(h, C)
        })]);
      },
      previewFc() {
        v.preview.state = !0, v.preview.rule = y.getRule(), v.preview.option = y.getOption();
      },
      getRule() {
        return y.parseRule(vr(v.dragForm.api.rule[0].children));
      },
      getJson() {
        return Lt.toJson(y.getRule());
      },
      getOption() {
        const h = vr(v.form.value);
        return h.submitBtn = h._submitBtn, h.resetBtn = h._resetBtn, typeof h.submitBtn == "object" ? h.submitBtn.show = h.form.formCreateSubmitBtn : h.submitBtn = {
          show: h.form.formCreateSubmitBtn,
          innerText: g("form.submit")
        }, typeof h.resetBtn == "object" ? h.resetBtn.show = h.form.formCreateResetBtn : h.resetBtn = {
          show: h.form.formCreateResetBtn,
          innerText: g("form.reset")
        }, delete h.form.formCreateSubmitBtn, delete h.form.formCreateResetBtn, delete h._submitBtn, delete h._resetBtn, h;
      },
      getOptions() {
        y.getOption();
      },
      setRule(h) {
        h || (h = []), v.children = Zi(y.loadRule(xt.String(h) ? Lt.parseJson(h) : vr(h))), y.clearActiveRule(), v.dragForm.rule = y.makeDragRule(y.makeChildren(v.children));
      },
      setBaseRuleConfig(h, E) {
        d.value = { rule: h, append: E }, v.baseForm.rule = x(Gi, d.value, { t: g });
      },
      setComponentRuleConfig(h, E, C) {
        m.value[h] = { rule: E, append: C }, v.cacheProps = {};
        const R = v.activeRule;
        if (R) {
          const F = v.propsForm.api.formData && v.propsForm.api.formData();
          v.propsForm.rule = v.cacheProps[R._id] = x(R.config.config.props, m.value && m.value[R.config.config.name], R, {
            t: g,
            api: v.dragForm.api
          }), Fr(() => {
            F && v.propsForm.api.setValue(F);
          });
        }
      },
      setValidateRuleConfig(h, E) {
        T.value = { rule: h, append: E }, v.validateForm.rule = x(Gi, T.value, { t: g });
      },
      setFormRuleConfig(h, E) {
        S.value = { rule: h, append: E }, v.form.rule = x(Gi, S.value, { t: g });
      },
      clearActiveRule() {
        v.activeRule = null, v.activeTab = "form";
      },
      setOption(h) {
        let E = { ...h };
        E.form.formCreateSubmitBtn = typeof E.submitBtn == "object" ? E.submitBtn.show === void 0 ? !0 : !!E.submitBtn.show : !!E.submitBtn, E.form.formCreateResetBtn = typeof E.resetBtn == "object" ? !!E.resetBtn.show : !!E.resetBtn, E._resetBtn = E.resetBtn, E.resetBtn = !1, E._submitBtn = E.submitBtn, E.submitBtn = !1, v.form.value = E;
      },
      setOptions(h) {
        y.setOption(h);
      },
      loadRule(h) {
        const E = [];
        return h.forEach((C) => {
          if (xt.String(C))
            return E.push(C);
          const R = cr[C._fc_drag_tag] || cr[C.type];
          R && R.loadRule && R.loadRule(C);
          const F = C.children;
          if (C.children = [], C.control && (C._control = C.control, delete C.control), R) {
            if (C = y.makeRule(R, C), F) {
              let B = C.children[0].children;
              R.drag && (B = B[0].children), B.push(...y.loadRule(F));
            }
          } else
            F && (C.children = y.loadRule(F));
          E.push(C);
        }), E;
      },
      parseRule(h) {
        return [...h].reduce((E, C) => xt.String(C) ? (E.push(C), E) : C.type === "DragBox" ? (E.push(...y.parseRule(C.children)), E) : C.type === "DragTool" && (C = C.children[0], C.type === "DragBox") ? (E.push(...y.parseRule(C.children)), E) : (C && (C = { ...C }, C.children.length && (C.children = y.parseRule(C.children)), delete C._id, delete C.key, delete C.component, C.config && (C.config.config && C.config.config.parseRule && C.config.config.parseRule(C), delete C.config.config), C.effect && (delete C.effect._fc, delete C.effect._fc_tool), C._control && (C.control = C._control, delete C._control), Object.keys(C).filter((R) => Array.isArray(C[R]) && C[R].length === 0 || xt.Object(C[R]) && Object.keys(C[R]).length === 0).forEach((R) => {
          delete C[R];
        }), E.push(C)), E), []);
      },
      baseChange(h, E, C, R) {
        var F, B, O;
        v.activeRule && R[v.activeRule._id] === v.activeRule && (y.unWatchActiveRule(), v.activeRule[h] = E, y.watchActiveRule(), (O = (B = (F = v.activeRule.config.config) == null ? void 0 : F.watch) == null ? void 0 : B["$" + h]) == null || O.call(B, {
          field: h,
          value: E,
          api: R,
          rule: v.activeRule
        }));
      },
      propRemoveField(h, E, C) {
        var R, F, B;
        if (v.activeRule && C[v.activeRule._id] === v.activeRule) {
          y.unWatchActiveRule();
          const O = h;
          if (v.dragForm.api.sync(v.activeRule), h.indexOf("formCreate") === 0) {
            if (h = h.replace("formCreate", ""), !h)
              return;
            h = zl(h), h.indexOf("effect") === 0 && h.indexOf(">") > -1 ? delete v.activeRule.effect[h.split(">")[1]] : h.indexOf("props") === 0 && h.indexOf(">") > -1 ? delete v.activeRule.props[h.split(">")[1]] : h.indexOf("attrs") === 0 && h.indexOf(">") > -1 ? delete v.activeRule.attrs[h.split(">")[1]] : h === "child" ? delete v.activeRule.children[0] : h && (v.activeRule[h] = void 0);
          } else
            delete v.activeRule.props[h];
          y.watchActiveRule(), (B = (F = (R = v.activeRule.config.config) == null ? void 0 : R.watch) == null ? void 0 : F[O]) == null || B.call(F, {
            field: O,
            value: void 0,
            api: C,
            rule: v.activeRule
          });
        }
      },
      propChange(h, E, C, R) {
        var F, B, O;
        if (v.activeRule && R[v.activeRule._id] === v.activeRule) {
          y.unWatchActiveRule();
          const z = h;
          if (h.indexOf("formCreate") === 0) {
            if (h = h.replace("formCreate", ""), !h)
              return;
            h = zl(h), h.indexOf("effect") === 0 && h.indexOf(">") > -1 ? v.activeRule.effect[h.split(">")[1]] = E : h.indexOf("props") === 0 && h.indexOf(">") > -1 ? v.activeRule.props[h.split(">")[1]] = E : h.indexOf("attrs") === 0 && h.indexOf(">") > -1 ? v.activeRule.attrs[h.split(">")[1]] = E : h === "child" ? v.activeRule.children[0] = E : v.activeRule[h] = E;
          } else
            v.activeRule.props[h] = E;
          y.watchActiveRule(), (O = (B = (F = v.activeRule.config.config) == null ? void 0 : F.watch) == null ? void 0 : B[z]) == null || O.call(B, {
            field: z,
            value: E,
            api: R,
            rule: v.activeRule
          });
        }
      },
      validateChange(h) {
        !v.activeRule || v.validateForm.api[v.activeRule._id] !== v.activeRule || (v.activeRule.validate = h.validate || [], v.dragForm.api.refreshValidate(), v.dragForm.api.nextTick(() => {
          v.dragForm.api.clearValidateState(v.activeRule.__fc__.id);
        }));
      },
      toolActive(h) {
        y.unWatchActiveRule(), v.activeRule && (delete v.propsForm.api[v.activeRule._id], delete v.baseForm.api[v.activeRule._id], delete v.validateForm.api[v.activeRule._id], delete v.dragForm.api.activeRule), v.activeRule = h, v.dragForm.api.activeRule = h, Fr(() => {
          v.activeTab = "props", Fr(() => {
            v.propsForm.api[v.activeRule._id] = v.activeRule, v.baseForm.api[v.activeRule._id] = v.activeRule, v.validateForm.api[v.activeRule._id] = v.activeRule;
          });
        }), v.cacheProps[h._id] || (v.cacheProps[h._id] = x(h.config.config.props, m.value && m.value[h.config.config.name], h, {
          t: g,
          api: v.dragForm.api
        })), v.propsForm.rule = v.cacheProps[h._id], y.updateRuleFormData(), y.watchActiveRule();
      },
      updateRuleFormData() {
        const h = v.activeRule, E = { ...h.props, formCreateChild: vr(h.children[0]) };
        Object.keys(h).forEach((C) => {
          ["effect", "config", "payload", "id", "type"].indexOf(C) < 0 && (E["formCreate" + oo(C)] = vr(h[C]));
        }), ["props", "effect", "attrs"].forEach((C) => {
          h[C] && Object.keys(h[C]).forEach((R) => {
            E["formCreate" + oo(C) + ">" + R] = vr(h[C][R]);
          });
        }), v.propsForm.value = E, v.showBaseRule = od(h, "field") && h.input !== !1 && (!f.value || f.value.showBaseForm !== !1), v.showBaseRule && (v.baseForm.value = {
          field: h.field,
          title: h.title || "",
          info: h.info,
          _control: h._control
        }, v.validateForm.value = { validate: h.validate ? [...h.validate] : [] }, v.dragForm.api.refreshValidate(), v.dragForm.api.nextTick(() => {
          v.dragForm.api.clearValidateState(h.__fc__.id);
        }));
      },
      dragStart(h) {
        v.moveRule = h, v.added = !1;
      },
      dragUnchoose(h, E) {
        v.addRule = {
          children: h,
          oldIndex: E.oldIndex
        };
      },
      dragAdd(h, E) {
        const C = E.newIndex, R = E.item._underlying_vm_;
        if (!R || R.__fc__) {
          if (v.addRule) {
            const F = v.addRule.children.splice(v.addRule.oldIndex, 1);
            h.splice(C, 0, F[0]);
          }
        } else {
          const F = y.makeRule(cr[R.name]);
          h.splice(C, 0, F);
        }
        v.added = !0;
      },
      dragEnd(h, { newIndex: E, oldIndex: C }) {
        if (!v.added && !(v.moveRule === h && E === C)) {
          const R = v.moveRule.splice(C, 1);
          h.splice(E, 0, R[0]);
        }
        v.moveRule = null, v.addRule = null, v.added = !1;
      },
      makeRule(h, E) {
        const C = E || h.rule({ t: g });
        C.config = { config: h }, h.component && (C.component = _f(h.component)), C.effect || (C.effect = {}), C.effect._fc = !0, C._fc_drag_tag = h.name;
        let R;
        if (h.drag && C.children.push(R = y.makeDrag(h.drag, C.type, y.makeChildren([]), {
          end: (B, O) => y.dragEnd(B.self.children, O),
          add: (B, O) => y.dragAdd(B.self.children, O),
          start: (B, O) => y.dragStart(B.self.children, O),
          unchoose: (B, O) => y.dragUnchoose(B.self.children, O)
        })), h.children && !E)
          for (let B = 0; B < (h.childrenLen || 1); B++) {
            const O = y.makeRule(cr[h.children]);
            (R || C).children.push(O);
          }
        const F = o.value !== void 0 ? o.value !== !1 : h.mask !== !1;
        return h.inside ? (C.children = y.makeChildren([{
          type: "DragTool",
          props: {
            dragBtn: h.dragBtn !== !1,
            children: h.children,
            mask: F
          },
          effect: {
            _fc_tool: !0
          },
          inject: !0,
          on: {
            delete: ({ self: B }) => {
              const O = y.getParent(B).parent;
              O.__fc__.rm(), s.emit("delete", O), y.clearActiveRule();
            },
            create: ({ self: B }) => {
              const O = y.getParent(B);
              s.emit("create", O.parent), O.root.children.splice(O.root.children.indexOf(O.parent) + 1, 0, y.makeRule(O.parent.config.config));
            },
            addChild: ({ self: B }) => {
              const O = y.getParent(B), z = O.parent.config.config, I = cr[z.children];
              !I || (z.drag ? O.parent.children[0] : O.parent).children[0].children.push(y.makeRule(I));
            },
            copy: ({ self: B }) => {
              const O = y.getParent(B);
              s.emit("copy", O.parent), O.root.children.splice(O.root.children.indexOf(O.parent) + 1, 0, Lt.copyRule(O.parent));
            },
            active: ({ self: B }) => {
              const O = y.getParent(B);
              s.emit("active", O.parent), y.toolActive(O.parent);
            }
          },
          children: C.children
        }]), C) : {
          type: "DragTool",
          props: {
            dragBtn: h.dragBtn !== !1,
            children: h.children,
            mask: F
          },
          effect: {
            _fc_tool: !0
          },
          inject: !0,
          on: {
            delete: ({ self: B }) => {
              s.emit("delete", B.children[0]), B.__fc__.rm(), y.clearActiveRule();
            },
            create: ({ self: B }) => {
              s.emit("create", B.children[0]);
              const O = y.getParent(B);
              O.root.children.splice(O.root.children.indexOf(O.parent) + 1, 0, y.makeRule(B.children[0].config.config));
            },
            addChild: ({ self: B }) => {
              const O = B.children[0].config.config, z = cr[O.children];
              !z || (O.drag ? B.children[0] : B).children[0].children.push(y.makeRule(z));
            },
            copy: ({ self: B }) => {
              s.emit("copy", B.children[0]);
              const O = y.getParent(B);
              O.root.children.splice(O.root.children.indexOf(O.parent) + 1, 0, Lt.copyRule(O.parent));
            },
            active: ({ self: B }) => {
              s.emit("active", B.children[0]), y.toolActive(B.children[0]);
            }
          },
          children: y.makeChildren([C])
        };
      }
    };
    return v.dragForm.rule = y.makeDragRule(y.makeChildren(v.children)), {
      ...Ul(v),
      ...y,
      dragHeight: w,
      t: g
    };
  },
  created() {
    document.body.ondrop = (c) => {
      c.preventDefault(), c.stopPropagation();
    };
  }
}), Th = { class: "_fc-l-title" }, wh = { class: "_fc-l-item" }, Dh = { class: "_fc-l-icon" }, Mh = { class: "_fc-l-name" }, Rh = /* @__PURE__ */ ft("i", { class: "fc-icon icon-preview" }, null, -1), Ph = /* @__PURE__ */ ft("i", { class: "fc-icon icon-delete" }, null, -1), Ih = { class: "_fc-m-drag" };
function Lh(c, A, l, o, t, s) {
  const u = ut("draggable"), f = ut("el-aside"), d = ut("el-button"), m = ut("el-popconfirm"), T = ut("el-header"), S = ut("DragForm"), w = ut("ElMain"), b = ut("ElContainer"), g = ut("ElDivider"), x = ut("ElAside"), v = ut("ViewForm"), M = ut("ElDialog");
  return tt(), Hn(b, {
    class: "_fc-designer",
    style: Ov("height:" + c.dragHeight)
  }, {
    default: qe(() => [
      Je(w, null, {
        default: qe(() => [
          Je(b, { style: { height: "100%" } }, {
            default: qe(() => [
              Je(f, {
                class: "_fc-l",
                width: "266px"
              }, {
                default: qe(() => [
                  (tt(!0), Gt(td, null, nd(c.menuList, (y, h) => (tt(), Gt("div", {
                    key: h,
                    class: "_fc-l-group"
                  }, [
                    ft("h4", Th, on(y.title), 1),
                    Je(u, {
                      group: { name: "default", pull: "clone", put: !1 },
                      sort: !1,
                      itemKey: "name",
                      list: y.list
                    }, {
                      item: qe(({ element: E }) => [
                        ft("div", wh, [
                          ft("div", Dh, [
                            ft("i", {
                              class: Xo(["fc-icon", E.icon || "icon-input"])
                            }, null, 2)
                          ]),
                          ft("span", Mh, on(c.t("components." + E.name + ".name") || E.label), 1)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["list"])
                  ]))), 128))
                ]),
                _: 1
              }),
              Je(b, { class: "_fc-m" }, {
                default: qe(() => [
                  Je(T, {
                    class: "_fc-m-tools",
                    height: "45"
                  }, {
                    default: qe(() => [
                      rd(c.$slots, "handle"),
                      Je(d, {
                        type: "primary",
                        plain: "",
                        round: "",
                        size: "small",
                        onClick: c.previewFc
                      }, {
                        default: qe(() => [
                          Rh,
                          Kn(" " + on(c.t("designer.preview")), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      Je(m, {
                        title: c.t("designer.clearConfirmTitle"),
                        width: "200px",
                        "confirm-button-text": c.t("designer.clearConfirm"),
                        "cancel-button-text": c.t("designer.clearCancel"),
                        onConfirm: c.clearDragRule
                      }, {
                        reference: qe(() => [
                          Je(d, {
                            type: "danger",
                            plain: "",
                            round: "",
                            size: "small"
                          }, {
                            default: qe(() => [
                              Ph,
                              Kn(on(c.t("designer.clear")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["title", "confirm-button-text", "cancel-button-text", "onConfirm"])
                    ]),
                    _: 3
                  }),
                  Je(w, { style: { background: "#F5F5F5", padding: "20px" } }, {
                    default: qe(() => [
                      ft("div", Ih, [
                        Je(S, {
                          rule: c.dragForm.rule,
                          option: c.form.value,
                          api: c.dragForm.api,
                          "onUpdate:api": A[0] || (A[0] = (y) => c.dragForm.api = y)
                        }, null, 8, ["rule", "option", "api"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 3
              }),
              !c.config || c.config.showConfig !== !1 ? (tt(), Hn(x, {
                key: 0,
                class: "_fc-r",
                width: "320px"
              }, {
                default: qe(() => [
                  Je(b, { style: { height: "100%" } }, {
                    default: qe(() => [
                      Je(T, {
                        height: "40px",
                        class: "_fc-r-tabs"
                      }, {
                        default: qe(() => [
                          !!c.activeRule || c.config && c.config.showFormConfig === !1 ? (tt(), Gt("div", {
                            key: 0,
                            class: Xo(["_fc-r-tab", { active: c.activeTab === "props" }]),
                            onClick: A[1] || (A[1] = (y) => c.activeTab = "props")
                          }, on(c.t("designer.config.component")), 3)) : vn("", !0),
                          !c.config || c.config.showFormConfig !== !1 ? (tt(), Gt("div", {
                            key: 1,
                            class: Xo(["_fc-r-tab", { active: c.activeTab === "form" && !!c.activeRule }]),
                            onClick: A[2] || (A[2] = (y) => c.activeTab = "form")
                          }, on(c.t("designer.config.form")), 3)) : vn("", !0)
                        ]),
                        _: 1
                      }),
                      !c.config || c.config.showFormConfig !== !1 ? jo((tt(), Hn(w, { key: 0 }, {
                        default: qe(() => [
                          Je(S, {
                            rule: c.form.rule,
                            option: c.form.option,
                            modelValue: c.form.value.form,
                            "onUpdate:modelValue": A[3] || (A[3] = (y) => c.form.value.form = y),
                            api: c.form.api,
                            "onUpdate:api": A[4] || (A[4] = (y) => c.form.api = y)
                          }, null, 8, ["rule", "option", "modelValue", "api"])
                        ]),
                        _: 1
                      }, 512)), [
                        [$o, c.activeTab === "form"]
                      ]) : vn("", !0),
                      jo((tt(), Hn(w, {
                        style: { padding: "0 20px" },
                        key: c.activeRule ? c.activeRule._id : ""
                      }, {
                        default: qe(() => [
                          ft("div", null, [
                            c.showBaseRule ? (tt(), Hn(g, { key: 0 }, {
                              default: qe(() => [
                                Kn(on(c.t("designer.config.rule")), 1)
                              ]),
                              _: 1
                            })) : vn("", !0),
                            jo(Je(S, {
                              api: c.baseForm.api,
                              "onUpdate:api": A[5] || (A[5] = (y) => c.baseForm.api = y),
                              rule: c.baseForm.rule,
                              option: c.baseForm.options,
                              modelValue: c.baseForm.value,
                              onChange: c.baseChange
                            }, null, 8, ["api", "rule", "option", "modelValue", "onChange"]), [
                              [$o, c.showBaseRule]
                            ]),
                            Je(g, null, {
                              default: qe(() => [
                                Kn(on(c.t("designer.config.props")), 1)
                              ]),
                              _: 1
                            }),
                            Je(S, {
                              api: c.propsForm.api,
                              "onUpdate:api": A[6] || (A[6] = (y) => c.propsForm.api = y),
                              rule: c.propsForm.rule,
                              option: c.propsForm.options,
                              modelValue: c.propsForm.value,
                              onChange: c.propChange,
                              onRemoveField: c.propRemoveField
                            }, null, 8, ["api", "rule", "option", "modelValue", "onChange", "onRemoveField"]),
                            c.showBaseRule ? (tt(), Hn(g, { key: 1 }, {
                              default: qe(() => [
                                Kn(on(c.t("designer.config.validate")), 1)
                              ]),
                              _: 1
                            })) : vn("", !0),
                            jo(Je(S, {
                              api: c.validateForm.api,
                              "onUpdate:api": A[7] || (A[7] = (y) => c.validateForm.api = y),
                              rule: c.validateForm.rule,
                              option: c.validateForm.options,
                              modelValue: c.validateForm.value,
                              "onUpdate:modelValue": c.validateChange
                            }, null, 8, ["api", "rule", "option", "modelValue", "onUpdate:modelValue"]), [
                              [$o, c.showBaseRule]
                            ])
                          ])
                        ]),
                        _: 1
                      })), [
                        [$o, c.activeTab === "props"]
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : vn("", !0),
              Je(M, {
                modelValue: c.preview.state,
                "onUpdate:modelValue": A[8] || (A[8] = (y) => c.preview.state = y),
                width: "800px",
                "append-to-body": ""
              }, {
                default: qe(() => [
                  c.preview.state ? (tt(), Hn(v, {
                    key: 0,
                    rule: c.preview.rule,
                    option: c.preview.option
                  }, null, 8, ["rule", "option"])) : vn("", !0)
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            _: 3
          })
        ]),
        _: 3
      })
    ]),
    _: 3
  }, 8, ["style"]);
}
const yr = /* @__PURE__ */ mr(Ch, [["render", Lh]]);
let Nh = 1;
const Fh = Pn({
  name: "DragTool",
  props: ["dragBtn", "children", "unique", "mask"],
  setup(c) {
    const { unique: A } = Ul(c), l = io(() => A.value || Nh++), o = Bv("fcx");
    return {
      id: l,
      state: o
    };
  },
  methods: {
    active() {
      this.state.active !== this.id && (this.state.active = this.id, this.$emit("active"));
    }
  },
  beforeDestroy() {
    this.state = {};
  }
}), Oh = {
  key: 0,
  class: "drag-mask"
}, Bh = { class: "drag-l" }, Hh = {
  key: 0,
  class: "drag-btn _fc-drag-btn",
  style: { cursor: "move" }
}, Uh = /* @__PURE__ */ ft("i", { class: "fc-icon icon-move" }, null, -1), zh = [
  Uh
], Wh = { class: "drag-r" }, jh = /* @__PURE__ */ ft("i", { class: "fc-icon icon-add" }, null, -1), $h = [
  jh
], Yh = /* @__PURE__ */ ft("i", { class: "fc-icon icon-copy" }, null, -1), Vh = [
  Yh
], Qh = /* @__PURE__ */ ft("i", { class: "fc-icon icon-add-child" }, null, -1), Gh = [
  Qh
], kh = /* @__PURE__ */ ft("i", { class: "fc-icon icon-delete" }, null, -1), Kh = [
  kh
];
function Xh(c, A, l, o, t, s) {
  return tt(), Gt("div", {
    class: Xo(["drag-tool", { active: c.state.active === c.id }]),
    onClick: A[4] || (A[4] = Hv((...u) => c.active && c.active(...u), ["stop"]))
  }, [
    c.mask ? (tt(), Gt("div", Oh)) : vn("", !0),
    ft("div", Bh, [
      c.state.active === c.id && c.dragBtn !== !1 ? (tt(), Gt("div", Hh, zh)) : vn("", !0)
    ]),
    ft("div", Wh, [
      ft("div", {
        class: "drag-btn",
        onClick: A[0] || (A[0] = (u) => c.$emit("create"))
      }, $h),
      ft("div", {
        class: "drag-btn",
        onClick: A[1] || (A[1] = (u) => c.$emit("copy"))
      }, Vh),
      c.children ? (tt(), Gt("div", {
        key: 0,
        class: "drag-btn",
        onClick: A[2] || (A[2] = (u) => c.$emit("addChild"))
      }, Gh)) : vn("", !0),
      ft("div", {
        class: "drag-btn drag-btn-danger",
        onClick: A[3] || (A[3] = (u) => c.$emit("delete"))
      }, Kh)
    ]),
    rd(c.$slots, "default")
  ], 2);
}
const Jh = /* @__PURE__ */ mr(Fh, [["render", Xh]]);
var Zh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Hl = { exports: {} }, Zf;
function Pd() {
  return Zf || (Zf = 1, function(c, A) {
    (function(l, o) {
      c.exports = o();
    })(Zh, function() {
      var l = navigator.userAgent, o = navigator.platform, t = /gecko\/\d/i.test(l), s = /MSIE \d/.test(l), u = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(l), f = /Edge\/(\d+)/.exec(l), d = s || u || f, m = d && (s ? document.documentMode || 6 : +(f || u)[1]), T = !f && /WebKit\//.test(l), S = T && /Qt\/\d+\.\d+/.test(l), w = !f && /Chrome\/(\d+)/.exec(l), b = w && +w[1], g = /Opera\//.test(l), x = /Apple Computer/.test(navigator.vendor), v = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(l), M = /PhantomJS/.test(l), y = x && (/Mobile\/\w+/.test(l) || navigator.maxTouchPoints > 2), h = /Android/.test(l), E = y || h || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(l), C = y || /Mac/.test(o), R = /\bCrOS\b/.test(l), F = /win/i.test(o), B = g && l.match(/Version\/(\d*\.\d*)/);
      B && (B = Number(B[1])), B && B >= 15 && (g = !1, T = !0);
      var O = C && (S || g && (B == null || B < 12.11)), z = t || d && m >= 9;
      function I(e) {
        return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
      }
      var U = function(e, n) {
        var i = e.className, r = I(n).exec(i);
        if (r) {
          var a = i.slice(r.index + r[0].length);
          e.className = i.slice(0, r.index) + (a ? r[1] + a : "");
        }
      };
      function H(e) {
        for (var n = e.childNodes.length; n > 0; --n)
          e.removeChild(e.firstChild);
        return e;
      }
      function $(e, n) {
        return H(e).appendChild(n);
      }
      function P(e, n, i, r) {
        var a = document.createElement(e);
        if (i && (a.className = i), r && (a.style.cssText = r), typeof n == "string")
          a.appendChild(document.createTextNode(n));
        else if (n)
          for (var p = 0; p < n.length; ++p)
            a.appendChild(n[p]);
        return a;
      }
      function Y(e, n, i, r) {
        var a = P(e, n, i, r);
        return a.setAttribute("role", "presentation"), a;
      }
      var Q;
      document.createRange ? Q = function(e, n, i, r) {
        var a = document.createRange();
        return a.setEnd(r || e, i), a.setStart(e, n), a;
      } : Q = function(e, n, i) {
        var r = document.body.createTextRange();
        try {
          r.moveToElementText(e.parentNode);
        } catch {
          return r;
        }
        return r.collapse(!0), r.moveEnd("character", i), r.moveStart("character", n), r;
      };
      function K(e, n) {
        if (n.nodeType == 3 && (n = n.parentNode), e.contains)
          return e.contains(n);
        do
          if (n.nodeType == 11 && (n = n.host), n == e)
            return !0;
        while (n = n.parentNode);
      }
      function q(e) {
        var n = e.ownerDocument || e, i;
        try {
          i = e.activeElement;
        } catch {
          i = n.body || null;
        }
        for (; i && i.shadowRoot && i.shadowRoot.activeElement; )
          i = i.shadowRoot.activeElement;
        return i;
      }
      function X(e, n) {
        var i = e.className;
        I(n).test(i) || (e.className += (i ? " " : "") + n);
      }
      function _(e, n) {
        for (var i = e.split(" "), r = 0; r < i.length; r++)
          i[r] && !I(i[r]).test(n) && (n += " " + i[r]);
        return n;
      }
      var le = function(e) {
        e.select();
      };
      y ? le = function(e) {
        e.selectionStart = 0, e.selectionEnd = e.value.length;
      } : d && (le = function(e) {
        try {
          e.select();
        } catch {
        }
      });
      function Se(e) {
        return e.display.wrapper.ownerDocument;
      }
      function ve(e) {
        return ce(e.display.wrapper);
      }
      function ce(e) {
        return e.getRootNode ? e.getRootNode() : e.ownerDocument;
      }
      function ae(e) {
        return Se(e).defaultView;
      }
      function re(e) {
        var n = Array.prototype.slice.call(arguments, 1);
        return function() {
          return e.apply(null, n);
        };
      }
      function se(e, n, i) {
        n || (n = {});
        for (var r in e)
          e.hasOwnProperty(r) && (i !== !1 || !n.hasOwnProperty(r)) && (n[r] = e[r]);
        return n;
      }
      function pe(e, n, i, r, a) {
        n == null && (n = e.search(/[^\s\u00a0]/), n == -1 && (n = e.length));
        for (var p = r || 0, D = a || 0; ; ) {
          var L = e.indexOf("	", p);
          if (L < 0 || L >= n)
            return D + (n - p);
          D += L - p, D += i - D % i, p = L + 1;
        }
      }
      var Pe = function() {
        this.id = null, this.f = null, this.time = 0, this.handler = re(this.onTimeout, this);
      };
      Pe.prototype.onTimeout = function(e) {
        e.id = 0, e.time <= +new Date() ? e.f() : setTimeout(e.handler, e.time - +new Date());
      }, Pe.prototype.set = function(e, n) {
        this.f = n;
        var i = +new Date() + e;
        (!this.id || i < this.time) && (clearTimeout(this.id), this.id = setTimeout(this.handler, e), this.time = i);
      };
      function be(e, n) {
        for (var i = 0; i < e.length; ++i)
          if (e[i] == n)
            return i;
        return -1;
      }
      var je = 50, Ot = { toString: function() {
        return "CodeMirror.Pass";
      } }, Nt = { scroll: !1 }, ot = { origin: "*mouse" }, Et = { origin: "+move" };
      function Bt(e, n, i) {
        for (var r = 0, a = 0; ; ) {
          var p = e.indexOf("	", r);
          p == -1 && (p = e.length);
          var D = p - r;
          if (p == e.length || a + D >= n)
            return r + Math.min(D, n - a);
          if (a += p - r, a += i - a % i, r = p + 1, a >= n)
            return r;
        }
      }
      var dt = [""];
      function Kt(e) {
        for (; dt.length <= e; )
          dt.push(Ue(dt) + " ");
        return dt[e];
      }
      function Ue(e) {
        return e[e.length - 1];
      }
      function Ht(e, n) {
        for (var i = [], r = 0; r < e.length; r++)
          i[r] = n(e[r], r);
        return i;
      }
      function Ar(e, n, i) {
        for (var r = 0, a = i(n); r < e.length && i(e[r]) <= a; )
          r++;
        e.splice(r, 0, n);
      }
      function yn() {
      }
      function hn(e, n) {
        var i;
        return Object.create ? i = Object.create(e) : (yn.prototype = e, i = new yn()), n && se(n, i), i;
      }
      var In = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
      function An(e) {
        return /\w/.test(e) || e > "\x80" && (e.toUpperCase() != e.toLowerCase() || In.test(e));
      }
      function jt(e, n) {
        return n ? n.source.indexOf("\\w") > -1 && An(e) ? !0 : n.test(e) : An(e);
      }
      function xn(e) {
        for (var n in e)
          if (e.hasOwnProperty(n) && e[n])
            return !1;
        return !0;
      }
      var bt = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
      function Ke(e) {
        return e.charCodeAt(0) >= 768 && bt.test(e);
      }
      function Xt(e, n, i) {
        for (; (i < 0 ? n > 0 : n < e.length) && Ke(e.charAt(n)); )
          n += i;
        return n;
      }
      function We(e, n, i) {
        for (var r = n > i ? -1 : 1; ; ) {
          if (n == i)
            return n;
          var a = (n + i) / 2, p = r < 0 ? Math.ceil(a) : Math.floor(a);
          if (p == n)
            return e(p) ? n : i;
          e(p) ? i = p : n = p + r;
        }
      }
      function Ce(e, n, i, r) {
        if (!e)
          return r(n, i, "ltr", 0);
        for (var a = !1, p = 0; p < e.length; ++p) {
          var D = e[p];
          (D.from < i && D.to > n || n == i && D.to == n) && (r(Math.max(D.from, n), Math.min(D.to, i), D.level == 1 ? "rtl" : "ltr", p), a = !0);
        }
        a || r(n, i, "ltr");
      }
      var me = null;
      function Fe(e, n, i) {
        var r;
        me = null;
        for (var a = 0; a < e.length; ++a) {
          var p = e[a];
          if (p.from < n && p.to > n)
            return a;
          p.to == n && (p.from != p.to && i == "before" ? r = a : me = a), p.from == n && (p.from != p.to && i != "before" ? r = a : me = a);
        }
        return r != null ? r : me;
      }
      var Ee = function() {
        var e = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN", n = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
        function i(W) {
          return W <= 247 ? e.charAt(W) : 1424 <= W && W <= 1524 ? "R" : 1536 <= W && W <= 1785 ? n.charAt(W - 1536) : 1774 <= W && W <= 2220 ? "r" : 8192 <= W && W <= 8203 ? "w" : W == 8204 ? "b" : "L";
        }
        var r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, a = /[stwN]/, p = /[LRr]/, D = /[Lb1n]/, L = /[1n]/;
        function N(W, V, k) {
          this.level = W, this.from = V, this.to = k;
        }
        return function(W, V) {
          var k = V == "ltr" ? "L" : "R";
          if (W.length == 0 || V == "ltr" && !r.test(W))
            return !1;
          for (var Z = W.length, J = [], te = 0; te < Z; ++te)
            J.push(i(W.charCodeAt(te)));
          for (var ie = 0, de = k; ie < Z; ++ie) {
            var he = J[ie];
            he == "m" ? J[ie] = de : de = he;
          }
          for (var xe = 0, ge = k; xe < Z; ++xe) {
            var Te = J[xe];
            Te == "1" && ge == "r" ? J[xe] = "n" : p.test(Te) && (ge = Te, Te == "r" && (J[xe] = "R"));
          }
          for (var Re = 1, Me = J[0]; Re < Z - 1; ++Re) {
            var Be = J[Re];
            Be == "+" && Me == "1" && J[Re + 1] == "1" ? J[Re] = "1" : Be == "," && Me == J[Re + 1] && (Me == "1" || Me == "n") && (J[Re] = Me), Me = Be;
          }
          for (var _e = 0; _e < Z; ++_e) {
            var Mt = J[_e];
            if (Mt == ",")
              J[_e] = "N";
            else if (Mt == "%") {
              var rt = void 0;
              for (rt = _e + 1; rt < Z && J[rt] == "%"; ++rt)
                ;
              for (var ln = _e && J[_e - 1] == "!" || rt < Z && J[rt] == "1" ? "1" : "N", en = _e; en < rt; ++en)
                J[en] = ln;
              _e = rt - 1;
            }
          }
          for (var ht = 0, tn = k; ht < Z; ++ht) {
            var Ft = J[ht];
            tn == "L" && Ft == "1" ? J[ht] = "L" : p.test(Ft) && (tn = Ft);
          }
          for (var yt = 0; yt < Z; ++yt)
            if (a.test(J[yt])) {
              var gt = void 0;
              for (gt = yt + 1; gt < Z && a.test(J[gt]); ++gt)
                ;
              for (var st = (yt ? J[yt - 1] : k) == "L", nn = (gt < Z ? J[gt] : k) == "L", oi = st == nn ? st ? "L" : "R" : k, dr = yt; dr < gt; ++dr)
                J[dr] = oi;
              yt = gt - 1;
            }
          for (var zt = [], Bn, Rt = 0; Rt < Z; )
            if (D.test(J[Rt])) {
              var tl = Rt;
              for (++Rt; Rt < Z && D.test(J[Rt]); ++Rt)
                ;
              zt.push(new N(0, tl, Rt));
            } else {
              var kn = Rt, Rr = zt.length, Pr = V == "rtl" ? 1 : 0;
              for (++Rt; Rt < Z && J[Rt] != "L"; ++Rt)
                ;
              for (var Vt = kn; Vt < Rt; )
                if (L.test(J[Vt])) {
                  kn < Vt && (zt.splice(Rr, 0, new N(1, kn, Vt)), Rr += Pr);
                  var ai = Vt;
                  for (++Vt; Vt < Rt && L.test(J[Vt]); ++Vt)
                    ;
                  zt.splice(Rr, 0, new N(2, ai, Vt)), Rr += Pr, kn = Vt;
                } else
                  ++Vt;
              kn < Rt && zt.splice(Rr, 0, new N(1, kn, Rt));
            }
          return V == "ltr" && (zt[0].level == 1 && (Bn = W.match(/^\s+/)) && (zt[0].from = Bn[0].length, zt.unshift(new N(0, 0, Bn[0].length))), Ue(zt).level == 1 && (Bn = W.match(/\s+$/)) && (Ue(zt).to -= Bn[0].length, zt.push(new N(0, Z - Bn[0].length, Z)))), V == "rtl" ? zt.reverse() : zt;
        };
      }();
      function oe(e, n) {
        var i = e.order;
        return i == null && (i = e.order = Ee(e.text, n)), i;
      }
      var De = [], ue = function(e, n, i) {
        if (e.addEventListener)
          e.addEventListener(n, i, !1);
        else if (e.attachEvent)
          e.attachEvent("on" + n, i);
        else {
          var r = e._handlers || (e._handlers = {});
          r[n] = (r[n] || De).concat(i);
        }
      };
      function Ie(e, n) {
        return e._handlers && e._handlers[n] || De;
      }
      function ze(e, n, i) {
        if (e.removeEventListener)
          e.removeEventListener(n, i, !1);
        else if (e.detachEvent)
          e.detachEvent("on" + n, i);
        else {
          var r = e._handlers, a = r && r[n];
          if (a) {
            var p = be(a, i);
            p > -1 && (r[n] = a.slice(0, p).concat(a.slice(p + 1)));
          }
        }
      }
      function $e(e, n) {
        var i = Ie(e, n);
        if (!!i.length)
          for (var r = Array.prototype.slice.call(arguments, 2), a = 0; a < i.length; ++a)
            i[a].apply(null, r);
      }
      function Ge(e, n, i) {
        return typeof n == "string" && (n = { type: n, preventDefault: function() {
          this.defaultPrevented = !0;
        } }), $e(e, i || n.type, e, n), Jt(n) || n.codemirrorIgnore;
      }
      function at(e) {
        var n = e._handlers && e._handlers.cursorActivity;
        if (!!n)
          for (var i = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < n.length; ++r)
            be(i, n[r]) == -1 && i.push(n[r]);
      }
      function Ze(e, n) {
        return Ie(e, n).length > 0;
      }
      function $t(e) {
        e.prototype.on = function(n, i) {
          ue(this, n, i);
        }, e.prototype.off = function(n, i) {
          ze(this, n, i);
        };
      }
      function mt(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1;
      }
      function qn(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
      }
      function Jt(e) {
        return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == !1;
      }
      function _n(e) {
        mt(e), qn(e);
      }
      function pi(e) {
        return e.target || e.srcElement;
      }
      function Sn(e) {
        var n = e.which;
        return n == null && (e.button & 1 ? n = 1 : e.button & 2 ? n = 3 : e.button & 4 && (n = 2)), C && e.ctrlKey && n == 1 && (n = 3), n;
      }
      var sa = function() {
        if (d && m < 9)
          return !1;
        var e = P("div");
        return "draggable" in e || "dragDrop" in e;
      }(), Or;
      function so(e) {
        if (Or == null) {
          var n = P("span", "\u200B");
          $(e, P("span", [n, document.createTextNode("x")])), e.firstChild.offsetHeight != 0 && (Or = n.offsetWidth <= 1 && n.offsetHeight > 2 && !(d && m < 8));
        }
        var i = Or ? P("span", "\u200B") : P("span", "\xA0", null, "display: inline-block; width: 1px; margin-right: -1px");
        return i.setAttribute("cm-text", ""), i;
      }
      var hi;
      function er(e) {
        if (hi != null)
          return hi;
        var n = $(e, document.createTextNode("A\u062EA")), i = Q(n, 0, 1).getBoundingClientRect(), r = Q(n, 1, 2).getBoundingClientRect();
        return H(e), !i || i.left == i.right ? !1 : hi = r.right - i.right < 3;
      }
      var gn = `

b`.split(/\n/).length != 3 ? function(e) {
        for (var n = 0, i = [], r = e.length; n <= r; ) {
          var a = e.indexOf(`
`, n);
          a == -1 && (a = e.length);
          var p = e.slice(n, e.charAt(a - 1) == "\r" ? a - 1 : a), D = p.indexOf("\r");
          D != -1 ? (i.push(p.slice(0, D)), n += D + 1) : (i.push(p), n = a + 1);
        }
        return i;
      } : function(e) {
        return e.split(/\r\n?|\n/);
      }, tr = window.getSelection ? function(e) {
        try {
          return e.selectionStart != e.selectionEnd;
        } catch {
          return !1;
        }
      } : function(e) {
        var n;
        try {
          n = e.ownerDocument.selection.createRange();
        } catch {
        }
        return !n || n.parentElement() != e ? !1 : n.compareEndPoints("StartToEnd", n) != 0;
      }, uo = function() {
        var e = P("div");
        return "oncopy" in e ? !0 : (e.setAttribute("oncopy", "return;"), typeof e.oncopy == "function");
      }(), En = null;
      function ua(e) {
        if (En != null)
          return En;
        var n = $(e, P("span", "x")), i = n.getBoundingClientRect(), r = Q(n, 0, 1).getBoundingClientRect();
        return En = Math.abs(i.left - r.left) > 1;
      }
      var Br = {}, bn = {};
      function Cn(e, n) {
        arguments.length > 2 && (n.dependencies = Array.prototype.slice.call(arguments, 2)), Br[e] = n;
      }
      function xr(e, n) {
        bn[e] = n;
      }
      function Hr(e) {
        if (typeof e == "string" && bn.hasOwnProperty(e))
          e = bn[e];
        else if (e && typeof e.name == "string" && bn.hasOwnProperty(e.name)) {
          var n = bn[e.name];
          typeof n == "string" && (n = { name: n }), e = hn(n, e), e.name = n.name;
        } else {
          if (typeof e == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
            return Hr("application/xml");
          if (typeof e == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
            return Hr("application/json");
        }
        return typeof e == "string" ? { name: e } : e || { name: "null" };
      }
      function Ur(e, n) {
        n = Hr(n);
        var i = Br[n.name];
        if (!i)
          return Ur(e, "text/plain");
        var r = i(e, n);
        if (nr.hasOwnProperty(n.name)) {
          var a = nr[n.name];
          for (var p in a)
            !a.hasOwnProperty(p) || (r.hasOwnProperty(p) && (r["_" + p] = r[p]), r[p] = a[p]);
        }
        if (r.name = n.name, n.helperType && (r.helperType = n.helperType), n.modeProps)
          for (var D in n.modeProps)
            r[D] = n.modeProps[D];
        return r;
      }
      var nr = {};
      function zr(e, n) {
        var i = nr.hasOwnProperty(e) ? nr[e] : nr[e] = {};
        se(n, i);
      }
      function Ln(e, n) {
        if (n === !0)
          return n;
        if (e.copyState)
          return e.copyState(n);
        var i = {};
        for (var r in n) {
          var a = n[r];
          a instanceof Array && (a = a.concat([])), i[r] = a;
        }
        return i;
      }
      function gi(e, n) {
        for (var i; e.innerMode && (i = e.innerMode(n), !(!i || i.mode == e)); )
          n = i.state, e = i.mode;
        return i || { mode: e, state: n };
      }
      function Wr(e, n, i) {
        return e.startState ? e.startState(n, i) : !0;
      }
      var lt = function(e, n, i) {
        this.pos = this.start = 0, this.string = e, this.tabSize = n || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = i;
      };
      lt.prototype.eol = function() {
        return this.pos >= this.string.length;
      }, lt.prototype.sol = function() {
        return this.pos == this.lineStart;
      }, lt.prototype.peek = function() {
        return this.string.charAt(this.pos) || void 0;
      }, lt.prototype.next = function() {
        if (this.pos < this.string.length)
          return this.string.charAt(this.pos++);
      }, lt.prototype.eat = function(e) {
        var n = this.string.charAt(this.pos), i;
        if (typeof e == "string" ? i = n == e : i = n && (e.test ? e.test(n) : e(n)), i)
          return ++this.pos, n;
      }, lt.prototype.eatWhile = function(e) {
        for (var n = this.pos; this.eat(e); )
          ;
        return this.pos > n;
      }, lt.prototype.eatSpace = function() {
        for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); )
          ++this.pos;
        return this.pos > e;
      }, lt.prototype.skipToEnd = function() {
        this.pos = this.string.length;
      }, lt.prototype.skipTo = function(e) {
        var n = this.string.indexOf(e, this.pos);
        if (n > -1)
          return this.pos = n, !0;
      }, lt.prototype.backUp = function(e) {
        this.pos -= e;
      }, lt.prototype.column = function() {
        return this.lastColumnPos < this.start && (this.lastColumnValue = pe(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? pe(this.string, this.lineStart, this.tabSize) : 0);
      }, lt.prototype.indentation = function() {
        return pe(this.string, null, this.tabSize) - (this.lineStart ? pe(this.string, this.lineStart, this.tabSize) : 0);
      }, lt.prototype.match = function(e, n, i) {
        if (typeof e == "string") {
          var r = function(D) {
            return i ? D.toLowerCase() : D;
          }, a = this.string.substr(this.pos, e.length);
          if (r(a) == r(e))
            return n !== !1 && (this.pos += e.length), !0;
        } else {
          var p = this.string.slice(this.pos).match(e);
          return p && p.index > 0 ? null : (p && n !== !1 && (this.pos += p[0].length), p);
        }
      }, lt.prototype.current = function() {
        return this.string.slice(this.start, this.pos);
      }, lt.prototype.hideFirstChars = function(e, n) {
        this.lineStart += e;
        try {
          return n();
        } finally {
          this.lineStart -= e;
        }
      }, lt.prototype.lookAhead = function(e) {
        var n = this.lineOracle;
        return n && n.lookAhead(e);
      }, lt.prototype.baseToken = function() {
        var e = this.lineOracle;
        return e && e.baseToken(this.pos);
      };
      function we(e, n) {
        if (n -= e.first, n < 0 || n >= e.size)
          throw new Error("There is no line " + (n + e.first) + " in the document.");
        for (var i = e; !i.lines; )
          for (var r = 0; ; ++r) {
            var a = i.children[r], p = a.chunkSize();
            if (n < p) {
              i = a;
              break;
            }
            n -= p;
          }
        return i.lines[n];
      }
      function jn(e, n, i) {
        var r = [], a = n.line;
        return e.iter(n.line, i.line + 1, function(p) {
          var D = p.text;
          a == i.line && (D = D.slice(0, i.ch)), a == n.line && (D = D.slice(n.ch)), r.push(D), ++a;
        }), r;
      }
      function mi(e, n, i) {
        var r = [];
        return e.iter(n, i, function(a) {
          r.push(a.text);
        }), r;
      }
      function un(e, n) {
        var i = n - e.height;
        if (i)
          for (var r = e; r; r = r.parent)
            r.height += i;
      }
      function j(e) {
        if (e.parent == null)
          return null;
        for (var n = e.parent, i = be(n.lines, e), r = n.parent; r; n = r, r = r.parent)
          for (var a = 0; r.children[a] != n; ++a)
            i += r.children[a].chunkSize();
        return i + n.first;
      }
      function G(e, n) {
        var i = e.first;
        e:
          do {
            for (var r = 0; r < e.children.length; ++r) {
              var a = e.children[r], p = a.height;
              if (n < p) {
                e = a;
                continue e;
              }
              n -= p, i += a.chunkSize();
            }
            return i;
          } while (!e.lines);
        for (var D = 0; D < e.lines.length; ++D) {
          var L = e.lines[D], N = L.height;
          if (n < N)
            break;
          n -= N;
        }
        return i + D;
      }
      function ne(e, n) {
        return n >= e.first && n < e.first + e.size;
      }
      function fe(e, n) {
        return String(e.lineNumberFormatter(n + e.firstLineNumber));
      }
      function ee(e, n, i) {
        if (i === void 0 && (i = null), !(this instanceof ee))
          return new ee(e, n, i);
        this.line = e, this.ch = n, this.sticky = i;
      }
      function ye(e, n) {
        return e.line - n.line || e.ch - n.ch;
      }
      function Ve(e, n) {
        return e.sticky == n.sticky && ye(e, n) == 0;
      }
      function Ct(e) {
        return ee(e.line, e.ch);
      }
      function Zt(e, n) {
        return ye(e, n) < 0 ? n : e;
      }
      function jr(e, n) {
        return ye(e, n) < 0 ? e : n;
      }
      function Es(e, n) {
        return Math.max(e.first, Math.min(n, e.first + e.size - 1));
      }
      function Oe(e, n) {
        if (n.line < e.first)
          return ee(e.first, 0);
        var i = e.first + e.size - 1;
        return n.line > i ? ee(i, we(e, i).text.length) : Nd(n, we(e, n.line).text.length);
      }
      function Nd(e, n) {
        var i = e.ch;
        return i == null || i > n ? ee(e.line, n) : i < 0 ? ee(e.line, 0) : e;
      }
      function bs(e, n) {
        for (var i = [], r = 0; r < n.length; r++)
          i[r] = Oe(e, n[r]);
        return i;
      }
      var fo = function(e, n) {
        this.state = e, this.lookAhead = n;
      }, Nn = function(e, n, i, r) {
        this.state = n, this.doc = e, this.line = i, this.maxLookAhead = r || 0, this.baseTokens = null, this.baseTokenPos = 1;
      };
      Nn.prototype.lookAhead = function(e) {
        var n = this.doc.getLine(this.line + e);
        return n != null && e > this.maxLookAhead && (this.maxLookAhead = e), n;
      }, Nn.prototype.baseToken = function(e) {
        if (!this.baseTokens)
          return null;
        for (; this.baseTokens[this.baseTokenPos] <= e; )
          this.baseTokenPos += 2;
        var n = this.baseTokens[this.baseTokenPos + 1];
        return {
          type: n && n.replace(/( |^)overlay .*/, ""),
          size: this.baseTokens[this.baseTokenPos] - e
        };
      }, Nn.prototype.nextLine = function() {
        this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
      }, Nn.fromSaved = function(e, n, i) {
        return n instanceof fo ? new Nn(e, Ln(e.mode, n.state), i, n.lookAhead) : new Nn(e, Ln(e.mode, n), i);
      }, Nn.prototype.save = function(e) {
        var n = e !== !1 ? Ln(this.doc.mode, this.state) : this.state;
        return this.maxLookAhead > 0 ? new fo(n, this.maxLookAhead) : n;
      };
      function Cs(e, n, i, r) {
        var a = [e.state.modeGen], p = {};
        Ps(
          e,
          n.text,
          e.doc.mode,
          i,
          function(W, V) {
            return a.push(W, V);
          },
          p,
          r
        );
        for (var D = i.state, L = function(W) {
          i.baseTokens = a;
          var V = e.state.overlays[W], k = 1, Z = 0;
          i.state = !0, Ps(e, n.text, V.mode, i, function(J, te) {
            for (var ie = k; Z < J; ) {
              var de = a[k];
              de > J && a.splice(k, 1, J, a[k + 1], de), k += 2, Z = Math.min(J, de);
            }
            if (!!te)
              if (V.opaque)
                a.splice(ie, k - ie, J, "overlay " + te), k = ie + 2;
              else
                for (; ie < k; ie += 2) {
                  var he = a[ie + 1];
                  a[ie + 1] = (he ? he + " " : "") + "overlay " + te;
                }
          }, p), i.state = D, i.baseTokens = null, i.baseTokenPos = 1;
        }, N = 0; N < e.state.overlays.length; ++N)
          L(N);
        return { styles: a, classes: p.bgClass || p.textClass ? p : null };
      }
      function Ts(e, n, i) {
        if (!n.styles || n.styles[0] != e.state.modeGen) {
          var r = yi(e, j(n)), a = n.text.length > e.options.maxHighlightLength && Ln(e.doc.mode, r.state), p = Cs(e, n, r);
          a && (r.state = a), n.stateAfter = r.save(!a), n.styles = p.styles, p.classes ? n.styleClasses = p.classes : n.styleClasses && (n.styleClasses = null), i === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier));
        }
        return n.styles;
      }
      function yi(e, n, i) {
        var r = e.doc, a = e.display;
        if (!r.mode.startState)
          return new Nn(r, !0, n);
        var p = Fd(e, n, i), D = p > r.first && we(r, p - 1).stateAfter, L = D ? Nn.fromSaved(r, D, p) : new Nn(r, Wr(r.mode), p);
        return r.iter(p, n, function(N) {
          fa(e, N.text, L);
          var W = L.line;
          N.stateAfter = W == n - 1 || W % 5 == 0 || W >= a.viewFrom && W < a.viewTo ? L.save() : null, L.nextLine();
        }), i && (r.modeFrontier = L.line), L;
      }
      function fa(e, n, i, r) {
        var a = e.doc.mode, p = new lt(n, e.options.tabSize, i);
        for (p.start = p.pos = r || 0, n == "" && ws(a, i.state); !p.eol(); )
          da(a, p, i.state), p.start = p.pos;
      }
      function ws(e, n) {
        if (e.blankLine)
          return e.blankLine(n);
        if (!!e.innerMode) {
          var i = gi(e, n);
          if (i.mode.blankLine)
            return i.mode.blankLine(i.state);
        }
      }
      function da(e, n, i, r) {
        for (var a = 0; a < 10; a++) {
          r && (r[0] = gi(e, i).mode);
          var p = e.token(n, i);
          if (n.pos > n.start)
            return p;
        }
        throw new Error("Mode " + e.name + " failed to advance stream.");
      }
      var Ds = function(e, n, i) {
        this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = n || null, this.state = i;
      };
      function Ms(e, n, i, r) {
        var a = e.doc, p = a.mode, D;
        n = Oe(a, n);
        var L = we(a, n.line), N = yi(e, n.line, i), W = new lt(L.text, e.options.tabSize, N), V;
        for (r && (V = []); (r || W.pos < n.ch) && !W.eol(); )
          W.start = W.pos, D = da(p, W, N.state), r && V.push(new Ds(W, D, Ln(a.mode, N.state)));
        return r ? V : new Ds(W, D, N.state);
      }
      function Rs(e, n) {
        if (e)
          for (; ; ) {
            var i = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
            if (!i)
              break;
            e = e.slice(0, i.index) + e.slice(i.index + i[0].length);
            var r = i[1] ? "bgClass" : "textClass";
            n[r] == null ? n[r] = i[2] : new RegExp("(?:^|\\s)" + i[2] + "(?:$|\\s)").test(n[r]) || (n[r] += " " + i[2]);
          }
        return e;
      }
      function Ps(e, n, i, r, a, p, D) {
        var L = i.flattenSpans;
        L == null && (L = e.options.flattenSpans);
        var N = 0, W = null, V = new lt(n, e.options.tabSize, r), k, Z = e.options.addModeClass && [null];
        for (n == "" && Rs(ws(i, r.state), p); !V.eol(); ) {
          if (V.pos > e.options.maxHighlightLength ? (L = !1, D && fa(e, n, r, V.pos), V.pos = n.length, k = null) : k = Rs(da(i, V, r.state, Z), p), Z) {
            var J = Z[0].name;
            J && (k = "m-" + (k ? J + " " + k : J));
          }
          if (!L || W != k) {
            for (; N < V.start; )
              N = Math.min(V.start, N + 5e3), a(N, W);
            W = k;
          }
          V.start = V.pos;
        }
        for (; N < V.pos; ) {
          var te = Math.min(V.pos, N + 5e3);
          a(te, W), N = te;
        }
      }
      function Fd(e, n, i) {
        for (var r, a, p = e.doc, D = i ? -1 : n - (e.doc.mode.innerMode ? 1e3 : 100), L = n; L > D; --L) {
          if (L <= p.first)
            return p.first;
          var N = we(p, L - 1), W = N.stateAfter;
          if (W && (!i || L + (W instanceof fo ? W.lookAhead : 0) <= p.modeFrontier))
            return L;
          var V = pe(N.text, null, e.options.tabSize);
          (a == null || r > V) && (a = L - 1, r = V);
        }
        return a;
      }
      function Od(e, n) {
        if (e.modeFrontier = Math.min(e.modeFrontier, n), !(e.highlightFrontier < n - 10)) {
          for (var i = e.first, r = n - 1; r > i; r--) {
            var a = we(e, r).stateAfter;
            if (a && (!(a instanceof fo) || r + a.lookAhead < n)) {
              i = r + 1;
              break;
            }
          }
          e.highlightFrontier = Math.min(e.highlightFrontier, i);
        }
      }
      var Is = !1, $n = !1;
      function Bd() {
        Is = !0;
      }
      function Hd() {
        $n = !0;
      }
      function co(e, n, i) {
        this.marker = e, this.from = n, this.to = i;
      }
      function Ai(e, n) {
        if (e)
          for (var i = 0; i < e.length; ++i) {
            var r = e[i];
            if (r.marker == n)
              return r;
          }
      }
      function Ud(e, n) {
        for (var i, r = 0; r < e.length; ++r)
          e[r] != n && (i || (i = [])).push(e[r]);
        return i;
      }
      function zd(e, n, i) {
        var r = i && window.WeakSet && (i.markedSpans || (i.markedSpans = /* @__PURE__ */ new WeakSet()));
        r && e.markedSpans && r.has(e.markedSpans) ? e.markedSpans.push(n) : (e.markedSpans = e.markedSpans ? e.markedSpans.concat([n]) : [n], r && r.add(e.markedSpans)), n.marker.attachLine(e);
      }
      function Wd(e, n, i) {
        var r;
        if (e)
          for (var a = 0; a < e.length; ++a) {
            var p = e[a], D = p.marker, L = p.from == null || (D.inclusiveLeft ? p.from <= n : p.from < n);
            if (L || p.from == n && D.type == "bookmark" && (!i || !p.marker.insertLeft)) {
              var N = p.to == null || (D.inclusiveRight ? p.to >= n : p.to > n);
              (r || (r = [])).push(new co(D, p.from, N ? null : p.to));
            }
          }
        return r;
      }
      function jd(e, n, i) {
        var r;
        if (e)
          for (var a = 0; a < e.length; ++a) {
            var p = e[a], D = p.marker, L = p.to == null || (D.inclusiveRight ? p.to >= n : p.to > n);
            if (L || p.from == n && D.type == "bookmark" && (!i || p.marker.insertLeft)) {
              var N = p.from == null || (D.inclusiveLeft ? p.from <= n : p.from < n);
              (r || (r = [])).push(new co(
                D,
                N ? null : p.from - n,
                p.to == null ? null : p.to - n
              ));
            }
          }
        return r;
      }
      function ca(e, n) {
        if (n.full)
          return null;
        var i = ne(e, n.from.line) && we(e, n.from.line).markedSpans, r = ne(e, n.to.line) && we(e, n.to.line).markedSpans;
        if (!i && !r)
          return null;
        var a = n.from.ch, p = n.to.ch, D = ye(n.from, n.to) == 0, L = Wd(i, a, D), N = jd(r, p, D), W = n.text.length == 1, V = Ue(n.text).length + (W ? a : 0);
        if (L)
          for (var k = 0; k < L.length; ++k) {
            var Z = L[k];
            if (Z.to == null) {
              var J = Ai(N, Z.marker);
              J ? W && (Z.to = J.to == null ? null : J.to + V) : Z.to = a;
            }
          }
        if (N)
          for (var te = 0; te < N.length; ++te) {
            var ie = N[te];
            if (ie.to != null && (ie.to += V), ie.from == null) {
              var de = Ai(L, ie.marker);
              de || (ie.from = V, W && (L || (L = [])).push(ie));
            } else
              ie.from += V, W && (L || (L = [])).push(ie);
          }
        L && (L = Ls(L)), N && N != L && (N = Ls(N));
        var he = [L];
        if (!W) {
          var xe = n.text.length - 2, ge;
          if (xe > 0 && L)
            for (var Te = 0; Te < L.length; ++Te)
              L[Te].to == null && (ge || (ge = [])).push(new co(L[Te].marker, null, null));
          for (var Re = 0; Re < xe; ++Re)
            he.push(ge);
          he.push(N);
        }
        return he;
      }
      function Ls(e) {
        for (var n = 0; n < e.length; ++n) {
          var i = e[n];
          i.from != null && i.from == i.to && i.marker.clearWhenEmpty !== !1 && e.splice(n--, 1);
        }
        return e.length ? e : null;
      }
      function $d(e, n, i) {
        var r = null;
        if (e.iter(n.line, i.line + 1, function(J) {
          if (J.markedSpans)
            for (var te = 0; te < J.markedSpans.length; ++te) {
              var ie = J.markedSpans[te].marker;
              ie.readOnly && (!r || be(r, ie) == -1) && (r || (r = [])).push(ie);
            }
        }), !r)
          return null;
        for (var a = [{ from: n, to: i }], p = 0; p < r.length; ++p)
          for (var D = r[p], L = D.find(0), N = 0; N < a.length; ++N) {
            var W = a[N];
            if (!(ye(W.to, L.from) < 0 || ye(W.from, L.to) > 0)) {
              var V = [N, 1], k = ye(W.from, L.from), Z = ye(W.to, L.to);
              (k < 0 || !D.inclusiveLeft && !k) && V.push({ from: W.from, to: L.from }), (Z > 0 || !D.inclusiveRight && !Z) && V.push({ from: L.to, to: W.to }), a.splice.apply(a, V), N += V.length - 3;
            }
          }
        return a;
      }
      function Ns(e) {
        var n = e.markedSpans;
        if (!!n) {
          for (var i = 0; i < n.length; ++i)
            n[i].marker.detachLine(e);
          e.markedSpans = null;
        }
      }
      function Fs(e, n) {
        if (!!n) {
          for (var i = 0; i < n.length; ++i)
            n[i].marker.attachLine(e);
          e.markedSpans = n;
        }
      }
      function vo(e) {
        return e.inclusiveLeft ? -1 : 0;
      }
      function po(e) {
        return e.inclusiveRight ? 1 : 0;
      }
      function va(e, n) {
        var i = e.lines.length - n.lines.length;
        if (i != 0)
          return i;
        var r = e.find(), a = n.find(), p = ye(r.from, a.from) || vo(e) - vo(n);
        if (p)
          return -p;
        var D = ye(r.to, a.to) || po(e) - po(n);
        return D || n.id - e.id;
      }
      function Os(e, n) {
        var i = $n && e.markedSpans, r;
        if (i)
          for (var a = void 0, p = 0; p < i.length; ++p)
            a = i[p], a.marker.collapsed && (n ? a.from : a.to) == null && (!r || va(r, a.marker) < 0) && (r = a.marker);
        return r;
      }
      function Bs(e) {
        return Os(e, !0);
      }
      function ho(e) {
        return Os(e, !1);
      }
      function Yd(e, n) {
        var i = $n && e.markedSpans, r;
        if (i)
          for (var a = 0; a < i.length; ++a) {
            var p = i[a];
            p.marker.collapsed && (p.from == null || p.from < n) && (p.to == null || p.to > n) && (!r || va(r, p.marker) < 0) && (r = p.marker);
          }
        return r;
      }
      function Hs(e, n, i, r, a) {
        var p = we(e, n), D = $n && p.markedSpans;
        if (D)
          for (var L = 0; L < D.length; ++L) {
            var N = D[L];
            if (!!N.marker.collapsed) {
              var W = N.marker.find(0), V = ye(W.from, i) || vo(N.marker) - vo(a), k = ye(W.to, r) || po(N.marker) - po(a);
              if (!(V >= 0 && k <= 0 || V <= 0 && k >= 0) && (V <= 0 && (N.marker.inclusiveRight && a.inclusiveLeft ? ye(W.to, i) >= 0 : ye(W.to, i) > 0) || V >= 0 && (N.marker.inclusiveRight && a.inclusiveLeft ? ye(W.from, r) <= 0 : ye(W.from, r) < 0)))
                return !0;
            }
          }
      }
      function Tn(e) {
        for (var n; n = Bs(e); )
          e = n.find(-1, !0).line;
        return e;
      }
      function Vd(e) {
        for (var n; n = ho(e); )
          e = n.find(1, !0).line;
        return e;
      }
      function Qd(e) {
        for (var n, i; n = ho(e); )
          e = n.find(1, !0).line, (i || (i = [])).push(e);
        return i;
      }
      function pa(e, n) {
        var i = we(e, n), r = Tn(i);
        return i == r ? n : j(r);
      }
      function Us(e, n) {
        if (n > e.lastLine())
          return n;
        var i = we(e, n), r;
        if (!rr(e, i))
          return n;
        for (; r = ho(i); )
          i = r.find(1, !0).line;
        return j(i) + 1;
      }
      function rr(e, n) {
        var i = $n && n.markedSpans;
        if (i) {
          for (var r = void 0, a = 0; a < i.length; ++a)
            if (r = i[a], !!r.marker.collapsed) {
              if (r.from == null)
                return !0;
              if (!r.marker.widgetNode && r.from == 0 && r.marker.inclusiveLeft && ha(e, n, r))
                return !0;
            }
        }
      }
      function ha(e, n, i) {
        if (i.to == null) {
          var r = i.marker.find(1, !0);
          return ha(e, r.line, Ai(r.line.markedSpans, i.marker));
        }
        if (i.marker.inclusiveRight && i.to == n.text.length)
          return !0;
        for (var a = void 0, p = 0; p < n.markedSpans.length; ++p)
          if (a = n.markedSpans[p], a.marker.collapsed && !a.marker.widgetNode && a.from == i.to && (a.to == null || a.to != i.from) && (a.marker.inclusiveLeft || i.marker.inclusiveRight) && ha(e, n, a))
            return !0;
      }
      function Yn(e) {
        e = Tn(e);
        for (var n = 0, i = e.parent, r = 0; r < i.lines.length; ++r) {
          var a = i.lines[r];
          if (a == e)
            break;
          n += a.height;
        }
        for (var p = i.parent; p; i = p, p = i.parent)
          for (var D = 0; D < p.children.length; ++D) {
            var L = p.children[D];
            if (L == i)
              break;
            n += L.height;
          }
        return n;
      }
      function go(e) {
        if (e.height == 0)
          return 0;
        for (var n = e.text.length, i, r = e; i = Bs(r); ) {
          var a = i.find(0, !0);
          r = a.from.line, n += a.from.ch - a.to.ch;
        }
        for (r = e; i = ho(r); ) {
          var p = i.find(0, !0);
          n -= r.text.length - p.from.ch, r = p.to.line, n += r.text.length - p.to.ch;
        }
        return n;
      }
      function ga(e) {
        var n = e.display, i = e.doc;
        n.maxLine = we(i, i.first), n.maxLineLength = go(n.maxLine), n.maxLineChanged = !0, i.iter(function(r) {
          var a = go(r);
          a > n.maxLineLength && (n.maxLineLength = a, n.maxLine = r);
        });
      }
      var $r = function(e, n, i) {
        this.text = e, Fs(this, n), this.height = i ? i(this) : 1;
      };
      $r.prototype.lineNo = function() {
        return j(this);
      }, $t($r);
      function Gd(e, n, i, r) {
        e.text = n, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), e.order != null && (e.order = null), Ns(e), Fs(e, i);
        var a = r ? r(e) : 1;
        a != e.height && un(e, a);
      }
      function kd(e) {
        e.parent = null, Ns(e);
      }
      var Kd = {}, Xd = {};
      function zs(e, n) {
        if (!e || /^\s*$/.test(e))
          return null;
        var i = n.addModeClass ? Xd : Kd;
        return i[e] || (i[e] = e.replace(/\S+/g, "cm-$&"));
      }
      function Ws(e, n) {
        var i = Y("span", null, null, T ? "padding-right: .1px" : null), r = {
          pre: Y("pre", [i], "CodeMirror-line"),
          content: i,
          col: 0,
          pos: 0,
          cm: e,
          trailingSpace: !1,
          splitSpaces: e.getOption("lineWrapping")
        };
        n.measure = {};
        for (var a = 0; a <= (n.rest ? n.rest.length : 0); a++) {
          var p = a ? n.rest[a - 1] : n.line, D = void 0;
          r.pos = 0, r.addToken = Zd, er(e.display.measure) && (D = oe(p, e.doc.direction)) && (r.addToken = _d(r.addToken, D)), r.map = [];
          var L = n != e.display.externalMeasured && j(p);
          ec(p, r, Ts(e, p, L)), p.styleClasses && (p.styleClasses.bgClass && (r.bgClass = _(p.styleClasses.bgClass, r.bgClass || "")), p.styleClasses.textClass && (r.textClass = _(p.styleClasses.textClass, r.textClass || ""))), r.map.length == 0 && r.map.push(0, 0, r.content.appendChild(so(e.display.measure))), a == 0 ? (n.measure.map = r.map, n.measure.cache = {}) : ((n.measure.maps || (n.measure.maps = [])).push(r.map), (n.measure.caches || (n.measure.caches = [])).push({}));
        }
        if (T) {
          var N = r.content.lastChild;
          (/\bcm-tab\b/.test(N.className) || N.querySelector && N.querySelector(".cm-tab")) && (r.content.className = "cm-tab-wrap-hack");
        }
        return $e(e, "renderLine", e, n.line, r.pre), r.pre.className && (r.textClass = _(r.pre.className, r.textClass || "")), r;
      }
      function Jd(e) {
        var n = P("span", "\u2022", "cm-invalidchar");
        return n.title = "\\u" + e.charCodeAt(0).toString(16), n.setAttribute("aria-label", n.title), n;
      }
      function Zd(e, n, i, r, a, p, D) {
        if (!!n) {
          var L = e.splitSpaces ? qd(n, e.trailingSpace) : n, N = e.cm.state.specialChars, W = !1, V;
          if (!N.test(n))
            e.col += n.length, V = document.createTextNode(L), e.map.push(e.pos, e.pos + n.length, V), d && m < 9 && (W = !0), e.pos += n.length;
          else {
            V = document.createDocumentFragment();
            for (var k = 0; ; ) {
              N.lastIndex = k;
              var Z = N.exec(n), J = Z ? Z.index - k : n.length - k;
              if (J) {
                var te = document.createTextNode(L.slice(k, k + J));
                d && m < 9 ? V.appendChild(P("span", [te])) : V.appendChild(te), e.map.push(e.pos, e.pos + J, te), e.col += J, e.pos += J;
              }
              if (!Z)
                break;
              k += J + 1;
              var ie = void 0;
              if (Z[0] == "	") {
                var de = e.cm.options.tabSize, he = de - e.col % de;
                ie = V.appendChild(P("span", Kt(he), "cm-tab")), ie.setAttribute("role", "presentation"), ie.setAttribute("cm-text", "	"), e.col += he;
              } else
                Z[0] == "\r" || Z[0] == `
` ? (ie = V.appendChild(P("span", Z[0] == "\r" ? "\u240D" : "\u2424", "cm-invalidchar")), ie.setAttribute("cm-text", Z[0]), e.col += 1) : (ie = e.cm.options.specialCharPlaceholder(Z[0]), ie.setAttribute("cm-text", Z[0]), d && m < 9 ? V.appendChild(P("span", [ie])) : V.appendChild(ie), e.col += 1);
              e.map.push(e.pos, e.pos + 1, ie), e.pos++;
            }
          }
          if (e.trailingSpace = L.charCodeAt(n.length - 1) == 32, i || r || a || W || p || D) {
            var xe = i || "";
            r && (xe += r), a && (xe += a);
            var ge = P("span", [V], xe, p);
            if (D)
              for (var Te in D)
                D.hasOwnProperty(Te) && Te != "style" && Te != "class" && ge.setAttribute(Te, D[Te]);
            return e.content.appendChild(ge);
          }
          e.content.appendChild(V);
        }
      }
      function qd(e, n) {
        if (e.length > 1 && !/  /.test(e))
          return e;
        for (var i = n, r = "", a = 0; a < e.length; a++) {
          var p = e.charAt(a);
          p == " " && i && (a == e.length - 1 || e.charCodeAt(a + 1) == 32) && (p = "\xA0"), r += p, i = p == " ";
        }
        return r;
      }
      function _d(e, n) {
        return function(i, r, a, p, D, L, N) {
          a = a ? a + " cm-force-border" : "cm-force-border";
          for (var W = i.pos, V = W + r.length; ; ) {
            for (var k = void 0, Z = 0; Z < n.length && (k = n[Z], !(k.to > W && k.from <= W)); Z++)
              ;
            if (k.to >= V)
              return e(i, r, a, p, D, L, N);
            e(i, r.slice(0, k.to - W), a, p, null, L, N), p = null, r = r.slice(k.to - W), W = k.to;
          }
        };
      }
      function js(e, n, i, r) {
        var a = !r && i.widgetNode;
        a && e.map.push(e.pos, e.pos + n, a), !r && e.cm.display.input.needsContentAttribute && (a || (a = e.content.appendChild(document.createElement("span"))), a.setAttribute("cm-marker", i.id)), a && (e.cm.display.input.setUneditable(a), e.content.appendChild(a)), e.pos += n, e.trailingSpace = !1;
      }
      function ec(e, n, i) {
        var r = e.markedSpans, a = e.text, p = 0;
        if (!r) {
          for (var D = 1; D < i.length; D += 2)
            n.addToken(n, a.slice(p, p = i[D]), zs(i[D + 1], n.cm.options));
          return;
        }
        for (var L = a.length, N = 0, W = 1, V = "", k, Z, J = 0, te, ie, de, he, xe; ; ) {
          if (J == N) {
            te = ie = de = Z = "", xe = null, he = null, J = 1 / 0;
            for (var ge = [], Te = void 0, Re = 0; Re < r.length; ++Re) {
              var Me = r[Re], Be = Me.marker;
              if (Be.type == "bookmark" && Me.from == N && Be.widgetNode)
                ge.push(Be);
              else if (Me.from <= N && (Me.to == null || Me.to > N || Be.collapsed && Me.to == N && Me.from == N)) {
                if (Me.to != null && Me.to != N && J > Me.to && (J = Me.to, ie = ""), Be.className && (te += " " + Be.className), Be.css && (Z = (Z ? Z + ";" : "") + Be.css), Be.startStyle && Me.from == N && (de += " " + Be.startStyle), Be.endStyle && Me.to == J && (Te || (Te = [])).push(Be.endStyle, Me.to), Be.title && ((xe || (xe = {})).title = Be.title), Be.attributes)
                  for (var _e in Be.attributes)
                    (xe || (xe = {}))[_e] = Be.attributes[_e];
                Be.collapsed && (!he || va(he.marker, Be) < 0) && (he = Me);
              } else
                Me.from > N && J > Me.from && (J = Me.from);
            }
            if (Te)
              for (var Mt = 0; Mt < Te.length; Mt += 2)
                Te[Mt + 1] == J && (ie += " " + Te[Mt]);
            if (!he || he.from == N)
              for (var rt = 0; rt < ge.length; ++rt)
                js(n, 0, ge[rt]);
            if (he && (he.from || 0) == N) {
              if (js(
                n,
                (he.to == null ? L + 1 : he.to) - N,
                he.marker,
                he.from == null
              ), he.to == null)
                return;
              he.to == N && (he = !1);
            }
          }
          if (N >= L)
            break;
          for (var ln = Math.min(L, J); ; ) {
            if (V) {
              var en = N + V.length;
              if (!he) {
                var ht = en > ln ? V.slice(0, ln - N) : V;
                n.addToken(
                  n,
                  ht,
                  k ? k + te : te,
                  de,
                  N + ht.length == J ? ie : "",
                  Z,
                  xe
                );
              }
              if (en >= ln) {
                V = V.slice(ln - N), N = ln;
                break;
              }
              N = en, de = "";
            }
            V = a.slice(p, p = i[W++]), k = zs(i[W++], n.cm.options);
          }
        }
      }
      function $s(e, n, i) {
        this.line = n, this.rest = Qd(n), this.size = this.rest ? j(Ue(this.rest)) - i + 1 : 1, this.node = this.text = null, this.hidden = rr(e, n);
      }
      function mo(e, n, i) {
        for (var r = [], a, p = n; p < i; p = a) {
          var D = new $s(e.doc, we(e.doc, p), p);
          a = p + D.size, r.push(D);
        }
        return r;
      }
      var Yr = null;
      function tc(e) {
        Yr ? Yr.ops.push(e) : e.ownsGroup = Yr = {
          ops: [e],
          delayedCallbacks: []
        };
      }
      function nc(e) {
        var n = e.delayedCallbacks, i = 0;
        do {
          for (; i < n.length; i++)
            n[i].call(null);
          for (var r = 0; r < e.ops.length; r++) {
            var a = e.ops[r];
            if (a.cursorActivityHandlers)
              for (; a.cursorActivityCalled < a.cursorActivityHandlers.length; )
                a.cursorActivityHandlers[a.cursorActivityCalled++].call(null, a.cm);
          }
        } while (i < n.length);
      }
      function rc(e, n) {
        var i = e.ownsGroup;
        if (!!i)
          try {
            nc(i);
          } finally {
            Yr = null, n(i);
          }
      }
      var xi = null;
      function Tt(e, n) {
        var i = Ie(e, n);
        if (!!i.length) {
          var r = Array.prototype.slice.call(arguments, 2), a;
          Yr ? a = Yr.delayedCallbacks : xi ? a = xi : (a = xi = [], setTimeout(ic, 0));
          for (var p = function(L) {
            a.push(function() {
              return i[L].apply(null, r);
            });
          }, D = 0; D < i.length; ++D)
            p(D);
        }
      }
      function ic() {
        var e = xi;
        xi = null;
        for (var n = 0; n < e.length; ++n)
          e[n]();
      }
      function Ys(e, n, i, r) {
        for (var a = 0; a < n.changes.length; a++) {
          var p = n.changes[a];
          p == "text" ? ac(e, n) : p == "gutter" ? Qs(e, n, i, r) : p == "class" ? ma(e, n) : p == "widget" && lc(e, n, r);
        }
        n.changes = null;
      }
      function Si(e) {
        return e.node == e.text && (e.node = P("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), d && m < 8 && (e.node.style.zIndex = 2)), e.node;
      }
      function oc(e, n) {
        var i = n.bgClass ? n.bgClass + " " + (n.line.bgClass || "") : n.line.bgClass;
        if (i && (i += " CodeMirror-linebackground"), n.background)
          i ? n.background.className = i : (n.background.parentNode.removeChild(n.background), n.background = null);
        else if (i) {
          var r = Si(n);
          n.background = r.insertBefore(P("div", null, i), r.firstChild), e.display.input.setUneditable(n.background);
        }
      }
      function Vs(e, n) {
        var i = e.display.externalMeasured;
        return i && i.line == n.line ? (e.display.externalMeasured = null, n.measure = i.measure, i.built) : Ws(e, n);
      }
      function ac(e, n) {
        var i = n.text.className, r = Vs(e, n);
        n.text == n.node && (n.node = r.pre), n.text.parentNode.replaceChild(r.pre, n.text), n.text = r.pre, r.bgClass != n.bgClass || r.textClass != n.textClass ? (n.bgClass = r.bgClass, n.textClass = r.textClass, ma(e, n)) : i && (n.text.className = i);
      }
      function ma(e, n) {
        oc(e, n), n.line.wrapClass ? Si(n).className = n.line.wrapClass : n.node != n.text && (n.node.className = "");
        var i = n.textClass ? n.textClass + " " + (n.line.textClass || "") : n.line.textClass;
        n.text.className = i || "";
      }
      function Qs(e, n, i, r) {
        if (n.gutter && (n.node.removeChild(n.gutter), n.gutter = null), n.gutterBackground && (n.node.removeChild(n.gutterBackground), n.gutterBackground = null), n.line.gutterClass) {
          var a = Si(n);
          n.gutterBackground = P(
            "div",
            null,
            "CodeMirror-gutter-background " + n.line.gutterClass,
            "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px; width: " + r.gutterTotalWidth + "px"
          ), e.display.input.setUneditable(n.gutterBackground), a.insertBefore(n.gutterBackground, n.text);
        }
        var p = n.line.gutterMarkers;
        if (e.options.lineNumbers || p) {
          var D = Si(n), L = n.gutter = P("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px");
          if (L.setAttribute("aria-hidden", "true"), e.display.input.setUneditable(L), D.insertBefore(L, n.text), n.line.gutterClass && (L.className += " " + n.line.gutterClass), e.options.lineNumbers && (!p || !p["CodeMirror-linenumbers"]) && (n.lineNumber = L.appendChild(
            P(
              "div",
              fe(e.options, i),
              "CodeMirror-linenumber CodeMirror-gutter-elt",
              "left: " + r.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"
            )
          )), p)
            for (var N = 0; N < e.display.gutterSpecs.length; ++N) {
              var W = e.display.gutterSpecs[N].className, V = p.hasOwnProperty(W) && p[W];
              V && L.appendChild(P(
                "div",
                [V],
                "CodeMirror-gutter-elt",
                "left: " + r.gutterLeft[W] + "px; width: " + r.gutterWidth[W] + "px"
              ));
            }
        }
      }
      function lc(e, n, i) {
        n.alignable && (n.alignable = null);
        for (var r = I("CodeMirror-linewidget"), a = n.node.firstChild, p = void 0; a; a = p)
          p = a.nextSibling, r.test(a.className) && n.node.removeChild(a);
        Gs(e, n, i);
      }
      function sc(e, n, i, r) {
        var a = Vs(e, n);
        return n.text = n.node = a.pre, a.bgClass && (n.bgClass = a.bgClass), a.textClass && (n.textClass = a.textClass), ma(e, n), Qs(e, n, i, r), Gs(e, n, r), n.node;
      }
      function Gs(e, n, i) {
        if (ks(e, n.line, n, i, !0), n.rest)
          for (var r = 0; r < n.rest.length; r++)
            ks(e, n.rest[r], n, i, !1);
      }
      function ks(e, n, i, r, a) {
        if (!!n.widgets)
          for (var p = Si(i), D = 0, L = n.widgets; D < L.length; ++D) {
            var N = L[D], W = P("div", [N.node], "CodeMirror-linewidget" + (N.className ? " " + N.className : ""));
            N.handleMouseEvents || W.setAttribute("cm-ignore-events", "true"), uc(N, W, i, r), e.display.input.setUneditable(W), a && N.above ? p.insertBefore(W, i.gutter || i.text) : p.appendChild(W), Tt(N, "redraw");
          }
      }
      function uc(e, n, i, r) {
        if (e.noHScroll) {
          (i.alignable || (i.alignable = [])).push(n);
          var a = r.wrapperWidth;
          n.style.left = r.fixedPos + "px", e.coverGutter || (a -= r.gutterTotalWidth, n.style.paddingLeft = r.gutterTotalWidth + "px"), n.style.width = a + "px";
        }
        e.coverGutter && (n.style.zIndex = 5, n.style.position = "relative", e.noHScroll || (n.style.marginLeft = -r.gutterTotalWidth + "px"));
      }
      function Ei(e) {
        if (e.height != null)
          return e.height;
        var n = e.doc.cm;
        if (!n)
          return 0;
        if (!K(document.body, e.node)) {
          var i = "position: relative;";
          e.coverGutter && (i += "margin-left: -" + n.display.gutters.offsetWidth + "px;"), e.noHScroll && (i += "width: " + n.display.wrapper.clientWidth + "px;"), $(n.display.measure, P("div", [e.node], null, i));
        }
        return e.height = e.node.parentNode.offsetHeight;
      }
      function Vn(e, n) {
        for (var i = pi(n); i != e.wrapper; i = i.parentNode)
          if (!i || i.nodeType == 1 && i.getAttribute("cm-ignore-events") == "true" || i.parentNode == e.sizer && i != e.mover)
            return !0;
      }
      function yo(e) {
        return e.lineSpace.offsetTop;
      }
      function ya(e) {
        return e.mover.offsetHeight - e.lineSpace.offsetHeight;
      }
      function Ks(e) {
        if (e.cachedPaddingH)
          return e.cachedPaddingH;
        var n = $(e.measure, P("pre", "x", "CodeMirror-line-like")), i = window.getComputedStyle ? window.getComputedStyle(n) : n.currentStyle, r = { left: parseInt(i.paddingLeft), right: parseInt(i.paddingRight) };
        return !isNaN(r.left) && !isNaN(r.right) && (e.cachedPaddingH = r), r;
      }
      function Fn(e) {
        return je - e.display.nativeBarWidth;
      }
      function Sr(e) {
        return e.display.scroller.clientWidth - Fn(e) - e.display.barWidth;
      }
      function Aa(e) {
        return e.display.scroller.clientHeight - Fn(e) - e.display.barHeight;
      }
      function fc(e, n, i) {
        var r = e.options.lineWrapping, a = r && Sr(e);
        if (!n.measure.heights || r && n.measure.width != a) {
          var p = n.measure.heights = [];
          if (r) {
            n.measure.width = a;
            for (var D = n.text.firstChild.getClientRects(), L = 0; L < D.length - 1; L++) {
              var N = D[L], W = D[L + 1];
              Math.abs(N.bottom - W.bottom) > 2 && p.push((N.bottom + W.top) / 2 - i.top);
            }
          }
          p.push(i.bottom - i.top);
        }
      }
      function Xs(e, n, i) {
        if (e.line == n)
          return { map: e.measure.map, cache: e.measure.cache };
        if (e.rest) {
          for (var r = 0; r < e.rest.length; r++)
            if (e.rest[r] == n)
              return { map: e.measure.maps[r], cache: e.measure.caches[r] };
          for (var a = 0; a < e.rest.length; a++)
            if (j(e.rest[a]) > i)
              return { map: e.measure.maps[a], cache: e.measure.caches[a], before: !0 };
        }
      }
      function dc(e, n) {
        n = Tn(n);
        var i = j(n), r = e.display.externalMeasured = new $s(e.doc, n, i);
        r.lineN = i;
        var a = r.built = Ws(e, r);
        return r.text = a.pre, $(e.display.lineMeasure, a.pre), r;
      }
      function Js(e, n, i, r) {
        return On(e, Vr(e, n), i, r);
      }
      function xa(e, n) {
        if (n >= e.display.viewFrom && n < e.display.viewTo)
          return e.display.view[Cr(e, n)];
        var i = e.display.externalMeasured;
        if (i && n >= i.lineN && n < i.lineN + i.size)
          return i;
      }
      function Vr(e, n) {
        var i = j(n), r = xa(e, i);
        r && !r.text ? r = null : r && r.changes && (Ys(e, r, i, Ta(e)), e.curOp.forceUpdate = !0), r || (r = dc(e, n));
        var a = Xs(r, n, i);
        return {
          line: n,
          view: r,
          rect: null,
          map: a.map,
          cache: a.cache,
          before: a.before,
          hasHeights: !1
        };
      }
      function On(e, n, i, r, a) {
        n.before && (i = -1);
        var p = i + (r || ""), D;
        return n.cache.hasOwnProperty(p) ? D = n.cache[p] : (n.rect || (n.rect = n.view.text.getBoundingClientRect()), n.hasHeights || (fc(e, n.view, n.rect), n.hasHeights = !0), D = vc(e, n, i, r), D.bogus || (n.cache[p] = D)), {
          left: D.left,
          right: D.right,
          top: a ? D.rtop : D.top,
          bottom: a ? D.rbottom : D.bottom
        };
      }
      var Zs = { left: 0, right: 0, top: 0, bottom: 0 };
      function qs(e, n, i) {
        for (var r, a, p, D, L, N, W = 0; W < e.length; W += 3)
          if (L = e[W], N = e[W + 1], n < L ? (a = 0, p = 1, D = "left") : n < N ? (a = n - L, p = a + 1) : (W == e.length - 3 || n == N && e[W + 3] > n) && (p = N - L, a = p - 1, n >= N && (D = "right")), a != null) {
            if (r = e[W + 2], L == N && i == (r.insertLeft ? "left" : "right") && (D = i), i == "left" && a == 0)
              for (; W && e[W - 2] == e[W - 3] && e[W - 1].insertLeft; )
                r = e[(W -= 3) + 2], D = "left";
            if (i == "right" && a == N - L)
              for (; W < e.length - 3 && e[W + 3] == e[W + 4] && !e[W + 5].insertLeft; )
                r = e[(W += 3) + 2], D = "right";
            break;
          }
        return { node: r, start: a, end: p, collapse: D, coverStart: L, coverEnd: N };
      }
      function cc(e, n) {
        var i = Zs;
        if (n == "left")
          for (var r = 0; r < e.length && (i = e[r]).left == i.right; r++)
            ;
        else
          for (var a = e.length - 1; a >= 0 && (i = e[a]).left == i.right; a--)
            ;
        return i;
      }
      function vc(e, n, i, r) {
        var a = qs(n.map, i, r), p = a.node, D = a.start, L = a.end, N = a.collapse, W;
        if (p.nodeType == 3) {
          for (var V = 0; V < 4; V++) {
            for (; D && Ke(n.line.text.charAt(a.coverStart + D)); )
              --D;
            for (; a.coverStart + L < a.coverEnd && Ke(n.line.text.charAt(a.coverStart + L)); )
              ++L;
            if (d && m < 9 && D == 0 && L == a.coverEnd - a.coverStart ? W = p.parentNode.getBoundingClientRect() : W = cc(Q(p, D, L).getClientRects(), r), W.left || W.right || D == 0)
              break;
            L = D, D = D - 1, N = "right";
          }
          d && m < 11 && (W = pc(e.display.measure, W));
        } else {
          D > 0 && (N = r = "right");
          var k;
          e.options.lineWrapping && (k = p.getClientRects()).length > 1 ? W = k[r == "right" ? k.length - 1 : 0] : W = p.getBoundingClientRect();
        }
        if (d && m < 9 && !D && (!W || !W.left && !W.right)) {
          var Z = p.parentNode.getClientRects()[0];
          Z ? W = { left: Z.left, right: Z.left + Gr(e.display), top: Z.top, bottom: Z.bottom } : W = Zs;
        }
        for (var J = W.top - n.rect.top, te = W.bottom - n.rect.top, ie = (J + te) / 2, de = n.view.measure.heights, he = 0; he < de.length - 1 && !(ie < de[he]); he++)
          ;
        var xe = he ? de[he - 1] : 0, ge = de[he], Te = {
          left: (N == "right" ? W.right : W.left) - n.rect.left,
          right: (N == "left" ? W.left : W.right) - n.rect.left,
          top: xe,
          bottom: ge
        };
        return !W.left && !W.right && (Te.bogus = !0), e.options.singleCursorHeightPerLine || (Te.rtop = J, Te.rbottom = te), Te;
      }
      function pc(e, n) {
        if (!window.screen || screen.logicalXDPI == null || screen.logicalXDPI == screen.deviceXDPI || !ua(e))
          return n;
        var i = screen.logicalXDPI / screen.deviceXDPI, r = screen.logicalYDPI / screen.deviceYDPI;
        return {
          left: n.left * i,
          right: n.right * i,
          top: n.top * r,
          bottom: n.bottom * r
        };
      }
      function _s(e) {
        if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest))
          for (var n = 0; n < e.rest.length; n++)
            e.measure.caches[n] = {};
      }
      function eu(e) {
        e.display.externalMeasure = null, H(e.display.lineMeasure);
        for (var n = 0; n < e.display.view.length; n++)
          _s(e.display.view[n]);
      }
      function bi(e) {
        eu(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null;
      }
      function tu(e) {
        return w && h ? -(e.body.getBoundingClientRect().left - parseInt(getComputedStyle(e.body).marginLeft)) : e.defaultView.pageXOffset || (e.documentElement || e.body).scrollLeft;
      }
      function nu(e) {
        return w && h ? -(e.body.getBoundingClientRect().top - parseInt(getComputedStyle(e.body).marginTop)) : e.defaultView.pageYOffset || (e.documentElement || e.body).scrollTop;
      }
      function Sa(e) {
        var n = Tn(e), i = n.widgets, r = 0;
        if (i)
          for (var a = 0; a < i.length; ++a)
            i[a].above && (r += Ei(i[a]));
        return r;
      }
      function Ao(e, n, i, r, a) {
        if (!a) {
          var p = Sa(n);
          i.top += p, i.bottom += p;
        }
        if (r == "line")
          return i;
        r || (r = "local");
        var D = Yn(n);
        if (r == "local" ? D += yo(e.display) : D -= e.display.viewOffset, r == "page" || r == "window") {
          var L = e.display.lineSpace.getBoundingClientRect();
          D += L.top + (r == "window" ? 0 : nu(Se(e)));
          var N = L.left + (r == "window" ? 0 : tu(Se(e)));
          i.left += N, i.right += N;
        }
        return i.top += D, i.bottom += D, i;
      }
      function ru(e, n, i) {
        if (i == "div")
          return n;
        var r = n.left, a = n.top;
        if (i == "page")
          r -= tu(Se(e)), a -= nu(Se(e));
        else if (i == "local" || !i) {
          var p = e.display.sizer.getBoundingClientRect();
          r += p.left, a += p.top;
        }
        var D = e.display.lineSpace.getBoundingClientRect();
        return { left: r - D.left, top: a - D.top };
      }
      function xo(e, n, i, r, a) {
        return r || (r = we(e.doc, n.line)), Ao(e, r, Js(e, r, n.ch, a), i);
      }
      function wn(e, n, i, r, a, p) {
        r = r || we(e.doc, n.line), a || (a = Vr(e, r));
        function D(te, ie) {
          var de = On(e, a, te, ie ? "right" : "left", p);
          return ie ? de.left = de.right : de.right = de.left, Ao(e, r, de, i);
        }
        var L = oe(r, e.doc.direction), N = n.ch, W = n.sticky;
        if (N >= r.text.length ? (N = r.text.length, W = "before") : N <= 0 && (N = 0, W = "after"), !L)
          return D(W == "before" ? N - 1 : N, W == "before");
        function V(te, ie, de) {
          var he = L[ie], xe = he.level == 1;
          return D(de ? te - 1 : te, xe != de);
        }
        var k = Fe(L, N, W), Z = me, J = V(N, k, W == "before");
        return Z != null && (J.other = V(N, Z, W != "before")), J;
      }
      function iu(e, n) {
        var i = 0;
        n = Oe(e.doc, n), e.options.lineWrapping || (i = Gr(e.display) * n.ch);
        var r = we(e.doc, n.line), a = Yn(r) + yo(e.display);
        return { left: i, right: i, top: a, bottom: a + r.height };
      }
      function Ea(e, n, i, r, a) {
        var p = ee(e, n, i);
        return p.xRel = a, r && (p.outside = r), p;
      }
      function ba(e, n, i) {
        var r = e.doc;
        if (i += e.display.viewOffset, i < 0)
          return Ea(r.first, 0, null, -1, -1);
        var a = G(r, i), p = r.first + r.size - 1;
        if (a > p)
          return Ea(r.first + r.size - 1, we(r, p).text.length, null, 1, 1);
        n < 0 && (n = 0);
        for (var D = we(r, a); ; ) {
          var L = hc(e, D, a, n, i), N = Yd(D, L.ch + (L.xRel > 0 || L.outside > 0 ? 1 : 0));
          if (!N)
            return L;
          var W = N.find(1);
          if (W.line == a)
            return W;
          D = we(r, a = W.line);
        }
      }
      function ou(e, n, i, r) {
        r -= Sa(n);
        var a = n.text.length, p = We(function(D) {
          return On(e, i, D - 1).bottom <= r;
        }, a, 0);
        return a = We(function(D) {
          return On(e, i, D).top > r;
        }, p, a), { begin: p, end: a };
      }
      function au(e, n, i, r) {
        i || (i = Vr(e, n));
        var a = Ao(e, n, On(e, i, r), "line").top;
        return ou(e, n, i, a);
      }
      function Ca(e, n, i, r) {
        return e.bottom <= i ? !1 : e.top > i ? !0 : (r ? e.left : e.right) > n;
      }
      function hc(e, n, i, r, a) {
        a -= Yn(n);
        var p = Vr(e, n), D = Sa(n), L = 0, N = n.text.length, W = !0, V = oe(n, e.doc.direction);
        if (V) {
          var k = (e.options.lineWrapping ? mc : gc)(e, n, i, p, V, r, a);
          W = k.level != 1, L = W ? k.from : k.to - 1, N = W ? k.to : k.from - 1;
        }
        var Z = null, J = null, te = We(function(Re) {
          var Me = On(e, p, Re);
          return Me.top += D, Me.bottom += D, Ca(Me, r, a, !1) ? (Me.top <= a && Me.left <= r && (Z = Re, J = Me), !0) : !1;
        }, L, N), ie, de, he = !1;
        if (J) {
          var xe = r - J.left < J.right - r, ge = xe == W;
          te = Z + (ge ? 0 : 1), de = ge ? "after" : "before", ie = xe ? J.left : J.right;
        } else {
          !W && (te == N || te == L) && te++, de = te == 0 ? "after" : te == n.text.length ? "before" : On(e, p, te - (W ? 1 : 0)).bottom + D <= a == W ? "after" : "before";
          var Te = wn(e, ee(i, te, de), "line", n, p);
          ie = Te.left, he = a < Te.top ? -1 : a >= Te.bottom ? 1 : 0;
        }
        return te = Xt(n.text, te, 1), Ea(i, te, de, he, r - ie);
      }
      function gc(e, n, i, r, a, p, D) {
        var L = We(function(k) {
          var Z = a[k], J = Z.level != 1;
          return Ca(wn(
            e,
            ee(i, J ? Z.to : Z.from, J ? "before" : "after"),
            "line",
            n,
            r
          ), p, D, !0);
        }, 0, a.length - 1), N = a[L];
        if (L > 0) {
          var W = N.level != 1, V = wn(
            e,
            ee(i, W ? N.from : N.to, W ? "after" : "before"),
            "line",
            n,
            r
          );
          Ca(V, p, D, !0) && V.top > D && (N = a[L - 1]);
        }
        return N;
      }
      function mc(e, n, i, r, a, p, D) {
        var L = ou(e, n, r, D), N = L.begin, W = L.end;
        /\s/.test(n.text.charAt(W - 1)) && W--;
        for (var V = null, k = null, Z = 0; Z < a.length; Z++) {
          var J = a[Z];
          if (!(J.from >= W || J.to <= N)) {
            var te = J.level != 1, ie = On(e, r, te ? Math.min(W, J.to) - 1 : Math.max(N, J.from)).right, de = ie < p ? p - ie + 1e9 : ie - p;
            (!V || k > de) && (V = J, k = de);
          }
        }
        return V || (V = a[a.length - 1]), V.from < N && (V = { from: N, to: V.to, level: V.level }), V.to > W && (V = { from: V.from, to: W, level: V.level }), V;
      }
      var Er;
      function Qr(e) {
        if (e.cachedTextHeight != null)
          return e.cachedTextHeight;
        if (Er == null) {
          Er = P("pre", null, "CodeMirror-line-like");
          for (var n = 0; n < 49; ++n)
            Er.appendChild(document.createTextNode("x")), Er.appendChild(P("br"));
          Er.appendChild(document.createTextNode("x"));
        }
        $(e.measure, Er);
        var i = Er.offsetHeight / 50;
        return i > 3 && (e.cachedTextHeight = i), H(e.measure), i || 1;
      }
      function Gr(e) {
        if (e.cachedCharWidth != null)
          return e.cachedCharWidth;
        var n = P("span", "xxxxxxxxxx"), i = P("pre", [n], "CodeMirror-line-like");
        $(e.measure, i);
        var r = n.getBoundingClientRect(), a = (r.right - r.left) / 10;
        return a > 2 && (e.cachedCharWidth = a), a || 10;
      }
      function Ta(e) {
        for (var n = e.display, i = {}, r = {}, a = n.gutters.clientLeft, p = n.gutters.firstChild, D = 0; p; p = p.nextSibling, ++D) {
          var L = e.display.gutterSpecs[D].className;
          i[L] = p.offsetLeft + p.clientLeft + a, r[L] = p.clientWidth;
        }
        return {
          fixedPos: wa(n),
          gutterTotalWidth: n.gutters.offsetWidth,
          gutterLeft: i,
          gutterWidth: r,
          wrapperWidth: n.wrapper.clientWidth
        };
      }
      function wa(e) {
        return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left;
      }
      function lu(e) {
        var n = Qr(e.display), i = e.options.lineWrapping, r = i && Math.max(5, e.display.scroller.clientWidth / Gr(e.display) - 3);
        return function(a) {
          if (rr(e.doc, a))
            return 0;
          var p = 0;
          if (a.widgets)
            for (var D = 0; D < a.widgets.length; D++)
              a.widgets[D].height && (p += a.widgets[D].height);
          return i ? p + (Math.ceil(a.text.length / r) || 1) * n : p + n;
        };
      }
      function Da(e) {
        var n = e.doc, i = lu(e);
        n.iter(function(r) {
          var a = i(r);
          a != r.height && un(r, a);
        });
      }
      function br(e, n, i, r) {
        var a = e.display;
        if (!i && pi(n).getAttribute("cm-not-content") == "true")
          return null;
        var p, D, L = a.lineSpace.getBoundingClientRect();
        try {
          p = n.clientX - L.left, D = n.clientY - L.top;
        } catch {
          return null;
        }
        var N = ba(e, p, D), W;
        if (r && N.xRel > 0 && (W = we(e.doc, N.line).text).length == N.ch) {
          var V = pe(W, W.length, e.options.tabSize) - W.length;
          N = ee(N.line, Math.max(0, Math.round((p - Ks(e.display).left) / Gr(e.display)) - V));
        }
        return N;
      }
      function Cr(e, n) {
        if (n >= e.display.viewTo || (n -= e.display.viewFrom, n < 0))
          return null;
        for (var i = e.display.view, r = 0; r < i.length; r++)
          if (n -= i[r].size, n < 0)
            return r;
      }
      function qt(e, n, i, r) {
        n == null && (n = e.doc.first), i == null && (i = e.doc.first + e.doc.size), r || (r = 0);
        var a = e.display;
        if (r && i < a.viewTo && (a.updateLineNumbers == null || a.updateLineNumbers > n) && (a.updateLineNumbers = n), e.curOp.viewChanged = !0, n >= a.viewTo)
          $n && pa(e.doc, n) < a.viewTo && or(e);
        else if (i <= a.viewFrom)
          $n && Us(e.doc, i + r) > a.viewFrom ? or(e) : (a.viewFrom += r, a.viewTo += r);
        else if (n <= a.viewFrom && i >= a.viewTo)
          or(e);
        else if (n <= a.viewFrom) {
          var p = So(e, i, i + r, 1);
          p ? (a.view = a.view.slice(p.index), a.viewFrom = p.lineN, a.viewTo += r) : or(e);
        } else if (i >= a.viewTo) {
          var D = So(e, n, n, -1);
          D ? (a.view = a.view.slice(0, D.index), a.viewTo = D.lineN) : or(e);
        } else {
          var L = So(e, n, n, -1), N = So(e, i, i + r, 1);
          L && N ? (a.view = a.view.slice(0, L.index).concat(mo(e, L.lineN, N.lineN)).concat(a.view.slice(N.index)), a.viewTo += r) : or(e);
        }
        var W = a.externalMeasured;
        W && (i < W.lineN ? W.lineN += r : n < W.lineN + W.size && (a.externalMeasured = null));
      }
      function ir(e, n, i) {
        e.curOp.viewChanged = !0;
        var r = e.display, a = e.display.externalMeasured;
        if (a && n >= a.lineN && n < a.lineN + a.size && (r.externalMeasured = null), !(n < r.viewFrom || n >= r.viewTo)) {
          var p = r.view[Cr(e, n)];
          if (p.node != null) {
            var D = p.changes || (p.changes = []);
            be(D, i) == -1 && D.push(i);
          }
        }
      }
      function or(e) {
        e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0;
      }
      function So(e, n, i, r) {
        var a = Cr(e, n), p, D = e.display.view;
        if (!$n || i == e.doc.first + e.doc.size)
          return { index: a, lineN: i };
        for (var L = e.display.viewFrom, N = 0; N < a; N++)
          L += D[N].size;
        if (L != n) {
          if (r > 0) {
            if (a == D.length - 1)
              return null;
            p = L + D[a].size - n, a++;
          } else
            p = L - n;
          n += p, i += p;
        }
        for (; pa(e.doc, i) != i; ) {
          if (a == (r < 0 ? 0 : D.length - 1))
            return null;
          i += r * D[a - (r < 0 ? 1 : 0)].size, a += r;
        }
        return { index: a, lineN: i };
      }
      function yc(e, n, i) {
        var r = e.display, a = r.view;
        a.length == 0 || n >= r.viewTo || i <= r.viewFrom ? (r.view = mo(e, n, i), r.viewFrom = n) : (r.viewFrom > n ? r.view = mo(e, n, r.viewFrom).concat(r.view) : r.viewFrom < n && (r.view = r.view.slice(Cr(e, n))), r.viewFrom = n, r.viewTo < i ? r.view = r.view.concat(mo(e, r.viewTo, i)) : r.viewTo > i && (r.view = r.view.slice(0, Cr(e, i)))), r.viewTo = i;
      }
      function su(e) {
        for (var n = e.display.view, i = 0, r = 0; r < n.length; r++) {
          var a = n[r];
          !a.hidden && (!a.node || a.changes) && ++i;
        }
        return i;
      }
      function Ci(e) {
        e.display.input.showSelection(e.display.input.prepareSelection());
      }
      function uu(e, n) {
        n === void 0 && (n = !0);
        var i = e.doc, r = {}, a = r.cursors = document.createDocumentFragment(), p = r.selection = document.createDocumentFragment(), D = e.options.$customCursor;
        D && (n = !0);
        for (var L = 0; L < i.sel.ranges.length; L++)
          if (!(!n && L == i.sel.primIndex)) {
            var N = i.sel.ranges[L];
            if (!(N.from().line >= e.display.viewTo || N.to().line < e.display.viewFrom)) {
              var W = N.empty();
              if (D) {
                var V = D(e, N);
                V && Ma(e, V, a);
              } else
                (W || e.options.showCursorWhenSelecting) && Ma(e, N.head, a);
              W || Ac(e, N, p);
            }
          }
        return r;
      }
      function Ma(e, n, i) {
        var r = wn(e, n, "div", null, null, !e.options.singleCursorHeightPerLine), a = i.appendChild(P("div", "\xA0", "CodeMirror-cursor"));
        if (a.style.left = r.left + "px", a.style.top = r.top + "px", a.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px", /\bcm-fat-cursor\b/.test(e.getWrapperElement().className)) {
          var p = xo(e, n, "div", null, null), D = p.right - p.left;
          a.style.width = (D > 0 ? D : e.defaultCharWidth()) + "px";
        }
        if (r.other) {
          var L = i.appendChild(P("div", "\xA0", "CodeMirror-cursor CodeMirror-secondarycursor"));
          L.style.display = "", L.style.left = r.other.left + "px", L.style.top = r.other.top + "px", L.style.height = (r.other.bottom - r.other.top) * 0.85 + "px";
        }
      }
      function Eo(e, n) {
        return e.top - n.top || e.left - n.left;
      }
      function Ac(e, n, i) {
        var r = e.display, a = e.doc, p = document.createDocumentFragment(), D = Ks(e.display), L = D.left, N = Math.max(r.sizerWidth, Sr(e) - r.sizer.offsetLeft) - D.right, W = a.direction == "ltr";
        function V(ge, Te, Re, Me) {
          Te < 0 && (Te = 0), Te = Math.round(Te), Me = Math.round(Me), p.appendChild(P("div", null, "CodeMirror-selected", "position: absolute; left: " + ge + `px;
                             top: ` + Te + "px; width: " + (Re == null ? N - ge : Re) + `px;
                             height: ` + (Me - Te) + "px"));
        }
        function k(ge, Te, Re) {
          var Me = we(a, ge), Be = Me.text.length, _e, Mt;
          function rt(ht, tn) {
            return xo(e, ee(ge, ht), "div", Me, tn);
          }
          function ln(ht, tn, Ft) {
            var yt = au(e, Me, null, ht), gt = tn == "ltr" == (Ft == "after") ? "left" : "right", st = Ft == "after" ? yt.begin : yt.end - (/\s/.test(Me.text.charAt(yt.end - 1)) ? 2 : 1);
            return rt(st, gt)[gt];
          }
          var en = oe(Me, a.direction);
          return Ce(en, Te || 0, Re == null ? Be : Re, function(ht, tn, Ft, yt) {
            var gt = Ft == "ltr", st = rt(ht, gt ? "left" : "right"), nn = rt(tn - 1, gt ? "right" : "left"), oi = Te == null && ht == 0, dr = Re == null && tn == Be, zt = yt == 0, Bn = !en || yt == en.length - 1;
            if (nn.top - st.top <= 3) {
              var Rt = (W ? oi : dr) && zt, tl = (W ? dr : oi) && Bn, kn = Rt ? L : (gt ? st : nn).left, Rr = tl ? N : (gt ? nn : st).right;
              V(kn, st.top, Rr - kn, st.bottom);
            } else {
              var Pr, Vt, ai, nl;
              gt ? (Pr = W && oi && zt ? L : st.left, Vt = W ? N : ln(ht, Ft, "before"), ai = W ? L : ln(tn, Ft, "after"), nl = W && dr && Bn ? N : nn.right) : (Pr = W ? ln(ht, Ft, "before") : L, Vt = !W && oi && zt ? N : st.right, ai = !W && dr && Bn ? L : nn.left, nl = W ? ln(tn, Ft, "after") : N), V(Pr, st.top, Vt - Pr, st.bottom), st.bottom < nn.top && V(L, st.bottom, null, nn.top), V(ai, nn.top, nl - ai, nn.bottom);
            }
            (!_e || Eo(st, _e) < 0) && (_e = st), Eo(nn, _e) < 0 && (_e = nn), (!Mt || Eo(st, Mt) < 0) && (Mt = st), Eo(nn, Mt) < 0 && (Mt = nn);
          }), { start: _e, end: Mt };
        }
        var Z = n.from(), J = n.to();
        if (Z.line == J.line)
          k(Z.line, Z.ch, J.ch);
        else {
          var te = we(a, Z.line), ie = we(a, J.line), de = Tn(te) == Tn(ie), he = k(Z.line, Z.ch, de ? te.text.length + 1 : null).end, xe = k(J.line, de ? 0 : null, J.ch).start;
          de && (he.top < xe.top - 2 ? (V(he.right, he.top, null, he.bottom), V(L, xe.top, xe.left, xe.bottom)) : V(he.right, he.top, xe.left - he.right, he.bottom)), he.bottom < xe.top && V(L, he.bottom, null, xe.top);
        }
        i.appendChild(p);
      }
      function Ra(e) {
        if (!!e.state.focused) {
          var n = e.display;
          clearInterval(n.blinker);
          var i = !0;
          n.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? n.blinker = setInterval(function() {
            e.hasFocus() || kr(e), n.cursorDiv.style.visibility = (i = !i) ? "" : "hidden";
          }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (n.cursorDiv.style.visibility = "hidden");
        }
      }
      function fu(e) {
        e.hasFocus() || (e.display.input.focus(), e.state.focused || Ia(e));
      }
      function Pa(e) {
        e.state.delayingBlurEvent = !0, setTimeout(function() {
          e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, e.state.focused && kr(e));
        }, 100);
      }
      function Ia(e, n) {
        e.state.delayingBlurEvent && !e.state.draggingText && (e.state.delayingBlurEvent = !1), e.options.readOnly != "nocursor" && (e.state.focused || ($e(e, "focus", e, n), e.state.focused = !0, X(e.display.wrapper, "CodeMirror-focused"), !e.curOp && e.display.selForContextMenu != e.doc.sel && (e.display.input.reset(), T && setTimeout(function() {
          return e.display.input.reset(!0);
        }, 20)), e.display.input.receivedFocus()), Ra(e));
      }
      function kr(e, n) {
        e.state.delayingBlurEvent || (e.state.focused && ($e(e, "blur", e, n), e.state.focused = !1, U(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function() {
          e.state.focused || (e.display.shift = !1);
        }, 150));
      }
      function bo(e) {
        for (var n = e.display, i = n.lineDiv.offsetTop, r = Math.max(0, n.scroller.getBoundingClientRect().top), a = n.lineDiv.getBoundingClientRect().top, p = 0, D = 0; D < n.view.length; D++) {
          var L = n.view[D], N = e.options.lineWrapping, W = void 0, V = 0;
          if (!L.hidden) {
            if (a += L.line.height, d && m < 8) {
              var k = L.node.offsetTop + L.node.offsetHeight;
              W = k - i, i = k;
            } else {
              var Z = L.node.getBoundingClientRect();
              W = Z.bottom - Z.top, !N && L.text.firstChild && (V = L.text.firstChild.getBoundingClientRect().right - Z.left - 1);
            }
            var J = L.line.height - W;
            if ((J > 5e-3 || J < -5e-3) && (a < r && (p -= J), un(L.line, W), du(L.line), L.rest))
              for (var te = 0; te < L.rest.length; te++)
                du(L.rest[te]);
            if (V > e.display.sizerWidth) {
              var ie = Math.ceil(V / Gr(e.display));
              ie > e.display.maxLineLength && (e.display.maxLineLength = ie, e.display.maxLine = L.line, e.display.maxLineChanged = !0);
            }
          }
        }
        Math.abs(p) > 2 && (n.scroller.scrollTop += p);
      }
      function du(e) {
        if (e.widgets)
          for (var n = 0; n < e.widgets.length; ++n) {
            var i = e.widgets[n], r = i.node.parentNode;
            r && (i.height = r.offsetHeight);
          }
      }
      function Co(e, n, i) {
        var r = i && i.top != null ? Math.max(0, i.top) : e.scroller.scrollTop;
        r = Math.floor(r - yo(e));
        var a = i && i.bottom != null ? i.bottom : r + e.wrapper.clientHeight, p = G(n, r), D = G(n, a);
        if (i && i.ensure) {
          var L = i.ensure.from.line, N = i.ensure.to.line;
          L < p ? (p = L, D = G(n, Yn(we(n, L)) + e.wrapper.clientHeight)) : Math.min(N, n.lastLine()) >= D && (p = G(n, Yn(we(n, N)) - e.wrapper.clientHeight), D = N);
        }
        return { from: p, to: Math.max(D, p + 1) };
      }
      function xc(e, n) {
        if (!Ge(e, "scrollCursorIntoView")) {
          var i = e.display, r = i.sizer.getBoundingClientRect(), a = null, p = i.wrapper.ownerDocument;
          if (n.top + r.top < 0 ? a = !0 : n.bottom + r.top > (p.defaultView.innerHeight || p.documentElement.clientHeight) && (a = !1), a != null && !M) {
            var D = P("div", "\u200B", null, `position: absolute;
                         top: ` + (n.top - i.viewOffset - yo(e.display)) + `px;
                         height: ` + (n.bottom - n.top + Fn(e) + i.barHeight) + `px;
                         left: ` + n.left + "px; width: " + Math.max(2, n.right - n.left) + "px;");
            e.display.lineSpace.appendChild(D), D.scrollIntoView(a), e.display.lineSpace.removeChild(D);
          }
        }
      }
      function Sc(e, n, i, r) {
        r == null && (r = 0);
        var a;
        !e.options.lineWrapping && n == i && (i = n.sticky == "before" ? ee(n.line, n.ch + 1, "before") : n, n = n.ch ? ee(n.line, n.sticky == "before" ? n.ch - 1 : n.ch, "after") : n);
        for (var p = 0; p < 5; p++) {
          var D = !1, L = wn(e, n), N = !i || i == n ? L : wn(e, i);
          a = {
            left: Math.min(L.left, N.left),
            top: Math.min(L.top, N.top) - r,
            right: Math.max(L.left, N.left),
            bottom: Math.max(L.bottom, N.bottom) + r
          };
          var W = La(e, a), V = e.doc.scrollTop, k = e.doc.scrollLeft;
          if (W.scrollTop != null && (wi(e, W.scrollTop), Math.abs(e.doc.scrollTop - V) > 1 && (D = !0)), W.scrollLeft != null && (Tr(e, W.scrollLeft), Math.abs(e.doc.scrollLeft - k) > 1 && (D = !0)), !D)
            break;
        }
        return a;
      }
      function Ec(e, n) {
        var i = La(e, n);
        i.scrollTop != null && wi(e, i.scrollTop), i.scrollLeft != null && Tr(e, i.scrollLeft);
      }
      function La(e, n) {
        var i = e.display, r = Qr(e.display);
        n.top < 0 && (n.top = 0);
        var a = e.curOp && e.curOp.scrollTop != null ? e.curOp.scrollTop : i.scroller.scrollTop, p = Aa(e), D = {};
        n.bottom - n.top > p && (n.bottom = n.top + p);
        var L = e.doc.height + ya(i), N = n.top < r, W = n.bottom > L - r;
        if (n.top < a)
          D.scrollTop = N ? 0 : n.top;
        else if (n.bottom > a + p) {
          var V = Math.min(n.top, (W ? L : n.bottom) - p);
          V != a && (D.scrollTop = V);
        }
        var k = e.options.fixedGutter ? 0 : i.gutters.offsetWidth, Z = e.curOp && e.curOp.scrollLeft != null ? e.curOp.scrollLeft : i.scroller.scrollLeft - k, J = Sr(e) - i.gutters.offsetWidth, te = n.right - n.left > J;
        return te && (n.right = n.left + J), n.left < 10 ? D.scrollLeft = 0 : n.left < Z ? D.scrollLeft = Math.max(0, n.left + k - (te ? 0 : 10)) : n.right > J + Z - 3 && (D.scrollLeft = n.right + (te ? 0 : 10) - J), D;
      }
      function Na(e, n) {
        n != null && (To(e), e.curOp.scrollTop = (e.curOp.scrollTop == null ? e.doc.scrollTop : e.curOp.scrollTop) + n);
      }
      function Kr(e) {
        To(e);
        var n = e.getCursor();
        e.curOp.scrollToPos = { from: n, to: n, margin: e.options.cursorScrollMargin };
      }
      function Ti(e, n, i) {
        (n != null || i != null) && To(e), n != null && (e.curOp.scrollLeft = n), i != null && (e.curOp.scrollTop = i);
      }
      function bc(e, n) {
        To(e), e.curOp.scrollToPos = n;
      }
      function To(e) {
        var n = e.curOp.scrollToPos;
        if (n) {
          e.curOp.scrollToPos = null;
          var i = iu(e, n.from), r = iu(e, n.to);
          cu(e, i, r, n.margin);
        }
      }
      function cu(e, n, i, r) {
        var a = La(e, {
          left: Math.min(n.left, i.left),
          top: Math.min(n.top, i.top) - r,
          right: Math.max(n.right, i.right),
          bottom: Math.max(n.bottom, i.bottom) + r
        });
        Ti(e, a.scrollLeft, a.scrollTop);
      }
      function wi(e, n) {
        Math.abs(e.doc.scrollTop - n) < 2 || (t || Oa(e, { top: n }), vu(e, n, !0), t && Oa(e), Ri(e, 100));
      }
      function vu(e, n, i) {
        n = Math.max(0, Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, n)), !(e.display.scroller.scrollTop == n && !i) && (e.doc.scrollTop = n, e.display.scrollbars.setScrollTop(n), e.display.scroller.scrollTop != n && (e.display.scroller.scrollTop = n));
      }
      function Tr(e, n, i, r) {
        n = Math.max(0, Math.min(n, e.display.scroller.scrollWidth - e.display.scroller.clientWidth)), !((i ? n == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - n) < 2) && !r) && (e.doc.scrollLeft = n, yu(e), e.display.scroller.scrollLeft != n && (e.display.scroller.scrollLeft = n), e.display.scrollbars.setScrollLeft(n));
      }
      function Di(e) {
        var n = e.display, i = n.gutters.offsetWidth, r = Math.round(e.doc.height + ya(e.display));
        return {
          clientHeight: n.scroller.clientHeight,
          viewHeight: n.wrapper.clientHeight,
          scrollWidth: n.scroller.scrollWidth,
          clientWidth: n.scroller.clientWidth,
          viewWidth: n.wrapper.clientWidth,
          barLeft: e.options.fixedGutter ? i : 0,
          docHeight: r,
          scrollHeight: r + Fn(e) + n.barHeight,
          nativeBarWidth: n.nativeBarWidth,
          gutterWidth: i
        };
      }
      var wr = function(e, n, i) {
        this.cm = i;
        var r = this.vert = P("div", [P("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"), a = this.horiz = P("div", [P("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
        r.tabIndex = a.tabIndex = -1, e(r), e(a), ue(r, "scroll", function() {
          r.clientHeight && n(r.scrollTop, "vertical");
        }), ue(a, "scroll", function() {
          a.clientWidth && n(a.scrollLeft, "horizontal");
        }), this.checkedZeroWidth = !1, d && m < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
      };
      wr.prototype.update = function(e) {
        var n = e.scrollWidth > e.clientWidth + 1, i = e.scrollHeight > e.clientHeight + 1, r = e.nativeBarWidth;
        if (i) {
          this.vert.style.display = "block", this.vert.style.bottom = n ? r + "px" : "0";
          var a = e.viewHeight - (n ? r : 0);
          this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + a) + "px";
        } else
          this.vert.scrollTop = 0, this.vert.style.display = "", this.vert.firstChild.style.height = "0";
        if (n) {
          this.horiz.style.display = "block", this.horiz.style.right = i ? r + "px" : "0", this.horiz.style.left = e.barLeft + "px";
          var p = e.viewWidth - e.barLeft - (i ? r : 0);
          this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + p) + "px";
        } else
          this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
        return !this.checkedZeroWidth && e.clientHeight > 0 && (r == 0 && this.zeroWidthHack(), this.checkedZeroWidth = !0), { right: i ? r : 0, bottom: n ? r : 0 };
      }, wr.prototype.setScrollLeft = function(e) {
        this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
      }, wr.prototype.setScrollTop = function(e) {
        this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
      }, wr.prototype.zeroWidthHack = function() {
        var e = C && !v ? "12px" : "18px";
        this.horiz.style.height = this.vert.style.width = e, this.horiz.style.visibility = this.vert.style.visibility = "hidden", this.disableHoriz = new Pe(), this.disableVert = new Pe();
      }, wr.prototype.enableZeroWidthBar = function(e, n, i) {
        e.style.visibility = "";
        function r() {
          var a = e.getBoundingClientRect(), p = i == "vert" ? document.elementFromPoint(a.right - 1, (a.top + a.bottom) / 2) : document.elementFromPoint((a.right + a.left) / 2, a.bottom - 1);
          p != e ? e.style.visibility = "hidden" : n.set(1e3, r);
        }
        n.set(1e3, r);
      }, wr.prototype.clear = function() {
        var e = this.horiz.parentNode;
        e.removeChild(this.horiz), e.removeChild(this.vert);
      };
      var Mi = function() {
      };
      Mi.prototype.update = function() {
        return { bottom: 0, right: 0 };
      }, Mi.prototype.setScrollLeft = function() {
      }, Mi.prototype.setScrollTop = function() {
      }, Mi.prototype.clear = function() {
      };
      function Xr(e, n) {
        n || (n = Di(e));
        var i = e.display.barWidth, r = e.display.barHeight;
        pu(e, n);
        for (var a = 0; a < 4 && i != e.display.barWidth || r != e.display.barHeight; a++)
          i != e.display.barWidth && e.options.lineWrapping && bo(e), pu(e, Di(e)), i = e.display.barWidth, r = e.display.barHeight;
      }
      function pu(e, n) {
        var i = e.display, r = i.scrollbars.update(n);
        i.sizer.style.paddingRight = (i.barWidth = r.right) + "px", i.sizer.style.paddingBottom = (i.barHeight = r.bottom) + "px", i.heightForcer.style.borderBottom = r.bottom + "px solid transparent", r.right && r.bottom ? (i.scrollbarFiller.style.display = "block", i.scrollbarFiller.style.height = r.bottom + "px", i.scrollbarFiller.style.width = r.right + "px") : i.scrollbarFiller.style.display = "", r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (i.gutterFiller.style.display = "block", i.gutterFiller.style.height = r.bottom + "px", i.gutterFiller.style.width = n.gutterWidth + "px") : i.gutterFiller.style.display = "";
      }
      var hu = { native: wr, null: Mi };
      function gu(e) {
        e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && U(e.display.wrapper, e.display.scrollbars.addClass)), e.display.scrollbars = new hu[e.options.scrollbarStyle](function(n) {
          e.display.wrapper.insertBefore(n, e.display.scrollbarFiller), ue(n, "mousedown", function() {
            e.state.focused && setTimeout(function() {
              return e.display.input.focus();
            }, 0);
          }), n.setAttribute("cm-not-content", "true");
        }, function(n, i) {
          i == "horizontal" ? Tr(e, n) : wi(e, n);
        }, e), e.display.scrollbars.addClass && X(e.display.wrapper, e.display.scrollbars.addClass);
      }
      var Cc = 0;
      function Dr(e) {
        e.curOp = {
          cm: e,
          viewChanged: !1,
          startHeight: e.doc.height,
          forceUpdate: !1,
          updateInput: 0,
          typing: !1,
          changeObjs: null,
          cursorActivityHandlers: null,
          cursorActivityCalled: 0,
          selectionChanged: !1,
          updateMaxLine: !1,
          scrollLeft: null,
          scrollTop: null,
          scrollToPos: null,
          focus: !1,
          id: ++Cc,
          markArrays: null
        }, tc(e.curOp);
      }
      function Mr(e) {
        var n = e.curOp;
        n && rc(n, function(i) {
          for (var r = 0; r < i.ops.length; r++)
            i.ops[r].cm.curOp = null;
          Tc(i);
        });
      }
      function Tc(e) {
        for (var n = e.ops, i = 0; i < n.length; i++)
          wc(n[i]);
        for (var r = 0; r < n.length; r++)
          Dc(n[r]);
        for (var a = 0; a < n.length; a++)
          Mc(n[a]);
        for (var p = 0; p < n.length; p++)
          Rc(n[p]);
        for (var D = 0; D < n.length; D++)
          Pc(n[D]);
      }
      function wc(e) {
        var n = e.cm, i = n.display;
        Lc(n), e.updateMaxLine && ga(n), e.mustUpdate = e.viewChanged || e.forceUpdate || e.scrollTop != null || e.scrollToPos && (e.scrollToPos.from.line < i.viewFrom || e.scrollToPos.to.line >= i.viewTo) || i.maxLineChanged && n.options.lineWrapping, e.update = e.mustUpdate && new wo(n, e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos }, e.forceUpdate);
      }
      function Dc(e) {
        e.updatedDisplay = e.mustUpdate && Fa(e.cm, e.update);
      }
      function Mc(e) {
        var n = e.cm, i = n.display;
        e.updatedDisplay && bo(n), e.barMeasure = Di(n), i.maxLineChanged && !n.options.lineWrapping && (e.adjustWidthTo = Js(n, i.maxLine, i.maxLine.text.length).left + 3, n.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(i.scroller.clientWidth, i.sizer.offsetLeft + e.adjustWidthTo + Fn(n) + n.display.barWidth), e.maxScrollLeft = Math.max(0, i.sizer.offsetLeft + e.adjustWidthTo - Sr(n))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = i.input.prepareSelection());
      }
      function Rc(e) {
        var n = e.cm;
        e.adjustWidthTo != null && (n.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < n.doc.scrollLeft && Tr(n, Math.min(n.display.scroller.scrollLeft, e.maxScrollLeft), !0), n.display.maxLineChanged = !1);
        var i = e.focus && e.focus == q(ve(n));
        e.preparedSelection && n.display.input.showSelection(e.preparedSelection, i), (e.updatedDisplay || e.startHeight != n.doc.height) && Xr(n, e.barMeasure), e.updatedDisplay && Ha(n, e.barMeasure), e.selectionChanged && Ra(n), n.state.focused && e.updateInput && n.display.input.reset(e.typing), i && fu(e.cm);
      }
      function Pc(e) {
        var n = e.cm, i = n.display, r = n.doc;
        if (e.updatedDisplay && mu(n, e.update), i.wheelStartX != null && (e.scrollTop != null || e.scrollLeft != null || e.scrollToPos) && (i.wheelStartX = i.wheelStartY = null), e.scrollTop != null && vu(n, e.scrollTop, e.forceScroll), e.scrollLeft != null && Tr(n, e.scrollLeft, !0, !0), e.scrollToPos) {
          var a = Sc(
            n,
            Oe(r, e.scrollToPos.from),
            Oe(r, e.scrollToPos.to),
            e.scrollToPos.margin
          );
          xc(n, a);
        }
        var p = e.maybeHiddenMarkers, D = e.maybeUnhiddenMarkers;
        if (p)
          for (var L = 0; L < p.length; ++L)
            p[L].lines.length || $e(p[L], "hide");
        if (D)
          for (var N = 0; N < D.length; ++N)
            D[N].lines.length && $e(D[N], "unhide");
        i.wrapper.offsetHeight && (r.scrollTop = n.display.scroller.scrollTop), e.changeObjs && $e(n, "changes", n, e.changeObjs), e.update && e.update.finish();
      }
      function an(e, n) {
        if (e.curOp)
          return n();
        Dr(e);
        try {
          return n();
        } finally {
          Mr(e);
        }
      }
      function wt(e, n) {
        return function() {
          if (e.curOp)
            return n.apply(e, arguments);
          Dr(e);
          try {
            return n.apply(e, arguments);
          } finally {
            Mr(e);
          }
        };
      }
      function Yt(e) {
        return function() {
          if (this.curOp)
            return e.apply(this, arguments);
          Dr(this);
          try {
            return e.apply(this, arguments);
          } finally {
            Mr(this);
          }
        };
      }
      function Dt(e) {
        return function() {
          var n = this.cm;
          if (!n || n.curOp)
            return e.apply(this, arguments);
          Dr(n);
          try {
            return e.apply(this, arguments);
          } finally {
            Mr(n);
          }
        };
      }
      function Ri(e, n) {
        e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(n, re(Ic, e));
      }
      function Ic(e) {
        var n = e.doc;
        if (!(n.highlightFrontier >= e.display.viewTo)) {
          var i = +new Date() + e.options.workTime, r = yi(e, n.highlightFrontier), a = [];
          n.iter(r.line, Math.min(n.first + n.size, e.display.viewTo + 500), function(p) {
            if (r.line >= e.display.viewFrom) {
              var D = p.styles, L = p.text.length > e.options.maxHighlightLength ? Ln(n.mode, r.state) : null, N = Cs(e, p, r, !0);
              L && (r.state = L), p.styles = N.styles;
              var W = p.styleClasses, V = N.classes;
              V ? p.styleClasses = V : W && (p.styleClasses = null);
              for (var k = !D || D.length != p.styles.length || W != V && (!W || !V || W.bgClass != V.bgClass || W.textClass != V.textClass), Z = 0; !k && Z < D.length; ++Z)
                k = D[Z] != p.styles[Z];
              k && a.push(r.line), p.stateAfter = r.save(), r.nextLine();
            } else
              p.text.length <= e.options.maxHighlightLength && fa(e, p.text, r), p.stateAfter = r.line % 5 == 0 ? r.save() : null, r.nextLine();
            if (+new Date() > i)
              return Ri(e, e.options.workDelay), !0;
          }), n.highlightFrontier = r.line, n.modeFrontier = Math.max(n.modeFrontier, r.line), a.length && an(e, function() {
            for (var p = 0; p < a.length; p++)
              ir(e, a[p], "text");
          });
        }
      }
      var wo = function(e, n, i) {
        var r = e.display;
        this.viewport = n, this.visible = Co(r, e.doc, n), this.editorIsHidden = !r.wrapper.offsetWidth, this.wrapperHeight = r.wrapper.clientHeight, this.wrapperWidth = r.wrapper.clientWidth, this.oldDisplayWidth = Sr(e), this.force = i, this.dims = Ta(e), this.events = [];
      };
      wo.prototype.signal = function(e, n) {
        Ze(e, n) && this.events.push(arguments);
      }, wo.prototype.finish = function() {
        for (var e = 0; e < this.events.length; e++)
          $e.apply(null, this.events[e]);
      };
      function Lc(e) {
        var n = e.display;
        !n.scrollbarsClipped && n.scroller.offsetWidth && (n.nativeBarWidth = n.scroller.offsetWidth - n.scroller.clientWidth, n.heightForcer.style.height = Fn(e) + "px", n.sizer.style.marginBottom = -n.nativeBarWidth + "px", n.sizer.style.borderRightWidth = Fn(e) + "px", n.scrollbarsClipped = !0);
      }
      function Nc(e) {
        if (e.hasFocus())
          return null;
        var n = q(ve(e));
        if (!n || !K(e.display.lineDiv, n))
          return null;
        var i = { activeElt: n };
        if (window.getSelection) {
          var r = ae(e).getSelection();
          r.anchorNode && r.extend && K(e.display.lineDiv, r.anchorNode) && (i.anchorNode = r.anchorNode, i.anchorOffset = r.anchorOffset, i.focusNode = r.focusNode, i.focusOffset = r.focusOffset);
        }
        return i;
      }
      function Fc(e) {
        if (!(!e || !e.activeElt || e.activeElt == q(ce(e.activeElt))) && (e.activeElt.focus(), !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) && e.anchorNode && K(document.body, e.anchorNode) && K(document.body, e.focusNode))) {
          var n = e.activeElt.ownerDocument, i = n.defaultView.getSelection(), r = n.createRange();
          r.setEnd(e.anchorNode, e.anchorOffset), r.collapse(!1), i.removeAllRanges(), i.addRange(r), i.extend(e.focusNode, e.focusOffset);
        }
      }
      function Fa(e, n) {
        var i = e.display, r = e.doc;
        if (n.editorIsHidden)
          return or(e), !1;
        if (!n.force && n.visible.from >= i.viewFrom && n.visible.to <= i.viewTo && (i.updateLineNumbers == null || i.updateLineNumbers >= i.viewTo) && i.renderedView == i.view && su(e) == 0)
          return !1;
        Au(e) && (or(e), n.dims = Ta(e));
        var a = r.first + r.size, p = Math.max(n.visible.from - e.options.viewportMargin, r.first), D = Math.min(a, n.visible.to + e.options.viewportMargin);
        i.viewFrom < p && p - i.viewFrom < 20 && (p = Math.max(r.first, i.viewFrom)), i.viewTo > D && i.viewTo - D < 20 && (D = Math.min(a, i.viewTo)), $n && (p = pa(e.doc, p), D = Us(e.doc, D));
        var L = p != i.viewFrom || D != i.viewTo || i.lastWrapHeight != n.wrapperHeight || i.lastWrapWidth != n.wrapperWidth;
        yc(e, p, D), i.viewOffset = Yn(we(e.doc, i.viewFrom)), e.display.mover.style.top = i.viewOffset + "px";
        var N = su(e);
        if (!L && N == 0 && !n.force && i.renderedView == i.view && (i.updateLineNumbers == null || i.updateLineNumbers >= i.viewTo))
          return !1;
        var W = Nc(e);
        return N > 4 && (i.lineDiv.style.display = "none"), Oc(e, i.updateLineNumbers, n.dims), N > 4 && (i.lineDiv.style.display = ""), i.renderedView = i.view, Fc(W), H(i.cursorDiv), H(i.selectionDiv), i.gutters.style.height = i.sizer.style.minHeight = 0, L && (i.lastWrapHeight = n.wrapperHeight, i.lastWrapWidth = n.wrapperWidth, Ri(e, 400)), i.updateLineNumbers = null, !0;
      }
      function mu(e, n) {
        for (var i = n.viewport, r = !0; ; r = !1) {
          if (!r || !e.options.lineWrapping || n.oldDisplayWidth == Sr(e)) {
            if (i && i.top != null && (i = { top: Math.min(e.doc.height + ya(e.display) - Aa(e), i.top) }), n.visible = Co(e.display, e.doc, i), n.visible.from >= e.display.viewFrom && n.visible.to <= e.display.viewTo)
              break;
          } else
            r && (n.visible = Co(e.display, e.doc, i));
          if (!Fa(e, n))
            break;
          bo(e);
          var a = Di(e);
          Ci(e), Xr(e, a), Ha(e, a), n.force = !1;
        }
        n.signal(e, "update", e), (e.display.viewFrom != e.display.reportedViewFrom || e.display.viewTo != e.display.reportedViewTo) && (n.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo);
      }
      function Oa(e, n) {
        var i = new wo(e, n);
        if (Fa(e, i)) {
          bo(e), mu(e, i);
          var r = Di(e);
          Ci(e), Xr(e, r), Ha(e, r), i.finish();
        }
      }
      function Oc(e, n, i) {
        var r = e.display, a = e.options.lineNumbers, p = r.lineDiv, D = p.firstChild;
        function L(te) {
          var ie = te.nextSibling;
          return T && C && e.display.currentWheelTarget == te ? te.style.display = "none" : te.parentNode.removeChild(te), ie;
        }
        for (var N = r.view, W = r.viewFrom, V = 0; V < N.length; V++) {
          var k = N[V];
          if (!k.hidden)
            if (!k.node || k.node.parentNode != p) {
              var Z = sc(e, k, W, i);
              p.insertBefore(Z, D);
            } else {
              for (; D != k.node; )
                D = L(D);
              var J = a && n != null && n <= W && k.lineNumber;
              k.changes && (be(k.changes, "gutter") > -1 && (J = !1), Ys(e, k, W, i)), J && (H(k.lineNumber), k.lineNumber.appendChild(document.createTextNode(fe(e.options, W)))), D = k.node.nextSibling;
            }
          W += k.size;
        }
        for (; D; )
          D = L(D);
      }
      function Ba(e) {
        var n = e.gutters.offsetWidth;
        e.sizer.style.marginLeft = n + "px", Tt(e, "gutterChanged", e);
      }
      function Ha(e, n) {
        e.display.sizer.style.minHeight = n.docHeight + "px", e.display.heightForcer.style.top = n.docHeight + "px", e.display.gutters.style.height = n.docHeight + e.display.barHeight + Fn(e) + "px";
      }
      function yu(e) {
        var n = e.display, i = n.view;
        if (!(!n.alignWidgets && (!n.gutters.firstChild || !e.options.fixedGutter))) {
          for (var r = wa(n) - n.scroller.scrollLeft + e.doc.scrollLeft, a = n.gutters.offsetWidth, p = r + "px", D = 0; D < i.length; D++)
            if (!i[D].hidden) {
              e.options.fixedGutter && (i[D].gutter && (i[D].gutter.style.left = p), i[D].gutterBackground && (i[D].gutterBackground.style.left = p));
              var L = i[D].alignable;
              if (L)
                for (var N = 0; N < L.length; N++)
                  L[N].style.left = p;
            }
          e.options.fixedGutter && (n.gutters.style.left = r + a + "px");
        }
      }
      function Au(e) {
        if (!e.options.lineNumbers)
          return !1;
        var n = e.doc, i = fe(e.options, n.first + n.size - 1), r = e.display;
        if (i.length != r.lineNumChars) {
          var a = r.measure.appendChild(P(
            "div",
            [P("div", i)],
            "CodeMirror-linenumber CodeMirror-gutter-elt"
          )), p = a.firstChild.offsetWidth, D = a.offsetWidth - p;
          return r.lineGutter.style.width = "", r.lineNumInnerWidth = Math.max(p, r.lineGutter.offsetWidth - D) + 1, r.lineNumWidth = r.lineNumInnerWidth + D, r.lineNumChars = r.lineNumInnerWidth ? i.length : -1, r.lineGutter.style.width = r.lineNumWidth + "px", Ba(e.display), !0;
        }
        return !1;
      }
      function Ua(e, n) {
        for (var i = [], r = !1, a = 0; a < e.length; a++) {
          var p = e[a], D = null;
          if (typeof p != "string" && (D = p.style, p = p.className), p == "CodeMirror-linenumbers")
            if (n)
              r = !0;
            else
              continue;
          i.push({ className: p, style: D });
        }
        return n && !r && i.push({ className: "CodeMirror-linenumbers", style: null }), i;
      }
      function xu(e) {
        var n = e.gutters, i = e.gutterSpecs;
        H(n), e.lineGutter = null;
        for (var r = 0; r < i.length; ++r) {
          var a = i[r], p = a.className, D = a.style, L = n.appendChild(P("div", null, "CodeMirror-gutter " + p));
          D && (L.style.cssText = D), p == "CodeMirror-linenumbers" && (e.lineGutter = L, L.style.width = (e.lineNumWidth || 1) + "px");
        }
        n.style.display = i.length ? "" : "none", Ba(e);
      }
      function Pi(e) {
        xu(e.display), qt(e), yu(e);
      }
      function Bc(e, n, i, r) {
        var a = this;
        this.input = i, a.scrollbarFiller = P("div", null, "CodeMirror-scrollbar-filler"), a.scrollbarFiller.setAttribute("cm-not-content", "true"), a.gutterFiller = P("div", null, "CodeMirror-gutter-filler"), a.gutterFiller.setAttribute("cm-not-content", "true"), a.lineDiv = Y("div", null, "CodeMirror-code"), a.selectionDiv = P("div", null, null, "position: relative; z-index: 1"), a.cursorDiv = P("div", null, "CodeMirror-cursors"), a.measure = P("div", null, "CodeMirror-measure"), a.lineMeasure = P("div", null, "CodeMirror-measure"), a.lineSpace = Y(
          "div",
          [a.measure, a.lineMeasure, a.selectionDiv, a.cursorDiv, a.lineDiv],
          null,
          "position: relative; outline: none"
        );
        var p = Y("div", [a.lineSpace], "CodeMirror-lines");
        a.mover = P("div", [p], null, "position: relative"), a.sizer = P("div", [a.mover], "CodeMirror-sizer"), a.sizerWidth = null, a.heightForcer = P("div", null, null, "position: absolute; height: " + je + "px; width: 1px;"), a.gutters = P("div", null, "CodeMirror-gutters"), a.lineGutter = null, a.scroller = P("div", [a.sizer, a.heightForcer, a.gutters], "CodeMirror-scroll"), a.scroller.setAttribute("tabIndex", "-1"), a.wrapper = P("div", [a.scrollbarFiller, a.gutterFiller, a.scroller], "CodeMirror"), w && b >= 105 && (a.wrapper.style.clipPath = "inset(0px)"), a.wrapper.setAttribute("translate", "no"), d && m < 8 && (a.gutters.style.zIndex = -1, a.scroller.style.paddingRight = 0), !T && !(t && E) && (a.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(a.wrapper) : e(a.wrapper)), a.viewFrom = a.viewTo = n.first, a.reportedViewFrom = a.reportedViewTo = n.first, a.view = [], a.renderedView = null, a.externalMeasured = null, a.viewOffset = 0, a.lastWrapHeight = a.lastWrapWidth = 0, a.updateLineNumbers = null, a.nativeBarWidth = a.barHeight = a.barWidth = 0, a.scrollbarsClipped = !1, a.lineNumWidth = a.lineNumInnerWidth = a.lineNumChars = null, a.alignWidgets = !1, a.cachedCharWidth = a.cachedTextHeight = a.cachedPaddingH = null, a.maxLine = null, a.maxLineLength = 0, a.maxLineChanged = !1, a.wheelDX = a.wheelDY = a.wheelStartX = a.wheelStartY = null, a.shift = !1, a.selForContextMenu = null, a.activeTouch = null, a.gutterSpecs = Ua(r.gutters, r.lineNumbers), xu(a), i.init(a);
      }
      var Do = 0, Qn = null;
      d ? Qn = -0.53 : t ? Qn = 15 : w ? Qn = -0.7 : x && (Qn = -1 / 3);
      function Su(e) {
        var n = e.wheelDeltaX, i = e.wheelDeltaY;
        return n == null && e.detail && e.axis == e.HORIZONTAL_AXIS && (n = e.detail), i == null && e.detail && e.axis == e.VERTICAL_AXIS ? i = e.detail : i == null && (i = e.wheelDelta), { x: n, y: i };
      }
      function Hc(e) {
        var n = Su(e);
        return n.x *= Qn, n.y *= Qn, n;
      }
      function Eu(e, n) {
        w && b == 102 && (e.display.chromeScrollHack == null ? e.display.sizer.style.pointerEvents = "none" : clearTimeout(e.display.chromeScrollHack), e.display.chromeScrollHack = setTimeout(function() {
          e.display.chromeScrollHack = null, e.display.sizer.style.pointerEvents = "";
        }, 100));
        var i = Su(n), r = i.x, a = i.y, p = Qn;
        n.deltaMode === 0 && (r = n.deltaX, a = n.deltaY, p = 1);
        var D = e.display, L = D.scroller, N = L.scrollWidth > L.clientWidth, W = L.scrollHeight > L.clientHeight;
        if (!!(r && N || a && W)) {
          if (a && C && T) {
            e:
              for (var V = n.target, k = D.view; V != L; V = V.parentNode)
                for (var Z = 0; Z < k.length; Z++)
                  if (k[Z].node == V) {
                    e.display.currentWheelTarget = V;
                    break e;
                  }
          }
          if (r && !t && !g && p != null) {
            a && W && wi(e, Math.max(0, L.scrollTop + a * p)), Tr(e, Math.max(0, L.scrollLeft + r * p)), (!a || a && W) && mt(n), D.wheelStartX = null;
            return;
          }
          if (a && p != null) {
            var J = a * p, te = e.doc.scrollTop, ie = te + D.wrapper.clientHeight;
            J < 0 ? te = Math.max(0, te + J - 50) : ie = Math.min(e.doc.height, ie + J + 50), Oa(e, { top: te, bottom: ie });
          }
          Do < 20 && n.deltaMode !== 0 && (D.wheelStartX == null ? (D.wheelStartX = L.scrollLeft, D.wheelStartY = L.scrollTop, D.wheelDX = r, D.wheelDY = a, setTimeout(function() {
            if (D.wheelStartX != null) {
              var de = L.scrollLeft - D.wheelStartX, he = L.scrollTop - D.wheelStartY, xe = he && D.wheelDY && he / D.wheelDY || de && D.wheelDX && de / D.wheelDX;
              D.wheelStartX = D.wheelStartY = null, xe && (Qn = (Qn * Do + xe) / (Do + 1), ++Do);
            }
          }, 200)) : (D.wheelDX += r, D.wheelDY += a));
        }
      }
      var fn = function(e, n) {
        this.ranges = e, this.primIndex = n;
      };
      fn.prototype.primary = function() {
        return this.ranges[this.primIndex];
      }, fn.prototype.equals = function(e) {
        if (e == this)
          return !0;
        if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length)
          return !1;
        for (var n = 0; n < this.ranges.length; n++) {
          var i = this.ranges[n], r = e.ranges[n];
          if (!Ve(i.anchor, r.anchor) || !Ve(i.head, r.head))
            return !1;
        }
        return !0;
      }, fn.prototype.deepCopy = function() {
        for (var e = [], n = 0; n < this.ranges.length; n++)
          e[n] = new Qe(Ct(this.ranges[n].anchor), Ct(this.ranges[n].head));
        return new fn(e, this.primIndex);
      }, fn.prototype.somethingSelected = function() {
        for (var e = 0; e < this.ranges.length; e++)
          if (!this.ranges[e].empty())
            return !0;
        return !1;
      }, fn.prototype.contains = function(e, n) {
        n || (n = e);
        for (var i = 0; i < this.ranges.length; i++) {
          var r = this.ranges[i];
          if (ye(n, r.from()) >= 0 && ye(e, r.to()) <= 0)
            return i;
        }
        return -1;
      };
      var Qe = function(e, n) {
        this.anchor = e, this.head = n;
      };
      Qe.prototype.from = function() {
        return jr(this.anchor, this.head);
      }, Qe.prototype.to = function() {
        return Zt(this.anchor, this.head);
      }, Qe.prototype.empty = function() {
        return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
      };
      function Dn(e, n, i) {
        var r = e && e.options.selectionsMayTouch, a = n[i];
        n.sort(function(Z, J) {
          return ye(Z.from(), J.from());
        }), i = be(n, a);
        for (var p = 1; p < n.length; p++) {
          var D = n[p], L = n[p - 1], N = ye(L.to(), D.from());
          if (r && !D.empty() ? N > 0 : N >= 0) {
            var W = jr(L.from(), D.from()), V = Zt(L.to(), D.to()), k = L.empty() ? D.from() == D.head : L.from() == L.head;
            p <= i && --i, n.splice(--p, 2, new Qe(k ? V : W, k ? W : V));
          }
        }
        return new fn(n, i);
      }
      function ar(e, n) {
        return new fn([new Qe(e, n || e)], 0);
      }
      function lr(e) {
        return e.text ? ee(
          e.from.line + e.text.length - 1,
          Ue(e.text).length + (e.text.length == 1 ? e.from.ch : 0)
        ) : e.to;
      }
      function bu(e, n) {
        if (ye(e, n.from) < 0)
          return e;
        if (ye(e, n.to) <= 0)
          return lr(n);
        var i = e.line + n.text.length - (n.to.line - n.from.line) - 1, r = e.ch;
        return e.line == n.to.line && (r += lr(n).ch - n.to.ch), ee(i, r);
      }
      function za(e, n) {
        for (var i = [], r = 0; r < e.sel.ranges.length; r++) {
          var a = e.sel.ranges[r];
          i.push(new Qe(
            bu(a.anchor, n),
            bu(a.head, n)
          ));
        }
        return Dn(e.cm, i, e.sel.primIndex);
      }
      function Cu(e, n, i) {
        return e.line == n.line ? ee(i.line, e.ch - n.ch + i.ch) : ee(i.line + (e.line - n.line), e.ch);
      }
      function Uc(e, n, i) {
        for (var r = [], a = ee(e.first, 0), p = a, D = 0; D < n.length; D++) {
          var L = n[D], N = Cu(L.from, a, p), W = Cu(lr(L), a, p);
          if (a = L.to, p = W, i == "around") {
            var V = e.sel.ranges[D], k = ye(V.head, V.anchor) < 0;
            r[D] = new Qe(k ? W : N, k ? N : W);
          } else
            r[D] = new Qe(N, N);
        }
        return new fn(r, e.sel.primIndex);
      }
      function Wa(e) {
        e.doc.mode = Ur(e.options, e.doc.modeOption), Ii(e);
      }
      function Ii(e) {
        e.doc.iter(function(n) {
          n.stateAfter && (n.stateAfter = null), n.styles && (n.styles = null);
        }), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, Ri(e, 100), e.state.modeGen++, e.curOp && qt(e);
      }
      function Tu(e, n) {
        return n.from.ch == 0 && n.to.ch == 0 && Ue(n.text) == "" && (!e.cm || e.cm.options.wholeLineUpdateBefore);
      }
      function ja(e, n, i, r) {
        function a(xe) {
          return i ? i[xe] : null;
        }
        function p(xe, ge, Te) {
          Gd(xe, ge, Te, r), Tt(xe, "change", xe, n);
        }
        function D(xe, ge) {
          for (var Te = [], Re = xe; Re < ge; ++Re)
            Te.push(new $r(W[Re], a(Re), r));
          return Te;
        }
        var L = n.from, N = n.to, W = n.text, V = we(e, L.line), k = we(e, N.line), Z = Ue(W), J = a(W.length - 1), te = N.line - L.line;
        if (n.full)
          e.insert(0, D(0, W.length)), e.remove(W.length, e.size - W.length);
        else if (Tu(e, n)) {
          var ie = D(0, W.length - 1);
          p(k, k.text, J), te && e.remove(L.line, te), ie.length && e.insert(L.line, ie);
        } else if (V == k)
          if (W.length == 1)
            p(V, V.text.slice(0, L.ch) + Z + V.text.slice(N.ch), J);
          else {
            var de = D(1, W.length - 1);
            de.push(new $r(Z + V.text.slice(N.ch), J, r)), p(V, V.text.slice(0, L.ch) + W[0], a(0)), e.insert(L.line + 1, de);
          }
        else if (W.length == 1)
          p(V, V.text.slice(0, L.ch) + W[0] + k.text.slice(N.ch), a(0)), e.remove(L.line + 1, te);
        else {
          p(V, V.text.slice(0, L.ch) + W[0], a(0)), p(k, Z + k.text.slice(N.ch), J);
          var he = D(1, W.length - 1);
          te > 1 && e.remove(L.line + 1, te - 1), e.insert(L.line + 1, he);
        }
        Tt(e, "change", e, n);
      }
      function sr(e, n, i) {
        function r(a, p, D) {
          if (a.linked)
            for (var L = 0; L < a.linked.length; ++L) {
              var N = a.linked[L];
              if (N.doc != p) {
                var W = D && N.sharedHist;
                i && !W || (n(N.doc, W), r(N.doc, a, W));
              }
            }
        }
        r(e, null, !0);
      }
      function wu(e, n) {
        if (n.cm)
          throw new Error("This document is already in use.");
        e.doc = n, n.cm = e, Da(e), Wa(e), Du(e), e.options.direction = n.direction, e.options.lineWrapping || ga(e), e.options.mode = n.modeOption, qt(e);
      }
      function Du(e) {
        (e.doc.direction == "rtl" ? X : U)(e.display.lineDiv, "CodeMirror-rtl");
      }
      function zc(e) {
        an(e, function() {
          Du(e), qt(e);
        });
      }
      function Mo(e) {
        this.done = [], this.undone = [], this.undoDepth = e ? e.undoDepth : 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e ? e.maxGeneration : 1;
      }
      function $a(e, n) {
        var i = { from: Ct(n.from), to: lr(n), text: jn(e, n.from, n.to) };
        return Pu(e, i, n.from.line, n.to.line + 1), sr(e, function(r) {
          return Pu(r, i, n.from.line, n.to.line + 1);
        }, !0), i;
      }
      function Mu(e) {
        for (; e.length; ) {
          var n = Ue(e);
          if (n.ranges)
            e.pop();
          else
            break;
        }
      }
      function Wc(e, n) {
        if (n)
          return Mu(e.done), Ue(e.done);
        if (e.done.length && !Ue(e.done).ranges)
          return Ue(e.done);
        if (e.done.length > 1 && !e.done[e.done.length - 2].ranges)
          return e.done.pop(), Ue(e.done);
      }
      function Ru(e, n, i, r) {
        var a = e.history;
        a.undone.length = 0;
        var p = +new Date(), D, L;
        if ((a.lastOp == r || a.lastOrigin == n.origin && n.origin && (n.origin.charAt(0) == "+" && a.lastModTime > p - (e.cm ? e.cm.options.historyEventDelay : 500) || n.origin.charAt(0) == "*")) && (D = Wc(a, a.lastOp == r)))
          L = Ue(D.changes), ye(n.from, n.to) == 0 && ye(n.from, L.to) == 0 ? L.to = lr(n) : D.changes.push($a(e, n));
        else {
          var N = Ue(a.done);
          for ((!N || !N.ranges) && Ro(e.sel, a.done), D = {
            changes: [$a(e, n)],
            generation: a.generation
          }, a.done.push(D); a.done.length > a.undoDepth; )
            a.done.shift(), a.done[0].ranges || a.done.shift();
        }
        a.done.push(i), a.generation = ++a.maxGeneration, a.lastModTime = a.lastSelTime = p, a.lastOp = a.lastSelOp = r, a.lastOrigin = a.lastSelOrigin = n.origin, L || $e(e, "historyAdded");
      }
      function jc(e, n, i, r) {
        var a = n.charAt(0);
        return a == "*" || a == "+" && i.ranges.length == r.ranges.length && i.somethingSelected() == r.somethingSelected() && new Date() - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500);
      }
      function $c(e, n, i, r) {
        var a = e.history, p = r && r.origin;
        i == a.lastSelOp || p && a.lastSelOrigin == p && (a.lastModTime == a.lastSelTime && a.lastOrigin == p || jc(e, p, Ue(a.done), n)) ? a.done[a.done.length - 1] = n : Ro(n, a.done), a.lastSelTime = +new Date(), a.lastSelOrigin = p, a.lastSelOp = i, r && r.clearRedo !== !1 && Mu(a.undone);
      }
      function Ro(e, n) {
        var i = Ue(n);
        i && i.ranges && i.equals(e) || n.push(e);
      }
      function Pu(e, n, i, r) {
        var a = n["spans_" + e.id], p = 0;
        e.iter(Math.max(e.first, i), Math.min(e.first + e.size, r), function(D) {
          D.markedSpans && ((a || (a = n["spans_" + e.id] = {}))[p] = D.markedSpans), ++p;
        });
      }
      function Yc(e) {
        if (!e)
          return null;
        for (var n, i = 0; i < e.length; ++i)
          e[i].marker.explicitlyCleared ? n || (n = e.slice(0, i)) : n && n.push(e[i]);
        return n ? n.length ? n : null : e;
      }
      function Vc(e, n) {
        var i = n["spans_" + e.id];
        if (!i)
          return null;
        for (var r = [], a = 0; a < n.text.length; ++a)
          r.push(Yc(i[a]));
        return r;
      }
      function Iu(e, n) {
        var i = Vc(e, n), r = ca(e, n);
        if (!i)
          return r;
        if (!r)
          return i;
        for (var a = 0; a < i.length; ++a) {
          var p = i[a], D = r[a];
          if (p && D) {
            e:
              for (var L = 0; L < D.length; ++L) {
                for (var N = D[L], W = 0; W < p.length; ++W)
                  if (p[W].marker == N.marker)
                    continue e;
                p.push(N);
              }
          } else
            D && (i[a] = D);
        }
        return i;
      }
      function Jr(e, n, i) {
        for (var r = [], a = 0; a < e.length; ++a) {
          var p = e[a];
          if (p.ranges) {
            r.push(i ? fn.prototype.deepCopy.call(p) : p);
            continue;
          }
          var D = p.changes, L = [];
          r.push({ changes: L });
          for (var N = 0; N < D.length; ++N) {
            var W = D[N], V = void 0;
            if (L.push({ from: W.from, to: W.to, text: W.text }), n)
              for (var k in W)
                (V = k.match(/^spans_(\d+)$/)) && be(n, Number(V[1])) > -1 && (Ue(L)[k] = W[k], delete W[k]);
          }
        }
        return r;
      }
      function Ya(e, n, i, r) {
        if (r) {
          var a = e.anchor;
          if (i) {
            var p = ye(n, a) < 0;
            p != ye(i, a) < 0 ? (a = n, n = i) : p != ye(n, i) < 0 && (n = i);
          }
          return new Qe(a, n);
        } else
          return new Qe(i || n, n);
      }
      function Po(e, n, i, r, a) {
        a == null && (a = e.cm && (e.cm.display.shift || e.extend)), Ut(e, new fn([Ya(e.sel.primary(), n, i, a)], 0), r);
      }
      function Lu(e, n, i) {
        for (var r = [], a = e.cm && (e.cm.display.shift || e.extend), p = 0; p < e.sel.ranges.length; p++)
          r[p] = Ya(e.sel.ranges[p], n[p], null, a);
        var D = Dn(e.cm, r, e.sel.primIndex);
        Ut(e, D, i);
      }
      function Va(e, n, i, r) {
        var a = e.sel.ranges.slice(0);
        a[n] = i, Ut(e, Dn(e.cm, a, e.sel.primIndex), r);
      }
      function Nu(e, n, i, r) {
        Ut(e, ar(n, i), r);
      }
      function Qc(e, n, i) {
        var r = {
          ranges: n.ranges,
          update: function(a) {
            this.ranges = [];
            for (var p = 0; p < a.length; p++)
              this.ranges[p] = new Qe(
                Oe(e, a[p].anchor),
                Oe(e, a[p].head)
              );
          },
          origin: i && i.origin
        };
        return $e(e, "beforeSelectionChange", e, r), e.cm && $e(e.cm, "beforeSelectionChange", e.cm, r), r.ranges != n.ranges ? Dn(e.cm, r.ranges, r.ranges.length - 1) : n;
      }
      function Fu(e, n, i) {
        var r = e.history.done, a = Ue(r);
        a && a.ranges ? (r[r.length - 1] = n, Io(e, n, i)) : Ut(e, n, i);
      }
      function Ut(e, n, i) {
        Io(e, n, i), $c(e, e.sel, e.cm ? e.cm.curOp.id : NaN, i);
      }
      function Io(e, n, i) {
        (Ze(e, "beforeSelectionChange") || e.cm && Ze(e.cm, "beforeSelectionChange")) && (n = Qc(e, n, i));
        var r = i && i.bias || (ye(n.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
        Ou(e, Hu(e, n, r, !0)), !(i && i.scroll === !1) && e.cm && e.cm.getOption("readOnly") != "nocursor" && Kr(e.cm);
      }
      function Ou(e, n) {
        n.equals(e.sel) || (e.sel = n, e.cm && (e.cm.curOp.updateInput = 1, e.cm.curOp.selectionChanged = !0, at(e.cm)), Tt(e, "cursorActivity", e));
      }
      function Bu(e) {
        Ou(e, Hu(e, e.sel, null, !1));
      }
      function Hu(e, n, i, r) {
        for (var a, p = 0; p < n.ranges.length; p++) {
          var D = n.ranges[p], L = n.ranges.length == e.sel.ranges.length && e.sel.ranges[p], N = Lo(e, D.anchor, L && L.anchor, i, r), W = D.head == D.anchor ? N : Lo(e, D.head, L && L.head, i, r);
          (a || N != D.anchor || W != D.head) && (a || (a = n.ranges.slice(0, p)), a[p] = new Qe(N, W));
        }
        return a ? Dn(e.cm, a, n.primIndex) : n;
      }
      function Zr(e, n, i, r, a) {
        var p = we(e, n.line);
        if (p.markedSpans)
          for (var D = 0; D < p.markedSpans.length; ++D) {
            var L = p.markedSpans[D], N = L.marker, W = "selectLeft" in N ? !N.selectLeft : N.inclusiveLeft, V = "selectRight" in N ? !N.selectRight : N.inclusiveRight;
            if ((L.from == null || (W ? L.from <= n.ch : L.from < n.ch)) && (L.to == null || (V ? L.to >= n.ch : L.to > n.ch))) {
              if (a && ($e(N, "beforeCursorEnter"), N.explicitlyCleared))
                if (p.markedSpans) {
                  --D;
                  continue;
                } else
                  break;
              if (!N.atomic)
                continue;
              if (i) {
                var k = N.find(r < 0 ? 1 : -1), Z = void 0;
                if ((r < 0 ? V : W) && (k = Uu(e, k, -r, k && k.line == n.line ? p : null)), k && k.line == n.line && (Z = ye(k, i)) && (r < 0 ? Z < 0 : Z > 0))
                  return Zr(e, k, n, r, a);
              }
              var J = N.find(r < 0 ? -1 : 1);
              return (r < 0 ? W : V) && (J = Uu(e, J, r, J.line == n.line ? p : null)), J ? Zr(e, J, n, r, a) : null;
            }
          }
        return n;
      }
      function Lo(e, n, i, r, a) {
        var p = r || 1, D = Zr(e, n, i, p, a) || !a && Zr(e, n, i, p, !0) || Zr(e, n, i, -p, a) || !a && Zr(e, n, i, -p, !0);
        return D || (e.cantEdit = !0, ee(e.first, 0));
      }
      function Uu(e, n, i, r) {
        return i < 0 && n.ch == 0 ? n.line > e.first ? Oe(e, ee(n.line - 1)) : null : i > 0 && n.ch == (r || we(e, n.line)).text.length ? n.line < e.first + e.size - 1 ? ee(n.line + 1, 0) : null : new ee(n.line, n.ch + i);
      }
      function zu(e) {
        e.setSelection(ee(e.firstLine(), 0), ee(e.lastLine()), Nt);
      }
      function Wu(e, n, i) {
        var r = {
          canceled: !1,
          from: n.from,
          to: n.to,
          text: n.text,
          origin: n.origin,
          cancel: function() {
            return r.canceled = !0;
          }
        };
        return i && (r.update = function(a, p, D, L) {
          a && (r.from = Oe(e, a)), p && (r.to = Oe(e, p)), D && (r.text = D), L !== void 0 && (r.origin = L);
        }), $e(e, "beforeChange", e, r), e.cm && $e(e.cm, "beforeChange", e.cm, r), r.canceled ? (e.cm && (e.cm.curOp.updateInput = 2), null) : { from: r.from, to: r.to, text: r.text, origin: r.origin };
      }
      function qr(e, n, i) {
        if (e.cm) {
          if (!e.cm.curOp)
            return wt(e.cm, qr)(e, n, i);
          if (e.cm.state.suppressEdits)
            return;
        }
        if (!((Ze(e, "beforeChange") || e.cm && Ze(e.cm, "beforeChange")) && (n = Wu(e, n, !0), !n))) {
          var r = Is && !i && $d(e, n.from, n.to);
          if (r)
            for (var a = r.length - 1; a >= 0; --a)
              ju(e, { from: r[a].from, to: r[a].to, text: a ? [""] : n.text, origin: n.origin });
          else
            ju(e, n);
        }
      }
      function ju(e, n) {
        if (!(n.text.length == 1 && n.text[0] == "" && ye(n.from, n.to) == 0)) {
          var i = za(e, n);
          Ru(e, n, i, e.cm ? e.cm.curOp.id : NaN), Li(e, n, i, ca(e, n));
          var r = [];
          sr(e, function(a, p) {
            !p && be(r, a.history) == -1 && (Qu(a.history, n), r.push(a.history)), Li(a, n, null, ca(a, n));
          });
        }
      }
      function No(e, n, i) {
        var r = e.cm && e.cm.state.suppressEdits;
        if (!(r && !i)) {
          for (var a = e.history, p, D = e.sel, L = n == "undo" ? a.done : a.undone, N = n == "undo" ? a.undone : a.done, W = 0; W < L.length && (p = L[W], !(i ? p.ranges && !p.equals(e.sel) : !p.ranges)); W++)
            ;
          if (W != L.length) {
            for (a.lastOrigin = a.lastSelOrigin = null; ; )
              if (p = L.pop(), p.ranges) {
                if (Ro(p, N), i && !p.equals(e.sel)) {
                  Ut(e, p, { clearRedo: !1 });
                  return;
                }
                D = p;
              } else if (r) {
                L.push(p);
                return;
              } else
                break;
            var V = [];
            Ro(D, N), N.push({ changes: V, generation: a.generation }), a.generation = p.generation || ++a.maxGeneration;
            for (var k = Ze(e, "beforeChange") || e.cm && Ze(e.cm, "beforeChange"), Z = function(ie) {
              var de = p.changes[ie];
              if (de.origin = n, k && !Wu(e, de, !1))
                return L.length = 0, {};
              V.push($a(e, de));
              var he = ie ? za(e, de) : Ue(L);
              Li(e, de, he, Iu(e, de)), !ie && e.cm && e.cm.scrollIntoView({ from: de.from, to: lr(de) });
              var xe = [];
              sr(e, function(ge, Te) {
                !Te && be(xe, ge.history) == -1 && (Qu(ge.history, de), xe.push(ge.history)), Li(ge, de, null, Iu(ge, de));
              });
            }, J = p.changes.length - 1; J >= 0; --J) {
              var te = Z(J);
              if (te)
                return te.v;
            }
          }
        }
      }
      function $u(e, n) {
        if (n != 0 && (e.first += n, e.sel = new fn(Ht(e.sel.ranges, function(a) {
          return new Qe(
            ee(a.anchor.line + n, a.anchor.ch),
            ee(a.head.line + n, a.head.ch)
          );
        }), e.sel.primIndex), e.cm)) {
          qt(e.cm, e.first, e.first - n, n);
          for (var i = e.cm.display, r = i.viewFrom; r < i.viewTo; r++)
            ir(e.cm, r, "gutter");
        }
      }
      function Li(e, n, i, r) {
        if (e.cm && !e.cm.curOp)
          return wt(e.cm, Li)(e, n, i, r);
        if (n.to.line < e.first) {
          $u(e, n.text.length - 1 - (n.to.line - n.from.line));
          return;
        }
        if (!(n.from.line > e.lastLine())) {
          if (n.from.line < e.first) {
            var a = n.text.length - 1 - (e.first - n.from.line);
            $u(e, a), n = {
              from: ee(e.first, 0),
              to: ee(n.to.line + a, n.to.ch),
              text: [Ue(n.text)],
              origin: n.origin
            };
          }
          var p = e.lastLine();
          n.to.line > p && (n = {
            from: n.from,
            to: ee(p, we(e, p).text.length),
            text: [n.text[0]],
            origin: n.origin
          }), n.removed = jn(e, n.from, n.to), i || (i = za(e, n)), e.cm ? Gc(e.cm, n, r) : ja(e, n, r), Io(e, i, Nt), e.cantEdit && Lo(e, ee(e.firstLine(), 0)) && (e.cantEdit = !1);
        }
      }
      function Gc(e, n, i) {
        var r = e.doc, a = e.display, p = n.from, D = n.to, L = !1, N = p.line;
        e.options.lineWrapping || (N = j(Tn(we(r, p.line))), r.iter(N, D.line + 1, function(J) {
          if (J == a.maxLine)
            return L = !0, !0;
        })), r.sel.contains(n.from, n.to) > -1 && at(e), ja(r, n, i, lu(e)), e.options.lineWrapping || (r.iter(N, p.line + n.text.length, function(J) {
          var te = go(J);
          te > a.maxLineLength && (a.maxLine = J, a.maxLineLength = te, a.maxLineChanged = !0, L = !1);
        }), L && (e.curOp.updateMaxLine = !0)), Od(r, p.line), Ri(e, 400);
        var W = n.text.length - (D.line - p.line) - 1;
        n.full ? qt(e) : p.line == D.line && n.text.length == 1 && !Tu(e.doc, n) ? ir(e, p.line, "text") : qt(e, p.line, D.line + 1, W);
        var V = Ze(e, "changes"), k = Ze(e, "change");
        if (k || V) {
          var Z = {
            from: p,
            to: D,
            text: n.text,
            removed: n.removed,
            origin: n.origin
          };
          k && Tt(e, "change", e, Z), V && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(Z);
        }
        e.display.selForContextMenu = null;
      }
      function _r(e, n, i, r, a) {
        var p;
        r || (r = i), ye(r, i) < 0 && (p = [r, i], i = p[0], r = p[1]), typeof n == "string" && (n = e.splitLines(n)), qr(e, { from: i, to: r, text: n, origin: a });
      }
      function Yu(e, n, i, r) {
        i < e.line ? e.line += r : n < e.line && (e.line = n, e.ch = 0);
      }
      function Vu(e, n, i, r) {
        for (var a = 0; a < e.length; ++a) {
          var p = e[a], D = !0;
          if (p.ranges) {
            p.copied || (p = e[a] = p.deepCopy(), p.copied = !0);
            for (var L = 0; L < p.ranges.length; L++)
              Yu(p.ranges[L].anchor, n, i, r), Yu(p.ranges[L].head, n, i, r);
            continue;
          }
          for (var N = 0; N < p.changes.length; ++N) {
            var W = p.changes[N];
            if (i < W.from.line)
              W.from = ee(W.from.line + r, W.from.ch), W.to = ee(W.to.line + r, W.to.ch);
            else if (n <= W.to.line) {
              D = !1;
              break;
            }
          }
          D || (e.splice(0, a + 1), a = 0);
        }
      }
      function Qu(e, n) {
        var i = n.from.line, r = n.to.line, a = n.text.length - (r - i) - 1;
        Vu(e.done, i, r, a), Vu(e.undone, i, r, a);
      }
      function Ni(e, n, i, r) {
        var a = n, p = n;
        return typeof n == "number" ? p = we(e, Es(e, n)) : a = j(n), a == null ? null : (r(p, a) && e.cm && ir(e.cm, a, i), p);
      }
      function Fi(e) {
        this.lines = e, this.parent = null;
        for (var n = 0, i = 0; i < e.length; ++i)
          e[i].parent = this, n += e[i].height;
        this.height = n;
      }
      Fi.prototype = {
        chunkSize: function() {
          return this.lines.length;
        },
        removeInner: function(e, n) {
          for (var i = e, r = e + n; i < r; ++i) {
            var a = this.lines[i];
            this.height -= a.height, kd(a), Tt(a, "delete");
          }
          this.lines.splice(e, n);
        },
        collapse: function(e) {
          e.push.apply(e, this.lines);
        },
        insertInner: function(e, n, i) {
          this.height += i, this.lines = this.lines.slice(0, e).concat(n).concat(this.lines.slice(e));
          for (var r = 0; r < n.length; ++r)
            n[r].parent = this;
        },
        iterN: function(e, n, i) {
          for (var r = e + n; e < r; ++e)
            if (i(this.lines[e]))
              return !0;
        }
      };
      function Oi(e) {
        this.children = e;
        for (var n = 0, i = 0, r = 0; r < e.length; ++r) {
          var a = e[r];
          n += a.chunkSize(), i += a.height, a.parent = this;
        }
        this.size = n, this.height = i, this.parent = null;
      }
      Oi.prototype = {
        chunkSize: function() {
          return this.size;
        },
        removeInner: function(e, n) {
          this.size -= n;
          for (var i = 0; i < this.children.length; ++i) {
            var r = this.children[i], a = r.chunkSize();
            if (e < a) {
              var p = Math.min(n, a - e), D = r.height;
              if (r.removeInner(e, p), this.height -= D - r.height, a == p && (this.children.splice(i--, 1), r.parent = null), (n -= p) == 0)
                break;
              e = 0;
            } else
              e -= a;
          }
          if (this.size - n < 25 && (this.children.length > 1 || !(this.children[0] instanceof Fi))) {
            var L = [];
            this.collapse(L), this.children = [new Fi(L)], this.children[0].parent = this;
          }
        },
        collapse: function(e) {
          for (var n = 0; n < this.children.length; ++n)
            this.children[n].collapse(e);
        },
        insertInner: function(e, n, i) {
          this.size += n.length, this.height += i;
          for (var r = 0; r < this.children.length; ++r) {
            var a = this.children[r], p = a.chunkSize();
            if (e <= p) {
              if (a.insertInner(e, n, i), a.lines && a.lines.length > 50) {
                for (var D = a.lines.length % 25 + 25, L = D; L < a.lines.length; ) {
                  var N = new Fi(a.lines.slice(L, L += 25));
                  a.height -= N.height, this.children.splice(++r, 0, N), N.parent = this;
                }
                a.lines = a.lines.slice(0, D), this.maybeSpill();
              }
              break;
            }
            e -= p;
          }
        },
        maybeSpill: function() {
          if (!(this.children.length <= 10)) {
            var e = this;
            do {
              var n = e.children.splice(e.children.length - 5, 5), i = new Oi(n);
              if (e.parent) {
                e.size -= i.size, e.height -= i.height;
                var a = be(e.parent.children, e);
                e.parent.children.splice(a + 1, 0, i);
              } else {
                var r = new Oi(e.children);
                r.parent = e, e.children = [r, i], e = r;
              }
              i.parent = e.parent;
            } while (e.children.length > 10);
            e.parent.maybeSpill();
          }
        },
        iterN: function(e, n, i) {
          for (var r = 0; r < this.children.length; ++r) {
            var a = this.children[r], p = a.chunkSize();
            if (e < p) {
              var D = Math.min(n, p - e);
              if (a.iterN(e, D, i))
                return !0;
              if ((n -= D) == 0)
                break;
              e = 0;
            } else
              e -= p;
          }
        }
      };
      var Bi = function(e, n, i) {
        if (i)
          for (var r in i)
            i.hasOwnProperty(r) && (this[r] = i[r]);
        this.doc = e, this.node = n;
      };
      Bi.prototype.clear = function() {
        var e = this.doc.cm, n = this.line.widgets, i = this.line, r = j(i);
        if (!(r == null || !n)) {
          for (var a = 0; a < n.length; ++a)
            n[a] == this && n.splice(a--, 1);
          n.length || (i.widgets = null);
          var p = Ei(this);
          un(i, Math.max(0, i.height - p)), e && (an(e, function() {
            Gu(e, i, -p), ir(e, r, "widget");
          }), Tt(e, "lineWidgetCleared", e, this, r));
        }
      }, Bi.prototype.changed = function() {
        var e = this, n = this.height, i = this.doc.cm, r = this.line;
        this.height = null;
        var a = Ei(this) - n;
        !a || (rr(this.doc, r) || un(r, r.height + a), i && an(i, function() {
          i.curOp.forceUpdate = !0, Gu(i, r, a), Tt(i, "lineWidgetChanged", i, e, j(r));
        }));
      }, $t(Bi);
      function Gu(e, n, i) {
        Yn(n) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && Na(e, i);
      }
      function kc(e, n, i, r) {
        var a = new Bi(e, i, r), p = e.cm;
        return p && a.noHScroll && (p.display.alignWidgets = !0), Ni(e, n, "widget", function(D) {
          var L = D.widgets || (D.widgets = []);
          if (a.insertAt == null ? L.push(a) : L.splice(Math.min(L.length, Math.max(0, a.insertAt)), 0, a), a.line = D, p && !rr(e, D)) {
            var N = Yn(D) < e.scrollTop;
            un(D, D.height + Ei(a)), N && Na(p, a.height), p.curOp.forceUpdate = !0;
          }
          return !0;
        }), p && Tt(p, "lineWidgetAdded", p, a, typeof n == "number" ? n : j(n)), a;
      }
      var ku = 0, ur = function(e, n) {
        this.lines = [], this.type = n, this.doc = e, this.id = ++ku;
      };
      ur.prototype.clear = function() {
        if (!this.explicitlyCleared) {
          var e = this.doc.cm, n = e && !e.curOp;
          if (n && Dr(e), Ze(this, "clear")) {
            var i = this.find();
            i && Tt(this, "clear", i.from, i.to);
          }
          for (var r = null, a = null, p = 0; p < this.lines.length; ++p) {
            var D = this.lines[p], L = Ai(D.markedSpans, this);
            e && !this.collapsed ? ir(e, j(D), "text") : e && (L.to != null && (a = j(D)), L.from != null && (r = j(D))), D.markedSpans = Ud(D.markedSpans, L), L.from == null && this.collapsed && !rr(this.doc, D) && e && un(D, Qr(e.display));
          }
          if (e && this.collapsed && !e.options.lineWrapping)
            for (var N = 0; N < this.lines.length; ++N) {
              var W = Tn(this.lines[N]), V = go(W);
              V > e.display.maxLineLength && (e.display.maxLine = W, e.display.maxLineLength = V, e.display.maxLineChanged = !0);
            }
          r != null && e && this.collapsed && qt(e, r, a + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && Bu(e.doc)), e && Tt(e, "markerCleared", e, this, r, a), n && Mr(e), this.parent && this.parent.clear();
        }
      }, ur.prototype.find = function(e, n) {
        e == null && this.type == "bookmark" && (e = 1);
        for (var i, r, a = 0; a < this.lines.length; ++a) {
          var p = this.lines[a], D = Ai(p.markedSpans, this);
          if (D.from != null && (i = ee(n ? p : j(p), D.from), e == -1))
            return i;
          if (D.to != null && (r = ee(n ? p : j(p), D.to), e == 1))
            return r;
        }
        return i && { from: i, to: r };
      }, ur.prototype.changed = function() {
        var e = this, n = this.find(-1, !0), i = this, r = this.doc.cm;
        !n || !r || an(r, function() {
          var a = n.line, p = j(n.line), D = xa(r, p);
          if (D && (_s(D), r.curOp.selectionChanged = r.curOp.forceUpdate = !0), r.curOp.updateMaxLine = !0, !rr(i.doc, a) && i.height != null) {
            var L = i.height;
            i.height = null;
            var N = Ei(i) - L;
            N && un(a, a.height + N);
          }
          Tt(r, "markerChanged", r, e);
        });
      }, ur.prototype.attachLine = function(e) {
        if (!this.lines.length && this.doc.cm) {
          var n = this.doc.cm.curOp;
          (!n.maybeHiddenMarkers || be(n.maybeHiddenMarkers, this) == -1) && (n.maybeUnhiddenMarkers || (n.maybeUnhiddenMarkers = [])).push(this);
        }
        this.lines.push(e);
      }, ur.prototype.detachLine = function(e) {
        if (this.lines.splice(be(this.lines, e), 1), !this.lines.length && this.doc.cm) {
          var n = this.doc.cm.curOp;
          (n.maybeHiddenMarkers || (n.maybeHiddenMarkers = [])).push(this);
        }
      }, $t(ur);
      function ei(e, n, i, r, a) {
        if (r && r.shared)
          return Kc(e, n, i, r, a);
        if (e.cm && !e.cm.curOp)
          return wt(e.cm, ei)(e, n, i, r, a);
        var p = new ur(e, a), D = ye(n, i);
        if (r && se(r, p, !1), D > 0 || D == 0 && p.clearWhenEmpty !== !1)
          return p;
        if (p.replacedWith && (p.collapsed = !0, p.widgetNode = Y("span", [p.replacedWith], "CodeMirror-widget"), r.handleMouseEvents || p.widgetNode.setAttribute("cm-ignore-events", "true"), r.insertLeft && (p.widgetNode.insertLeft = !0)), p.collapsed) {
          if (Hs(e, n.line, n, i, p) || n.line != i.line && Hs(e, i.line, n, i, p))
            throw new Error("Inserting collapsed marker partially overlapping an existing one");
          Hd();
        }
        p.addToHistory && Ru(e, { from: n, to: i, origin: "markText" }, e.sel, NaN);
        var L = n.line, N = e.cm, W;
        if (e.iter(L, i.line + 1, function(k) {
          N && p.collapsed && !N.options.lineWrapping && Tn(k) == N.display.maxLine && (W = !0), p.collapsed && L != n.line && un(k, 0), zd(k, new co(
            p,
            L == n.line ? n.ch : null,
            L == i.line ? i.ch : null
          ), e.cm && e.cm.curOp), ++L;
        }), p.collapsed && e.iter(n.line, i.line + 1, function(k) {
          rr(e, k) && un(k, 0);
        }), p.clearOnEnter && ue(p, "beforeCursorEnter", function() {
          return p.clear();
        }), p.readOnly && (Bd(), (e.history.done.length || e.history.undone.length) && e.clearHistory()), p.collapsed && (p.id = ++ku, p.atomic = !0), N) {
          if (W && (N.curOp.updateMaxLine = !0), p.collapsed)
            qt(N, n.line, i.line + 1);
          else if (p.className || p.startStyle || p.endStyle || p.css || p.attributes || p.title)
            for (var V = n.line; V <= i.line; V++)
              ir(N, V, "text");
          p.atomic && Bu(N.doc), Tt(N, "markerAdded", N, p);
        }
        return p;
      }
      var Hi = function(e, n) {
        this.markers = e, this.primary = n;
        for (var i = 0; i < e.length; ++i)
          e[i].parent = this;
      };
      Hi.prototype.clear = function() {
        if (!this.explicitlyCleared) {
          this.explicitlyCleared = !0;
          for (var e = 0; e < this.markers.length; ++e)
            this.markers[e].clear();
          Tt(this, "clear");
        }
      }, Hi.prototype.find = function(e, n) {
        return this.primary.find(e, n);
      }, $t(Hi);
      function Kc(e, n, i, r, a) {
        r = se(r), r.shared = !1;
        var p = [ei(e, n, i, r, a)], D = p[0], L = r.widgetNode;
        return sr(e, function(N) {
          L && (r.widgetNode = L.cloneNode(!0)), p.push(ei(N, Oe(N, n), Oe(N, i), r, a));
          for (var W = 0; W < N.linked.length; ++W)
            if (N.linked[W].isParent)
              return;
          D = Ue(p);
        }), new Hi(p, D);
      }
      function Ku(e) {
        return e.findMarks(ee(e.first, 0), e.clipPos(ee(e.lastLine())), function(n) {
          return n.parent;
        });
      }
      function Xc(e, n) {
        for (var i = 0; i < n.length; i++) {
          var r = n[i], a = r.find(), p = e.clipPos(a.from), D = e.clipPos(a.to);
          if (ye(p, D)) {
            var L = ei(e, p, D, r.primary, r.primary.type);
            r.markers.push(L), L.parent = r;
          }
        }
      }
      function Jc(e) {
        for (var n = function(r) {
          var a = e[r], p = [a.primary.doc];
          sr(a.primary.doc, function(N) {
            return p.push(N);
          });
          for (var D = 0; D < a.markers.length; D++) {
            var L = a.markers[D];
            be(p, L.doc) == -1 && (L.parent = null, a.markers.splice(D--, 1));
          }
        }, i = 0; i < e.length; i++)
          n(i);
      }
      var Zc = 0, _t = function(e, n, i, r, a) {
        if (!(this instanceof _t))
          return new _t(e, n, i, r, a);
        i == null && (i = 0), Oi.call(this, [new Fi([new $r("", null)])]), this.first = i, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = i;
        var p = ee(i, 0);
        this.sel = ar(p), this.history = new Mo(null), this.id = ++Zc, this.modeOption = n, this.lineSep = r, this.direction = a == "rtl" ? "rtl" : "ltr", this.extend = !1, typeof e == "string" && (e = this.splitLines(e)), ja(this, { from: p, to: p, text: e }), Ut(this, ar(p), Nt);
      };
      _t.prototype = hn(Oi.prototype, {
        constructor: _t,
        iter: function(e, n, i) {
          i ? this.iterN(e - this.first, n - e, i) : this.iterN(this.first, this.first + this.size, e);
        },
        insert: function(e, n) {
          for (var i = 0, r = 0; r < n.length; ++r)
            i += n[r].height;
          this.insertInner(e - this.first, n, i);
        },
        remove: function(e, n) {
          this.removeInner(e - this.first, n);
        },
        getValue: function(e) {
          var n = mi(this, this.first, this.first + this.size);
          return e === !1 ? n : n.join(e || this.lineSeparator());
        },
        setValue: Dt(function(e) {
          var n = ee(this.first, 0), i = this.first + this.size - 1;
          qr(this, {
            from: n,
            to: ee(i, we(this, i).text.length),
            text: this.splitLines(e),
            origin: "setValue",
            full: !0
          }, !0), this.cm && Ti(this.cm, 0, 0), Ut(this, ar(n), Nt);
        }),
        replaceRange: function(e, n, i, r) {
          n = Oe(this, n), i = i ? Oe(this, i) : n, _r(this, e, n, i, r);
        },
        getRange: function(e, n, i) {
          var r = jn(this, Oe(this, e), Oe(this, n));
          return i === !1 ? r : i === "" ? r.join("") : r.join(i || this.lineSeparator());
        },
        getLine: function(e) {
          var n = this.getLineHandle(e);
          return n && n.text;
        },
        getLineHandle: function(e) {
          if (ne(this, e))
            return we(this, e);
        },
        getLineNumber: function(e) {
          return j(e);
        },
        getLineHandleVisualStart: function(e) {
          return typeof e == "number" && (e = we(this, e)), Tn(e);
        },
        lineCount: function() {
          return this.size;
        },
        firstLine: function() {
          return this.first;
        },
        lastLine: function() {
          return this.first + this.size - 1;
        },
        clipPos: function(e) {
          return Oe(this, e);
        },
        getCursor: function(e) {
          var n = this.sel.primary(), i;
          return e == null || e == "head" ? i = n.head : e == "anchor" ? i = n.anchor : e == "end" || e == "to" || e === !1 ? i = n.to() : i = n.from(), i;
        },
        listSelections: function() {
          return this.sel.ranges;
        },
        somethingSelected: function() {
          return this.sel.somethingSelected();
        },
        setCursor: Dt(function(e, n, i) {
          Nu(this, Oe(this, typeof e == "number" ? ee(e, n || 0) : e), null, i);
        }),
        setSelection: Dt(function(e, n, i) {
          Nu(this, Oe(this, e), Oe(this, n || e), i);
        }),
        extendSelection: Dt(function(e, n, i) {
          Po(this, Oe(this, e), n && Oe(this, n), i);
        }),
        extendSelections: Dt(function(e, n) {
          Lu(this, bs(this, e), n);
        }),
        extendSelectionsBy: Dt(function(e, n) {
          var i = Ht(this.sel.ranges, e);
          Lu(this, bs(this, i), n);
        }),
        setSelections: Dt(function(e, n, i) {
          if (!!e.length) {
            for (var r = [], a = 0; a < e.length; a++)
              r[a] = new Qe(
                Oe(this, e[a].anchor),
                Oe(this, e[a].head || e[a].anchor)
              );
            n == null && (n = Math.min(e.length - 1, this.sel.primIndex)), Ut(this, Dn(this.cm, r, n), i);
          }
        }),
        addSelection: Dt(function(e, n, i) {
          var r = this.sel.ranges.slice(0);
          r.push(new Qe(Oe(this, e), Oe(this, n || e))), Ut(this, Dn(this.cm, r, r.length - 1), i);
        }),
        getSelection: function(e) {
          for (var n = this.sel.ranges, i, r = 0; r < n.length; r++) {
            var a = jn(this, n[r].from(), n[r].to());
            i = i ? i.concat(a) : a;
          }
          return e === !1 ? i : i.join(e || this.lineSeparator());
        },
        getSelections: function(e) {
          for (var n = [], i = this.sel.ranges, r = 0; r < i.length; r++) {
            var a = jn(this, i[r].from(), i[r].to());
            e !== !1 && (a = a.join(e || this.lineSeparator())), n[r] = a;
          }
          return n;
        },
        replaceSelection: function(e, n, i) {
          for (var r = [], a = 0; a < this.sel.ranges.length; a++)
            r[a] = e;
          this.replaceSelections(r, n, i || "+input");
        },
        replaceSelections: Dt(function(e, n, i) {
          for (var r = [], a = this.sel, p = 0; p < a.ranges.length; p++) {
            var D = a.ranges[p];
            r[p] = { from: D.from(), to: D.to(), text: this.splitLines(e[p]), origin: i };
          }
          for (var L = n && n != "end" && Uc(this, r, n), N = r.length - 1; N >= 0; N--)
            qr(this, r[N]);
          L ? Fu(this, L) : this.cm && Kr(this.cm);
        }),
        undo: Dt(function() {
          No(this, "undo");
        }),
        redo: Dt(function() {
          No(this, "redo");
        }),
        undoSelection: Dt(function() {
          No(this, "undo", !0);
        }),
        redoSelection: Dt(function() {
          No(this, "redo", !0);
        }),
        setExtending: function(e) {
          this.extend = e;
        },
        getExtending: function() {
          return this.extend;
        },
        historySize: function() {
          for (var e = this.history, n = 0, i = 0, r = 0; r < e.done.length; r++)
            e.done[r].ranges || ++n;
          for (var a = 0; a < e.undone.length; a++)
            e.undone[a].ranges || ++i;
          return { undo: n, redo: i };
        },
        clearHistory: function() {
          var e = this;
          this.history = new Mo(this.history), sr(this, function(n) {
            return n.history = e.history;
          }, !0);
        },
        markClean: function() {
          this.cleanGeneration = this.changeGeneration(!0);
        },
        changeGeneration: function(e) {
          return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation;
        },
        isClean: function(e) {
          return this.history.generation == (e || this.cleanGeneration);
        },
        getHistory: function() {
          return {
            done: Jr(this.history.done),
            undone: Jr(this.history.undone)
          };
        },
        setHistory: function(e) {
          var n = this.history = new Mo(this.history);
          n.done = Jr(e.done.slice(0), null, !0), n.undone = Jr(e.undone.slice(0), null, !0);
        },
        setGutterMarker: Dt(function(e, n, i) {
          return Ni(this, e, "gutter", function(r) {
            var a = r.gutterMarkers || (r.gutterMarkers = {});
            return a[n] = i, !i && xn(a) && (r.gutterMarkers = null), !0;
          });
        }),
        clearGutter: Dt(function(e) {
          var n = this;
          this.iter(function(i) {
            i.gutterMarkers && i.gutterMarkers[e] && Ni(n, i, "gutter", function() {
              return i.gutterMarkers[e] = null, xn(i.gutterMarkers) && (i.gutterMarkers = null), !0;
            });
          });
        }),
        lineInfo: function(e) {
          var n;
          if (typeof e == "number") {
            if (!ne(this, e) || (n = e, e = we(this, e), !e))
              return null;
          } else if (n = j(e), n == null)
            return null;
          return {
            line: n,
            handle: e,
            text: e.text,
            gutterMarkers: e.gutterMarkers,
            textClass: e.textClass,
            bgClass: e.bgClass,
            wrapClass: e.wrapClass,
            widgets: e.widgets
          };
        },
        addLineClass: Dt(function(e, n, i) {
          return Ni(this, e, n == "gutter" ? "gutter" : "class", function(r) {
            var a = n == "text" ? "textClass" : n == "background" ? "bgClass" : n == "gutter" ? "gutterClass" : "wrapClass";
            if (!r[a])
              r[a] = i;
            else {
              if (I(i).test(r[a]))
                return !1;
              r[a] += " " + i;
            }
            return !0;
          });
        }),
        removeLineClass: Dt(function(e, n, i) {
          return Ni(this, e, n == "gutter" ? "gutter" : "class", function(r) {
            var a = n == "text" ? "textClass" : n == "background" ? "bgClass" : n == "gutter" ? "gutterClass" : "wrapClass", p = r[a];
            if (p)
              if (i == null)
                r[a] = null;
              else {
                var D = p.match(I(i));
                if (!D)
                  return !1;
                var L = D.index + D[0].length;
                r[a] = p.slice(0, D.index) + (!D.index || L == p.length ? "" : " ") + p.slice(L) || null;
              }
            else
              return !1;
            return !0;
          });
        }),
        addLineWidget: Dt(function(e, n, i) {
          return kc(this, e, n, i);
        }),
        removeLineWidget: function(e) {
          e.clear();
        },
        markText: function(e, n, i) {
          return ei(this, Oe(this, e), Oe(this, n), i, i && i.type || "range");
        },
        setBookmark: function(e, n) {
          var i = {
            replacedWith: n && (n.nodeType == null ? n.widget : n),
            insertLeft: n && n.insertLeft,
            clearWhenEmpty: !1,
            shared: n && n.shared,
            handleMouseEvents: n && n.handleMouseEvents
          };
          return e = Oe(this, e), ei(this, e, e, i, "bookmark");
        },
        findMarksAt: function(e) {
          e = Oe(this, e);
          var n = [], i = we(this, e.line).markedSpans;
          if (i)
            for (var r = 0; r < i.length; ++r) {
              var a = i[r];
              (a.from == null || a.from <= e.ch) && (a.to == null || a.to >= e.ch) && n.push(a.marker.parent || a.marker);
            }
          return n;
        },
        findMarks: function(e, n, i) {
          e = Oe(this, e), n = Oe(this, n);
          var r = [], a = e.line;
          return this.iter(e.line, n.line + 1, function(p) {
            var D = p.markedSpans;
            if (D)
              for (var L = 0; L < D.length; L++) {
                var N = D[L];
                !(N.to != null && a == e.line && e.ch >= N.to || N.from == null && a != e.line || N.from != null && a == n.line && N.from >= n.ch) && (!i || i(N.marker)) && r.push(N.marker.parent || N.marker);
              }
            ++a;
          }), r;
        },
        getAllMarks: function() {
          var e = [];
          return this.iter(function(n) {
            var i = n.markedSpans;
            if (i)
              for (var r = 0; r < i.length; ++r)
                i[r].from != null && e.push(i[r].marker);
          }), e;
        },
        posFromIndex: function(e) {
          var n, i = this.first, r = this.lineSeparator().length;
          return this.iter(function(a) {
            var p = a.text.length + r;
            if (p > e)
              return n = e, !0;
            e -= p, ++i;
          }), Oe(this, ee(i, n));
        },
        indexFromPos: function(e) {
          e = Oe(this, e);
          var n = e.ch;
          if (e.line < this.first || e.ch < 0)
            return 0;
          var i = this.lineSeparator().length;
          return this.iter(this.first, e.line, function(r) {
            n += r.text.length + i;
          }), n;
        },
        copy: function(e) {
          var n = new _t(
            mi(this, this.first, this.first + this.size),
            this.modeOption,
            this.first,
            this.lineSep,
            this.direction
          );
          return n.scrollTop = this.scrollTop, n.scrollLeft = this.scrollLeft, n.sel = this.sel, n.extend = !1, e && (n.history.undoDepth = this.history.undoDepth, n.setHistory(this.getHistory())), n;
        },
        linkedDoc: function(e) {
          e || (e = {});
          var n = this.first, i = this.first + this.size;
          e.from != null && e.from > n && (n = e.from), e.to != null && e.to < i && (i = e.to);
          var r = new _t(mi(this, n, i), e.mode || this.modeOption, n, this.lineSep, this.direction);
          return e.sharedHist && (r.history = this.history), (this.linked || (this.linked = [])).push({ doc: r, sharedHist: e.sharedHist }), r.linked = [{ doc: this, isParent: !0, sharedHist: e.sharedHist }], Xc(r, Ku(this)), r;
        },
        unlinkDoc: function(e) {
          if (e instanceof nt && (e = e.doc), this.linked)
            for (var n = 0; n < this.linked.length; ++n) {
              var i = this.linked[n];
              if (i.doc == e) {
                this.linked.splice(n, 1), e.unlinkDoc(this), Jc(Ku(this));
                break;
              }
            }
          if (e.history == this.history) {
            var r = [e.id];
            sr(e, function(a) {
              return r.push(a.id);
            }, !0), e.history = new Mo(null), e.history.done = Jr(this.history.done, r), e.history.undone = Jr(this.history.undone, r);
          }
        },
        iterLinkedDocs: function(e) {
          sr(this, e);
        },
        getMode: function() {
          return this.mode;
        },
        getEditor: function() {
          return this.cm;
        },
        splitLines: function(e) {
          return this.lineSep ? e.split(this.lineSep) : gn(e);
        },
        lineSeparator: function() {
          return this.lineSep || `
`;
        },
        setDirection: Dt(function(e) {
          e != "rtl" && (e = "ltr"), e != this.direction && (this.direction = e, this.iter(function(n) {
            return n.order = null;
          }), this.cm && zc(this.cm));
        })
      }), _t.prototype.eachLine = _t.prototype.iter;
      var Xu = 0;
      function qc(e) {
        var n = this;
        if (Ju(n), !(Ge(n, e) || Vn(n.display, e))) {
          mt(e), d && (Xu = +new Date());
          var i = br(n, e, !0), r = e.dataTransfer.files;
          if (!(!i || n.isReadOnly()))
            if (r && r.length && window.FileReader && window.File)
              for (var a = r.length, p = Array(a), D = 0, L = function() {
                ++D == a && wt(n, function() {
                  i = Oe(n.doc, i);
                  var J = {
                    from: i,
                    to: i,
                    text: n.doc.splitLines(
                      p.filter(function(te) {
                        return te != null;
                      }).join(n.doc.lineSeparator())
                    ),
                    origin: "paste"
                  };
                  qr(n.doc, J), Fu(n.doc, ar(Oe(n.doc, i), Oe(n.doc, lr(J))));
                })();
              }, N = function(J, te) {
                if (n.options.allowDropFileTypes && be(n.options.allowDropFileTypes, J.type) == -1) {
                  L();
                  return;
                }
                var ie = new FileReader();
                ie.onerror = function() {
                  return L();
                }, ie.onload = function() {
                  var de = ie.result;
                  if (/[\x00-\x08\x0e-\x1f]{2}/.test(de)) {
                    L();
                    return;
                  }
                  p[te] = de, L();
                }, ie.readAsText(J);
              }, W = 0; W < r.length; W++)
                N(r[W], W);
            else {
              if (n.state.draggingText && n.doc.sel.contains(i) > -1) {
                n.state.draggingText(e), setTimeout(function() {
                  return n.display.input.focus();
                }, 20);
                return;
              }
              try {
                var V = e.dataTransfer.getData("Text");
                if (V) {
                  var k;
                  if (n.state.draggingText && !n.state.draggingText.copy && (k = n.listSelections()), Io(n.doc, ar(i, i)), k)
                    for (var Z = 0; Z < k.length; ++Z)
                      _r(n.doc, "", k[Z].anchor, k[Z].head, "drag");
                  n.replaceSelection(V, "around", "paste"), n.display.input.focus();
                }
              } catch {
              }
            }
        }
      }
      function _c(e, n) {
        if (d && (!e.state.draggingText || +new Date() - Xu < 100)) {
          _n(n);
          return;
        }
        if (!(Ge(e, n) || Vn(e.display, n)) && (n.dataTransfer.setData("Text", e.getSelection()), n.dataTransfer.effectAllowed = "copyMove", n.dataTransfer.setDragImage && !x)) {
          var i = P("img", null, null, "position: fixed; left: 0; top: 0;");
          i.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", g && (i.width = i.height = 1, e.display.wrapper.appendChild(i), i._top = i.offsetTop), n.dataTransfer.setDragImage(i, 0, 0), g && i.parentNode.removeChild(i);
        }
      }
      function ev(e, n) {
        var i = br(e, n);
        if (!!i) {
          var r = document.createDocumentFragment();
          Ma(e, i, r), e.display.dragCursor || (e.display.dragCursor = P("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), $(e.display.dragCursor, r);
        }
      }
      function Ju(e) {
        e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null);
      }
      function Zu(e) {
        if (!!document.getElementsByClassName) {
          for (var n = document.getElementsByClassName("CodeMirror"), i = [], r = 0; r < n.length; r++) {
            var a = n[r].CodeMirror;
            a && i.push(a);
          }
          i.length && i[0].operation(function() {
            for (var p = 0; p < i.length; p++)
              e(i[p]);
          });
        }
      }
      var qu = !1;
      function tv() {
        qu || (nv(), qu = !0);
      }
      function nv() {
        var e;
        ue(window, "resize", function() {
          e == null && (e = setTimeout(function() {
            e = null, Zu(rv);
          }, 100));
        }), ue(window, "blur", function() {
          return Zu(kr);
        });
      }
      function rv(e) {
        var n = e.display;
        n.cachedCharWidth = n.cachedTextHeight = n.cachedPaddingH = null, n.scrollbarsClipped = !1, e.setSize();
      }
      for (var fr = {
        3: "Pause",
        8: "Backspace",
        9: "Tab",
        13: "Enter",
        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Esc",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        44: "PrintScrn",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Mod",
        92: "Mod",
        93: "Mod",
        106: "*",
        107: "=",
        109: "-",
        110: ".",
        111: "/",
        145: "ScrollLock",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        224: "Mod",
        63232: "Up",
        63233: "Down",
        63234: "Left",
        63235: "Right",
        63272: "Delete",
        63273: "Home",
        63275: "End",
        63276: "PageUp",
        63277: "PageDown",
        63302: "Insert"
      }, Ui = 0; Ui < 10; Ui++)
        fr[Ui + 48] = fr[Ui + 96] = String(Ui);
      for (var Fo = 65; Fo <= 90; Fo++)
        fr[Fo] = String.fromCharCode(Fo);
      for (var zi = 1; zi <= 12; zi++)
        fr[zi + 111] = fr[zi + 63235] = "F" + zi;
      var Gn = {};
      Gn.basic = {
        Left: "goCharLeft",
        Right: "goCharRight",
        Up: "goLineUp",
        Down: "goLineDown",
        End: "goLineEnd",
        Home: "goLineStartSmart",
        PageUp: "goPageUp",
        PageDown: "goPageDown",
        Delete: "delCharAfter",
        Backspace: "delCharBefore",
        "Shift-Backspace": "delCharBefore",
        Tab: "defaultTab",
        "Shift-Tab": "indentAuto",
        Enter: "newlineAndIndent",
        Insert: "toggleOverwrite",
        Esc: "singleSelection"
      }, Gn.pcDefault = {
        "Ctrl-A": "selectAll",
        "Ctrl-D": "deleteLine",
        "Ctrl-Z": "undo",
        "Shift-Ctrl-Z": "redo",
        "Ctrl-Y": "redo",
        "Ctrl-Home": "goDocStart",
        "Ctrl-End": "goDocEnd",
        "Ctrl-Up": "goLineUp",
        "Ctrl-Down": "goLineDown",
        "Ctrl-Left": "goGroupLeft",
        "Ctrl-Right": "goGroupRight",
        "Alt-Left": "goLineStart",
        "Alt-Right": "goLineEnd",
        "Ctrl-Backspace": "delGroupBefore",
        "Ctrl-Delete": "delGroupAfter",
        "Ctrl-S": "save",
        "Ctrl-F": "find",
        "Ctrl-G": "findNext",
        "Shift-Ctrl-G": "findPrev",
        "Shift-Ctrl-F": "replace",
        "Shift-Ctrl-R": "replaceAll",
        "Ctrl-[": "indentLess",
        "Ctrl-]": "indentMore",
        "Ctrl-U": "undoSelection",
        "Shift-Ctrl-U": "redoSelection",
        "Alt-U": "redoSelection",
        fallthrough: "basic"
      }, Gn.emacsy = {
        "Ctrl-F": "goCharRight",
        "Ctrl-B": "goCharLeft",
        "Ctrl-P": "goLineUp",
        "Ctrl-N": "goLineDown",
        "Ctrl-A": "goLineStart",
        "Ctrl-E": "goLineEnd",
        "Ctrl-V": "goPageDown",
        "Shift-Ctrl-V": "goPageUp",
        "Ctrl-D": "delCharAfter",
        "Ctrl-H": "delCharBefore",
        "Alt-Backspace": "delWordBefore",
        "Ctrl-K": "killLine",
        "Ctrl-T": "transposeChars",
        "Ctrl-O": "openLine"
      }, Gn.macDefault = {
        "Cmd-A": "selectAll",
        "Cmd-D": "deleteLine",
        "Cmd-Z": "undo",
        "Shift-Cmd-Z": "redo",
        "Cmd-Y": "redo",
        "Cmd-Home": "goDocStart",
        "Cmd-Up": "goDocStart",
        "Cmd-End": "goDocEnd",
        "Cmd-Down": "goDocEnd",
        "Alt-Left": "goGroupLeft",
        "Alt-Right": "goGroupRight",
        "Cmd-Left": "goLineLeft",
        "Cmd-Right": "goLineRight",
        "Alt-Backspace": "delGroupBefore",
        "Ctrl-Alt-Backspace": "delGroupAfter",
        "Alt-Delete": "delGroupAfter",
        "Cmd-S": "save",
        "Cmd-F": "find",
        "Cmd-G": "findNext",
        "Shift-Cmd-G": "findPrev",
        "Cmd-Alt-F": "replace",
        "Shift-Cmd-Alt-F": "replaceAll",
        "Cmd-[": "indentLess",
        "Cmd-]": "indentMore",
        "Cmd-Backspace": "delWrappedLineLeft",
        "Cmd-Delete": "delWrappedLineRight",
        "Cmd-U": "undoSelection",
        "Shift-Cmd-U": "redoSelection",
        "Ctrl-Up": "goDocStart",
        "Ctrl-Down": "goDocEnd",
        fallthrough: ["basic", "emacsy"]
      }, Gn.default = C ? Gn.macDefault : Gn.pcDefault;
      function iv(e) {
        var n = e.split(/-(?!$)/);
        e = n[n.length - 1];
        for (var i, r, a, p, D = 0; D < n.length - 1; D++) {
          var L = n[D];
          if (/^(cmd|meta|m)$/i.test(L))
            p = !0;
          else if (/^a(lt)?$/i.test(L))
            i = !0;
          else if (/^(c|ctrl|control)$/i.test(L))
            r = !0;
          else if (/^s(hift)?$/i.test(L))
            a = !0;
          else
            throw new Error("Unrecognized modifier name: " + L);
        }
        return i && (e = "Alt-" + e), r && (e = "Ctrl-" + e), p && (e = "Cmd-" + e), a && (e = "Shift-" + e), e;
      }
      function ov(e) {
        var n = {};
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var r = e[i];
            if (/^(name|fallthrough|(de|at)tach)$/.test(i))
              continue;
            if (r == "...") {
              delete e[i];
              continue;
            }
            for (var a = Ht(i.split(" "), iv), p = 0; p < a.length; p++) {
              var D = void 0, L = void 0;
              p == a.length - 1 ? (L = a.join(" "), D = r) : (L = a.slice(0, p + 1).join(" "), D = "...");
              var N = n[L];
              if (!N)
                n[L] = D;
              else if (N != D)
                throw new Error("Inconsistent bindings for " + L);
            }
            delete e[i];
          }
        for (var W in n)
          e[W] = n[W];
        return e;
      }
      function ti(e, n, i, r) {
        n = Oo(n);
        var a = n.call ? n.call(e, r) : n[e];
        if (a === !1)
          return "nothing";
        if (a === "...")
          return "multi";
        if (a != null && i(a))
          return "handled";
        if (n.fallthrough) {
          if (Object.prototype.toString.call(n.fallthrough) != "[object Array]")
            return ti(e, n.fallthrough, i, r);
          for (var p = 0; p < n.fallthrough.length; p++) {
            var D = ti(e, n.fallthrough[p], i, r);
            if (D)
              return D;
          }
        }
      }
      function _u(e) {
        var n = typeof e == "string" ? e : fr[e.keyCode];
        return n == "Ctrl" || n == "Alt" || n == "Shift" || n == "Mod";
      }
      function ef(e, n, i) {
        var r = e;
        return n.altKey && r != "Alt" && (e = "Alt-" + e), (O ? n.metaKey : n.ctrlKey) && r != "Ctrl" && (e = "Ctrl-" + e), (O ? n.ctrlKey : n.metaKey) && r != "Mod" && (e = "Cmd-" + e), !i && n.shiftKey && r != "Shift" && (e = "Shift-" + e), e;
      }
      function tf(e, n) {
        if (g && e.keyCode == 34 && e.char)
          return !1;
        var i = fr[e.keyCode];
        return i == null || e.altGraphKey ? !1 : (e.keyCode == 3 && e.code && (i = e.code), ef(i, e, n));
      }
      function Oo(e) {
        return typeof e == "string" ? Gn[e] : e;
      }
      function ni(e, n) {
        for (var i = e.doc.sel.ranges, r = [], a = 0; a < i.length; a++) {
          for (var p = n(i[a]); r.length && ye(p.from, Ue(r).to) <= 0; ) {
            var D = r.pop();
            if (ye(D.from, p.from) < 0) {
              p.from = D.from;
              break;
            }
          }
          r.push(p);
        }
        an(e, function() {
          for (var L = r.length - 1; L >= 0; L--)
            _r(e.doc, "", r[L].from, r[L].to, "+delete");
          Kr(e);
        });
      }
      function Qa(e, n, i) {
        var r = Xt(e.text, n + i, i);
        return r < 0 || r > e.text.length ? null : r;
      }
      function Ga(e, n, i) {
        var r = Qa(e, n.ch, i);
        return r == null ? null : new ee(n.line, r, i < 0 ? "after" : "before");
      }
      function ka(e, n, i, r, a) {
        if (e) {
          n.doc.direction == "rtl" && (a = -a);
          var p = oe(i, n.doc.direction);
          if (p) {
            var D = a < 0 ? Ue(p) : p[0], L = a < 0 == (D.level == 1), N = L ? "after" : "before", W;
            if (D.level > 0 || n.doc.direction == "rtl") {
              var V = Vr(n, i);
              W = a < 0 ? i.text.length - 1 : 0;
              var k = On(n, V, W).top;
              W = We(function(Z) {
                return On(n, V, Z).top == k;
              }, a < 0 == (D.level == 1) ? D.from : D.to - 1, W), N == "before" && (W = Qa(i, W, 1));
            } else
              W = a < 0 ? D.to : D.from;
            return new ee(r, W, N);
          }
        }
        return new ee(r, a < 0 ? i.text.length : 0, a < 0 ? "before" : "after");
      }
      function av(e, n, i, r) {
        var a = oe(n, e.doc.direction);
        if (!a)
          return Ga(n, i, r);
        i.ch >= n.text.length ? (i.ch = n.text.length, i.sticky = "before") : i.ch <= 0 && (i.ch = 0, i.sticky = "after");
        var p = Fe(a, i.ch, i.sticky), D = a[p];
        if (e.doc.direction == "ltr" && D.level % 2 == 0 && (r > 0 ? D.to > i.ch : D.from < i.ch))
          return Ga(n, i, r);
        var L = function(he, xe) {
          return Qa(n, he instanceof ee ? he.ch : he, xe);
        }, N, W = function(he) {
          return e.options.lineWrapping ? (N = N || Vr(e, n), au(e, n, N, he)) : { begin: 0, end: n.text.length };
        }, V = W(i.sticky == "before" ? L(i, -1) : i.ch);
        if (e.doc.direction == "rtl" || D.level == 1) {
          var k = D.level == 1 == r < 0, Z = L(i, k ? 1 : -1);
          if (Z != null && (k ? Z <= D.to && Z <= V.end : Z >= D.from && Z >= V.begin)) {
            var J = k ? "before" : "after";
            return new ee(i.line, Z, J);
          }
        }
        var te = function(he, xe, ge) {
          for (var Te = function(_e, Mt) {
            return Mt ? new ee(i.line, L(_e, 1), "before") : new ee(i.line, _e, "after");
          }; he >= 0 && he < a.length; he += xe) {
            var Re = a[he], Me = xe > 0 == (Re.level != 1), Be = Me ? ge.begin : L(ge.end, -1);
            if (Re.from <= Be && Be < Re.to || (Be = Me ? Re.from : L(Re.to, -1), ge.begin <= Be && Be < ge.end))
              return Te(Be, Me);
          }
        }, ie = te(p + r, r, V);
        if (ie)
          return ie;
        var de = r > 0 ? V.end : L(V.begin, -1);
        return de != null && !(r > 0 && de == n.text.length) && (ie = te(r > 0 ? 0 : a.length - 1, r, W(de)), ie) ? ie : null;
      }
      var Wi = {
        selectAll: zu,
        singleSelection: function(e) {
          return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), Nt);
        },
        killLine: function(e) {
          return ni(e, function(n) {
            if (n.empty()) {
              var i = we(e.doc, n.head.line).text.length;
              return n.head.ch == i && n.head.line < e.lastLine() ? { from: n.head, to: ee(n.head.line + 1, 0) } : { from: n.head, to: ee(n.head.line, i) };
            } else
              return { from: n.from(), to: n.to() };
          });
        },
        deleteLine: function(e) {
          return ni(e, function(n) {
            return {
              from: ee(n.from().line, 0),
              to: Oe(e.doc, ee(n.to().line + 1, 0))
            };
          });
        },
        delLineLeft: function(e) {
          return ni(e, function(n) {
            return {
              from: ee(n.from().line, 0),
              to: n.from()
            };
          });
        },
        delWrappedLineLeft: function(e) {
          return ni(e, function(n) {
            var i = e.charCoords(n.head, "div").top + 5, r = e.coordsChar({ left: 0, top: i }, "div");
            return { from: r, to: n.from() };
          });
        },
        delWrappedLineRight: function(e) {
          return ni(e, function(n) {
            var i = e.charCoords(n.head, "div").top + 5, r = e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: i }, "div");
            return { from: n.from(), to: r };
          });
        },
        undo: function(e) {
          return e.undo();
        },
        redo: function(e) {
          return e.redo();
        },
        undoSelection: function(e) {
          return e.undoSelection();
        },
        redoSelection: function(e) {
          return e.redoSelection();
        },
        goDocStart: function(e) {
          return e.extendSelection(ee(e.firstLine(), 0));
        },
        goDocEnd: function(e) {
          return e.extendSelection(ee(e.lastLine()));
        },
        goLineStart: function(e) {
          return e.extendSelectionsBy(
            function(n) {
              return nf(e, n.head.line);
            },
            { origin: "+move", bias: 1 }
          );
        },
        goLineStartSmart: function(e) {
          return e.extendSelectionsBy(
            function(n) {
              return rf(e, n.head);
            },
            { origin: "+move", bias: 1 }
          );
        },
        goLineEnd: function(e) {
          return e.extendSelectionsBy(
            function(n) {
              return lv(e, n.head.line);
            },
            { origin: "+move", bias: -1 }
          );
        },
        goLineRight: function(e) {
          return e.extendSelectionsBy(function(n) {
            var i = e.cursorCoords(n.head, "div").top + 5;
            return e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: i }, "div");
          }, Et);
        },
        goLineLeft: function(e) {
          return e.extendSelectionsBy(function(n) {
            var i = e.cursorCoords(n.head, "div").top + 5;
            return e.coordsChar({ left: 0, top: i }, "div");
          }, Et);
        },
        goLineLeftSmart: function(e) {
          return e.extendSelectionsBy(function(n) {
            var i = e.cursorCoords(n.head, "div").top + 5, r = e.coordsChar({ left: 0, top: i }, "div");
            return r.ch < e.getLine(r.line).search(/\S/) ? rf(e, n.head) : r;
          }, Et);
        },
        goLineUp: function(e) {
          return e.moveV(-1, "line");
        },
        goLineDown: function(e) {
          return e.moveV(1, "line");
        },
        goPageUp: function(e) {
          return e.moveV(-1, "page");
        },
        goPageDown: function(e) {
          return e.moveV(1, "page");
        },
        goCharLeft: function(e) {
          return e.moveH(-1, "char");
        },
        goCharRight: function(e) {
          return e.moveH(1, "char");
        },
        goColumnLeft: function(e) {
          return e.moveH(-1, "column");
        },
        goColumnRight: function(e) {
          return e.moveH(1, "column");
        },
        goWordLeft: function(e) {
          return e.moveH(-1, "word");
        },
        goGroupRight: function(e) {
          return e.moveH(1, "group");
        },
        goGroupLeft: function(e) {
          return e.moveH(-1, "group");
        },
        goWordRight: function(e) {
          return e.moveH(1, "word");
        },
        delCharBefore: function(e) {
          return e.deleteH(-1, "codepoint");
        },
        delCharAfter: function(e) {
          return e.deleteH(1, "char");
        },
        delWordBefore: function(e) {
          return e.deleteH(-1, "word");
        },
        delWordAfter: function(e) {
          return e.deleteH(1, "word");
        },
        delGroupBefore: function(e) {
          return e.deleteH(-1, "group");
        },
        delGroupAfter: function(e) {
          return e.deleteH(1, "group");
        },
        indentAuto: function(e) {
          return e.indentSelection("smart");
        },
        indentMore: function(e) {
          return e.indentSelection("add");
        },
        indentLess: function(e) {
          return e.indentSelection("subtract");
        },
        insertTab: function(e) {
          return e.replaceSelection("	");
        },
        insertSoftTab: function(e) {
          for (var n = [], i = e.listSelections(), r = e.options.tabSize, a = 0; a < i.length; a++) {
            var p = i[a].from(), D = pe(e.getLine(p.line), p.ch, r);
            n.push(Kt(r - D % r));
          }
          e.replaceSelections(n);
        },
        defaultTab: function(e) {
          e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab");
        },
        transposeChars: function(e) {
          return an(e, function() {
            for (var n = e.listSelections(), i = [], r = 0; r < n.length; r++)
              if (!!n[r].empty()) {
                var a = n[r].head, p = we(e.doc, a.line).text;
                if (p) {
                  if (a.ch == p.length && (a = new ee(a.line, a.ch - 1)), a.ch > 0)
                    a = new ee(a.line, a.ch + 1), e.replaceRange(
                      p.charAt(a.ch - 1) + p.charAt(a.ch - 2),
                      ee(a.line, a.ch - 2),
                      a,
                      "+transpose"
                    );
                  else if (a.line > e.doc.first) {
                    var D = we(e.doc, a.line - 1).text;
                    D && (a = new ee(a.line, 1), e.replaceRange(
                      p.charAt(0) + e.doc.lineSeparator() + D.charAt(D.length - 1),
                      ee(a.line - 1, D.length - 1),
                      a,
                      "+transpose"
                    ));
                  }
                }
                i.push(new Qe(a, a));
              }
            e.setSelections(i);
          });
        },
        newlineAndIndent: function(e) {
          return an(e, function() {
            for (var n = e.listSelections(), i = n.length - 1; i >= 0; i--)
              e.replaceRange(e.doc.lineSeparator(), n[i].anchor, n[i].head, "+input");
            n = e.listSelections();
            for (var r = 0; r < n.length; r++)
              e.indentLine(n[r].from().line, null, !0);
            Kr(e);
          });
        },
        openLine: function(e) {
          return e.replaceSelection(`
`, "start");
        },
        toggleOverwrite: function(e) {
          return e.toggleOverwrite();
        }
      };
      function nf(e, n) {
        var i = we(e.doc, n), r = Tn(i);
        return r != i && (n = j(r)), ka(!0, e, r, n, 1);
      }
      function lv(e, n) {
        var i = we(e.doc, n), r = Vd(i);
        return r != i && (n = j(r)), ka(!0, e, i, n, -1);
      }
      function rf(e, n) {
        var i = nf(e, n.line), r = we(e.doc, i.line), a = oe(r, e.doc.direction);
        if (!a || a[0].level == 0) {
          var p = Math.max(i.ch, r.text.search(/\S/)), D = n.line == i.line && n.ch <= p && n.ch;
          return ee(i.line, D ? 0 : p, i.sticky);
        }
        return i;
      }
      function Bo(e, n, i) {
        if (typeof n == "string" && (n = Wi[n], !n))
          return !1;
        e.display.input.ensurePolled();
        var r = e.display.shift, a = !1;
        try {
          e.isReadOnly() && (e.state.suppressEdits = !0), i && (e.display.shift = !1), a = n(e) != Ot;
        } finally {
          e.display.shift = r, e.state.suppressEdits = !1;
        }
        return a;
      }
      function sv(e, n, i) {
        for (var r = 0; r < e.state.keyMaps.length; r++) {
          var a = ti(n, e.state.keyMaps[r], i, e);
          if (a)
            return a;
        }
        return e.options.extraKeys && ti(n, e.options.extraKeys, i, e) || ti(n, e.options.keyMap, i, e);
      }
      var uv = new Pe();
      function ji(e, n, i, r) {
        var a = e.state.keySeq;
        if (a) {
          if (_u(n))
            return "handled";
          if (/\'$/.test(n) ? e.state.keySeq = null : uv.set(50, function() {
            e.state.keySeq == a && (e.state.keySeq = null, e.display.input.reset());
          }), of(e, a + " " + n, i, r))
            return !0;
        }
        return of(e, n, i, r);
      }
      function of(e, n, i, r) {
        var a = sv(e, n, r);
        return a == "multi" && (e.state.keySeq = n), a == "handled" && Tt(e, "keyHandled", e, n, i), (a == "handled" || a == "multi") && (mt(i), Ra(e)), !!a;
      }
      function af(e, n) {
        var i = tf(n, !0);
        return i ? n.shiftKey && !e.state.keySeq ? ji(e, "Shift-" + i, n, function(r) {
          return Bo(e, r, !0);
        }) || ji(e, i, n, function(r) {
          if (typeof r == "string" ? /^go[A-Z]/.test(r) : r.motion)
            return Bo(e, r);
        }) : ji(e, i, n, function(r) {
          return Bo(e, r);
        }) : !1;
      }
      function fv(e, n, i) {
        return ji(e, "'" + i + "'", n, function(r) {
          return Bo(e, r, !0);
        });
      }
      var Ka = null;
      function lf(e) {
        var n = this;
        if (!(e.target && e.target != n.display.input.getField()) && (n.curOp.focus = q(ve(n)), !Ge(n, e))) {
          d && m < 11 && e.keyCode == 27 && (e.returnValue = !1);
          var i = e.keyCode;
          n.display.shift = i == 16 || e.shiftKey;
          var r = af(n, e);
          g && (Ka = r ? i : null, !r && i == 88 && !uo && (C ? e.metaKey : e.ctrlKey) && n.replaceSelection("", null, "cut")), t && !C && !r && i == 46 && e.shiftKey && !e.ctrlKey && document.execCommand && document.execCommand("cut"), i == 18 && !/\bCodeMirror-crosshair\b/.test(n.display.lineDiv.className) && dv(n);
        }
      }
      function dv(e) {
        var n = e.display.lineDiv;
        X(n, "CodeMirror-crosshair");
        function i(r) {
          (r.keyCode == 18 || !r.altKey) && (U(n, "CodeMirror-crosshair"), ze(document, "keyup", i), ze(document, "mouseover", i));
        }
        ue(document, "keyup", i), ue(document, "mouseover", i);
      }
      function sf(e) {
        e.keyCode == 16 && (this.doc.sel.shift = !1), Ge(this, e);
      }
      function uf(e) {
        var n = this;
        if (!(e.target && e.target != n.display.input.getField()) && !(Vn(n.display, e) || Ge(n, e) || e.ctrlKey && !e.altKey || C && e.metaKey)) {
          var i = e.keyCode, r = e.charCode;
          if (g && i == Ka) {
            Ka = null, mt(e);
            return;
          }
          if (!(g && (!e.which || e.which < 10) && af(n, e))) {
            var a = String.fromCharCode(r == null ? i : r);
            a != "\b" && (fv(n, e, a) || n.display.input.onKeyPress(e));
          }
        }
      }
      var cv = 400, Xa = function(e, n, i) {
        this.time = e, this.pos = n, this.button = i;
      };
      Xa.prototype.compare = function(e, n, i) {
        return this.time + cv > e && ye(n, this.pos) == 0 && i == this.button;
      };
      var $i, Yi;
      function vv(e, n) {
        var i = +new Date();
        return Yi && Yi.compare(i, e, n) ? ($i = Yi = null, "triple") : $i && $i.compare(i, e, n) ? (Yi = new Xa(i, e, n), $i = null, "double") : ($i = new Xa(i, e, n), Yi = null, "single");
      }
      function ff(e) {
        var n = this, i = n.display;
        if (!(Ge(n, e) || i.activeTouch && i.input.supportsTouch())) {
          if (i.input.ensurePolled(), i.shift = e.shiftKey, Vn(i, e)) {
            T || (i.scroller.draggable = !1, setTimeout(function() {
              return i.scroller.draggable = !0;
            }, 100));
            return;
          }
          if (!Ja(n, e)) {
            var r = br(n, e), a = Sn(e), p = r ? vv(r, a) : "single";
            ae(n).focus(), a == 1 && n.state.selectingText && n.state.selectingText(e), !(r && pv(n, a, r, p, e)) && (a == 1 ? r ? gv(n, r, p, e) : pi(e) == i.scroller && mt(e) : a == 2 ? (r && Po(n.doc, r), setTimeout(function() {
              return i.input.focus();
            }, 20)) : a == 3 && (z ? n.display.input.onContextMenu(e) : Pa(n)));
          }
        }
      }
      function pv(e, n, i, r, a) {
        var p = "Click";
        return r == "double" ? p = "Double" + p : r == "triple" && (p = "Triple" + p), p = (n == 1 ? "Left" : n == 2 ? "Middle" : "Right") + p, ji(e, ef(p, a), a, function(D) {
          if (typeof D == "string" && (D = Wi[D]), !D)
            return !1;
          var L = !1;
          try {
            e.isReadOnly() && (e.state.suppressEdits = !0), L = D(e, i) != Ot;
          } finally {
            e.state.suppressEdits = !1;
          }
          return L;
        });
      }
      function hv(e, n, i) {
        var r = e.getOption("configureMouse"), a = r ? r(e, n, i) : {};
        if (a.unit == null) {
          var p = R ? i.shiftKey && i.metaKey : i.altKey;
          a.unit = p ? "rectangle" : n == "single" ? "char" : n == "double" ? "word" : "line";
        }
        return (a.extend == null || e.doc.extend) && (a.extend = e.doc.extend || i.shiftKey), a.addNew == null && (a.addNew = C ? i.metaKey : i.ctrlKey), a.moveOnDrag == null && (a.moveOnDrag = !(C ? i.altKey : i.ctrlKey)), a;
      }
      function gv(e, n, i, r) {
        d ? setTimeout(re(fu, e), 0) : e.curOp.focus = q(ve(e));
        var a = hv(e, i, r), p = e.doc.sel, D;
        e.options.dragDrop && sa && !e.isReadOnly() && i == "single" && (D = p.contains(n)) > -1 && (ye((D = p.ranges[D]).from(), n) < 0 || n.xRel > 0) && (ye(D.to(), n) > 0 || n.xRel < 0) ? mv(e, r, n, a) : yv(e, r, n, a);
      }
      function mv(e, n, i, r) {
        var a = e.display, p = !1, D = wt(e, function(W) {
          T && (a.scroller.draggable = !1), e.state.draggingText = !1, e.state.delayingBlurEvent && (e.hasFocus() ? e.state.delayingBlurEvent = !1 : Pa(e)), ze(a.wrapper.ownerDocument, "mouseup", D), ze(a.wrapper.ownerDocument, "mousemove", L), ze(a.scroller, "dragstart", N), ze(a.scroller, "drop", D), p || (mt(W), r.addNew || Po(e.doc, i, null, null, r.extend), T && !x || d && m == 9 ? setTimeout(function() {
            a.wrapper.ownerDocument.body.focus({ preventScroll: !0 }), a.input.focus();
          }, 20) : a.input.focus());
        }), L = function(W) {
          p = p || Math.abs(n.clientX - W.clientX) + Math.abs(n.clientY - W.clientY) >= 10;
        }, N = function() {
          return p = !0;
        };
        T && (a.scroller.draggable = !0), e.state.draggingText = D, D.copy = !r.moveOnDrag, ue(a.wrapper.ownerDocument, "mouseup", D), ue(a.wrapper.ownerDocument, "mousemove", L), ue(a.scroller, "dragstart", N), ue(a.scroller, "drop", D), e.state.delayingBlurEvent = !0, setTimeout(function() {
          return a.input.focus();
        }, 20), a.scroller.dragDrop && a.scroller.dragDrop();
      }
      function df(e, n, i) {
        if (i == "char")
          return new Qe(n, n);
        if (i == "word")
          return e.findWordAt(n);
        if (i == "line")
          return new Qe(ee(n.line, 0), Oe(e.doc, ee(n.line + 1, 0)));
        var r = i(e, n);
        return new Qe(r.from, r.to);
      }
      function yv(e, n, i, r) {
        d && Pa(e);
        var a = e.display, p = e.doc;
        mt(n);
        var D, L, N = p.sel, W = N.ranges;
        if (r.addNew && !r.extend ? (L = p.sel.contains(i), L > -1 ? D = W[L] : D = new Qe(i, i)) : (D = p.sel.primary(), L = p.sel.primIndex), r.unit == "rectangle")
          r.addNew || (D = new Qe(i, i)), i = br(e, n, !0, !0), L = -1;
        else {
          var V = df(e, i, r.unit);
          r.extend ? D = Ya(D, V.anchor, V.head, r.extend) : D = V;
        }
        r.addNew ? L == -1 ? (L = W.length, Ut(
          p,
          Dn(e, W.concat([D]), L),
          { scroll: !1, origin: "*mouse" }
        )) : W.length > 1 && W[L].empty() && r.unit == "char" && !r.extend ? (Ut(
          p,
          Dn(e, W.slice(0, L).concat(W.slice(L + 1)), 0),
          { scroll: !1, origin: "*mouse" }
        ), N = p.sel) : Va(p, L, D, ot) : (L = 0, Ut(p, new fn([D], 0), ot), N = p.sel);
        var k = i;
        function Z(ge) {
          if (ye(k, ge) != 0)
            if (k = ge, r.unit == "rectangle") {
              for (var Te = [], Re = e.options.tabSize, Me = pe(we(p, i.line).text, i.ch, Re), Be = pe(we(p, ge.line).text, ge.ch, Re), _e = Math.min(Me, Be), Mt = Math.max(Me, Be), rt = Math.min(i.line, ge.line), ln = Math.min(e.lastLine(), Math.max(i.line, ge.line)); rt <= ln; rt++) {
                var en = we(p, rt).text, ht = Bt(en, _e, Re);
                _e == Mt ? Te.push(new Qe(ee(rt, ht), ee(rt, ht))) : en.length > ht && Te.push(new Qe(ee(rt, ht), ee(rt, Bt(en, Mt, Re))));
              }
              Te.length || Te.push(new Qe(i, i)), Ut(
                p,
                Dn(e, N.ranges.slice(0, L).concat(Te), L),
                { origin: "*mouse", scroll: !1 }
              ), e.scrollIntoView(ge);
            } else {
              var tn = D, Ft = df(e, ge, r.unit), yt = tn.anchor, gt;
              ye(Ft.anchor, yt) > 0 ? (gt = Ft.head, yt = jr(tn.from(), Ft.anchor)) : (gt = Ft.anchor, yt = Zt(tn.to(), Ft.head));
              var st = N.ranges.slice(0);
              st[L] = Av(e, new Qe(Oe(p, yt), gt)), Ut(p, Dn(e, st, L), ot);
            }
        }
        var J = a.wrapper.getBoundingClientRect(), te = 0;
        function ie(ge) {
          var Te = ++te, Re = br(e, ge, !0, r.unit == "rectangle");
          if (!!Re)
            if (ye(Re, k) != 0) {
              e.curOp.focus = q(ve(e)), Z(Re);
              var Me = Co(a, p);
              (Re.line >= Me.to || Re.line < Me.from) && setTimeout(wt(e, function() {
                te == Te && ie(ge);
              }), 150);
            } else {
              var Be = ge.clientY < J.top ? -20 : ge.clientY > J.bottom ? 20 : 0;
              Be && setTimeout(wt(e, function() {
                te == Te && (a.scroller.scrollTop += Be, ie(ge));
              }), 50);
            }
        }
        function de(ge) {
          e.state.selectingText = !1, te = 1 / 0, ge && (mt(ge), a.input.focus()), ze(a.wrapper.ownerDocument, "mousemove", he), ze(a.wrapper.ownerDocument, "mouseup", xe), p.history.lastSelOrigin = null;
        }
        var he = wt(e, function(ge) {
          ge.buttons === 0 || !Sn(ge) ? de(ge) : ie(ge);
        }), xe = wt(e, de);
        e.state.selectingText = xe, ue(a.wrapper.ownerDocument, "mousemove", he), ue(a.wrapper.ownerDocument, "mouseup", xe);
      }
      function Av(e, n) {
        var i = n.anchor, r = n.head, a = we(e.doc, i.line);
        if (ye(i, r) == 0 && i.sticky == r.sticky)
          return n;
        var p = oe(a);
        if (!p)
          return n;
        var D = Fe(p, i.ch, i.sticky), L = p[D];
        if (L.from != i.ch && L.to != i.ch)
          return n;
        var N = D + (L.from == i.ch == (L.level != 1) ? 0 : 1);
        if (N == 0 || N == p.length)
          return n;
        var W;
        if (r.line != i.line)
          W = (r.line - i.line) * (e.doc.direction == "ltr" ? 1 : -1) > 0;
        else {
          var V = Fe(p, r.ch, r.sticky), k = V - D || (r.ch - i.ch) * (L.level == 1 ? -1 : 1);
          V == N - 1 || V == N ? W = k < 0 : W = k > 0;
        }
        var Z = p[N + (W ? -1 : 0)], J = W == (Z.level == 1), te = J ? Z.from : Z.to, ie = J ? "after" : "before";
        return i.ch == te && i.sticky == ie ? n : new Qe(new ee(i.line, te, ie), r);
      }
      function cf(e, n, i, r) {
        var a, p;
        if (n.touches)
          a = n.touches[0].clientX, p = n.touches[0].clientY;
        else
          try {
            a = n.clientX, p = n.clientY;
          } catch {
            return !1;
          }
        if (a >= Math.floor(e.display.gutters.getBoundingClientRect().right))
          return !1;
        r && mt(n);
        var D = e.display, L = D.lineDiv.getBoundingClientRect();
        if (p > L.bottom || !Ze(e, i))
          return Jt(n);
        p -= L.top - D.viewOffset;
        for (var N = 0; N < e.display.gutterSpecs.length; ++N) {
          var W = D.gutters.childNodes[N];
          if (W && W.getBoundingClientRect().right >= a) {
            var V = G(e.doc, p), k = e.display.gutterSpecs[N];
            return $e(e, i, e, V, k.className, n), Jt(n);
          }
        }
      }
      function Ja(e, n) {
        return cf(e, n, "gutterClick", !0);
      }
      function vf(e, n) {
        Vn(e.display, n) || xv(e, n) || Ge(e, n, "contextmenu") || z || e.display.input.onContextMenu(n);
      }
      function xv(e, n) {
        return Ze(e, "gutterContextMenu") ? cf(e, n, "gutterContextMenu", !1) : !1;
      }
      function pf(e) {
        e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), bi(e);
      }
      var ri = { toString: function() {
        return "CodeMirror.Init";
      } }, hf = {}, Ho = {};
      function Sv(e) {
        var n = e.optionHandlers;
        function i(r, a, p, D) {
          e.defaults[r] = a, p && (n[r] = D ? function(L, N, W) {
            W != ri && p(L, N, W);
          } : p);
        }
        e.defineOption = i, e.Init = ri, i("value", "", function(r, a) {
          return r.setValue(a);
        }, !0), i("mode", null, function(r, a) {
          r.doc.modeOption = a, Wa(r);
        }, !0), i("indentUnit", 2, Wa, !0), i("indentWithTabs", !1), i("smartIndent", !0), i("tabSize", 4, function(r) {
          Ii(r), bi(r), qt(r);
        }, !0), i("lineSeparator", null, function(r, a) {
          if (r.doc.lineSep = a, !!a) {
            var p = [], D = r.doc.first;
            r.doc.iter(function(N) {
              for (var W = 0; ; ) {
                var V = N.text.indexOf(a, W);
                if (V == -1)
                  break;
                W = V + a.length, p.push(ee(D, V));
              }
              D++;
            });
            for (var L = p.length - 1; L >= 0; L--)
              _r(r.doc, a, p[L], ee(p[L].line, p[L].ch + a.length));
          }
        }), i("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g, function(r, a, p) {
          r.state.specialChars = new RegExp(a.source + (a.test("	") ? "" : "|	"), "g"), p != ri && r.refresh();
        }), i("specialCharPlaceholder", Jd, function(r) {
          return r.refresh();
        }, !0), i("electricChars", !0), i("inputStyle", E ? "contenteditable" : "textarea", function() {
          throw new Error("inputStyle can not (yet) be changed in a running editor");
        }, !0), i("spellcheck", !1, function(r, a) {
          return r.getInputField().spellcheck = a;
        }, !0), i("autocorrect", !1, function(r, a) {
          return r.getInputField().autocorrect = a;
        }, !0), i("autocapitalize", !1, function(r, a) {
          return r.getInputField().autocapitalize = a;
        }, !0), i("rtlMoveVisually", !F), i("wholeLineUpdateBefore", !0), i("theme", "default", function(r) {
          pf(r), Pi(r);
        }, !0), i("keyMap", "default", function(r, a, p) {
          var D = Oo(a), L = p != ri && Oo(p);
          L && L.detach && L.detach(r, D), D.attach && D.attach(r, L || null);
        }), i("extraKeys", null), i("configureMouse", null), i("lineWrapping", !1, bv, !0), i("gutters", [], function(r, a) {
          r.display.gutterSpecs = Ua(a, r.options.lineNumbers), Pi(r);
        }, !0), i("fixedGutter", !0, function(r, a) {
          r.display.gutters.style.left = a ? wa(r.display) + "px" : "0", r.refresh();
        }, !0), i("coverGutterNextToScrollbar", !1, function(r) {
          return Xr(r);
        }, !0), i("scrollbarStyle", "native", function(r) {
          gu(r), Xr(r), r.display.scrollbars.setScrollTop(r.doc.scrollTop), r.display.scrollbars.setScrollLeft(r.doc.scrollLeft);
        }, !0), i("lineNumbers", !1, function(r, a) {
          r.display.gutterSpecs = Ua(r.options.gutters, a), Pi(r);
        }, !0), i("firstLineNumber", 1, Pi, !0), i("lineNumberFormatter", function(r) {
          return r;
        }, Pi, !0), i("showCursorWhenSelecting", !1, Ci, !0), i("resetSelectionOnContextMenu", !0), i("lineWiseCopyCut", !0), i("pasteLinesPerSelection", !0), i("selectionsMayTouch", !1), i("readOnly", !1, function(r, a) {
          a == "nocursor" && (kr(r), r.display.input.blur()), r.display.input.readOnlyChanged(a);
        }), i("screenReaderLabel", null, function(r, a) {
          a = a === "" ? null : a, r.display.input.screenReaderLabelChanged(a);
        }), i("disableInput", !1, function(r, a) {
          a || r.display.input.reset();
        }, !0), i("dragDrop", !0, Ev), i("allowDropFileTypes", null), i("cursorBlinkRate", 530), i("cursorScrollMargin", 0), i("cursorHeight", 1, Ci, !0), i("singleCursorHeightPerLine", !0, Ci, !0), i("workTime", 100), i("workDelay", 100), i("flattenSpans", !0, Ii, !0), i("addModeClass", !1, Ii, !0), i("pollInterval", 100), i("undoDepth", 200, function(r, a) {
          return r.doc.history.undoDepth = a;
        }), i("historyEventDelay", 1250), i("viewportMargin", 10, function(r) {
          return r.refresh();
        }, !0), i("maxHighlightLength", 1e4, Ii, !0), i("moveInputWithCursor", !0, function(r, a) {
          a || r.display.input.resetPosition();
        }), i("tabindex", null, function(r, a) {
          return r.display.input.getField().tabIndex = a || "";
        }), i("autofocus", null), i("direction", "ltr", function(r, a) {
          return r.doc.setDirection(a);
        }, !0), i("phrases", null);
      }
      function Ev(e, n, i) {
        var r = i && i != ri;
        if (!n != !r) {
          var a = e.display.dragFunctions, p = n ? ue : ze;
          p(e.display.scroller, "dragstart", a.start), p(e.display.scroller, "dragenter", a.enter), p(e.display.scroller, "dragover", a.over), p(e.display.scroller, "dragleave", a.leave), p(e.display.scroller, "drop", a.drop);
        }
      }
      function bv(e) {
        e.options.lineWrapping ? (X(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (U(e.display.wrapper, "CodeMirror-wrap"), ga(e)), Da(e), qt(e), bi(e), setTimeout(function() {
          return Xr(e);
        }, 100);
      }
      function nt(e, n) {
        var i = this;
        if (!(this instanceof nt))
          return new nt(e, n);
        this.options = n = n ? se(n) : {}, se(hf, n, !1);
        var r = n.value;
        typeof r == "string" ? r = new _t(r, n.mode, null, n.lineSeparator, n.direction) : n.mode && (r.modeOption = n.mode), this.doc = r;
        var a = new nt.inputStyles[n.inputStyle](this), p = this.display = new Bc(e, r, a, n);
        p.wrapper.CodeMirror = this, pf(this), n.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), gu(this), this.state = {
          keyMaps: [],
          overlays: [],
          modeGen: 0,
          overwrite: !1,
          delayingBlurEvent: !1,
          focused: !1,
          suppressEdits: !1,
          pasteIncoming: -1,
          cutIncoming: -1,
          selectingText: !1,
          draggingText: !1,
          highlight: new Pe(),
          keySeq: null,
          specialChars: null
        }, n.autofocus && !E && p.input.focus(), d && m < 11 && setTimeout(function() {
          return i.display.input.reset(!0);
        }, 20), Cv(this), tv(), Dr(this), this.curOp.forceUpdate = !0, wu(this, r), n.autofocus && !E || this.hasFocus() ? setTimeout(function() {
          i.hasFocus() && !i.state.focused && Ia(i);
        }, 20) : kr(this);
        for (var D in Ho)
          Ho.hasOwnProperty(D) && Ho[D](this, n[D], ri);
        Au(this), n.finishInit && n.finishInit(this);
        for (var L = 0; L < Za.length; ++L)
          Za[L](this);
        Mr(this), T && n.lineWrapping && getComputedStyle(p.lineDiv).textRendering == "optimizelegibility" && (p.lineDiv.style.textRendering = "auto");
      }
      nt.defaults = hf, nt.optionHandlers = Ho;
      function Cv(e) {
        var n = e.display;
        ue(n.scroller, "mousedown", wt(e, ff)), d && m < 11 ? ue(n.scroller, "dblclick", wt(e, function(N) {
          if (!Ge(e, N)) {
            var W = br(e, N);
            if (!(!W || Ja(e, N) || Vn(e.display, N))) {
              mt(N);
              var V = e.findWordAt(W);
              Po(e.doc, V.anchor, V.head);
            }
          }
        })) : ue(n.scroller, "dblclick", function(N) {
          return Ge(e, N) || mt(N);
        }), ue(n.scroller, "contextmenu", function(N) {
          return vf(e, N);
        }), ue(n.input.getField(), "contextmenu", function(N) {
          n.scroller.contains(N.target) || vf(e, N);
        });
        var i, r = { end: 0 };
        function a() {
          n.activeTouch && (i = setTimeout(function() {
            return n.activeTouch = null;
          }, 1e3), r = n.activeTouch, r.end = +new Date());
        }
        function p(N) {
          if (N.touches.length != 1)
            return !1;
          var W = N.touches[0];
          return W.radiusX <= 1 && W.radiusY <= 1;
        }
        function D(N, W) {
          if (W.left == null)
            return !0;
          var V = W.left - N.left, k = W.top - N.top;
          return V * V + k * k > 20 * 20;
        }
        ue(n.scroller, "touchstart", function(N) {
          if (!Ge(e, N) && !p(N) && !Ja(e, N)) {
            n.input.ensurePolled(), clearTimeout(i);
            var W = +new Date();
            n.activeTouch = {
              start: W,
              moved: !1,
              prev: W - r.end <= 300 ? r : null
            }, N.touches.length == 1 && (n.activeTouch.left = N.touches[0].pageX, n.activeTouch.top = N.touches[0].pageY);
          }
        }), ue(n.scroller, "touchmove", function() {
          n.activeTouch && (n.activeTouch.moved = !0);
        }), ue(n.scroller, "touchend", function(N) {
          var W = n.activeTouch;
          if (W && !Vn(n, N) && W.left != null && !W.moved && new Date() - W.start < 300) {
            var V = e.coordsChar(n.activeTouch, "page"), k;
            !W.prev || D(W, W.prev) ? k = new Qe(V, V) : !W.prev.prev || D(W, W.prev.prev) ? k = e.findWordAt(V) : k = new Qe(ee(V.line, 0), Oe(e.doc, ee(V.line + 1, 0))), e.setSelection(k.anchor, k.head), e.focus(), mt(N);
          }
          a();
        }), ue(n.scroller, "touchcancel", a), ue(n.scroller, "scroll", function() {
          n.scroller.clientHeight && (wi(e, n.scroller.scrollTop), Tr(e, n.scroller.scrollLeft, !0), $e(e, "scroll", e));
        }), ue(n.scroller, "mousewheel", function(N) {
          return Eu(e, N);
        }), ue(n.scroller, "DOMMouseScroll", function(N) {
          return Eu(e, N);
        }), ue(n.wrapper, "scroll", function() {
          return n.wrapper.scrollTop = n.wrapper.scrollLeft = 0;
        }), n.dragFunctions = {
          enter: function(N) {
            Ge(e, N) || _n(N);
          },
          over: function(N) {
            Ge(e, N) || (ev(e, N), _n(N));
          },
          start: function(N) {
            return _c(e, N);
          },
          drop: wt(e, qc),
          leave: function(N) {
            Ge(e, N) || Ju(e);
          }
        };
        var L = n.input.getField();
        ue(L, "keyup", function(N) {
          return sf.call(e, N);
        }), ue(L, "keydown", wt(e, lf)), ue(L, "keypress", wt(e, uf)), ue(L, "focus", function(N) {
          return Ia(e, N);
        }), ue(L, "blur", function(N) {
          return kr(e, N);
        });
      }
      var Za = [];
      nt.defineInitHook = function(e) {
        return Za.push(e);
      };
      function Vi(e, n, i, r) {
        var a = e.doc, p;
        i == null && (i = "add"), i == "smart" && (a.mode.indent ? p = yi(e, n).state : i = "prev");
        var D = e.options.tabSize, L = we(a, n), N = pe(L.text, null, D);
        L.stateAfter && (L.stateAfter = null);
        var W = L.text.match(/^\s*/)[0], V;
        if (!r && !/\S/.test(L.text))
          V = 0, i = "not";
        else if (i == "smart" && (V = a.mode.indent(p, L.text.slice(W.length), L.text), V == Ot || V > 150)) {
          if (!r)
            return;
          i = "prev";
        }
        i == "prev" ? n > a.first ? V = pe(we(a, n - 1).text, null, D) : V = 0 : i == "add" ? V = N + e.options.indentUnit : i == "subtract" ? V = N - e.options.indentUnit : typeof i == "number" && (V = N + i), V = Math.max(0, V);
        var k = "", Z = 0;
        if (e.options.indentWithTabs)
          for (var J = Math.floor(V / D); J; --J)
            Z += D, k += "	";
        if (Z < V && (k += Kt(V - Z)), k != W)
          return _r(a, k, ee(n, 0), ee(n, W.length), "+input"), L.stateAfter = null, !0;
        for (var te = 0; te < a.sel.ranges.length; te++) {
          var ie = a.sel.ranges[te];
          if (ie.head.line == n && ie.head.ch < W.length) {
            var de = ee(n, W.length);
            Va(a, te, new Qe(de, de));
            break;
          }
        }
      }
      var Mn = null;
      function Uo(e) {
        Mn = e;
      }
      function qa(e, n, i, r, a) {
        var p = e.doc;
        e.display.shift = !1, r || (r = p.sel);
        var D = +new Date() - 200, L = a == "paste" || e.state.pasteIncoming > D, N = gn(n), W = null;
        if (L && r.ranges.length > 1)
          if (Mn && Mn.text.join(`
`) == n) {
            if (r.ranges.length % Mn.text.length == 0) {
              W = [];
              for (var V = 0; V < Mn.text.length; V++)
                W.push(p.splitLines(Mn.text[V]));
            }
          } else
            N.length == r.ranges.length && e.options.pasteLinesPerSelection && (W = Ht(N, function(he) {
              return [he];
            }));
        for (var k = e.curOp.updateInput, Z = r.ranges.length - 1; Z >= 0; Z--) {
          var J = r.ranges[Z], te = J.from(), ie = J.to();
          J.empty() && (i && i > 0 ? te = ee(te.line, te.ch - i) : e.state.overwrite && !L ? ie = ee(ie.line, Math.min(we(p, ie.line).text.length, ie.ch + Ue(N).length)) : L && Mn && Mn.lineWise && Mn.text.join(`
`) == N.join(`
`) && (te = ie = ee(te.line, 0)));
          var de = {
            from: te,
            to: ie,
            text: W ? W[Z % W.length] : N,
            origin: a || (L ? "paste" : e.state.cutIncoming > D ? "cut" : "+input")
          };
          qr(e.doc, de), Tt(e, "inputRead", e, de);
        }
        n && !L && mf(e, n), Kr(e), e.curOp.updateInput < 2 && (e.curOp.updateInput = k), e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = -1;
      }
      function gf(e, n) {
        var i = e.clipboardData && e.clipboardData.getData("Text");
        if (i)
          return e.preventDefault(), !n.isReadOnly() && !n.options.disableInput && n.hasFocus() && an(n, function() {
            return qa(n, i, 0, null, "paste");
          }), !0;
      }
      function mf(e, n) {
        if (!(!e.options.electricChars || !e.options.smartIndent))
          for (var i = e.doc.sel, r = i.ranges.length - 1; r >= 0; r--) {
            var a = i.ranges[r];
            if (!(a.head.ch > 100 || r && i.ranges[r - 1].head.line == a.head.line)) {
              var p = e.getModeAt(a.head), D = !1;
              if (p.electricChars) {
                for (var L = 0; L < p.electricChars.length; L++)
                  if (n.indexOf(p.electricChars.charAt(L)) > -1) {
                    D = Vi(e, a.head.line, "smart");
                    break;
                  }
              } else
                p.electricInput && p.electricInput.test(we(e.doc, a.head.line).text.slice(0, a.head.ch)) && (D = Vi(e, a.head.line, "smart"));
              D && Tt(e, "electricInput", e, a.head.line);
            }
          }
      }
      function yf(e) {
        for (var n = [], i = [], r = 0; r < e.doc.sel.ranges.length; r++) {
          var a = e.doc.sel.ranges[r].head.line, p = { anchor: ee(a, 0), head: ee(a + 1, 0) };
          i.push(p), n.push(e.getRange(p.anchor, p.head));
        }
        return { text: n, ranges: i };
      }
      function _a(e, n, i, r) {
        e.setAttribute("autocorrect", i ? "on" : "off"), e.setAttribute("autocapitalize", r ? "on" : "off"), e.setAttribute("spellcheck", !!n);
      }
      function Af() {
        var e = P("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"), n = P("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
        return T ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), y && (e.style.border = "1px solid black"), n;
      }
      function Tv(e) {
        var n = e.optionHandlers, i = e.helpers = {};
        e.prototype = {
          constructor: e,
          focus: function() {
            ae(this).focus(), this.display.input.focus();
          },
          setOption: function(r, a) {
            var p = this.options, D = p[r];
            p[r] == a && r != "mode" || (p[r] = a, n.hasOwnProperty(r) && wt(this, n[r])(this, a, D), $e(this, "optionChange", this, r));
          },
          getOption: function(r) {
            return this.options[r];
          },
          getDoc: function() {
            return this.doc;
          },
          addKeyMap: function(r, a) {
            this.state.keyMaps[a ? "push" : "unshift"](Oo(r));
          },
          removeKeyMap: function(r) {
            for (var a = this.state.keyMaps, p = 0; p < a.length; ++p)
              if (a[p] == r || a[p].name == r)
                return a.splice(p, 1), !0;
          },
          addOverlay: Yt(function(r, a) {
            var p = r.token ? r : e.getMode(this.options, r);
            if (p.startState)
              throw new Error("Overlays may not be stateful.");
            Ar(
              this.state.overlays,
              {
                mode: p,
                modeSpec: r,
                opaque: a && a.opaque,
                priority: a && a.priority || 0
              },
              function(D) {
                return D.priority;
              }
            ), this.state.modeGen++, qt(this);
          }),
          removeOverlay: Yt(function(r) {
            for (var a = this.state.overlays, p = 0; p < a.length; ++p) {
              var D = a[p].modeSpec;
              if (D == r || typeof r == "string" && D.name == r) {
                a.splice(p, 1), this.state.modeGen++, qt(this);
                return;
              }
            }
          }),
          indentLine: Yt(function(r, a, p) {
            typeof a != "string" && typeof a != "number" && (a == null ? a = this.options.smartIndent ? "smart" : "prev" : a = a ? "add" : "subtract"), ne(this.doc, r) && Vi(this, r, a, p);
          }),
          indentSelection: Yt(function(r) {
            for (var a = this.doc.sel.ranges, p = -1, D = 0; D < a.length; D++) {
              var L = a[D];
              if (L.empty())
                L.head.line > p && (Vi(this, L.head.line, r, !0), p = L.head.line, D == this.doc.sel.primIndex && Kr(this));
              else {
                var N = L.from(), W = L.to(), V = Math.max(p, N.line);
                p = Math.min(this.lastLine(), W.line - (W.ch ? 0 : 1)) + 1;
                for (var k = V; k < p; ++k)
                  Vi(this, k, r);
                var Z = this.doc.sel.ranges;
                N.ch == 0 && a.length == Z.length && Z[D].from().ch > 0 && Va(this.doc, D, new Qe(N, Z[D].to()), Nt);
              }
            }
          }),
          getTokenAt: function(r, a) {
            return Ms(this, r, a);
          },
          getLineTokens: function(r, a) {
            return Ms(this, ee(r), a, !0);
          },
          getTokenTypeAt: function(r) {
            r = Oe(this.doc, r);
            var a = Ts(this, we(this.doc, r.line)), p = 0, D = (a.length - 1) / 2, L = r.ch, N;
            if (L == 0)
              N = a[2];
            else
              for (; ; ) {
                var W = p + D >> 1;
                if ((W ? a[W * 2 - 1] : 0) >= L)
                  D = W;
                else if (a[W * 2 + 1] < L)
                  p = W + 1;
                else {
                  N = a[W * 2 + 2];
                  break;
                }
              }
            var V = N ? N.indexOf("overlay ") : -1;
            return V < 0 ? N : V == 0 ? null : N.slice(0, V - 1);
          },
          getModeAt: function(r) {
            var a = this.doc.mode;
            return a.innerMode ? e.innerMode(a, this.getTokenAt(r).state).mode : a;
          },
          getHelper: function(r, a) {
            return this.getHelpers(r, a)[0];
          },
          getHelpers: function(r, a) {
            var p = [];
            if (!i.hasOwnProperty(a))
              return p;
            var D = i[a], L = this.getModeAt(r);
            if (typeof L[a] == "string")
              D[L[a]] && p.push(D[L[a]]);
            else if (L[a])
              for (var N = 0; N < L[a].length; N++) {
                var W = D[L[a][N]];
                W && p.push(W);
              }
            else
              L.helperType && D[L.helperType] ? p.push(D[L.helperType]) : D[L.name] && p.push(D[L.name]);
            for (var V = 0; V < D._global.length; V++) {
              var k = D._global[V];
              k.pred(L, this) && be(p, k.val) == -1 && p.push(k.val);
            }
            return p;
          },
          getStateAfter: function(r, a) {
            var p = this.doc;
            return r = Es(p, r == null ? p.first + p.size - 1 : r), yi(this, r + 1, a).state;
          },
          cursorCoords: function(r, a) {
            var p, D = this.doc.sel.primary();
            return r == null ? p = D.head : typeof r == "object" ? p = Oe(this.doc, r) : p = r ? D.from() : D.to(), wn(this, p, a || "page");
          },
          charCoords: function(r, a) {
            return xo(this, Oe(this.doc, r), a || "page");
          },
          coordsChar: function(r, a) {
            return r = ru(this, r, a || "page"), ba(this, r.left, r.top);
          },
          lineAtHeight: function(r, a) {
            return r = ru(this, { top: r, left: 0 }, a || "page").top, G(this.doc, r + this.display.viewOffset);
          },
          heightAtLine: function(r, a, p) {
            var D = !1, L;
            if (typeof r == "number") {
              var N = this.doc.first + this.doc.size - 1;
              r < this.doc.first ? r = this.doc.first : r > N && (r = N, D = !0), L = we(this.doc, r);
            } else
              L = r;
            return Ao(this, L, { top: 0, left: 0 }, a || "page", p || D).top + (D ? this.doc.height - Yn(L) : 0);
          },
          defaultTextHeight: function() {
            return Qr(this.display);
          },
          defaultCharWidth: function() {
            return Gr(this.display);
          },
          getViewport: function() {
            return { from: this.display.viewFrom, to: this.display.viewTo };
          },
          addWidget: function(r, a, p, D, L) {
            var N = this.display;
            r = wn(this, Oe(this.doc, r));
            var W = r.bottom, V = r.left;
            if (a.style.position = "absolute", a.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(a), N.sizer.appendChild(a), D == "over")
              W = r.top;
            else if (D == "above" || D == "near") {
              var k = Math.max(N.wrapper.clientHeight, this.doc.height), Z = Math.max(N.sizer.clientWidth, N.lineSpace.clientWidth);
              (D == "above" || r.bottom + a.offsetHeight > k) && r.top > a.offsetHeight ? W = r.top - a.offsetHeight : r.bottom + a.offsetHeight <= k && (W = r.bottom), V + a.offsetWidth > Z && (V = Z - a.offsetWidth);
            }
            a.style.top = W + "px", a.style.left = a.style.right = "", L == "right" ? (V = N.sizer.clientWidth - a.offsetWidth, a.style.right = "0px") : (L == "left" ? V = 0 : L == "middle" && (V = (N.sizer.clientWidth - a.offsetWidth) / 2), a.style.left = V + "px"), p && Ec(this, { left: V, top: W, right: V + a.offsetWidth, bottom: W + a.offsetHeight });
          },
          triggerOnKeyDown: Yt(lf),
          triggerOnKeyPress: Yt(uf),
          triggerOnKeyUp: sf,
          triggerOnMouseDown: Yt(ff),
          execCommand: function(r) {
            if (Wi.hasOwnProperty(r))
              return Wi[r].call(null, this);
          },
          triggerElectric: Yt(function(r) {
            mf(this, r);
          }),
          findPosH: function(r, a, p, D) {
            var L = 1;
            a < 0 && (L = -1, a = -a);
            for (var N = Oe(this.doc, r), W = 0; W < a && (N = el(this.doc, N, L, p, D), !N.hitSide); ++W)
              ;
            return N;
          },
          moveH: Yt(function(r, a) {
            var p = this;
            this.extendSelectionsBy(function(D) {
              return p.display.shift || p.doc.extend || D.empty() ? el(p.doc, D.head, r, a, p.options.rtlMoveVisually) : r < 0 ? D.from() : D.to();
            }, Et);
          }),
          deleteH: Yt(function(r, a) {
            var p = this.doc.sel, D = this.doc;
            p.somethingSelected() ? D.replaceSelection("", null, "+delete") : ni(this, function(L) {
              var N = el(D, L.head, r, a, !1);
              return r < 0 ? { from: N, to: L.head } : { from: L.head, to: N };
            });
          }),
          findPosV: function(r, a, p, D) {
            var L = 1, N = D;
            a < 0 && (L = -1, a = -a);
            for (var W = Oe(this.doc, r), V = 0; V < a; ++V) {
              var k = wn(this, W, "div");
              if (N == null ? N = k.left : k.left = N, W = xf(this, k, L, p), W.hitSide)
                break;
            }
            return W;
          },
          moveV: Yt(function(r, a) {
            var p = this, D = this.doc, L = [], N = !this.display.shift && !D.extend && D.sel.somethingSelected();
            if (D.extendSelectionsBy(function(V) {
              if (N)
                return r < 0 ? V.from() : V.to();
              var k = wn(p, V.head, "div");
              V.goalColumn != null && (k.left = V.goalColumn), L.push(k.left);
              var Z = xf(p, k, r, a);
              return a == "page" && V == D.sel.primary() && Na(p, xo(p, Z, "div").top - k.top), Z;
            }, Et), L.length)
              for (var W = 0; W < D.sel.ranges.length; W++)
                D.sel.ranges[W].goalColumn = L[W];
          }),
          findWordAt: function(r) {
            var a = this.doc, p = we(a, r.line).text, D = r.ch, L = r.ch;
            if (p) {
              var N = this.getHelper(r, "wordChars");
              (r.sticky == "before" || L == p.length) && D ? --D : ++L;
              for (var W = p.charAt(D), V = jt(W, N) ? function(k) {
                return jt(k, N);
              } : /\s/.test(W) ? function(k) {
                return /\s/.test(k);
              } : function(k) {
                return !/\s/.test(k) && !jt(k);
              }; D > 0 && V(p.charAt(D - 1)); )
                --D;
              for (; L < p.length && V(p.charAt(L)); )
                ++L;
            }
            return new Qe(ee(r.line, D), ee(r.line, L));
          },
          toggleOverwrite: function(r) {
            r != null && r == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? X(this.display.cursorDiv, "CodeMirror-overwrite") : U(this.display.cursorDiv, "CodeMirror-overwrite"), $e(this, "overwriteToggle", this, this.state.overwrite));
          },
          hasFocus: function() {
            return this.display.input.getField() == q(ve(this));
          },
          isReadOnly: function() {
            return !!(this.options.readOnly || this.doc.cantEdit);
          },
          scrollTo: Yt(function(r, a) {
            Ti(this, r, a);
          }),
          getScrollInfo: function() {
            var r = this.display.scroller;
            return {
              left: r.scrollLeft,
              top: r.scrollTop,
              height: r.scrollHeight - Fn(this) - this.display.barHeight,
              width: r.scrollWidth - Fn(this) - this.display.barWidth,
              clientHeight: Aa(this),
              clientWidth: Sr(this)
            };
          },
          scrollIntoView: Yt(function(r, a) {
            r == null ? (r = { from: this.doc.sel.primary().head, to: null }, a == null && (a = this.options.cursorScrollMargin)) : typeof r == "number" ? r = { from: ee(r, 0), to: null } : r.from == null && (r = { from: r, to: null }), r.to || (r.to = r.from), r.margin = a || 0, r.from.line != null ? bc(this, r) : cu(this, r.from, r.to, r.margin);
          }),
          setSize: Yt(function(r, a) {
            var p = this, D = function(N) {
              return typeof N == "number" || /^\d+$/.test(String(N)) ? N + "px" : N;
            };
            r != null && (this.display.wrapper.style.width = D(r)), a != null && (this.display.wrapper.style.height = D(a)), this.options.lineWrapping && eu(this);
            var L = this.display.viewFrom;
            this.doc.iter(L, this.display.viewTo, function(N) {
              if (N.widgets) {
                for (var W = 0; W < N.widgets.length; W++)
                  if (N.widgets[W].noHScroll) {
                    ir(p, L, "widget");
                    break;
                  }
              }
              ++L;
            }), this.curOp.forceUpdate = !0, $e(this, "refresh", this);
          }),
          operation: function(r) {
            return an(this, r);
          },
          startOperation: function() {
            return Dr(this);
          },
          endOperation: function() {
            return Mr(this);
          },
          refresh: Yt(function() {
            var r = this.display.cachedTextHeight;
            qt(this), this.curOp.forceUpdate = !0, bi(this), Ti(this, this.doc.scrollLeft, this.doc.scrollTop), Ba(this.display), (r == null || Math.abs(r - Qr(this.display)) > 0.5 || this.options.lineWrapping) && Da(this), $e(this, "refresh", this);
          }),
          swapDoc: Yt(function(r) {
            var a = this.doc;
            return a.cm = null, this.state.selectingText && this.state.selectingText(), wu(this, r), bi(this), this.display.input.reset(), Ti(this, r.scrollLeft, r.scrollTop), this.curOp.forceScroll = !0, Tt(this, "swapDoc", this, a), a;
          }),
          phrase: function(r) {
            var a = this.options.phrases;
            return a && Object.prototype.hasOwnProperty.call(a, r) ? a[r] : r;
          },
          getInputField: function() {
            return this.display.input.getField();
          },
          getWrapperElement: function() {
            return this.display.wrapper;
          },
          getScrollerElement: function() {
            return this.display.scroller;
          },
          getGutterElement: function() {
            return this.display.gutters;
          }
        }, $t(e), e.registerHelper = function(r, a, p) {
          i.hasOwnProperty(r) || (i[r] = e[r] = { _global: [] }), i[r][a] = p;
        }, e.registerGlobalHelper = function(r, a, p, D) {
          e.registerHelper(r, a, D), i[r]._global.push({ pred: p, val: D });
        };
      }
      function el(e, n, i, r, a) {
        var p = n, D = i, L = we(e, n.line), N = a && e.direction == "rtl" ? -i : i;
        function W() {
          var xe = n.line + N;
          return xe < e.first || xe >= e.first + e.size ? !1 : (n = new ee(xe, n.ch, n.sticky), L = we(e, xe));
        }
        function V(xe) {
          var ge;
          if (r == "codepoint") {
            var Te = L.text.charCodeAt(n.ch + (i > 0 ? 0 : -1));
            if (isNaN(Te))
              ge = null;
            else {
              var Re = i > 0 ? Te >= 55296 && Te < 56320 : Te >= 56320 && Te < 57343;
              ge = new ee(n.line, Math.max(0, Math.min(L.text.length, n.ch + i * (Re ? 2 : 1))), -i);
            }
          } else
            a ? ge = av(e.cm, L, n, i) : ge = Ga(L, n, i);
          if (ge == null)
            if (!xe && W())
              n = ka(a, e.cm, L, n.line, N);
            else
              return !1;
          else
            n = ge;
          return !0;
        }
        if (r == "char" || r == "codepoint")
          V();
        else if (r == "column")
          V(!0);
        else if (r == "word" || r == "group")
          for (var k = null, Z = r == "group", J = e.cm && e.cm.getHelper(n, "wordChars"), te = !0; !(i < 0 && !V(!te)); te = !1) {
            var ie = L.text.charAt(n.ch) || `
`, de = jt(ie, J) ? "w" : Z && ie == `
` ? "n" : !Z || /\s/.test(ie) ? null : "p";
            if (Z && !te && !de && (de = "s"), k && k != de) {
              i < 0 && (i = 1, V(), n.sticky = "after");
              break;
            }
            if (de && (k = de), i > 0 && !V(!te))
              break;
          }
        var he = Lo(e, n, p, D, !0);
        return Ve(p, he) && (he.hitSide = !0), he;
      }
      function xf(e, n, i, r) {
        var a = e.doc, p = n.left, D;
        if (r == "page") {
          var L = Math.min(e.display.wrapper.clientHeight, ae(e).innerHeight || a(e).documentElement.clientHeight), N = Math.max(L - 0.5 * Qr(e.display), 3);
          D = (i > 0 ? n.bottom : n.top) + i * N;
        } else
          r == "line" && (D = i > 0 ? n.bottom + 3 : n.top - 3);
        for (var W; W = ba(e, p, D), !!W.outside; ) {
          if (i < 0 ? D <= 0 : D >= a.height) {
            W.hitSide = !0;
            break;
          }
          D += i * 5;
        }
        return W;
      }
      var Xe = function(e) {
        this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new Pe(), this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null;
      };
      Xe.prototype.init = function(e) {
        var n = this, i = this, r = i.cm, a = i.div = e.lineDiv;
        a.contentEditable = !0, _a(a, r.options.spellcheck, r.options.autocorrect, r.options.autocapitalize);
        function p(L) {
          for (var N = L.target; N; N = N.parentNode) {
            if (N == a)
              return !0;
            if (/\bCodeMirror-(?:line)?widget\b/.test(N.className))
              break;
          }
          return !1;
        }
        ue(a, "paste", function(L) {
          !p(L) || Ge(r, L) || gf(L, r) || m <= 11 && setTimeout(wt(r, function() {
            return n.updateFromDOM();
          }), 20);
        }), ue(a, "compositionstart", function(L) {
          n.composing = { data: L.data, done: !1 };
        }), ue(a, "compositionupdate", function(L) {
          n.composing || (n.composing = { data: L.data, done: !1 });
        }), ue(a, "compositionend", function(L) {
          n.composing && (L.data != n.composing.data && n.readFromDOMSoon(), n.composing.done = !0);
        }), ue(a, "touchstart", function() {
          return i.forceCompositionEnd();
        }), ue(a, "input", function() {
          n.composing || n.readFromDOMSoon();
        });
        function D(L) {
          if (!(!p(L) || Ge(r, L))) {
            if (r.somethingSelected())
              Uo({ lineWise: !1, text: r.getSelections() }), L.type == "cut" && r.replaceSelection("", null, "cut");
            else if (r.options.lineWiseCopyCut) {
              var N = yf(r);
              Uo({ lineWise: !0, text: N.text }), L.type == "cut" && r.operation(function() {
                r.setSelections(N.ranges, 0, Nt), r.replaceSelection("", null, "cut");
              });
            } else
              return;
            if (L.clipboardData) {
              L.clipboardData.clearData();
              var W = Mn.text.join(`
`);
              if (L.clipboardData.setData("Text", W), L.clipboardData.getData("Text") == W) {
                L.preventDefault();
                return;
              }
            }
            var V = Af(), k = V.firstChild;
            _a(k), r.display.lineSpace.insertBefore(V, r.display.lineSpace.firstChild), k.value = Mn.text.join(`
`);
            var Z = q(ce(a));
            le(k), setTimeout(function() {
              r.display.lineSpace.removeChild(V), Z.focus(), Z == a && i.showPrimarySelection();
            }, 50);
          }
        }
        ue(a, "copy", D), ue(a, "cut", D);
      }, Xe.prototype.screenReaderLabelChanged = function(e) {
        e ? this.div.setAttribute("aria-label", e) : this.div.removeAttribute("aria-label");
      }, Xe.prototype.prepareSelection = function() {
        var e = uu(this.cm, !1);
        return e.focus = q(ce(this.div)) == this.div, e;
      }, Xe.prototype.showSelection = function(e, n) {
        !e || !this.cm.display.view.length || ((e.focus || n) && this.showPrimarySelection(), this.showMultipleSelections(e));
      }, Xe.prototype.getSelection = function() {
        return this.cm.display.wrapper.ownerDocument.getSelection();
      }, Xe.prototype.showPrimarySelection = function() {
        var e = this.getSelection(), n = this.cm, i = n.doc.sel.primary(), r = i.from(), a = i.to();
        if (n.display.viewTo == n.display.viewFrom || r.line >= n.display.viewTo || a.line < n.display.viewFrom) {
          e.removeAllRanges();
          return;
        }
        var p = zo(n, e.anchorNode, e.anchorOffset), D = zo(n, e.focusNode, e.focusOffset);
        if (!(p && !p.bad && D && !D.bad && ye(jr(p, D), r) == 0 && ye(Zt(p, D), a) == 0)) {
          var L = n.display.view, N = r.line >= n.display.viewFrom && Sf(n, r) || { node: L[0].measure.map[2], offset: 0 }, W = a.line < n.display.viewTo && Sf(n, a);
          if (!W) {
            var V = L[L.length - 1].measure, k = V.maps ? V.maps[V.maps.length - 1] : V.map;
            W = { node: k[k.length - 1], offset: k[k.length - 2] - k[k.length - 3] };
          }
          if (!N || !W) {
            e.removeAllRanges();
            return;
          }
          var Z = e.rangeCount && e.getRangeAt(0), J;
          try {
            J = Q(N.node, N.offset, W.offset, W.node);
          } catch {
          }
          J && (!t && n.state.focused ? (e.collapse(N.node, N.offset), J.collapsed || (e.removeAllRanges(), e.addRange(J))) : (e.removeAllRanges(), e.addRange(J)), Z && e.anchorNode == null ? e.addRange(Z) : t && this.startGracePeriod()), this.rememberSelection();
        }
      }, Xe.prototype.startGracePeriod = function() {
        var e = this;
        clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function() {
          e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function() {
            return e.cm.curOp.selectionChanged = !0;
          });
        }, 20);
      }, Xe.prototype.showMultipleSelections = function(e) {
        $(this.cm.display.cursorDiv, e.cursors), $(this.cm.display.selectionDiv, e.selection);
      }, Xe.prototype.rememberSelection = function() {
        var e = this.getSelection();
        this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset;
      }, Xe.prototype.selectionInEditor = function() {
        var e = this.getSelection();
        if (!e.rangeCount)
          return !1;
        var n = e.getRangeAt(0).commonAncestorContainer;
        return K(this.div, n);
      }, Xe.prototype.focus = function() {
        this.cm.options.readOnly != "nocursor" && ((!this.selectionInEditor() || q(ce(this.div)) != this.div) && this.showSelection(this.prepareSelection(), !0), this.div.focus());
      }, Xe.prototype.blur = function() {
        this.div.blur();
      }, Xe.prototype.getField = function() {
        return this.div;
      }, Xe.prototype.supportsTouch = function() {
        return !0;
      }, Xe.prototype.receivedFocus = function() {
        var e = this, n = this;
        this.selectionInEditor() ? setTimeout(function() {
          return e.pollSelection();
        }, 20) : an(this.cm, function() {
          return n.cm.curOp.selectionChanged = !0;
        });
        function i() {
          n.cm.state.focused && (n.pollSelection(), n.polling.set(n.cm.options.pollInterval, i));
        }
        this.polling.set(this.cm.options.pollInterval, i);
      }, Xe.prototype.selectionChanged = function() {
        var e = this.getSelection();
        return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset;
      }, Xe.prototype.pollSelection = function() {
        if (!(this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged())) {
          var e = this.getSelection(), n = this.cm;
          if (h && w && this.cm.display.gutterSpecs.length && wv(e.anchorNode)) {
            this.cm.triggerOnKeyDown({ type: "keydown", keyCode: 8, preventDefault: Math.abs }), this.blur(), this.focus();
            return;
          }
          if (!this.composing) {
            this.rememberSelection();
            var i = zo(n, e.anchorNode, e.anchorOffset), r = zo(n, e.focusNode, e.focusOffset);
            i && r && an(n, function() {
              Ut(n.doc, ar(i, r), Nt), (i.bad || r.bad) && (n.curOp.selectionChanged = !0);
            });
          }
        }
      }, Xe.prototype.pollContent = function() {
        this.readDOMTimeout != null && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
        var e = this.cm, n = e.display, i = e.doc.sel.primary(), r = i.from(), a = i.to();
        if (r.ch == 0 && r.line > e.firstLine() && (r = ee(r.line - 1, we(e.doc, r.line - 1).length)), a.ch == we(e.doc, a.line).text.length && a.line < e.lastLine() && (a = ee(a.line + 1, 0)), r.line < n.viewFrom || a.line > n.viewTo - 1)
          return !1;
        var p, D, L;
        r.line == n.viewFrom || (p = Cr(e, r.line)) == 0 ? (D = j(n.view[0].line), L = n.view[0].node) : (D = j(n.view[p].line), L = n.view[p - 1].node.nextSibling);
        var N = Cr(e, a.line), W, V;
        if (N == n.view.length - 1 ? (W = n.viewTo - 1, V = n.lineDiv.lastChild) : (W = j(n.view[N + 1].line) - 1, V = n.view[N + 1].node.previousSibling), !L)
          return !1;
        for (var k = e.doc.splitLines(Dv(e, L, V, D, W)), Z = jn(e.doc, ee(D, 0), ee(W, we(e.doc, W).text.length)); k.length > 1 && Z.length > 1; )
          if (Ue(k) == Ue(Z))
            k.pop(), Z.pop(), W--;
          else if (k[0] == Z[0])
            k.shift(), Z.shift(), D++;
          else
            break;
        for (var J = 0, te = 0, ie = k[0], de = Z[0], he = Math.min(ie.length, de.length); J < he && ie.charCodeAt(J) == de.charCodeAt(J); )
          ++J;
        for (var xe = Ue(k), ge = Ue(Z), Te = Math.min(
          xe.length - (k.length == 1 ? J : 0),
          ge.length - (Z.length == 1 ? J : 0)
        ); te < Te && xe.charCodeAt(xe.length - te - 1) == ge.charCodeAt(ge.length - te - 1); )
          ++te;
        if (k.length == 1 && Z.length == 1 && D == r.line)
          for (; J && J > r.ch && xe.charCodeAt(xe.length - te - 1) == ge.charCodeAt(ge.length - te - 1); )
            J--, te++;
        k[k.length - 1] = xe.slice(0, xe.length - te).replace(/^\u200b+/, ""), k[0] = k[0].slice(J).replace(/\u200b+$/, "");
        var Re = ee(D, J), Me = ee(W, Z.length ? Ue(Z).length - te : 0);
        if (k.length > 1 || k[0] || ye(Re, Me))
          return _r(e.doc, k, Re, Me, "+input"), !0;
      }, Xe.prototype.ensurePolled = function() {
        this.forceCompositionEnd();
      }, Xe.prototype.reset = function() {
        this.forceCompositionEnd();
      }, Xe.prototype.forceCompositionEnd = function() {
        !this.composing || (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus());
      }, Xe.prototype.readFromDOMSoon = function() {
        var e = this;
        this.readDOMTimeout == null && (this.readDOMTimeout = setTimeout(function() {
          if (e.readDOMTimeout = null, e.composing)
            if (e.composing.done)
              e.composing = null;
            else
              return;
          e.updateFromDOM();
        }, 80));
      }, Xe.prototype.updateFromDOM = function() {
        var e = this;
        (this.cm.isReadOnly() || !this.pollContent()) && an(this.cm, function() {
          return qt(e.cm);
        });
      }, Xe.prototype.setUneditable = function(e) {
        e.contentEditable = "false";
      }, Xe.prototype.onKeyPress = function(e) {
        e.charCode == 0 || this.composing || (e.preventDefault(), this.cm.isReadOnly() || wt(this.cm, qa)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0));
      }, Xe.prototype.readOnlyChanged = function(e) {
        this.div.contentEditable = String(e != "nocursor");
      }, Xe.prototype.onContextMenu = function() {
      }, Xe.prototype.resetPosition = function() {
      }, Xe.prototype.needsContentAttribute = !0;
      function Sf(e, n) {
        var i = xa(e, n.line);
        if (!i || i.hidden)
          return null;
        var r = we(e.doc, n.line), a = Xs(i, r, n.line), p = oe(r, e.doc.direction), D = "left";
        if (p) {
          var L = Fe(p, n.ch);
          D = L % 2 ? "right" : "left";
        }
        var N = qs(a.map, n.ch, D);
        return N.offset = N.collapse == "right" ? N.end : N.start, N;
      }
      function wv(e) {
        for (var n = e; n; n = n.parentNode)
          if (/CodeMirror-gutter-wrapper/.test(n.className))
            return !0;
        return !1;
      }
      function ii(e, n) {
        return n && (e.bad = !0), e;
      }
      function Dv(e, n, i, r, a) {
        var p = "", D = !1, L = e.doc.lineSeparator(), N = !1;
        function W(J) {
          return function(te) {
            return te.id == J;
          };
        }
        function V() {
          D && (p += L, N && (p += L), D = N = !1);
        }
        function k(J) {
          J && (V(), p += J);
        }
        function Z(J) {
          if (J.nodeType == 1) {
            var te = J.getAttribute("cm-text");
            if (te) {
              k(te);
              return;
            }
            var ie = J.getAttribute("cm-marker"), de;
            if (ie) {
              var he = e.findMarks(ee(r, 0), ee(a + 1, 0), W(+ie));
              he.length && (de = he[0].find(0)) && k(jn(e.doc, de.from, de.to).join(L));
              return;
            }
            if (J.getAttribute("contenteditable") == "false")
              return;
            var xe = /^(pre|div|p|li|table|br)$/i.test(J.nodeName);
            if (!/^br$/i.test(J.nodeName) && J.textContent.length == 0)
              return;
            xe && V();
            for (var ge = 0; ge < J.childNodes.length; ge++)
              Z(J.childNodes[ge]);
            /^(pre|p)$/i.test(J.nodeName) && (N = !0), xe && (D = !0);
          } else
            J.nodeType == 3 && k(J.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
        }
        for (; Z(n), n != i; )
          n = n.nextSibling, N = !1;
        return p;
      }
      function zo(e, n, i) {
        var r;
        if (n == e.display.lineDiv) {
          if (r = e.display.lineDiv.childNodes[i], !r)
            return ii(e.clipPos(ee(e.display.viewTo - 1)), !0);
          n = null, i = 0;
        } else
          for (r = n; ; r = r.parentNode) {
            if (!r || r == e.display.lineDiv)
              return null;
            if (r.parentNode && r.parentNode == e.display.lineDiv)
              break;
          }
        for (var a = 0; a < e.display.view.length; a++) {
          var p = e.display.view[a];
          if (p.node == r)
            return Mv(p, n, i);
        }
      }
      function Mv(e, n, i) {
        var r = e.text.firstChild, a = !1;
        if (!n || !K(r, n))
          return ii(ee(j(e.line), 0), !0);
        if (n == r && (a = !0, n = r.childNodes[i], i = 0, !n)) {
          var p = e.rest ? Ue(e.rest) : e.line;
          return ii(ee(j(p), p.text.length), a);
        }
        var D = n.nodeType == 3 ? n : null, L = n;
        for (!D && n.childNodes.length == 1 && n.firstChild.nodeType == 3 && (D = n.firstChild, i && (i = D.nodeValue.length)); L.parentNode != r; )
          L = L.parentNode;
        var N = e.measure, W = N.maps;
        function V(de, he, xe) {
          for (var ge = -1; ge < (W ? W.length : 0); ge++)
            for (var Te = ge < 0 ? N.map : W[ge], Re = 0; Re < Te.length; Re += 3) {
              var Me = Te[Re + 2];
              if (Me == de || Me == he) {
                var Be = j(ge < 0 ? e.line : e.rest[ge]), _e = Te[Re] + xe;
                return (xe < 0 || Me != de) && (_e = Te[Re + (xe ? 1 : 0)]), ee(Be, _e);
              }
            }
        }
        var k = V(D, L, i);
        if (k)
          return ii(k, a);
        for (var Z = L.nextSibling, J = D ? D.nodeValue.length - i : 0; Z; Z = Z.nextSibling) {
          if (k = V(Z, Z.firstChild, 0), k)
            return ii(ee(k.line, k.ch - J), a);
          J += Z.textContent.length;
        }
        for (var te = L.previousSibling, ie = i; te; te = te.previousSibling) {
          if (k = V(te, te.firstChild, -1), k)
            return ii(ee(k.line, k.ch + ie), a);
          ie += te.textContent.length;
        }
      }
      var ct = function(e) {
        this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new Pe(), this.hasSelection = !1, this.composing = null, this.resetting = !1;
      };
      ct.prototype.init = function(e) {
        var n = this, i = this, r = this.cm;
        this.createField(e);
        var a = this.textarea;
        e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild), y && (a.style.width = "0px"), ue(a, "input", function() {
          d && m >= 9 && n.hasSelection && (n.hasSelection = null), i.poll();
        }), ue(a, "paste", function(D) {
          Ge(r, D) || gf(D, r) || (r.state.pasteIncoming = +new Date(), i.fastPoll());
        });
        function p(D) {
          if (!Ge(r, D)) {
            if (r.somethingSelected())
              Uo({ lineWise: !1, text: r.getSelections() });
            else if (r.options.lineWiseCopyCut) {
              var L = yf(r);
              Uo({ lineWise: !0, text: L.text }), D.type == "cut" ? r.setSelections(L.ranges, null, Nt) : (i.prevInput = "", a.value = L.text.join(`
`), le(a));
            } else
              return;
            D.type == "cut" && (r.state.cutIncoming = +new Date());
          }
        }
        ue(a, "cut", p), ue(a, "copy", p), ue(e.scroller, "paste", function(D) {
          if (!(Vn(e, D) || Ge(r, D))) {
            if (!a.dispatchEvent) {
              r.state.pasteIncoming = +new Date(), i.focus();
              return;
            }
            var L = new Event("paste");
            L.clipboardData = D.clipboardData, a.dispatchEvent(L);
          }
        }), ue(e.lineSpace, "selectstart", function(D) {
          Vn(e, D) || mt(D);
        }), ue(a, "compositionstart", function() {
          var D = r.getCursor("from");
          i.composing && i.composing.range.clear(), i.composing = {
            start: D,
            range: r.markText(D, r.getCursor("to"), { className: "CodeMirror-composing" })
          };
        }), ue(a, "compositionend", function() {
          i.composing && (i.poll(), i.composing.range.clear(), i.composing = null);
        });
      }, ct.prototype.createField = function(e) {
        this.wrapper = Af(), this.textarea = this.wrapper.firstChild;
        var n = this.cm.options;
        _a(this.textarea, n.spellcheck, n.autocorrect, n.autocapitalize);
      }, ct.prototype.screenReaderLabelChanged = function(e) {
        e ? this.textarea.setAttribute("aria-label", e) : this.textarea.removeAttribute("aria-label");
      }, ct.prototype.prepareSelection = function() {
        var e = this.cm, n = e.display, i = e.doc, r = uu(e);
        if (e.options.moveInputWithCursor) {
          var a = wn(e, i.sel.primary().head, "div"), p = n.wrapper.getBoundingClientRect(), D = n.lineDiv.getBoundingClientRect();
          r.teTop = Math.max(0, Math.min(
            n.wrapper.clientHeight - 10,
            a.top + D.top - p.top
          )), r.teLeft = Math.max(0, Math.min(
            n.wrapper.clientWidth - 10,
            a.left + D.left - p.left
          ));
        }
        return r;
      }, ct.prototype.showSelection = function(e) {
        var n = this.cm, i = n.display;
        $(i.cursorDiv, e.cursors), $(i.selectionDiv, e.selection), e.teTop != null && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px");
      }, ct.prototype.reset = function(e) {
        if (!(this.contextMenuPending || this.composing && e)) {
          var n = this.cm;
          if (this.resetting = !0, n.somethingSelected()) {
            this.prevInput = "";
            var i = n.getSelection();
            this.textarea.value = i, n.state.focused && le(this.textarea), d && m >= 9 && (this.hasSelection = i);
          } else
            e || (this.prevInput = this.textarea.value = "", d && m >= 9 && (this.hasSelection = null));
          this.resetting = !1;
        }
      }, ct.prototype.getField = function() {
        return this.textarea;
      }, ct.prototype.supportsTouch = function() {
        return !1;
      }, ct.prototype.focus = function() {
        if (this.cm.options.readOnly != "nocursor" && (!E || q(ce(this.textarea)) != this.textarea))
          try {
            this.textarea.focus();
          } catch {
          }
      }, ct.prototype.blur = function() {
        this.textarea.blur();
      }, ct.prototype.resetPosition = function() {
        this.wrapper.style.top = this.wrapper.style.left = 0;
      }, ct.prototype.receivedFocus = function() {
        this.slowPoll();
      }, ct.prototype.slowPoll = function() {
        var e = this;
        this.pollingFast || this.polling.set(this.cm.options.pollInterval, function() {
          e.poll(), e.cm.state.focused && e.slowPoll();
        });
      }, ct.prototype.fastPoll = function() {
        var e = !1, n = this;
        n.pollingFast = !0;
        function i() {
          var r = n.poll();
          !r && !e ? (e = !0, n.polling.set(60, i)) : (n.pollingFast = !1, n.slowPoll());
        }
        n.polling.set(20, i);
      }, ct.prototype.poll = function() {
        var e = this, n = this.cm, i = this.textarea, r = this.prevInput;
        if (this.contextMenuPending || this.resetting || !n.state.focused || tr(i) && !r && !this.composing || n.isReadOnly() || n.options.disableInput || n.state.keySeq)
          return !1;
        var a = i.value;
        if (a == r && !n.somethingSelected())
          return !1;
        if (d && m >= 9 && this.hasSelection === a || C && /[\uf700-\uf7ff]/.test(a))
          return n.display.input.reset(), !1;
        if (n.doc.sel == n.display.selForContextMenu) {
          var p = a.charCodeAt(0);
          if (p == 8203 && !r && (r = "\u200B"), p == 8666)
            return this.reset(), this.cm.execCommand("undo");
        }
        for (var D = 0, L = Math.min(r.length, a.length); D < L && r.charCodeAt(D) == a.charCodeAt(D); )
          ++D;
        return an(n, function() {
          qa(
            n,
            a.slice(D),
            r.length - D,
            null,
            e.composing ? "*compose" : null
          ), a.length > 1e3 || a.indexOf(`
`) > -1 ? i.value = e.prevInput = "" : e.prevInput = a, e.composing && (e.composing.range.clear(), e.composing.range = n.markText(
            e.composing.start,
            n.getCursor("to"),
            { className: "CodeMirror-composing" }
          ));
        }), !0;
      }, ct.prototype.ensurePolled = function() {
        this.pollingFast && this.poll() && (this.pollingFast = !1);
      }, ct.prototype.onKeyPress = function() {
        d && m >= 9 && (this.hasSelection = null), this.fastPoll();
      }, ct.prototype.onContextMenu = function(e) {
        var n = this, i = n.cm, r = i.display, a = n.textarea;
        n.contextMenuPending && n.contextMenuPending();
        var p = br(i, e), D = r.scroller.scrollTop;
        if (!p || g)
          return;
        var L = i.options.resetSelectionOnContextMenu;
        L && i.doc.sel.contains(p) == -1 && wt(i, Ut)(i.doc, ar(p), Nt);
        var N = a.style.cssText, W = n.wrapper.style.cssText, V = n.wrapper.offsetParent.getBoundingClientRect();
        n.wrapper.style.cssText = "position: static", a.style.cssText = `position: absolute; width: 30px; height: 30px;
      top: ` + (e.clientY - V.top - 5) + "px; left: " + (e.clientX - V.left - 5) + `px;
      z-index: 1000; background: ` + (d ? "rgba(255, 255, 255, .05)" : "transparent") + `;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`;
        var k;
        T && (k = a.ownerDocument.defaultView.scrollY), r.input.focus(), T && a.ownerDocument.defaultView.scrollTo(null, k), r.input.reset(), i.somethingSelected() || (a.value = n.prevInput = " "), n.contextMenuPending = J, r.selForContextMenu = i.doc.sel, clearTimeout(r.detectingSelectAll);
        function Z() {
          if (a.selectionStart != null) {
            var ie = i.somethingSelected(), de = "\u200B" + (ie ? a.value : "");
            a.value = "\u21DA", a.value = de, n.prevInput = ie ? "" : "\u200B", a.selectionStart = 1, a.selectionEnd = de.length, r.selForContextMenu = i.doc.sel;
          }
        }
        function J() {
          if (n.contextMenuPending == J && (n.contextMenuPending = !1, n.wrapper.style.cssText = W, a.style.cssText = N, d && m < 9 && r.scrollbars.setScrollTop(r.scroller.scrollTop = D), a.selectionStart != null)) {
            (!d || d && m < 9) && Z();
            var ie = 0, de = function() {
              r.selForContextMenu == i.doc.sel && a.selectionStart == 0 && a.selectionEnd > 0 && n.prevInput == "\u200B" ? wt(i, zu)(i) : ie++ < 10 ? r.detectingSelectAll = setTimeout(de, 500) : (r.selForContextMenu = null, r.input.reset());
            };
            r.detectingSelectAll = setTimeout(de, 200);
          }
        }
        if (d && m >= 9 && Z(), z) {
          _n(e);
          var te = function() {
            ze(window, "mouseup", te), setTimeout(J, 20);
          };
          ue(window, "mouseup", te);
        } else
          setTimeout(J, 50);
      }, ct.prototype.readOnlyChanged = function(e) {
        e || this.reset(), this.textarea.disabled = e == "nocursor", this.textarea.readOnly = !!e;
      }, ct.prototype.setUneditable = function() {
      }, ct.prototype.needsContentAttribute = !1;
      function Rv(e, n) {
        if (n = n ? se(n) : {}, n.value = e.value, !n.tabindex && e.tabIndex && (n.tabindex = e.tabIndex), !n.placeholder && e.placeholder && (n.placeholder = e.placeholder), n.autofocus == null) {
          var i = q(ce(e));
          n.autofocus = i == e || e.getAttribute("autofocus") != null && i == document.body;
        }
        function r() {
          e.value = L.getValue();
        }
        var a;
        if (e.form && (ue(e.form, "submit", r), !n.leaveSubmitMethodAlone)) {
          var p = e.form;
          a = p.submit;
          try {
            var D = p.submit = function() {
              r(), p.submit = a, p.submit(), p.submit = D;
            };
          } catch {
          }
        }
        n.finishInit = function(N) {
          N.save = r, N.getTextArea = function() {
            return e;
          }, N.toTextArea = function() {
            N.toTextArea = isNaN, r(), e.parentNode.removeChild(N.getWrapperElement()), e.style.display = "", e.form && (ze(e.form, "submit", r), !n.leaveSubmitMethodAlone && typeof e.form.submit == "function" && (e.form.submit = a));
          };
        }, e.style.display = "none";
        var L = nt(
          function(N) {
            return e.parentNode.insertBefore(N, e.nextSibling);
          },
          n
        );
        return L;
      }
      function Pv(e) {
        e.off = ze, e.on = ue, e.wheelEventPixels = Hc, e.Doc = _t, e.splitLines = gn, e.countColumn = pe, e.findColumn = Bt, e.isWordChar = An, e.Pass = Ot, e.signal = $e, e.Line = $r, e.changeEnd = lr, e.scrollbarModel = hu, e.Pos = ee, e.cmpPos = ye, e.modes = Br, e.mimeModes = bn, e.resolveMode = Hr, e.getMode = Ur, e.modeExtensions = nr, e.extendMode = zr, e.copyState = Ln, e.startState = Wr, e.innerMode = gi, e.commands = Wi, e.keyMap = Gn, e.keyName = tf, e.isModifierKey = _u, e.lookupKey = ti, e.normalizeKeyMap = ov, e.StringStream = lt, e.SharedTextMarker = Hi, e.TextMarker = ur, e.LineWidget = Bi, e.e_preventDefault = mt, e.e_stopPropagation = qn, e.e_stop = _n, e.addClass = X, e.contains = K, e.rmClass = U, e.keyNames = fr;
      }
      Sv(nt), Tv(nt);
      var Iv = "iter insert remove copy getEditor constructor".split(" ");
      for (var Wo in _t.prototype)
        _t.prototype.hasOwnProperty(Wo) && be(Iv, Wo) < 0 && (nt.prototype[Wo] = function(e) {
          return function() {
            return e.apply(this.doc, arguments);
          };
        }(_t.prototype[Wo]));
      return $t(_t), nt.inputStyles = { textarea: ct, contenteditable: Xe }, nt.defineMode = function(e) {
        !nt.defaults.mode && e != "null" && (nt.defaults.mode = e), Cn.apply(this, arguments);
      }, nt.defineMIME = xr, nt.defineMode("null", function() {
        return { token: function(e) {
          return e.skipToEnd();
        } };
      }), nt.defineMIME("text/plain", "null"), nt.defineExtension = function(e, n) {
        nt.prototype[e] = n;
      }, nt.defineDocExtension = function(e, n) {
        _t.prototype[e] = n;
      }, nt.fromTextArea = Rv, Pv(nt), nt.version = "5.65.16", nt;
    });
  }(Hl)), Hl.exports;
}
var qh = Pd();
(function(c, A) {
  (function(l) {
    l(Pd());
  })(function(l) {
    l.defineMode("javascript", function(o, t) {
      var s = o.indentUnit, u = t.statementIndent, f = t.jsonld, d = t.json || f, m = t.trackScope !== !1, T = t.typescript, S = t.wordCharacters || /[\w$\xa1-\uffff]/, w = function() {
        function j(Ct) {
          return { type: Ct, style: "keyword" };
        }
        var G = j("keyword a"), ne = j("keyword b"), fe = j("keyword c"), ee = j("keyword d"), ye = j("operator"), Ve = { type: "atom", style: "atom" };
        return {
          if: j("if"),
          while: G,
          with: G,
          else: ne,
          do: ne,
          try: ne,
          finally: ne,
          return: ee,
          break: ee,
          continue: ee,
          new: j("new"),
          delete: fe,
          void: fe,
          throw: fe,
          debugger: j("debugger"),
          var: j("var"),
          const: j("var"),
          let: j("var"),
          function: j("function"),
          catch: j("catch"),
          for: j("for"),
          switch: j("switch"),
          case: j("case"),
          default: j("default"),
          in: ye,
          typeof: ye,
          instanceof: ye,
          true: Ve,
          false: Ve,
          null: Ve,
          undefined: Ve,
          NaN: Ve,
          Infinity: Ve,
          this: j("this"),
          class: j("class"),
          super: j("atom"),
          yield: fe,
          export: j("export"),
          import: j("import"),
          extends: fe,
          await: fe
        };
      }(), b = /[+\-*&%=<>!?|~^@]/, g = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
      function x(j) {
        for (var G = !1, ne, fe = !1; (ne = j.next()) != null; ) {
          if (!G) {
            if (ne == "/" && !fe)
              return;
            ne == "[" ? fe = !0 : fe && ne == "]" && (fe = !1);
          }
          G = !G && ne == "\\";
        }
      }
      var v, M;
      function y(j, G, ne) {
        return v = j, M = ne, G;
      }
      function h(j, G) {
        var ne = j.next();
        if (ne == '"' || ne == "'")
          return G.tokenize = E(ne), G.tokenize(j, G);
        if (ne == "." && j.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))
          return y("number", "number");
        if (ne == "." && j.match(".."))
          return y("spread", "meta");
        if (/[\[\]{}\(\),;\:\.]/.test(ne))
          return y(ne);
        if (ne == "=" && j.eat(">"))
          return y("=>", "operator");
        if (ne == "0" && j.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))
          return y("number", "number");
        if (/\d/.test(ne))
          return j.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), y("number", "number");
        if (ne == "/")
          return j.eat("*") ? (G.tokenize = C, C(j, G)) : j.eat("/") ? (j.skipToEnd(), y("comment", "comment")) : un(j, G, 1) ? (x(j), j.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/), y("regexp", "string-2")) : (j.eat("="), y("operator", "operator", j.current()));
        if (ne == "`")
          return G.tokenize = R, R(j, G);
        if (ne == "#" && j.peek() == "!")
          return j.skipToEnd(), y("meta", "meta");
        if (ne == "#" && j.eatWhile(S))
          return y("variable", "property");
        if (ne == "<" && j.match("!--") || ne == "-" && j.match("->") && !/\S/.test(j.string.slice(0, j.start)))
          return j.skipToEnd(), y("comment", "comment");
        if (b.test(ne))
          return (ne != ">" || !G.lexical || G.lexical.type != ">") && (j.eat("=") ? (ne == "!" || ne == "=") && j.eat("=") : /[<>*+\-|&?]/.test(ne) && (j.eat(ne), ne == ">" && j.eat(ne))), ne == "?" && j.eat(".") ? y(".") : y("operator", "operator", j.current());
        if (S.test(ne)) {
          j.eatWhile(S);
          var fe = j.current();
          if (G.lastType != ".") {
            if (w.propertyIsEnumerable(fe)) {
              var ee = w[fe];
              return y(ee.type, ee.style, fe);
            }
            if (fe == "async" && j.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1))
              return y("async", "keyword", fe);
          }
          return y("variable", "variable", fe);
        }
      }
      function E(j) {
        return function(G, ne) {
          var fe = !1, ee;
          if (f && G.peek() == "@" && G.match(g))
            return ne.tokenize = h, y("jsonld-keyword", "meta");
          for (; (ee = G.next()) != null && !(ee == j && !fe); )
            fe = !fe && ee == "\\";
          return fe || (ne.tokenize = h), y("string", "string");
        };
      }
      function C(j, G) {
        for (var ne = !1, fe; fe = j.next(); ) {
          if (fe == "/" && ne) {
            G.tokenize = h;
            break;
          }
          ne = fe == "*";
        }
        return y("comment", "comment");
      }
      function R(j, G) {
        for (var ne = !1, fe; (fe = j.next()) != null; ) {
          if (!ne && (fe == "`" || fe == "$" && j.eat("{"))) {
            G.tokenize = h;
            break;
          }
          ne = !ne && fe == "\\";
        }
        return y("quasi", "string-2", j.current());
      }
      var F = "([{}])";
      function B(j, G) {
        G.fatArrowAt && (G.fatArrowAt = null);
        var ne = j.string.indexOf("=>", j.start);
        if (!(ne < 0)) {
          if (T) {
            var fe = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(j.string.slice(j.start, ne));
            fe && (ne = fe.index);
          }
          for (var ee = 0, ye = !1, Ve = ne - 1; Ve >= 0; --Ve) {
            var Ct = j.string.charAt(Ve), Zt = F.indexOf(Ct);
            if (Zt >= 0 && Zt < 3) {
              if (!ee) {
                ++Ve;
                break;
              }
              if (--ee == 0) {
                Ct == "(" && (ye = !0);
                break;
              }
            } else if (Zt >= 3 && Zt < 6)
              ++ee;
            else if (S.test(Ct))
              ye = !0;
            else if (/["'\/`]/.test(Ct))
              for (; ; --Ve) {
                if (Ve == 0)
                  return;
                var jr = j.string.charAt(Ve - 1);
                if (jr == Ct && j.string.charAt(Ve - 2) != "\\") {
                  Ve--;
                  break;
                }
              }
            else if (ye && !ee) {
              ++Ve;
              break;
            }
          }
          ye && !ee && (G.fatArrowAt = Ve);
        }
      }
      var O = {
        atom: !0,
        number: !0,
        variable: !0,
        string: !0,
        regexp: !0,
        this: !0,
        import: !0,
        "jsonld-keyword": !0
      };
      function z(j, G, ne, fe, ee, ye) {
        this.indented = j, this.column = G, this.type = ne, this.prev = ee, this.info = ye, fe != null && (this.align = fe);
      }
      function I(j, G) {
        if (!m)
          return !1;
        for (var ne = j.localVars; ne; ne = ne.next)
          if (ne.name == G)
            return !0;
        for (var fe = j.context; fe; fe = fe.prev)
          for (var ne = fe.vars; ne; ne = ne.next)
            if (ne.name == G)
              return !0;
      }
      function U(j, G, ne, fe, ee) {
        var ye = j.cc;
        for (H.state = j, H.stream = ee, H.marked = null, H.cc = ye, H.style = G, j.lexical.hasOwnProperty("align") || (j.lexical.align = !0); ; ) {
          var Ve = ye.length ? ye.pop() : d ? be : pe;
          if (Ve(ne, fe)) {
            for (; ye.length && ye[ye.length - 1].lex; )
              ye.pop()();
            return H.marked ? H.marked : ne == "variable" && I(j, fe) ? "variable-2" : G;
          }
        }
      }
      var H = { state: null, column: null, marked: null, cc: null };
      function $() {
        for (var j = arguments.length - 1; j >= 0; j--)
          H.cc.push(arguments[j]);
      }
      function P() {
        return $.apply(null, arguments), !0;
      }
      function Y(j, G) {
        for (var ne = G; ne; ne = ne.next)
          if (ne.name == j)
            return !0;
        return !1;
      }
      function Q(j) {
        var G = H.state;
        if (H.marked = "def", !!m) {
          if (G.context) {
            if (G.lexical.info == "var" && G.context && G.context.block) {
              var ne = K(j, G.context);
              if (ne != null) {
                G.context = ne;
                return;
              }
            } else if (!Y(j, G.localVars)) {
              G.localVars = new _(j, G.localVars);
              return;
            }
          }
          t.globalVars && !Y(j, G.globalVars) && (G.globalVars = new _(j, G.globalVars));
        }
      }
      function K(j, G) {
        if (G)
          if (G.block) {
            var ne = K(j, G.prev);
            return ne ? ne == G.prev ? G : new X(ne, G.vars, !0) : null;
          } else
            return Y(j, G.vars) ? G : new X(G.prev, new _(j, G.vars), !1);
        else
          return null;
      }
      function q(j) {
        return j == "public" || j == "private" || j == "protected" || j == "abstract" || j == "readonly";
      }
      function X(j, G, ne) {
        this.prev = j, this.vars = G, this.block = ne;
      }
      function _(j, G) {
        this.name = j, this.next = G;
      }
      var le = new _("this", new _("arguments", null));
      function Se() {
        H.state.context = new X(H.state.context, H.state.localVars, !1), H.state.localVars = le;
      }
      function ve() {
        H.state.context = new X(H.state.context, H.state.localVars, !0), H.state.localVars = null;
      }
      Se.lex = ve.lex = !0;
      function ce() {
        H.state.localVars = H.state.context.vars, H.state.context = H.state.context.prev;
      }
      ce.lex = !0;
      function ae(j, G) {
        var ne = function() {
          var fe = H.state, ee = fe.indented;
          if (fe.lexical.type == "stat")
            ee = fe.lexical.indented;
          else
            for (var ye = fe.lexical; ye && ye.type == ")" && ye.align; ye = ye.prev)
              ee = ye.indented;
          fe.lexical = new z(ee, H.stream.column(), j, null, fe.lexical, G);
        };
        return ne.lex = !0, ne;
      }
      function re() {
        var j = H.state;
        j.lexical.prev && (j.lexical.type == ")" && (j.indented = j.lexical.indented), j.lexical = j.lexical.prev);
      }
      re.lex = !0;
      function se(j) {
        function G(ne) {
          return ne == j ? P() : j == ";" || ne == "}" || ne == ")" || ne == "]" ? $() : P(G);
        }
        return G;
      }
      function pe(j, G) {
        return j == "var" ? P(ae("vardef", G), qn, se(";"), re) : j == "keyword a" ? P(ae("form"), Ot, pe, re) : j == "keyword b" ? P(ae("form"), pe, re) : j == "keyword d" ? H.stream.match(/^\s*$/, !1) ? P() : P(ae("stat"), ot, se(";"), re) : j == "debugger" ? P(se(";")) : j == "{" ? P(ae("}"), ve, We, re, ce) : j == ";" ? P() : j == "if" ? (H.state.lexical.info == "else" && H.state.cc[H.state.cc.length - 1] == re && H.state.cc.pop()(), P(ae("form"), Ot, pe, re, Or)) : j == "function" ? P(gn) : j == "for" ? P(ae("form"), ve, so, pe, ce, re) : j == "class" || T && G == "interface" ? (H.marked = "keyword", P(ae("form", j == "class" ? j : G), Br, re)) : j == "variable" ? T && G == "declare" ? (H.marked = "keyword", P(pe)) : T && (G == "module" || G == "enum" || G == "type") && H.stream.match(/^\s*\w/, !1) ? (H.marked = "keyword", G == "enum" ? P(we) : G == "type" ? P(uo, se("operator"), oe, se(";")) : P(ae("form"), Jt, se("{"), ae("}"), We, re, re)) : T && G == "namespace" ? (H.marked = "keyword", P(ae("form"), be, pe, re)) : T && G == "abstract" ? (H.marked = "keyword", P(pe)) : P(ae("stat"), In) : j == "switch" ? P(
          ae("form"),
          Ot,
          se("{"),
          ae("}", "switch"),
          ve,
          We,
          re,
          re,
          ce
        ) : j == "case" ? P(be, se(":")) : j == "default" ? P(se(":")) : j == "catch" ? P(ae("form"), Se, Pe, pe, re, ce) : j == "export" ? P(ae("stat"), Hr, re) : j == "import" ? P(ae("stat"), nr, re) : j == "async" ? P(pe) : G == "@" ? P(be, pe) : $(ae("stat"), be, se(";"), re);
      }
      function Pe(j) {
        if (j == "(")
          return P(En, se(")"));
      }
      function be(j, G) {
        return Nt(j, G, !1);
      }
      function je(j, G) {
        return Nt(j, G, !0);
      }
      function Ot(j) {
        return j != "(" ? $() : P(ae(")"), ot, se(")"), re);
      }
      function Nt(j, G, ne) {
        if (H.state.fatArrowAt == H.stream.start) {
          var fe = ne ? Ht : Ue;
          if (j == "(")
            return P(Se, ae(")"), Ke(En, ")"), re, se("=>"), fe, ce);
          if (j == "variable")
            return $(Se, Jt, se("=>"), fe, ce);
        }
        var ee = ne ? Bt : Et;
        return O.hasOwnProperty(j) ? P(ee) : j == "function" ? P(gn, ee) : j == "class" || T && G == "interface" ? (H.marked = "keyword", P(ae("form"), ua, re)) : j == "keyword c" || j == "async" ? P(ne ? je : be) : j == "(" ? P(ae(")"), ot, se(")"), re, ee) : j == "operator" || j == "spread" ? P(ne ? je : be) : j == "[" ? P(ae("]"), lt, re, ee) : j == "{" ? Xt(jt, "}", null, ee) : j == "quasi" ? $(dt, ee) : j == "new" ? P(Ar(ne)) : P();
      }
      function ot(j) {
        return j.match(/[;\}\)\],]/) ? $() : $(be);
      }
      function Et(j, G) {
        return j == "," ? P(ot) : Bt(j, G, !1);
      }
      function Bt(j, G, ne) {
        var fe = ne == !1 ? Et : Bt, ee = ne == !1 ? be : je;
        if (j == "=>")
          return P(Se, ne ? Ht : Ue, ce);
        if (j == "operator")
          return /\+\+|--/.test(G) || T && G == "!" ? P(fe) : T && G == "<" && H.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1) ? P(ae(">"), Ke(oe, ">"), re, fe) : G == "?" ? P(be, se(":"), ee) : P(ee);
        if (j == "quasi")
          return $(dt, fe);
        if (j != ";") {
          if (j == "(")
            return Xt(je, ")", "call", fe);
          if (j == ".")
            return P(An, fe);
          if (j == "[")
            return P(ae("]"), ot, se("]"), re, fe);
          if (T && G == "as")
            return H.marked = "keyword", P(oe, fe);
          if (j == "regexp")
            return H.state.lastType = H.marked = "operator", H.stream.backUp(H.stream.pos - H.stream.start - 1), P(ee);
        }
      }
      function dt(j, G) {
        return j != "quasi" ? $() : G.slice(G.length - 2) != "${" ? P(dt) : P(ot, Kt);
      }
      function Kt(j) {
        if (j == "}")
          return H.marked = "string-2", H.state.tokenize = R, P(dt);
      }
      function Ue(j) {
        return B(H.stream, H.state), $(j == "{" ? pe : be);
      }
      function Ht(j) {
        return B(H.stream, H.state), $(j == "{" ? pe : je);
      }
      function Ar(j) {
        return function(G) {
          return G == "." ? P(j ? hn : yn) : G == "variable" && T ? P(Ze, j ? Bt : Et) : $(j ? je : be);
        };
      }
      function yn(j, G) {
        if (G == "target")
          return H.marked = "keyword", P(Et);
      }
      function hn(j, G) {
        if (G == "target")
          return H.marked = "keyword", P(Bt);
      }
      function In(j) {
        return j == ":" ? P(re, pe) : $(Et, se(";"), re);
      }
      function An(j) {
        if (j == "variable")
          return H.marked = "property", P();
      }
      function jt(j, G) {
        if (j == "async")
          return H.marked = "property", P(jt);
        if (j == "variable" || H.style == "keyword") {
          if (H.marked = "property", G == "get" || G == "set")
            return P(xn);
          var ne;
          return T && H.state.fatArrowAt == H.stream.start && (ne = H.stream.match(/^\s*:\s*/, !1)) && (H.state.fatArrowAt = H.stream.pos + ne[0].length), P(bt);
        } else {
          if (j == "number" || j == "string")
            return H.marked = f ? "property" : H.style + " property", P(bt);
          if (j == "jsonld-keyword")
            return P(bt);
          if (T && q(G))
            return H.marked = "keyword", P(jt);
          if (j == "[")
            return P(be, Ce, se("]"), bt);
          if (j == "spread")
            return P(je, bt);
          if (G == "*")
            return H.marked = "keyword", P(jt);
          if (j == ":")
            return $(bt);
        }
      }
      function xn(j) {
        return j != "variable" ? $(bt) : (H.marked = "property", P(gn));
      }
      function bt(j) {
        if (j == ":")
          return P(je);
        if (j == "(")
          return $(gn);
      }
      function Ke(j, G, ne) {
        function fe(ee, ye) {
          if (ne ? ne.indexOf(ee) > -1 : ee == ",") {
            var Ve = H.state.lexical;
            return Ve.info == "call" && (Ve.pos = (Ve.pos || 0) + 1), P(function(Ct, Zt) {
              return Ct == G || Zt == G ? $() : $(j);
            }, fe);
          }
          return ee == G || ye == G ? P() : ne && ne.indexOf(";") > -1 ? $(j) : P(se(G));
        }
        return function(ee, ye) {
          return ee == G || ye == G ? P() : $(j, fe);
        };
      }
      function Xt(j, G, ne) {
        for (var fe = 3; fe < arguments.length; fe++)
          H.cc.push(arguments[fe]);
        return P(ae(G, ne), Ke(j, G), re);
      }
      function We(j) {
        return j == "}" ? P() : $(pe, We);
      }
      function Ce(j, G) {
        if (T) {
          if (j == ":")
            return P(oe);
          if (G == "?")
            return P(Ce);
        }
      }
      function me(j, G) {
        if (T && (j == ":" || G == "in"))
          return P(oe);
      }
      function Fe(j) {
        if (T && j == ":")
          return H.stream.match(/^\s*\w+\s+is\b/, !1) ? P(be, Ee, oe) : P(oe);
      }
      function Ee(j, G) {
        if (G == "is")
          return H.marked = "keyword", P();
      }
      function oe(j, G) {
        if (G == "keyof" || G == "typeof" || G == "infer" || G == "readonly")
          return H.marked = "keyword", P(G == "typeof" ? je : oe);
        if (j == "variable" || G == "void")
          return H.marked = "type", P(at);
        if (G == "|" || G == "&")
          return P(oe);
        if (j == "string" || j == "number" || j == "atom")
          return P(at);
        if (j == "[")
          return P(ae("]"), Ke(oe, "]", ","), re, at);
        if (j == "{")
          return P(ae("}"), ue, re, at);
        if (j == "(")
          return P(Ke(Ge, ")"), De, at);
        if (j == "<")
          return P(Ke(oe, ">"), oe);
        if (j == "quasi")
          return $(ze, at);
      }
      function De(j) {
        if (j == "=>")
          return P(oe);
      }
      function ue(j) {
        return j.match(/[\}\)\]]/) ? P() : j == "," || j == ";" ? P(ue) : $(Ie, ue);
      }
      function Ie(j, G) {
        if (j == "variable" || H.style == "keyword")
          return H.marked = "property", P(Ie);
        if (G == "?" || j == "number" || j == "string")
          return P(Ie);
        if (j == ":")
          return P(oe);
        if (j == "[")
          return P(se("variable"), me, se("]"), Ie);
        if (j == "(")
          return $(tr, Ie);
        if (!j.match(/[;\}\)\],]/))
          return P();
      }
      function ze(j, G) {
        return j != "quasi" ? $() : G.slice(G.length - 2) != "${" ? P(ze) : P(oe, $e);
      }
      function $e(j) {
        if (j == "}")
          return H.marked = "string-2", H.state.tokenize = R, P(ze);
      }
      function Ge(j, G) {
        return j == "variable" && H.stream.match(/^\s*[?:]/, !1) || G == "?" ? P(Ge) : j == ":" ? P(oe) : j == "spread" ? P(Ge) : $(oe);
      }
      function at(j, G) {
        if (G == "<")
          return P(ae(">"), Ke(oe, ">"), re, at);
        if (G == "|" || j == "." || G == "&")
          return P(oe);
        if (j == "[")
          return P(oe, se("]"), at);
        if (G == "extends" || G == "implements")
          return H.marked = "keyword", P(oe);
        if (G == "?")
          return P(oe, se(":"), oe);
      }
      function Ze(j, G) {
        if (G == "<")
          return P(ae(">"), Ke(oe, ">"), re, at);
      }
      function $t() {
        return $(oe, mt);
      }
      function mt(j, G) {
        if (G == "=")
          return P(oe);
      }
      function qn(j, G) {
        return G == "enum" ? (H.marked = "keyword", P(we)) : $(Jt, Ce, Sn, sa);
      }
      function Jt(j, G) {
        if (T && q(G))
          return H.marked = "keyword", P(Jt);
        if (j == "variable")
          return Q(G), P();
        if (j == "spread")
          return P(Jt);
        if (j == "[")
          return Xt(pi, "]");
        if (j == "{")
          return Xt(_n, "}");
      }
      function _n(j, G) {
        return j == "variable" && !H.stream.match(/^\s*:/, !1) ? (Q(G), P(Sn)) : (j == "variable" && (H.marked = "property"), j == "spread" ? P(Jt) : j == "}" ? $() : j == "[" ? P(be, se("]"), se(":"), _n) : P(se(":"), Jt, Sn));
      }
      function pi() {
        return $(Jt, Sn);
      }
      function Sn(j, G) {
        if (G == "=")
          return P(je);
      }
      function sa(j) {
        if (j == ",")
          return P(qn);
      }
      function Or(j, G) {
        if (j == "keyword b" && G == "else")
          return P(ae("form", "else"), pe, re);
      }
      function so(j, G) {
        if (G == "await")
          return P(so);
        if (j == "(")
          return P(ae(")"), hi, re);
      }
      function hi(j) {
        return j == "var" ? P(qn, er) : j == "variable" ? P(er) : $(er);
      }
      function er(j, G) {
        return j == ")" ? P() : j == ";" ? P(er) : G == "in" || G == "of" ? (H.marked = "keyword", P(be, er)) : $(be, er);
      }
      function gn(j, G) {
        if (G == "*")
          return H.marked = "keyword", P(gn);
        if (j == "variable")
          return Q(G), P(gn);
        if (j == "(")
          return P(Se, ae(")"), Ke(En, ")"), re, Fe, pe, ce);
        if (T && G == "<")
          return P(ae(">"), Ke($t, ">"), re, gn);
      }
      function tr(j, G) {
        if (G == "*")
          return H.marked = "keyword", P(tr);
        if (j == "variable")
          return Q(G), P(tr);
        if (j == "(")
          return P(Se, ae(")"), Ke(En, ")"), re, Fe, ce);
        if (T && G == "<")
          return P(ae(">"), Ke($t, ">"), re, tr);
      }
      function uo(j, G) {
        if (j == "keyword" || j == "variable")
          return H.marked = "type", P(uo);
        if (G == "<")
          return P(ae(">"), Ke($t, ">"), re);
      }
      function En(j, G) {
        return G == "@" && P(be, En), j == "spread" ? P(En) : T && q(G) ? (H.marked = "keyword", P(En)) : T && j == "this" ? P(Ce, Sn) : $(Jt, Ce, Sn);
      }
      function ua(j, G) {
        return j == "variable" ? Br(j, G) : bn(j, G);
      }
      function Br(j, G) {
        if (j == "variable")
          return Q(G), P(bn);
      }
      function bn(j, G) {
        if (G == "<")
          return P(ae(">"), Ke($t, ">"), re, bn);
        if (G == "extends" || G == "implements" || T && j == ",")
          return G == "implements" && (H.marked = "keyword"), P(T ? oe : be, bn);
        if (j == "{")
          return P(ae("}"), Cn, re);
      }
      function Cn(j, G) {
        if (j == "async" || j == "variable" && (G == "static" || G == "get" || G == "set" || T && q(G)) && H.stream.match(/^\s+#?[\w$\xa1-\uffff]/, !1))
          return H.marked = "keyword", P(Cn);
        if (j == "variable" || H.style == "keyword")
          return H.marked = "property", P(xr, Cn);
        if (j == "number" || j == "string")
          return P(xr, Cn);
        if (j == "[")
          return P(be, Ce, se("]"), xr, Cn);
        if (G == "*")
          return H.marked = "keyword", P(Cn);
        if (T && j == "(")
          return $(tr, Cn);
        if (j == ";" || j == ",")
          return P(Cn);
        if (j == "}")
          return P();
        if (G == "@")
          return P(be, Cn);
      }
      function xr(j, G) {
        if (G == "!" || G == "?")
          return P(xr);
        if (j == ":")
          return P(oe, Sn);
        if (G == "=")
          return P(je);
        var ne = H.state.lexical.prev, fe = ne && ne.info == "interface";
        return $(fe ? tr : gn);
      }
      function Hr(j, G) {
        return G == "*" ? (H.marked = "keyword", P(Wr, se(";"))) : G == "default" ? (H.marked = "keyword", P(be, se(";"))) : j == "{" ? P(Ke(Ur, "}"), Wr, se(";")) : $(pe);
      }
      function Ur(j, G) {
        if (G == "as")
          return H.marked = "keyword", P(se("variable"));
        if (j == "variable")
          return $(je, Ur);
      }
      function nr(j) {
        return j == "string" ? P() : j == "(" ? $(be) : j == "." ? $(Et) : $(zr, Ln, Wr);
      }
      function zr(j, G) {
        return j == "{" ? Xt(zr, "}") : (j == "variable" && Q(G), G == "*" && (H.marked = "keyword"), P(gi));
      }
      function Ln(j) {
        if (j == ",")
          return P(zr, Ln);
      }
      function gi(j, G) {
        if (G == "as")
          return H.marked = "keyword", P(zr);
      }
      function Wr(j, G) {
        if (G == "from")
          return H.marked = "keyword", P(be);
      }
      function lt(j) {
        return j == "]" ? P() : $(Ke(je, "]"));
      }
      function we() {
        return $(ae("form"), Jt, se("{"), ae("}"), Ke(jn, "}"), re, re);
      }
      function jn() {
        return $(Jt, Sn);
      }
      function mi(j, G) {
        return j.lastType == "operator" || j.lastType == "," || b.test(G.charAt(0)) || /[,.]/.test(G.charAt(0));
      }
      function un(j, G, ne) {
        return G.tokenize == h && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(G.lastType) || G.lastType == "quasi" && /\{\s*$/.test(j.string.slice(0, j.pos - (ne || 0)));
      }
      return {
        startState: function(j) {
          var G = {
            tokenize: h,
            lastType: "sof",
            cc: [],
            lexical: new z((j || 0) - s, 0, "block", !1),
            localVars: t.localVars,
            context: t.localVars && new X(null, null, !1),
            indented: j || 0
          };
          return t.globalVars && typeof t.globalVars == "object" && (G.globalVars = t.globalVars), G;
        },
        token: function(j, G) {
          if (j.sol() && (G.lexical.hasOwnProperty("align") || (G.lexical.align = !1), G.indented = j.indentation(), B(j, G)), G.tokenize != C && j.eatSpace())
            return null;
          var ne = G.tokenize(j, G);
          return v == "comment" ? ne : (G.lastType = v == "operator" && (M == "++" || M == "--") ? "incdec" : v, U(G, ne, v, M, j));
        },
        indent: function(j, G) {
          if (j.tokenize == C || j.tokenize == R)
            return l.Pass;
          if (j.tokenize != h)
            return 0;
          var ne = G && G.charAt(0), fe = j.lexical, ee;
          if (!/^\s*else\b/.test(G))
            for (var ye = j.cc.length - 1; ye >= 0; --ye) {
              var Ve = j.cc[ye];
              if (Ve == re)
                fe = fe.prev;
              else if (Ve != Or && Ve != ce)
                break;
            }
          for (; (fe.type == "stat" || fe.type == "form") && (ne == "}" || (ee = j.cc[j.cc.length - 1]) && (ee == Et || ee == Bt) && !/^[,\.=+\-*:?[\(]/.test(G)); )
            fe = fe.prev;
          u && fe.type == ")" && fe.prev.type == "stat" && (fe = fe.prev);
          var Ct = fe.type, Zt = ne == Ct;
          return Ct == "vardef" ? fe.indented + (j.lastType == "operator" || j.lastType == "," ? fe.info.length + 1 : 0) : Ct == "form" && ne == "{" ? fe.indented : Ct == "form" ? fe.indented + s : Ct == "stat" ? fe.indented + (mi(j, G) ? u || s : 0) : fe.info == "switch" && !Zt && t.doubleIndentSwitch != !1 ? fe.indented + (/^(?:case|default)\b/.test(G) ? s : 2 * s) : fe.align ? fe.column + (Zt ? 0 : 1) : fe.indented + (Zt ? 0 : s);
        },
        electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
        blockCommentStart: d ? null : "/*",
        blockCommentEnd: d ? null : "*/",
        blockCommentContinue: d ? null : " * ",
        lineComment: d ? null : "//",
        fold: "brace",
        closeBrackets: "()[]{}''\"\"``",
        helperType: d ? "json" : "javascript",
        jsonldMode: f,
        jsonMode: d,
        expressionAllowed: un,
        skipExpression: function(j) {
          U(j, "atom", "atom", "true", new l.StringStream("", 2, null));
        }
      };
    }), l.registerHelper("wordChars", "javascript", /[\w$]/), l.defineMIME("text/javascript", "javascript"), l.defineMIME("text/ecmascript", "javascript"), l.defineMIME("application/javascript", "javascript"), l.defineMIME("application/x-javascript", "javascript"), l.defineMIME("application/ecmascript", "javascript"), l.defineMIME("application/json", { name: "javascript", json: !0 }), l.defineMIME("application/x-json", { name: "javascript", json: !0 }), l.defineMIME("application/manifest+json", { name: "javascript", json: !0 }), l.defineMIME("application/ld+json", { name: "javascript", jsonld: !0 }), l.defineMIME("text/typescript", { name: "javascript", typescript: !0 }), l.defineMIME("application/typescript", { name: "javascript", typescript: !0 });
  });
})();
const _h = Pn({
  name: "Struct",
  props: {
    modelValue: [Object, Array, Function],
    title: String,
    defaultValue: {
      require: !1
    },
    validate: Function
  },
  inject: ["designer"],
  data() {
    return {
      editor: null,
      visible: !1,
      err: !1,
      oldVal: null,
      t: this.designer.setupState.t
    };
  },
  watch: {
    modelValue() {
      this.load();
    },
    visible(c) {
      c ? this.load() : this.err = !1;
    }
  },
  methods: {
    load() {
      const c = qi(ld(this.modelValue ? vr(this.modelValue) : this.defaultValue));
      this.oldVal = c, this.$nextTick(() => {
        this.editor = qh(this.$refs.editor, {
          lineNumbers: !0,
          mode: "javascript",
          gutters: ["CodeMirror-lint-markers"],
          lint: !0,
          line: !0,
          tabSize: 2,
          lineWrapping: !0,
          value: c || ""
        });
      });
    },
    onOk() {
      const c = this.editor.getValue();
      let A;
      try {
        A = new Function("return " + c)();
      } catch (l) {
        this.err = ` (${l})`;
        return;
      }
      if (this.validate && this.validate(A) === !1) {
        this.err = !0;
        return;
      }
      this.visible = !1, qi(A) !== this.oldVal && this.$emit("update:modelValue", A);
    }
  }
}), eg = { class: "_fc_struct" }, tg = {
  key: 0,
  ref: "editor"
}, ng = { class: "dialog-footer" }, rg = {
  key: 0,
  class: "_fc_err"
};
function ig(c, A, l, o, t, s) {
  const u = ut("ElButton"), f = ut("ElDialog");
  return tt(), Gt("div", eg, [
    Je(u, {
      onClick: A[0] || (A[0] = (d) => c.visible = !0),
      style: { width: "100%" }
    }, {
      default: qe(() => [
        Kn(on(c.title || c.t("struct.title")), 1)
      ]),
      _: 1
    }),
    Je(f, {
      title: c.title || c.t("struct.title"),
      modelValue: c.visible,
      "onUpdate:modelValue": A[2] || (A[2] = (d) => c.visible = d),
      "close-on-click-modal": !1,
      "append-to-body": ""
    }, {
      footer: qe(() => [
        ft("span", ng, [
          c.err ? (tt(), Gt("span", rg, on(c.t("struct.error")) + on(c.err !== !0 ? c.err : ""), 1)) : vn("", !0),
          Je(u, {
            onClick: A[1] || (A[1] = (d) => c.visible = !1),
            size: "small"
          }, {
            default: qe(() => [
              Kn(on(c.t("struct.cancel")), 1)
            ]),
            _: 1
          }),
          Je(u, {
            type: "primary",
            onClick: c.onOk,
            size: "small"
          }, {
            default: qe(() => [
              Kn(on(c.t("struct.submit")), 1)
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      default: qe(() => [
        c.visible ? (tt(), Gt("div", tg, null, 512)) : vn("", !0)
      ]),
      _: 1
    }, 8, ["title", "modelValue"])
  ]);
}
const og = /* @__PURE__ */ mr(_h, [["render", ig]]);
function ag(c, A) {
  var l = null;
  return function(...o) {
    l !== null && clearTimeout(l), l = setTimeout(() => c.call(this, ...o), A);
  };
}
const lg = Pn({
  name: "Fetch",
  props: {
    modelValue: [Object, String],
    to: String
  },
  components: {
    DragForm: Lt.$form()
  },
  inject: ["designer"],
  computed: {
    formValue() {
      const c = this.modelValue;
      return c ? xt.String(c) ? {
        action: c
      } : c : {};
    }
  },
  data() {
    const c = this.designer.setupState.t;
    return {
      api: {},
      fetch: {},
      t: c,
      option: {
        form: {
          labelPosition: "right",
          size: "small",
          labelWidth: "90px"
        },
        submitBtn: !1
      },
      rule: [
        {
          type: "input",
          field: "action",
          title: c("fetch.action") + ": ",
          validate: [{ required: !0, message: c("fetch.actionRequired") }]
        },
        {
          type: "select",
          field: "method",
          title: c("fetch.method") + ": ",
          value: "GET",
          options: [
            { label: "GET", value: "GET" },
            { label: "POST", value: "POST" }
          ],
          control: [
            {
              value: "POST",
              rule: [
                {
                  type: "select",
                  field: "dataType",
                  title: c("fetch.dataType") + ": ",
                  value: "FormData",
                  options: [
                    { label: "FormData", value: "FormData" },
                    { label: "JSON", value: "JSON" }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: "Struct",
          field: "data",
          title: c("fetch.data") + ": ",
          value: {},
          props: {
            defaultValue: {}
          }
        },
        {
          type: "Struct",
          field: "headers",
          title: c("fetch.headers") + ": ",
          value: {},
          props: {
            defaultValue: {}
          }
        },
        {
          type: "Struct",
          field: "parse",
          title: c("fetch.parse") + ": ",
          info: c("fetch.parseInfo"),
          value: null,
          props: {
            defaultValue: function(l) {
              return l;
            }
          }
        }
      ]
    };
  },
  methods: {
    parseFn(c) {
      return new Function("return " + c)();
    },
    _input() {
      this.api.submit((c) => {
        c.to = this.to || "options", this.$emit("update:modelValue", c);
      });
    },
    input: ag(function() {
      this._input();
    }, 1e3)
  },
  mounted() {
    this._input();
  }
}), sg = { class: "_fc_fetch" };
function ug(c, A, l, o, t, s) {
  const u = ut("DragForm");
  return tt(), Gt("div", sg, [
    Je(u, {
      api: c.api,
      "onUpdate:api": A[0] || (A[0] = (f) => c.api = f),
      modelValue: c.formValue,
      rule: c.rule,
      option: c.option,
      onChange: c.input
    }, null, 8, ["api", "modelValue", "rule", "option", "onChange"])
  ]);
}
const fg = /* @__PURE__ */ mr(lg, [["render", ug]]);
const dg = Pn({
  name: "Validate",
  inject: ["designer"],
  props: {
    modelValue: Array
  },
  components: {
    DragForm: Lt.$form()
  },
  watch: {
    modelValue(c) {
      this.formValue = this.parseValue(c);
    }
  },
  data() {
    const c = this.designer.setupState.t;
    return {
      formValue: {},
      t: c,
      option: {
        form: {
          labelPosition: "top",
          size: "small",
          labelWidth: "90px"
        },
        submitBtn: !1,
        appendValue: !0,
        formData: this.parseValue(this.modelValue)
      },
      rule: [
        {
          type: "select",
          field: "type",
          value: "",
          title: c("validate.type"),
          options: [
            { value: "", label: c("validate.typePlaceholder") },
            { value: "string", label: "String" },
            { value: "array", label: "Array" },
            { value: "number", label: "Number" },
            { value: "integer", label: "Integer" },
            { value: "float", label: "Float" },
            { value: "object", label: "Object" },
            { value: "date", label: "Date" },
            { value: "url", label: "url" },
            { value: "hex", label: "hex" },
            { value: "email", label: "email" }
          ],
          control: [
            {
              handle: (A) => !!A,
              rule: [
                {
                  type: "group",
                  field: "validate",
                  props: {
                    expand: 1,
                    sortBtn: !1,
                    rule: [
                      {
                        type: "select",
                        title: c("validate.trigger"),
                        field: "trigger",
                        value: "change",
                        options: [
                          { label: "change", value: "change" },
                          { label: "submit", value: "submit" },
                          { label: "blur", value: "blur" }
                        ]
                      },
                      {
                        type: "hidden",
                        field: "validator",
                        value: void 0
                      },
                      {
                        type: "select",
                        title: c("validate.mode"),
                        field: "mode",
                        options: [
                          { value: "required", label: c("validate.modes.required") },
                          { value: "pattern", label: c("validate.modes.pattern") },
                          { value: "min", label: c("validate.modes.min") },
                          { value: "max", label: c("validate.modes.max") },
                          { value: "len", label: c("validate.modes.len") }
                        ],
                        value: "required",
                        control: [
                          {
                            value: "required",
                            rule: [
                              {
                                type: "hidden",
                                field: "required",
                                value: !0
                              }
                            ]
                          },
                          {
                            value: "pattern",
                            rule: [
                              {
                                type: "input",
                                field: "pattern",
                                title: c("validate.modes.pattern")
                              }
                            ]
                          },
                          {
                            value: "min",
                            rule: [
                              {
                                type: "inputNumber",
                                field: "min",
                                title: c("validate.modes.min")
                              }
                            ]
                          },
                          {
                            value: "max",
                            rule: [
                              {
                                type: "inputNumber",
                                field: "max",
                                title: c("validate.modes.max")
                              }
                            ]
                          },
                          {
                            value: "len",
                            rule: [
                              {
                                type: "inputNumber",
                                field: "len",
                                title: c("validate.modes.len")
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: "input",
                        title: c("validate.message"),
                        field: "message",
                        value: "",
                        children: [
                          {
                            type: "span",
                            slot: "append",
                            inject: !0,
                            class: "append-msg",
                            on: {
                              click: (A) => {
                                const l = this.designer.setupState.activeRule.title;
                                this.designer.setupState.activeRule && A.api.setValue("message", c(A.api.form.mode !== "required" ? "validate.autoMode" : "validate.autoRequired", { title: l }));
                              }
                            },
                            children: [c("validate.auto")]
                          }
                        ]
                      }
                    ]
                  },
                  value: []
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    onInput: function(c) {
      let A = [];
      const { validate: l, type: o } = vr(c);
      o && (!l || !l.length) || (o && (l.forEach((t) => {
        t.type = o;
      }), A = [...l]), this.$emit("update:modelValue", A));
    },
    parseValue(c) {
      let A = {
        validate: c ? [...c] : [],
        type: c.length ? c[0].type || "string" : void 0
      };
      return A.validate.forEach((l) => {
        l.mode || Object.keys(l).forEach((o) => {
          ["message", "type", "trigger", "mode"].indexOf(o) < 0 && (l.mode = o);
        });
      }), A;
    }
  }
});
function cg(c, A, l, o, t, s) {
  const u = ut("DragForm");
  return tt(), Hn(u, {
    class: "_fc-validate",
    rule: c.rule,
    option: c.option,
    modelValue: c.formValue,
    "onUpdate:modelValue": c.onInput
  }, null, 8, ["rule", "option", "modelValue", "onUpdate:modelValue"]);
}
const vg = /* @__PURE__ */ mr(dg, [["render", cg]]), pg = Pn({
  name: "DragBox",
  props: ["rule", "tag", "formCreateInject"],
  render(c) {
    const A = { ...c.$props.rule.props, ...c.$attrs };
    let l = A.tag + "-drag drag-box";
    Object.keys(c.$slots).length || (l += " " + A.tag + "-holder"), A.class = l, A.modelValue = [...this.$props.formCreateInject.children];
    const o = {};
    return c.$slots.default && c.$slots.default().forEach((s) => {
      s.key && (o[s.key] = s);
    }), ta(xs, A, {
      item: ({ element: t }) => {
        var s;
        return (s = t == null ? void 0 : t.__fc__) != null && s.key ? ta("div", {}, o[t.__fc__.key + "fc"]) : void 0;
      }
    });
  }
});
const hg = Pn({
  name: "Required",
  props: {
    modelValue: {}
  },
  inject: ["designer"],
  watch: {
    required() {
      this.update();
    },
    requiredMsg() {
      this.update();
    },
    modelValue(c) {
      const A = xt.String(c);
      this.required = c === void 0 ? !1 : A ? !0 : !!c, this.requiredMsg = A ? c : "";
    }
  },
  data() {
    const c = xt.String(this.modelValue);
    return {
      t: this.designer.setupState.t,
      required: this.modelValue === void 0 ? !1 : c ? !0 : !!this.modelValue,
      requiredMsg: c ? this.modelValue : ""
    };
  },
  methods: {
    update() {
      let c;
      this.required === !1 ? c = !1 : c = this.requiredMsg || !0, this.$emit("update:modelValue", c);
    }
  }
}), gg = { class: "_fc-required" };
function mg(c, A, l, o, t, s) {
  const u = ut("ElSwitch"), f = ut("ElInput");
  return tt(), Gt("div", gg, [
    Je(u, {
      modelValue: c.required,
      "onUpdate:modelValue": A[0] || (A[0] = (d) => c.required = d)
    }, null, 8, ["modelValue"]),
    c.required ? (tt(), Hn(f, {
      key: 0,
      modelValue: c.requiredMsg,
      "onUpdate:modelValue": A[1] || (A[1] = (d) => c.requiredMsg = d),
      placeholder: c.t("validate.requiredPlaceholder")
    }, null, 8, ["modelValue", "placeholder"])) : vn("", !0)
  ]);
}
const yg = /* @__PURE__ */ mr(hg, [["render", mg]]);
const Ag = Pn({
  name: "TableOptions",
  inheritAttrs: !1,
  props: {
    modelValue: [Object, Array, String]
  },
  inject: ["designer"],
  data() {
    return {
      column: [{ label: "label", key: "label" }, { label: "value", key: "value" }],
      t: this.designer.setupState.t
    };
  },
  created() {
    Array.isArray(this.modelValue) || this.$emit("input", []);
  },
  methods: {
    onInput(c) {
      c.label !== void 0 && c.value !== void 0 && this.input();
    },
    input() {
      this.$emit("update:modelValue", this.modelValue);
    },
    add() {
      this.modelValue.push(this.column.reduce((c, A) => (c[A.key] = "", c), {}));
    },
    del(c) {
      this.modelValue.splice(c, 1), this.input(this.modelValue);
    }
  }
}), xg = (c) => (Uv("data-v-0d635ce0"), c = c(), zv(), c), Sg = { class: "_fc_table_opt" }, Eg = ["onClick"], bg = /* @__PURE__ */ xg(() => /* @__PURE__ */ ft("i", { class: "fc-icon icon-add" }, null, -1));
function Cg(c, A, l, o, t, s) {
  const u = ut("el-input"), f = ut("el-table-column"), d = ut("el-table"), m = ut("el-button");
  return tt(), Gt("div", Sg, [
    Je(d, {
      data: c.modelValue,
      border: "",
      size: "small",
      style: { width: "100%" }
    }, {
      default: qe(() => [
        (tt(!0), Gt(td, null, nd(c.column, (T, S) => (tt(), Hn(f, {
          key: T.label + S,
          label: T.label
        }, {
          default: qe((w) => [
            Je(u, {
              size: "small",
              modelValue: w.row[T.key] || "",
              "onUpdate:modelValue": (b) => (w.row[T.key] = b, c.onInput(w.row))
            }, null, 8, ["modelValue", "onUpdate:modelValue"])
          ]),
          _: 2
        }, 1032, ["label"]))), 128)),
        Je(f, {
          "min-width": "50",
          align: "center",
          fixed: "right",
          label: c.t("tableOptions.handle")
        }, {
          default: qe((T) => [
            ft("i", {
              class: "fc-icon icon-delete",
              onClick: (S) => c.del(T.$index)
            }, null, 8, Eg)
          ]),
          _: 1
        }, 8, ["label"])
      ]),
      _: 1
    }, 8, ["data"]),
    Je(m, {
      link: "",
      type: "primary",
      onClick: c.add
    }, {
      default: qe(() => [
        bg,
        Kn(" " + on(c.t("tableOptions.add")), 1)
      ]),
      _: 1
    }, 8, ["onClick"])
  ]);
}
const Tg = /* @__PURE__ */ mr(Ag, [["render", Cg], ["__scopeId", "data-v-0d635ce0"]]);
/*!
 * @form-create/component-wangeditor v3.1.20
 * (c) 2018-2023 xaboy
 * Github https://github.com/xaboy/form-create with wangeditor
 * Released under the MIT License.
 */
function qf(c, A) {
  var l = Object.keys(c);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(c);
    A && (o = o.filter(function(t) {
      return Object.getOwnPropertyDescriptor(c, t).enumerable;
    })), l.push.apply(l, o);
  }
  return l;
}
function wg(c) {
  for (var A = 1; A < arguments.length; A++) {
    var l = arguments[A] != null ? arguments[A] : {};
    A % 2 ? qf(Object(l), !0).forEach(function(o) {
      Dg(c, o, l[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(l)) : qf(Object(l)).forEach(function(o) {
      Object.defineProperty(c, o, Object.getOwnPropertyDescriptor(l, o));
    });
  }
  return c;
}
function Pt(c) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Pt = function(A) {
    return typeof A;
  } : Pt = function(A) {
    return A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A;
  }, Pt(c);
}
function Dg(c, A, l) {
  return A in c ? Object.defineProperty(c, A, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : c[A] = l, c;
}
function Mg(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var Id = { exports: {} };
(function(c, A) {
  (function(o, t) {
    c.exports = t();
  })(window, function() {
    return function(l) {
      var o = {};
      function t(s) {
        if (o[s])
          return o[s].exports;
        var u = o[s] = { i: s, l: !1, exports: {} };
        return l[s].call(u.exports, u, u.exports, t), u.l = !0, u.exports;
      }
      return t.m = l, t.c = o, t.d = function(s, u, f) {
        t.o(s, u) || Object.defineProperty(s, u, { enumerable: !0, get: f });
      }, t.r = function(s) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
      }, t.t = function(s, u) {
        if (u & 1 && (s = t(s)), u & 8 || u & 4 && Pt(s) === "object" && s && s.__esModule)
          return s;
        var f = /* @__PURE__ */ Object.create(null);
        if (t.r(f), Object.defineProperty(f, "default", { enumerable: !0, value: s }), u & 2 && typeof s != "string")
          for (var d in s)
            t.d(f, d, function(m) {
              return s[m];
            }.bind(null, d));
        return f;
      }, t.n = function(s) {
        var u = s && s.__esModule ? function() {
          return s.default;
        } : function() {
          return s;
        };
        return t.d(u, "a", u), u;
      }, t.o = function(s, u) {
        return Object.prototype.hasOwnProperty.call(s, u);
      }, t.p = "", t(t.s = 141);
    }([function(l, o) {
      function t(s) {
        return s && s.__esModule ? s : { default: s };
      }
      l.exports = t;
    }, function(l, o, t) {
      l.exports = t(142);
    }, function(l, o, t) {
      t.r(o), t.d(o, "__extends", function() {
        return u;
      }), t.d(o, "__assign", function() {
        return f;
      }), t.d(o, "__rest", function() {
        return d;
      }), t.d(o, "__decorate", function() {
        return m;
      }), t.d(o, "__param", function() {
        return T;
      }), t.d(o, "__metadata", function() {
        return S;
      }), t.d(o, "__awaiter", function() {
        return w;
      }), t.d(o, "__generator", function() {
        return b;
      }), t.d(o, "__createBinding", function() {
        return g;
      }), t.d(o, "__exportStar", function() {
        return x;
      }), t.d(o, "__values", function() {
        return v;
      }), t.d(o, "__read", function() {
        return M;
      }), t.d(o, "__spread", function() {
        return y;
      }), t.d(o, "__spreadArrays", function() {
        return h;
      }), t.d(o, "__spreadArray", function() {
        return E;
      }), t.d(o, "__await", function() {
        return C;
      }), t.d(o, "__asyncGenerator", function() {
        return R;
      }), t.d(o, "__asyncDelegator", function() {
        return F;
      }), t.d(o, "__asyncValues", function() {
        return B;
      }), t.d(o, "__makeTemplateObject", function() {
        return O;
      }), t.d(o, "__importStar", function() {
        return I;
      }), t.d(o, "__importDefault", function() {
        return U;
      }), t.d(o, "__classPrivateFieldGet", function() {
        return H;
      }), t.d(o, "__classPrivateFieldSet", function() {
        return $;
      });
      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */
      var s = function(Y, Q) {
        return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(K, q) {
          K.__proto__ = q;
        } || function(K, q) {
          for (var X in q)
            Object.prototype.hasOwnProperty.call(q, X) && (K[X] = q[X]);
        }, s(Y, Q);
      };
      function u(P, Y) {
        if (typeof Y != "function" && Y !== null)
          throw new TypeError("Class extends value " + String(Y) + " is not a constructor or null");
        s(P, Y);
        function Q() {
          this.constructor = P;
        }
        P.prototype = Y === null ? Object.create(Y) : (Q.prototype = Y.prototype, new Q());
      }
      var f = function() {
        return f = Object.assign || function(Q) {
          for (var K, q = 1, X = arguments.length; q < X; q++) {
            K = arguments[q];
            for (var _ in K)
              Object.prototype.hasOwnProperty.call(K, _) && (Q[_] = K[_]);
          }
          return Q;
        }, f.apply(this, arguments);
      };
      function d(P, Y) {
        var Q = {};
        for (var K in P)
          Object.prototype.hasOwnProperty.call(P, K) && Y.indexOf(K) < 0 && (Q[K] = P[K]);
        if (P != null && typeof Object.getOwnPropertySymbols == "function")
          for (var q = 0, K = Object.getOwnPropertySymbols(P); q < K.length; q++)
            Y.indexOf(K[q]) < 0 && Object.prototype.propertyIsEnumerable.call(P, K[q]) && (Q[K[q]] = P[K[q]]);
        return Q;
      }
      function m(P, Y, Q, K) {
        var q = arguments.length, X = q < 3 ? Y : K === null ? K = Object.getOwnPropertyDescriptor(Y, Q) : K, _;
        if ((typeof Reflect > "u" ? "undefined" : Pt(Reflect)) === "object" && typeof Reflect.decorate == "function")
          X = Reflect.decorate(P, Y, Q, K);
        else
          for (var le = P.length - 1; le >= 0; le--)
            (_ = P[le]) && (X = (q < 3 ? _(X) : q > 3 ? _(Y, Q, X) : _(Y, Q)) || X);
        return q > 3 && X && Object.defineProperty(Y, Q, X), X;
      }
      function T(P, Y) {
        return function(Q, K) {
          Y(Q, K, P);
        };
      }
      function S(P, Y) {
        if ((typeof Reflect > "u" ? "undefined" : Pt(Reflect)) === "object" && typeof Reflect.metadata == "function")
          return Reflect.metadata(P, Y);
      }
      function w(P, Y, Q, K) {
        function q(X) {
          return X instanceof Q ? X : new Q(function(_) {
            _(X);
          });
        }
        return new (Q || (Q = Promise))(function(X, _) {
          function le(ce) {
            try {
              ve(K.next(ce));
            } catch (ae) {
              _(ae);
            }
          }
          function Se(ce) {
            try {
              ve(K.throw(ce));
            } catch (ae) {
              _(ae);
            }
          }
          function ve(ce) {
            ce.done ? X(ce.value) : q(ce.value).then(le, Se);
          }
          ve((K = K.apply(P, Y || [])).next());
        });
      }
      function b(P, Y) {
        var Q = { label: 0, sent: function() {
          if (X[0] & 1)
            throw X[1];
          return X[1];
        }, trys: [], ops: [] }, K, q, X, _;
        return _ = { next: le(0), throw: le(1), return: le(2) }, typeof Symbol == "function" && (_[Symbol.iterator] = function() {
          return this;
        }), _;
        function le(ve) {
          return function(ce) {
            return Se([ve, ce]);
          };
        }
        function Se(ve) {
          if (K)
            throw new TypeError("Generator is already executing.");
          for (; Q; )
            try {
              if (K = 1, q && (X = ve[0] & 2 ? q.return : ve[0] ? q.throw || ((X = q.return) && X.call(q), 0) : q.next) && !(X = X.call(q, ve[1])).done)
                return X;
              switch (q = 0, X && (ve = [ve[0] & 2, X.value]), ve[0]) {
                case 0:
                case 1:
                  X = ve;
                  break;
                case 4:
                  return Q.label++, { value: ve[1], done: !1 };
                case 5:
                  Q.label++, q = ve[1], ve = [0];
                  continue;
                case 7:
                  ve = Q.ops.pop(), Q.trys.pop();
                  continue;
                default:
                  if (X = Q.trys, !(X = X.length > 0 && X[X.length - 1]) && (ve[0] === 6 || ve[0] === 2)) {
                    Q = 0;
                    continue;
                  }
                  if (ve[0] === 3 && (!X || ve[1] > X[0] && ve[1] < X[3])) {
                    Q.label = ve[1];
                    break;
                  }
                  if (ve[0] === 6 && Q.label < X[1]) {
                    Q.label = X[1], X = ve;
                    break;
                  }
                  if (X && Q.label < X[2]) {
                    Q.label = X[2], Q.ops.push(ve);
                    break;
                  }
                  X[2] && Q.ops.pop(), Q.trys.pop();
                  continue;
              }
              ve = Y.call(P, Q);
            } catch (ce) {
              ve = [6, ce], q = 0;
            } finally {
              K = X = 0;
            }
          if (ve[0] & 5)
            throw ve[1];
          return { value: ve[0] ? ve[1] : void 0, done: !0 };
        }
      }
      var g = Object.create ? function(P, Y, Q, K) {
        K === void 0 && (K = Q), Object.defineProperty(P, K, { enumerable: !0, get: function() {
          return Y[Q];
        } });
      } : function(P, Y, Q, K) {
        K === void 0 && (K = Q), P[K] = Y[Q];
      };
      function x(P, Y) {
        for (var Q in P)
          Q !== "default" && !Object.prototype.hasOwnProperty.call(Y, Q) && g(Y, P, Q);
      }
      function v(P) {
        var Y = typeof Symbol == "function" && Symbol.iterator, Q = Y && P[Y], K = 0;
        if (Q)
          return Q.call(P);
        if (P && typeof P.length == "number")
          return { next: function() {
            return P && K >= P.length && (P = void 0), { value: P && P[K++], done: !P };
          } };
        throw new TypeError(Y ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }
      function M(P, Y) {
        var Q = typeof Symbol == "function" && P[Symbol.iterator];
        if (!Q)
          return P;
        var K = Q.call(P), q, X = [], _;
        try {
          for (; (Y === void 0 || Y-- > 0) && !(q = K.next()).done; )
            X.push(q.value);
        } catch (le) {
          _ = { error: le };
        } finally {
          try {
            q && !q.done && (Q = K.return) && Q.call(K);
          } finally {
            if (_)
              throw _.error;
          }
        }
        return X;
      }
      function y() {
        for (var P = [], Y = 0; Y < arguments.length; Y++)
          P = P.concat(M(arguments[Y]));
        return P;
      }
      function h() {
        for (var P = 0, Y = 0, Q = arguments.length; Y < Q; Y++)
          P += arguments[Y].length;
        for (var K = Array(P), q = 0, Y = 0; Y < Q; Y++)
          for (var X = arguments[Y], _ = 0, le = X.length; _ < le; _++, q++)
            K[q] = X[_];
        return K;
      }
      function E(P, Y) {
        for (var Q = 0, K = Y.length, q = P.length; Q < K; Q++, q++)
          P[q] = Y[Q];
        return P;
      }
      function C(P) {
        return this instanceof C ? (this.v = P, this) : new C(P);
      }
      function R(P, Y, Q) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var K = Q.apply(P, Y || []), q, X = [];
        return q = {}, _("next"), _("throw"), _("return"), q[Symbol.asyncIterator] = function() {
          return this;
        }, q;
        function _(re) {
          K[re] && (q[re] = function(se) {
            return new Promise(function(pe, Pe) {
              X.push([re, se, pe, Pe]) > 1 || le(re, se);
            });
          });
        }
        function le(re, se) {
          try {
            Se(K[re](se));
          } catch (pe) {
            ae(X[0][3], pe);
          }
        }
        function Se(re) {
          re.value instanceof C ? Promise.resolve(re.value.v).then(ve, ce) : ae(X[0][2], re);
        }
        function ve(re) {
          le("next", re);
        }
        function ce(re) {
          le("throw", re);
        }
        function ae(re, se) {
          re(se), X.shift(), X.length && le(X[0][0], X[0][1]);
        }
      }
      function F(P) {
        var Y, Q;
        return Y = {}, K("next"), K("throw", function(q) {
          throw q;
        }), K("return"), Y[Symbol.iterator] = function() {
          return this;
        }, Y;
        function K(q, X) {
          Y[q] = P[q] ? function(_) {
            return (Q = !Q) ? { value: C(P[q](_)), done: q === "return" } : X ? X(_) : _;
          } : X;
        }
      }
      function B(P) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var Y = P[Symbol.asyncIterator], Q;
        return Y ? Y.call(P) : (P = typeof v == "function" ? v(P) : P[Symbol.iterator](), Q = {}, K("next"), K("throw"), K("return"), Q[Symbol.asyncIterator] = function() {
          return this;
        }, Q);
        function K(X) {
          Q[X] = P[X] && function(_) {
            return new Promise(function(le, Se) {
              _ = P[X](_), q(le, Se, _.done, _.value);
            });
          };
        }
        function q(X, _, le, Se) {
          Promise.resolve(Se).then(function(ve) {
            X({ value: ve, done: le });
          }, _);
        }
      }
      function O(P, Y) {
        return Object.defineProperty ? Object.defineProperty(P, "raw", { value: Y }) : P.raw = Y, P;
      }
      var z = Object.create ? function(P, Y) {
        Object.defineProperty(P, "default", { enumerable: !0, value: Y });
      } : function(P, Y) {
        P.default = Y;
      };
      function I(P) {
        if (P && P.__esModule)
          return P;
        var Y = {};
        if (P != null)
          for (var Q in P)
            Q !== "default" && Object.prototype.hasOwnProperty.call(P, Q) && g(Y, P, Q);
        return z(Y, P), Y;
      }
      function U(P) {
        return P && P.__esModule ? P : { default: P };
      }
      function H(P, Y) {
        if (!Y.has(P))
          throw new TypeError("attempted to get private field on non-instance");
        return Y.get(P);
      }
      function $(P, Y, Q) {
        if (!Y.has(P))
          throw new TypeError("attempted to set private field on non-instance");
        return Y.set(P, Q), Q;
      }
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(89)), d = s(t(4)), m = s(t(26)), T = s(t(17)), S = s(t(120)), w = s(t(27)), b = s(t(91)), g = s(t(70)), x = s(t(44)), v = s(t(57));
      (0, u.default)(o, "__esModule", { value: !0 }), o.DomElement = void 0;
      var M = t(2), y = t(6), h = [];
      function E(z) {
        var I = document.createElement("div");
        I.innerHTML = z;
        var U = I.children;
        return y.toArray(U);
      }
      function C(z) {
        return z ? z instanceof HTMLCollection || z instanceof NodeList : !1;
      }
      function R(z) {
        var I = document.querySelectorAll(z);
        return y.toArray(I);
      }
      function F(z) {
        var I = [], U = [];
        return (0, f.default)(z) ? I = z : I = z.split(";"), (0, d.default)(I).call(I, function(H) {
          var $, P = (0, m.default)($ = H.split(":")).call($, function(Y) {
            return (0, T.default)(Y).call(Y);
          });
          P.length === 2 && U.push(P[0] + ":" + P[1]);
        }), U;
      }
      var B = function() {
        function z(I) {
          if (this.elems = [], this.length = this.elems.length, this.dataSource = new S.default(), !!I) {
            if (I instanceof z)
              return I;
            var U = [], H = I instanceof Node ? I.nodeType : -1;
            if (this.selector = I, H === 1 || H === 9)
              U = [I];
            else if (C(I))
              U = y.toArray(I);
            else if (I instanceof Array)
              U = I;
            else if (typeof I == "string") {
              var $, P = (0, T.default)($ = I.replace(`/
/mg`, "")).call($);
              (0, w.default)(P).call(P, "<") === 0 ? U = E(P) : U = R(P);
            }
            var Y = U.length;
            if (!Y)
              return this;
            for (var Q = 0; Q < Y; Q++)
              this.elems.push(U[Q]);
            this.length = Y;
          }
        }
        return (0, u.default)(z.prototype, "id", {
          get: function() {
            return this.elems[0].id;
          },
          enumerable: !1,
          configurable: !0
        }), z.prototype.forEach = function(I) {
          for (var U = 0; U < this.length; U++) {
            var H = this.elems[U], $ = I.call(H, H, U);
            if ($ === !1)
              break;
          }
          return this;
        }, z.prototype.clone = function(I) {
          var U;
          I === void 0 && (I = !1);
          var H = [];
          return (0, d.default)(U = this.elems).call(U, function($) {
            H.push($.cloneNode(!!I));
          }), O(H);
        }, z.prototype.get = function(I) {
          I === void 0 && (I = 0);
          var U = this.length;
          return I >= U && (I = I % U), O(this.elems[I]);
        }, z.prototype.first = function() {
          return this.get(0);
        }, z.prototype.last = function() {
          var I = this.length;
          return this.get(I - 1);
        }, z.prototype.on = function(I, U, H) {
          var $;
          return I ? (typeof U == "function" && (H = U, U = ""), (0, d.default)($ = this).call($, function(P) {
            if (!U) {
              P.addEventListener(I, H);
              return;
            }
            var Y = function(K) {
              var q = K.target;
              q.matches(U) && H.call(q, K);
            };
            P.addEventListener(I, Y), h.push({ elem: P, selector: U, fn: H, agentFn: Y });
          })) : this;
        }, z.prototype.off = function(I, U, H) {
          var $;
          return I ? (typeof U == "function" && (H = U, U = ""), (0, d.default)($ = this).call($, function(P) {
            if (U) {
              for (var Y = -1, Q = 0; Q < h.length; Q++) {
                var K = h[Q];
                if (K.selector === U && K.fn === H && K.elem === P) {
                  Y = Q;
                  break;
                }
              }
              if (Y !== -1) {
                var q = (0, b.default)(h).call(h, Y, 1)[0].agentFn;
                P.removeEventListener(I, q);
              }
            } else
              P.removeEventListener(I, H);
          })) : this;
        }, z.prototype.attr = function(I, U) {
          var H;
          return U == null ? this.elems[0].getAttribute(I) || "" : (0, d.default)(H = this).call(H, function($) {
            $.setAttribute(I, U);
          });
        }, z.prototype.removeAttr = function(I) {
          var U;
          (0, d.default)(U = this).call(U, function(H) {
            H.removeAttribute(I);
          });
        }, z.prototype.addClass = function(I) {
          var U;
          return I ? (0, d.default)(U = this).call(U, function(H) {
            if (H.className) {
              var $ = H.className.split(/\s/);
              $ = (0, g.default)($).call($, function(P) {
                return !!(0, T.default)(P).call(P);
              }), (0, w.default)($).call($, I) < 0 && $.push(I), H.className = $.join(" ");
            } else
              H.className = I;
          }) : this;
        }, z.prototype.removeClass = function(I) {
          var U;
          return I ? (0, d.default)(U = this).call(U, function(H) {
            if (!!H.className) {
              var $ = H.className.split(/\s/);
              $ = (0, g.default)($).call($, function(P) {
                return P = (0, T.default)(P).call(P), !(!P || P === I);
              }), H.className = $.join(" ");
            }
          }) : this;
        }, z.prototype.hasClass = function(I) {
          if (!I)
            return !1;
          var U = this.elems[0];
          if (!U.className)
            return !1;
          var H = U.className.split(/\s/);
          return (0, x.default)(H).call(H, I);
        }, z.prototype.css = function(I, U) {
          var H, $;
          return U == "" ? $ = "" : $ = I + ":" + U + ";", (0, d.default)(H = this).call(H, function(P) {
            var Y, Q = (0, T.default)(Y = P.getAttribute("style") || "").call(Y);
            if (Q) {
              var K = F(Q);
              K = (0, m.default)(K).call(K, function(q) {
                return (0, w.default)(q).call(q, I) === 0 ? $ : q;
              }), $ != "" && (0, w.default)(K).call(K, $) < 0 && K.push($), $ == "" && (K = F(K)), P.setAttribute("style", K.join("; "));
            } else
              P.setAttribute("style", $);
          });
        }, z.prototype.getBoundingClientRect = function() {
          var I = this.elems[0];
          return I.getBoundingClientRect();
        }, z.prototype.show = function() {
          return this.css("display", "block");
        }, z.prototype.hide = function() {
          return this.css("display", "none");
        }, z.prototype.children = function() {
          var I = this.elems[0];
          return I ? O(I.children) : null;
        }, z.prototype.childNodes = function() {
          var I = this.elems[0];
          return I ? O(I.childNodes) : null;
        }, z.prototype.replaceChildAll = function(I) {
          for (var U = this.getNode(), H = this.elems[0]; H.hasChildNodes(); )
            U.firstChild && H.removeChild(U.firstChild);
          this.append(I);
        }, z.prototype.append = function(I) {
          var U;
          return (0, d.default)(U = this).call(U, function(H) {
            (0, d.default)(I).call(I, function($) {
              H.appendChild($);
            });
          });
        }, z.prototype.remove = function() {
          var I;
          return (0, d.default)(I = this).call(I, function(U) {
            if (U.remove)
              U.remove();
            else {
              var H = U.parentElement;
              H && H.removeChild(U);
            }
          });
        }, z.prototype.isContain = function(I) {
          var U = this.elems[0], H = I.elems[0];
          return U.contains(H);
        }, z.prototype.getNodeName = function() {
          var I = this.elems[0];
          return I.nodeName;
        }, z.prototype.getNode = function(I) {
          I === void 0 && (I = 0);
          var U;
          return U = this.elems[I], U;
        }, z.prototype.find = function(I) {
          var U = this.elems[0];
          return O(U.querySelectorAll(I));
        }, z.prototype.text = function(I) {
          if (I) {
            var H;
            return (0, d.default)(H = this).call(H, function($) {
              $.innerHTML = I;
            });
          } else {
            var U = this.elems[0];
            return U.innerHTML.replace(/<[^>]+>/g, function() {
              return "";
            });
          }
        }, z.prototype.html = function(I) {
          var U = this.elems[0];
          return I ? (U.innerHTML = I, this) : U.innerHTML;
        }, z.prototype.val = function() {
          var I, U = this.elems[0];
          return (0, T.default)(I = U.value).call(I);
        }, z.prototype.focus = function() {
          var I;
          return (0, d.default)(I = this).call(I, function(U) {
            U.focus();
          });
        }, z.prototype.prev = function() {
          var I = this.elems[0];
          return O(I.previousElementSibling);
        }, z.prototype.next = function() {
          var I = this.elems[0];
          return O(I.nextElementSibling);
        }, z.prototype.getNextSibling = function() {
          var I = this.elems[0];
          return O(I.nextSibling);
        }, z.prototype.parent = function() {
          var I = this.elems[0];
          return O(I.parentElement);
        }, z.prototype.parentUntil = function(I, U) {
          var H = U || this.elems[0];
          if (H.nodeName === "BODY")
            return null;
          var $ = H.parentElement;
          return $ === null ? null : $.matches(I) ? O($) : this.parentUntil(I, $);
        }, z.prototype.parentUntilEditor = function(I, U, H) {
          var $ = H || this.elems[0];
          if (O($).equal(U.$textContainerElem) || O($).equal(U.$toolbarElem))
            return null;
          var P = $.parentElement;
          return P === null ? null : P.matches(I) ? O(P) : this.parentUntilEditor(I, U, P);
        }, z.prototype.equal = function(I) {
          return I instanceof z ? this.elems[0] === I.elems[0] : I instanceof HTMLElement ? this.elems[0] === I : !1;
        }, z.prototype.insertBefore = function(I) {
          var U, H = O(I), $ = H.elems[0];
          return $ ? (0, d.default)(U = this).call(U, function(P) {
            var Y = $.parentNode;
            Y == null || Y.insertBefore(P, $);
          }) : this;
        }, z.prototype.insertAfter = function(I) {
          var U, H = O(I), $ = H.elems[0], P = $ && $.nextSibling;
          return $ ? (0, d.default)(U = this).call(U, function(Y) {
            var Q = $.parentNode;
            P ? Q.insertBefore(Y, P) : Q.appendChild(Y);
          }) : this;
        }, z.prototype.data = function(I, U) {
          if (U != null)
            this.dataSource.set(I, U);
          else
            return this.dataSource.get(I);
        }, z.prototype.getNodeTop = function(I) {
          if (this.length < 1)
            return this;
          var U = this.parent();
          return I.$textElem.equal(this) || I.$textElem.equal(U) ? this : (U.prior = this, U.getNodeTop(I));
        }, z.prototype.getOffsetData = function() {
          var I = this.elems[0];
          return { top: I.offsetTop, left: I.offsetLeft, width: I.offsetWidth, height: I.offsetHeight, parent: I.offsetParent };
        }, z.prototype.scrollTop = function(I) {
          var U = this.elems[0];
          U.scrollTo({ top: I });
        }, z;
      }();
      o.DomElement = B;
      function O() {
        for (var z = [], I = 0; I < arguments.length; I++)
          z[I] = arguments[I];
        return new ((0, v.default)(B).apply(B, M.__spreadArrays([void 0], z)))();
      }
      o.default = O;
    }, function(l, o, t) {
      l.exports = t(180);
    }, function(l, o, t) {
      var s = t(8), u = t(71).f, f = t(100), d = t(9), m = t(39), T = t(19), S = t(16), w = function(g) {
        var x = function(M, y, h) {
          if (this instanceof g) {
            switch (arguments.length) {
              case 0:
                return new g();
              case 1:
                return new g(M);
              case 2:
                return new g(M, y);
            }
            return new g(M, y, h);
          }
          return g.apply(this, arguments);
        };
        return x.prototype = g.prototype, x;
      };
      l.exports = function(b, g) {
        var x = b.target, v = b.global, M = b.stat, y = b.proto, h = v ? s : M ? s[x] : (s[x] || {}).prototype, E = v ? d : d[x] || (d[x] = {}), C = E.prototype, R, F, B, O, z, I, U, H, $;
        for (O in g)
          R = f(v ? O : x + (M ? "." : "#") + O, b.forced), F = !R && h && S(h, O), I = E[O], F && (b.noTargetGet ? ($ = u(h, O), U = $ && $.value) : U = h[O]), z = F && U ? U : g[O], !(F && Pt(I) === Pt(z)) && (b.bind && F ? H = m(z, s) : b.wrap && F ? H = w(z) : y && typeof z == "function" ? H = m(Function.call, z) : H = z, (b.sham || z && z.sham || I && I.sham) && T(H, "sham", !0), E[O] = H, y && (B = x + "Prototype", S(d, B) || T(d, B, {}), d[B][O] = z, b.real && C && !C[O] && T(C, O, z)));
      };
    }, function(l, o, t) {
      var s = t(0), u = s(t(92)), f = s(t(1)), d = s(t(256)), m = s(t(45)), T = s(t(46)), S = s(t(89)), w = s(t(26));
      (0, f.default)(o, "__esModule", { value: !0 }), o.hexToRgb = o.getRandomCode = o.toArray = o.deepClone = o.isFunction = o.debounce = o.throttle = o.arrForEach = o.forEach = o.replaceSpecialSymbol = o.replaceHtmlSymbol = o.getRandom = o.UA = void 0;
      var b = t(2), g = function() {
        function I() {
          this._ua = navigator.userAgent;
          var U = this._ua.match(/(Edge?)\/(\d+)/);
          this.isOldEdge = !!(U && U[1] == "Edge" && (0, d.default)(U[2]) < 19), this.isFirefox = !!(/Firefox\/\d+/.test(this._ua) && !/Seamonkey\/\d+/.test(this._ua));
        }
        return I.prototype.isIE = function() {
          return "ActiveXObject" in window;
        }, I.prototype.isWebkit = function() {
          return /webkit/i.test(this._ua);
        }, I;
      }();
      o.UA = new g();
      function x(I) {
        var U;
        return I === void 0 && (I = ""), I + (0, m.default)(U = Math.random().toString()).call(U, 2);
      }
      o.getRandom = x;
      function v(I) {
        return I.replace(/</gm, "&lt;").replace(/>/gm, "&gt;").replace(/"/gm, "&quot;").replace(/(\r\n|\r|\n)/g, "<br/>");
      }
      o.replaceHtmlSymbol = v;
      function M(I) {
        return I.replace(/&lt;/gm, "<").replace(/&gt;/gm, ">").replace(/&quot;/gm, '"');
      }
      o.replaceSpecialSymbol = M;
      function y(I, U) {
        for (var H in I)
          if (Object.prototype.hasOwnProperty.call(I, H)) {
            var $ = U(H, I[H]);
            if ($ === !1)
              break;
          }
      }
      o.forEach = y;
      function h(I, U) {
        var H, $, P, Y = I.length || 0;
        for (H = 0; H < Y && ($ = I[H], P = U.call(I, $, H), P !== !1); H++)
          ;
      }
      o.arrForEach = h;
      function E(I, U) {
        U === void 0 && (U = 200);
        var H = !1;
        return function() {
          for (var $ = this, P = [], Y = 0; Y < arguments.length; Y++)
            P[Y] = arguments[Y];
          H || (H = !0, (0, T.default)(function() {
            H = !1, I.call.apply(I, b.__spreadArrays([$], P));
          }, U));
        };
      }
      o.throttle = E;
      function C(I, U) {
        U === void 0 && (U = 200);
        var H = 0;
        return function() {
          for (var $ = this, P = [], Y = 0; Y < arguments.length; Y++)
            P[Y] = arguments[Y];
          H && window.clearTimeout(H), H = (0, T.default)(function() {
            H = 0, I.call.apply(I, b.__spreadArrays([$], P));
          }, U);
        };
      }
      o.debounce = C;
      function R(I) {
        return typeof I == "function";
      }
      o.isFunction = R;
      function F(I) {
        if ((0, u.default)(I) !== "object" || typeof I == "function" || I === null)
          return I;
        var U;
        (0, S.default)(I) && (U = []), (0, S.default)(I) || (U = {});
        for (var H in I)
          Object.prototype.hasOwnProperty.call(I, H) && (U[H] = F(I[H]));
        return U;
      }
      o.deepClone = F;
      function B(I) {
        return (0, m.default)(Array.prototype).call(I);
      }
      o.toArray = B;
      function O() {
        var I;
        return (0, m.default)(I = Math.random().toString(36)).call(I, -5);
      }
      o.getRandomCode = O;
      function z(I) {
        var U = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(I);
        if (U == null)
          return null;
        var H = (0, w.default)(U).call(U, function(Q) {
          return (0, d.default)(Q, 16);
        }), $ = H[1], P = H[2], Y = H[3];
        return "rgb(" + $ + ", " + P + ", " + Y + ")";
      }
      o.hexToRgb = z;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.EMPTY_P_REGEX = o.EMPTY_P_LAST_REGEX = o.EMPTY_P = o.urlRegex = o.EMPTY_FN = void 0;
      function f() {
      }
      o.EMPTY_FN = f, o.urlRegex = /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&amp;:/~+#]*[\w\-@?^=%&amp;/~+#])?/, o.EMPTY_P = '<p data-we-empty-p=""><br></p>', o.EMPTY_P_LAST_REGEX = /<p data-we-empty-p=""><br\/?><\/p>$/gim, o.EMPTY_P_REGEX = /<p data-we-empty-p="">/gim;
    }, function(l, o, t) {
      (function(s) {
        var u = function(d) {
          return d && d.Math == Math && d;
        };
        l.exports = u((typeof globalThis > "u" ? "undefined" : Pt(globalThis)) == "object" && globalThis) || u((typeof window > "u" ? "undefined" : Pt(window)) == "object" && window) || u((typeof self > "u" ? "undefined" : Pt(self)) == "object" && self) || u(Pt(s) == "object" && s) || Function("return this")();
      }).call(this, t(145));
    }, function(l, o) {
      l.exports = {};
    }, function(l, o, t) {
      var s = t(8), u = t(74), f = t(16), d = t(64), m = t(76), T = t(105), S = u("wks"), w = s.Symbol, b = T ? w : w && w.withoutSetter || d;
      l.exports = function(g) {
        return f(S, g) || (m && f(w, g) ? S[g] = w[g] : S[g] = b("Symbol." + g)), S[g];
      };
    }, function(l, o) {
      l.exports = function(t) {
        try {
          return !!t();
        } catch {
          return !0;
        }
      };
    }, function(l, o, t) {
      var s = t(9), u = t(16), f = t(93), d = t(18).f;
      l.exports = function(m) {
        var T = s.Symbol || (s.Symbol = {});
        u(T, m) || d(T, m, { value: f.f(m) });
      };
    }, function(l, o) {
      l.exports = function(t) {
        return Pt(t) === "object" ? t !== null : typeof t == "function";
      };
    }, function(l, o, t) {
      var s = t(11);
      l.exports = !s(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] != 7;
      });
    }, function(l, o, t) {
      var s = t(9);
      l.exports = function(u) {
        return s[u + "Prototype"];
      };
    }, function(l, o) {
      var t = {}.hasOwnProperty;
      l.exports = function(s, u) {
        return t.call(s, u);
      };
    }, function(l, o, t) {
      l.exports = t(192);
    }, function(l, o, t) {
      var s = t(14), u = t(99), f = t(25), d = t(60), m = Object.defineProperty;
      o.f = s ? m : function(S, w, b) {
        if (f(S), w = d(w, !0), f(b), u)
          try {
            return m(S, w, b);
          } catch {
          }
        if ("get" in b || "set" in b)
          throw TypeError("Accessors not supported");
        return "value" in b && (S[w] = b.value), S;
      };
    }, function(l, o, t) {
      var s = t(14), u = t(18), f = t(48);
      l.exports = s ? function(d, m, T) {
        return u.f(d, m, f(1, T));
      } : function(d, m, T) {
        return d[m] = T, d;
      };
    }, function(l, o, t) {
      var s = function() {
        var h;
        return function() {
          return typeof h > "u" && (h = Boolean(window && document && document.all && !window.atob)), h;
        };
      }(), u = function() {
        var h = {};
        return function(C) {
          if (typeof h[C] > "u") {
            var R = document.querySelector(C);
            if (window.HTMLIFrameElement && R instanceof window.HTMLIFrameElement)
              try {
                R = R.contentDocument.head;
              } catch {
                R = null;
              }
            h[C] = R;
          }
          return h[C];
        };
      }(), f = [];
      function d(y) {
        for (var h = -1, E = 0; E < f.length; E++)
          if (f[E].identifier === y) {
            h = E;
            break;
          }
        return h;
      }
      function m(y, h) {
        for (var E = {}, C = [], R = 0; R < y.length; R++) {
          var F = y[R], B = h.base ? F[0] + h.base : F[0], O = E[B] || 0, z = "".concat(B, " ").concat(O);
          E[B] = O + 1;
          var I = d(z), U = { css: F[1], media: F[2], sourceMap: F[3] };
          I !== -1 ? (f[I].references++, f[I].updater(U)) : f.push({ identifier: z, updater: M(U, h), references: 1 }), C.push(z);
        }
        return C;
      }
      function T(y) {
        var h = document.createElement("style"), E = y.attributes || {};
        if (typeof E.nonce > "u") {
          var C = t.nc;
          C && (E.nonce = C);
        }
        if (Object.keys(E).forEach(function(F) {
          h.setAttribute(F, E[F]);
        }), typeof y.insert == "function")
          y.insert(h);
        else {
          var R = u(y.insert || "head");
          if (!R)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          R.appendChild(h);
        }
        return h;
      }
      function S(y) {
        if (y.parentNode === null)
          return !1;
        y.parentNode.removeChild(y);
      }
      var w = function() {
        var h = [];
        return function(C, R) {
          return h[C] = R, h.filter(Boolean).join(`
`);
        };
      }();
      function b(y, h, E, C) {
        var R = E ? "" : C.media ? "@media ".concat(C.media, " {").concat(C.css, "}") : C.css;
        if (y.styleSheet)
          y.styleSheet.cssText = w(h, R);
        else {
          var F = document.createTextNode(R), B = y.childNodes;
          B[h] && y.removeChild(B[h]), B.length ? y.insertBefore(F, B[h]) : y.appendChild(F);
        }
      }
      function g(y, h, E) {
        var C = E.css, R = E.media, F = E.sourceMap;
        if (R ? y.setAttribute("media", R) : y.removeAttribute("media"), F && typeof btoa < "u" && (C += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(F)))), " */")), y.styleSheet)
          y.styleSheet.cssText = C;
        else {
          for (; y.firstChild; )
            y.removeChild(y.firstChild);
          y.appendChild(document.createTextNode(C));
        }
      }
      var x = null, v = 0;
      function M(y, h) {
        var E, C, R;
        if (h.singleton) {
          var F = v++;
          E = x || (x = T(h)), C = b.bind(null, E, F, !1), R = b.bind(null, E, F, !0);
        } else
          E = T(h), C = g.bind(null, E, h), R = function() {
            S(E);
          };
        return C(y), function(O) {
          if (O) {
            if (O.css === y.css && O.media === y.media && O.sourceMap === y.sourceMap)
              return;
            C(y = O);
          } else
            R();
        };
      }
      l.exports = function(y, h) {
        h = h || {}, !h.singleton && typeof h.singleton != "boolean" && (h.singleton = s()), y = y || [];
        var E = m(y, h);
        return function(R) {
          if (R = R || [], Object.prototype.toString.call(R) === "[object Array]") {
            for (var F = 0; F < E.length; F++) {
              var B = E[F], O = d(B);
              f[O].references--;
            }
            for (var z = m(R, h), I = 0; I < E.length; I++) {
              var U = E[I], H = d(U);
              f[H].references === 0 && (f[H].updater(), f.splice(H, 1));
            }
            E = z;
          }
        };
      };
    }, function(l, o, t) {
      l.exports = function(f) {
        var d = [];
        return d.toString = function() {
          return this.map(function(T) {
            var S = s(T, f);
            return T[2] ? "@media ".concat(T[2], " {").concat(S, "}") : S;
          }).join("");
        }, d.i = function(m, T, S) {
          typeof m == "string" && (m = [[null, m, ""]]);
          var w = {};
          if (S)
            for (var b = 0; b < this.length; b++) {
              var g = this[b][0];
              g != null && (w[g] = !0);
            }
          for (var x = 0; x < m.length; x++) {
            var v = [].concat(m[x]);
            S && w[v[0]] || (T && (v[2] ? v[2] = "".concat(T, " and ").concat(v[2]) : v[2] = T), d.push(v));
          }
        }, d;
      };
      function s(f, d) {
        var m = f[1] || "", T = f[3];
        if (!T)
          return m;
        if (d && typeof btoa == "function") {
          var S = u(T), w = T.sources.map(function(b) {
            return "/*# sourceURL=".concat(T.sourceRoot || "").concat(b, " */");
          });
          return [m].concat(w).concat([S]).join(`
`);
        }
        return [m].join(`
`);
      }
      function u(f) {
        var d = btoa(unescape(encodeURIComponent(JSON.stringify(f)))), m = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d);
        return "/*# ".concat(m, " */");
      }
    }, function(l, o, t) {
      var s = t(14), u = t(11), f = t(16), d = Object.defineProperty, m = {}, T = function(w) {
        throw w;
      };
      l.exports = function(S, w) {
        if (f(m, S))
          return m[S];
        w || (w = {});
        var b = [][S], g = f(w, "ACCESSORS") ? w.ACCESSORS : !1, x = f(w, 0) ? w[0] : T, v = f(w, 1) ? w[1] : void 0;
        return m[S] = !!b && !u(function() {
          if (g && !s)
            return !0;
          var M = { length: -1 };
          g ? d(M, 1, { enumerable: !0, get: T }) : M[1] = 1, b.call(M, x, v);
        });
      };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(95)), m = function(T) {
        f.__extends(S, T);
        function S(w, b) {
          return T.call(this, w, b) || this;
        }
        return S;
      }(d.default);
      o.default = m;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(4)), d = s(t(46));
      (0, u.default)(o, "__esModule", { value: !0 });
      var m = t(2), T = m.__importDefault(t(3)), S = m.__importDefault(t(95)), w = m.__importDefault(t(133)), b = function(g) {
        m.__extends(x, g);
        function x(v, M, y) {
          var h = g.call(this, v, M) || this;
          y.title = M.i18next.t("menus.dropListMenu." + y.title);
          var E = M.config.lang === "zh-CN" ? "" : "w-e-drop-list-tl";
          if (E !== "" && y.type === "list") {
            var C;
            (0, f.default)(C = y.list).call(C, function(F) {
              var B = F.$elem, O = T.default(B.children());
              if (O.length > 0) {
                var z = O == null ? void 0 : O.getNodeName();
                z && z === "I" && B.addClass(E);
              }
            });
          }
          var R = new w.default(h, y);
          return h.dropList = R, v.on("click", function() {
            var F;
            M.selection.getRange() != null && (v.css("z-index", M.zIndex.get("menu")), (0, f.default)(F = M.txt.eventHooks.dropListMenuHoverEvents).call(F, function(B) {
              return B();
            }), R.show());
          }).on("mouseleave", function() {
            v.css("z-index", "auto"), R.hideTimeoutId = (0, d.default)(function() {
              R.hide();
            });
          }), h;
        }
        return x;
      }(S.default);
      o.default = b;
    }, function(l, o, t) {
      var s = t(13);
      l.exports = function(u) {
        if (!s(u))
          throw TypeError(String(u) + " is not an object");
        return u;
      };
    }, function(l, o, t) {
      l.exports = t(188);
    }, function(l, o, t) {
      l.exports = t(201);
    }, function(l, o, t) {
      var s = t(72), u = t(49);
      l.exports = function(f) {
        return s(u(f));
      };
    }, function(l, o, t) {
      var s = t(49);
      l.exports = function(u) {
        return Object(s(u));
      };
    }, function(l, o, t) {
      var s = t(39), u = t(72), f = t(29), d = t(34), m = t(88), T = [].push, S = function(b) {
        var g = b == 1, x = b == 2, v = b == 3, M = b == 4, y = b == 6, h = b == 5 || y;
        return function(E, C, R, F) {
          for (var B = f(E), O = u(B), z = s(C, R, 3), I = d(O.length), U = 0, H = F || m, $ = g ? H(E, I) : x ? H(E, 0) : void 0, P, Y; I > U; U++)
            if ((h || U in O) && (P = O[U], Y = z(P, U, B), b)) {
              if (g)
                $[U] = Y;
              else if (Y)
                switch (b) {
                  case 3:
                    return !0;
                  case 5:
                    return P;
                  case 6:
                    return U;
                  case 2:
                    T.call($, P);
                }
              else if (M)
                return !1;
            }
          return y ? -1 : v || M ? M : $;
        };
      };
      l.exports = {
        forEach: S(0),
        map: S(1),
        filter: S(2),
        some: S(3),
        every: S(4),
        find: S(5),
        findIndex: S(6)
      };
    }, function(l, o, t) {
      l.exports = t(283);
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(4)), d = s(t(31)), m = s(t(131));
      (0, u.default)(o, "__esModule", { value: !0 });
      var T = t(2), S = T.__importDefault(t(3)), w = t(7), b = function() {
        function g(x, v) {
          this.menu = x, this.conf = v, this.$container = S.default('<div class="w-e-panel-container"></div>');
          var M = x.editor;
          M.txt.eventHooks.clickEvents.push(g.hideCurAllPanels), M.txt.eventHooks.toolbarClickEvents.push(g.hideCurAllPanels), M.txt.eventHooks.dropListMenuHoverEvents.push(g.hideCurAllPanels);
        }
        return g.prototype.create = function() {
          var x = this, v = this.menu;
          if (!g.createdMenus.has(v)) {
            var M = this.conf, y = this.$container, h = M.width || 300, E = v.editor.$toolbarElem.getBoundingClientRect(), C = v.$elem.getBoundingClientRect(), R = E.height + E.top - C.top, F = (E.width - h) / 2 + E.left - C.left, B = 300;
            Math.abs(F) > B && (C.left < document.documentElement.clientWidth / 2 ? F = -C.width / 2 : F = -h + C.width / 2), y.css("width", h + "px").css("margin-top", R + "px").css("margin-left", F + "px").css("z-index", v.editor.zIndex.get("panel"));
            var O = S.default('<i class="w-e-icon-close w-e-panel-close"></i>');
            y.append(O), O.on("click", function() {
              x.remove();
            });
            var z = S.default('<ul class="w-e-panel-tab-title"></ul>'), I = S.default('<div class="w-e-panel-tab-content"></div>');
            y.append(z).append(I);
            var U = M.height;
            U && I.css("height", U + "px").css("overflow-y", "auto");
            var H = M.tabs || [], $ = [], P = [];
            (0, f.default)(H).call(H, function(Q, K) {
              if (!!Q) {
                var q = Q.title || "", X = Q.tpl || "", _ = S.default('<li class="w-e-item">' + q + "</li>");
                z.append(_);
                var le = S.default(X);
                I.append(le), $.push(_), P.push(le), K === 0 ? (_.data("active", !0), _.addClass("w-e-active")) : le.hide(), _.on("click", function() {
                  _.data("active") || ((0, f.default)($).call($, function(Se) {
                    Se.data("active", !1), Se.removeClass("w-e-active");
                  }), (0, f.default)(P).call(P, function(Se) {
                    Se.hide();
                  }), _.data("active", !0), _.addClass("w-e-active"), le.show());
                });
              }
            }), y.on("click", function(Q) {
              Q.stopPropagation();
            }), v.$elem.append(y), (0, f.default)(H).call(H, function(Q, K) {
              if (!!Q) {
                var q = Q.events || [];
                (0, f.default)(q).call(q, function(X) {
                  var _, le = X.selector, Se = X.type, ve = X.fn || w.EMPTY_FN, ce = P[K], ae = (_ = X.bindEnter) !== null && _ !== void 0 ? _ : !1, re = function(pe) {
                    return T.__awaiter(x, void 0, void 0, function() {
                      var Pe;
                      return T.__generator(this, function(be) {
                        switch (be.label) {
                          case 0:
                            return pe.stopPropagation(), [
                              4,
                              ve(pe)
                            ];
                          case 1:
                            return Pe = be.sent(), Pe && this.remove(), [2];
                        }
                      });
                    });
                  };
                  (0, d.default)(ce).call(ce, le).on(Se, re), ae && Se === "click" && ce.on("keyup", function(se) {
                    se.keyCode == 13 && re(se);
                  });
                });
              }
            });
            var Y = (0, d.default)(y).call(y, "input[type=text],textarea");
            Y.length && Y.get(0).focus(), g.hideCurAllPanels(), v.setPanel(this), g.createdMenus.add(v);
          }
        }, g.prototype.remove = function() {
          var x = this.menu, v = this.$container;
          v && v.remove(), g.createdMenus.delete(x);
        }, g.hideCurAllPanels = function() {
          var x;
          g.createdMenus.size !== 0 && (0, f.default)(x = g.createdMenus).call(x, function(v) {
            var M = v.panel;
            M && M.remove();
          });
        }, g.createdMenus = new m.default(), g;
      }();
      o.default = b;
    }, function(l, o) {
      var t = {}.toString;
      l.exports = function(s) {
        return t.call(s).slice(8, -1);
      };
    }, function(l, o, t) {
      var s = t(62), u = Math.min;
      l.exports = function(f) {
        return f > 0 ? u(s(f), 9007199254740991) : 0;
      };
    }, function(l, o, t) {
      var s = t(9), u = t(8), f = function(m) {
        return typeof m == "function" ? m : void 0;
      };
      l.exports = function(d, m) {
        return arguments.length < 2 ? f(s[d]) || f(u[d]) : s[d] && s[d][m] || u[d] && u[d][m];
      };
    }, function(l, o, t) {
      var s = t(81), u = t(18).f, f = t(19), d = t(16), m = t(170), T = t(10), S = T("toStringTag");
      l.exports = function(w, b, g, x) {
        if (w) {
          var v = g ? w : w.prototype;
          d(v, S) || u(v, S, { configurable: !0, value: b }), x && !s && f(v, "toString", m);
        }
      };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(95)), m = function(T) {
        f.__extends(S, T);
        function S(w, b) {
          return T.call(this, w, b) || this;
        }
        return S.prototype.setPanel = function(w) {
          this.panel = w;
        }, S;
      }(d.default);
      o.default = m;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(4)), d = s(t(57));
      (0, u.default)(o, "__esModule", { value: !0 });
      var m = t(2), T = m.__importDefault(t(3)), S = function() {
        function w(b, g, x) {
          this.editor = b, this.$targetElem = g, this.conf = x, this._show = !1, this._isInsertTextContainer = !1;
          var v = T.default("<div></div>");
          v.addClass("w-e-tooltip"), this.$container = v;
        }
        return w.prototype.getPositionData = function() {
          var b = this.$container, g = 0, x = 0, v = 20, M = document.documentElement.scrollTop, y = this.$targetElem.getBoundingClientRect(), h = this.editor.$textElem.getBoundingClientRect(), E = this.$targetElem.getOffsetData(), C = T.default(E.parent), R = this.editor.$textElem.elems[0].scrollTop;
          if (this._isInsertTextContainer = C.equal(this.editor.$textContainerElem), this._isInsertTextContainer) {
            var F = C.getBoundingClientRect().height, B = E.top, O = E.left, z = E.height, I = B - R;
            I > v + 5 ? (g = I - v - 15, b.addClass("w-e-tooltip-up")) : I + z + v < F ? (g = I + z + 10, b.addClass("w-e-tooltip-down")) : (g = (I > 0 ? I : 0) + v + 10, b.addClass("w-e-tooltip-down")), O < 0 ? x = 0 : x = O;
          } else
            y.top < v || y.top - h.top < v ? (g = y.bottom + M + 5, b.addClass("w-e-tooltip-down")) : (g = y.top + M - v - 15, b.addClass("w-e-tooltip-up")), y.left < 0 ? x = 0 : x = y.left;
          return { top: g, left: x };
        }, w.prototype.appendMenus = function() {
          var b = this, g = this.conf, x = this.editor, v = this.$targetElem, M = this.$container;
          (0, f.default)(g).call(g, function(y, h) {
            var E = y.$elem, C = T.default("<div></div>");
            C.addClass("w-e-tooltip-item-wrapper "), C.append(E), M.append(C), E.on("click", function(R) {
              R.preventDefault();
              var F = y.onClick(x, v);
              F && b.remove();
            });
          });
        }, w.prototype.create = function() {
          var b, g, x = this.editor, v = this.$container;
          this.appendMenus();
          var M = this.getPositionData(), y = M.top, h = M.left;
          v.css("top", y + "px"), v.css("left", h + "px"), v.css("z-index", x.zIndex.get("tooltip")), this._isInsertTextContainer ? this.editor.$textContainerElem.append(v) : T.default("body").append(v), this._show = !0, x.beforeDestroy((0, d.default)(b = this.remove).call(b, this)), x.txt.eventHooks.onBlurEvents.push((0, d.default)(g = this.remove).call(g, this));
        }, w.prototype.remove = function() {
          this.$container.remove(), this._show = !1;
        }, (0, u.default)(w.prototype, "isShow", {
          get: function() {
            return this._show;
          },
          enumerable: !1,
          configurable: !0
        }), w;
      }();
      o.default = S;
    }, function(l, o, t) {
      var s = t(40);
      l.exports = function(u, f, d) {
        if (s(u), f === void 0)
          return u;
        switch (d) {
          case 0:
            return function() {
              return u.call(f);
            };
          case 1:
            return function(m) {
              return u.call(f, m);
            };
          case 2:
            return function(m, T) {
              return u.call(f, m, T);
            };
          case 3:
            return function(m, T, S) {
              return u.call(f, m, T, S);
            };
        }
        return function() {
          return u.apply(f, arguments);
        };
      };
    }, function(l, o) {
      l.exports = function(t) {
        if (typeof t != "function")
          throw TypeError(String(t) + " is not a function");
        return t;
      };
    }, function(l, o, t) {
      var s = t(165), u = t(8), f = t(13), d = t(19), m = t(16), T = t(63), S = t(51), w = u.WeakMap, b, g, x, v = function(B) {
        return x(B) ? g(B) : b(B, {});
      }, M = function(B) {
        return function(O) {
          var z;
          if (!f(O) || (z = g(O)).type !== B)
            throw TypeError("Incompatible receiver, " + B + " required");
          return z;
        };
      };
      if (s) {
        var y = new w(), h = y.get, E = y.has, C = y.set;
        b = function(B, O) {
          return C.call(y, B, O), O;
        }, g = function(B) {
          return h.call(y, B) || {};
        }, x = function(B) {
          return E.call(y, B);
        };
      } else {
        var R = T("state");
        S[R] = !0, b = function(B, O) {
          return d(B, R, O), O;
        }, g = function(B) {
          return m(B, R) ? B[R] : {};
        }, x = function(B) {
          return m(B, R);
        };
      }
      l.exports = { set: b, get: g, has: x, enforce: v, getterFor: M };
    }, function(l, o) {
      l.exports = !0;
    }, function(l, o) {
      l.exports = {};
    }, function(l, o, t) {
      l.exports = t(213);
    }, function(l, o, t) {
      l.exports = t(261);
    }, function(l, o, t) {
      l.exports = t(265);
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 }), o.createElementFragment = o.createDocumentFragment = o.createElement = o.insertBefore = o.getEndPoint = o.getStartPoint = o.updateRange = o.filterSelectionNodes = void 0;
      var d = t(2), m = t(137), T = d.__importDefault(t(3));
      function S(h) {
        var E = [];
        return (0, f.default)(h).call(h, function(C) {
          var R = C.getNodeName();
          if (R !== m.ListType.OrderedList && R !== m.ListType.UnorderedList)
            E.push(C);
          else if (C.prior)
            E.push(C.prior);
          else {
            var F = C.children();
            F == null || (0, f.default)(F).call(F, function(B) {
              E.push(T.default(B));
            });
          }
        }), E;
      }
      o.filterSelectionNodes = S;
      function w(h, E, C) {
        var R = h.selection, F = document.createRange();
        E.length > 1 ? (F.setStart(E.elems[0], 0), F.setEnd(E.elems[E.length - 1], E.elems[E.length - 1].childNodes.length)) : F.selectNodeContents(E.elems[0]), C && F.collapse(!1), R.saveRange(F), R.restoreSelection();
      }
      o.updateRange = w;
      function b(h) {
        var E;
        return h.prior ? h.prior : T.default((E = h.children()) === null || E === void 0 ? void 0 : E.elems[0]);
      }
      o.getStartPoint = b;
      function g(h) {
        var E;
        return h.prior ? h.prior : T.default((E = h.children()) === null || E === void 0 ? void 0 : E.last().elems[0]);
      }
      o.getEndPoint = g;
      function x(h, E, C) {
        C === void 0 && (C = null), h.parent().elems[0].insertBefore(E, C);
      }
      o.insertBefore = x;
      function v(h) {
        return document.createElement(h);
      }
      o.createElement = v;
      function M() {
        return document.createDocumentFragment();
      }
      o.createDocumentFragment = M;
      function y(h, E, C) {
        return C === void 0 && (C = "li"), (0, f.default)(h).call(h, function(R) {
          var F = v(C);
          F.innerHTML = R.html(), E.appendChild(F), R.remove();
        }), E;
      }
      o.createElementFragment = y;
    }, function(l, o) {
      l.exports = function(t, s) {
        return { enumerable: !(t & 1), configurable: !(t & 2), writable: !(t & 4), value: s };
      };
    }, function(l, o) {
      l.exports = function(t) {
        if (t == null)
          throw TypeError("Can't call method on " + t);
        return t;
      };
    }, function(l, o, t) {
      var s = t(164).charAt, u = t(41), f = t(75), d = "String Iterator", m = u.set, T = u.getterFor(d);
      f(String, "String", function(S) {
        m(this, { type: d, string: String(S), index: 0 });
      }, function() {
        var w = T(this), b = w.string, g = w.index, x;
        return g >= b.length ? { value: void 0, done: !0 } : (x = s(b, g), w.index += x.length, { value: x, done: !1 });
      });
    }, function(l, o) {
      l.exports = {};
    }, function(l, o, t) {
      var s = t(106), u = t(80);
      l.exports = Object.keys || function(d) {
        return s(d, u);
      };
    }, function(l, o, t) {
      var s = t(19);
      l.exports = function(u, f, d, m) {
        m && m.enumerable ? u[f] = d : s(u, f, d);
      };
    }, function(l, o, t) {
      t(173);
      var s = t(174), u = t(8), f = t(65), d = t(19), m = t(43), T = t(10), S = T("toStringTag");
      for (var w in s) {
        var b = u[w], g = b && b.prototype;
        g && f(g) !== S && d(g, S, w), m[w] = m.Array;
      }
    }, function(l, o, t) {
      var s = t(33);
      l.exports = Array.isArray || function(f) {
        return s(f) == "Array";
      };
    }, function(l, o, t) {
      var s = t(11), u = t(10), f = t(86), d = u("species");
      l.exports = function(m) {
        return f >= 51 || !s(function() {
          var T = [], S = T.constructor = {};
          return S[d] = function() {
            return { foo: 1 };
          }, T[m](Boolean).foo !== 1;
        });
      };
    }, function(l, o, t) {
      l.exports = t(222);
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.ListHandle = void 0;
      var f = t(2), d = f.__importDefault(t(373)), m = function() {
        function T(S) {
          this.options = S, this.selectionRangeElem = new d.default();
        }
        return T;
      }();
      o.ListHandle = m;
    }, function(l, o, t) {
      var s = {}.propertyIsEnumerable, u = Object.getOwnPropertyDescriptor, f = u && !s.call({ 1: 2 }, 1);
      o.f = f ? function(m) {
        var T = u(this, m);
        return !!T && T.enumerable;
      } : s;
    }, function(l, o, t) {
      var s = t(13);
      l.exports = function(u, f) {
        if (!s(u))
          return u;
        var d, m;
        if (f && typeof (d = u.toString) == "function" && !s(m = d.call(u)) || typeof (d = u.valueOf) == "function" && !s(m = d.call(u)) || !f && typeof (d = u.toString) == "function" && !s(m = d.call(u)))
          return m;
        throw TypeError("Can't convert object to primitive value");
      };
    }, function(l, o) {
    }, function(l, o) {
      var t = Math.ceil, s = Math.floor;
      l.exports = function(u) {
        return isNaN(u = +u) ? 0 : (u > 0 ? s : t)(u);
      };
    }, function(l, o, t) {
      var s = t(74), u = t(64), f = s("keys");
      l.exports = function(d) {
        return f[d] || (f[d] = u(d));
      };
    }, function(l, o) {
      var t = 0, s = Math.random();
      l.exports = function(u) {
        return "Symbol(" + String(u === void 0 ? "" : u) + ")_" + (++t + s).toString(36);
      };
    }, function(l, o, t) {
      var s = t(81), u = t(33), f = t(10), d = f("toStringTag"), m = u(function() {
        return arguments;
      }()) == "Arguments", T = function(w, b) {
        try {
          return w[b];
        } catch {
        }
      };
      l.exports = s ? u : function(S) {
        var w, b, g;
        return S === void 0 ? "Undefined" : S === null ? "Null" : typeof (b = T(w = Object(S), d)) == "string" ? b : m ? u(w) : (g = u(w)) == "Object" && typeof w.callee == "function" ? "Arguments" : g;
      };
    }, function(l, o, t) {
      var s = t(25), u = t(111), f = t(34), d = t(39), m = t(112), T = t(113), S = function(g, x) {
        this.stopped = g, this.result = x;
      }, w = l.exports = function(b, g, x, v, M) {
        var y = d(g, x, v ? 2 : 1), h, E, C, R, F, B, O;
        if (M)
          h = b;
        else {
          if (E = m(b), typeof E != "function")
            throw TypeError("Target is not iterable");
          if (u(E)) {
            for (C = 0, R = f(b.length); R > C; C++)
              if (F = v ? y(s(O = b[C])[0], O[1]) : y(b[C]), F && F instanceof S)
                return F;
            return new S(!1);
          }
          h = E.call(b);
        }
        for (B = h.next; !(O = B.call(h)).done; )
          if (F = T(h, y, O.value, v), Pt(F) == "object" && F && F instanceof S)
            return F;
        return new S(!1);
      };
      w.stop = function(b) {
        return new S(!0, b);
      };
    }, function(l, o, t) {
      var s = t(11);
      l.exports = function(u, f) {
        var d = [][u];
        return !!d && s(function() {
          d.call(null, f || function() {
            throw 1;
          }, 1);
        });
      };
    }, function(l, o) {
      l.exports = `	
\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF`;
    }, function(l, o, t) {
      var s = t(60), u = t(18), f = t(48);
      l.exports = function(d, m, T) {
        var S = s(m);
        S in d ? u.f(d, S, f(0, T)) : d[S] = T;
      };
    }, function(l, o, t) {
      l.exports = t(209);
    }, function(l, o, t) {
      var s = t(14), u = t(59), f = t(48), d = t(28), m = t(60), T = t(16), S = t(99), w = Object.getOwnPropertyDescriptor;
      o.f = s ? w : function(g, x) {
        if (g = d(g), x = m(x, !0), S)
          try {
            return w(g, x);
          } catch {
          }
        if (T(g, x))
          return f(!u.f.call(g, x), g[x]);
      };
    }, function(l, o, t) {
      var s = t(11), u = t(33), f = "".split;
      l.exports = s(function() {
        return !Object("z").propertyIsEnumerable(0);
      }) ? function(d) {
        return u(d) == "String" ? f.call(d, "") : Object(d);
      } : Object;
    }, function(l, o, t) {
      var s = t(8), u = t(13), f = s.document, d = u(f) && u(f.createElement);
      l.exports = function(m) {
        return d ? f.createElement(m) : {};
      };
    }, function(l, o, t) {
      var s = t(42), u = t(102);
      (l.exports = function(f, d) {
        return u[f] || (u[f] = d !== void 0 ? d : {});
      })("versions", []).push({ version: "3.6.4", mode: s ? "pure" : "global", copyright: "\xA9 2020 Denis Pushkarev (zloirock.ru)" });
    }, function(l, o, t) {
      var s = t(5), u = t(167), f = t(104), d = t(171), m = t(36), T = t(19), S = t(53), w = t(10), b = t(42), g = t(43), x = t(103), v = x.IteratorPrototype, M = x.BUGGY_SAFARI_ITERATORS, y = w("iterator"), h = "keys", E = "values", C = "entries", R = function() {
        return this;
      };
      l.exports = function(F, B, O, z, I, U, H) {
        u(O, B, z);
        var $ = function(ce) {
          if (ce === I && q)
            return q;
          if (!M && ce in Q)
            return Q[ce];
          switch (ce) {
            case h:
              return function() {
                return new O(this, ce);
              };
            case E:
              return function() {
                return new O(this, ce);
              };
            case C:
              return function() {
                return new O(this, ce);
              };
          }
          return function() {
            return new O(this);
          };
        }, P = B + " Iterator", Y = !1, Q = F.prototype, K = Q[y] || Q["@@iterator"] || I && Q[I], q = !M && K || $(I), X = B == "Array" && Q.entries || K, _, le, Se;
        if (X && (_ = f(X.call(new F())), v !== Object.prototype && _.next && (!b && f(_) !== v && (d ? d(_, v) : typeof _[y] != "function" && T(_, y, R)), m(_, P, !0, !0), b && (g[P] = R))), I == E && K && K.name !== E && (Y = !0, q = function() {
          return K.call(this);
        }), (!b || H) && Q[y] !== q && T(Q, y, q), g[B] = q, I)
          if (le = { values: $(E), keys: U ? q : $(h), entries: $(C) }, H)
            for (Se in le)
              (M || Y || !(Se in Q)) && S(Q, Se, le[Se]);
          else
            s({ target: B, proto: !0, forced: M || Y }, le);
        return le;
      };
    }, function(l, o, t) {
      var s = t(11);
      l.exports = !!Object.getOwnPropertySymbols && !s(function() {
        return !String(Symbol());
      });
    }, function(l, o, t) {
      var s = t(25), u = t(169), f = t(80), d = t(51), m = t(107), T = t(73), S = t(63), w = ">", b = "<", g = "prototype", x = "script", v = S("IE_PROTO"), M = function() {
      }, y = function(B) {
        return b + x + w + B + b + "/" + x + w;
      }, h = function(B) {
        B.write(y("")), B.close();
        var O = B.parentWindow.Object;
        return B = null, O;
      }, E = function() {
        var B = T("iframe"), O = "java" + x + ":", z;
        return B.style.display = "none", m.appendChild(B), B.src = String(O), z = B.contentWindow.document, z.open(), z.write(y("document.F=Object")), z.close(), z.F;
      }, C, R = function() {
        try {
          C = document.domain && new ActiveXObject("htmlfile");
        } catch {
        }
        R = C ? h(C) : E();
        for (var B = f.length; B--; )
          delete R[g][f[B]];
        return R();
      };
      d[v] = !0, l.exports = Object.create || function(B, O) {
        var z;
        return B !== null ? (M[g] = s(B), z = new M(), M[g] = null, z[v] = B) : z = R(), O === void 0 ? z : u(z, O);
      };
    }, function(l, o, t) {
      var s = t(28), u = t(34), f = t(79), d = function(T) {
        return function(S, w, b) {
          var g = s(S), x = u(g.length), v = f(b, x), M;
          if (T && w != w) {
            for (; x > v; )
              if (M = g[v++], M != M)
                return !0;
          } else
            for (; x > v; v++)
              if ((T || v in g) && g[v] === w)
                return T || v || 0;
          return !T && -1;
        };
      };
      l.exports = {
        includes: d(!0),
        indexOf: d(!1)
      };
    }, function(l, o, t) {
      var s = t(62), u = Math.max, f = Math.min;
      l.exports = function(d, m) {
        var T = s(d);
        return T < 0 ? u(T + m, 0) : f(T, m);
      };
    }, function(l, o) {
      l.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    }, function(l, o, t) {
      var s = t(10), u = s("toStringTag"), f = {};
      f[u] = "z", l.exports = String(f) === "[object z]";
    }, function(l, o) {
      l.exports = function() {
      };
    }, function(l, o) {
      l.exports = function(t, s, u) {
        if (!(t instanceof s))
          throw TypeError("Incorrect " + (u ? u + " " : "") + "invocation");
        return t;
      };
    }, function(l, o, t) {
      var s = t(35);
      l.exports = s("navigator", "userAgent") || "";
    }, function(l, o, t) {
      var s = t(40), u = function(d) {
        var m, T;
        this.promise = new d(function(S, w) {
          if (m !== void 0 || T !== void 0)
            throw TypeError("Bad Promise constructor");
          m = S, T = w;
        }), this.resolve = s(m), this.reject = s(T);
      };
      l.exports.f = function(f) {
        return new u(f);
      };
    }, function(l, o, t) {
      var s = t(8), u = t(84), f = s.process, d = f && f.versions, m = d && d.v8, T, S;
      m ? (T = m.split("."), S = T[0] + T[1]) : u && (T = u.match(/Edge\/(\d+)/), (!T || T[1] >= 74) && (T = u.match(/Chrome\/(\d+)/), T && (S = T[1]))), l.exports = S && +S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), m = d.__importDefault(t(3)), T = t(6), S = d.__importDefault(t(267)), w = d.__importDefault(t(280)), b = d.__importDefault(t(281)), g = d.__importDefault(t(282)), x = d.__importDefault(t(301)), v = d.__importStar(t(416)), M = d.__importDefault(t(417)), y = d.__importDefault(t(418)), h = d.__importDefault(t(419)), E = d.__importStar(t(420)), C = d.__importDefault(t(423)), R = d.__importDefault(t(424)), F = d.__importDefault(t(425)), B = d.__importDefault(t(427)), O = d.__importDefault(t(437)), z = d.__importDefault(t(440)), I = d.__importStar(t(441)), U = d.__importDefault(t(23)), H = d.__importDefault(t(133)), $ = d.__importDefault(t(24)), P = d.__importDefault(t(32)), Y = d.__importDefault(t(37)), Q = d.__importDefault(t(38)), K = 1, q = function() {
        function X(_, le) {
          this.pluginsFunctionList = {}, this.beforeDestroyHooks = [], this.id = "wangEditor-" + K++, this.toolbarSelector = _, this.textSelector = le, v.selectorValidator(this), this.config = T.deepClone(S.default), this.$toolbarElem = m.default("<div></div>"), this.$textContainerElem = m.default("<div></div>"), this.$textElem = m.default("<div></div>"), this.toolbarElemId = "", this.textElemId = "", this.isFocus = !1, this.isComposing = !1, this.isCompatibleMode = !1, this.selection = new w.default(this), this.cmd = new b.default(this), this.txt = new g.default(this), this.menus = new x.default(this), this.zIndex = new R.default(), this.change = new F.default(this), this.history = new B.default(this), this.onSelectionChange = new z.default(this);
          var Se = O.default(this), ve = Se.disable, ce = Se.enable;
          this.disable = ve, this.enable = ce, this.isEnable = !0;
        }
        return X.prototype.initSelection = function(_) {
          M.default(this, _);
        }, X.prototype.create = function() {
          this.zIndex.init(this), this.isCompatibleMode = this.config.compatibleMode(), this.isCompatibleMode || (this.config.onchangeTimeout = 30), h.default(this), v.default(this), this.txt.init(), this.menus.init(), E.default(this), this.initSelection(!0), y.default(this), this.change.observe(), this.history.observe(), I.default(this);
        }, X.prototype.beforeDestroy = function(_) {
          return this.beforeDestroyHooks.push(_), this;
        }, X.prototype.destroy = function() {
          var _, le = this;
          (0, f.default)(_ = this.beforeDestroyHooks).call(_, function(Se) {
            return Se.call(le);
          }), this.$toolbarElem.remove(), this.$textContainerElem.remove();
        }, X.prototype.fullScreen = function() {
          E.setFullScreen(this);
        }, X.prototype.unFullScreen = function() {
          E.setUnFullScreen(this);
        }, X.prototype.scrollToHead = function(_) {
          C.default(this, _);
        }, X.registerMenu = function(_, le) {
          !le || typeof le != "function" || (X.globalCustomMenuConstructorList[_] = le);
        }, X.prototype.registerPlugin = function(_, le) {
          I.registerPlugin(_, le, this.pluginsFunctionList);
        }, X.registerPlugin = function(_, le) {
          I.registerPlugin(_, le, X.globalPluginsFunctionList);
        }, X.$ = m.default, X.BtnMenu = U.default, X.DropList = H.default, X.DropListMenu = $.default, X.Panel = P.default, X.PanelMenu = Y.default, X.Tooltip = Q.default, X.globalCustomMenuConstructorList = {}, X.globalPluginsFunctionList = {}, X;
      }();
      o.default = q;
    }, function(l, o, t) {
      var s = t(13), u = t(55), f = t(10), d = f("species");
      l.exports = function(m, T) {
        var S;
        return u(m) && (S = m.constructor, typeof S == "function" && (S === Array || u(S.prototype)) ? S = void 0 : s(S) && (S = S[d], S === null && (S = void 0))), new (S === void 0 ? Array : S)(T === 0 ? 0 : T);
      };
    }, function(l, o, t) {
      l.exports = t(185);
    }, function(l, o, t) {
      var s = t(49), u = t(68), f = "[" + u + "]", d = RegExp("^" + f + f + "*"), m = RegExp(f + f + "*$"), T = function(w) {
        return function(b) {
          var g = String(s(b));
          return w & 1 && (g = g.replace(d, "")), w & 2 && (g = g.replace(m, "")), g;
        };
      };
      l.exports = {
        start: T(1),
        end: T(2),
        trim: T(3)
      };
    }, function(l, o, t) {
      l.exports = t(205);
    }, function(l, o, t) {
      var s = t(227), u = t(230);
      function f(d) {
        return typeof u == "function" && typeof s == "symbol" ? l.exports = f = function(T) {
          return typeof T;
        } : l.exports = f = function(T) {
          return T && typeof u == "function" && T.constructor === u && T !== u.prototype ? "symbol" : typeof T;
        }, f(d);
      }
      l.exports = f;
    }, function(l, o, t) {
      var s = t(10);
      o.f = s;
    }, function(l, o, t) {
      l.exports = t(306);
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), m = d.__importDefault(t(32)), T = function() {
        function S(w, b) {
          var g = this;
          this.$elem = w, this.editor = b, this._active = !1, w.on("click", function(x) {
            var v;
            m.default.hideCurAllPanels(), (0, f.default)(v = b.txt.eventHooks.menuClickEvents).call(v, function(M) {
              return M();
            }), x.stopPropagation(), b.selection.getRange() != null && g.clickHandler(x);
          });
        }
        return S.prototype.clickHandler = function(w) {
        }, S.prototype.active = function() {
          this._active = !0, this.$elem.addClass("w-e-active");
        }, S.prototype.unActive = function() {
          this._active = !1, this.$elem.removeClass("w-e-active");
        }, (0, u.default)(S.prototype, "isActive", {
          get: function() {
            return this._active;
          },
          enumerable: !1,
          configurable: !0
        }), S;
      }();
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(57)), d = s(t(4)), m = s(t(27));
      (0, u.default)(o, "__esModule", { value: !0 });
      var T = t(2), S = t(6), w = T.__importDefault(t(135)), b = T.__importDefault(t(136)), g = function() {
        function x(v) {
          this.editor = v;
        }
        return x.prototype.insertImg = function(v, M, y) {
          var h = this.editor, E = h.config, C = "validate.", R = function(I, U) {
            return U === void 0 && (U = C), h.i18next.t(U + I);
          }, F = M ? 'alt="' + M + '" ' : "", B = y ? 'data-href="' + encodeURIComponent(y) + '" ' : "";
          h.cmd.do("insertHTML", '<img src="' + v + '" ' + F + B + 'style="max-width:100%;" contenteditable="false"/>'), E.linkImgCallback(v, M, y);
          var O = document.createElement("img");
          O.onload = function() {
            O = null;
          }, O.onerror = function() {
            E.customAlert(R("\u63D2\u5165\u56FE\u7247\u9519\u8BEF"), "error", "wangEditor: " + R("\u63D2\u5165\u56FE\u7247\u9519\u8BEF") + "\uFF0C" + R("\u56FE\u7247\u94FE\u63A5") + ' "' + v + '"\uFF0C' + R("\u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25")), O = null;
          }, O.onabort = function() {
            return O = null;
          }, O.src = v;
        }, x.prototype.uploadImg = function(v) {
          var M = this;
          if (!!v.length) {
            var y = this.editor, h = y.config, E = "validate.", C = function(re) {
              return y.i18next.t(E + re);
            }, R = h.uploadImgServer, F = h.uploadImgShowBase64, B = h.uploadImgMaxSize, O = B / 1024 / 1024, z = h.uploadImgMaxLength, I = h.uploadFileName, U = h.uploadImgParams, H = h.uploadImgParamsWithUrl, $ = h.uploadImgHeaders, P = h.uploadImgHooks, Y = h.uploadImgTimeout, Q = h.withCredentials, K = h.customUploadImg;
            if (!(!K && !R && !F)) {
              var q = [], X = [];
              if (S.arrForEach(v, function(ae) {
                if (!!ae) {
                  var re = ae.name || ae.type.replace("/", "."), se = ae.size;
                  if (!(!re || !se)) {
                    var pe = y.config.uploadImgAccept.join("|"), Pe = ".(" + pe + ")$", be = new RegExp(Pe, "i");
                    if (be.test(re) === !1) {
                      X.push("\u3010" + re + "\u3011" + C("\u4E0D\u662F\u56FE\u7247"));
                      return;
                    }
                    if (B < se) {
                      X.push("\u3010" + re + "\u3011" + C("\u5927\u4E8E") + " " + O + "M");
                      return;
                    }
                    q.push(ae);
                  }
                }
              }), X.length) {
                h.customAlert(C("\u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7") + `: 
` + X.join(`
`), "warning");
                return;
              }
              if (q.length === 0) {
                h.customAlert(C("\u4F20\u5165\u7684\u6587\u4EF6\u4E0D\u5408\u6CD5"), "warning");
                return;
              }
              if (q.length > z) {
                h.customAlert(C("\u4E00\u6B21\u6700\u591A\u4E0A\u4F20") + z + C("\u5F20\u56FE\u7247"), "warning");
                return;
              }
              if (K && typeof K == "function") {
                var _;
                K(q, (0, f.default)(_ = this.insertImg).call(_, this));
                return;
              }
              var le = new FormData();
              if ((0, d.default)(q).call(q, function(ae, re) {
                var se = I || ae.name;
                q.length > 1 && (se = se + (re + 1)), le.append(se, ae);
              }), R) {
                var Se = R.split("#");
                R = Se[0];
                var ve = Se[1] || "";
                (0, d.default)(S).call(S, U, function(ae, re) {
                  H && ((0, m.default)(R).call(R, "?") > 0 ? R += "&" : R += "?", R = R + ae + "=" + re), le.append(ae, re);
                }), ve && (R += "#" + ve);
                var ce = w.default(R, { timeout: Y, formData: le, headers: $, withCredentials: !!Q, beforeSend: function(re) {
                  if (P.before)
                    return P.before(re, y, q);
                }, onTimeout: function(re) {
                  h.customAlert(C("\u4E0A\u4F20\u56FE\u7247\u8D85\u65F6"), "error"), P.timeout && P.timeout(re, y);
                }, onProgress: function(re, se) {
                  var pe = new b.default(y);
                  se.lengthComputable && (re = se.loaded / se.total, pe.show(re));
                }, onError: function(re) {
                  h.customAlert(C("\u4E0A\u4F20\u56FE\u7247\u9519\u8BEF"), "error", C("\u4E0A\u4F20\u56FE\u7247\u9519\u8BEF") + "\uFF0C" + C("\u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001") + ": " + re.status), P.error && P.error(re, y);
                }, onFail: function(re, se) {
                  h.customAlert(C("\u4E0A\u4F20\u56FE\u7247\u5931\u8D25"), "error", C("\u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + ("\uFF0C" + C("\u8FD4\u56DE\u7ED3\u679C") + ": ") + se), P.fail && P.fail(re, y, se);
                }, onSuccess: function(re, se) {
                  if (P.customInsert) {
                    var pe;
                    P.customInsert((0, f.default)(pe = M.insertImg).call(pe, M), se, y);
                    return;
                  }
                  if (se.errno != "0") {
                    h.customAlert(C("\u4E0A\u4F20\u56FE\u7247\u5931\u8D25"), "error", C("\u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + "\uFF0C" + C("\u8FD4\u56DE\u7ED3\u679C") + " errno=" + se.errno), P.fail && P.fail(re, y, se);
                    return;
                  }
                  var Pe = se.data;
                  (0, d.default)(Pe).call(Pe, function(be) {
                    typeof be == "string" ? M.insertImg(be) : M.insertImg(be.url, be.alt, be.href);
                  }), P.success && P.success(re, y, se);
                } });
                typeof ce == "string" && h.customAlert(ce, "error");
                return;
              }
              F && S.arrForEach(v, function(ae) {
                var re = M, se = new FileReader();
                se.readAsDataURL(ae), se.onload = function() {
                  if (!!this.result) {
                    var pe = this.result.toString();
                    re.insertImg(pe, pe);
                  }
                };
              });
            }
          }
        }, x;
      }();
      o.default = g;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(410)), d = s(t(4)), m = s(t(45));
      (0, u.default)(o, "__esModule", { value: !0 }), o.dealTextNode = o.isAllTodo = o.isTodo = o.getCursorNextNode = void 0;
      function T(x) {
        return x.length ? x.attr("class") === "w-e-todo" : !1;
      }
      o.isTodo = T;
      function S(x) {
        var v = x.selection.getSelectionRangeTopNodes();
        if (v.length !== 0)
          return (0, f.default)(v).call(v, function(M) {
            return T(M);
          });
      }
      o.isAllTodo = S;
      function w(x, v, M) {
        var y;
        if (!!x.hasChildNodes()) {
          var h = x.cloneNode(), E = !1;
          v.nodeValue === "" && (E = !0);
          var C = [];
          return (0, d.default)(y = x.childNodes).call(y, function(R) {
            if (!b(R, v) && E && (h.appendChild(R.cloneNode(!0)), R.nodeName !== "BR" && C.push(R)), b(R, v)) {
              if (R.nodeType === 1) {
                var F = w(R, v, M);
                F && F.textContent !== "" && (h == null || h.appendChild(F));
              }
              if (R.nodeType === 3 && v.isEqualNode(R)) {
                var B = g(R, M);
                h.textContent = B;
              }
              E = !0;
            }
          }), (0, d.default)(C).call(C, function(R) {
            var F = R;
            F.remove();
          }), h;
        }
      }
      o.getCursorNextNode = w;
      function b(x, v) {
        return x.nodeType === 3 ? x.nodeValue === v.nodeValue : x.contains(v);
      }
      function g(x, v, M) {
        M === void 0 && (M = !0);
        var y = x.nodeValue, h = y == null ? void 0 : (0, m.default)(y).call(y, 0, v);
        if (y = y == null ? void 0 : (0, m.default)(y).call(y, v), !M) {
          var E = y;
          y = h, h = E;
        }
        return x.nodeValue = h, y;
      }
      o.dealTextNode = g;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(430), d = function() {
        function m(T) {
          this.maxSize = T, this.isRe = !1, this.data = new f.CeilStack(T), this.revokeData = new f.CeilStack(T);
        }
        return (0, u.default)(m.prototype, "size", {
          get: function() {
            return [this.data.size, this.revokeData.size];
          },
          enumerable: !1,
          configurable: !0
        }), m.prototype.resetMaxSize = function(T) {
          this.data.resetMax(T), this.revokeData.resetMax(T);
        }, m.prototype.save = function(T) {
          return this.isRe && (this.revokeData.clear(), this.isRe = !1), this.data.instack(T), this;
        }, m.prototype.revoke = function(T) {
          !this.isRe && (this.isRe = !0);
          var S = this.data.outstack();
          return S ? (this.revokeData.instack(S), T(S), !0) : !1;
        }, m.prototype.restore = function(T) {
          !this.isRe && (this.isRe = !0);
          var S = this.revokeData.outstack();
          return S ? (this.data.instack(S), T(S), !0) : !1;
        }, m;
      }();
      o.default = d;
    }, function(l, o, t) {
      var s = t(14), u = t(11), f = t(73);
      l.exports = !s && !u(function() {
        return Object.defineProperty(f("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, function(l, o, t) {
      var s = t(11), u = /#|\.prototype\./, f = function(b, g) {
        var x = m[d(b)];
        return x == S ? !0 : x == T ? !1 : typeof g == "function" ? s(g) : !!g;
      }, d = f.normalize = function(w) {
        return String(w).replace(u, ".").toLowerCase();
      }, m = f.data = {}, T = f.NATIVE = "N", S = f.POLYFILL = "P";
      l.exports = f;
    }, function(l, o, t) {
      var s = t(102), u = Function.toString;
      typeof s.inspectSource != "function" && (s.inspectSource = function(f) {
        return u.call(f);
      }), l.exports = s.inspectSource;
    }, function(l, o, t) {
      var s = t(8), u = t(166), f = "__core-js_shared__", d = s[f] || u(f, {});
      l.exports = d;
    }, function(l, o, t) {
      var s = t(104), u = t(19), f = t(16), d = t(10), m = t(42), T = d("iterator"), S = !1, w = function() {
        return this;
      }, b, g, x;
      [].keys && (x = [].keys(), "next" in x ? (g = s(s(x)), g !== Object.prototype && (b = g)) : S = !0), b == null && (b = {}), !m && !f(b, T) && u(b, T, w), l.exports = { IteratorPrototype: b, BUGGY_SAFARI_ITERATORS: S };
    }, function(l, o, t) {
      var s = t(16), u = t(29), f = t(63), d = t(168), m = f("IE_PROTO"), T = Object.prototype;
      l.exports = d ? Object.getPrototypeOf : function(S) {
        return S = u(S), s(S, m) ? S[m] : typeof S.constructor == "function" && S instanceof S.constructor ? S.constructor.prototype : S instanceof Object ? T : null;
      };
    }, function(l, o, t) {
      var s = t(76);
      l.exports = s && !Symbol.sham && Pt(Symbol.iterator) == "symbol";
    }, function(l, o, t) {
      var s = t(16), u = t(28), f = t(78).indexOf, d = t(51);
      l.exports = function(m, T) {
        var S = u(m), w = 0, b = [], g;
        for (g in S)
          !s(d, g) && s(S, g) && b.push(g);
        for (; T.length > w; )
          s(S, g = T[w++]) && (~f(b, g) || b.push(g));
        return b;
      };
    }, function(l, o, t) {
      var s = t(35);
      l.exports = s("document", "documentElement");
    }, function(l, o, t) {
      var s = t(8);
      l.exports = s.Promise;
    }, function(l, o, t) {
      var s = t(53);
      l.exports = function(u, f, d) {
        for (var m in f)
          d && d.unsafe && u[m] ? u[m] = f[m] : s(u, m, f[m], d);
        return u;
      };
    }, function(l, o, t) {
      var s = t(35), u = t(18), f = t(10), d = t(14), m = f("species");
      l.exports = function(T) {
        var S = s(T), w = u.f;
        d && S && !S[m] && w(S, m, { configurable: !0, get: function() {
          return this;
        } });
      };
    }, function(l, o, t) {
      var s = t(10), u = t(43), f = s("iterator"), d = Array.prototype;
      l.exports = function(m) {
        return m !== void 0 && (u.Array === m || d[f] === m);
      };
    }, function(l, o, t) {
      var s = t(65), u = t(43), f = t(10), d = f("iterator");
      l.exports = function(m) {
        if (m != null)
          return m[d] || m["@@iterator"] || u[s(m)];
      };
    }, function(l, o, t) {
      var s = t(25);
      l.exports = function(u, f, d, m) {
        try {
          return m ? f(s(d)[0], d[1]) : f(d);
        } catch (S) {
          var T = u.return;
          throw T !== void 0 && s(T.call(u)), S;
        }
      };
    }, function(l, o, t) {
      var s = t(10), u = s("iterator"), f = !1;
      try {
        var d = 0, m = { next: function() {
          return { done: !!d++ };
        }, return: function() {
          f = !0;
        } };
        m[u] = function() {
          return this;
        }, Array.from(m, function() {
          throw 2;
        });
      } catch {
      }
      l.exports = function(T, S) {
        if (!S && !f)
          return !1;
        var w = !1;
        try {
          var b = {};
          b[u] = function() {
            return { next: function() {
              return { done: w = !0 };
            } };
          }, T(b);
        } catch {
        }
        return w;
      };
    }, function(l, o, t) {
      var s = t(25), u = t(40), f = t(10), d = f("species");
      l.exports = function(m, T) {
        var S = s(m).constructor, w;
        return S === void 0 || (w = s(S)[d]) == null ? T : u(w);
      };
    }, function(l, o, t) {
      var s = t(8), u = t(11), f = t(33), d = t(39), m = t(107), T = t(73), S = t(117), w = s.location, b = s.setImmediate, g = s.clearImmediate, x = s.process, v = s.MessageChannel, M = s.Dispatch, y = 0, h = {}, E = "onreadystatechange", C, R, F, B = function(H) {
        if (h.hasOwnProperty(H)) {
          var $ = h[H];
          delete h[H], $();
        }
      }, O = function(H) {
        return function() {
          B(H);
        };
      }, z = function(H) {
        B(H.data);
      }, I = function(H) {
        s.postMessage(H + "", w.protocol + "//" + w.host);
      };
      (!b || !g) && (b = function(H) {
        for (var $ = [], P = 1; arguments.length > P; )
          $.push(arguments[P++]);
        return h[++y] = function() {
          (typeof H == "function" ? H : Function(H)).apply(void 0, $);
        }, C(y), y;
      }, g = function(H) {
        delete h[H];
      }, f(x) == "process" ? C = function(H) {
        x.nextTick(O(H));
      } : M && M.now ? C = function(H) {
        M.now(O(H));
      } : v && !S ? (R = new v(), F = R.port2, R.port1.onmessage = z, C = d(F.postMessage, F, 1)) : s.addEventListener && typeof postMessage == "function" && !s.importScripts && !u(I) && w.protocol !== "file:" ? (C = I, s.addEventListener("message", z, !1)) : E in T("script") ? C = function(H) {
        m.appendChild(T("script"))[E] = function() {
          m.removeChild(this), B(H);
        };
      } : C = function(H) {
        setTimeout(O(H), 0);
      }), l.exports = { set: b, clear: g };
    }, function(l, o, t) {
      var s = t(84);
      l.exports = /(iphone|ipod|ipad).*applewebkit/i.test(s);
    }, function(l, o, t) {
      var s = t(25), u = t(13), f = t(85);
      l.exports = function(d, m) {
        if (s(d), u(m) && m.constructor === d)
          return m;
        var T = f.f(d), S = T.resolve;
        return S(m), T.promise;
      };
    }, function(l, o) {
      l.exports = function(t) {
        try {
          return { error: !1, value: t() };
        } catch (s) {
          return { error: !0, value: s };
        }
      };
    }, function(l, o, t) {
      l.exports = t(197);
    }, function(l, o, t) {
      var s = t(5), u = t(8), f = t(122), d = t(11), m = t(19), T = t(66), S = t(83), w = t(13), b = t(36), g = t(18).f, x = t(30).forEach, v = t(14), M = t(41), y = M.set, h = M.getterFor;
      l.exports = function(E, C, R) {
        var F = E.indexOf("Map") !== -1, B = E.indexOf("Weak") !== -1, O = F ? "set" : "add", z = u[E], I = z && z.prototype, U = {}, H;
        if (!v || typeof z != "function" || !(B || I.forEach && !d(function() {
          new z().entries().next();
        })))
          H = R.getConstructor(C, E, F, O), f.REQUIRED = !0;
        else {
          H = C(function(P, Y) {
            y(S(P, H, E), { type: E, collection: new z() }), Y != null && T(Y, P[O], P, F);
          });
          var $ = h(E);
          x(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function(P) {
            var Y = P == "add" || P == "set";
            P in I && !(B && P == "clear") && m(H.prototype, P, function(Q, K) {
              var q = $(this).collection;
              if (!Y && B && !w(Q))
                return P == "get" ? void 0 : !1;
              var X = q[P](Q === 0 ? 0 : Q, K);
              return Y ? this : X;
            });
          }), B || g(H.prototype, "size", { configurable: !0, get: function() {
            return $(this).collection.size;
          } });
        }
        return b(H, E, !1, !0), U[E] = H, s({ global: !0, forced: !0 }, U), B || R.setStrong(H, E, F), H;
      };
    }, function(l, o, t) {
      var s = t(51), u = t(13), f = t(16), d = t(18).f, m = t(64), T = t(200), S = m("meta"), w = 0, b = Object.isExtensible || function() {
        return !0;
      }, g = function(E) {
        d(E, S, { value: {
          objectID: "O" + ++w,
          weakData: {}
        } });
      }, x = function(E, C) {
        if (!u(E))
          return Pt(E) == "symbol" ? E : (typeof E == "string" ? "S" : "P") + E;
        if (!f(E, S)) {
          if (!b(E))
            return "F";
          if (!C)
            return "E";
          g(E);
        }
        return E[S].objectID;
      }, v = function(E, C) {
        if (!f(E, S)) {
          if (!b(E))
            return !0;
          if (!C)
            return !1;
          g(E);
        }
        return E[S].weakData;
      }, M = function(E) {
        return T && y.REQUIRED && b(E) && !f(E, S) && g(E), E;
      }, y = l.exports = { REQUIRED: !1, fastKey: x, getWeakData: v, onFreeze: M };
      s[S] = !0;
    }, function(l, o, t) {
      var s = t(18).f, u = t(77), f = t(109), d = t(39), m = t(83), T = t(66), S = t(75), w = t(110), b = t(14), g = t(122).fastKey, x = t(41), v = x.set, M = x.getterFor;
      l.exports = { getConstructor: function(h, E, C, R) {
        var F = h(function(I, U) {
          m(I, F, E), v(I, { type: E, index: u(null), first: void 0, last: void 0, size: 0 }), b || (I.size = 0), U != null && T(U, I[R], I, C);
        }), B = M(E), O = function(U, H, $) {
          var P = B(U), Y = z(U, H), Q, K;
          return Y ? Y.value = $ : (P.last = Y = { index: K = g(H, !0), key: H, value: $, previous: Q = P.last, next: void 0, removed: !1 }, P.first || (P.first = Y), Q && (Q.next = Y), b ? P.size++ : U.size++, K !== "F" && (P.index[K] = Y)), U;
        }, z = function(U, H) {
          var $ = B(U), P = g(H), Y;
          if (P !== "F")
            return $.index[P];
          for (Y = $.first; Y; Y = Y.next)
            if (Y.key == H)
              return Y;
        };
        return f(F.prototype, {
          clear: function() {
            for (var U = this, H = B(U), $ = H.index, P = H.first; P; )
              P.removed = !0, P.previous && (P.previous = P.previous.next = void 0), delete $[P.index], P = P.next;
            H.first = H.last = void 0, b ? H.size = 0 : U.size = 0;
          },
          delete: function(U) {
            var H = this, $ = B(H), P = z(H, U);
            if (P) {
              var Y = P.next, Q = P.previous;
              delete $.index[P.index], P.removed = !0, Q && (Q.next = Y), Y && (Y.previous = Q), $.first == P && ($.first = Y), $.last == P && ($.last = Q), b ? $.size-- : H.size--;
            }
            return !!P;
          },
          forEach: function(U) {
            for (var H = B(this), $ = d(U, arguments.length > 1 ? arguments[1] : void 0, 3), P; P = P ? P.next : H.first; )
              for ($(P.value, P.key, this); P && P.removed; )
                P = P.previous;
          },
          has: function(U) {
            return !!z(this, U);
          }
        }), f(F.prototype, C ? {
          get: function(U) {
            var H = z(this, U);
            return H && H.value;
          },
          set: function(U, H) {
            return O(this, U === 0 ? 0 : U, H);
          }
        } : {
          add: function(U) {
            return O(this, U = U === 0 ? 0 : U, U);
          }
        }), b && s(F.prototype, "size", { get: function() {
          return B(this).size;
        } }), F;
      }, setStrong: function(h, E, C) {
        var R = E + " Iterator", F = M(E), B = M(R);
        S(h, E, function(O, z) {
          v(this, { type: R, target: O, state: F(O), kind: z, last: void 0 });
        }, function() {
          for (var O = B(this), z = O.kind, I = O.last; I && I.removed; )
            I = I.previous;
          return !O.target || !(O.last = I = I ? I.next : O.state.first) ? (O.target = void 0, { value: void 0, done: !0 }) : z == "keys" ? { value: I.key, done: !1 } : z == "values" ? { value: I.value, done: !1 } : { value: [I.key, I.value], done: !1 };
        }, C ? "entries" : "values", !C, !0), w(E);
      } };
    }, function(l, o, t) {
      var s = t(12);
      s("iterator");
    }, function(l, o, t) {
      var s = t(106), u = t(80), f = u.concat("length", "prototype");
      o.f = Object.getOwnPropertyNames || function(m) {
        return s(m, f);
      };
    }, function(l, o) {
      o.f = Object.getOwnPropertySymbols;
    }, function(l, o, t) {
      l.exports = t(268);
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.default = { zIndex: 1e4 };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.default = { focus: !0, height: 300, placeholder: "\u8BF7\u8F93\u5165\u6B63\u6587", zIndexFullScreen: 10002, showFullScreen: !0 };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 }), o.getPasteImgs = o.getPasteHtml = o.getPasteText = void 0;
      var d = t(2), m = t(6), T = d.__importDefault(t(292));
      function S(g) {
        var x = g.clipboardData, v = "";
        return x == null ? v = window.clipboardData && window.clipboardData.getData("text") : v = x.getData("text/plain"), m.replaceHtmlSymbol(v);
      }
      o.getPasteText = S;
      function w(g, x, v) {
        x === void 0 && (x = !0), v === void 0 && (v = !1);
        var M = g.clipboardData, y = "";
        if (M && (y = M.getData("text/html")), !y) {
          var h = S(g);
          if (!h)
            return "";
          y = "<p>" + h + "</p>";
        }
        return y = y.replace(/<(\d)/gm, function(E, C) {
          return "&lt;" + C;
        }), y = y.replace(/<(\/?meta.*?)>/gim, ""), y = T.default(y, x, v), y;
      }
      o.getPasteHtml = w;
      function b(g) {
        var x, v = [], M = S(g);
        if (M)
          return v;
        var y = (x = g.clipboardData) === null || x === void 0 ? void 0 : x.items;
        return y && (0, f.default)(m).call(m, y, function(h, E) {
          var C = E.type;
          /image/i.test(C) && v.push(E.getAsFile());
        }), v;
      }
      o.getPasteImgs = b;
    }, function(l, o, t) {
      l.exports = t(294);
    }, function(l, o, t) {
      l.exports = t(310);
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(4)), d = s(t(46));
      (0, u.default)(o, "__esModule", { value: !0 });
      var m = t(2), T = m.__importDefault(t(3)), S = t(7), w = function() {
        function b(g, x) {
          var v = this;
          this.hideTimeoutId = 0, this.menu = g, this.conf = x;
          var M = T.default('<div class="w-e-droplist"></div>'), y = T.default("<p>" + x.title + "</p>");
          y.addClass("w-e-dp-title"), M.append(y);
          var h = x.list || [], E = x.type || "list", C = x.clickHandler || S.EMPTY_FN, R = T.default('<ul class="' + (E === "list" ? "w-e-list" : "w-e-block") + '"></ul>');
          (0, f.default)(h).call(h, function(F) {
            var B = F.$elem, O = F.value, z = T.default('<li class="w-e-item"></li>');
            B && (z.append(B), R.append(z), z.on("click", function(I) {
              C(O), I.stopPropagation(), v.hideTimeoutId = (0, d.default)(function() {
                v.hide();
              });
            }));
          }), M.append(R), M.on("mouseleave", function() {
            v.hideTimeoutId = (0, d.default)(function() {
              v.hide();
            });
          }), this.$container = M, this.rendered = !1, this._show = !1;
        }
        return b.prototype.show = function() {
          this.hideTimeoutId && clearTimeout(this.hideTimeoutId);
          var g = this.menu, x = g.$elem, v = this.$container;
          if (!this._show) {
            if (this.rendered)
              v.show();
            else {
              var M = x.getBoundingClientRect().height || 0, y = this.conf.width || 100;
              v.css("margin-top", M + "px").css("width", y + "px"), x.append(v), this.rendered = !0;
            }
            this._show = !0;
          }
        }, b.prototype.hide = function() {
          var g = this.$container;
          !this._show || (g.hide(), this._show = !1);
        }, (0, u.default)(b.prototype, "isShow", { get: function() {
          return this._show;
        }, enumerable: !1, configurable: !0 }), b;
      }();
      o.default = w;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      function f(d) {
        var m = d.selection.getSelectionContainerElem();
        return m != null && m.length ? m.getNodeName() === "A" : !1;
      }
      o.default = f;
    }, function(l, o, t) {
      var s = t(0), u = s(t(92)), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var m = t(6);
      function T(S, w) {
        var b = new XMLHttpRequest();
        if (b.open("POST", S), b.timeout = w.timeout || 10 * 1e3, b.ontimeout = function() {
          console.error("wangEditor - \u8BF7\u6C42\u8D85\u65F6"), w.onTimeout && w.onTimeout(b);
        }, b.upload && (b.upload.onprogress = function(x) {
          var v = x.loaded / x.total;
          w.onProgress && w.onProgress(v, x);
        }), w.headers && (0, d.default)(m).call(m, w.headers, function(x, v) {
          b.setRequestHeader(x, v);
        }), b.withCredentials = !!w.withCredentials, w.beforeSend) {
          var g = w.beforeSend(b);
          if (g && (0, u.default)(g) === "object" && g.prevent)
            return g.msg;
        }
        return b.onreadystatechange = function() {
          if (b.readyState === 4) {
            var x = b.status;
            if (!(x < 200) && !(x >= 300 && x < 400)) {
              if (x >= 400) {
                console.error("wangEditor - XHR \u62A5\u9519\uFF0C\u72B6\u6001\u7801 " + x), w.onError && w.onError(b);
                return;
              }
              var v = b.responseText, M;
              if ((0, u.default)(v) !== "object")
                try {
                  M = JSON.parse(v);
                } catch {
                  console.error("wangEditor - \u8FD4\u56DE\u7ED3\u679C\u4E0D\u662F JSON \u683C\u5F0F", v), w.onFail && w.onFail(b, v);
                  return;
                }
              else
                M = v;
              w.onSuccess(b, M);
            }
          }
        }, b.send(w.formData || null), b;
      }
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(342)), d = s(t(46));
      (0, u.default)(o, "__esModule", { value: !0 });
      var m = t(2), T = m.__importDefault(t(3)), S = function() {
        function w(b) {
          this.editor = b, this.$textContainer = b.$textContainerElem, this.$bar = T.default('<div class="w-e-progress"></div>'), this.isShow = !1, this.time = 0, this.timeoutId = 0;
        }
        return w.prototype.show = function(b) {
          var g = this;
          if (!this.isShow) {
            this.isShow = !0;
            var x = this.$bar, v = this.$textContainer;
            v.append(x), (0, f.default)() - this.time > 100 && b <= 1 && (x.css("width", b * 100 + "%"), this.time = (0, f.default)());
            var M = this.timeoutId;
            M && clearTimeout(M), this.timeoutId = (0, d.default)(function() {
              g.hide();
            }, 500);
          }
        }, w.prototype.hide = function() {
          var b = this.$bar;
          b.remove(), this.isShow = !1, this.time = 0, this.timeoutId = 0;
        }, w;
      }();
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.ListType = void 0;
      var f = t(2), d = f.__importDefault(t(3)), m = f.__importDefault(t(24)), T = t(47), S = f.__importStar(t(371)), w;
      (function(g) {
        g.OrderedList = "OL", g.UnorderedList = "UL";
      })(w = o.ListType || (o.ListType = {}));
      var b = function(g) {
        f.__extends(x, g);
        function x(v) {
          var M = this, y = d.default(`<div class="w-e-menu" data-title="\u5E8F\u5217">
                <i class="w-e-icon-list2"></i>
            </div>`), h = { width: 130, title: "\u5E8F\u5217", type: "list", list: [{ $elem: d.default(`
                        <p>
                            <i class="w-e-icon-list2 w-e-drop-list-item"></i>
                            ` + v.i18next.t("menus.dropListMenu.list.\u65E0\u5E8F\u5217\u8868") + `
                        <p>`), value: w.UnorderedList }, { $elem: d.default(`<p>
                            <i class="w-e-icon-list-numbered w-e-drop-list-item"></i>
                            ` + v.i18next.t("menus.dropListMenu.list.\u6709\u5E8F\u5217\u8868") + `
                        <p>`), value: w.OrderedList }], clickHandler: function(C) {
            M.command(C);
          } };
          return M = g.call(this, y, v, h) || this, M;
        }
        return x.prototype.command = function(v) {
          var M = this.editor, y = M.selection.getSelectionContainerElem();
          y !== void 0 && (this.handleSelectionRangeNodes(v), this.tryChangeActive());
        }, x.prototype.validator = function(v, M, y) {
          return !(!v.length || !M.length || y.equal(v) || y.equal(M));
        }, x.prototype.handleSelectionRangeNodes = function(v) {
          var M = this.editor, y = M.selection, h = v.toLowerCase(), E = y.getSelectionContainerElem(), C = y.getSelectionStartElem().getNodeTop(M), R = y.getSelectionEndElem().getNodeTop(M);
          if (!!this.validator(C, R, M.$textElem)) {
            var F = y.getRange(), B = F == null ? void 0 : F.collapsed;
            M.$textElem.equal(E) || (E = E.getNodeTop(M));
            var O = { editor: M, listType: v, listTarget: h, $selectionElem: E, $startElem: C, $endElem: R }, z;
            this.isOrderElem(E) ? z = S.ClassType.Wrap : this.isOrderElem(C) && this.isOrderElem(R) ? z = S.ClassType.Join : this.isOrderElem(C) ? z = S.ClassType.StartJoin : this.isOrderElem(R) ? z = S.ClassType.EndJoin : z = S.ClassType.Other;
            var I = new S.default(S.createListHandle(z, O, F));
            T.updateRange(M, I.getSelectionRangeElem(), !!B);
          }
        }, x.prototype.isOrderElem = function(v) {
          var M = v.getNodeName();
          return M === w.OrderedList || M === w.UnorderedList;
        }, x.prototype.tryChangeActive = function() {
        }, x;
      }(m.default);
      o.default = b;
    }, function(l, o, t) {
      l.exports = t(395);
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      function f(d) {
        var m = d.selection.getSelectionContainerElem();
        return m != null && m.length ? !!(m.getNodeName() == "CODE" || m.getNodeName() == "PRE" || m.parent().getNodeName() == "CODE" || m.parent().getNodeName() == "PRE" || /hljs/.test(m.parent().attr("class"))) : !1;
      }
      o.default = f;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(31));
      (0, u.default)(o, "__esModule", { value: !0 }), o.todo = void 0;
      var d = t(2), m = d.__importDefault(t(3)), T = function() {
        function w(b) {
          var g;
          this.template = '<ul class="w-e-todo"><li><span contenteditable="false"><input type="checkbox"></span></li></ul>', this.checked = !1, this.$todo = m.default(this.template), this.$child = (g = b == null ? void 0 : b.childNodes()) === null || g === void 0 ? void 0 : g.clone(!0);
        }
        return w.prototype.init = function() {
          var b = this.$child, g = this.getInputContainer();
          b && b.insertAfter(g);
        }, w.prototype.getInput = function() {
          var b = this.$todo, g = (0, f.default)(b).call(b, "input");
          return g;
        }, w.prototype.getInputContainer = function() {
          var b = this.getInput().parent();
          return b;
        }, w.prototype.getTodo = function() {
          return this.$todo;
        }, w;
      }();
      o.todo = T;
      function S(w) {
        var b = new T(w);
        return b.init(), b;
      }
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2);
      t(146), t(148), t(152), t(154), t(156), t(158), t(160);
      var d = f.__importDefault(t(87));
      f.__exportStar(t(442), o);
      try {
      } catch {
        throw new Error("\u8BF7\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B\u8FD0\u884C");
      }
      o.default = d.default;
    }, function(l, o, t) {
      var s = t(143);
      l.exports = s;
    }, function(l, o, t) {
      t(144);
      var s = t(9), u = s.Object, f = l.exports = function(m, T, S) {
        return u.defineProperty(m, T, S);
      };
      u.defineProperty.sham && (f.sham = !0);
    }, function(l, o, t) {
      var s = t(5), u = t(14), f = t(18);
      s({ target: "Object", stat: !0, forced: !u, sham: !u }, { defineProperty: f.f });
    }, function(l, o) {
      var t;
      t = function() {
        return this;
      }();
      try {
        t = t || new Function("return this")();
      } catch {
        (typeof window > "u" ? "undefined" : Pt(window)) === "object" && (t = window);
      }
      l.exports = t;
    }, function(l, o, t) {
      var s = t(20), u = t(147);
      u = u.__esModule ? u.default : u, typeof u == "string" && (u = [[l.i, u, ""]]);
      var f = {};
      f.insert = "head", f.singleton = !1, s(u, f), l.exports = u.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-toolbar,
.w-e-text-container,
.w-e-menu-panel {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #fff;
  /*\u8868\u60C5\u83DC\u5355\u6837\u5F0F*/
  /*\u5206\u5272\u7EBF\u6837\u5F0F*/
}
.w-e-toolbar h1,
.w-e-text-container h1,
.w-e-menu-panel h1 {
  font-size: 32px !important;
}
.w-e-toolbar h2,
.w-e-text-container h2,
.w-e-menu-panel h2 {
  font-size: 24px !important;
}
.w-e-toolbar h3,
.w-e-text-container h3,
.w-e-menu-panel h3 {
  font-size: 18.72px !important;
}
.w-e-toolbar h4,
.w-e-text-container h4,
.w-e-menu-panel h4 {
  font-size: 16px !important;
}
.w-e-toolbar h5,
.w-e-text-container h5,
.w-e-menu-panel h5 {
  font-size: 13.28px !important;
}
.w-e-toolbar p,
.w-e-text-container p,
.w-e-menu-panel p {
  font-size: 16px !important;
}
.w-e-toolbar .eleImg,
.w-e-text-container .eleImg,
.w-e-menu-panel .eleImg {
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  padding: 0 3px;
}
.w-e-toolbar *,
.w-e-text-container *,
.w-e-menu-panel * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.w-e-toolbar hr,
.w-e-text-container hr,
.w-e-menu-panel hr {
  cursor: pointer;
  display: block;
  height: 0px;
  border: 0;
  border-top: 3px solid #ccc;
  margin: 20px 0;
}
.w-e-clear-fix:after {
  content: "";
  display: table;
  clear: both;
}
.w-e-drop-list-item {
  position: relative;
  top: 1px;
  padding-right: 7px;
  color: #333 !important;
}
.w-e-drop-list-tl {
  padding-left: 10px;
  text-align: left;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(20), u = t(149);
      u = u.__esModule ? u.default : u, typeof u == "string" && (u = [[l.i, u, ""]]);
      var f = {};
      f.insert = "head", f.singleton = !1, s(u, f), l.exports = u.locals || {};
    }, function(l, o, t) {
      var s = t(21), u = t(150), f = t(151);
      o = s(!1);
      var d = u(f);
      o.push([l.i, `@font-face {
  font-family: 'w-e-icon';
  src: url(` + d + `) format('truetype');
  font-weight: normal;
  font-style: normal;
}
[class^="w-e-icon-"],
[class*=" w-e-icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'w-e-icon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.w-e-icon-close:before {
  content: "\\f00d";
}
.w-e-icon-upload2:before {
  content: "\\e9c6";
}
.w-e-icon-trash-o:before {
  content: "\\f014";
}
.w-e-icon-header:before {
  content: "\\f1dc";
}
.w-e-icon-pencil2:before {
  content: "\\e906";
}
.w-e-icon-paint-brush:before {
  content: "\\f1fc";
}
.w-e-icon-image:before {
  content: "\\e90d";
}
.w-e-icon-play:before {
  content: "\\e912";
}
.w-e-icon-location:before {
  content: "\\e947";
}
.w-e-icon-undo:before {
  content: "\\e965";
}
.w-e-icon-redo:before {
  content: "\\e966";
}
.w-e-icon-quotes-left:before {
  content: "\\e977";
}
.w-e-icon-list-numbered:before {
  content: "\\e9b9";
}
.w-e-icon-list2:before {
  content: "\\e9bb";
}
.w-e-icon-link:before {
  content: "\\e9cb";
}
.w-e-icon-happy:before {
  content: "\\e9df";
}
.w-e-icon-bold:before {
  content: "\\ea62";
}
.w-e-icon-underline:before {
  content: "\\ea63";
}
.w-e-icon-italic:before {
  content: "\\ea64";
}
.w-e-icon-strikethrough:before {
  content: "\\ea65";
}
.w-e-icon-table2:before {
  content: "\\ea71";
}
.w-e-icon-paragraph-left:before {
  content: "\\ea77";
}
.w-e-icon-paragraph-center:before {
  content: "\\ea78";
}
.w-e-icon-paragraph-right:before {
  content: "\\ea79";
}
.w-e-icon-paragraph-justify:before {
  content: "\\ea7a";
}
.w-e-icon-terminal:before {
  content: "\\f120";
}
.w-e-icon-page-break:before {
  content: "\\ea68";
}
.w-e-icon-cancel-circle:before {
  content: "\\ea0d";
}
.w-e-icon-font:before {
  content: "\\ea5c";
}
.w-e-icon-text-heigh:before {
  content: "\\ea5f";
}
.w-e-icon-paint-format:before {
  content: "\\e90c";
}
.w-e-icon-indent-increase:before {
  content: "\\ea7b";
}
.w-e-icon-indent-decrease:before {
  content: "\\ea7c";
}
.w-e-icon-row-height:before {
  content: "\\e9be";
}
.w-e-icon-fullscreen_exit:before {
  content: "\\e900";
}
.w-e-icon-fullscreen:before {
  content: "\\e901";
}
.w-e-icon-split-line:before {
  content: "\\ea0b";
}
.w-e-icon-checkbox-checked:before {
  content: "\\ea52";
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      l.exports = function(s, u) {
        return u || (u = {}), s = s && s.__esModule ? s.default : s, typeof s != "string" ? s : (/^['"].*['"]$/.test(s) && (s = s.slice(1, -1)), u.hash && (s += u.hash), /["'() \t\n]/.test(s) || u.needQuotes ? '"'.concat(s.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : s);
      };
    }, function(l, o, t) {
      t.r(o), o.default = "data:font/woff;base64,d09GRgABAAAAABskAAsAAAAAGtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIPFWNtYXAAAAFoAAABHAAAARz2mfAgZ2FzcAAAAoQAAAAIAAAACAAAABBnbHlmAAACjAAAFXwAABV8IH7+mGhlYWQAABgIAAAANgAAADYb6gumaGhlYQAAGEAAAAAkAAAAJAkjBWlobXR4AAAYZAAAAKQAAACkmYcEbmxvY2EAABkIAAAAVAAAAFReAmKYbWF4cAAAGVwAAAAgAAAAIAA0ALZuYW1lAAAZfAAAAYYAAAGGmUoJ+3Bvc3QAABsEAAAAIAAAACAAAwAAAAMD7wGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA8fwDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAQAAAAA8ACAABAAcAAEAIOkB6QbpDekS6UfpZul36bnpu+m+6cbpy+nf6gvqDepS6lzqX+pl6nHqfPAN8BTxIPHc8fz//f//AAAAAAAg6QDpBukM6RLpR+ll6Xfpuem76b7pxunL6d/qC+oN6lLqXOpf6mLqcep38A3wFPEg8dzx/P/9//8AAf/jFwQXABb7FvcWwxamFpYWVRZUFlIWSxZHFjQWCRYIFcQVuxW5FbcVrBWnEBcQEQ8GDksOLAADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAAEAEEAAQO/A38ABQALABEAFwAAATMVIREzAxEhFSMVATUzESE1ETUhESM1Av/A/sJ+fgE+wP4Cfv7CAT5+Ar9+AT78ggE+fsACvsD+wn7+An7+wsAAAAAABABBAAEDvwN/AAUACwARABcAAAEhESM1IxM1MxEhNQERIRUjFREVMxUhEQKBAT5+wMB+/sL9wAE+wMD+wgN//sLA/X7A/sJ+AcIBPn7A/v7AfgE+AAAAAAIAAP/ABAADwAAEABMAAAE3AScBAy4BJxM3ASMBAyUBNQEHAYCAAcBA/kCfFzsyY4ABgMD+gMACgAGA/oBOAUBAAcBA/kD+nTI7FwERTgGA/oD9gMABgMD+gIAAAgAA/8AEAAOAACkALQAAAREjNTQmIyEiBh0BFBYzITI2PQEzESEVIyIGFREUFjsBMjY1ETQmKwE1ASE1IQQAwCYa/UAaJiYaAsAaJoD9wCANExMNgA0TEw0gAUD9QALAAYABgEAaJiYawBomJhpA/wCAEw3+wA0TEw0BQA0TQAGAQAAABAAAAAAEAAOAABAAIQAtADQAAAE4ATEROAExITgBMRE4ATEhNSEiBhURFBYzITI2NRE0JiMHFAYjIiY1NDYzMhYTITUTATM3A8D8gAOA/IAaJiYaA4AaJiYagDgoKDg4KCg4QP0A4AEAQOADQP0AAwBAJhr9ABomJhoDABom4Cg4OCgoODj9uIABgP7AwAAAAgAAAEAEAANAADgAPAAAASYnLgEnJiMiBw4BBwYHBgcOAQcGFRQXHgEXFhcWFx4BFxYzMjc+ATc2NzY3PgE3NjU0Jy4BJyYnARENAQPVNjg5djw9Pz89PHY5ODYLBwgLAwMDAwsIBws2ODl2PD0/Pz08djk4NgsHCAsDAwMDCwgHC/2rAUD+wAMgCAYGCAICAgIIBgYIKSoqWS0uLy8uLVkqKikIBgYIAgICAggGBggpKipZLS4vLy4tWSoqKf3gAYDAwAAAAAACAMD/wANAA8AAGwAnAAABIgcOAQcGFRQXHgEXFjEwNz4BNzY1NCcuAScmAyImNTQ2MzIWFRQGAgBCOzpXGRkyMngyMjIyeDIyGRlXOjtCUHBwUFBwcAPAGRlXOjtCeH19zEFBQUHMfX14Qjs6VxkZ/gBwUFBwcFBQcAAAAQAAAAAEAAOAACsAAAEiBw4BBwYHJxEhJz4BMzIXHgEXFhUUBw4BBwYHFzY3PgE3NjU0Jy4BJyYjAgA1MjJcKSkjlgGAkDWLUFBFRmkeHgkJIhgYHlUoICAtDAwoKIteXWoDgAoLJxscI5b+gJA0PB4eaUZFUCsoKUkgIRpgIysrYjY2OWpdXosoKAABAAAAAAQAA4AAKgAAExQXHgEXFhc3JicuAScmNTQ3PgE3NjMyFhcHIREHJicuAScmIyIHDgEHBgAMDC0gIChVHhgYIgkJHh5pRkVQUIs1kAGAliMpKVwyMjVqXV6LKCgBgDk2NmIrKyNgGiEgSSkoK1BFRmkeHjw0kAGAliMcGycLCigoi15dAAAAAAIAAABABAEDAAAmAE0AABMyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+ASEyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+AeEuKSk9ERISET0pKS4uKSk9ERIBIyN6UlFdQHUtCRAHCBICSS4pKT0REhIRPSkpLi4pKT0REgEjI3pSUV1AdS0JEAcIEgIAEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBAAAGAED/wAQAA8AAAwAHAAsAEQAdACkAACUhFSERIRUhESEVIScRIzUjNRMVMxUjNTc1IzUzFRURIzUzNSM1MzUjNQGAAoD9gAKA/YACgP2AwEBAQIDAgIDAwICAgICAgAIAgAIAgMD/AMBA/fIyQJI8MkCS7v7AQEBAQEAABgAA/8AEAAPAAAMABwALABcAIwAvAAABIRUhESEVIREhFSEBNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYBgAKA/YACgP2AAoD9gP6ASzU1S0s1NUtLNTVLSzU1S0s1NUtLNTVLA4CA/wCA/wCAA0A1S0s1NUtL/rU1S0s1NUtL/rU1S0s1NUtLAAUAAABABWADAAADAAcACwAOABEAABMhFSEVIRUhFSEVIQEXNzUnBwADgPyAA4D8gAOA/IAD4MDAwMADAMBAwEDAAUDAwEDAwAAAAAADAAAAAAQAA6AAAwANABQAADchFSElFSE1EyEVITUhJQkBIxEjEQAEAPwABAD8AIABAAEAAQD9YAEgASDggEBAwEBAAQCAgMABIP7g/wABAAAAAAACAB7/zAPiA7QAMwBkAAABIiYnJicmNDc2PwE+ATMyFhcWFxYUBwYPAQYiJyY0PwE2NCcuASMiBg8BBhQXFhQHDgEjAyImJyYnJjQ3Nj8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFxYUBwYPAQ4BIwG4ChMIIxISEhIjwCNZMTFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PCBMKuDFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PDysQIxISEhIjwCNZMQFECAckLS1eLS0kwCIlJSIkLS1eLS0kVxAQDysPWCl0KRQVFRTAKXQpDysQBwj+iCUiJC0tXi0tJFcQEA8rD1gpdCkUFRUUwCl0KQ8rEA8PJC0tXi0tJMAiJQAAAAAFAAD/wAQAA8AAGwA3AFMAXwBrAAAFMjc+ATc2NTQnLgEnJiMiBw4BBwYVFBceARcWEzIXHgEXFhUUBw4BBwYjIicuAScmNTQ3PgE3NhMyNz4BNzY3BgcOAQcGIyInLgEnJicWFx4BFxYnNDYzMhYVFAYjIiYlNDYzMhYVFAYjIiYCAGpdXosoKCgoi15dampdXosoKCgoi15dalZMTHEgISEgcUxMVlZMTHEgISEgcUxMVisrKlEmJiMFHBtWODc/Pzc4VhscBSMmJlEqK9UlGxslJRsbJQGAJRsbJSUbGyVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoA6AhIHFMTFZWTExxICEhIHFMTFZWTExxICH+CQYGFRAQFEM6OlYYGRkYVjo6QxQQEBUGBvcoODgoKDg4KCg4OCgoODgAAAEAAAFABAACQAAPAAATFRQWMyEyNj0BNCYjISIGABMNA8ANExMN/EANEwIgwA0TEw3ADRMTAAAAAwAA/8AEAAPAABsANwBDAAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmAyInLgEnJjU0Nz4BNzYzMhceARcWFRQHDgEHBhMHJwcXBxc3FzcnNwIAal1eiygoKCiLXl1qal1eiygoKCiLXl1qVkxMcSAhISBxTExWVkxMcSAhISBxTExKoKBgoKBgoKBgoKADwCgoi15dampdXosoKCgoi15dampdXosoKPxgISBxTExWVkxMcSAhISBxTExWVkxMcSAhAqCgoGCgoGCgoGCgoAACAAD/wAQAA8AADwAVAAABISIGFREUFjMhMjY1ETQmASc3FwEXA4D9ADVLSzUDADVLS/4L7VqTATNaA8BLNf0ANUtLNQMANUv85e5akgEyWgAAAAABAGX/wAObA8AAKQAAASImIyIHDgEHBhUUFjMuATU0NjcwBwYCBwYHFSETMzcjNx4BMzI2Nw4BAyBEaEZxU1RtGhtJSAYNZUoQEEs8PFkBPWzGLNc0LVUmLlAYHT0DsBAeHWE+P0FNOwsmN5lvA31+/sWPkCMZAgCA9gkPN2sJBwAAAAACAAAAAAQAA4AACQAXAAAlMwcnMxEjNxcjJREnIxEzFSE1MxEjBxEDgICgoICAoKCA/wBAwID+gIDAQMDAwAIAwMDA/wCA/UBAQALAgAEAAAMAwAAAA0ADgAAWAB8AKAAAAT4BNTQnLgEnJiMhESEyNz4BNzY1NCYBMzIWFRQGKwETIxEzMhYVFAYCxBwgFBRGLi81/sABgDUvLkYUFET+hGUqPDwpZp+fnyw+PgHbIlQvNS8uRhQU/IAUFEYuLzVGdAFGSzU1S/6AAQBLNTVLAAAAAAIAwAAAA0ADgAAfACMAAAEzERQHDgEHBiMiJy4BJyY1ETMRFBYXHgEzMjY3PgE1ASEVIQLAgBkZVzo7QkI7OlcZGYAbGBxJKChJHBgb/gACgP2AA4D+YDw0NU4WFxcWTjU0PAGg/mAeOBcYGxsYFzge/qCAAAAAAAEAgAAAA4ADgAALAAABFSMBMxUhNTMBIzUDgID+wID+QIABQIADgED9AEBAAwBAAAEAAAAABAADgAA9AAABFSMeARUUBgcOASMiJicuATUzFBYzMjY1NCYjITUhLgEnLgE1NDY3PgEzMhYXHgEVIzQmIyIGFRQWMzIWFwQA6xUWNTAscT4+cSwwNYByTk5yck7+AAEsAgQBMDU1MCxxPj5xLDA1gHJOTnJyTjtuKwHAQB1BIjViJCEkJCEkYjU0TEw0NExAAQMBJGI1NWIkISQkISRiNTRMTDQ0TCEfAAAACgAAAAAEAAOAAAMABwALAA8AEwAXABsAHwAjACcAABMRIREBNSEVHQEhNQEVITUjFSE1ESEVISUhFSERNSEVASEVISE1IRUABAD9gAEA/wABAP8AQP8AAQD/AAKAAQD/AAEA/IABAP8AAoABAAOA/IADgP3AwMBAwMACAMDAwMD/AMDAwAEAwMD+wMDAwAAABQAAAAAEAAOAAAMABwALAA8AEwAAEyEVIRUhFSERIRUhESEVIREhFSEABAD8AAKA/YACgP2ABAD8AAQA/AADgIBAgP8AgAFAgP8AgAAAAAAFAAAAAAQAA4AAAwAHAAsADwATAAATIRUhFyEVIREhFSEDIRUhESEVIQAEAPwAwAKA/YACgP2AwAQA/AAEAPwAA4CAQID/AIABQID/AIAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEFIRUhESEVIQEhFSERIRUhAAQA/AABgAKA/YACgP2A/oAEAPwABAD8AAOAgECA/wCAAUCA/wCAAAAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEVIRUhFSEVIRUhFSEVIRUhAAQA/AAEAPwABAD8AAQA/AAEAPwAA4CAQIBAgECAQIAAAAAGAAAAAAQAA4AAAwAHAAsADwATABYAABMhFSEFIRUhFSEVIRUhFSEFIRUhGQEFAAQA/AABgAKA/YACgP2AAoD9gP6ABAD8AAEAA4CAQIBAgECAQIABAAGAwAAAAAYAAAAABAADgAADAAcACwAPABMAFgAAEyEVIQUhFSEVIRUhFSEVIQUhFSEBESUABAD8AAGAAoD9gAKA/YACgP2A/oAEAPwAAQD/AAOAgECAQIBAgECAAoD+gMAAAQA/AD8C5gLmACwAACUUDwEGIyIvAQcGIyIvASY1ND8BJyY1ND8BNjMyHwE3NjMyHwEWFRQPARcWFQLmEE4QFxcQqKgQFxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQwxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQEE4QFxcQqKgQFwAAAAYAAAAAAyUDbgAUACgAPABNAFUAggAAAREUBwYrASInJjURNDc2OwEyFxYVMxEUBwYrASInJjURNDc2OwEyFxYXERQHBisBIicmNRE0NzY7ATIXFhMRIREUFxYXFjMhMjc2NzY1ASEnJicjBgcFFRQHBisBERQHBiMhIicmNREjIicmPQE0NzY7ATc2NzY7ATIXFh8BMzIXFhUBJQYFCCQIBQYGBQgkCAUGkgUFCCUIBQUFBQglCAUFkgUFCCUIBQUFBQglCAUFSf4ABAQFBAIB2wIEBAQE/oABABsEBrUGBAH3BgUINxobJv4lJhsbNwgFBQUFCLEoCBcWF7cXFhYJKLAIBQYCEv63CAUFBQUIAUkIBQYGBQj+twgFBQUFCAFJCAUGBgUI/rcIBQUFBQgBSQgFBgYF/lsCHf3jDQsKBQUFBQoLDQJmQwUCAgVVJAgGBf3jMCIjISIvAiAFBggkCAUFYBUPDw8PFWAFBQgAAgAHAEkDtwKvABoALgAACQEGIyIvASY1ND8BJyY1ND8BNjMyFwEWFRQHARUUBwYjISInJj0BNDc2MyEyFxYBTv72BgcIBR0GBuHhBgYdBQgHBgEKBgYCaQUFCP3bCAUFBQUIAiUIBQUBhf72BgYcBggHBuDhBgcHBh0FBf71BQgHBv77JQgFBQUFCCUIBQUFBQAAAAEAIwAAA90DbgCzAAAlIicmIyIHBiMiJyY1NDc2NzY3Njc2PQE0JyYjISIHBh0BFBcWFxYzFhcWFRQHBiMiJyYjIgcGIyInJjU0NzY3Njc2NzY9ARE0NTQ1NCc0JyYnJicmJyYnJiMiJyY1NDc2MzIXFjMyNzYzMhcWFRQHBiMGBwYHBh0BFBcWMyEyNzY9ATQnJicmJyY1NDc2MzIXFjMyNzYzMhcWFRQHBgciBwYHBhURFBcWFxYXMhcWFRQHBiMDwRkzMhoZMjMZDQgHCQoNDBEQChIBBxX+fhYHARUJEhMODgwLBwcOGzU1GhgxMRgNBwcJCQsMEA8JEgECAQIDBAQFCBIRDQ0KCwcHDho1NRoYMDEYDgcHCQoMDRAQCBQBBw8BkA4HARQKFxcPDgcHDhkzMhkZMTEZDgcHCgoNDRARCBQUCRERDg0KCwcHDgACAgICDAsPEQkJAQEDAwUMROAMBQMDBQzUUQ0GAQIBCAgSDwwNAgICAgwMDhEICQECAwMFDUUhAdACDQ0ICA4OCgoLCwcHAwYBAQgIEg8MDQICAgINDA8RCAgBAgEGDFC2DAcBAQcMtlAMBgEBBgcWDwwNAgICAg0MDxEICAEBAgYNT/3mRAwGAgIBCQgRDwwNAAACAAD/twP/A7cAEwA5AAABMhcWFRQHAgcGIyInJjU0NwE2MwEWFxYfARYHBiMiJyYnJicmNRYXFhcWFxYzMjc2NzY3Njc2NzY3A5soHh4avkw3RUg0NDUBbSEp/fgXJicvAQJMTHtHNjYhIRARBBMUEBASEQkXCA8SExUVHR0eHikDtxsaKCQz/plGNDU0SUkwAUsf/bErHx8NKHpNTBobLi86OkQDDw4LCwoKFiUbGhERCgsEBAIAAQAAAAAAAIWwaoFfDzz1AAsEAAAAAADbteOZAAAAANu145kAAP+3BWADwAAAAAgAAgAAAAAAAAABAAADwP/AAAAFgAAA//8FYAABAAAAAAAAAAAAAAAAAAAAKQQAAAAAAAAAAAAAAAIAAAAEAABBBAAAQQQAAAAEAAAABAAAAAQAAAAEAADABAAAAAQAAAAEAAAABAAAQAQAAAAFgAAABAAAAAQAAB4EAAAABAAAAAQAAAAEAAAABAAAZQQAAAAEAADABAAAwAQAAIAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAMlAD8DJQAAA74ABwQAACMD/wAAAAAAAAAKABQAHgBKAHYApADmAS4BkgHQAhYCXALQAw4DWAN+A6gEPgTeBPoFZAWOBdAF+AY6BnYGjgbmBy4HVgd+B6gHzgf8CCoIbgkmCXAKYgq+AAEAAAApALQACgAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
    }, function(l, o, t) {
      var s = t(20), u = t(153);
      u = u.__esModule ? u.default : u, typeof u == "string" && (u = [[l.i, u, ""]]);
      var f = {};
      f.insert = "head", f.singleton = !1, s(u, f), l.exports = u.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-toolbar {
  display: flex;
  padding: 0 6px;
  flex-wrap: wrap;
  position: relative;
  /* \u5355\u4E2A\u83DC\u5355 */
}
.w-e-toolbar .w-e-menu {
  position: relative;
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
}
.w-e-toolbar .w-e-menu i {
  color: #999;
}
.w-e-toolbar .w-e-menu:hover {
  background-color: #F6F6F6;
}
.w-e-toolbar .w-e-menu:hover i {
  color: #333;
}
.w-e-toolbar .w-e-active i {
  color: #1e88e5;
}
.w-e-toolbar .w-e-active:hover i {
  color: #1e88e5;
}
.w-e-menu-tooltip {
  position: absolute;
  display: flex;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 5px 6px;
  justify-content: center;
  align-items: center;
}
.w-e-menu-tooltip-up::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0.73);
}
.w-e-menu-tooltip-down::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0.73);
}
.w-e-menu-tooltip-item-wrapper {
  font-size: 14px;
  margin: 0 5px;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(20), u = t(155);
      u = u.__esModule ? u.default : u, typeof u == "string" && (u = [[l.i, u, ""]]);
      var f = {};
      f.insert = "head", f.singleton = !1, s(u, f), l.exports = u.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-text-container {
  position: relative;
  height: 100%;
}
.w-e-text-container .w-e-progress {
  position: absolute;
  background-color: #1e88e5;
  top: 0;
  left: 0;
  height: 1px;
}
.w-e-text-container .placeholder {
  color: #D4D4D4;
  position: absolute;
  font-size: 11pt;
  line-height: 22px;
  left: 10px;
  top: 10px;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  z-index: -1;
}
.w-e-text {
  padding: 0 10px;
  overflow-y: auto;
}
.w-e-text p,
.w-e-text h1,
.w-e-text h2,
.w-e-text h3,
.w-e-text h4,
.w-e-text h5,
.w-e-text table,
.w-e-text pre {
  margin: 10px 0;
  line-height: 1.5;
}
.w-e-text ul,
.w-e-text ol {
  margin: 10px 0 10px 20px;
}
.w-e-text blockquote {
  display: block;
  border-left: 8px solid #d0e5f2;
  padding: 5px 10px;
  margin: 10px 0;
  line-height: 1.4;
  font-size: 100%;
  background-color: #f1f1f1;
}
.w-e-text code {
  display: inline-block;
  background-color: #f1f1f1;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 0 3px;
}
.w-e-text pre code {
  display: block;
}
.w-e-text table {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
.w-e-text table td,
.w-e-text table th {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 3px 5px;
  min-height: 30px;
  height: 30px;
}
.w-e-text table th {
  border-bottom: 2px solid #ccc;
  text-align: center;
  background-color: #f1f1f1;
}
.w-e-text:focus {
  outline: none;
}
.w-e-text img {
  cursor: pointer;
}
.w-e-text img:hover {
  box-shadow: 0 0 5px #333;
}
.w-e-text .w-e-todo {
  margin: 0 0 0 20px;
}
.w-e-text .w-e-todo li {
  list-style: none;
  font-size: 1em;
}
.w-e-text .w-e-todo li span:nth-child(1) {
  position: relative;
  left: -18px;
}
.w-e-text .w-e-todo li span:nth-child(1) input {
  position: absolute;
  margin-right: 3px;
}
.w-e-text .w-e-todo li span:nth-child(1) input[type=checkbox] {
  top: 50%;
  margin-top: -6px;
}
.w-e-tooltip {
  position: absolute;
  display: flex;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 5px 6px;
  justify-content: center;
  align-items: center;
}
.w-e-tooltip-up::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0.73);
}
.w-e-tooltip-down::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0.73);
}
.w-e-tooltip-item-wrapper {
  cursor: pointer;
  font-size: 14px;
  margin: 0 5px;
}
.w-e-tooltip-item-wrapper:hover {
  color: #ccc;
  text-decoration: underline;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(20), u = t(157);
      u = u.__esModule ? u.default : u, typeof u == "string" && (u = [[l.i, u, ""]]);
      var f = {};
      f.insert = "head", f.singleton = !1, s(u, f), l.exports = u.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-menu .w-e-panel-container {
  position: absolute;
  top: 0;
  left: 50%;
  border: 1px solid #ccc;
  border-top: 0;
  box-shadow: 1px 1px 2px #ccc;
  color: #333;
  background-color: #fff;
  text-align: left;
  /* \u4E3A emotion panel \u5B9A\u5236\u7684\u6837\u5F0F */
  /* \u4E0A\u4F20\u56FE\u7247\u3001\u4E0A\u4F20\u89C6\u9891\u7684 panel \u5B9A\u5236\u6837\u5F0F */
}
.w-e-menu .w-e-panel-container .w-e-panel-close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px;
  margin: 2px 5px 0 0;
  cursor: pointer;
  color: #999;
}
.w-e-menu .w-e-panel-container .w-e-panel-close:hover {
  color: #333;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title {
  list-style: none;
  display: flex;
  font-size: 14px;
  margin: 2px 10px 0 10px;
  border-bottom: 1px solid #f1f1f1;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-item {
  padding: 3px 5px;
  color: #999;
  cursor: pointer;
  margin: 0 3px;
  position: relative;
  top: 1px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-active {
  color: #333;
  border-bottom: 1px solid #333;
  cursor: default;
  font-weight: 700;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content {
  padding: 10px 15px 10px 15px;
  font-size: 16px;
  /* \u8F93\u5165\u6846\u7684\u6837\u5F0F */
  /* \u6309\u94AE\u7684\u6837\u5F0F */
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input:focus,
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus,
.w-e-menu .w-e-panel-container .w-e-panel-tab-content button:focus {
  outline: none;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea {
  width: 100%;
  border: 1px solid #ccc;
  padding: 5px;
  margin-top: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus {
  border-color: #1e88e5;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text] {
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  height: 20px;
  color: #333;
  text-align: left;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].small {
  width: 30px;
  text-align: center;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].block {
  display: block;
  width: 100%;
  margin: 10px 0;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text]:focus {
  border-bottom: 2px solid #1e88e5;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button {
  font-size: 14px;
  color: #1e88e5;
  border: none;
  padding: 5px 10px;
  background-color: #fff;
  cursor: pointer;
  border-radius: 3px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.left {
  float: left;
  margin-right: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.right {
  float: right;
  margin-left: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.gray {
  color: #999;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.red {
  color: #c24f4a;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button:hover {
  background-color: #f1f1f1;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container:after {
  content: "";
  display: table;
  clear: both;
}
.w-e-menu .w-e-panel-container .w-e-emoticon-container .w-e-item {
  cursor: pointer;
  font-size: 18px;
  padding: 0 3px;
  display: inline-block;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container,
.w-e-menu .w-e-panel-container .w-e-up-video-container {
  text-align: center;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn,
.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn {
  display: inline-block;
  color: #999;
  cursor: pointer;
  font-size: 60px;
  line-height: 1;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn:hover,
.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn:hover {
  color: #333;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(20), u = t(159);
      u = u.__esModule ? u.default : u, typeof u == "string" && (u = [[l.i, u, ""]]);
      var f = {};
      f.insert = "head", f.singleton = !1, s(u, f), l.exports = u.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-toolbar .w-e-droplist {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fff;
  border: 1px solid #f1f1f1;
  border-right-color: #ccc;
  border-bottom-color: #ccc;
}
.w-e-toolbar .w-e-droplist .w-e-dp-title {
  text-align: center;
  color: #999;
  line-height: 2;
  border-bottom: 1px solid #f1f1f1;
  font-size: 13px;
}
.w-e-toolbar .w-e-droplist ul.w-e-list {
  list-style: none;
  line-height: 1;
}
.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item {
  color: #333;
  padding: 5px 0;
}
.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item:hover {
  background-color: #f1f1f1;
}
.w-e-toolbar .w-e-droplist ul.w-e-block {
  list-style: none;
  text-align: left;
  padding: 5px;
}
.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item {
  display: inline-block;
  padding: 3px 5px;
}
.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item:hover {
  background-color: #f1f1f1;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(0), u = s(t(161));
      Element.prototype.matches || (Element.prototype.matches = function(f) {
        var d = this.ownerDocument.querySelectorAll(f), m = d.length;
        for (m; m >= 0 && d.item(m) !== this; m--)
          ;
        return m > -1;
      }), u.default || (window.Promise = u.default);
    }, function(l, o, t) {
      l.exports = t(162);
    }, function(l, o, t) {
      var s = t(163);
      l.exports = s;
    }, function(l, o, t) {
      t(61), t(50), t(54), t(175), t(178), t(179);
      var s = t(9);
      l.exports = s.Promise;
    }, function(l, o, t) {
      var s = t(62), u = t(49), f = function(m) {
        return function(T, S) {
          var w = String(u(T)), b = s(S), g = w.length, x, v;
          return b < 0 || b >= g ? m ? "" : void 0 : (x = w.charCodeAt(b), x < 55296 || x > 56319 || b + 1 === g || (v = w.charCodeAt(b + 1)) < 56320 || v > 57343 ? m ? w.charAt(b) : x : m ? w.slice(b, b + 2) : (x - 55296 << 10) + (v - 56320) + 65536);
        };
      };
      l.exports = {
        codeAt: f(!1),
        charAt: f(!0)
      };
    }, function(l, o, t) {
      var s = t(8), u = t(101), f = s.WeakMap;
      l.exports = typeof f == "function" && /native code/.test(u(f));
    }, function(l, o, t) {
      var s = t(8), u = t(19);
      l.exports = function(f, d) {
        try {
          u(s, f, d);
        } catch {
          s[f] = d;
        }
        return d;
      };
    }, function(l, o, t) {
      var s = t(103).IteratorPrototype, u = t(77), f = t(48), d = t(36), m = t(43), T = function() {
        return this;
      };
      l.exports = function(S, w, b) {
        var g = w + " Iterator";
        return S.prototype = u(s, { next: f(1, b) }), d(S, g, !1, !0), m[g] = T, S;
      };
    }, function(l, o, t) {
      var s = t(11);
      l.exports = !s(function() {
        function u() {
        }
        return u.prototype.constructor = null, Object.getPrototypeOf(new u()) !== u.prototype;
      });
    }, function(l, o, t) {
      var s = t(14), u = t(18), f = t(25), d = t(52);
      l.exports = s ? Object.defineProperties : function(T, S) {
        f(T);
        for (var w = d(S), b = w.length, g = 0, x; b > g; )
          u.f(T, x = w[g++], S[x]);
        return T;
      };
    }, function(l, o, t) {
      var s = t(81), u = t(65);
      l.exports = s ? {}.toString : function() {
        return "[object " + u(this) + "]";
      };
    }, function(l, o, t) {
      var s = t(25), u = t(172);
      l.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var f = !1, d = {}, m;
        try {
          m = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, m.call(d, []), f = d instanceof Array;
        } catch {
        }
        return function(S, w) {
          return s(S), u(w), f ? m.call(S, w) : S.__proto__ = w, S;
        };
      }() : void 0);
    }, function(l, o, t) {
      var s = t(13);
      l.exports = function(u) {
        if (!s(u) && u !== null)
          throw TypeError("Can't set " + String(u) + " as a prototype");
        return u;
      };
    }, function(l, o, t) {
      var s = t(28), u = t(82), f = t(43), d = t(41), m = t(75), T = "Array Iterator", S = d.set, w = d.getterFor(T);
      l.exports = m(Array, "Array", function(b, g) {
        S(this, {
          type: T,
          target: s(b),
          index: 0,
          kind: g
        });
      }, function() {
        var b = w(this), g = b.target, x = b.kind, v = b.index++;
        return !g || v >= g.length ? (b.target = void 0, { value: void 0, done: !0 }) : x == "keys" ? { value: v, done: !1 } : x == "values" ? { value: g[v], done: !1 } : { value: [v, g[v]], done: !1 };
      }, "values"), f.Arguments = f.Array, u("keys"), u("values"), u("entries");
    }, function(l, o) {
      l.exports = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 };
    }, function(l, o, t) {
      var s = t(5), u = t(42), f = t(8), d = t(35), m = t(108), T = t(53), S = t(109), w = t(36), b = t(110), g = t(13), x = t(40), v = t(83), M = t(33), y = t(101), h = t(66), E = t(114), C = t(115), R = t(116).set, F = t(176), B = t(118), O = t(177), z = t(85), I = t(119), U = t(41), H = t(100), $ = t(10), P = t(86), Y = $("species"), Q = "Promise", K = U.get, q = U.set, X = U.getterFor(Q), _ = m, le = f.TypeError, Se = f.document, ve = f.process, ce = d("fetch"), ae = z.f, re = ae, se = M(ve) == "process", pe = !!(Se && Se.createEvent && f.dispatchEvent), Pe = "unhandledrejection", be = "rejectionhandled", je = 0, Ot = 1, Nt = 2, ot = 1, Et = 2, Bt, dt, Kt, Ue, Ht = H(Q, function() {
        var We = y(_) !== String(_);
        if (!We && (P === 66 || !se && typeof PromiseRejectionEvent != "function") || u && !_.prototype.finally)
          return !0;
        if (P >= 51 && /native code/.test(_))
          return !1;
        var Ce = _.resolve(1), me = function(oe) {
          oe(function() {
          }, function() {
          });
        }, Fe = Ce.constructor = {};
        return Fe[Y] = me, !(Ce.then(function() {
        }) instanceof me);
      }), Ar = Ht || !E(function(We) {
        _.all(We).catch(function() {
        });
      }), yn = function(Ce) {
        var me;
        return g(Ce) && typeof (me = Ce.then) == "function" ? me : !1;
      }, hn = function(Ce, me, Fe) {
        if (!me.notified) {
          me.notified = !0;
          var Ee = me.reactions;
          F(function() {
            for (var oe = me.value, De = me.state == Ot, ue = 0; Ee.length > ue; ) {
              var Ie = Ee[ue++], ze = De ? Ie.ok : Ie.fail, $e = Ie.resolve, Ge = Ie.reject, at = Ie.domain, Ze, $t, mt;
              try {
                ze ? (De || (me.rejection === Et && xn(Ce, me), me.rejection = ot), ze === !0 ? Ze = oe : (at && at.enter(), Ze = ze(oe), at && (at.exit(), mt = !0)), Ze === Ie.promise ? Ge(le("Promise-chain cycle")) : ($t = yn(Ze)) ? $t.call(Ze, $e, Ge) : $e(Ze)) : Ge(oe);
              } catch (qn) {
                at && !mt && at.exit(), Ge(qn);
              }
            }
            me.reactions = [], me.notified = !1, Fe && !me.rejection && An(Ce, me);
          });
        }
      }, In = function(Ce, me, Fe) {
        var Ee, oe;
        pe ? (Ee = Se.createEvent("Event"), Ee.promise = me, Ee.reason = Fe, Ee.initEvent(Ce, !1, !0), f.dispatchEvent(Ee)) : Ee = { promise: me, reason: Fe }, (oe = f["on" + Ce]) ? oe(Ee) : Ce === Pe && O("Unhandled promise rejection", Fe);
      }, An = function(Ce, me) {
        R.call(f, function() {
          var Fe = me.value, Ee = jt(me), oe;
          if (Ee && (oe = I(function() {
            se ? ve.emit("unhandledRejection", Fe, Ce) : In(Pe, Ce, Fe);
          }), me.rejection = se || jt(me) ? Et : ot, oe.error))
            throw oe.value;
        });
      }, jt = function(Ce) {
        return Ce.rejection !== ot && !Ce.parent;
      }, xn = function(Ce, me) {
        R.call(f, function() {
          se ? ve.emit("rejectionHandled", Ce) : In(be, Ce, me.value);
        });
      }, bt = function(Ce, me, Fe, Ee) {
        return function(oe) {
          Ce(me, Fe, oe, Ee);
        };
      }, Ke = function(Ce, me, Fe, Ee) {
        me.done || (me.done = !0, Ee && (me = Ee), me.value = Fe, me.state = Nt, hn(Ce, me, !0));
      }, Xt = function We(Ce, me, Fe, Ee) {
        if (!me.done) {
          me.done = !0, Ee && (me = Ee);
          try {
            if (Ce === Fe)
              throw le("Promise can't be resolved itself");
            var oe = yn(Fe);
            oe ? F(function() {
              var De = { done: !1 };
              try {
                oe.call(Fe, bt(We, Ce, De, me), bt(Ke, Ce, De, me));
              } catch (ue) {
                Ke(Ce, De, ue, me);
              }
            }) : (me.value = Fe, me.state = Ot, hn(Ce, me, !1));
          } catch (De) {
            Ke(Ce, { done: !1 }, De, me);
          }
        }
      };
      Ht && (_ = function(Ce) {
        v(this, _, Q), x(Ce), Bt.call(this);
        var me = K(this);
        try {
          Ce(bt(Xt, this, me), bt(Ke, this, me));
        } catch (Fe) {
          Ke(this, me, Fe);
        }
      }, Bt = function(Ce) {
        q(this, { type: Q, done: !1, notified: !1, parent: !1, reactions: [], rejection: !1, state: je, value: void 0 });
      }, Bt.prototype = S(_.prototype, {
        then: function(Ce, me) {
          var Fe = X(this), Ee = ae(C(this, _));
          return Ee.ok = typeof Ce == "function" ? Ce : !0, Ee.fail = typeof me == "function" && me, Ee.domain = se ? ve.domain : void 0, Fe.parent = !0, Fe.reactions.push(Ee), Fe.state != je && hn(this, Fe, !1), Ee.promise;
        },
        catch: function(Ce) {
          return this.then(void 0, Ce);
        }
      }), dt = function() {
        var Ce = new Bt(), me = K(Ce);
        this.promise = Ce, this.resolve = bt(Xt, Ce, me), this.reject = bt(Ke, Ce, me);
      }, z.f = ae = function(Ce) {
        return Ce === _ || Ce === Kt ? new dt(Ce) : re(Ce);
      }, !u && typeof m == "function" && (Ue = m.prototype.then, T(m.prototype, "then", function(Ce, me) {
        var Fe = this;
        return new _(function(Ee, oe) {
          Ue.call(Fe, Ee, oe);
        }).then(Ce, me);
      }, { unsafe: !0 }), typeof ce == "function" && s({ global: !0, enumerable: !0, forced: !0 }, {
        fetch: function(Ce) {
          return B(_, ce.apply(f, arguments));
        }
      }))), s({ global: !0, wrap: !0, forced: Ht }, { Promise: _ }), w(_, Q, !1, !0), b(Q), Kt = d(Q), s({ target: Q, stat: !0, forced: Ht }, {
        reject: function(Ce) {
          var me = ae(this);
          return me.reject.call(void 0, Ce), me.promise;
        }
      }), s({ target: Q, stat: !0, forced: u || Ht }, {
        resolve: function(Ce) {
          return B(u && this === Kt ? _ : this, Ce);
        }
      }), s({ target: Q, stat: !0, forced: Ar }, {
        all: function(Ce) {
          var me = this, Fe = ae(me), Ee = Fe.resolve, oe = Fe.reject, De = I(function() {
            var ue = x(me.resolve), Ie = [], ze = 0, $e = 1;
            h(Ce, function(Ge) {
              var at = ze++, Ze = !1;
              Ie.push(void 0), $e++, ue.call(me, Ge).then(function($t) {
                Ze || (Ze = !0, Ie[at] = $t, --$e || Ee(Ie));
              }, oe);
            }), --$e || Ee(Ie);
          });
          return De.error && oe(De.value), Fe.promise;
        },
        race: function(Ce) {
          var me = this, Fe = ae(me), Ee = Fe.reject, oe = I(function() {
            var De = x(me.resolve);
            h(Ce, function(ue) {
              De.call(me, ue).then(Fe.resolve, Ee);
            });
          });
          return oe.error && Ee(oe.value), Fe.promise;
        }
      });
    }, function(l, o, t) {
      var s = t(8), u = t(71).f, f = t(33), d = t(116).set, m = t(117), T = s.MutationObserver || s.WebKitMutationObserver, S = s.process, w = s.Promise, b = f(S) == "process", g = u(s, "queueMicrotask"), x = g && g.value, v, M, y, h, E, C, R, F;
      x || (v = function() {
        var O, z;
        for (b && (O = S.domain) && O.exit(); M; ) {
          z = M.fn, M = M.next;
          try {
            z();
          } catch (I) {
            throw M ? h() : y = void 0, I;
          }
        }
        y = void 0, O && O.enter();
      }, b ? h = function() {
        S.nextTick(v);
      } : T && !m ? (E = !0, C = document.createTextNode(""), new T(v).observe(C, { characterData: !0 }), h = function() {
        C.data = E = !E;
      }) : w && w.resolve ? (R = w.resolve(void 0), F = R.then, h = function() {
        F.call(R, v);
      }) : h = function() {
        d.call(s, v);
      }), l.exports = x || function(B) {
        var O = { fn: B, next: void 0 };
        y && (y.next = O), M || (M = O, h()), y = O;
      };
    }, function(l, o, t) {
      var s = t(8);
      l.exports = function(u, f) {
        var d = s.console;
        d && d.error && (arguments.length === 1 ? d.error(u) : d.error(u, f));
      };
    }, function(l, o, t) {
      var s = t(5), u = t(40), f = t(85), d = t(119), m = t(66);
      s({ target: "Promise", stat: !0 }, { allSettled: function(S) {
        var w = this, b = f.f(w), g = b.resolve, x = b.reject, v = d(function() {
          var M = u(w.resolve), y = [], h = 0, E = 1;
          m(S, function(C) {
            var R = h++, F = !1;
            y.push(void 0), E++, M.call(w, C).then(function(B) {
              F || (F = !0, y[R] = { status: "fulfilled", value: B }, --E || g(y));
            }, function(B) {
              F || (F = !0, y[R] = { status: "rejected", reason: B }, --E || g(y));
            });
          }), --E || g(y);
        });
        return v.error && x(v.value), b.promise;
      } });
    }, function(l, o, t) {
      var s = t(5), u = t(42), f = t(108), d = t(11), m = t(35), T = t(115), S = t(118), w = t(53), b = !!f && d(function() {
        f.prototype.finally.call({ then: function() {
        } }, function() {
        });
      });
      s({ target: "Promise", proto: !0, real: !0, forced: b }, { finally: function(x) {
        var v = T(this, m("Promise")), M = typeof x == "function";
        return this.then(M ? function(y) {
          return S(v, x()).then(function() {
            return y;
          });
        } : x, M ? function(y) {
          return S(v, x()).then(function() {
            throw y;
          });
        } : x);
      } }), !u && typeof f == "function" && !f.prototype.finally && w(f.prototype, "finally", m("Promise").prototype.finally);
    }, function(l, o, t) {
      t(54);
      var s = t(181), u = t(65), f = Array.prototype, d = { DOMTokenList: !0, NodeList: !0 };
      l.exports = function(m) {
        var T = m.forEach;
        return m === f || m instanceof Array && T === f.forEach || d.hasOwnProperty(u(m)) ? s : T;
      };
    }, function(l, o, t) {
      var s = t(182);
      l.exports = s;
    }, function(l, o, t) {
      t(183);
      var s = t(15);
      l.exports = s("Array").forEach;
    }, function(l, o, t) {
      var s = t(5), u = t(184);
      s({ target: "Array", proto: !0, forced: [].forEach != u }, { forEach: u });
    }, function(l, o, t) {
      var s = t(30).forEach, u = t(67), f = t(22), d = u("forEach"), m = f("forEach");
      l.exports = !d || !m ? function(S) {
        return s(this, S, arguments.length > 1 ? arguments[1] : void 0);
      } : [].forEach;
    }, function(l, o, t) {
      var s = t(186);
      l.exports = s;
    }, function(l, o, t) {
      t(187);
      var s = t(9);
      l.exports = s.Array.isArray;
    }, function(l, o, t) {
      var s = t(5), u = t(55);
      s({ target: "Array", stat: !0 }, { isArray: u });
    }, function(l, o, t) {
      var s = t(189);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(190), u = Array.prototype;
      l.exports = function(f) {
        var d = f.map;
        return f === u || f instanceof Array && d === u.map ? s : d;
      };
    }, function(l, o, t) {
      t(191);
      var s = t(15);
      l.exports = s("Array").map;
    }, function(l, o, t) {
      var s = t(5), u = t(30).map, f = t(56), d = t(22), m = f("map"), T = d("map");
      s({ target: "Array", proto: !0, forced: !m || !T }, { map: function(w) {
        return u(this, w, arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(l, o, t) {
      var s = t(193);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(194), u = String.prototype;
      l.exports = function(f) {
        var d = f.trim;
        return typeof f == "string" || f === u || f instanceof String && d === u.trim ? s : d;
      };
    }, function(l, o, t) {
      t(195);
      var s = t(15);
      l.exports = s("String").trim;
    }, function(l, o, t) {
      var s = t(5), u = t(90).trim, f = t(196);
      s({ target: "String", proto: !0, forced: f("trim") }, { trim: function() {
        return u(this);
      } });
    }, function(l, o, t) {
      var s = t(11), u = t(68), f = "\u200B\x85\u180E";
      l.exports = function(d) {
        return s(function() {
          return !!u[d]() || f[d]() != f || u[d].name !== d;
        });
      };
    }, function(l, o, t) {
      var s = t(198);
      l.exports = s;
    }, function(l, o, t) {
      t(199), t(61), t(50), t(54);
      var s = t(9);
      l.exports = s.Map;
    }, function(l, o, t) {
      var s = t(121), u = t(123);
      l.exports = s("Map", function(f) {
        return function() {
          return f(this, arguments.length ? arguments[0] : void 0);
        };
      }, u);
    }, function(l, o, t) {
      var s = t(11);
      l.exports = !s(function() {
        return Object.isExtensible(Object.preventExtensions({}));
      });
    }, function(l, o, t) {
      var s = t(202);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(203), u = Array.prototype;
      l.exports = function(f) {
        var d = f.indexOf;
        return f === u || f instanceof Array && d === u.indexOf ? s : d;
      };
    }, function(l, o, t) {
      t(204);
      var s = t(15);
      l.exports = s("Array").indexOf;
    }, function(l, o, t) {
      var s = t(5), u = t(78).indexOf, f = t(67), d = t(22), m = [].indexOf, T = !!m && 1 / [1].indexOf(1, -0) < 0, S = f("indexOf"), w = d("indexOf", { ACCESSORS: !0, 1: 0 });
      s({ target: "Array", proto: !0, forced: T || !S || !w }, { indexOf: function(g) {
        return T ? m.apply(this, arguments) || 0 : u(this, g, arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(l, o, t) {
      var s = t(206);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(207), u = Array.prototype;
      l.exports = function(f) {
        var d = f.splice;
        return f === u || f instanceof Array && d === u.splice ? s : d;
      };
    }, function(l, o, t) {
      t(208);
      var s = t(15);
      l.exports = s("Array").splice;
    }, function(l, o, t) {
      var s = t(5), u = t(79), f = t(62), d = t(34), m = t(29), T = t(88), S = t(69), w = t(56), b = t(22), g = w("splice"), x = b("splice", { ACCESSORS: !0, 0: 0, 1: 2 }), v = Math.max, M = Math.min, y = 9007199254740991, h = "Maximum allowed length exceeded";
      s({ target: "Array", proto: !0, forced: !g || !x }, { splice: function(C, R) {
        var F = m(this), B = d(F.length), O = u(C, B), z = arguments.length, I, U, H, $, P, Y;
        if (z === 0 ? I = U = 0 : z === 1 ? (I = 0, U = B - O) : (I = z - 2, U = M(v(f(R), 0), B - O)), B + I - U > y)
          throw TypeError(h);
        for (H = T(F, U), $ = 0; $ < U; $++)
          P = O + $, P in F && S(H, $, F[P]);
        if (H.length = U, I < U) {
          for ($ = O; $ < B - U; $++)
            P = $ + U, Y = $ + I, P in F ? F[Y] = F[P] : delete F[Y];
          for ($ = B; $ > B - U + I; $--)
            delete F[$ - 1];
        } else if (I > U)
          for ($ = B - U; $ > O; $--)
            P = $ + U - 1, Y = $ + I - 1, P in F ? F[Y] = F[P] : delete F[Y];
        for ($ = 0; $ < I; $++)
          F[$ + O] = arguments[$ + 2];
        return F.length = B - U + I, H;
      } });
    }, function(l, o, t) {
      var s = t(210);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(211), u = Array.prototype;
      l.exports = function(f) {
        var d = f.filter;
        return f === u || f instanceof Array && d === u.filter ? s : d;
      };
    }, function(l, o, t) {
      t(212);
      var s = t(15);
      l.exports = s("Array").filter;
    }, function(l, o, t) {
      var s = t(5), u = t(30).filter, f = t(56), d = t(22), m = f("filter"), T = d("filter");
      s({ target: "Array", proto: !0, forced: !m || !T }, { filter: function(w) {
        return u(this, w, arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(l, o, t) {
      var s = t(214);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(215), u = t(217), f = Array.prototype, d = String.prototype;
      l.exports = function(m) {
        var T = m.includes;
        return m === f || m instanceof Array && T === f.includes ? s : typeof m == "string" || m === d || m instanceof String && T === d.includes ? u : T;
      };
    }, function(l, o, t) {
      t(216);
      var s = t(15);
      l.exports = s("Array").includes;
    }, function(l, o, t) {
      var s = t(5), u = t(78).includes, f = t(82), d = t(22), m = d("indexOf", { ACCESSORS: !0, 1: 0 });
      s({ target: "Array", proto: !0, forced: !m }, { includes: function(S) {
        return u(this, S, arguments.length > 1 ? arguments[1] : void 0);
      } }), f("includes");
    }, function(l, o, t) {
      t(218);
      var s = t(15);
      l.exports = s("String").includes;
    }, function(l, o, t) {
      var s = t(5), u = t(219), f = t(49), d = t(221);
      s({ target: "String", proto: !0, forced: !d("includes") }, { includes: function(T) {
        return !!~String(f(this)).indexOf(u(T), arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(l, o, t) {
      var s = t(220);
      l.exports = function(u) {
        if (s(u))
          throw TypeError("The method doesn't accept regular expressions");
        return u;
      };
    }, function(l, o, t) {
      var s = t(13), u = t(33), f = t(10), d = f("match");
      l.exports = function(m) {
        var T;
        return s(m) && ((T = m[d]) !== void 0 ? !!T : u(m) == "RegExp");
      };
    }, function(l, o, t) {
      var s = t(10), u = s("match");
      l.exports = function(f) {
        var d = /./;
        try {
          "/./"[f](d);
        } catch {
          try {
            return d[u] = !1, "/./"[f](d);
          } catch {
          }
        }
        return !1;
      };
    }, function(l, o, t) {
      var s = t(223);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(224), u = Function.prototype;
      l.exports = function(f) {
        var d = f.bind;
        return f === u || f instanceof Function && d === u.bind ? s : d;
      };
    }, function(l, o, t) {
      t(225);
      var s = t(15);
      l.exports = s("Function").bind;
    }, function(l, o, t) {
      var s = t(5), u = t(226);
      s({ target: "Function", proto: !0 }, { bind: u });
    }, function(l, o, t) {
      var s = t(40), u = t(13), f = [].slice, d = {}, m = function(S, w, b) {
        if (!(w in d)) {
          for (var g = [], x = 0; x < w; x++)
            g[x] = "a[" + x + "]";
          d[w] = Function("C,a", "return new C(" + g.join(",") + ")");
        }
        return d[w](S, b);
      };
      l.exports = Function.bind || function(S) {
        var w = s(this), b = f.call(arguments, 1), g = function() {
          var v = b.concat(f.call(arguments));
          return this instanceof g ? m(w, v.length, v) : w.apply(S, v);
        };
        return u(w.prototype) && (g.prototype = w.prototype), g;
      };
    }, function(l, o, t) {
      l.exports = t(228);
    }, function(l, o, t) {
      var s = t(229);
      l.exports = s;
    }, function(l, o, t) {
      t(124), t(50), t(54);
      var s = t(93);
      l.exports = s.f("iterator");
    }, function(l, o, t) {
      l.exports = t(231);
    }, function(l, o, t) {
      var s = t(232);
      t(251), t(252), t(253), t(254), t(255), l.exports = s;
    }, function(l, o, t) {
      t(233), t(61), t(234), t(236), t(237), t(238), t(239), t(124), t(240), t(241), t(242), t(243), t(244), t(245), t(246), t(247), t(248), t(249), t(250);
      var s = t(9);
      l.exports = s.Symbol;
    }, function(l, o, t) {
      var s = t(5), u = t(11), f = t(55), d = t(13), m = t(29), T = t(34), S = t(69), w = t(88), b = t(56), g = t(10), x = t(86), v = g("isConcatSpreadable"), M = 9007199254740991, y = "Maximum allowed index exceeded", h = x >= 51 || !u(function() {
        var F = [];
        return F[v] = !1, F.concat()[0] !== F;
      }), E = b("concat"), C = function(B) {
        if (!d(B))
          return !1;
        var O = B[v];
        return O !== void 0 ? !!O : f(B);
      }, R = !h || !E;
      s({ target: "Array", proto: !0, forced: R }, { concat: function(B) {
        var O = m(this), z = w(O, 0), I = 0, U, H, $, P, Y;
        for (U = -1, $ = arguments.length; U < $; U++)
          if (Y = U === -1 ? O : arguments[U], C(Y)) {
            if (P = T(Y.length), I + P > M)
              throw TypeError(y);
            for (H = 0; H < P; H++, I++)
              H in Y && S(z, I, Y[H]);
          } else {
            if (I >= M)
              throw TypeError(y);
            S(z, I++, Y);
          }
        return z.length = I, z;
      } });
    }, function(l, o, t) {
      var s = t(5), u = t(8), f = t(35), d = t(42), m = t(14), T = t(76), S = t(105), w = t(11), b = t(16), g = t(55), x = t(13), v = t(25), M = t(29), y = t(28), h = t(60), E = t(48), C = t(77), R = t(52), F = t(125), B = t(235), O = t(126), z = t(71), I = t(18), U = t(59), H = t(19), $ = t(53), P = t(74), Y = t(63), Q = t(51), K = t(64), q = t(10), X = t(93), _ = t(12), le = t(36), Se = t(41), ve = t(30).forEach, ce = Y("hidden"), ae = "Symbol", re = "prototype", se = q("toPrimitive"), pe = Se.set, Pe = Se.getterFor(ae), be = Object[re], je = u.Symbol, Ot = f("JSON", "stringify"), Nt = z.f, ot = I.f, Et = B.f, Bt = U.f, dt = P("symbols"), Kt = P("op-symbols"), Ue = P("string-to-symbol-registry"), Ht = P("symbol-to-string-registry"), Ar = P("wks"), yn = u.QObject, hn = !yn || !yn[re] || !yn[re].findChild, In = m && w(function() {
        return C(ot({}, "a", { get: function() {
          return ot(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(Ee, oe, De) {
        var ue = Nt(be, oe);
        ue && delete be[oe], ot(Ee, oe, De), ue && Ee !== be && ot(be, oe, ue);
      } : ot, An = function(oe, De) {
        var ue = dt[oe] = C(je[re]);
        return pe(ue, { type: ae, tag: oe, description: De }), m || (ue.description = De), ue;
      }, jt = S ? function(Ee) {
        return Pt(Ee) == "symbol";
      } : function(Ee) {
        return Object(Ee) instanceof je;
      }, xn = function(oe, De, ue) {
        oe === be && xn(Kt, De, ue), v(oe);
        var Ie = h(De, !0);
        return v(ue), b(dt, Ie) ? (ue.enumerable ? (b(oe, ce) && oe[ce][Ie] && (oe[ce][Ie] = !1), ue = C(ue, { enumerable: E(0, !1) })) : (b(oe, ce) || ot(oe, ce, E(1, {})), oe[ce][Ie] = !0), In(oe, Ie, ue)) : ot(oe, Ie, ue);
      }, bt = function(oe, De) {
        v(oe);
        var ue = y(De), Ie = R(ue).concat(me(ue));
        return ve(Ie, function(ze) {
          (!m || Xt.call(ue, ze)) && xn(oe, ze, ue[ze]);
        }), oe;
      }, Ke = function(oe, De) {
        return De === void 0 ? C(oe) : bt(C(oe), De);
      }, Xt = function(oe) {
        var De = h(oe, !0), ue = Bt.call(this, De);
        return this === be && b(dt, De) && !b(Kt, De) ? !1 : ue || !b(this, De) || !b(dt, De) || b(this, ce) && this[ce][De] ? ue : !0;
      }, We = function(oe, De) {
        var ue = y(oe), Ie = h(De, !0);
        if (!(ue === be && b(dt, Ie) && !b(Kt, Ie))) {
          var ze = Nt(ue, Ie);
          return ze && b(dt, Ie) && !(b(ue, ce) && ue[ce][Ie]) && (ze.enumerable = !0), ze;
        }
      }, Ce = function(oe) {
        var De = Et(y(oe)), ue = [];
        return ve(De, function(Ie) {
          !b(dt, Ie) && !b(Q, Ie) && ue.push(Ie);
        }), ue;
      }, me = function(oe) {
        var De = oe === be, ue = Et(De ? Kt : y(oe)), Ie = [];
        return ve(ue, function(ze) {
          b(dt, ze) && (!De || b(be, ze)) && Ie.push(dt[ze]);
        }), Ie;
      };
      if (T || (je = function() {
        if (this instanceof je)
          throw TypeError("Symbol is not a constructor");
        var oe = !arguments.length || arguments[0] === void 0 ? void 0 : String(arguments[0]), De = K(oe), ue = function Ie(ze) {
          this === be && Ie.call(Kt, ze), b(this, ce) && b(this[ce], De) && (this[ce][De] = !1), In(this, De, E(1, ze));
        };
        return m && hn && In(be, De, { configurable: !0, set: ue }), An(De, oe);
      }, $(je[re], "toString", function() {
        return Pe(this).tag;
      }), $(je, "withoutSetter", function(Ee) {
        return An(K(Ee), Ee);
      }), U.f = Xt, I.f = xn, z.f = We, F.f = B.f = Ce, O.f = me, X.f = function(Ee) {
        return An(q(Ee), Ee);
      }, m && (ot(je[re], "description", { configurable: !0, get: function() {
        return Pe(this).description;
      } }), d || $(be, "propertyIsEnumerable", Xt, { unsafe: !0 }))), s({ global: !0, wrap: !0, forced: !T, sham: !T }, { Symbol: je }), ve(R(Ar), function(Ee) {
        _(Ee);
      }), s({ target: ae, stat: !0, forced: !T }, {
        for: function(oe) {
          var De = String(oe);
          if (b(Ue, De))
            return Ue[De];
          var ue = je(De);
          return Ue[De] = ue, Ht[ue] = De, ue;
        },
        keyFor: function(oe) {
          if (!jt(oe))
            throw TypeError(oe + " is not a symbol");
          if (b(Ht, oe))
            return Ht[oe];
        },
        useSetter: function() {
          hn = !0;
        },
        useSimple: function() {
          hn = !1;
        }
      }), s({ target: "Object", stat: !0, forced: !T, sham: !m }, {
        create: Ke,
        defineProperty: xn,
        defineProperties: bt,
        getOwnPropertyDescriptor: We
      }), s({ target: "Object", stat: !0, forced: !T }, {
        getOwnPropertyNames: Ce,
        getOwnPropertySymbols: me
      }), s({ target: "Object", stat: !0, forced: w(function() {
        O.f(1);
      }) }, { getOwnPropertySymbols: function(oe) {
        return O.f(M(oe));
      } }), Ot) {
        var Fe = !T || w(function() {
          var Ee = je();
          return Ot([Ee]) != "[null]" || Ot({ a: Ee }) != "{}" || Ot(Object(Ee)) != "{}";
        });
        s({ target: "JSON", stat: !0, forced: Fe }, {
          stringify: function(oe, De, ue) {
            for (var Ie = [oe], ze = 1, $e; arguments.length > ze; )
              Ie.push(arguments[ze++]);
            if ($e = De, !(!x(De) && oe === void 0 || jt(oe)))
              return g(De) || (De = function(at, Ze) {
                if (typeof $e == "function" && (Ze = $e.call(this, at, Ze)), !jt(Ze))
                  return Ze;
              }), Ie[1] = De, Ot.apply(null, Ie);
          }
        });
      }
      je[re][se] || H(je[re], se, je[re].valueOf), le(je, ae), Q[ce] = !0;
    }, function(l, o, t) {
      var s = t(28), u = t(125).f, f = {}.toString, d = (typeof window > "u" ? "undefined" : Pt(window)) == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], m = function(S) {
        try {
          return u(S);
        } catch {
          return d.slice();
        }
      };
      l.exports.f = function(S) {
        return d && f.call(S) == "[object Window]" ? m(S) : u(s(S));
      };
    }, function(l, o, t) {
      var s = t(12);
      s("asyncIterator");
    }, function(l, o) {
    }, function(l, o, t) {
      var s = t(12);
      s("hasInstance");
    }, function(l, o, t) {
      var s = t(12);
      s("isConcatSpreadable");
    }, function(l, o, t) {
      var s = t(12);
      s("match");
    }, function(l, o, t) {
      var s = t(12);
      s("matchAll");
    }, function(l, o, t) {
      var s = t(12);
      s("replace");
    }, function(l, o, t) {
      var s = t(12);
      s("search");
    }, function(l, o, t) {
      var s = t(12);
      s("species");
    }, function(l, o, t) {
      var s = t(12);
      s("split");
    }, function(l, o, t) {
      var s = t(12);
      s("toPrimitive");
    }, function(l, o, t) {
      var s = t(12);
      s("toStringTag");
    }, function(l, o, t) {
      var s = t(12);
      s("unscopables");
    }, function(l, o, t) {
      var s = t(36);
      s(Math, "Math", !0);
    }, function(l, o, t) {
      var s = t(8), u = t(36);
      u(s.JSON, "JSON", !0);
    }, function(l, o, t) {
      var s = t(12);
      s("asyncDispose");
    }, function(l, o, t) {
      var s = t(12);
      s("dispose");
    }, function(l, o, t) {
      var s = t(12);
      s("observable");
    }, function(l, o, t) {
      var s = t(12);
      s("patternMatch");
    }, function(l, o, t) {
      var s = t(12);
      s("replaceAll");
    }, function(l, o, t) {
      l.exports = t(257);
    }, function(l, o, t) {
      var s = t(258);
      l.exports = s;
    }, function(l, o, t) {
      t(259);
      var s = t(9);
      l.exports = s.parseInt;
    }, function(l, o, t) {
      var s = t(5), u = t(260);
      s({ global: !0, forced: parseInt != u }, { parseInt: u });
    }, function(l, o, t) {
      var s = t(8), u = t(90).trim, f = t(68), d = s.parseInt, m = /^[+-]?0[Xx]/, T = d(f + "08") !== 8 || d(f + "0x16") !== 22;
      l.exports = T ? function(w, b) {
        var g = u(String(w));
        return d(g, b >>> 0 || (m.test(g) ? 16 : 10));
      } : d;
    }, function(l, o, t) {
      var s = t(262);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(263), u = Array.prototype;
      l.exports = function(f) {
        var d = f.slice;
        return f === u || f instanceof Array && d === u.slice ? s : d;
      };
    }, function(l, o, t) {
      t(264);
      var s = t(15);
      l.exports = s("Array").slice;
    }, function(l, o, t) {
      var s = t(5), u = t(13), f = t(55), d = t(79), m = t(34), T = t(28), S = t(69), w = t(10), b = t(56), g = t(22), x = b("slice"), v = g("slice", { ACCESSORS: !0, 0: 0, 1: 2 }), M = w("species"), y = [].slice, h = Math.max;
      s({ target: "Array", proto: !0, forced: !x || !v }, { slice: function(C, R) {
        var F = T(this), B = m(F.length), O = d(C, B), z = d(R === void 0 ? B : R, B), I, U, H;
        if (f(F) && (I = F.constructor, typeof I == "function" && (I === Array || f(I.prototype)) ? I = void 0 : u(I) && (I = I[M], I === null && (I = void 0)), I === Array || I === void 0))
          return y.call(F, O, z);
        for (U = new (I === void 0 ? Array : I)(h(z - O, 0)), H = 0; O < z; O++, H++)
          O in F && S(U, H, F[O]);
        return U.length = H, U;
      } });
    }, function(l, o, t) {
      t(266);
      var s = t(9);
      l.exports = s.setTimeout;
    }, function(l, o, t) {
      var s = t(5), u = t(8), f = t(84), d = [].slice, m = /MSIE .\./.test(f), T = function(w) {
        return function(b, g) {
          var x = arguments.length > 2, v = x ? d.call(arguments, 2) : void 0;
          return w(x ? function() {
            (typeof b == "function" ? b : Function(b)).apply(this, v);
          } : b, g);
        };
      };
      s({ global: !0, bind: !0, forced: m }, {
        setTimeout: T(u.setTimeout),
        setInterval: T(u.setInterval)
      });
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(127));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), m = d.__importDefault(t(272)), T = d.__importDefault(t(273)), S = d.__importDefault(t(128)), w = d.__importDefault(t(274)), b = d.__importDefault(t(275)), g = d.__importDefault(t(276)), x = d.__importDefault(t(129)), v = d.__importDefault(t(277)), M = d.__importDefault(t(278)), y = d.__importDefault(t(279)), h = (0, f.default)(
        {},
        m.default,
        T.default,
        S.default,
        b.default,
        w.default,
        g.default,
        x.default,
        v.default,
        M.default,
        y.default,
        { linkCheck: function(C, R) {
          return !0;
        } }
      );
      o.default = h;
    }, function(l, o, t) {
      var s = t(269);
      l.exports = s;
    }, function(l, o, t) {
      t(270);
      var s = t(9);
      l.exports = s.Object.assign;
    }, function(l, o, t) {
      var s = t(5), u = t(271);
      s({ target: "Object", stat: !0, forced: Object.assign !== u }, { assign: u });
    }, function(l, o, t) {
      var s = t(14), u = t(11), f = t(52), d = t(126), m = t(59), T = t(29), S = t(72), w = Object.assign, b = Object.defineProperty;
      l.exports = !w || u(function() {
        if (s && w({ b: 1 }, w(b({}, "a", { enumerable: !0, get: function() {
          b(this, "b", { value: 3, enumerable: !1 });
        } }), { b: 2 })).b !== 1)
          return !0;
        var g = {}, x = {}, v = Symbol(), M = "abcdefghijklmnopqrst";
        return g[v] = 7, M.split("").forEach(function(y) {
          x[y] = y;
        }), w({}, g)[v] != 7 || f(w({}, x)).join("") != M;
      }) ? function(x, v) {
        for (var M = T(x), y = arguments.length, h = 1, E = d.f, C = m.f; y > h; )
          for (var R = S(arguments[h++]), F = E ? f(R).concat(E(R)) : f(R), B = F.length, O = 0, z; B > O; )
            z = F[O++], (!s || C.call(R, z)) && (M[z] = R[z]);
        return M;
      } : w;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.default = {
        menus: [
          "head",
          "bold",
          "fontSize",
          "fontName",
          "italic",
          "underline",
          "strikeThrough",
          "indent",
          "lineHeight",
          "foreColor",
          "backColor",
          "link",
          "list",
          "todo",
          "justify",
          "quote",
          "emoticon",
          "image",
          "video",
          "table",
          "code",
          "splitLine",
          "undo",
          "redo"
        ],
        fontNames: ["\u9ED1\u4F53", "\u4EFF\u5B8B", "\u6977\u4F53", "\u6807\u6977\u4F53", "\u534E\u6587\u4EFF\u5B8B", "\u534E\u6587\u6977\u4F53", "\u5B8B\u4F53", "\u5FAE\u8F6F\u96C5\u9ED1", "Arial", "Tahoma", "Verdana", "Times New Roman", "Courier New"],
        fontSizes: { "x-small": { name: "10px", value: "1" }, small: { name: "13px", value: "2" }, normal: { name: "16px", value: "3" }, large: { name: "18px", value: "4" }, "x-large": { name: "24px", value: "5" }, "xx-large": { name: "32px", value: "6" }, "xxx-large": { name: "48px", value: "7" } },
        colors: ["#000000", "#ffffff", "#eeece0", "#1c487f", "#4d80bf", "#c24f4a", "#8baa4a", "#7b5ba1", "#46acc8", "#f9963b"],
        languageType: ["Bash", "C", "C#", "C++", "CSS", "Java", "JavaScript", "JSON", "TypeScript", "Plain text", "Html", "XML", "SQL", "Go", "Kotlin", "Lua", "Markdown", "PHP", "Python", "Shell Session", "Ruby"],
        languageTab: "\u3000\u3000\u3000\u3000",
        emotions: [{
          title: "\u8868\u60C5",
          type: "emoji",
          content: "\u{1F600} \u{1F603} \u{1F604} \u{1F601} \u{1F606} \u{1F605} \u{1F602} \u{1F923} \u{1F60A} \u{1F607} \u{1F642} \u{1F643} \u{1F609} \u{1F60C} \u{1F60D} \u{1F618} \u{1F617} \u{1F619} \u{1F61A} \u{1F60B} \u{1F61B} \u{1F61D} \u{1F61C} \u{1F913} \u{1F60E} \u{1F60F} \u{1F612} \u{1F61E} \u{1F614} \u{1F61F} \u{1F615} \u{1F641} \u{1F623} \u{1F616} \u{1F62B} \u{1F629} \u{1F622} \u{1F62D} \u{1F624} \u{1F620} \u{1F621} \u{1F633} \u{1F631} \u{1F628} \u{1F917} \u{1F914} \u{1F636} \u{1F611} \u{1F62C} \u{1F644} \u{1F62F} \u{1F634} \u{1F637} \u{1F911} \u{1F608} \u{1F921} \u{1F4A9} \u{1F47B} \u{1F480} \u{1F440} \u{1F463}".split(/\s/)
        }, {
          title: "\u624B\u52BF",
          type: "emoji",
          content: "\u{1F450} \u{1F64C} \u{1F44F} \u{1F91D} \u{1F44D} \u{1F44E} \u{1F44A} \u270A \u{1F91B} \u{1F91C} \u{1F91E} \u270C\uFE0F \u{1F918} \u{1F44C} \u{1F448} \u{1F449} \u{1F446} \u{1F447} \u261D\uFE0F \u270B \u{1F91A} \u{1F590} \u{1F596} \u{1F44B} \u{1F919} \u{1F4AA} \u{1F595} \u270D\uFE0F \u{1F64F}".split(/\s/)
        }],
        lineHeights: ["1", "1.15", "1.6", "2", "2.5", "3"],
        undoLimit: 20,
        indentation: "2em",
        showMenuTooltips: !0,
        menuTooltipPosition: "up"
      };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(7);
      function d(m, T, S) {
        window.alert(m), S && console.error("wangEditor: " + S);
      }
      o.default = { onchangeTimeout: 200, onchange: null, onfocus: f.EMPTY_FN, onblur: f.EMPTY_FN, onCatalogChange: null, customAlert: d };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.default = {
        pasteFilterStyle: !0,
        pasteIgnoreImg: !1,
        pasteTextHandle: function(d) {
          return d;
        }
      };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.default = { styleWithCSS: !1 };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(7);
      o.default = {
        linkImgCheck: function(m, T, S) {
          return !0;
        },
        showLinkImg: !0,
        showLinkImgAlt: !0,
        showLinkImgHref: !0,
        linkImgCallback: f.EMPTY_FN,
        uploadImgAccept: ["jpg", "jpeg", "png", "gif", "bmp"],
        uploadImgServer: "",
        uploadImgShowBase64: !1,
        uploadImgMaxSize: 5 * 1024 * 1024,
        uploadImgMaxLength: 100,
        uploadFileName: "",
        uploadImgParams: {},
        uploadImgParamsWithUrl: !1,
        uploadImgHeaders: {},
        uploadImgHooks: {},
        uploadImgTimeout: 10 * 1e3,
        withCredentials: !1,
        customUploadImg: null,
        uploadImgFromMedia: null
      };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.default = { lang: "zh-CN", languages: { "zh-CN": { wangEditor: { \u91CD\u7F6E: "\u91CD\u7F6E", \u63D2\u5165: "\u63D2\u5165", \u9ED8\u8BA4: "\u9ED8\u8BA4", \u521B\u5EFA: "\u521B\u5EFA", \u4FEE\u6539: "\u4FEE\u6539", \u5982: "\u5982", \u8BF7\u8F93\u5165\u6B63\u6587: "\u8BF7\u8F93\u5165\u6B63\u6587", menus: { title: { \u6807\u9898: "\u6807\u9898", \u52A0\u7C97: "\u52A0\u7C97", \u5B57\u53F7: "\u5B57\u53F7", \u5B57\u4F53: "\u5B57\u4F53", \u659C\u4F53: "\u659C\u4F53", \u4E0B\u5212\u7EBF: "\u4E0B\u5212\u7EBF", \u5220\u9664\u7EBF: "\u5220\u9664\u7EBF", \u7F29\u8FDB: "\u7F29\u8FDB", \u884C\u9AD8: "\u884C\u9AD8", \u6587\u5B57\u989C\u8272: "\u6587\u5B57\u989C\u8272", \u80CC\u666F\u8272: "\u80CC\u666F\u8272", \u94FE\u63A5: "\u94FE\u63A5", \u5E8F\u5217: "\u5E8F\u5217", \u5BF9\u9F50: "\u5BF9\u9F50", \u5F15\u7528: "\u5F15\u7528", \u8868\u60C5: "\u8868\u60C5", \u56FE\u7247: "\u56FE\u7247", \u89C6\u9891: "\u89C6\u9891", \u8868\u683C: "\u8868\u683C", \u4EE3\u7801: "\u4EE3\u7801", \u5206\u5272\u7EBF: "\u5206\u5272\u7EBF", \u6062\u590D: "\u6062\u590D", \u64A4\u9500: "\u64A4\u9500", \u5168\u5C4F: "\u5168\u5C4F", \u53D6\u6D88\u5168\u5C4F: "\u53D6\u6D88\u5168\u5C4F", \u5F85\u529E\u4E8B\u9879: "\u5F85\u529E\u4E8B\u9879" }, dropListMenu: { \u8BBE\u7F6E\u6807\u9898: "\u8BBE\u7F6E\u6807\u9898", \u80CC\u666F\u989C\u8272: "\u80CC\u666F\u989C\u8272", \u6587\u5B57\u989C\u8272: "\u6587\u5B57\u989C\u8272", \u8BBE\u7F6E\u5B57\u53F7: "\u8BBE\u7F6E\u5B57\u53F7", \u8BBE\u7F6E\u5B57\u4F53: "\u8BBE\u7F6E\u5B57\u4F53", \u8BBE\u7F6E\u7F29\u8FDB: "\u8BBE\u7F6E\u7F29\u8FDB", \u5BF9\u9F50\u65B9\u5F0F: "\u5BF9\u9F50\u65B9\u5F0F", \u8BBE\u7F6E\u884C\u9AD8: "\u8BBE\u7F6E\u884C\u9AD8", \u5E8F\u5217: "\u5E8F\u5217", head: { \u6B63\u6587: "\u6B63\u6587" }, indent: { \u589E\u52A0\u7F29\u8FDB: "\u589E\u52A0\u7F29\u8FDB", \u51CF\u5C11\u7F29\u8FDB: "\u51CF\u5C11\u7F29\u8FDB" }, justify: { \u9760\u5DE6: "\u9760\u5DE6", \u5C45\u4E2D: "\u5C45\u4E2D", \u9760\u53F3: "\u9760\u53F3", \u4E24\u7AEF: "\u4E24\u7AEF" }, list: { \u65E0\u5E8F\u5217\u8868: "\u65E0\u5E8F\u5217\u8868", \u6709\u5E8F\u5217\u8868: "\u6709\u5E8F\u5217\u8868" } }, panelMenus: { emoticon: { \u9ED8\u8BA4: "\u9ED8\u8BA4", \u65B0\u6D6A: "\u65B0\u6D6A", emoji: "emoji", \u624B\u52BF: "\u624B\u52BF" }, image: { \u4E0A\u4F20\u56FE\u7247: "\u4E0A\u4F20\u56FE\u7247", \u7F51\u7EDC\u56FE\u7247: "\u7F51\u7EDC\u56FE\u7247", \u56FE\u7247\u5730\u5740: "\u56FE\u7247\u5730\u5740", \u56FE\u7247\u6587\u5B57\u8BF4\u660E: "\u56FE\u7247\u6587\u5B57\u8BF4\u660E", \u8DF3\u8F6C\u94FE\u63A5: "\u8DF3\u8F6C\u94FE\u63A5" }, link: { \u94FE\u63A5: "\u94FE\u63A5", \u94FE\u63A5\u6587\u5B57: "\u94FE\u63A5\u6587\u5B57", \u53D6\u6D88\u94FE\u63A5: "\u53D6\u6D88\u94FE\u63A5", \u67E5\u770B\u94FE\u63A5: "\u67E5\u770B\u94FE\u63A5" }, video: { \u63D2\u5165\u89C6\u9891: "\u63D2\u5165\u89C6\u9891", \u4E0A\u4F20\u89C6\u9891: "\u4E0A\u4F20\u89C6\u9891" }, table: { \u884C: "\u884C", \u5217: "\u5217", \u7684: "\u7684", \u8868\u683C: "\u8868\u683C", \u6DFB\u52A0\u884C: "\u6DFB\u52A0\u884C", \u5220\u9664\u884C: "\u5220\u9664\u884C", \u6DFB\u52A0\u5217: "\u6DFB\u52A0\u5217", \u5220\u9664\u5217: "\u5220\u9664\u5217", \u8BBE\u7F6E\u8868\u5934: "\u8BBE\u7F6E\u8868\u5934", \u53D6\u6D88\u8868\u5934: "\u53D6\u6D88\u8868\u5934", \u63D2\u5165\u8868\u683C: "\u63D2\u5165\u8868\u683C", \u5220\u9664\u8868\u683C: "\u5220\u9664\u8868\u683C" }, code: { \u5220\u9664\u4EE3\u7801: "\u5220\u9664\u4EE3\u7801", \u4FEE\u6539\u4EE3\u7801: "\u4FEE\u6539\u4EE3\u7801", \u63D2\u5165\u4EE3\u7801: "\u63D2\u5165\u4EE3\u7801" } } }, validate: { \u5F20\u56FE\u7247: "\u5F20\u56FE\u7247", \u5927\u4E8E: "\u5927\u4E8E", \u56FE\u7247\u94FE\u63A5: "\u56FE\u7247\u94FE\u63A5", \u4E0D\u662F\u56FE\u7247: "\u4E0D\u662F\u56FE\u7247", \u8FD4\u56DE\u7ED3\u679C: "\u8FD4\u56DE\u7ED3\u679C", \u4E0A\u4F20\u56FE\u7247\u8D85\u65F6: "\u4E0A\u4F20\u56FE\u7247\u8D85\u65F6", \u4E0A\u4F20\u56FE\u7247\u9519\u8BEF: "\u4E0A\u4F20\u56FE\u7247\u9519\u8BEF", \u4E0A\u4F20\u56FE\u7247\u5931\u8D25: "\u4E0A\u4F20\u56FE\u7247\u5931\u8D25", \u63D2\u5165\u56FE\u7247\u9519\u8BEF: "\u63D2\u5165\u56FE\u7247\u9519\u8BEF", \u4E00\u6B21\u6700\u591A\u4E0A\u4F20: "\u4E00\u6B21\u6700\u591A\u4E0A\u4F20", \u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25: "\u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25", \u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7: "\u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7", \u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001: "\u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001", \u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF: "\u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF", \u8BF7\u66FF\u6362\u4E3A\u652F\u6301\u7684\u56FE\u7247\u7C7B\u578B: "\u8BF7\u66FF\u6362\u4E3A\u652F\u6301\u7684\u56FE\u7247\u7C7B\u578B", \u60A8\u63D2\u5165\u7684\u7F51\u7EDC\u56FE\u7247\u65E0\u6CD5\u8BC6\u522B: "\u60A8\u63D2\u5165\u7684\u7F51\u7EDC\u56FE\u7247\u65E0\u6CD5\u8BC6\u522B", \u60A8\u521A\u624D\u63D2\u5165\u7684\u56FE\u7247\u94FE\u63A5\u672A\u901A\u8FC7\u7F16\u8F91\u5668\u6821\u9A8C: "\u60A8\u521A\u624D\u63D2\u5165\u7684\u56FE\u7247\u94FE\u63A5\u672A\u901A\u8FC7\u7F16\u8F91\u5668\u6821\u9A8C", \u63D2\u5165\u89C6\u9891\u9519\u8BEF: "\u63D2\u5165\u89C6\u9891\u9519\u8BEF", \u89C6\u9891\u94FE\u63A5: "\u89C6\u9891\u94FE\u63A5", \u4E0D\u662F\u89C6\u9891: "\u4E0D\u662F\u89C6\u9891", \u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7: "\u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7", \u4E2A\u89C6\u9891: "\u4E2A\u89C6\u9891", \u4E0A\u4F20\u89C6\u9891\u8D85\u65F6: "\u4E0A\u4F20\u89C6\u9891\u8D85\u65F6", \u4E0A\u4F20\u89C6\u9891\u9519\u8BEF: "\u4E0A\u4F20\u89C6\u9891\u9519\u8BEF", \u4E0A\u4F20\u89C6\u9891\u5931\u8D25: "\u4E0A\u4F20\u89C6\u9891\u5931\u8D25", \u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF: "\u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF" } } }, en: { wangEditor: { \u91CD\u7F6E: "reset", \u63D2\u5165: "insert", \u9ED8\u8BA4: "default", \u521B\u5EFA: "create", \u4FEE\u6539: "edit", \u5982: "like", \u8BF7\u8F93\u5165\u6B63\u6587: "please enter the text", menus: { title: { \u6807\u9898: "head", \u52A0\u7C97: "bold", \u5B57\u53F7: "font size", \u5B57\u4F53: "font family", \u659C\u4F53: "italic", \u4E0B\u5212\u7EBF: "underline", \u5220\u9664\u7EBF: "strikethrough", \u7F29\u8FDB: "indent", \u884C\u9AD8: "line heihgt", \u6587\u5B57\u989C\u8272: "font color", \u80CC\u666F\u8272: "background", \u94FE\u63A5: "link", \u5E8F\u5217: "numbered list", \u5BF9\u9F50: "align", \u5F15\u7528: "quote", \u8868\u60C5: "emoticons", \u56FE\u7247: "image", \u89C6\u9891: "media", \u8868\u683C: "table", \u4EE3\u7801: "code", \u5206\u5272\u7EBF: "split line", \u6062\u590D: "undo", \u64A4\u9500: "redo", \u5168\u5C4F: "fullscreen", \u53D6\u6D88\u5168\u5C4F: "cancel fullscreen", \u5F85\u529E\u4E8B\u9879: "todo" }, dropListMenu: { \u8BBE\u7F6E\u6807\u9898: "title", \u80CC\u666F\u989C\u8272: "background", \u6587\u5B57\u989C\u8272: "font color", \u8BBE\u7F6E\u5B57\u53F7: "font size", \u8BBE\u7F6E\u5B57\u4F53: "font family", \u8BBE\u7F6E\u7F29\u8FDB: "indent", \u5BF9\u9F50\u65B9\u5F0F: "align", \u8BBE\u7F6E\u884C\u9AD8: "line heihgt", \u5E8F\u5217: "list", head: { \u6B63\u6587: "text" }, indent: { \u589E\u52A0\u7F29\u8FDB: "indent", \u51CF\u5C11\u7F29\u8FDB: "outdent" }, justify: { \u9760\u5DE6: "left", \u5C45\u4E2D: "center", \u9760\u53F3: "right", \u4E24\u7AEF: "justify" }, list: { \u65E0\u5E8F\u5217\u8868: "unordered", \u6709\u5E8F\u5217\u8868: "ordered" } }, panelMenus: { emoticon: { \u8868\u60C5: "emoji", \u624B\u52BF: "gesture" }, image: { \u4E0A\u4F20\u56FE\u7247: "upload image", \u7F51\u7EDC\u56FE\u7247: "network image", \u56FE\u7247\u5730\u5740: "image link", \u56FE\u7247\u6587\u5B57\u8BF4\u660E: "image alt", \u8DF3\u8F6C\u94FE\u63A5: "hyperlink" }, link: { \u94FE\u63A5: "link", \u94FE\u63A5\u6587\u5B57: "link text", \u53D6\u6D88\u94FE\u63A5: "unlink", \u67E5\u770B\u94FE\u63A5: "view links" }, video: { \u63D2\u5165\u89C6\u9891: "insert video", \u4E0A\u4F20\u89C6\u9891: "upload local video" }, table: { \u884C: "rows", \u5217: "columns", \u7684: " ", \u8868\u683C: "table", \u6DFB\u52A0\u884C: "insert row", \u5220\u9664\u884C: "delete row", \u6DFB\u52A0\u5217: "insert column", \u5220\u9664\u5217: "delete column", \u8BBE\u7F6E\u8868\u5934: "set header", \u53D6\u6D88\u8868\u5934: "cancel header", \u63D2\u5165\u8868\u683C: "insert table", \u5220\u9664\u8868\u683C: "delete table" }, code: { \u5220\u9664\u4EE3\u7801: "delete code", \u4FEE\u6539\u4EE3\u7801: "edit code", \u63D2\u5165\u4EE3\u7801: "insert code" } } }, validate: { \u5F20\u56FE\u7247: "images", \u5927\u4E8E: "greater than", \u56FE\u7247\u94FE\u63A5: "image link", \u4E0D\u662F\u56FE\u7247: "is not image", \u8FD4\u56DE\u7ED3\u679C: "return results", \u4E0A\u4F20\u56FE\u7247\u8D85\u65F6: "upload image timeout", \u4E0A\u4F20\u56FE\u7247\u9519\u8BEF: "upload image error", \u4E0A\u4F20\u56FE\u7247\u5931\u8D25: "upload image failed", \u63D2\u5165\u56FE\u7247\u9519\u8BEF: "insert image error", \u4E00\u6B21\u6700\u591A\u4E0A\u4F20: "once most at upload", \u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25: "download link failed", \u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7: "image validate failed", \u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001: "server return status", \u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF: "upload image return results error", \u8BF7\u66FF\u6362\u4E3A\u652F\u6301\u7684\u56FE\u7247\u7C7B\u578B: "please replace with a supported image type", \u60A8\u63D2\u5165\u7684\u7F51\u7EDC\u56FE\u7247\u65E0\u6CD5\u8BC6\u522B: "the network picture you inserted is not recognized", \u60A8\u521A\u624D\u63D2\u5165\u7684\u56FE\u7247\u94FE\u63A5\u672A\u901A\u8FC7\u7F16\u8F91\u5668\u6821\u9A8C: "the image link you just inserted did not pass the editor verification", \u63D2\u5165\u89C6\u9891\u9519\u8BEF: "insert video error", \u89C6\u9891\u94FE\u63A5: "video link", \u4E0D\u662F\u89C6\u9891: "is not video", \u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7: "video validate failed", \u4E2A\u89C6\u9891: "videos", \u4E0A\u4F20\u89C6\u9891\u8D85\u65F6: "upload video timeout", \u4E0A\u4F20\u89C6\u9891\u9519\u8BEF: "upload video error", \u4E0A\u4F20\u89C6\u9891\u5931\u8D25: "upload video failed", \u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF: "upload video return results error" } } } } };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(6);
      function d() {
        return !!(f.UA.isIE() || f.UA.isOldEdge);
      }
      o.default = { compatibleMode: d, historyMaxSize: 30 };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(7);
      o.default = {
        onlineVideoCheck: function(m) {
          return !0;
        },
        onlineVideoCallback: f.EMPTY_FN,
        showLinkVideo: !0,
        uploadVideoAccept: ["mp4"],
        uploadVideoServer: "",
        uploadVideoMaxSize: 1 * 1024 * 1024 * 1024,
        uploadVideoName: "",
        uploadVideoParams: {},
        uploadVideoParamsWithUrl: !1,
        uploadVideoHeaders: {},
        uploadVideoHooks: {},
        uploadVideoTimeout: 1e3 * 60 * 60 * 2,
        withVideoCredentials: !1,
        customUploadVideo: null,
        customInsertVideo: null
      };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(17));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), m = d.__importDefault(t(3)), T = t(6), S = t(7), w = function() {
        function b(g) {
          this._currentRange = null, this.editor = g;
        }
        return b.prototype.getRange = function() {
          return this._currentRange;
        }, b.prototype.saveRange = function(g) {
          if (g) {
            this._currentRange = g;
            return;
          }
          var x = window.getSelection();
          if (x.rangeCount !== 0) {
            var v = x.getRangeAt(0), M = this.getSelectionContainerElem(v);
            if (!!(M != null && M.length) && !(M.attr("contenteditable") === "false" || M.parentUntil("[contenteditable=false]"))) {
              var y = this.editor, h = y.$textElem;
              if (h.isContain(M)) {
                if (h.elems[0] === M.elems[0]) {
                  var E;
                  if ((0, f.default)(E = h.html()).call(E) === S.EMPTY_P) {
                    var C = h.children(), R = C == null ? void 0 : C.last();
                    y.selection.createRangeByElem(R, !0, !0), y.selection.restoreSelection();
                  }
                }
                this._currentRange = v;
              }
            }
          }
        }, b.prototype.collapseRange = function(g) {
          g === void 0 && (g = !1);
          var x = this._currentRange;
          x && x.collapse(g);
        }, b.prototype.getSelectionText = function() {
          var g = this._currentRange;
          return g ? g.toString() : "";
        }, b.prototype.getSelectionContainerElem = function(g) {
          var x;
          x = g || this._currentRange;
          var v;
          if (x)
            return v = x.commonAncestorContainer, m.default(v.nodeType === 1 ? v : v.parentNode);
        }, b.prototype.getSelectionStartElem = function(g) {
          var x;
          x = g || this._currentRange;
          var v;
          if (x)
            return v = x.startContainer, m.default(v.nodeType === 1 ? v : v.parentNode);
        }, b.prototype.getSelectionEndElem = function(g) {
          var x;
          x = g || this._currentRange;
          var v;
          if (x)
            return v = x.endContainer, m.default(v.nodeType === 1 ? v : v.parentNode);
        }, b.prototype.isSelectionEmpty = function() {
          var g = this._currentRange;
          return !!(g && g.startContainer && g.startContainer === g.endContainer && g.startOffset === g.endOffset);
        }, b.prototype.restoreSelection = function() {
          var g = window.getSelection(), x = this._currentRange;
          g && x && (g.removeAllRanges(), g.addRange(x));
        }, b.prototype.createEmptyRange = function() {
          var g = this.editor, x = this.getRange(), v;
          if (!!x && !!this.isSelectionEmpty())
            try {
              T.UA.isWebkit() ? (g.cmd.do("insertHTML", "&#8203;"), x.setEnd(x.endContainer, x.endOffset + 1), this.saveRange(x)) : (v = m.default("<strong>&#8203;</strong>"), g.cmd.do("insertElem", v), this.createRangeByElem(v, !0));
            } catch {
            }
        }, b.prototype.createRangeByElems = function(g, x) {
          var v = window.getSelection ? window.getSelection() : document.getSelection();
          v == null || v.removeAllRanges();
          var M = document.createRange();
          M.setStart(g, 0), M.setEnd(x, x.childNodes.length || 1), this.saveRange(M), this.restoreSelection();
        }, b.prototype.createRangeByElem = function(g, x, v) {
          if (!!g.length) {
            var M = g.elems[0], y = document.createRange();
            v ? y.selectNodeContents(M) : y.selectNode(M), x != null && (y.collapse(x), x || (this.saveRange(y), this.editor.selection.moveCursor(M))), this.saveRange(y);
          }
        }, b.prototype.getSelectionRangeTopNodes = function() {
          var g, x, v, M = (g = this.getSelectionStartElem()) === null || g === void 0 ? void 0 : g.getNodeTop(this.editor), y = (x = this.getSelectionEndElem()) === null || x === void 0 ? void 0 : x.getNodeTop(this.editor);
          return v = this.recordSelectionNodes(m.default(M), m.default(y)), v;
        }, b.prototype.moveCursor = function(g, x) {
          var v, M = this.getRange(), y = g.nodeType === 3 ? (v = g.nodeValue) === null || v === void 0 ? void 0 : v.length : g.childNodes.length;
          (T.UA.isFirefox || T.UA.isIE()) && y !== 0 && (g.nodeType === 3 || g.childNodes[y - 1].nodeName === "BR") && (y = y - 1);
          var h = x != null ? x : y;
          !M || g && (M.setStart(g, h), M.setEnd(g, h), this.restoreSelection());
        }, b.prototype.getCursorPos = function() {
          var g = window.getSelection();
          return g == null ? void 0 : g.anchorOffset;
        }, b.prototype.clearWindowSelectionRange = function() {
          var g = window.getSelection();
          g && g.removeAllRanges();
        }, b.prototype.recordSelectionNodes = function(g, x) {
          var v = [], M = !0;
          try {
            for (var y = g, h = this.editor.$textElem; M; ) {
              var E = y == null ? void 0 : y.getNodeTop(this.editor);
              E.getNodeName() === "BODY" && (M = !1), E.length > 0 && (v.push(m.default(y)), (x == null ? void 0 : x.equal(E)) || h.equal(E) ? M = !1 : y = E.getNextSibling());
            }
          } catch {
            M = !1;
          }
          return v;
        }, b.prototype.setRangeToElem = function(g) {
          var x = this.getRange();
          x == null || x.setStart(g, 0), x == null || x.setEnd(g, 0);
        }, b;
      }();
      o.default = w;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(3)), m = function() {
        function T(S) {
          this.editor = S;
        }
        return T.prototype.do = function(S, w) {
          var b = this.editor;
          b.config.styleWithCSS && document.execCommand("styleWithCSS", !1, "true");
          var g = b.selection;
          if (!!g.getRange()) {
            switch (g.restoreSelection(), S) {
              case "insertHTML":
                this.insertHTML(w);
                break;
              case "insertElem":
                this.insertElem(w);
                break;
              default:
                this.execCommand(S, w);
                break;
            }
            b.menus.changeActive(), g.saveRange(), g.restoreSelection();
          }
        }, T.prototype.insertHTML = function(S) {
          var w = this.editor, b = w.selection.getRange();
          if (b != null) {
            if (this.queryCommandSupported("insertHTML"))
              this.execCommand("insertHTML", S);
            else if (b.insertNode) {
              if (b.deleteContents(), d.default(S).elems.length > 0)
                b.insertNode(d.default(S).elems[0]);
              else {
                var g = document.createElement("p");
                g.appendChild(document.createTextNode(S)), b.insertNode(g);
              }
              w.selection.collapseRange();
            }
          }
        }, T.prototype.insertElem = function(S) {
          var w = this.editor, b = w.selection.getRange();
          b != null && b.insertNode && (b.deleteContents(), b.insertNode(S.elems[0]));
        }, T.prototype.execCommand = function(S, w) {
          document.execCommand(S, !1, w);
        }, T.prototype.queryCommandValue = function(S) {
          return document.queryCommandValue(S);
        }, T.prototype.queryCommandState = function(S) {
          return document.queryCommandState(S);
        }, T.prototype.queryCommandSupported = function(S) {
          return document.queryCommandSupported(S);
        }, T;
      }();
      o.default = m;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(31)), d = s(t(4)), m = s(t(17)), T = s(t(27)), S = s(t(46));
      (0, u.default)(o, "__esModule", { value: !0 });
      var w = t(2), b = w.__importDefault(t(3)), g = w.__importDefault(t(287)), x = t(6), v = w.__importDefault(t(299)), M = w.__importDefault(t(300)), y = t(7), h = function() {
        function E(C) {
          this.editor = C, this.eventHooks = { onBlurEvents: [], changeEvents: [], dropEvents: [], clickEvents: [], keydownEvents: [], keyupEvents: [], tabUpEvents: [], tabDownEvents: [], enterUpEvents: [], enterDownEvents: [], deleteUpEvents: [], deleteDownEvents: [], pasteEvents: [], linkClickEvents: [], codeClickEvents: [], textScrollEvents: [], toolbarClickEvents: [], imgClickEvents: [], imgDragBarMouseDownEvents: [], tableClickEvents: [], menuClickEvents: [], dropListMenuHoverEvents: [], splitLineEvents: [], videoClickEvents: [] };
        }
        return E.prototype.init = function() {
          this._saveRange(), this._bindEventHooks(), g.default(this);
        }, E.prototype.togglePlaceholder = function() {
          var C, R = this.html(), F = (0, f.default)(C = this.editor.$textContainerElem).call(C, ".placeholder");
          F.hide(), !this.editor.isComposing && (!R || R === " ") && F.show();
        }, E.prototype.clear = function() {
          this.html(y.EMPTY_P);
        }, E.prototype.html = function(C) {
          var R = this.editor, F = R.$textElem;
          if (C == null) {
            var B = F.html();
            B = B.replace(/\u200b/gm, ""), B = B.replace(/<p><\/p>/gim, ""), B = B.replace(y.EMPTY_P_LAST_REGEX, ""), B = B.replace(y.EMPTY_P_REGEX, "<p>");
            var O = B.match(/<(img|br|hr|input)[^>]*>/gi);
            return O !== null && (0, d.default)(O).call(O, function(z) {
              z.match(/\/>/) || (B = B.replace(z, z.substring(0, z.length - 1) + "/>"));
            }), B;
          }
          C = (0, m.default)(C).call(C), C === "" && (C = y.EMPTY_P), (0, T.default)(C).call(C, "<") !== 0 && (C = "<p>" + C + "</p>"), F.html(C), R.initSelection();
        }, E.prototype.setJSON = function(C) {
          var R = M.default(C).children(), F = this.editor, B = F.$textElem;
          !R || B.replaceChildAll(R);
        }, E.prototype.getJSON = function() {
          var C = this.editor, R = C.$textElem;
          return v.default(R);
        }, E.prototype.text = function(C) {
          var R = this.editor, F = R.$textElem;
          if (C == null) {
            var B = F.text();
            return B = B.replace(/\u200b/gm, ""), B;
          }
          F.text("<p>" + C + "</p>"), R.initSelection();
        }, E.prototype.append = function(C) {
          var R = this.editor;
          (0, T.default)(C).call(C, "<") !== 0 && (C = "<p>" + C + "</p>"), this.html(this.html() + C), R.initSelection();
        }, E.prototype._saveRange = function() {
          var C = this.editor, R = C.$textElem, F = b.default(document);
          function B() {
            C.selection.saveRange(), C.menus.changeActive();
          }
          R.on("keyup", B);
          function O() {
            B(), R.off("click", O);
          }
          R.on("click", O);
          function z() {
            B(), F.off("mouseup", z);
          }
          function I() {
            F.on("mouseup", z), R.off("mouseleave", I);
          }
          R.on("mousedown", function() {
            R.on("mouseleave", I);
          }), R.on("mouseup", function(U) {
            R.off("mouseleave", I), (0, S.default)(function() {
              var H = C.selection, $ = H.getRange();
              $ !== null && B();
            }, 0);
          });
        }, E.prototype._bindEventHooks = function() {
          var C = this.editor, R = C.$textElem, F = this.eventHooks;
          R.on("click", function(O) {
            var z = F.clickEvents;
            (0, d.default)(z).call(z, function(I) {
              return I(O);
            });
          }), R.on("keyup", function(O) {
            if (O.keyCode === 13) {
              var z = F.enterUpEvents;
              (0, d.default)(z).call(z, function(I) {
                return I(O);
              });
            }
          }), R.on("keyup", function(O) {
            var z = F.keyupEvents;
            (0, d.default)(z).call(z, function(I) {
              return I(O);
            });
          }), R.on("keydown", function(O) {
            var z = F.keydownEvents;
            (0, d.default)(z).call(z, function(I) {
              return I(O);
            });
          }), R.on("keyup", function(O) {
            if (!(O.keyCode !== 8 && O.keyCode !== 46)) {
              var z = F.deleteUpEvents;
              (0, d.default)(z).call(z, function(I) {
                return I(O);
              });
            }
          }), R.on("keydown", function(O) {
            if (!(O.keyCode !== 8 && O.keyCode !== 46)) {
              var z = F.deleteDownEvents;
              (0, d.default)(z).call(z, function(I) {
                return I(O);
              });
            }
          }), R.on("paste", function(O) {
            if (!x.UA.isIE()) {
              O.preventDefault();
              var z = F.pasteEvents;
              (0, d.default)(z).call(z, function(I) {
                return I(O);
              });
            }
          }), R.on("keydown", function(O) {
            (C.isFocus || C.isCompatibleMode) && (O.ctrlKey || O.metaKey) && O.keyCode === 90 && (O.preventDefault(), O.shiftKey ? C.history.restore() : C.history.revoke());
          }), R.on("keyup", function(O) {
            if (O.keyCode === 9) {
              O.preventDefault();
              var z = F.tabUpEvents;
              (0, d.default)(z).call(z, function(I) {
                return I(O);
              });
            }
          }), R.on("keydown", function(O) {
            if (O.keyCode === 9) {
              O.preventDefault();
              var z = F.tabDownEvents;
              (0, d.default)(z).call(z, function(I) {
                return I(O);
              });
            }
          }), R.on(
            "scroll",
            x.throttle(function(O) {
              var z = F.textScrollEvents;
              (0, d.default)(z).call(z, function(I) {
                return I(O);
              });
            }, 100)
          );
          function B(O) {
            O.preventDefault();
          }
          b.default(document).on("dragleave", B).on("drop", B).on("dragenter", B).on("dragover", B), C.beforeDestroy(function() {
            b.default(document).off("dragleave", B).off("drop", B).off("dragenter", B).off("dragover", B);
          }), R.on("drop", function(O) {
            O.preventDefault();
            var z = F.dropEvents;
            (0, d.default)(z).call(z, function(I) {
              return I(O);
            });
          }), R.on("click", function(O) {
            var z = null, I = O.target, U = b.default(I);
            if (U.getNodeName() === "A")
              z = U;
            else {
              var H = U.parentUntil("a");
              H != null && (z = H);
            }
            if (!!z) {
              var $ = F.linkClickEvents;
              (0, d.default)($).call($, function(P) {
                return P(z);
              });
            }
          }), R.on("click", function(O) {
            var z = null, I = O.target, U = b.default(I);
            if (U.getNodeName() === "IMG" && !U.elems[0].getAttribute("data-emoji") && (O.stopPropagation(), z = U), !!z) {
              var H = F.imgClickEvents;
              (0, d.default)(H).call(H, function($) {
                return $(z);
              });
            }
          }), R.on("click", function(O) {
            var z = null, I = O.target, U = b.default(I);
            if (U.getNodeName() === "PRE")
              z = U;
            else {
              var H = U.parentUntil("pre");
              H !== null && (z = H);
            }
            if (!!z) {
              var $ = F.codeClickEvents;
              (0, d.default)($).call($, function(P) {
                return P(z);
              });
            }
          }), R.on("click", function(O) {
            var z = null, I = O.target, U = b.default(I);
            if (U.getNodeName() === "HR" && (z = U), !!z) {
              C.selection.createRangeByElem(z), C.selection.restoreSelection();
              var H = F.splitLineEvents;
              (0, d.default)(H).call(H, function($) {
                return $(z);
              });
            }
          }), C.$toolbarElem.on("click", function(O) {
            var z = F.toolbarClickEvents;
            (0, d.default)(z).call(z, function(I) {
              return I(O);
            });
          }), C.$textContainerElem.on("mousedown", function(O) {
            var z = O.target, I = b.default(z);
            if (I.hasClass("w-e-img-drag-rb")) {
              var U = F.imgDragBarMouseDownEvents;
              (0, d.default)(U).call(U, function(H) {
                return H();
              });
            }
          }), R.on("click", function(O) {
            var z = null, I = O.target;
            if (z = b.default(I).parentUntilEditor("TABLE", C, I), !!z) {
              var U = F.tableClickEvents;
              (0, d.default)(U).call(U, function(H) {
                return H(z, O);
              });
            }
          }), R.on("keydown", function(O) {
            if (O.keyCode === 13) {
              var z = F.enterDownEvents;
              (0, d.default)(z).call(z, function(I) {
                return I(O);
              });
            }
          }), R.on("click", function(O) {
            var z = null, I = O.target, U = b.default(I);
            if (U.getNodeName() === "VIDEO" && (O.stopPropagation(), z = U), !!z) {
              var H = F.videoClickEvents;
              (0, d.default)(H).call(H, function($) {
                return $(z);
              });
            }
          });
        }, E;
      }();
      o.default = h;
    }, function(l, o, t) {
      var s = t(284);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(285), u = Array.prototype;
      l.exports = function(f) {
        var d = f.find;
        return f === u || f instanceof Array && d === u.find ? s : d;
      };
    }, function(l, o, t) {
      t(286);
      var s = t(15);
      l.exports = s("Array").find;
    }, function(l, o, t) {
      var s = t(5), u = t(30).find, f = t(82), d = t(22), m = "find", T = !0, S = d(m);
      m in [] && Array(1)[m](function() {
        T = !1;
      }), s({ target: "Array", proto: !0, forced: T || !S }, { find: function(b) {
        return u(this, b, arguments.length > 1 ? arguments[1] : void 0);
      } }), f(m);
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(288)), m = f.__importStar(t(289)), T = f.__importDefault(t(290)), S = f.__importDefault(t(291)), w = f.__importDefault(t(298));
      function b(g) {
        var x = g.editor, v = g.eventHooks;
        d.default(x, v.enterUpEvents, v.enterDownEvents), m.default(x, v.deleteUpEvents, v.deleteDownEvents), m.cutToKeepP(x, v.keyupEvents), T.default(x, v.tabDownEvents), S.default(x, v.pasteEvents), w.default(x, v.imgClickEvents);
      }
      o.default = b;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(27));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), m = t(7), T = d.__importDefault(t(3));
      function S(w, b, g) {
        function x(y) {
          var h, E = T.default(m.EMPTY_P);
          if (E.insertBefore(y), (0, f.default)(h = y.html()).call(h, "<img") >= 0) {
            E.remove();
            return;
          }
          w.selection.createRangeByElem(E, !0, !0), w.selection.restoreSelection(), y.remove();
        }
        function v() {
          var y = w.$textElem, h = w.selection.getSelectionContainerElem(), E = h.parent();
          if (E.html() === "<code><br></code>") {
            x(E);
            return;
          }
          if (h.getNodeName() === "FONT" && h.text() === "" && h.attr("face") === "monospace") {
            x(E);
            return;
          }
          if (!!E.equal(y)) {
            var C = h.getNodeName();
            C === "P" && h.attr("data-we-empty-p") === null || h.text() || x(h);
          }
        }
        b.push(v);
        function M(y) {
          var h;
          w.selection.saveRange((h = getSelection()) === null || h === void 0 ? void 0 : h.getRangeAt(0));
          var E = w.selection.getSelectionContainerElem();
          E.id === w.textElemId && (y.preventDefault(), w.cmd.do("insertHTML", "<p><br></p>"));
        }
        g.push(M);
      }
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(17)), d = s(t(44));
      (0, u.default)(o, "__esModule", { value: !0 }), o.cutToKeepP = void 0;
      var m = t(2), T = t(7), S = m.__importDefault(t(3));
      function w(g, x, v) {
        function M() {
          var h = g.$textElem, E = g.$textElem.html(), C = g.$textElem.text(), R = (0, f.default)(E).call(E), F = ["<p><br></p>", "<br>", '<p data-we-empty-p=""></p>', T.EMPTY_P];
          /^\s*$/.test(C) && (!R || (0, d.default)(F).call(F, R)) && (h.html(T.EMPTY_P), g.selection.createRangeByElem(h, !1, !0), g.selection.restoreSelection(), g.selection.moveCursor(h.getNode(), 0));
        }
        x.push(M);
        function y(h) {
          var E, C = g.$textElem, R = (0, f.default)(E = C.html().toLowerCase()).call(E);
          if (R === T.EMPTY_P) {
            h.preventDefault();
            return;
          }
        }
        v.push(y);
      }
      function b(g, x) {
        function v(M) {
          var y;
          if (M.keyCode === 88) {
            var h = g.$textElem, E = (0, f.default)(y = h.html().toLowerCase()).call(y);
            if (!E || E === "<br>") {
              var C = S.default(T.EMPTY_P);
              h.html(" "), h.append(C), g.selection.createRangeByElem(C, !1, !0), g.selection.restoreSelection(), g.selection.moveCursor(C.getNode(), 0);
            }
          }
        }
        x.push(v);
      }
      o.cutToKeepP = b, o.default = w;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      function f(d, m) {
        function T() {
          if (!!d.cmd.queryCommandSupported("insertHTML")) {
            var S = d.selection.getSelectionContainerElem();
            if (!!S) {
              var w = S.parent(), b = S.getNodeName(), g = w.getNodeName();
              b == "CODE" || g === "CODE" || g === "PRE" || /hljs/.test(g) ? d.cmd.do("insertHTML", d.config.languageTab) : d.cmd.do("insertHTML", "&nbsp;&nbsp;&nbsp;&nbsp;");
            }
          }
        }
        m.push(T);
      }
      o.default = f;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(17));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(130), m = t(6), T = t(7);
      function S(v) {
        var M, y = (0, f.default)(M = v.replace(/<div>/gim, "<p>").replace(/<\/div>/gim, "</p>")).call(M), h = document.createElement("div");
        return h.innerHTML = y, h.innerHTML.replace(/<p><\/p>/gim, "");
      }
      function w(v) {
        var M = v.replace(/<br>|<br\/>/gm, `
`).replace(/<[^>]+>/gm, "");
        return M;
      }
      function b(v) {
        var M;
        if (v === "")
          return !1;
        var y = document.createElement("div");
        return y.innerHTML = v, ((M = y.firstChild) === null || M === void 0 ? void 0 : M.nodeName) === "P";
      }
      function g(v) {
        if (!(v != null && v.length))
          return !1;
        var M = v.elems[0];
        return M.nodeName === "P" && M.innerHTML === "<br>";
      }
      function x(v, M) {
        function y(h) {
          var E = v.config, C = E.pasteFilterStyle, R = E.pasteIgnoreImg, F = E.pasteTextHandle, B = d.getPasteHtml(h, C, R), O = d.getPasteText(h);
          O = O.replace(/\n/gm, "<br>");
          var z = v.selection.getSelectionContainerElem();
          if (!!z) {
            var I = z == null ? void 0 : z.getNodeName(), U = z == null ? void 0 : z.getNodeTop(v), H = "";
            if (U.elems[0] && (H = U == null ? void 0 : U.getNodeName()), I === "CODE" || H === "PRE") {
              F && m.isFunction(F) && (O = "" + (F(O) || "")), v.cmd.do("insertHTML", w(O));
              return;
            }
            if (T.urlRegex.test(O) && C) {
              F && m.isFunction(F) && (O = "" + (F(O) || ""));
              var $ = T.urlRegex.exec(O)[0], P = O.replace(T.urlRegex, "");
              return v.cmd.do("insertHTML", '<a href="' + $ + '" target="_blank">' + $ + "</a>" + P);
            }
            if (!!B)
              try {
                F && m.isFunction(F) && (B = "" + (F(B) || ""));
                var Y = /[\.\#\@]?\w+[ ]+\{[^}]*\}/.test(B);
                if (Y && C)
                  v.cmd.do("insertHTML", "" + S(O));
                else {
                  var Q = S(B);
                  if (b(Q)) {
                    var K = v.$textElem;
                    if (v.cmd.do("insertHTML", Q), K.equal(z)) {
                      v.selection.createEmptyRange();
                      return;
                    }
                    g(U) && U.remove();
                  } else {
                    var q = /^<img [^>]*src=['"]([^'"]+)[^>]*>$/g;
                    q.test(Q) || v.cmd.do("insertHTML", Q);
                  }
                }
              } catch {
                F && m.isFunction(F) && (O = "" + (F(O) || "")), v.cmd.do("insertHTML", "" + S(O));
              }
          }
        }
        M.push(y);
      }
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(17)), d = s(t(4)), m = s(t(44));
      (0, u.default)(o, "__esModule", { value: !0 });
      var T = t(2), S = t(293), w = T.__importDefault(t(297));
      function b(y) {
        var h = /<span>.*?<\/span>/gi, E = /<span>(.*?)<\/span>/;
        return y.replace(h, function(C) {
          var R = C.match(E);
          return R == null ? "" : R[1];
        });
      }
      function g(y, h) {
        var E;
        return y = (0, f.default)(E = y.toLowerCase()).call(E), !!(S.IGNORE_TAGS.has(y) || h && y === "img");
      }
      function x(y, h) {
        var E = "";
        E = "<" + y;
        var C = [];
        (0, d.default)(h).call(h, function(F) {
          C.push(F.name + '="' + F.value + '"');
        }), C.length > 0 && (E = E + " " + C.join(" "));
        var R = S.EMPTY_TAGS.has(y);
        return E = E + (R ? "/" : "") + ">", E;
      }
      function v(y) {
        return "</" + y + ">";
      }
      function M(y, h, E) {
        h === void 0 && (h = !0), E === void 0 && (E = !1);
        var C = [], R = "";
        function F(I) {
          I = (0, f.default)(I).call(I), I && (S.EMPTY_TAGS.has(I) || (R = I));
        }
        function B() {
          R = "";
        }
        var O = new w.default();
        O.parse(y, { startElement: function(U, H) {
          if (F(U), !g(U, E)) {
            var $ = S.NECESSARY_ATTRS.get(U) || [], P = [];
            (0, d.default)(H).call(H, function(Q) {
              var K = Q.name;
              if (K === "style") {
                h || P.push(Q);
                return;
              }
              (0, m.default)($).call($, K) !== !1 && P.push(Q);
            });
            var Y = x(U, P);
            C.push(Y);
          }
        }, characters: function(U) {
          !U || g(R, E) || C.push(U);
        }, endElement: function(U) {
          if (!g(U, E)) {
            var H = v(U);
            C.push(H), B();
          }
        }, comment: function(U) {
          F(U);
        } });
        var z = C.join("");
        return z = b(z), z;
      }
      o.default = M;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(131)), d = s(t(120));
      (0, u.default)(o, "__esModule", { value: !0 }), o.TOP_LEVEL_TAGS = o.EMPTY_TAGS = o.NECESSARY_ATTRS = o.IGNORE_TAGS = void 0, o.IGNORE_TAGS = new f.default(["doctype", "!doctype", "html", "head", "meta", "body", "script", "style", "link", "frame", "iframe", "title", "svg", "center", "o:p"]), o.NECESSARY_ATTRS = new d.default([["img", ["src", "alt"]], ["a", ["href", "target"]], ["td", ["colspan", "rowspan"]], ["th", ["colspan", "rowspan"]]]), o.EMPTY_TAGS = new f.default(["area", "base", "basefont", "br", "col", "hr", "img", "input", "isindex", "embed"]), o.TOP_LEVEL_TAGS = new f.default(["h1", "h2", "h3", "h4", "h5", "p", "ul", "ol", "table", "blockquote", "pre", "hr", "form"]);
    }, function(l, o, t) {
      var s = t(295);
      l.exports = s;
    }, function(l, o, t) {
      t(296), t(61), t(50), t(54);
      var s = t(9);
      l.exports = s.Set;
    }, function(l, o, t) {
      var s = t(121), u = t(123);
      l.exports = s("Set", function(f) {
        return function() {
          return f(this, arguments.length ? arguments[0] : void 0);
        };
      }, u);
    }, function(l, o) {
      function t() {
      }
      t.prototype = {
        handler: null,
        startTagRe: /^<([^>\s\/]+)((\s+[^=>\s]+(\s*=\s*((\"[^"]*\")|(\'[^']*\')|[^>\s]+))?)*)\s*\/?\s*>/m,
        endTagRe: /^<\/([^>\s]+)[^>]*>/m,
        attrRe: /([^=\s]+)(\s*=\s*((\"([^"]*)\")|(\'([^']*)\')|[^>\s]+))?/gm,
        parse: function(u, f) {
          f && (this.contentHandler = f);
          for (var d, m, T, S = !1, w = this; u.length > 0; )
            u.substring(0, 4) == "<!--" ? (T = u.indexOf("-->"), T != -1 ? (this.contentHandler.comment(u.substring(4, T)), u = u.substring(T + 3), S = !1) : S = !0) : u.substring(0, 2) == "</" ? this.endTagRe.test(u) ? (d = RegExp.lastMatch, m = RegExp.rightContext, d.replace(this.endTagRe, function() {
              return w.parseEndTag.apply(w, arguments);
            }), u = m, S = !1) : S = !0 : u.charAt(0) == "<" && (this.startTagRe.test(u) ? (d = RegExp.lastMatch, m = RegExp.rightContext, d.replace(this.startTagRe, function() {
              return w.parseStartTag.apply(w, arguments);
            }), u = m, S = !1) : S = !0), S && (T = u.indexOf("<"), T == -1 ? (this.contentHandler.characters(u), u = "") : (this.contentHandler.characters(u.substring(0, T)), u = u.substring(T))), S = !0;
        },
        parseStartTag: function(u, f, d) {
          var m = this.parseAttributes(f, d);
          this.contentHandler.startElement(f, m);
        },
        parseEndTag: function(u, f) {
          this.contentHandler.endElement(f);
        },
        parseAttributes: function(u, f) {
          var d = this, m = [];
          return f.replace(this.attrRe, function(T, S, w, b, g, x, v, M) {
            m.push(d.parseAttribute(u, T, S, w, b, g, x, v, M));
          }), m;
        },
        parseAttribute: function(u, f, d) {
          var m = "";
          arguments[7] ? m = arguments[8] : arguments[5] ? m = arguments[6] : arguments[3] && (m = arguments[4]);
          var T = !m && !arguments[3];
          return { name: d, value: T ? null : m };
        }
      }, l.exports = t;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      function f(d, m) {
        function T(S) {
          d.selection.createRangeByElem(S), d.selection.restoreSelection();
        }
        m.push(T);
      }
      o.default = f;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), m = t(6), T = d.__importDefault(t(3));
      function S(w) {
        var b = [], g = w.childNodes() || [];
        return (0, f.default)(g).call(g, function(x) {
          var v, M = x.nodeType;
          if (M === 3 && (v = x.textContent || "", v = m.replaceHtmlSymbol(v)), M === 1) {
            v = {}, v = v, v.tag = x.nodeName.toLowerCase();
            for (var y = [], h = x.attributes, E = h.length || 0, C = 0; C < E; C++) {
              var R = h[C];
              y.push({ name: R.name, value: R.value });
            }
            v.attrs = y, v.children = S(T.default(x));
          }
          v && b.push(v);
        }), b;
      }
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(92)), f = s(t(1)), d = s(t(4));
      (0, f.default)(o, "__esModule", { value: !0 });
      var m = t(2), T = m.__importDefault(t(3));
      function S(w, b) {
        b === void 0 && (b = document.createElement("div"));
        var g = b;
        return (0, d.default)(w).call(w, function(x) {
          var v;
          if (typeof x == "string" && (v = document.createTextNode(x)), (0, u.default)(x) === "object") {
            var M;
            v = document.createElement(x.tag), (0, d.default)(M = x.attrs).call(M, function(y) {
              T.default(v).attr(y.name, y.value);
            }), x.children && x.children.length > 0 && S(x.children, v.getRootNode());
          }
          v && g.appendChild(v);
        }), T.default(g);
      }
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(89)), d = s(t(70)), m = s(t(44)), T = s(t(302)), S = s(t(4)), w = s(t(94)), b = s(t(132)), g = s(t(46)), x = s(t(57));
      (0, u.default)(o, "__esModule", { value: !0 });
      var v = t(2), M = v.__importDefault(t(87)), y = v.__importDefault(t(314)), h = v.__importDefault(t(3)), E = function() {
        function C(R) {
          this.editor = R, this.menuList = [], this.constructorList = y.default;
        }
        return C.prototype.extend = function(R, F) {
          !F || typeof F != "function" || (this.constructorList[R] = F);
        }, C.prototype.init = function() {
          var R, F, B = this, O = this.editor.config, z = O.excludeMenus;
          (0, f.default)(z) === !1 && (z = []), O.menus = (0, d.default)(R = O.menus).call(R, function(K) {
            return (0, m.default)(z).call(z, K) === !1;
          });
          var I = (0, T.default)(M.default.globalCustomMenuConstructorList);
          I = (0, d.default)(I).call(I, function(K) {
            return (0, m.default)(z).call(z, K);
          }), (0, S.default)(I).call(I, function(K) {
            delete M.default.globalCustomMenuConstructorList[K];
          }), (0, S.default)(F = O.menus).call(F, function(K) {
            var q = B.constructorList[K];
            B._initMenuList(K, q);
          });
          for (var U = 0, H = (0, w.default)(M.default.globalCustomMenuConstructorList); U < H.length; U++) {
            var $ = H[U], P = $[0], Y = $[1], Q = Y;
            this._initMenuList(P, Q);
          }
          this._addToToolbar(), O.showMenuTooltips && this._bindMenuTooltips();
        }, C.prototype._initMenuList = function(R, F) {
          var B;
          if (!(F == null || typeof F != "function"))
            if ((0, b.default)(B = this.menuList).call(B, function(z) {
              return z.key === R;
            }))
              console.warn("\u83DC\u5355\u540D\u79F0\u91CD\u590D:" + R);
            else {
              var O = new F(this.editor);
              O.key = R, this.menuList.push(O);
            }
        }, C.prototype._bindMenuTooltips = function() {
          var R = this.editor, F = R.$toolbarElem, B = R.config, O = B.menuTooltipPosition, z = h.default('<div class="w-e-menu-tooltip w-e-menu-tooltip-' + O + `">
            <div class="w-e-menu-tooltip-item-wrapper">
              <div></div>
            </div>
          </div>`);
          z.css("visibility", "hidden"), F.append(z), z.css("z-index", R.zIndex.get("tooltip"));
          var I = 0;
          function U() {
            I && clearTimeout(I);
          }
          function H() {
            U(), z.css("visibility", "hidden");
          }
          F.on("mouseover", function($) {
            var P = $.target, Y = h.default(P), Q, K;
            if (Y.isContain(F)) {
              H();
              return;
            }
            if (Y.parentUntil(".w-e-droplist") != null)
              H();
            else if (Y.attr("data-title"))
              Q = Y.attr("data-title"), K = Y;
            else {
              var q = Y.parentUntil(".w-e-menu");
              q != null && (Q = q.attr("data-title"), K = q);
            }
            if (Q && K) {
              U();
              var X = K.getOffsetData();
              z.text(R.i18next.t("menus.title." + Q));
              var _ = z.getOffsetData(), le = X.left + X.width / 2 - _.width / 2;
              z.css("left", le + "px"), O === "up" ? z.css("top", X.top - _.height - 8 + "px") : O === "down" && z.css("top", X.top + X.height + 8 + "px"), I = (0, g.default)(function() {
                z.css("visibility", "visible");
              }, 200);
            } else
              H();
          }).on("mouseleave", function() {
            H();
          });
        }, C.prototype._addToToolbar = function() {
          var R, F = this.editor, B = F.$toolbarElem;
          (0, S.default)(R = this.menuList).call(R, function(O) {
            var z = O.$elem;
            z && B.append(z);
          });
        }, C.prototype.menuFind = function(R) {
          for (var F = this.menuList, B = 0, O = F.length; B < O; B++)
            if (F[B].key === R)
              return F[B];
          return F[0];
        }, C.prototype.changeActive = function() {
          var R;
          (0, S.default)(R = this.menuList).call(R, function(F) {
            var B;
            (0, g.default)((0, x.default)(B = F.tryChangeActive).call(B, F), 100);
          });
        }, C;
      }();
      o.default = E;
    }, function(l, o, t) {
      l.exports = t(303);
    }, function(l, o, t) {
      var s = t(304);
      l.exports = s;
    }, function(l, o, t) {
      t(305);
      var s = t(9);
      l.exports = s.Object.keys;
    }, function(l, o, t) {
      var s = t(5), u = t(29), f = t(52), d = t(11), m = d(function() {
        f(1);
      });
      s({ target: "Object", stat: !0, forced: m }, { keys: function(S) {
        return f(u(S));
      } });
    }, function(l, o, t) {
      var s = t(307);
      l.exports = s;
    }, function(l, o, t) {
      t(308);
      var s = t(9);
      l.exports = s.Object.entries;
    }, function(l, o, t) {
      var s = t(5), u = t(309).entries;
      s({ target: "Object", stat: !0 }, { entries: function(d) {
        return u(d);
      } });
    }, function(l, o, t) {
      var s = t(14), u = t(52), f = t(28), d = t(59).f, m = function(S) {
        return function(w) {
          for (var b = f(w), g = u(b), x = g.length, v = 0, M = [], y; x > v; )
            y = g[v++], (!s || d.call(b, y)) && M.push(S ? [y, b[y]] : b[y]);
          return M;
        };
      };
      l.exports = {
        entries: m(!0),
        values: m(!1)
      };
    }, function(l, o, t) {
      var s = t(311);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(312), u = Array.prototype;
      l.exports = function(f) {
        var d = f.some;
        return f === u || f instanceof Array && d === u.some ? s : d;
      };
    }, function(l, o, t) {
      t(313);
      var s = t(15);
      l.exports = s("Array").some;
    }, function(l, o, t) {
      var s = t(5), u = t(30).some, f = t(67), d = t(22), m = f("some"), T = d("some");
      s({ target: "Array", proto: !0, forced: !m || !T }, { some: function(w) {
        return u(this, w, arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(315)), m = f.__importDefault(t(316)), T = f.__importDefault(t(321)), S = f.__importDefault(t(326)), w = f.__importDefault(t(327)), b = f.__importDefault(t(328)), g = f.__importDefault(t(329)), x = f.__importDefault(t(331)), v = f.__importDefault(t(333)), M = f.__importDefault(t(334)), y = f.__importDefault(t(337)), h = f.__importDefault(t(338)), E = f.__importDefault(t(339)), C = f.__importDefault(t(350)), R = f.__importDefault(t(365)), F = f.__importDefault(t(369)), B = f.__importDefault(t(137)), O = f.__importDefault(t(378)), z = f.__importDefault(t(380)), I = f.__importDefault(t(381)), U = f.__importDefault(t(382)), H = f.__importDefault(t(401)), $ = f.__importDefault(t(406)), P = f.__importDefault(t(409));
      o.default = { bold: d.default, head: m.default, italic: S.default, link: T.default, underline: w.default, strikeThrough: b.default, fontName: g.default, fontSize: x.default, justify: v.default, quote: M.default, backColor: y.default, foreColor: h.default, video: E.default, image: C.default, indent: R.default, emoticon: F.default, list: B.default, lineHeight: O.default, undo: z.default, redo: I.default, table: U.default, code: H.default, splitLine: $.default, todo: P.default };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(23)), m = f.__importDefault(t(3)), T = function(S) {
        f.__extends(w, S);
        function w(b) {
          var g = this, x = m.default(`<div class="w-e-menu" data-title="\u52A0\u7C97">
                <i class="w-e-icon-bold"></i>
            </div>`);
          return g = S.call(this, x, b) || this, g;
        }
        return w.prototype.clickHandler = function() {
          var b = this.editor, g = b.selection.isSelectionEmpty();
          g && b.selection.createEmptyRange(), b.cmd.do("bold"), g && (b.selection.collapseRange(), b.selection.restoreSelection());
        }, w.prototype.tryChangeActive = function() {
          var b = this.editor;
          b.cmd.queryCommandState("bold") ? this.active() : this.unActive();
        }, w;
      }(d.default);
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(27)), d = s(t(31)), m = s(t(4)), T = s(t(317)), S = s(t(44));
      (0, u.default)(o, "__esModule", { value: !0 });
      var w = t(2), b = w.__importDefault(t(24)), g = w.__importDefault(t(3)), x = t(6), v = t(7), M = function(y) {
        w.__extends(h, y);
        function h(E) {
          var C = this, R = g.default('<div class="w-e-menu" data-title="\u6807\u9898"><i class="w-e-icon-header"></i></div>'), F = { width: 100, title: "\u8BBE\u7F6E\u6807\u9898", type: "list", list: [{ $elem: g.default("<h1>H1</h1>"), value: "<h1>" }, { $elem: g.default("<h2>H2</h2>"), value: "<h2>" }, { $elem: g.default("<h3>H3</h3>"), value: "<h3>" }, { $elem: g.default("<h4>H4</h4>"), value: "<h4>" }, { $elem: g.default("<h5>H5</h5>"), value: "<h5>" }, { $elem: g.default("<p>" + E.i18next.t("menus.dropListMenu.head.\u6B63\u6587") + "</p>"), value: "<p>" }], clickHandler: function(z) {
            C.command(z);
          } };
          C = y.call(this, R, E, F) || this;
          var B = E.config.onCatalogChange;
          return B && (C.oldCatalogs = [], C.addListenerCatalog(), C.getCatalogs()), C;
        }
        return h.prototype.command = function(E) {
          var C = this.editor, R = C.selection.getSelectionContainerElem();
          if (R && C.$textElem.equal(R))
            this.setMultilineHead(E);
          else {
            var F;
            if ((0, f.default)(F = ["OL", "UL", "LI", "TABLE", "TH", "TR", "CODE", "HR"]).call(F, g.default(R).getNodeName()) > -1)
              return;
            C.cmd.do("formatBlock", E);
          }
          E !== "<p>" && this.addUidForSelectionElem();
        }, h.prototype.addUidForSelectionElem = function() {
          var E = this.editor, C = E.selection.getSelectionContainerElem(), R = x.getRandomCode();
          g.default(C).attr("id", R);
        }, h.prototype.addListenerCatalog = function() {
          var E = this, C = this.editor;
          C.txt.eventHooks.changeEvents.push(function() {
            E.getCatalogs();
          });
        }, h.prototype.getCatalogs = function() {
          var E = this.editor, C = this.editor.$textElem, R = E.config.onCatalogChange, F = (0, d.default)(C).call(C, "h1,h2,h3,h4,h5"), B = [];
          (0, m.default)(F).call(F, function(O, z) {
            var I = g.default(O), U = I.attr("id"), H = I.getNodeName(), $ = I.text();
            U || (U = x.getRandomCode(), I.attr("id", U)), $ && B.push({ tag: H, id: U, text: $ });
          }), (0, T.default)(this.oldCatalogs) !== (0, T.default)(B) && (this.oldCatalogs = B, R && R(B));
        }, h.prototype.setMultilineHead = function(E) {
          var C = this, R, F, B = this.editor, O = B.selection, z = (R = O.getSelectionContainerElem()) === null || R === void 0 ? void 0 : R.elems[0], I = ["IMG", "VIDEO", "TABLE", "TH", "TR", "UL", "OL", "PRE", "HR", "BLOCKQUOTE"], U = g.default(O.getSelectionStartElem()), H = g.default(O.getSelectionEndElem());
          H.elems[0].outerHTML === g.default(v.EMPTY_P).elems[0].outerHTML && !H.elems[0].nextSibling && (H = H.prev());
          var $ = [];
          $.push(U.getNodeTop(B));
          var P = [], Y = (F = O.getRange()) === null || F === void 0 ? void 0 : F.commonAncestorContainer.childNodes;
          Y == null || (0, m.default)(Y).call(Y, function(q, X) {
            q === $[0].getNode() && P.push(X), q === H.getNodeTop(B).getNode() && P.push(X);
          });
          for (var Q = 0; $[Q].getNode() !== H.getNodeTop(B).getNode(); ) {
            if (!$[Q].elems[0])
              return;
            var K = g.default($[Q].next().getNode());
            $.push(K), Q++;
          }
          $ == null || (0, m.default)($).call($, function(q, X) {
            if (!C.hasTag(q, I)) {
              var _ = g.default(E), le = q.parent().getNode();
              _.html("" + q.html()), le.insertBefore(_.getNode(), q.getNode()), q.remove();
            }
          }), O.createRangeByElems(z.children[P[0]], z.children[P[1]]);
        }, h.prototype.hasTag = function(E, C) {
          var R = this, F;
          if (!E)
            return !1;
          if ((0, S.default)(C).call(C, E == null ? void 0 : E.getNodeName()))
            return !0;
          var B = !1;
          return (F = E.children()) === null || F === void 0 || (0, m.default)(F).call(F, function(O) {
            B = R.hasTag(g.default(O), C);
          }), B;
        }, h.prototype.tryChangeActive = function() {
          var E = this.editor, C = /^h/i, R = E.cmd.queryCommandValue("formatBlock");
          C.test(R) ? this.active() : this.unActive();
        }, h;
      }(b.default);
      o.default = M;
    }, function(l, o, t) {
      l.exports = t(318);
    }, function(l, o, t) {
      var s = t(319);
      l.exports = s;
    }, function(l, o, t) {
      t(320);
      var s = t(9);
      s.JSON || (s.JSON = { stringify: JSON.stringify }), l.exports = function(f, d, m) {
        return s.JSON.stringify.apply(null, arguments);
      };
    }, function(l, o, t) {
      var s = t(5), u = t(35), f = t(11), d = u("JSON", "stringify"), m = /[\uD800-\uDFFF]/g, T = /^[\uD800-\uDBFF]$/, S = /^[\uDC00-\uDFFF]$/, w = function(x, v, M) {
        var y = M.charAt(v - 1), h = M.charAt(v + 1);
        return T.test(x) && !S.test(h) || S.test(x) && !T.test(y) ? "\\u" + x.charCodeAt(0).toString(16) : x;
      }, b = f(function() {
        return d("\uDF06\uD834") !== '"\\udf06\\ud834"' || d("\uDEAD") !== '"\\udead"';
      });
      d && s({ target: "JSON", stat: !0, forced: b }, {
        stringify: function(x, v, M) {
          var y = d.apply(null, arguments);
          return typeof y == "string" ? y.replace(m, w) : y;
        }
      });
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(17));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), m = d.__importDefault(t(37)), T = d.__importDefault(t(3)), S = d.__importDefault(t(322)), w = d.__importDefault(t(134)), b = d.__importDefault(t(32)), g = d.__importDefault(t(324)), x = t(7), v = function(M) {
        d.__extends(y, M);
        function y(h) {
          var E = this, C = T.default('<div class="w-e-menu" data-title="\u94FE\u63A5"><i class="w-e-icon-link"></i></div>');
          return E = M.call(this, C, h) || this, g.default(h), E;
        }
        return y.prototype.clickHandler = function() {
          var h = this.editor, E, C = h.selection.getSelectionContainerElem(), R = h.$textElem, F = R.html(), B = (0, f.default)(F).call(F);
          if (B === x.EMPTY_P) {
            var O = R.children();
            h.selection.createRangeByElem(O, !0, !0), C = h.selection.getSelectionContainerElem();
          }
          if (!(C && h.$textElem.equal(C)))
            if (this.isActive) {
              if (E = h.selection.getSelectionContainerElem(), !E)
                return;
              this.createPanel(E.text(), E.attr("href"));
            } else
              h.selection.isSelectionEmpty() ? this.createPanel("", "") : this.createPanel(h.selection.getSelectionText(), "");
        }, y.prototype.createPanel = function(h, E) {
          var C = S.default(this.editor, h, E), R = new b.default(this, C);
          R.create();
        }, y.prototype.tryChangeActive = function() {
          var h = this.editor;
          w.default(h) ? this.active() : this.unActive();
        }, y;
      }(m.default);
      o.default = v;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(17));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), m = t(6), T = d.__importDefault(t(3)), S = d.__importDefault(t(134)), w = t(323);
      function b(g, x, v) {
        var M = m.getRandom("input-link"), y = m.getRandom("input-text"), h = m.getRandom("btn-ok"), E = m.getRandom("btn-del"), C = S.default(g) ? "inline-block" : "none", R;
        function F() {
          if (!!S.default(g)) {
            var U = g.selection.getSelectionContainerElem();
            !U || (g.selection.createRangeByElem(U), g.selection.restoreSelection(), R = U);
          }
        }
        function B(U, H) {
          var $ = new RegExp(/(<\/*ul>)|(<\/*li>)|(<\/*ol>)/g);
          U = U.replace($, ""), S.default(g) && F(), g.cmd.do("insertHTML", '<a href="' + H + '" target="_blank">' + U + "</a>");
        }
        function O() {
          if (!!S.default(g)) {
            F();
            var U = R.text();
            g.cmd.do("insertHTML", "<span>" + U + "</span>");
          }
        }
        function z(U, H) {
          var $ = g.config.linkCheck(U, H);
          if ($ !== void 0) {
            if ($ === !0)
              return !0;
            g.config.customAlert($, "warning");
          }
          return !1;
        }
        var I = {
          width: 300,
          height: 0,
          tabs: [{
            title: g.i18next.t("menus.panelMenus.link.\u94FE\u63A5"),
            tpl: `<div>
                        <input
                            id="` + y + `"
                            type="text"
                            class="block"
                            value="` + x + `"
                            placeholder="` + g.i18next.t("menus.panelMenus.link.\u94FE\u63A5\u6587\u5B57") + `"/>
                        </td>
                        <input
                            id="` + M + `"
                            type="text"
                            class="block"
                            value="` + v + `"
                            placeholder="` + g.i18next.t("\u5982") + ` https://..."/>
                        </td>
                        <div class="w-e-button-container">
                            <button type="button" id="` + h + `" class="right">
                                ` + g.i18next.t("\u63D2\u5165") + `
                            </button>
                            <button type="button" id="` + E + '" class="gray right" style="display:' + C + `">
                                ` + g.i18next.t("menus.panelMenus.link.\u53D6\u6D88\u94FE\u63A5") + `
                            </button>
                        </div>
                    </div>`,
            events: [
              { selector: "#" + h, type: "click", fn: function() {
                var H, $, P, Y;
                g.selection.restoreSelection();
                var Q = g.selection.getSelectionRangeTopNodes()[0].getNode(), K = window.getSelection(), q = T.default("#" + M), X = T.default("#" + y), _ = (0, f.default)(H = q.val()).call(H), le = (0, f.default)($ = X.val()).call($), Se = "";
                K && !(K != null && K.isCollapsed) && (Se = (P = w.insertHtml(K, Q)) === null || P === void 0 ? void 0 : (0, f.default)(P).call(P));
                var ve = Se == null ? void 0 : Se.replace(/<.*?>/g, ""), ce = (Y = ve == null ? void 0 : ve.length) !== null && Y !== void 0 ? Y : 0;
                if (ce <= le.length) {
                  var ae = le.substring(0, ce), re = le.substring(ce);
                  ve === ae && (le = Se + re);
                }
                if (!!_ && (le || (le = _), !!z(le, _)))
                  return B(le, _), !0;
              }, bindEnter: !0 },
              { selector: "#" + E, type: "click", fn: function() {
                return O(), !0;
              } }
            ]
          }]
        };
        return I;
      }
      o.default = b;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 }), o.insertHtml = o.createPartHtml = o.makeHtmlString = o.getTopNode = void 0;
      function d(g, x) {
        var v = g, M = g;
        do {
          if (v.textContent === x)
            break;
          M = v, v.parentNode && (v = v == null ? void 0 : v.parentNode);
        } while ((v == null ? void 0 : v.nodeName) !== "P");
        return M;
      }
      o.getTopNode = d;
      function m(g, x) {
        var v = g.nodeName, M = "";
        if (g.nodeType === 3 || /^(h|H)[1-6]$/.test(v))
          return x;
        if (g.nodeType === 1) {
          var y = g.getAttribute("style"), h = g.getAttribute("face"), E = g.getAttribute("color");
          y && (M = M + (' style="' + y + '"')), h && (M = M + (' face="' + h + '"')), E && (M = M + (' color="' + E + '"'));
        }
        return v = v.toLowerCase(), "<" + v + M + ">" + x + "</" + v + ">";
      }
      o.makeHtmlString = m;
      function T(g, x, v, M) {
        var y, h = (y = x.textContent) === null || y === void 0 ? void 0 : y.substring(v, M), E = x, C = "";
        do
          C = m(E, h != null ? h : ""), h = C, E = E == null ? void 0 : E.parentElement;
        while (E && E.textContent !== g);
        return C;
      }
      o.createPartHtml = T;
      function S(g, x) {
        var v, M, y, h, E, C = g.anchorNode, R = g.focusNode, F = g.anchorOffset, B = g.focusOffset, O = (v = x.textContent) !== null && v !== void 0 ? v : "", z = w(x), I = "", U = "", H = "", $ = "", P = C, Y = R, Q = C;
        if (C != null && C.isEqualNode(R != null ? R : null)) {
          var K = T(O, C, F, B);
          return K = b(z, K), K;
        }
        for (C && (U = T(O, C, F != null ? F : 0)), R && ($ = T(O, R, 0, B)), C && (P = d(C, O)), R && (Y = d(R, O)), Q = (M = P == null ? void 0 : P.nextSibling) !== null && M !== void 0 ? M : C; !(Q != null && Q.isEqualNode(Y != null ? Y : null)); ) {
          var q = Q == null ? void 0 : Q.nodeName;
          if (q === "#text")
            H = H + (Q == null ? void 0 : Q.textContent);
          else {
            var X = (h = (y = Q == null ? void 0 : Q.firstChild) === null || y === void 0 ? void 0 : y.parentElement) === null || h === void 0 ? void 0 : h.innerHTML;
            Q && (H = H + m(Q, X != null ? X : ""));
          }
          var _ = (E = Q == null ? void 0 : Q.nextSibling) !== null && E !== void 0 ? E : Q;
          if (_ === Q)
            break;
          Q = _;
        }
        return I = "" + U + H + $, I = b(z, I), I;
      }
      o.insertHtml = S;
      function w(g) {
        for (var x, v = (x = g.textContent) !== null && x !== void 0 ? x : "", M = []; (g == null ? void 0 : g.textContent) === v; )
          g.nodeName !== "P" && g.nodeName !== "TABLE" && M.push(g), g = g.childNodes[0];
        return M;
      }
      function b(g, x) {
        return (0, f.default)(g).call(g, function(v) {
          x = m(v, x);
        }), x;
      }
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(325));
      function m(T) {
        d.default(T);
      }
      o.default = m;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(3)), m = f.__importDefault(t(38));
      function T(w) {
        var b;
        function g(v) {
          var M = [{ $elem: d.default("<span>" + w.i18next.t("menus.panelMenus.link.\u67E5\u770B\u94FE\u63A5") + "</span>"), onClick: function(h, E) {
            var C = E.attr("href");
            return window.open(C, "_target"), !0;
          } }, { $elem: d.default("<span>" + w.i18next.t("menus.panelMenus.link.\u53D6\u6D88\u94FE\u63A5") + "</span>"), onClick: function(h, E) {
            var C, R;
            h.selection.createRangeByElem(E), h.selection.restoreSelection();
            var F = E.childNodes();
            if ((F == null ? void 0 : F.getNodeName()) === "IMG") {
              var B = (R = (C = h.selection.getSelectionContainerElem()) === null || C === void 0 ? void 0 : C.children()) === null || R === void 0 ? void 0 : R.elems[0].children[0];
              h.cmd.do("insertHTML", `<img 
                                src=` + (B == null ? void 0 : B.getAttribute("src")) + ` 
                                style=` + (B == null ? void 0 : B.getAttribute("style")) + ">");
            } else {
              var O = E.text();
              h.cmd.do("insertHTML", "<span>" + O + "</span>");
            }
            return !0;
          } }];
          b = new m.default(w, v, M), b.create();
        }
        function x() {
          b && (b.remove(), b = null);
        }
        return { showLinkTooltip: g, hideLinkTooltip: x };
      }
      function S(w) {
        var b = T(w), g = b.showLinkTooltip, x = b.hideLinkTooltip;
        w.txt.eventHooks.linkClickEvents.push(g), w.txt.eventHooks.clickEvents.push(x), w.txt.eventHooks.keyupEvents.push(x), w.txt.eventHooks.toolbarClickEvents.push(x), w.txt.eventHooks.menuClickEvents.push(x), w.txt.eventHooks.textScrollEvents.push(x);
      }
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(23)), m = f.__importDefault(t(3)), T = function(S) {
        f.__extends(w, S);
        function w(b) {
          var g = this, x = m.default(`<div class="w-e-menu" data-title="\u659C\u4F53">
                <i class="w-e-icon-italic"></i>
            </div>`);
          return g = S.call(this, x, b) || this, g;
        }
        return w.prototype.clickHandler = function() {
          var b = this.editor, g = b.selection.isSelectionEmpty();
          g && b.selection.createEmptyRange(), b.cmd.do("italic"), g && (b.selection.collapseRange(), b.selection.restoreSelection());
        }, w.prototype.tryChangeActive = function() {
          var b = this.editor;
          b.cmd.queryCommandState("italic") ? this.active() : this.unActive();
        }, w;
      }(d.default);
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(23)), m = f.__importDefault(t(3)), T = function(S) {
        f.__extends(w, S);
        function w(b) {
          var g = this, x = m.default(`<div class="w-e-menu" data-title="\u4E0B\u5212\u7EBF">
                <i class="w-e-icon-underline"></i>
            </div>`);
          return g = S.call(this, x, b) || this, g;
        }
        return w.prototype.clickHandler = function() {
          var b = this.editor, g = b.selection.isSelectionEmpty();
          g && b.selection.createEmptyRange(), b.cmd.do("underline"), g && (b.selection.collapseRange(), b.selection.restoreSelection());
        }, w.prototype.tryChangeActive = function() {
          var b = this.editor;
          b.cmd.queryCommandState("underline") ? this.active() : this.unActive();
        }, w;
      }(d.default);
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(23)), m = f.__importDefault(t(3)), T = function(S) {
        f.__extends(w, S);
        function w(b) {
          var g = this, x = m.default(`<div class="w-e-menu" data-title="\u5220\u9664\u7EBF">
                <i class="w-e-icon-strikethrough"></i>
            </div>`);
          return g = S.call(this, x, b) || this, g;
        }
        return w.prototype.clickHandler = function() {
          var b = this.editor, g = b.selection.isSelectionEmpty();
          g && b.selection.createEmptyRange(), b.cmd.do("strikeThrough"), g && (b.selection.collapseRange(), b.selection.restoreSelection());
        }, w.prototype.tryChangeActive = function() {
          var b = this.editor;
          b.cmd.queryCommandState("strikeThrough") ? this.active() : this.unActive();
        }, w;
      }(d.default);
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(24)), m = f.__importDefault(t(3)), T = f.__importDefault(t(330)), S = function(w) {
        f.__extends(b, w);
        function b(g) {
          var x = this, v = m.default(`<div class="w-e-menu" data-title="\u5B57\u4F53">
                <i class="w-e-icon-font"></i>
            </div>`), M = new T.default(g.config.fontNames), y = { width: 100, title: "\u8BBE\u7F6E\u5B57\u4F53", type: "list", list: M.getItemList(), clickHandler: function(E) {
            x.command(E);
          } };
          return x = w.call(this, v, g, y) || this, x;
        }
        return b.prototype.command = function(g) {
          var x, v = this.editor, M = v.selection.isSelectionEmpty(), y = (x = v.selection.getSelectionContainerElem()) === null || x === void 0 ? void 0 : x.elems[0];
          if (y != null) {
            var h = (y == null ? void 0 : y.nodeName.toLowerCase()) !== "p", E = (y == null ? void 0 : y.getAttribute("face")) === g;
            if (M) {
              if (h && !E) {
                var C = v.selection.getSelectionRangeTopNodes();
                v.selection.createRangeByElem(C[0]), v.selection.moveCursor(C[0].elems[0]);
              }
              v.selection.setRangeToElem(y), v.selection.createEmptyRange();
            }
            v.cmd.do("fontName", g), M && (v.selection.collapseRange(), v.selection.restoreSelection());
          }
        }, b.prototype.tryChangeActive = function() {
        }, b;
      }(d.default);
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), m = d.__importDefault(t(3)), T = function() {
        function S(w) {
          var b = this;
          this.itemList = [], (0, f.default)(w).call(w, function(g) {
            var x = typeof g == "string" ? g : g.value, v = typeof g == "string" ? g : g.name;
            b.itemList.push({ $elem: m.default(`<p style="font-family:'` + x + `'">` + v + "</p>"), value: v });
          });
        }
        return S.prototype.getItemList = function() {
          return this.itemList;
        }, S;
      }();
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(24)), m = f.__importDefault(t(3)), T = f.__importDefault(t(332)), S = function(w) {
        f.__extends(b, w);
        function b(g) {
          var x = this, v = m.default(`<div class="w-e-menu" data-title="\u5B57\u53F7">
                <i class="w-e-icon-text-heigh"></i>
            </div>`), M = new T.default(g.config.fontSizes), y = { width: 160, title: "\u8BBE\u7F6E\u5B57\u53F7", type: "list", list: M.getItemList(), clickHandler: function(E) {
            x.command(E);
          } };
          return x = w.call(this, v, g, y) || this, x;
        }
        return b.prototype.command = function(g) {
          var x, v = this.editor, M = v.selection.isSelectionEmpty(), y = (x = v.selection.getSelectionContainerElem()) === null || x === void 0 ? void 0 : x.elems[0];
          y != null && (v.cmd.do("fontSize", g), M && (v.selection.collapseRange(), v.selection.restoreSelection()));
        }, b.prototype.tryChangeActive = function() {
        }, b;
      }(d.default);
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(3)), m = function() {
        function T(S) {
          this.itemList = [];
          for (var w in S) {
            var b = S[w];
            this.itemList.push({ $elem: d.default('<p style="font-size:' + w + '">' + b.name + "</p>"), value: b.value });
          }
        }
        return T.prototype.getItemList = function() {
          return this.itemList;
        }, T;
      }();
      o.default = m;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(4)), d = s(t(27));
      (0, u.default)(o, "__esModule", { value: !0 });
      var m = t(2), T = m.__importDefault(t(24)), S = m.__importDefault(t(3)), w = ["LI"], b = ["UL", "BLOCKQUOTE"], g = function(x) {
        m.__extends(v, x);
        function v(M) {
          var y = this, h = S.default('<div class="w-e-menu" data-title="\u5BF9\u9F50"><i class="w-e-icon-paragraph-left"></i></div>'), E = { width: 100, title: "\u5BF9\u9F50\u65B9\u5F0F", type: "list", list: [{ $elem: S.default(`<p>
                            <i class="w-e-icon-paragraph-left w-e-drop-list-item"></i>
                            ` + M.i18next.t("menus.dropListMenu.justify.\u9760\u5DE6") + `
                        </p>`), value: "left" }, { $elem: S.default(`<p>
                            <i class="w-e-icon-paragraph-center w-e-drop-list-item"></i>
                            ` + M.i18next.t("menus.dropListMenu.justify.\u5C45\u4E2D") + `
                        </p>`), value: "center" }, { $elem: S.default(`<p>
                            <i class="w-e-icon-paragraph-right w-e-drop-list-item"></i>
                            ` + M.i18next.t("menus.dropListMenu.justify.\u9760\u53F3") + `
                        </p>`), value: "right" }, { $elem: S.default(`<p>
                            <i class="w-e-icon-paragraph-justify w-e-drop-list-item"></i>
                            ` + M.i18next.t("menus.dropListMenu.justify.\u4E24\u7AEF") + `
                        </p>`), value: "justify" }], clickHandler: function(R) {
            y.command(R);
          } };
          return y = x.call(this, h, M, E) || this, y;
        }
        return v.prototype.command = function(M) {
          var y = this.editor, h = y.selection, E = h.getSelectionContainerElem();
          h.saveRange();
          var C = y.selection.getSelectionRangeTopNodes();
          if (E != null && E.length)
            if (this.isSpecialNode(E, C[0]) || this.isSpecialTopNode(C[0])) {
              var R = this.getSpecialNodeUntilTop(E, C[0]);
              if (R == null)
                return;
              S.default(R).css("text-align", M);
            } else
              (0, f.default)(C).call(C, function(F) {
                F.css("text-align", M);
              });
          h.restoreSelection();
        }, v.prototype.getSpecialNodeUntilTop = function(M, y) {
          for (var h = M.elems[0], E = y.elems[0]; h != null; ) {
            if ((0, d.default)(w).call(w, h == null ? void 0 : h.nodeName) !== -1 || h.parentNode === E)
              return h;
            h = h.parentNode;
          }
          return h;
        }, v.prototype.isSpecialNode = function(M, y) {
          var h = this.getSpecialNodeUntilTop(M, y);
          return h == null ? !1 : (0, d.default)(w).call(w, h.nodeName) !== -1;
        }, v.prototype.isSpecialTopNode = function(M) {
          var y;
          return M == null ? !1 : (0, d.default)(b).call(b, (y = M.elems[0]) === null || y === void 0 ? void 0 : y.nodeName) !== -1;
        }, v.prototype.tryChangeActive = function() {
        }, v;
      }(T.default);
      o.default = g;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), m = d.__importDefault(t(3)), T = d.__importDefault(t(23)), S = d.__importDefault(t(335)), w = d.__importDefault(t(336)), b = t(7), g = function(x) {
        d.__extends(v, x);
        function v(M) {
          var y = this, h = m.default(`<div class="w-e-menu" data-title="\u5F15\u7528">
                <i class="w-e-icon-quotes-left"></i>
            </div>`);
          return y = x.call(this, h, M) || this, S.default(M), y;
        }
        return v.prototype.clickHandler = function() {
          var M, y, h = this.editor, E = h.selection.isSelectionEmpty(), C = h.selection.getSelectionRangeTopNodes(), R = C[C.length - 1], F = this.getTopNodeName();
          if (F === "BLOCKQUOTE") {
            var B = m.default(R.childNodes()), O = B.length, z = R;
            (0, f.default)(B).call(B, function($) {
              var P = m.default($);
              P.insertAfter(z), z = P;
            }), R.remove(), h.selection.moveCursor(B.elems[O - 1]), this.tryChangeActive();
          } else {
            var I = w.default(C);
            if (h.$textElem.equal(R)) {
              var U = (M = h.selection.getSelectionContainerElem()) === null || M === void 0 ? void 0 : M.elems[0];
              h.selection.createRangeByElems(U.children[0], U.children[0]), C = h.selection.getSelectionRangeTopNodes(), I = w.default(C), R.append(I);
            } else
              I.insertAfter(R);
            this.delSelectNode(C);
            var H = (y = I.childNodes()) === null || y === void 0 ? void 0 : y.last().getNode();
            if (H == null)
              return;
            H.textContent ? h.selection.moveCursor(H) : h.selection.moveCursor(H, 0), this.tryChangeActive(), m.default(b.EMPTY_P).insertAfter(I);
            return;
          }
          E && (h.selection.collapseRange(), h.selection.restoreSelection());
        }, v.prototype.tryChangeActive = function() {
          var M, y = this.editor, h = (M = y.selection.getSelectionRangeTopNodes()[0]) === null || M === void 0 ? void 0 : M.getNodeName();
          h === "BLOCKQUOTE" ? this.active() : this.unActive();
        }, v.prototype.getTopNodeName = function() {
          var M = this.editor, y = M.selection.getSelectionRangeTopNodes()[0], h = y == null ? void 0 : y.getNodeName();
          return h;
        }, v.prototype.delSelectNode = function(M) {
          (0, f.default)(M).call(M, function(y) {
            y.remove();
          });
        }, v;
      }(T.default);
      o.default = g;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = t(7), m = f.__importDefault(t(3));
      function T(S) {
        function w(b) {
          var g, x = S.selection.getSelectionContainerElem(), v = S.selection.getSelectionRangeTopNodes()[0];
          if ((v == null ? void 0 : v.getNodeName()) === "BLOCKQUOTE") {
            if (x.getNodeName() === "BLOCKQUOTE") {
              var M = (g = x.childNodes()) === null || g === void 0 ? void 0 : g.getNode();
              S.selection.moveCursor(M);
            }
            if (x.text() === "") {
              b.preventDefault(), x.remove();
              var y = m.default(d.EMPTY_P);
              y.insertAfter(v), S.selection.moveCursor(y.getNode(), 0);
            }
            v.text() === "" && v.remove();
          }
        }
        S.txt.eventHooks.enterDownEvents.push(w);
      }
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), m = d.__importDefault(t(3));
      function T(S) {
        var w = m.default("<blockquote></blockquote>");
        return (0, f.default)(S).call(S, function(b) {
          w.append(b.clone(!0));
        }), w;
      }
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(26));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), m = d.__importDefault(t(24)), T = d.__importDefault(t(3)), S = t(6), w = function(b) {
        d.__extends(g, b);
        function g(x) {
          var v, M = this, y = T.default(`<div class="w-e-menu" data-title="\u80CC\u666F\u8272">
                <i class="w-e-icon-paint-brush"></i>
            </div>`), h = {
            width: 120,
            title: "\u80CC\u666F\u989C\u8272",
            type: "inline-block",
            list: (0, f.default)(v = x.config.colors).call(v, function(E) {
              return { $elem: T.default('<i style="color:' + E + ';" class="w-e-icon-paint-brush"></i>'), value: E };
            }),
            clickHandler: function(C) {
              M.command(C);
            }
          };
          return M = b.call(this, y, x, h) || this, M;
        }
        return g.prototype.command = function(x) {
          var v, M = this.editor, y = M.selection.isSelectionEmpty(), h = (v = M.selection.getSelectionContainerElem()) === null || v === void 0 ? void 0 : v.elems[0];
          if (h != null) {
            var E = (h == null ? void 0 : h.nodeName.toLowerCase()) !== "p", C = h == null ? void 0 : h.style.backgroundColor, R = S.hexToRgb(x) === C;
            if (y) {
              if (E && !R) {
                var F = M.selection.getSelectionRangeTopNodes();
                M.selection.createRangeByElem(F[0]), M.selection.moveCursor(F[0].elems[0]);
              }
              M.selection.createEmptyRange();
            }
            M.cmd.do("backColor", x), y && (M.selection.collapseRange(), M.selection.restoreSelection());
          }
        }, g.prototype.tryChangeActive = function() {
        }, g;
      }(m.default);
      o.default = w;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(26));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), m = d.__importDefault(t(24)), T = d.__importDefault(t(3)), S = function(w) {
        d.__extends(b, w);
        function b(g) {
          var x, v = this, M = T.default(`<div class="w-e-menu" data-title="\u6587\u5B57\u989C\u8272">
                <i class="w-e-icon-pencil2"></i>
            </div>`), y = {
            width: 120,
            title: "\u6587\u5B57\u989C\u8272",
            type: "inline-block",
            list: (0, f.default)(x = g.config.colors).call(x, function(h) {
              return { $elem: T.default('<i style="color:' + h + ';" class="w-e-icon-pencil2"></i>'), value: h };
            }),
            clickHandler: function(E) {
              v.command(E);
            }
          };
          return v = w.call(this, M, g, y) || this, v;
        }
        return b.prototype.command = function(g) {
          var x, v = this.editor, M = v.selection.isSelectionEmpty(), y = (x = v.selection.getSelectionContainerElem()) === null || x === void 0 ? void 0 : x.elems[0];
          if (y != null) {
            var h = v.selection.getSelectionText();
            if (y.nodeName === "A" && y.textContent === h) {
              var E = T.default("<span>&#8203;</span>").getNode();
              y.appendChild(E);
            }
            v.cmd.do("foreColor", g), M && (v.selection.collapseRange(), v.selection.restoreSelection());
          }
        }, b.prototype.tryChangeActive = function() {
        }, b;
      }(m.default);
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(3)), m = f.__importDefault(t(32)), T = f.__importDefault(t(37)), S = f.__importDefault(t(340)), w = f.__importDefault(t(346)), b = function(g) {
        f.__extends(x, g);
        function x(v) {
          var M = this, y = d.default(`<div class="w-e-menu" data-title="\u89C6\u9891">
                <i class="w-e-icon-play"></i>
            </div>`);
          return M = g.call(this, y, v) || this, w.default(v), M;
        }
        return x.prototype.clickHandler = function() {
          this.createPanel("");
        }, x.prototype.createPanel = function(v) {
          var M = S.default(this.editor, v), y = new m.default(this, M);
          y.create();
        }, x.prototype.tryChangeActive = function() {
        }, x;
      }(T.default);
      o.default = b;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(17));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), m = t(6), T = d.__importDefault(t(3)), S = d.__importDefault(t(341)), w = t(7);
      function b(g, x) {
        var v = g.config, M = new S.default(g), y = m.getRandom("input-iframe"), h = m.getRandom("btn-ok"), E = m.getRandom("input-upload"), C = m.getRandom("btn-local-ok");
        function R(z) {
          g.cmd.do("insertHTML", z + w.EMPTY_P), g.config.onlineVideoCallback(z);
        }
        function F(z) {
          var I = g.config.onlineVideoCheck(z);
          return I === !0 ? !0 : (typeof I == "string" && g.config.customAlert(I, "error"), !1);
        }
        var B = [{
          title: g.i18next.t("menus.panelMenus.video.\u4E0A\u4F20\u89C6\u9891"),
          tpl: `<div class="w-e-up-video-container">
                    <div id="` + C + `" class="w-e-up-btn">
                        <i class="w-e-icon-upload2"></i>
                    </div>
                    <div style="display:none;">
                        <input id="` + E + `" type="file" accept="video/*"/>
                    </div>
                 </div>`,
          events: [
            { selector: "#" + C, type: "click", fn: function() {
              var I = T.default("#" + E), U = I.elems[0];
              if (U)
                U.click();
              else
                return !0;
            } },
            { selector: "#" + E, type: "change", fn: function() {
              var I = T.default("#" + E), U = I.elems[0];
              if (!U)
                return !0;
              var H = U.files;
              return H.length && M.uploadVideo(H), !0;
            } }
          ]
        }, {
          title: g.i18next.t("menus.panelMenus.video.\u63D2\u5165\u89C6\u9891"),
          tpl: `<div>
                    <input 
                        id="` + y + `" 
                        type="text" 
                        class="block" 
                        placeholder="` + g.i18next.t("\u5982") + `\uFF1A<iframe src=... ></iframe>"/>
                    </td>
                    <div class="w-e-button-container">
                        <button type="button" id="` + h + `" class="right">
                            ` + g.i18next.t("\u63D2\u5165") + `
                        </button>
                    </div>
                </div>`,
          events: [
            { selector: "#" + h, type: "click", fn: function() {
              var I, U = T.default("#" + y), H = (0, f.default)(I = U.val()).call(I);
              if (!!H && !!F(H))
                return R(H), !0;
            }, bindEnter: !0 }
          ]
        }], O = {
          width: 300,
          height: 0,
          tabs: []
        };
        return window.FileReader && (v.uploadVideoServer || v.customUploadVideo) && O.tabs.push(B[0]), v.showLinkVideo && O.tabs.push(B[1]), O;
      }
      o.default = b;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(132)), d = s(t(57)), m = s(t(4)), T = s(t(27));
      (0, u.default)(o, "__esModule", { value: !0 });
      var S = t(2), w = t(6), b = S.__importDefault(t(135)), g = S.__importDefault(t(136)), x = t(7), v = t(6), M = function() {
        function y(h) {
          this.editor = h;
        }
        return y.prototype.uploadVideo = function(h) {
          var E = this;
          if (!!h.length) {
            var C = this.editor, R = C.config, F = "validate.", B = function(pe) {
              return C.i18next.t(F + pe);
            }, O = R.uploadVideoServer, z = R.uploadVideoMaxSize, I = z / 1024, U = R.uploadVideoName, H = R.uploadVideoParams, $ = R.uploadVideoParamsWithUrl, P = R.uploadVideoHeaders, Y = R.uploadVideoHooks, Q = R.uploadVideoTimeout, K = R.withVideoCredentials, q = R.customUploadVideo, X = R.uploadVideoAccept, _ = [], le = [];
            if (w.arrForEach(h, function(se) {
              var pe = se.name, Pe = se.size / 1024 / 1024;
              if (!(!pe || !Pe)) {
                if (!(X instanceof Array)) {
                  le.push("\u3010" + X + "\u3011" + B("uploadVideoAccept \u4E0D\u662FArray"));
                  return;
                }
                if (!(0, f.default)(X).call(X, function(be) {
                  return be === pe.split(".")[pe.split(".").length - 1];
                })) {
                  le.push("\u3010" + pe + "\u3011" + B("\u4E0D\u662F\u89C6\u9891"));
                  return;
                }
                if (I < Pe) {
                  le.push("\u3010" + pe + "\u3011" + B("\u5927\u4E8E") + " " + I + "M");
                  return;
                }
                _.push(se);
              }
            }), le.length) {
              R.customAlert(B("\u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7") + `: 
` + le.join(`
`), "warning");
              return;
            }
            if (_.length === 0) {
              R.customAlert(B("\u4F20\u5165\u7684\u6587\u4EF6\u4E0D\u5408\u6CD5"), "warning");
              return;
            }
            if (q && typeof q == "function") {
              var Se;
              q(_, (0, d.default)(Se = this.insertVideo).call(Se, this));
              return;
            }
            var ve = new FormData();
            if ((0, m.default)(_).call(_, function(se, pe) {
              var Pe = U || se.name;
              _.length > 1 && (Pe = Pe + (pe + 1)), ve.append(Pe, se);
            }), O) {
              var ce = O.split("#");
              O = ce[0];
              var ae = ce[1] || "";
              (0, m.default)(w).call(w, H, function(se, pe) {
                $ && ((0, T.default)(O).call(O, "?") > 0 ? O += "&" : O += "?", O = O + se + "=" + pe), ve.append(se, pe);
              }), ae && (O += "#" + ae);
              var re = b.default(O, { timeout: Q, formData: ve, headers: P, withCredentials: !!K, beforeSend: function(pe) {
                if (Y.before)
                  return Y.before(pe, C, _);
              }, onTimeout: function(pe) {
                R.customAlert(B("\u4E0A\u4F20\u89C6\u9891\u8D85\u65F6"), "error"), Y.timeout && Y.timeout(pe, C);
              }, onProgress: function(pe, Pe) {
                var be = new g.default(C);
                Pe.lengthComputable && (pe = Pe.loaded / Pe.total, be.show(pe));
              }, onError: function(pe) {
                R.customAlert(B("\u4E0A\u4F20\u89C6\u9891\u9519\u8BEF"), "error", B("\u4E0A\u4F20\u89C6\u9891\u9519\u8BEF") + "\uFF0C" + B("\u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001") + ": " + pe.status), Y.error && Y.error(pe, C);
              }, onFail: function(pe, Pe) {
                R.customAlert(B("\u4E0A\u4F20\u89C6\u9891\u5931\u8D25"), "error", B("\u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + ("\uFF0C" + B("\u8FD4\u56DE\u7ED3\u679C") + ": ") + Pe), Y.fail && Y.fail(pe, C, Pe);
              }, onSuccess: function(pe, Pe) {
                if (Y.customInsert) {
                  var be;
                  Y.customInsert((0, d.default)(be = E.insertVideo).call(be, E), Pe, C);
                  return;
                }
                if (Pe.errno != "0") {
                  R.customAlert(B("\u4E0A\u4F20\u89C6\u9891\u5931\u8D25"), "error", B("\u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + "\uFF0C" + B("\u8FD4\u56DE\u7ED3\u679C") + " errno=" + Pe.errno), Y.fail && Y.fail(pe, C, Pe);
                  return;
                }
                var je = Pe.data;
                E.insertVideo(je.url), Y.success && Y.success(pe, C, Pe);
              } });
              typeof re == "string" && R.customAlert(re, "error");
            }
          }
        }, y.prototype.insertVideo = function(h) {
          var E = this.editor, C = E.config, R = "validate.", F = function(z, I) {
            return I === void 0 && (I = R), E.i18next.t(I + z);
          };
          if (!C.customInsertVideo)
            v.UA.isFirefox ? E.cmd.do("insertHTML", '<p data-we-video-p="true"><video src="' + h + '" controls="controls" style="max-width:100%"></video></p><p>&#8203</p>') : E.cmd.do("insertHTML", '<video src="' + h + '" controls="controls" style="max-width:100%"></video>' + x.EMPTY_P);
          else {
            C.customInsertVideo(h);
            return;
          }
          var B = document.createElement("video");
          B.onload = function() {
            B = null;
          }, B.onerror = function() {
            C.customAlert(F("\u63D2\u5165\u89C6\u9891\u9519\u8BEF"), "error", "wangEditor: " + F("\u63D2\u5165\u89C6\u9891\u9519\u8BEF") + "\uFF0C" + F("\u89C6\u9891\u94FE\u63A5") + ' "' + h + '"\uFF0C' + F("\u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25")), B = null;
          }, B.onabort = function() {
            return B = null;
          }, B.src = h;
        }, y;
      }();
      o.default = M;
    }, function(l, o, t) {
      l.exports = t(343);
    }, function(l, o, t) {
      var s = t(344);
      l.exports = s;
    }, function(l, o, t) {
      t(345);
      var s = t(9);
      l.exports = s.Date.now;
    }, function(l, o, t) {
      var s = t(5);
      s({ target: "Date", stat: !0 }, { now: function() {
        return new Date().getTime();
      } });
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(347)), m = f.__importDefault(t(349));
      function T(S) {
        d.default(S), m.default(S);
      }
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.createShowHideFn = void 0;
      var f = t(2), d = f.__importDefault(t(3)), m = f.__importDefault(t(38)), T = f.__importDefault(t(348));
      function S(b) {
        var g, x = function(h, E) {
          return E === void 0 && (E = ""), b.i18next.t(E + h);
        };
        function v(y) {
          var h = [{ $elem: d.default("<span class='w-e-icon-trash-o'></span>"), onClick: function(C, R) {
            return R.remove(), !0;
          } }, { $elem: d.default("<span>100%</span>"), onClick: function(C, R) {
            return R.attr("width", "100%"), R.removeAttr("height"), !0;
          } }, { $elem: d.default("<span>50%</span>"), onClick: function(C, R) {
            return R.attr("width", "50%"), R.removeAttr("height"), !0;
          } }, { $elem: d.default("<span>30%</span>"), onClick: function(C, R) {
            return R.attr("width", "30%"), R.removeAttr("height"), !0;
          } }, { $elem: d.default("<span>" + x("\u91CD\u7F6E") + "</span>"), onClick: function(C, R) {
            return R.removeAttr("width"), R.removeAttr("height"), !0;
          } }, { $elem: d.default("<span>" + x("menus.justify.\u9760\u5DE6") + "</span>"), onClick: function(C, R) {
            return T.default(R, "left"), !0;
          } }, { $elem: d.default("<span>" + x("menus.justify.\u5C45\u4E2D") + "</span>"), onClick: function(C, R) {
            return T.default(R, "center"), !0;
          } }, { $elem: d.default("<span>" + x("menus.justify.\u9760\u53F3") + "</span>"), onClick: function(C, R) {
            return T.default(R, "right"), !0;
          } }];
          g = new m.default(b, y, h), g.create();
        }
        function M() {
          g && (g.remove(), g = null);
        }
        return { showVideoTooltip: v, hideVideoTooltip: M };
      }
      o.createShowHideFn = S;
      function w(b) {
        var g = S(b), x = g.showVideoTooltip, v = g.hideVideoTooltip;
        b.txt.eventHooks.videoClickEvents.push(x), b.txt.eventHooks.clickEvents.push(v), b.txt.eventHooks.keyupEvents.push(v), b.txt.eventHooks.toolbarClickEvents.push(v), b.txt.eventHooks.menuClickEvents.push(v), b.txt.eventHooks.textScrollEvents.push(v), b.txt.eventHooks.changeEvents.push(v);
      }
      o.default = w;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(44));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), m = d.__importDefault(t(3));
      function T(w, b) {
        var g = ["P"], x = S(w, g);
        x && m.default(x).css("text-align", b);
      }
      o.default = T;
      function S(w, b) {
        for (var g, x = w.elems[0]; x != null; ) {
          if ((0, f.default)(b).call(b, x == null ? void 0 : x.nodeName))
            return x;
          if (((g = x == null ? void 0 : x.parentNode) === null || g === void 0 ? void 0 : g.nodeName) === "BODY")
            return null;
          x = x.parentNode;
        }
        return x;
      }
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(6);
      function d(m) {
        if (!!f.UA.isFirefox) {
          var T = m.txt, S = m.selection, w = T.eventHooks.keydownEvents;
          w.push(function(b) {
            var g = S.getSelectionContainerElem();
            if (g) {
              var x = g.getNodeTop(m), v = x.length && x.prev().length ? x.prev() : null;
              v && v.attr("data-we-video-p") && S.getCursorPos() === 0 && b.keyCode === 8 && v.remove();
            }
          });
        }
      }
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(26));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), m = t(7), T = d.__importDefault(t(3)), S = d.__importDefault(t(32)), w = d.__importDefault(t(37)), b = d.__importDefault(t(351)), g = d.__importDefault(t(364)), x = function(v) {
        d.__extends(M, v);
        function M(y) {
          var h = this, E = T.default('<div class="w-e-menu" data-title="\u56FE\u7247"><i class="w-e-icon-image"></i></div>'), C = g.default(y);
          if (C.onlyUploadConf) {
            var R;
            E = C.onlyUploadConf.$elem, (0, f.default)(R = C.onlyUploadConf.events).call(R, function(F) {
              var B = F.type, O = F.fn || m.EMPTY_FN;
              E.on(B, function(z) {
                z.stopPropagation(), O(z);
              });
            });
          }
          return h = v.call(this, E, y) || this, h.imgPanelConfig = C, b.default(y), h;
        }
        return M.prototype.clickHandler = function() {
          this.imgPanelConfig.onlyUploadConf || this.createPanel();
        }, M.prototype.createPanel = function() {
          var y = this.imgPanelConfig, h = new S.default(this, y);
          this.setPanel(h), h.create();
        }, M.prototype.tryChangeActive = function() {
        }, M;
      }(w.default);
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(352)), m = f.__importDefault(t(353)), T = f.__importDefault(t(354)), S = f.__importDefault(t(362)), w = f.__importDefault(t(363));
      function b(g) {
        d.default(g), m.default(g), T.default(g), S.default(g), w.default(g);
      }
      o.default = b;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = t(130), m = f.__importDefault(t(96));
      function T(g, x) {
        var v = g.config, M = v.pasteFilterStyle, y = v.pasteIgnoreImg, h = d.getPasteHtml(x, M, y);
        if (h)
          return !0;
        var E = d.getPasteText(x);
        return !!E;
      }
      function S(g, x) {
        for (var v, M = ((v = x.clipboardData) === null || v === void 0 ? void 0 : v.types) || [], y = 0; y < M.length; y++) {
          var h = M[y];
          if (h === "Files")
            return !0;
        }
        return !1;
      }
      function w(g, x) {
        if (!(!S(x, g) && T(x, g))) {
          var v = d.getPasteImgs(g);
          if (!!v.length) {
            var M = new m.default(x);
            M.uploadImg(v);
          }
        }
      }
      function b(g) {
        g.txt.eventHooks.pasteEvents.unshift(function(x) {
          w(x, g);
        });
      }
      o.default = b;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(96));
      function m(T) {
        function S(w) {
          var b = w.dataTransfer && w.dataTransfer.files;
          if (!(!b || !b.length)) {
            var g = new d.default(T);
            g.uploadImg(b);
          }
        }
        T.txt.eventHooks.dropEvents.push(S);
      }
      o.default = m;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(31)), d = s(t(355));
      (0, u.default)(o, "__esModule", { value: !0 }), o.createShowHideFn = void 0;
      var m = t(2), T = m.__importDefault(t(3));
      t(360);
      var S = t(6);
      function w(M, y, h, E, C) {
        M.attr("style", "width:" + y + "px; height:" + h + "px; left:" + E + "px; top:" + C + "px;");
      }
      function b(M, y) {
        var h = T.default(`<div class="w-e-img-drag-mask">
            <div class="w-e-img-drag-show-size"></div>
            <div class="w-e-img-drag-rb"></div>
         </div>`);
        return h.hide(), y.append(h), h;
      }
      function g(M, y, h) {
        var E = M.getBoundingClientRect(), C = h.getBoundingClientRect(), R = C.width.toFixed(2), F = C.height.toFixed(2);
        (0, f.default)(y).call(y, ".w-e-img-drag-show-size").text(R + "px * " + F + "px"), w(y, (0, d.default)(R), (0, d.default)(F), C.left - E.left, C.top - E.top), y.show();
      }
      function x(M) {
        var y = M.$textContainerElem, h, E = b(M, y);
        function C(B, O) {
          B.on("click", function(z) {
            z.stopPropagation();
          }), B.on("mousedown", ".w-e-img-drag-rb", function(z) {
            if (z.preventDefault(), !h)
              return;
            var I = z.clientX, U = z.clientY, H = O.getBoundingClientRect(), $ = h.getBoundingClientRect(), P = $.width, Y = $.height, Q = $.left - H.left, K = $.top - H.top, q = P / Y, X = P, _ = Y, le = T.default(document);
            function Se() {
              le.off("mousemove", ve), le.off("mouseup", ce);
            }
            function ve(ae) {
              ae.stopPropagation(), ae.preventDefault(), X = P + (ae.clientX - I), _ = Y + (ae.clientY - U), X / _ != q && (_ = X / q), X = (0, d.default)(X.toFixed(2)), _ = (0, d.default)(_.toFixed(2)), (0, f.default)(B).call(B, ".w-e-img-drag-show-size").text(X.toFixed(2).replace(".00", "") + "px * " + _.toFixed(2).replace(".00", "") + "px"), w(B, X, _, Q, K);
            }
            le.on("mousemove", ve);
            function ce() {
              h.attr("width", X + ""), h.attr("height", _ + "");
              var ae = h.getBoundingClientRect();
              w(B, X, _, ae.left - H.left, ae.top - H.top), Se();
            }
            le.on("mouseup", ce), le.on("mouseleave", Se);
          });
        }
        function R(B) {
          if (S.UA.isIE())
            return !1;
          B && (h = B, g(y, E, h));
        }
        function F() {
          (0, f.default)(y).call(y, ".w-e-img-drag-mask").hide();
        }
        return C(E, y), T.default(document).on("click", F), M.beforeDestroy(function() {
          T.default(document).off("click", F);
        }), { showDrag: R, hideDrag: F };
      }
      o.createShowHideFn = x;
      function v(M) {
        var y = x(M), h = y.showDrag, E = y.hideDrag;
        M.txt.eventHooks.imgClickEvents.push(h), M.txt.eventHooks.textScrollEvents.push(E), M.txt.eventHooks.keyupEvents.push(E), M.txt.eventHooks.toolbarClickEvents.push(E), M.txt.eventHooks.menuClickEvents.push(E), M.txt.eventHooks.changeEvents.push(E);
      }
      o.default = v;
    }, function(l, o, t) {
      l.exports = t(356);
    }, function(l, o, t) {
      var s = t(357);
      l.exports = s;
    }, function(l, o, t) {
      t(358);
      var s = t(9);
      l.exports = s.parseFloat;
    }, function(l, o, t) {
      var s = t(5), u = t(359);
      s({ global: !0, forced: parseFloat != u }, { parseFloat: u });
    }, function(l, o, t) {
      var s = t(8), u = t(90).trim, f = t(68), d = s.parseFloat, m = 1 / d(f + "-0") !== -1 / 0;
      l.exports = m ? function(S) {
        var w = u(String(S)), b = d(w);
        return b === 0 && w.charAt(0) == "-" ? -0 : b;
      } : d;
    }, function(l, o, t) {
      var s = t(20), u = t(361);
      u = u.__esModule ? u.default : u, typeof u == "string" && (u = [[l.i, u, ""]]);
      var f = {};
      f.insert = "head", f.singleton = !1, s(u, f), l.exports = u.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-text-container {
  overflow: hidden;
}
.w-e-img-drag-mask {
  position: absolute;
  z-index: 1;
  border: 1px dashed #ccc;
  box-sizing: border-box;
}
.w-e-img-drag-mask .w-e-img-drag-rb {
  position: absolute;
  right: -5px;
  bottom: -5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ccc;
  cursor: se-resize;
}
.w-e-img-drag-mask .w-e-img-drag-show-size {
  min-width: 110px;
  height: 22px;
  line-height: 22px;
  font-size: 14px;
  color: #999;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #999;
  color: #fff;
  border-radius: 2px;
  padding: 0 5px;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.createShowHideFn = void 0;
      var f = t(2), d = f.__importDefault(t(3)), m = f.__importDefault(t(38));
      function T(w) {
        var b, g = function(y, h) {
          return h === void 0 && (h = ""), w.i18next.t(h + y);
        };
        function x(M) {
          var y = [{ $elem: d.default("<span class='w-e-icon-trash-o'></span>"), onClick: function(E, C) {
            return E.selection.createRangeByElem(C), E.selection.restoreSelection(), E.cmd.do("delete"), !0;
          } }, { $elem: d.default("<span>30%</span>"), onClick: function(E, C) {
            return C.attr("width", "30%"), C.removeAttr("height"), !0;
          } }, { $elem: d.default("<span>50%</span>"), onClick: function(E, C) {
            return C.attr("width", "50%"), C.removeAttr("height"), !0;
          } }, { $elem: d.default("<span>100%</span>"), onClick: function(E, C) {
            return C.attr("width", "100%"), C.removeAttr("height"), !0;
          } }];
          y.push({ $elem: d.default("<span>" + g("\u91CD\u7F6E") + "</span>"), onClick: function(E, C) {
            return C.removeAttr("width"), C.removeAttr("height"), !0;
          } }), M.attr("data-href") && y.push({ $elem: d.default("<span>" + g("\u67E5\u770B\u94FE\u63A5") + "</span>"), onClick: function(E, C) {
            var R = C.attr("data-href");
            return R && (R = decodeURIComponent(R), window.open(R, "_target")), !0;
          } }), b = new m.default(w, M, y), b.create();
        }
        function v() {
          b && (b.remove(), b = null);
        }
        return { showImgTooltip: x, hideImgTooltip: v };
      }
      o.createShowHideFn = T;
      function S(w) {
        var b = T(w), g = b.showImgTooltip, x = b.hideImgTooltip;
        w.txt.eventHooks.imgClickEvents.push(g), w.txt.eventHooks.clickEvents.push(x), w.txt.eventHooks.keyupEvents.push(x), w.txt.eventHooks.toolbarClickEvents.push(x), w.txt.eventHooks.menuClickEvents.push(x), w.txt.eventHooks.textScrollEvents.push(x), w.txt.eventHooks.imgDragBarMouseDownEvents.push(x), w.txt.eventHooks.changeEvents.push(x);
      }
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      function f(d) {
        var m = d.txt, T = d.selection, S = m.eventHooks.keydownEvents;
        S.push(function(w) {
          var b = T.getSelectionContainerElem(), g = T.getRange();
          if (!(!g || !b || w.keyCode !== 8 || !T.isSelectionEmpty())) {
            var x = g.startContainer, v = g.startOffset, M = null;
            if (v === 0)
              for (; x !== b.elems[0] && b.elems[0].contains(x) && x.parentNode && !M; ) {
                if (x.previousSibling) {
                  M = x.previousSibling;
                  break;
                }
                x = x.parentNode;
              }
            else
              x.nodeType !== 3 && (M = x.childNodes[v - 1]);
            if (!!M) {
              for (var y = M; y.childNodes.length; )
                y = y.childNodes[y.childNodes.length - 1];
              y instanceof HTMLElement && y.tagName === "IMG" && (y.remove(), w.preventDefault());
            }
          }
        });
      }
      o.default = f;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(26)), d = s(t(17));
      (0, u.default)(o, "__esModule", { value: !0 });
      var m = t(2), T = m.__importDefault(t(3)), S = t(6), w = m.__importDefault(t(96));
      function b(g) {
        var x, v = g.config, M = new w.default(g), y = S.getRandom("up-trigger-id"), h = S.getRandom("up-file-id"), E = S.getRandom("input-link-url"), C = S.getRandom("input-link-url-alt"), R = S.getRandom("input-link-url-href"), F = S.getRandom("btn-link"), B = "menus.panelMenus.image.", O = function(q, X) {
          return X === void 0 && (X = B), g.i18next.t(X + q);
        };
        function z(K, q, X) {
          var _ = v.linkImgCheck(K);
          return _ === !0 ? !0 : (typeof _ == "string" && v.customAlert(_, "error"), !1);
        }
        var I = v.uploadImgMaxLength === 1 ? "" : 'multiple="multiple"', U = (0, f.default)(x = v.uploadImgAccept).call(x, function(K) {
          return "image/" + K;
        }).join(","), H = function(q, X, _) {
          return '<div class="' + q + '" data-title="' + _ + `">
            <div id="` + y + `" class="w-e-up-btn">
                <i class="` + X + `"></i>
            </div>
            <div style="display:none;">
                <input id="` + h + '" type="file" ' + I + ' accept="' + U + `"/>
            </div>
        </div>`;
        }, $ = [
          { selector: "#" + y, type: "click", fn: function() {
            var q = v.uploadImgFromMedia;
            if (q && typeof q == "function")
              return q(), !0;
            var X = T.default("#" + h), _ = X.elems[0];
            if (_)
              _.click();
            else
              return !0;
          } },
          { selector: "#" + h, type: "change", fn: function() {
            var q = T.default("#" + h), X = q.elems[0];
            if (!X)
              return !0;
            var _ = X.files;
            return _ != null && _.length && M.uploadImg(_), X && (X.value = ""), !0;
          } }
        ], P = [`<input
            id="` + E + `"
            type="text"
            class="block"
            placeholder="` + O("\u56FE\u7247\u5730\u5740") + '"/>'];
        v.showLinkImgAlt && P.push(`
        <input
            id="` + C + `"
            type="text"
            class="block"
            placeholder="` + O("\u56FE\u7247\u6587\u5B57\u8BF4\u660E") + '"/>'), v.showLinkImgHref && P.push(`
        <input
            id="` + R + `"
            type="text"
            class="block"
            placeholder="` + O("\u8DF3\u8F6C\u94FE\u63A5") + '"/>');
        var Y = [
          {
            title: O("\u4E0A\u4F20\u56FE\u7247"),
            tpl: H("w-e-up-img-container", "w-e-icon-upload2", ""),
            events: $
          },
          { title: O("\u7F51\u7EDC\u56FE\u7247"), tpl: `<div>
                    ` + P.join("") + `
                    <div class="w-e-button-container">
                        <button type="button" id="` + F + '" class="right">' + O("\u63D2\u5165", "") + `</button>
                    </div>
                </div>`, events: [{ selector: "#" + F, type: "click", fn: function() {
            var q, X = T.default("#" + E), _ = (0, d.default)(q = X.val()).call(q);
            if (!!_) {
              var le;
              if (v.showLinkImgAlt) {
                var Se;
                le = (0, d.default)(Se = T.default("#" + C).val()).call(Se);
              }
              var ve;
              if (v.showLinkImgHref) {
                var ce;
                ve = (0, d.default)(ce = T.default("#" + R).val()).call(ce);
              }
              if (!!z(_))
                return M.insertImg(_, le, ve), !0;
            }
          }, bindEnter: !0 }] }
        ], Q = { width: 300, height: 0, tabs: [], onlyUploadConf: { $elem: T.default(H("w-e-menu", "w-e-icon-image", "\u56FE\u7247")), events: $ } };
        return window.FileReader && (v.uploadImgShowBase64 || v.uploadImgServer || v.customUploadImg || v.uploadImgFromMedia) && Q.tabs.push(Y[0]), v.showLinkImg && (Q.tabs.push(Y[1]), Q.onlyUploadConf = void 0), Q;
      }
      o.default = b;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), m = d.__importDefault(t(3)), T = d.__importDefault(t(24)), S = d.__importDefault(t(366)), w = function(b) {
        d.__extends(g, b);
        function g(x) {
          var v = this, M = m.default(`<div class="w-e-menu" data-title="\u7F29\u8FDB">
                <i class="w-e-icon-indent-increase"></i>
            </div>`), y = { width: 130, title: "\u8BBE\u7F6E\u7F29\u8FDB", type: "list", list: [{ $elem: m.default(`<p>
                            <i class="w-e-icon-indent-increase w-e-drop-list-item"></i>
                            ` + x.i18next.t("menus.dropListMenu.indent.\u589E\u52A0\u7F29\u8FDB") + `
                        <p>`), value: "increase" }, { $elem: m.default(`<p>
                            <i class="w-e-icon-indent-decrease w-e-drop-list-item"></i>
                            ` + x.i18next.t("menus.dropListMenu.indent.\u51CF\u5C11\u7F29\u8FDB") + `
                        <p>`), value: "decrease" }], clickHandler: function(E) {
            v.command(E);
          } };
          return v = b.call(this, M, x, y) || this, v;
        }
        return g.prototype.command = function(x) {
          var v = this.editor, M = v.selection.getSelectionContainerElem();
          if (M && v.$textElem.equal(M)) {
            var y = v.selection.getSelectionRangeTopNodes();
            y.length > 0 && (0, f.default)(y).call(y, function(h) {
              S.default(m.default(h), x, v);
            });
          } else
            M && M.length > 0 && (0, f.default)(M).call(M, function(h) {
              S.default(m.default(h), x, v);
            });
          v.selection.restoreSelection(), this.tryChangeActive();
        }, g.prototype.tryChangeActive = function() {
          var x = this.editor, v = x.selection.getSelectionStartElem(), M = m.default(v).getNodeTop(x);
          M.length <= 0 || (M.elems[0].style.paddingLeft != "" ? this.active() : this.unActive());
        }, g;
      }(T.default);
      o.default = w;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(45)), d = s(t(17));
      (0, u.default)(o, "__esModule", { value: !0 });
      var m = t(2), T = m.__importDefault(t(367)), S = m.__importDefault(t(368)), w = /^(\d+)(\w+)$/, b = /^(\d+)%$/;
      function g(v) {
        var M = v.config.indentation;
        if (typeof M == "string") {
          if (w.test(M)) {
            var y, h = (0, f.default)(y = (0, d.default)(M).call(M).match(w)).call(y, 1, 3), E = h[0], C = h[1];
            return { value: Number(E), unit: C };
          } else if (b.test(M))
            return { value: Number((0, d.default)(M).call(M).match(b)[1]), unit: "%" };
        } else if (M.value !== void 0 && M.unit)
          return M;
        return { value: 2, unit: "em" };
      }
      function x(v, M, y) {
        var h = v.getNodeTop(y), E = /^(P|H[0-9]*)$/;
        E.test(h.getNodeName()) && (M === "increase" ? T.default(h, g(y)) : M === "decrease" && S.default(h, g(y)));
      }
      o.default = x;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(45));
      (0, u.default)(o, "__esModule", { value: !0 });
      function d(m, T) {
        var S = m.elems[0];
        if (S.style.paddingLeft === "")
          m.css("padding-left", T.value + T.unit);
        else {
          var w = S.style.paddingLeft, b = (0, f.default)(w).call(w, 0, w.length - T.unit.length), g = Number(b) + T.value;
          m.css("padding-left", "" + g + T.unit);
        }
      }
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(45));
      (0, u.default)(o, "__esModule", { value: !0 });
      function d(m, T) {
        var S = m.elems[0];
        if (S.style.paddingLeft !== "") {
          var w = S.style.paddingLeft, b = (0, f.default)(w).call(w, 0, w.length - T.unit.length), g = Number(b) - T.value;
          g > 0 ? m.css("padding-left", "" + g + T.unit) : m.css("padding-left", "");
        }
      }
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(3)), m = f.__importDefault(t(37)), T = f.__importDefault(t(32)), S = f.__importDefault(t(370)), w = function(b) {
        f.__extends(g, b);
        function g(x) {
          var v = this, M = d.default(`<div class="w-e-menu" data-title="\u8868\u60C5">
                <i class="w-e-icon-happy"></i>
            </div>`);
          return v = b.call(this, M, x) || this, v;
        }
        return g.prototype.createPanel = function() {
          var x = S.default(this.editor), v = new T.default(this, x);
          v.create();
        }, g.prototype.clickHandler = function() {
          this.createPanel();
        }, g.prototype.tryChangeActive = function() {
        }, g;
      }(m.default);
      o.default = w;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(26)), d = s(t(70)), m = s(t(17));
      (0, u.default)(o, "__esModule", { value: !0 });
      var T = t(2), S = T.__importDefault(t(3));
      function w(b) {
        var g = b.config.emotions;
        function x(y) {
          var h = [];
          if (y.type == "image") {
            var E;
            h = (0, f.default)(E = y.content).call(E, function(R) {
              return typeof R == "string" ? "" : '<span  title="' + R.alt + `">
                    <img class="eleImg" data-emoji="` + R.alt + '" style src="' + R.src + '" alt="[' + R.alt + `]">
                </span>`;
            }), h = (0, d.default)(h).call(h, function(R) {
              return R !== "";
            });
          } else {
            var C;
            h = (0, f.default)(C = y.content).call(C, function(R) {
              return '<span class="eleImg" title="' + R + '">' + R + "</span>";
            });
          }
          return h.join("").replace(/&nbsp;/g, "");
        }
        var v = (0, f.default)(g).call(g, function(y) {
          return {
            title: b.i18next.t("menus.panelMenus.emoticon." + y.title),
            tpl: "<div>" + x(y) + "</div>",
            events: [{ selector: ".eleImg", type: "click", fn: function(E) {
              var C = S.default(E.target), R = C.getNodeName(), F;
              if (R === "IMG") {
                var B;
                F = (0, m.default)(B = C.parent().html()).call(B);
              } else
                F = "<span>" + C.html() + "</span>";
              return b.cmd.do("insertHTML", F), !0;
            } }]
          };
        }), M = { width: 300, height: 230, tabs: v };
        return M;
      }
      o.default = w;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.createListHandle = o.ClassType = void 0;
      var f = t(2), d = f.__importDefault(t(3)), m = f.__importDefault(t(372)), T = f.__importDefault(t(374)), S = f.__importDefault(t(375)), w = f.__importDefault(t(376)), b = f.__importDefault(t(377)), g;
      (function(y) {
        y.Wrap = "WrapListHandle", y.Join = "JoinListHandle", y.StartJoin = "StartJoinListHandle", y.EndJoin = "EndJoinListHandle", y.Other = "OtherListHandle";
      })(g = o.ClassType || (o.ClassType = {}));
      var x = { WrapListHandle: m.default, JoinListHandle: T.default, StartJoinListHandle: S.default, EndJoinListHandle: w.default, OtherListHandle: b.default };
      function v(y, h, E) {
        if (y === g.Other && E === void 0)
          throw new Error("other \u7C7B\u9700\u8981\u4F20\u5165 range");
        return y !== g.Other ? new x[y](h) : new x[y](h, E);
      }
      o.createListHandle = v;
      var M = function() {
        function y(h) {
          this.handle = h, this.handle.exec();
        }
        return y.prototype.getSelectionRangeElem = function() {
          return d.default(this.handle.selectionRangeElem.get());
        }, y;
      }();
      o.default = M;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), m = d.__importDefault(t(3)), T = t(58), S = t(47), w = function(b) {
        d.__extends(g, b);
        function g(x) {
          return b.call(this, x) || this;
        }
        return g.prototype.exec = function() {
          var x = this.options, v = x.listType, M = x.listTarget, y = x.$selectionElem, h = x.$startElem, E = x.$endElem, C, R = [], F = y == null ? void 0 : y.getNodeName(), B = h.prior, O = E.prior;
          if (!h.prior && !E.prior || !(B != null && B.prev().length) && !(O != null && O.next().length)) {
            var z;
            (0, f.default)(z = y == null ? void 0 : y.children()).call(z, function(Q) {
              R.push(m.default(Q));
            }), F === v ? C = S.createElementFragment(
              R,
              S.createDocumentFragment(),
              "p"
            ) : (C = S.createElement(M), (0, f.default)(R).call(R, function(Q) {
              C.appendChild(Q.elems[0]);
            })), this.selectionRangeElem.set(C), S.insertBefore(y, C, y.elems[0]), y.remove();
          } else {
            for (var I = B; I.length; )
              R.push(I), O != null && O.equal(I) ? I = m.default(void 0) : I = I.next();
            var U = B.prev(), H = O.next();
            if (F === v ? C = S.createElementFragment(
              R,
              S.createDocumentFragment(),
              "p"
            ) : (C = S.createElement(M), (0, f.default)(R).call(R, function(Q) {
              C.append(Q.elems[0]);
            })), U.length && H.length) {
              for (var $ = []; H.length; )
                $.push(H), H = H.next();
              var P = S.createElement(F);
              (0, f.default)($).call($, function(Q) {
                P.append(Q.elems[0]);
              }), m.default(P).insertAfter(y), this.selectionRangeElem.set(C);
              var Y = y.next();
              Y.length ? S.insertBefore(y, C, Y.elems[0]) : y.parent().elems[0].append(C);
            } else if (!U.length)
              this.selectionRangeElem.set(C), S.insertBefore(y, C, y.elems[0]);
            else {
              this.selectionRangeElem.set(C);
              var Y = y.next();
              Y.length ? S.insertBefore(y, C, Y.elems[0]) : y.parent().elems[0].append(C);
            }
          }
        }, g;
      }(T.ListHandle);
      o.default = w;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = function() {
        function m() {
          this._element = null;
        }
        return m.prototype.set = function(T) {
          if (T instanceof DocumentFragment) {
            var S, w = [];
            (0, f.default)(S = T.childNodes).call(S, function(b) {
              w.push(b);
            }), T = w;
          }
          this._element = T;
        }, m.prototype.get = function() {
          return this._element;
        }, m.prototype.clear = function() {
          this._element = null;
        }, m;
      }();
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), m = d.__importDefault(t(3)), T = t(58), S = t(47), w = function(b) {
        d.__extends(g, b);
        function g(x) {
          return b.call(this, x) || this;
        }
        return g.prototype.exec = function() {
          var x, v, M, y, h, E, C, R = this.options, F = R.editor, B = R.listType, O = R.listTarget, z = R.$startElem, I = R.$endElem, U, H = F.selection.getSelectionRangeTopNodes(), $ = z == null ? void 0 : z.getNodeName(), P = I == null ? void 0 : I.getNodeName();
          if ($ === P)
            if (H.length > 2)
              if (H.shift(), H.pop(), U = S.createElementFragment(
                S.filterSelectionNodes(H),
                S.createDocumentFragment()
              ), $ === B)
                (x = I.children()) === null || x === void 0 || (0, f.default)(x).call(x, function(ae) {
                  U.append(ae);
                }), I.remove(), this.selectionRangeElem.set(U), z.elems[0].append(U);
              else {
                for (var Y = document.createDocumentFragment(), Q = document.createDocumentFragment(), K = S.getStartPoint(z); K.length; ) {
                  var q = K.elems[0];
                  K = K.next(), Y.append(q);
                }
                for (var X = S.getEndPoint(I), _ = []; X.length; )
                  _.unshift(X.elems[0]), X = X.prev();
                (0, f.default)(_).call(_, function(ae) {
                  Q.append(ae);
                });
                var le = S.createElement(O);
                le.append(Y), le.append(U), le.append(Q), U = le, this.selectionRangeElem.set(U), m.default(le).insertAfter(z), !(!((v = z.children()) === null || v === void 0) && v.length) && z.remove(), !(!((M = I.children()) === null || M === void 0) && M.length) && I.remove();
              }
            else {
              H.length = 0;
              for (var K = S.getStartPoint(z); K.length; )
                H.push(K), K = K.next();
              for (var X = S.getEndPoint(I), _ = []; X.length; )
                _.unshift(X), X = X.prev();
              H.push.apply(H, _), $ === B ? (U = S.createElementFragment(H, S.createDocumentFragment(), "p"), this.selectionRangeElem.set(U), S.insertBefore(z, U, I.elems[0])) : (U = S.createElement(O), (0, f.default)(H).call(H, function(pe) {
                U.append(pe.elems[0]);
              }), this.selectionRangeElem.set(U), m.default(U).insertAfter(z)), !(!((y = z.children()) === null || y === void 0) && y.length) && I.remove(), !(!((h = I.children()) === null || h === void 0) && h.length) && I.remove();
            }
          else {
            for (var Se = [], X = S.getEndPoint(I); X.length; )
              Se.unshift(X), X = X.prev();
            for (var ve = [], K = S.getStartPoint(z); K.length; )
              ve.push(K), K = K.next();
            if (U = S.createDocumentFragment(), H.shift(), H.pop(), (0, f.default)(ve).call(ve, function(se) {
              return U.append(se.elems[0]);
            }), U = S.createElementFragment(
              S.filterSelectionNodes(H),
              U
            ), (0, f.default)(Se).call(Se, function(se) {
              return U.append(se.elems[0]);
            }), this.selectionRangeElem.set(U), $ === B)
              z.elems[0].append(U), !(!((E = I.children()) === null || E === void 0) && E.length) && I.remove();
            else if (!((C = I.children()) === null || C === void 0) && C.length) {
              var ce = I.children();
              S.insertBefore(ce, U, ce.elems[0]);
            } else
              I.elems[0].append(U);
          }
        }, g;
      }(T.ListHandle);
      o.default = w;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), m = d.__importDefault(t(3)), T = t(58), S = t(47), w = function(b) {
        d.__extends(g, b);
        function g(x) {
          return b.call(this, x) || this;
        }
        return g.prototype.exec = function() {
          var x, v = this.options, M = v.editor, y = v.listType, h = v.listTarget, E = v.$startElem, C, R = M.selection.getSelectionRangeTopNodes(), F = E == null ? void 0 : E.getNodeName();
          R.shift();
          for (var B = [], O = S.getStartPoint(E); O.length; )
            B.push(O), O = O.next();
          F === y ? (C = S.createDocumentFragment(), (0, f.default)(B).call(B, function(z) {
            return C.append(z.elems[0]);
          }), C = S.createElementFragment(
            S.filterSelectionNodes(R),
            C
          ), this.selectionRangeElem.set(C), E.elems[0].append(C)) : (C = S.createElement(h), (0, f.default)(B).call(B, function(z) {
            return C.append(z.elems[0]);
          }), C = S.createElementFragment(
            S.filterSelectionNodes(R),
            C
          ), this.selectionRangeElem.set(C), m.default(C).insertAfter(E), !(!((x = E.children()) === null || x === void 0) && x.length) && E.remove());
        }, g;
      }(T.ListHandle);
      o.default = w;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), m = d.__importDefault(t(3)), T = t(58), S = t(47), w = function(b) {
        d.__extends(g, b);
        function g(x) {
          return b.call(this, x) || this;
        }
        return g.prototype.exec = function() {
          var x, v, M = this.options, y = M.editor, h = M.listType, E = M.listTarget, C = M.$endElem, R, F = y.selection.getSelectionRangeTopNodes(), B = C == null ? void 0 : C.getNodeName();
          F.pop();
          for (var O = [], z = S.getEndPoint(C); z.length; )
            O.unshift(z), z = z.prev();
          if (B === h)
            if (R = S.createElementFragment(
              S.filterSelectionNodes(F),
              S.createDocumentFragment()
            ), (0, f.default)(O).call(O, function(H) {
              return R.append(H.elems[0]);
            }), this.selectionRangeElem.set(R), !((x = C.children()) === null || x === void 0) && x.length) {
              var I = C.children();
              S.insertBefore(I, R, I.elems[0]);
            } else
              C.elems[0].append(R);
          else {
            var U = S.filterSelectionNodes(F);
            U.push.apply(U, O), R = S.createElementFragment(
              U,
              S.createElement(E)
            ), this.selectionRangeElem.set(R), m.default(R).insertBefore(C), !(!((v = C.children()) === null || v === void 0) && v.length) && C.remove();
          }
        }, g;
      }(T.ListHandle);
      o.default = w;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = t(58), m = t(47), T = function(S) {
        f.__extends(w, S);
        function w(b, g) {
          var x = S.call(this, b) || this;
          return x.range = g, x;
        }
        return w.prototype.exec = function() {
          var b = this.options, g = b.editor, x = b.listTarget, v = g.selection.getSelectionRangeTopNodes(), M = m.createElementFragment(
            m.filterSelectionNodes(v),
            m.createElement(x)
          );
          this.selectionRangeElem.set(M), this.range.insertNode(M);
        }, w;
      }(d.ListHandle);
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(4)), d = s(t(27));
      (0, u.default)(o, "__esModule", { value: !0 });
      var m = t(2), T = m.__importDefault(t(24)), S = m.__importDefault(t(3)), w = m.__importDefault(t(379)), b = t(6), g = function(x) {
        m.__extends(v, x);
        function v(M) {
          var y = this, h = S.default(`<div class="w-e-menu" data-title="\u884C\u9AD8">
                    <i class="w-e-icon-row-height"></i>
                </div>`), E = new w.default(M, M.config.lineHeights), C = { width: 100, title: "\u8BBE\u7F6E\u884C\u9AD8", type: "list", list: E.getItemList(), clickHandler: function(F) {
            M.selection.saveRange(), y.command(F);
          } };
          return y = x.call(this, h, M, C) || this, y;
        }
        return v.prototype.command = function(M) {
          var y = this, h, E = window.getSelection ? window.getSelection() : document.getSelection(), C = ["P"], R = this.editor, F = "";
          R.selection.restoreSelection();
          var B = S.default(R.selection.getSelectionContainerElem());
          if (!!(B != null && B.length)) {
            var O = S.default(R.selection.getSelectionContainerElem()), z = S.default(R.selection.getSelectionStartElem()).elems[0], I = "", U = [], H = "";
            if (B && R.$textElem.equal(B)) {
              var $ = b.UA.isIE(), P = [], Y = [], Q = [], K = S.default(R.selection.getSelectionStartElem()), q = S.default(R.selection.getSelectionEndElem()), X = (h = R.selection.getRange()) === null || h === void 0 ? void 0 : h.commonAncestorContainer.childNodes;
              Y.push(this.getDom(K.elems[0])), X == null || (0, f.default)(X).call(X, function(ce, ae) {
                ce === y.getDom(K.elems[0]) && P.push(ae), ce === y.getDom(q.elems[0]) && P.push(ae);
              });
              var _ = 0, le = void 0;
              for (Q.push(this.getDom(K.elems[0])); Y[_] !== this.getDom(q.elems[0]); )
                le = S.default(Y[_].nextElementSibling).elems[0], (0, d.default)(C).call(C, S.default(le).getNodeName()) !== -1 && Q.push(le), Y.push(le), _++;
              if (S.default(Y[0]).getNodeName() !== "P") {
                _ = 0;
                for (var Se = 0; Se < Y.length; Se++)
                  if (S.default(Y[Se]).getNodeName() === "P") {
                    _ = Se;
                    break;
                  }
                if (_ === 0)
                  return;
                for (var ve = 0; ve !== _; )
                  Y.shift(), ve++;
              }
              this.setRange(Y[0], Y[Y.length - 1]), (0, f.default)(Y).call(Y, function(ce) {
                I = ce.getAttribute("style"), U = I ? I.split(";") : [], H = y.styleProcessing(U), S.default(ce).getNodeName() === "P" && M && (H += M ? "line-height:" + M + ";" : ""), $ ? S.default(ce).css("line-height", M) : F += "<" + S.default(ce).getNodeName().toLowerCase() + ' style="' + H + '">' + ce.innerHTML + "</" + S.default(ce).getNodeName().toLowerCase() + ">";
              }), F && this.action(F, R), z = O.elems[0], this.setRange(z.children[P[0]], z.children[P[1]]);
              return;
            }
            if (z = this.getDom(z), (0, d.default)(C).call(C, S.default(z).getNodeName()) !== -1) {
              if (I = z.getAttribute("style"), U = I ? I.split(";") : [], E == null || E.selectAllChildren(z), R.selection.saveRange(), !M) {
                I && (H = this.styleProcessing(U), H === "" ? F = "<" + S.default(z).getNodeName().toLowerCase() + ">" + z.innerHTML + "</" + S.default(z).getNodeName().toLowerCase() + ">" : F = "<" + S.default(z).getNodeName().toLowerCase() + ' style="' + H + '">' + z.innerHTML + "</" + S.default(z).getNodeName().toLowerCase() + ">", this.action(F, R));
                return;
              }
              I ? H = this.styleProcessing(U) + ("line-height:" + M + ";") : H = "line-height:" + M + ";", F = "<" + S.default(z).getNodeName().toLowerCase() + ' style="' + H + '">' + z.innerHTML + "</" + S.default(z).getNodeName().toLowerCase() + ">", S.default(z).getNodeName() === "BLOCKQUOTE" || b.UA.isIE() ? S.default(z).css("line-height", M) : this.action(F, R);
            }
          }
        }, v.prototype.getDom = function(M) {
          var y = S.default(M).elems[0];
          if (!y.parentNode)
            return y;
          function h(E, C) {
            var R = S.default(E.parentNode);
            return C.$textElem.equal(R) ? E : h(R.elems[0], C);
          }
          return y = h(y, this.editor), y;
        }, v.prototype.action = function(M, y) {
          y.cmd.do("insertHTML", M);
        }, v.prototype.styleProcessing = function(M) {
          var y = "";
          return (0, f.default)(M).call(M, function(h) {
            h !== "" && (0, d.default)(h).call(h, "line-height") === -1 && (y = y + h + ";");
          }), y;
        }, v.prototype.setRange = function(M, y) {
          var h = this.editor, E = window.getSelection ? window.getSelection() : document.getSelection();
          E == null || E.removeAllRanges();
          var C = document.createRange(), R = M, F = y;
          C.setStart(R, 0), C.setEnd(F, 1), E == null || E.addRange(C), h.selection.saveRange(), E == null || E.removeAllRanges(), h.selection.restoreSelection();
        }, v.prototype.tryChangeActive = function() {
          var M = this.editor, y = M.selection.getSelectionContainerElem();
          if (!(y && M.$textElem.equal(y))) {
            var h = S.default(M.selection.getSelectionStartElem());
            if (h.length !== 0) {
              h = this.getDom(h.elems[0]);
              var E = h.getAttribute("style") ? h.getAttribute("style") : "";
              E && (0, d.default)(E).call(E, "line-height") !== -1 ? this.active() : this.unActive();
            }
          }
        }, v;
      }(T.default);
      o.default = g;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), m = d.__importDefault(t(3)), T = function() {
        function S(w, b) {
          var g = this;
          this.itemList = [{ $elem: m.default("<span>" + w.i18next.t("\u9ED8\u8BA4") + "</span>"), value: "" }], (0, f.default)(b).call(b, function(x) {
            g.itemList.push({ $elem: m.default("<span>" + x + "</span>"), value: x });
          });
        }
        return S.prototype.getItemList = function() {
          return this.itemList;
        }, S;
      }();
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(3)), m = f.__importDefault(t(23)), T = function(S) {
        f.__extends(w, S);
        function w(b) {
          var g = this, x = d.default(`<div class="w-e-menu" data-title="\u64A4\u9500">
                <i class="w-e-icon-undo"></i>
            </div>`);
          return g = S.call(this, x, b) || this, g;
        }
        return w.prototype.clickHandler = function() {
          var b = this.editor;
          b.history.revoke();
          var g = b.$textElem.children();
          if (!!(g != null && g.length)) {
            var x = g.last();
            b.selection.createRangeByElem(x, !1, !0), b.selection.restoreSelection();
          }
        }, w.prototype.tryChangeActive = function() {
          this.editor.isCompatibleMode || (this.editor.history.size[0] ? this.active() : this.unActive());
        }, w;
      }(m.default);
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(3)), m = f.__importDefault(t(23)), T = function(S) {
        f.__extends(w, S);
        function w(b) {
          var g = this, x = d.default(`<div class="w-e-menu" data-title="\u6062\u590D">
                <i class="w-e-icon-redo"></i>
            </div>`);
          return g = S.call(this, x, b) || this, g;
        }
        return w.prototype.clickHandler = function() {
          var b = this.editor;
          b.history.restore();
          var g = b.$textElem.children();
          if (!!(g != null && g.length)) {
            var x = g.last();
            b.selection.createRangeByElem(x, !1, !0), b.selection.restoreSelection();
          }
        }, w.prototype.tryChangeActive = function() {
          this.editor.isCompatibleMode || (this.editor.history.size[1] ? this.active() : this.unActive());
        }, w;
      }(m.default);
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(37)), m = f.__importDefault(t(3)), T = f.__importDefault(t(383)), S = f.__importDefault(t(32)), w = f.__importDefault(t(392)), b = function(g) {
        f.__extends(x, g);
        function x(v) {
          var M = this, y = m.default('<div class="w-e-menu" data-title="\u8868\u683C"><i class="w-e-icon-table2"></i></div>');
          return M = g.call(this, y, v) || this, w.default(v), M;
        }
        return x.prototype.clickHandler = function() {
          this.createPanel();
        }, x.prototype.createPanel = function() {
          var v = T.default(this.editor), M = new S.default(this, v);
          M.create();
        }, x.prototype.tryChangeActive = function() {
        }, x;
      }(d.default);
      o.default = b;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(384));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), m = t(6), T = d.__importDefault(t(3));
      t(389);
      var S = d.__importDefault(t(391));
      function w(g) {
        return g > 0 && (0, f.default)(g);
      }
      function b(g) {
        var x = new S.default(g), v = m.getRandom("w-col-id"), M = m.getRandom("w-row-id"), y = m.getRandom("btn-link"), h = "menus.panelMenus.table.", E = function(B) {
          return g.i18next.t(B);
        }, C = [{ title: E(h + "\u63D2\u5165\u8868\u683C"), tpl: `<div>
                    <div class="w-e-table">
                        <span>` + E("\u521B\u5EFA") + `</span>
                        <input id="` + M + `"  type="text" class="w-e-table-input" value="5"/></td>
                        <span>` + E(h + "\u884C") + `</span>
                        <input id="` + v + `" type="text" class="w-e-table-input" value="5"/></td>
                        <span>` + (E(h + "\u5217") + E(h + "\u7684") + E(h + "\u8868\u683C")) + `</span>
                    </div>
                    <div class="w-e-button-container">
                        <button type="button" id="` + y + '" class="right">' + E("\u63D2\u5165") + `</button>
                    </div>
                </div>`, events: [{ selector: "#" + y, type: "click", fn: function() {
          var B = Number(T.default("#" + v).val()), O = Number(T.default("#" + M).val());
          return w(O) && w(B) ? (x.createAction(O, B), !0) : (g.config.customAlert("\u8868\u683C\u884C\u5217\u8BF7\u8F93\u5165\u6B63\u6574\u6570", "warning"), !1);
        }, bindEnter: !0 }] }], R = { width: 330, height: 0, tabs: [] };
        return R.tabs.push(C[0]), R;
      }
      o.default = b;
    }, function(l, o, t) {
      l.exports = t(385);
    }, function(l, o, t) {
      var s = t(386);
      l.exports = s;
    }, function(l, o, t) {
      t(387);
      var s = t(9);
      l.exports = s.Number.isInteger;
    }, function(l, o, t) {
      var s = t(5), u = t(388);
      s({ target: "Number", stat: !0 }, { isInteger: u });
    }, function(l, o, t) {
      var s = t(13), u = Math.floor;
      l.exports = function(d) {
        return !s(d) && isFinite(d) && u(d) === d;
      };
    }, function(l, o, t) {
      var s = t(20), u = t(390);
      u = u.__esModule ? u.default : u, typeof u == "string" && (u = [[l.i, u, ""]]);
      var f = {};
      f.insert = "head", f.singleton = !1, s(u, f), l.exports = u.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-table {
  display: flex;
}
.w-e-table .w-e-table-input {
  width: 40px;
  text-align: center!important;
  margin: 0 5px;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = t(7), m = f.__importDefault(t(3)), T = function() {
        function S(w) {
          this.editor = w;
        }
        return S.prototype.createAction = function(w, b) {
          var g = this.editor, x = m.default(g.selection.getSelectionContainerElem()), v = m.default(x.elems[0]).parentUntilEditor("UL", g), M = m.default(x.elems[0]).parentUntilEditor("OL", g);
          if (!(v || M)) {
            var y = this.createTableHtml(w, b);
            g.cmd.do("insertHTML", y);
          }
        }, S.prototype.createTableHtml = function(w, b) {
          for (var g = "", x = "", v = 0; v < w; v++) {
            x = "";
            for (var M = 0; M < b; M++)
              v === 0 ? x = x + "<th></th>" : x = x + "<td></td>";
            g = g + "<tr>" + x + "</tr>";
          }
          var y = '<table border="0" width="100%" cellpadding="0" cellspacing="0"><tbody>' + g + ("</tbody></table>" + d.EMPTY_P);
          return y;
        }, S;
      }();
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(393)), m = t(400);
      function T(S) {
        d.default(S), m.bindEventKeyboardEvent(S), m.bindClickEvent(S);
      }
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(3)), m = f.__importDefault(t(38)), T = f.__importDefault(t(394)), S = f.__importDefault(t(399)), w = t(7);
      function b(M) {
        var y;
        function h(C) {
          var R = new S.default(M), F = "menus.panelMenus.table.", B = function(I, U) {
            return U === void 0 && (U = F), M.i18next.t(U + I);
          }, O = [{
            $elem: d.default("<span>" + B("\u5220\u9664\u8868\u683C") + "</span>"),
            onClick: function(I, U) {
              return I.selection.createRangeByElem(U), I.selection.restoreSelection(), I.cmd.do("insertHTML", w.EMPTY_P), !0;
            }
          }, { $elem: d.default("<span>" + B("\u6DFB\u52A0\u884C") + "</span>"), onClick: function(I, U) {
            var H = g(I);
            if (H)
              return !0;
            var $ = d.default(I.selection.getSelectionStartElem()), P = R.getRowNode($.elems[0]);
            if (!P)
              return !0;
            var Y = Number(R.getCurrentRowIndex(U.elems[0], P)), Q = R.getTableHtml(U.elems[0]), K = R.getTableHtml(T.default.ProcessingRow(d.default(Q), Y).elems[0]);
            return K = v(U, K), I.selection.createRangeByElem(U), I.selection.restoreSelection(), I.cmd.do("insertHTML", K), !0;
          } }, { $elem: d.default("<span>" + B("\u5220\u9664\u884C") + "</span>"), onClick: function(I, U) {
            var H = g(I);
            if (H)
              return !0;
            var $ = d.default(I.selection.getSelectionStartElem()), P = R.getRowNode($.elems[0]);
            if (!P)
              return !0;
            var Y = Number(R.getCurrentRowIndex(U.elems[0], P)), Q = R.getTableHtml(U.elems[0]), K = T.default.DeleteRow(d.default(Q), Y).elems[0].children[0].children.length, q = "";
            return I.selection.createRangeByElem(U), I.selection.restoreSelection(), K === 0 ? q = w.EMPTY_P : q = R.getTableHtml(T.default.DeleteRow(d.default(Q), Y).elems[0]), q = v(U, q), I.cmd.do("insertHTML", q), !0;
          } }, { $elem: d.default("<span>" + B("\u6DFB\u52A0\u5217") + "</span>"), onClick: function(I, U) {
            var H = g(I);
            if (H)
              return !0;
            var $ = d.default(I.selection.getSelectionStartElem()), P = R.getCurrentColIndex($.elems[0]), Y = R.getTableHtml(U.elems[0]), Q = R.getTableHtml(T.default.ProcessingCol(d.default(Y), P).elems[0]);
            return Q = v(U, Q), I.selection.createRangeByElem(U), I.selection.restoreSelection(), I.cmd.do("insertHTML", Q), !0;
          } }, { $elem: d.default("<span>" + B("\u5220\u9664\u5217") + "</span>"), onClick: function(I, U) {
            var H = g(I);
            if (H)
              return !0;
            var $ = d.default(I.selection.getSelectionStartElem()), P = R.getCurrentColIndex($.elems[0]), Y = R.getTableHtml(U.elems[0]), Q = T.default.DeleteCol(d.default(Y), P), K = Q.elems[0].children[0].children[0].children.length, q = "";
            return I.selection.createRangeByElem(U), I.selection.restoreSelection(), K === 0 ? q = w.EMPTY_P : q = R.getTableHtml(Q.elems[0]), q = v(U, q), I.cmd.do("insertHTML", q), !0;
          } }, { $elem: d.default("<span>" + B("\u8BBE\u7F6E\u8868\u5934") + "</span>"), onClick: function(I, U) {
            var H = g(I);
            if (H)
              return !0;
            var $ = d.default(I.selection.getSelectionStartElem()), P = R.getRowNode($.elems[0]);
            if (!P)
              return !0;
            var Y = Number(R.getCurrentRowIndex(U.elems[0], P));
            Y !== 0 && (Y = 0);
            var Q = R.getTableHtml(U.elems[0]), K = R.getTableHtml(T.default.setTheHeader(d.default(Q), Y, "th").elems[0]);
            return K = v(U, K), I.selection.createRangeByElem(U), I.selection.restoreSelection(), I.cmd.do("insertHTML", K), !0;
          } }, { $elem: d.default("<span>" + B("\u53D6\u6D88\u8868\u5934") + "</span>"), onClick: function(I, U) {
            var H = d.default(I.selection.getSelectionStartElem()), $ = R.getRowNode(H.elems[0]);
            if (!$)
              return !0;
            var P = Number(R.getCurrentRowIndex(U.elems[0], $));
            P !== 0 && (P = 0);
            var Y = R.getTableHtml(U.elems[0]), Q = R.getTableHtml(T.default.setTheHeader(d.default(Y), P, "td").elems[0]);
            return Q = v(U, Q), I.selection.createRangeByElem(U), I.selection.restoreSelection(), I.cmd.do("insertHTML", Q), !0;
          } }];
          y = new m.default(M, C, O), y.create();
        }
        function E() {
          y && (y.remove(), y = null);
        }
        return { showTableTooltip: h, hideTableTooltip: E };
      }
      function g(M) {
        var y = M.selection.getSelectionStartElem(), h = M.selection.getSelectionEndElem();
        return (y == null ? void 0 : y.elems[0]) !== (h == null ? void 0 : h.elems[0]);
      }
      function x(M) {
        var y = b(M), h = y.showTableTooltip, E = y.hideTableTooltip;
        M.txt.eventHooks.tableClickEvents.push(h), M.txt.eventHooks.clickEvents.push(E), M.txt.eventHooks.keyupEvents.push(E), M.txt.eventHooks.toolbarClickEvents.push(E), M.txt.eventHooks.menuClickEvents.push(E), M.txt.eventHooks.textScrollEvents.push(E);
      }
      o.default = x;
      function v(M, y) {
        var h = M.elems[0].nextSibling;
        return (!h || h.innerHTML === "<br>") && (y += "" + w.EMPTY_P), y;
      }
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(45)), d = s(t(91)), m = s(t(4)), T = s(t(138));
      (0, u.default)(o, "__esModule", { value: !0 });
      var S = t(2), w = S.__importDefault(t(3));
      function b(E, C) {
        for (var R = h(E), F = (0, f.default)(Array.prototype).apply(R.children), B = F[0].children.length, O = document.createElement("tr"), z = 0; z < B; z++) {
          var I = document.createElement("td");
          O.appendChild(I);
        }
        return (0, d.default)(F).call(F, C + 1, 0, O), y(R, F), w.default(R.parentNode);
      }
      function g(E, C) {
        for (var R = h(E), F = (0, f.default)(Array.prototype).apply(R.children), B = function(I) {
          var U, H = [];
          for ((0, m.default)(U = (0, T.default)(F[I].children)).call(U, function(Y) {
            H.push(Y);
          }); F[I].children.length !== 0; )
            F[I].removeChild(F[I].children[0]);
          var $ = w.default(H[0]).getNodeName() !== "TH" ? document.createElement("td") : document.createElement("th");
          (0, d.default)(H).call(H, C + 1, 0, $);
          for (var P = 0; P < H.length; P++)
            F[I].appendChild(H[P]);
        }, O = 0; O < F.length; O++)
          B(O);
        return y(R, F), w.default(R.parentNode);
      }
      function x(E, C) {
        var R = h(E), F = (0, f.default)(Array.prototype).apply(R.children);
        return (0, d.default)(F).call(F, C, 1), y(R, F), w.default(R.parentNode);
      }
      function v(E, C) {
        for (var R = h(E), F = (0, f.default)(Array.prototype).apply(R.children), B = function(I) {
          var U, H = [];
          for ((0, m.default)(U = (0, T.default)(F[I].children)).call(U, function(P) {
            H.push(P);
          }); F[I].children.length !== 0; )
            F[I].removeChild(F[I].children[0]);
          (0, d.default)(H).call(H, C, 1);
          for (var $ = 0; $ < H.length; $++)
            F[I].appendChild(H[$]);
        }, O = 0; O < F.length; O++)
          B(O);
        return y(R, F), w.default(R.parentNode);
      }
      function M(E, C, R) {
        for (var F = h(E), B = (0, f.default)(Array.prototype).apply(F.children), O = B[C].children, z = document.createElement("tr"), I = function($) {
          var P, Y = document.createElement(R), Q = O[$];
          (0, m.default)(P = (0, T.default)(Q.childNodes)).call(P, function(K) {
            Y.appendChild(K);
          }), z.appendChild(Y);
        }, U = 0; U < O.length; U++)
          I(U);
        return (0, d.default)(B).call(B, C, 1, z), y(F, B), w.default(F.parentNode);
      }
      function y(E, C) {
        for (; E.children.length !== 0; )
          E.removeChild(E.children[0]);
        for (var R = 0; R < C.length; R++)
          E.appendChild(C[R]);
      }
      function h(E) {
        var C = E.elems[0].children[0];
        return C.nodeName === "COLGROUP" && (C = E.elems[0].children[E.elems[0].children.length - 1]), C;
      }
      o.default = { ProcessingRow: b, ProcessingCol: g, DeleteRow: x, DeleteCol: v, setTheHeader: M };
    }, function(l, o, t) {
      var s = t(396);
      l.exports = s;
    }, function(l, o, t) {
      t(50), t(397);
      var s = t(9);
      l.exports = s.Array.from;
    }, function(l, o, t) {
      var s = t(5), u = t(398), f = t(114), d = !f(function(m) {
        Array.from(m);
      });
      s({ target: "Array", stat: !0, forced: d }, { from: u });
    }, function(l, o, t) {
      var s = t(39), u = t(29), f = t(113), d = t(111), m = t(34), T = t(69), S = t(112);
      l.exports = function(b) {
        var g = u(b), x = typeof this == "function" ? this : Array, v = arguments.length, M = v > 1 ? arguments[1] : void 0, y = M !== void 0, h = S(g), E = 0, C, R, F, B, O, z;
        if (y && (M = s(M, v > 2 ? arguments[2] : void 0, 2)), h != null && !(x == Array && d(h)))
          for (B = h.call(g), O = B.next, R = new x(); !(F = O.call(B)).done; E++)
            z = y ? f(B, M, [F.value, E], !0) : F.value, T(R, E, z);
        else
          for (C = m(g.length), R = new x(C); C > E; E++)
            z = y ? M(g[E], E) : g[E], T(R, E, z);
        return R.length = E, R;
      };
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(4)), d = s(t(138));
      (0, u.default)(o, "__esModule", { value: !0 });
      var m = t(2), T = m.__importDefault(t(3)), S = function() {
        function w(b) {
          this.editor = b;
        }
        return w.prototype.getRowNode = function(b) {
          var g, x = T.default(b).elems[0];
          return x.parentNode && (x = (g = T.default(x).parentUntil("TR", x)) === null || g === void 0 ? void 0 : g.elems[0]), x;
        }, w.prototype.getCurrentRowIndex = function(b, g) {
          var x, v = 0, M = b.children[0];
          return M.nodeName === "COLGROUP" && (M = b.children[b.children.length - 1]), (0, f.default)(x = (0, d.default)(M.children)).call(x, function(y, h) {
            y === g && (v = h);
          }), v;
        }, w.prototype.getCurrentColIndex = function(b) {
          var g, x, v = 0, M = T.default(b).getNodeName() === "TD" || T.default(b).getNodeName() === "TH" ? b : (x = T.default(b).parentUntil("TD", b)) === null || x === void 0 ? void 0 : x.elems[0], y = T.default(M).parent();
          return (0, f.default)(g = (0, d.default)(y.elems[0].children)).call(g, function(h, E) {
            h === M && (v = E);
          }), v;
        }, w.prototype.getTableHtml = function(b) {
          var g = '<table border="0" width="100%" cellpadding="0" cellspacing="0">' + T.default(b).html() + "</table>";
          return g;
        }, w;
      }();
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.bindEventKeyboardEvent = o.bindClickEvent = void 0;
      var f = t(2), d = f.__importDefault(t(3));
      function m(w) {
        if (!w.length)
          return !1;
        var b = w.elems[0];
        return b.nodeName === "P" && b.innerHTML === "<br>";
      }
      function T(w) {
        function b(g, x) {
          if (x.detail >= 3) {
            var v = window.getSelection();
            if (v) {
              var M = v.focusNode, y = v.anchorNode, h = d.default(y == null ? void 0 : y.parentElement);
              if (!g.isContain(d.default(M))) {
                var E = h.elems[0].tagName === "TD" ? h : h.parentUntilEditor("td", w);
                if (E) {
                  var C = w.selection.getRange();
                  C == null || C.setEnd(E.elems[0], E.elems[0].childNodes.length), w.selection.restoreSelection();
                }
              }
            }
          }
        }
        w.txt.eventHooks.tableClickEvents.push(b);
      }
      o.bindClickEvent = T;
      function S(w) {
        var b = w.txt, g = w.selection, x = b.eventHooks.keydownEvents;
        x.push(function(v) {
          w.selection.saveRange();
          var M = g.getSelectionContainerElem();
          if (M) {
            var y = M.getNodeTop(w), h = y.length && y.prev().length ? y.prev() : null;
            if (h && h.getNodeName() === "TABLE" && g.isSelectionEmpty() && g.getCursorPos() === 0 && v.keyCode === 8) {
              var E = y.next(), C = !!E.length;
              C && m(y) && (y.remove(), w.selection.setRangeToElem(E.elems[0])), v.preventDefault();
            }
          }
        });
      }
      o.bindEventKeyboardEvent = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(26));
      (0, u.default)(o, "__esModule", { value: !0 }), o.formatCodeHtml = void 0;
      var d = t(2), m = d.__importDefault(t(37)), T = d.__importDefault(t(3)), S = t(6), w = d.__importDefault(t(402)), b = d.__importDefault(t(139)), g = d.__importDefault(t(32)), x = d.__importDefault(t(403));
      function v(y, h) {
        if (!h)
          return h;
        return h = C(h), h = E(h), h = S.replaceSpecialSymbol(h), h;
        function E(R) {
          var F = R.match(/<pre[\s|\S]+?\/pre>/g);
          return F === null || (0, f.default)(F).call(F, function(B) {
            R = R.replace(B, B.replace(/<\/code><code>/g, `
`).replace(/<br>/g, ""));
          }), R;
        }
        function C(R) {
          var F, B = R.match(/<span\sclass="hljs[\s|\S]+?\/span>/gm);
          if (!B || !B.length)
            return R;
          for (var O = (0, f.default)(F = S.deepClone(B)).call(F, function(I) {
            return I = I.replace(/<span\sclass="hljs[^>]+>/, ""), I.replace(/<\/span>/, "");
          }), z = 0; z < B.length; z++)
            R = R.replace(B[z], O[z]);
          return C(R);
        }
      }
      o.formatCodeHtml = v;
      var M = function(y) {
        d.__extends(h, y);
        function h(E) {
          var C = this, R = T.default('<div class="w-e-menu" data-title="\u4EE3\u7801"><i class="w-e-icon-terminal"></i></div>');
          return C = y.call(this, R, E) || this, x.default(E), C;
        }
        return h.prototype.insertLineCode = function(E) {
          var C = this.editor, R = T.default("<code>" + E + "</code>");
          C.cmd.do("insertElem", R), C.selection.createRangeByElem(R, !1), C.selection.restoreSelection();
        }, h.prototype.clickHandler = function() {
          var E = this.editor, C = E.selection.getSelectionText();
          this.isActive || (E.selection.isSelectionEmpty() ? this.createPanel("", "") : this.insertLineCode(C));
        }, h.prototype.createPanel = function(E, C) {
          var R = w.default(this.editor, E, C), F = new g.default(this, R);
          F.create();
        }, h.prototype.tryChangeActive = function() {
          var E = this.editor;
          b.default(E) ? this.active() : this.unActive();
        }, h;
      }(m.default);
      o.default = M;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(26));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), m = t(6), T = d.__importDefault(t(3)), S = d.__importDefault(t(139)), w = t(7);
      function b(g, x, v) {
        var M, y = m.getRandom("input-iframe"), h = m.getRandom("select"), E = m.getRandom("btn-ok");
        function C(O) {
          var z, I = S.default(g);
          I && R();
          var U = (z = g.selection.getSelectionStartElem()) === null || z === void 0 ? void 0 : z.elems[0].innerHTML;
          U && g.cmd.do("insertHTML", w.EMPTY_P), g.cmd.do("insertHTML", O);
          var H = g.selection.getSelectionStartElem(), $ = H == null ? void 0 : H.getNodeTop(g);
          ($ == null ? void 0 : $.getNextSibling().elems.length) === 0 && T.default(w.EMPTY_P).insertAfter($);
        }
        function R() {
          if (!!S.default(g)) {
            var O = g.selection.getSelectionStartElem(), z = O == null ? void 0 : O.getNodeTop(g);
            !z || (g.selection.createRangeByElem(z), g.selection.restoreSelection());
          }
        }
        var F = function(z) {
          return g.i18next.t(z);
        }, B = {
          width: 500,
          height: 0,
          tabs: [{
            title: F("menus.panelMenus.code.\u63D2\u5165\u4EE3\u7801"),
            tpl: `<div>
                        <select name="" id="` + h + `">
                            ` + (0, f.default)(M = g.config.languageType).call(M, function(O) {
              return "<option " + (v == O ? "selected" : "") + ' value ="' + O + '">' + O + "</option>";
            }) + `
                        </select>
                        <textarea id="` + y + '" type="text" class="wang-code-textarea" placeholder="" style="height: 160px">' + x.replace(/&quot;/g, '"') + `</textarea>
                        <div class="w-e-button-container">
                            <button type="button" id="` + E + '" class="right">' + (S.default(g) ? F("\u4FEE\u6539") : F("\u63D2\u5165")) + `</button>
                        </div>
                    </div>`,
            events: [
              { selector: "#" + E, type: "click", fn: function() {
                var z, I, U = document.getElementById(y), H = T.default("#" + h), $ = H.val(), P = U.value;
                if (g.highlight ? z = g.highlight.highlightAuto(P).value : z = "<xmp>" + P + "</xmp>", !!P)
                  return S.default(g) ? !1 : (I = '<pre><code class="' + $ + '">' + z + "</code></pre>", C(I), !0);
              } }
            ]
          }]
        };
        return B;
      }
      o.default = b;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(404)), m = f.__importDefault(t(405));
      function T(S) {
        d.default(S), m.default(S);
      }
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.createShowHideFn = void 0;
      var f = t(2), d = f.__importDefault(t(3)), m = f.__importDefault(t(38));
      function T(w) {
        var b;
        function g(v) {
          var M = "menus.panelMenus.code.", y = function(C, R) {
            return R === void 0 && (R = M), w.i18next.t(R + C);
          }, h = [{ $elem: d.default("<span>" + y("\u5220\u9664\u4EE3\u7801") + "</span>"), onClick: function(C, R) {
            return R.remove(), !0;
          } }];
          b = new m.default(w, v, h), b.create();
        }
        function x() {
          b && (b.remove(), b = null);
        }
        return { showCodeTooltip: g, hideCodeTooltip: x };
      }
      o.createShowHideFn = T;
      function S(w) {
        var b = T(w), g = b.showCodeTooltip, x = b.hideCodeTooltip;
        w.txt.eventHooks.codeClickEvents.push(g), w.txt.eventHooks.clickEvents.push(x), w.txt.eventHooks.toolbarClickEvents.push(x), w.txt.eventHooks.menuClickEvents.push(x), w.txt.eventHooks.textScrollEvents.push(x);
      }
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = t(7), m = f.__importDefault(t(3));
      function T(S) {
        var w = S.$textElem, b = S.selection, g = S.txt, x = g.eventHooks.keydownEvents;
        x.push(function(v) {
          var M;
          if (v.keyCode === 40) {
            var y = b.getSelectionContainerElem(), h = (M = w.children()) === null || M === void 0 ? void 0 : M.last();
            if ((y == null ? void 0 : y.elems[0].tagName) === "XMP" && (h == null ? void 0 : h.elems[0].tagName) === "PRE") {
              var E = m.default(d.EMPTY_P);
              w.append(E);
            }
          }
        }), x.push(function(v) {
          S.selection.saveRange();
          var M = b.getSelectionContainerElem();
          if (M) {
            var y = M.getNodeTop(S), h = y == null ? void 0 : y.prev(), E = y == null ? void 0 : y.getNextSibling();
            if (h.length && (h == null ? void 0 : h.getNodeName()) === "PRE" && E.length === 0 && b.getCursorPos() === 0 && v.keyCode === 8) {
              var C = m.default(d.EMPTY_P);
              w.append(C);
            }
          }
        });
      }
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(23)), m = f.__importDefault(t(3)), T = f.__importDefault(t(407)), S = t(6), w = t(7), b = function(g) {
        f.__extends(x, g);
        function x(v) {
          var M = this, y = m.default('<div class="w-e-menu" data-title="\u5206\u5272\u7EBF"><i class="w-e-icon-split-line"></i></div>');
          return M = g.call(this, y, v) || this, T.default(v), M;
        }
        return x.prototype.clickHandler = function() {
          var v = this.editor, M = v.selection.getRange(), y = v.selection.getSelectionContainerElem();
          if (!!(y != null && y.length)) {
            var h = m.default(y.elems[0]), E = h.parentUntil("TABLE", y.elems[0]), C = h.children();
            h.getNodeName() !== "CODE" && (E && m.default(E.elems[0]).getNodeName() === "TABLE" || C && C.length !== 0 && m.default(C.elems[0]).getNodeName() === "IMG" && !(M != null && M.collapsed) || this.createSplitLine());
          }
        }, x.prototype.createSplitLine = function() {
          var v = "<hr/>" + w.EMPTY_P;
          S.UA.isFirefox && (v = "<hr/><p></p>"), this.editor.cmd.do("insertHTML", v);
        }, x.prototype.tryChangeActive = function() {
        }, x;
      }(d.default);
      o.default = b;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(408));
      function m(T) {
        d.default(T);
      }
      o.default = m;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(3)), m = f.__importDefault(t(38));
      function T(w) {
        var b;
        function g(v) {
          var M = [{ $elem: d.default("<span>" + w.i18next.t("menus.panelMenus.\u5220\u9664") + "</span>"), onClick: function(h, E) {
            return h.selection.createRangeByElem(E), h.selection.restoreSelection(), h.cmd.do("delete"), !0;
          } }];
          b = new m.default(w, v, M), b.create();
        }
        function x() {
          b && (b.remove(), b = null);
        }
        return { showSplitLineTooltip: g, hideSplitLineTooltip: x };
      }
      function S(w) {
        var b = T(w), g = b.showSplitLineTooltip, x = b.hideSplitLineTooltip;
        w.txt.eventHooks.splitLineEvents.push(g), w.txt.eventHooks.clickEvents.push(x), w.txt.eventHooks.keyupEvents.push(x), w.txt.eventHooks.toolbarClickEvents.push(x), w.txt.eventHooks.menuClickEvents.push(x), w.txt.eventHooks.textScrollEvents.push(x);
      }
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), m = d.__importDefault(t(3)), T = d.__importDefault(t(23)), S = t(97), w = d.__importDefault(t(415)), b = d.__importDefault(t(140)), g = function(x) {
        d.__extends(v, x);
        function v(M) {
          var y = this, h = m.default(`<div class="w-e-menu" data-title="\u5F85\u529E\u4E8B\u9879">
                    <i class="w-e-icon-checkbox-checked"></i>
                </div>`);
          return y = x.call(this, h, M) || this, w.default(M), y;
        }
        return v.prototype.clickHandler = function() {
          var M = this.editor;
          S.isAllTodo(M) ? (this.cancelTodo(), this.tryChangeActive()) : this.setTodo();
        }, v.prototype.tryChangeActive = function() {
          S.isAllTodo(this.editor) ? this.active() : this.unActive();
        }, v.prototype.setTodo = function() {
          var M = this.editor, y = M.selection.getSelectionRangeTopNodes();
          (0, f.default)(y).call(y, function(h) {
            var E, C = h == null ? void 0 : h.getNodeName();
            if (C === "P") {
              var R = b.default(h), F = R.getTodo(), B = (E = F.children()) === null || E === void 0 ? void 0 : E.getNode();
              F.insertAfter(h), M.selection.moveCursor(B), h.remove();
            }
          }), this.tryChangeActive();
        }, v.prototype.cancelTodo = function() {
          var M = this.editor, y = M.selection.getSelectionRangeTopNodes();
          (0, f.default)(y).call(y, function(h) {
            var E, C, R, F = (C = (E = h.childNodes()) === null || E === void 0 ? void 0 : E.childNodes()) === null || C === void 0 ? void 0 : C.clone(!0), B = m.default("<p></p>");
            B.append(F), B.insertAfter(h), (R = B.childNodes()) === null || R === void 0 || R.get(0).remove(), M.selection.moveCursor(B.getNode()), h.remove();
          });
        }, v;
      }(T.default);
      o.default = g;
    }, function(l, o, t) {
      l.exports = t(411);
    }, function(l, o, t) {
      var s = t(412);
      l.exports = s;
    }, function(l, o, t) {
      var s = t(413), u = Array.prototype;
      l.exports = function(f) {
        var d = f.every;
        return f === u || f instanceof Array && d === u.every ? s : d;
      };
    }, function(l, o, t) {
      t(414);
      var s = t(15);
      l.exports = s("Array").every;
    }, function(l, o, t) {
      var s = t(5), u = t(30).every, f = t(67), d = t(22), m = f("every"), T = d("every");
      s({ target: "Array", proto: !0, forced: !m || !T }, { every: function(w) {
        return u(this, w, arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), m = d.__importDefault(t(3)), T = t(97), S = d.__importDefault(t(140)), w = t(97), b = t(7);
      function g(x) {
        function v(E) {
          var C, R;
          if (T.isAllTodo(x)) {
            E.preventDefault();
            var F = x.selection, B = F.getSelectionRangeTopNodes()[0], O = (C = B.childNodes()) === null || C === void 0 ? void 0 : C.get(0), z = (R = window.getSelection()) === null || R === void 0 ? void 0 : R.anchorNode, I = F.getRange();
            if (!(I != null && I.collapsed)) {
              var U = I == null ? void 0 : I.commonAncestorContainer.childNodes, H = I == null ? void 0 : I.startContainer, $ = I == null ? void 0 : I.endContainer, P = I == null ? void 0 : I.startOffset, Y = I == null ? void 0 : I.endOffset, Q = 0, K = 0, q = [];
              U == null || (0, f.default)(U).call(U, function(pe, Pe) {
                pe.contains(H) && (Q = Pe), pe.contains($) && (K = Pe);
              }), K - Q > 1 && (U == null || (0, f.default)(U).call(U, function(pe, Pe) {
                Pe <= Q || Pe >= K || q.push(pe);
              }), (0, f.default)(q).call(q, function(pe) {
                pe.remove();
              })), w.dealTextNode(H, P), w.dealTextNode($, Y, !1), x.selection.moveCursor($, 0);
            }
            if (B.text() === "") {
              var X = m.default(b.EMPTY_P);
              X.insertAfter(B), F.moveCursor(X.getNode()), B.remove();
              return;
            }
            var _ = F.getCursorPos(), le = T.getCursorNextNode(O == null ? void 0 : O.getNode(), z, _), Se = S.default(m.default(le)), ve = Se.getInputContainer(), ce = ve.parent().getNode(), ae = Se.getTodo(), re = ve.getNode().nextSibling;
            if ((O == null ? void 0 : O.text()) === "" && (O == null || O.append(m.default("<br>"))), ae.insertAfter(B), !re || (re == null ? void 0 : re.textContent) === "") {
              if ((re == null ? void 0 : re.nodeName) !== "BR") {
                var se = m.default("<br>");
                se.insertAfter(ve);
              }
              F.moveCursor(ce, 1);
            } else
              F.moveCursor(ce);
          }
        }
        function M(E) {
          var C, R;
          if (T.isAllTodo(x)) {
            var F = x.selection, B = F.getSelectionRangeTopNodes()[0], O = (C = B.childNodes()) === null || C === void 0 ? void 0 : C.getNode(), z = m.default("<p></p>"), I = z.getNode(), U = (R = window.getSelection()) === null || R === void 0 ? void 0 : R.anchorNode, H = F.getCursorPos(), $ = U.previousSibling;
            if (B.text() === "") {
              E.preventDefault();
              var P = m.default(b.EMPTY_P);
              P.insertAfter(B), B.remove(), F.moveCursor(P.getNode(), 0);
              return;
            }
            if (($ == null ? void 0 : $.nodeName) === "SPAN" && $.childNodes[0].nodeName === "INPUT" && H === 0) {
              var Y;
              E.preventDefault(), O == null || (0, f.default)(Y = O.childNodes).call(Y, function(Q, K) {
                K !== 0 && I.appendChild(Q.cloneNode(!0));
              }), z.insertAfter(B), B.remove();
            }
          }
        }
        function y() {
          var E = x.selection, C = E.getSelectionRangeTopNodes()[0];
          C && w.isTodo(C) && C.text() === "" && (m.default(b.EMPTY_P).insertAfter(C), C.remove());
        }
        function h(E) {
          E && E.target instanceof HTMLInputElement && E.target.type === "checkbox" && (E.target.checked ? E.target.setAttribute("checked", "true") : E.target.removeAttribute("checked"));
        }
        x.txt.eventHooks.enterDownEvents.push(v), x.txt.eventHooks.deleteUpEvents.push(y), x.txt.eventHooks.deleteDownEvents.push(M), x.txt.eventHooks.clickEvents.push(h);
      }
      o.default = g;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.selectorValidator = void 0;
      var f = t(2), d = f.__importDefault(t(3)), m = t(6), T = t(7), S = f.__importDefault(t(129)), w = { border: "1px solid #c9d8db", toolbarBgColor: "#FFF", toolbarBottomBorder: "1px solid #EEE" };
      function b(x) {
        var v = x.toolbarSelector, M = d.default(v), y = x.textSelector, h = x.config, E = h.height, C = x.i18next, R = d.default("<div></div>"), F = d.default("<div></div>"), B, O, z = null;
        y == null ? (O = M.children(), M.append(R).append(F), R.css("background-color", w.toolbarBgColor).css("border", w.border).css("border-bottom", w.toolbarBottomBorder), F.css("border", w.border).css("border-top", "none").css("height", E + "px")) : (M.append(R), z = d.default(y).children(), d.default(y).append(F), O = F.children()), B = d.default("<div></div>"), B.attr("contenteditable", "true").css("width", "100%").css("height", "100%");
        var I, U = x.config.placeholder;
        U !== S.default.placeholder ? I = d.default("<div>" + U + "</div>") : I = d.default("<div>" + C.t(U) + "</div>"), I.addClass("placeholder"), O && O.length ? (B.append(O), I.hide()) : B.append(d.default(T.EMPTY_P)), z && z.length && (B.append(z), I.hide()), F.append(B), F.append(I), R.addClass("w-e-toolbar").css("z-index", x.zIndex.get("toolbar")), F.addClass("w-e-text-container"), F.css("z-index", x.zIndex.get()), B.addClass("w-e-text");
        var H = m.getRandom("toolbar-elem");
        R.attr("id", H);
        var $ = m.getRandom("text-elem");
        B.attr("id", $);
        var P = F.getBoundingClientRect().height, Y = B.getBoundingClientRect().height;
        P !== Y && B.css("min-height", P + "px"), x.$toolbarElem = R, x.$textContainerElem = F, x.$textElem = B, x.toolbarElemId = H, x.textElemId = $;
      }
      o.default = b;
      function g(x) {
        var v = "data-we-id", M = /^wangEditor-\d+$/, y = x.textSelector, h = x.toolbarSelector, E = { bar: d.default("<div></div>"), text: d.default("<div></div>") };
        if (h == null)
          throw new Error("\u9519\u8BEF\uFF1A\u521D\u59CB\u5316\u7F16\u8F91\u5668\u65F6\u5019\u672A\u4F20\u5165\u4EFB\u4F55\u53C2\u6570\uFF0C\u8BF7\u67E5\u9605\u6587\u6863");
        if (E.bar = d.default(h), !E.bar.elems.length)
          throw new Error("\u65E0\u6548\u7684\u8282\u70B9\u9009\u62E9\u5668\uFF1A" + h);
        if (M.test(E.bar.attr(v)))
          throw new Error("\u521D\u59CB\u5316\u8282\u70B9\u5DF2\u5B58\u5728\u7F16\u8F91\u5668\u5B9E\u4F8B\uFF0C\u65E0\u6CD5\u91CD\u590D\u521B\u5EFA\u7F16\u8F91\u5668");
        if (y) {
          if (E.text = d.default(y), !E.text.elems.length)
            throw new Error("\u65E0\u6548\u7684\u8282\u70B9\u9009\u62E9\u5668\uFF1A" + y);
          if (M.test(E.text.attr(v)))
            throw new Error("\u521D\u59CB\u5316\u8282\u70B9\u5DF2\u5B58\u5728\u7F16\u8F91\u5668\u5B9E\u4F8B\uFF0C\u65E0\u6CD5\u91CD\u590D\u521B\u5EFA\u7F16\u8F91\u5668");
        }
        E.bar.attr(v, x.id), E.text.attr(v, x.id), x.beforeDestroy(function() {
          E.bar.removeAttr(v), E.text.removeAttr(v);
        });
      }
      o.selectorValidator = g;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(3)), m = t(7);
      function T(S, w) {
        var b = S.$textElem, g = b.children();
        if (!g || !g.length) {
          b.append(d.default(m.EMPTY_P)), T(S);
          return;
        }
        var x = g.last();
        if (w) {
          var v = x.html().toLowerCase(), M = x.getNodeName();
          if (v !== "<br>" && v !== "<br/>" || M !== "P") {
            b.append(d.default(m.EMPTY_P)), T(S);
            return;
          }
        }
        S.selection.createRangeByElem(x, !1, !0), S.config.focus ? S.selection.restoreSelection() : S.selection.clearWindowSelectionRange();
      }
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), m = d.__importDefault(t(3));
      function T(v) {
        S(v), w(v), b(v);
      }
      function S(v) {
        v.txt.eventHooks.changeEvents.push(function() {
          var M = v.config.onchange;
          if (M) {
            var y = v.txt.html() || "";
            v.isFocus = !0, M(y);
          }
          v.txt.togglePlaceholder();
        });
      }
      function w(v) {
        v.isFocus = !1;
        function M(y) {
          var h = y.target, E = m.default(h), C = v.$textElem, R = v.$toolbarElem, F = C.isContain(E), B = R.isContain(E), O = R.elems[0] == y.target;
          if (F)
            v.isFocus || x(v), v.isFocus = !0;
          else {
            if (B && !O || !v.isFocus)
              return;
            g(v), v.isFocus = !1;
          }
        }
        document.activeElement === v.$textElem.elems[0] && v.config.focus && (x(v), v.isFocus = !0), m.default(document).on("click", M), v.beforeDestroy(function() {
          m.default(document).off("click", M);
        });
      }
      function b(v) {
        v.$textElem.on("compositionstart", function() {
          v.isComposing = !0, v.txt.togglePlaceholder();
        }).on("compositionend", function() {
          v.isComposing = !1, v.txt.togglePlaceholder();
        });
      }
      function g(v) {
        var M, y = v.config, h = y.onblur, E = v.txt.html() || "";
        (0, f.default)(M = v.txt.eventHooks.onBlurEvents).call(M, function(C) {
          return C();
        }), h(E);
      }
      function x(v) {
        var M = v.config, y = M.onfocus, h = v.txt.html() || "";
        y(h);
      }
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      function f(d) {
        var m = d.config, T = m.lang, S = m.languages;
        if (d.i18next != null) {
          try {
            d.i18next.init({ ns: "wangEditor", lng: T, defaultNS: "wangEditor", resources: S });
          } catch (w) {
            throw new Error("i18next:" + w);
          }
          return;
        }
        d.i18next = { t: function(b) {
          var g = b.split(".");
          return g[g.length - 1];
        } };
      }
      o.default = f;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(31));
      (0, u.default)(o, "__esModule", { value: !0 }), o.setUnFullScreen = o.setFullScreen = void 0;
      var d = t(2), m = d.__importDefault(t(3));
      t(421);
      var T = "w-e-icon-fullscreen", S = "w-e-icon-fullscreen_exit", w = "w-e-full-screen-editor";
      o.setFullScreen = function(g) {
        var x = m.default(g.toolbarSelector), v = g.$textContainerElem, M = g.$toolbarElem, y = (0, f.default)(M).call(M, "i." + T), h = g.config;
        y.removeClass(T), y.addClass(S), x.addClass(w), x.css("z-index", h.zIndexFullScreen);
        var E = M.getBoundingClientRect();
        v.css("height", "calc(100% - " + E.height + "px)");
      }, o.setUnFullScreen = function(g) {
        var x = m.default(g.toolbarSelector), v = g.$textContainerElem, M = g.$toolbarElem, y = (0, f.default)(M).call(M, "i." + S), h = g.config;
        y.removeClass(S), y.addClass(T), x.removeClass(w), x.css("z-index", "auto"), v.css("height", h.height + "px");
      };
      var b = function(x) {
        if (!x.textSelector && !!x.config.showFullScreen) {
          var v = x.$toolbarElem, M = m.default(`<div class="w-e-menu" data-title="\u5168\u5C4F">
            <i class="` + T + `"></i>
        </div>`);
          M.on("click", function(y) {
            var h, E = (0, f.default)(h = m.default(y.currentTarget)).call(h, "i");
            E.hasClass(T) ? (M.attr("data-title", "\u53D6\u6D88\u5168\u5C4F"), o.setFullScreen(x)) : (M.attr("data-title", "\u5168\u5C4F"), o.setUnFullScreen(x));
          }), v.append(M);
        }
      };
      o.default = b;
    }, function(l, o, t) {
      var s = t(20), u = t(422);
      u = u.__esModule ? u.default : u, typeof u == "string" && (u = [[l.i, u, ""]]);
      var f = {};
      f.insert = "head", f.singleton = !1, s(u, f), l.exports = u.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-full-screen-editor {
  position: fixed;
  width: 100%!important;
  height: 100%!important;
  left: 0;
  top: 0;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(31));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = function(T, S) {
        var w, b = T.isEnable ? T.$textElem : (0, f.default)(w = T.$textContainerElem).call(w, ".w-e-content-mantle"), g = (0, f.default)(b).call(b, "[id='" + S + "']"), x = g.getOffsetData().top;
        b.scrollTop(x);
      };
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(128)), m = { menu: 2, panel: 2, toolbar: 1, tooltip: 1, textContainer: 1 }, T = function() {
        function S() {
          this.tier = m, this.baseZIndex = d.default.zIndex;
        }
        return S.prototype.get = function(w) {
          return w && this.tier[w] ? this.baseZIndex + this.tier[w] : this.baseZIndex;
        }, S.prototype.init = function(w) {
          this.baseZIndex == d.default.zIndex && (this.baseZIndex = w.config.zIndex);
        }, S;
      }();
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(70)), d = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 });
      var m = t(2), T = m.__importDefault(t(426)), S = t(6), w = t(7);
      function b(x, v) {
        return (0, f.default)(x).call(x, function(M) {
          var y = M.type, h = M.target, E = M.attributeName;
          return y != "attributes" || y == "attributes" && (E == "contenteditable" || h != v);
        });
      }
      var g = function(x) {
        m.__extends(v, x);
        function v(M) {
          var y = x.call(this, function(h, E) {
            var C;
            if (h = b(h, E.target), (C = y.data).push.apply(C, h), M.isCompatibleMode)
              y.asyncSave();
            else if (!M.isComposing)
              return y.asyncSave();
          }) || this;
          return y.editor = M, y.data = [], y.asyncSave = w.EMPTY_FN, y;
        }
        return v.prototype.save = function() {
          this.data.length && (this.editor.history.save(this.data), this.data.length = 0, this.emit());
        }, v.prototype.emit = function() {
          var M;
          (0, d.default)(M = this.editor.txt.eventHooks.changeEvents).call(M, function(y) {
            return y();
          });
        }, v.prototype.observe = function() {
          var M = this;
          x.prototype.observe.call(this, this.editor.$textElem.elems[0]);
          var y = this.editor.config.onchangeTimeout;
          this.asyncSave = S.debounce(function() {
            M.save();
          }, y), this.editor.isCompatibleMode || this.editor.$textElem.on("compositionend", function() {
            M.asyncSave();
          });
        }, v;
      }(T.default);
      o.default = g;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = function() {
        function d(m, T) {
          var S = this;
          this.options = { subtree: !0, childList: !0, attributes: !0, attributeOldValue: !0, characterData: !0, characterDataOldValue: !0 }, this.callback = function(w) {
            m(w, S);
          }, this.observer = new MutationObserver(this.callback), T && (this.options = T);
        }
        return (0, u.default)(d.prototype, "target", { get: function() {
          return this.node;
        }, enumerable: !1, configurable: !0 }), d.prototype.observe = function(m) {
          this.node instanceof Node || (this.node = m, this.connect());
        }, d.prototype.connect = function() {
          if (this.node)
            return this.observer.observe(this.node, this.options), this;
          throw new Error("\u8FD8\u672A\u521D\u59CB\u5316\u7ED1\u5B9A\uFF0C\u8BF7\u60A8\u5148\u7ED1\u5B9A\u6709\u6548\u7684 Node \u8282\u70B9");
        }, d.prototype.disconnect = function() {
          var m = this.observer.takeRecords();
          m.length && this.callback(m), this.observer.disconnect();
        }, d;
      }();
      o.default = f;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(428)), m = f.__importDefault(t(435)), T = f.__importDefault(t(436)), S = function() {
        function w(b) {
          this.editor = b, this.content = new d.default(b), this.scroll = new m.default(b), this.range = new T.default(b);
        }
        return (0, u.default)(w.prototype, "size", {
          get: function() {
            return this.scroll.size;
          },
          enumerable: !1,
          configurable: !0
        }), w.prototype.observe = function() {
          this.content.observe(), this.scroll.observe(), !this.editor.isCompatibleMode && this.range.observe();
        }, w.prototype.save = function(b) {
          b.length && (this.content.save(b), this.scroll.save(), !this.editor.isCompatibleMode && this.range.save());
        }, w.prototype.revoke = function() {
          this.editor.change.disconnect();
          var b = this.content.revoke();
          b && (this.scroll.revoke(), this.editor.isCompatibleMode || (this.range.revoke(), this.editor.$textElem.focus())), this.editor.change.connect(), b && this.editor.change.emit();
        }, w.prototype.restore = function() {
          this.editor.change.disconnect();
          var b = this.content.restore();
          b && (this.scroll.restore(), this.editor.isCompatibleMode || (this.range.restore(), this.editor.$textElem.focus())), this.editor.change.connect(), b && this.editor.change.emit();
        }, w;
      }();
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(429)), m = f.__importDefault(t(433)), T = function() {
        function S(w) {
          this.editor = w;
        }
        return S.prototype.observe = function() {
          this.editor.isCompatibleMode ? this.cache = new m.default(this.editor) : this.cache = new d.default(this.editor), this.cache.observe();
        }, S.prototype.save = function(w) {
          this.editor.isCompatibleMode ? this.cache.save() : this.cache.compile(w);
        }, S.prototype.revoke = function() {
          var w;
          return (w = this.cache) === null || w === void 0 ? void 0 : w.revoke();
        }, S.prototype.restore = function() {
          var w;
          return (w = this.cache) === null || w === void 0 ? void 0 : w.restore();
        }, S;
      }();
      o.default = T;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(98)), m = f.__importDefault(t(431)), T = t(432), S = function(w) {
        f.__extends(b, w);
        function b(g) {
          var x = w.call(this, g.config.historyMaxSize) || this;
          return x.editor = g, x;
        }
        return b.prototype.observe = function() {
          this.resetMaxSize(this.editor.config.historyMaxSize);
        }, b.prototype.compile = function(g) {
          return this.save(m.default(g)), this;
        }, b.prototype.revoke = function() {
          return w.prototype.revoke.call(this, function(g) {
            T.revoke(g);
          });
        }, b.prototype.restore = function() {
          return w.prototype.restore.call(this, function(g) {
            T.restore(g);
          });
        }, b;
      }(d.default);
      o.default = S;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 }), o.CeilStack = void 0;
      var f = function() {
        function d(m) {
          m === void 0 && (m = 0), this.data = [], this.max = 0, this.reset = !1, m = Math.abs(m), m && (this.max = m);
        }
        return d.prototype.resetMax = function(m) {
          m = Math.abs(m), !this.reset && !isNaN(m) && (this.max = m, this.reset = !0);
        }, (0, u.default)(d.prototype, "size", {
          get: function() {
            return this.data.length;
          },
          enumerable: !1,
          configurable: !0
        }), d.prototype.instack = function(m) {
          return this.data.unshift(m), this.max && this.size > this.max && (this.data.length = this.max), this;
        }, d.prototype.outstack = function() {
          return this.data.shift();
        }, d.prototype.clear = function() {
          return this.data.length = 0, this;
        }, d;
      }();
      o.CeilStack = f;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(4)), d = s(t(27));
      (0, u.default)(o, "__esModule", { value: !0 }), o.compliePosition = o.complieNodes = o.compileValue = o.compileType = void 0;
      var m = t(6);
      function T(M) {
        switch (M) {
          case "childList":
            return "node";
          case "attributes":
            return "attr";
          default:
            return "text";
        }
      }
      o.compileType = T;
      function S(M) {
        switch (M.type) {
          case "attributes":
            return M.target.getAttribute(M.attributeName) || "";
          case "characterData":
            return M.target.textContent;
          default:
            return "";
        }
      }
      o.compileValue = S;
      function w(M) {
        var y = {};
        return M.addedNodes.length && (y.add = m.toArray(M.addedNodes)), M.removedNodes.length && (y.remove = m.toArray(M.removedNodes)), y;
      }
      o.complieNodes = w;
      function b(M) {
        var y;
        return M.previousSibling ? y = { type: "before", target: M.previousSibling } : M.nextSibling ? y = { type: "after", target: M.nextSibling } : y = { type: "parent", target: M.target }, y;
      }
      o.compliePosition = b;
      var g = ["UL", "OL", "H1", "H2", "H3", "H4", "H5", "H6"];
      function x(M) {
        var y = [], h = !1, E = [];
        return (0, f.default)(M).call(M, function(C, R) {
          var F = { type: T(C.type), target: C.target, attr: C.attributeName || "", value: S(C) || "", oldValue: C.oldValue || "", nodes: w(C), position: b(C) };
          if (y.push(F), !!m.UA.isFirefox) {
            if (h && C.addedNodes.length && C.addedNodes[0].nodeType == 1) {
              var B = C.addedNodes[0], O = { type: "node", target: B, attr: "", value: "", oldValue: "", nodes: { add: [h] }, position: { type: "parent", target: B } };
              (0, d.default)(g).call(g, B.nodeName) != -1 ? (O.nodes.add = m.toArray(B.childNodes), y.push(O)) : h.nodeType == 3 ? (v(B, E) && (O.nodes.add = m.toArray(B.childNodes)), y.push(O)) : (0, d.default)(g).call(g, C.target.nodeName) == -1 && v(B, E) && (O.nodes.add = m.toArray(B.childNodes), y.push(O));
            }
            F.type == "node" && C.removedNodes.length == 1 ? (h = C.removedNodes[0], E.push(h)) : (h = !1, E.length = 0);
          }
        }), y;
      }
      o.default = x;
      function v(M, y) {
        for (var h = 0, E = y.length - 1; E > 0 && M.contains(y[E]); E--)
          h++;
        return h;
      }
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(4)), d = s(t(94));
      (0, u.default)(o, "__esModule", { value: !0 }), o.restore = o.revoke = void 0;
      function m(E, C) {
        var R = E.position.target;
        switch (E.position.type) {
          case "before":
            R.nextSibling ? (R = R.nextSibling, (0, f.default)(C).call(C, function(F) {
              E.target.insertBefore(F, R);
            })) : (0, f.default)(C).call(C, function(F) {
              E.target.appendChild(F);
            });
            break;
          case "after":
            (0, f.default)(C).call(C, function(F) {
              E.target.insertBefore(F, R);
            });
            break;
          default:
            (0, f.default)(C).call(C, function(F) {
              R.appendChild(F);
            });
            break;
        }
      }
      function T(E) {
        for (var C = 0, R = (0, d.default)(E.nodes); C < R.length; C++) {
          var F = R[C], B = F[0], O = F[1];
          switch (B) {
            case "add":
              (0, f.default)(O).call(O, function(z) {
                E.target.removeChild(z);
              });
              break;
            default: {
              m(E, O);
              break;
            }
          }
        }
      }
      function S(E) {
        var C = E.target;
        E.oldValue == null ? C.removeAttribute(E.attr) : C.setAttribute(E.attr, E.oldValue);
      }
      function w(E) {
        E.target.textContent = E.oldValue;
      }
      var b = { node: T, text: w, attr: S };
      function g(E) {
        for (var C = E.length - 1; C > -1; C--) {
          var R = E[C];
          b[R.type](R);
        }
      }
      o.revoke = g;
      function x(E) {
        for (var C = 0, R = (0, d.default)(E.nodes); C < R.length; C++) {
          var F = R[C], B = F[0], O = F[1];
          switch (B) {
            case "add": {
              m(E, O);
              break;
            }
            default: {
              (0, f.default)(O).call(O, function(z) {
                z.parentNode.removeChild(z);
              });
              break;
            }
          }
        }
      }
      function v(E) {
        E.target.textContent = E.value;
      }
      function M(E) {
        E.target.setAttribute(E.attr, E.value);
      }
      var y = { node: x, text: v, attr: M };
      function h(E) {
        for (var C = 0, R = E; C < R.length; C++) {
          var F = R[C];
          y[F.type](F);
        }
      }
      o.restore = h;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(434), d = function() {
        function m(T) {
          this.editor = T, this.data = new f.TailChain();
        }
        return m.prototype.observe = function() {
          this.data.resetMax(this.editor.config.historyMaxSize), this.data.insertLast(this.editor.$textElem.html());
        }, m.prototype.save = function() {
          return this.data.insertLast(this.editor.$textElem.html()), this;
        }, m.prototype.revoke = function() {
          var T = this.data.prev();
          return T ? (this.editor.$textElem.html(T), !0) : !1;
        }, m.prototype.restore = function() {
          var T = this.data.next();
          return T ? (this.editor.$textElem.html(T), !0) : !1;
        }, m;
      }();
      o.default = d;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(91));
      (0, u.default)(o, "__esModule", { value: !0 }), o.TailChain = void 0;
      var d = function() {
        function m() {
          this.data = [], this.max = 0, this.point = 0, this.isRe = !1;
        }
        return m.prototype.resetMax = function(T) {
          T = Math.abs(T), T && (this.max = T);
        }, (0, u.default)(m.prototype, "size", {
          get: function() {
            return this.data.length;
          },
          enumerable: !1,
          configurable: !0
        }), m.prototype.insertLast = function(T) {
          if (this.isRe) {
            var S;
            (0, f.default)(S = this.data).call(S, this.point + 1), this.isRe = !1;
          }
          for (this.data.push(T); this.max && this.size > this.max; )
            this.data.shift();
          return this.point = this.size - 1, this;
        }, m.prototype.current = function() {
          return this.data[this.point];
        }, m.prototype.prev = function() {
          if (!this.isRe && (this.isRe = !0), this.point--, this.point < 0) {
            this.point = 0;
            return;
          }
          return this.current();
        }, m.prototype.next = function() {
          if (!this.isRe && (this.isRe = !0), this.point++, this.point >= this.size) {
            this.point = this.size - 1;
            return;
          }
          return this.current();
        }, m;
      }();
      o.TailChain = d;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(98)), m = function(T) {
        f.__extends(S, T);
        function S(w) {
          var b = T.call(this, w.config.historyMaxSize) || this;
          return b.editor = w, b.last = 0, b.target = w.$textElem.elems[0], b;
        }
        return S.prototype.observe = function() {
          var w = this;
          this.target = this.editor.$textElem.elems[0], this.editor.$textElem.on("scroll", function() {
            w.last = w.target.scrollTop;
          }), this.resetMaxSize(this.editor.config.historyMaxSize);
        }, S.prototype.save = function() {
          return T.prototype.save.call(this, [this.last, this.target.scrollTop]), this;
        }, S.prototype.revoke = function() {
          var w = this;
          return T.prototype.revoke.call(this, function(b) {
            w.target.scrollTop = b[0];
          });
        }, S.prototype.restore = function() {
          var w = this;
          return T.prototype.restore.call(this, function(b) {
            w.target.scrollTop = b[1];
          });
        }, S;
      }(d.default);
      o.default = m;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = t(2), d = f.__importDefault(t(98)), m = f.__importDefault(t(3)), T = t(6);
      function S(b) {
        return { start: [b.startContainer, b.startOffset], end: [b.endContainer, b.endOffset], root: b.commonAncestorContainer, collapsed: b.collapsed };
      }
      var w = function(b) {
        f.__extends(g, b);
        function g(x) {
          var v = b.call(this, x.config.historyMaxSize) || this;
          return v.editor = x, v.lastRange = S(document.createRange()), v.root = x.$textElem.elems[0], v.updateLastRange = T.debounce(function() {
            v.lastRange = S(v.rangeHandle);
          }, x.config.onchangeTimeout), v;
        }
        return (0, u.default)(g.prototype, "rangeHandle", {
          get: function() {
            var v = document.getSelection();
            return v && v.rangeCount ? v.getRangeAt(0) : document.createRange();
          },
          enumerable: !1,
          configurable: !0
        }), g.prototype.observe = function() {
          var x = this;
          this.root = this.editor.$textElem.elems[0], this.resetMaxSize(this.editor.config.historyMaxSize);
          function v() {
            var y = x.rangeHandle;
            (x.root === y.commonAncestorContainer || x.root.contains(y.commonAncestorContainer)) && (x.editor.isComposing || x.updateLastRange());
          }
          function M(y) {
            (y.key == "Backspace" || y.key == "Delete") && x.updateLastRange();
          }
          m.default(document).on("selectionchange", v), this.editor.beforeDestroy(function() {
            m.default(document).off("selectionchange", v);
          }), x.editor.$textElem.on("keydown", M);
        }, g.prototype.save = function() {
          var x = S(this.rangeHandle);
          return b.prototype.save.call(this, [this.lastRange, x]), this.lastRange = x, this;
        }, g.prototype.set = function(x) {
          try {
            if (x) {
              var v = this.rangeHandle;
              return v.setStart.apply(v, x.start), v.setEnd.apply(v, x.end), this.editor.menus.changeActive(), !0;
            }
          } catch {
            return !1;
          }
          return !1;
        }, g.prototype.revoke = function() {
          var x = this;
          return b.prototype.revoke.call(this, function(v) {
            x.set(v[0]);
          });
        }, g.prototype.restore = function() {
          var x = this;
          return b.prototype.restore.call(this, function(v) {
            x.set(v[1]);
          });
        }, g;
      }(d.default);
      o.default = w;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(31));
      (0, u.default)(o, "__esModule", { value: !0 });
      var d = t(2), m = d.__importDefault(t(3));
      t(438);
      function T(S) {
        var w = !1, b, g;
        S.txt.eventHooks.changeEvents.push(function() {
          w && (0, f.default)(b).call(b, ".w-e-content-preview").html(S.$textElem.html());
        });
        function x() {
          if (!w) {
            S.$textElem.hide();
            var M = S.zIndex.get("textContainer"), y = S.txt.html();
            b = m.default('<div class="w-e-content-mantle" style="z-index:' + M + `">
                <div class="w-e-content-preview w-e-text">` + y + `</div>
            </div>`), S.$textContainerElem.append(b);
            var h = S.zIndex.get("menu");
            g = m.default('<div class="w-e-menue-mantle" style="z-index:' + h + '"></div>'), S.$toolbarElem.append(g), w = !0, S.isEnable = !1;
          }
        }
        function v() {
          !w || (b.remove(), g.remove(), S.$textElem.show(), w = !1, S.isEnable = !0);
        }
        return { disable: x, enable: v };
      }
      o.default = T;
    }, function(l, o, t) {
      var s = t(20), u = t(439);
      u = u.__esModule ? u.default : u, typeof u == "string" && (u = [[l.i, u, ""]]);
      var f = {};
      f.insert = "head", f.singleton = !1, s(u, f), l.exports = u.locals || {};
    }, function(l, o, t) {
      var s = t(21);
      o = s(!1), o.push([l.i, `.w-e-content-mantle {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.w-e-content-mantle .w-e-content-preview {
  width: 100%;
  min-height: 100%;
  padding: 0 10px;
  line-height: 1.5;
}
.w-e-content-mantle .w-e-content-preview img {
  cursor: default;
}
.w-e-content-mantle .w-e-content-preview img:hover {
  box-shadow: none;
}
.w-e-menue-mantle {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
`, ""]), l.exports = o;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
      var f = function() {
        function d(m) {
          var T = this;
          this.editor = m;
          var S = function() {
            var b = document.activeElement;
            b === m.$textElem.elems[0] && T.emit();
          };
          window.document.addEventListener("selectionchange", S), this.editor.beforeDestroy(function() {
            window.document.removeEventListener("selectionchange", S);
          });
        }
        return d.prototype.emit = function() {
          var m, T = this.editor.config.onSelectionChange;
          if (T) {
            var S = this.editor.selection;
            S.saveRange(), S.isSelectionEmpty() || T({
              text: S.getSelectionText(),
              html: (m = S.getSelectionContainerElem()) === null || m === void 0 ? void 0 : m.elems[0].innerHTML,
              selection: S
            });
          }
        }, d;
      }();
      o.default = f;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1)), f = s(t(127)), d = s(t(94)), m = s(t(4));
      (0, u.default)(o, "__esModule", { value: !0 }), o.registerPlugin = void 0;
      var T = t(2), S = T.__importDefault(t(87)), w = t(6);
      function b(x, v, M) {
        if (!x)
          throw new TypeError("name is not define");
        if (!v)
          throw new TypeError("options is not define");
        if (!v.intention)
          throw new TypeError("options.intention is not define");
        if (v.intention && typeof v.intention != "function")
          throw new TypeError("options.intention is not function");
        M[x] && console.warn("plugin " + x + " \u5DF2\u5B58\u5728\uFF0C\u5DF2\u8986\u76D6\u3002"), M[x] = v;
      }
      o.registerPlugin = b;
      function g(x) {
        var v = (0, f.default)({}, w.deepClone(S.default.globalPluginsFunctionList), w.deepClone(x.pluginsFunctionList)), M = (0, d.default)(v);
        (0, m.default)(M).call(M, function(y) {
          var h = y[0], E = y[1];
          console.info("plugin " + h + " initializing");
          var C = E.intention, R = E.config;
          C(x, R), console.info("plugin " + h + " initialization complete");
        });
      }
      o.default = g;
    }, function(l, o, t) {
      var s = t(0), u = s(t(1));
      (0, u.default)(o, "__esModule", { value: !0 });
    }]).default;
  });
})(Id);
var Rg = /* @__PURE__ */ Mg(Id.exports), Pg = "fcEditor", Ig = 1, Lg = Object.assign || function(c) {
  for (var A, l = 1; l < arguments.length; l++)
    for (var o in A = arguments[l], A)
      Object.prototype.hasOwnProperty.call(A, o) && (c[o] = A[o]);
  return c;
}, Ng = Pn({
  name: Pg,
  props: {
    modelValue: String,
    init: Function,
    disabled: Boolean,
    config: Object
  },
  inheritAttrs: !1,
  emits: ["update:modelValue"],
  data: function() {
    return {
      editor: {},
      uni: Ig++
    };
  },
  watch: {
    disabled: function() {
      this.enable();
    },
    modelValue: function(A) {
      A !== this.editor.txt.html() && this.editor.txt.html(A);
    }
  },
  methods: {
    enable: function() {
      this.disabled ? this.editor.disable() : this.editor.enable();
    },
    result: function() {
      this.$emit("update:modelValue", this.editor.txt.html());
    }
  },
  mounted: function() {
    var A = this;
    this.$nextTick(function() {
      A.editor = new Rg("#editor".concat(A.uni)), A.editor.config.zIndex = 2, A.editor.config.force = !1, A.config && Lg(A.editor.config, A.config), A.init && A.init(A.editor), A.editor.create(), A.enable(), A.editor.txt.html(A.modelValue);
    });
  },
  render: function() {
    var A = wg({}, this.$attrs);
    return delete A.id, Je("div", Wv(A, {
      onInput: this.result,
      id: "editor".concat(this.uni),
      style: "line-height: normal;"
    }), null);
  },
  beforeDestroy: function() {
    this.editor && this.editor.destroy(), this.editor = null;
  }
});
const Ld = (c, A) => {
  Lt.component(c, A), Ss.component(c, A);
};
Lt.component("draggable", xs);
Lt.component("DragTool", Jh);
Lt.component("DragBox", pg);
Lt.component("Validate", vg);
Lt.component("Struct", og);
Lt.component("Fetch", fg);
Lt.component("Required", yg);
Lt.component("TableOptions", Tg);
Ld("FcEditor", Ng);
Lt.register("_fc", {
  load(c, A) {
    A._id = St();
  }
});
Lt.register("_fc_tool", {
  load(c, A) {
    A.props.unique = St();
  }
});
const Fg = function(c) {
  c.component("FcDesigner", yr);
};
yr.install = Fg;
yr.makeOptionsRule = vi;
yr.formCreate = Ss;
yr.designerForm = Lt;
yr.component = Ld;
yr.useLocale = Rd;
yr.t = gs;
export {
  yr as default,
  Lt as designerForm,
  Ss as formCreate,
  Fg as install
};
