# odin-todolist

1. Your todo-items should at minimum have a title, description, dueDate, and priorty (maybe even a checklist)

2. Your todo list should have a projects or seperate lists of todos. When a user first opens the app, there should be some sort of ‘default’ project to which all of their todos are put. Users should be able to create new projects and choose which project their todos go into.

3. You should separate your application logic (i.e. creating new todos, setting todos as complete, changing todo priority etc.) from the DOM-related stuff, so keep all of those things in separate modules.

4. From the user interface you should be able to: view all projects, view all todos in each project (title, dueDates, priority), expand single todo to see/edit details, delete a todo

5. Try adding external libraries from npm like date-fns

6. Try using localStorage using the Web Storage API to save data on the user's computer. Make sure the app doesn't crash if the data isn't there. Note localStorage uses JSON so cannot store functions in them!