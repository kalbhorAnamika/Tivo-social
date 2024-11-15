import{_ as Be,C as Me,f as ae,h as V,i as qe,l as De,m as Fe,S as je,n as ze,o as He,q as $e,r as N,A as Xe,u as Ge,j as u,a as P,c as We,t as X,v as Z,w as Ke}from"./index.cb691754.js";import{I as Ve,_ as Ye}from"./index.47922fc0.js";import{W as Ze}from"./WelcomePageBanner.bce996d6.js";/* empty css                       *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe="firebasestorage.googleapis.com",me="storageBucket",Je=2*60*1e3,Qe=10*60*1e3,et=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f extends He{constructor(e,n,s=0){super(J(e),`Firebase Storage: ${n} (${J(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,f.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return J(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function J(t){return"storage/"+t}function ne(){const t="An unknown error occurred, please check the error payload for server response.";return new f("unknown",t)}function tt(t){return new f("object-not-found","Object '"+t+"' does not exist.")}function nt(t){return new f("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function st(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new f("unauthenticated",t)}function rt(){return new f("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function ot(t){return new f("unauthorized","User does not have permission to access '"+t+"'.")}function _e(){return new f("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function ge(){return new f("canceled","User canceled the upload/download.")}function it(t){return new f("invalid-url","Invalid URL '"+t+"'.")}function at(t){return new f("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function lt(){return new f("no-default-bucket","No default bucket found. Did you set the '"+me+"' property when initializing the app?")}function be(){return new f("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function ct(){return new f("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function ut(){return new f("no-download-url","The given file does not have any download URLs.")}function ht(t){return new f("unsupported-environment",`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function te(t){return new f("invalid-argument",t)}function we(){return new f("app-deleted","The Firebase app was deleted.")}function dt(t){return new f("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function z(t,e){return new f("invalid-format","String does not match format '"+t+"': "+e)}function j(t){throw new f("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=v.makeFromUrl(e,n)}catch{return new v(e,"")}if(s.path==="")return s;throw at(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function o(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const i="(/(.*))?$",l=new RegExp("^gs://"+r+i,"i"),a={bucket:1,path:3};function c(w){w.path_=decodeURIComponent(w.path)}const h="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${p}/${h}/b/${r}/o${m}`,"i"),g={bucket:1,path:3},x=n===pe?"(?:storage.googleapis.com|storage.cloud.google.com)":n,d="([^?#]*)",U=new RegExp(`^https?://${x}/${r}/${d}`,"i"),b=[{regex:l,indices:a,postModify:o},{regex:_,indices:g,postModify:c},{regex:U,indices:{bucket:1,path:2},postModify:c}];for(let w=0;w<b.length;w++){const y=b[w],k=y.regex.exec(e);if(k){const A=k[y.indices.bucket];let I=k[y.indices.path];I||(I=""),s=new v(A,I),y.postModify(s);break}}if(s==null)throw it(e);return s}}class ft{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t,e,n){let s=1,r=null,o=null,i=!1,l=0;function a(){return l===2}let c=!1;function h(...d){c||(c=!0,e.apply(null,d))}function p(d){r=setTimeout(()=>{r=null,t(_,a())},d)}function m(){o&&clearTimeout(o)}function _(d,...U){if(c){m();return}if(d){m(),h.call(null,d,...U);return}if(a()||i){m(),h.call(null,d,...U);return}s<64&&(s*=2);let b;l===1?(l=2,b=0):b=(s+Math.random())*1e3,p(b)}let g=!1;function x(d){g||(g=!0,m(),!c&&(r!==null?(d||(l=2),clearTimeout(r),p(0)):d||(l=1)))}return p(0),o=setTimeout(()=>{i=!0,x(!0)},n),x}function mt(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t){return t!==void 0}function gt(t){return typeof t=="function"}function bt(t){return typeof t=="object"&&!Array.isArray(t)}function Y(t){return typeof t=="string"||t instanceof String}function le(t){return se()&&t instanceof Blob}function se(){return typeof Blob<"u"&&!$e()}function ce(t,e,n,s){if(s<e)throw te(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw te(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function ke(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(B||(B={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||r||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n,s,r,o,i,l,a,c,h,p,m=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=l,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,g)=>{this.resolve_=_,this.reject_=g,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new G(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=l=>{const a=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,c)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const l=o.getErrorCode()===B.NO_ERROR,a=o.getStatus();if((!l||ye(a,this.additionalRetryCodes_))&&this.retry){const h=o.getErrorCode()===B.ABORT;s(!1,new G(!1,null,h));return}const c=this.successCodes_.indexOf(a)!==-1;s(!0,new G(c,o))})},n=(s,r)=>{const o=this.resolve_,i=this.reject_,l=r.connection;if(r.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());_t(a)?o(a):o()}catch(a){i(a)}else if(l!==null){const a=ne();a.serverResponse=l.getErrorText(),this.errorCallback_?i(this.errorCallback_(l,a)):i(a)}else if(r.canceled){const a=this.appDelete_?we():ge();i(a)}else{const a=_e();i(a)}};this.canceled_?n(!1,new G(!1,null,!0)):this.backoffId_=pt(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&mt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class G{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function kt(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function yt(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function Rt(t,e){e&&(t["X-Firebase-GMPID"]=e)}function xt(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Tt(t,e,n,s,r,o,i=!0){const l=ke(t.urlParams),a=t.url+l,c=Object.assign({},t.headers);return Rt(c,e),kt(c,n),yt(c,o),xt(c,s),new wt(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function vt(...t){const e=St();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(se())return new Blob(t);throw new f("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function Ut(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t){if(typeof atob>"u")throw ht("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Q{constructor(e,n){this.data=e,this.contentType=n||null}}function Pt(t,e){switch(t){case E.RAW:return new Q(Re(e));case E.BASE64:case E.BASE64URL:return new Q(xe(t,e));case E.DATA_URL:return new Q(At(e),Nt(e))}throw ne()}function Re(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=s,i=t.charCodeAt(++n);s=65536|(o&1023)<<10|i&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function Et(t){let e;try{e=decodeURIComponent(t)}catch{throw z(E.DATA_URL,"Malformed data URL.")}return Re(e)}function xe(t,e){switch(t){case E.BASE64:{const r=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(r||o)throw z(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case E.BASE64URL:{const r=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(r||o)throw z(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Ct(e)}catch(r){throw r.message.includes("polyfill")?r:z(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Te{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw z(E.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=Ot(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function At(t){const e=new Te(t);return e.base64?xe(E.BASE64,e.rest):Et(e.rest)}function Nt(t){return new Te(t).contentType}function Ot(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,n){let s=0,r="";le(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(le(this.data_)){const s=this.data_,r=Ut(s,e,n);return r===null?null:new L(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new L(s,!0)}}static getBlob(...e){if(se()){const n=e.map(s=>s instanceof L?s.data_:s);return new L(vt.apply(null,n))}else{const n=e.map(i=>Y(i)?Pt(E.RAW,i).data:i.data_);let s=0;n.forEach(i=>{s+=i.byteLength});const r=new Uint8Array(s);let o=0;return n.forEach(i=>{for(let l=0;l<i.length;l++)r[o++]=i[l]}),new L(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t){let e;try{e=JSON.parse(t)}catch{return null}return bt(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Lt(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function ve(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,e){return e}class R{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||Bt}}let W=null;function Mt(t){return!Y(t)||t.length<2?t:ve(t)}function Ue(){if(W)return W;const t=[];t.push(new R("bucket")),t.push(new R("generation")),t.push(new R("metageneration")),t.push(new R("name","fullPath",!0));function e(o,i){return Mt(i)}const n=new R("name");n.xform=e,t.push(n);function s(o,i){return i!==void 0?Number(i):i}const r=new R("size");return r.xform=s,t.push(r),t.push(new R("timeCreated")),t.push(new R("updated")),t.push(new R("md5Hash",null,!0)),t.push(new R("cacheControl",null,!0)),t.push(new R("contentDisposition",null,!0)),t.push(new R("contentEncoding",null,!0)),t.push(new R("contentLanguage",null,!0)),t.push(new R("contentType",null,!0)),t.push(new R("metadata","customMetadata",!0)),W=t,W}function qt(t,e){function n(){const s=t.bucket,r=t.fullPath,o=new v(s,r);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function Dt(t,e,n){const s={};s.type="file";const r=n.length;for(let o=0;o<r;o++){const i=n[o];s[i.local]=i.xform(s,e[i.server])}return qt(s,t),s}function Ce(t,e,n){const s=Se(e);return s===null?null:Dt(t,s,n)}function Ft(t,e,n,s){const r=Se(e);if(r===null||!Y(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(c=>{const h=t.bucket,p=t.fullPath,m="/b/"+i(h)+"/o/"+i(p),_=H(m,n,s),g=ke({alt:"media",token:c});return _+g})[0]}function Pe(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const o=e[r];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}class F{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t){if(!t)throw ne()}function re(t,e){function n(s,r){const o=Ce(t,r,e);return O(o!==null),o}return n}function jt(t,e){function n(s,r){const o=Ce(t,r,e);return O(o!==null),Ft(o,r,t.host,t._protocol)}return n}function $(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=rt():r=st():n.getStatus()===402?r=nt(t.bucket):n.getStatus()===403?r=ot(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function Ee(t){const e=$(t);function n(s,r){let o=e(s,r);return s.getStatus()===404&&(o=tt(t.path)),o.serverResponse=r.serverResponse,o}return n}function zt(t,e,n){const s=e.fullServerUrl(),r=H(s,t.host,t._protocol),o="GET",i=t.maxOperationRetryTime,l=new F(r,o,re(t,n),i);return l.errorHandler=Ee(e),l}function Ht(t,e,n){const s=e.fullServerUrl(),r=H(s,t.host,t._protocol),o="GET",i=t.maxOperationRetryTime,l=new F(r,o,jt(t,n),i);return l.errorHandler=Ee(e),l}function $t(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Ae(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=$t(null,e)),s}function Xt(t,e,n,s,r){const o=e.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function l(){let b="";for(let w=0;w<2;w++)b=b+Math.random().toString().slice(2);return b}const a=l();i["Content-Type"]="multipart/related; boundary="+a;const c=Ae(e,s,r),h=Pe(c,n),p="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+a+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+a+"--",_=L.getBlob(p,s,m);if(_===null)throw be();const g={name:c.fullPath},x=H(o,t.host,t._protocol),d="POST",U=t.maxUploadRetryTime,C=new F(x,d,re(t,n),U);return C.urlParams=g,C.headers=i,C.body=_.uploadData(),C.errorHandler=$(e),C}class K{constructor(e,n,s,r){this.current=e,this.total=n,this.finalized=!!s,this.metadata=r||null}}function oe(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{O(!1)}return O(!!n&&(e||["active"]).indexOf(n)!==-1),n}function Gt(t,e,n,s,r){const o=e.bucketOnlyServerUrl(),i=Ae(e,s,r),l={name:i.fullPath},a=H(o,t.host,t._protocol),c="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":i.contentType,"Content-Type":"application/json; charset=utf-8"},p=Pe(i,n),m=t.maxUploadRetryTime;function _(x){oe(x);let d;try{d=x.getResponseHeader("X-Goog-Upload-URL")}catch{O(!1)}return O(Y(d)),d}const g=new F(a,c,_,m);return g.urlParams=l,g.headers=h,g.body=p,g.errorHandler=$(e),g}function Wt(t,e,n,s){const r={"X-Goog-Upload-Command":"query"};function o(c){const h=oe(c,["active","final"]);let p=null;try{p=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{O(!1)}p||O(!1);const m=Number(p);return O(!isNaN(m)),new K(m,s.size(),h==="final")}const i="POST",l=t.maxUploadRetryTime,a=new F(n,i,o,l);return a.headers=r,a.errorHandler=$(e),a}const ue=256*1024;function Kt(t,e,n,s,r,o,i,l){const a=new K(0,0);if(i?(a.current=i.current,a.total=i.total):(a.current=0,a.total=s.size()),s.size()!==a.total)throw ct();const c=a.total-a.current;let h=c;r>0&&(h=Math.min(h,r));const p=a.current,m=p+h;let _="";h===0?_="finalize":c===h?_="upload, finalize":_="upload";const g={"X-Goog-Upload-Command":_,"X-Goog-Upload-Offset":`${a.current}`},x=s.slice(p,m);if(x===null)throw be();function d(w,y){const k=oe(w,["active","final"]),A=a.current+h,I=s.size();let S;return k==="final"?S=re(e,o)(w,y):S=null,new K(A,I,k==="final",S)}const U="POST",C=e.maxUploadRetryTime,b=new F(n,U,d,C);return b.headers=g,b.body=x.uploadData(),b.progressCallback=l||null,b.errorHandler=$(t),b}const T={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ee(t){switch(t){case"running":case"pausing":case"canceling":return T.RUNNING;case"paused":return T.PAUSED;case"success":return T.SUCCESS;case"canceled":return T.CANCELED;case"error":return T.ERROR;default:return T.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n,s){if(gt(e)||n!=null||s!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=s!=null?s:void 0;else{const o=e;this.next=o.next,this.error=o.error,this.complete=o.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class Yt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=B.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=B.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=B.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw j("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw j("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw j("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw j("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw j("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Zt extends Yt{initXhr(){this.xhr_.responseType="text"}}function D(){return new Zt}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=Ue(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals("canceled"))this._needToFetchStatus=!0,this.completeTransitions_();else{const o=this.isExponentialBackoffExpired();if(ye(r.status,[]))if(o)r=_e();else{this.sleepTime=Math.max(this.sleepTime*2,et),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals("canceled")?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,o)=>{this._resolve=r,this._reject=o,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const s=Gt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,D,e,n);this._request=r,r.getPromise().then(o=>{this._request=void 0,this._uploadUrl=o,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,s)=>{const r=Wt(this._ref.storage,this._ref._location,e,this._blob),o=this._ref.storage._makeRequest(r,D,n,s);this._request=o,o.getPromise().then(i=>{i=i,this._request=void 0,this._updateProgress(i.current),this._needToFetchStatus=!1,i.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=ue*this._chunkMultiplier,n=new K(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,o)=>{let i;try{i=Kt(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(a){this._error=a,this._transition("error");return}const l=this._ref.storage._makeRequest(i,D,r,o,!1);this._request=l,l.getPromise().then(a=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(a.current),a.finalized?(this._metadata=a.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){ue*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const s=zt(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,D,e,n);this._request=r,r.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const s=Xt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,D,e,n);this._request=r,r.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=ge(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=ee(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,r){const o=new Vt(n||void 0,s||void 0,r||void 0);return this._addObserver(o),()=>{this._removeObserver(o)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(ee(this._state)){case T.SUCCESS:q(this._resolve.bind(null,this.snapshot))();break;case T.CANCELED:case T.ERROR:const n=this._reject;q(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(ee(this._state)){case T.RUNNING:case T.PAUSED:e.next&&q(e.next.bind(e,this.snapshot))();break;case T.SUCCESS:e.complete&&q(e.complete.bind(e))();break;case T.CANCELED:case T.ERROR:e.error&&q(e.error.bind(e,this._error))();break;default:e.error&&q(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e,n){this._service=e,n instanceof v?this._location=n:this._location=v.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new M(e,n)}get root(){const e=new v(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ve(this._location.path)}get storage(){return this._service}get parent(){const e=It(this._location.path);if(e===null)return null;const n=new v(this._location.bucket,e);return new M(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw dt(e)}}function Qt(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new Jt(t,new L(e),n)}function en(t){t._throwIfRoot("getDownloadURL");const e=Ht(t.storage,t._location,Ue());return t.storage.makeRequestWithTokens(e,D).then(n=>{if(n===null)throw ut();return n})}function tn(t,e){const n=Lt(t._location.path,e),s=new v(t._location.bucket,n);return new M(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t){return/^[A-Za-z]+:\/\//.test(t)}function sn(t,e){return new M(t,e)}function Ne(t,e){if(t instanceof ie){const n=t;if(n._bucket==null)throw lt();const s=new M(n,n._bucket);return e!=null?Ne(s,e):s}else return e!==void 0?tn(t,e):t}function rn(t,e){if(e&&nn(e)){if(t instanceof ie)return sn(t,e);throw te("To use ref(service, url), the first argument must be a Storage instance.")}else return Ne(t,e)}function he(t,e){const n=e==null?void 0:e[me];return n==null?null:v.makeFromBucketSpec(n,t)}function on(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:ze(r,t.app.options.projectId))}class ie{constructor(e,n,s,r,o){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=pe,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Je,this._maxUploadRetryTime=Qe,this._requests=new Set,r!=null?this._bucket=v.makeFromBucketSpec(r,this._host):this._bucket=he(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=v.makeFromBucketSpec(this._url,e):this._bucket=he(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ce("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ce("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new M(this,e)}_makeRequest(e,n,s,r,o=!0){if(this._deleted)return new ft(we());{const i=Tt(e,this._appId,s,r,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const de="@firebase/storage",fe="0.9.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe="storage";function an(t,e,n){return t=V(t),Qt(t,e,n)}function ln(t){return t=V(t),en(t)}function cn(t,e){return t=V(t),rn(t,e)}function un(t=Fe(),e){t=V(t);const s=qe(t,Oe).getImmediate({identifier:e}),r=De("storage");return r&&hn(s,...r),s}function hn(t,e,n,s={}){on(t,e,n,s)}function dn(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new ie(n,s,r,e,je)}function fn(){Be(new Me(Oe,dn,"PUBLIC").setMultipleInstances(!0)),ae(de,fe,""),ae(de,fe,"esm2017")}fn();function bn(){const{User:t}=N.exports.useContext(Xe),[e,n]=N.exports.useState(""),[s,r]=N.exports.useState(""),[o,i]=N.exports.useState(""),[l,a]=N.exports.useState(!1),[c,h]=N.exports.useState(""),[p,m]=N.exports.useState(!1),_=Ge();N.exports.useEffect(()=>{t!=null&&(console.log(t.photoURL,"hello"),n(t.photoURL))},[]);const g=N.exports.useRef(null),x=()=>{g.current.click()};function d(){Ye.success("  Data Updated Sucessfuly  ")}const U=y=>{const k=y.target.files[0];i(k),r(URL.createObjectURL(k)),k&&(console.log("fileObj is",k),y.target.value=null)},C=y=>{if(y.preventDefault(),l)if(c!==""){const k=X();Z(k.currentUser,{displayName:c}).then(()=>{d()}).catch(A=>{alert(A.message)})}else a(!1);if(o!=""){const k=un(),A=cn(k,`/ProfilePics/${t.uid}`),I=an(A,o);I.on("state_changed",S=>{Math.round(S.bytesTransferred/S.totalBytes*100)},S=>{alert(S.message),alert(S.code)},()=>{ln(I.snapshot.ref).then(S=>{console.log(S,"This is the new Url for Profile Pic"),n(S);const Ie=X();Z(Ie.currentUser,{photoURL:S}).then(()=>{d(),m(!0)}).catch(Le=>{alert(Le.message)})})})}},b=y=>{const k=X();Z(k.currentUser,{photoURL:y}).then(()=>{n(t.photoURL),d()}).catch(A=>{alert(A.message)})},w=()=>{const y=X();Ke(y).then(()=>{_("/")}).catch(k=>{alert(k.message)})};return u("div",{children:P("div",{className:"flex h-screen justify-center items-center",style:{backgroundImage:`linear-gradient(0deg, hsl(0deg 0% 0% / 73%) 0%, hsl(0deg 0% 0% / 73%) 35%), url(${Ze})`},children:[p?u(Ve,{toastOptions:{style:{padding:"1.5rem",backgroundColor:"##f4fff4",borderLeft:"6px solid green"}}}):null,u(We.Fade,{children:P("div",{className:"bg-[#000000bf] p-5 md:p-12 rounded-md",children:[u("h1",{className:"text-4xl text-white font-bold mb-4 md:mb-8",children:"Edit your Profile"}),P("div",{className:"flex justify-center flex-col items-center md:flex-row md:items-start",children:[u("img",{className:"h-28 w-28 rounded-full cursor-pointer mb-3 md:mr-16",src:e?`${e}`:"https://www.citypng.com/public/uploads/preview/profile-user-round-red-icon-symbol-download-png-11639594337tco5j3n0ix.png",alt:"NETFLIX"}),P("div",{children:[u("hr",{className:"mb-2 h-px bg-gray-500 border-0 dark:bg-gray-700"}),u("h1",{className:"text-white text-lg font-medium mb-2",children:"User Name"}),u("input",{type:"text",onChange:y=>h(y.target.value)||a(!0),className:"block w-full rounded-md bg-stone-900 text-white border-gray-300 p-2 mb-6 focus:border-indigo-500 focus:ring-indigo-500 sm:text-base",placeholder:t?t.displayName:null}),u("h1",{className:"text-white text-lg font-medium mb-2",children:"Email"}),u("h1",{className:"text-white text-xl bg-stone-900 p-2 rounded mb-4 md:pr-52",children:t?t.email:null}),P("h1",{className:"text-white text-xl p-2 rounded mb-4",children:["Unique ID : ",t?t.uid:null]}),u("hr",{className:"h-px bg-gray-500 border-0 mb-4 md:mb-10 dark:bg-gray-700"}),u("h1",{className:"text-white text-lg font-medium mb-4",children:"Who is Watching ?"}),P("div",{className:"flex justify-between cursor-pointer mb-4 md:mb-8",children:[u("img",{onClick:()=>b("https://i.pinimg.com/originals/ba/2e/44/ba2e4464e0d7b1882cc300feceac683c.png"),className:"w-16 h-16 rounded-md cursor-pointer",src:"https://i.pinimg.com/originals/ba/2e/44/ba2e4464e0d7b1882cc300feceac683c.png"}),u("img",{onClick:()=>b("https://i.pinimg.com/736x/db/70/dc/db70dc468af8c93749d1f587d74dcb08.jpg"),className:"w-16 h-16 rounded-md cursor-pointer",src:"https://i.pinimg.com/736x/db/70/dc/db70dc468af8c93749d1f587d74dcb08.jpg"}),u("img",{onClick:()=>b("https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"),className:"w-16 h-16 rounded-md cursor-pointer",src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"}),u("img",{onClick:()=>b("https://ih0.redbubble.net/image.618363037.0853/flat,1000x1000,075,f.u2.jpg"),className:"w-16 h-16 rounded-md cursor-pointer",src:"https://ih0.redbubble.net/image.618363037.0853/flat,1000x1000,075,f.u2.jpg"}),u("input",{style:{display:"none"},ref:g,type:"file",onChange:U}),u("svg",{onClick:x,xmlns:"http://www.w3.org/2000/svg",className:"h-12 w-12 text-stone-600 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:u("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})})]}),s?u("img",{className:"h-30 w-72",src:s}):null]})]}),P("div",{className:"flex justify-between mt-4",children:[P("button",{onClick:w,className:"flex items-center border-[0.7px] border-white text-white font-medium sm:font-bold text-xs px-14 md:px-24 md:text-xl  py-3 rounded shadow hover:shadow-lg hover:bg-white hover:border-white hover:text-red-700 outline-none focus:outline-none mr-3 mb-1 ease-linear transition-all duration-150",children:[u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 mr-2",children:u("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"})}),"SignOut"]}),c!=""||o!=""?P("button",{onClick:C,className:"flex items-center bg-red-700 text-white font-medium sm:font-bold text-xs px-10 md:px-16 md:text-xl  py-3 rounded shadow hover:shadow-lg hover:bg-white hover:text-red-700 outline-none focus:outline-none mr-3 mb-1 ease-linear transition-all duration-150",children:[u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 mr-2",children:u("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"})}),"Save and continue"]}):P("button",{onClick:()=>_("/"),className:"flex items-center bg-red-700 text-white font-medium sm:font-bold text-xs px-10 md:px-16 md:text-xl  py-3 rounded shadow hover:shadow-lg hover:bg-white hover:text-red-700 outline-none focus:outline-none mr-3 mb-1 ease-linear transition-all duration-150",children:[u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 mr-2",children:u("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"})}),"Back to Home"]})]})]})})]})})}export{bn as default};
