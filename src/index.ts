import {EditorView, basicSetup} from "codemirror"
import {EditorState} from "@codemirror/state"
import {javascript} from "@codemirror/lang-javascript"

Object.defineProperty(window, 'EditorView', { value: EditorView })
Object.defineProperty(window, 'basicSetup', { value: basicSetup })
Object.defineProperty(window, 'javascript', { value: javascript })

Object.defineProperty(window, 'SetupCodeMirrorStyles', { 
    value: () => {
        const link = document.createElement('link')
        link.href = './css/codemirror.css'
        link.rel = 'stylesheet'
        document.head.appendChild(link)
    }
})