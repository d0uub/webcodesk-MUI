
export default {"adding-new-note":[{"type":"component","props":{"componentName":"usr.todo.NewNoteForm","componentInstance":"newNotePageForm"},"events":[{"name":"onSaveNote","targets":[{"type":"userFunction","props":{"functionName":"usr.todo.NewNoteForm.validateNoteText"},"events":[{"name":"failure","targets":[{"type":"userFunction","props":{"functionName":"usr.todo.NewNoteForm.setError"},"events":[{"name":"newNoteFormProps","targets":[{"type":"component","props":{"componentName":"usr.todo.NewNoteForm","componentInstance":"newNotePageForm"}}]}]}]},{"name":"noteText","targets":[{"type":"userFunction","props":{"functionName":"usr.todo.ToDoActions.createNewNote"},"events":[{"name":"notes","targets":[{"type":"userFunction","props":{"functionName":"usr.todo.ToDoActions.saveNotes"},"events":[{"name":"notes","targets":[{"type":"userFunction","props":{"functionName":"usr.todo.ToDoActions.putIntoNotesBuffer"}}]},{"name":"success","targets":[{"type":"userFunction","props":{"functionName":"usr.atom.PageRouteAnchor.goToPage"},"events":[{"name":"pageRouteAnchorProps","targets":[{"type":"component","props":{"componentName":"usr.atom.PageRouteAnchor","componentInstance":"newNotePageRouteAnchor"}}]}]}]}]}]}]}]}]}]}]}],"cancelling-new-note":[{"type":"component","props":{"componentName":"usr.todo.NewNoteForm","componentInstance":"newNotePageForm"},"events":[{"name":"onCancel","targets":[{"type":"userFunction","props":{"functionName":"usr.atom.PageRouteAnchor.goToPage"},"events":[{"name":"pageRouteAnchorProps","targets":[{"type":"component","props":{"componentName":"usr.atom.PageRouteAnchor","componentInstance":"mainPageRouteAnchor"}}]}]}]}]}],"change-navigation-filter-by-click":[{"type":"component","props":{"componentName":"usr.todo.NavigationTabs","componentInstance":"mainPageNavigationTabs"},"events":[{"name":"onChangeActiveTab","targets":[{"type":"userFunction","props":{"functionName":"usr.todo.NavigationTabs.setActiveNavigationTab"},"events":[{"name":"navigationTabsProps","targets":[{"type":"component","props":{"componentName":"usr.todo.NavigationTabs","componentInstance":"mainPageNavigationTabs"},"events":[{"name":"onActiveTabUpdated","targets":[{"type":"userFunction","props":{"functionName":"usr.todo.ToDoActions.getNotes"},"events":[{"name":"notes","targets":[{"type":"userFunction","props":{"functionName":"usr.todo.ToDoActions.putIntoNotesBuffer"}}]}]}]}]}]}]}]}]}],"go-to-new-note-page":[{"type":"component","props":{"componentName":"usr.atom.ActionButton","componentInstance":"mainPageActionButton"},"events":[{"name":"onClick","targets":[{"type":"userFunction","props":{"functionName":"usr.atom.PageRouteAnchor.goToPage"},"events":[{"name":"pageRouteAnchorProps","targets":[{"type":"component","props":{"componentName":"usr.atom.PageRouteAnchor","componentInstance":"newNotePageRouteAnchor"}}]}]}]}]}],"load-notes-on-start":[{"type":"component","props":{"componentName":"applicationStartWrapper","componentInstance":"wrapperInstance"},"events":[{"name":"onApplicationStart","targets":[{"type":"userFunction","props":{"functionName":"usr.todo.ToDoActions.getNotes"},"events":[{"name":"notes","targets":[{"type":"userFunction","props":{"functionName":"usr.todo.ToDoActions.putIntoNotesBuffer"}}]}]}]}]}],"toggle-or-delete-note-by-user":[{"type":"component","props":{"componentName":"usr.todo.ToDoNotesList","componentInstance":"mainPageNotesList"},"events":[{"name":"onDeleteNote","targets":[{"type":"userFunction","props":{"functionName":"usr.todo.ToDoActions.deleteNote"},"events":[{"name":"notes","targets":[{"type":"userFunction","props":{"functionName":"usr.todo.ToDoActions.saveNotes"},"events":[{"name":"notes","targets":[{"type":"userFunction","props":{"functionName":"usr.todo.ToDoActions.putIntoNotesBuffer"}}]}]}]}]}]},{"name":"onToggleNoteCompleted","targets":[{"type":"userFunction","props":{"functionName":"usr.todo.ToDoActions.toggleNoteCompleted"},"events":[{"name":"notes","targets":[{"type":"userFunction","props":{"functionName":"usr.todo.ToDoActions.saveNotes"},"events":[{"name":"notes","targets":[{"type":"userFunction","props":{"functionName":"usr.todo.ToDoActions.putIntoNotesBuffer"}}]}]}]}]}]}]}],"update-notes-by-navigation-filter":[{"type":"component","props":{"componentName":"applicationStartWrapper","componentInstance":"wrapperInstance"},"events":[{"name":"onApplicationStart","targets":[{"type":"userFunction","props":{"functionName":"usr.todo.ToDoActions.listenToNotesBuffer"},"events":[{"name":"updatedData","targets":[{"type":"userFunction","props":{"functionName":"usr.todo.ToDoActions.filterNotes"},"events":[{"name":"navigationTabsProps","targets":[{"type":"component","props":{"componentName":"usr.todo.NavigationTabs","componentInstance":"mainPageNavigationTabs"}}]},{"name":"todoNotesListProps","targets":[{"type":"component","props":{"componentName":"usr.todo.ToDoNotesList","componentInstance":"mainPageNotesList"}}]}]}]}]}]}]}]};
