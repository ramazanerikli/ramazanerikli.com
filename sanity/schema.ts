import { type SchemaTypeDefinition } from 'sanity'
import { post } from './schemas/post'
import { project } from './schemas/project'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, project],
}
