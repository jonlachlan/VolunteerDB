
This theme is based on Semantic UI. To configure which parts of the theme are included (affects size of app on client, and therefore load time), edit `semantic-ui/custom.semantic.json`

To set the theme for each element, edit `semantic-ui/theme.config.import`

To override styles for this site, edit the override files in `semantic-ui/site/`

The files in `semantic-ui/definitions` and `semantic-ui/themes` are generated files and should not be altered directly.

IMPORTANT: If you want to change the style for a specific element on a specific component, either include the style directly in the `.js` file (see [inline styles in React](https://facebook.github.io/react/tips/inline-styles.html)) or create an similarly-named `.css` file in the same directory as the component. That way we won't have to dig through the `theme` directory for styles. The theme should be configured only to make site-wide changes.
