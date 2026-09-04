import fs from 'fs/promises';
import path from 'path';

export const Classeur = async (filePath, destPath) => {
    const fileName = path.basename(filePath);
    console.log(`déplacement du fichier ${fileName}`)

    try {
        await fs.mkdir(destPath, { recursive: true }); // dossier
        await fs.rename(filePath, destPath) // déplacer
        console.log(`${fileName} déplacé vers : ${destPath}`);
    } catch (error) {
        console.error(`Erreur lors du déplacement : ${error.message}`)
    }
}

