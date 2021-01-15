<h1 align="center">
  Ian Holden V5 - Gatsby
</h1>
<p>
  This repository hosts the Gatsby site for Ian Holden's professional website.
</p>

## 📖 Quick start

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

    _Note: You must ensure that your connected WordPress site is available. If you are connecting to a local WordPress instance, this must be accessible via a localhost link._


3.  **Open the source code and start editing!**

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

### Deploy from CLI

⚠️ You must have [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html) installed and you must have a user profile configured in your `~/.aws/credentials` file. This profile requires adequate permissions to upload and delete files from your S3 bucket.

⚠️ The `./scripts/build-and-upload-to-s3.sh` script must have permissions to execute. Change these permissions like so: 

```
chmod +x ./scripts/build-and-upload-to-s3.sh
```


To build the project and upload it to your S3 bucket, run the following command:
```bash
npm run build-and-upload-to-s3
```

## 🔗 Dependencies

### Prism

This project uses Prism via the `react-syntax-highlighter` package. In order to use syntax highlighting inside of code blocks, you must do the following:

1. Use the code block in the Gutenberg editor inside of WordPress.
2. On this code block, enter the Advanced Block options tab on the right panel of the Gutenberg editor and add a class that uses one of the following language strings defined in the [Prism docs](https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/HEAD/AVAILABLE_LANGUAGES_PRISM.MD).