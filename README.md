# [PennyMac](https://www.pennymac.com/) Technical Test - Spy Grid

This repo is intended as a technical project in order to apply at [PennyMac](https://www.pennymac.com/)

## Requirements

1. Use Code Sandbox to both develop and present your solution.
   Go to [CodeSandbox](https://codesandbox.io/s/) and select `react typescript` as you'r starting point. We'll be able to visit your [CodeSandbox](https://codesandbox.io/s/) URL and see your solution right in the included browser. So when you're done, all you do is email your [CodeSandbox](https://codesandbox.io/s/) URL to us so we can see it live.

2. Use a UI framework such as [TailwindCSS](https://tailwindcss.com/) or [AntDesign](https://ant.design/components/overview/)
   if you want (optional).

3. Your solution should be a single page. Think of this as a "detail" page that displays a
   picture of an "agent" along with their vital info. (You can use a component similar to the [Descriptions](https://ant.design/components/descriptions/) component of AntDesign
   to display that data if you like).

4. Use a limited palette / color scheme with a dark theme. Make it look cool and minimal.

5. Populate the page with data with a call to the [Random User API](https://randomuser.me).

6. Place the agent's picture (large) in the UI with their `codename` under the picture in a
   font larger than the other text. Their picture should be _386px_ wide by _386px_ high - _yes, it will look grainy, but that's ok._ Under that, add the rest of the agent's vital information:

- `first name`
- `last name`
- `username` (which you'II display as their "codename" in the UI)
- `city`
- `state`
- `country`
- `gender`
- `dob` (date of birth)
- `eye color` (not in the api call - this should be randomly generated)
- `time zone offset`
- `time zone description`
- `large photo`

AII of this data (except `eye color`) is generated from the [Random User API](https://randomuser.me).

7. Finally, the page **should contain a button that says `next asset`**. When you
   press that button, the page refreshes and a new agent appears along
   with their vital info. Refreshing the page should also populate the page
   with another agent.

## Bonus Points

1. Animations / css transitions on the page load

2. Cool (monospaced?) fonts

3. Extra "techy-looking" strings on the page (ex. their login uuid could look cool
   somewhere).

4. Jest tests

## Considerations

I'll be using [TailwindCSS](https://tailwindcss.com/) for styling and [Vitest](https://vitest.dev/guide/) for unit testing.

## How to use

You could just run the App by executing `npm run dev` on the terminal.

It's worth noting that this App will just loop through a set of [Random User API](https://randomuser.me) records as spies, to disable this behavior hop into `src/main.tsx` and just remove the prop `seeds` on the `<App />` component.
