import path from "path";
import { loadFilesSync } from "@graphql-tools/load-files"
import {mergeResolvers} from "@graphql-tools/merge"

const filesPath = path.join(__dirname,'./**/resolver.ts');
const resolversArray = loadFilesSync(filesPath);

const resolverBase = {
    Query: {
        hello: ()=> 'world'
    },
};

const resolvers = mergeResolvers([...resolversArray, resolverBase]);

export default resolvers;