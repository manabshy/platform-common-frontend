# Platform Notifications View

This component provides a view which will display platform notifications along with a filter (by service) and a pop-up modal which will open up to display content of notifications once clicked.

## Usage

To add this into a service, you will need to include the following components, actions, reducers and state objects. Once these are included in your project you will be able to make sure of the pre-built functionality. The backend/middleware of the service will need to include the Notifications API to access the data correctly.

**Add the Route definition to your App Router**

This will pull in the container and components needed to display the view from platform-common-frontend for you.

```javascript
import {
  Routes as PCFRoutes
} from "platform-common-frontend"

...

<PCFRoutes.PlatformNotificationsRoute />
```

**Add a navigation link to access this new route**

Adding /notifications to the GovUkAppWrapper will add the \<Link /\> for you. Note that this endpoint is what the Route definition is set to from the \<PlatformNotificationsRoute\> we used.

```javascript
const appWrapperProps = {
  ...,
  navigation: [
    {
      to: "/notifications",
      heading: "Notifications"
    },
    ...
  ],
  ...
}

...

<PlatformCommonComponents.GovUkAppWrapper
  {...appWrapperProps}
>
...
```

**Add the Store definition to your initial state**

You need to add this so your app can store loaded notifications in memory ready to display via React.

```javascript
import { Store } from 'platform-common-frontend'

let initialState...

// Add platform notifications state from platform common
initialState = Object.assign(initialState, Store.PlatformNotificationsState)

export default initialState;
```

**Add the reducer to your app**

This is what controls the data from the API into your application's state that we just defined above.

```javascript
import { Reducers } from "platform-common-frontend";

...

const appReducers = combineReducers({
  ...
  platformNotifications: Reducers.PlatformNotificationsReducer,
  ...
});
```

## Status

- [x] Ready for use (live)
- [ ] Ready for use (beta)
- [ ] Broken
- [ ] Unknown

## Test status

- [x] Well covered
- [ ] Partial
- [ ] None
- [ ] Unknown
