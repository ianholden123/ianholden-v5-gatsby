<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Ian Holden V5 - Gatsby
</h1>
<p>
  This repository hosts the Gatsby site for Ian Holden's professional website.
</p>

## 🚀 Quick start

1. **Install Dependencies**

    Install NPM modules required to run this project.
    ```shell
    npm install
    ```

1. **Point to WordPress** 
   
   Ensure that the site is configured to point to a WordPress site  with GraphQL API enabled. You can do this by opening the _src/config.js_ file and changing the `wordPressURL` variable to point to your WordPress site that is providing the content for the site.

    Secondly, in the _gatsby-config.js_ file, you should change the option for the _gatsby-source-graphql_ plugin and specify the GraphQL endpoint of your WordPress site in the `options.url` part of the config object.

    _(For more information on setting up a WordPress site with a GraphQL endpoint available, visit this repositories corresponding [repository](https://github.com/ianholden123/ianholden-v5-wordpress).)_

2.  **Start developing**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd ianholden-v5-gatsby/
    gatsby develop
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `ianholden-v5-gatsby` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🔧 Build

This project is currently deployed to an S3 bucket which means that it does not sit at the root of it's domain. We need to use a `pathPrefix` variable in the `gatsby-config.js` to specify where our resources can be found when we are ready to build the project. To build this project for production, do the following:

1. **Configure path prefix**
    
    Change the `pathPrefix` value in `gatsby-config.js` to match the URL where your Gatsby site will be hosted.

2. **Run build command**

    Run the following in your terminal:
    ```shell
    gatsby build --prefix-paths
    ```

3. **Publish build files**

    Upload the generated files from your `/build/` directory to your chosen hosting solution (S3, GCS, private web host, etc...)

<!-- ## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default) -->
