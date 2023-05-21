import { EditorView, basicSetup } from "codemirror";
import { EditorState } from "@codemirror/state";
import { javascript } from "@codemirror/lang-javascript";

let editor = new EditorView({
  state: EditorState.create({
    extensions: [basicSetup, javascript()],
  }),
  parent: document.body,
});