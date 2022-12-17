- docker-compose up -d

pgadmin: `http://localhost:81`



`migration file create`

- `npx typeorm migration:create -n CreateItem`

- マイグレーションファイルをコンパイルする必要があるが、アプリケーションを起動すれば自動的にコンパイルさせる

- `npx typeorm migration:run`
