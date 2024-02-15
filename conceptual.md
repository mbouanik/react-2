### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
it allows to create route and simulate differents page and change the url path for navigation 

- What is a single page application?
it's app that use one single page to display all information with refreshing the page

- What are some differences between client side and server side routing?
Client-side routing handles navigation and rendering within the user's browser, providing a faster 
and more responsive experience, while server-side routing involves rendering pages on the server 
and requires full page reloads during navigation

- What are two ways of handling redirects with React Router? When would you use each?
<Redirect /> and <Navigate />  Navigate is newer 

- What are two different ways to handle page-not-found user experiences using React Router? 
Using Switch with route one of the route using * so if any route correspond it will use that route or Create 404 conponent 

- How do you grab URL parameters from within a component using React Router?
use hook call useParams() call the function return value then value."name of the params"

- What is context in React? When would you use it?
it allows you to provide a value or function  that can be access by all nested component without using props 

- Describe some differences between class-based components and function
  components in React.
  class base component do not use hooks, it has access to the "this" keyword within the component instance
  fuction base component use hooks you don't need to use "this", makes code cleaner and more readable 

- What are some of the problems that hooks were designed to solve?
React hooks were designed to address challenges in managing state, side effects, 
and complex component logic in functional components, offering a more concise and readable alternative to class components
