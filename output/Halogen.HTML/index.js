// Generated by purs version 0.14.4
"use strict";
var Data_Function = require("../Data.Function/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Halogen_Component = require("../Halogen.Component/index.js");
var Halogen_HTML_Core = require("../Halogen.HTML.Core/index.js");
var Halogen_HTML_Elements = require("../Halogen.HTML.Elements/index.js");
var Halogen_HTML_Properties = require("../Halogen.HTML.Properties/index.js");
var Halogen_VDom_Thunk = require("../Halogen.VDom.Thunk/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var slot_ = function (dictCons) {
    return function (dictIsSymbol) {
        return function (dictOrd) {
            return function (label) {
                return function (p) {
                    return function (component) {
                        return function (input) {
                            return Halogen_HTML_Core.widget(new Halogen_Component.ComponentSlot(Halogen_Component.componentSlot()(dictIsSymbol)(dictOrd)(label)(p)(component)(input)(Data_Function["const"](Data_Maybe.Nothing.value))));
                        };
                    };
                };
            };
        };
    };
};
var slot = function (dictCons) {
    return function (dictIsSymbol) {
        return function (dictOrd) {
            return function (label) {
                return function (p) {
                    return function (component) {
                        return function (input) {
                            return function (outputQuery) {
                                return Halogen_HTML_Core.widget(new Halogen_Component.ComponentSlot(Halogen_Component.componentSlot()(dictIsSymbol)(dictOrd)(label)(p)(component)(input)(function ($6) {
                                    return Data_Maybe.Just.create(outputQuery($6));
                                })));
                            };
                        };
                    };
                };
            };
        };
    };
};
var memoized = function (eqFn) {
    return function (f) {
        return function (a) {
            return Halogen_HTML_Core.widget(new Halogen_Component.ThunkSlot(Halogen_VDom_Thunk.thunked(eqFn)(f)(a)));
        };
    };
};
var lazy3 = function (f) {
    return function (a) {
        return function (b) {
            return function (c) {
                return Halogen_HTML_Core.widget(new Halogen_Component.ThunkSlot(Halogen_VDom_Thunk.thunk3(f, a, b, c)));
            };
        };
    };
};
var lazy2 = function (f) {
    return function (a) {
        return function (b) {
            return Halogen_HTML_Core.widget(new Halogen_Component.ThunkSlot(Halogen_VDom_Thunk.thunk2(f, a, b)));
        };
    };
};
var lazy = function (f) {
    return function (a) {
        return Halogen_HTML_Core.widget(new Halogen_Component.ThunkSlot(Halogen_VDom_Thunk.thunk1(f, a)));
    };
};
var fromPlainHTML = Unsafe_Coerce.unsafeCoerce;
module.exports = {
    fromPlainHTML: fromPlainHTML,
    slot: slot,
    slot_: slot_,
    memoized: memoized,
    lazy: lazy,
    lazy2: lazy2,
    lazy3: lazy3,
    AttrName: Halogen_HTML_Core.AttrName,
    ClassName: Halogen_HTML_Core.ClassName,
    ElemName: Halogen_HTML_Core.ElemName,
    HTML: Halogen_HTML_Core.HTML,
    Namespace: Halogen_HTML_Core.Namespace,
    PropName: Halogen_HTML_Core.PropName,
    handler: Halogen_HTML_Core.handler,
    text: Halogen_HTML_Core.text,
    a: Halogen_HTML_Elements.a,
    a_: Halogen_HTML_Elements.a_,
    abbr: Halogen_HTML_Elements.abbr,
    abbr_: Halogen_HTML_Elements.abbr_,
    address: Halogen_HTML_Elements.address,
    address_: Halogen_HTML_Elements.address_,
    area: Halogen_HTML_Elements.area,
    article: Halogen_HTML_Elements.article,
    article_: Halogen_HTML_Elements.article_,
    aside: Halogen_HTML_Elements.aside,
    aside_: Halogen_HTML_Elements.aside_,
    audio: Halogen_HTML_Elements.audio,
    audio_: Halogen_HTML_Elements.audio_,
    b: Halogen_HTML_Elements.b,
    b_: Halogen_HTML_Elements.b_,
    base: Halogen_HTML_Elements.base,
    bdi: Halogen_HTML_Elements.bdi,
    bdi_: Halogen_HTML_Elements.bdi_,
    bdo: Halogen_HTML_Elements.bdo,
    bdo_: Halogen_HTML_Elements.bdo_,
    blockquote: Halogen_HTML_Elements.blockquote,
    blockquote_: Halogen_HTML_Elements.blockquote_,
    body: Halogen_HTML_Elements.body,
    body_: Halogen_HTML_Elements.body_,
    br: Halogen_HTML_Elements.br,
    br_: Halogen_HTML_Elements.br_,
    button: Halogen_HTML_Elements.button,
    button_: Halogen_HTML_Elements.button_,
    canvas: Halogen_HTML_Elements.canvas,
    caption: Halogen_HTML_Elements.caption,
    caption_: Halogen_HTML_Elements.caption_,
    cite: Halogen_HTML_Elements.cite,
    cite_: Halogen_HTML_Elements.cite_,
    code: Halogen_HTML_Elements.code,
    code_: Halogen_HTML_Elements.code_,
    col: Halogen_HTML_Elements.col,
    colgroup: Halogen_HTML_Elements.colgroup,
    colgroup_: Halogen_HTML_Elements.colgroup_,
    command: Halogen_HTML_Elements.command,
    datalist: Halogen_HTML_Elements.datalist,
    datalist_: Halogen_HTML_Elements.datalist_,
    dd: Halogen_HTML_Elements.dd,
    dd_: Halogen_HTML_Elements.dd_,
    del: Halogen_HTML_Elements.del,
    del_: Halogen_HTML_Elements.del_,
    details: Halogen_HTML_Elements.details,
    details_: Halogen_HTML_Elements.details_,
    dfn: Halogen_HTML_Elements.dfn,
    dfn_: Halogen_HTML_Elements.dfn_,
    dialog: Halogen_HTML_Elements.dialog,
    dialog_: Halogen_HTML_Elements.dialog_,
    div: Halogen_HTML_Elements.div,
    div_: Halogen_HTML_Elements.div_,
    dl: Halogen_HTML_Elements.dl,
    dl_: Halogen_HTML_Elements.dl_,
    dt: Halogen_HTML_Elements.dt,
    dt_: Halogen_HTML_Elements.dt_,
    element: Halogen_HTML_Elements.element,
    elementNS: Halogen_HTML_Elements.elementNS,
    em: Halogen_HTML_Elements.em,
    em_: Halogen_HTML_Elements.em_,
    embed: Halogen_HTML_Elements.embed,
    embed_: Halogen_HTML_Elements.embed_,
    fieldset: Halogen_HTML_Elements.fieldset,
    fieldset_: Halogen_HTML_Elements.fieldset_,
    figcaption: Halogen_HTML_Elements.figcaption,
    figcaption_: Halogen_HTML_Elements.figcaption_,
    figure: Halogen_HTML_Elements.figure,
    figure_: Halogen_HTML_Elements.figure_,
    footer: Halogen_HTML_Elements.footer,
    footer_: Halogen_HTML_Elements.footer_,
    form: Halogen_HTML_Elements.form,
    form_: Halogen_HTML_Elements.form_,
    h1: Halogen_HTML_Elements.h1,
    h1_: Halogen_HTML_Elements.h1_,
    h2: Halogen_HTML_Elements.h2,
    h2_: Halogen_HTML_Elements.h2_,
    h3: Halogen_HTML_Elements.h3,
    h3_: Halogen_HTML_Elements.h3_,
    h4: Halogen_HTML_Elements.h4,
    h4_: Halogen_HTML_Elements.h4_,
    h5: Halogen_HTML_Elements.h5,
    h5_: Halogen_HTML_Elements.h5_,
    h6: Halogen_HTML_Elements.h6,
    h6_: Halogen_HTML_Elements.h6_,
    head: Halogen_HTML_Elements.head,
    head_: Halogen_HTML_Elements.head_,
    header: Halogen_HTML_Elements.header,
    header_: Halogen_HTML_Elements.header_,
    hr: Halogen_HTML_Elements.hr,
    hr_: Halogen_HTML_Elements.hr_,
    html: Halogen_HTML_Elements.html,
    html_: Halogen_HTML_Elements.html_,
    i: Halogen_HTML_Elements.i,
    i_: Halogen_HTML_Elements.i_,
    iframe: Halogen_HTML_Elements.iframe,
    img: Halogen_HTML_Elements.img,
    input: Halogen_HTML_Elements.input,
    ins: Halogen_HTML_Elements.ins,
    ins_: Halogen_HTML_Elements.ins_,
    kbd: Halogen_HTML_Elements.kbd,
    kbd_: Halogen_HTML_Elements.kbd_,
    keyed: Halogen_HTML_Elements.keyed,
    keyedNS: Halogen_HTML_Elements.keyedNS,
    label: Halogen_HTML_Elements.label,
    label_: Halogen_HTML_Elements.label_,
    legend: Halogen_HTML_Elements.legend,
    legend_: Halogen_HTML_Elements.legend_,
    li: Halogen_HTML_Elements.li,
    li_: Halogen_HTML_Elements.li_,
    link: Halogen_HTML_Elements.link,
    main: Halogen_HTML_Elements.main,
    main_: Halogen_HTML_Elements.main_,
    map: Halogen_HTML_Elements.map,
    map_: Halogen_HTML_Elements.map_,
    mark: Halogen_HTML_Elements.mark,
    mark_: Halogen_HTML_Elements.mark_,
    menu: Halogen_HTML_Elements.menu,
    menu_: Halogen_HTML_Elements.menu_,
    menuitem: Halogen_HTML_Elements.menuitem,
    menuitem_: Halogen_HTML_Elements.menuitem_,
    meta: Halogen_HTML_Elements.meta,
    meter: Halogen_HTML_Elements.meter,
    meter_: Halogen_HTML_Elements.meter_,
    nav: Halogen_HTML_Elements.nav,
    nav_: Halogen_HTML_Elements.nav_,
    noscript: Halogen_HTML_Elements.noscript,
    noscript_: Halogen_HTML_Elements.noscript_,
    object: Halogen_HTML_Elements.object,
    object_: Halogen_HTML_Elements.object_,
    ol: Halogen_HTML_Elements.ol,
    ol_: Halogen_HTML_Elements.ol_,
    optgroup: Halogen_HTML_Elements.optgroup,
    optgroup_: Halogen_HTML_Elements.optgroup_,
    option: Halogen_HTML_Elements.option,
    option_: Halogen_HTML_Elements.option_,
    output: Halogen_HTML_Elements.output,
    output_: Halogen_HTML_Elements.output_,
    p: Halogen_HTML_Elements.p,
    p_: Halogen_HTML_Elements.p_,
    param: Halogen_HTML_Elements.param,
    pre: Halogen_HTML_Elements.pre,
    pre_: Halogen_HTML_Elements.pre_,
    progress: Halogen_HTML_Elements.progress,
    progress_: Halogen_HTML_Elements.progress_,
    q: Halogen_HTML_Elements.q,
    q_: Halogen_HTML_Elements.q_,
    rp: Halogen_HTML_Elements.rp,
    rp_: Halogen_HTML_Elements.rp_,
    rt: Halogen_HTML_Elements.rt,
    rt_: Halogen_HTML_Elements.rt_,
    ruby: Halogen_HTML_Elements.ruby,
    ruby_: Halogen_HTML_Elements.ruby_,
    samp: Halogen_HTML_Elements.samp,
    samp_: Halogen_HTML_Elements.samp_,
    script: Halogen_HTML_Elements.script,
    script_: Halogen_HTML_Elements.script_,
    section: Halogen_HTML_Elements.section,
    section_: Halogen_HTML_Elements.section_,
    select: Halogen_HTML_Elements.select,
    select_: Halogen_HTML_Elements.select_,
    small: Halogen_HTML_Elements.small,
    small_: Halogen_HTML_Elements.small_,
    source: Halogen_HTML_Elements.source,
    span: Halogen_HTML_Elements.span,
    span_: Halogen_HTML_Elements.span_,
    strong: Halogen_HTML_Elements.strong,
    strong_: Halogen_HTML_Elements.strong_,
    style: Halogen_HTML_Elements.style,
    style_: Halogen_HTML_Elements.style_,
    sub: Halogen_HTML_Elements.sub,
    sub_: Halogen_HTML_Elements.sub_,
    summary: Halogen_HTML_Elements.summary,
    summary_: Halogen_HTML_Elements.summary_,
    sup: Halogen_HTML_Elements.sup,
    sup_: Halogen_HTML_Elements.sup_,
    table: Halogen_HTML_Elements.table,
    table_: Halogen_HTML_Elements.table_,
    tbody: Halogen_HTML_Elements.tbody,
    tbody_: Halogen_HTML_Elements.tbody_,
    td: Halogen_HTML_Elements.td,
    td_: Halogen_HTML_Elements.td_,
    textarea: Halogen_HTML_Elements.textarea,
    tfoot: Halogen_HTML_Elements.tfoot,
    tfoot_: Halogen_HTML_Elements.tfoot_,
    th: Halogen_HTML_Elements.th,
    th_: Halogen_HTML_Elements.th_,
    thead: Halogen_HTML_Elements.thead,
    thead_: Halogen_HTML_Elements.thead_,
    time: Halogen_HTML_Elements.time,
    time_: Halogen_HTML_Elements.time_,
    title: Halogen_HTML_Elements.title,
    title_: Halogen_HTML_Elements.title_,
    tr: Halogen_HTML_Elements.tr,
    tr_: Halogen_HTML_Elements.tr_,
    track: Halogen_HTML_Elements.track,
    u: Halogen_HTML_Elements.u,
    u_: Halogen_HTML_Elements.u_,
    ul: Halogen_HTML_Elements.ul,
    ul_: Halogen_HTML_Elements.ul_,
    "var": Halogen_HTML_Elements["var"],
    var_: Halogen_HTML_Elements.var_,
    video: Halogen_HTML_Elements.video,
    video_: Halogen_HTML_Elements.video_,
    wbr: Halogen_HTML_Elements.wbr,
    withKeys: Halogen_HTML_Elements.withKeys,
    withKeys_: Halogen_HTML_Elements.withKeys_,
    attr: Halogen_HTML_Properties.attr,
    attrNS: Halogen_HTML_Properties.attrNS,
    prop: Halogen_HTML_Properties.prop
};
