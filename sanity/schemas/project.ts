import { Rule } from "sanity";

export const project = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Required")
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: Rule) => Rule.max(200).error("Max 250 characters")
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string"
        },
      ]
    },
    {
      name: "link",
      title: "Link",
      type: "string",
    },
    {
      name: "featured",
      title: "Featured",
      type: "boolean",
    },
  ]
}