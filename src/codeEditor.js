const editorElementCode = `
    <div id="editor-wrapper">
        <div id="editor">
    
        </div>
    </div>
`

document.body.insertAdjacentHTML('beforeend', editorElementCode)
const editorElement = document.getElementById('editor')

let editor = new EditorView({
    extensions: [basicSetup, javascript()],
    parent: editorElement,
    theme: 'material',
  })
  
  window.SetupCodeMirrorStyles()