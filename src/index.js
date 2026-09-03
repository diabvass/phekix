import path from "path";
import os from 'os'
import env from 'dotenv'; env.config();
import { Detecteur } from "./core/detecteur.js";

const nom = process.env.NOM || 'PhekiX'
const dirPath = path.join(os.homedir(), process.env.PATH_WATCH) || path.join(os.homedir(), 'Downloads') // doc surveillé
console.log(`${nom} en écoute sur ${dirPath}`)

Detecteur(dirPath); // top