# 🚀 Togglefly

[//]: # (Togglefly is an Open Source Project that allows you to deploy a Feature Toggle System through AWS technologies such as DynamoDB and Lambda Functions. This project includes those features:)

[//]: # ()
[//]: # (- 👌 Almost any configuration)

[//]: # (- 🤖 Simple RESTfull API integration)

[//]: # (- 🚚 Isolated CLI)

[//]: # (- ❤️ GUI visualization included)

[//]: # (- 😍 Awesome DX inclined framework)

[//]: # ()
[//]: # (## Instalation and Configuration)

[//]: # ()
[//]: # (```shell)

[//]: # (npm install -g @togglefly/cli)

[//]: # (```)

[//]: # ()
[//]: # (After that you can check if everyting is working with `togglefly --version` or `tgf --version`.)

[//]: # ()
[//]: # (If it is working, then you can create an IAM user with full DynamoDB and Lambda Functions privileges in your AWS console and configure it locally in your computer.)

[//]: # ()
[//]: # (## Usage)

[//]: # ()
[//]: # (You can deploy your AWS Lambda Functions with this command:)

[//]: # ()
[//]: # (```shell)

[//]: # (tgf deploy --region sa-east-1)

[//]: # (```)

[//]: # ()
[//]: # (If you wants to test those features locally, you can lunch it through `tgf lunch`. If you don't provide the `local` as `true` Togglefly will use your AWS Cloud account. Otherwise, it will run an local instance of DynamoDB so you can test it. )

[//]: # ()
[//]: # (```shell)

[//]: # (tgf lunch --local true)

[//]: # (```)

[//]: # ()
[//]: # (## Supported API)

[//]: # ()
[//]: # (This project supports those following relationships:)

[//]: # ()
[//]: # (- Features and Systems relationship )

[//]: # (- Features and Allowed Roles relationship )

[//]: # (- Users and Roles relationship)

[//]: # ()
[//]: # (## Support and Community)

[//]: # ()
[//]: # (If this project is useful for you or for your company, please consider supporting our project through sponsorship. Pull Request are welcome. )
