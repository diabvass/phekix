import path from "path";
import os from 'os'
import env from 'dotenv'; env.config();
import { INFOS_APP } from "./config/roles.js";
import { Detecteur } from "./core/detecteur.js";

const NOM_APP = INFOS_APP.NOM_APP
const DOSSIER_VEILLE = INFOS_APP.DOSSIER_VEILLE
const DOSSIER_DEPOT = INFOS_APP.DOSSIER_DEPOT

const veillePath = path.join(os.homedir(), DOSSIER_VEILLE)
const depotPath = path.join(os.homedir(),DOSSIER_DEPOT)

console.log(`${NOM_APP} en écoute sur ${veillePath}`)
console.log('veillePath', veillePath)
console.log('depotPath', depotPath)

Detecteur(veillePath, depotPath); // top