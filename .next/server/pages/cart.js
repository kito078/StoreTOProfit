"use strict";
(() => {
var exports = {};
exports.id = 190;
exports.ids = [190];
exports.modules = {

/***/ 103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ cart)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/PageBanner.js
var PageBanner = __webpack_require__(4614);
// EXTERNAL MODULE: ./src/layout/Layout.js + 15 modules
var Layout = __webpack_require__(3175);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/PlusMinusBtn.js


const PlusMinusBtn = ()=>{
    const [value, setValue] = (0,external_react_.useState)(1);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "quantity-input",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "quantity-down",
                onClick: ()=>setValue(value == 1 ? 1 : value - 1),
                children: "--"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                className: "quantity",
                type: "text",
                defaultValue: 1,
                value: value,
                name: "quantity"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "quantity-up",
                onClick: ()=>setValue(value + 1),
                children: "+"
            })
        ]
    });
};
/* harmony default export */ const components_PlusMinusBtn = (/*#__PURE__*/(0,external_react_.memo)(PlusMinusBtn));

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./pages/cart.js





const Cart = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PageBanner/* default */.Z, {
                pageName: "Shopping Cart"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "shopping-cart-area py-130 rel z-1",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "shoping-table mb-50 wow fadeInUp delay-0-2s",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    children: "Images"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    children: "Product"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    children: "Unit Price"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    children: "Quantity"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    children: "Total"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    children: "remove"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/widgets/product1.jpg",
                                                            alt: "Product"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "title",
                                                            children: "Mobile Apps"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "price",
                                                            children: "70"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_PlusMinusBtn, {})
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                            className: "price",
                                                            children: "70"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            type: "button",
                                                            className: "close",
                                                            children: "\xd7"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/widgets/product2.jpg",
                                                            alt: "Product"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "title",
                                                            children: "Logo Design"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "price",
                                                            children: "65"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_PlusMinusBtn, {})
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                            className: "price",
                                                            children: "130"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            type: "button",
                                                            className: "close",
                                                            children: "\xd7"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/widgets/product3.jpg",
                                                            alt: "Product"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "title",
                                                            children: "Business Card"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "price",
                                                            children: "80"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_PlusMinusBtn, {})
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                            className: "price",
                                                            children: "80"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            type: "button",
                                                            className: "close",
                                                            children: "\xd7"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row text-center text-lg-left align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "discount-wrapper mb-30 wow fadeInLeft delay-0-2s",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                            onSubmit: (e)=>e.preventDefault(),
                                            action: "#",
                                            className: "d-sm-flex justify-content-center justify-content-lg-start",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "text",
                                                    placeholder: "Coupon Code",
                                                    required: true
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                    className: "theme-btn flex-none",
                                                    type: "submit",
                                                    children: [
                                                        "apply Coupon ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-angle-double-right"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "update-shopping mb-30 text-lg-end wow fadeInRight delay-0-2s",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                legacyBehavior: true,
                                                href: "/shop",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    className: "theme-btn style-two my-5",
                                                    children: [
                                                        "shopping ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-angle-double-right"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                legacyBehavior: true,
                                                href: "/shop",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    className: "theme-btn my-5",
                                                    children: [
                                                        "update cart ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-angle-double-right"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-8",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "shoping-cart-total pt-20 wow fadeInUp delay-0-2s",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "form-title mb-25 text-center",
                                            children: "Cart Totals"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("table", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                children: "Cart Subtotal"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "price",
                                                                    children: "280"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                children: "Shipping Fee"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "price",
                                                                    children: "10.00"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                children: "Vat"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                children: "$0.00"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                    children: "Order Total"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                    className: "price",
                                                                    children: "290"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            legacyBehavior: true,
                                            href: "/checkout",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "theme-btn style-two mt-25 w-100",
                                                children: "Proceed to checkout"
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const cart = (Cart);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,175,614], () => (__webpack_exec__(103)));
module.exports = __webpack_exports__;

})();