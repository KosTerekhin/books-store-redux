# books-store-redux
CRUD app via redux

1. The goal is to make a CRUD application using SOLID design patterns. 
Applying ideas from:
- "Clean Architecture" by Robert Martin
- "Dive into design patterns" by Alexander Shvets
- "Thinking In Redux" by Nir Kaufman

2. Application
- All business logic is located in Redux. UI is just a plug-in for redux. 
- The flow in Redux is constructed by dispatching actions. Each action will be processed by one or more middlewares. This allows middlewares to be re-usable and replaceable, while keeping state immutable.
- UI uses Container/Component pattern, Higher-order functions, and custom hooks. All components(functions) are only extended and contain a minimal amount of responsibilities(ideally only one). 

3. Implemented features:
- Landing page. Fetch all books. usePagination hook 
- Singlebook page. Update book details. Upload/delete images.
- AddNewBook page. Adds one new book with one image. 

4. Next steps:
- Delete book page
- Global error handling
- Global color themes via context/hooks or via styled-components
- Update usePagination hook. Manage state via context. The idea is to have different reducers for this hook to make it more custom and easily changeable.
- Update Node.js server. Apply SOLID principles on the backend. 

