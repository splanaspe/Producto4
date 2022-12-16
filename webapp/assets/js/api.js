const API_URL = '/graphql'

window.getAllPanels = () => fetch(API_URL, {
  "headers": {
    "accept": "*/*",
    "accept-language": "en,es;q=0.9,ca;q=0.8,tr;q=0.7",
    "content-type": "application/json",
    "sec-ch-ua": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"query\":\"                       \\n              \\n                               \\n                                        \\n       \\n         \\n            \\n                 \\n     \\n            \\n                             \\n                                       \\n                  \\n                                 \\n                              \\n                                       \\n     \\n       \\n          \\n               \\n          \\n                \\n             \\n   \\n \\n\\n                   \\n            \\n                             \\n                                      \\n     \\n       \\n          \\n               \\n   \\n \\n\\n                   \\n            \\n                             \\n                                       \\n                 \\n                                 \\n                              \\n                                       \\n     \\n       \\n          \\n               \\n          \\n                \\n             \\n   \\n \\n\\nquery GetAllPanels {\\n  allPaneles {\\n    _id\\n    titulo\\n    descripcion\\n  }\\n}\\n\\n                    \\n             \\n       \\n          \\n               \\n          \\n                \\n             \\n   \\n \\n\\n                    \\n                                           \\n       \\n          \\n               \\n   \\n \\n\\n                    \\n                                           \\n       \\n          \\n               \\n          \\n                \\n             \\n   \\n \",\"variables\":{\"titulo\":null,\"descripcion\":null,\"estado\":null,\"fechaInicio\":null,\"fechaFin\":null,\"idPanel\":null},\"operationName\":\"GetAllPanels\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
});

window.getAllTareas = () => fetch(API_URL, {
  "headers": {
    "accept": "*/*",
    "accept-language": "en,es;q=0.9,ca;q=0.8,tr;q=0.7",
    "content-type": "application/json",
    "sec-ch-ua": "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"query\":\"                       \\n              \\n                               \\n                                        \\n       \\n         \\n            \\n                 \\n     \\n            \\n                             \\n                                       \\n                  \\n                                 \\n                              \\n                                       \\n     \\n       \\n          \\n               \\n          \\n                \\n             \\n   \\n \\n\\n                   \\n            \\n                             \\n                                      \\n     \\n       \\n          \\n               \\n   \\n \\n\\n                   \\n            \\n                             \\n                                       \\n                 \\n                                 \\n                              \\n                                       \\n     \\n       \\n          \\n               \\n          \\n                \\n             \\n   \\n \\n\\n                      \\n               \\n                                    \\n                                \\n                                         \\n     \\n       \\n   \\n \\n\\n                      \\n               \\n                                    \\n                                \\n                                         \\n     \\n       \\n          \\n               \\n   \\n \\n\\n                      \\n               \\n                                   \\n     \\n       \\n   \\n \\n\\n                      \\n               \\n                                   \\n     \\n       \\n   \\n \\n\\n                    \\n              \\n       \\n          \\n               \\n   \\n \\n\\nquery GetAllTareas {\\n  allTareas {\\n    _id\\n    titulo\\n    descripcion\\n    estado\\n    fecha_inicio\\n    fecha_fin\\n    panelId\\n  }\\n}\\n\\n                    \\n                                           \\n       \\n          \\n               \\n   \\n \\n\\n                    \\n                                           \\n       \\n          \\n               \\n          \\n                \\n             \\n   \\n \",\"variables\":{\"titulo\":null,\"descripcion\":null,\"estado\":null,\"fechaInicio\":null,\"fechaFin\":null,\"idPanel\":null},\"operationName\":\"GetAllTareas\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
});
