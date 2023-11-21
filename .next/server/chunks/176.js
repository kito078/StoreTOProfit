"use strict";
exports.id = 176;
exports.ids = [176];
exports.modules = {

/***/ 3176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "o": () => (/* binding */ JeenaAccordion2)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);



const defaultAccordionData = [
    {
        id: 1,
        title: "Build A Group Chat App With Vanilla JS, Twilio And Node.js"
    },
    {
        id: 2,
        title: "Measuring The Performance Of Typefaces For Users Part Ukraine, A Charity Conference On The Future Of Tech ?",
        largeDescription: true
    },
    {
        id: 3,
        title: "How To Apply UX Principles To Embedded Systems: Learnings From The Field ?"
    },
    {
        id: 4,
        title: "Smashing Podcast Episode 47 With Sara Soueidan: Why Does Accessibility Matter?"
    },
    {
        id: 5,
        title: "How To Apply UX Principles To Embedded Systems: Learnings From The Field ?"
    },
    {
        id: 6,
        title: "Rethinking Server-Timing As A Critical Monitoring Tool ?"
    },
    {
        id: 7,
        title: "How To Use Google CrUX To Analyze And Compare The Performance Of JS Frameworks ?"
    },
    {
        id: 8,
        title: "Smashing Podcast Episode 47 With Sara Soueidan: Why Does Accessibility Matter?"
    }
];
const JeenaAccordion = ({ defaultActive , accordions , accordionsData  })=>{
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultActive ? defaultActive : 2);
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(accordionsData ? accordionsData : defaultAccordionData);
    const toggleAccordion = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{
        setActive(value === active ? null : value);
    }, [
        active
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Accordion, {
        defaultActiveKey: active,
        children: data.map((accordion)=>accordions.includes(accordion.id) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "accordion-item",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        className: "accordion-header",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Accordion.Toggle, {
                            as: "button",
                            className: `accordion-button ${accordion.id === active ? "" : "collapsed"}`,
                            eventKey: accordion.id,
                            onClick: ()=>toggleAccordion(accordion.id),
                            children: accordion.title
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Accordion.Collapse, {
                        eventKey: accordion.id,
                        "data-bs-parent": "#faq-accordion",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "accordion-body",
                            children: accordion.largeDescription ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "col-lg-6",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment blinded by desire, that they cannot foresee the pain and trouble bound"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: "list-style-one my-15",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: "Comprehensive UI/UX Assessment"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: "Deep Contextual Research and 360\xb0 Planning"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: "Wireframing & Prototyping"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-lg-6 my-15 text-lg-end",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "assets/images/about/inner-faq.jpg",
                                                    alt: "Faqs"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Sorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam incidunt debitis magnam sit dicta asperiores quidem cum, blanditiis harum non nulla, esse sapiente doloremque, dolores natus! Harum consectetur saepe iure obcaecati illo, maiores minima in dolorem, deleniti unde aut similique fugit earum. Numquam ut ex ipsum molestiae, consequatur obcaecati? Velit."
                            })
                        })
                    })
                ]
            }))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JeenaAccordion);
const JeenaAccordion2 = ({ accordionsData  })=>{
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const toggleAccordion = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{
        setActive(value === active ? null : value);
    }, [
        active
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Accordion, {
        defaultActiveKey: active,
        children: accordionsData.map((accordion)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "accordion-item",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        className: "accordion-header",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Accordion.Toggle, {
                            as: "button",
                            className: `accordion-button ${accordion.id === active ? "" : "collapsed"}`,
                            eventKey: accordion.id,
                            onClick: ()=>toggleAccordion(accordion.id),
                            children: accordion.title
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Accordion.Collapse, {
                        eventKey: accordion.id,
                        "data-bs-parent": "#faq-accordion",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "accordion-body",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Sed ut perspiciatis unde omniste natus voluptatem accusantium doloremque laudantium totam rem aperiam quae abillo inventore veritatis quasi architecto beatae vitae dicta sunt explicabo."
                            })
                        })
                    })
                ]
            }))
    });
};



/***/ })

};
;