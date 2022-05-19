# Pilecubes

helpfull vscode extensions:
-Github pull requests and issues
-EsLint
-vscode-icons
-visual studio intellicode
-GitLens - Git supercharged


start the project with dev env
npm run start:dev

To connect to db make sure you have microsoft sql server
and user authentication through sql server authentication (varibales located in .env.stage.dev)


nestjs/cli:

create module --> nest g module tasks  //(generate)
create controller --> nest g controller tasks --no-spec //with no spec
create service --> nest g service tasks --no-spec

Database migrations: nest/cli

npm run typeorm:migrate -n <migration name>
npm run typeorm:run
the configuration of nestjs/cli is located in ormconfig.ts

minify eail using:
https://www.willpeavy.com/tools/minifier/
https://www.toptal.com/developers/html-minifier/
then replace " with '

https://docs.aws.amazon.com/code-samples/latest/catalog/typescript-s3-controller.ts.html //bucket aws storage
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/s3-example-creating-buckets.html

https://decembersoft.com/posts/typescript-vs-csharp-linq/#select

https://mfi.engineering/extensible-and-secure-authorization-with-nestjs-and-casl-c6f6d1ceefd5 (RBAC)

token: crypto.randomBytes(32).toString("hex") user-id/token


git checkout master
git pull origin master
git merge test
git push origin master

in case there is any changes and pull required 
git stash
git stash pop

https://github.com/audiBookning/sample-nestjs-stripe/blob/master/src/stripe-checkout/stripe-checkout.service.ts
https://www.youtube.com/watch?v=1r-F3FIONl8 //stripe video

https://stripe.com/docs/api/subscriptions/update (retrieve customer subscription to prevent him from sub more than once)

stripe webhook listner:
run stripe cli --> start stripe.exe
stripe login
stripe listen --forward-to localhost:4242/webhook

then open new cmd run stripe to test any response
stripe trigger payment_intent.succeeded

git rebase --continue
git commit -m "Commit message"



https://wajihaabid.medium.com/downloading-data-in-excel-format-with-nest-js-4a0a859bf430