const Database = require('./db');

const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
  
  // await saveOrphanage(db, {
  //   lat: "-31.7400428",
  //   lng: "-52.34271",
  //   name: "Lar de Crianças",
  //   about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
  //   whatsapp: "11997854433",
  //   images: [
  //     "https://images.unsplash.com/photo-1574647258357-e19ec1bcc09c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
  //     "https://images.unsplash.com/photo-1599003037886-f8b50bc290c8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
  //   ].toString(),
  //   instructions: "Venha como se sentir a vontade e e traga muito amor e paciência para dar.",
  //   opening_hours: "Horário de visitas das 8h até 18h",
  //   open_on_weekends: "1"
  // })
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  // consultar um orfanato pelo id
  // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
  // console.log(orphanage)

  // await db.run("DELETE FROM orphanages WHERE id = '2' ");
})