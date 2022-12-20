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
        const { params = []} = router.query
        console.log(params) // it is an Array that contains params data splitted by '/'.
        
        if (params.length === 2){
          return (
            <h1>feature: {params[0]} concept: {params[1]}</h1>
          )
        } else if (params.length === 1) {
          return <h1>feature: {params[0]} </h1>
        }


        return <h1>docs home page</h1>
      }

      ```
    - if you want to access in root of doc page like `/docs`, wrap the square bracket with another square bracket `[[..params]].js` 

5. Navigate from the UI
    - use `Link` to navigte the route
6. Programmatically navigate between pages
    - use `router.push('/pathname')` to navigate to other page. 
7. Custom 404 page
    - Simply create `404.js` file in the `page` folder.



## Pre-rendering & Data Fetching
React vs Next JS
By default, Next JS pre-renders every page in the application.

pre-render : Next JS generates HTML for each page in advance instead of having it all done by client-side Javascript.
No Pre-rendering(Plain React.js app) : (Initial Load : App is not rendered) => (Hydration: React components are initialized and App becomes interactive.)

why pre-render?
1. Pre-rendering improves **performance**
   - In a React app, you need to wait for the Javascript to be executed. Perhaps fetch data from an external API and then render the UI. There is a wait time for the user.
   - With a pre-rendered page, the HTML is already generated and loads faster.
2. Pre-rendering helps with **SEO**
   - If you're building a blog or an e-commerce site, SEO is a concern. With a React app, if the search engine hts our page, it only sees **a div tag with id equal to root**.
   - If search engine hits a pre-rendered page though, all the content is present in the source code which will help index that page.
   - Therefore, if SEO is matter for your app, pre-rendering is what you want.


### **Types of pre-rendering**
1. Static Generation
   - without data
   - with data
   - incremental Static Generation
   - dynamic parameters when fetching data
2. Server-side Rendering
   - data fetching

Client-side data fetching

Combining pre-rendering with client-side data fetching

<detail><summary>## Static Generation</summary>
A method of pre-rendering where the HTML pages are generated at built time.
The HTML with all the data that makes up the content of the web page are generated in advance when you build your application.
Recommended method to pre-render pages whenever possible. Page can be built once, cached by a CDN and served to the client almost instantly.
EX: Blog pages, e-commerce Product pages, documentation and marketing pages.
</detail>