"use strict";
exports.id = 175;
exports.ids = [175];
exports.modules = {

/***/ 3175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/useClickOutside.js

let useClickOutside = (handler)=>{
    let domNode = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
/* harmony default export */ const src_useClickOutside = (useClickOutside);

;// CONCATENATED MODULE: ./src/components/ImageView.js



const ImgViews = ({ close , src  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: ` popup-container mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mfp-iframe-scaler",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "mfp-img",
                                    src: src
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const ImageView = ()=>{
    const [img, setImg] = (0,external_react_.useState)(false);
    const [imgValue, setImgValue] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("/images")) {
                    if (a.getAttribute("download") === null) {
                        a.addEventListener("click", (e)=>{
                            e.preventDefault();
                            setImgValue(a.href);
                            setImg(true);
                        });
                    }
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: img && /*#__PURE__*/ jsx_runtime_.jsx(ImgViews, {
            close: ()=>setImg(false),
            src: imgValue
        })
    });
};
/* harmony default export */ const components_ImageView = (ImageView);

;// CONCATENATED MODULE: ./src/components/VideoPopup.js



const VideoPopup_ = ({ close , videoID  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mfp-container mfp-s-ready mfp-iframe-holder",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mfp-iframe-scaler",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        title: "Close (Esc)",
                                        type: "button",
                                        className: "mfp-close",
                                        onClick: ()=>close(),
                                        children: "\xd7"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                        src: "https://www.youtube.com/embed/nfP5N9Yc72A?autoplay=1",
                                        title: "YouTube video player",
                                        frameBorder: "0",
                                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                        allowFullScreen: true
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const VideoPopup = ()=>{
    const [video, setVideo] = (0,external_react_.useState)(false);
    const [videoValue, setVideoValue] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("https://www.youtube.com")) {
                    a.addEventListener("click", (e)=>{
                        e.preventDefault();
                        setVideoValue(a.href);
                        setVideo(true);
                    });
                }
            });
        }, 1000);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: video && /*#__PURE__*/ jsx_runtime_.jsx(VideoPopup_, {
            close: ()=>setVideo(false),
            videoID: videoValue
        })
    });
};
/* harmony default export */ const components_VideoPopup = (VideoPopup);

;// CONCATENATED MODULE: ./src/utils.js
// Sticky nav
const stickyNav = ()=>{
    window.addEventListener("scroll", ()=>{
        let offset = window.scrollY;
        const sticky = document.querySelectorAll("header");
        for(let i = 0; i < sticky.length; i++){
            const stick = sticky[i];
            if (stick) {
                if (offset > 10) {
                    stick.classList.add("fixed-header");
                } else {
                    stick.classList.remove("fixed-header");
                }
            }
        }
    });
};
// Sticky nav
const scrollTopActive = ()=>{
    window.addEventListener("scroll", ()=>{
        let offset = window.scrollY;
        const sticky = document.querySelectorAll(".scroll-top");
        for(let i = 0; i < sticky.length; i++){
            const stick = sticky[i];
            if (stick) {
                if (offset > 10) {
                    stick.classList.add("active-scroll-top");
                } else {
                    stick.classList.remove("active-scroll-top");
                }
            }
        }
    });
};
// animation
const animation = ()=>{
    if (false) {}
    new WOW.WOW().init();
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/layout/footer/Index.js


const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "main-footer bgc-gray footer-white rel z-1",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "footer-cta-wrap",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "footer-cta-inner bgs-cover",
                        style: {
                            backgroundImage: "url(assets/images/banner/grow.jpg)"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "section-title wow fadeInLeft delay-0-2s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "sub-title text-white",
                                        children: "Need Any Consultations ?"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "text-white",
                                        children: "Boost your business with more sales"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                legacyBehavior: true,
                                href: "/contact",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: "theme-btn style-three wow fadeInRight delay-0-2s",
                                    children: [
                                        "Get Free Quote ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fas fa-long-arrow-right"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "hotline wow fadeInRight delay-0-2s",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fas fa-phone"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row medium-gap",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xl-3 col-sm-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-widget widget_about wow fadeInUp delay-0-2s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "footer-logo mb-30",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            legacyBehavior: true,
                                            href: "/index",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/banner/brand2.png",
                                                    alt: "Logo"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Copyright 2023 StoreToProfit"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        legacyBehavior: true,
                                        href: "",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            className: "read-more",
                                            children: [
                                                "Learn More Us ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-long-arrow-right"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xl-3 col-sm-6 order-xl-2",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-widget widget_newsletter wow fadeInUp delay-0-6s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "footer-title",
                                        children: "Newsletter"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Subscribe TO Newsletter"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                        onSubmit: (e)=>e.preventDefault(),
                                        action: "#",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                htmlFor: "email",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "far fa-envelope"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                id: "email",
                                                type: "email",
                                                placeholder: "elson@gmail.com",
                                                required: true
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                children: "Sign Up"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        children: "Follow Us"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "social-style-one",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-facebook-f"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-twitter"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-instagram"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-linkedin-in"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xl-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-md-4 col-6 col-small",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget widget_nav_menu wow fadeInUp delay-0-3s",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "footer-title",
                                                    children: "PRIVACY POLICY"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    className: "list-style-two"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-md-4 col-6 col-small",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget widget_nav_menu wow fadeInUp delay-0-4s",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "footer-title",
                                                    children: "TERMS OF SERVICE"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    className: "list-style-two"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-md-4 col-6 col-small",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget widget_nav_menu wow fadeInUp delay-0-5s",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "footer-title",
                                                    children: "Support"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "list-style-two",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                legacyBehavior: true,
                                                                href: "",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Elson@gmail.com"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                legacyBehavior: true,
                                                                href: "about",
                                                                children: "+27 875 466 9844"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "footer-bottom bgc-black mt-20 pt-20",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-8",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "footer-bottom-menu mb-10 wow fadeInRight delay-0-2s",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: "Best Product"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#"
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "copyright-text text-lg-end wow fadeInLeft delay-0-2s",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "\xa9 2023 StoreToProfit. All rights reserved."
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "footer-shapes"
            })
        ]
    });
};
/* harmony default export */ const Index = (Footer);

;// CONCATENATED MODULE: ./src/layout/Search.js


const Search = ()=>{
    const [toggle, setToggle] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "far fa-search",
                onClick: ()=>setToggle(!toggle)
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: (e)=>e.preventDefault(),
                action: "#",
                className: `${toggle ? "" : "hide"}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        placeholder: "Search",
                        className: "searchbox",
                        required: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "submit",
                        className: "searchbutton far fa-search"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const layout_Search = (Search);

;// CONCATENATED MODULE: ./src/layout/header/HeaderTop.js


const HeaderTop = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "header-top-wrap bgc-secondary",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container-fluid",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header-top",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "text",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "hello",
                            children: "Hello"
                        }),
                        "Get New Clients and generate More Deals",
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            legacyBehavior: true,
                            href: "/contact",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: "Contact Us"
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const header_HeaderTop = (HeaderTop);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./src/layout/header/Menu.js





const Menu = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DeskTopMenu, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(MobileMenu, {})
        ]
    });
};
const MobileMenu = ()=>{
    const [activeMenu, setActiveMenu] = (0,external_react_.useState)(null);
    const active = (value)=>setActiveMenu(value === activeMenu ? null : value), activeSubMenu = (value)=>value == activeMenu ? {
            display: "block"
        } : {
            display: "none"
        };
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "main-menu navbar-expand-lg mobile-menu",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Accordion, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "navbar-header",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mobile-logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "assets/images/logos/logo-one.png",
                                    alt: "Logo",
                                    title: "Logo"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Accordion.Toggle, {
                            as: "button",
                            type: "button",
                            className: "navbar-toggle",
                            eventKey: "collapse",
                            "data-bs-target": ".navbar-collapse",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "icon-bar"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "icon-bar"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "icon-bar"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Accordion.Collapse, {
                    eventKey: "collapse",
                    className: "navbar-collapse clearfix",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "navigation clearfix",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "dropdown",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        onClick: ()=>active("home"),
                                        children: "Home"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        style: activeSubMenu("home"),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: "IT Company"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "index2",
                                                    children: "IT Solutions"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "index3",
                                                    children: "IT Services"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "index4",
                                                    children: "IT Agency"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "dropdown-btn",
                                        onClick: ()=>active("home"),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "fas fa-chevron-down"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "dropdown",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        onClick: ()=>active("services"),
                                        children: "services"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        style: activeSubMenu("services"),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "services",
                                                    children: "Services One"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "services2",
                                                    children: "Services Two"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "service-details",
                                                    children: "service details"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "dropdown-btn",
                                        onClick: ()=>active("services"),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "fas fa-chevron-down"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "dropdown",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        onClick: ()=>active("Project"),
                                        children: "Project"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        style: activeSubMenu("Project"),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "project-grid",
                                                    children: "Project Grid"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "project-masonry",
                                                    children: "Project Masonry."
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "project-details",
                                                    children: "Project Details"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "dropdown-btn",
                                        onClick: ()=>active("Project"),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "fas fa-chevron-down"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "dropdown",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        onClick: ()=>active("shop"),
                                        children: "shop"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        style: activeSubMenu("shop"),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "shop",
                                                    children: "shop grid"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "product-details",
                                                    children: "product details"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "cart",
                                                    children: "cart page"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "checkout",
                                                    children: "checkout"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "dropdown-btn",
                                        onClick: ()=>active("shop"),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "fas fa-chevron-down"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "dropdown",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        onClick: ()=>active("blog"),
                                        children: "blog"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        style: activeSubMenu("blog"),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "blog",
                                                    children: "blog standard"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "blog-details",
                                                    children: "blog details"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "dropdown-btn",
                                        onClick: ()=>active("blog"),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "fas fa-chevron-down"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "dropdown",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        onClick: ()=>active("pages"),
                                        children: "pages"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        style: activeSubMenu("pages"),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "about",
                                                    children: "About us"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "contact",
                                                    children: "Contact us"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "team",
                                                    children: "Team"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "faqs",
                                                    children: "faqs"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "pricing",
                                                    children: "Pricing Plan"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "404",
                                                    children: "404 error"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "dropdown-btn",
                                        onClick: ()=>active("pages"),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "fas fa-chevron-down"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
const DeskTopMenu = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "main-menu navbar-expand-lg desktop-menu",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "navbar-header",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mobile-logo",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "assets/images/logos/logo-one.png",
                                alt: "Logo",
                                title: "Logo"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        type: "button",
                        className: "navbar-toggle",
                        "data-bs-toggle": "collapse",
                        "data-bs-target": ".navbar-collapse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "icon-bar"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "icon-bar"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "icon-bar"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "navbar-collapse collapse clearfix",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "navigation clearfix",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            className: "dropdown",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    children: "Home"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "dropdown-btn",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "fas fa-chevron-down"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            className: "dropdown",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    children: "services"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "dropdown-btn",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "fas fa-chevron-down"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            className: "dropdown",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    children: "Contact"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "dropdown-btn",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "fas fa-chevron-down"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const header_Menu = (Menu);

;// CONCATENATED MODULE: ./src/layout/header/DefaultHeader.js





const DefaultHeader = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "main-header header-two",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header_HeaderTop, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header-upper bg-white",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid clearfix",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "header-inner rel d-flex align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "logo-outer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "logo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        legacyBehavior: true,
                                        href: "/index",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/banner/brand2.png",
                                                alt: "Logo",
                                                title: "Logo"
                                            })
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "nav-outer mx-auto clearfix",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(header_Menu, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "menu-btns",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: "theme-btn",
                                        children: [
                                            "Get a Quote ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fas fa-long-arrow-right"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "social-style-two",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fab fa-facebook-f"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fab fa-twitter"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fab fa-instagram"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fab fa-linkedin-in"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const header_DefaultHeader = (DefaultHeader);

;// CONCATENATED MODULE: ./src/layout/header/Header1.js




const Header1 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "main-header header-one menu-white",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header-top-wrap bgc-gray",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "header-top",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "far fa-envelope"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "mailto:support@gmail.com",
                                            children: "support@gmail.com"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "far fa-phone"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "callto:+000(123)45688",
                                            children: "+000 (123) 456 88"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "for-none",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "far fa-clock"
                                        }),
                                        " Working Hours : Monday- Friday, 10 am to 5pm"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "social-style-one",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-facebook-f"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-twitter"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-instagram"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-linkedin-in"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header-upper bgc-black",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container clearfix",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "header-inner rel d-flex align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "logo-outer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "logo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        legacyBehavior: true,
                                        href: "/index",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/logos/logo-one.png",
                                                alt: "Logo",
                                                title: "Logo"
                                            })
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "nav-outer mx-auto clearfix",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(header_Menu, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "nav-search py-10",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(layout_Search, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "menu-btns",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "/contact",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: "theme-btn",
                                        children: [
                                            "Get a Quote ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fas fa-long-arrow-right"
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const header_Header1 = (Header1);

;// CONCATENATED MODULE: ./src/layout/HiddenSidebar.js


const HiddenSidebar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "form-back-drop"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "hidden-bar",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "inner-box text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "cross-icon",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "fa fa-times"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "title",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: "Get Appointment"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "appointment-form",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                onSubmit: (e)=>e.preventDefault(),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "text",
                                            name: "text",
                                            defaultValue: "",
                                            placeholder: "Name",
                                            required: true
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "email",
                                            name: "email",
                                            defaultValue: "",
                                            placeholder: "Email Address",
                                            required: true
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                            placeholder: "Message",
                                            rows: 5,
                                            defaultValue: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "submit",
                                            className: "theme-btn",
                                            children: "Submit now"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "social-style-one",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-twitter"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-facebook-f"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-instagram"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-pinterest-p"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const layout_HiddenSidebar = (HiddenSidebar);

;// CONCATENATED MODULE: ./src/layout/header/Header3.js







const Header3 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: "main-header header-three menu-white menu-absolute",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(header_HeaderTop, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "header-upper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container clearfix",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "header-inner rel d-flex align-items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "logo-outer",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "logo",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                legacyBehavior: true,
                                                href: "/index",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {})
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "nav-outer ms-lg-auto clearfix",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(header_Menu, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "menu-btns"
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_HiddenSidebar, {})
        ]
    });
};
/* harmony default export */ const header_Header3 = (Header3);

;// CONCATENATED MODULE: ./src/layout/header/Header4.js







const Header4 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: "main-header header-four",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(header_HeaderTop, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "header-upper bg-white",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container clearfix",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "header-inner rel d-flex align-items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "logo-outer",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "logo",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                legacyBehavior: true,
                                                href: "/index",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/logos/logo.png",
                                                        alt: "Logo",
                                                        title: "Logo"
                                                    })
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "nav-outer ms-lg-auto clearfix",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(header_Menu, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "nav-search py-10",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(layout_Search, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "menu-btns",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "menu-sidebar",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "toggle-btn"
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_HiddenSidebar, {})
        ]
    });
};
/* harmony default export */ const header_Header4 = (Header4);

;// CONCATENATED MODULE: ./src/layout/header/Index.js







const Header = ({ header  })=>{
    (0,external_react_.useEffect)(()=>{
        stickyNav();
    }, []);
    switch(header){
        case 1:
            return /*#__PURE__*/ jsx_runtime_.jsx(header_Header1, {});
        case 3:
            return /*#__PURE__*/ jsx_runtime_.jsx(header_Header3, {});
        case 4:
            return /*#__PURE__*/ jsx_runtime_.jsx(header_Header4, {});
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx(header_DefaultHeader, {});
    }
};
/* harmony default export */ const header_Index = (Header);

;// CONCATENATED MODULE: ./src/layout/ScrollTopButton.js



const ScrollTopButton = ()=>{
    (0,external_react_.useLayoutEffect)(()=>{
        scrollTopActive();
    }, []);
    const scrollTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: "scroll-top scroll-to-target",
        "data-target": "html",
        onClick: ()=>scrollTop(),
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: "fas fa-angle-double-up"
        })
    });
};
/* harmony default export */ const layout_ScrollTopButton = (ScrollTopButton);

;// CONCATENATED MODULE: ./src/layout/Layout.js








const Layout = ({ children , header  })=>{
    (0,external_react_.useEffect)(()=>{
        animation();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_VideoPopup, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_ImageView, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "page-wrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(header_Index, {
                        header: header
                    }),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(Index, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_ScrollTopButton, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ })

};
;