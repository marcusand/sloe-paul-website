# Use Node.js base image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Set environment variable to production
ENV NODE_ENV=production

RUN npm install -E sharp@0.32.6 --ignore-workspace-root-check
ENV NEXT_SHARP_PATH=/app/node_modules/sharp

# Expose the port that Next.js will run on
EXPOSE 3000

# Start the Next.js app
CMD ["node", "server"]

