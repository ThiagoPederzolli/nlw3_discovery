const Database = require('./db');

const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
  
  await saveOrphanage(db, {
    lat: "-31.7700428",
    lng: "-52.35271",
    name: "Lar de Meninas",
    about: "Presta assistência a meninas de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "11966856529",
    images: [
      "https://images.unsplash.com/photo-1574647258357-e19ec1bcc09c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1599003037886-f8b50bc290c8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),
    instructions: "Ligue antes para confirmar",
    opening_hours: "Horário de visitas das 8h até 17h",
    open_on_weekends: "0"
  })
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  // consultar um orfanato pelo id
  // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
  // console.log(orphanage)

  // await db.run("DELETE FROM orphanages WHERE id = '3' ");
})