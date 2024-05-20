# Select Previous Tab

[Install from Chrome Web Store](https://chromewebstore.google.com/detail/select-previous-tab/niiagoaiinijbdmegmhjmmemgcihdgbe)

Select previously viewed tab by pressing Alt-Q (Ctrl-Q on Mac). The shortcut can be configured.

It's inspired by [clut-chrome-extension](https://github.com/harshayburadkar/clut-chrome-extension) but Select Previous Tab has:

- No tracking
- No excessive permissions
- Doesn't consume any memory when not used
- 30 lines of code instead of 300+


## Change the keyboard shortcut to Ctrl-Tab

Chrome's UI doesn't let set Ctrl-Tab, but there's a workaround.

1. Open chrome://extensions/shortcuts
2. Open Chrome DevTools Console
3. Paste this code
```javascript
chrome.developerPrivate.updateExtensionCommand({
    extensionId: "niiagoaiinijbdmegmhjmmemgcihdgbe",
    commandName: "_execute_action",
    keybinding: "Ctrl+Tab"
});
```
4. Press Enter to run it
