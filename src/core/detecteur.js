import path from 'path'
import { watch } from "chokidar";
import { Trieur } from './tri.js';

export const Detecteur = async (veillePath, depotPath) => {

    const alarme = watch(veillePath, {
        persistent: true,
        ignored: /(^|[\/\\])\../,
        awaitWriteFinish: true
    });

    // nouveau fichier
    alarme.on('add', async (filePath) => {
        const fileName = path.basename(filePath)
        console.log('nouveau fichier détecté : ', fileName)
        await Trieur(filePath, depotPath) // appel trieur 
    })
}