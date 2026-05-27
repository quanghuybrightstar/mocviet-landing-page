/** GROQ: unique project.tags across all projects. */
export const PROJECT_TAGS_IN_USE_GROQ = `array::unique(*[_type == "project" && defined(tags)].tags[])`;

/** GROQ: unique functionalRooms across all projects. */
export const FUNCTIONAL_ROOMS_IN_USE_GROQ = `array::unique(*[_type == "project" && defined(functionalRooms)].functionalRooms[])`;
