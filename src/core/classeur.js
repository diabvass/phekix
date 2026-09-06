import fs from 'fs/promises';
import path from 'path';

export const Classeur = async (categorie, filePath, depotPath) => {
    const fileName = path.basename(filePath);
    console.log(`déplacement du fichier ${fileName}`)

    try {
        const docFin = path.join(depotPath, categorie) // lien dossier categorie
        await fs.mkdir(docFin, { recursive: true }); // dossier

        let finPath = path.join(docFin, fileName)
        const nomFile = path.parse(fileName).name
        const extFile = path.extname(filePath) // extension
        let compte = 1;

        while (true) {
            try {
                await fs.access(finPath);
                finPath = path.join(docFin, `${nomFile}(${compte})${extFile}`) // reconstitue
                compte++;
            } catch {
                break;
            }

        }

        await fs.rename(filePath, finPath) // déplacer
        console.log(`${fileName} déplacé vers : ${depotPath}`);
    } catch (error) {
        console.error(`Erreur lors du déplacement : ${error.message}`)
    }
}

