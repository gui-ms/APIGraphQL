import express from "express"; 
import router from "infra/http/rest";
import { serverGraphQL } from "infra/http/graphql/server";

const app = express();

app.use('/api', router)
app.use('/graphql',serverGraphQL)

app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})
 
