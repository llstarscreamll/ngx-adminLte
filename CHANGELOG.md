# Release Notes.

## 0.2.1 (2017-06-16)

### Fixed

- Fix error importing main styles on middle-box-layout component.

## 0.2 (2017-06-16)

### Added

- Add language switcher for **spanish** and **english**.
- Use translations on all components templates.

### Changed

- Move styles imports to `styles.css` file.

### Removed

- Remove unused links on user account menu.
- Remove unused imports on module.

## 0.1.1 (201-06-13)

### Added

- Add changelog file

### Changed

- Update dependencies to install on readme file.
- Clean module imports duplicated, the CoreSharedModule exposes the main imports.
- Run `ng lint`

## 0.1 (201-06-12)

### Added

- Add **loader component** based on the [loaders.css](https://connoratherton.com/loaders) library.
- Add dependencies install info on readme.

### Changed

- Cleaning up and refactor on the **alerts component**.

### Removed

- Remove the **appData** ngrx stuff, now use environment variables for setting info like app name, company info, web site, cc,  etc.
