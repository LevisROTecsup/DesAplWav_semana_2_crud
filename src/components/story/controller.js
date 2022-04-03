// Esto va a actuar como si fuera una base de local
// en verdad es un array de objetos

const stories = [
  {
    id: 1,
    name: "Harry Potter",
    author: "J.K. Rowling",
    image:
      "https://16371568440299.jpg",
    description:
      "Harry Potter",
  },
];
/**
 * 
 Vamos a enviarle al cliente el siguiente
 en res podemos el statis res.status(200).json()
  {
    ok: // true || false esto va a indicar y si la peticion es success o error
    data: // Sera el cuerpo de nuestra respuesta esto va a tener un mensaje con los datos o un mensaje de error
  }
 */

// Listar
// METHOD: GET
export const list = (req, res) => {
  // lista los stories

  return res.status(200).json({
    ok: true,
    data: stories,
  });
};


// Crear
// METHOD: POST
export const store = (req, res) => {
  // crea un story
  // note: Recurden que el estado de creacion es 201
  const body = req.body;
  body.id = stories.length + 1;
  stories.push(body);

  return res.status(201).json({
    ok: true,
    data: "Store Success",
  });
};

// Editar
// METHOD: PUT
export const update = (req, res) => {
  const id = Number(req.params.storiesId)
  const index = stories.findIndex(stories => stories.id === id)
  if (index === -1) {
      return res.status(404).send('stories no existe')
  }

  const updatedStories = {
      id: stories[index].id,
      name: req.body.name,
      author: req.body.author,
      image: req.body.image,
      description: req.body.description
  }

  stories[index] = updatedStories
  res.status(200).json({
    ok: true,
    data: "updated",
    stories,
  });
};

// Eliminar
// METHOD: DELETE
export const destroy = (req, res) => {
  const id = Number(req.params.storiesId);
  const index = stories.findIndex(stories => stories.id === id)
  //const index = id-1;
    if (index === -1) {
      return res.status(404).send('Story no encontrado')
    }

  stories.splice(index, 1);
  res.status(200).json({
    ok: true,
    data: "Story eliminado",
    stories,
  });
};
