import fs from 'fs/promises';
import path from 'path';

export const Classeur = async (categorie, filePath, destPath) => {
    const fileName = path.basename(filePath);
    console.log(`déplacement du fichier ${fileName}`)

    try {
        const docFin = path.join(destPath, categorie)
        const finPath = path.join(docFin, fileName)

        await fs.mkdir(docFin, { recursive: true }); // dossier
        await fs.rename(filePath, finPath) // déplacer
        console.log(`${fileName} déplacé vers : ${destPath}`);
    } catch (error) {
        console.error(`Erreur lors du déplacement : ${error.message}`)
    }
}

