module.exports = () => {
    const data = { posts: [], category: [] };
    const title = [
        "Des bourses pour favoriser la mobilité étudiante",
        "Neuf projets pour répondre aux besoins de formation en intelligence artificielle",
        "Offre d’emploi de conseiller ou conseillère en communication de l’Observatoire sur la réussite en enseignement supérieur"
    ];
    const content = [
        "Le Pôle montréalais d’enseignement supérieur en intelligence artificielle (PIA) annonce le lancement de neuf projets en intelligence artificielle.",
        "Le ministère de l’Enseignement supérieur annonce la création du programme de bourses Parcours, destiné à encourager la mobilité des étudiant·es du...",
        "Joignez l’équipe du CAPRES..."
    ];

    // Create 5 Category
    for (let i = 0; i < 5; i++) {
        data.category.push({
            id: i,
            name: `Catégorie ${String.fromCharCode(97 + i).toUpperCase()}`
        })
    };

    // Create 100 posts
    for (let i = 0; i < 100; i++) {
        const catNum = getRandomInt(5);
        data.posts.push(
            { 
                id: i,
                title: title[i % 3],
                intro: content[i % 3],
                date : randomDate(new Date(2012, 0, 1), new Date()),
                thumbnail : `https://picsum.photos/320/200?random=${i}`,
                category : {
                    "id": catNum,
                    "name" : `Catégorie ${String.fromCharCode(97 + catNum).toUpperCase()}`
                },
            }
        );
    }

    return data;
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  