import Panel from '../models/Panel.js';

export const panelResolver = (root, args) => {
  return Panel.findById(args._id).exec()
}

export const allPanelesResolver = async (root, args) => {
  return Panel.find().exec()
}

export const addPanelResolver = (root, args) => {
  const panel = new Panel({ ...args })
  return panel.save()
}

export const updatePanelResolver = async (root, args) => {
  const panel = await (Panel.findById(args._id).exec())
  panel.titulo = args.titulo
  panel.descripcion = args.descripcion

  return panel.save()
}

export const deletePanelResolver = async (root, args) => {
  const panel = await Panel.findById(args._id)

  return panel.delete()
}
