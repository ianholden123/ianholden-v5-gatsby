<h1 align="center">
  Ian Holden V5 - Gatsby
</h1>
<p>
  This repository hosts the Gatsby site for Ian Holden's professional website: <a href='https://ianholden.co.uk'>https://ianholden.co.uk</a>
</p>

## 📖 Quick start

1. **Install Dependencies**

   Clone this repository and navigate to the directory where it was cloned to.

   Install the NPM modules that are required to run this project.

   ```shell
   npm install
   ```

2. **Start developing**

   Navigate into your new site’s directory and start it up.

   ```shell
   gatsby develop
   ```

3. **Open the source code and start editing!**

   Your site is now running at `http://localhost:8000`!

   _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

   Open the `ianholden-v5-gatsby` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🔧 Building for hosting on a custom directory

If you would like to build and host this project on a custom S3 bucket that does not sit at the root of it's domain, you would need to use a `pathPrefix` variable in the `gatsby-config.js` to specify where our resources can be found when we are ready to build the project. To do this, do the following:

1. **Configure path prefix**

   Change the `pathPrefix` value in `gatsby-config.js` to match the URL where your Gatsby site will be hosted.

2. **Run build command**

   Run the following in your terminal:

   ```shell
   gatsby build --prefix-paths
   ```

## 🚀 Deploy

### Deploy manually

```bash
gatsby build
```

Once you have run `gatsby build`, upload the generated files from your `/build/` directory to your chosen hosting solution (S3, GCS, private web host, etc...).
