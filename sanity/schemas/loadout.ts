import { defineField, defineType } from 'sanity'
import { missonTypeList } from './missionTypeList'

export default defineType({
  name: 'loadout',
  title: 'Loadout',
  type: 'document',
  fields: [
    defineField({
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
        source: 'name',
        maxLength: 96,
        },
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'enemyType',
        title: 'Enemy Type',
        type: 'string',
        options: {
        list: [
            { title: 'Terminids', value: 'terminids' },
            { title: 'Automatons', value: 'automatons' },
            { title: 'All', value: 'All' },
        ],
        },
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'missionType',
        title: 'Mission Type',
        type: 'array',
        of: [{type: 'string', }],
        options: {
        list: missonTypeList
        },
    }),
    defineField({
        name: 'levelRange',
        title: 'Level Range',
        type: 'number',
        options: {
            list: [
            { title: '1-4', value: 1 },
            { title: '5-7', value: 2 },
            { title: '8-9', value: 3 },
            ],
        },
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'playerLoadout',
        title: 'Player Loadouts',
        type: 'array',
        of: [{ type: 'player' }],
        validation: (Rule) => Rule.required(),
    }),
  ],
})