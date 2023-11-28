export function formatToybox(blog) {
  const tags = blog.tags.map((tag) => {
    return {
      fields: {
        name: tag.name,
      },
      sys: {
        id: tag.id,
      },
    }
  })
  return {
    fields: {
      body: blog.body_text,
      digest: blog.body_text,
      tags,
      thumbnail: {
        fields: {
          file: {
            url: blog.thumbnail.url,
          },
        },
      },
      title: blog.title,
      user: [
        {
          fields: {
            name: blog.user.name,
            icon: {
              fields: {
                file: {
                  url: blog.user.avatar_url,
                },
              },
            },
          },
          sys: {
            id: blog.user.id,
          },
        },
      ],
    },
    sys: {
      id: blog.id,
      createdAt: blog.created_at,
      updatedAt: blog.updated_at,
    },
  }
}
