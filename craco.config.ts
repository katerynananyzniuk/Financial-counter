module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "src/common/core/_variables.scss";
        `,
      },
    },
  },
  typescript: {
    enableTypeChecking: true /* (default value) */,
  },
};

export {};