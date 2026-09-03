import path from "path";
import os from 'os'
import env from 'dotenv'; env.config();
import { INFOS_APP } from "./config/roles.js";
import { Detecteur } from "./core/detecteur.js";

const NOM_APP = INFOS_APP.NOM_APP
const DOSSIER_VEILLE = INFOS_APP.DOSSIER_VEILLE
const dirPath = path.join(os.homedir(), DOSSIER_VEILLE)

console.log(`${NOM_APP} en écoute sur ${dirPath}`)

Detecteur(dirPath); // top