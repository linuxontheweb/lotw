

import { anyInputActive } from '/root/code/mods/av/noisecraft/utils.js';
import { Dialog, errorDialog } from '/root/code/mods/av/noisecraft/dialog.js';
import { Model, Paste, Play, Stop } from '/root/code/mods/av/noisecraft/model.js';
import { Editor } from '/root/code/mods/av/noisecraft/editor.js';
import { AudioView } from '/root/code/mods/av/noisecraft/audioview.js';

//let model = new Model();

// Graph editor view
//let editor = new Editor(model);

// Audio view of the model
//let audioView = new AudioView(model);

let model, editor, audioView;

export const app = function(arg) {


//Imports«

const {Core, Main, NS}=arg;
const{log,cwarn,cerr,api:capi, globals, Desk}=Core;

const{fs,util}=globals;
const{make,mkdv,mk,mksp}=util;

const Win = Main.top;


//»

//DOM«

//Main.bgcol="rgba(1,1,1,0)";
Main.bgcol="";

const layout_div = mkdv();
layout_div.dis="flex";
layout_div.style.flexFlow="column";
layout_div.h="100%";
layout_div.w="100%";

Main.add(layout_div);

const editor_div = mkdv();
editor_div.style.flexGrow=1;
editor_div.over="scroll";

layout_div.add(editor_div);

const graph_div = mkdv();
graph_div.pos="absolute";
graph_div.loc(0,0);
editor_div.add(graph_div);

const graph_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
graph_svg.setAttribute("version","1.1");
graph_svg.style.zIndex=-2;
graph_svg.style.position="absolute";
graph_svg.style.top=0;
graph_svg.style.left=0;
graph_svg.style.backgroundColor="#222";

editor_div.add(graph_svg);

//»

//Var«


//»

//Funcs«

const init=()=>{

model = new Model();
editor = new Editor(model, editor_div, graph_div, graph_svg, Main);
audioView = new AudioView(model);

log(model);
log(editor);
log(audioView);

};

//»

//OBJ/CB«

this.onappinit=()=>{//«
//log("APP INIT");

Win.title = "Noisecraft";
init();
model.new();
//log(Main.bgcol);
};//»
this.onloadfile=bytes=>{//«
    let str = Core.api.bytesToStr(bytes);
};//»
this.onkeydown = function(e,s) {//«
}//»
this.onkeypress=e=>{//«
};//»
this.onkill = function() {//«

}//»
this.onresize = function() {//«

editor.resize();

}//»
this.onfocus=()=>{//«

//Main.bgcol="#000";
//Main.tcol="#fff";

}//»
this.onblur=()=>{//«

//Main.bgcol="#131313";
//Main.tcol="#e9e9e9";

}//»

//»


}

