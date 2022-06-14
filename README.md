
<div align="center" style="display: flex; justify-content: center; align-items: center">
  <span style="font-weight: bold; font-size: 1.5rem">Togglefly</span>
  <img alt="Lerna" src="https://i.imgur.com/sYxcbCb.png" height="40">
</div>

[//]: # (Togglefly is an Open Source Project that allows you to deploy a Feature Toggle System through AWS technologies such as DynamoDB and Lambda Functions. This project includes those features:)

[//]: # ()
[//]: # ()
[//]: # (- 👌 Almost no configuration)

[//]: # ()
[//]: # (- 🤖 Simple RESTful API integration)

[//]: # ()
[//]: # (- 🚚 Isolated CLI)

[//]: # ()
[//]: # (- ❤️ GUI visualization included)

[//]: # ()
[//]: # (- 😍 Awesome DX inclined framework)

[//]: # ()
[//]: # ()
[//]: # (## Installation and Configuration)

[//]: # ()
[//]: # ()
[//]: # (```shell)

[//]: # ()
[//]: # (npm install -g @togglefly/cli)

[//]: # ()
[//]: # (```)

[//]: # ()
[//]: # ()
[//]: # (After that you can check if everything is working with `togglefly --version` or `tgf --version`.)

[//]: # ()
[//]: # ()
[//]: # (If it is working, then you can create an IAM user with full DynamoDB and Lambda Functions privilegies in your AWS console and set it up locally in your computer.)

[//]: # ()
[//]: # ()
[//]: # (## Usage)

[//]: # ()
[//]: # ()
[//]: # (You can deploy your AWS Lambda Functions with this command:)

[//]: # ()
[//]: # ()
[//]: # (```shell)

[//]: # ()
[//]: # (tgf deploy --region sa-east-1)

[//]: # ()
[//]: # (```)

[//]: # ()
[//]: # ()
[//]: # (If you want to test these features locally, you can launch it through `tgf launch`. If you don't provide the `local` as `true` Togglefly will use your AWS Cloud account. Otherwise, it will run an local instance of DynamoDB so you can test it. )

[//]: # ()
[//]: # ()
[//]: # (```shell)

[//]: # ()
[//]: # (tgf launch --local true)

[//]: # ()
[//]: # (```)

[//]: # ()
[//]: # ()
[//]: # (## Supported API)

[//]: # ()
[//]: # ()
[//]: # (This project supports the following relationships:)

[//]: # ()
[//]: # ()
[//]: # (- Features and Systems relationship )

[//]: # ()
[//]: # (- Features and Allowed Roles relationship )

[//]: # ()
[//]: # (- Users and Roles relationship)

[//]: # ()
[//]: # ()
[//]: # (## Support and Community)

[//]: # ()
[//]: # ()
[//]: # (If this project is useful for you or for your company, please consider supporting our project through sponsorship. Pull Request are welcome. )
