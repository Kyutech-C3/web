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
  const createdAt = blog.published_at
    ? new Date(blog.created_at) < new Date(blog.published_at)
      ? blog.published_at
      : blog.created_at
    : blog.created_at
  const updatedAt = blog.published_at
    ? new Date(blog.updated_at) < new Date(blog.published_at)
      ? blog.published_at
      : blog.updated_at
    : blog.updated_at

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
      createdAt,
      updatedAt,
    },
  }
}
