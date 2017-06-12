# AdminLTE Theme Angular 2+ Module

This is a module theme for Angular2+ apps. Optimized to be used with [Hello-Angular](https://github.com/llstarscreamll/Hello-Angular). This module has the following layouts:

- Right sidebar
- Top navbar
- Middle box (for login, register, etc)

In the sidebar component the `[userCanAny]` directives is used to show/hide menu items for the current logged in user based on his permissions. Take a look at the Hello-Angular `src/app/menu.ts` file to know how to build the menu array object to be used on the sidebar component.

## Install

From the Hello-Angular root folder:

```bash
npm i --save bootstrap
npm i --save admin-lte
npm i --save loaders.css
npm i --save font-awesome
git clone https://github.com/llstarscreamll/ngx-adminLte.git src/app/adminLTE
```

Register the theme in the `src/environments/environment.ts` file:

```javascript
import { AdminLTEModule } from './../app/adminLTE/admin-lte.module';

export const environment = {
  theme: AdminLTEModule,
};
```

## Tests

This modules has some tests:

```bash
ng test
```
