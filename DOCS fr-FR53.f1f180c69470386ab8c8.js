(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[195],{

/***/ 955:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/select-v2.md?vue&type=template&id=b885df02

var select_v2vue_type_template_id_b885df02_hoisted_1 = {
  class: "content element-doc"
};

var select_v2vue_type_template_id_b885df02_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Select V2 virtualized selector ");

var _hoisted_3 = {
  class: "tip"
};

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("This component is still under testing, if you found any bug or issue please report it at ");

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Github");

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" for us to fix.");

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Background ");

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Now days, with tons of data came from the backend server through the internet, one single selector could have ended up loading tens of thousands of data from the backend, but rendering that much data into the DOM could be a burden to the browser which could crash the browser. For better user experience and developer experience, we decided to add this component.", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Basic usage ");

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "The simplest selector", -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 200px;\"\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `Option ${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value: '',\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Multi select ");

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "The basic multi-select selector with tags", -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 200px;\"\n    multiple\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `Option ${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Hide extra tags when the selected items are too many. ");

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 200px;\"\n    multiple\n    collapse-tags\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `Option ${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Filterable multi-select ");

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("When the options are overwhelmingly too many, you can use "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" option to enable filter feature for finding out the desired option")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    filterable\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 200px;\"\n    multiple\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `Option${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Disabled selector and select options ");

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "You can choose to disable selector itself or the option.", -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    filterable\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 200px; margin-right: 16px; vertical-align: middle;\"\n    multiple\n  />\n  <el-select-v2\n    disabled\n    v-model=\"value\"\n    filterable\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 200px; vertical-align: middle;\"\n    multiple\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `Option${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n          disabled: idx % 10 === 0,\n        })),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Option Grouping ");

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "We can group option as we wanted, as long as the data satisfies the pattern.", -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    filterable\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 200px;\"\n    multiple\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 10 }).map((_, idx) => {\n          const label = idx + 1\n          return {\n            value: `Group ${label}`,\n            label: `Group ${label}`,\n            options: Array.from({ length: 10 }).map((_, idx) => ({\n              value: `Option ${idx + 1 + 10 * label}`,\n              label: `${initials[idx % 10]}${idx + 1 + 10 * label}`,\n            })),\n          }\n        }),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Customized option renderer ");

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "We can define our own template for rendering the option in the popup.", -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value\"\n    filterable\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 200px;\"\n    multiple\n  >\n    <template #default=\"{item}\">\n      <span style=\"margin-right: 8px;\">{{ item.label }}</span>\n      <span style=\"color: #8492a6; font-size: 13px\">\n        {{ item.value }}\n      </span>\n    </template>\n  </el-select-v2>\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `Option${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value: [],\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Clearable selector ");

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "We can clear all the selected options at once, also applicable for single select.", -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-select-v2\n    v-model=\"value1\"\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 200px; margin-right: 16px; vertical-align: middle;\"\n    multiple\n    clearable\n  />\n  <el-select-v2\n    v-model=\"value2\"\n    :options=\"options\"\n    placeholder=\"Please select\"\n    style=\"width: 200px; vertical-align: middle;\"\n    clearable\n  />\n</template>\n\n<script>\n  const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n  export default {\n    data() {\n      return {\n        options: Array.from({ length: 1000 }).map((_, idx) => ({\n          value: `Option ${idx + 1}`,\n          label: `${initials[idx % 10]}${idx}`,\n        })),\n        value1: [],\n        value2: '',\n      }\n    },\n  }\n</script>\n")], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Create Option ");

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "WIP👷‍♀️", -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Remote search ");

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "WIP 👷‍♀️", -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Keyboard navigation ");

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "WIP 👷‍♀️", -1);

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Some APIs are still undergoing (comparing to the non-virtualized select), because there were lots of legacy API refactors and new designs, the current version only implements the simplest and most used functionalities.")], -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("SelectV2 Attributes ");

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Param"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Type"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Accepted Values"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Default")])], -1);

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "model-value / v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "biding value"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string / number / boolean / object"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")], -1);

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "multiple"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "is multiple"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "false")], -1);

var _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "is disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "false")], -1);

var _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "value-key"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "unique identity key name for value, required when value is an object"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "value")], -1);

var _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "input box size"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "medium/small/mini"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")], -1);

var _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "clearable"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "whether select can be cleared"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "false")], -1);

var _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "collapse-tags"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "whether to collapse tags to a text when multiple selecting"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "false")], -1);

var _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "multiple-limit"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "maximum number of options user can select when multiple is true. No limit when set to 0"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "0")], -1);

var _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "name"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "the name attribute of select input"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")], -1);

var _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "autocomplete"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "select input 的 autocomplete 属性"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "off")], -1);

var _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "placeholder"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "the autocomplete attribute of select input"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Please select")], -1);

var _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "filterable"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "is filterable"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "false")], -1);

var _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "no-data-text"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "displayed text when there is no options, you can also use slot empty"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "No Data")], -1);

var _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "popper-class"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "custom class name for Select's dropdown"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")], -1);

var _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "popper-append-to-body"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "false")], -1);

var _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "popper-options", -1);

var _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Customized popper option see more at ");

var _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("popper.js");

var _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "object", -1);

var _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-", -1);

var _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-", -1);

var _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "automatic-dropdown"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "for non-filterable Select, this prop decides if the option menu pops up when the input is focused"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "false")], -1);

var _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "clear-icon"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Customized clear icon class"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "el-icon-circle-close")], -1);

var _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "height"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "The height of the dropdown panel, 34px for each item"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "170")], -1);

var _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("span", {
  style: {
    "display": "none"
  }
}, null, -1);

var _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("SelectV2 Events ");

var _hoisted_67 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Event Name</th><th>Description</th><th>Params</th></tr></thead><tbody><tr><td>change</td><td>triggers when the selected value changes</td><td>current selected value</td></tr><tr><td>visible-change</td><td>triggers when the dropdown appears/disappears</td><td>true when it appears, and false otherwise</td></tr><tr><td>remove-tag</td><td>triggers when a tag is removed in multiple mode</td><td>removed tag value</td></tr><tr><td>clear</td><td>triggers when the clear icon is clicked in a clearable Select</td><td>—</td></tr><tr><td>blur</td><td>triggers when Input blurs</td><td>(event: Event)</td></tr><tr><td>focus</td><td>triggers when Input focuses</td><td>(event: Event)</td></tr></tbody></table>", 1);

var _hoisted_68 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("SelectV2 Slots ");

var _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "name"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "说明")])]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Option renderer")]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "empty"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "无Option时的列表")])])], -1);

function select_v2vue_type_template_id_b885df02_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo6");

  var _component_element_demo7 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo7");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", select_v2vue_type_template_id_b885df02_hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "select-vtwo-virtualized-selector",
    content: "Select V2 virtualized selector",
    href: "#select-vtwo-virtualized-selector",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [select_v2vue_type_template_id_b885df02_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#select-vtwo-virtualized-selector"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("div", _hoisted_3, [Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://github.com/element-plus/element-plus/issues"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_5];
    }),
    _: 1
  }), _hoisted_6])]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "background",
    content: "Background",
    href: "#background",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_7, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#background"
      })];
    }),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "basic-usage",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_9, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#basic-usage"
      })];
    }),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "multi-select",
    content: "Multi select",
    href: "#multi-select",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_12, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#multi-select"
      })];
    }),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "hide-extra-tags-when-the-selected-items-are-too-many",
    content: "Hide extra tags when the selected items are too many.",
    href: "#hide-extra-tags-when-the-selected-items-are-too-many",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_15, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#hide-extra-tags-when-the-selected-items-are-too-many"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "filterable-multi-select",
    content: "Filterable multi-select",
    href: "#filterable-multi-select",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_17, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#filterable-multi-select"
      })];
    }),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "disabled-selector-and-select-options",
    content: "Disabled selector and select options",
    href: "#disabled-selector-and-select-options",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_20, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#disabled-selector-and-select-options"
      })];
    }),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "option-grouping",
    content: "Option Grouping",
    href: "#option-grouping",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_23, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#option-grouping"
      })];
    }),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "customized-option-renderer",
    content: "Customized option renderer",
    href: "#customized-option-renderer",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_26, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#customized-option-renderer"
      })];
    }),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_28];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "clearable-selector",
    content: "Clearable selector",
    href: "#clearable-selector",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_29, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#clearable-selector"
      })];
    }),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo7)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_31];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "create-option",
    content: "Create Option",
    href: "#create-option",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_32, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#create-option"
      })];
    }),
    _: 1
  }), _hoisted_33, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "remote-search",
    content: "Remote search",
    href: "#remote-search",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_34, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#remote-search"
      })];
    }),
    _: 1
  }), _hoisted_35, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "keyboard-navigation",
    content: "Keyboard navigation",
    href: "#keyboard-navigation",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_36, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#keyboard-navigation"
      })];
    }),
    _: 1
  }), _hoisted_37, _hoisted_38, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "selectvtwo-attributes",
    content: "SelectV2 Attributes",
    href: "#selectvtwo-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_39, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#selectvtwo-attributes"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [_hoisted_40, Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [_hoisted_41, _hoisted_42, _hoisted_43, _hoisted_44, _hoisted_45, _hoisted_46, _hoisted_47, _hoisted_48, _hoisted_49, _hoisted_50, _hoisted_51, _hoisted_52, _hoisted_53, _hoisted_54, _hoisted_55, Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [_hoisted_56, Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [_hoisted_57, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://popper.js.org/documentation.html"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_58];
    }),
    _: 1
  })]), _hoisted_59, _hoisted_60, _hoisted_61]), _hoisted_62, _hoisted_63, _hoisted_64])]), _hoisted_65, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "selectvtwo-events",
    content: "SelectV2 Events",
    href: "#selectvtwo-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_66, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#selectvtwo-events"
      })];
    }),
    _: 1
  }), _hoisted_67, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "selectvtwo-slots",
    content: "SelectV2 Slots",
    href: "#selectvtwo-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_68, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#selectvtwo-slots"
      })];
    }),
    _: 1
  }), _hoisted_69, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/select-v2.md?vue&type=template&id=b885df02

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/select-v2.md?vue&type=script&lang=ts


/* harmony default export */ var select_v2vue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          options: _ctx.options,
          placeholder: "Please select",
          style: {
            "width": "200px"
          }
        }, null, 8, ["modelValue", "options"])]);
      }

      var initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      var democomponentExport = {
        data: function data() {
          return {
            options: Array.from({
              length: 1000
            }).map(function (_, idx) {
              return {
                value: "Option " + (idx + 1),
                label: "" + initials[idx % 10] + idx
              };
            }),
            value: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          options: _ctx.options,
          placeholder: "Please select",
          style: {
            "width": "200px"
          },
          multiple: ""
        }, null, 8, ["modelValue", "options"])]);
      }

      var initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      var democomponentExport = {
        data: function data() {
          return {
            options: Array.from({
              length: 1000
            }).map(function (_, idx) {
              return {
                value: "Option " + (idx + 1),
                label: "" + initials[idx % 10] + idx
              };
            }),
            value: []
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          options: _ctx.options,
          placeholder: "Please select",
          style: {
            "width": "200px"
          },
          multiple: "",
          "collapse-tags": ""
        }, null, 8, ["modelValue", "options"])]);
      }

      var initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      var democomponentExport = {
        data: function data() {
          return {
            options: Array.from({
              length: 1000
            }).map(function (_, idx) {
              return {
                value: "Option " + (idx + 1),
                label: "" + initials[idx % 10] + idx
              };
            }),
            value: []
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          filterable: "",
          options: _ctx.options,
          placeholder: "Please select",
          style: {
            "width": "200px"
          },
          multiple: ""
        }, null, 8, ["modelValue", "options"])]);
      }

      var initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      var democomponentExport = {
        data: function data() {
          return {
            options: Array.from({
              length: 1000
            }).map(function (_, idx) {
              return {
                value: "Option" + (idx + 1),
                label: "" + initials[idx % 10] + idx
              };
            }),
            value: []
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          filterable: "",
          options: _ctx.options,
          placeholder: "Please select",
          style: {
            "width": "200px",
            "margin-right": "16px",
            "vertical-align": "middle"
          },
          multiple: ""
        }, null, 8, ["modelValue", "options"]), _createVNode(_component_el_select_v2, {
          disabled: "",
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value = $event;
          }),
          filterable: "",
          options: _ctx.options,
          placeholder: "Please select",
          style: {
            "width": "200px",
            "vertical-align": "middle"
          },
          multiple: ""
        }, null, 8, ["modelValue", "options"])]);
      }

      var initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      var democomponentExport = {
        data: function data() {
          return {
            options: Array.from({
              length: 1000
            }).map(function (_, idx) {
              return {
                value: "Option" + (idx + 1),
                label: "" + initials[idx % 10] + idx,
                disabled: idx % 10 === 0
              };
            }),
            value: []
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          filterable: "",
          options: _ctx.options,
          placeholder: "Please select",
          style: {
            "width": "200px"
          },
          multiple: ""
        }, null, 8, ["modelValue", "options"])]);
      }

      var initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      var democomponentExport = {
        data: function data() {
          return {
            options: Array.from({
              length: 10
            }).map(function (_, idx) {
              var label = idx + 1;
              return {
                value: "Group " + label,
                label: "Group " + label,
                options: Array.from({
                  length: 10
                }).map(function (_, idx) {
                  return {
                    value: "Option " + (idx + 1 + 10 * label),
                    label: "" + initials[idx % 10] + (idx + 1 + 10 * label)
                  };
                })
              };
            }),
            value: []
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo6": function () {
      var _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];
      var _hoisted_1 = {
        style: {
          "margin-right": "8px"
        }
      };
      var _hoisted_2 = {
        style: {
          "color": "#8492a6",
          "font-size": "13px"
        }
      };

      function render(_ctx, _cache) {
        var _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          }),
          filterable: "",
          options: _ctx.options,
          placeholder: "Please select",
          style: {
            "width": "200px"
          },
          multiple: ""
        }, {
          default: _withCtx(function (_ref) {
            var item = _ref.item;
            return [_createVNode("span", _hoisted_1, _toDisplayString(item.label), 1), _createVNode("span", _hoisted_2, _toDisplayString(item.value), 1)];
          }),
          _: 1
        }, 8, ["modelValue", "options"])]);
      }

      var initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      var democomponentExport = {
        data: function data() {
          return {
            options: Array.from({
              length: 1000
            }).map(function (_, idx) {
              return {
                value: "Option" + (idx + 1),
                label: "" + initials[idx % 10] + idx
              };
            }),
            value: []
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo7": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_select_v2 = _resolveComponent("el-select-v2");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_select_v2, {
          modelValue: _ctx.value1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value1 = $event;
          }),
          options: _ctx.options,
          placeholder: "Please select",
          style: {
            "width": "200px",
            "margin-right": "16px",
            "vertical-align": "middle"
          },
          multiple: "",
          clearable: ""
        }, null, 8, ["modelValue", "options"]), _createVNode(_component_el_select_v2, {
          modelValue: _ctx.value2,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.value2 = $event;
          }),
          options: _ctx.options,
          placeholder: "Please select",
          style: {
            "width": "200px",
            "vertical-align": "middle"
          },
          clearable: ""
        }, null, 8, ["modelValue", "options"])]);
      }

      var initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
      var democomponentExport = {
        data: function data() {
          return {
            options: Array.from({
              length: 1000
            }).map(function (_, idx) {
              return {
                value: "Option " + (idx + 1),
                label: "" + initials[idx % 10] + idx
              };
            }),
            value1: [],
            value2: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/fr-FR/select-v2.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/select-v2.md



select_v2vue_type_script_lang_ts.render = select_v2vue_type_template_id_b885df02_render

/* harmony default export */ var select_v2 = __webpack_exports__["default"] = (select_v2vue_type_script_lang_ts);

/***/ })

}]);