/* GENERALS */

//1- Meaningful naming:
let x = 10; //bad
let speed = 10; //good

function doSomething() {} //bad
function calculateSpeed() {} //good

//2- Function Single Responsibility:
//good
function updateName(user) {}
function sendWelcomeEmail(user) {}
function saveToDatabase(user) {}

//bad
function updateUserProfile(user) {
  updateName(user);
  sendWelcomeEmail(user);
  saveToDatabase(user);
}

//3- Avoid long functions (ideal length: between 10 and 20 lines)

//4- Avoid nested code
//bad
let [condition1, condition2, condition3] = [true, false, true];
if (condition1) {
  if (condition2) {
    if (condition3) {
      // Do something
    }
  }
}
//good
function hasAccess() {
  condition1 && conzdition2 && condition3;
}
if (hasAccess()) {
}

//5- Comments should explain why something is happening, not what happening!

//6- Avoid Side Effects (Functional Programming Concepts)
//bad
let count = 0;
function increaseCount() {
  count += 1;
}
//good:
function increaseCount(count) {
  count += 1;
}

//7- Error handling: (using try and catch)
try {
  performTask();
} catch (error) {
  console.error("Task failed:", error.message);
}

//8- Avoid global variables: minimize the global value usage by scoping
//bad:
var TOTAL = 0; //global variable
function addTotal(amount) {
  TOTAL += amount;
}
//good:
function calculateTotal(items) {
  let total = 0;
  items.forEach((item) => (total += item.price));
  return total;
}

//9- DRY (don't repeat yourself)
//bad
function sendEmailToAdmin(admin) {
  // code for sending email
}
function sendEmailToUser(user) {
  // duplicated code for sending email
}
//good
function sendEmail(recipient) {
  // common code for sending email
}
sendEmail(admin);
sendEmail(user);

/* React  */
//1- Component per file: Each react component, should have it's own files

//2- Avoid large components (max 180~ lines)

//3- Using custom hooks for reusable logic

//4- Using useContext except prop drilling

//5- Naming
//components: PascalCase
//variables: camelCase

//6- Optimizing Performance
//6-1 Lazy Load: Use React’s React.lazy and Suspense to load components only when needed.
const LazyComponent = React.lazy(() => import("./LazyComponent"));
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
//6-2 Memoization: Use React.memo to avoid unnecessary re-renders of expensive components.
const MemoizedComponent = React.memo(MyComponent);
