import path from 'path';
import { Roles } from '../config/roles.js';
import { Classeur } from './classeur.js'

export const Trieur = async (filePath, depotPath) => {
    const extension = path.extname(filePath);
    let type = 'Autres';

    for (const key in Roles) {
        const extensions = Roles[key];
        if (extensions.includes(extension)) {
            type = key;
            break;
        }
    }
    await Classeur(type, filePath, depotPath)

}