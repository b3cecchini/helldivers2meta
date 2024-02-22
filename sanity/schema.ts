import { type SchemaTypeDefinition } from 'sanity'
import { schemaTypes } from './schemas/schemaTypes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
}
