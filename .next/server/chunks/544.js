"use strict";
exports.id = 544;
exports.ids = [544];
exports.modules = {

/***/ 8544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A4": () => (/* binding */ testimonialSlider),
/* harmony export */   "Rd": () => (/* binding */ mainSliderActive),
/* harmony export */   "al": () => (/* binding */ testimonialThreeSlider),
/* harmony export */   "kj": () => (/* binding */ relatedProductSlider),
/* harmony export */   "pJ": () => (/* binding */ projectSliderActive),
/* harmony export */   "xL": () => (/* binding */ serviceThreeSlider)
/* harmony export */ });
/* unused harmony exports sliderTwoActive, servicesFiveActive, projectThreeActive */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Arrow({ className , extraClass , onClick , icon  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: `${className}  ${extraClass}`,
        onClick: onClick,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
            className: icon
        })
    });
}
const projectSliderActive = {
    infinite: true,
    arrows: true,
    dots: false,
    fade: true,
    autoplay: true,
    prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
        icon: "fal fa-angle-left",
        extraClass: "prev-arrow"
    }),
    nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
        icon: "fal fa-angle-right",
        extraClass: "next-arrow"
    }),
    autoplaySpeed: 5000,
    pauseOnHover: false,
    slidesToScroll: 1,
    slidesToShow: 1
};
const testimonialSlider = {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    speed: 400,
    arrows: false,
    dots: true,
    loop: true,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};
const mainSliderActive = {
    infinite: true,
    arrows: true,
    dots: false,
    fade: true,
    autoplay: true,
    prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
        icon: "fal fa-angle-left",
        extraClass: "prev-arrow"
    }),
    nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
        icon: "fal fa-angle-right",
        extraClass: "next-arrow"
    }),
    autoplaySpeed: 5000,
    pauseOnHover: false,
    slidesToScroll: 1,
    slidesToShow: 1
};
const serviceThreeSlider = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    speed: 400,
    arrows: false,
    dots: true,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};
const testimonialThreeSlider = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    speed: 400,
    arrows: false,
    dots: true,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 5000
};
const sliderTwoActive = {
    infinite: true,
    arrows: false,
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    slidesToScroll: 1,
    slidesToShow: 1
};
const servicesFiveActive = {
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 1000,
    focusOnSelect: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
const projectThreeActive = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: true,
    speed: 1000,
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
        icon: "fal fa-angle-left",
        extraClass: "prev-arrow"
    }),
    nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
        icon: "fal fa-angle-right",
        extraClass: "next-arrow"
    }),
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
const relatedProductSlider = {
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 1000,
    focusOnSelect: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};


/***/ })

};
;