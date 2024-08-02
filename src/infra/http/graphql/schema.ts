import path from "path";
import { loadFilesSync } from "@graphql-tools/load-files"
import {mergeTypeDefs} from "@graphql-tools/merge"

const filesPath = path.join(__dirname,'./**/*.graphql');
const typesArray = loadFilesSync(filesPath);

const typeDefsBase = `
type Query {
            hello: String!
        }
            `

const typeDefs = mergeTypeDefs([...typesArray, typeDefsBase])

export default typeDefs;