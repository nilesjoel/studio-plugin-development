const magic = {
  secret: process.env.MAGIC_SECRET_KEY,
  publishable: process.env.MAGIC_PUBLISHABLE_KEY,
};

module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: env('EMAIL_DEFAULT_FROM'),
          defaultReplyTo: env('EMAIL_DEFAULT_REPLY_TO'),
        },
      },
    },
    
    // ...
  })