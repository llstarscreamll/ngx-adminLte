# AdminLTE Theme Angular 2+ Module

This is a module theme for Angular2+ apps. Optimized to be used with [Hello-Angular](https://github.com/llstarscreamll/Hello-Angular). This module has the following layouts:

- Right sidebar
- Top navbar
- Middle box (for login, register, etc)

And this is the available components:

- alerts
- box
- box body
- box footer
- box header
- box tools
- control sidebar
- footer
- laoder
- main sidebar
- main top navbar
- page content
- page header
- user account menu

In the sidebar component the `[userCanAny]` directives is used to show/hide menu items for the current logged in user based on his permissions. Take a look at the Hello-Angular `src/app/menu.ts` file to know how to build the menu array object to be used on the sidebar component.

## Install

Make sure you have this modules installed:

- [auth module](https://github.com/llstarscreamll/ngx-auth)

Now, from the Hello-Angular root folder:

```bash
npm i --save bootstrap
npm i --save admin-lte
npm i --save loaders.css
npm i --save font-awesome
npm i --save lodash
npm i --save @ngx-translate/core
npm i --save ngx-bootstrap
git clone https://github.com/llstarscreamll/ngx-adminLte.git src/app/adminLTE
```

Register the theme in the `src/environments/environment.ts` file:

```javascript
import { AdminLTEModule } from './../app/adminLTE/admin-lte.module';

export const environment = {
  theme: AdminLTEModule,
};
```

The main sidebar component expect you have a `menu.ts` which is used to build the main sidebar manu, something like this:

```javascript
export const MENU: MenuItem[] = [
  { label: 'Header', icon: '', url: '', visivility: 'private', isHeader: true, permissions: [], childs: [] },
  { label: 'Home', icon: 'fa fa-home', url: '/front/landing', visivility: 'private', isHeader: false, permissions: [], childs: [] },
  { label: 'Landing', icon: 'fa fa-home', url: '/front/landing', visivility: 'public', isHeader: false, permissions: [], childs: [] },
];
```

## Tests

This modules has some tests:

```bash
ng test
```
