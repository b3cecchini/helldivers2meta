import { defineField, defineType } from 'sanity'

export default defineType({
    name: "player",
    title: "Player",
    type: "object",
    fields: [
        defineField({
            name: 'strategems',
            title: 'Strategems',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'strategem' } }],
        }),
        defineField({
            name: 'primary',
            title: 'Primary',
            type: 'reference', 
            to: { type: 'primary' },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'secondary',
            title: 'Secondary',
            type: 'reference', 
            to: { type: 'secondary' },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'booster',
            title: 'Booster',
            type: 'reference', 
            to: { type: 'booster' },
        }),
        defineField({
            name: 'armorType',
            title: 'Armor Type',
            type: 'reference', 
            to: { type: 'armorType' },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'armorModifier',
            title: 'Armor Modifier',
            type: 'reference', 
            to: { type: 'armorModifier' },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'grenade',
            title: 'Grenade',
            type: 'reference', 
            to: { type: 'grenade' },
            validation: (Rule) => Rule.required(),
        }),
    ]
})