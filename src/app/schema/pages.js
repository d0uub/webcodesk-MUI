
export default {"main":{"type":"usr.layout.PageFrameWithActionButton","instance":"mainPageFrame","props":{"actionButtonContent":{"type":"usr.atom.ActionButton","instance":"mainPageActionButton","props":{"color":"primary","icon":{"type":"usr.atom.SvgIcon","instance":"addIcon","props":{"color":"inherit","fontSize":"default","paths":[{"d":"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8"}],"viewBox":"0 0 24 24"}},"size":"large"}},"applicationBarContent":{"type":"usr.atom.test2","instance":"test21","props":{"cells":[{"title":"menu"}],"data":{"inputArray":[],"inputObject":{},"inputText":"","placeholder":"Enter text","title":"Empty Title Value"},"styling":{"borderColor":"#cdcdcd","borderStyle":"dotted","borderWidth":"2px","margin":"4em","padding":"1em"}}},"applicationBarPalette":{"backgroundColor":{"colorHue":"white"},"color":{}},"hiddenComponents":[{"type":"usr.atom.PageRouteAnchor","instance":"newNotePageRouteAnchor","props":{"pageRoutePath":"/new-note"}}],"mainAreaChildren":[{"type":"usr.layout.Container","instance":"mainPageContainer","props":{"content":{"type":"usr.layout.Grid","instance":"mainPageGrid","props":{"cells":[{"type":"usr.atom.Typography","instance":"mainPageLabel","props":{"align":"center","color":"initial","display":"initial","gutterBottom":false,"noWrap":false,"paragraph":false,"text":"ToDos","variant":"h5"}},{"type":"usr.layout.Paper","instance":"mainPagePaper","props":{"children":[{"type":"usr.todo.ToDoNotesList","instance":"mainPageNotesList","props":{"emptyListMessage":"There are no notes","notes":[{"id":"01","isCompleted":true,"noteText":"Initial todo record"},{"id":"02","isCompleted":false,"noteText":"The second record"}]}}],"elevation":"2","paddingSpacing":{},"palette":{"backgroundColor":{"colorHue":"deepPurple"},"color":{"colorHue":"white"}},"square":false,"variant":"elevation"}},{"type":"usr.atom.test","instance":"test3","props":{"cells":[],"data":{"description":"Get the perfect resume for your next job in 10 minutes","image":"https://ph-files.imgix.net/216fd945-fbf3-4239-9e8e-ad567a9ae995.png","number1":550,"number2":156,"title":"HyreSnap"},"styling":{"borderColor":"#cdcdcd","borderStyle":"dotted","borderWidth":"2px","margin":"4em","padding":"1em"}}}],"grid":{"direction":"column","spacing":"3"}}},"disableMaxWidth":false,"fixed":false,"maxWidth":"sm"}}],"mainAreaPadding":{"paddingTop":"100px"},"mainAreaPalette":{"backgroundColor":{},"color":{}}}},"new-note":{"type":"usr.layout.PageFrameWithActionButton","instance":"newNotePageFrame","props":{"actionButtonContent":null,"applicationBarContent":null,"applicationBarPalette":{"backgroundColor":{"colorHue":"white"},"color":{}},"hiddenComponents":[{"type":"usr.atom.PageRouteAnchor","instance":"mainPageRouteAnchor","props":{"pageRoutePath":"/"}}],"mainAreaChildren":[{"type":"usr.layout.Container","instance":"newNotePageContainer","props":{"content":{"type":"usr.layout.Grid","instance":"newNotePageGrid","props":{"cells":[{"type":"usr.atom.Typography","instance":"newNotePageLabel","props":{"align":"center","color":"initial","display":"initial","gutterBottom":false,"noWrap":false,"paragraph":false,"text":"Text","variant":"h5"}},{"type":"usr.layout.Paper","instance":"newNotePagePaper","props":{"children":[{"type":"usr.todo.NewNoteForm","instance":"newNotePageForm","props":{"helperText":"Enter a note text","isError":false,"label":"Add Note","rowsNumber":4,"spacing":"1"}}],"elevation":"2","paddingSpacing":{"paddingBottom":"2","paddingLeft":"2","paddingRight":"2"},"palette":{"backgroundColor":{"colorHue":"yellow","colorShade":"100"},"color":{}},"square":false,"variant":"elevation"}}],"grid":{"direction":"column","spacing":"3"}}},"disableMaxWidth":false,"fixed":false,"maxWidth":"sm"}}],"mainAreaPadding":{"paddingTop":"100px"},"mainAreaPalette":{"backgroundColor":{},"color":{}}}},"new-test":{"type":"usr.layout.PageFrameWithActionButton","instance":"pageFrameWithActionButton4","props":{"actionButtonContent":{"type":"usr.MUI.Button.Button","instance":"button8","props":{"cells":[],"data":{"color":"primary","size":"small","text":"Buttonaaa","variant":"contained"},"styling":{"borderColor":"#cdcdcd","borderStyle":"dotted","borderWidth":"2px","margin":"4em","padding":"1em"}}},"applicationBarContent":null,"applicationBarPalette":{"backgroundColor":{},"color":{}},"hiddenComponents":[],"mainAreaChildren":[],"mainAreaPadding":{},"mainAreaPalette":{"backgroundColor":{},"color":{}}}}};
