(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/Button/Button.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,'.btn-floating-whatsapp {\n  width: 60px;\n  height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  cursor: pointer;\n  background-color: #25d366;\n  border-radius: 50%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  box-shadow: 0px 4px 10px 0px rgb(0 0 0 / 15%);\n  z-index: 9998;\n}\n.btn-floating-whatsapp svg {\n  width: 70%;\n  height: 70%;\n}\n\n.btn-floating-whatsapp__animated:before {\n  content: "";\n  border-color: inherit;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  position: absolute;\n  box-shadow: 0 0 0 0 rgba(37, 211, 101, 0);\n  animation: _pulse 1.2s infinite;\n}\n\n/* keyframes */\n@keyframes _pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(37, 211, 101, 0.75);\n  }\n  100% {\n    box-shadow: 0 0 0 15px rgba(37, 211, 101, 0);\n  }\n}\n',""]),module.exports=exports},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./stories/Button.stories.js":"./src/stories/Button.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/components/Button/Button.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/Button/Button.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/stories/Button.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"WithMessage",(function(){return WithMessage})),__webpack_require__.d(__webpack_exports__,"WithDiferentStyle",(function(){return WithDiferentStyle})),__webpack_require__.d(__webpack_exports__,"WithCallback",(function(){return WithCallback})),__webpack_require__.d(__webpack_exports__,"Animated",(function(){return Animated}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function IconWhatsapp(){return Object(jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",children:Object(jsx_runtime.jsx)("path",{fill:"#fff",d:"M19.05 4.91A9.816 9.816 0 0012.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 012.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.07-.11-.22-.16-.47-.28z"})})}IconWhatsapp.displayName="IconWhatsapp",IconWhatsapp.__docgenInfo={description:"",methods:[],displayName:"IconWhatsapp"};var Whatsapp=IconWhatsapp;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/Whatsapp.jsx"]={name:"IconWhatsapp",docgenInfo:IconWhatsapp.__docgenInfo,path:"src/icons/Whatsapp.jsx"});__webpack_require__("./src/components/Button/Button.css");var Button_Button_Button=function Button(_ref){var phoneNumber=_ref.phoneNumber,countryCode=_ref.countryCode,message=_ref.message,callback=_ref.callback,style=_ref.style,animated=_ref.animated;if(!phoneNumber||!countryCode)return null;var URL="https://api.whatsapp.com/send/?phone="+countryCode+phoneNumber+"&text=";return message&&(URL+="&text="+encodeURI(message)),Object(jsx_runtime.jsx)("a",{onClick:function onClick(){"function"==typeof callback&&callback()},className:"btn-floating-whatsapp "+(animated&&"btn-floating-whatsapp__animated"),href:URL,target:"_blank",style:style,children:Object(jsx_runtime.jsx)(Whatsapp,{})})};Button_Button_Button.displayName="Button",Button_Button_Button.propTypes={phoneNumber:prop_types_default.a.string.isRequired,countryCode:prop_types_default.a.string.isRequired,message:prop_types_default.a.string,callback:prop_types_default.a.func,style:prop_types_default.a.object,animated:prop_types_default.a.bool},Button_Button_Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{phoneNumber:{description:"",type:{name:"string"},required:!0},countryCode:{description:"",type:{name:"string"},required:!0},message:{description:"",type:{name:"string"},required:!1},callback:{description:"",type:{name:"func"},required:!1},style:{description:"",type:{name:"object"},required:!1},animated:{description:"",type:{name:"bool"},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.jsx"]={name:"Button",docgenInfo:Button_Button_Button.__docgenInfo,path:"src/components/Button/Button.jsx"});__webpack_exports__.default={title:"Whatsapp Button",component:Button_Button_Button,args:{countryCode:"51",phoneNumber:"987654321"}};var Button_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Button_Button_Button,Object.assign({},args))};Button_stories_Template.displayName="Template";var Default=Button_stories_Template.bind({});Default.args={countryCode:"51",phoneNumber:"987654321"};var WithMessage=Button_stories_Template.bind({});WithMessage.args={countryCode:"51",phoneNumber:"987654321",message:"Hola 👋"};var WithDiferentStyle=Button_stories_Template.bind({});WithDiferentStyle.args={countryCode:"51",phoneNumber:"987654321",style:{backgroundColor:"#00a4f5",right:"unset",left:"10px"}};var WithCallback=Button_stories_Template.bind({});WithCallback.args={countryCode:"51",phoneNumber:"987654321",callback:function callback(){alert("Click!")}};var Animated=Button_stories_Template.bind({});Animated.args={countryCode:"51",phoneNumber:"987654321",animated:!0},Default.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Default.parameters),WithMessage.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},WithMessage.parameters),WithDiferentStyle.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},WithDiferentStyle.parameters),WithCallback.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},WithCallback.parameters),Animated.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Animated.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);