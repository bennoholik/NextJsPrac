# [Codevolution Tutorial]("https://www.youtube.com/playlist?list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH")

To Create Next App
```bash
npx create-next-app projectName

```

Next Js Version : 13.0.7

(I created next project just last week, and its nextjs version was 13.0.6. Version updated in just a week.)



## Why NEXT JS ?
1. File-system based routing
2. Search Engine Optimazation


## Routing in a Next.js app
1. Route with pages
   - Literally file based routing, which means when you create a JS file in pages folder, it becomes a page.
2. Nested routes
   - `/post/123`. - If you want your path looks like this. Just make a folder name called `post` and put `[id(or other name)].js` inside.
   - `/post/create` - 1. create a folder name called `post` and create `create.js` inside.
3. Dynamic routes
4. Catch-all routes
5. Navigate from the UI
6. Programmatically navigate between pages