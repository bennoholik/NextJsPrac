# [Codevolution Tutorial](https://www.youtube.com/playlist?list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH)

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
   - `/post/create` - 1. create a folder name called `post` and create `create.js` inside.
   - `post` - If you just want this url has own thing. create `index.js` inside of `post` folder.
3. Dynamic routes
   - `/post/123`. - If you want your path looks like this. Just make a folder name called `post` and put `[id(or other name)].js` inside.
   - or create `[id(or other name)]` folder inside of `post` folder and create `index.js`. It works same as above.
   - `/post/123/review/777` - 1. create `post` folder 2. create `[id(or any name)]` folder 3.create `review` folder. 4.create `[reviewId].js` inside.
   ```
    pages
     - post
       - [postId]
        - review
          - [reviewId].js  
   ```
4. Catch-all routes
    - catches all the url segment and maps into one single file. 
    - `docs/feature1`,`docs/feature1/concept1`,`docs/feature1/concept1/example1`
    - if your url looks like above and the layout is same, Catch-all routes is the one you need to use.
    - just simply create file [...params].js like this.
      ```
      docs
        -[...params].js
      ```
    - To get the parameter you typed in the url
      ```jsx
      import { useRouter } from 'next/router'

      function Doc(){
        const router = useRouter();
        const { params } = router.query
        console.log(params) // it is an Array that contains params data splitted by '/'.
        
        return <h1></h1>
      }

      ```

5. Navigate from the UI
6. Programmatically navigate between pages