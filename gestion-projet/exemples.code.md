# Exemples de code

## Middleware `express.static()` TRÈS simplifié.

```js
app.use(async (req, res, next) => {
    // Importer le module natif de node pour manipuler les fichiers sur sa machine.
    const fsp = require("fs/promises");
    // Importer le module natif de node pour manipuler les chemins de fichier.
    const path = require("path");
    //Pas besoin de ce middleware, c'est juste pour l'exemple.
    return next();
    const public_path = path.join(__dirname, "../", "public");
    const requestedPath = req.path;


    //On lit le contenu du répertoire public
    const publicDirectoryContent = await fsp.readdir(public_path);

    //On récupère le fichier qui est demandé dans la requête
    const requestedFileName = path.basename(req.originalUrl);

    //On vérifié si le fichier demandé existe dans le répertoire public
    if(publicDirectoryContent.includes(requestedFileName)){

        //On prévient le navigateur que ce qu'il va reçevoir est un fichier de type css
        res.set("Content-Type", "text/css");
        //On envoie le fichier trouvé

        res.sendFile(path.join(public_path, requestedFileName));
    } else {
        next();
    }
});
```