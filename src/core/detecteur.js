import path from 'path'
import { watch } from "chokidar";

export const Detecteur = async (dirPath) => {

    const alarme = watch(dirPath, {
        persistent: true,
        ignored: /(^|[\/\\])\../,
        awaitWriteFinish: true
    });


    // nouveau fichier
    alarme.on('add', async (filePath) => {
        const fileName = path.basename(filePath)
        console.log('nouveau fichier détecté : ', fileName)
    })
}