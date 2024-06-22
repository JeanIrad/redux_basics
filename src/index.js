import configureStore from "./store/configureStore";
import { projectAdded } from "./store/projects";
import {
  getUnresolvedBugs,
  bugAdded,
  bugResolved,
  bugAssignedToUser,
  getBugsByUser,
} from "./store/bugs";
import { userAdded } from "./store/users";
const store = configureStore();
// store.subscribe(() => console.log("State changed!", store.getState()));

// store.dispatch(bugAdded({ description: "Bug 1" }));
// store.dispatch(bugAdded({ description: "Bug 2" }));
// store.dispatch(bugAdded({ description: "Bug 3" }));
// store.dispatch(bugAdded({ description: "Bug 4" }));
// store.dispatch(bugResolved({ id: 1 }));
// store.dispatch(userAdded({ name: "user 1" }));
// store.dispatch(userAdded({ name: "user 2" }));
// store.dispatch(projectAdded({ name: "Project 1" }));
// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
// const x = getUnresolvedBugs(store.getState());
// const bugs = getBugsByUser(1)(store.getState());
// console.log(bugs);

// dispatching functions
store.dispatch(() => {
  store.dispatch({ type: "BugsReceived", bugs: [1, 2, 3] });
});
