export const featureDTO = (feature) => {
  return {
    id: feature.pk,
    allowedRoles: feature.allowedRoles,
    systems: feature.systems,
    name: feature.name,
    description: feature.description,
  };
}
